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
  $(".contact-toggle").on("click", function () {
    $(this).toggleClass("on");
    $(this).siblings(".contact_box").toggleClass("on");
  });

  let visual = $("#visual").height();
  let visual0 = $("#visual").offset().top;
  let profile = $("#con1").offset().top - 150;
  let key = $("#con2").offset().top - 350;
  let con3 = $("#con3").offset().top;
  let con4 = $("#con4").offset().top;
  let con6 = $("#con6").offset().top - 350;
  let con7 = $("#con7").offset().top + 650;
  // console.log(con4);

  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();
    console.log(sc);
    $("header").addClass("on");
    if (sc <= visual0) {
      $("header").removeClass("on");
    }
    if (sc >= visual && profile <= sc) {
      $("#con1 h2").addClass("con1_h2_slide");

      $("#con1 .id_pic li:nth-child(1) p").addClass("on");
      $("  #con1 .id_pic li:nth-child(2) img").addClass("on");
      document
        .querySelector("#con1 .id_pic li:nth-child(2)")
        .classList.add("on");
      $("  #con1 .id_pic li:nth-child(2) p").addClass("on");

      $("#con1 .id_pic li:nth-child(3) p").addClass("on");
      $("#con1 .id_txt li h3").addClass("on");
      $(
        "#con1 .id_txt li:nth-child(1) p, #con1 .id_txt li:nth-child(3) p"
      ).each(function (index) {
        $(this)
          .delay(index * 300)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
      $(" #con1 .id_txt img").each(function (index) {
        $(this)
          .delay(index * 300)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
    }

    if (sc >= profile && key < sc) {
      $("#con2 .left").addClass("leftbounce");
      $("#con2 .key_1 li, #con2 .key_2 li, #con2 .key_3 li").each(function (
        index
      ) {
        $(this)
          .delay(index * 200)
          .queue(function (next) {
            $(this).addClass("rightbounce");
            next();
          });
      });
    }

    if (sc > con3) {
      $("#con3 h2").addClass("con3_h2_slide");
      $("#con3 .tit li").addClass("on");
      $("#con3 .con3_wrap h3").addClass("on");
      $("#con3 .value .circle").addClass("on");
      $("#con3 .value .line").addClass("on");
      $("#con3 .color ul li").each(function (index) {
        $(this)
          .delay(index * 300)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
      $("#con3 .icon ul li").each(function (index) {
        $(this)
          .delay(index * 200)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
      $("#con3 .type .ty_1").addClass("on");
      $("#con3 .type .ty_2").addClass("on");
    }

    if (sc > con4) {
      $("#con4 h2").addClass("con4_h2_slide");
      $("#con4 .txt_wrap").addClass("on");
      $("#con4 .mock_wrap").addClass("on");
    }

    if (sc > con6) {
      $("#con6 h2").addClass("con6_h2_slide");
      $("#con6 .wrap").addClass("animate-text");
    } else {
      $("#con6 .wrap").removeClass("animate-text");
    }

    if (sc >= con7) {
      $("#con7 h2").addClass("on");
      $("#con7 ul li:nth-child(1)").addClass("on");
      $("#con7 ul li:nth-child(3)").addClass("on");
    }
  });

  let list = gsap.utils.toArray("#con6 .list li");
  let listA = gsap.utils.toArray("#con6 .list li.a");
  let listB = gsap.utils.toArray("#con6 .list li.b");
  let listC = gsap.utils.toArray("#con6 .list li.c");

  gsap.to(list, {
    xPercent: -100 * (list.length - 2),
    scrollTrigger: {
      trigger: "#con6",
      pin: true,
      scrub: 2,
      start: "center center",
      end: "130%",
      markers: true,
    },
  });

  gsap.to(listA, {
    y: 50,
    rotation: 10,
    scrollTrigger: {
      trigger: "#con6",
      scrub: 2,
      end: "200%",
    },
  });

  gsap.to(listB, {
    y: -50,
    rotation: -10,
    scrollTrigger: {
      trigger: "#con6",
      scrub: 2,
      end: "200%",
    },
  });
  gsap.to(listC, {
    y: 30,
    rotation: 10,
    scrollTrigger: {
      trigger: "#con6",
      scrub: 2,
      end: "200%",
    },
  });
});
