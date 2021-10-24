
import Stack from "../src/stack";
import Tag from "../src/tag";
import Sentence, {TAG_REGEX} from "../src/sentence";

describe("Test Sentence", () => {
  test('it should have default values.', () => {
    let invalidText = "Invalid Text";

    let sentence = new Sentence(invalidText);
    expect(sentence.text).toBe(invalidText);
    expect(sentence.regex).toBe(TAG_REGEX);
    expect(sentence.message).toBe(sentence.successMessage());
  });

  test('it should validate valid paragraph', () => {
    let validParagraph1 = "The following text<C><B>is centred and in boldface</B></C>";
    let validParagraph2 = "<B>This <g>is <B>boldface</B> in <<*> a</B> </6> <<d>sentence";
    let sentence1 = new Sentence(validParagraph1);
    sentence1.validate()
    expect(sentence1.message).toBe(sentence1.successMessage());

    let sentence2 = new Sentence(validParagraph2);
    sentence2.validate();
    expect(sentence2.message).toBe(sentence2.successMessage());
  });

  test('it should validate pair mismatch tags', () => {
    let invalidText = "<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>";

    let sentence = new Sentence(invalidText);
    sentence.validate();
    expect(sentence.message).toBe(`Expected </C> found </B>`);
  });

  test('it should validate start tag MissingError', () => {
    let invalidText = "<B>This should be in boldface, but there is an extra closing tag</B></C>";

    let sentence = new Sentence(invalidText);
    sentence.validate();
    expect(sentence.message).toBe(`Expected # found </C>`);
  });

  test('it should validate end tag MissingError', () => {
    let invalidText = "<B><C>This should be centred and in boldface, but there is a missing closing tag</C>";

    let sentence = new Sentence(invalidText);
    sentence.validate();
    expect(sentence.message).toBe(`Expected </B> found #`);
  });


});