{
    /* Generic with interface */

    interface Developer<T> {
        name: string;
        computer: {
            brand: string,
            year: number
        };
        portfolio: T;
    }

    const poorDev: Developer<{ have: boolean, job: boolean }> = {
        name: "jpoor",
        computer: {
            brand: "hop",
            year: 2003
        },
        portfolio: {
            have: true,
            job: false,
        }
    }
    const richDev: Developer<{ have: boolean, job: boolean, salary: string }> = {
        name: "jrich",
        computer: {
            brand: "hop",
            year: 2003
        },
        portfolio: {
            have: true,
            job: true,
            salary: '3222 uds'
        }
    }


















}