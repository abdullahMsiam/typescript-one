{


    type Todo = {
        userId: number;
        id: number;
        title: string;
        body: string;
    }
    const getTodo = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json();
        console.log(data);
        return data;
    }
    getTodo();


    // simulate promise: 

    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "something";
            if (data) {
                resolve(data);
            }
            else {
                reject(data);
            }
        })
    }

    // calling create promise function: 
    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        return (data);
        // console.log(data);
    }

    // showData();























}