// Exercise 1

const arr = [];

function arrayNum(number){
    for (let i = 0; i < number; i++) {
        arr[i] = i + 1;
    }
}

arrayNum(8);

console.log(arr);

///////////////////

// Exercise 2

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
        arr[i] = 0;
    }
}

console.log(arr);

///////////////////

// Exercise 3

class Employee{
    constructor(fullName, level){
        this.fullName = fullName;
        this.level = level;
        this.sickDays = 15;
        this.holiDays = 15 + ((level - 1) * 5);
        this.notes = [];
        if (level < 5) {
            this.payment = 5500 * (1.1 ** (level - 1));
        }
        else {
            this.payment = (5500 * (1.1 ** 3)) * 1.2;
            this.notes.push('Senior employee');
        }
    }
    showEmployee(){
        console.log(`Enployee name: ${this.fullName}, The Level: ${this.level}, Number of sick days: ${this.sickDays}, Number of holidays: ${this.holiDays}`);
    }
    useSickDays(){
        if (this.sickDays > 0) {
            this.sickDays--;
            console.log(`Number of sick days that left for you is: ${this.sickDays}`);
        }
        else {
            console.log(`You don't have any sick days left!!!!!!!!`);
        }
    }
    useHoliDays(){
        if (this.holiDays > 0) {
            this.holiDays--;
            console.log(`Number of holidays that left for you is: ${this.holiDays}`);
        }
        else {
            console.log(`You don't have any holidays left!!!!!!!!`);
        }
    }
    levelUp(){
        this.level++;
        this.holiDays += 5;
        if (this.level < 5) {
            this.payment = 5500 * (1.1 ** (this.level - 1));
        }
        else {
            this.payment = (5500 * (1.1 ** 3)) * 1.2;
            this.notes.push('Senior employee');
        }
    }
    addNotes(note){
        this.notes.push(note);
    }
    changeFullName(fullName){
        this.fullName = fullName;
    }
}

employees = [];
employees.push(new Employee('Ariel Amnony', 4));
employees.push(new Employee('Barak Mizrahi', 5));
employees.push(new Employee('Lilach Cohen', 5));
employees.push(new Employee('Nadav Amnony', 1));
employees.push(new Employee('Kfir Amnony', 1));

function bestEmployee(arr){
    let employeeLevel = 0;
    let employeeIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].level > employeeLevel) {
            employeeLevel = arr[i].level
            employeeIndex = i;
        }
    }
    console.log('The Best Employee is: ');
    arr[employeeIndex].showEmployee();
}

function findEmployee(arr, name){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].fullName == name){
            arr[i].showEmployee(); // For Debug
            return arr[i];
        }
    }
}
