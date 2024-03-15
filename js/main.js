const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function(){
    searchInputEl.focus()
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //badgeEl.style.display = 'none'
        //gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity:0,
            display:'none'
        })
        gsap.to(toTopEl, .2, {
            x: 0,
        })
    }else{
        //badgeEl.style.display = 'block'
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
        })
        gsap.to(toTopEl, .2, {
            x: 100,
        })
    }
}, 300)) //함수의 실행 횟수를 조절
//_.throttle(함수,시간)

toTopEl.addEventListener('click', function(){
    gsap.to(window, .7 ,{
        scrollTo: 0
    })
})


const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index){
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(fadeEl, 1, {
        opacity:1,
        delay:(index + 1) * 0.7,
    } )
})

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
    direction:'vertical',
    autoplay:true,
    loop:true, //반복재생여부
});
//new : 자바스크립트 생성자

new Swiper('.promotion .swiper', {
    slidesPerView:3, //한번에 보여질 슬라이드 수
    spaceBetween:10,  //슬라이드 사이 여백
    centeredSlides:true, // 1번 슬라이드 가운데 보이기
    loop:true,
    autoplay:{
        delay:5000,
    },
    pagination:{
        el : '.promotion .swiper-pagination',
        clickable:true,
    },
    navigation:{
        prevEl:'.promotion .swiper-button-prev',
        nextEl:'.promotion .swiper-button-next'
    }
})

const awards = new Swiper('.awards .swiper', {
    slidesPerView: 5,
    autoplay:true,
    spaceBetween:30,
    loop:true,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
})


const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        //숨김
        promotionEl.classList.add('hide')
    }else{
        //보임
        promotionEl.classList.remove('hide')
    }
})

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement : spyEl,// 보여짐 여불르 감시할 옵션
            triggerHook: 0.8, //브라우저 끝 위가 0, 아래가 1
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()


