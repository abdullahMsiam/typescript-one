{


    type Student = {   // type alias
        name: string,
        age: number,
        isMarried?: boolean,
        gender: string,
        address: string
    }


    const student1: Student = {
        name: "Abdullah",
        age: 21,
        gender: "male",
        address: "Bangladesh"
    };


    type UserName = string;
    type MyWish = boolean;

    const userName: UserName = "kuddus";
    const iKnow: MyWish = true;


    // tpe alias in function 

    type AddFunction = (num1: number, num2: number) => number;

    const add: AddFunction = (n1, n2) => n1 + n2;














}