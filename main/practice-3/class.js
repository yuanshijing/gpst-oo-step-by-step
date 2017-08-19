module.exports = class Class {
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
        this.teachers.forEach((teacher) =>teacher.notifyStudentAppended(student));
    }


    assignLeader(student) {
        if (this.hasStudent(student)) {
            this.leader = student;
            this.teachers.forEach((teacher) => teacher.notifyLeaderAssigned(student));
            return `Assign team leader successfully.`
        } else {
            return `It is not one of us.`;
        }
    }
}