const tools = {
  init: function () {
    console.log("Hello world, I'm tools.js 🧰");
  },
  /**
   * Add one or more CSS classes to an element.
   * @param {Array} element
   * @param {String} classNames
   * @return {void}
   */
  addClassesToElement: function (element, ...classNames) {
    // console.log("tools.addClassesToElement()");

    for (let className of classNames) {
      element.classList.add(className);
    }
  },
  /**
   * Removes one or more CSS classes from one element.
   * @param {Array} element
   * @param {String} classNames
   * @return {void}
   */
  removeClassesFromElement: function (element, ...classNames) {
    // console.log("tools.removeClassesFromElement()");

    for (let className of classNames) {
      element.classList.remove(className);
    }
  },
};
