let scores, currentScore, player, gamePlaying, rolledSix;
init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        if (dice1 !== 1 && dice2 !== 1) {
            currentScore += dice1 + dice2;
            document.getElementById('current-' + player).textContent = currentScore;
        } else {
            nextPlayer()
        }

        if ((dice1 === 6 || dice2 === 6) && rolledSix === false)
            rolledSix = true;
        else if ((dice1 === 6 || dice2 === 6) && rolledSix === true){
            nextPlayer();
            rolledSix = false;
        }else if (dice1 === 6 && dice2 === 6){
            nextPlayer();
            rolledSix = false;
        } else
            rolledSix = false;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[player] += currentScore;

        document.getElementById('score-' + player).textContent = scores[player];

        let winScore = document.getElementById('input-score').value;

        if (scores[player] >= winScore) {
            document.getElementById('name-' + player).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + player + '-panel').classList.add('winner');
            document.querySelector('.player-' + player + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    player === 0 ? player = 1 : player = 0;
    currentScore = 0;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init() {
    scores = [0, 0];
    currentScore = 0;
    player = 0;
    gamePlaying = true;
    rolledSix = false;

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
};

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

