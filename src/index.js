const loading = document.querySelector('.loading');
const content = document.querySelector('.main');

function init() {
    setTimeout( ()=> {
        loading.style.opacity = 0;
        loading.style.display = 'none';

        main.style.display = 'block';
        main.style.opacity = 1;
    }, 4000);
}

init();