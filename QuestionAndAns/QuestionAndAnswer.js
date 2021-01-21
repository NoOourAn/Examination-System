function Question(ques,rightAnswer){
    this.ques = ques;
    this.answers = [];
    this.rightAnswer = rightAnswer;

    this.answers.push(new Answer(rightAnswer));

    this.addNewFakeAnswer = function(){
        for(var i in arguments){
            if(this.answers.length <4){
                //as there is one right answer and maximum three fake answers
                var ans = new Answer(arguments[i]);
                this.answers.push(ans);
            } 
            else
            console.log("maximum no of answers is 4");
        }
    }
}
function Answer(ans){
    this.ans = ans;
}

var questions = [];

q1 = new Question("Which number should come next in the pattern? 37, 34, 31, 28","25");
q1.addNewFakeAnswer("28","20","23");
questions.push(q1);

q1 = new Question("Book is to Reading as Fork is to:","eating");
q1.addNewFakeAnswer("drawing","writing","stirring");
questions.push(q1);

q1 = new Question("What number best completes the analogy? 8:4 as 10:","5");
q1.addNewFakeAnswer("3","7","24");
questions.push(q1);

q1 = new Question("what is the plural of rhinoceros","Rhinoceri");
q1.addNewFakeAnswer("Rhinoceroses","Rhinocery","Rhinocerosi");
questions.push(q1);

q1 = new Question("which number logically follows this series? 4-6-9-6-14-6-...","19");
q1.addNewFakeAnswer("17","6","21");
questions.push(q1);

q1 = new Question("Look at this series: 2, 4, 6, 8, 10, ...What number should come next?","12");
q1.addNewFakeAnswer("11","13","14");
questions.push(q1);

q1 = new Question("Look at this series: 58, 52, 46, 40, 34, . . . What number should come next?","28");
q1.addNewFakeAnswer("26","30","32");
questions.push(q1);

q1 = new Question("Look at this series: 40, 40, 47, 47, 54, . . . What number should come next?","54");
q1.addNewFakeAnswer("40","44","61");
questions.push(q1);

q1 = new Question("Look at this series: 544, 509, 474, 439, . . . What number should come next?","404");
q1.addNewFakeAnswer("414","420","445");
questions.push(q1);

q1 = new Question("Look at this series: 201, 202, 204, 207, . . . What number should come next?","211");
q1.addNewFakeAnswer("210","208","205");
questions.push(q1);


function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick an index within the range
      randomIndex = Math.floor(Math.random() * array.length);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}



questions = shuffleArray(questions);
var container = document.getElementById("Container");

var question = document.getElementById("question");
var timediv = document.getElementById("time");
var marked = document.getElementById("marked");
var btns = document.getElementById("btns");


function displayQuestions(){
    var currentquestion = -1;
    return function(){
        if(currentAnswer !== null){
            calculateGrade(currentAnswer.getAttribute('name'),currentAnswer.firstElementChild.innerHTML);
            currentAnswer = null;
        }
        if(currentquestion < questions.length-1 && arguments[0] !== 'finish'){
            if(arguments[0] === 'prev' && currentquestion !== -1)
                currentquestion--;       /// in case of prev btn
            else if(arguments[0] === 'next' && currentquestion !== 10)
                currentquestion++;      ///in case of next btn
            else if(arguments.length > 0){
                currentquestion = arguments[0];     ///in case of mark btn
                currentquestion = parseInt(currentquestion)-1;
            }
            var Answers = [];
            question.innerHTML = `
            <div class="Question">
            <p>${questions[currentquestion].ques}</p>
            </div>
            `
            Answers = questions[currentquestion].answers;
            Answers = shuffleArray(Answers);
            for(var j=0; j<Answers.length ;j++){
                question.innerHTML += `
                <div class="Answer" tabindex="1" name="${currentquestion}">
                <p>${Answers[j].ans}</p>
                </div>
                `
            }

            
            
            btns.innerHTML = `
            <input type="submit" name="prev" value="Prev" class="btn" id="prevbtn">
            <input type="submit" name="Next" value="Next" class="btn" id="nextbtn">
            <input type="submit" name="${currentquestion+1}" value="Mark" class="btn" id="markbtn">
            <div class="Counter">${parseInt(currentquestion)+1}/${questions.length}</div>
            `
        }
        else{
            var queryString = "?grade=" + SolvedQuestions.length;
            window.location.replace("success.html"+queryString);
        }
    }
}

var nextQues;
var grade;
var currentAnswer = null;
var marked = document.getElementById("marked");
var MarkedQuestions =[];
var SolvedQuestions =[];


window.addEventListener("load",() =>{
    nextQues = displayQuestions();
    nextQues('next');
});

$('body').on('click', '#nextbtn', function(){
    nextQues('next');
});
$('body').on('click', '#prevbtn', function(){
    nextQues('prev');
});

$('body').on('click', '#markbtn', function(){
    var flag=0;
    for(var i =0 ; i<MarkedQuestions.length;i++)
    {
        if(MarkedQuestions[i]===this.name)
        {
                 flag=1 ;
        }
    }
    if (flag ==0){
    MarkedQuestions.push(this.name)
    marked.innerHTML += `
    <input type="submit" name="mark" value="${this.name}" class="btn" id="markedQues"> `
    }
});


$('body').on('click', '#markedQues', function(){
    nextQues(this.value);
});


$('body').on('click', '.Answer', function(){
    currentAnswer = this;
});

$('#submit').on('click', function(){
    nextQues('finish');
});

function calculateGrade(questionNo,chosenAnswer){
    if(questions[questionNo].rightAnswer === chosenAnswer && !SolvedQuestions.includes(questionNo)){
        SolvedQuestions.push(questionNo);
    }
    else if(questions[questionNo].rightAnswer !== chosenAnswer && SolvedQuestions.includes(questionNo)){
        SolvedQuestions.pop(questionNo);
    }
};







            // var success = document.getElementById("success");

            // success.innerHTML =`
            //     Congrats ${getCookie("username")}
            //     <p>Your Grade is ${SolvedQuestions.length}</p>
            // `; 


                        // container.style.display = "none";
            // success.style.display = "flex";
            // success.innerHTML =`
            //     Congrats ${getCookie("username")}
            //     <p>Your Grade is ${SolvedQuestions.length}</p>
            // `; 

            // $('body').load('index.html' +  ' #timeOut');
            // $('body').load('index.html' +  ' #success');


            // var timeout = document.getElementById("timeOut");
            // var success = document.getElementById("success");