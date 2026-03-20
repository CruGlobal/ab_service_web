"use strict";
(self["webpackChunkhrteamwidget"] = self["webpackChunkhrteamwidget"] || []).push([["styles_team-widget_css"],{

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1]!./styles/team-widget.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1]!./styles/team-widget.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Jomhuria&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `org-chart .node:hover {
  background-color: #fff;
}

org-chart .node.focused {
  background-color: #fff;
}

org-chart .node {
   position: relative;
   border: 2px dashed transparent;
   text-align: center;
   justify-content: center;
   width: 330px !important;
   font-family: "Roboto", sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   color: #000000;
}

org-chart .node .spacer {
   border: none;
   width: 100%;
   height: 15px;
}

org-chart .node .title {
   position: relative;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   background: #ef3340;
   border-radius: 15px 15px 0px 0px;
   width: 100%;
   font-weight: 500;
   font-size: 18px;
   color: #ffffff;
   z-index: 1;
   height: 40px;
}

org-chart .node .content {
   position: relative;
   top: -15px;
   width: 100%;
   min-height: 325px;
   border-radius: 0 0 15px 15px;
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   background: #ecebeb;
   box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

org-chart tr.lines .topLine {
   border-top: 2px solid black;
}

org-chart tr.lines .rightLine {
   border-right: 1px solid black;
   float: none;
   border-radius: 0;
}

org-chart tr.lines .leftLine {
   border-left: 1px solid black;
   float: none;
   border-radius: 0;
}

org-chart tr.lines .downLine {
   background-color: black;
   margin: 0 auto;
   height: 20px;
   width: 2px;
   float: none;
}

.search-dialog-box {
   border-radius: 15px;
   padding: 10px 20px;
}

.search-dialog-box .webix_win_title .webix_template {
   text-align: left;
   font-size: 26px;
   padding: 4px 0px;
}

.search-dialog-box .webix_list_item {
   align-content: center;
}

.team-group-section {
   width: 100%;
   padding: 8px;
}

.team-group-section.responsibility-centre {
   background-color: #e2edd6;
   border-bottom: dashed #c6dbaf;
}

.team-group-section.leader {
   background-color: #dff2ff;
   border-bottom: dashed #c8dded;
}

.team-group-title {
   font-size: 16px;
   font-weight: 400;
   text-align: left;
   color: #7a7676;
   margin: 0px 3px 8px 0px;
}

.team-group-content {
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 3px;
}

.team-group-record {
   height: 55px;
   padding: 5px;
   width: 100%;
   border-width: 1px;
   border-style: solid;
   border-radius: 4px;
   border-color: #ffffffb3;
   background: #ffffff;
   display: flex;
   flex-direction: row;
   align-items: center;
   font-size: 18px;
   cursor: move;
}

.team-group-record:hover {
   filter: brightness(0.87);
}

.team-group-record-initials {
    width: 40px;
    font-size: 18px;
    font-weight: 500;
    height: 40px;
    background-color: #dadad8;
    border-radius: 40%;
    line-height: 40px;
    margin-right: 5px;
}

.team-group-record-initials .team-group-record-display {
   justify-content: center;
}

.team-group-record-job-title {
   color: #797979;
   font-size: 12px !important;
   font-weight: 400 !important;
   justify-content: left !important;
}

.team-group-record-display {
   display: flex;
   font-size: 14px;
   font-weight: 500;
   flex-direction: row;
   gap: 10px;
}

.team-group-record-display > .team-group-record-display:first-child {
   justify-content: end;
}

.team-group-record-display > .team-group-record-display:last-child {
   justify-content: start;
}

.team-group-record-display img {
   border-radius: 50%;
   width: 30px;
   height: 30px;
}

.team-group-record-display svg {
   margin: 0px 3px;
   width: 12px;
   height: 12px;
   padding: 2px 8px;
   background-color: skyblue;
   border-radius: 5px;
   display: inline-block;
}

/* TODO (Guy): Now we are hardcoding for each display. */
.team-group-record-display-hardcode {
   display: flex;
   flex-direction: row;
}

.rc-record {
   position: relative;
   height: 35px;
   line-height: 35px;
   width: 100%;
   border-radius: 4px;
   background: #ffffff;
   display: flex;
   flex-direction: row;
   align-items: center;
   font-size: 14px;
   font-weight: 500;
   cursor: move;
}

.rc-record-name {
   align-items: center;
   text-align: center;
   width: 100%;
}

.display-block {
   /* display: flex;
   flex: 0.6;
   justify-content: center; */
}

.display-block.display-block-right {
   height: 33px;
   display: flex;
   flex: 0.20;
   background-color: #036;
   border-radius: 10px;
   color: #fff;
}

.display-block.display-block-right > .team-group-record-display {
   flex-direction: row;
   align-items: center;
   justify-content: center;
   height: 100%;
}

.team-button-section {
   display: flex;
   flex-direction: row;
   padding: 3px;
   gap: 6px;
   justify-content: flex-end;
   margin-right: 5px;
   height: 40px;
}

.team-button {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 2px;
   width: 28px;
   height: 28px;
   padding: 2px 4px;
   background: #a7a7a7;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   font-size: 13px;
   color: white !important;
}
.team-button:hover {
   background: #807f7f;
}

.team-chart-toolbar {
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   padding: 17px 24px;
   gap: 10px;
   width: 254px;
   background: #ffffff;
   box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
   border-radius: 20px;
}

.filter-button {
   border-radius: 10px;
   background: #fff;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
   color: #3a51cf;
   font-family: Roboto;
   font-size: 20px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   padding: 7px 15px;
   position: absolute;
}

.filter-button:hover {
   background: #e0e0e0;
   color: #1f39bf;
}

.filter-popup {
   border-radius: 15px;
   background: #fff;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.active-text {
   color: #ffffff;
   font-family: "Jomhuria", sans-serif;
   height: 6.5px;
   font-size: 8px;
   font-weight: 400;
   text-align: center;
}

.is-active {
   background: #4bc90f;
   cursor: default;
}

.is-inactive {
   background: grey;
   cursor: default;
}

.team-form-header .webix_el_label {
   cursor: move !important;
}

.team-form-button {
   padding: 3px 10px;
   text-align: center;
   font-weight: 400;
   font-size: 17px;
   font-family: "Roboto" sans-serif;
   color: white;
   background: #1a3e72;
   border-radius: 10px;
}

.team-form-button:hover {
   background: #0e2341;
}

.team-form-button:disabled {
   background: #AAA;
}

.filter-apply > div > button > span {
   color: #303030 !important;
}

@keyframes skeleton {
   0% { background-color: #ddd; }
   50%   { background-color: #eee; }
   100% { background-color: #ddd}
}

/* -- DATA PANEL -- */
.data-panel-button {
   /* position: fixed; */
   right: 8px;
   /* display: flex; */
}

.data-panel-button .fa-users {
   margin-right: 5px;
}

.data-panel-close {
   background: #5b5b5b;
   color: #FFF;
   border-radius: 5px;
   padding: 4px 5px;
   float: right;
}

.data-panel-close:hover {
   background: #FFF;
   color: #5b5b5b;
   border: 1px solid #5b5b5b;
}

.data-panel-employee {
   cursor: move;
   margin-top: 1px;
   padding-left: 7px;
   border-radius: 4px;
   background-color: #ecebeb;
   height: 33px;
   font-family: "Roboto", sans-serif;
   font-size: 16px;
   line-height: 33px;
}

.data-panel-employee:hover {
   background-color: #dcdcdc;
}

.data-panel-employee .initials {
   border-radius: 4px;
   text-align: center;
   font-weight: 500;
   width: 35px;
   display: inline-block;
   background-color: #fff;
   height: 25px;
   line-height: 25px;
}

.data-panel-employee-list .webix_list_item {
   border-bottom: unset;
   background: transparent;
   overflow: auto;
   max-height: 95%;
}

.data-panel-open {
   background: #FFF;
   color: #5b5b5b;
   font-family: "Roboto";
   font-size: 17px;
   font-weight: 900;
   border-radius: 10px;
   float: right !important;
}

.data-panel-open:hover {
   background: #5b5b5b;
   color: #FFF !important;
}

.data-panel-popup {
   border-radius: 10px;
   background: #fff;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
   padding: 10px;
}

/* .data-panel-tabbar {
   border-width: 1px 0px 1px 0px !important;
   padding: 5px;
}*/

.data-panel-tabbar .webix_all_tabs {
   float: left;
   display: flex;
   gap: 10px;
   height: 30px;
}

.data-panel-tabbar .webix_all_tabs .webix_item_tab {
   color: #000;
   border-radius: 4px;
   background: #FFF;
   font-family: "Roboto", sans-serif;
   font-size: 16px;
   line-height: normal;
   box-shadow: none;
   border: none;
   display: flex;
   width: 100px !important;
   /* height: 24px; */
   justify-content: center;
   align-items: center;
}

.data-panel-tabbar .webix_all_tabs .webix_selected {
   color: #FFF;
   background: #000 !important;
}

.data-panel-tabbar .webix_all_tabs .webix_item_tab:hover {
   color: #000;
   background: rgba(0, 0, 0, 0.20) !important;
   box-shadow: none;
}

.data-panel-tabbar .webix_all_tabs .webix_item_tab:focus {
   color: #FFF;
   background: #222 !important;
   box-shadow: none;
}

/* .data-panel-tabview .webix_multiview {
   margin-top: 0px !important;
}

.data-panel-tabview .webix_multiview .webix_list {
   height: 530px !important;
} */

.switch-data-panel {
   visibility: hidden;
}

/* following a comment here: https://docs.webix.com/api__refs__ui.popup.html
 * so that the popup doesn't close. Not sure if we want to do it this way */
.webix_modal {
   width: 0;
   height: 0;
}

org-chart .team-group-record > .record-edit-icon {
   cursor: pointer;
   visibility: hidden;
   padding: 4px;
   position: fixed;
   right: 3px;
   color: #9f9e9e;
}

org-chart .team-group-record:hover > .record-edit-icon {
   visibility: visible;
}

org-chart .team-group-record:hover > .record-edit-icon:hover {
   color: #606060 !important;
}


org-chart .rc-record > .record-edit-icon {
    position: absolute;
    visibility: hidden;
    color: #9f9e9e;
    cursor: pointer;
    margin-left: 280px;
    margin-top: 3px;
}
org-chart .rc-record:hover > .record-edit-icon {
   visibility: visible;
}

org-chart .rc-record:hover > .record-edit-icon:hover {
   color: #606060 !important;
}

.record-loading-icon {
   color: #606060 !important;
   visibility: hidden;
   padding: 4px;
   position: absolute;
   margin-left: 265px;
}

.cursor-move {
   cursor: move;
}

.progress-status {
   border-radius: 10px;
   background: #fff;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
   color: #5b5b5b;
   font-family: Roboto;
   font-size: 28px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   padding: 3px 12px;
   position: absolute;
}

.progress-status-spin {
   animation: progress-status-spin 1s linear infinite;
}

.progress-status-done {
   color: #3CB371;
   font-size: 30px;
   padding: 2px 12px;
   animation: progress-status-done 0.5s ease-out forwards;
}

@keyframes progress-status-spin {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
}

@keyframes progress-status-done {
    0% { transform: scale(0.5); opacity: 0; }
    80% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
}
`, "",{"version":3,"sources":["webpack://./styles/team-widget.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Jomhuria&display=swap\");\n\norg-chart .node:hover {\n  background-color: #fff;\n}\n\norg-chart .node.focused {\n  background-color: #fff;\n}\n\norg-chart .node {\n   position: relative;\n   border: 2px dashed transparent;\n   text-align: center;\n   justify-content: center;\n   width: 330px !important;\n   font-family: \"Roboto\", sans-serif;\n   font-style: normal;\n   font-weight: 400;\n   font-size: 14px;\n   color: #000000;\n}\n\norg-chart .node .spacer {\n   border: none;\n   width: 100%;\n   height: 15px;\n}\n\norg-chart .node .title {\n   position: relative;\n   display: flex;\n   flex-direction: row;\n   justify-content: center;\n   align-items: center;\n   background: #ef3340;\n   border-radius: 15px 15px 0px 0px;\n   width: 100%;\n   font-weight: 500;\n   font-size: 18px;\n   color: #ffffff;\n   z-index: 1;\n   height: 40px;\n}\n\norg-chart .node .content {\n   position: relative;\n   top: -15px;\n   width: 100%;\n   min-height: 325px;\n   border-radius: 0 0 15px 15px;\n   display: flex;\n   flex-direction: column;\n   margin: 0 auto;\n   background: #ecebeb;\n   box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);\n}\n\norg-chart tr.lines .topLine {\n   border-top: 2px solid black;\n}\n\norg-chart tr.lines .rightLine {\n   border-right: 1px solid black;\n   float: none;\n   border-radius: 0;\n}\n\norg-chart tr.lines .leftLine {\n   border-left: 1px solid black;\n   float: none;\n   border-radius: 0;\n}\n\norg-chart tr.lines .downLine {\n   background-color: black;\n   margin: 0 auto;\n   height: 20px;\n   width: 2px;\n   float: none;\n}\n\n.search-dialog-box {\n   border-radius: 15px;\n   padding: 10px 20px;\n}\n\n.search-dialog-box .webix_win_title .webix_template {\n   text-align: left;\n   font-size: 26px;\n   padding: 4px 0px;\n}\n\n.search-dialog-box .webix_list_item {\n   align-content: center;\n}\n\n.team-group-section {\n   width: 100%;\n   padding: 8px;\n}\n\n.team-group-section.responsibility-centre {\n   background-color: #e2edd6;\n   border-bottom: dashed #c6dbaf;\n}\n\n.team-group-section.leader {\n   background-color: #dff2ff;\n   border-bottom: dashed #c8dded;\n}\n\n.team-group-title {\n   font-size: 16px;\n   font-weight: 400;\n   text-align: left;\n   color: #7a7676;\n   margin: 0px 3px 8px 0px;\n}\n\n.team-group-content {\n   width: 100%;\n   display: flex;\n   flex-direction: column;\n   gap: 3px;\n}\n\n.team-group-record {\n   height: 55px;\n   padding: 5px;\n   width: 100%;\n   border-width: 1px;\n   border-style: solid;\n   border-radius: 4px;\n   border-color: #ffffffb3;\n   background: #ffffff;\n   display: flex;\n   flex-direction: row;\n   align-items: center;\n   font-size: 18px;\n   cursor: move;\n}\n\n.team-group-record:hover {\n   filter: brightness(0.87);\n}\n\n.team-group-record-initials {\n    width: 40px;\n    font-size: 18px;\n    font-weight: 500;\n    height: 40px;\n    background-color: #dadad8;\n    border-radius: 40%;\n    line-height: 40px;\n    margin-right: 5px;\n}\n\n.team-group-record-initials .team-group-record-display {\n   justify-content: center;\n}\n\n.team-group-record-job-title {\n   color: #797979;\n   font-size: 12px !important;\n   font-weight: 400 !important;\n   justify-content: left !important;\n}\n\n.team-group-record-display {\n   display: flex;\n   font-size: 14px;\n   font-weight: 500;\n   flex-direction: row;\n   gap: 10px;\n}\n\n.team-group-record-display > .team-group-record-display:first-child {\n   justify-content: end;\n}\n\n.team-group-record-display > .team-group-record-display:last-child {\n   justify-content: start;\n}\n\n.team-group-record-display img {\n   border-radius: 50%;\n   width: 30px;\n   height: 30px;\n}\n\n.team-group-record-display svg {\n   margin: 0px 3px;\n   width: 12px;\n   height: 12px;\n   padding: 2px 8px;\n   background-color: skyblue;\n   border-radius: 5px;\n   display: inline-block;\n}\n\n/* TODO (Guy): Now we are hardcoding for each display. */\n.team-group-record-display-hardcode {\n   display: flex;\n   flex-direction: row;\n}\n\n.rc-record {\n   position: relative;\n   height: 35px;\n   line-height: 35px;\n   width: 100%;\n   border-radius: 4px;\n   background: #ffffff;\n   display: flex;\n   flex-direction: row;\n   align-items: center;\n   font-size: 14px;\n   font-weight: 500;\n   cursor: move;\n}\n\n.rc-record-name {\n   align-items: center;\n   text-align: center;\n   width: 100%;\n}\n\n.display-block {\n   /* display: flex;\n   flex: 0.6;\n   justify-content: center; */\n}\n\n.display-block.display-block-right {\n   height: 33px;\n   display: flex;\n   flex: 0.20;\n   background-color: #036;\n   border-radius: 10px;\n   color: #fff;\n}\n\n.display-block.display-block-right > .team-group-record-display {\n   flex-direction: row;\n   align-items: center;\n   justify-content: center;\n   height: 100%;\n}\n\n.team-button-section {\n   display: flex;\n   flex-direction: row;\n   padding: 3px;\n   gap: 6px;\n   justify-content: flex-end;\n   margin-right: 5px;\n   height: 40px;\n}\n\n.team-button {\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   gap: 2px;\n   width: 28px;\n   height: 28px;\n   padding: 2px 4px;\n   background: #a7a7a7;\n   border: none;\n   border-radius: 5px;\n   cursor: pointer;\n   font-size: 13px;\n   color: white !important;\n}\n.team-button:hover {\n   background: #807f7f;\n}\n\n.team-chart-toolbar {\n   display: flex;\n   flex-direction: row;\n   align-items: flex-start;\n   padding: 17px 24px;\n   gap: 10px;\n   width: 254px;\n   background: #ffffff;\n   box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);\n   border-radius: 20px;\n}\n\n.filter-button {\n   border-radius: 10px;\n   background: #fff;\n   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n   color: #3a51cf;\n   font-family: Roboto;\n   font-size: 20px;\n   font-style: normal;\n   font-weight: 500;\n   line-height: normal;\n   padding: 7px 15px;\n   position: absolute;\n}\n\n.filter-button:hover {\n   background: #e0e0e0;\n   color: #1f39bf;\n}\n\n.filter-popup {\n   border-radius: 15px;\n   background: #fff;\n   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n\n.active-text {\n   color: #ffffff;\n   font-family: \"Jomhuria\", sans-serif;\n   height: 6.5px;\n   font-size: 8px;\n   font-weight: 400;\n   text-align: center;\n}\n\n.is-active {\n   background: #4bc90f;\n   cursor: default;\n}\n\n.is-inactive {\n   background: grey;\n   cursor: default;\n}\n\n.team-form-header .webix_el_label {\n   cursor: move !important;\n}\n\n.team-form-button {\n   padding: 3px 10px;\n   text-align: center;\n   font-weight: 400;\n   font-size: 17px;\n   font-family: \"Roboto\" sans-serif;\n   color: white;\n   background: #1a3e72;\n   border-radius: 10px;\n}\n\n.team-form-button:hover {\n   background: #0e2341;\n}\n\n.team-form-button:disabled {\n   background: #AAA;\n}\n\n.filter-apply > div > button > span {\n   color: #303030 !important;\n}\n\n@keyframes skeleton {\n   0% { background-color: #ddd; }\n   50%   { background-color: #eee; }\n   100% { background-color: #ddd}\n}\n\n/* -- DATA PANEL -- */\n.data-panel-button {\n   /* position: fixed; */\n   right: 8px;\n   /* display: flex; */\n}\n\n.data-panel-button .fa-users {\n   margin-right: 5px;\n}\n\n.data-panel-close {\n   background: #5b5b5b;\n   color: #FFF;\n   border-radius: 5px;\n   padding: 4px 5px;\n   float: right;\n}\n\n.data-panel-close:hover {\n   background: #FFF;\n   color: #5b5b5b;\n   border: 1px solid #5b5b5b;\n}\n\n.data-panel-employee {\n   cursor: move;\n   margin-top: 1px;\n   padding-left: 7px;\n   border-radius: 4px;\n   background-color: #ecebeb;\n   height: 33px;\n   font-family: \"Roboto\", sans-serif;\n   font-size: 16px;\n   line-height: 33px;\n}\n\n.data-panel-employee:hover {\n   background-color: #dcdcdc;\n}\n\n.data-panel-employee .initials {\n   border-radius: 4px;\n   text-align: center;\n   font-weight: 500;\n   width: 35px;\n   display: inline-block;\n   background-color: #fff;\n   height: 25px;\n   line-height: 25px;\n}\n\n.data-panel-employee-list .webix_list_item {\n   border-bottom: unset;\n   background: transparent;\n   overflow: auto;\n   max-height: 95%;\n}\n\n.data-panel-open {\n   background: #FFF;\n   color: #5b5b5b;\n   font-family: \"Roboto\";\n   font-size: 17px;\n   font-weight: 900;\n   border-radius: 10px;\n   float: right !important;\n}\n\n.data-panel-open:hover {\n   background: #5b5b5b;\n   color: #FFF !important;\n}\n\n.data-panel-popup {\n   border-radius: 10px;\n   background: #fff;\n   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n   padding: 10px;\n}\n\n/* .data-panel-tabbar {\n   border-width: 1px 0px 1px 0px !important;\n   padding: 5px;\n}*/\n\n.data-panel-tabbar .webix_all_tabs {\n   float: left;\n   display: flex;\n   gap: 10px;\n   height: 30px;\n}\n\n.data-panel-tabbar .webix_all_tabs .webix_item_tab {\n   color: #000;\n   border-radius: 4px;\n   background: #FFF;\n   font-family: \"Roboto\", sans-serif;\n   font-size: 16px;\n   line-height: normal;\n   box-shadow: none;\n   border: none;\n   display: flex;\n   width: 100px !important;\n   /* height: 24px; */\n   justify-content: center;\n   align-items: center;\n}\n\n.data-panel-tabbar .webix_all_tabs .webix_selected {\n   color: #FFF;\n   background: #000 !important;\n}\n\n.data-panel-tabbar .webix_all_tabs .webix_item_tab:hover {\n   color: #000;\n   background: rgba(0, 0, 0, 0.20) !important;\n   box-shadow: none;\n}\n\n.data-panel-tabbar .webix_all_tabs .webix_item_tab:focus {\n   color: #FFF;\n   background: #222 !important;\n   box-shadow: none;\n}\n\n/* .data-panel-tabview .webix_multiview {\n   margin-top: 0px !important;\n}\n\n.data-panel-tabview .webix_multiview .webix_list {\n   height: 530px !important;\n} */\n\n.switch-data-panel {\n   visibility: hidden;\n}\n\n/* following a comment here: https://docs.webix.com/api__refs__ui.popup.html\n * so that the popup doesn't close. Not sure if we want to do it this way */\n.webix_modal {\n   width: 0;\n   height: 0;\n}\n\norg-chart .team-group-record > .record-edit-icon {\n   cursor: pointer;\n   visibility: hidden;\n   padding: 4px;\n   position: fixed;\n   right: 3px;\n   color: #9f9e9e;\n}\n\norg-chart .team-group-record:hover > .record-edit-icon {\n   visibility: visible;\n}\n\norg-chart .team-group-record:hover > .record-edit-icon:hover {\n   color: #606060 !important;\n}\n\n\norg-chart .rc-record > .record-edit-icon {\n    position: absolute;\n    visibility: hidden;\n    color: #9f9e9e;\n    cursor: pointer;\n    margin-left: 280px;\n    margin-top: 3px;\n}\norg-chart .rc-record:hover > .record-edit-icon {\n   visibility: visible;\n}\n\norg-chart .rc-record:hover > .record-edit-icon:hover {\n   color: #606060 !important;\n}\n\n.record-loading-icon {\n   color: #606060 !important;\n   visibility: hidden;\n   padding: 4px;\n   position: absolute;\n   margin-left: 265px;\n}\n\n.cursor-move {\n   cursor: move;\n}\n\n.progress-status {\n   border-radius: 10px;\n   background: #fff;\n   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n   color: #5b5b5b;\n   font-family: Roboto;\n   font-size: 28px;\n   font-style: normal;\n   font-weight: 500;\n   line-height: normal;\n   padding: 3px 12px;\n   position: absolute;\n}\n\n.progress-status-spin {\n   animation: progress-status-spin 1s linear infinite;\n}\n\n.progress-status-done {\n   color: #3CB371;\n   font-size: 30px;\n   padding: 2px 12px;\n   animation: progress-status-done 0.5s ease-out forwards;\n}\n\n@keyframes progress-status-spin {\n   0% { transform: rotate(0deg); }\n   100% { transform: rotate(360deg); }\n}\n\n@keyframes progress-status-done {\n    0% { transform: scale(0.5); opacity: 0; }\n    80% { transform: scale(1.1); opacity: 1; }\n    100% { transform: scale(1); opacity: 1; }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./styles/team-widget.css":
/*!********************************!*\
  !*** ./styles/team-widget.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_team_widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1]!./team-widget.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1]!./styles/team-widget.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_team_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_team_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_team_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_team_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

}]);
//# sourceMappingURL=HRstyles_team-widget_css.js.map