
document.addEventListener('DOMContentLoaded', () => {
    const ele = document.getElementById('main');
    const svg = d3.select('body').append('svg').attr('width', 900).attr('height', 600);

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-10m.json')
        .then(data => {
            console.log(data);
        })
});