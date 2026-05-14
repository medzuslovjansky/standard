type NodeSpan = { node: Text; start: number; end: number };

export type DocIndex = { text: string; map: NodeSpan[]; root: Element };

const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'CODE', 'PRE', 'NOSCRIPT', 'TEMPLATE']);

export function getScopeRoot(): Element | null {
  return document.querySelector('article') ?? document.querySelector('main');
}

export function buildIndex(root: Element): DocIndex {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      let p: Node | null = node.parentNode;
      while (p && p !== root.parentNode) {
        if (p instanceof Element) {
          if (SKIP_TAGS.has(p.tagName)) return NodeFilter.FILTER_REJECT;
          if (p.classList.contains('fw-skip')) return NodeFilter.FILTER_REJECT;
        }
        p = p.parentNode;
      }
      return node.nodeValue && node.nodeValue.length > 0
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  const map: NodeSpan[] = [];
  let text = '';
  let n: Node | null;
  while ((n = walker.nextNode())) {
    const t = n as Text;
    const s = t.data;
    map.push({ node: t, start: text.length, end: text.length + s.length });
    text += s;
  }
  return { text, map, root };
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function flex(s: string): string {
  return s
    .split(/(\s+)/)
    .map((p) => (/\s+/.test(p) ? '\\s+' : escapeRegex(p)))
    .join('');
}

function rangeFromFlat(map: NodeSpan[], start: number, end: number): Range | null {
  let sNode: Text | null = null;
  let sOff = 0;
  let eNode: Text | null = null;
  let eOff = 0;
  for (const e of map) {
    if (sNode == null && start >= e.start && start < e.end) {
      sNode = e.node;
      sOff = start - e.start;
    }
    if (eNode == null && end > e.start && end <= e.end) {
      eNode = e.node;
      eOff = end - e.start;
    }
    if (sNode && eNode) break;
  }
  if (!sNode || !eNode) return null;
  try {
    const r = document.createRange();
    r.setStart(sNode, sOff);
    r.setEnd(eNode, eOff);
    return r;
  } catch {
    return null;
  }
}

export function flatOffsetForPoint(map: NodeSpan[], node: Node, offset: number): number | null {
  for (const e of map) {
    if (e.node === node) return e.start + offset;
  }
  return null;
}

export function findRange(
  index: DocIndex,
  prefix: string,
  exact: string,
  suffix: string,
): Range | null {
  if (!exact) return null;
  const { text, map } = index;
  const rx = new RegExp(flex(exact), 'g');
  let best: { start: number; end: number; score: number } | null = null;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(text))) {
    const start = m.index;
    const end = start + m[0].length;
    let score = 1;
    if (prefix) {
      const pre = text.slice(Math.max(0, start - prefix.length * 3), start);
      if (new RegExp(flex(prefix) + '$').test(pre)) score += prefix.length;
    }
    if (suffix) {
      const post = text.slice(end, end + suffix.length * 3);
      if (new RegExp('^' + flex(suffix)).test(post)) score += suffix.length;
    }
    if (!best || score > best.score) best = { start, end, score };
    if (m.index === rx.lastIndex) rx.lastIndex++;
  }
  if (!best) return null;
  return rangeFromFlat(map, best.start, best.end);
}

export function highlightRange(
  range: Range,
  className: string,
  dataset: Record<string, string>,
  onClick?: (ev: MouseEvent) => void,
): HTMLElement[] {
  const marks: HTMLElement[] = [];
  const ancestor =
    range.commonAncestorContainer instanceof Element
      ? range.commonAncestorContainer
      : range.commonAncestorContainer.parentElement;
  if (!ancestor) return marks;

  const targets: { node: Text; from: number; to: number }[] = [];
  const walker = document.createTreeWalker(ancestor, NodeFilter.SHOW_TEXT, null);
  let n: Node | null;
  while ((n = walker.nextNode())) {
    if (!range.intersectsNode(n)) continue;
    const t = n as Text;
    const len = t.data.length;
    const from = n === range.startContainer ? range.startOffset : 0;
    const to = n === range.endContainer ? range.endOffset : len;
    if (from < to) targets.push({ node: t, from, to });
  }

  for (let i = targets.length - 1; i >= 0; i--) {
    const { node, from, to } = targets[i];
    const parent = node.parentNode;
    if (!parent) continue;
    const before = node.data.slice(0, from);
    const middle = node.data.slice(from, to);
    const after = node.data.slice(to);
    if (!middle) continue;

    const mark = document.createElement('mark');
    mark.className = className;
    for (const [k, v] of Object.entries(dataset)) mark.dataset[k] = v;
    mark.textContent = middle;
    if (onClick) mark.addEventListener('click', onClick);

    if (after) parent.insertBefore(document.createTextNode(after), node.nextSibling);
    parent.insertBefore(mark, node.nextSibling);
    if (before) node.data = before;
    else parent.removeChild(node);
    marks.push(mark);
  }
  return marks;
}

export function findHeadingId(node: Node | null): string | null {
  let el: Element | null =
    node instanceof Element ? node : node?.parentElement ?? null;
  while (el) {
    let sib = el.previousElementSibling;
    while (sib) {
      if (/^H[1-6]$/.test(sib.tagName) && sib.id) return sib.id;
      sib = sib.previousElementSibling;
    }
    el = el.parentElement;
  }
  return null;
}
