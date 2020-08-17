/*!
 * connection.js
 */





/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var _ = require('./utils');
var child = require('child.js/dist/common/child');
var MiniStore = require('mini-store/mini-store');
var extend = require('utl.js/dist/common/extend');


/* -----------------------------------------------------------------------------
 * Connection
 * ---------------------------------------------------------------------------*/

module.exports = child(MiniStore, {

  defaults: {
    ping: true,
    url: 'https://www.google.com/favicon.ico',
    interval: 10000,
    timeout: 5000
  },

  /**
   * @global
   * @public
   * @constructor
   *
   * @name Connection
   * @desc Connectivity class built ontop of MiniStore/EventEmitter. Implements
   *   heartbeat ontop of `navigator.onLine` and normalizes connectivity status
   *   by emitting two events, `online` and `offline`.
   *
   * @example
   * var connection = new Connection({
   *   url: 'https://www.google.com/favicon.ico',
   *   interval: 10000,
   *   timeout: 5000
   * });
   *
   * @param {object} settings - Configuration options.
   * @param {string} [settings.url=https://www.google.com/favicon.ico] - Url
   *   to image. This image will be repeatidly loaded in the background as a
   *   heartbeat. Ideally it should live on a CDN and be small as possible.
   * @param {integer} [settings.interval=10000] - The interval at which the
   *   image will be requested in order to confirm connectivity.
   * @param {integer} [settings.timeout=5000] - The image request timeout.
   */
  constructor: function (settings) {
    MiniStore.prototype.constructor.apply(this, arguments);

    _.bindAll(this, '_startHeartbeat', '_stopHeartbeat', '_onOnline',
      '_onOffline', '_onHeartbeatError', '_onHeartbeatSuccess',
      '_onChangeStatus');

    this.attributes.status = 0;
    this.settings = extend(this.defaults, settings || {});

    // Wrap this in a timeout to make sure we have time to attach our event
    // listeners/handlers.
    setTimeout(this[navigator.onLine ? '_onOnline' : '_onOffline'], 0);

    window.addEventListener('online', this._onOnline);
    window.addEventListener('offline', this._onOffline);
  },

  /*
   * @private
   * @memberof Connection
   *
   * @desc Change event handler. Used to broadcast `online` and `offline`
   *   events based on `status` change.
   *
   * @param {object} model - Model that changed.
   * @param {integer} status - 1 = online. 0 = unknown. -1 = disconnected.
   */
  onChangeStatus: function (model, status) {
    if (status !== 0) {
      this.triggerMethod(status === 1 ? 'online' : 'offline');
    }
  },

  /*
   * @private
   * @memberof Connection
   *
   * @desc Start the heartbeat loop by loading the image for the first time.
   */
  _startHeartbeat: function () {
    var cacheBreaker = '?nocahce=' + Math.floor(Math.random() * 1000000);

    this.img = new Image();
    this.img.onerror = this.img.onabort = this._onHeartbeatError;
    this.img.onload = this._onHeartbeatSuccess;
    this.img.src = this.settings.url + cacheBreaker;

    this.timeout = setTimeout(this._onHeartbeatError, this.settings.timeout);
  },

  /*
   * @private
   * @memberof Connection
   *
   * @desc Remove/Clear all references to heartbeat specific properties.
   */
  _stopHeartbeat: function () {
    window.clearTimeout(this.heartbeat);
    window.clearTimeout(this.timeout);

    if (this.img) {
      this.img.onload = this.img.onabort = this.img.onerror = function() {};
      this.img = null;
    }
  },

  /*
   * @private
   * @memberof Connection
   *
   * @desc Start heartbeat to ensure connectivity.
   *
   * @param {object} evt - Online event forwarded from `navigator.onLine`.
   */
  _onOnline: function (evt) {
    return this.settings.ping
      ? this._startHeartbeat()
      : this.set('status', 1);
  },

  /*
   * @private
   * @memberof Connection
   *
   * @desc Stop heartbeat and update connection status to reflect offline
   *   connectivity.
   *
   * @param {object} evt - Offline event forwarded from `navigator.onLine`.
   */
  _onOffline: function (evt) {
    this._stopHeartbeat();
    this.set('status', -1);
  },

  /*
   * @private
   * @memberof Connection
   *
   * @desc Handler called on successful image request. Updates the connection
   *   status to reflect connectivity and attempts to refetch the image at the
   *   specified heartbeat interval.
   */
  _onHeartbeatSuccess: function () {
    this._stopHeartbeat();
    this.heartbeat = setTimeout(this._startHeartbeat, this.settings.interval);
    this.set('status', 1);
  },

  /*
   * @private
   * @memberof Connection
   *
   * @desc Handler called on unsuccesful image request. Updates the connection
   *   status to reflect connectivity and immediately attempts to refetch the
   *   image.
   */
  _onHeartbeatError: function () {
    this._stopHeartbeat();
    this._startHeartbeat();
    this.set('status', -1);
  }

});


