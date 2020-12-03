$(document).ready(
    function () {
        $("#submit_student").click(submitDetails);
        $("#sort_name").click(sortByName);
        $("#sort_percent").click(sortByPercent);

        var arrayOfGrades = [];

        function submitDetails(event) {
            event.preventDefault();

            var firstName = $("#first_name").val();
            var lastName = $("#last_name").val();
            var pointsEarned = parseInt($("#points_earned").val());
            var pointsPossible = parseInt($("#points_possible").val());
            var finalGrade = pointsEarned/pointsPossible*100;
            var letterGrade = "";

            if (finalGrade >= 90){
                letterGrade = "A";
            }
            else if (finalGrade >= 80 && finalGrade < 90){
                letterGrade = "B";
            }
            else if (finalGrade >= 70 && finalGrade <80){
                letterGrade = "C";
            }
            else if (finalGrade >= 60 && finalGrade < 70) {
                letterGrade = "D";
            }
            else
            {
                letterGrade = "F";
            }

            var studentGrade =
                {
                    firstName: firstName,
                    lastName: lastName,
                    fullName: firstName + " " + lastName,
                    pointsEarned: pointsEarned,
                    pointsPossible: pointsPossible,
                    finalGrade: finalGrade,
                    letterGrade: letterGrade
                }

            arrayOfGrades.push(studentGrade);
            var arrayOutput = "";
            for (var x of arrayOfGrades){
                arrayOutput += x.fullName + ": " + x.pointsEarned + ", " + x.pointsPossible + ", " + x.finalGrade + ", " + x.letterGrade +"<br>"
            }
            $("#showArray").html(arrayOutput);
        }


        function sortByName(event){
            event.preventDefault();
            arrayOfGrades.sort(function(a,b) {
                var fullA = a.fullName.toLowerCase();
                var fullB = b.fullName.toLowerCase();
                if (fullA<fullB){
                    return -1;
                }
                else if (fullA>fullB){
                    return 1;
                }
                else
                    return 0;
            });
            var arrayOutput = "";
            for (var x of arrayOfGrades){
                arrayOutput += x.fullName + ": " + x.pointsEarned + ", " + x.pointsPossible + ", " + x.finalGrade + ", " + x.letterGrade +"<br>"
            }
            $("#showArray").html(arrayOutput);
        }

        function sortByPercent(event){
            event.preventDefault();
            arrayOfGrades.sort(function(a,b) {
                return (b.finalGrade - a.finalGrade);
            });
            var arrayOutput = "";
            for (var x of arrayOfGrades){
                arrayOutput += x.fullName + ": " + x.pointsEarned + ", " + x.pointsPossible + ", " + x.finalGrade + ", " + x.letterGrade +"<br>"
            }
            $("#showArray").html(arrayOutput);
        }
    }
)