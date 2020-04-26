(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/defect/defectList"],{

/***/ 92:
/*!*******************************************************************************!*\
  !*** G:/uniworkpace/loginDemo/main.js?{"page":"pages%2Fdefect%2FdefectList"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _defectList = _interopRequireDefault(__webpack_require__(/*! ./pages/defect/defectList.vue */ 93));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_defectList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 93:
/*!************************************************************!*\
  !*** G:/uniworkpace/loginDemo/pages/defect/defectList.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defectList_vue_vue_type_template_id_1043dd06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defectList.vue?vue&type=template&id=1043dd06& */ 94);
/* harmony import */ var _defectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defectList.vue?vue&type=script&lang=js& */ 96);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _defectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _defectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _defectList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defectList.vue?vue&type=style&index=0&lang=css& */ 98);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _defectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _defectList_vue_vue_type_template_id_1043dd06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _defectList_vue_vue_type_template_id_1043dd06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _defectList_vue_vue_type_template_id_1043dd06___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uniworkpace/loginDemo/pages/defect/defectList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/*!*******************************************************************************************!*\
  !*** G:/uniworkpace/loginDemo/pages/defect/defectList.vue?vue&type=template&id=1043dd06& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_template_id_1043dd06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./defectList.vue?vue&type=template&id=1043dd06& */ 95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_template_id_1043dd06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_template_id_1043dd06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_template_id_1043dd06___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_template_id_1043dd06___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 95:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/uniworkpace/loginDemo/pages/defect/defectList.vue?vue&type=template&id=1043dd06& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "uni-icons": function() {
    return Promise.all(/*! import() | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/components/uni-icons/uni-icons.vue */ 189))
  },
  "uni-search-bar": function() {
    return __webpack_require__.e(/*! import() | components/uni-search-bar/uni-search-bar */ "components/uni-search-bar/uni-search-bar").then(__webpack_require__.bind(null, /*! @/components/uni-search-bar/uni-search-bar.vue */ 234))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 96:
/*!*************************************************************************************!*\
  !*** G:/uniworkpace/loginDemo/pages/defect/defectList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./defectList.vue?vue&type=script&lang=js& */ 97);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 97:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/uniworkpace/loginDemo/pages/defect/defectList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



































































var _vuex = __webpack_require__(/*! vuex */ 16);



