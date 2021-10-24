
import Tag from "../src/tag";
describe("Test Tag", () => {
  test('creation of open tag', () => {
    let tagText = "A";
    let tag = new Tag(`<${tagText}>`)
    expect(tag.open).toBe(true);
    expect(tag.textTag).toBe(tagText)
    expect(tag.data).toBe(`<${tagText}>`)
  });

  test('creation of closed tag', () => {
    let tagText = "A";
    let tag = new Tag(`</${tagText}>`)
    expect(tag.open).toBe(false);
    expect(tag.textTag).toBe(tagText);
    expect(tag.data).toBe(`</${tagText}>`)
  });

  test('extractText should give text from tag', () => {
    let tagText = "A";
    let openTagString = `<${tagText}>`;
    let closeTagString = `</${tagText}>`
    let openTag = new Tag(openTagString);
    let closeTag = new Tag(closeTagString);

    expect(openTag.extractText()).toBe(tagText)
    expect(closeTag.extractText()).toBe(tagText)
  });
});


