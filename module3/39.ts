{
    // abstraction ------->>> 1. Interface, 2. Abstract class 
    /* আইডিয়া পাওয়া যায় কিন্তু তার রিয়েল ইম্পিমেন্টেশন বুঝা যাবে না! */


    // idea __
    interface Vehicle {
        startCar(): void;
        stopCar(): void;
        moveCar(): void;
    }

    // implementation __
    class Car implements Vehicle {
        startCar(): void {
            console.log("Now starting the engine")
        }

        stopCar(): void {
            console.log("Stopped the engine")
        }

        moveCar(): void {
            console.log("Its running _____")
        }

        test() {
            console.log("just test the method")
        }
    }

    const xCar = new Car();
    xCar.startCar();
    xCar.moveCar();

    //-------------------- Abstract class ----->>> Is like a leader which follow everyone

    /* IDEA-->> */
    abstract class CarAbs {
        abstract startCar(): void;
        abstract stopCar(): void;
        abstract moveCar(): void;

        test() {
            console.log("I am on testing phase")
        }
    }

    /* IMPLEMENTATION-->> */
    class MarcCar extends CarAbs {
        startCar(): void {
            console.log("Now, started the car!")
        }

        stopCar(): void {
            console.log("Press the break!")
        }

        moveCar(): void {
            console.log("Yeah, the car is now moving")
        }
    }

    const theCar = new MarcCar();
    console.log(theCar.startCar())














}