//Check prime
let check=true;
    for (let i=2;i<num;i++){
        if (num%i==0){
            check=false;
        }
        
        
    }
    if (check==false){
        console.log("Yes");
    }
    else {
        console.log("No");
    }