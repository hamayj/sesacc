// js 동작 채우기

// 요소 2개 가져오기.
const icon_menu = document.querySelector('.icon_menu');
const slide_menu = document.querySelector('.slide_menu');


// jquery
// const icon_menu = $('.icon_menu');

// icon_menu.addEventListener('click', () => {
//     console.log(slide_menu.classList); 
//     // 요소가 갖고 있는 classlist를 다 볼 수 있음.
// });

icon_menu.addEventListener('click', () => {
    slide_menu.classList.toggle('d-none');
    // toggle : d-none이 있으면 없애고, 없으면 생성해주는 함수.
});

// addEventListener말고 onclick으로 하고 싶으면 함수를 따로 파면 됨.