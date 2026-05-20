(self["webpackChunkab_platform_web"] = self["webpackChunkab_platform_web"] || []).push([["AppBuilder_platform_plugins_included_index_js"],{

/***/ 30188
/*!*******************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/index.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_carousel_FNAbviewcarousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_carousel/FNAbviewcarousel.js */ 77739);
/* harmony import */ var _view_comment_FNAbviewcomment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view_comment/FNAbviewcomment.js */ 85253);
/* harmony import */ var _view_csvExporter_FNAbviewcsvexporter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view_csvExporter/FNAbviewcsvexporter.js */ 49029);
/* harmony import */ var _view_csvImporter_FNAbviewcsvimporter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view_csvImporter/FNAbviewcsvimporter.js */ 48261);
/* harmony import */ var _view_data_select_FNAbviewdataselect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view_data-select/FNAbviewdataselect.js */ 78612);
/* harmony import */ var _view_dataview_FNAbviewdataview_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view_dataview/FNAbviewdataview.js */ 84373);
/* harmony import */ var _view_detail_FNAbviewdetail_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view_detail/FNAbviewdetail.js */ 73053);
/* harmony import */ var _view_gantt_FNAbviewgantt_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view_gantt/FNAbviewgantt.js */ 92973);
/* harmony import */ var _view_image_FNAbviewimage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view_image/FNAbviewimage.js */ 58661);
/* harmony import */ var _view_kanban_FNABViewKanban_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view_kanban/FNABViewKanban.js */ 35653);
/* harmony import */ var _view_label_FNAbviewlabel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view_label/FNAbviewlabel.js */ 31697);
/* harmony import */ var _view_layout_FNAbviewlayout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view_layout/FNAbviewlayout.js */ 22031);
/* harmony import */ var _view_list_FNAbviewlist_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view_list/FNAbviewlist.js */ 62467);
/* harmony import */ var _view_pdfImporter_FNAbviewpdfimporter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view_pdfImporter/FNAbviewpdfimporter.js */ 27377);
/* harmony import */ var _view_pivot_FNABViewPivot_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view_pivot/FNABViewPivot.js */ 62513);
/* harmony import */ var _view_tab_FNAbviewtab_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view_tab/FNAbviewtab.js */ 95757);
/* harmony import */ var _view_text_FNAbviewtext_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view_text/FNAbviewtext.js */ 88229);


















const AllPlugins = [
   _view_carousel_FNAbviewcarousel_js__WEBPACK_IMPORTED_MODULE_0__["default"],
   _view_comment_FNAbviewcomment_js__WEBPACK_IMPORTED_MODULE_1__["default"],
   _view_csvExporter_FNAbviewcsvexporter_js__WEBPACK_IMPORTED_MODULE_2__["default"],
   _view_csvImporter_FNAbviewcsvimporter_js__WEBPACK_IMPORTED_MODULE_3__["default"],
   _view_data_select_FNAbviewdataselect_js__WEBPACK_IMPORTED_MODULE_4__["default"],
   _view_dataview_FNAbviewdataview_js__WEBPACK_IMPORTED_MODULE_5__["default"],
   _view_detail_FNAbviewdetail_js__WEBPACK_IMPORTED_MODULE_6__["default"],
   _view_gantt_FNAbviewgantt_js__WEBPACK_IMPORTED_MODULE_7__["default"],
   _view_image_FNAbviewimage_js__WEBPACK_IMPORTED_MODULE_8__["default"],
   _view_kanban_FNABViewKanban_js__WEBPACK_IMPORTED_MODULE_9__["default"],
   _view_label_FNAbviewlabel_js__WEBPACK_IMPORTED_MODULE_10__["default"],
   _view_layout_FNAbviewlayout_js__WEBPACK_IMPORTED_MODULE_11__["default"],
   _view_list_FNAbviewlist_js__WEBPACK_IMPORTED_MODULE_12__["default"],
   _view_pdfImporter_FNAbviewpdfimporter_js__WEBPACK_IMPORTED_MODULE_13__["default"],
   _view_pivot_FNABViewPivot_js__WEBPACK_IMPORTED_MODULE_14__["default"],
   _view_tab_FNAbviewtab_js__WEBPACK_IMPORTED_MODULE_15__["default"],
   _view_text_FNAbviewtext_js__WEBPACK_IMPORTED_MODULE_16__["default"],
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 49029
/*!**************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_csvExporter/FNAbviewcsvexporter.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewcsvexporter)
/* harmony export */ });
/* harmony import */ var _FNAbviewcsvexporterComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewcsvexporterComponent.js */ 33770);



// FNAbviewcsvexporter Web
// A web side import for an ABView.
//
function FNAbviewcsvexporter({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer
}) {
   const ABAbviewcsvexporterComponent = (0,_FNAbviewcsvexporterComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ ABViewComponentPlugin });

   const ABViewCSVExporterDefaults = {
      key: "csvExporter", // unique key identifier for this ABViewForm
      icon: "download", // icon reference: (without 'fa-' )
      labelKey: "CSV Exporter", // {string} the multilingual label key for the class label
   };

   const ABViewCSVExporterPropertyComponentDefaults = {
      dataviewID: null,
      where: null,
      buttonLabel: "Export CSV",
      filename: "exportCSV",
      hasHeader: true,
      width: 150,
      hiddenFieldIds: [],
   };

   class ABViewCSVExporterCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewCSVExporterDefaults
         );
      }

      static common() {
         return ABViewCSVExporterDefaults;
      }

      static defaultValues() {
         return ABViewCSVExporterPropertyComponentDefaults;
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

         // convert to boolean
         if (typeof values.settings.hasHeader == "string")
            this.settings.hasHeader = JSON.parse(values.settings.hasHeader);

         if (this.settings.hasHeader == null)
            this.settings.hasHeader =
               ABViewCSVExporterPropertyComponentDefaults.hasHeader;

         // convert from "0" => 0
         this.settings.width = parseInt(
            values.settings.width ||
            ABViewCSVExporterPropertyComponentDefaults.width
         );

         this.settings.hiddenFieldIds =
            values.settings.hiddenFieldIds ||
            ABViewCSVExporterPropertyComponentDefaults.hiddenFieldIds;
      }
   };

   return class ABViewCSVExporter extends ABViewCSVExporterCore {

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
         return new ABAbviewcsvexporterComponent(this, parentId);
      }




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

/***/ 33770
/*!***********************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_csvExporter/FNAbviewcsvexporterComponent.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewcsvexporterComponent)
/* harmony export */ });
function FNAbviewcsvexporterComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewcsvexporterComponent extends ABViewComponentPlugin {


   constructor(baseView, idBase, ids) {
      super(
         baseView,
         idBase || `ABCSVExporter_${baseView.id}`,
         Object.assign(
            {
               button: "",
               buttonFilter: "",
               filterComplex: "",
            },
            ids
         )
      );

      this.clientFilter = null;
   }

   ui() {
      const ids = this.ids;
      const settings = this.settings;
      const defaultSettings = this.view.constructor.defaultValues();
      const _ui = super.ui([
         {
            view: "layout",
            type: "clean",
            borderless: true,
            cols: [
               {
                  id: ids.buttonFilter,
                  view: "button",
                  css: "webix_transparent",
                  type: "icon",
                  icon: "fa fa-filter",
                  borderless: true,
                  width: 50,
                  label: "",
                  click: () => {
                     this.showFilterPopup();
                  },
               },
               {
                  id: ids.button,
                  view: "button",
                  css: "webix_primary",
                  type: "icon",
                  icon: "fa fa-download",
                  borderless: true,
                  width: settings.width || defaultSettings.width,
                  label: settings.buttonLabel ?? defaultSettings.buttonLabel,
                  click: () => {
                     this.downloadCsvFile();
                  },
               },
               { fillspace: true },
            ],
         },
      ]);

      delete _ui.type;

      return _ui;
   }

   async init(AB) {
      await super.init(AB);

      if (!this.clientFilter) {
         const clientFilter = AB.filterComplexNew(this.ids.filterComplex);

         const dc = this.datacollection;

         if (dc) {
            const obj = dc.datasource;

            clientFilter.fieldsLoad(obj?.fields?.() ?? []);
         }

         clientFilter.init();
         clientFilter.on("change", (val) => {
            this.onFilterChange(val);
         });

         this.clientFilter = clientFilter;
      }
   }

   downloadCsvFile() {
      let url = `/appbuilder/csv-export/${this.view.id}`;

      const where = {
         glue: "and",
         rules: [],
      };

      const whereWidget = this.view.settings?.where;
      if ((whereWidget?.rules ?? []).length) {
         where.rules.push(whereWidget);
      }

      const whereClient = this.clientFilter.getValue();
      if ((whereClient?.rules ?? []).length) {
         where.rules.push(whereClient);
      }

      if ((where?.rules || []).length) {
         let qsWhere = JSON.stringify(where);

         qsWhere = encodeURIComponent(qsWhere);
         url = `${url}?where=${qsWhere}`;
      }

      window.open(url);
   }

   showFilterPopup() {
      const $buttonFilter = $$(this.ids.buttonFilter);

      this.clientFilter.popUp($buttonFilter ? $buttonFilter.$view : null);
   }

   onFilterChange() {
      const $buttonFilter = $$(this.ids.buttonFilter);

      if (!$buttonFilter) return;

      const where = this.clientFilter.getValue();

      $buttonFilter.define("badge", (where.rules || []).length || null);
      $buttonFilter.refresh();
   }


   };

}


/***/ },

/***/ 95079
/*!******************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_csvImporter/CSVImporter.js ***!
  \******************************************************************************/
(module) {

var L = null;
// multilingual Label fn()

module.exports = class CSVImporter {
   constructor(Label) {
      // {ABMultilingual.label()} function.
      //
      if (!L) {
         L = Label;

         // if this was a v1: App param:
         if (Label.Label) {
            L = Label.Label;
         }
      }
   }

   /**
    * @method getSeparateItems()
    * Return the options of how the CSV values are separated.
    * @return {array}  [ {id, value} ... ]
    */
   getSeparateItems() {
      return [
         { id: ",", value: L("Comma (,)") },
         { id: "\t", value: L("Tab (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)") },
         { id: ";", value: L("Semicolon (;)") },
         { id: "s", value: L("Space ( )") },
      ];
   }

   /**
    * @method validateFile
    * Validate file extension
    * @param {*} fileInfo
    *        https://docs.webix.com/api__ui.uploader_onbeforefileadd_event.html
    * @return {boolean}
    */
   validateFile(fileInfo) {
      if (!fileInfo || !fileInfo.file || !fileInfo.file.type) return false;

      // validate file type
      let extensionType = fileInfo.file.type.toLowerCase();
      if (
         extensionType == "text/csv" ||
         extensionType == "application/vnd.ms-excel"
      ) {
         return true;
      } else {
         return false;
      }
   }

   /**
    * @method getDataRows
    * Pull data rows from the CSV file
    *
    * @param {Object} fileInfo - https://docs.webix.com/api__ui.uploader_onbeforefileadd_event.html
    * @param {string} separatedBy
    *
    * @return {Promise} -[
    * 						["Value 1.1", "Value 1.2", "Value 1.3"],
    * 						["Value 2.1", "Value 2.2", "Value 2.3"],
    * 					]
    */
   getDataRows(fileInfo, separatedBy) {
      if (!this.validateFile(fileInfo)) return Promise.reject();

      return new Promise((resolve, reject) => {
         // read CSV file
         let reader = new window.FileReader();
         reader.onload = (e) => {
            let result = [];

            // split lines
            let dataRows = reader.result
               .split(/\r\n|\n|\r/) // CRLF = \r\n; LF = \n; CR = \r;
               .filter((row) => row && row.length > 0);

            // split columns
            (dataRows || []).forEach((row) => {
               let dataCols = [];
               if (separatedBy == ",") {
                  // NOTE: if the file contains ,, .match() can not reconize this empty string
                  row = row.replace(/,,/g, ", ,");

                  // https://stackoverflow.com/questions/11456850/split-a-string-by-commas-but-ignore-commas-within-double-quotes-using-javascript#answer-11457952
                  dataCols = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);
               } else {
                  dataCols = row.split(separatedBy);
               }

               result.push(dataCols.map((dCol) => this.reformat(dCol)));
            });

            resolve(result);
         };
         reader.readAsText(fileInfo.file);
      });
   }

   /**
    * @method getGuessDataType
    * return our best guess of what type of data for the requested column.
    * @param {array} dataRows
    *        The data we are evaluating:
    *        [
    *           ["Value 1.1", "Value 1.2", "Value 1.3"],
    *           ["Value 2.1", "Value 2.2", "Value 2.3"],
    * 		 ]
    * @param colIndex {Number}
    * @return {string}
    */
   getGuessDataType(dataRows, colIndex) {
      var data,
         // {various} the data pulled from the requested row/column
         repeatNum = 10;
      // {integer} how many rows do we want to scan trying to find a value

      // Loop to find a value
      for (var i = 1; i <= repeatNum; i++) {
         var line = dataRows[i];
         if (!line) break;

         data = line[colIndex];

         if (data != null && data.length > 0) break;
      }

      if (data == null || data == "") {
         return "string";
      } else if (
         data == 0 ||
         data == 1 ||
         data == true ||
         data == false ||
         data == "checked" ||
         data == "unchecked"
      ) {
         return "boolean";
      } else if (!isNaN(data)) {
         return "number";
      } else if (Date.parse(data)) {
         return "date";
      } else {
         // determine which type of string this might be:
         if (data.length > 100) return "LongText";
         else return "string";
      }
   }

   /**
    * @method reformat
    * @param {string} str
    */
   reformat(str) {
      if (!str) return "";

      return str.trim().replace(/"/g, "").replace(/'/g, "");
   }
};


/***/ },

/***/ 48261
/*!**************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_csvImporter/FNAbviewcsvimporter.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewcsvimporter)
/* harmony export */ });
/* harmony import */ var _FNAbviewcsvimporterComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewcsvimporterComponent.js */ 94922);



// FNAbviewcsvimporter Web
// A web side import for an ABView.
//
function FNAbviewcsvimporter({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewRuleListFormRecordRules
}) {
   const ABAbviewcsvimporterComponent = (0,_FNAbviewcsvimporterComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ ABViewComponentPlugin });

   const ABRecordRule = ABViewRuleListFormRecordRules;

   const ABViewCSVImporterDefaults = {
      key: "csvImporter",
      // {string}
      // unique key identifier for this ABViewForm

      icon: "upload",
      // {string}
      // font-awesome icon reference: (without 'fa-' )

      labelKey: "CSV Importer",
      // {string}
      // the multilingual label key for the class label
      // NOTE: will be used as L(labelKey)
   };

   const ABViewCSVImporterPropertyComponentDefaults = {
      dataviewID: null,
      // {uuid}
      // The ABDataCollection.uuid that we are using to store the data.
      // NOTE: we actually use the DC to get the ABObject it is connected to.

      availableFieldIds: [],
      //{array}
      // A list of ABField.ids that are allowed to be imported using this widget.

      buttonLabel: "Upload CSV",
      // {string}
      // The Label(key) to display on the initial button

      width: 0,
      // {integer}
      // Width of the Popup.

      recordRules: [],
      // {array}  [ {RecordRule}, ... ]
      // A list of ABViewRuleListFormRecordRules that should be performed upon
      // each row of data imported.
      // The Array should look like:
      // [{
      //    action: {string},
      //    when: [
      //       {
      //          fieldId: {UUID},
      //          comparer: {string},
      //          value: {string}
      //       }
      //    ],
      //    values: [
      //       {
      //          fieldId: {UUID},
      //          value: {object}
      //       }
      //    ]
      // }]
   };

   class ABViewCSVImporterCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewCSVImporterDefaults
         );
      }

      /**
       * @method common()
       * Provides the default settings for an instance of an ABViewCSVImporter
       * @return {json}
       */
      static common() {
         return ABViewCSVImporterDefaults;
      }

      /**
       * @method defaultValues()
       * Provides the default settings for an instance of an ABViewCSVImporter
       * Component that is displayed on the UI.
       * @return {json}
       */
      static defaultValues() {
         return ABViewCSVImporterPropertyComponentDefaults;
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
         this.settings.width = parseInt(
            this.settings.width || ABViewCSVImporterPropertyComponentDefaults.width
         );
      }

      get RecordRule() {
         let object = this.datacollection?.datasource;
         if (!object) return null;

         if (this._recordRule == null) {
            this._recordRule = new ABRecordRule();
         }

         this._recordRule.formLoad(this);
         this._recordRule.fromSettings(this.settings.recordRules);
         this._recordRule.objectLoad(object);

         return this._recordRule;
      }

      doRecordRulesPre(rowDatas) {
         if (rowDatas && !Array.isArray(rowDatas)) {
            rowDatas = [rowDatas];
         }

         rowDatas.forEach((row) => {
            this.RecordRule?.processPre({ data: row.data || row, form: this });
         });
      }

      doRecordRules(rowDatas) {
         if (rowDatas && !Array.isArray(rowDatas)) {
            rowDatas = [rowDatas];
         }

         if (!this.RecordRule) return Promise.resolve();

         let tasks = [];

         rowDatas.forEach((row) => {
            tasks.push(
               this.RecordRule.process({ data: row.data || row, form: this })
            );
         });

         return Promise.all(tasks);
      }
   };

   return class ABViewCSVImporter extends ABViewCSVImporterCore {

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
         return new ABAbviewcsvimporterComponent(this, parentId);
      }




      warningsEval() {
         super.warningsEval();

         let DC = this.datacollection;
         if (!DC) {
            this.warningsMessage(
               `can't resolve it's datacollection[${this.settings.dataviewID}]`
            );
         }

         if (!this.settings.availableFieldIds?.length) {
            this.warningsMessage("has no fields set for matching import data");
         }
      }
   };

}



