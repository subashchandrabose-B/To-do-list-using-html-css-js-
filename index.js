const inp=document.getElementById("inp");
const ul=document.getElementById("ul1");
function addtask(){
    const t=inp.value;
    if(t===''){
        alert("You must write something");
    }
    else{
        const x=document.createElement("li");
        x.innerHTML=t;
        x.setAttribute("class","unchecked");
        ul.append(x);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        x.appendChild(span);
    }
    inp.value="";
    saveData();
}
ul.addEventListener("click",function(event){
    if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
    else if(event.target.tagName==="LI"){
        if(event.target.className==="unchecked"){
            event.target.classList.remove("unchecked");
            event.target.classList.add("checked");
            saveData();
        }
        else if(event.target.className==="checked"){
            event.target.classList.remove("checked");
            event.target.classList.add("unchecked");
            saveData();
        }
    }
});
function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}
function show(){
    ul.innerHTML=localStorage.getItem("data");
}
show();
 