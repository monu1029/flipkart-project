
function loadCoupon(){
    document.getElementById('main-coupon').style.visibility = 'visible';
    document.getElementById('main-flipkart-1').style.opacity= '0.7';

}
function closeCoupon(){
    document.getElementById('main-coupon').style.visibility = 'hidden';
    document.getElementById('main-flipkart-1').style.opacity= '1';

}




// Instantiate the Bootstrap carousel
// $('.multi-item-carousel').carousel({
//     interval: false
//     });
//     // for every slide in carousel, copy the next slide's item in the slide.
//     // Do the same for the next, next item.
//     $('.multi-item-carousel .item').each(function(){
//     var next = $(this).next();
//     if (!next.length) {
//     next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
//     if (next.next().length>0) {
//     next.next().children(':first-child').clone().appendTo($(this));
//     } else {
//     $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//     }
//     });

const ChangeMode =() =>{
    let mybody = document.body;
    mybody.classList.toggle('light-dark')
}

    