/***/ },

/***/ 94922
/*!***********************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_csvImporter/FNAbviewcsvimporterComponent.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewcsvimporterComponent)
/* harmony export */ });
const CSVImporter = __webpack_require__(/*! ./CSVImporter */ 95079);

function FNAbviewcsvimporterComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewcsvimporterComponent extends ABViewComponentPlugin {


      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABCSVImporter_${baseView.id}`,
            Object.assign(
               {
                  button: "",
                  popup: "",

                  form: "",
                  uploader: "",
                  uploadFileList: "",
                  separatedBy: "",
                  headerOnFirstLine: "",
                  columnList: "",

                  search: "",
                  datatable: "",

                  statusMessage: "",
                  progressBar: "",

                  linkedDataButton: "",
                  importButton: "",
                  rules: "",
               },
               ids
            )
         );

         this.csvImporter = new CSVImporter((...args) => this.label(...args));
         // {CSVImporter}
         // An instance of the object that imports the CSV data.

         this.validationError = false;

         this._dataRows = null;
         this._csvFileInfo = null;
      }

      ui() {
         const settings = this.settings;
         const defaultSettings = this.view.constructor.defaultValues();
         const _ui = super.ui([
            {
               cols: [
                  {
                     view: "button",
                     css: "webix_primary",
                     type: "icon",
                     icon: "fa fa-upload",
                     label: this.label(
                        settings.buttonLabel || defaultSettings.buttonLabel
                     ),
                     width: settings.width || defaultSettings.width,
                     click: () => {
                        this.showPopup();
                     },
                  },
                  {
                     fillspace: true,
                  },
               ],
            },
         ]);

         delete _ui.type;

         return _ui;
      }

      uiConfig() {
         const ids = this.ids;

         return {
            id: ids.form,
            view: "form",
            type: "clean",
            borderless: true,
            minWidth: 400,
            gravity: 1,
            elements: [
               {
                  rows: [
                     {
                        id: ids.uploader,
                        view: "uploader",
                        name: "csvFile",
                        css: "webix_primary",
                        value: this.label("Choose a CSV file"),
                        accept: "text/csv",
                        multiple: false,
                        autosend: false,
                        link: ids.uploadFileList,
                        on: {
                           onBeforeFileAdd: (fileInfo) => {
                              this._csvFileInfo = fileInfo;

                              return this.loadCsvFile();
                           },
                        },
                     },
                     {
                        id: ids.uploadFileList,
                        name: "uploadedFile",
                        view: "list",
                        type: "uploader",
                        autoheight: true,
                        borderless: true,
                        onClick: {
                           webix_remove_upload: (e, id /*, trg */) => {
                              this.removeCsvFile(id);
                           },
                        },
                     },
                     {
                        padding: 10,
                        rows: [
                           {
                              id: ids.separatedBy,
                              view: "richselect",
                              name: "separatedBy",
                              label: this.label("Separated by"),
                              labelWidth: 140,
                              options: this.csvImporter.getSeparateItems(),
                              value: ",",
                              on: {
                                 onChange: () => {
                                    this.loadCsvFile();
                                 },
                              },
                           },
                           {
                              id: ids.headerOnFirstLine,
                              view: "checkbox",
                              name: "headerOnFirstLine",
                              label: this.label("Header on first line"),
                              labelWidth: 140,
                              disabled: true,
                              value: true,
                              on: {
                                 onChange: (/*newVal, oldVal*/) => {
                                    this.populateColumnList();
                                 },
                              },
                           },
                        ],
                     },
                     {
                        type: "space",
                        rows: [
                           {
                              view: "scrollview",
                              minHeight: 300,
                              body: {
                                 padding: 10,
                                 id: ids.columnList,
                                 rows: [],
                              },
                           },
                        ],
                     },
                  ],
               },
            ],
         };
      }

      uiRecordsView() {
         const ids = this.ids;

         return {
            gravity: 2,
            rows: [
               {
                  view: "toolbar",
                  css: "bg_gray",
                  cols: [
                     { width: 5 },
                     {
                        id: ids.search,
                        view: "search",
                        value: "",
                        label: "",
                        placeholder: this.label("Search records..."),
                        keyPressTimeout: 200,
                        on: {
                           onTimedKeyPress: () => {
                              this.search($$(ids.search).getValue());
                           },
                        },
                     },
                     { width: 2 },
                  ],
               },
               {
                  id: ids.datatable,
                  view: "datatable",
                  resizeColumn: true,
                  editable: true,
                  editaction: "dblclick",
                  css: "ab-csv-importer",
                  borderless: false,
                  tooltip: (obj) => {
                     const tooltip = obj._errorMsg
                        ? obj._errorMsg
                        : "No validation errors";
                     return tooltip;
                  },
                  minWidth: 650,
                  columns: [],
                  on: {
                     onValidationError: (id, obj, details) => {
                        // console.log(`item ${id} invalid`);
                        let errors = "";

                        Object.keys(details).forEach((key) => {
                           this.$view.complexValidations[key].forEach((err) => {
                              errors += err.invalidMessage + "</br>";
                           });
                        });

                        const $dt = $$(ids.datatable);

                        $dt.blockEvent();
                        $dt.updateItem(id, {
                           _status: "invalid",
                           _errorMsg: errors,
                        });
                        $dt.unblockEvent();

                        this.validationError = true;
                     },
                     onValidationSuccess: (id, obj, details) => {
                        // console.log(`item ${id} valid`);
                        const $dt = $$(ids.datatable);

                        $dt.blockEvent();
                        $dt.updateItem(id, {
                           _status: "valid",
                           _errorMsg: "",
                        });
                        $dt.unblockEvent();
                        this.validationError = false;
                     },
                     onCheck: () => {
                        const selected = $$(ids.datatable).find({
                           _included: true,
                        });
                        const $importButton = $$(ids.importButton);

                        $importButton.setValue(this.labelImport(selected));

                        if (this.overLimitAlert(selected)) $importButton.disable();
                        else $importButton.enable();
                     },
                  },
               },
               {
                  id: ids.progressBar,
                  height: 6,
               },
               {
                  cols: [
                     {
                        id: ids.linkedDataButton,
                        view: "button",
                        label: this.label("Linked Data"),
                        type: "icon",
                        icon: "fa fa-info",
                        maxWidth: 180,
                        click: () => {
                           this.showLinkedData();
                        },
                     },
                     {
                        view: "button",
                        name: "import",
                        id: ids.importButton,
                        label: this.label("Import"),
                        css: "webix_primary",
                        disabled: true,
                        type: "icon",
                        icon: "fa fa-upload",
                        click: () => {
                           this.import();
                        },
                     },
                  ],
               },
            ],
         };
      }

      uiPopup() {
         const ids = this.ids;

         return {
            id: ids.popup,
            view: "window",
            hidden: true,
            position: "center",
            modal: true,
            resize: true,
            head: {
               view: "toolbar",
               css: "webix_dark",
               cols: [
                  {},
                  {
                     view: "label",
                     label: this.label("CSV Importer"),
                     autowidth: true,
                  },
                  {},
                  {
                     view: "button",
                     width: 35,
                     css: "webix_transparent",
                     type: "icon",
                     icon: "nomargin fa fa-times",
                     click: () => {
                        this.hide();
                     },
                  },
               ],
            },
            body: {
               type: "form",
               rows: [
                  {
                     type: "line",
                     cols: [
                        this.uiConfig(),
                        { width: 20 },
                        this.uiRecordsView(),
                        { width: 1 },
                     ],
                  },
                  {
                     id: ids.statusMessage,
                     view: "label",
                     align: "right",
                     hidden: true,
                  },
                  {
                     hidden: true,
                     margin: 5,
                     cols: [
                        { fillspace: true },
                        {
                           view: "button",
                           name: "cancel",
                           value: this.label("Cancel"),
                           css: "ab-cancel-button",
                           autowidth: true,
                           click: () => {
                              this.hide();
                           },
                        },
                        /*,
                           {
                              view: "button",
                              name: "import",
                              id: ids.importButton,
                              value: labels.component.import,
                              css: "webix_primary",
                              disabled: true,
                              autowidth: true,
                              type: "form",
                              click: () => {
                                 _logic.import();
                              }
                           }*/
                     ],
                  },
               ],
            },
         };
      }

      async init(AB) {
         await super.init(AB);

         const ids = this.ids;

         // Populate values to rules

         const dc = this.datacollection;

         if (dc) this.objectLoad(dc.datasource);

         const abWebix = AB.Webix;

         abWebix.ui(this.uiPopup());

         const $form = $$(ids.form);

         if ($form) abWebix.extend($form, abWebix.ProgressBar);

         const $progressBar = $$(ids.progressBar);

         if ($progressBar) abWebix.extend($progressBar, abWebix.ProgressBar);
      }

      showPopup() {
         const ids = this.ids;

         $$(ids.popup)?.show();

         this.formClear();

         // open file dialog to upload
         $$(ids.uploader).fileDialog();
      }

      hide() {
         $$(this.ids.popup)?.hide();
      }

      formClear() {
         const ids = this.ids;

         this._dataRows = null;
         this._csvFileInfo = null;

         const $form = $$(ids.form);

         $form.clearValidation();
         $form.clear();

         $$(ids.separatedBy).setValue(",");

         this.AB.Webix.ui([], $$(ids.columnList));

         $$(ids.headerOnFirstLine).disable();
         $$(ids.importButton).disable();

         $$(ids.search).setValue("");
         $$(ids.uploadFileList).clearAll();
         $$(ids.datatable).clearAll();

         const $statusMessage = $$(ids.statusMessage);

         $statusMessage.setValue("");
         $statusMessage.hide();
      }

      search(searchText) {
         const $datatable = $$(this.ids.datatable);

         if (!$datatable) return;

         searchText = (searchText || "").toLowerCase();

         const matchFields = this.getMatchFields();

         $datatable.filter((row) => {
            let exists = false;

            (matchFields || []).forEach((f) => {
               if (exists) return;

               exists =
                  (row[`${f.columnIndex}`] || "")
                     .toString()
                     .toLowerCase()
                     .indexOf(searchText) > -1;
            });

            return exists;
         });
      }

      statusTemplate(item) {
         let template = "";

         if (!item) return template;

         switch (item._status) {
            case "in-progress":
               template = "<span class='fa fa-refresh'></span>";
               break;
            case "invalid":
               template = "<span class='fa fa-exclamation-triangle'></span>";
               break;
            case "valid":
               template = "<span class='fa fa-check'></span>";
               break;
            case "done":
               template = "<span class='fa fa-check'></span>";
               break;
            case "fail":
               template = "<span class='fa fa-remove'></span>";
               break;
         }

         return template;
      }

      async loadCsvFile() {
         const _csvFileInfo = this._csvFileInfo;

         if (!_csvFileInfo) return false;

         const csvImporter = this.csvImporter;

         if (!csvImporter.validateFile(_csvFileInfo)) {
            this.AB.Webix.alert({
               title: this.label("This file extension is not allowed"),
               text: this.label("Please only upload CSV files"),
               ok: this.label("Ok"),
            });

            return false;
         }

         const ids = this.ids;

         // show loading cursor
         const $form = $$(ids.form);

         $form?.showProgress?.({ type: "icon" });

         // read CSV file
         const $headerOnFirstLine = $$(ids.headerOnFirstLine);
         const $importButton = $$(ids.importButton);

         $headerOnFirstLine.enable();
         $importButton.enable();

         this._dataRows = await csvImporter.getDataRows(
            _csvFileInfo,
            $$(ids.separatedBy).getValue()
         );

         const _dataRows = this._dataRows;

         let length = _dataRows.length;

         if ($headerOnFirstLine.getValue()) length = _dataRows.length - 1;

         $importButton.setValue(this.labelImport(length));
         this.populateColumnList();
         $form?.hideProgress?.();

         return true;
      }

      removeCsvFile(fileId) {
         $$(this.ids.uploadFileList).remove(fileId);
         this.formClear();

         return true;
      }

      populateColumnList() {
         const self = this;
         const ids = this.ids;
         const abWebix = this.AB.Webix;

         // clear list
         const $columnList = $$(ids.columnList);

         abWebix.ui([], $columnList);

         const _dataRows = this._dataRows;

         if (!_dataRows) return;

         // check first line of CSV
         const firstLine = _dataRows[0];

         if (!firstLine) return;

         const csvColumnList = [];
         const fieldList = [];
         const currentObject = this.CurrentObject;

         if (currentObject)
            fieldList.push(
               ...currentObject.fields((f) => {
                  // available fields
                  if (
                     this.settings.availableFieldIds?.length &&
                     this.settings.availableFieldIds.indexOf(f.id) < 0
                  ) {
                     return false;
                  }

                  // filter editable fields
                  const formComp = f.formComponent();

                  if (!formComp) return true;

                  const formConfig = formComp.common();

                  if (!formConfig) return true;

                  return formConfig.key != "fieldreadonly";
               })
            );

         const csvImporter = this.csvImporter;

         // check first line be header columns
         if ($$(ids.headerOnFirstLine).getValue())
            csvColumnList.push(
               ...firstLine.map((colName, index) => {
                  return {
                     id: index + 1, // webix .options list disallow value 0
                     value: colName,
                     key: csvImporter.getGuessDataType(_dataRows, index),
                  };
               })
            );
         else
            firstLine.forEach((e, i) => {
               csvColumnList.push({
                  id: i + 1, // webix .options list disallow value 0
                  value: this.label("Column {0}", [i + 1]),
                  key: csvImporter.getGuessDataType(_dataRows, i),
               });
            });

         // Add unselect item
         csvColumnList.unshift({
            id: "none",
            value: this.label("None"),
         });

         // populate columns to UI
         const uiColumns = [];
         const selectedCsvCols = [];

         fieldList.forEach((f) => {
            // match up by data type
            const matchCol = csvColumnList.filter(
               (c) => c.key == f.key && selectedCsvCols.indexOf(c.id) < 0
            )[0];

            let selectVal = "none";

            if (matchCol) {
               selectVal = matchCol.id;

               // cache
               selectedCsvCols.push(selectVal);
            }

            let columnOptUI = {
               view: "richselect",
               gravity: 2,
               options: csvColumnList,
               fieldId: f.id,
               abName: "columnIndex",
               value: selectVal,
               on: {
                  onChange: function () {
                     self.toggleLinkFields(this);
                     self.loadDataToGrid();
                  },
               },
            };

            // Add date format options
            if (f.key === "date") {
               const dateSeparatorOptions = ["/", "-", ".", ",", " "];
               const dayFormatOptions = [
                  { value: this.label("1 to 31"), id: "D" },
                  { value: this.label("01 to 31"), id: "DD" },
               ];
               const monthFormatOptions = [
                  { value: this.label("1 to 12"), id: "M" },
                  { value: this.label("01 to 12"), id: "MM" },
               ];
               const yearFormatOptions = [
                  { value: this.label("00 to 99"), id: "YY" },
                  { value: this.label("2000 to 2099"), id: "YYYY" },
               ];
               const dateOrderOptions = [
                  {
                     value: this.label("D-M-Y"),
                     id: 1,
                  },
                  {
                     value: this.label("M-D-Y"),
                     id: 2,
                  },
                  {
                     value: this.label("Y-M-D"),
                     id: 3,
                  },
                  {
                     value: this.label("Y-D-M"),
                     id: 4,
                  },
               ];

               columnOptUI = {
                  gravity: 2,
                  rows: [
                     columnOptUI,
                     {
                        view: "richselect",
                        label: this.label("Separator"),
                        labelWidth: 100,
                        on: {
                           onChange: () => {
                              this.loadDataToGrid();
                           },
                        },
                        name: "separator",
                        abName: "columnDateFormat",
                        options: dateSeparatorOptions,
                        value: "/",
                     },
                     {
                        view: "richselect",
                        label: this.label("Day"),
                        labelWidth: 100,
                        on: {
                           onChange: () => {
                              this.loadDataToGrid();
                           },
                        },
                        name: "day",
                        abName: "columnDateFormat",
                        options: dayFormatOptions,
                        value: "D",
                     },
                     {
                        view: "richselect",
                        label: this.label("Month"),
                        labelWidth: 100,
                        on: {
                           onChange: () => {
                              this.loadDataToGrid();
                           },
                        },
                        name: "month",
                        abName: "columnDateFormat",
                        options: monthFormatOptions,
                        value: "M",
                     },
                     {
                        view: "richselect",
                        label: this.label("Year"),
                        labelWidth: 100,
                        on: {
                           onChange: () => {
                              this.loadDataToGrid();
                           },
                        },
                        name: "year",
                        abName: "columnDateFormat",
                        options: yearFormatOptions,
                        value: "YY",
                     },
                     {
                        view: "richselect",
                        label: this.label("Order"),
                        labelWidth: 100,
                        on: {
                           onChange: () => {
                              this.loadDataToGrid();
                           },
                        },
                        name: "order",
                        abName: "columnDateFormat",
                        options: dateOrderOptions,
                        value: 1,
                     },
                  ],
               };
            }

            // Add connected field options
            if (f.isConnection) {
               let linkFieldOptions = [];

               if (f.datasourceLink) {
                  linkFieldOptions = f.datasourceLink
                     .fields((fld) => !fld.isConnection)
                     .map((fld) => {
                        return {
                           id: fld.id,
                           value: fld.label,
                        };
                     });
               }

               columnOptUI = {
                  gravity: 2,
                  rows: [
                     columnOptUI,
                     {
                        view: "richselect",
                        label: "=",
                        labelWidth: 20,
                        abName: "columnLinkData",
                        hidden: true,
                        options: linkFieldOptions,
                        value: linkFieldOptions[0] ? linkFieldOptions[0].id : null,
                     },
                  ],
               };
            }

            uiColumns.push({
               view: "layout",
               borderless: true,
               cols: [
                  {
                     view: "template",
                     gravity: 1,
                     borderless: true,
                     css: { "padding-top": 10 },
                     template: `<span class="fa fa-${f.icon}"></span> ${f.label}`,
                  },
                  columnOptUI,
               ],
            });
         });
         abWebix.ui(uiColumns, $columnList);

         this.loadDataToGrid();
      }

      toggleLinkFields($columnOption) {
         if (!$columnOption) return;

         const $optionPanel = $columnOption.getParentView();
         const $linkFieldOption = $optionPanel.queryView(
            { abName: "columnLinkData" },
            "all"
         )[0];

         if (!$linkFieldOption) return;

         if ($columnOption.getValue() === "none") $linkFieldOption.hide();
         else $linkFieldOption.show();
      }

      overLimitAlert(data) {
         const limit = 1000;

         if (data.length > limit) {
            // we only allow 1000 record imports
            this.AB.Webix.alert({
               title: this.label("Too many records"),
               ok: this.label("Ok"),
               text: this.label(
                  "Due to browser limitations we only allow imports of {0} records. Please upload a new CSV or deselect records to import.",
                  [limit]
               ),
            });

            return true;
         }

         return false;
      }

      loadDataToGrid() {
         const ids = this.ids;
         const $datatable = $$(ids.datatable);
         const ab = this.AB;

         if (!$datatable) return;

         $datatable.clearAll();

         // show loading cursor
         $datatable.showProgress?.({ type: "icon" });

         /** Prepare Columns */
         const matchFields = this.getMatchFields();
         const columns = [];

         // add "status" column
         columns.push({
            id: "_status",
            header: "",
            template: this.statusTemplate,
            width: 30,
         });

         // add "checkbox" column
         columns.push({
            id: "_included",
            header: { content: "masterCheckbox" },
            template: "{common.checkbox()}",
            width: 30,
         });

         const fieldValidations = [];
         const rulePops = [];

         // populate columns
         (matchFields || []).forEach((f) => {
            let validationRules = f.field.settings.validationRules;
            // parse the rules because they were stored as a string
            // check if rules are still a string...if so lets parse them
            if (validationRules && typeof validationRules === "string")
               validationRules = JSON.parse(validationRules);

            if (validationRules?.length) {
               const validationUI = [];

               // there could be more than one so lets loop through and build the UI
               validationRules.forEach((rule) => {
                  const Filter = ab.filterComplexNew(
                     `${f.field.id}_${ab.Webix.uid()}`
                  );
                  // add the new ui to an array so we can add them all at the same time
                  validationUI.push(Filter.ui);
                  // store the filter's info so we can assign values and settings after the ui is rendered
                  fieldValidations.push({
                     filter: Filter,
                     view: Filter.ids.querybuilder,
                     columnName: f.field.id,
                     validationRules: rule.rules,
                     invalidMessage: rule.invalidMessage,
                     columnIndex: f.columnIndex,
                  });
               });

               // create a unique view id for popup
               const popUpId = `${ids.rules}_${f.field.id}_${ab.Webix.uid()}`;

               // store the popup ids so we can remove the later
               rulePops.push(popUpId);
               // add the popup to the UI but don't show it
               ab.Webix.ui({
                  view: "popup",
                  css: "ab-rules-popup",
                  id: popUpId,
                  body: {
                     rows: validationUI,
                  },
               });
            }

            const editor = f.field?.key == "number" ? "number" : "text";

            columns.push({
               id: f.columnIndex,
               header: f.field.label,
               editor: editor,
               template: (obj, common, value /*, col, ind */) =>
                  value.replace(/[<]/g, "&lt;"),
               minWidth: 150,
               fillspace: true,
            });
         });

         if (fieldValidations.length) {
            // we need to store the rules for use later so lets build a container array
            const complexValidations = [];

            fieldValidations.forEach((f) => {
               // init each ui to have the properties (app and fields) of the object we are editing
               // f.filter.applicationLoad(App);
               f.filter.fieldsLoad(this.CurrentObject.fields());
               // now we can set the value because the fields are properly initialized
               f.filter.setValue(f.validationRules);
               // if there are validation rules present we need to store them in a lookup hash
               // so multiple rules can be stored on a single field
               if (!Array.isArray(complexValidations[f.columnName]))
                  complexValidations[f.columnName] = [];

               // now we can push the rules into the hash
               complexValidations[f.columnName].push({
                  filters: $$(f.view).getFilterHelper(),
                  values: $datatable.getSelectedItem(),
                  invalidMessage: f.invalidMessage,
                  columnIndex: f.columnIndex,
               });
            });

            const rules = {};

            // store the rules in a data param to be used later
            $datatable.$view.complexValidations = complexValidations;

            // use the lookup to build the validation rules
            Object.keys(complexValidations).forEach((key) => {
               rules[key] = (value, data) => {
                  // default valid is true
                  let isValid = true;

                  $datatable.$view.complexValidations[key].forEach((filter) => {
                     const rowValue = {};
                     // use helper funtion to check if valid
                     // map the column names to the index numbers of data
                     // reformat data to display

                     (matchFields || []).forEach((f) => {
                        const record = data[f.columnIndex];

                        if (
                           f.field.key === "date" &&
                           record.includes("Invalid date")
                        )
                           isValid = false;

                        rowValue[f.field.id] = record;
                     });

                     const ruleValid = filter.filters(rowValue);

                     // if invalid we need to tell the field
                     if (!ruleValid) {
                        isValid = false;
                        // this.AB.Webix.message({
                        //    type: "error",
                        //    text: invalidMessage
                        // });
                     }
                  });

                  return isValid;
               };
            });
            // define validation rules
            $datatable.define("rules", rules);
            // store the array of view ids on the webix object so we can get it later
            $datatable.config.rulePops = rulePops;
            $datatable.refresh();
         } else {
            // check if the previous datatable had rule popups and remove them
            if ($datatable.config.rulePops) {
               $datatable.config.rulePops.forEach((popup) => {
                  const $popup = $$(popup);

                  if (!$popup) return;

                  $popup.destructor();
               });
            }

            // remove any validation rules from the previous table
            $datatable.define("rules", {});
            $datatable.refresh();
         }

         /** Prepare Data */
         const parsedData = [];

         (this._dataRows || []).forEach((row, index) => {
            const rowValue = {
               id: index + 1,
            };

            // reformat data to display
            (matchFields || []).forEach((f) => {
               const data = row[f.columnIndex - 1];

               if (f.field.key === "date") {
                  // let dateFormat = moment(data, f.format).format(
                  //    "YYYY-MM-DD"
                  // );
                  let dateFormat = ab.rules.toDate(data, {
                     format: f.format,
                  });
                  dateFormat = ab.rules.toDateFormat(dateFormat, {
                     format: "YYYY-MM-DD",
                  });

                  if (dateFormat === "Invalid date")
                     dateFormat = dateFormat + " - " + data;

                  rowValue[f.columnIndex] = dateFormat;
               } else rowValue[f.columnIndex] = data; // array to object
            });

            // insert "true" value of checkbox
            rowValue["_included"] = true;

            parsedData.push(rowValue);
         });

         // skip the first line
         const isSkipFirstLine = $$(ids.headerOnFirstLine).getValue();

         if (isSkipFirstLine && parsedData.length > 1) parsedData.shift();

         const $importButton = $$(ids.importButton);

         $importButton.setValue(this.labelImport(parsedData));
         $datatable.refreshColumns(columns);
         $datatable.parse(parsedData);

         if (this.overLimitAlert(parsedData)) $importButton.disable();
         else $importButton.enable();

         // hide loading cursor
         $datatable.hideProgress?.();
      }

      refreshRemainingTimeText(startUpdateTime, total, index) {
         const ids = this.ids;

         // Calculate remaining time
         const spentTime = new Date() - startUpdateTime; // milliseconds that has passed since last completed record since start

         const averageRenderTime = spentTime / index; // average milliseconds per single render at this point

         const remainTime = averageRenderTime * (total - index);

         let result = "";

         // Convert milliseconds to a readable string
         const days = (remainTime / 86400000).toFixed(0);
         const hours = (remainTime / 3600000).toFixed(0);
         const minutes = (remainTime / 60000).toFixed(0);
         const seconds = (remainTime / 1000).toFixed(0);

         if (seconds < 1) result = "";
         else if (seconds < 60)
            result = this.label("Approximately {0} second(s) remaining", [
               seconds,
            ]);
         // result = `Approximately ${seconds} second${
         //    seconds > 1 ? "s" : ""
         // }`;
         else if (minutes == 1)
            result = this.label("Approximately 1 minute {0} seconds remaining", [
               seconds - 60,
            ]);
         // result = `Approximately 1 minute ${seconds - 60} seconds`;
         else if (minutes < 60)
            result = this.label("Approximately {0} minutes remaining", [minutes]);
         else if (hours < 24)
            result = this.label("Approximately {0} hour(s) remaining", [hours]);
         else result = this.label("Approximately {0} day(s) remaining", [days]);

         if (result) {
            $$(ids.importButton)?.setValue(result);
         } else {
            const selected = $$(ids.datatable)?.find({ _included: true });
            $$(ids.importButton)?.setValue(this.labelImport(selected));
         }
      }

      /**
       * @method getMatchFields
       *
       * @return {Object} - [
       *                      {
       *                         columnIndex: {number},
       *                         field: {ABField},
       *                         searchField: {ABField} [optional]
       *                      },
       *                      ...
       *                    ]
       */
      getMatchFields() {
         const result = [];
         const ids = this.ids;

         // get richselect components
         const $selectorViews = $$(ids.columnList)
            .queryView({ abName: "columnIndex" }, "all")
            .filter((selector) => selector.getValue() != "none");

         ($selectorViews || []).forEach(($selector) => {
            const currentObject = this.CurrentObject;

            if (!currentObject) return;

            // webix .options list disallow value 0
            const field = currentObject.fieldByID($selector.config.fieldId);

            if (!field) return;

            const colIndex = $selector.getValue();
            const fieldData = {
               columnIndex: colIndex,
               field: field,
            };

            if (field.key === "date") {
               const $optionPanel = $selector.getParentView();
               const $dateFormatSelectors = $optionPanel.queryView(
                  { abName: "columnDateFormat" },
                  "all"
               );

               // define the column to compare data to search .id
               if ($dateFormatSelectors) {
                  $dateFormatSelectors.forEach((selector) => {
                     fieldData[selector.config.name] = selector.getValue();
                  });

                  // convert all dates into mysql date format YYYY-DD-MM
                  let format;

                  switch (fieldData.order) {
                     case "1":
                        format =
                           fieldData.day +
                           fieldData.separator +
                           fieldData.month +
                           fieldData.separator +
                           fieldData.year;
                        break;
                     case "2":
                        format =
                           fieldData.month +
                           fieldData.separator +
                           fieldData.day +
                           fieldData.separator +
                           fieldData.year;
                        break;
                     case "3":
                        format =
                           fieldData.year +
                           fieldData.separator +
                           fieldData.month +
                           fieldData.separator +
                           fieldData.day;
                        break;
                     case "4":
                        format =
                           fieldData.year +
                           fieldData.separator +
                           fieldData.day +
                           fieldData.separator +
                           fieldData.month;
                  }

                  fieldData.format = format;
               }
            }

            if (field.isConnection) {
               const $optionPanel = $selector.getParentView();
               const $linkDataSelector = $optionPanel.queryView(
                  { abName: "columnLinkData" },
                  "all"
               )[0];

               // define the column to compare data to search .id
               if ($linkDataSelector) {
                  const searchField = field.datasourceLink.fieldByID(
                     $linkDataSelector.getValue()
                  );

                  fieldData.searchField = searchField;
               }
            }

            result.push(fieldData);
         });

         return result;
      }

      labelImport(selected) {
         let length = selected;

         if (Array.isArray(selected)) length = selected.length;

         return this.label("Import {0} Records", [length]);
      }

      /**
       * @method import
       *
       * @return {Promise}
       */
      async import() {
         // if (dv == null) return Promise.resolve();

         // // get ABObject
         // let obj = dv.datasource;

         // Make sure we are connected to an Object
         const currentObject = this.CurrentObject;

         if (!currentObject) return;

         // get ABModel
         // let model = dv.model;
         // if (model == null) return Promise.resolve();

         const ids = this.ids;
         const $importButton = $$(ids.importButton);

         $importButton.disable();

         // Show loading cursor
         const $form = $$(ids.form);
         const $progressBar = $$(ids.progressBar);

         $form.showProgress({ type: "icon" });
         $progressBar.showProgress({
            type: "top",
            position: 0.0001,
         });

         // get richselect components
         const matchFields = this.getMatchFields();

         // Get object's model
         const objModel = currentObject.model();
         const $datatable = $$(ids.datatable);
         const selectedRows = $datatable.find({ _included: true });

         let _currProgress = 0;

         const increaseProgressing = () => {
            _currProgress += 1;
            $progressBar.showProgress({
               type: "bottom",
               position: _currProgress / selectedRows.length,
            });
         };
         const itemFailed = (itemId, errMessage) => {
            if ($datatable) {
               // set "fail" status
               $datatable.addRowCss(itemId, "row-fail");
               $datatable.blockEvent();
               $datatable.updateItem(itemId, {
                  _status: "fail",
                  _errorMsg: errMessage,
               });
               $datatable.unblockEvent();
            }

            increaseProgressing();

            console.error(errMessage);
         };
         const abWebix = this.AB.Webix;
         const itemInvalid = (itemId, errors = []) => {
            if ($datatable) {
               // combine all error messages to display in tooltip
               const errorMsg = [];
               // mark which column are invalid
               errors.forEach((err) => {
                  if (!err?.name) return;

                  errorMsg.push(err.name + ": " + err.message);
                  // we also need to define an error message
                  // abWebix.message({
                  //    type: "error",
                  //    text: err.name + ": " + err.message
                  // });
               });

               // set "fail" status
               $datatable.blockEvent();
               $datatable.updateItem(itemId, {
                  _status: "invalid",
                  _errorMsg: errorMsg.join("</br>"),
               });
               $datatable.unblockEvent();
               $datatable.addRowCss(itemId, "webix_invalid");
            }
            // increaseProgressing();
         };
         const itemPass = (itemId) => {
            if ($datatable) {
               // set "done" status
               $datatable.removeRowCss(itemId, "row-fail");
               $datatable.addRowCss(itemId, "row-pass");
               $datatable.blockEvent();
               $datatable.updateItem(itemId, {
                  _status: "done",
                  _errorMsg: "",
               });
               $datatable.unblockEvent();
            }

            increaseProgressing();
         };
         const itemValid = (itemId) => {
            if ($datatable) {
               // mark all columns valid (just in case they were invalid before)
               // matchFields.forEach((f) => {
               //    $datatable.removeCellCss(
               //       itemId,
               //       f.columnIndex,
               //       "webix_invalid_cell"
               //    );
               // });
               // highlight the row
               $datatable.removeRowCss(itemId, "webix_invalid");
               $datatable.blockEvent();
               $datatable.updateItem(itemId, {
                  _status: "",
                  _errorMsg: "",
               });
               $datatable.unblockEvent();
               // $datatable.addRowCss(itemId, "row-pass");
            }
         };
         const $statusMessage = $$(ids.statusMessage);
         const uiCleanUp = () => {
            // To Do anyUI updates
            // console.log("ui clean up now");
            $importButton.enable();

            // Hide loading cursor
            $form.hideProgress();
            $progressBar.hideProgress();

            $statusMessage.setValue("");
            $statusMessage.hide();

            const selected = $datatable.find({ _included: true });

            $importButton.setValue(this.labelImport(selected));
            this.emit("done");
         };

         const validRows = [];

         let allValid = true;

         // Pre Check Validations of whole CSV import
         // update row to green if valid
         // update row to red if !valid
         (selectedRows || []).forEach((data, index) => {
            const newRowData = this.getParentValues();

            matchFields.forEach((f) => {
               if (!f.field?.key) return;

               switch (f.field.key) {
                  // case "connectObject":
                  //    // skip
                  //    break;
                  case "number":
                     if (typeof data[f.columnIndex] !== "number") {
                        newRowData[f.field.columnName] = (
                           data[f.columnIndex] || ""
                        ).replace(/[^-0-9.]/gi, "");

                        break;
                     }

                     newRowData[f.field.columnName] = data[f.columnIndex];

                     break;

                  default:
                     newRowData[f.field.columnName] = data[f.columnIndex];

                     break;
               }
            });

            let isValid = false;
            let errorMsg = "";

            // first check legacy and server side validation
            const validator = currentObject.isValidData(newRowData);

            isValid = validator.pass();
            errorMsg = validator.errors;

            if (isValid)
               // now check complex field validation rules
               isValid = $datatable.validate(data.id);
            else {
               allValid = false;

               itemInvalid(data.id, errorMsg);
            }

            if (isValid) {
               itemValid(data.id);
               validRows.push({ id: data.id, data: newRowData });
            } else allValid = false;

            // $datatable.unblockEvent();
         });

         if (!allValid) {
            // To Do anyUI updates
            // $importButton.enable();
            //
            // // Hide loading cursor
            // $form.hideProgress();
            // $progressBar.hideProgress();
            // $statusMessage.setValue("");
            // $statusMessage.hide();
            //
            // // _logic.hide();
            //
            // if (_logic.callbacks && _logic.callbacks.onDone)
            //    _logic.callbacks.onDone();
            uiCleanUp();

            abWebix.alert({
               title: this.label("Invalid Data"),
               ok: this.label("Ok"),
               text: this.label(
                  "The highlighted row has invalid data. Please edit in the window or update the CSV and try again."
               ),
            });

            return;
         }

         // if pass, then continue to process each row
         // ?? : can we process in Parallel?
         // ?? : implement hash Lookups for connected Fields
         const hashLookups = {};
         // {obj}  /*  { connectField.id : { 'searchWord' : "uuid"}}
         // use this hash to reduce the # of lookups needed to fill in our
         // connected entries

         const connectedFields = matchFields.filter(
            (f) => f && f.field?.isConnection && f.searchField
         );

         const throttledSize = 10;
         let startUpdateTime;
         let numDone = 0;

         try {
            // forEach connectedFields in csv
            const allLookups = [];

            (connectedFields || []).forEach((f) => {
               const connectField = f.field;
               // const searchWord = newRowData[f.columnIndex];
               const connectObject = connectField.datasourceLink;

               if (!connectObject) return;

               const connectModel = connectObject.model();

               if (!connectModel) return;

               const linkIdKey = connectField.indexField
                  ? connectField.indexField.columnName
                  : connectField.object.PK();

               // prepare default hash entry:
               hashLookups[connectField.id] = {};

               // load all values of connectedField entries
               const gethashLookup = async () => {
                  try {
                     const list = await connectModel.findAll({
                        where: {}, // !!!
                        populate: false,
                     });
                     const data = list.data || list;

                     (data || []).forEach((row) => {
                        // store in hash[field.id] = { 'searchKey' : "uuid" }

                        hashLookups[connectField.id][
                           row[f.searchField.columnName]
                        ] = row[linkIdKey];
                     });
                  } catch (err) {
                     console.error(err);
                  }
               };

               allLookups.push(gethashLookup());
            });

            await Promise.all(allLookups);

            // forEach validRow
            validRows.forEach((data) => {
               const newRowData = data.data;

               // update the datagrid row to in-progress
               $datatable.blockEvent();
               $datatable.updateItem(data.id, {
                  _status: "in-progress",
                  _errorMsg: "",
               });
               $datatable.unblockEvent();

               // forEach ConnectedField
               (connectedFields || []).forEach((f) => {
                  // find newRowData[field.columnName] = { field.PK : hash[field.id][searchWord] }
                  const connectField = f.field;
                  const linkIdKey = connectField.indexField
                     ? connectField.indexField.columnName
                     : connectField.object.PK();
                  const uuid =
                     hashLookups[connectField.id][
                     newRowData[connectField.columnName]
                     ];

                  if (!uuid) {
                     itemInvalid(data.id, [{ name: connectField.columnName }]);
                     allValid = false;
                  }

                  newRowData[connectField.columnName] = {};
                  newRowData[connectField.columnName][linkIdKey] = uuid;
               });
            });

            if (!allValid) {
               abWebix.alert({
                  title: this.label("Invalid Data"),
                  ok: this.label("Ok"),
                  text: this.label(
                     "The highlighted row has invalid data. Please edit in the window or update the CSV and try again."
                  ),
               });
               uiCleanUp();

               return;
            }

            // NOTE: Parallel exectuion of all these:
            const allSaves = [];
            const createRecord = (objModel, newRowsData, element, total) =>
               new Promise((resolve, reject) => {
                  element.doRecordRulesPre(newRowsData);

                  const processResult = async () => {
                     try {
                        const result = await objModel.batchCreate({
                           batch: newRowsData,
                        });
                        const resultErrors = result.errors;

                        // Show errors of each row
                        Object.keys(resultErrors).forEach((rowIndex) => {
                           const error = resultErrors[rowIndex];

                           if (error) {
                              itemFailed(
                                 rowIndex,
                                 error.message || error.sqlMessage || error
                              );
                           }
                        });

                        const resultData = result.data;
                        const penddingRecordRules = [];

                        Object.keys(resultData).forEach((rowIndex) => {
                           penddingRecordRules.push(
                              new Promise((resolve, reject) => {
                                 // Process Record Rule
                                 const processRowData = async () => {
                                    try {
                                       await element.doRecordRules(
                                          resultData[rowIndex]
                                       );

                                       itemPass(rowIndex);
                                       resolve();
                                    } catch (err) {
                                       itemFailed(rowIndex, err);
                                       reject("that didn't work");
                                    }
                                 };

                                 processRowData();
                              })
                           );
                        });

                        const waitPenddingRecordRules = async () => {
                           try {
                              await Promise.all(penddingRecordRules);

                              newRowsData.forEach((row) => {
                                 // itemPass(row.id);
                                 numDone++;
                                 if (numDone % throttledSize == 0) {
                                    this.refreshRemainingTimeText(
                                       startUpdateTime,
                                       validRows.length,
                                       numDone
                                    );
                                 }
                              });

                              if (numDone === total) {
                                 uiCleanUp();
                                 $importButton.disable();
                              }

                              resolve();
                           } catch (err) {
                              // newRowsData.forEach((row) => {
                              //    itemFailed(row.id, err);
                              // });
                              // throw err;
                              reject(err);
                           }
                        };

                        await waitPenddingRecordRules();
                     } catch (err) {
                        console.error(err);
                        reject(err);
                     }
                  };

                  processResult();
               });

            validRows.forEach((data) => {
               allSaves.push({ id: data.id, data: data.data });
            });

            // we are going to store these promises in an array of
            // arrays with 50 in each sub array
            const throttledSaves = [];
            const total = allSaves.length;

            let index = 0;

            while (allSaves.length) {
               throttledSaves[index] = allSaves.splice(0, throttledSize);

               index++;
            }

            // execute the array of array of 100 promises one at at time
            const performThrottledSaves = (
               currentRecords,
               remainingRecords,
               importer,
               total
            ) =>
               new Promise((resolve, reject) => {
                  // execute the next 100
                  // const requests = currentRecords.map((data) => {
                  //    return createRecord(
                  //       objModel,
                  //       data.record,
                  //       data.data,
                  //       importer
                  //    );
                  // });

                  const processRequest = async () => {
                     try {
                        await createRecord(
                           objModel,
                           currentRecords,
                           importer,
                           total
                        );

                        // when done get the next 10
                        const nextRecords = remainingRecords.shift();

                        // if there are any remaining in the group call performThrottledSaves
                        if (nextRecords?.length) {
                           await performThrottledSaves(
                              nextRecords,
                              remainingRecords,
                              importer,
                              total
                           );
                        } else {
                           // uiCleanUp();
                           resolve();
                        }
                     } catch (err) {
                        // Handle errors here
                        reject(err);
                     }
                  };

                  processRequest();
               });

            // now we are going to processes these new containers one at a time
            // $datatable.blockEvent();
            // this is when the real work starts so lets begin our countdown timer now
            startUpdateTime = new Date();
            // get the first group of Promises out of the collection
            const next = throttledSaves.shift();

            // execute our Promise iterator
            await performThrottledSaves(next, throttledSaves, this.view, total);
         } catch (err) {
            // resolve Error UI
            abWebix.alert({
               title: this.label("Error Creating Records"),
               ok: this.label("Ok"),
               text: this.label("One or more records failed upon creation."),
            });
            // $datatable.unblockEvent();
            uiCleanUp();
            console.error(err);
         }
      }

      // Display linked data
      uiLinkedData() {
         const dcLink = this.datacollection?.datacollectionLink;
         const linkedData = dcLink?.getCursor();
         if (!linkedData) return;

         return {
            view: "window",
            modal: true,
            resize: false,
            head: {
               view: "toolbar",
               cols: [
                  {},
                  {
                     view: "button",
                     width: 35,
                     css: "webix_transparent",
                     type: "icon",
                     icon: "nomargin fa fa-times",
                     click: () => {
                        this.hideLinkedData();
                     },
                  },
               ],
            },
            body: {
               view: "property",
               id: "sets",
               editable: false,
               width: 400,
               height: 200,
               elements: [
                  { label: this.label("Linked Data"), type: "label" },
                  {
                     label: "ID",
                     type: "text",
                     value: linkedData.uuid ?? linkedData.id,
                  },
                  {
                     label: "Label",
                     type: "text",
                     value: dcLink.datasource.displayData(linkedData),
                  },
               ],
            },
         };
      }

      showLinkedData() {
         const ui = this.uiLinkedData();
         this._info_popup = this.AB.Webix.ui(ui);
         this._info_popup.show($$(this.ids.linkedDataButton).$view, {
            pos: "top",
         });
      }

      hideLinkedData() {
         this._info_popup?.hide();
      }

      getParentValues() {
         const result = {};

         // get ABDatacollection
         const dc = this.datacollection;
         const currentObject = this.CurrentObject;

         // Set parent's data collection cursor
         const dcLink = dc?.datacollectionLink;
         const linkConnectFields = [];

         let objectLink;
         let linkValues;

         if (dcLink?.getCursor()) {
            objectLink = dcLink.datasource;

            linkConnectFields.push(
               ...currentObject.fields(
                  (f) => f.isConnection && f.settings.linkObject === objectLink.id
               )
            );

            linkValues = dcLink.getCursor();
         }

         // Set parent's data collection cursor
         if (objectLink && linkConnectFields.length && linkValues) {
            linkConnectFields.forEach((f) => {
               const linkColName = f.indexField
                  ? f.indexField.columnName
                  : objectLink.PK();

               result[f.columnName] = result[f.columnName] ?? {};
               result[f.columnName][linkColName] =
                  linkValues[linkColName] ?? linkValues.id;
            });
         }

         return result;
      }


   };

}


