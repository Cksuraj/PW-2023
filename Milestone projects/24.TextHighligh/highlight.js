
const btn=document.getElementById("Highlight")
function highlightWords() {
    const txt = document.getElementById("targetp").innerText;
    let output = "";
    let words = txt.split(" ");
    let size = 8  
    let replacementword = ""; 
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length >= 8) { 
            replacementword = "<span class='lightext'>" + word + "</span>";  
        } 
        else {
            replacementword = word;  
        }
        output = output + " " + replacementword + " ";  
    }

    return output; 
}

document.getElementById("targetp").innerHTML = highlightWords();  

