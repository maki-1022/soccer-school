// スクロールして表示領域に入ったらclass付与
// 横からスライドイン
$(function () {
    $(".js-fadeUp").on("inview", function () {
      $(this).addClass("is-inview");
    });
  });

// 吹き出しふわっと表示
$(function () {
$(".js-zoomin").on("inview", function () {
    $(this).addClass("is-animated");
});
});

// 下からふわっと表示
$(function () {
  $(".js-scrollup").on("inview", function () {
      $(this).addClass("is-active");
  });
  });