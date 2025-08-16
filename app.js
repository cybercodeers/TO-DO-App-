var list = document.getElementById("list-item")
var addbtn =document.getElementById("addbtn")


function AddEelement() {
     var input = document.getElementById("input") 
     // if(!input.value){
     //      addbtn.disabled = true
     //      return
     // }
     var li = document.createElement("li")
     var text = document.createTextNode(input.value)
     input.value=""
     list.appendChild(li)
     li.appendChild(text)
     li.setAttribute("class","list")
     //edit button 
     var editbutton = document.createElement("button")
     var edittext = document.createTextNode("✎")
     editbutton.appendChild(edittext)
     li.appendChild(editbutton)
     editbutton.setAttribute("class","editBtn")
     
     
     var deletebutton = document.createElement("button")
     var deletetext = document.createTextNode("🗑️")
     deletebutton.appendChild(deletetext)
     li.appendChild(deletebutton)
     deletebutton.setAttribute("class","deletebutton")

}

function clearAll(){
     list.innerHTML=""
}