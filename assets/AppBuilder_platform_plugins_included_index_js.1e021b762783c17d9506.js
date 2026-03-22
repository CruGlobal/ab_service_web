"use strict";
(self["webpackChunkab_platform_web"] = self["webpackChunkab_platform_web"] || []).push([["AppBuilder_platform_plugins_included_index_js"],{

/***/ 30188
/*!*******************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/index.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_list_FNAbviewlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_list/FNAbviewlist.js */ 62467);
/* harmony import */ var _view_tab_FNAbviewtab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view_tab/FNAbviewtab.js */ 95757);
/* harmony import */ var _view_detail_FNAbviewdetail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view_detail/FNAbviewdetail.js */ 73053);
/* harmony import */ var _view_label_FNAbviewlabel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view_label/FNAbviewlabel.js */ 31697);
/* harmony import */ var _view_text_FNAbviewtext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view_text/FNAbviewtext.js */ 88229);
/* harmony import */ var _view_image_FNAbviewimage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view_image/FNAbviewimage.js */ 58661);
/* harmony import */ var _view_data_select_FNAbviewdataselect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view_data-select/FNAbviewdataselect.js */ 78612);
/* harmony import */ var _view_pdfImporter_FNAbviewpdfimporter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view_pdfImporter/FNAbviewpdfimporter.js */ 27377);
/* harmony import */ var _view_carousel_FNAbviewcarousel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view_carousel/FNAbviewcarousel.js */ 77739);
/* harmony import */ var _view_layout_FNAbviewlayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view_layout/FNAbviewlayout.js */ 22031);
/* harmony import */ var _view_comment_FNAbviewcomment_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view_comment/FNAbviewcomment.js */ 85253);












const AllPlugins = [
   _view_tab_FNAbviewtab_js__WEBPACK_IMPORTED_MODULE_1__["default"],
   _view_list_FNAbviewlist_js__WEBPACK_IMPORTED_MODULE_0__["default"],
   _view_detail_FNAbviewdetail_js__WEBPACK_IMPORTED_MODULE_2__["default"],
   _view_text_FNAbviewtext_js__WEBPACK_IMPORTED_MODULE_4__["default"],
   _view_label_FNAbviewlabel_js__WEBPACK_IMPORTED_MODULE_3__["default"],
   _view_image_FNAbviewimage_js__WEBPACK_IMPORTED_MODULE_5__["default"],
   _view_data_select_FNAbviewdataselect_js__WEBPACK_IMPORTED_MODULE_6__["default"],
   _view_pdfImporter_FNAbviewpdfimporter_js__WEBPACK_IMPORTED_MODULE_7__["default"],
   _view_carousel_FNAbviewcarousel_js__WEBPACK_IMPORTED_MODULE_8__["default"],
   _view_layout_FNAbviewlayout_js__WEBPACK_IMPORTED_MODULE_9__["default"],
   _view_comment_FNAbviewcomment_js__WEBPACK_IMPORTED_MODULE_10__["default"],
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
   load: (AB) => {
      AllPlugins.forEach((plugin) => {
         AB.pluginRegister(plugin);
      });
   },
});


/***/ },

/***/ 77739
/*!********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_carousel/FNAbviewcarousel.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewcarousel)
/* harmony export */ });
/* harmony import */ var _FNAbviewcarouselComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewcarouselComponent.js */ 65832);


// FNAbviewcarousel Web
// A web side import for an ABView.
//
function FNAbviewcarousel({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewPropertyFilterData,
   ABViewPropertyLinkPage,
}) {
   const ABAbviewcarouselComponent = (0,_FNAbviewcarouselComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const ABViewCarouselPropertyComponentDefaults = {
      dataviewID: null, // uuid of ABDatacollection
      field: null, // uuid

      width: 460,
      height: 275,
      showLabel: true,
      hideItem: false,
      hideButton: false,
      navigationType: "corner", // "corner" || "side"
      filterByCursor: false,

      detailsPage: null, // uuid
      detailsTab: null, // uuid
      editPage: null, // uuid
      editTab: null, // uuid
   };

   const ABViewDefaults = {
      key: "carousel", // {string} unique key for this view
      icon: "clone", // {string} fa-[icon] reference for this view
      labelKey: "Carousel", // {string} the multilingual label key for the class label
   };

   function parseIntOrDefault(_this, key) {
      if (typeof _this.settings[key] != "undefined") {
         _this.settings[key] = parseInt(_this.settings[key]);
      } else {
         _this.settings[key] = ABViewCarouselPropertyComponentDefaults[key];
      }
   }

   function parseOrDefault(_this, key) {
      try {
         _this.settings[key] = JSON.parse(_this.settings[key]);
      } catch (e) {
         _this.settings[key] = ABViewCarouselPropertyComponentDefaults[key];
      }
   }

   class ABViewCarouselCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewCarouselPropertyComponentDefaults;
      }

      ///
      /// Instance Methods
      ///

      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values);

         // convert from "0" => 0
         parseIntOrDefault(this, "width");
         parseIntOrDefault(this, "height");

         // json
         parseOrDefault(this, "showLabel");
         parseOrDefault(this, "hideItem");
         parseOrDefault(this, "hideButton");

         this.settings.navigationType =
            this.settings.navigationType ||
            ABViewCarouselPropertyComponentDefaults.navigationType;

         parseOrDefault(this, "filterByCursor");
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }

      get imageField() {
         let dc = this.datacollection;
         if (!dc) return null;

         let obj = dc.datasource;
         if (!obj) return null;

         return obj.fieldByID(this.settings.field);
      }
   }

   return class ABViewCarousel extends ABViewCarouselCore {
      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return this.common().key;
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABAbviewcarouselComponent(this, parentId);
      }

      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues);
      }

      ///
      /// Instance Methods
      ///

      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values);

         // filter property
         this.filterHelper.fromSettings(this.settings.filter);
      }

      get idBase() {
         return `ABViewCarousel_${this.id}`;
      }

      get filterHelper() {
         if (this.__filterHelper == null)
            this.__filterHelper = new ABViewPropertyFilterData(
               this.AB,
               this.idBase
            );

         return this.__filterHelper;
      }

      get linkPageHelper() {
         if (this.__linkPageHelper == null)
            this.__linkPageHelper = new ABViewPropertyLinkPage();

         return this.__linkPageHelper;
      }

      warningsEval() {
         super.warningsEval();

         let field = this.imageField;
         if (!field) {
            this.warningsMessage(
               `can't resolve image field[${this.settings.field}]`
            );
         }
      }
   };
}


/***/ },

/***/ 65832
/*!*****************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_carousel/FNAbviewcarouselComponent.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewcarouselComponent)
/* harmony export */ });
function FNAbviewcarouselComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewcarouselComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewCarousel_${baseView.id}`,
            Object.assign(
               {
                  carousel: "",
               },
               ids
            )
         );

         this._handler_doOnShow = () => {
            this.onShow();
         };

         this._handler_doReload = () => {
            // this.datacollection?.reloadData();
         };

         this._handler_doFilter = (fnFilter, filterRules) => {
            // NOTE: fnFilter is depreciated and will be removed.

            // this.onShow(filterRules);
            const dv = this.datacollection;

            if (!dv) return;

            dv.filterCondition(filterRules);
            dv.reloadData();
         };

         this._handler_busy = () => {
            this.busy();
         };

         this._handler_ready = () => {
            this.ready();
         };
      }

      ui() {
         const ids = this.ids;

         const baseView = this.view;

         this.filterUI = baseView.filterHelper; // component(/* App, idBase */);
         this.linkPage = baseView.linkPageHelper.component(/* App, idBase */);

         const spacer = {};
         const settings = this.settings;

         if (settings.width === 0)
            Object.assign(spacer, {
               width: 1,
            });

         const _ui = super.ui([
            {
               borderless: true,
               cols: [
                  spacer, // spacer
                  {
                     borderless: true,
                     rows: [
                        this.filterUI.ui(), // filter UI
                        {
                           id: ids.carousel,
                           view: "carousel",
                           cols: [],
                           width: settings.width,
                           height: settings.height,
                           navigation: {
                              items: !settings.hideItem,
                              buttons: !settings.hideButton,
                              type: settings.navigationType,
                           },
                           on: {
                              onShow: () => {
                                 const activeIndex = $$(
                                    ids.carousel
                                 ).getActiveIndex();

                                 this.switchImage(activeIndex);
                              },
                           },
                        },
                     ],
                  },
                  spacer, // spacer
               ],
            },
         ]);

         delete _ui.type;

         return _ui;
      }

      // make sure each of our child views get .init() called
      async init(AB) {
         await super.init(AB);

         const dv = this.datacollection;

         if (!dv) {
            AB.notify.builder(`Datacollection is ${dv}`, {
               message: "This is an invalid datacollection",
            });

            return;
         }

         const object = dv.datasource;

         if (!object) {
            AB.notify.developer(`Object is ${dv}`, {
               message: "This is an invalid object",
            });

            return;
         }

         dv.removeListener("loadData", this._handler_doOnShow);
         dv.on("loadData", this._handler_doOnShow);

         dv.removeListener("update", this._handler_doReload);
         dv.on("update", this._handler_doReload);

         dv.removeListener("delete", this._handler_doReload);
         dv.on("delete", this._handler_doReload);

         dv.removeListener("create", this._handler_doReload);
         dv.on("create", this._handler_doReload);

         dv.removeListener("initializingData", this._handler_busy);
         dv.on("initializingData", this._handler_busy);

         dv.removeListener("initializedData", this._handler_ready);
         dv.on("initializedData", this._handler_ready);

         if (this.settings.filterByCursor) {
            ["changeCursor", "cursorStale"].forEach((key) => {
               dv.removeListener(key, this._handler_doOnShow);
               dv.on(key, this._handler_doOnShow);
            });
         }

         const baseView = this.view;

         // filter helper
         baseView.filterHelper.objectLoad(object);
         baseView.filterHelper.viewLoad(this);

         this.filterUI.init(this.AB);
         this.filterUI.removeListener("filter.data", this._handler_doFilter);
         this.filterUI.on("filter.data", this._handler_doFilter);

         // link page helper
         this.linkPage.init({
            view: baseView,
            datacollection: dv,
         });

         // set data-cy
         const $carouselView = $$(this.ids.carousel)?.$view;

         if ($carouselView) {
            $carouselView.setAttribute(
               "data-cy",
               `${baseView.key} ${baseView.id}`
            );
            $carouselView
               .querySelector(".webix_nav_button_prev")
               ?.firstElementChild?.setAttribute(
                  "data-cy",
                  `${baseView.key} button previous ${baseView.id}`
               );
            $carouselView
               .querySelector(".webix_nav_button_next")
               ?.firstElementChild?.setAttribute(
                  "data-cy",
                  `${baseView.key} button next ${baseView.id}`
               );
         }
      }

      /**
       * @method detatch()
       * Will make sure all our handlers are removed from any object
       * we have attached them to.
       *
       * You'll want to call this in situations when we are dynamically
       * creating and recreating instances of the same Widget (like in
       * the ABDesigner).
       */
      detatch() {
         const dv = this.datacollection;

         if (!dv) return;

         dv.removeListener("loadData", this._handler_doOnShow);

         if (this._handler_doReload) {
            dv.removeListener("update", this._handler_doReload);
            dv.removeListener("delete", this._handler_doReload);
            dv.removeListener("create", this._handler_doReload);
         }

         dv.removeListener("initializingData", this._handler_busy);

         dv.removeListener("initializedData", this._handler_ready);

         if (this.settings.filterByCursor)
            ["changeCursor", "cursorStale"].forEach((key) => {
               dv.removeListener(key, this._handler_doOnShow);
            });

         this.filterUI.removeListener("filter.data", this._handler_doFilter);
      }

      myTemplate(row) {
         if (row?.src) {
            const settings = this.settings;

            return `<div class="ab-carousel-image-container">
            <link rel="preload" href="${
               row.src
            }" as="image" fetchpriority="low"/>
            <img id="${this.ids.component}-${row.id}" src="${
               row.src
            }" class="content" ondragstart="return false" loading="lazy" />
            ${
               settings.showLabel
                  ? `<div class="ab-carousel-image-title">${
                       row.label || ""
                    }</div>`
                  : ""
            }
            <div class="ab-carousel-image-icon">
            ${
               settings.detailsPage || settings.detailsTab
                  ? `<span ab-row-id="${row.id}" class="ab-carousel-detail webix_icon fa fa-eye"></span>`
                  : ""
            }
            ${
               settings.editPage || settings.editTab
                  ? `<span ab-row-id="${row.id}" class="ab-carousel-edit webix_icon fa fa-pencil"></span>`
                  : ""
            }
            <span class="webix_icon ab-carousel-zoom-in fa fa-search-plus"></span>
            <span class="webix_icon ab-carousel-zoom-out fa fa-search-minus"></span>
                  <span ab-row-id="${row.id}" ab-img-file="${
               row.imgFile
            }" class="webix_icon ab-carousel-rotate-left fa fa-rotate-left"></span>
               <span ab-row-id="${row.id}" ab-img-file="${
               row.imgFile
            }" class="webix_icon ab-carousel-rotate-right fa fa-rotate-right"></span>
               <span class="webix_icon ab-carousel-fullscreen fa fa-arrows-alt"></span>
               <span style="display: none;" class="webix_icon ab-carousel-exit-fullscreen fa fa-times"></span>
            </div>
         </div>`;
         }
         // empty image
         else return "";
      }

      busy() {
         const $carousel = $$(this.ids.carousel);

         $carousel?.disable();
         $carousel?.showProgress?.({ type: "icon" });
      }

      ready() {
         const $carousel = $$(this.ids.carousel);

         $carousel?.enable();
         $carousel?.hideProgress?.();
      }

      async switchImage(currentPosition) {
         const dv = this.datacollection;

         if (!dv) return;

         // Check want to load more images
         if (
            currentPosition >= this._imageCount - 1 && // check last image
            dv.totalCount > this._rowCount
         ) {
            // loading cursor
            this.busy();

            try {
               await dv.loadData(this._rowCount || 0);
            } catch (err) {
               this.AB.notify.developer(err, {
                  message:
                     "ABViewCarousel:switchImage():Error when load data from a Data collection",
               });
            }

            this.ready();
         }
      }

      onShow(fnFilter = this.filterUI.getFilter()) {
         const ids = this.ids;
         const dv = this.datacollection;

         if (!dv) return;

         const obj = dv.datasource;

         if (!obj) return;

         const field = this.view.imageField;

         if (!field) return;

         if (dv.dataStatus == dv.dataStatusFlag.notInitial) {
            // load data when a widget is showing
            dv.loadData();

            // it will call .onShow again after dc loads completely
            return;
         }

         const settings = this.settings;

         let rows = dv.getData(fnFilter);

         // Filter images by cursor
         if (settings.filterByCursor) {
            const cursor = dv.getCursor();

            if (cursor)
               rows = rows.filter(
                  (r) =>
                     (r[obj.PK()] || r.id || r) ===
                     (cursor[obj.PK()] || cursor.id || cursor)
               );
         }

         const images = [];

         rows.forEach((r) => {
            const imgFile = r[field.columnName];

            if (imgFile) {
               const imgData = {
                  id: r.id,
                  src: `/file/${imgFile}`,
                  imgFile,
               };

               // label of row data
               if (settings.showLabel) imgData.label = obj.displayData(r);

               images.push({
                  css: "image",
                  borderless: true,
                  template: (...params) => {
                     return this.myTemplate(...params);
                  },
                  data: imgData,
               });
            }
         });

         const ab = this.AB;

         // insert the default image to first item
         if (field.settings.defaultImageUrl)
            images.unshift({
               css: "image",
               template: (...params) => this.myTemplate(...params),
               data: {
                  id: ab.uuid(),
                  src: `/file/${field.settings.defaultImageUrl}`,
                  label: this.label("Default image"),
               },
            });

         // empty image
         if (images.length < 1)
            images.push({
               rows: [
                  {
                     view: "label",
                     align: "center",
                     height: settings.height,
                     label: "<div style='display: block; font-size: 180px; background-color: #666; color: transparent; text-shadow: 0px 1px 1px rgba(255,255,255,0.5); -webkit-background-clip: text; -moz-background-clip: text; background-clip: text;' class='fa fa-picture-o'></div>",
                  },
                  {
                     view: "label",
                     align: "center",
                     label: this.label("No image"),
                  },
               ],
            });

         // store total of rows
         this._rowCount = rows.length;

         // store total of images
         this._imageCount = images.length;

         const $carousel = $$(ids.carousel);
         const abWebix = ab.Webix;

         if ($carousel) {
            // re-render
            abWebix.ui(images, $carousel);

            // add loading cursor
            abWebix.extend($carousel, abWebix.ProgressBar);

            // link pages events
            const editPage = settings.editPage;
            const detailsPage = settings.detailsPage;

            // if (detailsPage || editPage) {
            $carousel.$view.onclick = async (e) => {
               if (e.target.className) {
                  if (e.target.className.indexOf("ab-carousel-edit") > -1) {
                     abWebix.html.removeCss($carousel.getNode(), "fullscreen");
                     abWebix.fullscreen.exit();
                     let rowId = e.target.getAttribute("ab-row-id");
                     this.linkPage.changePage(editPage, rowId);
                  } else if (
                     e.target.className.indexOf("ab-carousel-detail") > -1
                  ) {
                     abWebix.html.removeCss($carousel.getNode(), "fullscreen");
                     abWebix.fullscreen.exit();
                     let rowId = e.target.getAttribute("ab-row-id");
                     this.linkPage.changePage(detailsPage, rowId);
                  } else if (
                     e.target.className.indexOf("ab-carousel-fullscreen") > -1
                  ) {
                     $carousel.define("css", "fullscreen");
                     abWebix.fullscreen.set(ids.carousel, {
                        head: {
                           view: "toolbar",
                           css: "webix_dark",
                           elements: [
                              {},
                              {
                                 view: "icon",
                                 icon: "fa fa-times",
                                 click: function () {
                                    abWebix.html.removeCss(
                                       $carousel.getNode(),
                                       "fullscreen"
                                    );
                                    abWebix.fullscreen.exit();
                                 },
                              },
                           ],
                        },
                     });
                  } else if (
                     e.target.className.indexOf("ab-carousel-rotate-left") > -1
                  ) {
                     const rowId = e.target.getAttribute("ab-row-id");
                     const imgFile = e.target.getAttribute("ab-img-file");
                     this.rotateImage(rowId, imgFile, field, "left");
                  } else if (
                     e.target.className.indexOf("ab-carousel-rotate-right") > -1
                  ) {
                     const rowId = e.target.getAttribute("ab-row-id");
                     const imgFile = e.target.getAttribute("ab-img-file");
                     this.rotateImage(rowId, imgFile, field, "right");
                  } else if (
                     e.target.className.indexOf("ab-carousel-zoom-in") > -1
                  ) {
                     this.zoom("in");
                  } else if (
                     e.target.className.indexOf("ab-carousel-zoom-out") > -1
                  ) {
                     this.zoom("out");
                  }
               }
            };
         }
      }

      showFilterPopup($view) {
         this.filterUI.showPopup($view);
      }

      async rotateImage(rowId, imgFile, field, direction = "right") {
         this.busy();

         // call api to rotate
         if (direction == "left") await field.rotateLeft(imgFile);
         else await field.rotateRight(imgFile);

         // refresh image
         const imgElm = document.getElementById(
            `${this.ids.component}-${rowId}`
         );
         if (imgElm) {
            await fetch(imgElm.src, { cache: "reload", mode: "no-cors" });
            imgElm.src = `${imgElm.src}#${new Date().getTime()}`;
         }

         this.ready();
      }

      zoom(inOrOut = "in") {
         const imgContainer = document.getElementsByClassName(
            "ab-carousel-image-container"
         )[0];
         if (!imgContainer) return;

         const imgElem = imgContainer.getElementsByTagName("img")[0];
         if (!imgElem) return;

         const step = 15;
         const height = parseInt(
            (imgElem.style.height || 100).toString().replace("%", "")
         );
         const newHeight = inOrOut == "in" ? height + step : height - step;
         imgElem.style.height = `${newHeight}%`;

         imgContainer.style.overflow = newHeight > 100 ? "auto" : "";
      }
   };
}


