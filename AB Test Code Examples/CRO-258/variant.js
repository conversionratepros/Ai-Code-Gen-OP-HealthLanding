(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
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

        var newTextFrom = `<div class="cro-t-116-online-quote">
        <div class="cro-t-116-online-quote-text">
            In a hurry? Get an online quote in under 2 minutes.
        </div>
    </div>`


        /* Variation Init */
        function init() {
            addClass("body", "cro-t-116")

            waitForElement('#hero .et_pb_module.et_pb_promo .quotecta', function () {
                if (!document.querySelector('.cro-t-116-online-quote')) {
                    insertHtml('#hero .et_pb_module.et_pb_promo .quotecta', newTextFrom, "afterbegin");
                }
            });

            waitForElement('.quotecta button', function () {
                if (!document.querySelector('.cro-t-116-get_quote')) {
                    document.querySelector('.quotecta button').insertAdjacentHTML('afterbegin', '<img class="cro-t-116-get_quote" src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/cro-t-82-online-quote-icon.svg">')
                }

                // document.querySelector('.quotecta img').src = 'https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/cro-t-82-online-quote-icon.svg'
            });
            waitForElement('#hero .et_contact_bottom_container>button img', function () {
                document.querySelector('#hero .et_contact_bottom_container>button img').src = 'https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/cro-t-82-phone-icon.svg'
            });


        }



        /* Initialise variation */
        waitForElement('body', init);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();