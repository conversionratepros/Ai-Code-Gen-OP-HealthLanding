(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "cro-onePlan-121";
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
			function addEvent(el, type, handler) {
				if (el.attachEvent) el.attachEvent("on" + type, handler);
				else el.addEventListener(type, handler);
			}
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
		
		function addClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.add(cls);
			}
		}
		
		function init() {
			addClass("body", variation_name);
			// .logo.container > a
			waitForElement('.logo.container > a', function(){
				document.querySelector('.logo.container > a').href = 'https://oneplan.co.za/';
			});
		}
		
		function croEventHandkler() {
			live('header#main-header #logo', 'click', function (e) {
				window.location.href = 'https://oneplan.co.za/';
			});
		}
		
		if (!window.cro_t_op_121) {
			croEventHandkler();
			window.cro_t_op_121 = true;
		}
		
		waitForElement('header#main-header', init);
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();