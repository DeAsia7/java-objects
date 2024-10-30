class car {

    constructor(pmake, pmodel, pyear) {

        this.make = pmake
        this.model = pmodel
        this.year = pyear

    }

    getdetails() {

        return `the car make is ${this.make} and the year is ${this.year}`
    }

}
let obj1 = new car("nissan", "Murano", 2023)
let obj2 = new car("toyota", "rav4", 2021)

console.log(obj1.getdetails())
console.log(obj2.getdetails())


let car = {
    make: "Toyota",
    model: "Rav 4",
    year: 2021,

    getdetails: function(){
        return`the car make is ${this.make} and the year is ${this.year}`
}
}

function createcar() {
    event.preventDefault()
}


let car2 = {
    make: "Nissan",
    model: "Murano",
    year: 2023
    start: function () {
        console.log("The car is starting")
    },
    getdetails: function () {
        return `the car make is ${this.make} and the year is ${this.year}`
    }
}
console.log(car.getdetails())
console.log(car2.getdetails())


