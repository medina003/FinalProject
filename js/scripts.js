$("#carusel1").owlCarousel({
    margin: 40,
    nav: true,
    dots: false,
    items: 4,
    navText: ['', ''],
    autoWidth: true,
    responsive: {
        0: {
            items: 1,
        },
        1201: {
            items: 4,
        },
        1500: {
            margin: 20,
            items: 5,
        },
    },
});


$("#carusel2").owlCarousel({
    margin: 40,
    nav: true,
    dots: false,
    items: 3,
    navText: ['', ''],
    autoWidth: true,
});