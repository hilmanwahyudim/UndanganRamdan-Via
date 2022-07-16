var url = new URL(window.location.href);
var u = url.searchParams.get("u");
if (u==null || u=="") {
    document.getElementById('guest').innerHTML = "Guest";
} else {
    document.getElementById('guest').innerHTML = u;
}

document.addEventListener('DOMContentLoaded', function() {
    /* 
    |======================================
    | APP INIT 
    |======================================
    */
    // Aos init
    AOS.init();

    /* 
    |======================================
    | OPENING SCRIPT
    |======================================
    */
    // animate spouse text opening
    const openingSpouseText = document.querySelector('.spouse-text');
    openingSpouseText.innerHTML = openingSpouseText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline()
        .add({
            targets: '.spouse-text .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 150*i
        });
    // btn sound and open the opening
    const btn_open = document.querySelector('#btn-open-opening');
    const btn_play = document.querySelector('#btn-play');
    const audio = document.querySelector('#audio');
    btn_open.addEventListener('click', function(e) {
        document.body.classList.remove('opening-show');
        document.body.classList.add('opening-hide');
        for(let aos of document.querySelectorAll('.aos-init')) {
            aos.classList.remove('aos-animate');
        }
        setTimeout(() => {
            document.querySelector('section#opening').remove();
        }, 2000);
        setTimeout(() => {
            AOS.refresh();
        }, 1500);

        audio.play();
    })
    btn_play.addEventListener('click', function() {
        if (audio.paused) {
            btn_play.innerHTML = '<i class="ri ri-volume-high"></i>';
            audio.play();
        } else {
            btn_play.innerHTML = '<i class="ri ri-volume-off"></i>';
            audio.pause();
        }
    })
    
    /* 
    |======================================
    | PAGE SCRIPT
    |======================================
    */
    // timezz : countdown
    timezz('#countdown-row', {
        date: new Date(2022, 7, 6, 8, 60),
        stop: false,
        canContinue: false,
        withYears: false,
        beforeCreate() {},
        beforeDestroy() {},
        update(event) {},
    });

    // tinyslider : carousel/slider
    var sliderMessage1 = tns({
        container: '#tinyslider-container-message',
        navContainer: "#tinyslider-nav-message",
        items: 1,
        controls: false,
        center: true,
        slideBy: 1,
        mouseDrag: true,
        swipeAngle: false,
    });
    var sliderGallery = tns({
        container: '#tinyslider-container-gallery',
        controlsContainer: "#tinyslider-controls-gallery",
        items: 1.2,
        nav: false,
        center: true,
        mouseDrag: true,
        gutter: 30,
        swipeAngle: false,
        edgePadding: 20,
    });
    sliderGallery.getInfo().slideItems[sliderGallery.getInfo().index].classList.add('active');
    sliderGallery.events.on('indexChanged', () => {
        const info = sliderGallery.getInfo();
        const indexPrev = info.indexCached;
        const indexCurr = info.index;
        for (let i = 0; i < sliderGallery.getInfo().slideItems.length; i++) {
            sliderGallery.getInfo().slideItems[i].classList.remove('active');
        }
        info.slideItems[indexCurr].classList.add('active');
    });
    const carousel = document.getElementById('carouselExampleFade');
    carousel.addEventListener('slide.bs.carousel', function (event) {
        for(let aos of document.querySelectorAll('.aos-init')) {
            aos.classList.remove('aos-animate');
        }
    })
    carousel.addEventListener('slid.bs.carousel', function (event) {
        // if ( event.relatedTarget.querySelector('#section-3') && slider === null ) {
        //     slider = tns({
        //         container: '#tinyslider-container',
        //         items: 1,
        //         controlsContainer: "#tinyslider-controls",
        //         navContainer: "#tinyslider-thumbnails",
        //         navAsThumbnails: true,
        //         slideBy: "page",
        //         loop: true,
        //         mouseDrag: true,
        //         autoplay: true,
        //         autoHeight: true,
        //         autoWidth: true,
        //         swipeAngle: false,
        //     });
        // }
        AOS.refresh();
    });

}, false);