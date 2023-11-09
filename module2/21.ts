{

    // -----------ASSERTION ----------------

    let anything: any;
    anything = 123;
    (anything as number);


    const kgtogm = (value: number | string): number | string | undefined => {
        if (typeof value === "number") {
            return value * 1000;
        }
        else if (typeof value === "string") {
            return parseFloat(value) * 1000;
        }
    }

    const res1 = kgtogm("1000") as string;
    const res2 = kgtogm(10) as number;

    console.log(res1);


    type CustomErr = {
        message: string
    }

    try {

    } catch (error) {
        console.log((error as CustomErr).message);
    }


















}