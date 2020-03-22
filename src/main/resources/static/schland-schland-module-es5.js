function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schland-schland-module"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/leaflet/dist/leaflet.css":
  /*!****************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/leaflet/dist/leaflet.css ***!
    \****************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesLeafletDistLeafletCss(module, exports) {
    module.exports = [[module.i, "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        -ms-user-select: none;\r\n\t    user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n\r\n.leaflet-tile::-moz-selection {\r\n\tbackground: transparent;\r\n}\r\n\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-drag {\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\ttouch-action: none;\r\n}\r\n\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n\r\n.leaflet-tile {\r\n\t-webkit-filter: inherit;\r\n\t        filter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tbox-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n\r\n.leaflet-overlay-pane { z-index: 400; }\r\n\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n\r\n.leaflet-marker-pane  { z-index: 600; }\r\n\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1), -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:         grab;\r\n\t}\r\n\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n/* general typography */\r\n\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers.png');\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers-2x.png');\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url('marker-icon.png');\r\n\t}\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbox-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n/* Tooltip */\r\n\r\n/* Base styles for the element that has a tooltip */\r\n\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9sZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9COztBQUVwQjs7Ozs7Ozs7OztDQVVDLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsTUFBTTtDQUNOOztBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUNEOzs7Q0FHQyx5QkFBeUI7SUFDdEIsc0JBQXNCO1NBQ2pCLHFCQUFpQjtLQUFqQixpQkFBaUI7R0FDdkIsdUJBQXVCO0NBQ3pCOztBQUNELGtEQUFrRDs7QUFDbEQ7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRkE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBQ0EsbUZBQW1GOztBQUNuRjtDQUNDLDBDQUEwQztDQUMxQzs7QUFDRCxxRUFBcUU7O0FBQ3JFO0NBQ0MsYUFBYTtDQUNiLGNBQWM7Q0FDZCw2QkFBNkI7Q0FDN0I7O0FBQ0Q7O0NBRUMsY0FBYztDQUNkOztBQUNELGdHQUFnRzs7QUFDaEcscUZBQXFGOztBQUNyRjs7Ozs7O0NBTUMsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQjs7QUFFRDtDQUVDLHlCQUF5QjtDQUN6Qjs7QUFDRDtDQUVDLHFEQUFxRDtDQUNyRCxrQkFBa0I7Q0FDbEIsd0JBQXdCO0FBQ3pCOztBQUNBO0NBRUMsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0Msd0NBQXdDO0FBQ3pDOztBQUNBO0NBQ0Msb0RBQW9EO0FBQ3JEOztBQUNBO0NBQ0MsdUJBQWU7U0FBZixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCOztBQUNEO0NBQ0MsbUJBQW1CO0NBQ25COztBQUNEO0NBQ0MsUUFBUTtDQUNSLFNBQVM7Q0FFSixzQkFBc0I7Q0FDM0IsWUFBWTtDQUNaOztBQUNELHVFQUF1RTs7QUFDdkU7Q0FDQyxzQkFBc0I7Q0FDdEI7O0FBRUQsd0JBQXdCLFlBQVksRUFBRTs7QUFFdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsd0JBQXdCLFlBQVksRUFBRTs7QUFDdEMsMEJBQTBCLFlBQVksRUFBRTs7QUFDeEMsd0JBQXdCLFlBQVksRUFBRTs7QUFFdEMsMkJBQTJCLFlBQVksRUFBRTs7QUFDekMsMkJBQTJCLFlBQVksRUFBRTs7QUFFekM7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYOztBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEI7O0FBR0Qsd0JBQXdCOztBQUV4QjtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osOEJBQThCLEVBQUUsOEJBQThCO0NBQzlELG9CQUFvQjtDQUNwQjs7QUFDRDs7Q0FFQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQjs7QUFDRDtDQUNDLE1BQU07Q0FDTjs7QUFDRDtDQUNDLFFBQVE7Q0FDUjs7QUFDRDtDQUNDLFNBQVM7Q0FDVDs7QUFDRDtDQUNDLE9BQU87Q0FDUDs7QUFDRDtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1g7O0FBQ0Q7Q0FDQyxZQUFZO0NBQ1o7O0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakI7O0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEI7O0FBR0QsNkJBQTZCOztBQUU3QjtDQUNDLG9CQUFvQjtDQUNwQjs7QUFDRDtDQUNDLFVBQVU7Q0FDVix1Q0FBdUM7U0FFL0IsK0JBQStCO0NBQ3ZDOztBQUNEO0NBQ0MsVUFBVTtDQUNWOztBQUNEO0NBQ0MsNkJBQTZCO1NBRXJCLHFCQUFxQjtDQUM3Qjs7QUFDRDtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFDRDtDQUNDLG9FQUFvRTtTQUU1RCxvRUFBNEQ7U0FBNUQsNERBQTREO1NBQTVELDhHQUE0RDtDQUNwRTs7QUFDRDs7Q0FFQyx3QkFBd0I7U0FFaEIsZ0JBQWdCO0NBQ3hCOztBQUVEO0NBQ0Msa0JBQWtCO0NBQ2xCOztBQUdELFlBQVk7O0FBRVo7Q0FDQyxlQUFlO0NBQ2Y7O0FBQ0Q7Q0FDQyxvQkFBb0I7Q0FFcEIsb0JBQW9CO0NBQ3BCOztBQUNEOztDQUVDLGlCQUFpQjtDQUNqQjs7QUFDRDs7Q0FFQyxZQUFZO0NBQ1o7O0FBQ0Q7OztDQUdDLFlBQVk7Q0FDWix3QkFBd0I7Q0FFeEIsd0JBQXdCO0NBQ3hCOztBQUVELG9DQUFvQzs7QUFDcEM7Ozs7O0NBS0Msb0JBQW9CO0NBQ3BCOztBQUVEOzs7O0NBSUMsOEJBQThCLEVBQUUsOEJBQThCO0NBQzlELG9CQUFvQjtDQUNwQjs7QUFFRCxrQkFBa0I7O0FBRWxCO0NBQ0MsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDVjs7QUFDRDtDQUNDLGNBQWM7Q0FDZDs7QUFDRDtDQUNDLHlCQUF5QjtDQUN6Qjs7QUFDRDtDQUNDLHVCQUF1QjtDQUN2QixpQ0FBaUM7Q0FDakM7O0FBR0QsdUJBQXVCOztBQUN2QjtDQUNDLDZEQUE2RDtDQUM3RDs7QUFHRCwyQkFBMkI7O0FBRTNCO0NBQ0Msc0NBQXNDO0NBQ3RDLGtCQUFrQjtDQUNsQjs7QUFDRDs7Q0FFQyxzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWjs7QUFDRDs7Q0FFQyw0QkFBNEI7Q0FDNUIsNEJBQTRCO0NBQzVCLGNBQWM7Q0FDZDs7QUFDRDtDQUNDLHlCQUF5QjtDQUN6Qjs7QUFDRDtDQUNDLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUI7O0FBQ0Q7Q0FDQyw4QkFBOEI7Q0FDOUIsK0JBQStCO0NBQy9CLG1CQUFtQjtDQUNuQjs7QUFDRDtDQUNDLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsV0FBVztDQUNYOztBQUVEO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakI7O0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCOztBQUNEO0NBQ0MsOEJBQThCO0NBQzlCLCtCQUErQjtDQUMvQjs7QUFFRCxpQkFBaUI7O0FBRWpCOztDQUVDLG1EQUFtRDtDQUNuRCxnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBR0QsbUJBQW1COztBQUVuQjtDQUNDLHFDQUFxQztDQUNyQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCOztBQUNEO0NBQ0MsbUNBQXdDO0NBQ3hDLFdBQVc7Q0FDWCxZQUFZO0NBQ1o7O0FBQ0Q7Q0FDQyxzQ0FBMkM7Q0FDM0MsMEJBQTBCO0NBQzFCOztBQUNEO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWjs7QUFDRDs7Q0FFQyxhQUFhO0NBQ2I7O0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCOztBQUNEO0NBQ0MseUJBQXlCO0NBQ3pCLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQjs7QUFDRDtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSOztBQUNEO0NBQ0MsY0FBYztDQUNkOztBQUNEO0NBQ0MsU0FBUztDQUNULDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUI7O0FBRUQsc0JBQXNCOztBQUN0QjtDQUNDLHdDQUE2QztDQUM3Qzs7QUFHRCxtQ0FBbUM7O0FBRW5DO0NBQ0MsZ0JBQWdCO0NBQ2hCLG9DQUFvQztDQUNwQyxTQUFTO0NBQ1Q7O0FBQ0Q7O0NBRUMsY0FBYztDQUNkLFdBQVc7Q0FDWDs7QUFDRDtDQUNDLHFCQUFxQjtDQUNyQjs7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQjs7QUFDRDs7Q0FFQyxlQUFlO0NBQ2Y7O0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEI7O0FBQ0Q7Q0FDQyxzQkFBc0I7Q0FDdEIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FFWCxzQkFBc0I7O0NBRTNCLGdCQUFnQjtDQUNoQixvQ0FBb0M7Q0FDcEM7O0FBQ0Q7Q0FDQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLDZCQUE2QjtDQUM3Qjs7QUFFRDs7O0NBR0MsZ0JBQWdCO0NBQ2hCOztBQUNEOztDQUVDLGlDQUFpQztDQUNqQyw0QkFBNEI7Q0FDNUI7O0FBR0QsVUFBVTs7QUFFVjtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25COztBQUNEO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkI7O0FBQ0Q7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCOztBQUNEO0NBQ0MsY0FBYztDQUNkOztBQUNEO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCOztBQUNEO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZOztDQUVaLG9CQUFvQjs7Q0FFcEIsZ0NBQWdDO1NBR3hCLHdCQUF3QjtDQUNoQzs7QUFDRDs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLHNDQUFzQztDQUN0Qzs7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sUUFBUTtDQUNSLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osMkNBQTJDO0NBQzNDLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2Qjs7QUFDRDtDQUNDLFdBQVc7Q0FDWDs7QUFDRDtDQUNDLGNBQWM7Q0FDZCw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsT0FBTztDQUNQOztBQUNEO0NBQ0MsV0FBVztDQUNYLGNBQWM7O0NBRWQsdUhBQXVIO0NBQ3ZILGlIQUFpSDtDQUNqSDs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDs7OztDQUlDLHNCQUFzQjtDQUN0Qjs7QUFHRCxhQUFhOztBQUViO0NBQ0MsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0Qjs7QUFHRCxZQUFZOztBQUNaLG1EQUFtRDs7QUFDbkQ7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixxQ0FBcUM7Q0FDckM7O0FBQ0Q7Q0FDQyxlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCOztBQUNEOzs7O0NBSUMsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQiw2QkFBNkI7Q0FDN0IsdUJBQXVCO0NBQ3ZCLFdBQVc7Q0FDWDs7QUFFRCxlQUFlOztBQUVmO0NBQ0MsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTs7Q0FFQyxTQUFTO0NBQ1QsaUJBQWlCO0NBQ2pCOztBQUNEO0NBQ0MsU0FBUztDQUNULG9CQUFvQjtDQUNwQixzQkFBc0I7Q0FDdEI7O0FBQ0Q7Q0FDQyxNQUFNO0NBQ04saUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQix5QkFBeUI7Q0FDekI7O0FBQ0Q7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBQ0E7O0NBRUMsUUFBUTtDQUNSLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLFFBQVE7Q0FDUixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCOztBQUNEO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQix3QkFBd0I7Q0FDeEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHJlcXVpcmVkIHN0eWxlcyAqL1xyXG5cclxuLmxlYWZsZXQtcGFuZSxcclxuLmxlYWZsZXQtdGlsZSxcclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3csXHJcbi5sZWFmbGV0LXRpbGUtY29udGFpbmVyLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnLFxyXG4ubGVhZmxldC1wYW5lID4gY2FudmFzLFxyXG4ubGVhZmxldC16b29tLWJveCxcclxuLmxlYWZsZXQtaW1hZ2UtbGF5ZXIsXHJcbi5sZWFmbGV0LWxheWVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG4ubGVhZmxldC10aWxlLFxyXG4ubGVhZmxldC1tYXJrZXItaWNvbixcclxuLmxlYWZsZXQtbWFya2VyLXNoYWRvdyB7XHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdCAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuXHR9XHJcbi8qIFByZXZlbnRzIElFMTEgZnJvbSBoaWdobGlnaHRpbmcgdGlsZXMgaW4gYmx1ZSAqL1xyXG4ubGVhZmxldC10aWxlOjpzZWxlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi8qIFNhZmFyaSByZW5kZXJzIG5vbi1yZXRpbmEgdGlsZSBvbiByZXRpbmEgYmV0dGVyIHdpdGggdGhpcywgYnV0IENocm9tZSBpcyB3b3JzZSAqL1xyXG4ubGVhZmxldC1zYWZhcmkgLmxlYWZsZXQtdGlsZSB7XHJcblx0aW1hZ2UtcmVuZGVyaW5nOiAtd2Via2l0LW9wdGltaXplLWNvbnRyYXN0O1xyXG5cdH1cclxuLyogaGFjayB0aGF0IHByZXZlbnRzIGh3IGxheWVycyBcInN0cmV0Y2hpbmdcIiB3aGVuIGxvYWRpbmcgbmV3IHRpbGVzICovXHJcbi5sZWFmbGV0LXNhZmFyaSAubGVhZmxldC10aWxlLWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDE2MDBweDtcclxuXHRoZWlnaHQ6IDE2MDBweDtcclxuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHR9XHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLFxyXG4ubGVhZmxldC1tYXJrZXItc2hhZG93IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbi8qIC5sZWFmbGV0LWNvbnRhaW5lciBzdmc6IHJlc2V0IHN2ZyBtYXgtd2lkdGggZGVjbGVyYXRpb24gc2hpcHBlZCBpbiBKb29tbGEhIChqb29tbGEub3JnKSAzLnggKi9cclxuLyogLmxlYWZsZXQtY29udGFpbmVyIGltZzogbWFwIGlzIGJyb2tlbiBpbiBGRiBpZiB5b3UgaGF2ZSBtYXgtd2lkdGg6IDEwMCUgb24gdGlsZXMgKi9cclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LW92ZXJsYXktcGFuZSBzdmcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1tYXJrZXItcGFuZSBpbWcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1zaGFkb3ctcGFuZSBpbWcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC10aWxlLXBhbmUgaW1nLFxyXG4ubGVhZmxldC1jb250YWluZXIgaW1nLmxlYWZsZXQtaW1hZ2UtbGF5ZXIsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC10aWxlIHtcclxuXHRtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuXHRtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtY29udGFpbmVyLmxlYWZsZXQtdG91Y2gtem9vbSB7XHJcblx0LW1zLXRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXk7XHJcblx0dG91Y2gtYWN0aW9uOiBwYW4teCBwYW4teTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lci5sZWFmbGV0LXRvdWNoLWRyYWcge1xyXG5cdC1tcy10b3VjaC1hY3Rpb246IHBpbmNoLXpvb207XHJcblx0LyogRmFsbGJhY2sgZm9yIEZGIHdoaWNoIGRvZXNuJ3Qgc3VwcG9ydCBwaW5jaC16b29tICovXHJcblx0dG91Y2gtYWN0aW9uOiBub25lO1xyXG5cdHRvdWNoLWFjdGlvbjogcGluY2gtem9vbTtcclxufVxyXG4ubGVhZmxldC1jb250YWluZXIubGVhZmxldC10b3VjaC1kcmFnLmxlYWZsZXQtdG91Y2gtem9vbSB7XHJcblx0LW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcclxuXHR0b3VjaC1hY3Rpb246IG5vbmU7XHJcbn1cclxuLmxlYWZsZXQtY29udGFpbmVyIHtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhIHtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoNTEsIDE4MSwgMjI5LCAwLjQpO1xyXG59XHJcbi5sZWFmbGV0LXRpbGUge1xyXG5cdGZpbHRlcjogaW5oZXJpdDtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG4ubGVhZmxldC10aWxlLWxvYWRlZCB7XHJcblx0dmlzaWJpbGl0eTogaW5oZXJpdDtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYm94IHtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdCAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR6LWluZGV4OiA4MDA7XHJcblx0fVxyXG4vKiB3b3JrYXJvdW5kIGZvciBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODgzMTkgKi9cclxuLmxlYWZsZXQtb3ZlcmxheS1wYW5lIHN2ZyB7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1wYW5lICAgICAgICAgeyB6LWluZGV4OiA0MDA7IH1cclxuXHJcbi5sZWFmbGV0LXRpbGUtcGFuZSAgICB7IHotaW5kZXg6IDIwMDsgfVxyXG4ubGVhZmxldC1vdmVybGF5LXBhbmUgeyB6LWluZGV4OiA0MDA7IH1cclxuLmxlYWZsZXQtc2hhZG93LXBhbmUgIHsgei1pbmRleDogNTAwOyB9XHJcbi5sZWFmbGV0LW1hcmtlci1wYW5lICB7IHotaW5kZXg6IDYwMDsgfVxyXG4ubGVhZmxldC10b29sdGlwLXBhbmUgICB7IHotaW5kZXg6IDY1MDsgfVxyXG4ubGVhZmxldC1wb3B1cC1wYW5lICAgeyB6LWluZGV4OiA3MDA7IH1cclxuXHJcbi5sZWFmbGV0LW1hcC1wYW5lIGNhbnZhcyB7IHotaW5kZXg6IDEwMDsgfVxyXG4ubGVhZmxldC1tYXAtcGFuZSBzdmcgICAgeyB6LWluZGV4OiAyMDA7IH1cclxuXHJcbi5sZWFmbGV0LXZtbC1zaGFwZSB7XHJcblx0d2lkdGg6IDFweDtcclxuXHRoZWlnaHQ6IDFweDtcclxuXHR9XHJcbi5sdm1sIHtcclxuXHRiZWhhdmlvcjogdXJsKCNkZWZhdWx0I1ZNTCk7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR9XHJcblxyXG5cclxuLyogY29udHJvbCBwb3NpdGlvbmluZyAqL1xyXG5cclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDgwMDtcclxuXHRwb2ludGVyLWV2ZW50czogdmlzaWJsZVBhaW50ZWQ7IC8qIElFIDktMTAgZG9lc24ndCBoYXZlIGF1dG8gKi9cclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcbi5sZWFmbGV0LXRvcCxcclxuLmxlYWZsZXQtYm90dG9tIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMTAwMDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvcCB7XHJcblx0dG9wOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtcmlnaHQge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtYm90dG9tIHtcclxuXHRib3R0b206IDA7XHJcblx0fVxyXG4ubGVhZmxldC1sZWZ0IHtcclxuXHRsZWZ0OiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG4ubGVhZmxldC1yaWdodCAubGVhZmxldC1jb250cm9sIHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0fVxyXG4ubGVhZmxldC10b3AgLmxlYWZsZXQtY29udHJvbCB7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJvdHRvbSAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtbGVmdCAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LXJpZ2h0IC5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHR9XHJcblxyXG5cclxuLyogem9vbSBhbmQgZmFkZSBhbmltYXRpb25zICovXHJcblxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtdGlsZSB7XHJcblx0d2lsbC1jaGFuZ2U6IG9wYWNpdHk7XHJcblx0fVxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtcG9wdXAge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuXHQgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcblx0fVxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtbWFwLXBhbmUgLmxlYWZsZXQtcG9wdXAge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWFuaW1hdGVkIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHQgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHQgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC16b29tLWFuaW1hdGVkIHtcclxuXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXpvb20tYW5pbWF0ZWQge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogICAgLW1vei10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjogICAgICAgICB0cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXRpbGUsXHJcbi5sZWFmbGV0LXBhbi1hbmltIC5sZWFmbGV0LXRpbGUge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuXHQgICAtbW96LXRyYW5zaXRpb246IG5vbmU7XHJcblx0ICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC16b29tLWhpZGUge1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cclxuLyogY3Vyc29ycyAqL1xyXG5cclxuLmxlYWZsZXQtaW50ZXJhY3RpdmUge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcbi5sZWFmbGV0LWdyYWIge1xyXG5cdGN1cnNvcjogLXdlYmtpdC1ncmFiO1xyXG5cdGN1cnNvcjogICAgLW1vei1ncmFiO1xyXG5cdGN1cnNvcjogICAgICAgICBncmFiO1xyXG5cdH1cclxuLmxlYWZsZXQtY3Jvc3NoYWlyLFxyXG4ubGVhZmxldC1jcm9zc2hhaXIgLmxlYWZsZXQtaW50ZXJhY3RpdmUge1xyXG5cdGN1cnNvcjogY3Jvc3NoYWlyO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtcGFuZSxcclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0Y3Vyc29yOiBhdXRvO1xyXG5cdH1cclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtZ3JhYixcclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtZ3JhYiAubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtbWFya2VyLWRyYWdnYWJsZSB7XHJcblx0Y3Vyc29yOiBtb3ZlO1xyXG5cdGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcclxuXHRjdXJzb3I6ICAgIC1tb3otZ3JhYmJpbmc7XHJcblx0Y3Vyc29yOiAgICAgICAgIGdyYWJiaW5nO1xyXG5cdH1cclxuXHJcbi8qIG1hcmtlciAmIG92ZXJsYXlzIGludGVyYWN0aXZpdHkgKi9cclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3csXHJcbi5sZWFmbGV0LWltYWdlLWxheWVyLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnIHBhdGgsXHJcbi5sZWFmbGV0LXRpbGUtY29udGFpbmVyIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1tYXJrZXItaWNvbi5sZWFmbGV0LWludGVyYWN0aXZlLFxyXG4ubGVhZmxldC1pbWFnZS1sYXllci5sZWFmbGV0LWludGVyYWN0aXZlLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnIHBhdGgubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuc3ZnLmxlYWZsZXQtaW1hZ2UtbGF5ZXIubGVhZmxldC1pbnRlcmFjdGl2ZSBwYXRoIHtcclxuXHRwb2ludGVyLWV2ZW50czogdmlzaWJsZVBhaW50ZWQ7IC8qIElFIDktMTAgZG9lc24ndCBoYXZlIGF1dG8gKi9cclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcblxyXG4vKiB2aXN1YWwgdHdlYWtzICovXHJcblxyXG4ubGVhZmxldC1jb250YWluZXIge1xyXG5cdGJhY2tncm91bmQ6ICNkZGQ7XHJcblx0b3V0bGluZTogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhIHtcclxuXHRjb2xvcjogIzAwNzhBODtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhLmxlYWZsZXQtYWN0aXZlIHtcclxuXHRvdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1ib3gge1xyXG5cdGJvcmRlcjogMnB4IGRvdHRlZCAjMzhmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuXHR9XHJcblxyXG5cclxuLyogZ2VuZXJhbCB0eXBvZ3JhcGh5ICovXHJcbi5sZWFmbGV0LWNvbnRhaW5lciB7XHJcblx0Zm9udDogMTJweC8xLjUgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdH1cclxuXHJcblxyXG4vKiBnZW5lcmFsIHRvb2xiYXIgc3R5bGVzICovXHJcblxyXG4ubGVhZmxldC1iYXIge1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLDAuNjUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhLFxyXG4ubGVhZmxldC1iYXIgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuXHR3aWR0aDogMjZweDtcclxuXHRoZWlnaHQ6IDI2cHg7XHJcblx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYSxcclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhOmZpcnN0LWNoaWxkIHtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhOmxhc3QtY2hpbGQge1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1ib3R0b206IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYS5sZWFmbGV0LWRpc2FibGVkIHtcclxuXHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuXHRjb2xvcjogI2JiYjtcclxuXHR9XHJcblxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIgYSB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIGE6Zmlyc3QtY2hpbGQge1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIGE6bGFzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XHJcblx0fVxyXG5cclxuLyogem9vbSBjb250cm9sICovXHJcblxyXG4ubGVhZmxldC1jb250cm9sLXpvb20taW4sXHJcbi5sZWFmbGV0LWNvbnRyb2wtem9vbS1vdXQge1xyXG5cdGZvbnQ6IGJvbGQgMThweCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIG1vbm9zcGFjZTtcclxuXHR0ZXh0LWluZGVudDogMXB4O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtem9vbS1pbiwgLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC16b29tLW91dCAge1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHR9XHJcblxyXG5cclxuLyogbGF5ZXJzIGNvbnRyb2wgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLDAsMCwwLjQpO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2xheWVycy5wbmcpO1xyXG5cdHdpZHRoOiAzNnB4O1xyXG5cdGhlaWdodDogMzZweDtcclxuXHR9XHJcbi5sZWFmbGV0LXJldGluYSAubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvbGF5ZXJzLTJ4LnBuZyk7XHJcblx0YmFja2dyb3VuZC1zaXplOiAyNnB4IDI2cHg7XHJcblx0fVxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdHdpZHRoOiA0NHB4O1xyXG5cdGhlaWdodDogNDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWxpc3QsXHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWxpc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIHtcclxuXHRwYWRkaW5nOiA2cHggMTBweCA2cHggNnB4O1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1zY3JvbGxiYXIge1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0cGFkZGluZy1yaWdodDogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtc2VsZWN0b3Ige1xyXG5cdG1hcmdpbi10b3A6IDJweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAxcHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycyBsYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1zZXBhcmF0b3Ige1xyXG5cdGhlaWdodDogMDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuXHRtYXJnaW46IDVweCAtMTBweCA1cHggLTZweDtcclxuXHR9XHJcblxyXG4vKiBEZWZhdWx0IGljb24gVVJMcyAqL1xyXG4ubGVhZmxldC1kZWZhdWx0LWljb24tcGF0aCB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9tYXJrZXItaWNvbi5wbmcpO1xyXG5cdH1cclxuXHJcblxyXG4vKiBhdHRyaWJ1dGlvbiBhbmQgc2NhbGUgY29udHJvbHMgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuXHRtYXJnaW46IDA7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uLFxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmUge1xyXG5cdHBhZGRpbmc6IDAgNXB4O1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbiBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIGE6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24sXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1jb250cm9sLXNjYWxlIHtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0fVxyXG4ubGVhZmxldC1sZWZ0IC5sZWFmbGV0LWNvbnRyb2wtc2NhbGUge1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0fVxyXG4ubGVhZmxldC1ib3R0b20gLmxlYWZsZXQtY29udHJvbC1zY2FsZSB7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lIHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjNzc3O1xyXG5cdGJvcmRlci10b3A6IG5vbmU7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRwYWRkaW5nOiAycHggNXB4IDFweDtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuXHRib3JkZXItdG9wOiAycHggc29saWQgIzc3NztcclxuXHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdG1hcmdpbi10b3A6IC0ycHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmU6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3Nzc7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbixcclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1sYXllcnMsXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciB7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLFxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIge1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG5cdH1cclxuXHJcblxyXG4vKiBwb3B1cCAqL1xyXG5cclxuLmxlYWZsZXQtcG9wdXAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlciB7XHJcblx0cGFkZGluZzogMXB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQge1xyXG5cdG1hcmdpbjogMTNweCAxOXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjQ7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50IHAge1xyXG5cdG1hcmdpbjogMThweCAwO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtdGlwLWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC10aXAge1xyXG5cdHdpZHRoOiAxN3B4O1xyXG5cdGhlaWdodDogMTdweDtcclxuXHRwYWRkaW5nOiAxcHg7XHJcblxyXG5cdG1hcmdpbjogLTEwcHggYXV0byAwO1xyXG5cclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcixcclxuLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRjb2xvcjogIzMzMztcclxuXHRib3gtc2hhZG93OiAwIDNweCAxNHB4IHJnYmEoMCwwLDAsMC40KTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhLmxlYWZsZXQtcG9wdXAtY2xvc2UtYnV0dG9uIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHBhZGRpbmc6IDRweCA0cHggMCAwO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0aGVpZ2h0OiAxNHB4O1xyXG5cdGZvbnQ6IDE2cHgvMTRweCBUYWhvbWEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICNjM2MzYzM7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIGEubGVhZmxldC1wb3B1cC1jbG9zZS1idXR0b246aG92ZXIge1xyXG5cdGNvbG9yOiAjOTk5O1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtc2Nyb2xsZWQge1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlciB7XHJcblx0em9vbTogMTtcclxuXHR9XHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLXRpcCB7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblxyXG5cdC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChNMTE9MC43MDcxMDY3OCwgTTEyPTAuNzA3MTA2NzgsIE0yMT0tMC43MDcxMDY3OCwgTTIyPTAuNzA3MTA2NzgpXCI7XHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KE0xMT0wLjcwNzEwNjc4LCBNMTI9MC43MDcxMDY3OCwgTTIxPS0wLjcwNzEwNjc4LCBNMjI9MC43MDcxMDY3OCk7XHJcblx0fVxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC10aXAtY29udGFpbmVyIHtcclxuXHRtYXJnaW4tdG9wOiAtMXB4O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LWNvbnRyb2wtem9vbSxcclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtY29udHJvbC1sYXllcnMsXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcixcclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG5cdH1cclxuXHJcblxyXG4vKiBkaXYgaWNvbiAqL1xyXG5cclxuLmxlYWZsZXQtZGl2LWljb24ge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuXHR9XHJcblxyXG5cclxuLyogVG9vbHRpcCAqL1xyXG4vKiBCYXNlIHN0eWxlcyBmb3IgdGhlIGVsZW1lbnQgdGhhdCBoYXMgYSB0b29sdGlwICovXHJcbi5sZWFmbGV0LXRvb2x0aXAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRwYWRkaW5nOiA2cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjb2xvcjogIzIyMjtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAubGVhZmxldC1jbGlja2FibGUge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wOmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b206YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQ6YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLXJpZ2h0OmJlZm9yZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0fVxyXG5cclxuLyogRGlyZWN0aW9ucyAqL1xyXG5cclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b20ge1xyXG5cdG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLXRvcCB7XHJcblx0bWFyZ2luLXRvcDogLTZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLWJvdHRvbTpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wOmJlZm9yZSB7XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC10b3A6YmVmb3JlIHtcclxuXHRib3R0b206IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogLTEycHg7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtYm90dG9tOmJlZm9yZSB7XHJcblx0dG9wOiAwO1xyXG5cdG1hcmdpbi10b3A6IC0xMnB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQge1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG59XHJcbi5sZWFmbGV0LXRvb2x0aXAtcmlnaHQge1xyXG5cdG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuLmxlYWZsZXQtdG9vbHRpcC1sZWZ0OmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodDpiZWZvcmUge1xyXG5cdHRvcDogNTAlO1xyXG5cdG1hcmdpbi10b3A6IC02cHg7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQ6YmVmb3JlIHtcclxuXHRyaWdodDogMDtcclxuXHRtYXJnaW4tcmlnaHQ6IC0xMnB4O1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodDpiZWZvcmUge1xyXG5cdGxlZnQ6IDA7XHJcblx0bWFyZ2luLWxlZnQ6IC0xMnB4O1xyXG5cdGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbiJdfQ== */", '', '']];
    /***/
  },

  /***/
  "./node_modules/highcharts/modules/map.js":
  /*!************************************************!*\
    !*** ./node_modules/highcharts/modules/map.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighchartsModulesMapJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*
    Highmaps JS v8.0.4 (2020-03-10)
    Highmaps as a plugin for Highcharts or Highstock.
    (c) 2011-2019 Torstein Honsi
    License: www.highcharts.com/license
    */


    (function (d) {
      true && module.exports ? (d["default"] = d, module.exports = d) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
      /*! highcharts */
      "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (w) {
        d(w);
        d.Highcharts = w;
        return d;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function (d) {
      function w(a, n, d, g) {
        a.hasOwnProperty(n) || (a[n] = g.apply(null, d));
      }

      d = d ? d._modules : {};
      w(d, "parts-map/MapAxis.js", [d["parts/Globals.js"], d["parts/Utilities.js"]], function (a, n) {
        var d = n.addEvent,
            g = n.pick;
        a = a.Axis;
        d(a, "getSeriesExtremes", function () {
          var k = [];
          this.isXAxis && (this.series.forEach(function (f, a) {
            f.useMapGeometry && (k[a] = f.xData, f.xData = []);
          }), this.seriesXData = k);
        });
        d(a, "afterGetSeriesExtremes", function () {
          var k = this.seriesXData,
              f;

          if (this.isXAxis) {
            var a = g(this.dataMin, Number.MAX_VALUE);
            var d = g(this.dataMax, -Number.MAX_VALUE);
            this.series.forEach(function (n, r) {
              n.useMapGeometry && (a = Math.min(a, g(n.minX, a)), d = Math.max(d, g(n.maxX, d)), n.xData = k[r], f = !0);
            });
            f && (this.dataMin = a, this.dataMax = d);
            delete this.seriesXData;
          }
        });
        d(a, "afterSetAxisTranslation", function () {
          var k = this.chart;
          var f = k.plotWidth / k.plotHeight;
          k = k.xAxis[0];
          var a;
          "yAxis" === this.coll && "undefined" !== typeof k.transA && this.series.forEach(function (f) {
            f.preserveAspectRatio && (a = !0);
          });

          if (a && (this.transA = k.transA = Math.min(this.transA, k.transA), f /= (k.max - k.min) / (this.max - this.min), f = 1 > f ? this : k, k = (f.max - f.min) * f.transA, f.pixelPadding = f.len - k, f.minPixelPadding = f.pixelPadding / 2, k = f.fixTo)) {
            k = k[1] - f.toValue(k[0], !0);
            k *= f.transA;
            if (Math.abs(k) > f.minPixelPadding || f.min === f.dataMin && f.max === f.dataMax) k = 0;
            f.minPixelPadding -= k;
          }
        });
        d(a, "render", function () {
          this.fixTo = null;
        });
      });
      w(d, "parts-map/ColorSeriesMixin.js", [d["parts/Globals.js"]], function (a) {
        a.colorPointMixin = {
          setVisible: function setVisible(a) {
            var d = this,
                g = a ? "show" : "hide";
            d.visible = d.options.visible = !!a;
            ["graphic", "dataLabel"].forEach(function (a) {
              if (d[a]) d[a][g]();
            });
          }
        };
        a.colorSeriesMixin = {
          optionalAxis: "colorAxis",
          colorAxis: 0,
          translateColors: function translateColors() {
            var a = this,
                d = this.options.nullColor,
                g = this.colorAxis,
                k = this.colorKey;
            (this.data.length ? this.data : this.points).forEach(function (f) {
              var n = f.getNestedProperty(k);
              if (n = f.options.color || (f.isNull ? d : g && "undefined" !== typeof n ? g.toColor(n, f) : f.color || a.color)) f.color = n;
            });
          }
        };
      });
      w(d, "parts-map/ColorAxis.js", [d["parts/Globals.js"], d["parts/Color.js"], d["parts/Point.js"], d["parts/Legend.js"], d["mixins/legend-symbol.js"], d["parts/Utilities.js"]], function (a, d, t, g, k, f) {
        "";

        var n = d.parse;
        d = f.addEvent;
        var A = f.erase,
            u = f.extend,
            r = f.isNumber,
            c = f.merge,
            l = f.pick,
            m = f.splat,
            v = a.Axis;
        f = a.Chart;
        var z = a.Series,
            x = a.colorPointMixin,
            B = a.noop;
        u(z.prototype, a.colorSeriesMixin);
        u(t.prototype, x);
        f.prototype.collectionsWithUpdate.push("colorAxis");
        f.prototype.collectionsWithInit.colorAxis = [f.prototype.addColorAxis];

        var h = a.ColorAxis = function () {
          this.init.apply(this, arguments);
        };

        u(h.prototype, v.prototype);
        u(h.prototype, {
          defaultColorAxisOptions: {
            lineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            startOnTick: !0,
            endOnTick: !0,
            offset: 0,
            marker: {
              animation: {
                duration: 50
              },
              width: .01,
              color: "#999999"
            },
            labels: {
              overflow: "justify",
              rotation: 0
            },
            minColor: "#e6ebf5",
            maxColor: "#003399",
            tickLength: 5,
            showInLegend: !0
          },
          keepProps: ["legendGroup", "legendItemHeight", "legendItemWidth", "legendItem", "legendSymbol"].concat(v.prototype.keepProps),
          init: function init(b, e) {
            this.coll = "colorAxis";
            var p = this.buildOptions.call(b, this.defaultColorAxisOptions, e);
            v.prototype.init.call(this, b, p);
            e.dataClasses && this.initDataClasses(e);
            this.initStops();
            this.horiz = !p.opposite;
            this.zoomEnabled = !1;
            this.defaultLegendLength = 200;
          },
          initDataClasses: function initDataClasses(b) {
            var e = this.chart,
                p,
                y = 0,
                q = e.options.chart.colorCount,
                h = this.options,
                l = b.dataClasses.length;
            this.dataClasses = p = [];
            this.legendItems = [];
            b.dataClasses.forEach(function (b, C) {
              b = c(b);
              p.push(b);
              if (e.styledMode || !b.color) "category" === h.dataClassColor ? (e.styledMode || (C = e.options.colors, q = C.length, b.color = C[y]), b.colorIndex = y, y++, y === q && (y = 0)) : b.color = n(h.minColor).tweenTo(n(h.maxColor), 2 > l ? .5 : C / (l - 1));
            });
          },
          hasData: function hasData() {
            return !(!this.tickPositions || !this.tickPositions.length);
          },
          setTickPositions: function setTickPositions() {
            if (!this.dataClasses) return v.prototype.setTickPositions.call(this);
          },
          initStops: function initStops() {
            this.stops = this.options.stops || [[0, this.options.minColor], [1, this.options.maxColor]];
            this.stops.forEach(function (b) {
              b.color = n(b[1]);
            });
          },
          buildOptions: function buildOptions(b, e) {
            var p = this.options.legend,
                y = e.layout ? "vertical" !== e.layout : "vertical" !== p.layout;
            return c(b, {
              side: y ? 2 : 1,
              reversed: !y
            }, e, {
              opposite: !y,
              showEmpty: !1,
              title: null,
              visible: p.enabled && (e ? !1 !== e.visible : !0)
            });
          },
          setOptions: function setOptions(b) {
            v.prototype.setOptions.call(this, b);
            this.options.crosshair = this.options.marker;
          },
          setAxisSize: function setAxisSize() {
            var b = this.legendSymbol,
                e = this.chart,
                p = e.options.legend || {},
                c,
                q;
            b ? (this.left = p = b.attr("x"), this.top = c = b.attr("y"), this.width = q = b.attr("width"), this.height = b = b.attr("height"), this.right = e.chartWidth - p - q, this.bottom = e.chartHeight - c - b, this.len = this.horiz ? q : b, this.pos = this.horiz ? p : c) : this.len = (this.horiz ? p.symbolWidth : p.symbolHeight) || this.defaultLegendLength;
          },
          normalizedValue: function normalizedValue(b) {
            this.isLog && (b = this.val2lin(b));
            return 1 - (this.max - b) / (this.max - this.min || 1);
          },
          toColor: function toColor(b, e) {
            var p = this.stops,
                c = this.dataClasses,
                q;
            if (c) for (q = c.length; q--;) {
              var h = c[q];
              var l = h.from;
              p = h.to;

              if (("undefined" === typeof l || b >= l) && ("undefined" === typeof p || b <= p)) {
                var a = h.color;
                e && (e.dataClass = q, e.colorIndex = h.colorIndex);
                break;
              }
            } else {
              b = this.normalizedValue(b);

              for (q = p.length; q-- && !(b > p[q][0]);) {
                ;
              }

              l = p[q] || p[q + 1];
              p = p[q + 1] || l;
              b = 1 - (p[0] - b) / (p[0] - l[0] || 1);
              a = l.color.tweenTo(p.color, b);
            }
            return a;
          },
          getOffset: function getOffset() {
            var b = this.legendGroup,
                e = this.chart.axisOffset[this.side];
            b && (this.axisParent = b, v.prototype.getOffset.call(this), this.added || (this.added = !0, this.labelLeft = 0, this.labelRight = this.width), this.chart.axisOffset[this.side] = e);
          },
          setLegendColor: function setLegendColor() {
            var b = this.reversed;
            var e = b ? 1 : 0;
            b = b ? 0 : 1;
            e = this.horiz ? [e, 0, b, 0] : [0, b, 0, e];
            this.legendColor = {
              linearGradient: {
                x1: e[0],
                y1: e[1],
                x2: e[2],
                y2: e[3]
              },
              stops: this.stops
            };
          },
          drawLegendSymbol: function drawLegendSymbol(b, e) {
            var p = b.padding,
                c = b.options,
                q = this.horiz,
                h = l(c.symbolWidth, q ? this.defaultLegendLength : 12),
                a = l(c.symbolHeight, q ? 12 : this.defaultLegendLength),
                f = l(c.labelPadding, q ? 16 : 30);
            c = l(c.itemDistance, 10);
            this.setLegendColor();
            e.legendSymbol = this.chart.renderer.rect(0, b.baseline - 11, h, a).attr({
              zIndex: 1
            }).add(e.legendGroup);
            this.legendItemWidth = h + p + (q ? c : f);
            this.legendItemHeight = a + p + (q ? f : 0);
          },
          setState: function setState(b) {
            this.series.forEach(function (e) {
              e.setState(b);
            });
          },
          visible: !0,
          setVisible: B,
          getSeriesExtremes: function getSeriesExtremes() {
            var b = this.series,
                e = b.length,
                p;
            this.dataMin = Infinity;

            for (this.dataMax = -Infinity; e--;) {
              var c = b[e];
              var q = c.colorKey = l(c.options.colorKey, c.colorKey, c.pointValKey, c.zoneAxis, "y");
              var h = c.pointArrayMap;
              var a = c[q + "Min"] && c[q + "Max"];
              if (c[q + "Data"]) var f = c[q + "Data"];else if (h) {
                f = [];
                h = h.indexOf(q);
                var m = c.yData;
                if (0 <= h && m) for (p = 0; p < m.length; p++) {
                  f.push(l(m[p][h], m[p]));
                }
              } else f = c.yData;
              a ? (c.minColorValue = c[q + "Min"], c.maxColorValue = c[q + "Max"]) : (z.prototype.getExtremes.call(c, f), c.minColorValue = c.dataMin, c.maxColorValue = c.dataMax);
              "undefined" !== typeof c.minColorValue && (this.dataMin = Math.min(this.dataMin, c.minColorValue), this.dataMax = Math.max(this.dataMax, c.maxColorValue));
              a || z.prototype.getExtremes.call(c);
            }
          },
          drawCrosshair: function drawCrosshair(b, e) {
            var c = e && e.plotX,
                h = e && e.plotY,
                q = this.pos,
                l = this.len;

            if (e) {
              var a = this.toPixels(e.getNestedProperty(e.series.colorKey));
              a < q ? a = q - 2 : a > q + l && (a = q + l + 2);
              e.plotX = a;
              e.plotY = this.len - a;
              v.prototype.drawCrosshair.call(this, b, e);
              e.plotX = c;
              e.plotY = h;
              this.cross && !this.cross.addedToColorAxis && this.legendGroup && (this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup), this.cross.addedToColorAxis = !0, this.chart.styledMode || this.cross.attr({
                fill: this.crosshair.color
              }));
            }
          },
          getPlotLinePath: function getPlotLinePath(b) {
            var e = b.translatedValue;
            return r(e) ? this.horiz ? ["M", e - 4, this.top - 6, "L", e + 4, this.top - 6, e, this.top, "Z"] : ["M", this.left, e, "L", this.left - 6, e + 6, this.left - 6, e - 6, "Z"] : v.prototype.getPlotLinePath.apply(this, arguments);
          },
          update: function update(b, e) {
            var p = this.chart,
                h = p.legend,
                q = this.buildOptions.call(p, {}, b);
            this.series.forEach(function (b) {
              b.isDirtyData = !0;
            });
            (b.dataClasses && h.allItems || this.dataClasses) && this.destroyItems();
            p.options[this.coll] = c(this.userOptions, q);
            v.prototype.update.call(this, q, e);
            this.legendItem && (this.setLegendColor(), h.colorizeItem(this, !0));
          },
          destroyItems: function destroyItems() {
            var b = this.chart;
            this.legendItem ? b.legend.destroyItem(this) : this.legendItems && this.legendItems.forEach(function (e) {
              b.legend.destroyItem(e);
            });
            b.isDirtyLegend = !0;
          },
          remove: function remove(b) {
            this.destroyItems();
            v.prototype.remove.call(this, b);
          },
          getDataClassLegendSymbols: function getDataClassLegendSymbols() {
            var b = this,
                e = this.chart,
                c = this.legendItems,
                h = e.options.legend,
                q = h.valueDecimals,
                l = h.valueSuffix || "",
                a;
            c.length || this.dataClasses.forEach(function (p, h) {
              var f = !0,
                  m = p.from,
                  y = p.to,
                  C = e.numberFormatter;
              a = "";
              "undefined" === typeof m ? a = "< " : "undefined" === typeof y && (a = "> ");
              "undefined" !== typeof m && (a += C(m, q) + l);
              "undefined" !== typeof m && "undefined" !== typeof y && (a += " - ");
              "undefined" !== typeof y && (a += C(y, q) + l);
              c.push(u({
                chart: e,
                name: a,
                options: {},
                drawLegendSymbol: k.drawRectangle,
                visible: !0,
                setState: B,
                isDataClass: !0,
                setVisible: function setVisible() {
                  f = this.visible = !f;
                  b.series.forEach(function (b) {
                    b.points.forEach(function (b) {
                      b.dataClass === h && b.setVisible(f);
                    });
                  });
                  e.legend.colorizeItem(this, f);
                }
              }, p));
            });
            return c;
          },
          beforePadding: !1,
          name: ""
        });
        ["fill", "stroke"].forEach(function (b) {
          a.Fx.prototype[b + "Setter"] = function () {
            this.elem.attr(b, n(this.start).tweenTo(n(this.end), this.pos), null, !0);
          };
        });
        d(f, "afterGetAxes", function () {
          var b = this,
              e = b.options;
          this.colorAxis = [];
          e.colorAxis && (e.colorAxis = m(e.colorAxis), e.colorAxis.forEach(function (e, c) {
            e.index = c;
            new h(b, e);
          }));
        });
        d(z, "bindAxes", function () {
          var b = this.axisTypes;
          b ? -1 === b.indexOf("colorAxis") && b.push("colorAxis") : this.axisTypes = ["colorAxis"];
        });
        d(g, "afterGetAllItems", function (b) {
          var e = [],
              c,
              h;
          (this.chart.colorAxis || []).forEach(function (p) {
            (c = p.options) && c.showInLegend && (c.dataClasses && c.visible ? e = e.concat(p.getDataClassLegendSymbols()) : c.visible && e.push(p), p.series.forEach(function (e) {
              if (!e.options.showInLegend || c.dataClasses) "point" === e.options.legendType ? e.points.forEach(function (e) {
                A(b.allItems, e);
              }) : A(b.allItems, e);
            }));
          });

          for (h = e.length; h--;) {
            b.allItems.unshift(e[h]);
          }
        });
        d(g, "afterColorizeItem", function (b) {
          b.visible && b.item.legendColor && b.item.legendSymbol.attr({
            fill: b.item.legendColor
          });
        });
        d(g, "afterUpdate", function () {
          var b = this.chart.colorAxis;
          b && b.forEach(function (b, c, h) {
            b.update({}, h);
          });
        });
        d(z, "afterTranslate", function () {
          (this.chart.colorAxis && this.chart.colorAxis.length || this.colorAttribs) && this.translateColors();
        });
      });
      w(d, "parts-map/ColorMapSeriesMixin.js", [d["parts/Globals.js"], d["parts/Point.js"], d["parts/Utilities.js"]], function (a, d, t) {
        var g = t.defined;
        t = a.noop;
        var k = a.seriesTypes;
        a.colorMapPointMixin = {
          dataLabelOnNull: !0,
          isValid: function isValid() {
            return null !== this.value && Infinity !== this.value && -Infinity !== this.value;
          },
          setState: function setState(a) {
            d.prototype.setState.call(this, a);
            this.graphic && this.graphic.attr({
              zIndex: "hover" === a ? 1 : 0
            });
          }
        };
        a.colorMapSeriesMixin = {
          pointArrayMap: ["value"],
          axisTypes: ["xAxis", "yAxis", "colorAxis"],
          trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
          getSymbol: t,
          parallelArrays: ["x", "y", "value"],
          colorKey: "value",
          pointAttribs: k.column.prototype.pointAttribs,
          colorAttribs: function colorAttribs(a) {
            var f = {};
            g(a.color) && (f[this.colorProp || "fill"] = a.color);
            return f;
          }
        };
      });
      w(d, "parts-map/MapNavigation.js", [d["parts/Globals.js"], d["parts/Utilities.js"]], function (a, d) {
        function n(c) {
          c && (c.preventDefault && c.preventDefault(), c.stopPropagation && c.stopPropagation(), c.cancelBubble = !0);
        }

        function g(c) {
          this.init(c);
        }

        var k = d.addEvent,
            f = d.extend,
            D = d.merge,
            A = d.objectEach,
            u = d.pick;
        d = a.Chart;
        var r = a.doc;

        g.prototype.init = function (c) {
          this.chart = c;
          c.mapNavButtons = [];
        };

        g.prototype.update = function (c) {
          var a = this.chart,
              m = a.options.mapNavigation,
              d,
              g,
              x,
              B,
              h,
              b = function b(_b) {
            this.handler.call(a, _b);
            n(_b);
          },
              e = a.mapNavButtons;

          c && (m = a.options.mapNavigation = D(a.options.mapNavigation, c));

          for (; e.length;) {
            e.pop().destroy();
          }

          u(m.enableButtons, m.enabled) && !a.renderer.forExport && A(m.buttons, function (c, l) {
            d = D(m.buttonOptions, c);
            a.styledMode || (g = d.theme, g.style = D(d.theme.style, d.style), B = (x = g.states) && x.hover, h = x && x.select);
            c = a.renderer.button(d.text, 0, 0, b, g, B, h, 0, "zoomIn" === l ? "topbutton" : "bottombutton").addClass("highcharts-map-navigation highcharts-" + {
              zoomIn: "zoom-in",
              zoomOut: "zoom-out"
            }[l]).attr({
              width: d.width,
              height: d.height,
              title: a.options.lang[l],
              padding: d.padding,
              zIndex: 5
            }).add();
            c.handler = d.onclick;
            k(c.element, "dblclick", n);
            e.push(c);
            var p = d,
                y = k(a, "load", function () {
              c.align(f(p, {
                width: c.width,
                height: 2 * c.height
              }), null, p.alignTo);
              y();
            });
          });
          this.updateEvents(m);
        };

        g.prototype.updateEvents = function (c) {
          var a = this.chart;
          u(c.enableDoubleClickZoom, c.enabled) || c.enableDoubleClickZoomTo ? this.unbindDblClick = this.unbindDblClick || k(a.container, "dblclick", function (c) {
            a.pointer.onContainerDblClick(c);
          }) : this.unbindDblClick && (this.unbindDblClick = this.unbindDblClick());
          u(c.enableMouseWheelZoom, c.enabled) ? this.unbindMouseWheel = this.unbindMouseWheel || k(a.container, "undefined" === typeof r.onmousewheel ? "DOMMouseScroll" : "mousewheel", function (c) {
            a.pointer.onContainerMouseWheel(c);
            n(c);
            return !1;
          }) : this.unbindMouseWheel && (this.unbindMouseWheel = this.unbindMouseWheel());
        };

        f(d.prototype, {
          fitToBox: function fitToBox(c, a) {
            [["x", "width"], ["y", "height"]].forEach(function (d) {
              var f = d[0];
              d = d[1];
              c[f] + c[d] > a[f] + a[d] && (c[d] > a[d] ? (c[d] = a[d], c[f] = a[f]) : c[f] = a[f] + a[d] - c[d]);
              c[d] > a[d] && (c[d] = a[d]);
              c[f] < a[f] && (c[f] = a[f]);
            });
            return c;
          },
          mapZoom: function mapZoom(c, a, d, f, k) {
            var l = this.xAxis[0],
                m = l.max - l.min,
                h = u(a, l.min + m / 2),
                b = m * c;
            m = this.yAxis[0];
            var e = m.max - m.min,
                p = u(d, m.min + e / 2);
            e *= c;
            h = this.fitToBox({
              x: h - b * (f ? (f - l.pos) / l.len : .5),
              y: p - e * (k ? (k - m.pos) / m.len : .5),
              width: b,
              height: e
            }, {
              x: l.dataMin,
              y: m.dataMin,
              width: l.dataMax - l.dataMin,
              height: m.dataMax - m.dataMin
            });
            b = h.x <= l.dataMin && h.width >= l.dataMax - l.dataMin && h.y <= m.dataMin && h.height >= m.dataMax - m.dataMin;
            f && (l.fixTo = [f - l.pos, a]);
            k && (m.fixTo = [k - m.pos, d]);
            "undefined" === typeof c || b ? (l.setExtremes(void 0, void 0, !1), m.setExtremes(void 0, void 0, !1)) : (l.setExtremes(h.x, h.x + h.width, !1), m.setExtremes(h.y, h.y + h.height, !1));
            this.redraw();
          }
        });
        k(d, "beforeRender", function () {
          this.mapNavigation = new g(this);
          this.mapNavigation.update();
        });
        a.MapNavigation = g;
      });
      w(d, "parts-map/MapPointer.js", [d["parts/Globals.js"], d["parts/Utilities.js"]], function (a, d) {
        var n = d.extend,
            g = d.pick;
        d = d.wrap;
        a = a.Pointer;
        n(a.prototype, {
          onContainerDblClick: function onContainerDblClick(a) {
            var d = this.chart;
            a = this.normalize(a);
            d.options.mapNavigation.enableDoubleClickZoomTo ? d.pointer.inClass(a.target, "highcharts-tracker") && d.hoverPoint && d.hoverPoint.zoomTo() : d.isInsidePlot(a.chartX - d.plotLeft, a.chartY - d.plotTop) && d.mapZoom(.5, d.xAxis[0].toValue(a.chartX), d.yAxis[0].toValue(a.chartY), a.chartX, a.chartY);
          },
          onContainerMouseWheel: function onContainerMouseWheel(a) {
            var d = this.chart;
            a = this.normalize(a);
            var g = a.detail || -(a.wheelDelta / 120);
            d.isInsidePlot(a.chartX - d.plotLeft, a.chartY - d.plotTop) && d.mapZoom(Math.pow(d.options.mapNavigation.mouseWheelSensitivity, g), d.xAxis[0].toValue(a.chartX), d.yAxis[0].toValue(a.chartY), a.chartX, a.chartY);
          }
        });
        d(a.prototype, "zoomOption", function (a) {
          var d = this.chart.options.mapNavigation;
          g(d.enableTouchZoom, d.enabled) && (this.chart.options.chart.pinchType = "xy");
          a.apply(this, [].slice.call(arguments, 1));
        });
        d(a.prototype, "pinchTranslate", function (a, d, g, n, t, r, c) {
          a.call(this, d, g, n, t, r, c);
          "map" === this.chart.options.chart.type && this.hasZoom && (a = n.scaleX > n.scaleY, this.pinchTranslateDirection(!a, d, g, n, t, r, c, a ? n.scaleX : n.scaleY));
        });
      });
      w(d, "parts-map/MapSeries.js", [d["parts/Globals.js"], d["mixins/legend-symbol.js"], d["parts/Point.js"], d["parts/Utilities.js"]], function (a, d, t, g) {
        var k = g.extend,
            f = g.fireEvent,
            n = g.getNestedProperty,
            A = g.isArray,
            u = g.isNumber,
            r = g.merge,
            c = g.objectEach,
            l = g.pick,
            m = g.seriesType,
            v = g.splat,
            z = a.colorMapPointMixin,
            x = a.noop,
            B = a.Series,
            h = a.seriesTypes;
        m("map", "scatter", {
          animation: !1,
          dataLabels: {
            crop: !1,
            formatter: function formatter() {
              return this.point.value;
            },
            inside: !0,
            overflow: !1,
            padding: 0,
            verticalAlign: "middle"
          },
          marker: null,
          nullColor: "#f7f7f7",
          stickyTracking: !1,
          tooltip: {
            followPointer: !0,
            pointFormat: "{point.name}: {point.value}<br/>"
          },
          turboThreshold: 0,
          allAreas: !0,
          borderColor: "#cccccc",
          borderWidth: 1,
          joinBy: "hc-key",
          states: {
            hover: {
              halo: null,
              brightness: .2
            },
            normal: {
              animation: !0
            },
            select: {
              color: "#cccccc"
            },
            inactive: {
              opacity: 1
            }
          }
        }, r(a.colorMapSeriesMixin, {
          type: "map",
          getExtremesFromAll: !0,
          useMapGeometry: !0,
          forceDL: !0,
          searchPoint: x,
          directTouch: !0,
          preserveAspectRatio: !0,
          pointArrayMap: ["value"],
          setOptions: function setOptions(b) {
            b = B.prototype.setOptions.call(this, b);
            var e = b.joinBy;
            null === e && (e = "_i");
            e = this.joinBy = v(e);
            e[1] || (e[1] = e[0]);
            return b;
          },
          getBox: function getBox(b) {
            var e = Number.MAX_VALUE,
                c = -e,
                d = e,
                h = -e,
                f = e,
                m = e,
                g = this.xAxis,
                k = this.yAxis,
                r;
            (b || []).forEach(function (b) {
              if (b.path) {
                "string" === typeof b.path && (b.path = a.splitPath(b.path));
                var p = b.path || [],
                    q = p.length,
                    g = !1,
                    y = -e,
                    C = e,
                    k = -e,
                    n = e,
                    v = b.properties;

                if (!b._foundBox) {
                  for (; q--;) {
                    u(p[q]) && (g ? (y = Math.max(y, p[q]), C = Math.min(C, p[q])) : (k = Math.max(k, p[q]), n = Math.min(n, p[q])), g = !g);
                  }

                  b._midX = C + (y - C) * l(b.middleX, v && v["hc-middle-x"], .5);
                  b._midY = n + (k - n) * l(b.middleY, v && v["hc-middle-y"], .5);
                  b._maxX = y;
                  b._minX = C;
                  b._maxY = k;
                  b._minY = n;
                  b.labelrank = l(b.labelrank, (y - C) * (k - n));
                  b._foundBox = !0;
                }

                c = Math.max(c, b._maxX);
                d = Math.min(d, b._minX);
                h = Math.max(h, b._maxY);
                f = Math.min(f, b._minY);
                m = Math.min(b._maxX - b._minX, b._maxY - b._minY, m);
                r = !0;
              }
            });
            r && (this.minY = Math.min(f, l(this.minY, e)), this.maxY = Math.max(h, l(this.maxY, -e)), this.minX = Math.min(d, l(this.minX, e)), this.maxX = Math.max(c, l(this.maxX, -e)), g && "undefined" === typeof g.options.minRange && (g.minRange = Math.min(5 * m, (this.maxX - this.minX) / 5, g.minRange || e)), k && "undefined" === typeof k.options.minRange && (k.minRange = Math.min(5 * m, (this.maxY - this.minY) / 5, k.minRange || e)));
          },
          hasData: function hasData() {
            return !!this.processedXData.length;
          },
          getExtremes: function getExtremes() {
            B.prototype.getExtremes.call(this, this.valueData);
            this.chart.hasRendered && this.isDirtyData && this.getBox(this.options.data);
            this.valueMin = this.dataMin;
            this.valueMax = this.dataMax;
            this.dataMin = this.minY;
            this.dataMax = this.maxY;
          },
          translatePath: function translatePath(b) {
            var e = !1,
                c = this.xAxis,
                a = this.yAxis,
                d = c.min,
                h = c.transA;
            c = c.minPixelPadding;
            var l = a.min,
                f = a.transA;
            a = a.minPixelPadding;
            var m,
                g = [];
            if (b) for (m = b.length; m--;) {
              u(b[m]) ? (g[m] = e ? (b[m] - d) * h + c : (b[m] - l) * f + a, e = !e) : g[m] = b[m];
            }
            return g;
          },
          setData: function setData(b, e, p, d) {
            var h = this.options,
                l = this.chart.options.chart,
                m = l && l.map,
                f = h.mapData,
                g = this.joinBy,
                y = h.keys || this.pointArrayMap,
                k = [],
                v = {},
                x = this.chart.mapTransforms;
            !f && m && (f = "string" === typeof m ? a.maps[m] : m);
            b && b.forEach(function (e, c) {
              var a = 0;
              if (u(e)) b[c] = {
                value: e
              };else if (A(e)) {
                b[c] = {};
                !h.keys && e.length > y.length && "string" === typeof e[0] && (b[c]["hc-key"] = e[0], ++a);

                for (var p = 0; p < y.length; ++p, ++a) {
                  y[p] && "undefined" !== typeof e[a] && (0 < y[p].indexOf(".") ? t.prototype.setNestedProperty(b[c], e[a], y[p]) : b[c][y[p]] = e[a]);
                }
              }
              g && "_i" === g[0] && (b[c]._i = c);
            });
            this.getBox(b);
            (this.chart.mapTransforms = x = l && l.mapTransforms || f && f["hc-transform"] || x) && c(x, function (b) {
              b.rotation && (b.cosAngle = Math.cos(b.rotation), b.sinAngle = Math.sin(b.rotation));
            });

            if (f) {
              "FeatureCollection" === f.type && (this.mapTitle = f.title, f = a.geojson(f, this.type, this));
              this.mapData = f;
              this.mapMap = {};

              for (x = 0; x < f.length; x++) {
                l = f[x], m = l.properties, l._i = x, g[0] && m && m[g[0]] && (l[g[0]] = m[g[0]]), v[l[g[0]]] = l;
              }

              this.mapMap = v;

              if (b && g[1]) {
                var z = g[1];
                b.forEach(function (b) {
                  b = n(z, b);
                  v[b] && k.push(v[b]);
                });
              }

              if (h.allAreas) {
                this.getBox(f);
                b = b || [];

                if (g[1]) {
                  var w = g[1];
                  b.forEach(function (b) {
                    k.push(n(w, b));
                  });
                }

                k = "|" + k.map(function (b) {
                  return b && b[g[0]];
                }).join("|") + "|";
                f.forEach(function (e) {
                  g[0] && -1 !== k.indexOf("|" + e[g[0]] + "|") || (b.push(r(e, {
                    value: null
                  })), d = !1);
                });
              } else this.getBox(k);
            }

            B.prototype.setData.call(this, b, e, p, d);
          },
          drawGraph: x,
          drawDataLabels: x,
          doFullTranslate: function doFullTranslate() {
            return this.isDirtyData || this.chart.isResizing || this.chart.renderer.isVML || !this.baseTrans;
          },
          translate: function translate() {
            var b = this,
                e = b.xAxis,
                c = b.yAxis,
                a = b.doFullTranslate();
            b.generatePoints();
            b.data.forEach(function (p) {
              u(p._midX) && u(p._midY) && (p.plotX = e.toPixels(p._midX, !0), p.plotY = c.toPixels(p._midY, !0));
              a && (p.shapeType = "path", p.shapeArgs = {
                d: b.translatePath(p.path)
              });
            });
            f(b, "afterTranslate");
          },
          pointAttribs: function pointAttribs(b, e) {
            e = b.series.chart.styledMode ? this.colorAttribs(b) : h.column.prototype.pointAttribs.call(this, b, e);
            e["stroke-width"] = l(b.options[this.pointAttrToOptions && this.pointAttrToOptions["stroke-width"] || "borderWidth"], "inherit");
            return e;
          },
          drawPoints: function drawPoints() {
            var b = this,
                e = b.xAxis,
                c = b.yAxis,
                a = b.group,
                d = b.chart,
                f = d.renderer,
                m = this.baseTrans;
            b.transformGroup || (b.transformGroup = f.g().attr({
              scaleX: 1,
              scaleY: 1
            }).add(a), b.transformGroup.survive = !0);
            if (b.doFullTranslate()) d.hasRendered && !d.styledMode && b.points.forEach(function (e) {
              e.shapeArgs && (e.shapeArgs.fill = b.pointAttribs(e, e.state).fill);
            }), b.group = b.transformGroup, h.column.prototype.drawPoints.apply(b), b.group = a, b.points.forEach(function (e) {
              if (e.graphic) {
                var c = "";
                e.name && (c += "highcharts-name-" + e.name.replace(/ /g, "-").toLowerCase());
                e.properties && e.properties["hc-key"] && (c += " highcharts-key-" + e.properties["hc-key"].toLowerCase());
                c && e.graphic.addClass(c);
                d.styledMode && e.graphic.css(b.pointAttribs(e, e.selected && "select" || void 0));
              }
            }), this.baseTrans = {
              originX: e.min - e.minPixelPadding / e.transA,
              originY: c.min - c.minPixelPadding / c.transA + (c.reversed ? 0 : c.len / c.transA),
              transAX: e.transA,
              transAY: c.transA
            }, this.transformGroup.animate({
              translateX: 0,
              translateY: 0,
              scaleX: 1,
              scaleY: 1
            });else {
              var g = e.transA / m.transAX;
              var k = c.transA / m.transAY;
              var n = e.toPixels(m.originX, !0);
              var v = c.toPixels(m.originY, !0);
              .99 < g && 1.01 > g && .99 < k && 1.01 > k && (k = g = 1, n = Math.round(n), v = Math.round(v));
              var r = this.transformGroup;

              if (d.renderer.globalAnimation) {
                var x = r.attr("translateX");
                var B = r.attr("translateY");
                var z = r.attr("scaleX");
                var t = r.attr("scaleY");
                r.attr({
                  animator: 0
                }).animate({
                  animator: 1
                }, {
                  step: function step(b, e) {
                    r.attr({
                      translateX: x + (n - x) * e.pos,
                      translateY: B + (v - B) * e.pos,
                      scaleX: z + (g - z) * e.pos,
                      scaleY: t + (k - t) * e.pos
                    });
                  }
                });
              } else r.attr({
                translateX: n,
                translateY: v,
                scaleX: g,
                scaleY: k
              });
            }
            d.styledMode || a.element.setAttribute("stroke-width", l(b.options[b.pointAttrToOptions && b.pointAttrToOptions["stroke-width"] || "borderWidth"], 1) / (g || 1));
            this.drawMapDataLabels();
          },
          drawMapDataLabels: function drawMapDataLabels() {
            B.prototype.drawDataLabels.call(this);
            this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect);
          },
          render: function render() {
            var b = this,
                e = B.prototype.render;
            b.chart.renderer.isVML && 3E3 < b.data.length ? setTimeout(function () {
              e.call(b);
            }) : e.call(b);
          },
          animate: function animate(b) {
            var e = this.options.animation,
                c = this.group,
                a = this.xAxis,
                d = this.yAxis,
                h = a.pos,
                l = d.pos;
            this.chart.renderer.isSVG && (!0 === e && (e = {
              duration: 1E3
            }), b ? c.attr({
              translateX: h + a.len / 2,
              translateY: l + d.len / 2,
              scaleX: .001,
              scaleY: .001
            }) : c.animate({
              translateX: h,
              translateY: l,
              scaleX: 1,
              scaleY: 1
            }, e));
          },
          animateDrilldown: function animateDrilldown(b) {
            var e = this.chart.plotBox,
                c = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1],
                a = c.bBox,
                d = this.chart.options.drilldown.animation;
            b || (b = Math.min(a.width / e.width, a.height / e.height), c.shapeArgs = {
              scaleX: b,
              scaleY: b,
              translateX: a.x,
              translateY: a.y
            }, this.points.forEach(function (b) {
              b.graphic && b.graphic.attr(c.shapeArgs).animate({
                scaleX: 1,
                scaleY: 1,
                translateX: 0,
                translateY: 0
              }, d);
            }));
          },
          drawLegendSymbol: d.drawRectangle,
          animateDrillupFrom: function animateDrillupFrom(b) {
            h.column.prototype.animateDrillupFrom.call(this, b);
          },
          animateDrillupTo: function animateDrillupTo(b) {
            h.column.prototype.animateDrillupTo.call(this, b);
          }
        }), k({
          applyOptions: function applyOptions(b, e) {
            var c = this.series;
            b = t.prototype.applyOptions.call(this, b, e);
            e = c.joinBy;
            c.mapData && c.mapMap && (e = t.prototype.getNestedProperty.call(b, e[1]), (e = "undefined" !== typeof e && c.mapMap[e]) ? (c.xyFromShape && (b.x = e._midX, b.y = e._midY), k(b, e)) : b.value = b.value || null);
            return b;
          },
          onMouseOver: function onMouseOver(b) {
            g.clearTimeout(this.colorInterval);
            if (null !== this.value || this.series.options.nullInteraction) t.prototype.onMouseOver.call(this, b);else this.series.onMouseOut(b);
          },
          zoomTo: function zoomTo() {
            var b = this.series;
            b.xAxis.setExtremes(this._minX, this._maxX, !1);
            b.yAxis.setExtremes(this._minY, this._maxY, !1);
            b.chart.redraw();
          }
        }, z));
        "";
      });
      w(d, "parts-map/MapLineSeries.js", [d["parts/Globals.js"], d["parts/Utilities.js"]], function (a, d) {
        d = d.seriesType;
        var n = a.seriesTypes;
        d("mapline", "map", {
          lineWidth: 1,
          fillColor: "none"
        }, {
          type: "mapline",
          colorProp: "stroke",
          pointAttrToOptions: {
            stroke: "color",
            "stroke-width": "lineWidth"
          },
          pointAttribs: function pointAttribs(a, d) {
            a = n.map.prototype.pointAttribs.call(this, a, d);
            a.fill = this.options.fillColor;
            return a;
          },
          drawLegendSymbol: n.line.prototype.drawLegendSymbol
        });
        "";
      });
      w(d, "parts-map/MapPointSeries.js", [d["parts/Globals.js"]], function (a) {
        var d = a.merge,
            t = a.Point,
            g = a.Series;
        a = a.seriesType;
        a("mappoint", "scatter", {
          dataLabels: {
            crop: !1,
            defer: !1,
            enabled: !0,
            formatter: function formatter() {
              return this.point.name;
            },
            overflow: !1,
            style: {
              color: "#000000"
            }
          }
        }, {
          type: "mappoint",
          forceDL: !0,
          drawDataLabels: function drawDataLabels() {
            g.prototype.drawDataLabels.call(this);
            this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect);
          }
        }, {
          applyOptions: function applyOptions(a, f) {
            a = "undefined" !== typeof a.lat && "undefined" !== typeof a.lon ? d(a, this.series.chart.fromLatLonToPoint(a)) : a;
            return t.prototype.applyOptions.call(this, a, f);
          }
        });
        "";
      });
      w(d, "parts-more/BubbleLegend.js", [d["parts/Globals.js"], d["parts/Color.js"], d["parts/Legend.js"], d["parts/Utilities.js"]], function (a, d, t, g) {
        "";

        var k = d.parse;
        d = g.addEvent;
        var f = g.arrayMax,
            n = g.arrayMin,
            A = g.isNumber,
            u = g.merge,
            r = g.objectEach,
            c = g.pick,
            l = g.stableSort,
            m = g.wrap,
            v = a.Series,
            z = a.Chart,
            x = a.noop,
            B = a.setOptions;
        B({
          legend: {
            bubbleLegend: {
              borderColor: void 0,
              borderWidth: 2,
              className: void 0,
              color: void 0,
              connectorClassName: void 0,
              connectorColor: void 0,
              connectorDistance: 60,
              connectorWidth: 1,
              enabled: !1,
              labels: {
                className: void 0,
                allowOverlap: !1,
                format: "",
                formatter: void 0,
                align: "right",
                style: {
                  fontSize: 10,
                  color: void 0
                },
                x: 0,
                y: 0
              },
              maxSize: 60,
              minSize: 10,
              legendIndex: 0,
              ranges: {
                value: void 0,
                borderColor: void 0,
                color: void 0,
                connectorColor: void 0
              },
              sizeBy: "area",
              sizeByAbsoluteValue: !1,
              zIndex: 1,
              zThreshold: 0
            }
          }
        });

        B = function () {
          function a(b, e) {
            this.options = this.symbols = this.visible = this.ranges = this.movementX = this.maxLabel = this.legendSymbol = this.legendItemWidth = this.legendItemHeight = this.legendItem = this.legendGroup = this.legend = this.fontMetrics = this.chart = void 0;
            this.setState = x;
            this.init(b, e);
          }

          a.prototype.init = function (b, e) {
            this.options = b;
            this.visible = !0;
            this.chart = e.chart;
            this.legend = e;
          };

          a.prototype.addToLegend = function (b) {
            b.splice(this.options.legendIndex, 0, this);
          };

          a.prototype.drawLegendSymbol = function (b) {
            var e = this.chart,
                a = this.options,
                d = c(b.options.itemDistance, 20),
                h = a.ranges;
            var m = a.connectorDistance;
            this.fontMetrics = e.renderer.fontMetrics(a.labels.style.fontSize.toString() + "px");
            h && h.length && A(h[0].value) ? (l(h, function (b, e) {
              return e.value - b.value;
            }), this.ranges = h, this.setOptions(), this.render(), e = this.getMaxLabelSize(), h = this.ranges[0].radius, b = 2 * h, m = m - h + e.width, m = 0 < m ? m : 0, this.maxLabel = e, this.movementX = "left" === a.labels.align ? m : 0, this.legendItemWidth = b + m + d, this.legendItemHeight = b + this.fontMetrics.h / 2) : b.options.bubbleLegend.autoRanges = !0;
          };

          a.prototype.setOptions = function () {
            var b = this.ranges,
                e = this.options,
                a = this.chart.series[e.seriesIndex],
                d = this.legend.baseline,
                h = {
              "z-index": e.zIndex,
              "stroke-width": e.borderWidth
            },
                l = {
              "z-index": e.zIndex,
              "stroke-width": e.connectorWidth
            },
                m = this.getLabelStyles(),
                f = a.options.marker.fillOpacity,
                g = this.chart.styledMode;
            b.forEach(function (p, q) {
              g || (h.stroke = c(p.borderColor, e.borderColor, a.color), h.fill = c(p.color, e.color, 1 !== f ? k(a.color).setOpacity(f).get("rgba") : a.color), l.stroke = c(p.connectorColor, e.connectorColor, a.color));
              b[q].radius = this.getRangeRadius(p.value);
              b[q] = u(b[q], {
                center: b[0].radius - b[q].radius + d
              });
              g || u(!0, b[q], {
                bubbleStyle: u(!1, h),
                connectorStyle: u(!1, l),
                labelStyle: m
              });
            }, this);
          };

          a.prototype.getLabelStyles = function () {
            var b = this.options,
                e = {},
                a = "left" === b.labels.align,
                d = this.legend.options.rtl;
            r(b.labels.style, function (b, c) {
              "color" !== c && "fontSize" !== c && "z-index" !== c && (e[c] = b);
            });
            return u(!1, e, {
              "font-size": b.labels.style.fontSize,
              fill: c(b.labels.style.color, "#000000"),
              "z-index": b.zIndex,
              align: d || a ? "right" : "left"
            });
          };

          a.prototype.getRangeRadius = function (b) {
            var e = this.options;
            return this.chart.series[this.options.seriesIndex].getRadius.call(this, e.ranges[e.ranges.length - 1].value, e.ranges[0].value, e.minSize, e.maxSize, b);
          };

          a.prototype.render = function () {
            var b = this.chart.renderer,
                e = this.options.zThreshold;
            this.symbols || (this.symbols = {
              connectors: [],
              bubbleItems: [],
              labels: []
            });
            this.legendSymbol = b.g("bubble-legend");
            this.legendItem = b.g("bubble-legend-item");
            this.legendSymbol.translateX = 0;
            this.legendSymbol.translateY = 0;
            this.ranges.forEach(function (b) {
              b.value >= e && this.renderRange(b);
            }, this);
            this.legendSymbol.add(this.legendItem);
            this.legendItem.add(this.legendGroup);
            this.hideOverlappingLabels();
          };

          a.prototype.renderRange = function (b) {
            var e = this.options,
                c = e.labels,
                a = this.chart.renderer,
                d = this.symbols,
                h = d.labels,
                l = b.center,
                m = Math.abs(b.radius),
                f = e.connectorDistance,
                g = c.align,
                k = c.style.fontSize;
            f = this.legend.options.rtl || "left" === g ? -f : f;
            c = e.connectorWidth;
            var r = this.ranges[0].radius,
                v = l - m - e.borderWidth / 2 + c / 2;
            k = k / 2 - (this.fontMetrics.h - k) / 2;
            var x = a.styledMode;
            "center" === g && (f = 0, e.connectorDistance = 0, b.labelStyle.align = "center");
            g = v + e.labels.y;
            var n = r + f + e.labels.x;
            d.bubbleItems.push(a.circle(r, l + ((v % 1 ? 1 : .5) - (c % 2 ? 0 : .5)), m).attr(x ? {} : b.bubbleStyle).addClass((x ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-symbol " + (e.className || "")).add(this.legendSymbol));
            d.connectors.push(a.path(a.crispLine(["M", r, v, "L", r + f, v], e.connectorWidth)).attr(x ? {} : b.connectorStyle).addClass((x ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (e.connectorClassName || "")).add(this.legendSymbol));
            b = a.text(this.formatLabel(b), n, g + k).attr(x ? {} : b.labelStyle).addClass("highcharts-bubble-legend-labels " + (e.labels.className || "")).add(this.legendSymbol);
            h.push(b);
            b.placed = !0;
            b.alignAttr = {
              x: n,
              y: g + k
            };
          };

          a.prototype.getMaxLabelSize = function () {
            var b, e;
            this.symbols.labels.forEach(function (c) {
              e = c.getBBox(!0);
              b = b ? e.width > b.width ? e : b : e;
            });
            return b || {};
          };

          a.prototype.formatLabel = function (b) {
            var e = this.options,
                c = e.labels.formatter;
            e = e.labels.format;
            var a = this.chart.numberFormatter;
            return e ? g.format(e, b) : c ? c.call(b) : a(b.value, 1);
          };

          a.prototype.hideOverlappingLabels = function () {
            var b = this.chart,
                e = this.symbols;
            !this.options.labels.allowOverlap && e && (b.hideOverlappingLabels(e.labels), e.labels.forEach(function (b, c) {
              b.newOpacity ? b.newOpacity !== b.oldOpacity && e.connectors[c].show() : e.connectors[c].hide();
            }));
          };

          a.prototype.getRanges = function () {
            var b = this.legend.bubbleLegend,
                e = b.options.ranges,
                a,
                d = Number.MAX_VALUE,
                h = -Number.MAX_VALUE;
            b.chart.series.forEach(function (b) {
              b.isBubble && !b.ignoreSeries && (a = b.zData.filter(A), a.length && (d = c(b.options.zMin, Math.min(d, Math.max(n(a), !1 === b.options.displayNegative ? b.options.zThreshold : -Number.MAX_VALUE))), h = c(b.options.zMax, Math.max(h, f(a)))));
            });
            var l = d === h ? [{
              value: h
            }] : [{
              value: d
            }, {
              value: (d + h) / 2
            }, {
              value: h,
              autoRanges: !0
            }];
            e.length && e[0].radius && l.reverse();
            l.forEach(function (b, c) {
              e && e[c] && (l[c] = u(!1, e[c], b));
            });
            return l;
          };

          a.prototype.predictBubbleSizes = function () {
            var b = this.chart,
                e = this.fontMetrics,
                c = b.legend.options,
                a = "horizontal" === c.layout,
                d = a ? b.legend.lastLineHeight : 0,
                h = b.plotSizeX,
                l = b.plotSizeY,
                m = b.series[this.options.seriesIndex];
            b = Math.ceil(m.minPxSize);
            var f = Math.ceil(m.maxPxSize);
            m = m.options.maxSize;
            var g = Math.min(l, h);
            if (c.floating || !/%$/.test(m)) e = f;else if (m = parseFloat(m), e = (g + d - e.h / 2) * m / 100 / (m / 100 + 1), a && l - e >= h || !a && h - e >= l) e = f;
            return [b, Math.ceil(e)];
          };

          a.prototype.updateRanges = function (b, c) {
            var e = this.legend.options.bubbleLegend;
            e.minSize = b;
            e.maxSize = c;
            e.ranges = this.getRanges();
          };

          a.prototype.correctSizes = function () {
            var b = this.legend,
                c = this.chart.series[this.options.seriesIndex];
            1 < Math.abs(Math.ceil(c.maxPxSize) - this.options.maxSize) && (this.updateRanges(this.options.minSize, c.maxPxSize), b.render());
          };

          return a;
        }();

        d(t, "afterGetAllItems", function (c) {
          var b = this.bubbleLegend,
              e = this.options,
              d = e.bubbleLegend,
              h = this.chart.getVisibleBubbleSeriesIndex();
          b && b.ranges && b.ranges.length && (d.ranges.length && (d.autoRanges = !!d.ranges[0].autoRanges), this.destroyItem(b));
          0 <= h && e.enabled && d.enabled && (d.seriesIndex = h, this.bubbleLegend = new a.BubbleLegend(d, this), this.bubbleLegend.addToLegend(c.allItems));
        });

        z.prototype.getVisibleBubbleSeriesIndex = function () {
          for (var c = this.series, b = 0; b < c.length;) {
            if (c[b] && c[b].isBubble && c[b].visible && c[b].zData.length) return b;
            b++;
          }

          return -1;
        };

        t.prototype.getLinesHeights = function () {
          var c = this.allItems,
              b = [],
              e = c.length,
              a,
              d = 0;

          for (a = 0; a < e; a++) {
            if (c[a].legendItemHeight && (c[a].itemHeight = c[a].legendItemHeight), c[a] === c[e - 1] || c[a + 1] && c[a]._legendItemPos[1] !== c[a + 1]._legendItemPos[1]) {
              b.push({
                height: 0
              });
              var l = b[b.length - 1];

              for (d; d <= a; d++) {
                c[d].itemHeight > l.height && (l.height = c[d].itemHeight);
              }

              l.step = a;
            }
          }

          return b;
        };

        t.prototype.retranslateItems = function (c) {
          var b,
              e,
              a,
              d = this.options.rtl,
              l = 0;
          this.allItems.forEach(function (h, m) {
            b = h.legendGroup.translateX;
            e = h._legendItemPos[1];
            if ((a = h.movementX) || d && h.ranges) a = d ? b - h.options.maxSize / 2 : b + a, h.legendGroup.attr({
              translateX: a
            });
            m > c[l].step && l++;
            h.legendGroup.attr({
              translateY: Math.round(e + c[l].height / 2)
            });
            h._legendItemPos[1] = e + c[l].height / 2;
          });
        };

        d(v, "legendItemClick", function () {
          var c = this.chart,
              b = this.visible,
              e = this.chart.legend;
          e && e.bubbleLegend && (this.visible = !b, this.ignoreSeries = b, c = 0 <= c.getVisibleBubbleSeriesIndex(), e.bubbleLegend.visible !== c && (e.update({
            bubbleLegend: {
              enabled: c
            }
          }), e.bubbleLegend.visible = c), this.visible = b);
        });
        m(z.prototype, "drawChartBox", function (c, b, e) {
          var a = this.legend,
              d = 0 <= this.getVisibleBubbleSeriesIndex();

          if (a && a.options.enabled && a.bubbleLegend && a.options.bubbleLegend.autoRanges && d) {
            var l = a.bubbleLegend.options;
            d = a.bubbleLegend.predictBubbleSizes();
            a.bubbleLegend.updateRanges(d[0], d[1]);
            l.placed || (a.group.placed = !1, a.allItems.forEach(function (b) {
              b.legendGroup.translateY = null;
            }));
            a.render();
            this.getMargins();
            this.axes.forEach(function (b) {
              b.visible && b.render();
              l.placed || (b.setScale(), b.updateNames(), r(b.ticks, function (b) {
                b.isNew = !0;
                b.isNewLabel = !0;
              }));
            });
            l.placed = !0;
            this.getMargins();
            c.call(this, b, e);
            a.bubbleLegend.correctSizes();
            a.retranslateItems(a.getLinesHeights());
          } else c.call(this, b, e), a && a.options.enabled && a.bubbleLegend && (a.render(), a.retranslateItems(a.getLinesHeights()));
        });
        a.BubbleLegend = B;
        return a.BubbleLegend;
      });
      w(d, "parts-more/BubbleSeries.js", [d["parts/Globals.js"], d["parts/Color.js"], d["parts/Point.js"], d["parts/Utilities.js"]], function (a, d, t, g) {
        var k = d.parse,
            f = g.arrayMax,
            n = g.arrayMin,
            A = g.clamp,
            u = g.extend,
            r = g.isNumber,
            c = g.pick,
            l = g.pInt;
        d = g.seriesType;
        g = a.Axis;
        var m = a.noop,
            v = a.Series,
            z = a.seriesTypes;
        d("bubble", "scatter", {
          dataLabels: {
            formatter: function formatter() {
              return this.point.z;
            },
            inside: !0,
            verticalAlign: "middle"
          },
          animationLimit: 250,
          marker: {
            lineColor: null,
            lineWidth: 1,
            fillOpacity: .5,
            radius: null,
            states: {
              hover: {
                radiusPlus: 0
              }
            },
            symbol: "circle"
          },
          minSize: 8,
          maxSize: "20%",
          softThreshold: !1,
          states: {
            hover: {
              halo: {
                size: 5
              }
            }
          },
          tooltip: {
            pointFormat: "({point.x}, {point.y}), Size: {point.z}"
          },
          turboThreshold: 0,
          zThreshold: 0,
          zoneAxis: "z"
        }, {
          pointArrayMap: ["y", "z"],
          parallelArrays: ["x", "y", "z"],
          trackerGroups: ["group", "dataLabelsGroup"],
          specialGroup: "group",
          bubblePadding: !0,
          zoneAxis: "z",
          directTouch: !0,
          isBubble: !0,
          pointAttribs: function pointAttribs(c, a) {
            var d = this.options.marker.fillOpacity;
            c = v.prototype.pointAttribs.call(this, c, a);
            1 !== d && (c.fill = k(c.fill).setOpacity(d).get("rgba"));
            return c;
          },
          getRadii: function getRadii(c, a, d) {
            var b = this.zData,
                e = this.yData,
                l = d.minPxSize,
                m = d.maxPxSize,
                h = [];
            var f = 0;

            for (d = b.length; f < d; f++) {
              var g = b[f];
              h.push(this.getRadius(c, a, l, m, g, e[f]));
            }

            this.radii = h;
          },
          getRadius: function getRadius(c, a, d, b, e, l) {
            var m = this.options,
                h = "width" !== m.sizeBy,
                f = m.zThreshold,
                g = a - c,
                k = .5;
            if (null === l || null === e) return null;

            if (r(e)) {
              m.sizeByAbsoluteValue && (e = Math.abs(e - f), g = Math.max(a - f, Math.abs(c - f)), c = 0);
              if (e < c) return d / 2 - 1;
              0 < g && (k = (e - c) / g);
            }

            h && 0 <= k && (k = Math.sqrt(k));
            return Math.ceil(d + k * (b - d)) / 2;
          },
          animate: function animate(c) {
            !c && this.points.length < this.options.animationLimit && this.points.forEach(function (c) {
              var a = c.graphic;

              if (a && a.width) {
                var b = {
                  x: a.x,
                  y: a.y,
                  width: a.width,
                  height: a.height
                };
                a.attr({
                  x: c.plotX,
                  y: c.plotY,
                  width: 1,
                  height: 1
                });
                a.animate(b, this.options.animation);
              }
            }, this);
          },
          hasData: function hasData() {
            return !!this.processedXData.length;
          },
          translate: function translate() {
            var c,
                a = this.data,
                d = this.radii;
            z.scatter.prototype.translate.call(this);

            for (c = a.length; c--;) {
              var b = a[c];
              var e = d ? d[c] : 0;
              r(e) && e >= this.minPxSize / 2 ? (b.marker = u(b.marker, {
                radius: e,
                width: 2 * e,
                height: 2 * e
              }), b.dlBox = {
                x: b.plotX - e,
                y: b.plotY - e,
                width: 2 * e,
                height: 2 * e
              }) : b.shapeArgs = b.plotY = b.dlBox = void 0;
            }
          },
          alignDataLabel: z.column.prototype.alignDataLabel,
          buildKDTree: m,
          applyZones: m
        }, {
          haloPath: function haloPath(c) {
            return t.prototype.haloPath.call(this, 0 === c ? 0 : (this.marker ? this.marker.radius || 0 : 0) + c);
          },
          ttBelow: !1
        });

        g.prototype.beforePadding = function () {
          var a = this,
              d = this.len,
              m = this.chart,
              b = 0,
              e = d,
              g = this.isXAxis,
              k = g ? "xData" : "yData",
              v = this.min,
              z = {},
              t = Math.min(m.plotWidth, m.plotHeight),
              u = Number.MAX_VALUE,
              w = -Number.MAX_VALUE,
              D = this.max - v,
              E = d / D,
              F = [];
          this.series.forEach(function (b) {
            var e = b.options;
            !b.bubblePadding || !b.visible && m.options.chart.ignoreHiddenSeries || (a.allowZoomOutside = !0, F.push(b), g && (["minSize", "maxSize"].forEach(function (b) {
              var c = e[b],
                  a = /%$/.test(c);
              c = l(c);
              z[b] = a ? t * c / 100 : c;
            }), b.minPxSize = z.minSize, b.maxPxSize = Math.max(z.maxSize, z.minSize), b = b.zData.filter(r), b.length && (u = c(e.zMin, A(n(b), !1 === e.displayNegative ? e.zThreshold : -Number.MAX_VALUE, u)), w = c(e.zMax, Math.max(w, f(b))))));
          });
          F.forEach(function (c) {
            var d = c[k],
                l = d.length;
            g && c.getRadii(u, w, c);
            if (0 < D) for (; l--;) {
              if (r(d[l]) && a.dataMin <= d[l] && d[l] <= a.max) {
                var m = c.radii ? c.radii[l] : 0;
                b = Math.min((d[l] - v) * E - m, b);
                e = Math.max((d[l] - v) * E + m, e);
              }
            }
          });
          F.length && 0 < D && !this.isLog && (e -= d, E *= (d + Math.max(0, b) - Math.min(e, d)) / d, [["min", "userMin", b], ["max", "userMax", e]].forEach(function (b) {
            "undefined" === typeof c(a.options[b[0]], a[b[1]]) && (a[b[0]] += b[2] / E);
          }));
        };

        "";
      });
      w(d, "parts-map/MapBubbleSeries.js", [d["parts/Globals.js"], d["parts/Point.js"], d["parts/Utilities.js"]], function (a, d, t) {
        var g = t.merge;
        t = t.seriesType;
        var k = a.seriesTypes;
        k.bubble && t("mapbubble", "bubble", {
          animationLimit: 500,
          tooltip: {
            pointFormat: "{point.name}: {point.z}"
          }
        }, {
          xyFromShape: !0,
          type: "mapbubble",
          pointArrayMap: ["z"],
          getMapData: k.map.prototype.getMapData,
          getBox: k.map.prototype.getBox,
          setData: k.map.prototype.setData,
          setOptions: k.map.prototype.setOptions
        }, {
          applyOptions: function applyOptions(a, n) {
            return a && "undefined" !== typeof a.lat && "undefined" !== typeof a.lon ? d.prototype.applyOptions.call(this, g(a, this.series.chart.fromLatLonToPoint(a)), n) : k.map.prototype.pointClass.prototype.applyOptions.call(this, a, n);
          },
          isValid: function isValid() {
            return "number" === typeof this.z;
          },
          ttBelow: !1
        });
        "";
      });
      w(d, "parts-map/HeatmapSeries.js", [d["parts/Globals.js"], d["mixins/legend-symbol.js"], d["parts/Utilities.js"]], function (a, d, t) {
        var g = t.clamp,
            k = t.extend,
            f = t.fireEvent,
            n = t.merge,
            w = t.pick;
        t = t.seriesType;
        var u = a.colorMapPointMixin,
            r = a.noop,
            c = a.Series,
            l = a.seriesTypes;
        t("heatmap", "scatter", {
          animation: !1,
          borderWidth: 0,
          nullColor: "#f7f7f7",
          dataLabels: {
            formatter: function formatter() {
              return this.point.value;
            },
            inside: !0,
            verticalAlign: "middle",
            crop: !1,
            overflow: !1,
            padding: 0
          },
          marker: null,
          pointRange: null,
          tooltip: {
            pointFormat: "{point.x}, {point.y}: {point.value}<br/>"
          },
          states: {
            hover: {
              halo: !1,
              brightness: .2
            }
          }
        }, n(a.colorMapSeriesMixin, {
          pointArrayMap: ["y", "value"],
          hasPointSpecificOptions: !0,
          getExtremesFromAll: !0,
          directTouch: !0,
          init: function init() {
            l.scatter.prototype.init.apply(this, arguments);
            var c = this.options;
            c.pointRange = w(c.pointRange, c.colsize || 1);
            this.yAxis.axisPointRange = c.rowsize || 1;
          },
          translate: function translate() {
            this.generatePoints();
            var c = this.options,
                a = c.colsize,
                d = c.pointPadding,
                l = void 0 === d ? 0 : d;
            c = c.rowsize;
            d = this.points;

            var k = this.xAxis,
                h = this.yAxis,
                b = (void 0 === a ? 1 : a) / 2,
                e = (void 0 === c ? 1 : c) / 2,
                r = this.pointPlacementToXValue(),
                n = function n(b) {
              return Math.round(g(k.translate(b, !1, !1, !1, !0, r), 0, k.len));
            };

            d.forEach(function (c) {
              var a = n(c.x - b),
                  d = n(c.x + b),
                  m = Math.round(g(h.translate(c.y - e, !1, !0, !1, !0), 0, h.len)),
                  f = Math.round(g(h.translate(c.y + e, !1, !0, !1, !0), 0, h.len)),
                  k = w(c.pointPadding, l);
              c.plotX = c.clientX = (a + d) / 2;
              c.plotY = (m + f) / 2;
              c.shapeType = "rect";
              c.shapeArgs = {
                x: Math.min(a, d) + k,
                y: Math.min(m, f) + k,
                width: Math.max(Math.abs(d - a) - 2 * k, 0),
                height: Math.max(Math.abs(f - m) - 2 * k, 0)
              };
            });
            f(this, "afterTranslate");
          },
          drawPoints: function drawPoints() {
            var c = this.chart.styledMode ? "css" : "animate";
            l.column.prototype.drawPoints.call(this);
            this.points.forEach(function (a) {
              a.graphic[c](this.colorAttribs(a));
            }, this);
          },
          hasData: function hasData() {
            return !!this.processedXData.length;
          },
          getValidPoints: function getValidPoints(a, d) {
            return c.prototype.getValidPoints.call(this, a, d, !0);
          },
          animate: r,
          getBox: r,
          drawLegendSymbol: d.drawRectangle,
          alignDataLabel: l.column.prototype.alignDataLabel,
          getExtremes: function getExtremes() {
            c.prototype.getExtremes.call(this, this.valueData);
            this.valueMin = this.dataMin;
            this.valueMax = this.dataMax;
            c.prototype.getExtremes.call(this);
          }
        }), k({
          haloPath: function haloPath(c) {
            if (!c) return [];
            var a = this.shapeArgs;
            return ["M", a.x - c, a.y - c, "L", a.x - c, a.y + a.height + c, a.x + a.width + c, a.y + a.height + c, a.x + a.width + c, a.y - c, "Z"];
          }
        }, u));
        "";
      });
      w(d, "parts-map/GeoJSON.js", [d["parts/Globals.js"], d["parts/Utilities.js"]], function (a, d) {
        function n(a, c) {
          var d,
              f = !1,
              g = a.x,
              k = a.y;
          a = 0;

          for (d = c.length - 1; a < c.length; d = a++) {
            var r = c[a][1] > k;
            var n = c[d][1] > k;
            r !== n && g < (c[d][0] - c[a][0]) * (k - c[a][1]) / (c[d][1] - c[a][1]) + c[a][0] && (f = !f);
          }

          return f;
        }

        var g = d.error,
            k = d.extend,
            f = d.format,
            w = d.merge;
        d = d.wrap;
        var A = a.Chart,
            u = a.win;

        A.prototype.transformFromLatLon = function (a, c) {
          var d,
              f = (null === (d = this.userOptions.chart) || void 0 === d ? void 0 : d.proj4) || u.proj4;
          if (!f) return g(21, !1, this), {
            x: 0,
            y: null
          };
          a = f(c.crs, [a.lon, a.lat]);
          d = c.cosAngle || c.rotation && Math.cos(c.rotation);
          f = c.sinAngle || c.rotation && Math.sin(c.rotation);
          a = c.rotation ? [a[0] * d + a[1] * f, -a[0] * f + a[1] * d] : a;
          return {
            x: ((a[0] - (c.xoffset || 0)) * (c.scale || 1) + (c.xpan || 0)) * (c.jsonres || 1) + (c.jsonmarginX || 0),
            y: (((c.yoffset || 0) - a[1]) * (c.scale || 1) + (c.ypan || 0)) * (c.jsonres || 1) - (c.jsonmarginY || 0)
          };
        };

        A.prototype.transformToLatLon = function (a, c) {
          if ("undefined" === typeof u.proj4) g(21, !1, this);else {
            a = {
              x: ((a.x - (c.jsonmarginX || 0)) / (c.jsonres || 1) - (c.xpan || 0)) / (c.scale || 1) + (c.xoffset || 0),
              y: ((-a.y - (c.jsonmarginY || 0)) / (c.jsonres || 1) + (c.ypan || 0)) / (c.scale || 1) + (c.yoffset || 0)
            };
            var d = c.cosAngle || c.rotation && Math.cos(c.rotation),
                f = c.sinAngle || c.rotation && Math.sin(c.rotation);
            c = u.proj4(c.crs, "WGS84", c.rotation ? {
              x: a.x * d + a.y * -f,
              y: a.x * f + a.y * d
            } : a);
            return {
              lat: c.y,
              lon: c.x
            };
          }
        };

        A.prototype.fromPointToLatLon = function (a) {
          var c = this.mapTransforms,
              d;

          if (c) {
            for (d in c) {
              if (Object.hasOwnProperty.call(c, d) && c[d].hitZone && n({
                x: a.x,
                y: -a.y
              }, c[d].hitZone.coordinates[0])) return this.transformToLatLon(a, c[d]);
            }

            return this.transformToLatLon(a, c["default"]);
          }

          g(22, !1, this);
        };

        A.prototype.fromLatLonToPoint = function (a) {
          var c = this.mapTransforms,
              d;
          if (!c) return g(22, !1, this), {
            x: 0,
            y: null
          };

          for (d in c) {
            if (Object.hasOwnProperty.call(c, d) && c[d].hitZone) {
              var f = this.transformFromLatLon(a, c[d]);
              if (n({
                x: f.x,
                y: -f.y
              }, c[d].hitZone.coordinates[0])) return f;
            }
          }

          return this.transformFromLatLon(a, c["default"]);
        };

        a.geojson = function (a, c, d) {
          var l = [],
              g = [],
              n = function n(c) {
            var a,
                d = c.length;
            g.push("M");

            for (a = 0; a < d; a++) {
              1 === a && g.push("L"), g.push(c[a][0], -c[a][1]);
            }
          };

          c = c || "map";
          a.features.forEach(function (a) {
            var d = a.geometry,
                f = d.type;
            d = d.coordinates;
            a = a.properties;
            var b;
            g = [];
            "map" === c || "mapbubble" === c ? ("Polygon" === f ? (d.forEach(n), g.push("Z")) : "MultiPolygon" === f && (d.forEach(function (b) {
              b.forEach(n);
            }), g.push("Z")), g.length && (b = {
              path: g
            })) : "mapline" === c ? ("LineString" === f ? n(d) : "MultiLineString" === f && d.forEach(n), g.length && (b = {
              path: g
            })) : "mappoint" === c && "Point" === f && (b = {
              x: d[0],
              y: -d[1]
            });
            b && l.push(k(b, {
              name: a.name || a.NAME,
              properties: a
            }));
          });
          d && a.copyrightShort && (d.chart.mapCredits = f(d.chart.options.credits.mapText, {
            geojson: a
          }), d.chart.mapCreditsFull = f(d.chart.options.credits.mapTextFull, {
            geojson: a
          }));
          return l;
        };

        d(A.prototype, "addCredits", function (a, c) {
          c = w(!0, this.options.credits, c);
          this.mapCredits && (c.href = null);
          a.call(this, c);
          this.credits && this.mapCreditsFull && this.credits.attr({
            title: this.mapCreditsFull
          });
        });
      });
      w(d, "parts-map/Map.js", [d["parts/Globals.js"], d["parts/Utilities.js"]], function (a, d) {
        function n(c, a, d, f, g, k, n, h) {
          return ["M", c + g, a, "L", c + d - k, a, "C", c + d - k / 2, a, c + d, a + k / 2, c + d, a + k, "L", c + d, a + f - n, "C", c + d, a + f - n / 2, c + d - n / 2, a + f, c + d - n, a + f, "L", c + h, a + f, "C", c + h / 2, a + f, c, a + f - h / 2, c, a + f - h, "L", c, a + g, "C", c, a + g / 2, c + g / 2, a, c + g, a, "Z"];
        }

        var g = d.extend,
            k = d.merge,
            f = d.pick,
            w = a.Chart;
        d = a.defaultOptions;
        var A = a.Renderer,
            u = a.SVGRenderer,
            r = a.VMLRenderer;
        g(d.lang, {
          zoomIn: "Zoom in",
          zoomOut: "Zoom out"
        });
        d.mapNavigation = {
          buttonOptions: {
            alignTo: "plotBox",
            align: "left",
            verticalAlign: "top",
            x: 0,
            width: 18,
            height: 18,
            padding: 5,
            style: {
              fontSize: "15px",
              fontWeight: "bold"
            },
            theme: {
              "stroke-width": 1,
              "text-align": "center"
            }
          },
          buttons: {
            zoomIn: {
              onclick: function onclick() {
                this.mapZoom(.5);
              },
              text: "+",
              y: 0
            },
            zoomOut: {
              onclick: function onclick() {
                this.mapZoom(2);
              },
              text: "-",
              y: 28
            }
          },
          mouseWheelSensitivity: 1.1
        };

        a.splitPath = function (a) {
          var c;
          a = a.replace(/([A-Za-z])/g, " $1 ");
          a = a.replace(/^\s*/, "").replace(/\s*$/, "");
          a = a.split(/[ ,]+/);

          for (c = 0; c < a.length; c++) {
            /[a-zA-Z]/.test(a[c]) || (a[c] = parseFloat(a[c]));
          }

          return a;
        };

        a.maps = {};

        u.prototype.symbols.topbutton = function (a, d, f, g, k) {
          return n(a - 1, d - 1, f, g, k.r, k.r, 0, 0);
        };

        u.prototype.symbols.bottombutton = function (a, d, f, g, k) {
          return n(a - 1, d - 1, f, g, 0, 0, k.r, k.r);
        };

        A === r && ["topbutton", "bottombutton"].forEach(function (a) {
          r.prototype.symbols[a] = u.prototype.symbols[a];
        });

        a.Map = a.mapChart = function (c, d, g) {
          var l = "string" === typeof c || c.nodeName,
              m = arguments[l ? 1 : 0],
              n = m,
              r = {
            endOnTick: !1,
            visible: !1,
            minPadding: 0,
            maxPadding: 0,
            startOnTick: !1
          },
              h = a.getOptions().credits;
          var b = m.series;
          m.series = null;
          m = k({
            chart: {
              panning: "xy",
              type: "map"
            },
            credits: {
              mapText: f(h.mapText, " \xA9 <a href=\"{geojson.copyrightUrl}\">{geojson.copyrightShort}</a>"),
              mapTextFull: f(h.mapTextFull, "{geojson.copyright}")
            },
            tooltip: {
              followTouchMove: !1
            },
            xAxis: r,
            yAxis: k(r, {
              reversed: !0
            })
          }, m, {
            chart: {
              inverted: !1,
              alignTicks: !1
            }
          });
          m.series = n.series = b;
          return l ? new w(c, m, g) : new w(m, d);
        };
      });
      w(d, "masters/modules/map.src.js", [], function () {});
    }); //# sourceMappingURL=map.js.map

    /***/

  },

  /***/
  "./node_modules/leaflet/dist/leaflet.css":
  /*!***********************************************!*\
    !*** ./node_modules/leaflet/dist/leaflet.css ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesLeafletDistLeafletCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./leaflet.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/leaflet/dist/leaflet.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/app/schland/layers/layers-demo.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/schland/layers/layers-demo.component.ts ***!
    \*********************************************************/

  /*! exports provided: LeafletLayersDemoComponent */

  /***/
  function srcAppSchlandLayersLayersDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeafletLayersDemoComponent", function () {
      return LeafletLayersDemoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var highcharts_modules_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts/modules/map */
    "./node_modules/highcharts/modules/map.js");
    /* harmony import */


    var highcharts_modules_map__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts_modules_map__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");

    function LeafletLayersDemoComponent_ng_container_0_ng_container_2_highcharts_chart_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "highcharts-chart", 4);
      }

      if (rf & 2) {
        var u_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx_r32.Highcharts)("constructorType", "mapChart")("options", u_r31.chartOptions);
      }
    }

    function LeafletLayersDemoComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeafletLayersDemoComponent_ng_container_0_ng_container_2_highcharts_chart_1_Template, 1, 3, "highcharts-chart", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var u_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", u_r31.questionId);
      }
    }

    function LeafletLayersDemoComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeafletLayersDemoComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var map_r29 = ctx.ngIf;

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r28.questionId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", map_r29);
      }
    }

    highcharts_modules_map__WEBPACK_IMPORTED_MODULE_2___default()(highcharts__WEBPACK_IMPORTED_MODULE_1__);

    var LeafletLayersDemoComponent = function LeafletLayersDemoComponent(http) {
      _classCallCheck(this, LeafletLayersDemoComponent);

      this.http = http;
      this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__; // Highcharts, it's Highcharts

      this.world = this.http.get('./assets/world3.json').toPromise();
      this.data = this.http.get("http://".concat(window.location.hostname, ":8080/heat?responseDate=").concat(new Date(new Date().getTime() - 3600 * 24 * 1000).toISOString().substring(0, 10))).toPromise();
      this.chartMap = Promise.all([this.world, this.data]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            mapWorld = _ref2[0],
            data = _ref2[1];

        return Object.entries(data).map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              questionId = _ref4[0],
              d = _ref4[1];

          return {
            questionId: questionId,
            chartOptions: {
              chart: {
                map: mapWorld
              },
              title: {
                text: ''
              },
              mapNavigation: {
                enabled: false,
                buttonOptions: {
                  verticalAlign: 'bottom'
                }
              },
              colorAxis: {
                dataClasses: [{
                  from: 0,
                  to: 1,
                  color: '#FFFFFF'
                }, {
                  from: 1,
                  to: 20,
                  color: '#BCFFF7'
                }, {
                  from: 20,
                  to: 40,
                  color: '#91E5DB'
                }, {
                  from: 40,
                  to: 60,
                  color: '#00BCA6'
                }, {
                  from: 60,
                  to: 80,
                  color: '#00675B'
                }, {
                  from: 80,
                  to: 100,
                  color: '#002C27'
                }],
                min: 1,
                max: 100,
                type: 'linear',
                minColor: '#FFFFFF',
                maxColor: '#000000'
              },
              tooltip: {
                headerFormat: '',
                pointFormat: '<strong>PLZ {point.properties.plz}XXX:</strong> {point.value}%'
              },
              legend: {
                enabled: false
              },
              series: [{
                data: d.map(function (_ref5) {
                  var _ref6 = _slicedToArray(_ref5, 2),
                      plz = _ref6[0],
                      value = _ref6[1];

                  return [String(plz).slice(0, 2), Math.ceil(value)];
                }),
                keys: ['plz', 'value'],
                name: '',
                joinBy: 'plz',
                states: {
                  hover: {
                    color: '#a4edba'
                  }
                },
                dataLabels: {
                  enabled: false
                }
              }]
            }
          };
        });
      });
    };

    LeafletLayersDemoComponent.ɵfac = function LeafletLayersDemoComponent_Factory(t) {
      return new (t || LeafletLayersDemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    LeafletLayersDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeafletLayersDemoComponent,
      selectors: [["leafletLayersDemo"]],
      inputs: {
        questionId: "questionId"
      },
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [3, "ngSwitch"], [4, "ngFor", "ngForOf"], ["style", "width: 100%; height:100%; display: block;", 3, "Highcharts", "constructorType", "options", 4, "ngSwitchCase"], [2, "width", "100%", "height", "100%", "display", "block", 3, "Highcharts", "constructorType", "options"]],
      template: function LeafletLayersDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeafletLayersDemoComponent_ng_container_0_Template, 3, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.chartMap));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafletLayersDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'leafletLayersDemo',
          templateUrl: './layers-demo.component.html'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, {
        questionId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/schland/schland-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/schland/schland-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SchlandPageRoutingModule */

  /***/
  function srcAppSchlandSchlandRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchlandPageRoutingModule", function () {
      return SchlandPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _schland_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./schland.page */
    "./src/app/schland/schland.page.ts");

    var routes = [{
      path: '',
      component: _schland_page__WEBPACK_IMPORTED_MODULE_2__["SchlandPage"]
    }];

    var SchlandPageRoutingModule = function SchlandPageRoutingModule() {
      _classCallCheck(this, SchlandPageRoutingModule);
    };

    SchlandPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SchlandPageRoutingModule
    });
    SchlandPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SchlandPageRoutingModule_Factory(t) {
        return new (t || SchlandPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SchlandPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchlandPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/schland/schland.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/schland/schland.module.ts ***!
    \*******************************************/

  /*! exports provided: SchlandPageModule */

  /***/
  function srcAppSchlandSchlandModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchlandPageModule", function () {
      return SchlandPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _schland_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./schland-routing.module */
    "./src/app/schland/schland-routing.module.ts");
    /* harmony import */


    var _schland_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./schland.page */
    "./src/app/schland/schland.page.ts");
    /* harmony import */


    var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @asymmetrik/ngx-leaflet */
    "./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var _layers_layers_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layers/layers-demo.component */
    "./src/app/schland/layers/layers-demo.component.ts");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/__ivy_ngcc__/fesm2015/highcharts-angular.js");

    var SchlandPageModule = function SchlandPageModule() {
      _classCallCheck(this, SchlandPageModule);
    };

    SchlandPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SchlandPageModule
    });
    SchlandPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SchlandPageModule_Factory(t) {
        return new (t || SchlandPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _schland_routing_module__WEBPACK_IMPORTED_MODULE_4__["SchlandPageRoutingModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__["LeafletModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_8__["HighchartsChartModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SchlandPageModule, {
        declarations: [_schland_page__WEBPACK_IMPORTED_MODULE_5__["SchlandPage"], _layers_layers_demo_component__WEBPACK_IMPORTED_MODULE_7__["LeafletLayersDemoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _schland_routing_module__WEBPACK_IMPORTED_MODULE_4__["SchlandPageRoutingModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__["LeafletModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_8__["HighchartsChartModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchlandPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _schland_routing_module__WEBPACK_IMPORTED_MODULE_4__["SchlandPageRoutingModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__["LeafletModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_8__["HighchartsChartModule"]],
          declarations: [_schland_page__WEBPACK_IMPORTED_MODULE_5__["SchlandPage"], _layers_layers_demo_component__WEBPACK_IMPORTED_MODULE_7__["LeafletLayersDemoComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/schland/schland.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/schland/schland.page.ts ***!
    \*****************************************/

  /*! exports provided: SchlandPage */

  /***/
  function srcAppSchlandSchlandPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchlandPage", function () {
      return SchlandPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet/dist/leaflet.css */
    "./node_modules/leaflet/dist/leaflet.css");
    /* harmony import */


    var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _layers_layers_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layers/layers-demo.component */
    "./src/app/schland/layers/layers-demo.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // import * as L from 'leaflet';


    function SchlandPage_ion_segment_button_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-segment-button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var q_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", q_r24.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r24.emoji);
      }
    }

    function SchlandPage_ng_container_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var q_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r25.question, " ");
      }
    }

    function SchlandPage_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SchlandPage_ng_container_13_div_1_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var q_r25 = ctx.$implicit;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", q_r25.id === ctx_r23.mode);
      }
    }

    var SchlandPage =
    /*#__PURE__*/
    function () {
      function SchlandPage(questionService) {
        _classCallCheck(this, SchlandPage);

        this.questionService = questionService;
        this.mode = this.questionService.getAllMoodQuestions()[0].id;
      }

      _createClass(SchlandPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SchlandPage;
    }();

    SchlandPage.ɵfac = function SchlandPage_Factory(t) {
      return new (t || SchlandPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]));
    };

    SchlandPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SchlandPage,
      selectors: [["app-schland"]],
      decls: 14,
      vars: 4,
      consts: [["slot", "start"], [3, "questionId"], [3, "value", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "value"], ["style", "text-align: center; background: #BCFFF7; padding: 0.2rem; color: #002C27", 4, "ngIf"], [2, "text-align", "center", "background", "#BCFFF7", "padding", "0.2rem", "color", "#002C27"]],
      template: function SchlandPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Heatmap ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "leafletLayersDemo", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-segment", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function SchlandPage_Template_ion_segment_ionChange_10_listener($event) {
            return ctx.mode = $event.detail.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SchlandPage_ion_segment_button_11_Template, 3, 2, "ion-segment-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SchlandPage_ng_container_13_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questionId", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questionService.getAllMoodQuestions());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questionService.getAllMoodQuestions());
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _layers_layers_demo_component__WEBPACK_IMPORTED_MODULE_4__["LeafletLayersDemoComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["ion-segment-button[_ngcontent-%COMP%] {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  min-width: 0;\n}\nion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  -webkit-filter: grayscale(0%);\n          filter: grayscale(0%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rc2NoZWNrZXIvUHJvamVjdHMvd2lydnN2aXJ1cy93ZXZzdmlydXMtZmUvc3JjL2FwcC9zY2hsYW5kL3NjaGxhbmQucGFnZS5zY3NzIiwic3JjL2FwcC9zY2hsYW5kL3NjaGxhbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2NobGFuZC9zY2hsYW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICBtaW4td2lkdGg6IDA7XG5cbiAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSk7XG4gIH1cbn1cblxuIiwiaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIG1pbi13aWR0aDogMDtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchlandPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-schland',
          templateUrl: './schland.page.html',
          styleUrls: ['./schland.page.scss']
        }]
      }], function () {
        return [{
          type: _services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=schland-schland-module-es5.js.map