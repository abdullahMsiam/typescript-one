{

    /* GENERIC WITH FUNCTION */

    // normal arrow function : 
    const createArray = (param: string): string[] => {
        return [param];
    }
    // createArray("bangladesh");

    // generic function : 
    const createArrayGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const resGeneric = createArrayGeneric<boolean>(true);
    const resGenericStr = createArrayGeneric<string>('kabul');
    const resGenericObj = createArrayGeneric<{ id: number; name: string }>({ id: 123, name: 'abdullah' });



















}