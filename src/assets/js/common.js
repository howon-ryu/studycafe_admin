$(function () {
  // .cardbox__tab 탭 버튼
  $(".card__left tr").on("click", function () {
    $(".card__left tr").removeClass("on");
    $(this).addClass("on");
  });
  // 탭에따라 입력창 변경
  $(".right__tab01_btn").on("click", function () {
    $(".right__tab_btn").removeClass("on");
    $(this).addClass("on");
    $(".right__tab_con").removeClass("on");
    $(".right__tab01_con").addClass("on");
  });
  $(".right__tab02_btn").on("click", function () {
    $(".right__tab_btn").removeClass("on");
    $(this).addClass("on");
    $(".right__tab_con").removeClass("on");
    $(".right__tab02_con").addClass("on");
  });
  $(".right__tab03_btn").on("click", function () {
    $(".right__tab_btn").removeClass("on");
    $(this).addClass("on");
    $(".right__tab_con").removeClass("on");
    $(".right__tab03_con").addClass("on");
  });
  $(".right__tab04_btn").on("click", function () {
    $(".right__tab_btn").removeClass("on");
    $(this).addClass("on");
    $(".right__tab_con").removeClass("on");
    $(".right__tab04_con").addClass("on");
  });
  // 오른쪽 input 그룹에 사용,대기에 따른 삭제 레디오버튼 노출
  $(".check__hold_input").on("click", function () {
    $(".check__delet").addClass("use");
  });
  $(".check__use_input").on("click", function () {
    $(".check__delet").removeClass("use");
  });

  // 타이머 버튼 눌러지는것
$(".timer_btn").on("click", function () {
  $(".timer_btn").removeClass("on");
  $(this).addClass("on");
});

});

// $(".check__hold_input").click(function () {
//   var checked = $(".check__hold_input").is(":checked");
//   if (checked) {
//     $(".check__delet").addClass("use");
//   } else {
//     $(".check__delet").removeClass("use");
//   }
// });
// if ($("input:radio[name=check__hold_input]").is(":checked") == true) {
//   $(".check__delet").addClass("use");
// }

// if ($("input:radio[name=check__hold_input]").is(":checked") == false) {
//   $(".check__delet").removeClass("use");
// }

