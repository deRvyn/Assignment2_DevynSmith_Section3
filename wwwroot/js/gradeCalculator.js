

//function to calculate grade
function gradeCalculator() {
    //variables
    let assign = parseFloat($("#Assignments").val());
    let group = parseFloat($("#Group").val());
    let quizzes = parseFloat($("#Quizzes").val());
    let exams = parseFloat($("#Exams").val());
    let intex = parseFloat($("#Intex").val());
    let totalGrade = 0.0;
    let letterGrade = '';


    //error checking to make sure numbers have been entered
    if (Number.isFinite(assign) === true && assign <= 100 && assign >= 0 &&
        Number.isFinite(group) === true && group <= 100 && group >= 0 &&
        Number.isFinite(quizzes) === true && quizzes <= 100 && quizzes >= 0 &&
        Number.isFinite(exams) === true && exams <= 100 && exams >= 0 &&
        Number.isFinite(intex) === true && intex <= 100 && intex >= 0) {

        //calculating total grade
        totalGrade = assign * .5 + group * .1 + quizzes * .1 + exams * .2 + intex * .1;

        //assinging letter grade
        if (totalGrade >= 94) {
            letterGrade = 'A';
        } else if (totalGrade >= 90) {
            letterGrade = 'A-';
        } else if (totalGrade >= 87) {
            letterGrade = 'B+';
        } else if (totalGrade >= 84) {
            letterGrade = 'B';
        } else if (totalGrade >= 80) {
            letterGrade = 'B-';
        } else if (totalGrade >= 77) {
            letterGrade = 'C+';
        } else if (totalGrade >= 74) {
            letterGrade = 'C';
        } else if (totalGrade >= 70) {
            letterGrade = 'C-';
        } else if (totalGrade >= 67) {
            letterGrade = 'D+';
        } else if (totalGrade >= 64) {
            letterGrade = 'D';
        } else if (totalGrade >= 60) {
            letterGrade = 'D-';
        } else if (totalGrade < 60) {
            letterGrade = 'E';
        }
        //alerting of final grade percentage and letter
        alert("Final Percentage: " + totalGrade.toFixed(2) + "%\n" + "Final Letter Grade: " + letterGrade);
    } else {
        //alert with an error message
        alert("Please correct your inputs, see error messages below the form");
    }
};