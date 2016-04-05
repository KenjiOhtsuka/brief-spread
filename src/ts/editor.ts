/// <reference path="sheet.ts" />

class Editor {
  private sheets = Array<Sheet>();

  addNewSheet(): boolean {
    this.addSheet(new Sheet());
    return true;
  }

  load(file): boolean {
    data = this.convertFileToData(file);
    var sheet = new Sheet();
    sheet.setData(data);
    this.addSheet(sheet);
    return true;
  }

  addSheet(sheet: Sheet) {
    this.sheets.push(sheet);
    return this;
  }

  private convertFileToData(file) {
    // file : file object
    return [];
  }
}
