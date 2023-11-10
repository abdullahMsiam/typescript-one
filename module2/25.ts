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

    // clean way: 


    type User = { id: number, name: string, bike?: string };

    const resGenericObjCl = createArrayGeneric<User>({ id: 333, name: 'ash' });


    // generic function with tuple : 
    const createArrayGenericTuple = <T, Q>(param: T, param2: Q): [T, Q] => {
        return [param, param2];
    }

    const resGeneric11 = createArrayGenericTuple<boolean, string>(true, 'string this');
    const resGenericStr22 = createArrayGenericTuple<string, string>('kabul', 'babul');
    const resGenericObj33 = createArrayGenericTuple<{ id: number; name: string }, number>({ id: 123, name: 'abdullah' }, 213);

    // clean way:  
    const resGenericObjCl33 = createArrayGenericTuple<User, boolean>({ id: 333, name: 'ash' }, true);


    const addCourseToStu = <T>(student: T) => {
        const course = "Web course";

        return {
            ...student,
            course,
        }
    }

    const student1 = addCourseToStu<User>({ id: 32, name: 'kabul', bike: 'yamaha' })
    const student2 = addCourseToStu<{ id: number, name: string, computer: boolean }>({ id: 32, name: 'kabul', computer: true })



















}