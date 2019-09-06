import * as fs from 'fs';

import { actions, getLists, getTitle, keep, notes, parser, reduce, start, stop, summary, } from './templates';

const [startList, keepList, reduceList, stopList, actionsList] = getLists();

const md = parser([
  { h1: getTitle() },
  { p: summary },
  { h2: start },
  { ul: startList },
  { h2: keep },
  { ul: keepList },
  { h2: reduce },
  { ul: reduceList },
  { h2: stop },
  { ul: stopList },
  { h2: actions },
  { ul: actionsList },
  { notes: notes },
]);

fs.writeFileSync('./report.md', md);
