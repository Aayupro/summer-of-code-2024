const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})






	const toggleCheckbox = document.getElementById('theme-toggle');

	toggleCheckbox.addEventListener('change', () => {
		document.body.classList.toggle('dark-mode');
	});
