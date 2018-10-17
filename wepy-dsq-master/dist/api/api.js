'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hostGoodsList$getDis;

var _wxRequest = require('./../utils/wxRequest.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var env = "-test"; //-dev 或者 -test
var db = wx.cloud.database(); // 创建数据库
var apiMall = 'https://sujiefs.com/';
// const apiMall = 'http://localhost:8080/'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
var getDiscoverList = function getDiscoverList(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');
};

//微信的jscode换取sessionKey
var wxJsCode2Session = function wxJsCode2Session(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + "/api/wechat/jscode2session");
};
var user2session = function user2session(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + "/api/wechat/user2session?jsoncallback=?");
};

//商品接口---begin
//首页发现商品接口
var hostGoodsList = function hostGoodsList(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/home/hostGoodsList');
};
var getHomeDisvocerList = function getHomeDisvocerList(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/discoverList');
};
//查询商品列表
var getGoodsList = function getGoodsList(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/searchGoodsList');
};

//查询商品详情信息
var goodsDetail = function goodsDetail(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goods');
};
//商品加入购物车
var addCart = function addCart(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsCart/add');
};
//用户的购物车商品列表
var cartList = function cartList(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsCart/list');
};
//购物车的商品选中状态
var cartCheck = function cartCheck(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsCart/check');
};
//购物车的商品选中状态(全选)
var cartCheckAll = function cartCheckAll(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsCart/checkAll');
};
//购物车的商品删除
var cartDel = function cartDel(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsCart/delete');
};
//购物车的商品数量更新
var cartUpdateNum = function cartUpdateNum(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsCart/updateNum');
};
//直接购买商品
var preOrder = function preOrder(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsOrder/commitData');
};

//支付前生成订单
var saveByCart = function saveByCart(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsOrder/saveByCart');
};

//支付统一下单
var toPay = function toPay(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/wepay/toPay');
};

//商品收藏
var goodsFavorite = function goodsFavorite(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsFavorite/add');
};

//商品收藏删除
var goodsUnFavorite = function goodsUnFavorite(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsFavorite/delete');
};

//商品是否已收藏
var goodsIsFavorite = function goodsIsFavorite(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsFavorite/goodsIsFavorite');
};

//商品接口---end

//用户相关信息--begin
//用户的当天签到信息
var userSginInfo = function userSginInfo(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/userSign/signInfo');
};
var doSign = function doSign(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/userSign/doSign');
};
//获取最近七天签到情况
var getSignDate = function getSignDate(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/userSign/getSignDate');
};

//用户积分信息
var pointInfo = function pointInfo(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/userPoint/pointInfo');
};

//用户足迹信息
var browseInfo = function browseInfo(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/userBrowse/browseInfo');
};
//添加用户足迹
var addBrowser = function addBrowser(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/userBrowse/add');
};
//添加用户足迹
var delUserBrowser = function delUserBrowser(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/userBrowse/delete');
};

//用户收藏的商品
var favoriteInfo = function favoriteInfo(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/goodsFavorite/favoriteInfo');
};

//用户消息
var messageInfo = function messageInfo(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/systemMessage/messageInfo');
};

//用户手机绑定
var registerUser = function registerUser(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/userCenter/register');
};
//发送短信
var sendRandCode = function sendRandCode(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/sms/send');
};

//用户是否绑定手机号
var getUserInfo = function getUserInfo(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/userCenter/getUserInfo');
};

//用户收货地址
var getUserAddress = function getUserAddress(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/receiverInfo/list');
};

//保存用户收货地址
var saveAddress = function saveAddress(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/receiverInfo/saveOrUpdate');
};

//用户收货地址根据id查询
var receiverInfoById = function receiverInfoById(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/receiverInfo/receiverInfoById');
};

//根据Id删除收货地址
var delUserAddress = function delUserAddress(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/receiverInfo/operation');
};

//查询关键字保存
var addSearchKeyword = function addSearchKeyword(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/searchkeyword/add');
};
//查询关键字列表
var searchKeywordList = function searchKeywordList(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/searchkeyword/list');
};
//查询关键字清除
var clearSearchKeyword = function clearSearchKeyword(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/searchkeyword/clear');
};

