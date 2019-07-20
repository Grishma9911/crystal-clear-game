var randomNumber1 = Math.floor(Math.random() * 11) + 1;
var randomNumber2 = Math.floor(Math.random() * 11) + 1;
var randomNumber3 = Math.floor(Math.random() * 11) + 1;
var randomNumber4 = Math.floor(Math.random() * 11) + 1;

var wn = 0;
var ls = 0;
console.log("num 1: " + randomNumber1)
console.log("num 2: " + randomNumber2)
console.log("num 3: " + randomNumber3)
console.log("num 4: " + randomNumber4)

var total = 0;

//random number for computer
var computerChoice = Math.floor(Math.random() * (120-19)) + 19;

$("#num").html(computerChoice)

//if else statment for win, lose
function win(){
    console.log("running win!");
    wn++;
    $("#user-score").html("WIN!!!!: " + wn);
    reset();
}

function lose(){
    console.log("running lose!");
    ls++;
    $("#computer-score").html("LOSER!!!!: " + ls);
    reset();
}


$("#one").on("click", function() {
    console.log("rand Numb One: " + randomNumber1);
    total = total + randomNumber1;
    $("#st").html(total)
    console.log("computerChoice: " + computerChoice)
    if(total == computerChoice){
        win();
    }else if(total>computerChoice){
        lose();
        }
    }
);

$("#two").on("click", function() {
    total = total + randomNumber2;
    $("#st").html(total)
    if(total == computerChoice){
        win();
    }else if(total>computerChoice){
        lose();
        }
});

$("#three").on("click", function() {
    total = total + randomNumber3;
    $("#st").html(total)
    if(total == computerChoice){
        win();
    }else if(total>computerChoice){
        lose();
        }
});

$("#four").on("click", function() {
    total = total + randomNumber4;
    $("#st").html(total)
    if(total == computerChoice){
        win();
    }else if(total>computerChoice){
        lose();
        }
});

function reset() {
    computerChoice = Math.floor(Math.random()*120-19)+19;
    console.log(computerChoice)

    $("#num").html(computerChoice);

var randomNumber1 = Math.floor(Math.random() * 11) + 1;
var randomNumber2 = Math.floor(Math.random() * 11) + 1;
var randomNumber3 = Math.floor(Math.random() * 11) + 1;
var randomNumber4 = Math.floor(Math.random() * 11) + 1;

total = 0;
$("#st").html(total);

}












// var usersChoice = "";
// $("#one").on("click", function(){
//     usersChoice = "one";
// });

// var randomNumber = Math.floor(Math.random() * 5)
// $("#one").on("click", function() {
//     var randomNumber = Math.floor(Math.random() * 5)
//     console.log(randomNumber)
// });


//give random number to picture2 
// $("#two").on("click", function(){
//     usersChoice = "two";
// });

// var randomNumber = Math.floor(Math.random() * 10)
// $("#two").on("click", function() {
//     var randomNumber = Math.floor(Math.random() * 10)
//     console.log(randomNumber)
// });


//give random number to picture3
// $("#three").on("click", function(){
//     usersChoice = "three";
// });

// var randomNumber = Math.floor(Math.random() * 15)
// $("#three").on("click", function() {
//     var randomNumber = Math.floor(Math.random() * 15)
//     console.log(randomNumber)
// });


//give random number to picture4
// $("#four").on("click", function(){
//     usersChoice = "four";
// });

// var randomNumber = Math.floor(Math.random() * 20)
// $("#four").on("click", function() {
//     var randomNumber = Math.floor(Math.random() * 20)
//     console.log(randomNumber)
// });


//give random num to start
// $("#num").on("click", function() {
// var randomNumber = "";
// });


// $("#num").on("click", function() {
//     var randomNumber = Math.floor(Math.random() * 50)
//     console.log(randomNumber)
// });

//total sum for totalscore
// var totalScore = 0;

// $("#st").html(totalScore)

// //if else statment for win and lose
// if(userScore)

// function win(userChoice, computerChoice) {
//     userScore++;
//     document.getElementById("user-score").innerHTML = userScore + " :";
//     result_p.innerhtml = convertToWord(userChoice) + " beats " + convertToWord(computerChoice)  + "You Win.";
// }

// function loose(userChoice, computerChoice) {
//     computerScore++;
//     computerScore_span.innerhtml = computerScore;
//     result_p.innerhtml = convertToWord(computerChoice) + " beats " + convertToWord(userChoice)  + "You lost.";
// }

// function game(userChoice) {

//     var computerChoice = getComputerChoice();
//     switch (userChoice = randomNumber + "one" + "two" + "three" + "four") {
//         case '"one" + "two" + "three" + "four"':
//         case "pr": 
//         case "sp":
//             win(userChoice, computerChoice);
//             break;
//         case "rp":
//         case "ps": 
//         case "sr":
//             lose(userChoice, computerChoice);
//             break;
//     }

// }

// for(var i = 0; i < 4; i++){
//     var random = Math.floor(Math.random() * 11)+1;
//     var crystal= $(".");
//     crystal.attr({
//         "data-random": random
//     });
// };