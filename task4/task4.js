function randomInteger() {

    let rand = 1 - 0.5 + Math.random() * (100 - 1 + 1);
    // console.log(Math.round(rand));
    return Math.round(rand);
};

let randomValue = randomInteger();

const myPromise = new Promise((resolve, reject) => {

    if(randomValue % 2 == 0){
        resolve({
            message: randomValue
        });
    } else {
        reject({
            message: randomValue
        });
    };

});

myPromise 

    .then((result) => {
        console.log('Завершено успешно! Сгенерированное число - ', result.message);
    })

    .catch((error) => {
        console.log('Завершено с ошибкой! Сгенерированное число - ', error.message);
    })