/***/ },

/***/ 78612
/*!*************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_data-select/FNAbviewdataselect.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

/***/ 84373
/*!********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_dataview/FNAbviewdataview.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewdataview)
/* harmony export */ });
/* harmony import */ var _FNAbviewdataviewComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewdataviewComponent.js */ 69434);
/* harmony import */ var _view_detail_FNAbviewdetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view_detail/FNAbviewdetail.js */ 73053);



// FNAbviewdataview Web
// A web side import for an ABView.
//
function FNAbviewdataview({
   /*AB,*/
   ABViewComponentPlugin,
   ABViewContainer,
   ABViewContainerComponent,
   ABViewPropertyLinkPage,
}) {
   const ABAbviewdataviewComponent = (0,_FNAbviewdataviewComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
      ABViewContainerComponent,
      ABViewPropertyLinkPage,
   });

   const ABViewDataviewPropertyComponentDefaults = {
      xCount: 1, // {int} the number of columns per row (need at least one)
      detailsPage: "",
      detailsTab: "",
      editPage: "",
      editTab: "",
   };

   const ABViewDataviewDefaults = {
      key: "dataview", // {string} unique key for this view
      icon: "th", // {string} fa-[icon] reference for this view
      labelKey: "Data view(plugin)", // {string} the multilingual label key for the class label
   };

   const ABViewDetail = (0,_view_detail_FNAbviewdetail_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      ABViewContainer,
      ABViewContainerComponent,
   });

   class ABViewDataviewCore extends ABViewDetail {
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
            defaultValues || ABViewDataviewDefaults
         );
      }

      static common() {
         return ABViewDataviewDefaults;
      }

      static defaultValues() {
         return ABViewDataviewPropertyComponentDefaults;
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

         this.settings.xCount = parseInt(
            this.settings.xCount ||
               ABViewDataviewPropertyComponentDefaults.xCount
         );
         this.settings.detailsPage =
            this.settings.detailsPage ||
            ABViewDataviewPropertyComponentDefaults.detailsPage;
         this.settings.editPage =
            this.settings.editPage ||
            ABViewDataviewPropertyComponentDefaults.editPage;
         this.settings.detailsTab =
            this.settings.detailsTab ||
            ABViewDataviewPropertyComponentDefaults.detailsTab;
         this.settings.editTab =
            this.settings.editTab ||
            ABViewDataviewPropertyComponentDefaults.editTab;
      }

      parentDetailComponent() {
         let dataview = null;

         let curr = this;
         while (curr.key != "dataview" && !curr.isRoot() && curr.parent) {
            curr = curr.parent;
         }

         if (curr.key == "dataview") {
            dataview = curr;
         }

         return dataview;
      }
   }

   return class ABViewDataview extends ABViewDataviewCore {
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
         return new ABAbviewdataviewComponent(this, parentId);
      }

      // constructor(values, application, parent, defaultValues) {
      //    super(values, application, parent, defaultValues);
      // }

      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values);

         this.settings.detailsPage =
            this.settings.detailsPage ?? ABViewDataviewDefaults.detailsPage;
         this.settings.editPage =
            this.settings.editPage ?? ABViewDataviewDefaults.editPage;
         this.settings.detailsTab =
            this.settings.detailsTab ?? ABViewDataviewDefaults.detailsTab;
         this.settings.editTab =
            this.settings.editTab ?? ABViewDataviewDefaults.editTab;
      }
   };
}


