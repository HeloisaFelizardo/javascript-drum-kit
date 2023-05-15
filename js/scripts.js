const playSound = (e) => {
	const audio = document.querySelector(`audio[data-key='${e.key}']`);
	const key = document.querySelector(`.key[data-key='${e.key}']`);
	if (!audio) return; //stop the function from running all together
	audio.currentTime = 0; //rewind to start
	audio.play();
	key.classList.add('playing');
};

const removeTransition = (e) => {
	if (e.propertyName !== 'transform') return; // skip if its not a transform
	e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
////////////////////////////////////////////////////////////////////////////////////////

const divs = document.querySelectorAll('[data-key]');

// Adicionar o evento 'touchstart' a cada div
divs.forEach((div) => {
	div.addEventListener('touchstart', function (event) {
		// Prevenir o comportamento padrão do evento
		event.preventDefault();

		// Obter o valor do atributo 'data-key'
		const dataKey = this.getAttribute('data-key');

		// Chamar a função desejada com base no valor do 'data-key'
		playSoundTouch(dataKey);
	});
});

// Função chamada quando ocorre o evento 'touchstart'
function playSoundTouch(dataKey) {
	console.log('Div clicada com data-key:', dataKey);
	// Realize qualquer ação desejada com base no valor do 'data-key'
	const audio = document.querySelector(`audio[data-key='${dataKey}']`);
	const key = document.querySelector(`.key[data-key='${dataKey}']`);
	audio.currentTime = 0; //rewind to start
	audio.play();
	key.classList.add('playing');
}

if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	// Selecionar todas as divs com o atributo 'data-key'

	console.log('mobile');
} else {
	window.addEventListener('keydown', playSound);
	console.log('desktop');
}