/***/ },

/***/ 85253
/*!******************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_comment/FNAbviewcomment.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewcomment)
/* harmony export */ });
/* harmony import */ var _FNAbviewcommentComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewcommentComponent.js */ 89386);


// FNAbviewcomment Web
// A web side import for an ABView.
//
function FNAbviewcomment({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
}) {
   const ABAbviewcommentComponent = (0,_FNAbviewcommentComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const ABViewCommentPropertyComponentDefaults = {
      dataviewID: null,
      columnUser: null,
      columnComment: null,
      columnDate: null,
      height: 300,
      label: "", // label is required and you can add more if the component needs them
      // format:0  	// 0 - normal, 1 - title, 2 - description
   };

   const ABViewDefaults = {
      key: "comment", // {string} unique key for this view
      icon: "comments", // {string} fa-[icon] reference for this view
      labelKey: "Comment", // {string} the multilingual label key for the class label
   };

   class ABViewCommentCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewCommentPropertyComponentDefaults;
      }

      ///
      /// Instance Methods
      ///

      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values);

         // convert from "0" => 0
         // this.settings.format = parseInt(this.settings.format);
         // if this is being instantiated on a read from the Property UI,
         this.settings.height = parseInt(this.settings.height || 0);
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }

      getCurrentUserId() {
         const userObject = this.getUsers();
         const currentUser = this.AB.Account.username();
         //Anonymous User = 0

         if (!userObject) return;

         return userObject.findIndex((e) => e.value === currentUser) + 1;
      }

      getUsers() {
         return this.AB.Account.userList().map((e) => {
            return {
               id: e.username,
               value: e.username,
               image: e.image_id,
            };
         });
      }

      getUserField() {
         var dv = this.datacollection;
         if (!dv) return null;

         var obj = dv.datasource;
         if (!obj) return null;

         return obj.fieldByID(this.settings.columnUser);
      }

      getCommentField() {
         var dv = this.datacollection;
         if (!dv) return null;

         var obj = dv.datasource;
         if (!obj) return null;

         return obj.fieldByID(this.settings.columnComment);
      }

      getDateField() {
         var dv = this.datacollection;
         if (!dv) return null;

         var obj = dv.datasource;
         if (!obj) return null;

         return obj.fieldByID(this.settings.columnDate);
      }

      getUserData() {
         let UserImageField = this.AB.objectUser().fieldByID(
            "6383ce19-b344-44ee-87e6-decced7361f8"
         );

         var userObject = this.getUsers();
         var userList = [];

         if (!userObject) return;

         userObject.forEach((item, index) => {
            var imageURL = "";
            if (item.image) {
               imageURL = UserImageField.urlImage(item.image);
            }
            var user = { id: index + 1, value: item.value, image: imageURL };
            userList.push(user);
         });
         return userList;
      }

      model() {
         let dv = this.datacollection;
         if (!dv) return null; // TODO: refactor in v2

         // get ABModel
         let model = dv.model; // already notified
         if (!model) return null;

         return model;
      }
   }

   return class ABViewComment extends ABViewCommentCore {
      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return this.common().key;
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABAbviewcommentComponent(this, parentId);
      }

      // constructor(values, application, parent, defaultValues) {
      //    super(values, application, parent, defaultValues);
      // }

      warningsEval() {
         super.warningsEval();

         let field = this.getUserField();
         if (!field) {
            this.warningsMessage(
               `can't resolve user field[${this.settings.columnUser}]`
            );
         }

         field = this.getCommentField();
         if (!field) {
            this.warningsMessage(
               `can't resolve comment field[${this.settings.columnComment}]`
            );
         }

         field = this.getDateField();
         if (!field) {
            this.warningsMessage(
               `can't resolve date field[${this.settings.columnDate}]`
            );
         }
      }
   };
}


/***/ },

