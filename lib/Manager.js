const Employee = require('./Employee')

class Manager extends Employee {
    //constructing input's
    constructor(name, id, email, officeNum ) {
        super( name, id, email);
        this.office = officeNum;

    }
    getRole() {
        return  "Manager";
    }
}

module.exports = Manager;