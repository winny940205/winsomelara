// Tabs Action
$(document).ready(function () {
    const tabLink = document.querySelectorAll(".tab-menu-link");
    const tabContent = document.querySelectorAll(".tab-bar-content");

    tabLink.forEach((item) => {
        item.addEventListener("click", activeTab);
    });

    function activeTab(item) {
        const btnTarget = item.currentTarget;
        const content = btnTarget.dataset.content;

        tabContent.forEach((item) => {
            item.classList.remove("is-active");
        });

        tabLink.forEach((item) => {
            item.classList.remove("is-active");
        });

        document.querySelector("#" + content).classList.add("is-active");
        btnTarget.classList.add("is-active");
    }
});
$(document).ready(function() {
  $('.popup-btn1').click(function(e) {
    $('.popup-wrap1').fadeIn(500);
    $('.popup-box1').removeClass('transform-out').addClass('transform-in');

    e.preventDefault();
  });

  $('.popup-close').click(function(e) {
    $('.popup-wrap1').fadeOut(500);
    $('.popup-box1').removeClass('transform-in').addClass('transform-out');

    e.preventDefault();
  });
});
$(document).ready(function() {
  $('.popup-btn2').click(function(e) {
    $('.popup-wrap2').fadeIn(500);
    $('.popup-box2').removeClass('transform-out').addClass('transform-in');

    e.preventDefault();
  });

  $('.popup-close').click(function(e) {
    $('.popup-wrap2').fadeOut(500);
    $('.popup-box2').removeClass('transform-in').addClass('transform-out');

    e.preventDefault();
  });
});