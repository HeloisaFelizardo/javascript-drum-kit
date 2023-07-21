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

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	// Selecionar todas as divs com o atributo 'data-key'
	const divs = document.querySelectorAll('.key[data-key]');
	console.log(divs);

	// Adicionar o evento 'touchstart' a cada div
	divs.forEach((div) => {
		div.addEventListener('touchstart', playSoundTouch);
	});

	// Função chamada quando ocorre o evento 'touchstart'
	function playSoundTouch(e) {
		// Obter o valor do atributo 'data-key'
		const dataKey = e.currentTarget.getAttribute('data-key');
		console.log('Div clicada com data-key:', dataKey);
		// Realize qualquer ação desejada com base no valor do 'data-key'
		const audio = document.querySelector(`audio[data-key='${dataKey}']`);
		const key = document.querySelector(`.key[data-key='${dataKey}']`);
		audio.currentTime = 0; //rewind to start
		audio.play();
		key.classList.add('playing');
	}
	console.log('mobile');
} else {
	window.addEventListener('keydown', playSound);
	console.log('desktop');
}
