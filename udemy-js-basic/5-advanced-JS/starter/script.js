/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number)
 (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it
 on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere
 with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/**
function Question(question, answers, rightAnswer) {
    this.question = question;
    this.answer = answers;
    this.rightAnswer = rightAnswer;
}

let questionOne, questionTwo, questionThree, questions, randomNum, input, i;

questionOne = new Question('tko sam ja?', ['jan', 'ivan', 'rule'], '0');
questionTwo = new Question('tko sjedi pored mene?', ['isus', 'ivan', 'marija'], '1');
questionThree = new Question('koliko imam godina?', ['17', '18', '19'], '2');

questions = [questionOne, questionTwo, questionThree];

// Getting a random number between two values -> Math.random() * (max - min) + min
randomNum = Math.round(Math.round(Math.random() * 2));

printQuestion(randomNum);

//function printQuestion(randomNum) {
//    console.log(questions[randomNum].question);
//    for (i = 0; i < questions[randomNum].answer.length; i++)
//        console.log(i + ': ' + questions[randomNum].answer[i]);
//    input = prompt('UKUCAJ BROJ SA TOCNIM ODGOVOROM');
//    input === questions[randomNum].rightAnswer ? console.log('DA!') : console.log('NE!');
//}

// puno ljepsi primjer sa prototype-om!
Question.prototype.printQuestion = function() {
    console.log(this.question);
    for (i = 0; i < this.answer.length; i++)
        console.log(i + ': ' + this.answer[i]);
    input = prompt('UKUCAJ BROJ SA TOCNIM ODGOVOROM');
    input === this.rightAnswer ? console.log('DA!') : console.log('NE!');
}

questions[randomNum].printQuestion();
*/



/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after
 displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer.
In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of
 closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
 */

let questionOne, questionTwo, questionThree, questions, randomNum, input, score = 0, i;

function Question(question, answers, rightAnswer) {
    this.question = question;
    this.answer = answers;
    this.rightAnswer = rightAnswer;
}

Question.prototype.printQuestion = function() {
    console.log(this.question);
    for (i = 0; i < this.answer.length; i++)
        console.log(i + ': ' + this.answer[i]);
    displayScore();
    questions[randomNum].checkQuestion();
};

Question.prototype.checkQuestion = function() {
    input = prompt('Input number of the right answer: ');
    while (input !== 'exit') {
        if(parseInt(input) === this.rightAnswer) {
            console.log('[ CORRECT! ]');
            console.log('___________________');
            score++;
        } else {
            console.log('[ NOT CORRECT! ]');
            console.log('___________________');
        }
        randomNum = getRandomNumber()
        questions[randomNum].printQuestion();
    }
};

function getRandomNumber() {
    return Math.round(Math.round(Math.random() * 2));
}

function displayScore(){
    console.log('Your score is: ' + score);
}

questionOne = new Question('who am I?', ['Jan', 'Tommy', 'Felix'], 0);
questionTwo = new Question('Who sits beside me?', ['Jesus', 'Ivan', 'Filip'], 1);
questionThree = new Question('How old am I?', ['17', '18', '19'], 2);

questions = [questionOne, questionTwo, questionThree];

randomNum = getRandomNumber()
questions[randomNum].printQuestion(randomNum);