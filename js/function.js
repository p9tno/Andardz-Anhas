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
        $(".toTop").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href');
            let top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });

        $(window).scroll(function(){
            if($(window).scrollTop()>500){
                $('.toTop').fadeIn(900)
            }else{
                $('.toTop').fadeOut(700)
            }
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
    showModal();


    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            // console.log('Показ меню');
            $('.navbar').toggleClass('navbar_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    openMobileNav();

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
        function addIcon(icon) {
            if (!icon.id) {
                return icon.text;
            }
            let $icon = $(
                '<span><span></span><i></i></span>'
            );
            $icon.find("span").text(icon.text);
            $icon.find("i").attr("class", "icon_" + icon.element.value.toLowerCase());
            return $icon;
        }

        $('.select').select2({
            placeholder: $(this).data('placeholder'),
            minimumResultsForSearch: Infinity,
            // templateSelection: addIcon,
        });

        // $('.select').on('change',function() {
        //     let val = $(this).val();
        //     let form = $(this).closest('.form');
        //     let phone = form.find('.form__row_phone_js');
        //     let mail = form.find('.form__row_email_js');

        //     if ( val == 'mail'){
        //         mail.removeClass('form__row_hide');
        //         mail.find('input').prop('required',true);

        //         phone.addClass('form__row_hide');
        //         phone.find('input').prop('required',false);

        //     } else {
        //         mail.addClass('form__row_hide');
        //         mail.find('input').prop('required',false);

        //         phone.removeClass('form__row_hide');
        //         phone.find('input').prop('required',true);
        //     }
        // })
    }
    initSelect2();



})
