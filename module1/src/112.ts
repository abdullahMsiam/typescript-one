{
    // never, nullable , unknown


    const speed = (value: unknown) => {
        if (typeof value === "number") {
            const result = value * 10;
            console.log(result);
        }

        else if (typeof value === "string") {
            const [num, unit] = value.split(" ");
            const result = parseFloat(num) * 10;
            console.log(result)
        }

        else {
            console.log("You are enter wrong")
        }
    }

    speed(null);


    // error throw by default: 

    const throwErr = (msg: string): never => {
        throw new Error(msg);
    }

    throwErr("I am a vooot hoga!!!!!!")









}