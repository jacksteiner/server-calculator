$(readyNow);

function readyNow() {
    console.log('jQuery ready!');
    $('#add').on('click', add);
    $('#subtract').on('click', subtract);
    $('#multiply').on('click', multiply);
    $('#divide').on('click', divide);
    $('#equals').on('click', sendMathToServer);
    $('#clear').on('click', clear);

}

let currentModifier = ('');
console.log(currentModifier);

function sendMathToServer() {
    $.ajax({
        type: 'POST',
        url: '/mathhistory',
        data: {
            inputone: $('#numberinput-one').val(),
            modifier: currentModifier,
            inputtwo: $('#numberinput-two').val(),
        }
    }).then(function (response){
        // second ajax function goes here
        getAnswer()
        console.log('The answer is', answer);
        // append answer
    })
}

function getAnswer (){
    console.log('in answer function');
    $.ajax({
        type: 'GET',
        url: '/mathhistory'
    }).then(function (response){
        console.log(response);
        for (let i = 0; i < response.length; i++){
            let answer = response[i];
            console.log(answer);
            $('#history').append(`
                <div>
                    <ul>
                    <li>${answer.inputone} ${answer.modifier} ${answer.inputtwo} = ${answer.answer}</li>
                    </ul>
                </div>
            `)
        }
    });
}


function add() {
    console.log('Add');
    currentModifier = '+'
}

function subtract() {
    console.log('Subtract');
    currentModifier = '-'
}

function multiply() {
    console.log('Multiply');
    currentModifier = '*'
}

function divide() {
    console.log('Divide');
    currentModifier = '/'
}

function clear() {
    console.log('Clear');
    $('#numberinput-one').val('');
    $('#numberinput-two').val('');
}