function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const sizeInfo = document.getElementById('sizeInfo');
    sizeInfo.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}

window.addEventListener('resize', updateWindowSize);

updateWindowSize();