/* +-+-+-+-+-+-+-+-+-+-+ IMAGE SLIDER */

const slider = function () {
    const previous_btn = document.querySelector('.prev_btn');
    const next_btn = document.querySelector('.next_btn');

    const allTestimonials = document.querySelectorAll('.testimonial');

    let curSlide = 0;
    const maxSlide = allTestimonials.length - 1;

    const goToSlide = (test) => {
        allTestimonials.forEach((el, i) => {
            el.style.transform = `translateX(${100 * (i - test)}%)`;
        });
    };

    const prev_test = () => {
        if (curSlide == 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
    };

    const next_test = () => {
        if (curSlide == maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }
        goToSlide(curSlide);
        console.log(curSlide);
    };

    previous_btn.addEventListener('click', prev_test);
    next_btn.addEventListener('click', next_test);
};

/* +-+-+-+-+-+-+-+-+-+-+ SMOOTH SCROLLING */

const scroll = function () {
    const home_btn = document.querySelector('.home-link');
    const team_btn = document.querySelector('.our-team-link');
    const contact_btn = document.querySelector('.contact-link');
    console.log(`hello`);

    const section1 = document.getElementById('section_1');
    const section2 = document.getElementById('section_2');
    const section3 = document.getElementById('section_3');
    const section5 = document.getElementById('section_5');
    const cta = document.querySelector('.btn-cta');

    home_btn.addEventListener('click', function (e) {
        section1.scrollIntoView({ behavior: 'smooth' });
    });
    team_btn.addEventListener('click', function (e) {
        section3.scrollIntoView({ behavior: 'smooth' });
    });
    contact_btn.addEventListener('click', function (e) {
        section5.scrollIntoView({ behavior: 'smooth' });
    });
    cta.addEventListener('click', function (e) {
        section2.scrollIntoView({ behavior: 'smooth' });
    });
};

/* +-+-+-+-+-+-+-+-+-+-+ INITIALIZER */

const init = function () {
    slider();
    scroll();
};

init();
