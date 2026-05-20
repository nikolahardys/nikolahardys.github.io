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

const lightTheme = {
    mainBackground: "#F8FAFC",
    surfaceBackground: "#FFFFFF",
    primaryText: "#1E293B",
    secondaryText: "#64748B",
    primaryAccent: "#2D8B8E"
};

const darkTheme = {
    mainBackground: "#0F172A",
    surfaceBackground: "#1E293B",
    primaryText: "#E2E8F0",
    secondaryText: "#94A3B8",
    primaryAccent: "#5ECCD0"
};

let resultColorsLight = generatePalette(lightTheme.mainBackground, lightTheme.primaryAccent, 7);
let resultColorsDark = generatePalette(darkTheme.mainBackground, darkTheme.primaryAccent, 7);

console.log(resultColorsLight);
console.log(resultColorsDark);
