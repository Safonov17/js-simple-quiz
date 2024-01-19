const questionContainer = document.querySelector('#header')
const answersContainer = document.querySelector('#list')
const answerBtn = document.querySelector('#submit')
let counter = 0 // Счетчик правильных ответов
let questionIndex = 0 // Индекс текущего вопроса

clearPage()
showQuestion()
answerBtn.onclick = checkAnswer

function clearPage() {
	questionContainer.innerHTML = ''
	answersContainer.innerHTML = ''
}

function showQuestion() {
	// Вывод вопроса
	const question = questions[questionIndex]['question']
	const questionTemplate = `
		<h2 class="title">${question}</h2>
	`
	questionContainer.innerHTML = questionTemplate

	// Вывод ответов
	let answerNum = 1
	for (answer of questions[questionIndex]['answers']) {
		const answerTemplate = `
			<li>
				<label>
					<input value="${answerNum}" type="radio" class="answer" name="answer" />
					<span>${answer}</span>
				</label>
			</li>
		`
		answersContainer.insertAdjacentHTML('beforeend', answerTemplate)
		answerNum++
	}
}

function checkAnswer() {
	// Находим выбранный ответ
	const checkRadioBtn = answersContainer.querySelector('input[type="radio"]:checked')

	// Если ответа нет - сообщаем об этом
	if (!checkRadioBtn) alert('Необходимо выбрать ответ')

	// Узнаем номер ответа и правильный ответ
	const selectedAnswer = +checkRadioBtn.value
	const correctAnswer = questions[questionIndex]['correct']

	// Сравнение ответов и увеличение счетчика правильных ответов
	if (selectedAnswer === correctAnswer) counter++

	checkQuestion()
}

function checkQuestion() {
	if (questionIndex !== questions.length - 1) {
		questionIndex++
		clearPage()
		showQuestion()
	} else {
		clearPage()
		showResults()
	}
}

function showResults() {
	// Результат
	let result = `${counter} из ${questions.length}`

	// Варианты заголовков результатов
	let title, message
	if (counter === questions.length) {
		title = 'Поздравляем! 🥳'
		message = 'Вы ответили верно на все вопросы! 👍'
	} else if ((counter * 100) / questions.length >= 50) {
		title = 'Неплохой результат!😉'
		message = 'Вы дали более половины правильных ответов!👍'
	} else if ((counter * 100) / questions.length <= 50) {
		title = 'Стоит постараться!'
		message = 'Пока у вас меньше половины правильных ответов! 👍'
	}

	// Шаблон результата
	const resultsTemplate = `
		<h2 class="title">${title}</h2>
		<h3 class="summary">${message}</h3>
		<p class="result">${result}</p>
	`

	questionContainer.innerHTML = resultsTemplate

	replacingButton()
}

function replacingButton() {
	answerBtn.blur()
	answerBtn.innerText = 'Начать заново'
	answerBtn.onclick = () => history.go()
}
