// https://www.codewars.com/kata/597c684822bc9388f600010f/train/javascript

class Dinglemouse {
    constructor(firstName, lastName) {
        this._firstName = firstName ?? ''
        this._lastName = lastName ?? ''
    }

    getFullName() {
        return `${this._firstName} ${this._lastName}`.trim();
    }

}

console.log(new Dinglemouse("Clint").getFullName())