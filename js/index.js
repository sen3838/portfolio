$(function () {
  // 비쥬얼
  setInterval(function () {
    $(".title")
      .stop()
      .animate({ "margin-top": "-50px" }, function () {
        $(".title h2:first-child").appendTo(".title");
        $(".title").stop().css({ "margin-top": "0px" });
      });
  }, 2000);

  //프로필
  //   let baseline = -300;
  let visual = $("#visual").height();
  let profile = $("#con1").offset().top - 150;
  let key = $("#con2 .wrap").offset().top - 1000;
  console.log(visual);
  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();
    // console.log(sc);
    if ((visual <= sc) & (sc >= profile)) {
      $("#con1 .id_pic li:nth-child(1) p").addClass("on");
      $("#con1 .id_pic li:nth-child(3) p").addClass("on");
      $("  #con1 .id_txt li h3").addClass("on");
      $("  #con1 .id_txt li img").addClass("on");
    } else if (sc >= key) {
      $("#con2 .left").addClass("on");
      $("#con2 .right ul").addClass("on");
    }
  });
});
