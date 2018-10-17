'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _discover = require('./../components/discover.js');

var _discover2 = _interopRequireDefault(_discover);

var _bomb_screen = require('./../components/bomb_screen.js');

var _bomb_screen2 = _interopRequireDefault(_bomb_screen);

var _bottomLoadMore = require('./../components/common/bottomLoadMore.js');

var _bottomLoadMore2 = _interopRequireDefault(_bottomLoadMore);

var _placeholder = require('./../components/common/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '演示商城'
    }, _this.$repeat = {}, _this.$props = { "bottomLoadMore": { "xmlns:v-bind": "", "v-bind:show.sync": "showLoading", "message": "正在加载" }, "placeholder": { "v-bind:show.sync": "is_empty", "message": "暂无发现数据" }, "bombscreen": { "v-bind:types.sync": "tps", "v-bind:show.sync": "is_show_alert", "xmlns:v-on": "" } }, _this.$events = { "bombscreen": { "v-on:close": "closeAlert", "v-on:callback": "alertCallback" } }, _this.components = {
      discover: _discover2.default,
      bottomLoadMore: _bottomLoadMore2.default,
      placeholder: _placeholder2.default,
      bombscreen: _bomb_screen2.default
    }, _this.data = {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      indicatorActiveColor: "#fff",
      discoverList: [],
      //是否有数据
      is_empty: false,
      //当前页面
      currentPage: 1,
      //总页数
      page_total: 0,
      //是否显示 底部loading
      showLoading: true,
      //防止重复加载
      preventRepeatReuqest: false,
      //广告列表
      adList: [],
      tps: 1,
      is_show_alert: false
    }, _this.computed = {}, _this.methods = {
      goToAdvert: function goToAdvert(url) {
        console.log("url===" + url);
        if (url.length == 0) {
          return;
        }
        _wepy2.default.navigateTo({
          url: url
        });
      },

      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: '素洁服装厂',
          path: '/pages/home',
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      },
      alertCallback: function alertCallback() {
        _tip2.default.alert('跳转');
      },
      closeAlert: function closeAlert() {
        // tip.alert('关闭');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'getDiscoverList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPage, size) {
        var that, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                _context.next = 3;
                return _api2.default.getHomeDisvocerList({
                  query: {
                    page: currentPage || 1,
                    size: size || 10
                  }
                });

              case 3:
                json = _context.sent;

                if (json.data.code == 0) {
                  that.discoverList = [].concat(_toConsumableArray(that.discoverList), _toConsumableArray(json.data.list));

                  if (json.data.page_total) {
                    // 后台的数据不再返回page_total
                    that.page_total = json.data.page_total;
                  };
                  if (json.data.page_total == 0) {
                    //暂无数据
                    that.is_empty = true;
                  }
                  that.$apply();
                } else {
                  _tip2.default.error(json.data.msg);
                }
                that.showLoading = false;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getDiscoverList(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return getDiscoverList;
    }()
  }, {
    key: 'getAdList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var json;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _api2.default.getAdList();

              case 2:
                json = _context2.sent;

                console.log(json);
                if (json.data != null && json.data.length > 0) {
                  this.adList = json.data;
                  this.$apply();
                } else {}

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAdList() {
        return _ref3.apply(this, arguments);
      }

      return getAdList;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      this.discoverList = [];
      that.getDiscoverList();
      this.getAdList();
    }
  }, {
    key: 'onReachBottom',

    //加载更多
    value: function onReachBottom() {
      var that = this;
      that.showLoading = true;
      console.log(that.page_total + "===" + that.currentPage);
      //判断总页数是否大于翻页数
      if (that.page_total > that.currentPage) {
        //防止重复加载
        if (that.preventRepeatReuqest) {
          return true;
        }
        that.preventRepeatReuqest = true;
        that.currentPage++;
        that.getDiscoverList(that.currentPage);
        that.preventRepeatReuqest = false;
      } else {
        that.showLoading = false;
      }
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJkaXNjb3ZlciIsIkRpc2NvdmVyIiwiYm90dG9tTG9hZE1vcmUiLCJCb3R0b21Mb2FkTW9yZSIsInBsYWNlaG9sZGVyIiwiUGxhY2Vob2xkZXIiLCJib21ic2NyZWVuIiwiQm9tYnNjcmVlbiIsImRhdGEiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwiaW5kaWNhdG9yQWN0aXZlQ29sb3IiLCJkaXNjb3Zlckxpc3QiLCJpc19lbXB0eSIsImN1cnJlbnRQYWdlIiwicGFnZV90b3RhbCIsInNob3dMb2FkaW5nIiwicHJldmVudFJlcGVhdFJldXFlc3QiLCJhZExpc3QiLCJ0cHMiLCJpc19zaG93X2FsZXJ0IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ29Ub0FkdmVydCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwiZnJvbSIsInRhcmdldCIsInRpdGxlIiwicGF0aCIsInN1Y2Nlc3MiLCJmYWlsIiwiYWxlcnRDYWxsYmFjayIsInRpcCIsImFsZXJ0IiwiY2xvc2VBbGVydCIsImV2ZW50cyIsInNpemUiLCJ0aGF0IiwiYXBpIiwiZ2V0SG9tZURpc3ZvY2VyTGlzdCIsInF1ZXJ5IiwicGFnZSIsImpzb24iLCJjb2RlIiwibGlzdCIsIiRhcHBseSIsImVycm9yIiwibXNnIiwiZ2V0QWRMaXN0IiwiZ2V0RGlzY292ZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxN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b0IsSTs7a0JBQWxCekQsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBhcGkgZnJvbSAnQC9hcGkvYXBpJztcbmltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnQC9jb21wb25lbnRzL2Rpc2NvdmVyJ1xuaW1wb3J0IEJvbWJzY3JlZW4gZnJvbSAnQC9jb21wb25lbnRzL2JvbWJfc2NyZWVuJ1xuaW1wb3J0IEJvdHRvbUxvYWRNb3JlIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9ib3R0b21Mb2FkTW9yZVwiXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL3BsYWNlaG9sZGVyXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a8lOekuuWVhuWfjicsXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImJvdHRvbUxvYWRNb3JlXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzaG93LnN5bmNcIjpcInNob3dMb2FkaW5nXCIsXCJtZXNzYWdlXCI6XCLmraPlnKjliqDovb1cIn0sXCJwbGFjZWhvbGRlclwiOntcInYtYmluZDpzaG93LnN5bmNcIjpcImlzX2VtcHR5XCIsXCJtZXNzYWdlXCI6XCLmmoLml6Dlj5HnjrDmlbDmja5cIn0sXCJib21ic2NyZWVuXCI6e1widi1iaW5kOnR5cGVzLnN5bmNcIjpcInRwc1wiLFwidi1iaW5kOnNob3cuc3luY1wiOlwiaXNfc2hvd19hbGVydFwiLFwieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcImJvbWJzY3JlZW5cIjp7XCJ2LW9uOmNsb3NlXCI6XCJjbG9zZUFsZXJ0XCIsXCJ2LW9uOmNhbGxiYWNrXCI6XCJhbGVydENhbGxiYWNrXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgZGlzY292ZXI6IERpc2NvdmVyLFxuICAgIGJvdHRvbUxvYWRNb3JlOiBCb3R0b21Mb2FkTW9yZSxcbiAgICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXIsXG4gICAgYm9tYnNjcmVlbjogQm9tYnNjcmVlblxuICB9XG4gIGRhdGEgPSB7XG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogMzAwMCxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjogXCIjZmZmXCIsXG4gICAgZGlzY292ZXJMaXN0OiBbXSxcbiAgICAvL+aYr+WQpuacieaVsOaNrlxuICAgIGlzX2VtcHR5OiBmYWxzZSxcbiAgICAvL+W9k+WJjemhtemdolxuICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgIC8v5oC76aG15pWwXG4gICAgcGFnZV90b3RhbDogMCxcbiAgICAvL+aYr+WQpuaYvuekuiDlupXpg6hsb2FkaW5nXG4gICAgc2hvd0xvYWRpbmc6IHRydWUsXG4gICAgLy/pmLLmraLph43lpI3liqDovb1cbiAgICBwcmV2ZW50UmVwZWF0UmV1cWVzdDogZmFsc2UsXG4gICAgLy/lub/lkYrliJfooahcbiAgICBhZExpc3Q6IFtdLFxuICAgIHRwczogMSxcbiAgICBpc19zaG93X2FsZXJ0OiBmYWxzZVxuICB9XG4gIGFzeW5jIGdldERpc2NvdmVyTGlzdChjdXJyZW50UGFnZSwgc2l6ZSkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldEhvbWVEaXN2b2Nlckxpc3Qoe1xuICAgICAgcXVlcnk6IHtcbiAgICAgICAgcGFnZTogY3VycmVudFBhZ2UgfHwgMSxcbiAgICAgICAgc2l6ZTogc2l6ZSB8fCAxMFxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChqc29uLmRhdGEuY29kZSA9PSAwKSB7XG4gICAgICB0aGF0LmRpc2NvdmVyTGlzdCA9IFsuLi50aGF0LmRpc2NvdmVyTGlzdCwgLi4uanNvbi5kYXRhLmxpc3RdO1xuXG4gICAgICBpZiAoanNvbi5kYXRhLnBhZ2VfdG90YWwpIHsgLy8g5ZCO5Y+w55qE5pWw5o2u5LiN5YaN6L+U5ZuecGFnZV90b3RhbFxuICAgICAgdGhhdC5wYWdlX3RvdGFsID0ganNvbi5kYXRhLnBhZ2VfdG90YWxcbiAgICAgIH07XG4gICAgICBpZiAoanNvbi5kYXRhLnBhZ2VfdG90YWwgPT0gMCkge1xuICAgICAgICAvL+aaguaXoOaVsOaNrlxuICAgICAgICB0aGF0LmlzX2VtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcC5lcnJvcihqc29uLmRhdGEubXNnKTtcbiAgICB9XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIGFzeW5jIGdldEFkTGlzdCgpIHtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYXBpLmdldEFkTGlzdCgpO1xuICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgIGlmIChqc29uLmRhdGEgIT0gbnVsbCAmJiBqc29uLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hZExpc3QgPSBqc29uLmRhdGE7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0gZWxzZSB7fVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5kaXNjb3Zlckxpc3QgPSBbXTtcbiAgICB0aGF0LmdldERpc2NvdmVyTGlzdCgpO1xuICAgIHRoaXMuZ2V0QWRMaXN0KCk7XG4gIH1cbiAgY29tcHV0ZWQgPSB7fVxuICBtZXRob2RzID0ge1xuICAgIGdvVG9BZHZlcnQodXJsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInVybD09PVwiICsgdXJsKTtcbiAgICAgIGlmICh1cmwubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiB1cmxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24ocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICfntKDmtIHmnI3oo4XljoInLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2hvbWUnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFsZXJ0Q2FsbGJhY2soKSB7XG4gICAgICB0aXAuYWxlcnQoJ+i3s+i9rCcpO1xuICAgIH0sXG4gICAgY2xvc2VBbGVydCgpIHtcbiAgICAgLy8gdGlwLmFsZXJ0KCflhbPpl60nKTtcbiAgICB9XG4gIH1cbiAgZXZlbnRzID0ge31cbiAgLy/liqDovb3mm7TlpJpcbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5zaG93TG9hZGluZyA9IHRydWU7XG4gICAgY29uc29sZS5sb2codGhhdC5wYWdlX3RvdGFsICsgXCI9PT1cIiArIHRoYXQuY3VycmVudFBhZ2UpO1xuICAgIC8v5Yik5pat5oC76aG15pWw5piv5ZCm5aSn5LqO57+76aG15pWwXG4gICAgaWYgKCh0aGF0LnBhZ2VfdG90YWwpID4gdGhhdC5jdXJyZW50UGFnZSkge1xuICAgICAgLy/pmLLmraLph43lpI3liqDovb1cbiAgICAgIGlmICh0aGF0LnByZXZlbnRSZXBlYXRSZXVxZXN0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgdGhhdC5wcmV2ZW50UmVwZWF0UmV1cWVzdCA9IHRydWU7XG4gICAgICB0aGF0LmN1cnJlbnRQYWdlKys7XG4gICAgICB0aGF0LmdldERpc2NvdmVyTGlzdCh0aGF0LmN1cnJlbnRQYWdlKTtcbiAgICAgIHRoYXQucHJldmVudFJlcGVhdFJldXFlc3QgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuIl19