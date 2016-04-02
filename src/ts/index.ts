/// <reference path="typings/browser/ambient/jquery-handsontable/index.d.ts" />

var data = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
];

const container = document.getElementById('main_pane');

new Handsontable(container, {
  data: data,
  rowHeaders: true,
  colHeaders: true
});
