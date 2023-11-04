// Reference type ---> object 

const user: {
    company: string;
    readonly firstName: string; // fixed that can not change 
    subject: 'CSE', // type ---> literal type
    middleName?: string; lastName: string; /*optional type*/ isMarried: boolean
} =
{
    company: 'AMS world',
    subject: 'CSE',
    firstName: "abdullah",
    middleName: "Muhammad",
    lastName: "siam",
    isMarried: false

}