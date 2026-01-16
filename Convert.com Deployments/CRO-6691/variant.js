(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "cro-6691-review-redesign";
		
		/* Helper functions */
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

		function addClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.add(cls);
			}
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

		/* Extract unique review cards from existing slider */
		function extractReviewCards() {
			var cards = [];
			// Get only original slides (not slick clones)
			// Slick clones have negative indices or are marked as slick-cloned
			var slides = document.querySelectorAll('#reviews .slick-slide:not(.slick-cloned)');
			
			// Get unique cards by checking their content and slick index
			var seenNames = {};
			
			slides.forEach(function(slide) {
				var slickIndex = parseInt(slide.getAttribute('data-slick-index'));
				// Only process slides with valid indices (0 or positive)
				if (!isNaN(slickIndex) && slickIndex >= 0) {
					var testimonialBox = slide.querySelector('.testimonial_box');
					if (testimonialBox) {
						var nameEl = testimonialBox.querySelector('.nameinfo .name');
						if (nameEl) {
							var name = nameEl.textContent.trim();
							if (!seenNames[name]) {
								seenNames[name] = true;
								// Clone the entire testimonial_box structure
								var cardClone = testimonialBox.cloneNode(true);
								cards.push(cardClone);
							}
						}
					}
				}
			});
			
			// Fallback: if no slides found, try getting all testimonial boxes
			if (cards.length === 0) {
				var testimonialBoxes = document.querySelectorAll('#reviews .testimonial_box');
				var seenNamesFallback = {};
				testimonialBoxes.forEach(function(box) {
					var nameEl = box.querySelector('.nameinfo .name');
					if (nameEl) {
						var name = nameEl.textContent.trim();
						if (!seenNamesFallback[name]) {
							seenNamesFallback[name] = true;
							var cardClone = box.cloneNode(true);
							cards.push(cardClone);
						}
					}
				});
			}
			
			return cards;
		}

		/* Build new carousel HTML */
		function buildCarouselHTML(cards) {
			var cardsHTML = '';
			cards.forEach(function(card) {
				cardsHTML += '<div class="cro-6691-review-card">' + card.outerHTML + '</div>';
			});

			var carouselHTML = `
				<div class="cro-6691-review-section">
					<div class="cro-6691-review-container">
						<h2 class="cro-6691-review-heading">See why South Africans trust Oneplan for <span class="cro-6691-highlight">simple, affordable</span> health cover that truly delivers.</h2>
						<div class="cro-6691-carousel-wrapper">
							<button class="cro-6691-carousel-arrow cro-6691-arrow-left" aria-label="Previous reviews">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.5 15L7.5 10L12.5 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</button>
							<div class="cro-6691-carousel">
								<div class="cro-6691-carousel-track">
									${cardsHTML}
								</div>
							</div>
							<button class="cro-6691-carousel-arrow cro-6691-arrow-right" aria-label="Next reviews">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.5 5L12.5 10L7.5 15" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			`;
			
			return carouselHTML;
		}

		/* Carousel functionality */
		function initCarousel() {
			var carousel = document.querySelector('.cro-6691-carousel');
			var track = document.querySelector('.cro-6691-carousel-track');
			var cards = document.querySelectorAll('.cro-6691-review-card');
			var leftArrow = document.querySelector('.cro-6691-arrow-left');
			var rightArrow = document.querySelector('.cro-6691-arrow-right');
			
			if (!carousel || !track || cards.length === 0) return;
			
			var currentIndex = 0;
			var isDesktop = window.innerWidth > 991;
			var totalCards = cards.length;
			var gap = 34; // 34px margin between cards
			
			// Clone cards for infinite loop (clone at end)
			cards.forEach(function(card) {
				var clone = card.cloneNode(true);
				track.appendChild(clone);
			});
			
			// Clone cards at the beginning for infinite scroll backwards
			for (var i = totalCards - 1; i >= 0; i--) {
				var clone = cards[i].cloneNode(true);
				track.insertBefore(clone, track.firstChild);
			}
			
			// Update all cards reference after cloning
			var allCards = document.querySelectorAll('.cro-6691-review-card');
			
			// Set initial position (start at first original card)
			currentIndex = totalCards;
			updateCarouselPosition();
			
			function getCardWidth() {
				if (allCards.length > 0 && allCards[0].offsetWidth > 0) {
					return allCards[0].offsetWidth;
				}
				// Fallback calculation
				var container = document.querySelector('.cro-6691-carousel');
				if (container && isDesktop) {
					return (container.offsetWidth - (2 * gap)) / 3;
				}
				return container ? container.offsetWidth : 300;
			}
			
			function updateCarouselPosition() {
				var cardWidth = getCardWidth();
				var translateX = -(currentIndex * (cardWidth + gap));
				track.style.transform = 'translateX(' + translateX + 'px)';
				track.style.transition = 'transform 0.3s ease';
			}
			
			function nextSlide() {
				currentIndex++;
				updateCarouselPosition();
				
				// Infinite loop: if we've scrolled past all original cards, reset to start
				if (currentIndex >= totalCards + totalCards) {
					setTimeout(function() {
						track.style.transition = 'none';
						currentIndex = totalCards;
						updateCarouselPosition();
						setTimeout(function() {
							track.style.transition = 'transform 0.3s ease';
						}, 50);
					}, 300);
				}
			}
			
			function prevSlide() {
				currentIndex--;
				updateCarouselPosition();
				
				// Infinite loop: if we've scrolled before first original card, reset to end
				if (currentIndex < 0) {
					setTimeout(function() {
						track.style.transition = 'none';
						currentIndex = totalCards + totalCards - 1;
						updateCarouselPosition();
						setTimeout(function() {
							track.style.transition = 'transform 0.3s ease';
						}, 50);
					}, 300);
				}
			}
			
			// Event listeners
			if (rightArrow) {
				rightArrow.addEventListener('click', nextSlide);
			}
			
			if (leftArrow) {
				leftArrow.addEventListener('click', prevSlide);
			}
			
			// Handle window resize
			var resizeTimeout;
			window.addEventListener('resize', function() {
				clearTimeout(resizeTimeout);
				resizeTimeout = setTimeout(function() {
					var wasDesktop = isDesktop;
					isDesktop = window.innerWidth > 991;
					
					if (wasDesktop !== isDesktop) {
						// Recalculate position on layout change
						updateCarouselPosition();
					} else {
						// Just update position with new card widths
						updateCarouselPosition();
					}
				}, 100);
			});
		}

		/* Main initialization */
		function init() {
			addClass("body", variation_name);
			
			// Hide existing review section
			var existingReviews = document.querySelector('#reviews .testimonial');
			if (existingReviews) {
				existingReviews.style.display = 'none';
			}
			
			// Extract review cards
			var cards = extractReviewCards();
			
			if (cards.length === 0) {
				console.log('No review cards found');
				return;
			}
			
			// Build and insert new carousel
			var carouselHTML = buildCarouselHTML(cards);
			var reviewsSection = document.querySelector('#reviews');
			
			if (reviewsSection) {
				reviewsSection.insertAdjacentHTML('beforeend', carouselHTML);
				
				// Initialize carousel after a short delay to ensure DOM is ready
				setTimeout(function() {
					initCarousel();
				}, 100);
			}
		}

		/* Wait for reviews section and initialize */
		waitForElement('#reviews', init);

	} catch (e) {
		if (debug) console.log(e, "error in Test CRO-6691 Review Section Redesign");
	}
})();
