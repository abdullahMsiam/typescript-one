{
    // GETTER AND SETTER IN OOP JS -------------->

    class BankAccount {
        readonly id: number;
        name: string;
        protected _balance: number;
        // private balance: number;

        // private rules: use a underscore before the var such as _balance; 

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount: number) {
            this._balance = this.balance + amount;
        }

        get balance() {
            return this._balance
        }


    }

    const poorAccount = new BankAccount(2333, "kudus", 30);

    poorAccount.deposit = 50;
    const myBalance = poorAccount.balance;


    console.log(myBalance);























}