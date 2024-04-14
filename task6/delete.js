const requestButton = document.querySelector(".requestButton");
const fullfillDiv = document.querySelector(".fullfillDiv");

requestButton.addEventListener('click', function(){
  
    let pageInput = document.querySelector(".pageInput").value;
    if(pageInput < 1 || pageInput > 10 || pageInput === NaN){
       
        const p = document.createElement("p");
        const node = document.createTextNode("Номер страницы вне диапазона от 1 до 10");
        fullfillDiv.appendChild(p);
        p.appendChild(node);
    }else{
    //   fullfillDiv.style.display = "none";
    };
});


requestButton.addEventListener('click', function(){
  
    let limitInput = document.querySelector(".limitInput").value;
    if(limitInput < 1 || limitInput > 10 || limitInput === NaN){
       
        const p = document.createElement("p");
        const node = document.createTextNode("Лимит вне диапазона от 1 до 10");
        fullfillDiv.appendChild(p);
        p.appendChild(node);
    }else{
    //   fullfillDiv.style.display = "none";
    };
});