$(document).ready(function() {


    const circle = new Swiper('.swiper_circle_js', {
        slidesPerView: 5,
        speed: 200,
        autoplay: {
          delay: 3000,
        },

        navigation: {
            nextEl: '.swiper_nav .icon_arrow_right',
            prevEl: '.swiper_nav .icon_arrow_left',
        },
        pagination: {
            el: '.firstscreen_fraction_js',
            type: "fraction",
        },

        on: {
            init: function (e) {
                $('.swiper-slide').removeClass('show');

                let index_currentSlide = e.realIndex;
                let currentSlide = e.slides[index_currentSlide];
                let currentSlide1 = e.slides[index_currentSlide + 1];
                let currentSlide2 = e.slides[index_currentSlide + 2];
                let currentSlide3 = e.slides[index_currentSlide + 3];
                let currentSlide4 = e.slides[index_currentSlide + 4];

                currentSlide.classList.add("show");
                currentSlide1.classList.add("show");
                currentSlide2.classList.add("show");
                currentSlide3.classList.add("show");
                currentSlide4.classList.add("show");
            },
        },

    });



    circle.on('slideChange', function (e) {
        $('.swiper-slide').removeClass('show');

        let index_currentSlide = e.realIndex;
        let currentSlide = e.slides[index_currentSlide];
        let currentSlide1 = e.slides[index_currentSlide + 1];
        let currentSlide2 = e.slides[index_currentSlide + 2];
        let currentSlide3 = e.slides[index_currentSlide + 3];
        let currentSlide4 = e.slides[index_currentSlide + 4];

        currentSlide.classList.add("show");
        currentSlide1.classList.add("show");
        currentSlide2.classList.add("show");
        currentSlide3.classList.add("show");
        currentSlide4.classList.add("show");


    });

    const fundraising = new Swiper('.swiper_fundraising_js', {
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 800,
        loop: true,
        autoplay: {
          delay: 8000,
        },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },

        breakpoints: {
            // 768: {
            //     spaceBetween: 27,
            //     slidesPerView: 4,
            // },

        }
    });


    const news = new Swiper('.swiper_news_js', {
        slidesPerView: 1,
        speed: 800,
        loop: true,
        autoplay: {
            delay: 5000,
        },

        effect: "fade",
        fadeEffect: {
            crossFade: true
        },

        navigation: {
            nextEl: '.swiper_nav .icon_arrow_right',
            prevEl: '.swiper_nav .icon_arrow_left',
        },
        pagination: {
            el: '.news_fraction_js',
            type: "fraction",
        },

    });

    const library = new Swiper('.swiper_library_js', {
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 800,
        loop: true,

        // autoplay: {
        //     delay: 5000,
        // },


        navigation: {
            nextEl: '.library .icon_arrow_right',
            prevEl: '.library .icon_arrow_left',
        },


    });



});
