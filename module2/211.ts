{
    // utility types: 

    // pick 
    type Person = {
        name: string;
        age: number;
        address: string;
        email?: string;
    }

    type NameAge = Pick<Person, "name" | "age">

    // omit 
    type OmitOne = Omit<Person, "name" | "age">

    //required: 
    type PersonReq = Required<Person>

    // partial: 
    type PersonPart = Partial<Person>

    // readonly 
    type PersonReadOnly = Readonly<Person>

    const person: PersonReadOnly = {
        name: "lhl",
        age: 32,
        email: "ljljl34$;",
        address: "lkkjljk"
    }
    person.name = "lkjlkj";

    type MyObj = Record<string, string>;

    const EmptyObj: Record<string, unknown> = {};
    const obj1: MyObj = {
        a: "a",
        b: "al",
        c: "cat"
    }
















}