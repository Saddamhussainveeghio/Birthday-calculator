let userInput = document.getElementById("date")
userInput.max = new Date().toDateString().split("T")[0];
let age = document.getElementById("age")
 
function calculateAge(){
    let birthDate = new Date(userInput.value);
    let dd = birthDate.getDate();
    let mm = birthDate.getMonth() + 1;
    let yy = birthDate.getFullYear();

    let today = new Date();

    let dd1 = today.getDate();
    let mm1 = today.getMonth() + 1;
    let yy1 = today.getFullYear();
    let dd2, mm2, yy2;
       yy2 = yy1 - yy;

    if(mm1 >= mm){
        mm2 = mm1 -mm;
    }
    else{
        yy2--;
        mm2 = 12 + mm1 - mm;
    }
    if(dd1 >= dd){
        dd2 = dd1 - dd;
    }
    else{
        mm2--;
        dd2 = getDaysInMonth(yy, mm) + dd1 - dd;
    }
    if(mm2 < 0){
    mm2 = 11;
    yy2--;
    }
    age.innerHTML = `You are $(yy2) years, $(mm2) months and $(dd2) days old`;
} 
function getDaysInMonth(year , month){
    return new Date(year , month, 0).getDate();
}
calculateAge();