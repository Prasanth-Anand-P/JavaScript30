const content = document.querySelector('.content');
const text = content.querySelector('h1');




function textShadow(e){
	let width = content.offsetWidth;
	let height = content.offsetHeight;
	const walk = 100;
	
	let x = e.offsetX;
	let y = e.offsetY;
	
	if(this != e.target){
		x = x + e.target.offsetX;
		y = y + e.target.offsetY;
	}

	let xWalk = Math.round((x / width * walk) - (walk / 2));
	let yWalk = Math.round((y / width * walk) - (walk / 2));

	console.log(xWalk,yWalk);

	text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(219, 219, 0, 0.6),
      						${yWalk}px ${xWalk * -1}px 0 rgba(86, 8, 255, 0.6)`;
}


content.addEventListener('mousemove',textShadow);
