

class Class {
    constructor(number) {
        this.students = [];
        this.teachers = [];
        this.number = number;
    }

    hasStudent(student) {
     
        if (this.students.includes(student))
            return true;
        else
            return false;
    }

    appendMember(student) {
        this.students.push(student);
        this.teachers.forEach((teacher) =>teacher.notifyStudentAppended(`${student.name} has joined Class ${this.number}`));
    }


    assignLeader(student) {
        if (this.hasStudent(student)) {
            this.leader = student;
            this.teachers.forEach((teacher) => teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.number}`));
            return `Assign team leader successfully.`
        } else {
            return `It is not one of us.`;
        }
    }
}

module.exports = Class;

