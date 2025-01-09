$(function () {
  $("header ul li").on("click", function () {
    let i = $(this).index();

    let target = $("#container section").eq(i).offset().top;
    console.log(target);
    $("html, body").stop().animate({ scrollTop: target }, 800);
  });

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

  $(".contact-button").click(function () {
    $(".contact-toggle").toggleClass("on");
    $(".contact_box").toggleClass("on"); // 'show' 클래스 추가
  });

  // *****모달
  $("#openModal").click(function (e) {
    e.preventDefault(); // 링크 기본 동작 막기
    $("#pdfModal").fadeIn(); // 모달 열기
    $("#pdfIframe").attr("src", "document/planning.pdf"); // PDF 파일 경로 로드
  });

  // 모달 닫기 버튼 클릭 시
  $(".close").click(function () {
    $("#pdfModal").fadeOut(); // 모달 닫기
    $("#pdfIframe").attr("src", ""); // PDF 소스 초기화
  });

  // 모달 밖을 클릭하면 모달 닫기
  $(window).click(function (event) {
    if ($(event.target).is("#pdfModal")) {
      $("#pdfModal").fadeOut(); // 모달 닫기
      $("#pdfIframe").attr("src", ""); // PDF 소스 초기화
    }
  });

  let visual = $("#visual").height();
  let visual0 = $("#visual").offset().top;
  let profile = $("#con1").offset().top - 350;
  let key = $(".keyword").offset().top - 350;
  let con3 = $("#con3").offset().top - 350;
  let con4 = $("#con4").offset().top - 300;
  let react = $("#react_homepage").offset().top - 300;
  let con6 = $("#con6").offset().top - 350;
  let con7 = $("#con7").offset().top + 1500;
  // console.log(con6);

  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();
    // console.log(sc);
    $("header").addClass("on");
    if (sc <= visual0) {
      $("header").removeClass("on");
    }
    if (sc >= profile) {
      $("#con1").addClass("on");
      $(
        "#con1 .id_txt li:nth-child(1) p, #con1 .id_txt li:nth-child(3) p"
      ).each(function (index) {
        $(this)
          .delay(index * 200)
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
      $(".keyword .left").addClass("leftbounce");
      $(".keyword .key_1 li, .keyword .key_2 li, .keyword .key_3 li").each(
        function (index) {
          $(this)
            .delay(index * 200)
            .queue(function (next) {
              $(this).addClass("rightbounce");
              next();
            });
        }
      );
    }

    if (sc > con3) {
      $("#con3").addClass("on");
    }

    if (sc > con4) {
      $("#con4").addClass("on");
      $("#con4 .color ul li").each(function (index) {
        $(this)
          .delay(index * 300)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
    }

    if (sc > react) {
      $("#react_homepage").addClass("on");
      $("#react_homepage .txt p").each(function (index) {
        $(this)
          .delay(index * 200)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
    }

    if (sc > con6) {
      $("#con6").addClass("on");
      $("#con6 h2").addClass("con6_h2_slide");
      $("#con6 .wrap").addClass("animate-text");
    } else {
      $("#con6 .wrap").removeClass("animate-text");
    }

    if (sc >= con7) {
      $("#con7").addClass("on");
    }
  });

  gsap.registerPlugin(ScrollTrigger);

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
      end: "280%",
      // markers: true,
    },
  });

  gsap.to(listA, {
    y: 50,
    rotation: 10,
    scrollTrigger: {
      trigger: "#con6",
      scrub: 2,
      end: "300%",
    },
  });

  gsap.to(listB, {
    y: -50,
    rotation: -10,
    scrollTrigger: {
      trigger: "#con6",
      scrub: 2,
      end: "300%",
    },
  });
  gsap.to(listC, {
    y: 30,
    rotation: 10,
    scrollTrigger: {
      trigger: "#con6",
      scrub: 2,
      end: "300%",
    },
  });
  const $listItems = $(".list li");
  const $modal = $(".illust_modal");
  const $modalItems = $modal.find("ul li");
  const $overlay = $(".modal-overlay");
  const $closeButton = $(".modal-close");

  $listItems.on("click", function () {
    const index = $listItems.index(this);

    // 모든 modalItems 비활성화
    $modalItems.removeClass("active");

    // 클릭한 순서에 맞는 modalItem 활성화
    $modalItems.eq(index).addClass("active");

    // 오버레이와 모달 표시
    $overlay.show();
    $modal.show();
  });

  // 오버레이 클릭 시 모달 닫기
  $overlay.on("click", function () {
    $modal.hide();
    $overlay.hide();
  });

  // X 버튼 클릭 시 모달 닫기
  $closeButton.on("click", function () {
    $modal.hide();
    $overlay.hide();
  });
});
