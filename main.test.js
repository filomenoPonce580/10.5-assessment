const findLowestScoringStudent = require("/solution");

const input = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 }
        ];

describe("findLowestScoringStudent", ()=>{
  it("returns the student object of the lowest scoring student", ()=>{
    const expected = { name: "Morgan Sutton", score: 7.4 };
    const actual = findLowestScoringStudent(input);
    expect(actual).toEqual(expected)
  });
    it("returns null if student array is empty", ()=>{
    const expected = null;
    const actual = findLowestScoringStudent([]);
    expect(actual).toBe(expected)
  })
})
