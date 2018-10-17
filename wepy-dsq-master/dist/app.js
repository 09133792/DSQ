'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/authorize', 'pages/home', 'pages/home_detail', 'pages/classify', 'pages/shop_cart', 'pages/info', 'pages/search', 'pages/test', 'pages/sign_in', 'pages/exchange_goods', 'pages/wholesale', 'pages/replenishment_goods', 'pages/register', 'pages/order', 'pages/reorder', 'pages/pay_success', 'pages/points', 'pages/points_more', 'pages/points_rule', 'pages/collection', 'pages/messages', 'pages/setting', 'pages/goods_detail', 'pages/comfire_order', 'pages/address', 'pages/order_detail', 'pages/filter', 'pages/logistics', 'pages/comment', 'pages/comment_add'],
      window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#FFFFFF',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: false,
        backgroundColor: '#EFEFEF'

      },
      "tabBar": {
        "color": "#999999",
        "selectedColor": "#ff6a3c",
        "backgroundColor": "#ffffff",
        "borderStyle": "black",
        "list": [{
          "pagePath": "pages/home",
          "text": "首页",
          "iconPath": "images/icon_home.png",
          "selectedIconPath": "images/icon_home_active.png"
        }, {
          "pagePath": "pages/classify",
          "text": "排行榜",
          "iconPath": "images/icon_classify.png",
          "selectedIconPath": "images/icon_classify_active.png"
        }, {
          "pagePath": "pages/points",
          "text": "足迹",
          "iconPath": "images/icon_info.png",
          "selectedIconPath": "images/icon_info_active.png"
        }]
      }
    };
    _this.globalData = {};

    _this.use('requestfix');
    _this.use('promisify');

    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('云开发初始化');
                if (!wx.cloud) {
                  console.error('请使用 2.2.3 或以上的基础库以使用云能力');
                } else {
                  wx.cloud.init({
                    traceUser: true
                  });
                }

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch(_x) {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxEYXRhIiwidXNlIiwib3B0aW9uIiwiY29uc29sZSIsImxvZyIsInd4IiwiY2xvdWQiLCJlcnJvciIsImluaXQiLCJ0cmFjZVVzZXIiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFzRUUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQXBFZEEsTUFvRWMsR0FwRUw7QUFDUEMsYUFBTyxDQUNMLGlCQURLLEVBRUwsWUFGSyxFQUdMLG1CQUhLLEVBSUwsZ0JBSkssRUFLTCxpQkFMSyxFQU1MLFlBTkssRUFPTCxjQVBLLEVBUUwsWUFSSyxFQVNMLGVBVEssRUFVTCxzQkFWSyxFQVdMLGlCQVhLLEVBWUwsMkJBWkssRUFhTCxnQkFiSyxFQWNMLGFBZEssRUFlTCxlQWZLLEVBZ0JMLG1CQWhCSyxFQWlCTCxjQWpCSyxFQWtCTCxtQkFsQkssRUFtQkwsbUJBbkJLLEVBb0JMLGtCQXBCSyxFQXFCTCxnQkFyQkssRUFzQkwsZUF0QkssRUF1Qkwsb0JBdkJLLEVBd0JMLHFCQXhCSyxFQXlCTCxlQXpCSyxFQTBCTCxvQkExQkssRUEyQkwsY0EzQkssRUE0QkwsaUJBNUJLLEVBNkJMLGVBN0JLLEVBOEJMLG1CQTlCSyxDQURBO0FBaUNQQyxjQUFRO0FBQ05DLDZCQUFxQixNQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCLE9BSmxCO0FBS05DLCtCQUF1QixLQUxqQjtBQU1OQyx5QkFBaUI7O0FBTlgsT0FqQ0Q7QUEwQ1AsZ0JBQVU7QUFDUixpQkFBUyxTQUREO0FBRVIseUJBQWlCLFNBRlQ7QUFHUiwyQkFBbUIsU0FIWDtBQUlSLHVCQUFlLE9BSlA7QUFLUixnQkFBUSxDQUFDO0FBQ1Asc0JBQVksWUFETDtBQUVQLGtCQUFRLElBRkQ7QUFHUCxzQkFBWSxzQkFITDtBQUlQLDhCQUFvQjtBQUpiLFNBQUQsRUFLTDtBQUNELHNCQUFZLGdCQURYO0FBRUQsa0JBQVEsS0FGUDtBQUdELHNCQUFZLDBCQUhYO0FBSUQsOEJBQW9CO0FBSm5CLFNBTEssRUFVTDtBQUNELHNCQUFZLGNBRFg7QUFFRCxrQkFBUSxJQUZQO0FBR0Qsc0JBQVksc0JBSFg7QUFJRCw4QkFBb0I7QUFKbkIsU0FWSztBQUxBO0FBMUNILEtBb0VLO0FBQUEsVUFGZEMsVUFFYyxHQUZELEVBRUM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDs7QUFIWTtBQUtiOzs7OzswRkFFY0MsTTs7Ozs7QUFDYkMsd0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Esb0JBQUksQ0FBQ0MsR0FBR0MsS0FBUixFQUFlO0FBQ2JILDBCQUFRSSxLQUFSLENBQWMseUJBQWQ7QUFDRCxpQkFGRCxNQUVPO0FBQ0xGLHFCQUFHQyxLQUFILENBQVNFLElBQVQsQ0FBYztBQUNaQywrQkFBVztBQURDLG1CQUFkO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwRndCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvYXV0aG9yaXplJyxcbiAgICAgICdwYWdlcy9ob21lJyxcbiAgICAgICdwYWdlcy9ob21lX2RldGFpbCcsXG4gICAgICAncGFnZXMvY2xhc3NpZnknLFxuICAgICAgJ3BhZ2VzL3Nob3BfY2FydCcsXG4gICAgICAncGFnZXMvaW5mbycsXG4gICAgICAncGFnZXMvc2VhcmNoJyxcbiAgICAgICdwYWdlcy90ZXN0JyxcbiAgICAgICdwYWdlcy9zaWduX2luJyxcbiAgICAgICdwYWdlcy9leGNoYW5nZV9nb29kcycsXG4gICAgICAncGFnZXMvd2hvbGVzYWxlJyxcbiAgICAgICdwYWdlcy9yZXBsZW5pc2htZW50X2dvb2RzJyxcbiAgICAgICdwYWdlcy9yZWdpc3RlcicsXG4gICAgICAncGFnZXMvb3JkZXInLFxuICAgICAgJ3BhZ2VzL3Jlb3JkZXInLFxuICAgICAgJ3BhZ2VzL3BheV9zdWNjZXNzJyxcbiAgICAgICdwYWdlcy9wb2ludHMnLFxuICAgICAgJ3BhZ2VzL3BvaW50c19tb3JlJyxcbiAgICAgICdwYWdlcy9wb2ludHNfcnVsZScsXG4gICAgICAncGFnZXMvY29sbGVjdGlvbicsXG4gICAgICAncGFnZXMvbWVzc2FnZXMnLFxuICAgICAgJ3BhZ2VzL3NldHRpbmcnLFxuICAgICAgJ3BhZ2VzL2dvb2RzX2RldGFpbCcsXG4gICAgICAncGFnZXMvY29tZmlyZV9vcmRlcicsXG4gICAgICAncGFnZXMvYWRkcmVzcycsXG4gICAgICAncGFnZXMvb3JkZXJfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9maWx0ZXInLFxuICAgICAgJ3BhZ2VzL2xvZ2lzdGljcycsXG4gICAgICAncGFnZXMvY29tbWVudCcsXG4gICAgICAncGFnZXMvY29tbWVudF9hZGQnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUZFRkVGJ1xuXG4gICAgfSxcbiAgICBcInRhYkJhclwiOiB7XG4gICAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiI2ZmNmEzY1wiLFxuICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgICBcImJvcmRlclN0eWxlXCI6IFwiYmxhY2tcIixcbiAgICAgIFwibGlzdFwiOiBbe1xuICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaG9tZVwiLFxuICAgICAgICBcInRleHRcIjogXCLpppbpobVcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9pY29uX2hvbWUucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9pY29uX2hvbWVfYWN0aXZlLnBuZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9jbGFzc2lmeVwiLFxuICAgICAgICBcInRleHRcIjogXCLmjpLooYzmppxcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9pY29uX2NsYXNzaWZ5LnBuZ1wiLFxuICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvaWNvbl9jbGFzc2lmeV9hY3RpdmUucG5nXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL3BvaW50c1wiLFxuICAgICAgICBcInRleHRcIjogXCLotrPov7lcIixcbiAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9pY29uX2luZm8ucG5nXCIsXG4gICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9pY29uX2luZm9fYWN0aXZlLnBuZ1wiXG4gICAgICB9XVxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7fVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xuXG4gIH1cblxuICBhc3luYyBvbkxhdW5jaChvcHRpb24pIHtcbiAgICBjb25zb2xlLmxvZygn5LqR5byA5Y+R5Yid5aeL5YyWJyk7XG4gICAgaWYgKCF3eC5jbG91ZCkge1xuICAgICAgY29uc29sZS5lcnJvcign6K+35L2/55SoIDIuMi4zIOaIluS7peS4iueahOWfuuehgOW6k+S7peS9v+eUqOS6keiDveWKmycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHd4LmNsb3VkLmluaXQoe1xuICAgICAgICB0cmFjZVVzZXI6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG4iXX0=