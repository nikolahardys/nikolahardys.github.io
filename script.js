function hexToRgb(hex) {
    let bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
}

function generatePalette(colorStart, colorEnd, steps) {
    let rgbStart = hexToRgb(colorStart);
    let rgbEnd = hexToRgb(colorEnd);
    let palette = [];

    for (let i = 0; i < steps; i++) {
        let ratio = i / (steps - 1);
        let r = Math.round(rgbStart[0] + ratio * (rgbEnd[0] - rgbStart[0]));
        let g = Math.round(rgbStart[1] + ratio * (rgbEnd[1] - rgbStart[1]));
        let b = Math.round(rgbStart[2] + ratio * (rgbEnd[2] - rgbStart[2]));
        palette.push(rgbToHex(r, g, b));
    }

    return palette;
}

const btn = document.getElementById('themeToggle');
const paletteDisplay = document.getElementById('paletteDisplay');

const lightTheme = { main: "#F8FAFC", accent: "#2D8B8E" };
const darkTheme = { main: "#0F172A", accent: "#5ECCD0" };

function renderPalette(colors) {
    paletteDisplay.innerHTML = '';
    colors.forEach((color, index) => {
        let box = document.createElement('div');
        box.className = 'color-box';
        box.style.backgroundColor = color;
        box.style.color = index > 3 ? '#FFFFFF' : '#000000';
        box.innerText = color;
        paletteDisplay.appendChild(box);
    });
}

renderPalette(generatePalette(lightTheme.main, lightTheme.accent, 7));

btn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.body.removeAttribute('data-theme');
        btn.innerText = 'Sötét mód bekapcsolása';
        renderPalette(generatePalette(lightTheme.main, lightTheme.accent, 7));
    } else {
        document.body.setAttribute('data-theme', 'dark');
        btn.innerText = 'Világos mód bekapcsolása';
        renderPalette(generatePalette(darkTheme.main, darkTheme.accent, 7));
    }
});
