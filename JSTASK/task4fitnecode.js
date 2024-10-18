class BankAccount {
    constructor(accountNumber, accountHolderName, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New Balance: ${this.balance}`);
        } else {
            console.log("Insufficient balance or invalid withdrawal amount.");
        }
    }

    checkBalance() {
        console.log(`Current balance: ${this.balance}`);
        return this.balance;
    }
}

// Example usage:
const account = new BankAccount("123456789", "John Doe", 1000);
account.deposit(500);
account.withdraw(200);
account.checkBalance();
