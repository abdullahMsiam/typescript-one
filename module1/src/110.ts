{

    // -----------------Union in tsc: -----------------
    //-------- ITS LIKE OR || OPERATION ... ONE SHOULD BE ALLOWED -----------------------//


    type Member = "student" | "Teacher";
    type Faculty = "Teacher" | "Officer";

    type Elite = Member | Faculty;

    const newMember: Member = "student";


    type User = {
        name: string,
        email?: string,
        id: number,
        position: "Regular" | "Re-Add"  // -------> string literal 
    }

    const newUser: User = {
        name: "Jisan",
        id: 212121,
        position: "Re-Add"
    }




    // ---------   INTERSECTION ------------------// 

    // ------------- ITS LIKE AND OPERATOR && .. BOTH ARE SHOULD BE ALLOWED ----------------------//
    type FrontEnd = {
        skills: string[],
        designation: 'frontend dev'
    }

    type Backend = {
        skills: string[],
        designation2: 'backend dev'
    }

    type FullStack = FrontEnd & Backend;

    const fullStack: FullStack = {
        skills: ['HTML', 'CSS', 'NODEJS', 'MONGO'],
        designation: 'frontend dev',
        designation2: 'backend dev'
    }

    console.log(fullStack);














}