/***/ },

/***/ 69434
/*!*****************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_dataview/FNAbviewdataviewComponent.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewdataviewComponent)
/* harmony export */ });
/* harmony import */ var _view_detail_FNAbviewdetailComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view_detail/FNAbviewdetailComponent.js */ 2722);


function FNAbviewdataviewComponent({
   /*AB,*/
   ABViewComponentPlugin,
   ABViewContainerComponent,
   ABViewPropertyLinkPage,
}) {
   const ABViewDetailComponent = (0,_view_detail_FNAbviewdetailComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewContainerComponent,
   });

   return class ABAbviewdataviewComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewDataview_${baseView.id}`,
            Object.assign(
               {
                  dataview: "",
                  reload: "",
               },
               ids
            )
         );

         this.linkPage = null;
      }

      ui() {
         // NOTE: need to initial the detail component here
         // because its dom width & height values are used .template function
         this.initDetailComponent();

         const ids = this.ids;
         const L = (...params) => (this.AB ?? AB).Multilingual.label(...params);
         const _ui = super.ui([
            {
               view: "layout",
               rows: [
                  {
                     id: ids.reload,
                     view: "button",
                     value: L("New data available. Click to reload."),
                     css: "webix_primary webix_warn",
                     hidden: true,
                     click: (/* id, event */) => {
                        this.reloadData();
                     },
                  },
                  {
                     id: ids.dataview,
                     view: "dataview",
                     scroll: "y",
                     sizeToContent: true,
                     css: "borderless transparent",
                     xCount:
                        this.settings.xCount != 1 ? this.settings.xCount : 0,
                     height: this.settings.height,
                     template: (item) => this.itemTemplate(item),
                     on: {
                        onAfterRender: () => {
                           this.applyClickEvent();
                           this.addCyAttribute();
                        },
                     },
                  },
               ],
            },
         ]);

         return _ui;
      }

      async init(AB) {
         await super.init(AB);

         const dc = this.datacollection;
         if (!dc) return;

         // Initial the link page helper
         this.linkPage = this.linkPageHelper.component();
         this.linkPage.init({
            view: this.view,
            datacollection: dc,
         });

         const ids = this.ids;
         const $dataView = $$(ids.dataview);
         AB.Webix.extend($dataView, AB.Webix.ProgressBar);
         dc.bind($dataView);

         this.initRefreshWarning();

         window.addEventListener("resize", () => {
            clearTimeout(this._resizeEvent);
            this._resizeEvent = setTimeout(() => {
               this.resize($dataView.getParentView());
               delete this._resizeEvent;
            }, 20);
         });
      }

      /**
       * @method initRefreshWarning
       *
       */
      initRefreshWarning() {
         const dc = this.datacollection;
         const includeInQuery =
            (
               dc?.settings?.objectWorkspace?.filterConditions?.rules ?? []
            ).filter((r) =>
               [
                  "in_query",
                  "not_in_query",
                  "in_query_field",
                  "not_in_query_field",
               ].includes(r.rule)
            ).length > 0;

         if (!includeInQuery) return;
         [
            "ab.datacollection.create",
            "ab.datacollection.update",
            "ab.datacollection.delete",
         ].forEach((eventKey) => {
            dc.on(eventKey, (data) => {
               if (data.objectId == dc.datasource.id)
                  this.showRefreshWarning(data);
            });
         });
      }

      showRefreshWarning() {
         if (this.__throttleRefreshWarning)
            clearTimeout(this.__throttleRefreshWarning);

         this.__throttleRefreshWarning = setTimeout(() => {
            $$(this.ids.reload)?.show();
         }, 200);
      }

      reloadData() {
         const dc = this.datacollection;
         dc?.reloadData();

         $$(this.ids.reload)?.hide();
      }

      onShow() {
         super.onShow();

         this.resize();
      }

      resize(base_element) {
         const $dataview = $$(this.ids.dataview);
         if (!$dataview) {
            // Not sure if its a problem so notify
            this.AB.notify.developer(
               new Error("Resize called on missing dataview component"),
               { context: "ABViewDataviewComponent.resize()", ids: this.ids }
            );
            return;
         }
         $dataview.resize();

         const item_width = this.getItemWidth(base_element);
         $dataview.customize({ width: item_width });
         $dataview.getTopParentView?.().resize?.();
      }

      initDetailComponent() {
         const detailUI = this.getDetailUI();
         this._detail_ui = this.AB.Webix.ui(detailUI);

         // 2 - Always allow access to components inside data view
         this.detailComponent.init(null, 2);
      }

      getDetailUI() {
         const detailCom = this.detailComponent;
         const editPage = this.settings.editPage;
         const detailsPage = this.settings.detailsPage;

         const _ui = detailCom.ui();
         // adjust the UI to make sure it will look like a "card"
         _ui.type = "clean";
         _ui.css = "ab-detail-view";

         if (detailsPage || editPage) {
            _ui.css += ` ab-detail-hover ab-record-#itemId#`;

            if (detailsPage) _ui.css += " ab-detail-page";
            if (editPage) _ui.css += " ab-edit-page";
         }

         return _ui;
      }

      itemTemplate(item) {
         const detailCom = this.detailComponent;
         const $dataview = $$(this.ids.dataview);
         const $detail_item = this._detail_ui;

         // Mock up data to initialize height of item
         if (!item || !Object.keys(item).length) {
            item = item ?? {};
            this.datacollection?.datasource?.fields().forEach((f) => {
               switch (f.key) {
                  case "string":
                  case "LongText":
                     item[f.columnName] = "Lorem Ipsum";
                     break;
                  case "date":
                  case "datetime":
                     item[f.columnName] = new Date();
                     break;
                  case "number":
                     item[f.columnName] = 7;
                     break;
               }
            });
         }
         detailCom.displayData(item);

         const itemWidth =
            $dataview.data.count() > 0
               ? $dataview.type.width
               : ($detail_item.$width - 20) / this.settings.xCount;

         const itemHeight =
            $dataview.data.count() > 0
               ? $dataview.type.height
               : $detail_item.getChildViews()?.[0]?.$height;

         const tmp_dom = document.createElement("div");
         tmp_dom.appendChild($detail_item.$view);

         $detail_item.define("width", itemWidth - 24);
         $detail_item.define("height", itemHeight + 15);
         $detail_item.adjust();

         // Add cy attributes
         this.addCyItemAttributes(tmp_dom, item);

         return tmp_dom.innerHTML.replace(/#itemId#/g, item.id);
      }

      getItemWidth(base_element) {
         const $dataview = $$(this.ids.dataview);

         let currElem = base_element ?? $dataview;
         let parentWidth = currElem?.$width;
         while (currElem) {
            if (
               currElem.config.view == "scrollview" ||
               currElem.config.view == "layout"
            )
               parentWidth =
                  currElem?.$width < parentWidth
                     ? currElem?.$width
                     : parentWidth;

            currElem = currElem?.getParentView?.();
         }

         if (!parentWidth)
            parentWidth =
               $dataview?.getParentView?.().$width || window.innerWidth;

         if (parentWidth > window.innerWidth) parentWidth = window.innerWidth;

         // check if the browser window minus webix default padding is the same as the parent window
         // if so we need to check to see if there is a sidebar and reduce the usable space by the
         // width of the sidebar
         if (window.innerWidth - 19 <= parentWidth) {
            const $sidebar = this.getTabSidebar();
            if ($sidebar) {
               parentWidth -= $sidebar.$width;
            }
         }

         const recordWidth = Math.floor(parentWidth / this.settings.xCount);

         return recordWidth;
      }

      getTabSidebar() {
         const $dataview = $$(this.ids.dataview);
         let $sidebar;
         let currElem = $dataview;
         while (currElem && !$sidebar) {
            $sidebar = (currElem.getChildViews?.() ?? []).filter(
               (item) => item?.config?.view == "sidebar"
            )[0];

            currElem = currElem?.getParentView?.();
         }

         return $sidebar;
      }

      applyClickEvent() {
         const editPage = this.settings.editPage;
         const detailsPage = this.settings.detailsPage;
         if (!detailsPage && !editPage) return;

         const $dataview = $$(this.ids.dataview);
         if (!$dataview) return;

         $dataview.$view.onclick = (e) => {
            let clicked = false;
            let divs = e.path ?? [];

            // NOTE: Some web browser clients do not support .path
            if (!divs.length) {
               divs.push(e.target);
               divs.push(e.target.parentNode);
            }

            if (editPage) {
               for (let p of divs) {
                  if (
                     p.className &&
                     p.className.indexOf("webix_accordionitem_header") > -1
                  ) {
                     clicked = true;
                     p.parentNode.parentNode.classList.forEach((c) => {
                        if (c.indexOf("ab-record-") > -1) {
                           // var record = parseInt(c.replace("ab-record-", ""));
                           const record = c.replace("ab-record-", "");
                           this.linkPage.changePage(editPage, record);
                           // com.logic.toggleTab(detailsTab, ids.component);
                        }
                     });
                     break;
                  }
               }
            }

            if (detailsPage && !clicked) {
               for (let p of divs) {
                  if (
                     p.className &&
                     p.className.indexOf("webix_accordionitem") > -1
                  ) {
                     p.parentNode.parentNode.classList.forEach((c) => {
                        if (c.indexOf("ab-record-") > -1) {
                           // var record = parseInt(c.replace("ab-record-", ""));
                           const record = c.replace("ab-record-", "");
                           this.linkPage.changePage(detailsPage, record);
                           // com.logic.toggleTab(detailsTab, ids.component);
                        }
                     });

                     break;
                  }
               }
            }
         };
      }

      addCyAttribute() {
         const baseView = this.view;
         const $dataview = $$(this.ids.dataview);
         const name = (baseView.name ?? "").replace(".dataview", "");

         $dataview.$view.setAttribute(
            "data-cy",
            `dataview container ${name} ${baseView.id}`
         );
      }

      addCyItemAttributes(dom, item) {
         const baseView = this.view;
         const uuid = item.uuid;
         const name = (baseView.name ?? "").replace(".dataview", "");
         dom.querySelector(".webix_accordionitem_body")?.setAttribute(
            "data-cy",
            `dataview item ${name} ${uuid} ${baseView.id}`
         );
         dom.querySelector(".webix_accordionitem_button")?.setAttribute(
            "data-cy",
            `dataview item button ${name} ${uuid} ${baseView.id}`
         );
      }

      get detailComponent() {
         return (this._detailComponent =
            this._detailComponent ??
            new ABViewDetailComponent(
               this.view,
               `${this.ids.component}_detail_view`
            ));
      }

      get linkPageHelper() {
         return (this.__linkPageHelper =
            this.__linkPageHelper || new ABViewPropertyLinkPage());
      }
   };
}


