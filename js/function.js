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

$(document).ready(function() {

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
    // showModal();


    function openMobileNav() {
        $('.toggle').click(function(event) {
            $( '.header__nav' ).toggleClass('active');
            $(this).toggleClass('active');
        });

        $('.navbar__close').click(function(event) {
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

    function stopPlay() {
        $('.audio__toggle').click(function(event) {
            $(this).toggleClass('active');
        })
    }
    stopPlay()

    function bottomAudio() {
        let audioBottom = $( '.audio' ).offset().top + $( '.audio' ).innerHeight();;
        setAudioPosition();

        $( window ).scroll( function (e) {
            setAudioPosition();
        } );

        function setAudioPosition() {
            currentTop = $( window ).scrollTop();

            if ( currentTop > audioBottom ) {
                $( '.audio' ).addClass( 'bottom' );
            } else {
                $( '.audio' ).removeClass( 'bottom' );
            }
        }

    }
    bottomAudio()

    function doTabs () {
        $('.tabs__wrapper').each(function() {
            let ths = $(this);
            ths.find('.tab__item').not(':first').hide();
            ths.find('.tab').click(function() {
                ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
                ths.find('.tab__item').hide().eq($(this).index()).fadeIn()
            }).eq(0).addClass('active');
        });
    }
    doTabs();

    function initSelect2 () {
        $('.select').select2({
            placeholder: $(this).data('placeholder'),
            minimumResultsForSearch: Infinity,
        });
    }
    initSelect2();


    function showMore(classItem, btn) {
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
