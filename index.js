const directorsFav = document.querySelector('.directors-favorite');
const directorsBest = document.querySelector('.directors-best');

const directorsArr = [
    {
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
    },
    {
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
    },
    {
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссёр, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
    name: 'Алексей Балабанов',
    career: 'Режиссёр, Сценарист, Актёр, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
    },
    {
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссёр, Сценарист, Актёр',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зелёная книга'
    },
    {
    name: 'Юрий Быков',
    career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
    },
    {
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
    },
];


function createNewElemBorder() {
    const border = document.createElement('div');
    border.classList.add('border');
    return border;
}

function createNewElemName(name, index)  {
    const directorName = document.createElement('div');

    directorName.classList.add('director__name');
    directorName.textContent = `${index}. ${name}`;
    return directorName;
}

function createNewElemCareer(career) {
    const directorInfoCareer = document.createElement('div');

    directorInfoCareer.classList.add('director__info-career');
    directorInfoCareer.textContent = career;
    return directorInfoCareer;
}

function createNewElemLink(link) {
    const directorInfoLink = document.createElement('a');

    directorInfoLink.classList.add('director__info-link');
    directorInfoLink.href = link;
    directorInfoLink.target = "_blank";
    directorInfoLink.textContent = 'фильмография';
    return directorInfoLink;
}

function createNewElemInfo(career, link) {
    const directorInfo = document.createElement('div');

    directorInfo.classList.add('director__info');
    directorInfo.appendChild(career);
    directorInfo.appendChild(link);
    return directorInfo;
}

function createNewElemTopFilm(films) {
    const directorTopFilm = document.createElement('div');
    
    directorTopFilm.classList.add('director__topfilm');
    directorTopFilm.textContent = films.join(', ');
    console.log(directorTopFilm)
    return directorTopFilm;
}

function addToPage(fields, container) {
    fields.forEach(field => container.append(field))
}

function createDirectorsInfo (director, index) {
    const favDirectors = []
    const border = createNewElemBorder();
    const name = createNewElemName(director.name, index + 1);
    const career = createNewElemCareer(director.career);
    const link = createNewElemLink(director.films);
    const info = createNewElemInfo(career, link);

    favDirectors.push(border, name, info);

    addToPage(favDirectors, directorsFav)
}

function displayDirectorsInformation() {
    directorsArr.forEach(function (director, index) {
        createDirectorsInfo(director, index);
    });

    const topFilmsList = directorsArr.map((director) => director.top_rated_film);
    addToPage([createNewElemTopFilm(topFilmsList)], directorsBest);
}

displayDirectorsInformation();
