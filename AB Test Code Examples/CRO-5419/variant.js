(function () {
	'use strict';

	var debug = 1;
	var recipe_name = 'cro-5419';

	function addClass(selector, cls) {
		var el = document.querySelector(selector);
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

	// Clock SVG icon for mobile banner
	var clockIcon2 = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4208 1.27688H13.5791C15.4564 1.27686 16.9433 1.27685 18.107 1.43332C19.3046 1.59433 20.274 1.93359 21.0385 2.69804C21.3376 2.99724 21.3376 3.48232 21.0385 3.78151C20.7393 4.08071 20.2542 4.08071 19.955 3.78151C19.5227 3.3492 18.9305 3.09008 17.9029 2.95191C16.8531 2.81077 15.4693 2.80914 13.5215 2.80914H11.4785C9.53063 2.80914 8.14683 2.81077 7.09707 2.95191C6.06934 3.09008 5.47722 3.3492 5.04491 3.78151C4.6126 4.21382 4.35348 4.80594 4.21531 5.83367C4.07417 6.88343 4.07254 8.26723 4.07254 10.2151V14.3011C4.07254 16.2489 4.07417 17.6327 4.21531 18.6825C4.35348 19.7101 4.6126 20.3023 5.04491 20.7346C5.47722 21.1669 6.06934 21.4261 7.09707 21.5642C8.14683 21.7054 9.53063 21.707 11.4785 21.707H13.5215C15.4693 21.707 16.8531 21.7054 17.9029 21.5642C18.9305 21.4261 19.5227 21.1669 19.955 20.7346C20.6659 20.0238 20.8812 18.9191 20.9186 16.3331C20.9247 15.9099 21.2726 15.5719 21.6958 15.5781C22.1188 15.5842 22.4568 15.9321 22.4506 16.3551C22.4148 18.8348 22.2543 20.6022 21.0385 21.8181C20.274 22.5825 19.3046 22.9218 18.107 23.0829C16.9433 23.2392 15.4564 23.2392 13.5791 23.2392H11.4208C9.54355 23.2392 8.05661 23.2392 6.8929 23.0829C5.69526 22.9218 4.72591 22.5825 3.96144 21.8181C3.19699 21.0536 2.85773 20.0842 2.69672 18.8866C2.54025 17.7229 2.54026 16.236 2.54028 14.3587V10.1574C2.54026 8.28014 2.54025 6.79321 2.69672 5.6295C2.85773 4.43186 3.19699 3.46251 3.96144 2.69804C4.72591 1.93359 5.69526 1.59433 6.8929 1.43332C8.05661 1.27685 9.54354 1.27686 11.4208 1.27688ZM7.64781 9.19355C7.64781 8.77043 7.99082 8.42742 8.41394 8.42742H15.0537C15.4768 8.42742 15.8199 8.77043 15.8199 9.19355C15.8199 9.61667 15.4768 9.95968 15.0537 9.95968H8.41394C7.99082 9.95968 7.64781 9.61667 7.64781 9.19355ZM7.64781 13.2796C7.64781 12.8565 7.99082 12.5134 8.41394 12.5134H10.9677C11.3908 12.5134 11.7338 12.8565 11.7338 13.2796C11.7338 13.7027 11.3908 14.0457 10.9677 14.0457H8.41394C7.99082 14.0457 7.64781 13.7027 7.64781 13.2796ZM7.64781 17.3656C7.64781 16.9425 7.99082 16.5995 8.41394 16.5995H9.9462C10.3693 16.5995 10.7123 16.9425 10.7123 17.3656C10.7123 17.7887 10.3693 18.1317 9.9462 18.1317H8.41394C7.99082 18.1317 7.64781 17.7887 7.64781 17.3656Z" fill="white"/>
    <path d="M14.7419 12.5L17.2419 15L22.2419 10" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`;

	//Banner
	var stickyBannerHtml = `
        <div class="cro-5419-sticky-banner">
            <div class="cro-5419-banner-content">
                <span class="cro-5419-banner-icon">${clockIcon2}</span>
                <span class="cro-5419-banner-text">
                    Looking for a quick premium estimate? <strong>&nbsp;Get an online quote</strong>&nbsp;— it's instant, no waiting.
                </span>
            </div>
        </div>
    `;

	//Mobile Banner
	var mobileBannerHtml = `
        <div class="cro-5419-mobile-banner">
            <div class="cro-5419-mobile-banner-container">
                <div class="cro-5419-mobile-banner-content">
                    <div class="cro-5419-mobile-banner-icon">${clockIcon2}</div>
                    <div class="cro-5419-mobile-banner-text">
                        <div class="cro-5419-mobile-banner-text1">Looking for a quick premium estimate? <strong>Get an online quote</strong> - it's instant, no waiting.</div>
                    </div>
                </div>
            </div>
        </div>
    `;



	function htmlInsertion() {
		// Add sticky banner for desktop (at body level)
		if (!document.querySelector('.cro-5419-sticky-banner')) {
			document.body.insertAdjacentHTML('afterbegin', stickyBannerHtml);
			console.log('CRO-5419: Sticky banner added for desktop');
		}

		// Add mobile banner after logo container
		waitForElement('#main-header .logo.container', function () {
			if (!document.querySelector('.cro-5419-mobile-banner')) {
				document.querySelector('#main-header .logo.container').insertAdjacentHTML('beforebegin', mobileBannerHtml);
				console.log('CRO-5419: Mobile banner added');
			}
		}, 50, 10000);


	}


	/* Variation Init */
	function init() {
		addClass('body', recipe_name);
		htmlInsertion();

		console.log('CRO-5419: Implementation complete');
	}

	waitForElement('#main-header', init, 50, 30000);

})();