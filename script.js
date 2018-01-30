class Employee {
    constructor(name, salary, hireDate) {
        this.name = "Mike";
        this.salary = "100k";
        this.hireDate = "Jan, 1, 1988";
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log("makes" + " " + this.salary + " " + "a year" + ".");
    }
    getHireDate() {
        console.log(this.name + " " + "was hired on" +" " + this.hireDate);
    }
} let employee1 = new Employee();

employee1.getName();
employee1.getSalary();
employee1.getHireDate();

class Manager extends Employee {
    constructor(yearsOnJob, age, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.yearsOnJob = 30;
        this.age = 45;
    }
    getYearsOnJob() {
        console.log(this.name + " " + "has" + " " + this.yearsOnJob + " " + "years on the job" + ".");
    }
    getAge() {
        console.log("he is" + " " + this.age + " " + "years old" + ".");
    }
} let manager1 = new Manager();

manager1.getYearsOnJob();
manager1.getAge();

class designer extends Employee {
    constructor(yearsOnJob, age, name, salary, hireDate, previousWork, degree) {
        super(yearsOnJob, age, name, salary, hireDate);
        this.previousWork = "Web Design";
        this.degree = "Compter Science";
    }
    getPreviousWork() {
        console.log("All of" + " " + this.name + "'s" + " " + "work is in" + " " + this.previousWork + ".");
    }
    getDegree() {
        console.log(this.name + " " + "has a Degree in" + " " + this.degree + ".");
    }
} let designer1 = new designer();

designer1.getPreviousWork();
designer1.getDegree();

class artist extends Employee {
    constructor(yearsOnJob, age, name, salary, hireDate, previousWork, degree, courses, attendance) {
        super(yearsOnJob, age, name, salary, hireDate, previousWork, degree);
        this.courses = "Art";
        this.attendance = "10 days absent";
    }
    getCourses() {
        console.log(this.name + " " + "is currently taking a cousre in" + " " + this.courses);
    }
    getAttendance() {
        console.log("he has" + " " + this.attendance + ".");
    }
} let artist1 = new artist();

artist1.getCourses();
artist1.getAttendance();

