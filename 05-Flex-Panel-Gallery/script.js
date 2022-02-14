const panels=document.querySelectorAll('.panel')

function expandImage(){
	this.classList.toggle('open-image');
}

function expandText(){
	this.classList.toggle('open-text');
}

panels.forEach(imgaction=>imgaction.addEventListener('click',expandImage));
panels.forEach(txtaction=>txtaction.addEventListener('click',expandText));