/***/ 89386
/*!***************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_comment/FNAbviewcommentComponent.js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewcommentComponent)
/* harmony export */ });
function FNAbviewcommentComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewcommentComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewComment_${baseView.id}`,
            Object.assign(
               {
                  comment: "",
               },
               ids
            )
         );
      }

      ui() {
         const baseView = this.view;
         const _ui = super.ui([
            {
               id: this.ids.comment,
               view: "comments",
               users: baseView.getUserData(),
               currentUser: baseView.getCurrentUserId(),
               height: this.settings.height,
               data: this.getCommentData(),
               on: {
                  onBeforeAdd: (id, obj, index) => {
                     this.addComment(obj.text, new Date());
                  },
                  // NOTE: no update event of comment widget !!
                  // Updating event handles in .init function
                  // https://docs.webix.com/api__ui.comments_onbeforeeditstart_event.html#comment-4509366150

                  // onAfterEditStart: function (rowId) {
                  //    let item = this.getItem(rowId);

                  //    _logic.updateComment(rowId, item);
                  // },
                  onAfterDelete: (rowId) => {
                     this.deleteComment(rowId);
                  },
               },
            },
         ]);

         delete _ui.type;

         return _ui;
      }

      async init(AB) {
         await super.init(AB);

         const baseView = this.view;

         baseView.__dvEvents = baseView.__dvEvents || {};

         const ids = this.ids;
         const $comment = $$(ids.comment);

         if ($comment) {
            const $commentList = $comment.queryView({ view: "list" });

            if ($commentList) {
               // Updating comment event
               if (!baseView.__dvEvents.onStoreUpdated)
                  baseView.__dvEvents.onStoreUpdated =
                     $commentList.data.attachEvent(
                        "onStoreUpdated",
                        (rowId, data, operate) => {
                           if (operate === "update") {
                              this.updateComment(rowId, (data || {}).text);
                           }
                        }
                     );

               // Implement progress bar
               webix.extend($commentList, webix.ProgressBar);
            }
         }

         const dv = this.datacollection;

         if (!dv) return;

         // bind dc to component
         // dv.bind($$(ids.comment));

         if (!baseView.__dvEvents.create)
            baseView.__dvEvents.create = dv.on("create", () =>
               this.refreshComment()
            );

         if (!baseView.__dvEvents.update)
            baseView.__dvEvents.update = dv.on("update", () =>
               this.refreshComment()
            );

         if (!baseView.__dvEvents.delete)
            baseView.__dvEvents.delete = dv.on("delete", () =>
               this.refreshComment()
            );

         if (!baseView.__dvEvents.loadData)
            baseView.__dvEvents.loadData = dv.on("loadData", () =>
               this.refreshComment()
            );

         $comment.refresh();
      }

      getCommentData() {
         const baseView = this.view;
         const dv = this.datacollection;

         if (!dv) return null;

         const userCol = baseView.getUserField();
         const commentCol = baseView.getCommentField();
         const dateCol = baseView.getDateField();

         if (!userCol || !commentCol) return null;

         const userColName = userCol.columnName;
         const commentColName = commentCol.columnName;
         const dateColName = dateCol ? dateCol.columnName : null;
         const dataObject = dv.getData();
         const dataList = [];

         dataObject.forEach((item, index) => {
            if (item[commentColName]) {
               const user = baseView.getUserData().find((user) => {
                  return user.value === item[userColName];
               });
               const data = {
                  id: item.id,
                  user_id: user ? user.id : 0,
                  date: item[dateColName] ? new Date(item[dateColName]) : null,
                  default_date: new Date(item["created_at"]),
                  text: item[commentColName],
               };

               dataList.push(data);
            }
         });

         dataList.sort(function (a, b) {
            if (dateColName)
               return new Date(a.date).getTime() - new Date(b.date).getTime();
            else
               return (
                  new Date(a.default_date).getTime() -
                  new Date(b.default_date).getTime()
               );
         });

         return dataList;
      }

      refreshComment() {
         const baseView = this.view;

         if (baseView.__refreshTimeout) clearTimeout(baseView.__refreshTimeout);

         this.busy();

         const ids = this.ids;

         baseView.__refreshTimeout = setTimeout(() => {
            const $comment = $$(ids.comment);

            if (!$comment) return;

            // clear comments
            const $commentList = $comment.queryView({ view: "list" });

            if ($commentList) $commentList.clearAll();

            // populate comments
            const commentData = this.getCommentData();

            if (commentData) {
               $comment.parse(commentData);
            }

            // scroll to the last item
            if ($commentList) $commentList.scrollTo(0, Number.MAX_SAFE_INTEGER);

            delete baseView.__refreshTimeout;

            this.ready();
         }, 90);
      }

      addComment(commentText, dateTime) {
         this.saveData(commentText, dateTime);
      }

      async updateComment(rowId, commentText) {
         const baseView = this.view;
         const model = baseView.model();

         if (!model) return; // already notified

         const commentField = baseView.getCommentField();

         if (!commentField) return; // already notified

         const values = {};

         values[commentField.columnName] = commentText ?? "";

         return await model.update(rowId, values);
      }

      async deleteComment(rowId) {
         const baseView = this.view;
         const model = baseView.model();

         if (!model) return;

         return await model.delete(rowId);
      }

      busy() {
         const ids = this.ids;
         const $comment = $$(ids.comment);

         if (!$comment) return;

         const $commentList = $comment.queryView({ view: "list" });

         if (!$commentList) return;

         $commentList.disable();

         if ($commentList.showProgress)
            $commentList.showProgress({ type: "icon" });
      }

      ready() {
         const ids = this.ids;
         const $comment = $$(ids.comment);

         if (!$comment) return;

         const $commentList = $comment.queryView({ view: "list" });

         if (!$commentList) return;

         $commentList.enable();

         if ($commentList.hideProgress) $commentList.hideProgress();
      }

      async saveData(commentText, dateTime) {
         if (!commentText) return;

         const dv = this.datacollection;

         if (!dv) return;

         const baseView = this.view;
         const model = baseView.model();
         const ab = this.AB;

         if (!model) {
            ab.notify.builder(
               {},
               {
                  message:
                     "ABViewComment.saveData(): could not pull a model to work with.",
                  viewName: baseView.label,
               }
            );

            return;
         }

         const comment = {};
         const userField = baseView.getUserField();

         if (userField) comment[userField.columnName] = ab.Account.username();

         const commentField = baseView.getCommentField();

         if (commentField) comment[commentField.columnName] = commentText;

         const dateField = baseView.getDateField();

         if (dateField) comment[dateField.columnName] = dateTime;

         // add parent cursor to default
         const dvLink = dv.datacollectionLink;

         if (dvLink?.getCursor()) {
            const objectLink = dvLink.datasource;
            const fieldLink = dv.fieldLink;

            if (objectLink && fieldLink) {
               comment[fieldLink.columnName] = {};
               comment[fieldLink.columnName][objectLink.PK()] =
                  dvLink.getCursor().id;
            }
         }

         return await model.create(comment);
      }
   };
}


/***/ },

/***/ 78612
/*!*************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_data-select/FNAbviewdataselect.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewdataselect)
/* harmony export */ });
/* harmony import */ var _FNAbviewdataselectComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewdataselectComponent.js */ 3845);


// FNAbviewdataselect Web
// A web side import for an ABView.
//
function FNAbviewdataselect({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
}) {
   const ABAbviewdataselectComponent = (0,_FNAbviewdataselectComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const ABViewDataSelectPropertyComponentDefaults = {
      dataviewID: null, // uuid of ABDatacollection
   };

   const ABViewDefaults = {
      key: "data-select", // {string} unique key for this view
      icon: "chevron-circle-down", // {string} fa-[icon] reference for this view
      labelKey: "Data Select", // {string} the multilingual label key for the class label
   };

   class ABViewDataSelectCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues ?? ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewDataSelectPropertyComponentDefaults;
      }

      ///
      /// Instance Methods
      ///

      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values);
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }
   }

   return class ABViewDataSelect extends ABViewDataSelectCore {
      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return this.common().key;
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABAbviewdataselectComponent(this, parentId);
      }

      warningsEval() {
         super.warningsEval();

         let DC = this.datacollection;
         if (!DC) {
            this.warningsMessage(
               `can't resolve it's datacollection[${this.settings.dataviewID}]`
            );
         } else {
            if (this.settings.viewType == "connected") {
               const object = DC.datasource;
               const [field] = object.fields(
                  (f) => f.columnName === this.settings.field
               );
               if (!field) {
                  this.warningsMessage(`can't resolve field reference`);
               }
            }
         }
      }
   };
}


/***/ },

/***/ 3845
/*!**********************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_data-select/FNAbviewdataselectComponent.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewdataselectComponent)
/* harmony export */ });
function FNAbviewdataselectComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewdataselectComponent extends ABViewComponentPlugin {
      constructor(baseView, idbase, ids) {
         super(
            baseView,
            idbase || `ABViewDataSelect_${baseView.id}`,
            Object.assign(
               {
                  select: "",
               },
               ids
            )
         );
      }

      ui() {
         const _ui = super.ui([
            {
               view: "combo",
               id: this.ids.select,
               on: {
                  onChange: (n, o) => {
                     if (n !== o) this.cursorChange(n);
                  },
               },
            },
         ]);
         delete _ui.type;

         return _ui;
      }

      async onShow() {
         super.onShow();
         const dc = this.datacollection;
         if (!dc) return;
         await dc.waitReady();
         const labelField = this.AB.definitionByID(
            this.settings.labelField
         )?.columnName;
         const options = dc
            .getData()
            .map((o) => ({ id: o.id, value: o[labelField] }))
            .sort((a, b) => (a.value > b.value ? 1 : -1));
         const $select = $$(this.ids.select);
         $select.define("options", options);
         $select.refresh();
         $select.setValue(dc.getCursor().id);
      }

      cursorChange(n) {
         this.datacollection.setCursor(n);
      }
   };
}


/***/ },

/***/ 73053
/*!****************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_detail/FNAbviewdetail.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewdetail)
/* harmony export */ });
/* harmony import */ var _FNAbviewdetailComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewdetailComponent.js */ 2722);


// Detail view plugin: replaces the original ABViewDetail / ABViewDetailCore.
// All logic from both Core and platform is contained in this file.
function FNAbviewdetail({
   ABViewContainer,
   ABViewContainerComponent,
   ABViewComponentPlugin,
}) {
   const ABViewDetailComponent = (0,_FNAbviewdetailComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewContainerComponent,
      ABViewComponentPlugin,
   });

   const ABViewDetailDefaults = {
      key: "detail",
      icon: "file-text-o",
      labelKey: "Detail(plugin)",
   };

   const ABViewDetailPropertyComponentDefaults = {
      dataviewID: null,
      showLabel: true,
      labelPosition: "left",
      labelWidth: 120,
      height: 0,
   };

   return class ABViewDetailPlugin extends ABViewContainer {
      /**
       * @param {obj} values  key=>value hash of ABView values
       * @param {ABApplication} application the application object this view is under
       * @param {ABView} parent the ABView this view is a child of. (can be null)
       */
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues ?? ABViewDetailDefaults
         );
      }

      static getPluginType() {
         return "view";
      }

      static getPluginKey() {
         return this.common().key;
      }

      static common() {
         return ABViewDetailDefaults;
      }

      static defaultValues() {
         return ABViewDetailPropertyComponentDefaults;
      }

      /**
       * @method fromValues()
       * Initialize this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values);

         this.settings.labelPosition =
            this.settings.labelPosition ||
            ABViewDetailPropertyComponentDefaults.labelPosition;

         this.settings.showLabel = JSON.parse(
            this.settings.showLabel != null
               ? this.settings.showLabel
               : ABViewDetailPropertyComponentDefaults.showLabel
         );

         this.settings.labelWidth = parseInt(
            this.settings.labelWidth ||
               ABViewDetailPropertyComponentDefaults.labelWidth
         );
         this.settings.height = parseInt(
            this.settings.height ??
               ABViewDetailPropertyComponentDefaults.height
         );
      }

      /**
       * @method componentList
       * Return the list of components available on this view to display in the editor.
       */
      componentList() {
         const viewsToAllow = ["label", "text"];
         const allComponents = this.application.viewAll();
         return allComponents.filter((c) =>
            viewsToAllow.includes(c.common().key)
         );
      }

      addFieldToDetail(field, yPosition) {
         if (field == null) return;

         const newView = field
            .detailComponent()
            .newInstance(this.application, this);
         if (newView == null) return;

         newView.settings = newView.settings ?? {};
         newView.settings.fieldId = field.id;
         newView.settings.labelWidth =
            this.settings.labelWidth ||
            ABViewDetailPropertyComponentDefaults.labelWidth;
         newView.settings.alias = field.alias;
         newView.position.y = yPosition;

         this._views.push(newView);
         return newView;
      }

      /**
       * @method component()
       * Return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABViewDetailComponent(this);
      }

      warningsEval() {
         super.warningsEval();

         const DC = this.datacollection;
         if (!DC) {
            this.warningsMessage(
               `can't resolve it's datacollection[${this.settings.dataviewID}]`
            );
         }
      }
   };
}


/***/ },

