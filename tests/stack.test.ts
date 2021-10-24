
import Stack from "../src/stack";
import Tag from "../src/tag";

describe("Test Stack", () => {
  test('it should have elements as instance of Tag class.', () => {
    let tagText = "A";
    let tag = new Tag(`<${tagText}>`)

    let stack = new Stack();
    stack.push(tag);

    expect(stack.peek()).toBeInstanceOf(Tag);
  });

  test('it should push tag to stack', () => {
    let tagAText = "<A>";
    let tagBText = "<B>";

    let tagA = new Tag(tagAText)
    let tagB = new Tag(tagBText)

    let stack = new Stack();
    stack.push(tagA);
    stack.push(tagB);

    expect(stack.length()).toBe(2);
    expect(stack.peek()).toBe(tagB);

    stack.pop();
    expect(stack.peek()).toBe(tagA);
  });

  test('should give length of the stack', () => {
    let tagAText = "<A>";
    let tagBText = "<B>";

    let tagA = new Tag(tagAText)
    let tagB = new Tag(tagBText)

    let stack = new Stack();
    expect(stack.length()).toBe(0);

    stack.push(tagA);
    expect(stack.length()).toBe(1);

    stack.push(tagB);
    expect(stack.length()).toBe(2);

    stack.pop();
    expect(stack.length()).toBe(1);
  });

  test('it should peek top tag from the stack', () => {
    let tagAText = "<A>";
    let tagBText = "<B>";

    let tagA = new Tag(tagAText)
    let tagB = new Tag(tagBText)

    let stack = new Stack();
    stack.push(tagA);
    stack.push(tagB);

    expect(stack.peek()).toMatchObject(tagB);

    stack.pop();
    expect(stack.peek()).toMatchObject(tagA);
  });

  test('isEmpty gives true when stack is empty', () => {
    let tagAText = "<A>";
    let tagBText = "<B>";

    let tagA = new Tag(tagAText)
    let tagB = new Tag(tagBText)

    let stack = new Stack();
    expect(stack.isEmpty()).toBe(true);

    stack.push(tagA);
    expect(stack.isEmpty()).toBe(false);

    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('it should pop out tag from stack', () => {
    let tagAText = "<A>";
    let tagBText = "<B>";

    let tagA = new Tag(tagAText)
    let tagB = new Tag(tagBText)

    let stack = new Stack();
    expect(stack.isEmpty()).toBe(true);

    stack.push(tagA);
    stack.push(tagB);
    expect(stack.length()).toBe(2);

    stack.pop();
    expect(stack.length()).toBe(1);

    stack.pop();
    expect(stack.length()).toBe(0);
    expect(stack.peek()).toBeUndefined();
  });

});