function palindrome_checker(event) {
    event.preventDefault(); 

    let str = document.getElementById("pal").value;
    let data="";

    str=str.toLowerCase().replaceAll(" ","");
    if(str === str.split("").reverse().join(""))
        data=`<h4>Your input is <span>Palindrome</span></h4>`;
    else
        data=`<h4>Your input is <span>not Palindrome</span></h4>`;

    document.getElementById("pal_result").innerHTML= data;
}

function prime_number_checker(event) {
    event.preventDefault(); 

    let num = Number(document.getElementById("prime").value);
    let data="";


    let prime=true;
    if(num<2) {
        prime=false;
    }
    for(let i=2;i<num;i++) {
        if(num%i==0) {
            prime=false;
            break;
        }
    }

    if(prime)
        data=`<h4>Your input is <span>a Prime Number</span></h4>`;
    else
        data=`<h4>Your input is <span>not a Prime Number</span></h4>`;
    
    document.getElementById("prime_result").innerHTML= data;
}