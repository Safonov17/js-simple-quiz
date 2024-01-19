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
	for (answer of questions[questionIndex]['answers']) {
		const answerTemplate = `
			<li>
				<label>
					<input type="radio" class="answer" name="answer" />
					<span>${answer}</span>
				</label>
			</li>
		`
		answersContainer.insertAdjacentHTML('beforeend', answerTemplate)
	}
}
