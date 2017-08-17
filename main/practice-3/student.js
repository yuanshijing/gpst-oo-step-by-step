const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
    }
    introduce() {
        let message = super.introduce() + ` I am a Student. `
        if(this.clazz.leader === this) {
            message += `I am Leader of Class ${this.clazz}.`;
        } else if (this.clazz.student === this) {
            message += `I am a Student. I am at Class ${this.clazz}.`;
        } else {
            message += `I haven't been allowed to join Class.`;
        }
        return message;
    }
}