//1. Ищем объекты кнопки, поля ввода и объекта Чат в HTML документе для дальнейшего взаимодействия.
const button = document.querySelector(`#button`);
const userName = document.querySelector(`#name`);
const userAvatar = document.querySelector(`#avatar`);
const userComment = document.querySelector(`#comment`);
const nameList = document.querySelector(`#result`);

//2 Создаем новый абзац для ввода имени пользователя
const newName = document.createElement(`p`);
//3 Создаем новое поле для отображения аватара пользователя
const newAvatar = document.createElement(`img`);
//4 Создаем новое поле для отображения комментария пользователя
const newComment = document.createElement(`p`);

//3. Создаем функцию getNameValue для отображения имени пользователя при клике на кнопку
function getNameValue() {
	//3.1. Присваиваем переменной userNameValue значение поля ввода имени пользователя и применяем спам фильтр
	const userNameValue = userName.value.replace(/viagra|xxx|ххх/gi, `***`);
	//3.2 Изменяем только первую букву в переменной userNameValue на заглавную и сохраняем результат в переменную modifiedNameValue.
	const modifiedNameValue = userNameValue.charAt(0).toUpperCase() + userNameValue.slice(1).toLowerCase();
	//3.3 Удаляем лишние пробелы из переменной modifiedNameValue и сохраняем результат в переменную cleanNameValue.
	const cleanNameValue = modifiedNameValue.replace(/ /g, ``);
	//3.4 Наполняем новый элемент контентом (корректное значение поля ввода имени пользователя)
	newName.textContent = `Имя: ${cleanNameValue}`;
	//3.5 Вставляем новый элемент (имя) внутрь и в начало Чата
	nameList.append(newName);
	//3.6 Очищаем поле ввода
	userName.value = "";
}
//4. Создаем слушатель событий, который срабатывает при клике на кнопку и выводит имя пользователя
button.addEventListener(`click`, getNameValue);

//5 Создаем функцию getImageValue для отображения аватара пользователя при клике на кнопку
function getImageValue() {
	//5.1. Присваиваем переменной userImageValue значение поля ввода аватара пользователя
	const userImageValue = userAvatar.value;
	//5.2 Присваиваем атрибуту ссылки поле ввода аватара;
	newAvatar.src = userImageValue;
	//5.3 Наполняем новый элемент контентом (значение поля ввода аватара пользователя)
	newAvatar.textContent = userImageValue;
	//5.4 Задаем ширину картинки для аватара пользователя
	newAvatar.style.width = `5rem`;
	//5.5 Вставляем новый элемент (аватар) внутрь и в конец Чата
	newName.after(newAvatar);
	//5.6 Очищаем поле ввода
	userAvatar.value = "";
}
//6. Создаем слушатель событий, который срабатывает при клике на кнопку и выводит аватар пользователя
button.addEventListener(`click`, getImageValue);

//7 Создаем функцию getCommentValue для отображения аватара пользователя при клике на кнопку
function getCommentValue() {
	//7.1. Присваиваем переменной userImageValue значение поля ввода комментария пользователя и применяем спам фильтр
	const userCommentValue = userComment.value.replace(/viagra|xxx|ххх/gi, `***`);
	//7.3 Наполняем новый элемент контентом (значение поля ввода комментария пользователя)
	newComment.textContent = `Комментарий: ${userCommentValue}`;
	//7.4 Вставляем новый элемент (аватар) внутрь и в конец Чата
	newAvatar.after(newComment);
	//7.5 Очищаем поле ввода
	userComment.value = "";
}
//8. Создаем слушатель событий, который срабатывает при клике на кнопку и выводит комментарий пользователя
button.addEventListener(`click`, getCommentValue);