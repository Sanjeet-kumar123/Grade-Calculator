// Get elements
const button = document.querySelector(".button");
const percentageSpan = document.querySelector(".per");
const gradeSpan = document.querySelector(".gra");
const totalSpan = document.querySelector(".tot");
const resultBox = document.querySelector(".result");

// Function to calculate grade
function calculateGrade() {
    // Get input values
    const c = parseFloat(document.getElementById("c").value) || 0;
    const phy = parseFloat(document.getElementById("phy").value) || 0;
    const ja = parseFloat(document.getElementById("ja").value) || 0;
    const js = parseFloat(document.getElementById("js").value) || 0;
    const ph = parseFloat(document.getElementById("ph").value) || 0;

    // Total subjects
    const totalSubjects = 5;
    const totalMarks = c + phy + ja + js + ph;
    const percentage = (totalMarks / (totalSubjects * 100)) * 100;

    // Decide Grade
    let grade = "";
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B+";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else if (percentage >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Show Results
    percentageSpan.textContent = percentage.toFixed(2) + " %";
    gradeSpan.textContent = grade;
    totalSpan.textContent = totalMarks + " / " + (totalSubjects * 100);

    // Animate Result Section
    resultBox.classList.add("show");
    resultBox.querySelector("h2").textContent = "Result Calculated Successfully ✅";
}

// Event Listener
button.addEventListener("click", calculateGrade);