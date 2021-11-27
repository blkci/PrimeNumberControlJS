let control = false
function primeNumber(x){
    for(let i = 2; i < x; i++){
        if(x % i == 0){
            control = false;
            break;

        }
        else{
            control = true;
        }
    }
    if(control){
        console.log("Prime number.")
    }
    else {
        console.log("Not prime number")
    }

}

primeNumber(17)