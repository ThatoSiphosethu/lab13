$(document).ready(function ()
{
$("button").click(score)

function score() {
    var earned = parseInt($("#earnedPoints").val());

    var possible = parseInt($("#totalPoints").val());

    var name = $("#firstName").val();

    var last = $("#lastname").val();

    var gradePercentage = (earned / possible) * 100;

    var letter;

    if (gradePercentage >= 90)
    {
        letter = "A"
    }

    else if (gradePercentage >= 80)
    {
        letter = "B"
    }

    else if (gradePercentage >= 70)
    {
        letter = "C"
    }
    else if (gradePercentage > 60)
    {
        letter = "D"
    }
    else {
        letter = "F"
    }

    $("#output").text("Your grade is:" + letter)

    var studentGrades = {
        firstName: name,
        lastName: last,
        pointsEarned: earned,
        possiblePoints: possible,
        gradeLetter : letter,
        gradePercentage: gradePercentage
    }
    console.log(studentGrades)
}


});