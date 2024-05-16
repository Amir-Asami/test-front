
let UserNameInput=document.querySelector(".input_Email")
let PasswordInput=document.querySelector(".input_Passwor")
function btn(){
 //alert('click')
    let PasswordValue=PasswordInput.value
    let UserNameValue=UserNameInput.value
    if(UserNameValue.length<12|| PasswordValue<8){
alert("Error")
    }
    console.log(PasswordInput,UserNameInput)
}