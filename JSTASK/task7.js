// Function to check scholarship eligibility
function checkScholarshipEligibility(student){
 // Define the minimum GPA required for scholarship eligibility
 const minimumGPA = 7.5;

  // Check if the student's GPA is greater than or equal to the minimum GPA
  if(student.gpa >= minimumGPA){
    console.log(`${student.name} is eligiable for a scholarship`);
  }    else{
    console.log(`${student.name} is not eligible for a scholarship`);
  }
}

//example usage
const student1 = {
    name: "Student 1",
    gpa: 9.0 
};

const student2 = {
    name: "Student 2",
    gpa: 6.0 
};

//check eligibility for both students
checkScholarshipEligibility(student1); // Student 1 is eligiable for a scholarship
checkScholarshipEligibility(student2); // Student 2 is not eligible for a scholarship