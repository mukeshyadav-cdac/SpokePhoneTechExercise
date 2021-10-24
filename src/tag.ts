
export default  class Tag {
  data: string
  open: boolean
  textTag: string
  regex: RegExp = /<\/?[A-Z]>/g

  constructor(tag: string) {
    this.data = tag;
    this.open = tag.indexOf("/") > -1 ? false : true;
    this.textTag = this.extractText();
  }

  extractText() {
    if(this.textTag) {
      return this.textTag
    } else {
      let length = this.data.length;
      if(this.open) {
        return this.data.substring(1, length-1);
      } else {
        return this.data.substring(2, length-1);
      }
    }
  }


}