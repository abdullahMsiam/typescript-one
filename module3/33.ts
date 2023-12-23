{

    // type guard

    // type fo type guard: 
    type SigmaNumeric = string | number;

    const add = (num1: SigmaNumeric, num2: SigmaNumeric): SigmaNumeric => {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return num1 + num2;
        }

        else {
            return num1.toString() + num2.toString();
        }
    }

    const res1 = add("3", "3");
    console.log(res1);

    // type guard ----> IN GUARD:  

    type NoUser = { name: string };
    type AdUser = { name: string, role: "admin" };

    const getUser = (user: NoUser | AdUser) => {
        if ("role" in user) {
            console.log(`Myself ${user.name} and role ${user.role}`)
        }
        else {
            console.log(`Myself ${user.name} and there is no role`)
        }
    }

    const aUser: NoUser = {
        name: "abdullah",
    }
    const adminUser: AdUser = {
        name: "kuddus",
        role: "admin"
    }

    getUser(aUser);
















}