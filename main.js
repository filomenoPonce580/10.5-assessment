function findLowestScoringStudent(students) {
    return students.length < 1 ? null : students.sort((a,b)=>a.score-b.score)[0]
}

const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
];
  
console.log(findLowestScoringStudent(students))

module.exports = findLowestScoringStudent;
  