/***/ 2722
/*!*************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_detail/FNAbviewdetailComponent.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewdetailComponent)
/* harmony export */ });
function FNAbviewdetailComponent({
   ABViewContainerComponent,
   ABViewComponentPlugin,
}) {
   const ContainerComponent =
      ABViewContainerComponent?.default ?? ABViewContainerComponent;
   const Base = ContainerComponent ?? ABViewComponentPlugin;
   if (!Base) {
      return class ABAbviewdetailComponent {};
   }

   return class ABAbviewdetailComponent extends Base {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewDetail_${baseView.id}`,
            Object.assign({ detail: "" }, ids)
         );
         this.idBase = idBase || `ABViewDetail_${baseView.id}`;
      }

      ui() {
         if (!ContainerComponent) {
            return this._uiDataviewFallback();
         }
         const _ui = super.ui();
         const hasContent = (this.view.views() || []).length > 0;
         return {
            type: "form",
            id: this.ids.component,
            borderless: true,
            minHeight: hasContent ? undefined : 120,
            rows: [{ body: _ui }],
         };
      }

      /**
       * Override getElements to inject data-cy into each child view config (like Carousel does in init).
       * Webix applies attributes when the view is created, so this avoids timing issues in tabs/CI.
       */
      getElements(views) {
         const rows = [];
         const componentMap = {};
         let curRowIndex;
         let curColIndex;
         const settings = this.settings;
         const defaultSettings = this.view.constructor.defaultValues();

         views.forEach((v) => {
            let component;
            try {
               component = v.component(this.idBase);
               v.removeAllListeners("changePage");
            } catch (err) {
               component = v.component(this.idBase);
               const ui = component.ui;
               component.ui = (() => ui).bind(component);
            }

            this.viewComponents[v.id] = component;

            if (v.position.y == null || v.position.y !== curRowIndex) {
               curRowIndex = v.position.y || rows.length;
               curColIndex = 0;
               const rowNew = { cols: [] };
               const colNumber = settings.columns || defaultSettings.columns;
               for (let i = 0; i < colNumber; i++)
                  rowNew.cols.push({
                     gravity: settings.gravity?.[i]
                        ? parseInt(settings.gravity[i])
                        : defaultSettings.gravity,
                  });
               rows.push(rowNew);
            }

            const rowIndx = rows.length - 1;
            const curRow = rows[rowIndx];
            const newPos = v.position.x ?? 0;
            const mapKey = `${rowIndx}-${newPos}`;
            let getGrav = 1;
            if (componentMap[mapKey])
               console.error(
                  `Component[${component?.ids?.component}] is overwriting component[${componentMap[mapKey].ids?.component}]. <-- Reorder them to fix.`
               );
            componentMap[mapKey] = component;
            if (curRow.cols[newPos]?.gravity)
               getGrav = curRow.cols[newPos].gravity;

            const _ui = component.ui();
            const info = this._dataCyForView(v);
            if (info?.dataCy) {
               const dataCy = info.dataCy;
               const useRoot = info.useRoot;
               const detailItemId = component.ids?.detailItem;
               _ui.attributes = Object.assign({}, _ui.attributes, {
                  "data-cy": dataCy,
               });
               const prevOnAfterRender = _ui.on?.onAfterRender;
               _ui.on = _ui.on || {};
               _ui.on.onAfterRender = function () {
                  if (typeof prevOnAfterRender === "function")
                     prevOnAfterRender.call(this);
                  try {
                     const idToUse = useRoot ? this.config?.id : detailItemId;
                     let node =
                        (typeof $$ !== "undefined" && idToUse && $$(idToUse)?.$view) ||
                        (typeof document !== "undefined" &&
                           idToUse &&
                           document.getElementById(idToUse));
                     if (!node?.setAttribute && typeof document !== "undefined" && idToUse)
                        node = document.querySelector(`[id$="${idToUse}"]`);
                     if (node?.setAttribute) node.setAttribute("data-cy", dataCy);
                  } catch (e) {}
               };
            }

            this.viewComponentIDs[v.id] = _ui.id;
            _ui.gravity = getGrav;
            curRow.cols[newPos] = _ui;

            this.eventAdd({
               emitter: v,
               eventName: "changePage",
               listener: this._handlerChangePage,
            });
            curColIndex++;
         });

         return rows;
      }

      _uiDataviewFallback() {
         const settings = this.settings;
         const _uiDetail = {
            id: this.ids.detail,
            view: "dataview",
            type: { width: 1000, height: 30 },
            template: (item) => (item ? JSON.stringify(item) : ""),
         };
         if (settings.height !== 0) _uiDetail.height = settings.height;
         else _uiDetail.autoHeight = true;
         const _ui = super.ui([_uiDetail]);
         delete _ui.type;
         return _ui;
      }

      async init(AB, accessLevel = 0, options = {}) {
         await super.init(AB, accessLevel, options);
         try {
            this._setDetailFieldDataCy();
         } catch (e) {
            console.warn("Detail _setDetailFieldDataCy (init)", e);
         }
      }

      onShow() {
         const baseView = this.view;
         try {
            const dataCy = `Detail ${baseView.name?.split(".")[0]} ${baseView.id}`;
            $$(this.ids.component)?.$view?.setAttribute("data-cy", dataCy);
         } catch (e) {
            console.warn("Problem setting data-cy", e);
         }

         const dv = this.datacollection;
         if (dv) {
            const currData = dv.getCursor();
            if (currData) this.displayData(currData);

            ["changeCursor", "cursorStale", "collectionEmpty"].forEach((key) => {
               this.eventAdd({
                  emitter: dv,
                  eventName: key,
                  listener: (...p) => this.displayData(...p),
               });
            });
            this.eventAdd({
               emitter: dv,
               eventName: "create",
               listener: (createdRow) => {
                  if (dv.getCursor()?.id === createdRow.id)
                     this.displayData(createdRow);
               },
            });
            this.eventAdd({
               emitter: dv,
               eventName: "update",
               listener: (updatedRow) => {
                  if (dv.getCursor()?.id === updatedRow.id)
                     this.displayData(updatedRow);
               },
            });
         }

         super.onShow?.();

         try {
            this._setDetailFieldDataCy();
         } catch (e) {
            console.warn("Detail _setDetailFieldDataCy (sync)", e);
         }
         if (typeof requestAnimationFrame !== "undefined") {
            requestAnimationFrame(() => {
               try {
                  this._setDetailFieldDataCy();
               } catch (err) {
                  console.warn("Detail _setDetailFieldDataCy (rAF)", err);
               }
            });
         }
         [0, 100, 300, 600, 1200].forEach((ms) =>
            setTimeout(() => {
               try {
                  this._setDetailFieldDataCy();
               } catch (err) {
                  console.warn("Detail _setDetailFieldDataCy (timeout)", err);
               }
            }, ms)
         );
      }

      /** Build data-cy string for a detail view (matches core). Values trimmed for exact e2e match. */
      _dataCyForView(f) {
         const parentId = String(
            f.parentDetailComponent?.()?.id || f.parent?.id || ""
         ).trim();
         const field = f.field?.();
         const settings = f.settings || {};
         const columnName = String(
            f.key === "detail_connect"
               ? (f.field?.((fl) => fl.id === settings.fieldId)?.columnName ?? "")
               : (field?.columnName ?? "")
         ).trim();
         const fieldId = String(field?.id ?? settings.fieldId ?? "").trim();

         let dataCy = "";
         let useRoot = false;
         switch (f.key) {
            case "detail_text":
               dataCy = `detail text ${columnName} ${fieldId} ${parentId}`;
               useRoot = true;
               break;
            case "detail_connect":
               dataCy = `detail connected ${columnName} ${fieldId} ${parentId}`;
               break;
            case "detail_checkbox":
               dataCy = `detail checkbox ${columnName} ${fieldId} ${parentId}`;
               break;
            case "detail_image":
               dataCy = `detail image ${columnName} ${fieldId} ${parentId}`;
               break;
            case "detail_custom":
               dataCy = `detail custom ${columnName} ${fieldId} ${parentId}`;
               break;
            case "detail_selectivity":
               dataCy = `detail selectivity ${columnName} ${fieldId} ${parentId}`;
               break;
            default:
               dataCy = `detail text ${columnName} ${fieldId} ${parentId}`;
               useRoot = true;
         }
         if (dataCy) dataCy = dataCy.replace(/\s+/g, " ").trim();
         return dataCy ? { dataCy, useRoot } : null;
      }

      /** Set data-cy on one component; use $$(id) or document.getElementById so CI finds element. */
      _setDataCyOnComponent(comp, _f, { dataCy, useRoot }) {
         if (!comp?.ids || !dataCy) return;
         try {
            const id = useRoot ? comp.ids.component : comp.ids.detailItem;
            if (!id) return;
            let el =
               typeof $$ !== "undefined" && $$(id)?.$view
                  ? $$(id).$view
                  : null;
            if (!el && typeof document !== "undefined")
               el = document.getElementById(id);
            if (!el?.setAttribute) return;
            const target =
               !useRoot && el.parentNode ? el.parentNode : el;
            target.setAttribute("data-cy", dataCy);
         } catch (e) {
            console.warn("Problem setting detail field data-cy", e);
         }
      }

      /** Set data-cy on all detail fields; try comp.ids then viewComponentIDs then getElementById. */
      _setDetailFieldDataCy() {
         if (!ContainerComponent || !this.viewComponents) return;
         const viewList = this.view.views() || [];
         const viewComponentIDs = this.viewComponentIDs || {};

         Object.keys(this.viewComponents).forEach((viewId) => {
            const comp = this.viewComponents[viewId];
            const f = viewList.find((v) => v.id === viewId);
            if (!comp || !f) return;

            const info = this._dataCyForView(f);
            if (!info) return;

            const id =
               (info.useRoot
                  ? comp.ids?.component
                  : comp.ids?.detailItem) ||
               viewComponentIDs[viewId];
            if (!id) return;

            let el =
               (typeof $$ !== "undefined" && $$(id)?.$view) ||
               (typeof document !== "undefined" && document.getElementById(id));
            if (!el?.setAttribute && typeof document !== "undefined")
               el = document.querySelector(`[id$="${id}"]`);
            if (!el?.setAttribute) return;

            const target =
               !info.useRoot && el.parentNode ? el.parentNode : el;
            target.setAttribute("data-cy", info.dataCy);
         });
      }

      displayData(rowData = {}) {
         if (!ContainerComponent) return;
         if (rowData == null && this.datacollection)
            rowData = this.datacollection.getCursor() ?? {};

         const views = (this.view.views() || []).sort((a, b) => {
            if (!a?.field?.() || !b?.field?.()) return 0;
            if (a.field().key === "formula" && b.field().key === "calculate")
               return -1;
            if (a.field().key === "calculate" && b.field().key === "formula")
               return 1;
            return 0;
         });

         views.forEach((f) => {
            let val;
            if (f.field) {
               const field = f.field();
               if (!field) return;

               switch (field.key) {
                  case "connectObject":
                     val = field.pullRelationValues(rowData);
                     break;
                  case "list":
                     val = rowData?.[field.columnName];
                     if (!val || (Array.isArray(val) && val.length === 0)) {
                        val = "";
                        break;
                     }
                     if (field.settings.isMultiple === 0) {
                        let myVal = "";
                        (field.settings.options || []).forEach((opt) => {
                           if (opt.id === val) myVal = opt.text;
                        });
                        if (field.settings.hasColors) {
                           let hasCustomColor = "";
                           (field.settings.options || []).forEach((h) => {
                              if (h.text === myVal) {
                                 hasCustomColor = "hascustomcolor";
                              }
                           });
                           const hex = (field.settings.options || []).find(
                              (o) => o.text === myVal
                           )?.hex ?? "#66666";
                           myVal = `<span class="webix_multicombo_value ${hasCustomColor}" style="background-color: ${hex} !important;"><span>${myVal}</span></span>`;
                        }
                        val = myVal;
                     } else {
                        const items = val.map((value) => {
                           let myVal = "";
                           (field.settings.options || []).forEach((opt) => {
                              if (opt.id === value.id) myVal = opt.text;
                           });
                           const optionHex =
                              field.settings.hasColors && value.hex
                                 ? `background: ${value.hex};`
                                 : "";
                           const hasCustomColor =
                              field.settings.hasColors && value.hex
                                 ? "hascustomcolor"
                                 : "";
                           return `<span class="webix_multicombo_value ${hasCustomColor}" style="${optionHex}" optvalue="${value.id}"><span>${myVal}</span></span>`;
                        });
                        val = items.join("");
                     }
                     break;
                  case "user":
                     val = field.pullRelationValues(rowData);
                     break;
                  case "file":
                     val = rowData?.[field.columnName] ?? "";
                     break;
                  case "formula":
                     val = rowData ? field.format(rowData, false) : "";
                     break;
                  default:
                     val = field.format(rowData);
               }
            }

            const vComponent =
               this.viewComponents?.[f.id] ?? f.component(this.idBase);
            vComponent?.setValue?.(val);
            vComponent?.displayText?.(rowData);

            try {
               const dataCyInfo = this._dataCyForView(f);
               if (dataCyInfo)
                  this._setDataCyOnComponent(vComponent, f, dataCyInfo);
            } catch (e) {
               console.warn("Detail data-cy in displayData", e);
            }
         });

         [0, 100, 400].forEach((ms) =>
            setTimeout(() => this._setDetailFieldDataCy(), ms)
         );
      }
   };
}

/***/ },

/***/ 58661
/*!**************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_image/FNAbviewimage.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewimage)
/* harmony export */ });
/* harmony import */ var _FNAbviewimageComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewimageComponent.js */ 23498);


// FNAbviewimage Web
// A web side import for an ABView.
//
function FNAbviewimage({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
}) {
   const ABAbviewimageComponent = (0,_FNAbviewimageComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const ABViewImagePropertyComponentDefaults = {
      filename: "",
      width: 200,
      height: 100,
   };

   const ABViewDefaults = {
      key: "image", // {string} unique key for this view
      icon: "picture-o", // {string} fa-[icon] reference for this view
      labelKey: "Image", // {string} the multilingual label key for the class label
   };

   class ABViewImageCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewImagePropertyComponentDefaults;
      }

      ///
      /// Instance Methods
      ///

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }

      /**
       * @property datacollection
       * return data source
       * NOTE: this view doesn't track a DataCollection.
       * @return {ABDataCollection}
       */
      get datacollection() {
         return null;
      }

      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values);

         // convert from "0" => 0
         this.settings.width = parseInt(
            this.settings.width || ABViewImagePropertyComponentDefaults.width
         );
         this.settings.height = parseInt(
            this.settings.height || ABViewImagePropertyComponentDefaults.height
         );
      }
   }

   return class ABViewImage extends ABViewImageCore {
      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return this.common().key;
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABAbviewimageComponent(this, parentId);
      }

      // constructor(values, application, parent, defaultValues) {
      //    super(values, application, parent, defaultValues);
      // }

      //
      //	Editor Related
      //

      warningsEval() {
         super.warningsEval();

         if (!this.settings.filename) {
            this.warningsMessage(`has no image set`);
         }
      }
   };
}


/***/ },

/***/ 23498
/*!***********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_image/FNAbviewimageComponent.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewimageComponent)
/* harmony export */ });
function FNAbviewimageComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewimageComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewImage_${baseView.id}`,
            Object.assign({ image: "" }, ids)
         );
      }

      ui() {
         const settings = this.settings;
         const _ui = super.ui([
            {
               cols: [
                  {
                     id: this.ids.image,
                     view: "template",
                     template: "",
                     height: settings.height,
                     width: settings.width,
                  },
                  {},
               ],
            },
         ]);

         delete _ui.type;

         return _ui;
      }

      async init(AB) {
         await super.init(AB);

         const $image = $$(this.ids.image);
         if (!$image) return;

         const settings = this.settings;

         if (settings.filename)
            $image.define(
               "template",
               `<img src="/file/${settings.filename}" height="${settings.height}" width="${settings.width}">`
            );
         else $image.define("template", "");

         $image.refresh();
      }
   };
}


/***/ },

