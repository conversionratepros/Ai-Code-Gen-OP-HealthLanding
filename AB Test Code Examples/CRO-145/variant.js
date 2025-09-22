(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "cro101";
    /* all Pure helper functions */

    function waitForElement(selector, trigger) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    function live(selector, event, callback, context) {
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this &&
        this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    function insertHtml(selector, content, position) {
      var el = document.querySelector(selector);
      if (!position) {
        position = "afterend";
      }
      if (el && content) {
        el.insertAdjacentHTML(position, content);
      }
    }

    function addClass(el, cls) {
      var el = document.querySelector(el);
      if (el) {
        el.classList.add(cls);
      }
    }

    function removeClass(el, cls) {
      var el = document.querySelector(el);
      if (el) {
        el.classList.contains(cls) && el.classList.remove(cls);
      }
    }

    var newCard = `<div class="cro101-choose-Oneplan" id="cro-101-cards">
        <div class="cro101-choose-Oneplan-wrapper container">
            <div class="cro101-choose-Oneplan-top-header">
                Why choose Oneplan?
            </div>
            <div class="cro101-choose-Oneplan-inner">
                <div class="cro101-choose-Oneplan-card card-1">
                    <div class="cro101-choose-Oneplan-card-header-icon">
                        <div class="cro101-choose-Oneplan-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="33" viewBox="0 0 41 33"
                                fill="none" class="cro-check-mark">
                                <g clip-path="url(#clip0_2142_181)">
                                    <path
                                        d="M28.9638 2.49023C28.9638 2.49023 40.0214 5.79924 38.4374 18.8342C36.8534 31.8692 23.8375 30.5882 21.3495 30.6342C18.8615 30.6802 0.740382 27.4642 2.85538 14.0772C4.97038 0.690236 22.9735 3.15623 22.9735 3.15623"
                                        stroke="#38A2D7" stroke-width="4" stroke-linecap="round" />
                                    <path
                                        d="M14.8843 15.4875C14.5793 15.1825 14.1656 15.0112 13.7343 15.0112C13.3029 15.0112 12.8893 15.1825 12.5843 15.4875C12.2793 15.7925 12.1079 16.2062 12.1079 16.6375C12.1079 17.0688 12.2793 17.4825 12.5843 17.7875L17.6433 22.8465C17.7943 22.9976 17.9735 23.1174 18.1709 23.1992C18.3682 23.2809 18.5797 23.323 18.7933 23.323C19.0068 23.323 19.2183 23.2809 19.4157 23.1992C19.613 23.1174 19.7923 22.9976 19.9433 22.8465L30.0613 12.7275C30.3663 12.4225 30.5376 12.0088 30.5376 11.5775C30.5376 11.1462 30.3663 10.7325 30.0613 10.4275C29.7563 10.1225 29.3426 9.95117 28.9113 9.95117C28.4799 9.95117 28.0663 10.1225 27.7613 10.4275L18.7923 19.3965L14.8843 15.4875Z"
                                        fill="#282B6E" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2142_181">
                                        <rect width="39.931" height="32.644" fill="white"
                                            transform="translate(0.666504)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="cro101-choose-Oneplan-card-header">
                            GET PAID <span>BEFORE</span> YOUR DOCTOR VISITS
                        </div>
                    </div>
                    <div class="cro101-choose-Oneplan-card-description">
                        Preload your day-to-day funds onto your Oneplan Claim Card with the Oneplan App to pay for
                        consultations.
                    </div>
                </div>
                <div class="cro101-choose-Oneplan-card card-2">
                    <div class="cro101-choose-Oneplan-card-header-icon">
                        <div class="cro101-choose-Oneplan-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="33" viewBox="0 0 41 33"
                                fill="none" class="cro-check-mark">
                                <g clip-path="url(#clip0_2142_181)">
                                    <path
                                        d="M28.9638 2.49023C28.9638 2.49023 40.0214 5.79924 38.4374 18.8342C36.8534 31.8692 23.8375 30.5882 21.3495 30.6342C18.8615 30.6802 0.740382 27.4642 2.85538 14.0772C4.97038 0.690236 22.9735 3.15623 22.9735 3.15623"
                                        stroke="#38A2D7" stroke-width="4" stroke-linecap="round" />
                                    <path
                                        d="M14.8843 15.4875C14.5793 15.1825 14.1656 15.0112 13.7343 15.0112C13.3029 15.0112 12.8893 15.1825 12.5843 15.4875C12.2793 15.7925 12.1079 16.2062 12.1079 16.6375C12.1079 17.0688 12.2793 17.4825 12.5843 17.7875L17.6433 22.8465C17.7943 22.9976 17.9735 23.1174 18.1709 23.1992C18.3682 23.2809 18.5797 23.323 18.7933 23.323C19.0068 23.323 19.2183 23.2809 19.4157 23.1992C19.613 23.1174 19.7923 22.9976 19.9433 22.8465L30.0613 12.7275C30.3663 12.4225 30.5376 12.0088 30.5376 11.5775C30.5376 11.1462 30.3663 10.7325 30.0613 10.4275C29.7563 10.1225 29.3426 9.95117 28.9113 9.95117C28.4799 9.95117 28.0663 10.1225 27.7613 10.4275L18.7923 19.3965L14.8843 15.4875Z"
                                        fill="#282B6E" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2142_181">
                                        <rect width="39.931" height="32.644" fill="white"
                                            transform="translate(0.666504)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="cro101-choose-Oneplan-card-header">
                            ACCESS TO <span>PRIVATE</span> HOSPITALS
                        </div>
                    </div>
                    <div class="cro101-choose-Oneplan-card-description">
                        Get access to private hospitals at an affordable premium to help you get the help you need,
                        quicker.
                    </div>
                </div>
                <div class="cro101-choose-Oneplan-card card-3">
                    <div class="cro101-choose-Oneplan-card-header-icon">
                        <div class="cro101-choose-Oneplan-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="33" viewBox="0 0 41 33"
                                fill="none" class="cro-check-mark">
                                <g clip-path="url(#clip0_2142_181)">
                                    <path
                                        d="M28.9638 2.49023C28.9638 2.49023 40.0214 5.79924 38.4374 18.8342C36.8534 31.8692 23.8375 30.5882 21.3495 30.6342C18.8615 30.6802 0.740382 27.4642 2.85538 14.0772C4.97038 0.690236 22.9735 3.15623 22.9735 3.15623"
                                        stroke="#38A2D7" stroke-width="4" stroke-linecap="round" />
                                    <path
                                        d="M14.8843 15.4875C14.5793 15.1825 14.1656 15.0112 13.7343 15.0112C13.3029 15.0112 12.8893 15.1825 12.5843 15.4875C12.2793 15.7925 12.1079 16.2062 12.1079 16.6375C12.1079 17.0688 12.2793 17.4825 12.5843 17.7875L17.6433 22.8465C17.7943 22.9976 17.9735 23.1174 18.1709 23.1992C18.3682 23.2809 18.5797 23.323 18.7933 23.323C19.0068 23.323 19.2183 23.2809 19.4157 23.1992C19.613 23.1174 19.7923 22.9976 19.9433 22.8465L30.0613 12.7275C30.3663 12.4225 30.5376 12.0088 30.5376 11.5775C30.5376 11.1462 30.3663 10.7325 30.0613 10.4275C29.7563 10.1225 29.3426 9.95117 28.9113 9.95117C28.4799 9.95117 28.0663 10.1225 27.7613 10.4275L18.7923 19.3965L14.8843 15.4875Z"
                                        fill="#282B6E" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2142_181">
                                        <rect width="39.931" height="32.644" fill="white"
                                            transform="translate(0.666504)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="cro101-choose-Oneplan-card-header">
                            CONVENIENT ONEPLAN <span>APP</span>
                        </div>
                    </div>
                    <div class="cro101-choose-Oneplan-card-description">
                        Your plan, your claims and anything else you need is all available through your Oneplan App.
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    var newReviewHeader = `<div class="cro101-reviews-header-subheader-container">
        <div class="cro101-reviews-header-subheader container">
            <div class="cro101-reviews-header-text">
                What our policyholders say
            </div>
            <div class="cro101-reviews-subheader-text">
                See what our customers have to say about their experience with Oneplan Health Insurance.
            </div>
        </div>
    </div>`;

    var health_Insurance_Card = `<div class="cro-t-101-plan-card-container" id="cro-plan_price_card">
        <div class="cro-t-101-plan-card-wrapper container">
            <div class="cro-t-101-plan-card-inner">
                <div class="cro-t-101-card-heading-heading-subheading">
                    <div class="cro-t-101-card-heading-text">
                        Health Insurance That Fits Your Budget
                    </div>
                    <div class="cro-t-101-subheading-text">
                        Oneplan offers flexible pricing tailored for individuals and families, ensuring the perfect plan
                        for
                        you.
                    </div>
                </div>
                <div class="cro-t-101-card-inner">
                    <div class="cro-t-101-card-inner-wrapper">
                        <div class="cro-t-101-card cro-t-101-card1">
                            <div class="cro-t-101-card-top-part">
                                <div class="cro-t-101-card-heading-cro-plan">Core Plan</div>
                                <div class="cro-t-101-card-heading-cro-from">From</div>
                                <div class="cro-t-101-card-heading-price">R500</div>

                                <div class="cro-t-101-card-per-month">per month</div>
                            </div>
                            <div class="cro-t-101-card-bottom-part">
                                <div class="cro-t-101-card-call-me-button"><a href="#" data-toggle="modal"
                                        data-target="#CallMePopUpPlans"><span class="call cro-circle"><img
                                                class="cro-callimg"
                                                src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101%7C+CRO-145/cro-one_plan_101_1.png"></span>Call
                                        me</a>
                                </div>
                                <div class="cro-t-101-card-quote-button"><a
                                        href="https://health.oneplan.co.za/?referrer=healthshortlp"
                                        target="_blank"><span class="quote cro-cirlce"><img class="quoteimg"
                                                src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101%7C+CRO-145/cro-one_plan_101_2.png"></span>Get
                                        a quote</a></div>
                                <div class="cro-t-101-card-plan-brochure"><a
                                        href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-Core-Plan.pdf?_gl=1*1cglcvb*_gcl_au*MTY2NzQ3MDY0My4xNzQwNjQ1NDEw*_ga*MTgxODg4NTQwMi4xNzQwNjQ1NDEw*_ga_T61DG9ES52*czE3NDgyMzg5NzckbzIyJGcxJHQxNzQ4MjM5MDU0JGo1MSRsMCRoMCRkRmVvbzF0ZHhUbTE2VmNiaTJaYnVZWmVYMmhFaEEzWWVYQQ..&_ga=2.212640596.1904519020.1748160821-1818885402.1740645410"
                                        target="_blank"><img src="/assets/landings/img/downloadtexticon.svg">Download
                                        plan
                                        brochure</a></div>
                            </div>
                        </div>
                        <div class="cro-t-101-card cro-t-101-card2">
                            <div class="cro-t-101-card-top-part">
                                <div class="cro-t-101-card-heading-cro-plan">Core Plan Plus</div>
                                <div class="cro-t-101-card-heading-cro-from">From</div>
                                <div class="cro-t-101-card-heading-price">R685</div>

                                <div class="cro-t-101-card-per-month">per month</div>
                            </div>
                            <div class="cro-t-101-card-bottom-part">
                                <div class="cro-t-101-card-call-me-button"><a href="#" data-toggle="modal"
                                        data-target="#CallMePopUpPlans"><span class="call cro-circle"><img
                                                class="cro-callimg"
                                                src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101%7C+CRO-145/cro-one_plan_101_1.png"></span>Call
                                        me</a>
                                </div>
                                <div class="cro-t-101-card-quote-button"><a
                                        href="https://health.oneplan.co.za/?referrer=healthshortlp"
                                        target="_blank"><span class="quote cro-cirlce"><img class="quoteimg"
                                                src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101%7C+CRO-145/cro-one_plan_101_2.png"></span>Get
                                        a quote</a></div>
                                <div class="cro-t-101-card-plan-brochure"><a
                                        href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-CorePlus-Plan.pdf?_gl=1*1m5r6t9*_gcl_au*MTY2NzQ3MDY0My4xNzQwNjQ1NDEw*_ga*MTgxODg4NTQwMi4xNzQwNjQ1NDEw*_ga_T61DG9ES52*czE3NDgyMzg5NzckbzIyJGcxJHQxNzQ4MjM5MDU0JGo1MSRsMCRoMCRkRmVvbzF0ZHhUbTE2VmNiaTJaYnVZWmVYMmhFaEEzWWVYQQ..&_ga=2.255625800.1904519020.1748160821-1818885402.1740645410"
                                        target="_blank"><img src="/assets/landings/img/downloadtexticon.svg">Download
                                        plan
                                        brochure</a></div>
                            </div>

                        </div>
                        <div class="cro-t-101-card cro-t-101-card3">
                            <div class="cro-t-101-card-top-part">
                                <div class="cro-t-101-card-heading-cro-plan">Blue Plan</div>
                                <div class="cro-t-101-card-heading-cro-from">From</div>
                                <div class="cro-t-101-card-heading-price">R1000</div>
                                <div class="cro-t-101-card-per-month">per month</div>
                            </div>
                            <div class="cro-t-101-card-bottom-part">
                                <div class="cro-t-101-card-call-me-button"><a href="#" data-toggle="modal"
                                        data-target="#CallMePopUpPlans"><span class="call cro-circle"><img
                                                class="cro-callimg"
                                                src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101%7C+CRO-145/cro-one_plan_101_1.png"></span>Call
                                        me</a>
                                </div>
                                <div class="cro-t-101-card-quote-button"><a
                                        href="https://health.oneplan.co.za/?referrer=healthshortlp"
                                        target="_blank"><span class="quote cro-cirlce"><img class="quoteimg"
                                                src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101%7C+CRO-145/cro-one_plan_101_2.png"></span>Get
                                        a quote</a></div>
                                <div class="cro-t-101-card-plan-brochure"><a
                                        href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-Blue-Plan.pdf?_gl=1*3xkgn5*_gcl_au*MTY2NzQ3MDY0My4xNzQwNjQ1NDEw*_ga*MTgxODg4NTQwMi4xNzQwNjQ1NDEw*_ga_T61DG9ES52*czE3NDgyMzg5NzckbzIyJGcxJHQxNzQ4MjM5MDU0JGo1MSRsMCRoMCRkRmVvbzF0ZHhUbTE2VmNiaTJaYnVZWmVYMmhFaEEzWWVYQQ..&_ga=2.56075371.1904519020.1748160821-1818885402.1740645410"
                                        target="_blank"><img src="/assets/landings/img/downloadtexticon.svg">Download
                                        plan
                                        brochure</a></div>
                            </div>
                        </div>
                        <div class="cro-t-101-card cro-t-101-card4">
                            <div class="cro-t-101-card-top-part">
                                <div class="cro-t-101-card-heading-cro-plan">Professional Plan</div>
                                <div class="cro-t-101-card-heading-cro-from">From</div>
                                <div class="cro-t-101-card-heading-price">R1 465</div>
                                <div class="cro-t-101-card-per-month">per month</div>
                            </div>
                            <div class="cro-t-101-card-bottom-part">
                                <div class="cro-t-101-card-call-me-button"><a href="#" data-toggle="modal"
                                        data-target="#CallMePopUpPlans"><span class="call cro-circle"><img
                                                class="cro-callimg"
                                                src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101%7C+CRO-145/cro-one_plan_101_1.png"></span>Call
                                        me</a>
                                </div>
                                <div class="cro-t-101-card-quote-button"><a
                                        href="https://health.oneplan.co.za/?referrer=healthshortlp"
                                        target="_blank"><span class="quote cro-cirlce"><img class="quoteimg"
                                                src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101%7C+CRO-145/cro-one_plan_101_2.png"></span>Get
                                        a quote</a></div>
                                <div class="cro-t-101-card-plan-brochure"><a
                                        href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-Professional-Plan.pdf?_gl=1*3xkgn5*_gcl_au*MTY2NzQ3MDY0My4xNzQwNjQ1NDEw*_ga*MTgxODg4NTQwMi4xNzQwNjQ1NDEw*_ga_T61DG9ES52*czE3NDgyMzg5NzckbzIyJGcxJHQxNzQ4MjM5MDU0JGo1MSRsMCRoMCRkRmVvbzF0ZHhUbTE2VmNiaTJaYnVZWmVYMmhFaEEzWWVYQQ..&_ga=2.56075371.1904519020.1748160821-1818885402.1740645410"
                                        target="_blank"><img src="/assets/landings/img/downloadtexticon.svg">Download
                                        plan
                                        brochure</a></div>
                            </div>
                        </div>
                        <div class="cro-t-101-card cro-t-101-card5">
                            <div class="cro-t-101-card-top-part">
                                <div class="cro-t-101-card-heading-cro-plan">Executive Plan</div>
                                <div class="cro-t-101-card-heading-cro-from">From</div>
                                <div class="cro-t-101-card-heading-price">R1 975</div>
                                <div class="cro-t-101-card-per-month">per month</div>
                            </div>
                            <div class="cro-t-101-card-bottom-part">
                                <div class="cro-t-101-card-call-me-button"><a href="#" data-toggle="modal"
                                        data-target="#CallMePopUpPlans"><span class="call cro-circle"><img
                                                class="cro-callimg"
                                                src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101%7C+CRO-145/cro-one_plan_101_1.png"></span>Call
                                        me</a>
                                </div>
                                <div class="cro-t-101-card-quote-button"><a
                                        href="https://health.oneplan.co.za/?referrer=healthshortlp"
                                        target="_blank"><span class="quote cro-cirlce"><img class="quoteimg"
                                                src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101%7C+CRO-145/cro-one_plan_101_2.png"></span>Get
                                        a quote</a></div>
                                <div class="cro-t-101-card-plan-brochure"><a
                                        href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-Executive-Plan.pdf?_gl=1*1m5r6t9*_gcl_au*MTY2NzQ3MDY0My4xNzQwNjQ1NDEw*_ga*MTgxODg4NTQwMi4xNzQwNjQ1NDEw*_ga_T61DG9ES52*czE3NDgyMzg5NzckbzIyJGcxJHQxNzQ4MjM5MDU0JGo1MSRsMCRoMCRkRmVvbzF0ZHhUbTE2VmNiaTJaYnVZWmVYMmhFaEEzWWVYQQ..&_ga=2.255625800.1904519020.1748160821-1818885402.1740645410"
                                        target="_blank"><img src="/assets/landings/img/downloadtexticon.svg">Download
                                        plan
                                        brochure</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="cro-t-101-plan-card-bottom-button">
                        <a href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-Comparsion.pdf?_gl=1*1chtmmj*_gcl_au*MTUzOTczNDg1My4xNzQ4MjM2NzA2*_ga*MjAyMTc1OTExMS4xNzQ4MjM2NzA1*_ga_T61DG9ES52*czE3NDgyMzY3MDYkbzEkZzEkdDE3NDgyMzk2MDgkajQwJGwwJGgwJGR1R0RORkpvVkFxejhPWEdqQVVXbXBzbTNNZG0tUVJxMDN3&_ga=2.239398282.828531749.1748236705-2021759111.1748236705"
                            class="cro-t-101-plan-card-bottom-button-text" target="_blank">
                            Download comparison brochure
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    var health_Insurance_Benefits = `  <div class="cro101-Health-Insurance">
        <div class="cro101-Health-Insurance-wrapper container">
            <div class="cro101-Health-Insurance-inner">
                <div class="cro101-Health-Insurance-top-heading">
                    <h2>Health Insurance Made Simple – No Hassle, Just Benefits</h2>
                </div>
                <div class="cro101-Health-Insurance-content">
                    <div class="cro101-Health-Insurance-left">
                        <img src="/assets/landings/img/peopleimg.jpg" alt="Happy Couple" />
                    </div>
                    <div class="cro101-Health-Insurance-right">
                        <p class="cro101-Health-Insurance-right-text">
                            With <span class="highlight">Oneplan Health</span> Insurance, you know exactly what you're
                            covered for. There is no complicated jargon, confusing benefits, long claims processes or
                            high
                            monthly premiums.
                        </p>
                        <ul class="cro101-Health-Insurance-benefits">
                            <li>
                                <span class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="25" viewBox="0 0 31 25"
                                        fill="none">
                                        <g clip-path="url(#clip0_85_2065)">
                                            <path
                                                d="M21.9674 2.47461C21.9674 2.47461 30.5519 4.9074 29.3221 14.4908C28.0924 24.0742 17.9877 23.1324 16.0561 23.1662C14.1246 23.2 0.0564591 20.8356 1.69842 10.9934C3.34037 1.15124 17.3169 2.96426 17.3169 2.96426"
                                                stroke="#38A2D7" stroke-width="3.10697" stroke-linecap="round" />
                                            <path
                                                d="M11.0372 12.0303C10.8004 11.8061 10.4793 11.6801 10.1444 11.6801C9.80958 11.6801 9.48843 11.8061 9.25164 12.0303C9.01486 12.2545 8.88184 12.5587 8.88184 12.8758C8.88184 13.1929 9.01486 13.497 9.25164 13.7213L13.1791 17.4407C13.2964 17.5517 13.4355 17.6398 13.5887 17.6999C13.7419 17.76 13.9061 17.791 14.0719 17.791C14.2378 17.791 14.4019 17.76 14.5551 17.6999C14.7083 17.6398 14.8475 17.5517 14.9647 17.4407L22.8197 10.0011C23.0565 9.7769 23.1895 9.47277 23.1895 9.15565C23.1895 8.83854 23.0565 8.5344 22.8197 8.31016C22.5829 8.08593 22.2618 7.95996 21.9269 7.95996C21.5921 7.95996 21.2709 8.08593 21.0341 8.31016L14.0712 14.9042L11.0372 12.0303Z"
                                                fill="#282B6E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_85_2065">
                                                <rect width="31" height="24" fill="white"
                                                    transform="translate(0 0.644043)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <div>
                                    <span class="blue" style="display: inline-block; margin-bottom: 5px;">Affordable</span><br />
                                    Affordable monthly premiums from just R500 per month.
                                </div>
                            </li>
                            <li>
                                <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="25"
                                        viewBox="0 0 31 25" fill="none">
                                        <g clip-path="url(#clip0_85_2065)">
                                            <path
                                                d="M21.9674 2.47461C21.9674 2.47461 30.5519 4.9074 29.3221 14.4908C28.0924 24.0742 17.9877 23.1324 16.0561 23.1662C14.1246 23.2 0.0564591 20.8356 1.69842 10.9934C3.34037 1.15124 17.3169 2.96426 17.3169 2.96426"
                                                stroke="#38A2D7" stroke-width="3.10697" stroke-linecap="round" />
                                            <path
                                                d="M11.0372 12.0303C10.8004 11.8061 10.4793 11.6801 10.1444 11.6801C9.80958 11.6801 9.48843 11.8061 9.25164 12.0303C9.01486 12.2545 8.88184 12.5587 8.88184 12.8758C8.88184 13.1929 9.01486 13.497 9.25164 13.7213L13.1791 17.4407C13.2964 17.5517 13.4355 17.6398 13.5887 17.6999C13.7419 17.76 13.9061 17.791 14.0719 17.791C14.2378 17.791 14.4019 17.76 14.5551 17.6999C14.7083 17.6398 14.8475 17.5517 14.9647 17.4407L22.8197 10.0011C23.0565 9.7769 23.1895 9.47277 23.1895 9.15565C23.1895 8.83854 23.0565 8.5344 22.8197 8.31016C22.5829 8.08593 22.2618 7.95996 21.9269 7.95996C21.5921 7.95996 21.2709 8.08593 21.0341 8.31016L14.0712 14.9042L11.0372 12.0303Z"
                                                fill="#282B6E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_85_2065">
                                                <rect width="31" height="24" fill="white"
                                                    transform="translate(0 0.644043)" />
                                            </clipPath>
                                        </defs>
                                    </svg></span>
                                <div>
                                    <span class="blue" style="display: inline-block; margin-bottom: 5px;">Claims Paid Upfront</span><br/>
                                    Pay for doctor visits with your preloaded Oneplan Claim Card.
                                </div>
                            </li>
                            <li>
                                <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="25"
                                        viewBox="0 0 31 25" fill="none">
                                        <g clip-path="url(#clip0_85_2065)">
                                            <path
                                                d="M21.9674 2.47461C21.9674 2.47461 30.5519 4.9074 29.3221 14.4908C28.0924 24.0742 17.9877 23.1324 16.0561 23.1662C14.1246 23.2 0.0564591 20.8356 1.69842 10.9934C3.34037 1.15124 17.3169 2.96426 17.3169 2.96426"
                                                stroke="#38A2D7" stroke-width="3.10697" stroke-linecap="round" />
                                            <path
                                                d="M11.0372 12.0303C10.8004 11.8061 10.4793 11.6801 10.1444 11.6801C9.80958 11.6801 9.48843 11.8061 9.25164 12.0303C9.01486 12.2545 8.88184 12.5587 8.88184 12.8758C8.88184 13.1929 9.01486 13.497 9.25164 13.7213L13.1791 17.4407C13.2964 17.5517 13.4355 17.6398 13.5887 17.6999C13.7419 17.76 13.9061 17.791 14.0719 17.791C14.2378 17.791 14.4019 17.76 14.5551 17.6999C14.7083 17.6398 14.8475 17.5517 14.9647 17.4407L22.8197 10.0011C23.0565 9.7769 23.1895 9.47277 23.1895 9.15565C23.1895 8.83854 23.0565 8.5344 22.8197 8.31016C22.5829 8.08593 22.2618 7.95996 21.9269 7.95996C21.5921 7.95996 21.2709 8.08593 21.0341 8.31016L14.0712 14.9042L11.0372 12.0303Z"
                                                fill="#282B6E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_85_2065">
                                                <rect width="31" height="24" fill="white"
                                                    transform="translate(0 0.644043)" />
                                            </clipPath>
                                        </defs>
                                    </svg></span>
                                <div>
                                    <span class="blue" style="display: inline-block; margin-bottom: 5px;">Private Hospitals</span><br />
                                    Access to private hospitals and other out-of-hospital benefits.
                                </div>
                            </li>
                            <li>
                                <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="25"
                                        viewBox="0 0 31 25" fill="none">
                                        <g clip-path="url(#clip0_85_2065)">
                                            <path
                                                d="M21.9674 2.47461C21.9674 2.47461 30.5519 4.9074 29.3221 14.4908C28.0924 24.0742 17.9877 23.1324 16.0561 23.1662C14.1246 23.2 0.0564591 20.8356 1.69842 10.9934C3.34037 1.15124 17.3169 2.96426 17.3169 2.96426"
                                                stroke="#38A2D7" stroke-width="3.10697" stroke-linecap="round" />
                                            <path
                                                d="M11.0372 12.0303C10.8004 11.8061 10.4793 11.6801 10.1444 11.6801C9.80958 11.6801 9.48843 11.8061 9.25164 12.0303C9.01486 12.2545 8.88184 12.5587 8.88184 12.8758C8.88184 13.1929 9.01486 13.497 9.25164 13.7213L13.1791 17.4407C13.2964 17.5517 13.4355 17.6398 13.5887 17.6999C13.7419 17.76 13.9061 17.791 14.0719 17.791C14.2378 17.791 14.4019 17.76 14.5551 17.6999C14.7083 17.6398 14.8475 17.5517 14.9647 17.4407L22.8197 10.0011C23.0565 9.7769 23.1895 9.47277 23.1895 9.15565C23.1895 8.83854 23.0565 8.5344 22.8197 8.31016C22.5829 8.08593 22.2618 7.95996 21.9269 7.95996C21.5921 7.95996 21.2709 8.08593 21.0341 8.31016L14.0712 14.9042L11.0372 12.0303Z"
                                                fill="#282B6E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_85_2065">
                                                <rect width="31" height="24" fill="white"
                                                    transform="translate(0 0.644043)" />
                                            </clipPath>
                                        </defs>
                                    </svg></span>
                                <div>
                                    <span class="blue" style="display: inline-block; margin-bottom: 5px;">Expertise</span><br />
                                    A dedicated claims team with nurses available to assist you when you need them most.
                                </div>
                            </li>
                        </ul>
                        <div class="cro101-Health-Insurance-bottom-button">
                            <a href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-Comparsion.pdf" target="_blank" class="cta-btn">Download comparison brochure</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    //     var newFaq_Section = `<div class="cro-t-101-faq-container">
    //     <div class="cro-t-101-Wrapper cro-container">
    //         <div class="cro-t-101-faq-header-button">
    //             <div class="cro-t-101-faq-header">
    //                 <div class="cro-t-101-faq-headind-text">
    //                     FAQs
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-faq-button-parent">
    //                 <div class="cro-t-101-faq-button accident">Accident</div>
    //                 <div class="cro-t-101-faq-button hospital">In Hospital</div>
    //             </div>
    //         </div>
    //         <div class="cro-t-101-Wrapper-inner" id="cro-t-101-in-accident-faq">
    //             <div class="cro-t-101-content cro-t-101-content1 croShow">
    //                 <div class="cro-t-101-header" index=1>
    //                     <div class="cro-t-101-header-text">What qualifies as an accident under Oneplan's coverage?</div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content2">
    //                 <div class="cro-t-101-header" index=2>
    //                     <div class="cro-t-101-header-text">Are self-inflicted injuries covered under accident benefits?
    //                     </div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content3">
    //                 <div class="cro-t-101-header" index=3>
    //                     <div class="cro-t-101-header-text">How does the Oneplan Claim Card work for accident claims?
    //                     </div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content4">
    //                 <div class="cro-t-101-header" index=4>
    //                     <div class="cro-t-101-header-text">What is the process for claiming accident-related hospital
    //                         admissions?
    //                     </div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content5">
    //                 <div class="cro-t-101-header" index=5>
    //                     <div class="cro-t-101-header-text">Are there waiting periods for accident cover benefits?</div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content6">
    //                 <div class="cro-t-101-header" index=6>
    //                     <div class="cro-t-101-header-text">Does accident cover include rehabilitation costs?</div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content7">
    //                 <div class="cro-t-101-header" index=7>
    //                     <div class="cro-t-101-header-text">Are accidents resulting from professional sports covered?
    //                     </div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="cro-t-101-Wrapper-inner" id="cro-t-101-in-hospital-faq" style="display: none;">
    //             <div class="cro-t-101-content cro-t-101-content1 croShow">
    //                 <div class="cro-t-101-header" index=1>
    //                     <div class="cro-t-101-header-text">Does my insurance cover all hospital expenses?</div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content2">
    //                 <div class="cro-t-101-header" index=2>
    //                     <div class="cro-t-101-header-text">Do I need pre-approval for hospitalization?
    //                     </div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content3">
    //                 <div class="cro-t-101-header" index=3>
    //                     <div class="cro-t-101-header-text"> How many days of hospitalization are covered?
    //                     </div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content4">
    //                 <div class="cro-t-101-header" index=4>
    //                     <div class="cro-t-101-header-text">Can I go to any hospital?
    //                     </div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content5">
    //                 <div class="cro-t-101-header" index=5>
    //                     <div class="cro-t-101-header-text">Is ICU (Intensive Care Unit) stay included in In Hospital
    //                         coverage?</div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content6">
    //                 <div class="cro-t-101-header" index=6>
    //                     <div class="cro-t-101-header-text">Are pre and post-hospitalization expenses covered?</div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="cro-t-101-content cro-t-101-content7">
    //                 <div class="cro-t-101-header" index=7>
    //                     <div class="cro-t-101-header-text">What documents are required for hospital claims?
    //                     </div>
    //                     <div class="cro-t-101-header-icon">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-close">
    //                             <path
    //                                 d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
    //                             fill="none" class="cro-icon-open">
    //                             <path
    //                                 d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
    //                                 stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //                     </div>
    //                 </div>
    //                 <div class="cro-t-101-drop-down">
    //                     <div class="cro-t-101-drop-down-text">
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    //                         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    //                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    //                         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>`;

    var newFaq_Section_Update = `<div class="cro-t-101-faq-container">
        <div class="cro-t-101-Wrapper cro-container">
        <div class="cro-t-101-faq-header-button">
                <div class="cro-t-101-faq-header">
                    <div class="cro-t-101-faq-headind-text">
                        FAQs
                    </div>
                </div>
            </div>
            <div class="cro-t-101-Wrapper-inner" id="cro-t-101-in-accident-faq">
                <div class="cro-t-101-content cro-t-101-content1">
                    <div class="cro-t-101-header" index=1>
                        <div class="cro-t-101-header-text">How does the pre-loading of claims work and when will the
                            Oneplan Claim Card be delivered?</div>
                        <div class="cro-t-101-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-close">
                                <path
                                    d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-open">
                                <path
                                    d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div class="cro-t-101-drop-down">
                        <div class="cro-t-101-drop-down-text">
                            Your personalised Oneplan Claim Card will be delivered to your door 30 days after your first
                            successful debit order. You need to download the Oneplan App, register, and after your
                            30-day waiting period, you can load day-to-day benefits via the App (under My Claims) to
                            your Oneplan Claim Card in minutes. You can swipe this card like you would a debit card at
                            your doctor after your consultation. (Subject to the applicable waiting periods.)
                        </div>
                    </div>
                </div>
                <div class="cro-t-101-content cro-t-101-content2">
                    <div class="cro-t-101-header" index=2>
                        <div class="cro-t-101-header-text">Do we have a network of doctors and hospitals?</div>
                        <div class="cro-t-101-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-close">
                                <path
                                    d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-open">
                                <path
                                    d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div class="cro-t-101-drop-down">
                        <div class="cro-t-101-drop-down-text">
                            We make sure you can visit your preferred and trusted registered family doctor and/or
                            hospital nationwide in South Africa. We also have contracts with all major hospitals,
                            namely: Life, Mediclinic, and Netcare and more.
                        </div>
                    </div>
                </div>
                <div class="cro-t-101-content cro-t-101-content3">
                    <div class="cro-t-101-header" index=3>
                        <div class="cro-t-101-header-text">Is this a Medical Aid?
                        </div>
                        <div class="cro-t-101-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-close">
                                <path
                                    d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-open">
                                <path
                                    d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div class="cro-t-101-drop-down">
                        <div class="cro-t-101-drop-down-text">
                            Oneplan is medical cover called health insurance which gives you access to private and
                            government hospitals and offers broad day-to-day benefits such as X-rays, Blood Tests,
                            Pre-Birth Visits, Doctor Visits, Scripted and Over-the-Counter Medication, Dentistry, and
                            Optometry cover, at an affordable premium, to help you get better quickly when you need to.
                            <br>
                            Oneplan is under a special exemption from the Medical Schemes Act under demarcation and is
                            regulated under the Short-Term Insurance Act and, therefore, is not a Medical Aid.
                        </div>
                    </div>
                </div>
                <div class="cro-t-101-content cro-t-101-content4">
                    <div class="cro-t-101-header" index=4>
                        <div class="cro-t-101-header-text">How long has Oneplan been around?
                        </div>
                        <div class="cro-t-101-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-close">
                                <path
                                    d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-open">
                                <path
                                    d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div class="cro-t-101-drop-down">
                        <div class="cro-t-101-drop-down-text">
                            Oneplan sold its first health policy in 2010, so 25 years of helping people get better quickly with quality benefits they can use when they need it the most. Oneplan was created to ensure all South Africans have financial inclusion when it comes to affordable and sustainable healthcare. 
                        </div>
                    </div>
                </div>
                <div class="cro-t-101-content cro-t-101-content5">
                    <div class="cro-t-101-header" index=5>
                        <div class="cro-t-101-header-text">Are there exclusions?</div>
                        <div class="cro-t-101-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-close">
                                <path
                                    d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-open">
                                <path
                                    d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div class="cro-t-101-drop-down">
                        <div class="cro-t-101-drop-down-text">
                            There are general and specific exclusions, and conditions that apply to all our health plan types. These can be found in the policy wording and on our website sign-up journey.
                        </div>
                    </div>
                </div>
                <div class="cro-t-101-content cro-t-101-content6">
                    <div class="cro-t-101-header" index=6>
                        <div class="cro-t-101-header-text">Do I have a savings for out-of-hospital cover?</div>
                        <div class="cro-t-101-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-close">
                                <path
                                    d="M16.0003 11.3108V21.9775M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282972" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33"
                                fill="none" class="cro-icon-open">
                                <path
                                    d="M10.667 16.6441H21.3337M29.3337 16.6441C29.3337 24.0079 23.3641 29.9775 16.0003 29.9775C8.63653 29.9775 2.66699 24.0079 2.66699 16.6441C2.66699 9.28033 8.63653 3.31079 16.0003 3.31079C23.3641 3.31079 29.3337 9.28033 29.3337 16.6441Z"
                                    stroke="#282B6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div class="cro-t-101-drop-down">
                        <div class="cro-t-101-drop-down-text">
                            Oneplan works a little differently with more accessible benefits when it comes to making sure you can get better quickly. You use your day-to-day benefits for out-of-hospital cover. These have a per-event cover amount or invoice amount, whichever is lesser, as well as per-year cover limits. The day-to-day benefits have been tailored to ensure you have cover for Doctors’ Visits, Blood Tests, Medication, X-rays, Optometry, Dentistry, and Pre-Birth Maternity (depending on the plan you choose), ensuring that when the expected, unexpected and everything in between happens, you have the funds available to pre-load using the Oneplan App or via our Claims WhatsApp team.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    function newHtmlAdding() {
      waitForElement('#hero', function () {
        if (!document.querySelector('.cro101-choose-Oneplan')) {
          insertHtml('#hero', newCard, "afterend");
        }
      });

      waitForElement('#reviews .testimonial', function () {
        if (!document.querySelector('.cro101-reviews-header-subheader-container')) {
          insertHtml('#reviews .testimonial', newReviewHeader, "afterbegin");
        }
      });

      waitForElement('#simpleandaffordable', function () {
        if (!document.querySelector('.cro-t-101-plan-card-container')) {
          insertHtml('#simpleandaffordable', health_Insurance_Card, "afterend");
        }
      });

      waitForElement('#cro-plan_price_card', function () {
        if (!document.querySelector('.cro101-Health-Insurance')) {
          insertHtml('#cro-plan_price_card', health_Insurance_Benefits, "afterend");
        }
      });

      waitForElement('.cro101-Health-Insurance', function () {
        if (!document.querySelector('.cro-t-101-faq-container')) {
          insertHtml('.cro101-Health-Insurance', newFaq_Section_Update, "afterend");
        }
      });
    };

    /* Variation Init */
    function init() {
      addClass("body", variation_name)
      newHtmlAdding();
    }

    function even_handler() {
      live(".cro-t-101-header", "click", function () {
        var check = document.querySelector(".cro-t-101-content.croShow");
        var parent = this.closest(".cro-t-101-content");

        if (check && parent === check) {
          check.classList.remove("croShow");
          // console.log("remove");
        } else {

          if (check) {
            check.classList.remove("croShow");
            // console.log("remove");
          }
          if (parent) {
            parent.classList.add("croShow");
            // console.log("add");
          }
        }
      });

      live(".cro-t-101-card-call-me-button", "click", function () {
        // document.querySelector('#callbackcol .et_contact_bottom_container .et_pb_button').click();
        // addClass("body", "cro-scroll-auto");
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", function (e) {
        var openDropdown = document.querySelector(".cro-t-101-content.croShow");
        if (openDropdown && !e.target.closest(".cro-t-101-content")) {
          openDropdown.classList.remove("croShow");
          console.log("outside click - remove");
        }
      });
    }


    if (!window.cro_101) {
      waitForElement('#hero', init);
      even_handler();
      window.cro_101 = true;
    }

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();