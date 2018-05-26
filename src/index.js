class App {
	static initialize() {
		console.log('Your application has initialized.');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	App.initialize();
});

window.App = App;