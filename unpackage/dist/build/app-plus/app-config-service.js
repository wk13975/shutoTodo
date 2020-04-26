
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/main/main","pages/login/login","pages/reg/reg","pages/pwd/pwd","pages/user/user","pages/todo/todo","pages/todo/todoinfo/todoinfo","pages/health/health","pages/defect/defect","pages/defect/defectList","pages/selecter/selecter","pages/selecter/selectAsset","pages/selecter/selectTeam"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#ff9800","backgroundColor":"#fbf9fe"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"首页","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/todo/todo","text":"待办","iconPath":"static/img/todo.png","selectedIconPath":"static/img/seltodo.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"数途EAM","compilerVersion":"2.6.11","entryPagePath":"pages/main/main","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/main/main","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/reg/reg","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/pwd/pwd","meta":{},"window":{"navigationBarTitleText":"找回密码"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/todo/todo","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"待办","enablePullDownRefresh":true,"titleNView":{"buttons":[{"color":"#ff7c25","fontSize":"18","text":"🔃"}]}}},{"path":"/pages/todo/todoinfo/todoinfo","meta":{},"window":{"navigationBarTitleText":"待办信息"}},{"path":"/pages/health/health","meta":{},"window":{"navigationBarTitleText":"员工健康"}},{"path":"/pages/defect/defect","meta":{},"window":{"navigationBarTitleText":"缺陷"}},{"path":"/pages/defect/defectList","meta":{},"window":{"navigationBarTitleText":"缺陷"}},{"path":"/pages/selecter/selecter","meta":{},"window":{"navigationBarTitleText":"位置选择"}},{"path":"/pages/selecter/selectAsset","meta":{},"window":{"navigationBarTitleText":"设备选择"}},{"path":"/pages/selecter/selectTeam","meta":{},"window":{"navigationBarTitleText":"班组选择"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});