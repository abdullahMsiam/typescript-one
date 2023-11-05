{

    const user = {
        id: 123421,
        name: {
            fName: "abdul",
            lName: "ali"
        },
        address: "Dhaka"
    }

    // don't allow to attach a type, its automatically choose 
    const {
        id,
        name: { fName: firstName }, // name alias 
    } = user;

    console.log(firstName);


    // Array destructuring : 

    const friends = ["abul", "kabul", "babul", "sadul", "saidull"];

    const [, , knownF, ...rest] = friends; // knowF = kabul; 


}