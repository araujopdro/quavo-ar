async function loadComponents() {
    document.getElementById('header-container').innerHTML = await fetch('/components/header.html').then(res => res.text());
    document.getElementById('footer-container').innerHTML = await fetch('/components/footer.html').then(res => res.text());
}

const routes = {
    '/': '/pages/home.html',
    '/guarapuava': '/pages/guarapuava.html',
    '/moises-marx': '/pages/moises-marx.html'
};

const scripts = {
    '/': '/scripts/home.js',
    '/guarapuava': '/scripts/guarapuava.js',
    '/moises-marx': '/scripts/moises-marx.js'
};

async function renderRoute() {
    const path = window.location.pathname;
    const route = routes[path];
    const appContainer = document.getElementById('app');

    if (route) {
        try {
            const response = await fetch(route);
            if (response.ok) {
                appContainer.innerHTML = await response.text();
                // Dynamically load the script for the current route
                const scriptPath = scripts[path];
                if (scriptPath) {
                    const script = document.createElement('script');
                    script.src = scriptPath;
                    document.body.appendChild(script);
                }
            } else {
                appContainer.innerHTML = '<h1>404 - Page Not Found</h1>';
            }
        } catch (error) {
            appContainer.innerHTML = '<h1>Error loading page</h1>';
        }
    } else {
        appContainer.innerHTML = '<h1>404 - Page Not Found</h1>';
    }
}

function navigateTo(path) {
    window.history.pushState({}, path, window.location.origin + path);
    renderRoute();
}

window.addEventListener('popstate', renderRoute);

document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    renderRoute();

    // Attach click event to navigation links
    document.body.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('/')) {
            event.preventDefault();
            navigateTo(event.target.getAttribute('href'));
        }
    });
});