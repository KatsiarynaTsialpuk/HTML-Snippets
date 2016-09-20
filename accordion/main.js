'use strict';

(function() {
	// IE9 +

	var dataAccordion = document.querySelectorAll('[data-accordion]');

	function Accordion(accordionEl, options) {


		var ARIA_HIDDEN 		= 'aria-hidden';
		var ARIA_EXPANDED 	= 'aria-expanded';
		var ARIA_SELECTED 	= 'aria-selected';

		var EL_LINKS 			= 'data-accordion-links';
		var EL_TAB 				= 'data-accordion-tab';

		var tabLinks 			= accordionEl.querySelectorAll('[' + EL_LINKS + ']');
		var tabs 					= accordionEl.querySelectorAll('[' + EL_TAB + ']');

		var selectedTab;
		var selectedEl;
		var tabId;

		function removeSelectedLinkState(el, attr) {
			el.removeAttribute(attr);
		}

		function setAttribute(el, attr, state) {
			el.setAttribute(attr, state);
		}

		function getAttribute(el, attr) {
			return el.getAttribute(attr);
		}

		function reset() {
			for(var i = 0; i < tabLinks.length; i++) {
					setAttribute(tabLinks[i], ARIA_SELECTED, '');
					setAttribute(tabLinks[i], ARIA_EXPANDED, false);
					removeSelectedLinkState(tabLinks[i], ARIA_SELECTED);
					setAttribute(tabs[i], ARIA_HIDDEN, true);
			}
		}

		function closeTabs() {
			// Close other items if the parameter closeOtherTabs is set to true.
			if(options.closeOtherTabs) {
				reset();
			}
		}

		function toggleState() {

			selectedTab = accordionEl.querySelectorAll('[' + EL_TAB + '="' + tabId + '"]')[0];

			var isTabHidden = selectedTab.getAttribute(ARIA_HIDDEN); // returns string

			closeTabs();

			if(isTabHidden === "true") {

				setAttribute(selectedEl, ARIA_SELECTED, true);
				
				setAttribute(selectedEl, ARIA_EXPANDED, true);

				setAttribute(selectedTab, ARIA_HIDDEN, false);

			} else {

				setAttribute(selectedEl, ARIA_SELECTED, '');

				removeSelectedLinkState(selectedEl, ARIA_SELECTED);

				setAttribute(selectedEl, ARIA_EXPANDED, false);

				setAttribute(selectedTab, ARIA_HIDDEN, true);

			}

		}


		function handleState(event) {
			event.preventDefault();

			selectedEl 	= event.target;
			tabId 			= getAttribute(selectedEl, EL_LINKS);
			toggleState();
		}

		function bindEvents(element) {
			element.addEventListener('click', handleState, false);
		}


		function init() {
			tabLinks.forEach(bindEvents);

			reset();

			// Sets the first item to be open
			setAttribute(tabs[0], ARIA_HIDDEN, false);
			setAttribute(tabLinks[0], ARIA_EXPANDED, true);
		}

		init();

	}

	// this checks if the element exists on the page before running the code.

	var options = {
		closeOtherTabs: true
	};

	if(dataAccordion.length > 0) {
		dataAccordion.forEach(function(component) {
			Accordion(component, options);
		});
	}


	// Best off in a seperate file to be used with other components.

	function removeNoJS() {
		var htmlEl = 	document.querySelectorAll('html')[0];

		htmlEl.classList.remove('no-js');
		htmlEl.classList.add('js');
	}

	removeNoJS();


})();
