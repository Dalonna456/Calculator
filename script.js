let number = document.querySelectorAll('.number');
    console.log(number);

let operations = document.querySelectorAll('.operation');
    console.log(operations);

let decimalBtn = document.getElementById('decimal');
    console.log(decimalBtn);

let result = document.getElementById('result');
    console.log(result);

let ce = document.getElementById('ce');
    console.log(ce);


for(let i=0; i<number.length; i++){
    let nmb = number[i];
      nmb.addEventListener('click', numberPress);
};

for(let i=0; i<operations.length; i++){
    let operationBtn = operations[i];
      operationBtn.addEventListener('click', operation);
};

 
ce.addEventListener('click', function(e){
    console.log('Click on the button delete ');
});

result.addEventListener('click', function(e){
    console.log('Click on the button with a result ');
});

decimalBtn.addEventListener('click', function(e){
    console.log('Click on the button with a decimal ');
});


function numberPress(){
    console.log('Click on the button with a number ');
};

function operation(){
    console.log('Click on the button with an operation ');
};

function decimal(){
    console.log('Click on the button with a decimal ');
};


