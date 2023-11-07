{
    // ----------- TERNARY , NULLISH, OPTIONAL CHAINING ----------------

    // ---> TERNARY : 

    const age: number = 15;

    const isAdult = age >= 18 ? 'adult' : 'not adult';

    console.log(isAdult);

    // ------> NULLISH OPERATOR ----------------: 

    /// ITS RELATE WITH     [ NULL & UNDEFINE ] 

    const isStudent = undefined;

    const result = isStudent ?? "Bohiragoto";

    console.log({ result });

    // --------> chain operator and nullish apply: 

    type User = {
        name: string,
        address: {
            road: string,
            roadNum: number,
            dist: string
        },
        contact: number
    }

    const user: User = {
        name: "abdul",
        address: {
            road: "fool road",
            roadNum: 322,
            dist: "dhaka"
        }
        ,
        contact: 1232332433
    }

    const permAdd = user?.address?.permAdd ?? "not available"

    console.log({ permAdd });







}