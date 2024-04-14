const pageInput = document.querySelector(".pageInput");
const limitInput = document.querySelector(".limitInput");
const requestButton = document.querySelector(".requestButton");
const fullfillDiv = document.querySelector(".fullfillDiv");

// console.log(localStorage.getItem('Downloaded img'));
// console.log(typeof localStorage);

if(localStorage.getItem("Downloaded img")){

    console.log("Storaged images ready");

    function getStoragedImages(){

        let list = document.createElement("li");
        let img = document.createElement('img');;
        img.src = localStorage.getItem("Downloaded img");
        fullfillDiv.appendChild(list);
        list.appendChild(img);

    };

    getStoragedImages();
    getStoragedImages();
    getStoragedImages();
}else{
    console.log("No storaged images found");
};

let targetUrl = "";

requestButton.addEventListener('click', function(){

    targetUrl = "https://placehold.co/"+ limitInput.value + "x" + pageInput.value;
    return targetUrl;
});


requestButton.addEventListener('click', function(){

    // console.log(targetUrl)
  
    fetch(targetUrl)

    .then((response)=>{ 
        // localStorage.setItem('Downloaded img',response)
        return response.blob()
    })

    .then((blob)=>{

        imgUrl = URL.createObjectURL(blob);

        function createListItem(imgUrl){
            let list = document.createElement("li");
            let img = document.createElement('img');;
            img.src = imgUrl;
            fullfillDiv.appendChild(list);
            list.appendChild(img);
            localStorage.setItem('Downloaded img', targetUrl)
        }
    
        createListItem(imgUrl);
        createListItem(imgUrl);
        createListItem(imgUrl);
    })
});



// const p = document.createElement("p");
// fullfillDiv.appendChild(p);
// let node = '';


// requestButton.addEventListener('click', function(){

//     let pageInputWrong = isNaN(pageInput.value) || (pageInput.value < 1 || pageInput.value > 10);
//     let limitInputWrong = isNaN(limitInput.value) || (limitInput.value < 1 || limitInput.value > 10);

//     if(pageInputWrong && limitInputWrong){

//         node = document.createTextNode("Номер страницы и лимит вне диапазона от 1 до 10");

//         // p.removeChild(node);
//         p.appendChild(node);
    
//     }else if(pageInputWrong){
    
//         node = document.createTextNode("Номер страницы вне диапазона от 1 до 10");
//         // p.removeChild(node);
//         p.appendChild(node);
    
//     }else if(limitInputWrong){
    
//         node = document.createTextNode("Лимит вне диапазона от 1 до 10");
//         // p.removeChild(node);
//         p.appendChild(node);
    
//     }else{
    
//         fetch("https://placehold.co/"+ limitInput.value +"x" + pageInput.value) // ЕСЛИ ЧТО ТО НЕ БУДЕТ РАБОТАТЬ ТО ДОПИСАТЬ ПОСЛЕ 10 + ""
//         // .then(response => response.json())
//         .then(response => {
//             console.log(response);
//             function showList(response){
//                 let p = document.createElement('p');
//                 p.textContent = `Список картинок:`;
//                 p.className = 'text';
//                 document.body.append(p);
            
//                 let ul = document.createElement('ul');
//                 document.body.append(ul);
//                 json.forEach(element => {
//                     let li = document.createElement('li');
//                     let img = document.createElement('img');
//                     img.src = element.download_url;
//                     img.className = 'image';
//                     li.append(img);
//                     ul.append(li);
//                 });
//             }})
//         .catch((error) => {
//             message: "Ошибка",
//             console.log(error.message)
//         })    
//     };


// })