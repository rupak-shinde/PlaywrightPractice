function checkAge(age){
    if(age>=18){
        console.log("You  are old enough to vote ")
    }else{ 
        console.log("Sorry, you must be 18 or older to vote")
    }
    

}
checkAge(10);
checkAge(30);
checkAge(0);

// 
function checkNumber (number){
    if(number > 0)
    {
        console.log('number is +ve');

    }else if (number < 0){
        console.log("Number is _ve");
    }else{
        console.log("Zero number found");
    }
}
checkNumber(10);
checkNumber(-10);
checkNumber(0);

// nested if-else

    function checkGrade(score){
        let grade;
        if(score >= 90){
            grade = 'A';
        }else
        {
            if(score >= 80){
                grade = 'B';
            }
        else
        {
             if(score >= 70){
             grade = 'C';
        }else
        {
            grade = 'D';
        }
      }
    }
    console.log(grade);
}

checkGrade(90);
checkGrade(75);
checkGrade(35)
checkGrade(85)

//
let browser = "Opera";
if (browser == "chrome"){
    console.log("launch chrome");
}
else if (browser == "edge"){
        console.log("Launch chrome");
    }
    else if (browser == "firefox"){
        console.log("Launch firefox");
    }else
    {
        console.log("Plz pass the right browser:")
    }

    

