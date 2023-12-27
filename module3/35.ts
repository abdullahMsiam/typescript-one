{
    // access modifier -------------->

    class BankAccount {
        readonly id: number;
        name: string;
        protected balance: number;
        // private balance: number;

        // private rules: use a underscore before the var such as _balance; 

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }

        getDeposit(amount: number) {
            this.balance = this.balance + amount;
        }

        getBalance() {
            return this.balance;
        }
    }


    class StudentAcc extends BankAccount {

        test() {
            this.balance;
        }
    }

    const poorAccount = new BankAccount(2333, "kudus", 30);

    poorAccount.getDeposit(20);

    const myBalance = poorAccount.getBalance();
    console.log(myBalance);























}