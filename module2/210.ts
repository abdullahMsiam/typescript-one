{
    // MAPPED TYPE: --------------->

    type AreaNum = {
        height: number;
        weight: number;
    }
    type Height = AreaNum["height"] // --> look up
    type AreaStr<T> = {
        [key in keyof T]: T[key]; // ---> loop with loop up style 
    }

    const area1: AreaStr<{ height: string; width: number }> = {
        height: "100",
        width: 40
    }













}