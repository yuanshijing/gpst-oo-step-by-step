const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
    }
    
    introduce() {
        let info = super.introduce() + ` I am a Teacher. I teach `;
        if (this.clazzes.length !== 0) {
            let clazznum = [];
            this.clazzes.forEach((clazz) => clazznum.push(clazz.number));
            info += 'Class ' + clazznum.join(',') + '.';
        } else {
            info += 'No Class.'
        }
        return info;
    }
    
    isTeaching(student) {
        for(let clazz of this.clazzes) {
            if(clazz.hasStudent(student))
                return true;
        }
        return false;
    }
    
    notifyStudentAppended(student) {
        console.log(`${student.name} has joined Class ${clazz.number}.`);
    }
    
    notifyLeaderAssigned(student) {
        console.log(`${student.name} become Leader of Class ${clazz.number}.`);
    }
}
