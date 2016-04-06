/// <reference path="typings/browser/ambient/jquery-handsontable/index.d.ts" />
/// <reference path="editor.ts" />

var data = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
];

const settingPane = document.getElementById('setting_pane');
const container = document.getElementById('main_pane');

new Handsontable(container, {
  data: data,
  rowHeaders: true,
  colHeaders: true,
  minSpareRows: 1,
  minSpareCols: 1
});


const editor = new Editor(container, settingPane);
