import { dictionaryUrl } from 'consts';
import * as fs from 'fs';
import _ from 'lodash';
import request from 'request';
import { conjugationVerb } from 'legacy/conjugationVerb';
import { declensionAdjective } from 'legacy/declensionAdjective';
import { declensionNoun, declensionNounFlat } from 'legacy/declensionNoun';
import { declensionNumeral } from 'legacy/declensionNumeral';
import { declensionPronoun } from 'legacy/declensionPronoun';
import {
    getGender, getNumeralType,
    getPartOfSpeech, getPronounType,
    isAnimated, isIndeclinable,
    isPlural, isSingular,
} from 'utils/wordDetails';

const testCases = {
    noun: [],
    verb: [],
    adjective: [],
    pronoun: [],
    numeral: [],
};

request(dictionaryUrl, (err, data) => {
    const splittedBody = data.body.replace(/#/g, '').split('\n').filter(Boolean).slice(1);
    splittedBody.forEach((line, i) => {
        const [ id, wordOrig, add, detailsOrig ] = line.split('\t').slice(0, 4).map(s => s.trim());
        const words = wordOrig.split(',').map((e) => e.trim());
        let details = detailsOrig;
        words.forEach((word) => {
            switch (getPartOfSpeech(details)) {
                case 'noun':
                    const genders = getGender(details) === 'masculineOrFeminine'
                      ? ['masculine', 'feminine']
                      : [getGender(details)];

                    genders.forEach(gender => {
                      const testCase = {
                        id,
                        word,
                        meta: _.omitBy({
                          irregularity: add,
                          gender,
                          animated: isAnimated(details),
                          singular: isSingular(details),
                          plural: isPlural(details),
                          indeclinable: isIndeclinable(details),
                        }, v => !v),
                        declensions: null as any,
                      };
                      testCase.declensions = declensionNoun(
                          testCase.word,
                          testCase.meta.irregularity || '',
                          testCase.meta.gender,
                          testCase.meta.animated || false,
                          testCase.meta.plural || false,
                          testCase.meta.singular || false,
                          testCase.meta.indeclinable || false
                      ),

                      testCases.noun.push(testCase);
                    });
                    break;
            }
            if (i + 1 === splittedBody.length) {
                fs.writeFileSync('./tests/testCases.json', JSON.stringify(testCases, null, 2));
            }
        });
    });
});
