import * as api from "./api";

describe("getJoke", () => {
  it("returns data containing the word 'Chuck'", () => {
    const actual = api.getJoke();
    return expect(actual).resolves.toContain("Chuck");
  });
});
describe("getJoke('Ruth', 'Sargent)", () => {
  it("returns data containing the word 'Ruth'", () => {
    const actual = api.getJoke("Ruth", "Sargent");
    return expect(actual).resolves.toContain("Ruth");
  });
});
