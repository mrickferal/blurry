const blurry = {
  init: function () {
    console.log("Hello world, I'm blurry.js 🌫️");

    // crearte an array from the elements
    blurry.elements = Array.from(document.querySelectorAll(".luna"));

    for (let element of blurry.elements) {
      // add a listener and a handler on the 'mouseenter' and 'mouseleave' event on each of them
      element.addEventListener("mouseenter", blurry.handleMouseEnter);
      element.addEventListener("mouseleave", blurry.handleMouseLeave);
    }
  },
  /**
   * Add a CSS class on the hover element.
   * @param {Event} event
   * @return {void}
   */
  handleMouseEnter: function (event) {
    console.log("blurry.handleMouseEnter");

    // get the DOM element form which the event occured
    let hoverElement = event.currentTarget;

    // initialaze an index
    let index = 0;
    // the index is the index of `hoverElement`
    index = blurry.elements.indexOf(hoverElement);

    for (let element of blurry.elements) {
      // the index is stricly equal to `element`
      if (index === element) {
        // do nothing
        return;
      }
      // `hoverElement` is not `element`
      else if (hoverElement != element) {
        // add the blurry CSS class to `element`
        tools.addClassesToElement(element, "blurry");
      }
    }
  },
  /**
   * Removes a CSS class when the element is no longer overflow.
   * @param {Event} event
   * @return {void}
   */
  handleMouseLeave: function (event) {
    console.log("blurry.handleMouseLeave");

    // get the DOM element form which the event occured
    let hoverElement = event.currentTarget;

    // initialaze an index
    let index = 0;
    // the index is the index of `hoverElement`
    index = blurry.elements.indexOf(hoverElement);

    for (let element of blurry.elements) {
      // the index is stricly equal to `element`
      if (index === element) {
        // do nothing
        return;
      }
      // `hoverElement` is not `element`
      else if (hoverElement != element) {
        // remove the the blurry CSS class from `element`
        tools.removeClassesFromElement(element, "blurry");
      }
    }
  },
};
