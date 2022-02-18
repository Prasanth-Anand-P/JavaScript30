// alert("hello");
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
 				'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
 				'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
 				 'Anywhere But Here', 'An Old Dog'
 ];

function cutArticle(names){
	return name.replace(/^a | an | the/ig, '').trim();
}

const sortedNames = bands.sort((a, b) => cutArticle(a) > cutArticle(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedNames.map(band => `<li>${band}</li>`).join('');

