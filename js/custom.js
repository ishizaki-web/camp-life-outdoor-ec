$(function () {
  /*==================================
  	NAV
  ===================================*/

  $(".openbtn").click(function () { //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
  });

  $("#g-nav a").click(function () { //ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active'); //ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
  });

  /*==================================
  	h2 inview
  ===================================*/

  $('.move').on('inview', function () {
    $(this).addClass('movestyle');
  });


  /*==================================
  	Hover action on grid-products
  ===================================*/
  //レスポンシブではビデオを流さない
  $(window).on('load resize', function () {
    var w = $(window).width();
    var x = 780;

    if (w >= x) {
      //640px以下の処理

      //tent
      $(".tent").on("mouseover", function () {
        //mouse on
        $(".tent-video").css("display", "block");
        $(this).find('.tent-video')[0].play();
      });
      //mouse out
      $(".tent").on("mouseout", function () {
        $(".tent-video").css("display", "none");
        // $(this).find('.tent-video')[0].pause();
      });

      //sleepingbag
      $(".sleep").on("mouseover", function () {
        //mouse on
        $(".sleep-video").css("display", "block");
        $(this).find('.sleep-video')[0].play();
      });
      //mouse out
      $(".sleep").on("mouseout", function () {
        $(".sleep-video").css("display", "none");
        // $(this).find('.tent-video')[0].pause();
      });

      //light
      $(".lights").on("mouseover", function () {
        //mouse on
        $(".light-video").css("display", "block");
        $(this).find('.light-video')[0].play();
      });
      //mouse out
      $(".lights").on("mouseout", function () {
        $(".light-video").css("display", "none");
      });

      //bag
      $(".bag").on("mouseover", function () {
        //mouse on
        $(".bag-video").css("display", "block");
        $(this).find('.bag-video')[0].play();
      });
      //mouse out
      $(".bag").on("mouseout", function () {
        $(".bag-video").css("display", "none");
      });

      //others
      $(".others").on("mouseover", function () {
        //mouse on
        $(".others-video").css("display", "block");
        $(this).find('.others-video')[0].play();
      });
      //mouse out
      $(".others").on("mouseout", function () {
        $(".others-video").css("display", "none");
      });

      //kitchen
      $(".kitchen").on("mouseover", function () {
        //mouse on
        $(".kitchen-video").css("display", "block");
        $(this).find('.kitchen-video')[0].play();
      });
      //mouse out
      $(".kitchen").on("mouseout", function () {
        $(".kitchen-video").css("display", "none");
      });
    }
  });
  
  /*==================================
  	Click action on grid-products
  ===================================*/
  var $glow = $('.tent p');

  $('.sleep a').on('click', function () {
    $glow.toggleClass('glowText');
  });
  $('.lights a').on('click', function () {
    $glow.toggleClass('glowText');
  });
  $('.bag a').on('click', function () {
    $glow.toggleClass('glowText');
  });
  $('.others a').on('click', function () {
    $glow.toggleClass('glowText');
  });
  $('.kitchen a').on('click', function () {
    $glow.toggleClass('glowText');
  });

  /*==================================
  	Concept hiker
  ===================================*/

  window.addEventListener('scroll', () => {
    //idがkeyvisualの要素を取得
    let elem = document.getElementById('keyvisual');
    //現在のスクロール位置を取得して、10で除算
    let scrollY = window.scrollY / 6;
    //上で取得した値と画像幅を加算して、elemの背景サイズに設定
    elem.style.backgroundSize = 100 + scrollY + '%';
  });

});