(function () {
  var questions = [];
  var rando, answers;

  function score () {
    var  sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();

  function Question(question, answers, correct ){
    this.question = question;
    this.answers = answers;
    this.correct  = correct;
  }
  Question.prototype.chooseQuestion = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ':' + this.answers[i]);
    }
  };
  Question.prototype.correctAnswer = function (ans, cb) {
    var sc;
    if (ans !== this.correct) {
      console.log('sorry you did not get the right answer');
      sc = cb(false);
    }else {
      console.log('you did it champ!');
      sc = cb(true);
    }
    this.displayScore(sc);
  };
  Question.prototype.displayScore = function (score) {
    console.log('your current score is ' + score);
  };
  questions.push(new Question("what is the name of the person who made this", ['Ryan', 'Dale', 'Kaleigh'], 0));
  questions.push(new Question("how cool is javascript?", ['ok.', 'ehhhh.', 'the Bomb!'], 2));
  questions.push(new Question("does it feel amazing to be alive", ['ohhh yeah!!', 'ohhh no!!'], 0));

  function nextQuestion(){
    rando = Math.floor(Math.random() * questions.length);
    questions[rando].chooseQuestion();
    answers = prompt('What is the correct answer?');
    if (answers !== "exit") {
      questions[rando].correctAnswer(parseInt(answers), keepScore);
      nextQuestion();
    }else {
      console.log('bye bye');
    }
  }
  nextQuestion();
})();
