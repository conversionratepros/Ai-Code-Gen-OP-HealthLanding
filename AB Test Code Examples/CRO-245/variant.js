(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "cro-t-111";
        var pageLocation = window.location.pathname;
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

        var pricingCard = `<div class="cro-t-111-cards-part">
      <div class="cro-t-111-cards-part-wrapper">
          <div class="cro-t-111-card-inner">
              <div class="cro-t-111-card cro-t-111-card1">
                  <div class="cro-t-111-card-top-part">
                      <div class="cro-t-111-card-heading"><span class="cro-plan">Core Plan
                          </span>
                          <div class="cro-card-pricing">
                              <span class="cro-from">From</span><span class="cro-price">R500</span><span
                                  class="cro-themonth">per month</span>
                          </div>
                      </div>
                  </div>
                  <div class="cro-t-111-card-bottom-part">
                      <div class="cro-t-111-bottom-price single-price">
                          <div class="cro-t-111-bottom-price-text">Single</div>
                          <div class="cro-t-111-bottom-price">R500</div>
                      </div>
                      <div class="cro-t-111-bottom-price Couple-price">
                          <div class="cro-t-111-bottom-price-text">Couple</div>
                          <div class="cro-t-111-bottom-price">R1 000</div>
                      </div>
                      <div class="cro-t-111-bottom-list-part">
                          <ul>
                              <li>Most affordable</li>
                              <li>Day to Day Benefits (Excl Specialist)</li>
                              <li>Casualty Illness & Accident</li>
                              <li>Accident In Hospital</li>
                              <li>Family Disability & Death</li>
                          </ul>
                      </div>
  
                      <div class="cro-t-111-card-plan-brochure"><a
                              href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-Core-Plan.pdf?_ga=2.211228435.749271083.1729665013-167645603.1729665013&amp;_gl=1*365t7b*_gcl_au*MTU5NzEwNjIxMy4xNzI5NjY1MDI0*_ga*MTY3NjQ1NjAzLjE3Mjk2NjUwMTM.*_ga_T61DG9ES52*MTcyOTg2MTQ0NC45LjEuMTcyOTg2MTg4NS4xNC4wLjA."
                              target="_blank"><img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+111.113/Recipe+111.113-one-plan-1.svg">Download
                              plan
                              brochure</a></div>
                  </div>
              </div>
              <div class="cro-t-111-card cro-t-111-card2">
                  <div class="cro-t-111-card-top-part">
                      <div class="cro-t-111-card-heading"><span class="cro-plan">Core Plan Plus</span>
                          <div class="cro-card-pricing"><span class="cro-from">From</span><span
                                  class="cro-price">R685</span><span class="cro-themonth">per month</span>
                          </div>
                      </div>
                  </div>
                  <div class="cro-t-111-card-bottom-part">
                      <div class="cro-t-111-bottom-price single-price">
                          <div class="cro-t-111-bottom-price-text">Single</div>
                          <div class="cro-t-111-bottom-price">R685</div>
                      </div>
                      <div class="cro-t-111-bottom-price Couple-price">
                          <div class="cro-t-111-bottom-price-text">Couple</div>
                          <div class="cro-t-111-bottom-price">R1 325</div>
                      </div>
                      <div class="cro-t-111-bottom-list-part">
                          <ul>
                              <li>Comprehensive & Affordable</li>
                              <li>Day to Day Benefits (Excl Specialist)</li>
                              <li>Casualty Illness & Accident</li>
                              <li>Accident & Illness In Hospital</li>
                              <li>Family Disability & Death</li>
                          </ul>
                      </div>
                      <div class="cro-t-111-card-plan-brochure"><a
                              href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-CorePlus-Plan.pdf"
                              target="_blank"><img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+111.113/Recipe+111.113-one-plan-1.svg">Download
                              plan
                              brochure</a></div>
                  </div>
              </div>
              <div class="cro-t-111-card cro-t-111-card3">
                  <div class="cro-t-111-card-top-part">
                      <div class="cro-t-111-card-heading"><span class="cro-plan">Blue Plan</span>
                          <div class="cro-card-pricing"><span class="cro-from">From</span><span
                                  class="cro-price">R1 000</span><span class="cro-themonth">per month</span>
                          </div>
                      </div>
                  </div>
                  <div class="cro-t-111-card-bottom-part">
                      <div class="cro-t-111-bottom-price single-price">
                          <div class="cro-t-111-bottom-price-text">Single</div>
                          <div class="cro-t-111-bottom-price">R1 000</div>
                      </div>
                      <div class="cro-t-111-bottom-price Couple-price">
                          <div class="cro-t-111-bottom-price-text">Couple</div>
                          <div class="cro-t-111-bottom-price">R1 980</div>
                      </div>
                      <div class="cro-t-111-bottom-list-part">
                          <ul>
                              <li>Most Popular Plan</li>
                              <li>Day to Day Benefits (Excl Specialist)</li>
                              <li>Casualty Illness & Accident</li>
                              <li>Accident & Illness In Hospital</li>
                              <li>Maternity Birth & Neo-Natal</li>
                              <li>Dread Disease</li>
                              <li>Family Disability & Death</li>
                          </ul>
                      </div>
                      <div class="cro-t-111-card-plan-brochure"><a
                              href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-Blue-Plan.pdf?_ga=2.124919050.18371 00092.1729938908-125875181.1729938908&amp;_gl=1*1bb9a9l*_gcl_au*MTI2NjYyOTI4NS4xNzI5OTM4OTA4*_ga*MTI1ODc1MTgxLjE3Mjk5Mzg5MDg.*_ga_T61DG9ES52*MTcyOTkzODkwOC4xLjEuMTcyOTk0MDEzMi42MC4wLjA."
                              target="_blank"><img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+111.113/Recipe+111.113-one-plan-1.svg">Download
                              plan
                              brochure</a></div>
                  </div>
              </div>
              <div class="cro-t-111-card cro-t-111-card4">
                  <div class="cro-t-111-card-top-part">
                      <div class="cro-t-111-card-heading"><span class="cro-plan">Professional Plan</span>
                          <div class="cro-card-pricing"><span class="cro-from">From</span><span class="cro-price">R1 465</span><span class="cro-themonth">per month</span>
                          </div>
                      </div>
                  </div>
                  <div class="cro-t-111-card-bottom-part">
                      <div class="cro-t-111-bottom-price single-price">
                          <div class="cro-t-111-bottom-price-text">Single</div>
                          <div class="cro-t-111-bottom-price">R1 465</div>
                      </div>
                      <div class="cro-t-111-bottom-price Couple-price">
                          <div class="cro-t-111-bottom-price-text">Couple</div>
                          <div class="cro-t-111-bottom-price">R2 795</div>
                      </div>
                      <div class="cro-t-111-bottom-list-part">
                          <ul>
                              <li>Same benefits as Blue but More Cover</li>
                              <li>Day to Day Benefits (Excl Specialist)</li>
                              <li>Casualty Illness & Accident</li>
                              <li>Accident & Illness In Hospital</li>
                              <li>Maternity Birth & Neo-Natal</li>
                              <li>Dread Disease</li>
                              <li>Family Disability & Death</li>
                          </ul>
                      </div>
                      <div class="cro-t-111-card-plan-brochure"><a
                              href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-Professional-Plan.pdf"
                              target="_blank"><img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+111.113/Recipe+111.113-one-plan-1.svg">Download
                              plan
                              brochure</a></div>
                  </div>
  
              </div>
              <div class="cro-t-111-card cro-t-111-card5">
                  <div class="cro-t-111-card-top-part">
                      <div class="cro-t-111-card-heading"><span class="cro-plan">Executive Plan</span>
                          <div class="cro-card-pricing"><span class="cro-from">From</span><span class="cro-price">R1 975</span><span class="cro-themonth">per month</span>
                          </div>
                      </div>
                  </div>
                  <div class="cro-t-111-card-bottom-part">
                      <div class="cro-t-111-bottom-price single-price">
                          <div class="cro-t-111-bottom-price-text">Single</div>
                          <div class="cro-t-111-bottom-price">R1 975</div>
                      </div>
                      <div class="cro-t-111-bottom-price Couple-price">
                          <div class="cro-t-111-bottom-price-text">Couple</div>
                          <div class="cro-t-111-bottom-price">R3 505</div>
                      </div>
                      <div class="cro-t-111-bottom-list-part">
                          <ul>
                              <li>Most Cover PLUS specialist Cover</li>
                              <li>Day to Day Benefits & SPECIALIST</li>
                              <li>Casualty Illness & Accident</li>
                              <li>Accident & Illness In Hospital</li>
                              <li>Maternity Birth & Neo-Natal</li>
                              <li>Dread Disease</li>
                              <li>Family Disability & Death</li>
                          </ul>
                      </div>
                      <div class="cro-t-111-card-plan-brochure"><a
                              href="https://documents.oneplan.co.za/OnePlan/Brochure/OnePlan-Executive-Plan.pdf"
                              target="_blank"><img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+111.113/Recipe+111.113-one-plan-1.svg">Download
                              plan
                              brochure</a></div>
                  </div>
              </div>
          </div>
      </div>
    </div>`;


        /* Variation Init */
        function init() {

            addClass("body", variation_name)

            waitForElement('#simpleandaffordable #affordablestacks', function () {
                if (!document.querySelector('.cro-t-111-cards-part')) {
                    insertHtml('#simpleandaffordable #affordablestacks', pricingCard, "afterend");
                }
            });

        }


        /* Initialise variation */
        if (pageLocation.includes('/Landings/health-insurance-s')) {

            waitForElement('body', init);
        }

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();