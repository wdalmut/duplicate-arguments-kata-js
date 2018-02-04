const have_duplicates = require('../src');

describe("Duplicates", () => {
  it("Nothing", () => {
    expect(have_duplicates([1,2,3,4])).toBe(false);
  });

  it("Have", () => {
    expect(have_duplicates([1,1,2,3,4])).toBe(true);
  });

  it("Have a couple", () => {
    expect(have_duplicates([1,1,2,3,3,4])).toBe(true);
  });

  it("Nothing with string", () => {
    expect(have_duplicates(['1','2','3','4'])).toBe(false);
  });

  it("Have with strings", () => {
    expect(have_duplicates(['1','2','3','3','4'])).toBe(true);
  });
});
