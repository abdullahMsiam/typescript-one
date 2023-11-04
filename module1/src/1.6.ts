// ----------------------------------
// function in tsc 
// function: 

//                       type   = default   type    :function return type
function multiply(num1: number = 10, num2: number): number {
    return num1 * num2;
}

multiply(2, 2);

// arrow function in tsc ==> 

const division = (num1: number, num2: number): number => num1 / num2


// function in object is called method
// object --> function --> method 

// this can read only normal function 

const bankerUser = {
    name: 'Abdullah',
    balance: 10,
    // normal anon.. function 
    addBalance(balance: number): string {
        return `My latest balance is ${this.balance + balance}`
    }
}

// array with map 

const numbers: number[] = [5, 3, 6];

const newNums: number[] = numbers.map((n: number): number => n * n);


