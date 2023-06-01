var currentFirstNum = 0;
var currentSecondNum = 0;
var currentSign;
var total = 0;

function start_calc(){
    total = 0;
    currentFirstNum = 0;
    currentSecondNum = 0;
    document.getElementById("box").innerHTML = total;

}

function click_one(){
    var one = document.getElementById("one").value;

    if(currentFirstNum == 0){
    currentFirstNum = one;
    }
    else{
        currentSecondNum = one;
    }
}

function click_two(){
    var two = document.getElementById("two").value;

    if(currentFirstNum == 0){
        currentFirstNum = two;
        }
        else{
            currentSecondNum = two;
        }

}

function click_three(){
    var three = document.getElementById("three").value;

    if(currentFirstNum == 0){
        currentFirstNum = three;
        }
        else{
            currentSecondNum = three;
        }

}

function click_four(){
    var four = document.getElementById("four").value;

    if(currentFirstNum == 0){
        currentFirstNum = four;
        }
        else{
            currentSecondNum = four;
        }

}

function click_five(){
    var five = document.getElementById("five").value;
    
    if(currentFirstNum == 0){
        currentFirstNum = five;
        }
        else{
            currentSecondNum = five;
        }

}

function click_six(){
    var six = document.getElementById("six").value;
    
    if(currentFirstNum == 0){
        currentFirstNum = six;
        }
        else{
            currentSecondNum = six;
        }


}

function click_seven(){
    var seven = document.getElementById("seven").value;
    
    if(currentFirstNum == 0){
        currentFirstNum = seven;
        }
        else{
            currentSecondNum = seven;
        }

    
}

function click_eight(){
    var eight = document.getElementById("eight").value;
    if(currentFirstNum == 0){
        currentFirstNum = eight;
        }
        else{
            currentSecondNum = eight;
        }
}

function click_nine(){
    var nine = document.getElementById("nine").value;
    if(currentFirstNum == 0){
        currentFirstNum = nine;
        }
        else{
            currentSecondNum = nine;
        }
}

function click_zero(){
    var zero = document.getElementById("zero").value;
    if(currentFirstNum == 0){
        currentFirstNum = zero;
        }
        else{
            currentSecondNum = zero;
        }
}

function click_plus(){
    var plus = document.getElementById("plus").value;
    currentSign = plus;

}

function click_minus(){
    var minus = document.getElementById("minus").value;
    currentSign = minus;

}

function click_multiply(){
    var multiply = document.getElementById("multiply").value;
    currentSign = multiply;

}

function click_divide(){
    var divide = document.getElementById("divide").value;
    currentSign = divide;

}


function click_equals(){
    var equals = document.getElementById("equals").value;

    if (currentSign == "+"){
    total = parseInt(currentFirstNum) + parseInt(currentSecondNum);
    }

    else if(currentSign == "-"){
        total = parseInt(currentFirstNum) - parseInt(currentSecondNum);

    }

    else if(currentSign == "*"){
        total = parseInt(currentFirstNum) * parseInt(currentSecondNum);

    }
    else{
        total = parseInt(currentFirstNum) / parseInt(currentSecondNum);

    }

    document.getElementById("box").innerHTML = total;
    console.log(currentSign);
}