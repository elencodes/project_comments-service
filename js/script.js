//1. Ищем объекты кнопки, полей ввода, элементов Чата в HTML документе для дальнейшего взаимодействия.
const button = document.querySelector(`#button`);
const userName = document.querySelector(`#name`);
const userAvatar = document.querySelector(`#avatar`);
const userComment = document.querySelector(`#comment`);
const nameList = document.querySelector(`#result`);
const checkNo = document.querySelector(`#No`);
const checkYes = document.querySelector(`#Yes`);
const currentDate = document.querySelector("#currentTime");
const nameInput = document.querySelector(`#nameInput`)

//2. Создаем функцию, которая скрывает поле ввода Имени
const hiddenUserName = () => {
	//3.1 Скрываем Имя пользователя при указании галочки "Нет"
	nameInput.style.display = `none`;
	//3.2 Очищаем поле ввода
	userName.value = "";
}

//3. Создаем функцию, которая показывает поле ввода Имени
const showUserName = () => {
	//3.1 Показываем Имя пользователя при указании галочки "Да"
	nameInput.style.display = 'block';
}

//4. Создаем функцию createComment для отображения сообщения пользователя при клике на кнопку
function createComment() {
	//5 Создаем новые поля для отображения полного сообщения пользователя - имени, аватара, комментария, даты комментария
	const showDate = document.createElement(`p`);
	const newName = document.createElement(`p`);
	const newAvatar = document.createElement(`img`);
	const messageComment = document.createElement(`div`);
	const newComment = document.createElement(`div`);
	//Задаем стили для каждого отдельного сообщения пользователя
	newComment.style.border = `1px solid #FD59CCAA`;
	newComment.style.marginBottom = `1rem`
	newComment.style.padding = `1rem`
	//6 Выводим текущую дату
	const showCurrentDate = new Date();
	//Задаем стили для текущей даты
	showDate.style.color = `#FD59CC`;
	showDate.style.fontSize = `0.875rem`;
	//6.2 Наполняем новый элемент контентом (выводим дату)
	showDate.textContent = `${showCurrentDate}`;
	//6.3 Вставляем новый элемент (дату) внутрь и в начало Сообщения пользователя
	newComment.appendChild(showDate);
	//7.1. Присваиваем переменной userNameValue значение поля ввода имени пользователя и применяем спам фильтр
	const userNameValue = userName.value.replace(/viagra|xxx|ххх/gi, `***`);
	//7.2 Изменяем только первую букву в переменной userNameValue на заглавную и сохраняем результат в переменную modifiedNameValue.
	const modifiedNameValue = userNameValue.charAt(0).toUpperCase() + userNameValue.slice(1).toLowerCase();
	//7.3 Удаляем лишние пробелы из переменной modifiedNameValue и сохраняем результат в переменную cleanNameValue.
	const cleanNameValue = modifiedNameValue.replace(/ /g, ``);
	//7.4 При добавлении/скрытии имени пользователя будет отображаться разный контент
	if (checkYes.checked) {
		newName.textContent = `Имя: ${cleanNameValue}`;
	} else if (checkNo.checked) {
		newName.textContent = `Имя: Username`;
	}
	//Задаем стили для имени пользователя
	newName.style.fontWeight = `bold`;
	//7.6 Вставляем новый элемент (имя) внутрь и в начало Чата (после даты)
	newComment.appendChild(newName);
	//7.7 Очищаем поле ввода имени пользователя
	userName.value = "";
	//8.1. Присваиваем переменной userImageValue значение поля ввода аватара пользователя
	const userImageValue = userAvatar.value;
	//8.2 Присваиваем рандомный аватар, если пользователь не установил его
	if (userImageValue == '') {
		const randomImage = [];
		randomImage[0] = 'https://klike.net/uploads/posts/2023-01/1673183935_3-23.png';
		randomImage[1] = 'https://glavchudo.ru/image/cache/catalog/mini-pusheen/58a025ec1749d15a3194223f-800x800.png';
		randomImage[2] = 'https://a.allegroimg.com/original/030d8e/15bc75fa4361b56da83533fe4fcc';
		randomImage[3] = 'https://a.allegroimg.com/original/031e12/1cf111b147fa8782accfd4d773f7';
		randomImage[4] = 'https://catalog.detmir.st/media/21O4gWCrjAQSGtXWeeUYLaqlsljuKAVaztFsu3WNgiI=?preset=site_product_gallery_r1500';
		randomImage[5] = 'https://sun9-79.userapi.com/impg/Be9X1AyYQdA8Q0wX4bWBZMzn8_W1JlUxibyLLQ/N8IXOdglp5Q.jpg?size=900x900&quality=95&sign=e3686d76f0ced17f2d051be4e18ad31b&c_uniq_tag=HC439paGvSPRiDVX87hXjf76aPm0gMj0rb_S5ZFQJ_Q&type=album';
		randomImage[6] = 'https://sun6-23.userapi.com/s/v1/ig2/PmdiREVhEhQQu7L0xhdWOtTthX71HTZFpUdAirl-A3fH89sh33td4DiQ2zTrjzFLVz1RMBvjfbGA8LG5RH1yOP4y.jpg?size=1079x1080&quality=95&crop=0,0,1079,1080&ava=1';
		randomImage[7] = 'https://a.allegroimg.com/original/03bd29/e4c2bbf04a0c97d8b79808a82648';
		randomImage[8] = 'https://2ch.hk/br/src/124623/16806188218360.png';
		randomImage[9] = 'https://yt3.googleusercontent.com/ytc/AL5GRJXUzslOOIJgmR7yY-VyRuKA4u8m975OK3Jo3aZbhg=s900-c-k-c0x00ffffff-no-rj';
		randomImage[10] = 'https://a.allegroimg.com/s400/03ed8d/c173577940c7832066077bd076c0/NAKLEJKA-NA-OKNO-SZYBE-MEBLE-LUSTRO-KOT-KOTEK';
		const number = Math.floor(Math.random() * randomImage.length);
		//Присваиваем атрибуту ссылки рандомный аватар;
		newAvatar.src = randomImage[number];
	} else {
		//Присваиваем атрибуту ссылки поле ввода аватара;
		newAvatar.src = userImageValue;
	}
	//8.3 Наполняем новый элемент контентом (значение поля ввода аватара пользователя)
	newAvatar.textContent = userImageValue;
	//8.4 Задаем ширину картинки для аватара пользователя
	newAvatar.style.width = `5rem`;
	//8.5 Вставляем новый элемент (аватар) внутрь и в конец Сообщения пользователя (после имени)
	newComment.appendChild(newAvatar);
	//8.6 Очищаем поле ввода аватара пользователя
	userAvatar.value = "";
	//9.1. Присваиваем переменной userCommentValue значение поля ввода комментария пользователя и применяем спам фильтр
	const userCommentValue = userComment.value.replace(/viagra|xxx|ххх/gi, `***`);
	//9.2 Наполняем новый элемент контентом (значение поля ввода комментария пользователя)
	messageComment.textContent = `Комментарий: ${userCommentValue}`;
	//9.3 Задаем ширину контейнера комментария пользователя
	messageComment.style.width = `30rem`;
	//9.5 Вставляем новый элемент (комментарий) внутрь и в конец Сообщения пользователя (после аватара)
	newComment.appendChild(messageComment);
	//9.6 Очищаем поле ввода комментария
	userComment.value = "";
	//9.7 Выводим новое сообщение каждого отдельного пользователя первым по списку
	nameList.prepend(newComment);
}
//10. Создаем слушатель событий, который срабатывает при клике на кнопку и выводит имя пользователя
button.addEventListener(`click`, createComment);