(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "cro_t_101_CRO_686";
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
		};

		function addClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.add(cls);
			}
		};

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
		};

		// Pricing Data
		var pricing = {
			core: {
				justMe: [500, 875, 1205, 1505, 1775],
				partner: [1000, 1350, 1665, 1955, 2240],
				excludes: "Illness in hospital cover, dread disease, natural birth & emergency caesareans, neonatal, specialist cover"
			},
			corePlus: {
				justMe: [685, 1090, 1470, 1815, 2135],
				partner: [1325, 1715, 2080, 2420, 2750],
				excludes: "Dread disease, natural birth & emergency caesareans, neonatal, specialist cover"
			},
			blue: {
				justMe: [1000, 1625, 2220, 2795, 3360],
				partner: [1980, 2570, 3035, 3470, 3885],
				excludes: "Specialist cover"
			},
			professional: {
				justMe: [1465, 2340, 3065, 3705, 4345],
				partner: [2795, 3415, 3970, 4515, 4990],
				excludes: "Specialist cover"
			},
			executive: {
				justMe: [1975, 2895, 3725, 4380, 5020],
				partner: [3505, 4345, 5160, 5775, 6405],
				excludes: "None"
			}
		};

		var customRadio = `  <span class="custom-radio-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M12.8 17C14.1834 17 15.3625 16.5125 16.3375 15.5375C17.3125 14.5625 17.8 13.3833 17.8 12C17.8 10.6167 17.3125 9.4375 16.3375 8.4625C15.3625 7.4875 14.1834 7 12.8 7C11.4167 7 10.2375 7.4875 9.26255 8.4625C8.28755 9.4375 7.80005 10.6167 7.80005 12C7.80005 13.3833 8.28755 14.5625 9.26255 15.5375C10.2375 16.5125 11.4167 17 12.8 17ZM12.8 22C11.4167 22 10.1167 21.7375 8.90005 21.2125C7.68338 20.6875 6.62505 19.975 5.72505 19.075C4.82505 18.175 4.11255 17.1167 3.58755 15.9C3.06255 14.6833 2.80005 13.3833 2.80005 12C2.80005 10.6167 3.06255 9.31667 3.58755 8.1C4.11255 6.88333 4.82505 5.825 5.72505 4.925C6.62505 4.025 7.68338 3.3125 8.90005 2.7875C10.1167 2.2625 11.4167 2 12.8 2C14.1834 2 15.4834 2.2625 16.7 2.7875C17.9167 3.3125 18.975 4.025 19.875 4.925C20.775 5.825 21.4875 6.88333 22.0125 8.1C22.5375 9.31667 22.8 10.6167 22.8 12C22.8 13.3833 22.5375 14.6833 22.0125 15.9C21.4875 17.1167 20.775 18.175 19.875 19.075C18.975 19.975 17.9167 20.6875 16.7 21.2125C15.4834 21.7375 14.1834 22 12.8 22ZM12.8 20C15.0334 20 16.925 19.225 18.475 17.675C20.025 16.125 20.8 14.2333 20.8 12C20.8 9.76667 20.025 7.875 18.475 6.325C16.925 4.775 15.0334 4 12.8 4C10.5667 4 8.67505 4.775 7.12505 6.325C5.57505 7.875 4.80005 9.76667 4.80005 12C4.80005 14.2333 5.57505 16.125 7.12505 17.675C8.67505 19.225 10.5667 20 12.8 20Z" fill="#282B6E"/>
    </svg>
  </span> 
  <span class="custom-radio-icon-Nonchecked">
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M12.4001 22C11.0168 22 9.71681 21.7375 8.50015 21.2125C7.28348 20.6875 6.22515 19.975 5.32515 19.075C4.42515 18.175 3.71265 17.1167 3.18765 15.9C2.66265 14.6833 2.40015 13.3833 2.40015 12C2.40015 10.6167 2.66265 9.31667 3.18765 8.1C3.71265 6.88333 4.42515 5.825 5.32515 4.925C6.22515 4.025 7.28348 3.3125 8.50015 2.7875C9.71681 2.2625 11.0168 2 12.4001 2C13.7835 2 15.0835 2.2625 16.3001 2.7875C17.5168 3.3125 18.5751 4.025 19.4751 4.925C20.3751 5.825 21.0876 6.88333 21.6126 8.1C22.1376 9.31667 22.4001 10.6167 22.4001 12C22.4001 13.3833 22.1376 14.6833 21.6126 15.9C21.0876 17.1167 20.3751 18.175 19.4751 19.075C18.5751 19.975 17.5168 20.6875 16.3001 21.2125C15.0835 21.7375 13.7835 22 12.4001 22ZM12.4001 20C14.6335 20 16.5251 19.225 18.0751 17.675C19.6251 16.125 20.4001 14.2333 20.4001 12C20.4001 9.76667 19.6251 7.875 18.0751 6.325C16.5251 4.775 14.6335 4 12.4001 4C10.1668 4 8.27515 4.775 6.72515 6.325C5.17515 7.875 4.40015 9.76667 4.40015 12C4.40015 14.2333 5.17515 16.125 6.72515 17.675C8.27515 19.225 10.1668 20 12.4001 20Z" fill="#49454F"/>
</svg>
  </span>
  `;

		// HTML
		var pricingHTML = `<div class="cro_t_101_CRO_686-pricing-calculator">
    <div class="container cro_t_101_CRO_686-wrapper">
        <h2>SEE YOUR PERSONAL ESTIMATED PRICE IN SECONDS!</h2>
        <p class='cro_t_101-sub-heading'>Get an instant estimate by selecting your details below.</p>

        <form id="cro_t_101_CRO_686-calculatorForm">
            <div class="cro_t_101_CRO_686-plan-options">
                <label class="cro-checked"><input type="radio" name="plan" value="core" checked> ${customRadio}Core Plan</label>
                <label><input type="radio" name="plan" value="corePlus">${customRadio} Core Plan Plus</label>
                <label><input type="radio" name="plan" value="blue">${customRadio} Blue Plan</label>
                <label><input type="radio" name="plan" value="professional">${customRadio} Professional Plan</label>
                <label><input type="radio" name="plan" value="executive">${customRadio} Executive Plan</label>
            </div>

            <div class="cro_t_101_CRO_686-plan-options-dropdown">
            <div>
                <select id="cro_t_101_CRO_686-planSelect">
                    <option value="core">Core Plan</option>
                    <option value="corePlus">Core Plan Plus</option>
                    <option value="blue">Blue Plan</option>
                    <option value="professional">Professional Plan</option>
                    <option value="executive">Executive Plan</option>
                </select>
                                <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> 
              </div>
            </div>

            <div class="cro_t_101_CRO_686-selectors">
              <div class="cro_t_101_CRO_686-whoNeedsCover_wrapper">
              <div>
                <select id="cro_t_101_CRO_686-whoNeedsCover">
                    <option value="justMe">Just Me</option>
                    <option value="partner">Me and my partner</option>
                </select>
                <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>              
              </div></div>


              <div class="cro_t_101_CRO_686-dependantCount_wrapper">
              <div>
                <select id="cro_t_101_CRO_686-dependantCount">
                    <option value="0">0</option>
                    <option value="1">+ 1 Child</option>
                    <option value="2">+ 2 Children</option>
                    <option value="3">+ 3 Children</option>
                    <option value="4">+ 4 Children</option>
                </select>
                                <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> 
              </div></div>

            </div>
        </form>

        <p class="cro_t_101_CRO_686-excludes" id="cro_t_101_CRO_686-excludesText"></p>

        <h1 id="cro_t_101_CRO_686-price">R000</h1>
        <p class= 'cro_t_101-monthly-premium-text'>Estimated monthly premium</p>
		<p class= 'cro_t_101-Final-pricing-text'>Final pricing depends on your specific needs. <span>Get an exact quote now!</span></p>

        <button class="cro_t_101_CRO_686-quote-btn">Get an online quote</button>
      </div>
    </div>`;

		function dropdownFuntionality() {
			var form = document.getElementById('cro_t_101_CRO_686-calculatorForm');
			var whoNeedsCover = document.getElementById('cro_t_101_CRO_686-whoNeedsCover');
			var dependantCount = document.getElementById('cro_t_101_CRO_686-dependantCount');
			var price = document.getElementById('cro_t_101_CRO_686-price');
			var excludesText = document.getElementById('cro_t_101_CRO_686-excludesText');
			var planSelect = document.getElementById('cro_t_101_CRO_686-planSelect');

			function getSelectedPlan() {
				if (window.innerWidth <= 981) {
					return planSelect.value; // Mobile dropdown
				} else {
					return form.plan.value; // Desktop radio
				}
			}

			function checkedvalue() {
				// .cro_t_101_CRO_686-plan-options input
				document.querySelectorAll('.cro_t_101_CRO_686-plan-options input').forEach(function (e) {
					e.addEventListener('click', function () {
						if (document.querySelector('.cro-checked')) {
							document.querySelector('label.cro-checked').classList.remove('cro-checked');
							if (e.checked) {
								var parent = e.closest('label')
								parent.classList.add('cro-checked')
							}
						}
					})

				})
			}

			function updatePrice() {
				checkedvalue();
				var selectedPlan = getSelectedPlan();
				var who = whoNeedsCover.value;
				var dependants = parseInt(dependantCount.value);

				var planData = pricing[selectedPlan];

				if (planData && planData[who]) {
					price.innerText = 'R' + planData[who][dependants].toFixed(2);
					excludesText.innerHTML = '<strong>Excludes:</strong> ' + planData.excludes;
				} else {
					price.innerText = 'R000';
					excludesText.innerText = '';
				}
			}

			// Event listeners
			form.addEventListener('change', updatePrice);
			planSelect.addEventListener('change', updatePrice);

			// Initial call
			updatePrice();

			// Listen for screen resize too, to update correctly when switching device modes
			window.addEventListener('resize', updatePrice);
		}

		function init() {
			addClass('body', variation_name)
			if (!document.querySelector('.cro_t_101_CRO_686-pricing-calculator')) {
				document.querySelector('#valuestacks').insertAdjacentHTML('afterend', pricingHTML);
				dropdownFuntionality();
			}
		}

		function addEventHandler() {
			live(".cro_t_101_CRO_686-quote-btn", "click", function () {
				document.querySelector("#callbackcol .et_pb_cta_ button.getQuote") && document.querySelector("#callbackcol .et_pb_cta_ button.getQuote").click();
			})
		}


		if (!window.cro_t_101_CRO_686) {
			waitForElement('#valuestacks', init);
			addEventHandler();
			window.cro_t_101_CRO_686 = true;
		}


	} catch (e) {
		if (debug) console.log(e, "error in Test" + 'Recipe 101 | LP Benefits push v3 | All | [HEALTH] | CRO-686');
	}
})();