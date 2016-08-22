'use strict';

(function() {
	// IE9 +

	var dataAccordion = document.querySelectorAll('[data-accordion]');

	function Accordion(accordionEl) {


		var ARIA_HIDDEN 	= 'aria-hidden';
		var ARIA_SELECTED = 'aria-selected';

		var EL_LINKS 			= 'data-accordion-links';
		var EL_TAB 				= 'data-accordion-tab';

		var tabLinks = accordionEl.querySelectorAll('[' + EL_LINKS + ']');

		function changeLinkState(link, condition) {
			link.setAttribute(ARIA_SELECTED, condition);
		}

		function changeTabState(tab, condition) {
			tab.setAttribute(ARIA_HIDDEN, condition);
		}

		function handleState(event) {
			event.preventDefault();

			var selectedEl 	= event.target;
			var tabId 			= selectedEl.getAttribute(EL_LINKS);
			var selectedTab = accordionEl.querySelectorAll('[' + EL_TAB + '="' + tabId + '"]')[0];


			// If it is already open then close it
			if(selectedEl.getAttribute(ARIA_SELECTED) === "true") {
				changeLinkState(selectedEl, false);
				changeTabState(selectedTab, true);

				return;
			}

			changeLinkState(selectedEl, true);
			changeTabState(selectedTab, false);

			return;
		}

		function bindEvents(element) {
			element.addEventListener('click', handleState, false);
		}


		function init() {
			tabLinks.forEach(bindEvents);
		}

		init();

	}

	// Best off in a seperate file to be used with other components.

	function removeNoJS() {
		var htmlEl = 	document.querySelectorAll('html')[0];

		htmlEl.classList.remove('no-js');
		htmlEl.classList.add('js');
	}

	removeNoJS();

	if(dataAccordion.length > 0) {
		dataAccordion.forEach(Accordion);		
	}

})();
