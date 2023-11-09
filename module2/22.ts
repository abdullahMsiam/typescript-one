{
    /* ---------INTERFACE {seems like type alias} --------------------- */

    /* TYPE ALIAS */
    type User1 = {
        name: string,
        roll: number
    }
    /*------- Interface--- */
    interface user2 {
        name: string,
        roll: number
    }
    // extend
    type userAndRole = User1 & { role: string };

    interface userAndRole2 extends user2 {
        role: string
    }
    interface userAndRole2 extends user1 {
        role: string
    }

    const user1: User1 = {
        name: "abdullah",
        roll: 1212,
    }
    const userRole1: userAndRole = {
        name: "rahman",
        roll: 1,
        role: "almighty"
    }



    /* array with type alias interface */

    type Roll1 = number[];
    const roll1: Roll1 = [1, 2, 3];

    interface Roll2 {
        [index: number]: number;
    }
    const Roll2: Roll2 = [3, 4, 5]


    type Add = (n1: number, n2: number) => number;
    interface Add2 {
        (n1: number, n2: number): number;
    }

    const add: Add2 = (num1, num2) => num1 + num2;
























}