/*!
 * utils.js
 */





/* -----------------------------------------------------------------------------
 * utils
 * ---------------------------------------------------------------------------*/

module.exports = {

  /*
   * @private
   * @memberof utils
   */
  bindAll: function (context) {
    var methodNames = Array.prototype.slice.call(arguments, 1);

    for(var i = 0, l = methodNames.length; i < l; i++) {
      this.bind(context, methodNames[i]); 
    }
  },

  /*
   * @private
   * @memberof utils
   */
  bind: function (context, methodName) {
    var original = context[methodName];

    return context[methodName] = function () {
      return original.apply(context, arguments);
    };
  }

};


