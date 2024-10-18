class Loan {
    constructor(loanAmount, interestRate, loanTerm) {
        this.loanAmount = loanAmount; // Total loan amount
        this.interestRate = interestRate; // Annual interest rate (in percentage)
        this.loanTerm = loanTerm; // Loan term in months
        this.emisPaid = 0; // Number of EMIs paid
        this.status = "Pending"; // Status of the loan application
    }

    calculateMonthlyPayment() {
        const monthlyInterestRate = this.interestRate / 100 / 12;
        const denominator = Math.pow(1 + monthlyInterestRate, this.loanTerm) - 1;
        const emi = (this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.loanTerm)) / denominator; //EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1] 
        return emi;
    }
}

class LoanManager {
    constructor() {
        this.loans = []; // Array to store loan applications
    }

    applyForLoan(loanAmount, interestRate, loanTerm, applicant) {
        const loan = new Loan(loanAmount, interestRate, loanTerm);
        this.loans.push({ loan, applicant });
        console.log(`Loan application submitted for ${applicant.name}`);
    }

    approveLoan(applicant) {
        const loanApplication = this.loans.find(l => l.applicant.name === applicant.name && l.loan.status === "Pending");

        if (loanApplication) {
            if (this.checkEligibility(applicant)) {
                loanApplication.loan.status = "Approved";
                console.log(`Loan approved for ${applicant.name}`);
            } else {
                console.log(`Loan rejected for ${applicant.name}. Eligibility criteria not met.`);
            }
        } else {
            console.log(`No pending loan application found for ${applicant.name}`);
        }
    }

    rejectLoan(applicant) {
        const loanApplication = this.loans.find(l => l.applicant.name === applicant.name && l.loan.status === "Pending");
        if (loanApplication) {
            loanApplication.loan.status = "Rejected";
            console.log(`Loan rejected for ${applicant.name}`);
        } else {
            console.log(`No pending loan application found for ${applicant.name}`);
        }
    }

    checkEligibility(applicant) {
        const minimumIncome = 30000; // Minimum monthly income requirement
        const minimumBalance = 5000;  // Minimum account balance requirement

        // Check if applicant meets income and balance criteria
        return applicant.monthlyIncome >= minimumIncome && applicant.accountBalance >= minimumBalance;
    }

    displayLoans() {
        this.loans.forEach(l => {
            console.log(`Applicant: ${l.applicant.name}, Loan Status: ${l.loan.status}, Amount: ${l.loan.loanAmount}`);
        });
    }
}

// Applicant example
const applicant1 = {
    name: "John Doe",
    monthlyIncome: 35000,
    accountBalance: 8000
};

const applicant2 = {
    name: "Jane Smith",
    monthlyIncome: 25000,
    accountBalance: 3000
};

// Example usage
const loanManager = new LoanManager();
loanManager.applyForLoan(10000, 5, 24, applicant1); // Applicant 1 applies for a loan
loanManager.applyForLoan(15000, 7, 36, applicant2); // Applicant 2 applies for a loan

loanManager.approveLoan(applicant1); // Approving loan for Applicant 1
loanManager.approveLoan(applicant2); // Attempting to approve loan for Applicant 2

loanManager.displayLoans(); // Displaying loan statuses
