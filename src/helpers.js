const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
};

export function generateColors(n) {
    return Array.from(new Array(n), randomColor);
}

export function randomIndex(n) {
    return Math.floor(Math.random() * n);
}
