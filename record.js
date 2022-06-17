// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfunction);
function myfunction(event){
    event.preventDefault()
    let names=document.querySelector("#name").value
    let exp=document.querySelector("#exp").value
    let mail=document.querySelector("#email").value
    let mob=document.querySelector("#mbl").value
    var tr=document.createElement("tr");
    
    var td1=document.createElement("td");
    td1.innerText=names
   
    var td4=document.createElement("td");
    td4.innerText=exp;
    var td5=document.createElement("td")
    td5.innerText=mail;
    var td6=document.createElement("td");
    td6.innerText=mob;

    var td7=document.createElement("td")
    var a=Number(exp);
    if(a>16){
        td7.innerText="Invite Sccesfull"
    
    }else{
        td7.innerText="Sorry Not sufficient"
    }
    var td8=document.createElement("td")
    td8.innerText="Claim"
    td8.style.cursor="pointer"
    td8.style.backgroundColor="blue"
    td8.style.color="black"
    td8.addEventListener("click",function(event){
        event.target.parentNode.remove();
    })


    tr.append(td1,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);
}