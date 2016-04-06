/// <reference path="sheet.ts" />

class Editor {
  private sheets = Array<Sheet>();
  private dispSetting: boolean = false;
  private mainPane;
  private settingPane;

  constructor(mainPane, settingPane) {
    this.mainPane = mainPane
    this.settingPane = settingPane;
  }

  loadTsv() {
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      const json = JSON.parse(fileReader.result);
    };
    fileReader.onerror = function (e) {
      alert('failed to read the file');
    };
    const file = settingPane.getElementById('tsv_file').files[0];
    fileReader.readAsText(file);

    if (this.dispSetting) this.toggleSetting();
  }

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

  toggleSetting() {
    if (this.dispSetting) {
      settingPane.style.display = 'none';
      this.dispSetting = false;
      this.mainPane.style.display = 'block';
      return;
    }
    this.mainPane.style.display = 'none';
    settingPane.style.display = 'block';
    this.dispSetting = true;
  }

  private convertFileToData(file) {
    return [];
  }
}
