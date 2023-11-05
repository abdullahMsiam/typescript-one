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
        name: { fName: firstName },
    } = user;

    console.log(firstName);


}