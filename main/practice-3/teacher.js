const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name,age,clazzes) {
        super (name,age);
        this.clazzes = clazzes;
    }
    introduce() {
        let info = super.introduce() + ` I am a Teacher. I teach `;
        if (this.clazzes.length !== 0) {
            let clazznum = [];
            this.clazzes.forEach((num)=>clazznum.push(num.number));
            info += 'Class ' + clazznum.join(',') +'.';
        } else {
            info += 'No Class.'
        }
        return info;
    }
    isTeaching(student) {
        this.student = student;
        if (!this.clazzes.student) {
            return false;
        } else {
            return true;
        }
    }