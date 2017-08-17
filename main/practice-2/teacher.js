const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
    }
    introduce() {
        let str = super.introduce() + ' I am a Teacher. I teach ';
        if (this.clazzes.length !== 0) {
            let clazznum = [];
            this.clazzes.forEach((num)=>clazznum.push(num.number));
            str += 'Class ' + clazznum.join(',') +'.';
        } else {
            str += 'No Class.'
        }
        return str;
    }
}