/***/ 64326
/*!***********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_label/FNAbviewLabelComponent.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewLabelComponent)
/* harmony export */ });
function FNAbviewLabelComponent({
   // AB,
   ABViewComponentPlugin,
}) {
   return class ABViewLabelComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewLabel_${baseView.id}`,
            Object.assign(
               {
                  template: "",
               },
               ids,
            ),
         );
      }

      /**
       * @method ui
       * return the Webix UI definition for this component.
       * @return {object} Webix UI definition
       */
      ui() {
         const baseView = this.view
         baseView.text = baseView.text || this.view.settings.text
         this.settings = this.view.settings

         const _ui = super.ui([
            this.uiFormatting({
               view: "label",
               label: baseView.text || "*",
               align: this.settings.alignment,
               type: {
                  height: "auto",
               },
            }),
         ]);

         delete _ui.type;

         return _ui;
      }
      /**
       * @method uiFormatting
       * a common routine to properly update the displayed label
       * UI with the css formatting for the given .settings
       * @param {obj} _ui the current webix.ui definition
       * @return {obj} a properly formatted webix.ui definition
       */
      uiFormatting(ui) {
         // add different css settings based upon it's format
         // type.
         this.settings = this.view.settings
         switch (parseInt(this.settings.format)) {
            // normal
            case 0:
               ui.css = "ab-component-label ab-ellipses-text";
               break;

            // title
            case 1:
               ui.css = "ab-component-header ab-ellipses-text";
               break;

            // description
            case 2:
               ui.css = "ab-component-description ab-ellipses-text";
               break;
         }

         return ui;
      }
      /**
       * @method onShow
       * called when the component is shown.
       * perform any additional initialization here.
       */
      onShow() {
         super.onShow();
      }
   };
}


/***/ },

/***/ 31697
/*!**************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_label/FNAbviewlabel.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNViewLabel)
/* harmony export */ });
/* harmony import */ var _FNAbviewLabelComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewLabelComponent.js */ 64326);



// FNViewLabel Web
// A web side import for an ABView.
//
function FNViewLabel({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewPlugin,
   ABViewComponentPlugin,
}) {
   const ABViewLabelComponent = (0,_FNAbviewLabelComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ ABViewComponentPlugin });


   // Define the default values for this components settings:
   // when a new instance of your widget is created, these values will be
   // the default settings
   const ABViewLabelComponentDefaults = {
      text: "", // {string}
      format: 0,
      alignment: "left",
   };

   // Define the Default Values for this ABView
   // These are used by the platform and ABDesigner to display the view.
   const ABViewDefaults = {
      key: "label", // {string} unique key for this view
      icon: "font", // {string} fa-[icon] reference for this view
      labelKey: "Label", // {string} the multilingual label key for the class label
   };

   class ABViewLabelCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      /**
       * @method common
       * return the common values for this view.
       * @return {obj} common values
       */
      static common() {
         return ABViewDefaults;
      }

      /**
       * @method defaultValues
       * return the default values for this view.
       * @return {obj} default values
       */
      static defaultValues() {
         return ABViewLabelComponentDefaults;
      }

      /**
       * @method toObj()
       * properly compile the current state of this ABView instance
       * into the values needed for saving to the DB.
       * @return {json}
       */
      toObj() {
         // NOTE: ABView auto translates/untranslates "label"
         // add in any additional fields here:
         this.unTranslate(this, this, ["text"]);

         var obj = super.toObj();
         obj.views = [];
         return obj;
      }
      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values); // <-- this performs the translations
         this.settings = this.settings || {};

         // if this is being instantiated on a read from the Property UI,
         // .text is coming in under .settings.label
         this.text = values.text || values.settings.text || "*text";

         this.settings.format =
            this.settings.format || ABViewLabelPropertyComponentDefaults.format;
         this.settings.alignment =
            this.settings.alignment ||
            ABViewLabelPropertyComponentDefaults.alignment;

         // we are not allowed to have sub views:
         this._views = [];

         // convert from "0" => 0
         this.settings.format = parseInt(this.settings.format);

         // NOTE: ABView auto translates/untranslates "label"
         // add in any additional fields here:
         this.translate(this, this, ["label", "text"]);
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         // other components cannot be placed inside
         return [];
      }
      //// Allow external interface to manipulate our settings:
      /**
       * @method formatNormal
       * display text in the normal format.
       */
      formatNormal() {
         this.settings.format = 0;
      }

      /**
       * @method formatTitle
       * display text as a Title.
       */
      formatTitle() {
         this.settings.format = 1;
      }

      /**
       * @method formatDescription
       * display text as a description.
       */
      formatDescription() {
         this.settings.format = 2;
      }
      warningsEval() {
         super.warningsEval();

         if (!this.text) {
            this.warningsMessage("has no text value set.");
         }
      }
   }

   return class ABViewLabel extends ABViewLabelCore {
      constructor(...params) {
         super(...params);
      }

      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return "label";
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABViewLabelComponent(this, parentId);
      }
   };
}



/***/ },

/***/ 22031
/*!****************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_layout/FNAbviewlayout.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewlayout)
/* harmony export */ });
/* harmony import */ var _FNAbviewlayoutComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewlayoutComponent.js */ 82620);


// FNAbviewlayout Web
// A web side import for an ABView.
//
function FNAbviewlayout({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
}) {
   const ABAbviewlayoutComponent = (0,_FNAbviewlayoutComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const PropertyComponentDefaults = {
      label: "",
      numColumns: 1, // The number of columns for this layout
   };

   const ABViewDefaults = {
      key: "layout", // {string} unique key for this view
      icon: "columns", // {string} fa-[icon] reference for this view
      labelKey: "Layout", // {string} the multilingual label key for the class label
   };

   class ABViewLayoutCore extends ABViewWidgetPlugin {
      /**
       * @param {obj} values  key=>value hash of ABView values
       * @param {ABApplication} application the application object this view is under
       * @param {ABView} parent the ABView this view is a child of. (can be null)
       */
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return PropertyComponentDefaults;
      }

      /**
       * @method addColumn
       * method to actually add a new ABView as one of our columns.
       * This is called by the static .addView() method.
       */
      addColumn() {
         this._views.push(
            this.application.viewNew(
               {
                  key: ABViewContainer.common().key,
               },
               this
            )
         );
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       * @param {bool} isEdited  is this component currently in the Interface Editor
       * @return {array} of ABView objects.
       */
      componentList(isEdited) {
         if (isEdited) {
            // if the layout component is being edited in the editor (isEdited == true)
            // then we return [];
            return [];
         } else {
            // the layout view doesn't care what components are offered, it get's
            // the list from it's parent view.
            // ## NOTE: layout views should not be root views.
            if (this.parent) {
               return this.parent.componentList(false);
            } else {
               return [];
            }
         }
      }

      /**
       * @property datacollection
       * return data source
       * NOTE: this view doesn't track a DataCollection.
       * @return {ABDataCollection}
       */
      get datacollection() {
         return null;
      }
   }

   return class ABViewLayout extends ABViewLayoutCore {
      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return this.common().key;
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABAbviewlayoutComponent(this, parentId);
      }

      warningsEval() {
         super.warningsEval();

         if (this._views.length == 0) {
            this.warningsMessage("has no columns set.");
         }
      }
   };
}


/***/ },

/***/ 82620
/*!*************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_layout/FNAbviewlayoutComponent.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewlayoutComponent)
/* harmony export */ });
function FNAbviewlayoutComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewlayoutComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewLayout_${baseView.id}`, ids);

         const viewComponents = this.viewComponents ?? {}; // { viewId: viewComponent, ..., viewIdn: viewComponent }

         baseView.views().forEach((v) => {
            viewComponents[v.id] = v.component();
         });

         this.viewComponents = viewComponents;
      }

      ui() {
         const viewComponents = this.viewComponents;
         const uiComponents = Object.keys(viewComponents)
            .map((vId) => viewComponents[vId].ui())
            .filter((ui) => ui);

         if (uiComponents.length == 0) {
            uiComponents.push({});
            uiComponents.push({
               view: "label",
               label: this.label("no content"),
            });
            uiComponents.push({});
         }

         const _ui = super.ui([
            {
               view: "layout",
               cols: uiComponents,
            },
         ]);

         delete _ui.type;

         return _ui;
      }

      async init(AB, accessLevel) {
         await super.init(AB);

         const baseView = this.view;

         // make sure each of our child views get .init() called
         baseView.views().forEach((v) => {
            const component = this.viewComponents[v.id];

            // initial sub-component
            component?.init(AB, accessLevel);

            // Trigger 'changePage' event to parent
            baseView.eventAdd({
               emitter: v,
               eventName: "changePage",
               listener: (pageId) => {
                  baseView.changePage(pageId);
               },
            });
         });
      }

      onShow() {
         // calll .onShow in child components
         this.view.views().forEach((v) => {
            const component = this.viewComponents[v.id];
            component?.onShow();
         });
      }
   };
}


/***/ },

/***/ 62467
/*!************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_list/FNAbviewlist.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewlist)
/* harmony export */ });
/* harmony import */ var _FNAbviewlistComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewlistComponent.js */ 68768);


// FNAbviewlist Web
// A web side import for an ABView.
//
function FNAbviewlist({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
}) {
   const ABAbviewlistComponent = (0,_FNAbviewlistComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const ABViewListPropertyComponentDefaults = {
      dataviewID: null,
      field: null,
      height: 0,
   };

   const ABViewDefaults = {
      key: "list", // {string} unique key for this view
      icon: "list-ul", // {string} fa-[icon] reference for this view
      labelKey: "List(plugin)", // {string} the multilingual label key for the class label
   };

   class ABViewListCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewListPropertyComponentDefaults;
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }

      field() {
         var dv = this.datacollection;
         if (!dv) return null;

         var object = dv.datasource;
         if (!object) return null;

         return object.fieldByID(this.settings.field);
      }
   }

   return class ABViewList extends ABViewListCore {
      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return this.common().key;
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABAbviewlistComponent(this, parentId);
      }

      // constructor(values, application, parent, defaultValues) {
      //    super(values, application, parent, defaultValues);
      // }

      warningsEval() {
         super.warningsEval();
         let DC = this.datacollection;
         if (!DC) {
            this.warningsMessage(
               `can't resolve it's datacollection[${this.settings.dataviewID}]`
            );
         }
      }
   };
}


/***/ },

