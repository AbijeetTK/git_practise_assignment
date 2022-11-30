\\check palindrome

let str="racecar";
let reverse="";
    for(let i=((str.length)-1);i>=0;i--)
    {
        reverse+=str[i];
    }
    if (str==reverse){
        console.log("Yes");
    }
    else {
        console.log("No");
    }
  