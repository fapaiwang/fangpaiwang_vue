
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["src/pages/index/index","src/pages/focus/index","src/pages/customer/customer","src/pages/mine/mine"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#666666","selectedColor":"#E02E24","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"src/pages/index/index","iconPath":"static/tab/home@2x.png","selectedIconPath":"static/tab/home-pick@2x.png","text":"首页"},{"pagePath":"src/pages/focus/index","iconPath":"static/tab/focus@2x.png","selectedIconPath":"static/tab/focus-pick@2x.png","text":"重点推荐"},{"pagePath":"src/pages/customer/customer","iconPath":"static/tab/customer@2x.png","selectedIconPath":"static/tab/customer-pick@2x.png","text":"客服"},{"pagePath":"src/pages/mine/mine","iconPath":"static/tab/mine@2x.png","selectedIconPath":"static/tab/mine-pick@2x.png","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"fangpai","compilerVersion":"2.6.16","entryPagePath":"src/pages/focus/index","entryPageQuery":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/src/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","titleNView":false}},{"path":"/src/pages/focus/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"重点推荐","navigationBarBackgroundColor":"#eee"}},{"path":"/src/pages/customer/customer","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"客服","navigationBarBackgroundColor":"#eee"}},{"path":"/src/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationBarBackgroundColor":"#eee"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});