//查询我的订单
var getMyOrderList = function getMyOrderList(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsOrder/getMyOrderList');
};

//查询我的订单数量
var getMyOrderSize = function getMyOrderSize(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsOrder/getMyOrderSize');
};

//根据订单号查询详情
var getOrderInfo = function getOrderInfo(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsOrder/getOrderDetail');
};

//根据订单号查询详情
var getPayOrderDetail = function getPayOrderDetail(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsOrder/getPayOrderDetail');
};

//根据订单号查询详情
var editOrderInfo = function editOrderInfo(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsOrder/opt');
};

//根据订单号查询物流
var orderExpressInfo = function orderExpressInfo(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/orderExpress/orderExpressInfo');
};

//查询用户的已订购产品
var goodsUserOrderList = function goodsUserOrderList(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/goodsOrder/goodsUserOrderList');
};

//退货操作
var refundApply = function refundApply(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/refund/saveRefundApply');
};

//用户相关信息--end

//商品分类--begin
//一级分类
var rootCtegoryList = function rootCtegoryList(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/rootCtegoryList');
};
//二级三级分类
var childGoodsCatetoryList = function childGoodsCatetoryList(params) {
  return (0, _wxRequest.wxRequest)(params, apiMall + '/api/mall/childGoodsCatetoryList');
};
//商品分类--end

//查询广告列表
// const getAdList = (params) => wxRequest(params, apiMall + '/api/adverts/list');

//查询广告列表
var getAdList = function getAdList() {
  return db.collection('advert').get();
};

