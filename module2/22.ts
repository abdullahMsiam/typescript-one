{
    /* ---------INTERFACE {seems like type alias} --------------------- */

    /* TYPE ALIAS */
    type User1 = {
        name: string,
        roll: number
    }
    type userAndRole = User1 & { role: string };
    const user1: User1 = {
        name: "abdullah",
        roll: 1212,
    }
    const userRole1: userAndRole = {
        name: "rahman",
        roll: 1,
        role: "almighty"
    }

    /*------- Interface--- */
    interface user2 {
        name: string,
        roll: number
    }























}