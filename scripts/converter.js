const YAML = require('json2yaml');
const a = require('./testCases.json');

const c = a.map(x => {
  const r = {
    ...x,
    declensions: x.declensions && {
      singular: Object.fromEntries(Object.entries(x.declensions).map(([key, value]) => [key, value[0]])),
      plural:  Object.fromEntries(Object.entries(x.declensions).map(([key, value]) => [key, value[1]]))
    }
  };

  if (r.declensions && Object.values(r.declensions.singular).every(x => x === null)) {
    delete r.declensions.singular;
  }

  if (r.declensions && Object.values(r.declensions.plural).every(x => x === null)) {
    delete r.declensions.plural;
  }

  return r;
});

const files = c.reduce((acc, x) => {
  acc[x.id] = acc[x.id] || [];
  acc[x.id].push(x);

  return acc;
}, {});

Object.entries(files).forEach(([key, value]) => {
  const filename = key.padStart(6, '0') + '_' + value[0].word.normalize('NFD').replace(/[^\x00-\x7F]/g, "").replace(/\s/g, '_') + '.yml';
  require('fs').writeFileSync(filename, YAML.stringify(value.length === 1 ? value[0] : value));
});

