$(function () {
  $("header ul li").on("click", function () {
    let i = $(this).index();
    let target = $("#container section").eq(i).offset().top;
    console.log(target);
    $("html, body").stop().animate({ scrollTop: target }, 800);
  });

  // 콘택트 버튼
  $(".contact-toggle").on("click", function () {
    $(this).toggleClass("on");
    $(this).siblings(".contact_box").toggleClass("on");
  });

  $(".contact-button").click(function () {
    $(".contact-toggle").toggleClass("on");
    $(".contact_box").toggleClass("on"); // 'show' 클래스 추가
  });

  // 기획안 모달
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
  let profile = $("#profile").offset().top - 350;
  let key = $(".keyword").offset().top - 350;
  let projects = $("#projects").offset().top - 350;
  let planning = $("#planning").offset().top - 300;
  let js = $("#script").offset().top - 250;
  let react = $("#react_homepage").offset().top - 300;
  let illust = $("#illust").offset().top - 180;
  let closing = $("#closing-section").offset().top + 1500;
  // console.log(illust);

  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();
    // console.log(sc);

    // 헤더
    $("header").addClass("on");

    // 비쥬얼
    if (sc <= visual0) {
      $("header").removeClass("on");
    }

    // 프로필
    if (sc >= profile) {
      $("#profile").addClass("on");
      $(
        "#profile .id_txt li:nth-child(1) p, #profile .id_txt li:nth-child(3) p"
      ).each(function (index) {
        $(this)
          .delay(index * 200)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
      $("#profile .id_txt img").each(function (index) {
        $(this)
          .delay(index * 300)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
    }
    // 키워드
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

    // 프로젝트 홈페이지
    if (sc > projects) {
      $("#projects").addClass("on");
    }

    // 홈페이지 기획서
    if (sc > planning) {
      $("#planning").addClass("on");
      $("#planning .color ul li").each(function (index) {
        $(this)
          .delay(index * 300)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
    }

    // 리액트 홈페이지
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

    // 자바스크립트 작업물
    if (sc > js) {
      $("#script").addClass("on");
      $("#script .numberGame .txt p").each(function (index) {
        $(this)
          .delay(index * 400)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
      $("#script .todolist .txt p").each(function (index) {
        $(this)
          .delay(index * 400)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
      $("#script .weather .txt p").each(function (index) {
        $(this)
          .delay(index * 400)
          .queue(function (next) {
            $(this).addClass("on");
            next();
          });
      });
    }

    // 일러스트
    if (sc > illust) {
      $("#illust").addClass("on");
      // $("#illust h2").addClass("con6_h2_slide");
      $("#illust .wrap").addClass("animate-text");
    } else {
      $("#illust .wrap").removeClass("animate-text");
    }

    // 클로징 섹션
    if (sc >= closing) {
      $("#closing-section").addClass("on");
    }
  });

  gsap.registerPlugin(ScrollTrigger);

  let list = gsap.utils.toArray("#illust .list li");
  let listA = gsap.utils.toArray("#illust .list li.a");
  let listB = gsap.utils.toArray("#illust .list li.b");
  let listC = gsap.utils.toArray("#illust .list li.c");

  gsap.to(list, {
    xPercent: -100 * (list.length - 2),
    scrollTrigger: {
      trigger: "#illust",
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
      trigger: "#illust",
      scrub: 2,
      end: "300%",
    },
  });

  gsap.to(listB, {
    y: -50,
    rotation: -10,
    scrollTrigger: {
      trigger: "#illust",
      scrub: 2,
      end: "300%",
    },
  });
  gsap.to(listC, {
    y: 30,
    rotation: 10,
    scrollTrigger: {
      trigger: "#illust",
      scrub: 2,
      end: "300%",
    },
  });

  // 일러스트 모달
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
    // 스크롤 비활성화
    $("body").css("overflow", "hidden");
  });

  // 오버레이 클릭 시 모달 닫기
  $overlay.on("click", function () {
    $modal.hide();
    $overlay.hide();
    // 스크롤 활성화
    $("body").css("overflow", "");
  });

  // X 버튼 클릭 시 모달 닫기
  $closeButton.on("click", function () {
    $modal.hide();
    $overlay.hide();
    // 스크롤 활성화
    $("body").css("overflow", "");
  });
});
