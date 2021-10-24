import Tag from './tag';

export default class Stack {

  data: Tag[];
  top: number;

  constructor(tags: Tag[] = []){
    this.data = tags;
    this.top = tags.length;
  }

  push(tag:Tag) {
    this.data[this.top] = tag;
    this.top = this.top + 1;
  }

  length() {
    return this.top;
  }

  peek() {
    return this.data[this.top -1 ];
  }

  isEmpty() {
    return this.top === 0;
  }

  pop() {
    this.top = this.top -1;
    return this.data.pop();
  }
}

