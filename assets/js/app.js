$('.S2-slider').slick({
    // infinite: true,
    slidesToShow: 3,
    // slidesToScroll: 0,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //     }
    //   },
    //   { 
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]

});

$('.S3-slider').slick({
    infinite: true,
    slidesToShow: 1.6,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
});

$('.S7-slider').slick({
    infinite: true,
    slidesToScroll: 1,
    dots: true,
    slidesToShow: 1.43,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1.05
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1.01
            }
        }
    ]
});

let box = document.querySelectorAll(".acc-box");

box.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active");
        row.classList.toggle("active");
        x && x.classList.remove("active");
    })
})

let label = document.querySelector(".label");
let menu = document.querySelector("#menu");
let open = 0;
let aTags = document.querySelectorAll("#menu a");

aTags.forEach((c) => {
    c.addEventListener("click", () => {
        if (open != 0) {
            menu.style.right = '-100%';
            document.body.classList.remove("overflow-y-hidden");
            label.classList.remove("label-switch");
            open--;
        }
    })
})

label.addEventListener("click", () => {
    if (open == 0) {
        menu.style.right = 0;
        document.body.classList.add("overflow-y-hidden");
        label.classList.add("label-switch");
        open++;
    }

    else {
        menu.style.right = '-100%';
        document.body.classList.remove("overflow-y-hidden");
        label.classList.remove("label-switch");
        open--;
    }
});