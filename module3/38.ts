{
    // মিজবাহঃ কোনো ক্লাস বা মেথড যদি স্থান কাল পাত্র ভেদে চেঞ্জ হয়ে যায় তাই পলিমরফিজম। 

    // POLYMORPHISM --------->>>>

    class Person {
        getSleep() {
            console.log("I am sleeping for 8 hours");
        }
    }

    class Student extends Person {
        getSleep() {
            console.log("I am sleeping for 7 hours");
        }
    }

    class Dev extends Person {
        getSleep() {
            console.log("I am sleeping for 6 hours");
        }
    }

    const getSleepHour = (param: Person) => {
        param.getSleep();
    }

    const abdul1 = new Person()
    const abdul2 = new Student()
    const abdul3 = new Dev()

    getSleepHour(abdul1);
    getSleepHour(abdul2);
    getSleepHour(abdul3);

    // ------------------------------------------------------------------->>>

    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape {
        radius: number;

        constructor(radius: number) {
            super()
            this.radius = radius;
        }

        getArea(): number {
            return parseFloat((Math.PI * this.radius * this.radius).toFixed(3));
        }
    }
    class Rectangle extends Shape {
        height: number;
        width: number;

        constructor(height: number, width: number) {
            super()
            this.height = height;
            this.width = width;
        }

        getArea(): number {
            return (this.height * this.width);
        }
    }

    const getShapedArea = (param: Shape) => {
        console.log(param.getArea());
    }

    const shape = new Shape();
    const areaCircle = new Circle(10);
    const areaRectangle = new Rectangle(2, 3);

    getShapedArea(shape);
    getShapedArea(areaCircle);
    getShapedArea(areaRectangle);











}