var _mescrollMixins = _interopRequireDefault(__webpack_require__(/*! @/components/mescroll-uni/mescroll-mixins.js */ 89));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var uniSearchBar = function uniSearchBar() {__webpack_require__.e(/*! require.ensure | components/uni-search-bar/uni-search-bar */ "components/uni-search-bar/uni-search-bar").then((function () {return resolve(__webpack_require__(/*! @/components/uni-search-bar/uni-search-bar.vue */ 234));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniIcon = function uniIcon() {__webpack_require__.e(/*! require.ensure | components/uni-icon/uni-icon */ "components/uni-icon/uni-icon").then((function () {return resolve(__webpack_require__(/*! @/components/uni-icon/uni-icon.vue */ 241));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { mixins: [_mescrollMixins.default], data: function data() {return { searchVal: '', isLoading: false, downOption: { use: true, // 是否启用下拉刷新; 默认true
        auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
        native: false // 启用系统自带的下拉组件,默认false;仅mescroll-body生效,mescroll-uni无效
        /* (native: true, 则需在pages.json中配置 "enablePullDownRefresh": true) */ }, // 上拉加载的常用配置
      upOption: { use: true, // 是否启用上拉加载; 默认true
        auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
        page: { num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
          size: 10 // 每页数据的数量,默认10
        }, noMoreSize: 100, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
        empty: { tip: '暂无相关数据' } }, list: [{ "STARTDATE": "2019-12-31 11:01", "DESCRIPTION": "办公楼大厅左侧过道灯不亮，请及时处理", "DEPARTMENT_DESCRIPTION": "热电分公司", "STATUS": "缺陷待接收", "WORKORDERID": 12804, "WONUM": '5117', "SRNUM": "2020-02-RDC-0003", "SRTYPE": "三类缺陷" }, { "STARTDATE": "2020-01-14 11:01", "DESCRIPTION": "财务室打印机无法开机", "DEPARTMENT_DESCRIPTION": "热电分公司", "STATUS": "缺陷待接收", "WORKORDERID": 12804, "WONUM": '5115', "SRNUM": "2020-02-RDC-0003", "SRTYPE": "三类缺陷" }, { "STARTDATE": "2020-01-15 11:01", "DESCRIPTION": "出货仓C3码头2号闸门无法关闭", "DEPARTMENT_DESCRIPTION": "热电分公司", "STATUS": "缺陷待接收", "WORKORDERID": 12804, "WONUM": '5111', "SRNUM": "2020-02-RDC-0003", "SRTYPE": "三类缺陷" }] };}, computed: (0, _vuex.mapState)(['forcedLogin', 'hasLogin', 'userName', 'personid']), components: { uniSearchBar: uniSearchBar, uniIcon: uniIcon }, onLoad: function onLoad() {var _this = this;return;if (this.hasLogin) {uni.showLoading({ title: "加载中..." });this.$http.post("/mem/sr/getlist", { "PERSONID": this.personid, "PAGE": 1, "PAGECOUNT": 10 }).
      then(function (res) {
        console.log(res.data);
        if (res.data.META.SUCCESS) {
          console.log("加载成功");
          _this.list = res.data.DATA.LIST;
        } else {
          console.log("遇到错误");
          _this.mescroll.endErr();
          _this.mescroll.endUpScroll(true);
          uni.hideLoading();
          uni.showToast({
            title: res.data.META.MESSAGE,
            icon: "none" });


        }
      }).catch(function (err) {
        console.log("遇到错误" + err.toString());
        _this.mescroll.endErr();
        _this.mescroll.endUpScroll(true);
      });
      /* uni.request({
          	url: "https://ser1.itrobot.site/maxrest/rest/mem/sr/getlist",
          	method: "POST",
          	header: {
          		"MAXAUTH": this.header
          	},
          	data: {
          		"PERSONID": this.personid,
          		"PAGE": 1,
          		"PAGECOUNT": 10
          	},
          	success: (res) => {
          		console.log(res.data);
          		if (res.data.META.SUCCESS) {
          			console.log("加载成功")
          			this.list = res.data.DATA.LIST
          		} else {
          			console.log("遇到错误")
          			this.mescroll.endErr()
          			this.mescroll.endUpScroll(true)
          			uni.showToast({
          				title: res.data.META.MESSAGE,
          				icon: "none"
          			})
          		
          		}
          		},
          	fail:() =>{
          		console.log("遇到错误")
          		this.mescroll.endErr()
          		this.mescroll.endUpScroll(true)
          	},
          	complete() {
          		uni.hideLoading()
          	}
          }); */


    }
  },
  methods: {
    click: function click(e) {
      uni.navigateTo({
        url: 'defect?id=' + e.WORKORDERID.toString() });

    },
    search: function search(res) {

      this.upOption.page.num = 1;
      this.page = 1;
      this.request();
    },
    loadMore: function loadMore(e) {
      this.page++;
      console.log(this.page);
      this.request();
    },
    input: function input(res) {
      this.searchVal = res.value;
    },
    cancel: function cancel(res) {
      uni.showModal({
        content: '点击取消，输入值为：' + res.value,
        showCancel: false });

    },
    request: function request() {var _this2 = this;
      var data;
      if (this.searchVal == "" || this.searchVal == null) {
        data = {
          "PERSONID": this.personid,
          "PAGE": this.page,
          "PAGECOUNT": 10 };

      } else {
        data = {
          "PERSONID": this.personid,
          "PAGE": this.page,
          "PAGECOUNT": 10,
          "ISFUZZY": true,
          "PARAMS": {
            "DESCRIPTION": this.searchVal,
            "DEPARTMENT.DESCRIPTION": this.searchVal,
            "WONUM": this.searchVal } };


      }
      this.$http.post("/mem/sr/getlist", data).then(function (res) {
        console.log(res.data);
        if (res.data.META.SUCCESS) {
          if (_this2.page == 1) _this2.list = []; //如果是第一页需手动置空列表
          _this2.list = _this2.list.concat(res.data.DATA.LIST); //追加新数据
          var curPageLen = res.data.DATA.LIST.length;
          if (curPageLen == 0) {
            _this2.mescroll.endUpScroll(true);
          }
          var hasNext = res.data.DATA.ISLAST;
          if (!hasNext) {
            _this2.upOption.noMoreSize = _this2.page * 10;
          } else {
            _this2.mescroll.endUpScroll(true);
          }
          //if (this.page == 1) {
          _this2.mescroll.endSuccess();

          //this.mescroll.endSuccess(curPageLen, hasNext);
          uni.hideLoading();
        } else {
          _this2.mescroll.endErr();
          _this2.mescroll.endUpScroll(true);
          uni.showToast({
            title: res.data.META.MESSAGE,
            icon: "none" });

        }

      }).catch(function (err) {
        console.log("遇到错误" + err.toString());
        _this2.mescroll.endErr();
        _this2.mescroll.endUpScroll(true);
        uni.hideLoading();
      });


      /* 
          				uni.request({
          					url: "https://ser1.itrobot.site/maxrest/rest/mem/sr/getlist",
          					method: "POST",
          					header: {
          						"MAXAUTH": this.header
          					},
          					data: data,
          					success: (res) => {
          						console.log(res.data);
          						if (res.data.META.SUCCESS) {
          							if (this.page == 1) this.list = []; //如果是第一页需手动置空列表
          							this.list = this.list.concat(res.data.DATA.LIST); //追加新数据
          							let curPageLen = res.data.DATA.LIST.length;
          							if (curPageLen == 0) {
          								this.mescroll.endUpScroll(true);
          							}
          							let hasNext = res.data.DATA.ISLAST;
          							if (!hasNext) {
          								this.upOption.noMoreSize = this.page * 10;
          							} else {
          								this.mescroll.endUpScroll(true);
          							}
          							//if (this.page == 1) {
          							this.mescroll.endSuccess()
          
          							//this.mescroll.endSuccess(curPageLen, hasNext);
          
          						} else {
          							this.mescroll.endErr()
          							this.mescroll.endUpScroll(true)
          							uni.showToast({
          								title: res.data.META.MESSAGE,
          								icon: "none"
          							})
          						}
          
          					},
          					fail: () => {
          						//  请求失败,隐藏加载状态
          						this.mescroll.endErr()
          					},
          					complete() {
          						uni.hideLoading()
          					}
          				}); */
    },
    downCallback: function downCallback() {
      this.page = 1;
      this.upOption.page.num = 1;
      this.request();
    },
    /*上拉加载的回调*/
    upCallback: function upCallback(page) {
      this.page = page.num; // 页码, 默认从1开始
      this.request();
      /* 
                      uni.request({
                      	url: 'xxxx?pageNum=' + pageNum + '&pageSize=' + pageSize,
                      	success: (data) => {
                      		// 接口返回的当前页数据列表 (数组)
                      		let curPageData = data.xxx;
                      		// 接口返回的当前页数据长度 (如列表有26个数据,当前页返回8个,则curPageLen=8)
                      		let curPageLen = curPageData.length;
                      		// 接口返回的总页数 (如列表有26个数据,每页10条,共3页; 则totalPage=3)
                      		let totalPage = data.xxx;
                      		// 接口返回的总数据量(如列表有26个数据,每页10条,共3页; 则totalSize=26)
                      		let totalSize = data.xxx;
                      		// 接口返回的是否有下一页 (true/false)
                      		let hasNext = data.xxx;
                      			//设置列表数据
                      		if (this.mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
                      		this.dataList = this.dataList.concat(curPageData); //追加新数据
                      			this.mescroll.endSuccess(curPageLen, hasNext); 
                      			//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.
                      		//如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据
                      		//如果传了hasNext,则翻到第二页即可显示无更多数据.
                      		//this.mescroll.endSuccess(curPageLen);
                      			// 如果数据较复杂,可等到渲染完成之后再隐藏下拉加载状态: 如
                      		this.$nextTick(() => {
                      			this.mescroll.endSuccess(curPageLen)
                      		})
                      			//curPageLen必传的原因:
                      			// 提示: 您无需额外维护页码和判断显示空布局,mescroll已自动处理好.
                      		// 当您发现结果和预期不一样时, 建议再认真检查以上参数是否传正确
                      	},
                      	fail: () => {
                      		//  请求失败,隐藏加载状态
                      		this.mescroll.endErr()
                      	}
                      }) */






    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 98:
/*!*********************************************************************************************!*\
  !*** G:/uniworkpace/loginDemo/pages/defect/defectList.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./defectList.vue?vue&type=style&index=0&lang=css& */ 99);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_defectList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 99:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/uniworkpace/loginDemo/pages/defect/defectList.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[92,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-alipay/pages/defect/defectList.js.map