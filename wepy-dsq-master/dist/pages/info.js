'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _constant = require('./../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我'
    }, _this.components = {}, _this.data = {
      avatarUrl: "",
      nickName: "",
      bShowBind: false
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getUserInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(phone, code) {
        var that, userSpecialInfo, openId, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                userSpecialInfo = _wepy2.default.getStorageSync(_constant.USER_SPECICAL_INFO) || {};
                openId = userSpecialInfo.openid;
                _context.next = 5;
                return _api2.default.getUserInfo({
                  query: {
                    openId: openId
                  }
                });

              case 5:
                json = _context.sent;


                if (json.data.code == 0) {
                  if (json.data.user.mobile.length > 0) {
                    this.bShowBind = false;
                  } else {
                    this.bShowBind = true;
                  }
                  that.$apply();
                } else {
                  tip.error(json.data.msg);
                }
                that.showLoading = false;

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserInfo(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      var userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO);
      that.avatarUrl = userInfo.avatarUrl;
      that.nickName = userInfo.nickName;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var that = this;
      this.getUserInfo();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImJTaG93QmluZCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsInBob25lIiwiY29kZSIsInRoYXQiLCJ1c2VyU3BlY2lhbEluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJVU0VSX1NQRUNJQ0FMX0lORk8iLCJvcGVuSWQiLCJvcGVuaWQiLCJhcGkiLCJnZXRVc2VySW5mbyIsInF1ZXJ5IiwianNvbiIsInVzZXIiLCJtb2JpbGUiLCJsZW5ndGgiLCIkYXBwbHkiLCJ0aXAiLCJlcnJvciIsIm1zZyIsInNob3dMb2FkaW5nIiwidXNlckluZm8iLCJVU0VSX0lORk8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFJYkMsSSxHQUFPO0FBQ0xDLGlCQUFXLEVBRE47QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxpQkFBVTtBQUhMLEssUUFzQ1BDLFEsR0FBVyxFLFFBR1hDLE8sR0FBVSxFLFFBR1ZDLE0sR0FBUyxFOzs7Ozs7MkZBdkNTQyxLLEVBQU1DLEk7Ozs7OztBQUNsQkMsb0IsR0FBTyxJO0FBQ1BDLCtCLEdBQWtCQyxlQUFLQyxjQUFMLENBQW9CQyw0QkFBcEIsS0FBMkMsRTtBQUM3REMsc0IsR0FBU0osZ0JBQWdCSyxNOzt1QkFDVkMsY0FBSUMsV0FBSixDQUFnQjtBQUNqQ0MseUJBQU87QUFDTEosNEJBQVFBO0FBREg7QUFEMEIsaUJBQWhCLEM7OztBQUFiSyxvQjs7O0FBTU4sb0JBQUlBLEtBQUtuQixJQUFMLENBQVVRLElBQVYsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsc0JBQUlXLEtBQUtuQixJQUFMLENBQVVvQixJQUFWLENBQWVDLE1BQWYsQ0FBc0JDLE1BQXRCLEdBQTZCLENBQWpDLEVBQW9DO0FBQ2xDLHlCQUFLbkIsU0FBTCxHQUFlLEtBQWY7QUFDRCxtQkFGRCxNQUVPO0FBQ0wseUJBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDRDtBQUNETSx1QkFBS2MsTUFBTDtBQUNELGlCQVBELE1BT087QUFDTEMsc0JBQUlDLEtBQUosQ0FBVU4sS0FBS25CLElBQUwsQ0FBVTBCLEdBQXBCO0FBQ0Q7QUFDRGpCLHFCQUFLa0IsV0FBTCxHQUFtQixLQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdPO0FBQ1AsVUFBSWxCLE9BQU8sSUFBWDtBQUNBLFVBQUltQixXQUFXakIsZUFBS0MsY0FBTCxDQUFvQmlCLG1CQUFwQixDQUFmO0FBQ0FwQixXQUFLUixTQUFMLEdBQWlCMkIsU0FBUzNCLFNBQTFCO0FBQ0FRLFdBQUtQLFFBQUwsR0FBZ0IwQixTQUFTMUIsUUFBekI7QUFDRDs7OzZCQUNPO0FBQ04sVUFBSU8sT0FBTyxJQUFYO0FBQ0EsV0FBS1EsV0FBTDtBQUNEOzs7O0VBN0NnQ04sZUFBS21CLEk7O2tCQUFuQmxDLEsiLCJmaWxlIjoiaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG5pbXBvcnQge1xuICBVU0VSX0lORk8sVVNFUl9TUEVDSUNBTF9JTkZPXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkScsXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcblxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBhdmF0YXJVcmw6IFwiXCIsXG4gICAgbmlja05hbWU6IFwiXCIsXG4gICAgYlNob3dCaW5kOmZhbHNlXG4gIH1cbiAgYXN5bmMgZ2V0VXNlckluZm8ocGhvbmUsY29kZSkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgdXNlclNwZWNpYWxJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIHx8IHt9O1xuICAgIGxldCBvcGVuSWQgPSB1c2VyU3BlY2lhbEluZm8ub3BlbmlkO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBhcGkuZ2V0VXNlckluZm8oe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgb3BlbklkOiBvcGVuSWRcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICBpZiAoanNvbi5kYXRhLnVzZXIubW9iaWxlLmxlbmd0aD4wKSB7XG4gICAgICAgIHRoaXMuYlNob3dCaW5kPWZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5iU2hvd0JpbmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGlwLmVycm9yKGpzb24uZGF0YS5tc2cpXG4gICAgfVxuICAgIHRoYXQuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IHVzZXJJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX0lORk8pO1xuICAgIHRoYXQuYXZhdGFyVXJsID0gdXNlckluZm8uYXZhdGFyVXJsO1xuICAgIHRoYXQubmlja05hbWUgPSB1c2VySW5mby5uaWNrTmFtZTtcbiAgfVxuICBvblNob3coKXtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICB9XG4gIGNvbXB1dGVkID0ge1xuXG4gIH1cbiAgbWV0aG9kcyA9IHtcblxuICB9XG4gIGV2ZW50cyA9IHtcblxuICB9XG59XG5cbiJdfQ==