/***/ },

/***/ 73053
/*!****************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_detail/FNAbviewdetail.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
}) {
   const ABViewDetailComponent = (0,_FNAbviewdetailComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewContainerComponent,
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewdetailComponent)
/* harmony export */ });
function FNAbviewdetailComponent({ ABViewContainerComponent }) {
   const ContainerComponent =
      ABViewContainerComponent?.default ?? ABViewContainerComponent;
   if (!ContainerComponent) {
      throw new Error(
         "FNAbviewdetailComponent requires ABViewContainerComponent from getPluginAPI()"
      );
   }

   return class ABAbviewdetailComponent extends ContainerComponent {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewDetail_${baseView.id}`,
            Object.assign({ detail: "" }, ids)
         );
         this.idBase = idBase || `ABViewDetail_${baseView.id}`;
      }

      ui() {
         const _ui = super.ui();

         // this wrapper allows the detail view to have a
         // card appearance as well as enables the edit and
         // details functions to work when clicked
         return {
            type: "form",
            id: this.ids.component,
            borderless: true,
            rows: [{ body: _ui }],
         };
      }

      onShow() {
         const baseView = this.view;
         const dataCy = `Detail ${baseView.name?.split(".")[0]} ${baseView.id}`;
         $$(this.ids.component)?.$view?.setAttribute("data-cy", dataCy);

         // listen DC events
         const dv = this.datacollection;
         if (dv) {
            const currData = dv.getCursor();
            if (currData) this.displayData(currData);

            ["changeCursor", "cursorStale", "collectionEmpty"].forEach(
               (key) => {
                  this.eventAdd({
                     emitter: dv,
                     eventName: key,
                     listener: (...p) => this.displayData(...p),
                  });
               }
            );
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

         super.onShow();
      }

      displayData(rowData = {}) {
         // make sure we have data to work with.  If null is passed in
         // then pull current cursor.
         if (rowData == null) {
            rowData = this.datacollection.getCursor();
         }

         const views = (this.view.views() || []).sort((a, b) => {
            if (!a?.field?.() || !b?.field?.()) return 0;

            // NOTE: sort order of calculated fields.
            // FORMULA field type should be calculated before CALCULATE field type
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

               // get value of relation when field is a connect field
               switch (field.key) {
                  case "connectObject":
                     val = field.pullRelationValues(rowData);
                     break;
                  case "list":
                     val = rowData?.[field.columnName];
                     if (!val) {
                        val = "";
                        break;
                     }
                     if (field.settings.isMultiple === 0) {
                        let myVal = "";
                        field.settings.options.forEach((options) => {
                           if (options.id === val) myVal = options.text;
                        });
                        if (field.settings.hasColors) {
                           let myHex = "#66666";
                           let hasCustomColor = "";
                           field.settings.options.forEach((h) => {
                              if (h.text === myVal) {
                                 myHex = h.hex;
                                 hasCustomColor = "hascustomcolor";
                              }
                           });
                           myVal = `<span class="webix_multicombo_value ${hasCustomColor}" style="background-color: ${myHex} !important;"><span>${myVal}</span></span>`;
                        }
                        val = myVal;
                     } else {
                        const items = [];
                        val.forEach((value) => {
                           let hasCustomColor = "";
                           let optionHex = "";
                           if (field.settings.hasColors && value.hex) {
                              hasCustomColor = "hascustomcolor";
                              optionHex = `background: ${value.hex};`;
                           }
                           let myVal = "";
                           field.settings.options.forEach((options) => {
                              if (options.id === value.id) myVal = options.text;
                           });
                           items.push(
                              `<span class="webix_multicombo_value ${hasCustomColor}" style="${optionHex}" optvalue="${value.id}"><span>${myVal}</span></span>`
                           );
                        });
                        val = items.join("");
                     }
                     break;
                  case "user":
                     val = field.pullRelationValues(rowData);
                     break;
                  case "file":
                     val = rowData?.[field.columnName];
                     if (!val) {
                        val = "";
                        break;
                     }
                     break;
                  case "formula":
                     if (rowData) {
                        // NOTE: Could not to re-calculate because `__relation` data is extracted from full data at the moment
                        // rowData.__relation format
                        // {
                        //    id: "string"
                        //    text: "string"
                        //    translations: []
                        //    uuid:  "0cb52669-d626-4c9d-85ea-2d931751d0ce"
                        //    value: "LABEL"
                        // }
                        const needRecalculate = false;

                        val = field.format(rowData, needRecalculate);
                     }
                     break;
                  default:
                     val = field.format(rowData);
                  // break;
               }
            }

            // set value to each components
            const vComponent = f.component(this.idBase);

            // vComponent?.onShow();

            vComponent?.setValue?.(val);
            vComponent?.displayText?.(rowData);
         });
      }
   };
}


/***/ },

/***/ 92973
/*!**************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_gantt/FNAbviewgantt.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewgantt)
/* harmony export */ });
/* harmony import */ var _FNAbviewganttComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewganttComponent.js */ 93138);



// FNAbviewgantt Web
// A web side import for an ABView.
//
function FNAbviewgantt({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer
}) {
   const ABAbviewganttComponent = (0,_FNAbviewganttComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ ABViewComponentPlugin });

   const ABViewGanttPropertyComponentDefaults = {
      dataviewID: "",
      // {string}
      // {ABDatacollection.id} of the datacollection that contains the data for
      // the Gantt chart.

      titleFieldID: "",
      // {string}
      // {ABFieldXXX.id} of the field that contains the value of the title
      // ABFieldString, ABFieldLongText

      startDateFieldID: "",
      // {string}
      // {ABFieldDate.id} of the field that contains the start date

      endDateFieldID: "",
      // {string}
      // {ABFieldDate.id} of the field that contains the end date

      durationFieldID: "",
      // {string}
      // {ABFieldNumber.id} of the field that contains the duration

      progressFieldID: "",
      // {string}
      // {ABFieldNumber.id} of the field that marks the progress

      notesFieldID: "",
      // {string}
      // {ABFieldXXX.id} of the field that contains the value of the title
      // ABFieldString, ABFieldLongText
   };

   const ABViewDefaults = {
      key: "gantt", // {string} unique key for this view
      icon: "tasks", // {string} fa-[icon] reference for this view
      labelKey: "Gantt", // {string} the multilingual label key for the class label
   };

   class ABViewGanttCore extends ABViewWidgetPlugin {
      /**
       * @param {obj} values  key=>value hash of ABView values
       * @param {ABApplication} application the application object this view is under
       * @param {ABViewWidget} parent the ABViewWidget this view is a child of. (can be null)
       */
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewGanttPropertyComponentDefaults;
      }

      /**
       * @method fromValues()
       *
       * initialze this object with the given set of values.
       * @param {obj} values
       */
      fromValues(values) {
         super.fromValues(values);

         Object.keys(ABViewGanttPropertyComponentDefaults).forEach((k) => {
            this.settings[k] =
               this.settings[k] || ABViewGanttPropertyComponentDefaults[k];
         });
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }
   };

   return class ABViewGantt extends ABViewGanttCore {

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
         return new ABAbviewganttComponent(this, parentId);
      }


      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues);
      }



      warningsEval() {
         super.warningsEval();

         let DC = this.datacollection;
         if (!DC) {
            this.warningsMessage(
               `can't resolve it's datacollection[${this.settings.dataviewID}]`
            );
         } else {
            if (!this.settings.startDateFieldID) {
               this.warningsMessage(`doesn't have a start date field set.`);
            } else {
               let field = DC.datasource?.fieldByID(
                  this.settings.startDateFieldID
               );
               if (!field) {
                  this.warningsMessage(
                     `can't lookup field: startDate[${this.settings.startDateFieldID}]`
                  );
               }
            }
         }
      }
   }

}



/***/ },

