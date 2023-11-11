{
    /* Generic con */

    type Owner = 'bike' | 'cycle' | 'car';

    const owner: Owner = "bike";

    // dynamic: 

    type Vehicle = {
        bike: string;
        car: string;
        cycle: string
    }

    type Owner2 = keyof Vehicle;

    const user: Owner2 = "car";

    // -----apply with function ----------> 

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user2 = {
        name: "abudllah",
        id: 3232,
        bike: false
    }
    const user3 = {
        name: "abudllah",
        id: 3232,
        mobile: true
    }

    const res1 = getPropertyValue(user2, "name")
    const res2 = getPropertyValue(user3, "mobile")





















}