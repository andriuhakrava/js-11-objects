// 1. Створіть об'єкт з інформацією про себе: ім'я, прізвище, кількість копійок в кишені.

	let me = {
		name: 'Андрій',
		surname: 'Кравчук',
		coins: 234	
	};

// 2. Добавте властивість "дата народження" (кирилицею) в форматі дд.мм.рррр

	me['дата народження'] = '06.01.1989';

/* 3. Добавте властивість age2033, в яку запишіть число, 
	розрахувавши скільки вам буде років у 2033 році. */

	let birthYear = me['дата народження'].substr(6);
	me.age2033 = 2033 - birthYear;

// 4. Добавте циклом властивості про ваш вік у 2010-2020 роках.

	let myAge2010_2020 = [];
	for (let i = 2010; i <= 2020; i++){
		myAge2010_2020.push(i - birthYear);
	}
	me.myAge2010_2020 = myAge2010_2020;

/* 5. Переберіть циклом всі властивості та виведіть їх в консоль у вигляді:
		0 name Бобир
		1 fname Олександр
		2 coins 75
		3 дата народження 05.10.1982
		... */

	let i = 0;
	console.groupCollapsed("Властивості об'єкту: ")
	for (let key in me){
		console.log(i++, key, me[key]);
	}
	console.groupEnd();

// 6. Видаліть властивість про вміст кишені.

	delete me.coins;

/* 7. Скопіюйте об'єкт з інформацією про себе, всі строкові значення продублюйте ("Бобир" --> "БобирБобир"),
 	а числові - помножте на два (75 --> 150); виведіть обидва об'єкта. */

	let b = {};
	for (let key in me) {
		if (typeof me[key] === 'number'){
			b[key] = me[key]*2;	
		} else if (typeof me[key] === 'string'){
			b[key] = me[key] + me[key];
		} 
	}
	console.groupCollapsed('Інформація про мене:');
	console.log(me);
	console.groupEnd();
	console.groupCollapsed('Скопійований об\'єкт:');
	console.log(b);
	console.groupEnd();

/*	8. Створіть функцію розрахунку об'єму коробки яка приймає один аргумент у вигляді об'єкта. 
	Функція повинна повертати два числових значення: в кубічних сантиметрах та літрах (см3 та дм3); */

let box = {
	length: 5,
	height: 7,
	width: 3
}

function calcBox(box){
	return box.length * box.height * box.width;
}

resultSm = calcBox(box);
resultDm = resultSm / 1000;
console.log(`Об\'єм коробки в см3: ${resultSm} см3`);
console.log(`Об\'єм коробки в дм3: ${resultDm} дм3`);

/*	9. Створіть функцію, що повертає об'єкти про користувачів, зчитуючи їх з форми: login, e-mail,
 phone, role (admin, moderator, user, viewer); 
 створіть масив з 5 користувачів та виведіть його в консоль. */

 	let form = document.querySelector('#formUsers');
	let login = document.querySelector('#login');
	let email = document.querySelector('#email');
	let phone = document.querySelector('#phone');
	let role = document.querySelector('#role');
	let inputs = document.querySelectorAll('input');
 	let usersArr = [];

 class SingleUser{
 	constructor(login, email, phone, role){
 		this.login = document.querySelector('#login').value;
	 	this.email = document.querySelector('#email').value;;
	 	this.phone = document.querySelector('#phone').value;
	 	this.role = document.querySelector('#role').value;
 	}
 }

 	form.addEventListener('submit', usersMaker);
	 function usersMaker(event){
	 	event.preventDefault();
	 	let user = new SingleUser();
	 	usersArr.push(user);
	 	console.log(usersArr);
	 	inputs.forEach((inp) => inp.value = '');
	 }

/* 10. Локалізацію деяких елементів веб-сторінки покладено на фронтенд.
		Наразі сайт має базову українську мову та дві локалізації - англійську та російську.
		Бекенд добавляє у тег body атрибут data-lang зі значенням en або ru.
		Технічне завдання: Зробіть скриптом локалізацію на англійську мову. */

let eng = {
  'Корзина': 'Сart',
  'Товар': 'Article',
  'Кількість': 'Amount',
  'Ціна': 'Price',
  'шт.': 'pc.',
  'грн.': 'hrn.',
  'м.': 'm.',
  'Загальна сума:': 'Total:'
};

let ua = {
	'Cart': 'Корзина',
  'Article': 'Товар',
  'Amount': 'Кількість',
 	'Price': 'Ціна',
  'pc.': 'шт.',
  'hrn.': 'грн.',
  'm.': 'м.',
  'Total:': 'Загальна сума:'
}

let span = document.getElementsByClassName('translate');

for (let i = 0; i < span.length; i++){
	let s = span[i].innerText.trim();
	if (!eng[s]) continue;
	span[i].innerText = eng[s];
}
