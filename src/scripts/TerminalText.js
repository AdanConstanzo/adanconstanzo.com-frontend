/*
	***************** TerminalTyping Animation ***************** 
	* This animation is done by specific css properties!
	* The css classes are terminal-text, .terminal-text__typing 
	*  and .terminal-text__typing > span
	* We then set the width as time goes with setInterval,
	* which mimics the typing effect.
	* The blinking cursor is done via CSS animation.
	*/

class TerminalText {
	constructor(words, textDOM) {
		this.words = words;
		this.textDOM = textDOM;
		this.counter = 0;
		this.indexArray = 0;
		this.textDOM.innerText = this.words[this.indexArray];
		this.options = {
			breakBetween: 1500,
			deleteSpeed: 1000,
			initialStart: 1000,
			typingSpeed: 2000,
			random: false
		}
		this.typeAnimation = () => {
			this.textDOM.style.width = '0%';
			const _TerminalTextLength = this.words[this.indexArray].length;
			const _typeSpeed = this.options.typingSpeed / _TerminalTextLength;
			const animation = setInterval( () => {
				this.textDOM.style.width = 100 / _TerminalTextLength * this.counter + '%';
				const num = (100 / _TerminalTextLength) * this.counter
				// this.textDOM.style.width = '100%';
				this.counter += 1;
				if (this.counter > _TerminalTextLength) {
					clearInterval(animation);
					setTimeout(() => {
						this.counter = 0;
						this.deleteAnimation();
					}, this.options.breakBetween);
				}
			}, _typeSpeed);
		}
	}
	deleteAnimation() {
		const _TerminalText = this.textDOM.innerText.trim();
		const _TerminalTextLength = _TerminalText.length;
		const _typeSpeed = this.options.typingSpeed / _TerminalTextLength;
		const animation = setInterval(() => {
			this.textDOM.style.width = 100 - (100 / _TerminalTextLength) * this.counter + '%';
			this.counter++;
			if (this.counter > _TerminalTextLength) {
				clearInterval(animation);
				setTimeout(() => {
					this.indexArray++;
					const wordsLength = this.words.length;
					const newIndex = this.options.random ? (Math.floor(Math.random() * this.words.length)) % wordsLength : (this.indexArray) % wordsLength;
					this.indexArray = newIndex;
					this.textDOM.innerText = this.words[newIndex];
					this.counter = 0;
					this.typeAnimation();
				}, this.options.breakBetween)
			}
		}, _typeSpeed);
	}
	
	
}
/******* End of TerminalTypingText *******/

export default TerminalText;