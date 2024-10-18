function calculateSalary(monthlyPayscale, deductions){
    const fixedsalary =25000;
    const salaryAfterDeductions = fixedsalary -deductions;
    console.log(`salary after deductions: ₹${salaryAfterDeductions}`);
}
calculateSalary(25000,1700);