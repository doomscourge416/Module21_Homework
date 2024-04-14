// Объявляем переменные Имя, дата, время, которые заполняются значениями из локалСторедж
// (если человек не заходил на сайт, соответсвенно локал сторедж пуст и значения null)

let firstName = localStorage.getItem('firstName');
let date = localStorage.getItem('loginDate');
let dateTransalted;
let time = localStorage.getItem('loginTime');

// Если на сайт не заходили, то первое сообщение в консоли будет null, если заходили, то иное
console.log(localStorage.getItem('firstName'));

// Проверка на наличие установленного имени (авторизации на сайте), если да, то приветствуем и пишем время

if(localStorage.getItem('firstName') !== null){

    alert("Добрый день, " + firstName + "! Давно не виделись. " +
    "В последний раз вы были у нас " + date + " в " + time);

} else { // если нет, то просим ввести имя и записываем дату авторизации в локал сторедж

    firstName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя', 'Иван');

    date = new Date();
    dateTransalted =  date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    time = date.getHours() + ":" + date.getMinutes();

    console.log(dateTransalted);
    console.log(time);
}

// Устанавливаем полученные значения из проверки в локал сторедж

localStorage.setItem('firstName', firstName);
localStorage.setItem('loginDate', dateTransalted);
localStorage.setItem('loginTime', time);

// console.log(localStorage.getItem('firstName'));
// console.log(localStorage.getItem('loginDate'));
// console.log(localStorage.getItem('loginTime'));