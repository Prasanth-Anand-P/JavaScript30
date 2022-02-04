const inputs=document.querySelectorAll('.control-box input');

function updateValue(){
	const suffix=this.dataset.size || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	console.log(this.name);
}

inputs.forEach(input=>input.addEventListener('change', updateValue));
inputs.forEach(input => input.addEventListener('mousemove',updateValue));