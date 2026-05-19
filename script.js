const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';
    
    if (currentTheme === 'light' || !currentTheme) {
        newTheme = 'dark';
        themeToggle.textContent = 'Világos mód';
    } else {
        themeToggle.textContent = 'Sötét mód';
    }
    
    document.documentElement.setAttribute('data-theme', newTheme);
});
