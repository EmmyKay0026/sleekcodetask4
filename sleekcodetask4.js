const nameArray=[
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    },
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:""
    }
]
const vClick = document.getElementById("v-click");
const nav = document.getElementById("nav");
const root = document.getElementById("root")
const clickResultMoblie = document.getElementById("click-result-moblie")
const clickResult = document.getElementById("click-result")


vClick.addEventListener("click", ()=>{
    nav.classList.toggle("nav-new")
})
for (let i = 0; i < nameArray.length; i++) {
    const eachList =document.createElement("div");
    const imageContainer =document.createElement("div");
    const h4PContainer =document.createElement("div");
    const h4 = document.createElement("h4");
    const paragraph = document.createElement("p");


    eachList.classList.add("each-list");
    imageContainer.classList.add("image-container");


    root.appendChild(eachList);
    eachList.appendChild(imageContainer);
    eachList.appendChild(h4PContainer);
    h4PContainer.appendChild(h4);
    h4PContainer.appendChild(paragraph);

    imageContainer.innerHTML=`<img src="./Images/traditional_council.c46b6481ee3834488048.jpg" alt="">`;
    h4.innerText = nameArray[i].name;
    paragraph.innerText = nameArray[i].title;
}
// for (let i = 0; i < eachList.length; i++) {
//     eachList[i].addEventListener("click",(e)=>{
//         /*if (e.target=="div") {
//             console.log("correct")
//         }else{
//             console.log("false")
//         }
//         console.log(e.target)*/
//        clickResult.innerHTML = `<div class="image-container2"><img src="./Images/traditional_council.c46b6481ee3834488048.jpg" alt=""></div>
//        <h3>${e.target.parentElement.parentElement.innerText.h4}</h3>
//        <p><span> Title</span>:The Uwangue of Warri</p>
//        <p><span>Appellation</span>: Uji</p>`
//        console.log(e.target.parentElement.parentElement)
//     })
// }