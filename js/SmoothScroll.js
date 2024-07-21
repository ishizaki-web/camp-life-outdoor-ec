/* === スムーススクロール === */
$(function(){
// #で始まるアンカーをクリックした場合に処理
$('a[href^="#"]').click(function() {
// スクロールの速度
var speed = 700; // ミリ秒
// アンカーの値取得
var href= $(this).attr("href");
// 移動先を取得
var target = $(href == "#" || href == "" ? 'html' : href);
// 移動先を数値で取得
var position = target.offset().top;
// スムーススクロール
$('body,html').animate({scrollTop:position}, speed, 'swing');
return false;
});
});


/* === 横から出てくるtopBack === */
jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '0px' //右から0pxの位置に
        }, 500); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-100px' //右から-100pxの位置に
        }, 500); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});