module.exports = class Class {
    constructor(number) {
        this.students = [];
        this.teachers = [];
        this.number = number;
    }

    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    appendMember(student) {
        this.student = student;
    }

    isIn(student) {
        return student.clazz === this;
    }
    
    assignLeader(student) {
        if (this.students.indexOf(student) !== -1) {
            this.leader = student;
            this.teachers.forEach((teacher) => {
                teacher.notifyLeaderAssigned(student, this);
            }, this);
            return `Assign team leader successfully.`
        } else {
            console.log("It is not one of us.");
        }
    }
}