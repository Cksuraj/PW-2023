function validatepassword(){
    let Current=document.getElementById("current_pass").value;

    let cheakCurrent=document.getElementById("Confirm_pass").value;

    console.log(Current , cheakCurrent);

        let message = document.getElementById("message");

       if(Current.length !=0){
        if(Current === cheakCurrent){
            message.textContent= " Password Match "
            console.log("Password Vailidation Successfull");
            message.style.backgroundColor="#3ae374"
        }
        else{
            message.textContent= "Password does't match"
            
            message.style.backgroundColor="#ff4d4d"
            
            console.log("Password Vailidation UnSuccessfull");
        }
       }
       else {
         alert("Password can't be Empty");
       } 
}
