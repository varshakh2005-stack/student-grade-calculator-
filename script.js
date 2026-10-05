function calculateGrade() {
    let name = document.getElementById("studentName").value;

    let marks1 = Number(document.getElementById("subject1").value);
    let marks2 = Number(document.getElementById("subject2").value);
    let marks3 = Number(document.getElementById("subject3").value);
    let marks4 = Number(document.getElementById("subject4").value);
    let marks5 = Number(document.getElementById("subject5").value);

    if (name === "" || 
        isNaN(marks1) || isNaN(marks2) ||
        isNaN(marks3) || isNaN(marks4) ||
        isNaN(marks5)) {
        
        document.getElementById("result").innerHTML =
            "Please enter all details.";
        return;
    }

    if (marks1 > 100 || marks2 > 100 ||
        marks3 > 100 || marks4 > 100 ||
        marks5 > 100 ||
        marks1 < 0 || marks2 < 0 ||
        marks3 < 0 || marks4 < 0 ||
        marks5 < 0) {
        
        document.getElementById("result").innerHTML =
            "Marks must be between 0 and 100.";
        return;
    }

    let total = marks1 + marks2 + marks3 + marks4 + marks5;
    let percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let result = percentage >= 40 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        <h3>Student Result</h3>
        <strong>Name:</strong> ${name}<br>
        <strong>Total:</strong> ${total} / 500<br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}%<br>
        <strong>Grade:</strong> ${grade}<br>
        <strong>Result:</strong> ${result}
    `;
}
function resetForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("subject1").value = "";
    document.getElementById("subject2").value = "";
    document.getElementById("subject3").value = "";
    document.getElementById("subject4").value = "";
    document.getElementById("subject5").value = "";
    document.getElementById("result").innerHTML = "";
}