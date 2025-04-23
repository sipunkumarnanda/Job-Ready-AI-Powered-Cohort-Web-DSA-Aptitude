function Employee(name, age, id, salary){
    this.name = name
    this.age = age
    this.id = id
    this.salary = salary
}
Employee.prototype.printDetails = function(){
    console.log(` Name : ${this.name}\n Age : ${this.age}\n Id : ${this.id}\n salary : ${this.salary}`);
}


let e1 = new Employee("harsh", 26, 1234, 50000)
console.log(e1);
e1.printDetails()