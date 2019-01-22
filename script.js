// Passing functions as arguments
/*
years = [1989, 1993, 2003, 1967, 1957];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
};

function calcAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el > 18 && el < 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
};

var ages = arrayCalc(years, calcAge);
var adults = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(adults);
console.log(rates);


// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {console.log(name + ', can you please explain what UX design is?');}
    } else if (job === 'teacher') {
        return function(name) {console.log('What subject do you teach' + ', ' + name + '?');}
    } else {
        return function(name) {console.log('Hello! ' + name + ', what do you do?');}
    }
};


var teacherQ = interviewQuestion('teacher');
var designerQ = interviewQuestion('designer');
var anythingQ = interviewQuestion('anything');

designerQ('Noortaz');
teacherQ('Shourav');
anythingQ('Saraf');

interviewQuestion('teacher')('Ravtaz');

// IIFE (Immediately invoked function expression)
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/
/*
(function () {
   var score = Math.random() * 10;
    console.log(score >= 5); 
})();

//console.log(score);

(function (goodLuck) {
   var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck); 
})(5);



///////////
// Closures


function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

//retirement(66)(1990);

function interviewQuestion(job) {
    return function(name) {
        var a;
    if (job === 'designer'){
         a = ', can you please explain what UX design is?'
    } else if (job === 'teacher') {
         a = ', what subject do you teach?'
    } else {
        a = ', what do you do?'
    }
        console.log( name + a);
    };
};

var teacherQ = interviewQuestion('teacher');
var designerQ = interviewQuestion('designer');
var anythingQ = interviewQuestion('anything');

designerQ('Noortaz');
teacherQ('Shourav');
anythingQ('Saraf');




//////////////////////////////
//Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
    console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + '. I\'m a ' + this.age + ' years old ' + this.job + '.');
} else if (style === 'friendly') {
    console.log('Hey! What\'s up? I\'m ' + this.name + '. I\'m a ' + this.age + ' years old ' + this.job + '. Have a nice ' + timeOfDay + '.' );
      }
   }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

years = [1989, 1993, 2003, 1967, 1957];
/*
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
};

function calcAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calcAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);

*/

/******
Coding chalenge 7
*/

var Quiz = function(Q, A, rightAnswer) {
    this.Q = Q,
    this.A = A,
    this.rightAnswer = rightAnswer
};

var nation = new Quiz('Which country do you live in?', ['Bangladesh', 'Canada', 'Australia', 'Indonesia'], '1');
var movie = new Quiz('Which is Noortaz\'s favourite movie?', ['Hulk', 'Ironman', 'Spiderman', 'Batman'], '1');
var book = new Quiz('Who is the writer of the book \'Harry Potter\'?', ['J.K.Rowling', 'Dan Brown', 'Shakespear', 'Will Smith'], '0');

var ques = [nation.Q, movie.Q, book.Q];
var ans = [nation.A, movie.A, book.A];
var ca = [nation.rightAnswer, movie.rightAnswer, book.rightAnswer];

(function Question(ask, reply, answer) {
    var currentScore = 0;
    return function nextQuestion(ask, reply, answer) {
    var number = [0, 1, 2, 3];
    var quesNumber = Math.floor((Math.random() * 3));
    console.log(ask[quesNumber]);
        
    for (j = 0; j < number.length; j++) {
        console.log(number[j] + ': ' + reply[quesNumber][j]) 
    }
    
    var quiz = prompt('TYPE A NUMBER TO ANSWER THE QUESTION. OR TYPE EXIT TO END THE QUIZ');
        if ( quiz === answer[quesNumber]) {
            
            currentScore = currentScore + 1;
            console.log('Correct answer!');
            console.log('Your current score is ' + currentScore);
            console.log('-------------------------')
            nextQuestion(ques, ans, ca);
        } else if (quiz === 'exit') {
            console.log('Your final score is ' + currentScore);
            console.log('-------------------------')
        } else {
            console.log('Wrong Answer!')
            currentScore = currentScore - 1;
            console.log('Your current score is ' + currentScore);
            console.log('-------------------------')
            nextQuestion(ques, ans, ca);
        }
        
    }
    
})()(ques, ans, ca);
























































































