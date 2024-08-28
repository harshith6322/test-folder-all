import { describe, expect, it } from "@jest/globals";
import { sum, sub } from "../index";

describe("sum module", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("sub module", () => {
  it("sub 5 - 2 equal 3", () => {
    expect(sub(5, 2)).toBe(3);
  });
});
