let low = 1;

let high = 10;

for(i =1;i<=3;i++){

    let gusessNumber=parseInt(prompt("Enter the number from 1 to 10"));

    let correct_ans= Math.floor(Math.random()*10) + 1;
    
    if(gusessNumber < correct_ans){

       alert("Correct answer is greater!")

    }else if(gusessNumber > correct_ans){

        alert("Correct answer is smaller!")
    }
    else if(gusessNumber = correct_ans){
        
        alert("You win");
    }
        else{
            alert("You lose!");
        }
}

