(function () {
  try {
    /* main variables */
    var debug = 1;
    var recipe_name = "cro-81";

    function addClass(el, cls) {
      var el = document.querySelector(el);
      if (el) {
        el.classList.add(cls);
      }
    }

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    var clockIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="46" viewBox="0 0 42 46" fill="none">
        <g clip-path="url(#clip0_1_95)">
          <path d="M34.5218 8.89126C34.1329 8.51522 33.6962 8.11213 33.2813 7.6901C32.4666 6.86362 32.4571 5.70439 33.2458 4.93067C34.0169 4.17453 35.1809 4.17047 35.9929 4.96584C37.8106 6.74459 39.6174 8.53551 41.4106 10.3373C42.2021 11.1326 42.1871 12.3081 41.4229 13.0615C40.6627 13.8122 39.4782 13.8082 38.6731 13.0345C38.235 12.6138 37.8256 12.162 37.4299 11.7494C36.8199 12.3622 36.2617 12.9208 35.6995 13.4849C42.1584 21.352 41.2864 32.0502 35.548 38.8176C29.6186 45.8095 20.0933 47.7884 12.1278 44.3513C3.91394 40.8073 -1.06433 32.3748 0.193887 23.3336C1.43982 14.3723 8.70934 7.25454 18.1118 6.25492V3.84854C17.5523 3.84854 16.9791 3.85124 16.4074 3.84854C15.171 3.84177 14.3085 3.041 14.3181 1.90882C14.3276 0.795577 15.1737 0.00832713 16.3883 0.0056218C18.8747 -0.00114151 21.3597 -0.00114151 23.8461 0.0056218C25.0402 0.00832713 25.904 0.829393 25.9013 1.92911C25.8972 3.02612 25.0265 3.83636 23.8324 3.84718C23.2566 3.85259 22.6793 3.84718 22.0352 3.84718V6.24681C26.0787 6.6756 29.68 8.13242 32.7914 10.6348C33.3659 10.0559 33.92 9.49726 34.5218 8.88991V8.89126ZM20.1001 40.4367C28.1038 40.4435 34.5805 34.0373 34.5941 26.0998C34.6078 18.1651 28.1652 11.7535 20.1438 11.7183C12.1455 11.6832 5.58837 18.1354 5.57609 26.0566C5.56381 33.9777 12.08 40.4299 20.1001 40.4367Z" fill="#282B6E" />
          <path d="M22.0337 21.8861C22.0337 23.2361 22.0228 24.586 22.0392 25.9346C22.0474 26.6461 21.7772 27.2034 21.2327 27.6538C19.9404 28.7252 18.6603 29.81 17.368 30.8799C16.4236 31.6631 15.22 31.605 14.5036 30.7555C13.7762 29.8925 13.925 28.7333 14.8693 27.9406C15.8437 27.1236 16.8153 26.3039 17.8019 25.5018C18.0612 25.2907 18.1677 25.0703 18.1663 24.7321C18.1513 22.3879 18.1472 20.0424 18.1636 17.6969C18.1731 16.2306 19.52 15.2837 20.8192 15.8153C21.6025 16.1359 22.0064 16.7392 22.0324 17.5833C22.0324 17.6171 22.0324 17.6509 22.0324 17.6847C22.0324 19.0847 22.0324 20.4847 22.0324 21.8847L22.0337 21.8861Z" fill="#282B6E" />
        </g>
        <defs>
          <clipPath id="clip0_1_95">
            <rect width="42" height="46" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `;

    var headerBadgeHtml = `
      <div class="cro81-badge-container">
        <div class="cro81-badge-content">
          <div class="cro81-badge-text">
            <div class="cro81-badge-text1">In a hurry? Get an online quote</div>
            <div class="cro81-badge-text2">in under 2 minutes.</div>
          </div>
          <div class="cro81-badge-img">${clockIcon}</div>
        </div>
      </div>
    `;

    var headerBadgeHtmlDesktop = `<div class="cro81-badge-wrapper cro81-badge-desktop">${headerBadgeHtml}</div>`;
    var headerBadgeHtmlMobile = `<div class="cro81-badge-wrapper cro81-badge-mobile">${headerBadgeHtml}</div>`;

    function htmlInsertion() {
      waitForElement(
        "#main-header .logo.container",
        function () {
          if (!document.querySelector(".cro81-badge-desktop")) {
            document.querySelector("#main-header .logo.container").insertAdjacentHTML("beforeend", headerBadgeHtmlDesktop);
          }
          if (!document.querySelector(".cro81-badge-mobile")) {
            document.querySelector("#main-header .logo.container").insertAdjacentHTML("afterend", headerBadgeHtmlMobile);
          }
        },
        50,
        30000
      );
    }

    /* Variation Init */
    function init() {
      addClass("body", recipe_name);
      htmlInsertion();
    }

    waitForElement("#main-header", init, 50, 30000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + recipe_name);
  }
})();