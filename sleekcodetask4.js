const nameArray=[
    {
        name:"Chief Johnson Amatserunleghe",
        title:"The Iyatsere of Warri",
        appellation:"Uji"
    },
    {
        name:"Chief Gabriel Awala",
        title:"The Uwangue of Warri",
        appellation:""
    },
    {
        name:"Chief T.Y. Pessu",
        title:"The Ojomo of Warri",
        appellation:"Utioba"
    },
    {
        name:"Chief Sunday Rone",
        title:"The Obazuaye of Warri",
        appellation:"Ogienoyibo"
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
const body = document.getElementsByTagName("body")
let eachList;


vClick.addEventListener("click", ()=>{
    nav.classList.toggle("nav-new")
})
for (let i = 0; i < nameArray.length; i++) {
    eachList =document.createElement("section");
    const imageContainer =document.createElement("div");
    const h4PContainer =document.createElement("div");
    const h4 = document.createElement("h4");
    const paragraph = document.createElement("p");


    eachList.classList.add("each-list");
    eachList.setAttribute("id", "each-list")
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
for (let i = 0; i < nameArray.length; i++) {
    const each = document.getElementsByClassName("each-list")
    each[i].addEventListener("click",(e)=>{
    if (e.target.nodeName=="SECTION") {
        clickResult.innerHTML= e.target.outerHTML;
        console.log(e.target.outerHTML)
        console.log(clickResult.innerHTML)
    }else if (e.target.nodeName=="DIV") {
        clickResult.innerHTML= e.target.parentElement.outerHTML;
        console.log(e.target.parentElement.outerHTML)
        console.log(clickResult.innerHTML)
    }else{
        clickResult.innerHTML= e.target.parentElement.parentElement.outerHTML;
        console.log(e.target.parentElement.parentElement.outerHTML)
        console.log(clickResult.innerHTML)
    }
    })
    each[i].classList.remove("image-container");
    each[i].classList.add("image-container2")
}
