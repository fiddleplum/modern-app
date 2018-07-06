class App {
	constructor() {
	}
}

document.addEventListener('DOMContentLoaded', () => {
	console.log('Initializing the application.');
	window.app = new App();
	console.log('The application has been initialized.');
});

window.app = null;
