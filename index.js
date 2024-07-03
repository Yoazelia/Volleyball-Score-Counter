let A_Score = 0
let B_Score = 0
let A_Score_text = document.getElementById("A")
let B_Score_text = document.getElementById("B")


function increaseAScoreOne(){
    A_Score += 1
    A_Score_text.textContent = A_Score
}

function increaseBScoreOne(){
    B_Score += 1
    B_Score_text.textContent = B_Score
}

function decreaseAScoreOne(){
    A_Score -= 1
    if (A_Score < 0){
        A_Score = 0
    }   
    A_Score_text.textContent = A_Score
}

function decreaseBScoreOne(){
    B_Score -= 1
    if (B_Score < 0){
        B_Score = 0
    }   
    B_Score_text.textContent = B_Score
}

function resetScores(){
    A_Score = 0
    B_Score = 0
    A_Score_text.textContent = A_Score
    B_Score_text.textContent = B_Score
}
