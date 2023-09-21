const personalMovieDB = {
    privat: false,
    movies: {
        "Престиж": 8.5,
        "Форсаж": 7.2,
        "Титаник": 9.0
    }
};

function tableOfMovies(movies) {
    
    if (personalMovieDB.privat == false) {
        
        const bodyElement = document.body; // доступ к body

        const table = document.createElement('table'); // создание таблицы
        table.style.borderCollapse = 'collapse'; 

        const thead = document.createElement('thead'); // создание заголовка
        table.appendChild(thead);

        const trHead = document.createElement('tr'); // создание строки заголовка
        thead.appendChild(trHead);

        const th1 = document.createElement('th'); // создание ячейки заголовка
        th1.textContent = 'Название фильма';
        th1.style.border = '1px solid #000'; 
        trHead.appendChild(th1);

        const th2 = document.createElement('th'); // создание ячейки заголовка
        th2.textContent = 'Оценка фильма';
        th2.style.border = '1px solid #000'; 
        trHead.appendChild(th2);

        for (const movie in movies) {
            const tr = document.createElement('tr'); // создание строки

            const td1 = document.createElement('td'); // создание ячейки
            td1.textContent = movie;
            td1.style.border = '1px solid #000'; 

            const td2 = document.createElement('td'); // создание ячейки
            td2.textContent = movies[movie];
            td2.style.border = '1px solid #000'; 

            // добавляем ячейки в строку
            tr.appendChild(td1);
            tr.appendChild(td2);

            // добавляем строку в таблицу
            table.appendChild(tr);
        }

        bodyElement.appendChild(table); // добавляем таблицу
    }
}

tableOfMovies(personalMovieDB.movies); 
