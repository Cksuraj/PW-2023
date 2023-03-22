const text=document.getElementById("text");
const change=document.getElementById("change");

function changetext(){
    text.textContent="PW Skills";
}

change.addEventListener("click", changetext );

function backtext(){
    text.textContent= " The most affordable learning platform " ;
}

change.addEventListener("dblclick", backtext );
