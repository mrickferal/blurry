const blurry = {
  init: function () {
    console.log("Hello world, I'm blurry.js 🌫️");

    // create an array from the elements
    blurry.elements = Array.from(document.querySelectorAll(".luna"));

    for (let element of blurry.elements) {
      // add a listener and a handler on the "mouseenter" and "mouseleave" event on each of them
      element.addEventListener("mouseenter", blurry.handleMouseEnter);
      element.addEventListener("mouseleave", blurry.handleMouseLeave);
    }
  },
  /**
   * Blurs every element except the one being hovered.
   * @param {Event} event
   * @return {void}
   */
  handleMouseEnter: function (event) {
    // console.log("blurry.handleMouseEnter()");

    blurry.setBlurOnOtherElements(event.currentTarget, true);
  },
  /**
   * Removes the blur from every element except the one that was being hovered.
   * @param {Event} event
   * @return {void}
   */
  handleMouseLeave: function (event) {
    // console.log("blurry.handleMouseLeave()");

    blurry.setBlurOnOtherElements(event.currentTarget, false);
  },
  /**
   * Adds or removes the "blurry" CSS class on every element of `blurry.elements` except `hoverElement`.
   * @param {HTMLElement} hoverElement the element to leave untouched
   * @param {Boolean} shouldBeBlurry true to add the class, false to remove it
   * @return {void}
   */
  setBlurOnOtherElements: function (hoverElement, shouldBeBlurry) {
    // console.log("blurry.setBlurOnOtherElements()");

    for (let element of blurry.elements) {
      // never blur the element the user is hovering
      if (element === hoverElement) continue;

      if (shouldBeBlurry) {
        tools.addClassesToElement(element, "blurry");
      } else {
        tools.removeClassesFromElement(element, "blurry");
      }
    }
  },
};
