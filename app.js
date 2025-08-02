let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// add event listner
btn.addEventListener("click", function(event){
    console.log("clicked");
    // add element for list 
    let item= document.createElement("li");
    item.innerText= inp.value;
    ul.appendChild(item);
    inp.value=""; // after adding input is clear "ready for next input "

    // create element for button

    let delbtn = document.createElement("button")
    delbtn.innerText="delete";
    delbtn.classList.add("delete"); 

    item.appendChild(delbtn);


});

// apply event listner on unorder list  on parent element through which it applies on its child 
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("item deleted");

    }
});


