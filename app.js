let el = document.getElementById("result");
let input = document.getElementById("inputbox");

function Sorted_Array() {
    let value=input.value.split(",");
    value.sort(function(a,b){return a-b});
    el.innerHTML=value.join(",");
}

function Reversed_Array(){
    let value=input.value.split(",");
    el.innerHTML = value.reverse().join(",");
}

function Even(){
    let number=input.value.split(",");
    const even=number.filter((num) => num%2==0);
    el.innerHTML= ("Even : "+even);
}
function Odd(){
    let number=input.value.split(",");
    const odd=number.filter((num) => num%2!=0);
    el.innerHTML = ("Odd: "+odd);
}

function Maximum(){
    let num=input.value.split(",");
    let max=num[0];
    for(let i=0;i<num.length;i++){
       if(max<num[i]){
        max=num[i];
    }
    }
    el.innerHTML = ("Maximum : "+max);
}
    function Minimum()
    {
        let num=input.value.split(",");
    let min=num[0];
    for(let i=0;i<num.length;i++){
       if(min>num[i]){
        min=num[i];
    }
    }
    el.innerHTML = ("Minimum : "+min);
}
