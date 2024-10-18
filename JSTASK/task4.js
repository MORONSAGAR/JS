// Create a Bank Account object with properties as follows
// ● accountNumber
// ● accountHolderName
// ● Balance
// Methods :- deposit ( amount deposited ) , withdraw ( subtract from
// deposited amount ) , checkBalance ( calculate balance after withdrawal ) .

class BankAccount {
    constructor( accountNumber, accountHolderName, balance,){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amount){
        if(amount >0){
         this.balance += amount;
         console.log(`Deposited amount: ${amount}. New balance: ${this.balance}`);
        }else{
            console.log("Deposited amount should be greater than 0.");
        }
}
    withdraw(amount){
        if (amount >0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
        }else{
            console.log("Insufficient balance or invalid withdrawal amount.");
    }
}
    checkBalance(){
        console.log(`Current balance: ${this.balance}`);
        return this.balance;
    }
}

// Create an object of BankAccount class
let bankAccount = new BankAccount(123456, "John Doe", 5000);

// Call methods of BankAccount object

bankAccount.deposit(-1000);
bankAccount.withdraw(2000);
bankAccount.checkBalance();
        