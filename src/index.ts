import * as fs from 'fs';

import {
  getTitle,
  summary,
  well,
  lessWell,
  confused,
  actions,
  notes,
  parser,
  getLists,
} from './templates';

const [wellList, lessWellList, suggestionList, actionsList] = getLists();

const md = parser([
  { h1: getTitle() },
  { p: summary },
  { h2: well },
  { ul: wellList },
  { h2: lessWell },
  { ul: lessWellList },
  { h2: confused },
  { ul: suggestionList },
  { h2: actions },
  { ul: actionsList },
  { notes: notes },
]);

fs.writeFileSync('./report.md', md);
