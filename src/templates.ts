import * as json2md from 'json2md';
import * as _ from 'lodash';
import * as fs from 'fs';

export const title = '七月 Retro 活动（2017/07/28）';
export const summary = '本次 Retro，我们依然采用了 Well、Less well、Confused，三个维度来回顾过去一个月团队内发生的变化。整个过程，感谢大家的热情积极，最后也提出了很多不错的 Actions。';
export const well = 'Well';
export const lessWell = 'Less well';
export const confused = 'Confused';
export const actions = 'Actions';
export const notes = [
  'PS：我们会在下次 Retro，先过一遍这次的 Actions 执行情况，请知悉。',
  '有任何问题，请随时与我联系，感谢。',
];

json2md.converters.notes = (input, json2md) => {
  if (_.isString(input)) {
    return `**${input}**`;
  }
  if (_.isArray(input)) {
    return json2md({ p: _.map(input, item => `**${item}**`) });
  }
  return null;
};

export const parser = json2md;

export const getLists = () => {
  const records = fs.readFileSync('./records.txt', 'utf-8');
  return _.chain(records)
          .split('###')
          .map(item => item.trim())
          .map(item => item.split('\n'))
          .value();
};