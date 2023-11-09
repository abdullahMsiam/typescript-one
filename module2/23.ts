{

    /* GENERIC TYPE START */

    type GenericArray<T> = Array<T>;


    // const roll : number[] = [1, 2, 3, 4]; 
    const roll: GenericArray<number> = [1, 2, 3, 4];

    // const names : string[] = ['abul', 'babul', 'kabul'];
    const names: GenericArray<string> = ['abul', 'babul', 'kabul'];

    const game: GenericArray<boolean> = [true, false, false];



    const users: GenericArray<{ name: string, age: number }> = [
        {
            name: "Abdul",
            age: 32,
        },
        {
            name: "kuddsu",
            age: 44,
        },
        // {unkonwn : "unknown"}
    ]


    // GENERIC TYPE TUPLE ----------> 
    type GenericTuple<X, Y> = [X, Y];

    const ages: GenericTuple<number, number> = [3, 4];

    const user: GenericTuple<string, { roll: number, married: boolean }> = ["Abdullah", { roll: 21, married: false }];




















}