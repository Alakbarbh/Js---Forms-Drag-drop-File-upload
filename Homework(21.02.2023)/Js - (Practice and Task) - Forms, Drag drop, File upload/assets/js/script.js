"use strict"

// let formElem = document.querySelector("form");

// formElem.addEventListener("submit",function(e){
//     e.preventDefault();

//     if (document.getElementById("exampleInputEmail1").value != "") {
//         document.querySelector("span").classList.add("d-none")
//         writeWord(document.getElementById("exampleInputEmail1").value);
//     }else{
//         document.querySelector("span").classList.remove("d-none")
//     }
// })

// function writeWord(word) {
//     document.querySelector("h1").innerText = word;
// }


// document.querySelector("a").addEventListener("click",function(e){
//     e.preventDefault();
//     console.log("clicked a");
// })


// dragElem.ondrag = () => {
//     console.log("dragging");
// }

// dragElem.ondragend = () => {
//     console.log("drag end");
// }





//drag-drop

// let dragElems = document.querySelectorAll(".item");
// let dropElem = document.getElementById("drop-elem");


// dragElems.forEach(element => {
//     element.ondragstart = (e) => {
//         e.dataTransfer.setData("id", element.getAttribute("id"))
//     }
// });


// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }

// dropElem.ondrop = (e) => dropElem.append(document.getElementById(e.dataTransfer.getData("id")));



//alternative way for drag-drop

// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }    

// dragElems.forEach(element => {
//     element.addEventListener("dragstart",function(){
//         dropElem.ondrop = () => {
//             dropElem.append(element)
//         }
//     })
// })




//file upload


// < tr >
// <th scope="row">1</th>
// <td>Mark</td>
// <td>Otto</td>
// </tr >


let uploadIcon = document.querySelector("i");
let table = document.querySelector(".table")

uploadIcon.addEventListener("click", function (e) {
    this.nextElementSibling.click();
})




uploadIcon.nextElementSibling.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader();

        reader.onloadend = (event) => {
            let fileBase64 = event.currentTarget.result;

            table.innerHTML += `<tr>
            <th scope="row">${file.name}</th>
            <td>${file.size / 1024} Kb</td>
            <td>
            <div class="img">
            <img src="${fileBase64}" alt="">
            </div>
            </td>
            </tr>`
        }

        reader.readAsDataURL(file);
    }

    table.classList.remove("d-none")
    
})






let uploadArea = document.querySelector(".upload-area")

uploadArea.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader();

        reader.onloadend = (event) => {
            let fileBase64 = event.currentTarget.result;

            table.innerHTML += `<tr>
            <th scope="row">${file.name}</th>
            <td>${file.size / 1024} Kb</td>
            <td>
            <div class="img">
            <img src="${fileBase64}" alt="">
            </div>
            </td>
            </tr>`
        }

        reader.readAsDataURL(file);
    }

    table.classList.remove("d-none")
    
})


uploadArea.forEach(element => {
    element.ondragstart = (e) => {
        e.dataTransfer.setData("id", element.getAttribute("id"))
    }
});


uploadArea.ondragover = (e) => {
    e.preventDefault();
}