/***/ 68768
/*!*********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_list/FNAbviewlistComponent.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewlistComponent)
/* harmony export */ });
function FNAbviewlistComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewlistComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewList_${baseView.id}`,
            Object.assign({ list: "" }, ids)
         );
      }

      ui() {
         const settings = this.settings;
         const _uiList = {
            id: this.ids.list,
            view: "dataview",
            type: {
               width: 1000,
               height: 30,
            },
            template: (item) => {
               const field = this.view.field();

               if (!field) return "";

               return field.format(item);
            },
         };

         // set height or autoHeight
         if (settings.height !== 0) _uiList.height = settings.height;
         else _uiList.autoHeight = true;

         const _ui = super.ui([_uiList]);

         delete _ui.type;

         return _ui;
      }

      async init(AB) {
         await super.init(AB);

         const dc = this.datacollection;

         if (!dc) return;

         // bind dc to component
         dc.bind($$(this.ids.list));
         // $$(ids.list).sync(dv);
      }
   };
}


/***/ },

/***/ 27377
/*!**************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_pdfImporter/FNAbviewpdfimporter.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewpdfimporter)
/* harmony export */ });
/* harmony import */ var _FNAbviewpdfimporterComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewpdfimporterComponent.js */ 15110);


// FNAbviewpdfimporter Web
// A web side import for an ABView.
//
function FNAbviewpdfimporter({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
}) {
   const ABAbviewpdfimporterComponent = (0,_FNAbviewpdfimporterComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const ABSubmitRule = __webpack_require__(/*! ../../../../rules/ABViewRuleListFormSubmitRules */ 41171);

   const ABViewPDFImporterPropertyComponentDefaults = {
      dataviewID: null,
      fieldID: null,

      //	[{
      //		action: {string},
      //		when: [
      //			{
      //				fieldId: {UUID},
      //				comparer: {string},
      //				value: {string}
      //			}
      //		],
      //		value: {string}
      //	}]
      submitRules: [],
   };

   const ABViewDefaults = {
      key: "pdfImporter", // {string} unique key for this view
      icon: "file-pdf-o", // {string} fa-[icon] reference for this view
      labelKey: "PDF Importer", // {string} the multilingual label key for the class label
   };

   class ABViewPDFImporterCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewPDFImporterPropertyComponentDefaults;
      }

      ///
      /// Instance Methods
      ///

      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values);

         this.settings.dataviewID =
            this.settings.dataviewID ??
            ABViewPDFImporterPropertyComponentDefaults.dataviewID;

         this.settings.fieldID =
            this.settings.fieldID ??
            ABViewPDFImporterPropertyComponentDefaults.fieldID;
      }

      /**
       * @method toObj()
       *
       * properly compile the current state of this ABViewLabel instance
       * into the values needed for saving.
       *
       * @return {json}
       */
      toObj() {
         var obj = super.toObj();

         obj.settings = obj.settings ?? {};

         return obj;
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }

      doSubmitRules(rowDatas) {
         const object = this.datacollection.datasource;

         const SubmitRules = new ABSubmitRule();
         SubmitRules.formLoad(this);
         SubmitRules.fromSettings(this.settings.submitRules);
         SubmitRules.objectLoad(object);

         if (rowDatas && !Array.isArray(rowDatas)) rowDatas = [rowDatas];

         rowDatas?.forEach((rowData) => {
            SubmitRules.process({ data: rowData, form: this });
         });
      }
   }

   return class ABViewPDFImporter extends ABViewPDFImporterCore {
      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return this.common().key;
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABAbviewpdfimporterComponent(this, parentId);
      }
   };
}


/***/ },

/***/ 15110
/*!***********************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_pdfImporter/FNAbviewpdfimporterComponent.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewpdfimporterComponent)
/* harmony export */ });
function FNAbviewpdfimporterComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   const SMALL_PAGE_WIDTH = 150;
   const BIG_PAGE_WIDTH = 250;

   return class ABAbviewpdfimporterComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewPDFImporter_${baseView.id}`,
            Object.assign(
               {
                  fileUploader: "",
                  uploadList: "",
                  dataview: "",
                  fullImagePopup: "",
                  fullImageCarousel: "",
                  fullImageSelectToggle: "",
                  fullImageLabel: "",
                  selectAll: "",
                  unselectAll: "",
                  submit: "",
               },
               ids
            )
         );
      }

      ui() {
         const ids = this.ids;
         const self = this;
         const _ui = super.ui([
            {
               rows: [
                  {
                     cols: [
                        {
                           id: ids.fileUploader,
                           view: "uploader",
                           name: "records",
                           link: ids.uploadList,
                           label: this.label("Upload a PDF file"),
                           inputWidth: 200,
                           width: 210,
                           accept: "application/pdf",
                           multiple: false,
                           autosend: false,
                           type: "icon",
                           icon: "fa fa-file-pdf-o",
                           on: {
                              onBeforeFileAdd: (fileInfo) => {
                                 this._csvFileInfo = fileInfo;
                                 if (!this._csvFileInfo) return false;

                                 this.loadFile();

                                 return true;
                              },
                           },
                        },
                        {
                           id: ids.uploadList,
                           view: "list",
                           type: "uploader",
                           autoheight: true,
                           borderless: true,
                           onClick: {
                              webix_remove_upload: (e, id) => {
                                 this.removeFile(id);
                              },
                           },
                        },
                        {
                           width: 10,
                        },
                        {
                           view: "button",
                           type: "icon",
                           icon: "fa fa-th-large",
                           maxWidth: 30,
                           click: () => {
                              this.displayBig();
                           },
                        },
                        {
                           view: "button",
                           type: "icon",
                           icon: "fa fa-th",
                           maxWidth: 30,
                           click: () => {
                              this.displaySmall();
                           },
                        },
                     ],
                  },
                  {
                     height: 10,
                  },
                  {
                     id: ids.dataview,
                     view: "dataview",
                     borderless: true,
                     css: "pdf-data-view",
                     multiselect: false,
                     select: false,
                     type: {
                        template: (item) => {
                           return this.pageTemplate(item);
                        },
                        width: "auto",
                        height: "auto",
                     },
                     on: {
                        onSelectChange: (pageIds) => {
                           this.renderPageImages();
                        },
                        onItemClick: function (id, e, node) {
                           // Unselect
                           if (
                              e?.target?.className?.includes?.("unselect-page")
                           ) {
                              self.unselect(id);
                           }
                           // Select
                           else if (
                              e?.target?.className?.includes?.("select-page")
                           ) {
                              self.select(id);
                           }
                           // Zoom
                           else if (
                              e?.target?.className?.includes?.("pdf-zoom")
                           ) {
                              self._fullImagePopup.show();
                              $$(self.ids.fullImageCarousel).setActiveIndex(
                                 parseInt(id ?? 0) - 1
                              );
                              self.refreshFullImage();
                           }
                        },
                     },
                  },
                  {
                     height: 10,
                  },
                  {
                     cols: [
                        {
                           id: ids.selectAll,
                           view: "button",
                           type: "icon",
                           icon: "fa fa-check-square-o",
                           maxWidth: 160,
                           label: this.label("Select All"),
                           click: () => {
                              this.selectAll();
                           },
                        },
                        {
                           id: ids.unselectAll,
                           view: "button",
                           type: "icon",
                           icon: "fa fa-square-o",
                           maxWidth: 160,
                           label: this.label("Unselect All"),
                           click: () => {
                              this.unselectAll();
                           },
                        },
                        {
                           fillspace: true,
                        },
                        {
                           id: ids.submit,
                           view: "button",
                           css: "webix_primary",
                           type: "icon",
                           icon: "fa fa-floppy-o",
                           disabled: true,
                           maxWidth: 180,
                           label: this.label("Submit"),
                           click: () => {
                              this.submit();
                           },
                        },
                     ],
                  },
               ],
            },
         ]);

         return _ui;
      }

      uiPopup() {
         const ids = this.ids;
         return {
            id: ids.fullImagePopup,
            view: "window",
            modal: true,
            position: "center",
            headHeight: 25,
            head: {
               cols: [
                  { fillspace: true },
                  {
                     view: "button",
                     type: "icon",
                     icon: "fa fa-times",
                     maxWidth: 25,
                     height: 25,
                     click: () => {
                        $$(ids.fullImagePopup)?.hide();
                     },
                  },
               ],
            },
            body: {
               rows: [
                  {
                     id: ids.fullImageCarousel,
                     view: "carousel",
                     width: 600,
                     height: 500,
                     navigation: {
                        items: true,
                        buttons: true,
                        type: "side",
                     },
                     cols: [],
                     on: {
                        onShow: () => {
                           this.refreshFullImage();
                        },
                     },
                  },
                  {
                     view: "layout",
                     cols: [
                        {
                           id: ids.fullImageSelectToggle,
                           view: "toggle",
                           type: "icon",
                           offIcon: "fa fa-square-o",
                           onIcon: "fa fa-check-square-o",
                           offLabel: this.label("Unselected"),
                           onLabel: this.label("Selected"),
                           width: 130,
                           on: {
                              onChange: (isSelected) => {
                                 const activeIndex = $$(
                                    this.ids.fullImageCarousel
                                 ).getActiveIndex();
                                 const pageNumber = activeIndex + 1;

                                 if (isSelected) this.select(pageNumber);
                                 else this.unselect(pageNumber);
                              },
                           },
                        },
                        {
                           fillspace: true,
                        },
                        {
                           id: ids.fullImageLabel,
                           view: "label",
                           width: 120,
                           label: `${this.label("Page Number")}: ${"#"}`,
                        },
                     ],
                  },
               ],
            },
         };
      }

      async init(AB) {
         await super.init(AB);

         const $dataview = $$(this.ids.dataview);
         if ($dataview) this.AB.Webix.extend($dataview, webix.ProgressBar);

         if (!this._fullImagePopup) {
            const fullImagePopup = this.uiPopup();
            this._fullImagePopup = this.AB.Webix.ui(fullImagePopup);
         }
      }

      onShow() {
         this.initPdfjs();
         super.onShow();
      }

      /**
       * Loads the pdfjs dependecies. We defer loading since it is a large library
       * that is not needed in the initial page load.
       */
      async initPdfjs() {
         if (this.pdfjs && window.pdfjsWorker) return;
         this.busy();
         this.pdfjs = (
            await Promise.all(/*! import() */[__webpack_require__.e("pdfjs-vendors-node_modules_pdfjs-dist_webpack_mjs"), __webpack_require__.e("pdfjs-init_pdfjs_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../../init/pdfjs */ 7035))
         ).default;
         this.ready();
      }

      async _readFileBuffer() {
         const _csvFileInfo = this._csvFileInfo;
         if (!_csvFileInfo || !_csvFileInfo.file)
            return Promise.resolve(new ArrayBuffer(0));

         const fileReader = new FileReader();

         return new Promise((resolve, reject) => {
            fileReader.onload = (event) => {
               const fileBuffer = event.target.result;
               resolve(fileBuffer);
            };
            fileReader.onerror = (event) => {
               reject(event);
            };
            fileReader.readAsArrayBuffer(_csvFileInfo.file);
         });
      }

      async _toBlob(pageNumber, canvas) {
         if (!canvas) return;

         return new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
               const file = new File([blob], `${pageNumber}.png`, {
                  type: "image/png",
               });

               resolve(file);
            }, "image/png");
         });
      }

      async _uploadImage(pageNumber) {
         // set quality of the saving image
         const WIDTH_OF_SAVE_IMAGE = 1200;

         // Create a temporary CANVAS dom to render page image with specify the height
         const canvasId = `${this.view.id}_temp_canvas`;
         const canvas =
            document.getElementById(canvasId) ??
            document.createElement("canvas");
         canvas.id = canvasId;
         canvas.width = WIDTH_OF_SAVE_IMAGE;

         await this.showPage(pageNumber, canvas);
         const fileBlob = await this._toBlob(pageNumber, canvas);

         return new Promise((resolve, reject) => {
            // Create a uploader to upload images
            const $uploader = this.AB.Webix.ui({
               view: "uploader",
               apiOnly: true,
               upload: this.field.urlUpload(),
               inputName: "file",
               multiple: false,
               on: {
                  // when upload is complete:
                  onFileUpload: (item, response) => {
                     // RETURN HERE
                     resolve(response?.data?.uuid);
                  },
                  // if an error was returned
                  onFileUploadError: (item, response) => {
                     reject(response);
                  },
                  onUploadComplete: () => $uploader.destructor(),
               },
            });

            $uploader.addFile(fileBlob, fileBlob.size);
         });
      }

      _increaseProgressValue() {
         const $dataview = $$(this.ids.dataview);
         const maxProgressStep =
            ($dataview.getSelectedId(true) ?? []).length * 2;

         this._progressSteps = this._progressSteps ?? 0;
         this._progressSteps++;

         $dataview?.showProgress?.({
            type: "bottom",
            position: this._progressSteps / maxProgressStep,
         });
      }

      async loadFile() {
         this.clearDataview();

         const _csvFileInfo = this._csvFileInfo;
         if (!_csvFileInfo) return;

         const fileBuffer = await this._readFileBuffer();
         this._pdfDoc = await this.pdfjs.getDocument(fileBuffer).promise;

         const total_page = this._pdfDoc.numPages;
         const $dataview = $$(this.ids.dataview);
         const $carousel = $$(this.ids.fullImageCarousel);
         const carousel_list = [];
         for (let pageNumber = 1; pageNumber <= total_page; pageNumber++) {
            $dataview.add({
               id: pageNumber,
               pageNumber,
            });

            carousel_list.push({
               template: (item) => {
                  return this.fullImageTemplate(item);
               },
               data: {
                  pageNumber,
               },
            });
         }

         this.renderPageImages();
         if ($carousel) this.AB.Webix.ui(carousel_list, $carousel);

         // Select all of images by default
         this.selectAll();

         $$(this.ids.submit)?.enable();
      }

      removeFile(id) {
         $$(this.ids.uploadList)?.remove(id);

         delete this._pdfDoc;
         delete this._csvFileInfo;
         this.clearDataview();

         $$(this.ids.submit)?.disable();

         return true;
      }

      pageTemplateId(pageNumber) {
         return `pdf-importer-${this.view.id}-${pageNumber}`;
      }

      pageTemplate(item) {
         const $dataview = $$(this.ids.dataview);
         let selectedPageIds = $dataview.getSelectedId(true);

         return `
      <div>
         <div class="pdf-data-view-item">
            <div>
            ${
               selectedPageIds.filter((pageId) => pageId == item.id).length
                  ? '<i class="unselect-page fa fa-check-square-o"></i>'
                  : '<i class="select-page fa fa-square-o"></i>'
            }
            </div>
            <div style="width: 15px;">
               ${item.pageNumber}
            </div>
         </div>
         <div class="pdf-zoom pdf-data-view-image">
            <canvas class="pdf-zoom" width="${
               this.pageItemWidth
            }" id="${this.pageTemplateId(item.pageNumber)}"></canvas>
            <div class="pdf-zoom pdf-data-view-image-icon">
               <i class="pdf-zoom fa fa-search-plus fa-4x"></i>
            </div>
         </div>
      </div>
      `;
      }

      renderPageImages() {
         const $dataview = $$(this.ids.dataview);
         $dataview?.find({}).forEach((item) => {
            const canvas_dom = document.querySelector(
               `#${this.pageTemplateId(item.pageNumber)}`
            );
            this.showPage(item.pageNumber, canvas_dom);
         });
      }

      async showPage(pageNumber, canvas_dom) {
         if (!this._pdfDoc) return;

         pageNumber = parseInt(pageNumber);
         const page = await this._pdfDoc.getPage(pageNumber);
         const pdf_original_width = page.getViewport({ scale: 1 }).width;
         const scale_required = canvas_dom.width / pdf_original_width;

         // get viewport to render the page at required scale
         const viewport = page.getViewport({ scale: scale_required });
         canvas_dom.height = viewport.height;

         return page.render({
            canvasContext: canvas_dom.getContext("2d"),
            viewport: viewport,
         }).promise;
      }

      clearDataview() {
         const $dataview = $$(this.ids.dataview);
         const $carousel = $$(this.ids.fullImageCarousel);

         $dataview?.clearAll();
         if ($carousel)
            this.AB.Webix.ui(
               [
                  {
                     view: "label",
                     align: "center",
                     height: $carousel.height,
                     label: this.label("No image"),
                  },
               ],
               $carousel
            );
      }

      displaySmall() {
         this._isDisplayBig = false;
         $$(this.ids.dataview)?.render();
         this.renderPageImages();
      }

      displayBig() {
         this._isDisplayBig = true;
         $$(this.ids.dataview)?.render();
         this.renderPageImages();
      }

      get pageItemWidth() {
         return this._isDisplayBig ? BIG_PAGE_WIDTH : SMALL_PAGE_WIDTH;
      }

      select(pageNumber) {
         const $dataview = $$(this.ids.dataview);

         let selectedIds = $dataview.getSelectedId(true);

         selectedIds.push(pageNumber);
         selectedIds = selectedIds.filter((pageId) => pageId);

         if (selectedIds.length) $dataview.select(selectedIds);
         else $dataview.unselectAll();
      }

      unselect(pageNumber) {
         const $dataview = $$(this.ids.dataview);

         let selectedIds = $dataview.getSelectedId(true);

         selectedIds = selectedIds.filter(
            (pageId) => pageId && pageId != pageNumber
         );

         if (selectedIds.length) $dataview.select(selectedIds);
         else $dataview.unselectAll();
      }

      selectAll() {
         $$(this.ids.dataview)?.selectAll();
      }

      unselectAll() {
         $$(this.ids.dataview)?.unselectAll();
      }

      fullImageTemplateId(pageNumber) {
         return `${this.pageTemplateId(pageNumber)}_full_size`;
      }

      fullImageTemplate(item) {
         const $carousel = $$(this.ids.fullImageCarousel);
         return `<canvas width="${
            $carousel.config.width - 20
         }" id="${this.fullImageTemplateId(item.pageNumber)}"></canvas>`;
      }

      refreshFullImage() {
         const ids = this.ids;
         const activeIndex = $$(ids.fullImageCarousel).getActiveIndex();
         const pageNumber = activeIndex + 1;
         const canvas_dom = document.querySelector(
            `#${this.fullImageTemplateId(pageNumber)}`
         );
         this.showPage(pageNumber, canvas_dom);

         const selectedPageIds = $$(ids.dataview).getSelectedId(true);
         const isSelected =
            selectedPageIds.filter((pageId) => pageId == pageNumber).length > 0;
         $$(ids.fullImageSelectToggle).setValue(isSelected);

         $$(ids.fullImageLabel).setValue(
            `${this.label("Page Number")}: ${pageNumber}`
         );
      }

      get object() {
         return this.view.datacollection?.datasource;
      }

      get field() {
         return this.object?.fields?.(
            (f) => f.id == this.view.settings.fieldID
         )[0];
      }

      busy() {
         const ids = this.ids;

         const $fileUploader = $$(ids.fileUploader);
         const $uploadList = $$(ids.uploadList);
         const $dataview = $$(ids.dataview);
         const $submit = $$(ids.submit);
         const $selectAll = $$(ids.selectAll);
         const $unselectAll = $$(ids.unselectAll);
         const $selectToggle = $$(ids.fullImageSelectToggle);

         $fileUploader?.disable();
         $uploadList?.disable();
         $submit?.disable();
         $selectAll?.disable();
         $unselectAll?.disable();
         $selectToggle?.disable();
         $dataview?.showProgress?.({
            type: "bottom",
            position: 0.001,
         });
      }

      ready() {
         const ids = this.ids;

         const $fileUploader = $$(ids.fileUploader);
         const $uploadList = $$(ids.uploadList);
         const $dataview = $$(ids.dataview);
         const $submit = $$(ids.submit);
         const $selectAll = $$(ids.selectAll);
         const $unselectAll = $$(ids.unselectAll);
         const $selectToggle = $$(ids.fullImageSelectToggle);

         $fileUploader?.enable();
         $uploadList?.enable();
         $submit?.enable();
         $selectAll?.enable();
         $unselectAll?.enable();
         $selectToggle?.enable();
         $dataview?.hideProgress?.();

         delete this._progressSteps;
      }

      async submit() {
         const field = this.field;
         if (!this._pdfDoc || !field) return;

         this.busy();

         const ids = this.ids;
         const $dataview = $$(ids.dataview);
         const selectedPageIds = $dataview.getSelectedId(true) ?? [];
         const model = field.object.model();
         const dcLink = this.datacollection.datacollectionLink;
         const newValues = [];

         for (let i = 0; i < selectedPageIds.length; i++) {
            const pageNumber = selectedPageIds[i];
            if (pageNumber == null || pageNumber == "") return;

            const uploadId = await this._uploadImage(pageNumber);

            this._increaseProgressValue();

            // Insert Data
            const values = field.object.defaultValues();
            values[field.columnName] = uploadId;

            // Set linked data from the parent DC
            const linkValues = dcLink?.getCursor();
            if (linkValues) {
               const objectLink = dcLink?.datasource;

               const connectFields = field.object.connectFields();
               connectFields.forEach((f) => {
                  if (
                     objectLink.id == f.settings.linkObject &&
                     values[f.columnName] === undefined
                  ) {
                     const linkColName = f.indexField
                        ? f.indexField.columnName
                        : objectLink.PK();

                     values[f.columnName] = {};
                     values[f.columnName][linkColName] =
                        linkValues[linkColName] ?? linkValues.id;
                  }
               });
            }

            newValues.push(await model.create(values));

            this._increaseProgressValue();
         }

         this.view.doSubmitRules(newValues);

         // NOTE: trigger this event to ABViewPropertyAddPage
         if (newValues) this.view.emit("saved", newValues);

         this.ready();
      }
   };
}