exports.default = (_hostGoodsList$getDis = {
  hostGoodsList: hostGoodsList,
  getDiscoverList: getDiscoverList,
  getHomeDisvocerList: getHomeDisvocerList,
  getGoodsList: getGoodsList,
  goodsDetail: goodsDetail,
  wxJsCode2Session: wxJsCode2Session,
  user2session: user2session,
  userSginInfo: userSginInfo,
  doSign: doSign,
  addCart: addCart,
  cartList: cartList,
  cartCheck: cartCheck,
  cartCheckAll: cartCheckAll,
  cartDel: cartDel,
  cartUpdateNum: cartUpdateNum,
  preOrder: preOrder,
  refundApply: refundApply,
  pointInfo: pointInfo,
  browseInfo: browseInfo,
  addBrowser: addBrowser,
  delUserBrowser: delUserBrowser,
  favoriteInfo: favoriteInfo,
  messageInfo: messageInfo,
  registerUser: registerUser,
  sendRandCode: sendRandCode,
  getUserInfo: getUserInfo,
  getUserAddress: getUserAddress,
  saveAddress: saveAddress,
  receiverInfoById: receiverInfoById
}, _defineProperty(_hostGoodsList$getDis, 'getUserAddress', getUserAddress), _defineProperty(_hostGoodsList$getDis, 'addSearchKeyword', addSearchKeyword), _defineProperty(_hostGoodsList$getDis, 'searchKeywordList', searchKeywordList), _defineProperty(_hostGoodsList$getDis, 'clearSearchKeyword', clearSearchKeyword), _defineProperty(_hostGoodsList$getDis, 'getMyOrderList', getMyOrderList), _defineProperty(_hostGoodsList$getDis, 'saveByCart', saveByCart), _defineProperty(_hostGoodsList$getDis, 'toPay', toPay), _defineProperty(_hostGoodsList$getDis, 'rootCtegoryList', rootCtegoryList), _defineProperty(_hostGoodsList$getDis, 'childGoodsCatetoryList', childGoodsCatetoryList), _defineProperty(_hostGoodsList$getDis, 'getOrderInfo', getOrderInfo), _defineProperty(_hostGoodsList$getDis, 'editOrderInfo', editOrderInfo), _defineProperty(_hostGoodsList$getDis, 'goodsUserOrderList', goodsUserOrderList), _defineProperty(_hostGoodsList$getDis, 'orderExpressInfo', orderExpressInfo), _defineProperty(_hostGoodsList$getDis, 'delUserAddress', delUserAddress), _defineProperty(_hostGoodsList$getDis, 'goodsFavorite', goodsFavorite), _defineProperty(_hostGoodsList$getDis, 'goodsUnFavorite', goodsUnFavorite), _defineProperty(_hostGoodsList$getDis, 'goodsIsFavorite', goodsIsFavorite), _defineProperty(_hostGoodsList$getDis, 'getMyOrderSize', getMyOrderSize), _defineProperty(_hostGoodsList$getDis, 'getPayOrderDetail', getPayOrderDetail), _defineProperty(_hostGoodsList$getDis, 'getAdList', getAdList), _defineProperty(_hostGoodsList$getDis, 'getSignDate', getSignDate), _hostGoodsList$getDis);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJlbnYiLCJkYiIsInd4IiwiY2xvdWQiLCJkYXRhYmFzZSIsImFwaU1hbGwiLCJnZXREaXNjb3Zlckxpc3QiLCJwYXJhbXMiLCJ3eEpzQ29kZTJTZXNzaW9uIiwidXNlcjJzZXNzaW9uIiwiaG9zdEdvb2RzTGlzdCIsImdldEhvbWVEaXN2b2Nlckxpc3QiLCJnZXRHb29kc0xpc3QiLCJnb29kc0RldGFpbCIsImFkZENhcnQiLCJjYXJ0TGlzdCIsImNhcnRDaGVjayIsImNhcnRDaGVja0FsbCIsImNhcnREZWwiLCJjYXJ0VXBkYXRlTnVtIiwicHJlT3JkZXIiLCJzYXZlQnlDYXJ0IiwidG9QYXkiLCJnb29kc0Zhdm9yaXRlIiwiZ29vZHNVbkZhdm9yaXRlIiwiZ29vZHNJc0Zhdm9yaXRlIiwidXNlclNnaW5JbmZvIiwiZG9TaWduIiwiZ2V0U2lnbkRhdGUiLCJwb2ludEluZm8iLCJicm93c2VJbmZvIiwiYWRkQnJvd3NlciIsImRlbFVzZXJCcm93c2VyIiwiZmF2b3JpdGVJbmZvIiwibWVzc2FnZUluZm8iLCJyZWdpc3RlclVzZXIiLCJzZW5kUmFuZENvZGUiLCJnZXRVc2VySW5mbyIsImdldFVzZXJBZGRyZXNzIiwic2F2ZUFkZHJlc3MiLCJyZWNlaXZlckluZm9CeUlkIiwiZGVsVXNlckFkZHJlc3MiLCJhZGRTZWFyY2hLZXl3b3JkIiwic2VhcmNoS2V5d29yZExpc3QiLCJjbGVhclNlYXJjaEtleXdvcmQiLCJnZXRNeU9yZGVyTGlzdCIsImdldE15T3JkZXJTaXplIiwiZ2V0T3JkZXJJbmZvIiwiZ2V0UGF5T3JkZXJEZXRhaWwiLCJlZGl0T3JkZXJJbmZvIiwib3JkZXJFeHByZXNzSW5mbyIsImdvb2RzVXNlck9yZGVyTGlzdCIsInJlZnVuZEFwcGx5Iiwicm9vdEN0ZWdvcnlMaXN0IiwiY2hpbGRHb29kc0NhdGV0b3J5TGlzdCIsImdldEFkTGlzdCIsImNvbGxlY3Rpb24iLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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O0FBQ0F2QixzQjtBQUNBQyx3QjtBQUNBQyx3QjtBQUNBQyxnQztBQUNBQyw0QjtBQUNBQywwQjtBQUNBQyw0QjtBQUNBQyw0QjtBQUNBQywwQjtBQUNBQyxnQztBQUNBQywwQjtBQUNBQzs0REFDQUYsYyw4REFDQUksZ0IsK0RBQ0FDLGlCLGdFQUNBQyxrQiw0REFDQUMsYyx3REFDQXhCLFUsbURBQ0FDLEssNkRBQ0ErQixlLG9FQUNBQyxzQiwwREFDQVAsWSwyREFDQUUsYSxnRUFDQUUsa0IsOERBQ0FELGdCLDREQUNBVCxjLDJEQUNBbEIsYSw2REFDQUMsZSw2REFDQUMsZSw0REFDQXFCLGMsK0RBQ0FFLGlCLHVEQUNBTyxTLHlEQUNBM0IsVyIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB3eFJlcXVlc3Rcbn0gZnJvbSAnQC91dGlscy93eFJlcXVlc3QnO1xuXG5sZXQgZW52ID0gXCItdGVzdFwiIC8vLWRldiDmiJbogIUgLXRlc3RcbmNvbnN0IGRiID0gd3guY2xvdWQuZGF0YWJhc2UoKTsgLy8g5Yib5bu65pWw5o2u5bqTXG5jb25zdCBhcGlNYWxsID0gJ2h0dHBzOi8vc3VqaWVmcy5jb20vJ1xuLy8gY29uc3QgYXBpTWFsbCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvJ1xuXG4vKipcbiAqIOiOt+WPluWPkeeOsOWlveWVhuWTgeaOpeWPo1xuICogQHBhcmFtICB7W3R5cGVdfSBwYXJhbXMgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5jb25zdCBnZXREaXNjb3Zlckxpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9nb29kcy9saXN0P2NhdGVpZE9uZT0xJmNhdGVpZFR3bz0wJnByaWNlPTAmc2FsZXM9MicpO1xuXG4vL+W+ruS/oeeahGpzY29kZeaNouWPlnNlc3Npb25LZXlcbmNvbnN0IHd4SnNDb2RlMlNlc3Npb24gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgXCIvYXBpL3dlY2hhdC9qc2NvZGUyc2Vzc2lvblwiKTtcbmNvbnN0IHVzZXIyc2Vzc2lvbiA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyBcIi9hcGkvd2VjaGF0L3VzZXIyc2Vzc2lvbj9qc29uY2FsbGJhY2s9P1wiKTtcblxuLy/llYblk4HmjqXlj6MtLS1iZWdpblxuLy/pppbpobXlj5HnjrDllYblk4HmjqXlj6NcbmNvbnN0IGhvc3RHb29kc0xpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvaG9tZS9ob3N0R29vZHNMaXN0Jyk7XG5jb25zdCBnZXRIb21lRGlzdm9jZXJMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL21hbGwvZGlzY292ZXJMaXN0Jyk7XG4vL+afpeivouWVhuWTgeWIl+ihqFxuY29uc3QgZ2V0R29vZHNMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL21hbGwvc2VhcmNoR29vZHNMaXN0Jyk7XG5cbi8v5p+l6K+i5ZWG5ZOB6K+m5oOF5L+h5oGvXG5jb25zdCBnb29kc0RldGFpbCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS9tYWxsL2dvb2RzJyk7XG4vL+WVhuWTgeWKoOWFpei0reeJqei9plxuY29uc3QgYWRkQ2FydCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS9tYWxsL2dvb2RzQ2FydC9hZGQnKTtcbi8v55So5oi355qE6LSt54mp6L2m5ZWG5ZOB5YiX6KGoXG5jb25zdCBjYXJ0TGlzdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS9tYWxsL2dvb2RzQ2FydC9saXN0Jyk7XG4vL+i0reeJqei9pueahOWVhuWTgemAieS4reeKtuaAgVxuY29uc3QgY2FydENoZWNrID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL21hbGwvZ29vZHNDYXJ0L2NoZWNrJyk7XG4vL+i0reeJqei9pueahOWVhuWTgemAieS4reeKtuaAgSjlhajpgIkpXG5jb25zdCBjYXJ0Q2hlY2tBbGwgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvbWFsbC9nb29kc0NhcnQvY2hlY2tBbGwnKTtcbi8v6LSt54mp6L2m55qE5ZWG5ZOB5Yig6ZmkXG5jb25zdCBjYXJ0RGVsID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL21hbGwvZ29vZHNDYXJ0L2RlbGV0ZScpO1xuLy/otK3nianovabnmoTllYblk4HmlbDph4/mm7TmlrBcbmNvbnN0IGNhcnRVcGRhdGVOdW0gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvbWFsbC9nb29kc0NhcnQvdXBkYXRlTnVtJyk7XG4vL+ebtOaOpei0reS5sOWVhuWTgVxuY29uc3QgcHJlT3JkZXIgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvbWFsbC9nb29kc09yZGVyL2NvbW1pdERhdGEnKTtcblxuLy/mlK/ku5jliY3nlJ/miJDorqLljZVcbmNvbnN0IHNhdmVCeUNhcnQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvbWFsbC9nb29kc09yZGVyL3NhdmVCeUNhcnQnKTtcblxuLy/mlK/ku5jnu5/kuIDkuIvljZVcbmNvbnN0IHRvUGF5ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvd2VwYXkvdG9QYXknKTtcblxuLy/llYblk4HmlLbol49cbmNvbnN0IGdvb2RzRmF2b3JpdGUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvbWFsbC9nb29kc0Zhdm9yaXRlL2FkZCcpO1xuXG4vL+WVhuWTgeaUtuiXj+WIoOmZpFxuY29uc3QgZ29vZHNVbkZhdm9yaXRlID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL21hbGwvZ29vZHNGYXZvcml0ZS9kZWxldGUnKTtcblxuLy/llYblk4HmmK/lkKblt7LmlLbol49cbmNvbnN0IGdvb2RzSXNGYXZvcml0ZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS9tYWxsL2dvb2RzRmF2b3JpdGUvZ29vZHNJc0Zhdm9yaXRlJyk7XG5cbi8v5ZWG5ZOB5o6l5Y+jLS0tZW5kXG5cbi8v55So5oi355u45YWz5L+h5oGvLS1iZWdpblxuLy/nlKjmiLfnmoTlvZPlpKnnrb7liLDkv6Hmga9cbmNvbnN0IHVzZXJTZ2luSW5mbyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS91c2VyU2lnbi9zaWduSW5mbycpO1xuY29uc3QgZG9TaWduID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL3VzZXJTaWduL2RvU2lnbicpO1xuLy/ojrflj5bmnIDov5HkuIPlpKnnrb7liLDmg4XlhrVcbmNvbnN0IGdldFNpZ25EYXRlID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL3VzZXJTaWduL2dldFNpZ25EYXRlJyk7XG5cbi8v55So5oi356ev5YiG5L+h5oGvXG5jb25zdCBwb2ludEluZm8gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvdXNlclBvaW50L3BvaW50SW5mbycpO1xuXG4vL+eUqOaIt+i2s+i/ueS/oeaBr1xuY29uc3QgYnJvd3NlSW5mbyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS91c2VyQnJvd3NlL2Jyb3dzZUluZm8nKTtcbi8v5re75Yqg55So5oi36Laz6L+5XG5jb25zdCBhZGRCcm93c2VyID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL3VzZXJCcm93c2UvYWRkJyk7XG4vL+a3u+WKoOeUqOaIt+i2s+i/uVxuY29uc3QgZGVsVXNlckJyb3dzZXIgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvdXNlckJyb3dzZS9kZWxldGUnKTtcblxuLy/nlKjmiLfmlLbol4/nmoTllYblk4FcbmNvbnN0IGZhdm9yaXRlSW5mbyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS9nb29kc0Zhdm9yaXRlL2Zhdm9yaXRlSW5mbycpO1xuXG4vL+eUqOaIt+a2iOaBr1xuY29uc3QgbWVzc2FnZUluZm8gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvc3lzdGVtTWVzc2FnZS9tZXNzYWdlSW5mbycpO1xuXG4vL+eUqOaIt+aJi+acuue7keWumlxuY29uc3QgcmVnaXN0ZXJVc2VyID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL3VzZXJDZW50ZXIvcmVnaXN0ZXInKTtcbi8v5Y+R6YCB55+t5L+hXG5jb25zdCBzZW5kUmFuZENvZGUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvc21zL3NlbmQnKTtcblxuLy/nlKjmiLfmmK/lkKbnu5HlrprmiYvmnLrlj7dcbmNvbnN0IGdldFVzZXJJbmZvID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL3VzZXJDZW50ZXIvZ2V0VXNlckluZm8nKTtcblxuLy/nlKjmiLfmlLbotKflnLDlnYBcbmNvbnN0IGdldFVzZXJBZGRyZXNzID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL3JlY2VpdmVySW5mby9saXN0Jyk7XG5cbi8v5L+d5a2Y55So5oi35pS26LSn5Zyw5Z2AXG5jb25zdCBzYXZlQWRkcmVzcyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS9yZWNlaXZlckluZm8vc2F2ZU9yVXBkYXRlJyk7XG5cbi8v55So5oi35pS26LSn5Zyw5Z2A5qC55o2uaWTmn6Xor6JcbmNvbnN0IHJlY2VpdmVySW5mb0J5SWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvcmVjZWl2ZXJJbmZvL3JlY2VpdmVySW5mb0J5SWQnKTtcblxuLy/moLnmja5JZOWIoOmZpOaUtui0p+WcsOWdgFxuY29uc3QgZGVsVXNlckFkZHJlc3MgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvcmVjZWl2ZXJJbmZvL29wZXJhdGlvbicpO1xuXG4vL+afpeivouWFs+mUruWtl+S/neWtmFxuY29uc3QgYWRkU2VhcmNoS2V5d29yZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS9zZWFyY2hrZXl3b3JkL2FkZCcpO1xuLy/mn6Xor6LlhbPplK7lrZfliJfooahcbmNvbnN0IHNlYXJjaEtleXdvcmRMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL3NlYXJjaGtleXdvcmQvbGlzdCcpO1xuLy/mn6Xor6LlhbPplK7lrZfmuIXpmaRcbmNvbnN0IGNsZWFyU2VhcmNoS2V5d29yZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS9zZWFyY2hrZXl3b3JkL2NsZWFyJyk7XG5cbi8v5p+l6K+i5oiR55qE6K6i5Y2VXG5jb25zdCBnZXRNeU9yZGVyTGlzdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS9tYWxsL2dvb2RzT3JkZXIvZ2V0TXlPcmRlckxpc3QnKTtcblxuLy/mn6Xor6LmiJHnmoTorqLljZXmlbDph49cbmNvbnN0IGdldE15T3JkZXJTaXplID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL21hbGwvZ29vZHNPcmRlci9nZXRNeU9yZGVyU2l6ZScpO1xuXG4vL+agueaNruiuouWNleWPt+afpeivouivpuaDhVxuY29uc3QgZ2V0T3JkZXJJbmZvID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL21hbGwvZ29vZHNPcmRlci9nZXRPcmRlckRldGFpbCcpO1xuXG4vL+agueaNruiuouWNleWPt+afpeivouivpuaDhVxuY29uc3QgZ2V0UGF5T3JkZXJEZXRhaWwgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvbWFsbC9nb29kc09yZGVyL2dldFBheU9yZGVyRGV0YWlsJyk7XG5cbi8v5qC55o2u6K6i5Y2V5Y+35p+l6K+i6K+m5oOFXG5jb25zdCBlZGl0T3JkZXJJbmZvID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL21hbGwvZ29vZHNPcmRlci9vcHQnKTtcblxuLy/moLnmja7orqLljZXlj7fmn6Xor6LnianmtYFcbmNvbnN0IG9yZGVyRXhwcmVzc0luZm8gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvb3JkZXJFeHByZXNzL29yZGVyRXhwcmVzc0luZm8nKTtcblxuLy/mn6Xor6LnlKjmiLfnmoTlt7LorqLotK3kuqflk4FcbmNvbnN0IGdvb2RzVXNlck9yZGVyTGlzdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS9tYWxsL2dvb2RzT3JkZXIvZ29vZHNVc2VyT3JkZXJMaXN0Jyk7XG5cbi8v6YCA6LSn5pON5L2cXG5jb25zdCByZWZ1bmRBcHBseSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsIGFwaU1hbGwgKyAnL2FwaS9tYWxsL3JlZnVuZC9zYXZlUmVmdW5kQXBwbHknKTtcblxuLy/nlKjmiLfnm7jlhbPkv6Hmga8tLWVuZFxuXG4vL+WVhuWTgeWIhuexuy0tYmVnaW5cbi8v5LiA57qn5YiG57G7XG5jb25zdCByb290Q3RlZ29yeUxpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCBhcGlNYWxsICsgJy9hcGkvbWFsbC9yb290Q3RlZ29yeUxpc3QnKTtcbi8v5LqM57qn5LiJ57qn5YiG57G7XG5jb25zdCBjaGlsZEdvb2RzQ2F0ZXRvcnlMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL21hbGwvY2hpbGRHb29kc0NhdGV0b3J5TGlzdCcpO1xuLy/llYblk4HliIbnsbstLWVuZFxuXG4vL+afpeivouW5v+WRiuWIl+ihqFxuLy8gY29uc3QgZ2V0QWRMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgYXBpTWFsbCArICcvYXBpL2FkdmVydHMvbGlzdCcpO1xuXG4vL+afpeivouW5v+WRiuWIl+ihqFxuY29uc3QgZ2V0QWRMaXN0ID0gKCkgPT4gZGIuY29sbGVjdGlvbignYWR2ZXJ0JykuZ2V0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaG9zdEdvb2RzTGlzdCxcbiAgZ2V0RGlzY292ZXJMaXN0LFxuICBnZXRIb21lRGlzdm9jZXJMaXN0LFxuICBnZXRHb29kc0xpc3QsXG4gIGdvb2RzRGV0YWlsLFxuICB3eEpzQ29kZTJTZXNzaW9uLFxuICB1c2VyMnNlc3Npb24sXG4gIHVzZXJTZ2luSW5mbyxcbiAgZG9TaWduLFxuICBhZGRDYXJ0LFxuICBjYXJ0TGlzdCxcbiAgY2FydENoZWNrLFxuICBjYXJ0Q2hlY2tBbGwsXG4gIGNhcnREZWwsXG4gIGNhcnRVcGRhdGVOdW0sXG4gIHByZU9yZGVyLFxuICByZWZ1bmRBcHBseSxcbiAgcG9pbnRJbmZvLFxuICBicm93c2VJbmZvLFxuICBhZGRCcm93c2VyLFxuICBkZWxVc2VyQnJvd3NlcixcbiAgZmF2b3JpdGVJbmZvLFxuICBtZXNzYWdlSW5mbyxcbiAgcmVnaXN0ZXJVc2VyLFxuICBzZW5kUmFuZENvZGUsXG4gIGdldFVzZXJJbmZvLFxuICBnZXRVc2VyQWRkcmVzcyxcbiAgc2F2ZUFkZHJlc3MsXG4gIHJlY2VpdmVySW5mb0J5SWQsXG4gIGdldFVzZXJBZGRyZXNzLFxuICBhZGRTZWFyY2hLZXl3b3JkLFxuICBzZWFyY2hLZXl3b3JkTGlzdCxcbiAgY2xlYXJTZWFyY2hLZXl3b3JkLFxuICBnZXRNeU9yZGVyTGlzdCxcbiAgc2F2ZUJ5Q2FydCxcbiAgdG9QYXksXG4gIHJvb3RDdGVnb3J5TGlzdCxcbiAgY2hpbGRHb29kc0NhdGV0b3J5TGlzdCxcbiAgZ2V0T3JkZXJJbmZvLFxuICBlZGl0T3JkZXJJbmZvLFxuICBnb29kc1VzZXJPcmRlckxpc3QsXG4gIG9yZGVyRXhwcmVzc0luZm8sXG4gIGRlbFVzZXJBZGRyZXNzLFxuICBnb29kc0Zhdm9yaXRlLFxuICBnb29kc1VuRmF2b3JpdGUsXG4gIGdvb2RzSXNGYXZvcml0ZSxcbiAgZ2V0TXlPcmRlclNpemUsXG4gIGdldFBheU9yZGVyRGV0YWlsLFxuICBnZXRBZExpc3QsXG4gIGdldFNpZ25EYXRlXG59XG4iXX0=