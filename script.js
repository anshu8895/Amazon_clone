const images = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelector('.control-prev')
const next_btn = document.querySelector('.control-next')
const scrollContainer = document.querySelectorAll('.products')



for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}

document.querySelector('.foot-panel1').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


let n = 0
function changeSlide() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }
    images[n].style.display = 'block'
}
changeSlide()

prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = images.length - 1;
    }
    changeSlide()
})

next_btn.addEventListener('click', (e) => {
    if (n < images.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide()
})

