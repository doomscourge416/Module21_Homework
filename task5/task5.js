const button = document.querySelector(".btn_div");
const resultDiv = document.querySelector(".result_div");


button.addEventListener('click', function(){

  let inputValue = document.querySelector(".input_div").value;

  fetch("https://jsonplaceholder.typicode.com/users/"+ inputValue +"/todos")

  .then((response) => {

    // console.log('request response', response);
    return response.json();       
  })

  .then((json) => { 

    // console.log('response parsed', json);
    return json; 
  })

  .then((json)=>{
  
    let completeDiv ='';

    json.forEach(item => {
  
        item.completed ? divStyle = `' class="completed"` : divStyle = ``;
        const createListItem = `<li><p${divStyle}>${item.title}</p></li>`;
        completeDiv += createListItem;
        // console.log(title)
      
    });
    if(json.length === 0){

      completeDiv = `Пользователь с ID = ${inputValue} не найден`;

    }else{

      completeDiv = '<ol>' + completeDiv + '</ol>';
    };
    resultDiv.innerHTML = completeDiv;
  });

})