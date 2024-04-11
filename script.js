const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/Spinning-seal-FM-home-website.hxkprogram.repl.co/views')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
// wassup
