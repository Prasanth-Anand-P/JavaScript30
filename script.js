const pname = ['01-JavaScript-Drum-Kit', '02-JS-and-CSS-Clock', '03-CSS-Variables-And-JS', '04-Array-Cardio-Day-1', '05-Flex-Panel-Gallery',
	'06-Type-Ahead', '07-Array-Cardio-Day-2', '08-Fun-with-HTML5-Canvas', '09-Dev-Tools-Domination', '10-Hold-Shift-and-Check-Checkboxes',
	'11-Custom-video-player', '12-Key-Sequence-Detection', '13-Slide-in-on-Scroll', '14-Reference-VS-Copy', '15-Local-Storage',
	'16-Mouse-Move-Shadow', '17-Sorting-Without-Articles', '18-Adding-Up-Times-with-Reduce', '19-Webcam', '20-Speech-Detection',
	'21-GeoLocation', '22-Follow-Along-Link-Highlighter', '23-Speech-Synthesis', '24-Sticky-Nav', '25-Capture-Propagation-Bubbling-and-Once',
	'26-Stripe-Follow-Along-Nav', '27-Click-and-Drag', '28-Video-Speed-Controller', '29-Countdown-Timer', '30-Whack-A-Mole'];
	// const pimage = ['DRUM-KIT.JPG', 'CLOCK.JPG']

function cutHyphens(topic){
	return topic.replace(/-/ig, ' ').trim();
	}

document.querySelector('.display').innerHTML =pname.map(name =>`<div class="items"><a href="${name}/index.html" class="proj-links">
	<img src="${name}/output.JPG"> <p>${cutHyphens(name)}</p> </a> </div>`).join('');