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

window.addEventListener('keydown', playSound);

/* if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	window.addEventListener('click', playSound);
	console.log('mobile');
} else {
	window.addEventListener('keydown', playSound);
	console.log('desktop');
}
 */
