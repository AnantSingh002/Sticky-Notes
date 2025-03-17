let textArea = document.getElementById("notes");
let butt = document.getElementById("notesButton");

let sticky = document.getElementById("stickyNotes");
let coloCode = document.getElementById("color");
let msg = document.getElementById("message");





butt.addEventListener('click', () => {

    if(textArea.value == ""
    ){
        alert("Add Text");
        return;
    }

    // console.log(textArea.value);

    let div = document.createElement("div");
    let para = document.createElement("p");
    let button = document.createElement("button");
    

    div.appendChild(para);
    div.appendChild(button);
    sticky.appendChild(div);

    
    para.innerText = textArea.value;
    button.innerText = "X";
    textArea.value = "";
    
    
    div.style.backgroundColor = coloCode.value;
    div.style.marginBottom="10px";
    div.style.padding = "10px";
    div.style.borderRadius = "5px";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    button.style.background= "transparent";
    button.style.border= "none";

    // console.log(div);

    msg.style.display="none";

    button.addEventListener("click", () => {
        div.remove();

        // Show message again if no notes are left
        if (sticky.children.length === 0) {
            msg.style.display = "block";
        }
    });
    
})

document.getElementById("reset").addEventListener("click",() => {
    sticky.innerHTML="";

    msg.style.display="block";

    button.addEventListener("click", () => {
        div.remove();

        // Show message again if no notes are left
        if (sticky.children.length > 0) {
            msg.style.display = "none";
        }
    });
})