function check() { 
    let form=document.forms["formularz"];
    let filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let canSubmit = true;
    if(form.name.value == ""){
        canSubmit = false;            
        }
    if(form.surname.value == ""){
        canSubmit = false;
        }
    if(!filter.test(form.email.value)) {
        canSubmit = false;
        }
    if(canSubmit){
            document.getElementById("submit").disabled = false;            
        }
    document.getElementById("submit").onclick = function(){
            alert("Dzięki za info.");
        }
    }      
