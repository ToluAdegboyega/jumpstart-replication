const loading = document.querySelector('.loading');
const content = document.querySelector('.content');

function init() {
    setTimeout( ()=> {
        loading.style.opacity = 0;
        loading.style.display = 'none';

        content.style.display = 'block';
        content.style.opacity = 1;
    }, 4000);
}

init();