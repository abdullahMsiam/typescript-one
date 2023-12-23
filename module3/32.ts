{
    // oop - inheritance 

    // parent class : 
    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.address = address;
            this.age = age;
        }

        getShower(nos: number) {
            console.log(`${this.name} take for shower ${nos} minutes`)
        }

    }


    // student class: 
    class Student extends Parent {

        /* WITHOUT PARENT:-->
        name: string; 
        age: number; 
        address: string; 

        constructor ( name: string, age: number, address: string){
            this.name = name; 
            this.address= address;
            this.age=age; 
        }

        getShower(nos: number) {
            console.log(`${this.name} take for shower ${nos} minutes`)
        } */

        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    const student1 = new Student("abdul", 30, "dhaka");


    class Teacher extends Parent {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        }

        getClass(nos: number) {
            console.log(`${this.name} taken number of classes ${nos}`)
        }


    }

    const Teacher1 = new Teacher("abdul", 30, "dhaka", "Associate");













}