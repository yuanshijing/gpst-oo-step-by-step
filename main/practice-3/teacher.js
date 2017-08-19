const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
        this.id = '00' + parseInt(Math.random() * 1000 + 1);
        this.joinClazz();
    }

    joinClazz() {
        for (let clazz of this.clazzes)
            clazz.teachers.push(this);
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
        return this.clazzes.some((clazz) => {
           return clazz.hasStudent(student)
        })
    }
    
    notifyStudentAppended(message) {
        console.log(`${message}`);
    }
    
    notifyLeaderAssigned(message) {
        console.log(`${message}`);
    }
}
