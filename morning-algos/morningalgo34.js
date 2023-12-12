// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

const bobject = {
    isLateToday: true,
    lateCount: 10

}

bobjectId = 1

const students = [{
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false
},
{
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false
},
{
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false
}
];

const studentIndex = students.reduce((acc, element) => {
    acc[element.id] = element
    return acc
}, {})
function findByIdAndUpdate(id, updatedVals, collection) {
    for(const student of collection) {
        if(student.id === id) {
            for(const key in student) {
                student[key] = updatedVals[key] ?? student[key]
            }
            return student
        }
    }
    return null
}
function findByIdAndUpdateIndexed(id, updatedVals, collection) {
    const student = studentIndex[id]
    if(student == null) {
        return null
    }
    for(const key in student) {
        student[key] = updatedVals[key] ?? student[key]
    }
    return student
}

console.log(findByIdAndUpdate(bobjectId, bobject, students))
// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null
