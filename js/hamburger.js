const menuIcon = document.querySelector('.js-hamburger');
const menu = document.querySelector('.js-menu');
// const body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('is-open'); /* ×印に変更 */
  menu.classList.toggle('is-open'); /* メニュー表示 */
//   body.classList.toggle('is-open'); /* 背景スクロールさせない */
});



window.addEventListener('DOMContentLoaded', function(){
  /** ページ内リンクをクリックしたらナビメニューが閉じる処理 */
    $('.drawer__nav__link').click(function () {
    $('.js-hamburger').removeClass('is-open');
    $('.js-menu').removeClass('is-open');
  });
});