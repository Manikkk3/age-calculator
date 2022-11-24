

let birthdate = document.getElementById("birthday");

const button = document.getElementById("age_btn");

const answer = document.getElementById("age-answer");

const answerContainer = document.querySelector('.answer')



button.addEventListener('click', function(){
    
    const date = new Date();
    let presentDate = date.getFullYear();
    
    let Birthdate = birthdate.value;
    let BirthYear = Birthdate.substring(0, 4);
    let presentage = presentDate - BirthYear;
    
    if(Birthdate != 0){
        answerContainer.classList.remove("hide");

        answer.innerHTML = presentage + "years." ;
    }
    else{
        window.alert("Please Enter your birthdate!!!")
    }
    
    
})