/***/ },

/***/ 95757
/*!**********************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_tab/FNAbviewtab.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewtab)
/* harmony export */ });
/* harmony import */ var _FNAbviewtabComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewtabComponent.js */ 89618);


// FNAbviewtab Web
// A web side import for an ABView.
//
function FNAbviewtab({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
}) {
   const ABAbviewtabComponent = (0,_FNAbviewtabComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ ABViewComponentPlugin });

   const ABViewTabPropertyComponentDefaults = {
      height: 0,
      minWidth: 0,
      stackTabs: 0, // use sidebar view instead of tabview
      darkTheme: 0, // set dark theme css or not
      sidebarWidth: 200, // width of sidebar menu when stacking tabs
      sidebarPos: "left", // the default position of sidebar
      iconOnTop: 0, // do you want to put the icon above the text label?
      hintID: null, // store the ID of a webix hint tutorial for this view
   };

   const ABViewTabDefaults = {
      key: "tab", // {string} unique key for this view
      icon: "window-maximize", // {string} fa-[icon] reference for this view
      labelKey: "Tab(plugin)", // {string} the multilingual label key for the class label
   };

   class ABViewTabCore extends ABViewWidgetPlugin {
      /**
       * @param {obj} values  key=>value hash of ABView values
       * @param {ABApplication} application the application object this view is under
       * @param {ABViewWidget} parent the ABViewWidget this view is a child of. (can be null)
       */
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewTabDefaults);
      }

      static common() {
         return ABViewTabDefaults;
      }

      static defaultValues() {
         return ABViewTabPropertyComponentDefaults;
      }

      ///
      /// Instance Methods
      ///

      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values);

         // convert from "0" => 0
         this.settings.height = parseInt(this.settings.height);
         this.settings.minWidth = parseInt(this.settings.minWidth || 0);
         this.settings.stackTabs = parseInt(this.settings.stackTabs);
         this.settings.darkTheme = parseInt(this.settings.darkTheme);
         this.settings.sidebarWidth = parseInt(this.settings.sidebarWidth);
         // this.settings.sidebarPos = this.settings.sidebarPos;
         this.settings.iconOnTop = parseInt(this.settings.iconOnTop);
      }

      addTab(tabName, tabIcon) {
         return this.application
            .viewNew(
               {
                  key: ABViewContainer.common().key,
                  label: tabName,
                  tabicon: tabIcon,
               },
               this.application,
               this
            )
            .save();
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }
   }

   return class ABViewTab extends ABViewTabCore {
      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return this.common().key;
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABAbviewtabComponent(this, parentId);
      }

      warningsEval() {
         super.warningsEval();

         let allViews = this.views();

         if (allViews.length == 0) {
            this.warningsMessage("has no tabs set");
         }

         // NOTE: this is done in ABView:
         // (this.views() || []).forEach((v) => {
         //    v.warningsEval();
         // });
      }
   };
}


/***/ },

