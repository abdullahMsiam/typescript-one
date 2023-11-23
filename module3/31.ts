{
    // oop class

    class Animal {
        // public name: string;
        // public color: string;
        // public sound: string; //--------> properties

        //--------> with PARAMETER PROPERTIES: JUST ADD THE PUBLIC 
        constructor(public name: string, public color: string, public sound: string) {
            // this.name = name;
            // this.color = color;
            // this.sound = sound;
        }

        makeSound() {  // method --> function in class --> normal function 
            console.log(`the sound of ${this.name} is ${this.sound}`)
        }
    }

    const dog = new Animal("foreign dog", "black", "ghau - ghau");
    const cat = new Animal("desi bilai", "white", "meaw meaw");

    dog.makeSound();  // --> the sound of foreign dog is ghau - ghau     















}