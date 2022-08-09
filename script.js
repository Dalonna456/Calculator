const doMath = (a, sign, b) =>{
    switch(sign){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "/":
            return a / b;
        case "*":
            return a * b;
    }
    console.log(doMath)
}

const validSigns = ['+', '-','/', '*', '=', '%'];

const parseInput = (inputString)=>{
    const chars = inputString.split('');
    const res = [];

    let previosNumbers = "";

    for(let char of chars){

        if(validSigns.includes(char)){

            if(previosNumbers!==""){
                res.push(Number(previosNumbers));
            }
            res.push(char);

            continue;
        

        };

        if(Number(char)!==NaN){
            previosNumbers +=char;
        };

    if(previosNumbers !==""){
        res.push(previosNumbers);
        };
        
    return res;

}
}
