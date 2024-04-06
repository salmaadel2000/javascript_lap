class Person {
    static #pc = 0
    #fullName
    constructor(fullName = "no name", gender = "", image = "") {
        this.fullName = fullName
        this.gender = gender
        this.image = image
        if (this.constructor.name == "Person") {
            throw new Error("cant instance object!!!!!")
        }
        Person.#pc++;
        if (this.image == "" && this.gender == "female") {
            this.image = "./img/famale.png"
        } else if (this.image == "" && this.gender == "male") {
            this.image = "./img/male.png"
        }
    }
    set fullName(userName) {
        let final = ''
        let name = userName.split(" ")
        if (name.length < 2) {
            throw new Error("the name must be 2 word")
        }
        else {
            for (let i = 0; i < name.length; i++) {
                name[i] = name[i].slice(0, 1).toUpperCase() + name[i].slice(1, name[i].length);
            }
            final = name.join(' ')
            this.#fullName = final
        }
    }
    get fullName() {
        return this.#fullName
    }

    static get pc() {
        return this.#pc;
    }
}
class Employee extends Person {
    constructor(fullName = "no name", salary = 0, language = "", gender = "", image = "") {
        super(fullName, gender, image)
        this.salary = salary
        this.language = language
    }
    toString() {
        return `our Name is ${this.name} and Salary is ${this.salary} `
    }
    addCart() {
        let person = document.createElement("div")
        person.classList.add("person")
        document.body.append(person)
        let img = document.createElement("img")
        img.src = this.image
        person.append(img)
        let arr = [this.fullName, this.gender, this.salary, this.language]
        for (let i = 0; i < arr.length; i++) {
            let par = document.createElement("p")
            par.innerText = arr[i]
            person.append(par)
        }
    }
}
let emp = new Employee("salma adel", "1000", "arabic", "female", "./img/boy.jpg");
let emp1 = new Employee("marian adel", "2000", "arabic", "female");
let emp2 = new Employee("yousef adel", "3000", "arabic", "male");
emp.addCart()
emp1.addCart()
emp2.addCart()

