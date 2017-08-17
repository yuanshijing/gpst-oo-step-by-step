const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name,age,clazz){
        super (name,age);
        this.clazz = clazz;
    }
    introduce(){
        let info = super.introduce() + ' I am a Student. I am '
        if (this === this.clazz.leader) {
            info += 'Leader of Class '
        }else {
            info += 'at Class ';
        } 
        return info += this.clazz.number +'.';
    }
}