/***/ 93138
/*!***********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_gantt/FNAbviewganttComponent.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewganttComponent)
/* harmony export */ });
function FNAbviewganttComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewganttComponent extends ABViewComponentPlugin {


      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewGantt_${baseView.id}`,
            Object.assign(
               {
                  menu: "",
                  gantt: "",
               },
               ids
            )
         );

         this._tempDC = null;
         // {ABDataCollection}
         // A link to a DC that was passed in.  NOTE: this is only for
         // the temp DCs created in the AppBuilder Designer and passed
         // in.  Normal DCs are handled by the default CurrentDatacollection
         // methods.

         this.TitleField = null;
         this.StartDateField = null;
         this.EndDateField = null;
         this.DurationField = null;
         this.ProgressField = null;
         this.NotesField = null;

         this.originalStartDate = null;
         this.originalEndDate = null;

         this.pendingAdds = {};
         // {Promise}  /* id : {Promise} */
         // In order to prevent a race condition where multiple adds can be
         // generated on the same item, we catch the repeats and just return
         // the same data for each.

         const idGantt = this.ids.gantt;

         this.ganttElement = {
            isExistsTask: (taskId) => {
               const localService = $$(idGantt).getService("local");
               if (!localService) return false;

               const tasksData = localService.tasks();
               if (!tasksData || !tasksData.exists) return false;

               return tasksData.exists(taskId);
            },
            removeTask: (taskId) => {
               if (!this.ganttElement.isExistsTask(taskId)) return;

               const opsService = $$(idGantt).getService("operations");
               if (!opsService) return;

               return opsService.removeTask(taskId);
            },
         };
      }

      ui() {
         const ids = this.ids;
         const self = this;
         const { YEAR_SCALE, MONTH_SCALE, DAY_SCALE } = this.getConstantScales;
         const _ui = super.ui([
            {
               cols: [
                  { fillspace: true },
                  {
                     view: "menu",
                     id: ids.menu,
                     layout: "x",
                     width: 300,
                     data: [
                        {
                           id: "day",
                           value: this.label("Day"),
                        },
                        {
                           id: "week",
                           value: this.label("Week"),
                        },
                        {
                           id: "month",
                           value: this.label("Month"),
                        },
                        {
                           id: "year",
                           value: this.label("Year"),
                        },
                     ],
                     on: {
                        onItemClick: (id /* , e, node */) => {
                           this.setScale(id);
                        },
                     },
                  },
               ],
            },
            {
               id: ids.gantt,
               view: "gantt",
               scales: [YEAR_SCALE, MONTH_SCALE, DAY_SCALE],
               override: new Map([
                  [
                     gantt.services.Backend,
                     // global webix gantt object
                     class MyBackend extends gantt.services.Backend {
                        async tasks() {
                           const DC = self.CurrentDatacollection;
                           if (!DC) return [];

                           // if (DC.dataStatus != DC.dataStatusFlag.initialized) {
                           //    await DC.loadData().catch((err) => {
                           //       console.error(err);
                           //    });
                           // }
                           return (DC.getData() || []).map((d, indx) =>
                              self.convertFormat(d, indx)
                           );
                        }
                        links() {
                           return Promise.resolve([]);
                        }
                        async addTask(obj, index, parent) {
                           if (!self.pendingAdds[obj.id]) {
                              self.pendingAdds[obj.id] = self.taskAdd(obj);
                           }
                           const newTask = await self.pendingAdds[obj.id];
                           delete self.pendingAdds[obj.id];
                           return {
                              id: (newTask || {}).id,
                           };
                        }
                        async updateTask(id, obj) {
                           return await self.taskUpdate(obj.id, obj);
                        }
                        async removeTask(id) {
                           return await self.taskRemove(id);
                        }
                     },
                  ],
               ]),
            },
         ]);

         delete _ui.type;

         return _ui;
      }

      async init(AB) {
         await super.init(AB);

         // #HACK!: as of webix v.8.1.1 there is a visual glitch of the Gantt
         // object if you replace a gantt widget with a new definition (like in
         // the ABDesigner you can switch from Gantt1 to Gantt2 in the object
         // workspace).  In that one case, the menu would disappear even though
         // the data is present.  So this makes sure the menu is shown
         const $menu = $$(this.ids.menu);

         if ($menu) $menu.showItem("day");
      }

      /**
       * @method CurrentDatacollection()
       * A helper to return the current ABDataCollection we are working with.
       * @return {ABDataCollection}
       */
      get CurrentDatacollection() {
         return super.CurrentDatacollection || this._tempDC;
      }

      /**
       * @method convertFormat()
       * Convert an ABObject's row value into a gantt task data format.
       * @param {obj} row
       *        The current row of data returned from an ABObject.
       * @param {int} index
       *        The order of this task.
       * @return {obj}
       *         A key=>value hash corresponding to the gantt task that
       *         represents this row of data.
       */
      convertFormat(row = {}, index = null) {
         const data = {};
         const StartDateField = this.StartDateField;
         const EndDateField = this.EndDateField;
         const DurationField = this.DurationField;

         if (!StartDateField || (!EndDateField && !DurationField)) return data;

         const currDate = new Date();

         data["id"] = row.id || row.uuid;
         data["type"] = "task";
         data["parent"] = 0;
         data["open"] = true;

         // define label
         const TitleField = this.TitleField;
         const ProgressField = this.ProgressField;
         const NotesField = this.NotesField;

         data["text"] = TitleField
            ? row[TitleField.columnName] || ""
            : this.CurrentObject.displayData(row);
         data["start_date"] = row[StartDateField.columnName] || currDate;
         data["progress"] = ProgressField
            ? parseFloat(row[ProgressField.columnName] || 0)
            : 0;

         if (NotesField) data["details"] = row[NotesField.columnName] || "";

         if (EndDateField)
            data["end_date"] = row[EndDateField.columnName] || currDate;

         if (DurationField) data["duration"] = row[DurationField.columnName] || 1;

         // Default values
         if (!data["end_date"] && !data["duration"]) {
            data["end_date"] = currDate;
            data["duration"] = 1;
         }

         if (index) data["order"] = index;

         return data;
      }

      /**
       * @method convertValues()
       * Convert a Gantt task into a set of values for our ABObject.
       * @param {obj} task
       *        The current gantt task data.
       * @return {obj}
       *         A key=>value hash corresponding to the ABObject that
       *         is tied to this gantt.
       */
      convertValues(task) {
         const patch = {};
         const TitleField = this.TitleField;
         const StartDateField = this.StartDateField;
         const ProgressField = this.ProgressField;
         const NotesField = this.NotesField;
         const EndDateField = this.EndDateField;
         const DurationField = this.DurationField;

         if (TitleField) patch[TitleField.columnName] = task["text"] || "";

         if (StartDateField) patch[StartDateField.columnName] = task["start_date"];

         if (ProgressField)
            patch[ProgressField.columnName] = parseFloat(task["progress"] || 0);

         if (NotesField) patch[NotesField.columnName] = task["details"];

         if (EndDateField) patch[EndDateField.columnName] = task["end_date"];

         if (DurationField) patch[DurationField.columnName] = task["duration"];

         return patch;
      }

      /**
       * @method objectLoad
       * @param {ABObject} object
       */
      objectLoad(object) {
         super.objectLoad(object);

         // const baseView = this.view;
         const settings = this.settings;

         if (object) {
            this.TitleField = object.fieldByID(settings.titleFieldID);
            this.StartDateField = object.fieldByID(settings.startDateFieldID);
            this.EndDateField = object.fieldByID(settings.endDateFieldID);
            this.DurationField = object.fieldByID(settings.durationFieldID);
            this.ProgressField = object.fieldByID(settings.progressFieldID);
            this.NotesField = object.fieldByID(settings.notesFieldID);
         }
      }

      /**
       * @method datacollectionLoad
       * @param {ABDatacollection} datacollection
       */
      datacollectionLoad(datacollection) {
         super.datacollectionLoad(datacollection);

         const dc = this.CurrentDatacollection || datacollection;
         if (!dc) return;

         // NOTE: this can happen in the ABDesigner object workspace.
         // we send in a temp DC with no .id
         this._tempDC = datacollection;

         // NOTE: keep .objectLoad() before any .initData() is called.
         this.objectLoad(dc.datasource);

         const eventNames = ["create", "update", "delete", "initializedData"];

         eventNames.forEach((e) => {
            if (
               e in dc._events &&
               this.__events.findIndex((eo) => eo.eventName === e) !== -1
            )
               return;

            switch (e) {
               case "delete":
                  this.eventAdd({
                     emitter: dc,
                     eventName: "delete",
                     listener: (taskId) => {
                        // remove this task in gantt
                        if (this.ganttElement.isExistsTask(taskId))
                           this.ganttElement.removeTask(taskId);
                     },
                  });

                  break;

               default:
                  this.eventAdd({
                     emitter: dc,
                     eventName: e,
                     listener: () => {
                        this.initData();
                     },
                  });

                  break;
            }
         });
      }

      /**
       * @function hide()
       * hide this component.
       */
      hide() {
         $$(this.ids.component)?.hide();
      }

      initData() {
         const ganttElem = $$(this.ids.gantt);
         if (!ganttElem) return;

         const dataService = ganttElem.getService("local");
         if (!dataService) return;

         const dcTasks = dataService.tasks();
         if (!dcTasks) return;

         // gantt v 8.1.1
         // Note: there is a race condition that can happen here.
         // dataService.tasks() calls the MyBackend.tasks() above which
         // returns a Promise.
         // when you call dcTasks.clearAll() before the promise
         // is resolved, the gantt internally throws an error.
         //
         // So give webix some time to internally complete it's process
         // before we do .clearAll();
         setTimeout(() => {
            dcTasks.clearAll();

            const DC = this.CurrentDatacollection;
            const gantt_data = {
               data: DC
                  ? (DC.getData() || []).map((d, index) =>
                     this.convertFormat(d, index)
                  )
                  : [],
            };

            // check required fields before parse
            if (this.StartDateField && (this.EndDateField || this.DurationField)) {
               dcTasks.parse(gantt_data);
            }

            // Keep original start and end dates for calculate scale to display
            const currScale = dataService.getScales();

            this.originalStartDate = currScale.start;
            this.originalEndDate = currScale.end;

            this.sort();
         }, 10);
      }

      get getConstantScales() {
         const DAY_SCALE = { unit: "day", format: "%d" },
            WEEK_SCALE = {
               unit: "week",
               format: (start) => {
                  const parser = webix.Date.dateToStr("%d %M");
                  const wstart = webix.Date.weekStart(start);
                  const wend = webix.Date.add(
                     webix.Date.add(wstart, 1, "week", true),
                     -1,
                     "day",
                     true
                  );

                  return parser(wstart) + " - " + parser(wend);
               },
            },
            MONTH_SCALE = { unit: "month", format: "%F" },
            YEAR_SCALE = { unit: "year", format: "%Y" };

         return {
            DAY_SCALE,
            WEEK_SCALE,
            MONTH_SCALE,
            YEAR_SCALE,
         };
      }

      setScale(scale) {
         const ganttElem = $$(this.ids.gantt);
         if (!ganttElem) return;

         const ganttData = ganttElem.getService("local");
         if (!ganttData) return;

         const newScales = [];
         const { YEAR_SCALE, MONTH_SCALE, WEEK_SCALE, DAY_SCALE } =
            this.getConstantScales;

         switch (scale) {
            case "day":
               newScales.push(YEAR_SCALE, MONTH_SCALE, DAY_SCALE);
               break;

            case "week":
               newScales.push(YEAR_SCALE, MONTH_SCALE, WEEK_SCALE);
               break;

            case "month":
               newScales.push(YEAR_SCALE, MONTH_SCALE);
               break;

            case "year":
               newScales.push(YEAR_SCALE);
               break;
         }

         const abWebix = this.AB.Webix;
         const currScale = ganttElem.getService("local").getScales(),
            start = abWebix.Date.add(this.originalStartDate, -1, scale, true),
            end = abWebix.Date.add(this.originalEndDate, 1, scale, true);

         ganttData.setScales(
            start,
            end,
            currScale.precise,
            currScale.cellWidth,
            currScale.cellHeight,
            newScales
         );
         ganttElem.$app.refresh();
         ganttElem.getState().$batch({ top: 0, left: 0 });
      }

      /**
       * @function show()
       * Show this component.
       */
      onShow() {
         super.onShow();
         this.datacollectionLoad(this.datacollection);

         $$(this.ids.component)?.show();
      }

      sort() {
         // TODO: sorting;
         return;
         // const gantt = $$(ids.gantt).getGantt();
         // if (!gantt) return;

         // // default sort
         // const MAX_date = new Date(8640000000000000);
         // gantt.sort(function(a, b) {
         //    const aStartDate = a["start_date"],
         //       aEndDate = a["end_date"],
         //       aDuration = a["duration"] || 1,
         //       bStartDate = b["start_date"],
         //       bEndDate = b["end_date"],
         //       bDuration = b["duration"] || 1;

         //    // if no start date, then be a last item
         //    if (
         //       a[this.StartDateField.columnName] == null ||
         //       b[this.StartDateField.columnName] == null
         //    ) {
         //       return (
         //          (a[this.StartDateField.columnName] || MAX_date) -
         //          (b[this.StartDateField.columnName] || MAX_date)
         //       );
         //    } else if (aStartDate != bStartDate) {
         //       return aStartDate - bStartDate;
         //    } else if (aEndDate != bEndDate) {
         //       return aEndDate - bEndDate;
         //    } else if (aDuration != bDuration) {
         //       return bDuration - aDuration;
         //    }
         // }, false);
      }

      async taskAdd(taskData) {
         const patch = this.convertValues(taskData);
         const ab = this.AB;

         try {
            // this method is being used in MyBackend addTask() method
            // On Webix documents, the method addTask() have to return the added object so we have to pass the data we add through this method.
            return await this.CurrentObject?.model().create(patch);
         } catch (e) {
            ab.Webix.alert({
               title: this.label("Error Saving Item"),
               ok: this.label("Okay"),
               text: this.label("Unable to save this item."),
            });
            ab.notify.developer(e, {
               context: "ABViewGantt:taskAdd(): Error Saving Item",
               patch,
            });

            throw e;
         }
      }

      async taskRemove(rowId) {
         const ab = this.AB;

         try {
            // this method is being used in MyBackend removeTask() method
            // On Webix documents, the method removeTask() return {} (an empty object) so we return {} in removeTask() instead.
            await this.CurrentObject.model().delete(rowId);

            return {};
         } catch (e) {
            ab.Webix.alert({
               title: this.label("Error Removing Item"),
               ok: this.label("Okay"),
               text: this.label("Unable to remove this item."),
            });
            ab.notify.developer(e, {
               context: "ABViewGantt:taskRemove(): Error Removing Item",
               rowId,
            });

            throw e;
         }
      }

      async taskUpdate(rowId, updatedTask) {
         const patch = this.convertValues(updatedTask);
         const ab = this.AB;

         try {
            // this method is being used in MyBackend updateTask() method
            // On Webix documents, the method updateTask() return {} (an empty object) so we return {} in updateTask() instead.
            await this.CurrentObject.model().update(rowId, patch);

            return {};
         } catch (e) {
            ab.Webix.alert({
               title: this.label("Error Updating Item"),
               ok: this.label("Okay"),
               text: this.label("Unable to update this item."),
            });
            ab.notify.developer(e, {
               context: "ABViewGantt:taskUpdate(): Error Updating Item",
               patch,
            });

            throw e;
         }
      }


   };

}


/***/ },

/***/ 58661
/*!**************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_image/FNAbviewimage.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

/***/ 35653
/*!****************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_kanban/FNABViewKanban.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNABViewKanban)
/* harmony export */ });
/* harmony import */ var _FNABViewKanbanComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNABViewKanbanComponent.js */ 90826);
/* harmony import */ var _FNABViewKanbanForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FNABViewKanbanForm.js */ 27731);
/* harmony import */ var _FNABViewKanbanFormSidePanel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FNABViewKanbanFormSidePanel.js */ 83804);




// FNABViewKanban Web
// A web side import for an ABView.
//
function FNABViewKanban({
   AB,
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewPropertyLinkPage,
   ABViewPlugin,
}) {
   const ABViewKanbanDetachedFormSave = (0,_FNABViewKanbanForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      AB,
      ABViewPlugin,
      ABViewComponentPlugin,
   });
   const KanbanFormSidePanel = (0,_FNABViewKanbanFormSidePanel_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
      ABViewComponentPlugin,
      ABViewKanbanDetachedFormSave,
   });
   const ABViewKanbanComponent = (0,_FNABViewKanbanComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      AB,
      ABViewComponentPlugin,
      FNABViewKanbanFormSidePanel: KanbanFormSidePanel,
   });

   const ABViewKanbanPropertyComponentDefaults = {
      dataviewID: null, // uuid ABDataCollection; DC resolves ABObject
      editFields: [], // ABField.id[] fields shown in editor
      verticalGroupingField: "", // ABField.id vertical lanes
      horizontalGroupingField: "", // ABField.id optional horizontal grouping
      ownerField: "", // ABFieldUser.id card owner
      template: "", // json ABViewText card body; placeholders {field.id}
   };

   const ABViewDefaults = {
      key: "kanban", // {string} unique view key
      icon: "columns", // {string} font-awesome (no fa- prefix)
      labelKey: "Kanban", // {string} multilingual label key → L(labelKey)
   };

   class ABViewKanbanCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
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

      fromValues(values) {
         super.fromValues(values);

         // set a default .template value
         if (!this.settings.template) {
            this.settings.template = { id: `${this.id}_template`, key: "text" };
            this.settings.template.text = this.settings.textTemplate;
         }

         this.TextTemplate = AB.viewNewDetatched(this.settings.template);
      }

      toObj() {
         var obj = super.toObj();
         obj.settings.template = this.TextTemplate.toObj();
         // NOTE: this corrects the initial save where this.id == undefined
         // all the rest will set the .id correctly.
         obj.settings.template.id = `${this.id}_template`;
         return obj;
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewKanbanPropertyComponentDefaults;
      }
   }

   return class ABViewKanban extends ABViewKanbanCore {
      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return this.common().key;
      }
      get linkPageHelper() {
         if (this.__linkPageHelper == null)
            this.__linkPageHelper = new ABViewPropertyLinkPage();

         return this.__linkPageHelper;
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABViewKanbanComponent(this, parentId);
      }

      //
      //	Editor Related
      //

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

/***/ 90826
/*!*************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_kanban/FNABViewKanbanComponent.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNABViewKanbanComponent)
/* harmony export */ });
function FNABViewKanbanComponent({
   AB,
   ABViewComponentPlugin,
   FNABViewKanbanFormSidePanel,
}) {
   return class ABViewKanbanComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewKanban_${baseView.id}`,
            Object.assign(
               {
                  kanbanView: "",

                  kanban: "",
                  resizer: "",
                  formSidePanel: "",
               },
               ids
            )
         );

         this.FormSide = new FNABViewKanbanFormSidePanel(
            this,
            this.ids.formSidePanel,
            this.settings.editFields
         );

         this.CurrentVerticalField = null;
         this.CurrentHorizontalField = null;
         this.CurrentOwnerField = null;

         this.TextTemplate = baseView.TextTemplate;

         this._updatingOwnerRowId = null;
         this._ABFieldConnect = null;
         this._ABFieldUser = null;
         this._ABFieldList = null;
      }

      get ABFieldConnect() {
         return (this._ABFieldConnect =
            this._ABFieldConnect ||
            AB.Class.ABFieldManager.fieldByKey("connectObject"));
      }

      get ABFieldUser() {
         return (this._ABFieldUser =
            this._ABFieldUser || AB.Class.ABFieldManager.fieldByKey("user"));
      }

      get ABFieldList() {
         return (this._ABFieldList =
            this._ABFieldList || AB.Class.ABFieldManager.fieldByKey("list"));
      }

      ui() {
         const ids = this.ids;
         const baseView = this.view;
         const self = this;
         this.linkPage = baseView.linkPageHelper.component();

         const _ui = super.ui([
            {
               id: ids.kanbanView,
               cols: [
                  {
                     id: ids.kanban,
                     view: "kanban",
                     cols: [],
                     userList: {
                        view: "menu",
                        // yCount: 8,
                        // scroll: false,
                        template: '<i class="fa fa-user"></i> #value#',
                        width: 150,
                        on: {
                           onSelectChange: function () {
                              // get this row id from onAvatarClick event
                              if (!self._updatingOwnerRowId) return;

                              const userId = this.getSelectedId(false);
                              if (!userId) return;

                              self.updateOwner(self._updatingOwnerRowId, userId);
                           },
                        },
                     },
                     editor: false, // we use side bar
                     users: [],
                     tags: [],
                     data: [],
                     on: {
                        onListAfterSelect: (itemId, list) => {
                           this.CurrentDatacollection?.setCursor(itemId);
                           this.emit("select", itemId);

                           // link pages events
                           const editPage = this.settings.editPage;
                           if (editPage)
                              this.linkPage.changePage(editPage, itemId);

                           const detailsPage = this.settings.detailsPage;
                           if (detailsPage)
                              this.linkPage.changePage(detailsPage, itemId);
                        },
                        onAfterStatusChange: (rowId, status /*, list */) => {
                           this.updateStatus(rowId, status);
                        },
                        onAvatarClick: (rowId /*, ev, node, list */) => {
                           // keep this row id for update owner data in .userList
                           this._updatingOwnerRowId = rowId;
                        },
                     },
                  },
                  {
                     id: ids.resizer,
                     view: "resizer",
                     css: "bg_gray",
                     width: 11,
                     hidden: true,
                  },
                  this.FormSide.ui(),
               ],
            },
         ]);

         delete _ui.type;

         return _ui;
      }

      async init(AB) {
         await super.init(AB);

         const abWebix = AB.Webix;
         const baseView = this.view;

         if (this.$kb) abWebix.extend(this.$kb, abWebix.ProgressBar);

         this.FormSide.init(AB);
         this.FormSide.on("add", (newVals) => {
            this.saveData(newVals);
         });
         this.FormSide.on("update", (updateVals) => {
            this.saveData(updateVals);
         });

         let dc = baseView.datacollection;
         if (dc) this.datacollectionLoad(dc);

         this.linkPage.init({
            view: baseView,
            datacollection: dc,
         });

         this.show();
      }

      get $kb() {
         return (this._kb = this._kb || $$(this.ids.kanban));
      }

      kanbanListTemplate() {
         return {
            icons: [
               // { icon: "mdi mdi-comment", show: function (obj) { return !!obj.comments }, template: "#comments.length#" },
               {
                  icon: "fa fa-trash-o",
                  click: (rowId /*, e */) => {
                     this.removeCard(rowId);
                  },
               },
            ],
            // avatar template
            templateAvatar: (obj) => {
               if (
                  this.CurrentOwnerField &&
                  obj[this.CurrentOwnerField.columnName]
               )
                  return this.CurrentOwnerField.format(obj);
               else return "<span class='webix_icon fa fa-user'></span>";
            },
            // template for item body
            // show item image and text
            templateBody: (data) => {
               // if (!this.settings.template)
               if (!this.TextTemplate.text)
                  return this.CurrentObject?.displayData(data);

               // return our default text template
               return this.TextTemplate.displayText(data);
            },
         };
      }

      /**
       * @function hide()
       *
       * hide this component.
       */
      hide() {
         $$(this.ids.kanbanView)?.hide();
      }

      /**
       * @function show()
       * Show this component.
       */
      async show() {
         const ids = this.ids;

         $$(ids.kanbanView)?.show();

         this.FormSide.hide();

         $$(ids.resizer)?.hide();

         var CurrentObject = this.CurrentObject;
         if (!CurrentObject) {
            CurrentObject = this.datacollection?.datasource;
         }
         if (!CurrentObject) return;

         // Get vertical grouping field and populate to kanban list
         // NOTE: this field should be the select list type
         const CurrentVerticalField = CurrentObject.fieldByID(
            this.settings.verticalGroupingField
         );
         if (!CurrentVerticalField) return;

         this.CurrentVerticalField = CurrentVerticalField;

         let horizontalOptions = [];

         const CurrentHorizontalField = CurrentObject.fieldByID(
            this.settings.horizontalGroupingField
         );

         this.CurrentHorizontalField = CurrentHorizontalField;

         if (
            CurrentHorizontalField &&
            CurrentHorizontalField instanceof this.ABFieldConnect
         )
            // Pull horizontal options
            horizontalOptions = await CurrentHorizontalField.getOptions();

         // Option format -  { id: "1543563751920", text: "Normal", hex: "#4CAF50" }
         const verticalOptions = (CurrentVerticalField.settings.options || []).map(
            (opt) => {
               // Vertical & Horizontal fields
               if (CurrentVerticalField && CurrentHorizontalField) {
                  let rows = [],
                     // [{
                     //    id: '',
                     //    text: ''
                     // }]
                     horizontalVals = [];

                  // pull options of the Horizontal field
                  if (CurrentHorizontalField instanceof this.ABFieldList) {
                     // make a copy of the settings.
                     horizontalVals = (
                        CurrentHorizontalField.settings.options || []
                     ).map((o) => o);
                  } else if (CurrentHorizontalField instanceof this.ABFieldUser) {
                     horizontalVals = CurrentHorizontalField.getUsers().map(
                        (u) => {
                           return {
                              id: u.id,
                              text: u.text || u.value,
                           };
                        }
                     );
                  } else if (CurrentHorizontalField instanceof this.ABFieldConnect)
                     horizontalVals = horizontalOptions.map(({ id, text }) => ({
                        id,
                        text,
                     }));

                  horizontalVals.push({
                     id: null,
                     text: this.label("Other"),
                  });

                  horizontalVals.forEach((val) => {
                     const statusOps = {};

                     statusOps[CurrentVerticalField.columnName] = opt.id;
                     statusOps[CurrentHorizontalField.columnName] = val.id;

                     // Header
                     rows.push({
                        template: val.text,
                        height: 20,
                        css: "progress_header",
                     });

                     // Kanban list
                     rows.push({
                        view: "kanbanlist",
                        status: statusOps,
                        type: this.kanbanListTemplate(),
                     });
                  });

                  return {
                     header: opt.text,
                     body: {
                        margin: 0,
                        rows: rows,
                     },
                  };
               }
               // Vertical field only
               else if (CurrentVerticalField) {
                  const statusOps = {};

                  statusOps[CurrentVerticalField.columnName] = opt.id;

                  return {
                     header: opt.text,
                     body: {
                        view: "kanbanlist",
                        status: statusOps,
                        type: this.kanbanListTemplate(),
                     },
                  };
               }
            }
         );

         const ab = AB;
         const abWebix = ab.Webix;

         // Rebuild kanban that contains options
         // NOTE: webix kanban does not support dynamic vertical list
         abWebix.ui(verticalOptions, $$(ids.kanban));
         $$(ids.kanban).reconstruct();

         // Owner field
         const CurrentOwnerField = CurrentObject.fieldByID(
            this.settings.ownerField
         );

         this.CurrentOwnerField = CurrentOwnerField;

         if (CurrentOwnerField) {
            const $menuUser = $$(ids.kanban).getUserList();

            $menuUser.clearAll();

            if (CurrentOwnerField instanceof this.ABFieldUser) {
               const users = ab.Account.userList().map((u) => {
                  return {
                     id: u.username,
                     value: u.username,
                  };
               });

               $menuUser.parse(users);
            } else if (CurrentOwnerField instanceof this.ABFieldConnect) {
               const options = await CurrentOwnerField.getOptions();

               try {
                  $menuUser.parse(
                     options.map((opt) => {
                        return {
                           id: opt.id,
                           value: opt.text,
                        };
                     })
                  );
               } catch (e) {
                  // TODO: remove this.  Trying to catch a random webix error:
                  // Cannot read properties of null (reading 'driver')
                  console.error(e);
                  console.warn(options);
               }
            }
         }
      }

      busy() {
         this.$kb?.showProgress?.({ type: "icon" });
      }

      ready() {
         this.$kb?.hideProgress?.();
      }

      objectLoad(object) {
         super.objectLoad(object);

         this.TextTemplate.objectLoad(object);
         this.FormSide.objectLoad(object);
      }

      /**
       * @method datacollectionLoad
       *
       * @param datacollection {ABDatacollection}
       */
      datacollectionLoad(datacollection) {
         super.datacollectionLoad(datacollection);

         const DC = this.CurrentDatacollection || datacollection;

         if (DC) {
            DC.bind(this.$kb);

            const obj = DC.datasource;

            if (obj) this.objectLoad(obj);

            return;
         }

         this.$kb.unbind();
      }

      async updateStatus(rowId, status) {
         if (!this.CurrentVerticalField) return;

         // Show loading cursor
         this.busy();

         let patch = {};

         // update multi-values
         if (status instanceof Object) patch = status;
         // update single value
         else patch[this.CurrentVerticalField.columnName] = status;

         // update empty value
         let needRefresh = false;

         for (const key in patch)
            if (!patch[key]) {
               patch[key] = "";

               // WORKAROUND: if update data is empty, then it will need to refresh
               // the kanban after update
               needRefresh = true;
            }

         try {
            await this.CurrentObject?.model().update(rowId, patch);

            this.ready();

            if (needRefresh) this.show();

            // update form data
            if (this.FormSide.isVisible()) {
               const data = $$(this.ids.kanban).getItem(rowId);

               this.FormSide.refresh(data);
            }
         } catch (err) {
            AB.notify.developer(err, {
               context: "ABViewKanban:updateStatus(): Error saving item:",
               rowId,
               patch,
            });
         }
      }

      async updateOwner(rowId, val) {
         if (!this.CurrentOwnerField) return;

         // Show loading cursor
         this.busy();

         const patch = {};

         patch[this.CurrentOwnerField.columnName] = val;

         try {
            const updatedRow = await this.CurrentObject?.model().update(
               rowId,
               patch
            );

            // update card
            this.$kb?.updateItem(rowId, updatedRow);

            // update form data
            if (this.FormSide.isVisible()) {
               const data = this.$kb.getItem(rowId);

               this.FormSide.refresh(data);
            }

            this.ready();
         } catch (err) {
            AB.notify.developer(err, {
               context: "ABViewKanban:updateOwner(): Error saving item:",
               rowId,
               val,
            });

            this.ready();
         }
      }

      saveData(data) {
         // update
         if (data.id && this.$kb.exists(data.id))
            this.$kb.updateItem(data.id, data);
         // insert
         else this.$kb.add(data);
      }

      unselect() {
         if (this.$kb)
            this.$kb.eachList((list /*, status*/) => {
               list?.unselect?.();
            });
      }

      addCard() {
         this.unselect();

         // show the side form
         this.FormSide.show();
         $$(this.ids.resizer).show();
      }

      async removeCard(rowId) {
         const ab = AB;
         const abWebix = ab.Webix;

         abWebix.confirm({
            title: this.label("Remove card"),
            text: this.label("Do you want to delete this card?"),
            callback: async (result) => {
               if (!result) return;

               this.busy();

               try {
                  const response = await this.CurrentObject?.model().delete(rowId);

                  if (response.numRows > 0) {
                     this.$kb.remove(rowId);
                  } else {
                     abWebix.alert({
                        text: this.label(
                           "No rows were effected. This does not seem right."
                        ),
                     });
                  }
               } catch (err) {
                  ab.notify.developer(err, {
                     message: "ABViewKanban:removeCard(): Error deleting item:",
                     rowId,
                  });
               }

               this.ready();
            },
         });
      }

      /**
       * @method setFields()
       * Save the current view options.
       * @param options - {
       *       verticalGrouping:    {ABField} - required
       *       horizontalGrouping:  {ABField} - optional
       *       ownerField:          {ABField} - optional
       * }
       */
      setFields(options) {
         this.CurrentVerticalField = options.verticalGrouping;
         this.CurrentHorizontalField = options.horizontalGrouping;
         this.CurrentOwnerField = options.ownerField;
      }


   };

}


