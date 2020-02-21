function submit(){
    var num,num1;
    num = document.getElementById('num');
    num1 = num.value*5;
    num.innerHTML=num1;
    num.value=num1;
    console.log(num1);
}
