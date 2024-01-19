const questions = [
	{
		question: 'Какой язык работает в браузере?',
		answers: ['Java', 'C', 'Python', 'JavaScript'],
		correct: 4,
	},
	{
		question: 'Что означает CSS?',
		answers: ['Central Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets', 'Cars SUVs Sailboats'],
		correct: 2,
	},
	{
		question: 'Что означает HTML?',
		answers: ['Hypertext Markup Language', 'Hypertext Markdown Language', 'Hyperloop Machine Language', 'Helicopters Terminals Motorboats Lamborginis'],
		correct: 1,
	},
	{
		question: 'В каком году был создан JavaScript?',
		answers: ['1996', '1995', '1994', 'все ответы неверные'],
		correct: 2,
	},
]

const questionContainer = document.querySelector('#header')
const answersContainer = document.querySelector('#list')
const answerBtn = document.querySelector('#submit')

let score = 0 // Счетчик правильных ответов
let questionIndex = 0 // Индекс текущего вопроса

clearPage()
showQuestion()
answerBtn.onclick = checkAnswer