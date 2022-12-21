class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop(id) {
    delete this.items[id];
    this.top -= 1;
  }
}

describe("My Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    // const stack = new Stack();

    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push to the top", () => {
    stack.push("test");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("test");
  });

  it("can pop off", () => {
    stack.pop(-1);
    expect(stack.top).toBe(-2);
    expect(stack.peek).toBe(undefined);
  });
});