/***/ },

/***/ 27731
/*!********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_kanban/FNABViewKanbanForm.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createABViewKanbanDetachedFormSave)
/* harmony export */ });
/**
 * Kanban sidebar detached form: save button only.
 * No cross-folder imports — bases come from pluginAPI (see ABClassManager.getPluginAPI).
 */

function createABViewKanbanDetachedFormSave({
   AB,
   ABViewPlugin,
   ABViewComponentPlugin,
}) {

   const ABViewFormButtonPropertyComponentDefaults = {
      includeSave: true,
      saveLabel: "",
      includeCancel: false,
      cancelLabel: "",
      includeReset: false,
      resetLabel: "",
      includeDelete: false,
      deleteLabel: "",
      afterCancel: null,
      alignment: "right",
      isDefault: false, // mark default button of form widget
   };


   class ABViewFormButtonCore extends ABViewPlugin {
      static common() {
         return {
            key: "button",
            // {string} unique key for this view

            icon: "square",
            // {string} fa-[icon] reference for this view

            labelKey: "ab.components.button",
            // {string} the multilingual label key for the class label
         };
      }
      constructor(values, application, parent, defaultValues) {
         const ABViewFormButtonDefaults = {
            key: "button",
            // {string} unique key for this view

            icon: "square",
            // {string} fa-[icon] reference for this view

            labelKey: "ab.components.button",
            // {string} the multilingual label key for the class label
         };
         super(
            values,
            application,
            parent,
            defaultValues || ABViewFormButtonDefaults
         )
      }


      static defaultValues() {
         return ABViewFormButtonPropertyComponentDefaults;
      }

      ///
      /// Instance Methods
      ///

      toObj() {
         // labels are multilingual values:
         let labels = [];

         if (this.settings.saveLabel) labels.push("saveLabel");

         if (this.settings.cancelLabel) labels.push("cancelLabel");

         if (this.settings.resetLabel) labels.push("resetLabel");

         if (this.settings.deleteLabel) labels.push("deleteLabel");

         this.unTranslate(this.settings, this.settings, labels);

         let result = super.toObj();

         return result;
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

      fromValues(values) {
         super.fromValues(values);

         // labels are multilingual values:
         let labels = [];

         if (this.settings.saveLabel) labels.push("saveLabel");

         if (this.settings.cancelLabel) labels.push("cancelLabel");

         if (this.settings.resetLabel) labels.push("resetLabel");

         if (this.settings.deleteLabel) labels.push("deleteLabel");

         this.unTranslate(this.settings, this.settings, labels);

         // this.settings.includeSave = JSON.parse(
         //    (this.settings?.includeSave ?? true) &&
         //    ABViewFormButtonPropertyComponentDefaults.includeSave
         // );
         // this.settings.includeCancel = JSON.parse(
         //    this.settings.includeCancel ||
         //    ABViewFormButtonPropertyComponentDefaults.includeCancel
         // );
         // this.settings.includeReset = JSON.parse(
         //    this.settings.includeReset ||
         //    ABViewFormButtonPropertyComponentDefaults.includeReset
         // );
         // this.settings.includeDelete = JSON.parse(
         //    this.settings.includeDelete ||
         //    ABViewFormButtonPropertyComponentDefaults.includeDelete
         // );

         // this.settings.isDefault = JSON.parse(
         //    this.settings.isDefault ||
         //    ABViewFormButtonPropertyComponentDefaults.isDefault
         // );
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }
   }

   class formComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewFormItem_${baseView.id}`,
            Object.assign({ formItem: "" }, ids)
         );
      }

      ui(uiFormItemComponent = {}) {
         // setup 'label' of the element
         const baseView = this.view;
         const form = baseView.parentFormComponent(),
            field = baseView.field?.() || null,
            label = "";
         const settings = form?.settings || {};
         const _uiFormItem = {
            id: this.ids.formItem,
            labelPosition: settings.labelPosition,
            labelWidth: settings.labelWidth,
            label,
         };

         if (field) {
            _uiFormItem.name = field.columnName;

            // default value
            const data = {};

            field.defaultValue(data);

            if (data[field.columnName]) _uiFormItem.value = data[field.columnName];

            if (settings.showLabel) _uiFormItem.label = field.label;

            if (field.settings.required || baseView.settings?.required)
               _uiFormItem.required = 1;

            if (baseView.settings?.disable === 1) _uiFormItem.disabled = true;

            // this may be needed if we want to format data at this point
            // if (field.format) data = field.format(data);

            _uiFormItem.validate = (val, data, colName) => {
               const validator = AB.Validation.validator();

               field.isValidData(data, validator);

               return validator.pass();
            };
         }

         const _ui = super.ui([
            Object.assign({}, _uiFormItem, uiFormItemComponent),
         ]);

         delete _ui.type;

         return _ui;
      }
   };


   class ABViewKanbanDetachedFormSaveComponent extends formComponent {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewKanbanDetachedFormSave_${baseView.id}`,
            ids
         );
      }

      ui() {
         const self = this;
         const baseView = this.view;
         const form = baseView.parentFormComponent();
         const settings = baseView.settings ?? {};
         const alignment =
            settings.alignment ||
            baseView.constructor.defaultValues().alignment;

         const _ui = { cols: [] };

         if (alignment === "center" || alignment === "right") {
            _ui.cols.push({});
         }

         if (settings.includeSave) {
            _ui.cols.push({
               view: "button",
               type: "form",
               css: "webix_primary",
               autowidth: true,
               value: settings.saveLabel || this.label("Save"),
               click: function () {
                  self.onSave(this);
               },
               on: {
                  onAfterRender: function () {
                     this.getInputNode().setAttribute(
                        "data-cy",
                        `button save ${form.id}`
                     );
                  },
               },
            });
         }

         if (alignment === "center" || alignment === "left") {
            _ui.cols.push({});
         }

         return super.ui(_ui);
      }

      onSave(saveButton) {
         if (!saveButton) {
            console.error("Require the button element");
            return;
         }
         const form = this.view.parentFormComponent();
         const formView = saveButton.getFormView();

         saveButton.disable?.();

         form
            .saveData(formView)
            .then(() => {
               saveButton.enable?.();
               form.focusOnFirst();
            })
            .catch((err) => {
               console.error(err);
               try {
                  saveButton.enable?.();
               } catch (e) {
                  AB.notify.developer(e, {
                     context:
                        "ABViewKanbanDetachedFormSave.onSave > saveButton.enable()",
                     buttonID: this?.view?.id,
                     formID: this?.view?.parent?.id,
                  });
               }
            });
      }
   }

   return class ABViewKanbanDetachedFormSave extends ABViewFormButtonCore {
      component() {
         return new ABViewKanbanDetachedFormSaveComponent(this);
      }
   };
}


