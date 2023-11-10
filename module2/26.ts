{
    /* CONSTRAINS---------------- */

    const addCourseToStu = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course = "Web course";

        return {
            ...student,
            course,
        }
    }

    const student1 = addCourseToStu({ id: 32, name: 'kabul', email: 'ab@mail.com', bike: 'yamaha' })
    const student2 = addCourseToStu({ id: 32, name: 'kabul', email: 'kb@mail.com', computer: true })

















}