function validatepassword(){
    let Current=document.getElementById("current_pass").value;

    let cheakCurrent=document.getElementById("Confirm_pass").value;
    let n=8;
    console.log(Current,cheakCurrent);

        let message = document.getElementById("message");

       if(Current.length !=0){
        // if(Current === cheakCurrent){
        //     message.textContent= " Password Match "
        //     console.log("Password Vailidation Successfull");
        //     message.style.backgroundColor="#3ae374"
        // }
         if(cheakCurrent.length > n ){
         message.textContent="Valid email and password!" ; 
         message.style.background="green"
            console.log("Vailidating Password  Successfull");

          }

    
        else{
            message.textContent= "Invalid email or Password ! ";  
            message.style.backgroundColor="red"
        
            console.log("Password Vailidation UnSuccessfull");
        }
       }
       else {
         alert("Password can't be Empty");
       } 
}