/***/ },

/***/ 83804
/*!*****************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_kanban/FNABViewKanbanFormSidePanel.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNABViewKanbanFormSidePanel)
/* harmony export */ });
/*
 * FNABViewKanbanFormSidePanel
 *
 * Form area for editing Kanban cards (included plugin; ESM).
 */

function FNABViewKanbanFormSidePanel({
   ABViewComponentPlugin,
   ABViewKanbanDetachedFormSave,
}) {
   return class FNABViewKanbanFormSidePanel extends ABViewComponentPlugin {
      constructor(comKanBan, idBase, editFields) {
         super(comKanBan, idBase || `${comKanBan.view?.id}_formSidePanel`, {
            form: "",
         });

         this.editFields = editFields;

         this._mockApp = this.AB.applicationNew({});
      }

      ui() {
         const ids = this.ids;
         const L = (...params) => this.AB.Multilingual.label(...params);

         return {
            id: ids.component,
            width: 300,
            hidden: true,
            rows: [
               {
                  view: "toolbar",
                  css: "webix_dark",
                  cols: [
                     {
                        view: "label",
                        label: L("Edit Record"),
                     },
                     {
                        view: "icon",
                        icon: "wxi-close",
                        align: "right",
                        click: () => {
                           this.hide();
                        },
                     },
                  ],
               },
               {
                  view: "scrollview",
                  body: {
                     rows: [
                        {
                           id: ids.form,
                           view: "form",
                           type: "clean",
                           borderless: true,
                           rows: [],
                        },
                     ],
                  },
               },
            ],
         };
      }

      hide() {
         $$(this.ids.component)?.hide();

         this.emit("close");
      }

      show(data) {
         $$(this.ids.component)?.show();

         this.refreshForm(data);
      }

      isVisible() {
         return $$(this.ids.component)?.isVisible() ?? false;
      }

      refreshForm(data) {
         const ids = this.ids;
         const $formView = $$(ids.form);
         const CurrentObject = this.CurrentObject;

         if (!CurrentObject || !$formView) return;

         data = data || {};

         const formAttrs = {
            id: `${this.ids.component}_sideform`,
            key: "form",
            settings: {
               columns: 1,
               labelPosition: "top",
               showLabel: 1,
               clearOnLoad: 0,
               clearOnSave: 0,
               labelWidth: 120,
               height: 0,
            },
         };

         const form = this.AB.viewNewDetatched(formAttrs);

         form.objectLoad(CurrentObject);

         CurrentObject.fields().forEach((f, index) => {
            if (!this.editFields || this.editFields.indexOf(f.id) > -1) {
               form.addFieldToForm(f, index);
            }
         });

         form._views.push(
            new ABViewKanbanDetachedFormSave(
               {
                  settings: {
                     includeSave: true,
                     includeCancel: false,
                     includeReset: false,
                  },
                  position: {
                     y: CurrentObject.fields().length,
                  },
               },
               this._mockApp,
               form
            )
         );

         form._views.forEach(
            (v, index) => (v.id = `${form.id}_${v.key}_${index}`)
         );

         const formCom = form.component(this.AB._App);

         webix.ui(formCom.ui().rows.concat({}), $formView);
         webix.extend($formView, webix.ProgressBar);

         formCom.init(
            this.AB,
            2,
            {
               onBeforeSaveData: () => {
                  const formVals = form.getFormValues($formView, CurrentObject);

                  if (!form.validateData($formView, CurrentObject, formVals))
                     return false;

                  $formView?.showProgress({ type: "icon" });

                  if (formVals.id) {
                     CurrentObject.model()
                        .update(formVals.id, formVals)
                        .then((updateVals) => {
                           this.emit("update", updateVals);

                           $formView?.hideProgress({ type: "icon" });
                        })
                        .catch((err) => {
                           this.AB.notify.developer(err, {
                              context:
                                 "ABViewKanbanFormSidePanel:onBeforeSaveData():update(): Error updating value",
                              formVals,
                           });
                           $formView?.hideProgress({ type: "icon" });
                        });
                  } else {
                     CurrentObject.model()
                        .create(formVals)
                        .then((newVals) => {
                           this.emit("add", newVals);

                           $formView?.hideProgress({ type: "icon" });
                        })
                        .catch((err) => {
                           this.AB.notify.developer(err, {
                              context:
                                 "ABViewKanbanFormSidePanel:onBeforeSaveData():.create(): Error creating value",
                              formVals,
                           });

                           $formView?.hideProgress({ type: "icon" });
                        });
                  }

                  return false;
               },
            },
            2
         );

         $formView.clear();
         $formView.parse(data);

         formCom.onShow(data);
      }
   };
}


/***/ },

/***/ 64326
/*!***********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_label/FNAbviewLabelComponent.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewpdfimporter)
/* harmony export */ });
/* harmony import */ var _FNAbviewpdfimporterComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewpdfimporterComponent.js */ 15110);


// FNAbviewpdfimporter Web
// A web side import for an ABView.
//
function FNAbviewpdfimporter({
   /* AB, */
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
   ABViewRuleListFormSubmitRules,
}) {
   const ABAbviewpdfimporterComponent = (0,_FNAbviewpdfimporterComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const ABSubmitRule = ABViewRuleListFormSubmitRules;

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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewpdfimporterComponent)
/* harmony export */ });
function FNAbviewpdfimporterComponent({
   /* AB, */
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
         if ($dataview) webix.extend($dataview, webix.ProgressBar);

         if (!this._fullImagePopup) {
            const fullImagePopup = this.uiPopup();
            this._fullImagePopup = webix.ui(fullImagePopup);
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
            await Promise.all(/*! import() */[__webpack_require__.e("pdfjs-vendors-node_modules_pdfjs-dist_webpack_mjs"), __webpack_require__.e("pdfjs-AppBuilder_platform_plugins_included_view_pdfImporter_pdfjs_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pdfjs */ 82686))
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
            const $uploader = webix.ui({
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
         if ($carousel) webix.ui(carousel_list, $carousel);

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
            webix.ui(
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

/***/ 62513
/*!**************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_pivot/FNABViewPivot.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNABViewPivot)
/* harmony export */ });
/* harmony import */ var _FNABViewPivotComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNABViewPivotComponent.js */ 57670);


// FNAbviewpivot Web
// A web side import for an ABView.
//
function FNABViewPivot({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
}) {
   const ABAbviewpivotComponent = (0,_FNABViewPivotComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      AB,
      ABViewComponentPlugin,
   });

   const ABViewPivotPropertyComponentDefaults = {
      dataviewID: null,
      removeMissed: 0,
      totalColumn: 0,
      separateLabel: 0,
      min: 0,
      max: 0,
      height: 0,
   };

   const ABViewDefaults = {
      key: "pivot", // {string} unique key for this view
      icon: "cube", // {string} fa-[icon] reference for this view
      labelKey: "Pivot", // {string} the multilingual label key for the class label
   };

   class ABViewPivotCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewPivotPropertyComponentDefaults;
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

         // Convert to boolean
         this.settings.removeMissed = JSON.parse(
            this.settings.removeMissed ||
            ABViewPivotPropertyComponentDefaults.removeMissed
         );
         this.settings.totalColumn = JSON.parse(
            this.settings.totalColumn ||
            ABViewPivotPropertyComponentDefaults.totalColumn
         );
         this.settings.separateLabel = JSON.parse(
            this.settings.separateLabel ||
            ABViewPivotPropertyComponentDefaults.separateLabel
         );
         this.settings.min = JSON.parse(
            this.settings.min || ABViewPivotPropertyComponentDefaults.min
         );
         this.settings.max = JSON.parse(
            this.settings.max || ABViewPivotPropertyComponentDefaults.max
         );

         if (
            this.settings.structure &&
            typeof this.settings.structure == "string"
         )
            this.settings.structure = JSON.parse(this.settings.structure);

         // "0" -> 0
         this.settings.height = parseInt(
            this.settings.height || ABViewPivotPropertyComponentDefaults.height
         );
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

         obj.views = [];
         obj.settings = obj.settings || {};

         if (this.settings.structure)
            obj.settings.structure = JSON.stringify(this.settings.structure);

         return obj;
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }
   }

   return class ABViewPivot extends ABViewPivotCore {
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
         return new ABAbviewpivotComponent(this, parentId);
      }

      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues);
      }

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

/***/ 57670
/*!***********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_pivot/FNABViewPivotComponent.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewpivotComponent)
/* harmony export */ });
function FNAbviewpivotComponent({
   AB,
   ABViewComponentPlugin,
}) {
   return class ABAbviewpivotComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewPivot_${baseView.id}`,
            Object.assign({ pivot: "" }, ids)
         );

         // refresh the widget by id.
         this._handler_refreshPivot = () => {
            const ids = this.ids;
            $$(ids.pivot)?.refresh?.();
         };
      }

      async init(AB) {
         await super.init(AB);

         const dc = this.datacollection;
         if (!dc) return;

         dc.removeListener("initializedData", this._handler_refreshPivot);
         dc.on("initializedData", this._handler_refreshPivot);

         dc.removeListener("loadData", this._handler_refreshPivot);
         dc.on("loadData", this._handler_refreshPivot);
      }

      /**
       * Remove DC listeners
       */
      detatch() {
         const dc = this.datacollection;
         if (!dc) return;

         dc.removeListener("initializedData", this._handler_refreshPivot);
         dc.removeListener("loadData", this._handler_refreshPivot);
      }

      ui() {
         const ids = this.ids;
         const ABFieldCalculate = AB.Class.ABFieldManager.fieldByKey("calculate");
         const ABFieldNumber = AB.Class.ABFieldManager.fieldByKey("number");
         const ABFieldFormula = AB.Class.ABFieldManager.fieldByKey("formula");

         const self = this;
         const settings = this.settings;

         const uiPivot = {
            id: ids.pivot,
            view: "pivot",
            readonly: true,
            removeMissed: settings.removeMissed,
            totalColumn: settings.totalColumn,
            separateLabel: settings.separateLabel,
            min: settings.min,
            max: settings.max,
            height: settings.height,
            fields: this._getFields(),
            format: (value) => {
               const decimalPlaces = settings.decimalPlaces ?? 2;

               return value && value != "0"
                  ? parseFloat(value).toFixed(decimalPlaces || 0)
                  : value;
            },
            override: new Map([
               [
                  pivot.services.Backend,
                  class MyBackend extends pivot.services.Backend {
                     async data() {
                        const dc = self.datacollection;
                        if (!dc) return webix.promise.resolve([]);

                        const object = dc.datasource;
                        if (!object) return webix.promise.resolve([]);

                        await dc.waitReady();

                        const data = dc.getData();
                        const dataMapped = data.map((d) => {
                           const result = {};

                           object.fields().forEach((f) => {
                              if (
                                 f instanceof ABFieldCalculate ||
                                 f instanceof ABFieldFormula ||
                                 f instanceof ABFieldNumber
                              )
                                 result[f.columnName] = d[f.columnName];
                              else result[f.columnName] = f.format(d);
                           });

                           return result;
                        });

                        return webix.promise.resolve(dataMapped);
                     }
                  },
               ],
               [
                  pivot.views.table,
                  class CustomTable extends pivot.views.table {
                     /**
                      * Webix Pivot UpdateTable uses `if (data.totalColumn)`; loadError()
                      * returns totalColumn: [] which is truthy with header: [], causing
                      * data.header[last].id to throw. Strip totalColumn when header empty.
                      */
                     UpdateTable(data) {
                        if (
                           data &&
                           !data.$ready &&
                           data.totalColumn &&
                           !data.header?.length
                        ) {
                           data = { ...data };
                           delete data.totalColumn;
                        }
                        return super.UpdateTable(data);
                     }

                     CellFormat(value) {
                        const decimalPlaces = settings.decimalPlaces ?? 2;
                        if (!value) value = value === 0 ? "0" : "";
                        return value
                           ? parseFloat(value).toFixed(decimalPlaces)
                           : value;
                     }
                  },
               ],
            ]),
         };

         if (settings.structure) uiPivot.structure = settings.structure;

         const _ui = super.ui([uiPivot]);
         delete _ui.type;

         return _ui;
      }

      _getFields() {
         const dc = this.datacollection;
         if (!dc) return [];

         const object = dc.datasource;
         if (!object) return [];

         const fields = object.fields().map((f) => {
            let fieldType = "text";

            switch (f.key) {
               case "calculate":
               case "formula":
               case "number":
                  fieldType = "number";
                  break;
               case "date":
               case "datetime":
                  fieldType = "date";
                  break;
            }

            return {
               id: f.columnName,
               value: f.label,
               type: fieldType,
            };
         });

         return fields;
      }

      async onShow() {
         const ids = this.ids;
         super.onShow();

         const dc = this.datacollection;
         if (!dc) return;

         const object = dc.datasource;
         if (!object) return;

         await dc.waitReady();

         $$(ids.pivot)?.refresh?.();
      }
   };
}


/***/ },

/***/ 95757
/*!**********************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_tab/FNAbviewtab.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
//# sourceMappingURL=AppBuilder_platform_plugins_included_index_js.00e443d33243b95d691d.js.map