const passwordbox=document.getElementById("password");
const length=10;
const generateButton=document.getElementById("generatebtn");
const copybtn=document.getElementById("copy");
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$%^&*()+<>?~_-={}[]|";
const allchars=upperCase+lowerCase+number+symbol;

 function generatepassword(){
    let  password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
        password+=allchars[Math.floor(Math.random()*allchars.length)];

    }
    passwordbox.value=password;
}
function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");
}
copybtn.addEventListener("click",()=>{
    copyPassword();
})
generateButton.addEventListener("click",()=>{
   generatepassword();
})
