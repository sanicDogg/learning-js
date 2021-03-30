/*
* Вам предстоит сделать поисковик, в котором можно искать репозитории
* в GitHub по их названию. Допишите код в файл task.js, чтобы при
* нажатии на кнопку «Найти» отправлялся запрос на
* https://api.nomoreparties.co/github-search?q= и текст поиска,
* который пользователь ввёл в форму.
*
* Используйте для решения задачи fetch().then().catch()конструкцию.
* Для успешного решения задачи необходимо выполнить следующие действия:
* Перед отправкой запроса нужно вызывать функцию onSubmitStart().
* Эта вспомогательная функция нужна для «оживления» интерфейса.
* Функцию renderCount(total_count) следует вызывать только при наличии
* результатов поиска. Вместе с ней нужно добавить в resultsContainer
* найденные репозитории, вызвав для каждого из них
* функцию template(item). Обратите внимание, функция renderCount
* принимает аргумент из ответа сервера: total_count.
* Функцию renderEmptyResults нужно вызывать только при отсутствии
* результатов по запрошенному названию, то есть когда total_count равен нулю.
* На случай ошибки, произошедшей на стороне сервера или же
* внутри клиентского кода, — вызывайте функцию renderError().
* Вызов этой функции добавит пользовательскому интерфейсу информативности.
*/

const form = document.querySelector('.search__form');
const resultsContainer = document.querySelector('.search__findings-list');
const countContainer = document.querySelector('.search__findings');
const errorContainer = document.querySelector('.search__error');

const renderError = () => {
    errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            Произошла ошибка...
        </p>
  `;
    countContainer.innerHTML = '';
};

const renderEmptyResults = () => {
    errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            По вашему запросу ничего не найдено, попробуйте уточнить запрос
        </p>
  `;
    countContainer.innerHTML = '';
};

const renderCount = count => {
    countContainer.innerHTML = `
      Найдено <span class="search__findings-amount">${count.toLocaleString(
        'ru-RU'
    )}</span> результатов
  `;
};

const onSubmitStart = () => {
    countContainer.innerHTML = `Загрузка...`;
    resultsContainer.innerHTML = '';
    errorContainer.innerHTML = '';
};

function template(item) {
    const newElement = document.createElement('li');
    newElement.classList.add('search__finding-link');
    newElement.innerHTML = `
      <div class="search__finding-item">
          <a class="search__finding-name" href="${item.html_url}" target="_blank">
              ${item.full_name}
          </a>
          <span class="search__finding-description">${item.description}</span>
      </div>
	`;
    return newElement;
}

form.addEventListener("submit", onSubmit)

async function onSubmit(event) {
    // My code
    // fetch, .then, .catch
    onSubmitStart();

    let query = form.querySelector('.search__textfield').value;
    let url = 'https://api.nomoreparties.co/github-search?q=' + query;
    await fetch(url)
        .then((response)=>response.json())
        .then(json=>{
            console.log(json);
            let count = json.total_count;
            if (count > 0) renderCount(json.total_count);
            else renderEmptyResults();

            json.items.forEach((item) => {
                let element = template(item);
                resultsContainer.append(element);
                console.log(item);
            });
        })
        .catch(()=>renderError());
}
