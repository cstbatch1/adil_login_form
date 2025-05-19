document.getElementById("login_form").addEventListener("submit", function(event){
    event.preventDefault();
    
    const userNumInput =document.getElementById("num").value.trim();
    const userPassInput =document.getElementById("pass").value.trim();
    
    const errorMessage= document.getElementById("error");
    
    //     let isValid=true;
    //     // dummy username pass
    //     const correctNum= "01319698855";
    //     const correctPass="698845";
    
    //     if(userNumInput!=correctNum){
        //         error.innerHTML="Invalid pass";
        //         isValid=false;
        //     }
        //     else{
            //         error.style="block";
            
            //     }
            
            //     if(userPassInput!=correctPass){
                //         error.innerHTML="Invalid pass";
                //         isValid=false;
                //     }
                //     else{
                    //         error.style="block";
                    
                    //     }
                    //     if(isValid){
                        //         alert("Login successful");
                        //     }
                        
                        // 
                        
                        
    const validNumbre= /^01[0-9]{9}$/
    const validPassword= /^[A-Za-z0-9]{4,11}$/

    if(!validNumbre.test(userNumInput)){
    errorMessage.textContent=`Please Input valid number`
    errorMessage.style.color="red";
    errorMessage.style.fontWeight="bold";
    errorMessage.style.fontSize=".8em";
    return;

}
if(!validPassword.test(userPassInput)){
    errorMessage.textContent=`Please Input valid password`
    errorMessage.style.color="red";
    errorMessage.style.fontWeight="bold";
    errorMessage.style.fontSize=".8em";
    return;
}

// emtry input 
document.getElementById("num").value="";
document.getElementById("pass").value="";

//new window
window.location.href="dashboard.html"

})

