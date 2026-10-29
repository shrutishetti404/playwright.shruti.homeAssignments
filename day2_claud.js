// 90–100: Grade A
//80–89: Grade B
//70–79: Grade C
//60–69: Grade D
//50–59: Grade E
//0–49: Grade F (Fail)
//Below 0 or above 100: Invalid mark


var score = -60;

if (score >= 90 && score <= 100) {
    console.log("Grade A");
}
else if (score >= 80 && score < 90) {
    console.log("Grade B");
}
else if (score >= 70 && score < 80) {
    console.log("Grade C");
}
else if (score >= 60 && score < 70) {
    console.log("Grade D");
}
else if (score >= 50 && score < 60) {
    console.log("Grade E");
}
else if (score >= 0 && score < 50) {
    console.log("Grade F - Fail");
}
else {
    console.log("Invalid mark");
}


