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



/*let a = '';
let b ='';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','.'];
const action = ['-','+', '×', '=', '%','÷'];

const out = document.querySelector('main');

function clearAll(){
    a ='';
    b ='';
    sign ='';
    finish = false;
    out.textContent = 0;
}
document.querySelector('.par').onclick = clearAll

document.querySelector('.calculator__buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn'))return;
    if(event.target.classList.contains('par'))return;

}

out.textContent = ''; 


const key = event.target.textContent;

if (digit.inclides(key)) {
    if(b=== '' && sign==='') {
       a += key;

       out.textContent = b;
    } 
    
    else if(a!=='' && b!=='' && finish){
        b = key;
        finish =false;
        out.textContent = b;

    }
    else{
        b += key;
        out.textContent = a;
    }
    console.log(a,b, sign);
 return;

}


if (action.uncludes(key)){
    sign = key;
    out.textContent = sign;

    console.log(a, b, sign);
   return;
}
if(key === '='){
    if(b ==='') b= a;
    switch(sign){
        case"+":
        a= (+a) + (+b);
        break;
        
        case"-":
        a=a-b;
        break;

        case"×":
        a=a*b;
        break;

        case "÷":
        if (b==='0') {
            out.textContent="Error";
            a='';
            b='';
            sign='';
            return;

        }
        a=a/b;
        break;

    }
}*/