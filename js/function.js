var app = {
    pageScroll: '',
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod/i );
    },
    touchDevice: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i );
    }
};

function isLgWidth() {
    return $( window ).width() >= app.lgWidth;
} // >= 1200
function isMdWidth() {
    return $( window ).width() >= app.mdWidth && $( window ).width() < app.lgWidth;
} //  >= 992 && < 1200
function isSmWidth() {
    return $( window ).width() >= app.smWidth && $( window ).width() < app.mdWidth;
} // >= 768 && < 992
function isXsWidth() {
    return $( window ).width() < app.smWidth;
} // < 768
function isIOS() {
    return app.iOS();
} // for iPhone iPad iPod
function isTouch() {
    return app.touchDevice();
} // for touch device

// console.log('pathname: ', window.location.pathname);
// console.log('url: ', window.location.href);
// console.log('origin: ', window.location.origin);


$(document).ready(function() {
    console.log('ready');
    window.addEventListener('resize', () => {
        // Запрещаем выполнение скриптов при смене только высоты вьюпорта (фикс для скролла в IOS и Android >=v.5)
        if (app.resized == screen.width) { return; }
        app.resized = screen.width;

    });

    function scrollPage () {
        $(".toTop").on("click", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href');
            let top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });

        // $(window).scroll(function(){
        //     if($(window).scrollTop()>500){
        //         $('.toTop').fadeIn(900)
        //     }else{
        //         $('.toTop').fadeOut(700)
        //     }
        // });
    }
    scrollPage();

    function showModal() {
        $('.show_modal_js').on('click', function (e) {
            e.preventDefault();
            let id  = $(this).attr('href');

            $(id).modal('show');
        });

        $('.modal').on('show.bs.modal', () => {
            // let openedModal = $('.modal.in:not(.popapCalc)');
            let openedModal = $('.modal');
            if (openedModal.length > 0) {
                openedModal.modal('hide');
            }
        });
    }
    showModal();


    function openMobileNav() {
        $('.toggle').click(function(event) {
            // $( 'body' ).toggleClass('nav-open');
            $( '.header__nav' ).toggleClass('active');
            $(this).toggleClass('active');

            // $( 'body' ).addClass('nav-open');
            // $( '.header__nav' ).addClass('active');
        });

        $('.navbar__close').click(function(event) {
            // $( 'body' ).removeClass('nav-open');
            $( '.header__nav' ).removeClass('active');
            $( '.toggle' ).removeClass('active');
        });
    };
    openMobileNav();

    function showSearch() {
        $('.search__link').click(function(event) {
            event.preventDefault();
            $(this).toggleClass('active');
            $('.search__wrap').toggleClass('active');
        });

        $(document).mouseup(function (e) {
           let div = $(".header");
           // если клик был не по нашему блоку и не по его дочерним элементам
           if (!div.is(e.target) && div.has(e.target).length === 0) {
               $('.search__wrap').removeClass('active');
               $('.search__link').removeClass('active');
           }
       });

    }
    showSearch()

    function showLanguage() {
        $('.language__toggle').click(function(event) {
            // event.preventDefault();
            $(this).toggleClass('active');
            $('.language__list').toggleClass('active');

            $('.search__wrap').removeClass('active');
            $('.search__link').removeClass('active');
        });

        $(document).mouseup(function (e) {
           let div = $(".language");
           // если клик был не по нашему блоку и не по его дочерним элементам
           if (!div.is(e.target) && div.has(e.target).length === 0) {
               $('.language__toggle').removeClass('active');
               $('.language__list').removeClass('active');
           }
       });

    }
    showLanguage()

    function togglePassword() {
        $('.form__password .icon_eyes').click(function(event) {
            let input = $(this).closest('.form__password').find('input');
            // console.log('click');
            // console.log(input);
            if (input.attr('type') == 'password') {
                $(this).addClass('view');
                input.attr('type', 'text');
            } else {
                $(this).removeClass('view');
                input.attr('type', 'password');
            }
        });
    }
    togglePassword()


    // function collapsed() {
    //     let toggle = $('[data-collapse]');
    //
    //     toggle.on('click', function() {
    //         let id = $(this).data('collapse'),
    //         body = $('[data-collapse-body="'+id+'"]'),
    //         wrap = body.closest('[data-collapse-wrapper]');
    //
    //         if (!id) {
    //             // $('[data-collapse-wrapper]').removeClass('open');
    //             body = $(this).parent().find('[data-collapse-body]');
    //             $(this).toggleClass('open');
    //             if ($(this).hasClass('open')) {
    //                 body.slideDown();
    //             } else {
    //                 body.slideUp();
    //             }
    //         } else if (id === 'all') {
    //             body.slideDown();
    //             toggle.addClass('open');
    //         } else {
    //             body.slideToggle();
    //             $(this).toggleClass('open');
    //         }
    //     });
    // }
    // collapsed();

    // function doTabs () {
    //     $('.tabs__wrapper').each(function() {
    //         let ths = $(this);
    //         ths.find('.tab__item').not(':first').hide();
    //         ths.find('.tab').click(function() {
    //             ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
    //             ths.find('.tab__item').hide().eq($(this).index()).fadeIn()
    //         }).eq(0).addClass('active');
    //     });
    // }
    // doTabs();
    //
    // function doDrop() {
    //     $('.drop__toggle').on('click', function() {
    //         // $('.drop__list').toggleClass('open');
    //         $(this).toggleClass('active');
    //         $(this).closest('.drop').find('.drop__list').toggleClass('open');
    //     });
    // };
    // doDrop();

    function initSelect2 () {
        $('.select').select2({
            placeholder: $(this).data('placeholder'),
            minimumResultsForSearch: Infinity,
        });
    }
    initSelect2();


    function showMore(classItem, btn) {
        // let classItem = '.vacancies__item';
        // let classItem = class;
        let item = $(''+ classItem +'');
        let count = item.length;
        let start = 3;
        let show = 3;

        item.addClass('d-none');
        $('' + classItem + ':lt(' + start + ')').removeClass('d-none');

        $(btn).click(function(e) {
            e.preventDefault();
            $(this).addClass('loading');

            let load = $(this).data('load');
            let more = $(this).data('more');

            start = (start + show <= count) ? start + show : count;

            $(this).text(load);

            setTimeout(() => {
                $(''+ classItem +':lt(' + start + ')').removeClass('d-none');
                if ($(''+ classItem +':not(.d-none)').length == count) {
                    $(this).parent().remove();
                }
                $(this).removeClass('loading');
                $(this).text(more);
            }, 500);
        });

    }
    showMore('.faq_grid_home_js > .faq__item', '.show_more_js');


})
