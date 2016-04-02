class Sheet {
  private data;
  private container;

  setData(data) {
    this.data = data;
    return this;
  }

  getData() {
    return this.data;
  }

  setContainer(container) {
    this.container = container;
    return this;
  }
}
