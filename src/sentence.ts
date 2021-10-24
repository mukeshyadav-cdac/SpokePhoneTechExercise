import Tag from './tag';
import Stack from './stack';

export const TAG_REGEX: RegExp = /<\/?[A-Z]>/g;

export default class Sentence {

  text: string
  regex: RegExp
  message: string

  constructor(text: string) {
    this.regex = TAG_REGEX;
    this.text = text;
    this.message = this.successMessage();
  }

  validate(): string {
    let tags = this.text.match(this.regex);

    if(tags) {
      let tokens = new Stack([]);

      for(let token of tags){
        let tag = new Tag(token);

        if(tokens.isEmpty()) {
          if(tag.open) {
            tokens.push(tag);
          } else {
            this.message = this.startTagMissingError(tag);
            break;
          }
        } else if(tag.open) {
          tokens.push(tag)
        } else {
          let lastTag = tokens.peek();

          if( lastTag.textTag == tag.textTag ) {
            tokens.pop();
          } else {
            this.message = this.pairMisMatchedError(lastTag, tag);
            break;
          }
        }
      }

      if((this.message == this.successMessage()) && !tokens.isEmpty()) {
        let lastTag = tokens.peek();
        this.message = this.endTagMissingError(lastTag);
      }
    } else {
      this.message = this.invalidParagraph();
    }

    return this.message;
  }

  successMessage(): string {
    return 'Correctly tagged paragraph';
  }

  invalidParagraph(): string {
    return 'Invalid paragraph';
  }

  pairMisMatchedError(lastTag: Tag, tag: Tag): string {
    return `Expected </${lastTag.textTag}> found </${tag.textTag}>`;
  }

  endTagMissingError(lastTag: Tag): string {
    return `Expected </${lastTag.textTag}> found #`
  }

  startTagMissingError(tag: Tag): string {
    return `Expected # found </${tag.textTag}>`;
  }

}