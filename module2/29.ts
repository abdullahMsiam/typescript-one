{

    // conditional types ------------------->

    type Abdullah = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    type CheckVehicle<T> = T extends keyof Abdullah ? true : false;

    type HasThing = CheckVehicle<"tracktor"> // false 















}