const age = document.getElementById("age")


function mycage(z){
    if(z.checked == true){
        age.min = 9
    }
   
    else{
        age.min = 13
    }
}

function mycloop(){
    setTimeout(() => {
        mycloop()
        
        if(age.value > 0 && age.value <13){
            diss.disabled = true;
            diss2.disabled = true;
            diss3.disabled = true;
            diss4.disabled = true;
            diss5.disabled = true;
            diss6.disabled = true;
            diss7.disabled = true;
            diss8.disabled = true;
            diss9.disabled = true;
            diss10.disabled = true;
            diss11.disabled = true;
        }

        else{
            diss.disabled = false;
            diss2.disabled = false;
            diss3.disabled = false;
            diss4.disabled = false;
            diss5.disabled = false;
            diss6.disabled = false;
            diss7.disabled = false;
            diss8.disabled = false;
            diss9.disabled = false;
            diss10.disabled = false;
            diss11.disabled = false;
        }

    }, 0001);
}

setTimeout(() => {
    mycloop()
}, 0001);