/***/ 89618
/*!*******************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_tab/FNAbviewtabComponent.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewtabComponent)
/* harmony export */ });
function FNAbviewtabComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewtabComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewTab_${baseView.id}`,
            Object.assign(
               {
                  tab: "",

                  sidebar: "",
                  expandMenu: "",
                  collapseMenu: "",

                  popupTabManager: "",
                  popupTabManagerForm: "",
                  popupTabManagerSaveButton: "",
               },
               ids
            )
         );

         this.viewComponents =
            this.viewComponents ||
            baseView
               .views((v) => v.getUserAccess())
               .map((v) => {
                  return {
                     view: v,
                     // component: v.component(App)
                  };
               });
      }

      ui() {
         const ids = this.ids;
         const baseView = this.view;
         const ab = this.AB;
         const abWebix = ab.Webix;

         let _ui = null;

         // We are going to make a custom icon using the first letter of a menu item for menu items that don't have an icon
         // to do this we need to modify the default template with the method webix recommended form this snippet https://snippet.webix.com/b566d9f8
         abWebix.type(abWebix.ui.tree, {
            baseType: "sideBar", // inherit everything else from sidebar type
            name: "customIcons",
            icon: (obj, common) => {
               if (obj.icon.length)
                  return [
                     "<span class='webix_icon webix_sidebar_icon fa fa-fw fa-",
                     obj.icon,
                     "'></span>",
                  ].join("");

               return [
                  "<span class='webix_icon webix_sidebar_icon sidebarCustomIcon'>",
                  obj.value.charAt(0).toUpperCase(),
                  "</span>",
               ].join("");
            },
         });

         const viewComponents = this.viewComponents;
         const settings = this.settings;

         if (viewComponents.length > 0) {
            if (settings.stackTabs) {
               // define your menu items from the view components
               const menuItems = viewComponents.map((vc) => {
                  const view = vc.view;

                  return {
                     id: `${view.id}_menu`,
                     value: view.label,
                     icon: view.tabicon ? view.tabicon : "",
                  };
               });

               if (menuItems.length) {
                  // create a menu item for the collapse option to use later
                  const collapseMenu = {
                     id: ids.collapseMenu,
                     value: this.label("Collapse Menu"),
                     icon: "chevron-circle-left",
                  };

                  // create a menu item from the expand option to use later
                  const expandMenu = {
                     id: ids.expandMenu,
                     value: this.label("Expand Menu"),
                     icon: "chevron-circle-right",
                     hidden: true,
                  };

                  // find out what the first option is so we can set it later
                  let selectedItem = `${viewComponents[0].view.id}_menu`;

                  const abStorage = ab.Storage;
                  const sidebar = {
                     view: "sidebar",
                     type: "customIcons", // define the sidebar type with the new template created above
                     id: ids.sidebar,
                     height: settings.height,
                     width: settings.sidebarWidth ? settings.sidebarWidth : 0,
                     scroll: true,
                     position: settings.sidebarPos
                        ? settings.sidebarPos
                        : "left",
                     css: settings.darkTheme ? "webix_dark" : "",
                     data: menuItems.concat(collapseMenu), // add you menu items along with the collapse option to start
                     on: {
                        onItemClick: (id) => {
                           // when a menu item is clicked
                           if (id === ids.collapseMenu) {
                              // if it was the collapse menu item
                              setTimeout(() => {
                                 const $sidebar = $$(ids.sidebar);

                                 // remove the collapse option from the menu
                                 $sidebar.remove(ids.collapseMenu);
                                 // add the expand option to the menu
                                 $sidebar.add(expandMenu);
                                 // toggle the sidebar state
                                 $sidebar.toggle();
                                 // we just clicked the collapse...but we don't wanted highlighted
                                 // so highlight the previously selected menu item
                                 $sidebar.select(selectedItem);
                                 // store this state in local storage the user preference is
                                 // remembered next time they see this sidebar
                                 abStorage.set(
                                    `${ids.tab}-state`,
                                    $sidebar.getState()
                                 );
                              }, 0);
                           } else if (id === ids.expandMenu) {
                              setTimeout(() => {
                                 const $sidebar = $$(ids.sidebar);

                                 // remove the expand option from the menu
                                 $sidebar.remove(ids.expandMenu);
                                 // add the collapse option to the menu
                                 $sidebar.add(collapseMenu);
                                 // toggle the sidebar state
                                 $sidebar.toggle();
                                 // we just clicked the collapse...but we don't wanted highlighted
                                 // so highlight the previously selected menu item
                                 $sidebar.select(selectedItem);
                                 // store this state in local storage the user preference is
                                 // remembered next time they see this sidebar
                                 abStorage.set(
                                    `${ids.tab}-state`,
                                    $sidebar.getState()
                                 );
                              }, 0);
                           } else {
                              // store the selecte menu item just in case someone toggles the menu later
                              selectedItem = id;
                              // if the menu item is a regular menu item
                              // call the onShow with the view id to load the view

                              id = id.replace("_menu", "");
                              let node = $$(id);
                              if (node) {
                                 node.show(false, false);
                              } else {
                                 // How often does this occure?
                                 let msg = `ABViewTabComponent[${this.name}][${this.id}] could not resolve UI panel for provided menu [${selectedItem}].`;
                                 this.AB.notify("developer", msg, {});
                              }
                              // $$(id).show(false, false);

                              // onShow(id);
                           }
                        },
                        onSelectChange: () => {
                           addDataCy();
                        },
                        onAfterRender: () => {
                           addDataCy();
                        },
                     },
                  };

                  const multiview = {
                     view: "multiview",
                     id: ids.tab,
                     keepViews: true,
                     minWidth: settings.minWidth,
                     cells: viewComponents.map((view) => {
                        const tabUi = {
                           id: view.view.id,
                           // ui will be loaded when its tab is opened
                           view: "layout",
                           rows: [],
                        };

                        return tabUi;
                     }),
                     on: {
                        onViewChange: (prevId, nextId) => {
                           this.onShow(nextId);
                        },
                     },
                  };

                  const addDataCy = function () {
                     const $sidebar = $$(ids.sidebar);

                     // set ids of controller buttons
                     const collapseNode = $sidebar?.$view.querySelector(
                        `[webix_tm_id="${ids.collapseMenu}"]`
                     );

                     if (collapseNode)
                        collapseNode.setAttribute(
                           "data-cy",
                           `tab-collapseMenu-${ids.collapseMenu}`
                        );

                     const expandNode = $sidebar?.$view.querySelector(
                        `[webix_tm_id="${ids.expandMenu}"]`
                     );

                     if (expandNode)
                        expandNode.setAttribute(
                           "data-cy",
                           `tab-expandMenu-${ids.expandMenu}`
                        );

                     baseView.views((view) => {
                        const node = $sidebar?.$view?.querySelector(
                           `[webix_tm_id="${view.id}_menu"]`
                        );

                        if (!node) {
                           return;
                        }

                        node.setAttribute(
                           "data-cy",
                           `tab-${view.name.replace(" ", "")}-${view.id}-${
                              baseView.id
                           }`
                        );
                     });
                  };

                  let columns = [sidebar, multiview];

                  if (settings.sidebarPos === "right") {
                     columns = [multiview, sidebar];
                  }

                  _ui = {
                     cols: columns,
                  };
               } else
                  _ui = {
                     view: "spacer",
                  };
            } else {
               const cells = baseView
                  .views((view) => {
                     const accessLevel = view.getUserAccess();

                     if (accessLevel > 0) {
                        return view;
                     }
                  })
                  .map((view) => {
                     const tabUi = {
                        id: view.id,
                        // ui will be loaded when its tab is opened
                        view: "layout",
                        rows: [],
                     };

                     let tabTemplate = "";

                     // tab icon
                     if (view.tabicon) {
                        if (settings.iconOnTop)
                           tabTemplate = [
                              "<div class='ab-tabIconContainer'><span class='fa fa-lg fa-fw fa-",
                              view.tabicon,
                              "'></span><br/>",
                              view.label,
                              "</div>",
                           ].join("");
                        else
                           tabTemplate = [
                              "<span class='fa fa-lg fa-fw fa-",
                              view.tabicon,
                              "'></span> ",
                              view.label,
                           ].join("");
                     }

                     // no icon
                     else tabTemplate = view.label;

                     return {
                        header: tabTemplate,
                        body: tabUi,
                     };
                  });

               // if there are cells to display then return a tabview
               if (cells.length) {
                  _ui = {
                     rows: [
                        {
                           view: "tabview",
                           id: ids.tab,
                           minWidth: settings.minWidth,
                           height: settings.height,
                           tabbar: {
                              height: 60,
                              type: "bottom",
                              css: settings.darkTheme ? "webix_dark" : "",
                              on: {
                                 onAfterRender: () => {
                                    baseView.views((view) => {
                                       const node = $$(
                                          ids.tab
                                       )?.$view?.querySelector(
                                          `[button_id="${view.id}"]`
                                       );

                                       if (!node) return;

                                       node.setAttribute(
                                          "data-cy",
                                          `tab ${view.name} ${view.id} ${baseView.id}`
                                       );
                                    });
                                 },
                              },
                           },
                           multiview: {
                              on: {
                                 onViewChange: (prevId, nextId) => {
                                    this.onShow(nextId);
                                 },
                              },
                           },
                           cells: cells,
                        },
                     ],
                  };
               }
               // else we return a spacer
               else
                  _ui = {
                     view: "spacer",
                  };
            }
         } else
            _ui = {
               view: "spacer",
            };

         _ui = super.ui([_ui]);

         delete _ui.type;

         return _ui;
      }

      async init(AB) {
         await super.init(AB);

         const ids = this.ids;
         const $tab = $$(ids.tab);
         const ab = this.AB;
         const abWebix = ab.Webix;

         if ($tab) abWebix.extend($tab, abWebix.ProgressBar);

         const baseView = this.view;
         const viewComponents = this.viewComponents;

         viewComponents.forEach((vc) => {
            // vc.component.init(AB);

            // Trigger 'changePage' event to parent
            this.eventAdd({
               emitter: vc.view,
               eventName: "changePage",
               listener: (...p) => this.changePage(...p),
            });
         });

         // Trigger 'changeTab' event to parent
         this.eventAdd({
            emitter: baseView,
            eventName: "changeTab",
            listener: (...p) => this.changeTab(...p),
         });

         // initialize the sidebar and figure out if it should be collased or not
         const $sidebar = $$(ids.sidebar);

         if (!$sidebar) return;

         const state = await ab.Storage.get(`${ids.tab}-state`);

         if (!state) return;

         // create a menu item for the collapse option to use later
         const collapseMenu = {
            id: ids.collapseMenu,
            value: this.label("Collapse Menu"),
            icon: "chevron-circle-left",
         };

         // create a menu item from the expand option to use later
         const expandMenu = {
            id: ids.expandMenu,
            value: this.label("Expand Menu"),
            icon: "chevron-circle-right",
            hidden: true,
         };

         // this will collapse or expand the sidebar
         $sidebar.setState(state);

         const checkCollapseMenu = $sidebar.getItem(ids.collapseMenu) ?? null;
         const checkExpandMenu = $sidebar.getItem(ids.expandMenu) ?? null;

         // if the state is collapsed we need to make sure the expand option is available
         if (state.collapsed) {
            if (checkCollapseMenu && checkExpandMenu)
               // $sidebar.remove(ids.collapseMenu);
               $sidebar.add(expandMenu);
         } else if (checkCollapseMenu && checkExpandMenu)
            // $sidebar.remove(ids.collapseMenu);
            $sidebar.add(collapseMenu);
      }

      changePage(pageId) {
         const $tab = $$(this.ids.tab);

         $tab?.blockEvent();
         this.view.changePage(pageId);
         $tab?.unblockEvent();
      }

      changeTab(tabViewId) {
         const baseView = this.view;
         const $tabViewId = $$(tabViewId);

         // switch tab view
         this.toggleParent(baseView.parent);

         if (this.settings.stackTabs)
            if (!$tabViewId.isVisible()) {
               const showIt = setInterval(() => {
                  if ($tabViewId.isVisible()) clearInterval(showIt);

                  $tabViewId.show(false, false);
               }, 200);
            } else $$(this.ids.tab).setValue(tabViewId);
      }

      toggleParent(view) {
         const $viewID = $$(view.id);

         if (view.key === "tab" || view.key === "viewcontainer") {
            $viewID?.show(false, false);
         }
         if (view.parent) {
            this.toggleParent(view.parent);
         }
      }

      onShow(viewId) {
         const ids = this.ids;

         let defaultViewIsSet = false;

         const $sidebar = $$(ids.sidebar);

         // if no viewId is given, then try to get the currently selected ID
         if (!viewId && $sidebar)
            viewId = $sidebar.getSelectedId().replace("_menu", "");

         const baseView = this.view;
         const viewComponents = this.viewComponents;

         viewComponents.forEach((vc) => {
            // set default view id
            const currView = baseView.views((view) => {
               return view.id === vc.view.id;
            });

            let accessLevel = 0;

            if (currView.length) accessLevel = currView[0].getUserAccess();

            // choose the 1st View if we don't have one we are looking for.
            if (!viewId && !defaultViewIsSet && accessLevel > 0) {
               viewId = vc.view.id;

               defaultViewIsSet = true;
            }

            // create view's component once
            const $tab = $$(ids.tab);
            const settings = this.settings;

            if (!vc?.component && vc?.view?.id === viewId) {
               // show loading cursor
               if ($tab?.showProgress) $tab.showProgress({ type: "icon" });

               vc.component = vc.view.component();

               const $viewID = $$(vc.view.id);
               const ab = this.AB;
               const abWebix = ab.Webix;

               if (settings.stackTabs) {
                  // update multiview UI
                  abWebix.ui(
                     {
                        // able to 'scroll' in tab view
                        id: vc.view.id,
                        view: "scrollview",
                        css: "ab-multiview-scrollview",
                        body: vc.component.ui(),
                     },
                     $viewID
                  );
               } else {
                  // update tab UI
                  abWebix.ui(
                     {
                        // able to 'scroll' in tab view
                        id: vc.view.id,
                        view: "scrollview",
                        css: "ab-tabview-scrollview",
                        body: vc.component.ui(),
                     },
                     $viewID
                  );
               }

               // for tabs we need to look at the view's accessLevels
               accessLevel = vc.view.getUserAccess();

               vc.component.init(ab, accessLevel);

               // done
               setTimeout(() => {
                  // $$(v.view.id).adjust();

                  $tab?.hideProgress?.();
                  // check if tab has a hint
                  // if (vc?.view?.settings?.hintID) {
                  //    // fetch the steps for the hint
                  //    let hint = ab.hintID(vc.view.settings.hintID);
                  //    hint.createHintUI();
                  // }
               }, 10);
            }

            // show UI
            if (vc?.view?.id === viewId && vc?.component?.onShow)
               vc.component.onShow();

            if (settings.stackTabs && vc?.view?.id === viewId) {
               $$(viewId)?.show(false, false);
               $sidebar?.select(`${viewId}_menu`);
            }
         });
      }
   };
}


/***/ },

/***/ 88229
/*!************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_text/FNAbviewtext.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewtext)
/* harmony export */ });
/* harmony import */ var _FNAbviewtextComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewtextComponent.js */ 44586);


// FNAbviewtext Web
// A web side import for an ABView.
//
function FNAbviewtext({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
}) {
   const ABAbviewtextComponent = (0,_FNAbviewtextComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const ABViewTextPropertyComponentDefaults = {
      text: "",
      // {string}
      // A multilingual text template that is used to display a given set of
      // values.

      height: 0,
      // {integer}
      // The default height of this widget.

      dataviewID: null,
      // {uuid}
      // The {ABDataCollection.id} of the datacollection this ABViewText is
      // pulling data from.
      // In most usage situations this ABView is tied to the data in an
      // ABDataCollection.  However, it is possible for an ABObject to be
      // directly assigned to the ABView, and that will be used instead.
   };

   const ABViewDefaults = {
      key: "text",
      // {string}
      // unique key for this view

      icon: "font",
      // {string}
      // fa-[icon] reference for this view

      labelKey: "Text",
      // {string}
      // the multilingual label key for the class label
   };

   class ABViewTextCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);

         this._object = null;
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewTextPropertyComponentDefaults;
      }

      ///
      /// Instance Methods
      ///

      /**
       * @method toObj()
       *
       * properly compile the current state of this ABViewText instance
       * into the values needed for saving.
       *
       * @return {json}
       */
      toObj() {
         // NOTE: ABView auto translates/untranslates "label"
         // add in any additional fields here:
         this.unTranslate(this, this, ["text"]);

         var obj = super.toObj();
         obj.views = [];
         return obj;
      }

      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values);

         this.settings = this.settings || {};

         // convert from "0" => 0
         this.settings.height = parseInt(
            this.settings.height || ABViewTextPropertyComponentDefaults.height
         );

         // if this is being instantiated on a read from the Property UI,
         this.text = values.text || ABViewTextPropertyComponentDefaults.text;

         // NOTE: ABView auto translates/untranslates "label"
         // add in any additional fields here:
         this.translate(this, this, ["text"]);
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }

      /**
       * @property datacollection
       * return ABDatacollection of this form
       *
       * @return {ABDatacollection}
       */
      get datacollection() {
         if (this.parent?.key == "dataview") {
            return this.AB.datacollectionByID(this.parent.settings.dataviewID);
         } else {
            return this.AB.datacollectionByID(this.settings.dataviewID);
         }
      }

      fieldKey(field) {
         let label = field.label || "";
         // First escape backslashes to avoid leaving metacharacters unescaped
         label = label.replace(/\\/g, "\\\\");
         // Then escape parentheses
         label = label.replace(/\(/g, "\\(");
         label = label.replace(/\)/g, "\\)");
         return label;
      }

      displayText(val, componentID) {
         var result = this.text;

         let clearTemplateValue = (result) => {
            return result.replace(/{(.*?)}/g, "");
         };

         var dv = this.datacollection;
         // if (!dv) return clearTemplateValue(result);

         var object = dv?.datasource ?? this._object;
         if (!object) return clearTemplateValue(result);

         const rowData = val || dv.getCursor() || {};

         object.fields().forEach((f) => {
            // add \\ in front of the regular expression special charactors
            // let label = f.label || "";
            // label = label.replace(/\(/g, "\\(");
            // label = label.replace(/\)/g, "\\)");
            let label = this.fieldKey(f);

            var template = new RegExp("{" + label + "}", "g");

            // IDEA: I'd like to keep all the image url logic INSIDE the ABFieldImage
            // object.  Is there some way we can simply call: f.imageTemplate(rowData)
            // and parse the results for the url to display here?

            var data = f.format(rowData);
            if (f.key == "image") {
               var fData = data;
               data = f.urlImage(fData);

               // Question: should we change f.urlImage() to return the defaultImageUrl
               // if fData is "" and .useDefaultImage = true?

               if (
                  !fData &&
                  f.settings.defaultImageUrl &&
                  f.settings.useDefaultImage
               ) {
                  data = f.urlImage(f.settings.defaultImageUrl);

                  ////
                  //// James:  Revisit this and make sure we are handling things ok now.
                  // result = result.replace(
                  //    "img",
                  //    'img onload=\'AD.comm.hub.publish("component.adjust", {"containerID": "' +
                  //       componentID +
                  //       "\"});' "
                  // );
                  // } else if (
                  //    fData != "" &&
                  //    result.indexOf("onload") == -1 &&
                  //    componentID
                  // ) {
                  // result = result.replace(
                  //    "img",
                  //    'img onload=\'AD.comm.hub.publish("component.adjust", {"containerID": "' +
                  //       componentID +
                  //       "\"});' "
                  // );
               } else {
                  ////
                  //// James: It looks like this routine assumes the this.text template will
                  //// only have 1 <img> tag in it.  Is that necessarilly true?
                  ////
                  //// If NOT, then we need to rethink this next line:

                  result = result.replace(
                     "img",
                     "img onerror='this.parentNode.removeChild(this);' "
                  );
               }
            }

            result = result.replace(template, data);
         });

         // Support {uuid} tag in tempalte
         result = result.replace(/{PK}/g, rowData[object.PK()]);

         return result;
      }

      objectLoad(object) {
         this._object = object;
      }
   }

   return class ABViewText extends ABViewTextCore {
      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return this.common().key;
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABAbviewtextComponent(this, parentId);
      }
   };
}


/***/ },

/***/ 44586
/*!*********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_text/FNAbviewtextComponent.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewtextComponent)
/* harmony export */ });
function FNAbviewtextComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewtextComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewText_${baseView.id}`,
            Object.assign(
               {
                  text: "",
               },
               ids
            )
         );
      }

      ui() {
         const ids = this.ids;
         const settings = this.settings;

         const _uiText = {
            id: ids.text,
            view: "template",
            minHeight: 10,
            css: "ab-custom-template",
            borderless: true,
         };

         if (settings.height) _uiText.height = settings.height;
         else _uiText.autoheight = true;

         const _ui = super.ui([_uiText]);

         delete _ui.type;

         return _ui;
      }

      displayText(value) {
         const ids = this.ids;
         const result = this.view.displayText(value, ids.text);

         const $text = $$(ids.text);

         if (!$text) return;

         $text.define("template", result);
         $text.refresh();
      }

      onShow() {
         super.onShow();

         // listen DC events
         const dataview = this.datacollection;
         const baseView = this.view;

         if (dataview && baseView.parent.key !== "dataview") {
            ["changeCursor", "cursorStale"].forEach((key) => {
               baseView.eventAdd({
                  emitter: dataview,
                  eventName: key,
                  listener: (...p) => this.displayText(...p),
               });
            });
         }

         this.displayText();
      }
   };
}


/***/ }

}]);
//# sourceMappingURL=AppBuilder_platform_plugins_included_index_js.1e021b762783c17d9506.js.map