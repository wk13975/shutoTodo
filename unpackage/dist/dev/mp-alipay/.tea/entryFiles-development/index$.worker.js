if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/cmd-icon/cmd-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/cmd-notice-bar/cmd-notice-bar?hash=537d6426963dc14da560a48be9a93c247ff78727');
require('../../components/uni-grid/uni-grid?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-grid-item/uni-grid-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-notice-bar/uni-notice-bar?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/zy-grid/zy-grid?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/m-icon/m-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/m-input?hash=e2b6e48fa2f377559fa96670965233895f86d3ca');
require('../../components/uni-badge/uni-badge?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/w-picker/w-picker?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-collapse/uni-collapse?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-collapse-item/uni-collapse-item?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/m-images?hash=a066cddada181355061950f64776bdfc2762ea42');
require('../../components/mySelecter?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-search-bar/uni-search-bar?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/mescroll-uni/components/mescroll-empty?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/mescroll-uni/components/mescroll-top?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/mescroll-uni/mescroll-body?hash=3607da1a9915067baeb85466f993b176d826f70a');
require('../../components/uni-icon/uni-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/main/main?hash=b60cd49cfa509087ede3d30ffa2dd04166d61c9a');
require('../../pages/login/login?hash=6897e903d083952ecd6187542adcad382dab05ba');
require('../../pages/reg/reg?hash=6897e903d083952ecd6187542adcad382dab05ba');
require('../../pages/pwd/pwd?hash=6897e903d083952ecd6187542adcad382dab05ba');
require('../../pages/user/user?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/todo/todo?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/todo/todoinfo/todoinfo?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/health/health?hash=09c408c6302e8f912e69eb9757ec3f9e89177e28');
require('../../pages/defect/defect?hash=b6e03a9fee93794b420200639488e50b403cdc9b');
require('../../pages/defect/defectList?hash=ca8bf943d16fb5b8018709be1fd8538e4f308ac5');
require('../../pages/selecter/selecter?hash=12b876302b696073a935f588f8641b556d40dd1d');
require('../../pages/selecter/selectAsset?hash=12b876302b696073a935f588f8641b556d40dd1d');
require('../../pages/selecter/selectTeam?hash=12b876302b696073a935f588f8641b556d40dd1d');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}