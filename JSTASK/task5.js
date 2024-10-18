class Loan {
    constructor(loanAmount, interestRate, loanTerm) {
        this.loanAmount = loanAmount; // Total loan amount
        this.interestRate = interestRate; // Annual interest rate (in percentage)
        this.loanTerm = loanTerm; // Loan term in months
        this.emisPaid = 0; // Number of EMIs paid
    }

    // Method to calculate monthly payment (EMI)
    calculateMonthlyPayment() {
        const monthlyInterestRate = this.interestRate / 100 / 12;
        const denominator = Math.pow(1 + monthlyInterestRate, this.loanTerm) - 1;
        const emi = (this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.loanTerm)) / denominator;
        return emi;
    }

    // Method to check loan status
    checkLoanStatus() {
        const remainingEmis = this.loanTerm - this.emisPaid;
        const monthlyPayment = this.calculateMonthlyPayment();
        const totalAmountPaid = this.emisPaid * monthlyPayment;
        const totalAmountToBePaid = this.loanAmount + (this.loanAmount * this.interestRate / 100);
        const remainingAmount = totalAmountToBePaid - totalAmountPaid;

        return {
            totalAmountToBePaid: totalAmountToBePaid,
            totalAmountPaid: totalAmountPaid,
            remainingAmount: remainingAmount,
            remainingEmis: remainingEmis
        };
    }


    // Method to simulate payment of an EMI
    payEmi() {
        if (this.emisPaid < this.loanTerm) {
            this.emisPaid++;
        } else {
            console.log("All EMIs have already been paid.");
        }
    }
}

// Example usage
const myLoan = new Loan(10000, 5, 12); // Loan of 10,000 with 5% interest for 12 months
console.log("Monthly Payment (EMI):", myLoan.calculateMonthlyPayment().toFixed(2));

myLoan.payEmi(); // Simulating payment of an EMI
console.log(myLoan.checkLoanStatus());
