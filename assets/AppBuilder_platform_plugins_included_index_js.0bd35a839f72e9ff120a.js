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
/* harmony import */ var _view_form_FNAbviewform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_form/FNAbviewform.js */ 94351);
/* harmony import */ var _view_docxBuilder_FNAbviewdocxbuilder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view_docxBuilder/FNAbviewdocxbuilder.js */ 22789);
/* harmony import */ var _view_grid_FNAbviewgrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view_grid/FNAbviewgrid.js */ 23035);
/* harmony import */ var _view_carousel_FNAbviewcarousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view_carousel/FNAbviewcarousel.js */ 77739);
/* harmony import */ var _view_chart_FNAbviewchart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view_chart/FNAbviewchart.js */ 2137);
/* harmony import */ var _view_comment_FNAbviewcomment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view_comment/FNAbviewcomment.js */ 85253);
/* harmony import */ var _view_csvExporter_FNAbviewcsvexporter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view_csvExporter/FNAbviewcsvexporter.js */ 49029);
/* harmony import */ var _view_csvImporter_FNAbviewcsvimporter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view_csvImporter/FNAbviewcsvimporter.js */ 48261);
/* harmony import */ var _view_data_select_FNAbviewdataselect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view_data-select/FNAbviewdataselect.js */ 78612);
/* harmony import */ var _view_dataview_FNAbviewdataview_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view_dataview/FNAbviewdataview.js */ 84373);
/* harmony import */ var _view_detail_FNAbviewdetail_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view_detail/FNAbviewdetail.js */ 73053);
/* harmony import */ var _view_gantt_FNAbviewgantt_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view_gantt/FNAbviewgantt.js */ 92973);
/* harmony import */ var _view_image_FNAbviewimage_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view_image/FNAbviewimage.js */ 58661);
/* harmony import */ var _view_kanban_FNABViewKanban_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view_kanban/FNABViewKanban.js */ 35653);
/* harmony import */ var _view_label_FNAbviewlabel_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view_label/FNAbviewlabel.js */ 31697);
/* harmony import */ var _view_layout_FNAbviewlayout_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view_layout/FNAbviewlayout.js */ 22031);
/* harmony import */ var _view_list_FNAbviewlist_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view_list/FNAbviewlist.js */ 62467);
/* harmony import */ var _view_pdfImporter_FNAbviewpdfimporter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view_pdfImporter/FNAbviewpdfimporter.js */ 27377);
/* harmony import */ var _view_pivot_FNABViewPivot_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view_pivot/FNABViewPivot.js */ 62513);
/* harmony import */ var _view_tab_FNAbviewtab_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view_tab/FNAbviewtab.js */ 95757);
/* harmony import */ var _view_text_FNAbviewtext_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view_text/FNAbviewtext.js */ 88229);






















const AllPlugins = [
   _view_carousel_FNAbviewcarousel_js__WEBPACK_IMPORTED_MODULE_3__["default"],
   _view_chart_FNAbviewchart_js__WEBPACK_IMPORTED_MODULE_4__["default"],
   _view_comment_FNAbviewcomment_js__WEBPACK_IMPORTED_MODULE_5__["default"],
   _view_csvExporter_FNAbviewcsvexporter_js__WEBPACK_IMPORTED_MODULE_6__["default"],
   _view_csvImporter_FNAbviewcsvimporter_js__WEBPACK_IMPORTED_MODULE_7__["default"],
   _view_data_select_FNAbviewdataselect_js__WEBPACK_IMPORTED_MODULE_8__["default"],
   _view_dataview_FNAbviewdataview_js__WEBPACK_IMPORTED_MODULE_9__["default"],
   _view_detail_FNAbviewdetail_js__WEBPACK_IMPORTED_MODULE_10__["default"],
   _view_gantt_FNAbviewgantt_js__WEBPACK_IMPORTED_MODULE_11__["default"],
   _view_image_FNAbviewimage_js__WEBPACK_IMPORTED_MODULE_12__["default"],
   _view_kanban_FNABViewKanban_js__WEBPACK_IMPORTED_MODULE_13__["default"],
   _view_label_FNAbviewlabel_js__WEBPACK_IMPORTED_MODULE_14__["default"],
   _view_layout_FNAbviewlayout_js__WEBPACK_IMPORTED_MODULE_15__["default"],
   _view_list_FNAbviewlist_js__WEBPACK_IMPORTED_MODULE_16__["default"],
   _view_pdfImporter_FNAbviewpdfimporter_js__WEBPACK_IMPORTED_MODULE_17__["default"],
   _view_pivot_FNABViewPivot_js__WEBPACK_IMPORTED_MODULE_18__["default"],
   _view_tab_FNAbviewtab_js__WEBPACK_IMPORTED_MODULE_19__["default"],
   _view_text_FNAbviewtext_js__WEBPACK_IMPORTED_MODULE_20__["default"],
   _view_form_FNAbviewform_js__WEBPACK_IMPORTED_MODULE_0__["default"],
   _view_grid_FNAbviewgrid_js__WEBPACK_IMPORTED_MODULE_2__["default"],
   _view_docxBuilder_FNAbviewdocxbuilder_js__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ 2137
/*!**************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/FNAbviewchart.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ABchart)
/* harmony export */ });
/* harmony import */ var _chart_FNAbviewchart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart/FNAbviewchart.js */ 69014);
/* harmony import */ var _area_FNAbviewchartarea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area/FNAbviewchartarea.js */ 3050);
/* harmony import */ var _bar_FNAbviewchartbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar/FNAbviewchartbar.js */ 3410);
/* harmony import */ var _line_FNAbviewchartline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line/FNAbviewchartline.js */ 7494);
/* harmony import */ var _pie_FNAbviewchartpie_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pie/FNAbviewchartpie.js */ 69448);






function ABchart(API) {
   return [
      (0,_chart_FNAbviewchart_js__WEBPACK_IMPORTED_MODULE_0__["default"])(API),
      (0,_area_FNAbviewchartarea_js__WEBPACK_IMPORTED_MODULE_1__["default"])(API),
      (0,_bar_FNAbviewchartbar_js__WEBPACK_IMPORTED_MODULE_2__["default"])(API),
      (0,_line_FNAbviewchartline_js__WEBPACK_IMPORTED_MODULE_3__["default"])(API),
      (0,_pie_FNAbviewchartpie_js__WEBPACK_IMPORTED_MODULE_4__["default"])(API),
   ];
}

/***/ },

/***/ 3050
/*!***********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/area/FNAbviewchartarea.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewchartarea)
/* harmony export */ });
/* harmony import */ var _FNAbviewchartareaComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewchartareaComponent.js */ 88787);
/* harmony import */ var _chartBindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chartBindings.js */ 3494);



// FNAbviewchartarea Web
// A web side import for an ABView.
//
function FNAbviewchartarea({
   AB,
   ABViewComponentPlugin,
   ABViewWidgetPlugin,
}) {
   const ABViewChartCore = (0,_chartBindings_js__WEBPACK_IMPORTED_MODULE_1__["default"])({ ABViewWidgetPlugin });
   const ABAbviewchartareaComponent = (0,_FNAbviewchartareaComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      AB,
      ABViewComponentPlugin,
   });

   const ABViewChartAreaPropertyComponentDefaults = {
      areaType: "area",
      isLegend: 1,
      chartHeight: 200,
      labelFontSize: 12,
      stepValue: 20,
      maxValue: 100,
   };

   const ABViewDefaults = {
      key: "area", // {string} unique key for this view
      icon: "area-chart", // {string} fa-[icon] reference for this view
      labelKey: "Area", // {string} the multilingual label key for the class label
   };

   class ABViewChartAreaCore extends ABViewChartCore {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewChartAreaPropertyComponentDefaults;
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

         this.settings.areaType =
            this.settings.areaType ||
            ABViewChartAreaPropertyComponentDefaults.areaType;

         this.settings.isLegend = parseInt(
            this.settings.isLegend ??
               ABViewChartAreaPropertyComponentDefaults.isLegend
         );

         // this.settings.chartWidth = parseInt(this.settings.chartWidth || ABViewChartAreaPropertyComponentDefaults.chartWidth);
         this.settings.chartHeight = parseInt(
            this.settings.chartHeight ??
               ABViewChartAreaPropertyComponentDefaults.chartHeight
         );

         this.settings.labelFontSize = parseInt(
            this.settings.labelFontSize ??
               ABViewChartAreaPropertyComponentDefaults.labelFontSize
         );
         this.settings.stepValue = parseInt(
            this.settings.stepValue ??
               ABViewChartAreaPropertyComponentDefaults.stepValue
         );
         this.settings.maxValue = parseInt(
            this.settings.maxValue ??
               ABViewChartAreaPropertyComponentDefaults.maxValue
         );

         this.translate(this, this, ["areaLabel"]);
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }
   }

   return class ABViewChartArea extends ABViewChartAreaCore {
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
      component() {
         return new ABAbviewchartareaComponent(this);
      }

      // constructor(values, application, parent, defaultValues) {
      //    super(values, application, parent, defaultValues);
      // }
   };
}


/***/ },

/***/ 88787
/*!********************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/area/FNAbviewchartareaComponent.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewchartareaComponent)
/* harmony export */ });
/* harmony import */ var _chartBindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chartBindings.js */ 53511);


function FNAbviewchartareaComponent({ ABViewComponentPlugin }) {
   const ChartContainerComponent = (0,_chartBindings_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   return class ABviewchartareaComponent extends ChartContainerComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewChartArea_${baseView.id}`, ids);
      }

      ui() {
         const settings = this.settings;

         return super.ui({
            view: "chart",
            type: settings.areaType,
            yAxis: {
               start: 0,
               step: settings.stepValue, //"#stepValue#",
               end: settings.maxValue, //"#maxValue#"
            },
            xAxis: {
               template: settings.isLegend
                  ? `<div style='font-size:${settings.labelFontSize}px;'>#label#</div>`
                  : "",
            },
            legend: settings.isLegend
               ? {
                    template: `<div style='font-size:${settings.labelFontSize}px;'>#label#</div>`,
                    values: [], // TODO : bug in webix 5.1.7
                 }
               : null,
            series: [
               {
                  alpha: 0.7,
                  value: "#value#",
                  color: "#ee4339",
               },
               {
                  alpha: 0.4,
                  value: "#value2#",
                  color: "#a7ee70",
               },
            ],
            height: settings.chartHeight,
            // width: settings.chartWidth,
         });
      }

      async init(AB) {
         await super.init(AB);
      }

      onShow() {
         super.onShow();
      }
   };
}


/***/ },

/***/ 3410
/*!*********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/bar/FNAbviewchartbar.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewchartbar)
/* harmony export */ });
/* harmony import */ var _FNAbviewchartbarComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewchartbarComponent.js */ 34523);
/* harmony import */ var _chartBindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chartBindings.js */ 3494);



// FNAbviewchartbar Web
// A web side import for an ABView.
//
function FNAbviewchartbar({
   ABViewComponentPlugin,
   ABViewWidgetPlugin,
}) {
   const ABViewChartCore = (0,_chartBindings_js__WEBPACK_IMPORTED_MODULE_1__["default"])({ ABViewWidgetPlugin });
   const ABAbviewchartbarComponent = (0,_FNAbviewchartbarComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const ABViewChartBarPropertyComponentDefaults = {
      barType: "bar",
      barPreset: "column",
      isLegend: 1,
      // chartWidth: 600,
      height: 200,
      labelFontSize: 12,
      stepValue: 20,
      maxValue: 100,
   };

   const ABViewDefaults = {
      key: "bar", // {string} unique key for this view
      icon: "bar-chart", // {string} fa-[icon] reference for this view
      labelKey: "Bar", // {string} the multilingual label key for the class label
   };

   class ABViewChartBarCore extends ABViewChartCore {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewChartBarPropertyComponentDefaults;
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

         this.settings.barType =
            this.settings.barType ||
            ABViewChartBarPropertyComponentDefaults.barType;

         this.settings.barPreset =
            this.settings.barPreset ||
            ABViewChartBarPropertyComponentDefaults.barPreset;

         this.settings.isLegend = parseInt(
            this.settings.isLegend ??
            ABViewChartBarPropertyComponentDefaults.isLegend
         );

         // this.settings.chartWidth = parseInt(this.settings.chartWidth || ABViewChartBarPropertyComponentDefaults.chartWidth);
         this.settings.height = parseInt(
            this.settings.height ??
            ABViewChartBarPropertyComponentDefaults.height
         );

         this.settings.labelFontSize = parseInt(
            this.settings.labelFontSize ??
            ABViewChartBarPropertyComponentDefaults.labelFontSize
         );
         this.settings.stepValue = parseInt(
            this.settings.stepValue ??
            ABViewChartBarPropertyComponentDefaults.stepValue
         );
         this.settings.maxValue = parseInt(
            this.settings.maxValue ??
            ABViewChartBarPropertyComponentDefaults.maxValue
         );

         this.translate(this, this, ["barLabel"]);
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }
   }

   return class ABViewChartBar extends ABViewChartBarCore {
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
      component() {
         return new ABAbviewchartbarComponent(this);
      }

      // constructor(values, application, parent, defaultValues) {
      //    super(values, application, parent, defaultValues);
      // }
   };
}


/***/ },

/***/ 34523
/*!******************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/bar/FNAbviewchartbarComponent.js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewchartbarComponent)
/* harmony export */ });
/* harmony import */ var _chartBindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chartBindings.js */ 53511);


function FNAbviewchartbarComponent({
   ABViewComponentPlugin,
}) {
   const ChartContainerComponent = (0,_chartBindings_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   return class FNAbviewchartbarComponent extends ChartContainerComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewChartBar_${baseView.id}`, ids);
      }

      ui() {
         const settings = this.settings;

         return super.ui({
            view: "chart",
            type: settings.barType,
            preset: settings.barPreset,
            value: "#value#",
            color: "#color#",
            yAxis: {
               start: 0,
               step: settings.stepValue, //"#stepValue#",
               end: settings.maxValue, //"#maxValue#"
            },
            xAxis: {
               template: settings.isLegend
                  ? `<div style='font-size:${settings.labelFontSize}px;'>#label#</div>`
                  : "",
            },
            legend:
               settings.barType === "bar" || !settings.barType
                  ? settings.isLegend
                     ? `<div style='font-size:${settings.labelFontSize}px;'>#label#</div>`
                     : ""
                  : settings.isLegend
                  ? {
                       template: `<div style='font-size:${settings.labelFontSize}px;'>#label#</div>`,
                       values: [], // TODO : bug in webix 5.1.7
                    }
                  : null,
            height: settings.height,
            // width: settings.chartWidth,
         });
      }

      async init(AB) {
         await super.init(AB);
      }

      onShow() {
         super.onShow();
      }
   };
}


/***/ },

/***/ 69014
/*!********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/chart/FNAbviewchart.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewchart)
/* harmony export */ });
/* harmony import */ var _FNAbviewchartComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewchartComponent.js */ 71455);



// FNAbviewchart Web
// A web side import for an ABView.
//
function FNAbviewchart({
   AB,
   ABViewContainerComponent,
   ABViewContainer,
}) {
   const ABAbviewchartComponent = (0,_FNAbviewchartComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      AB,
      ABViewContainerComponent,
   });

   const ABViewChartPropertyComponentDefaults = {
      dataviewID: "",
      columnValue: "",
      columnLabel: "",
      columnValue2: "",
      isPercentage: 1,
      showLabel: 1,
      labelPosition: "left",
      labelWidth: 120,
      height: 200,
      multipleSeries: 0,
   };

   const ABViewChartDefaults = {
      key: "chart", // {string} unique key for this view
      icon: "bar-chart", // {string} fa-[icon] reference for this view
      labelKey: "Chart", // {string} the multilingual label key for the class label
   };

   // this needs to be a class that extends ABViewContainer
   class ABViewChartCore extends ABViewContainer {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewChartDefaults);
      }

      static getPluginType() {
         return "view";
      }
      static common() {
         return ABViewChartDefaults;
      }

      static defaultValues() {
         return ABViewChartPropertyComponentDefaults;
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
            ABViewChartPropertyComponentDefaults.dataviewID;

         this.settings.columnValue =
            this.settings.columnValue ??
            ABViewChartPropertyComponentDefaults.columnValue;

         this.settings.columnLabel =
            this.settings.columnLabel ??
            ABViewChartPropertyComponentDefaults.columnLabel;

         this.settings.columnValue2 =
            this.settings.columnValue2 ??
            ABViewChartPropertyComponentDefaults.columnValue2;

         this.settings.isPercentage = parseInt(
            this.settings.isPercentage ??
            ABViewChartPropertyComponentDefaults.isPercentage
         );

         this.settings.showLabel = parseInt(
            this.settings.showLabel ??
            ABViewChartPropertyComponentDefaults.showLabel
         );

         this.settings.labelPosition =
            this.settings.labelPosition ||
            ABViewChartPropertyComponentDefaults.labelPosition;

         this.settings.labelWidth = parseInt(
            this.settings.labelWidth ??
            ABViewChartPropertyComponentDefaults.labelWidth
         );

         this.settings.height = parseInt(
            this.settings.height ?? ABViewChartPropertyComponentDefaults.height
         );

         this.settings.multipleSeries = parseInt(
            this.settings.multipleSeries ??
            ABViewChartPropertyComponentDefaults.multipleSeries
         );

         this.translate(this, this, ["chartLabel"]);
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         const viewsToAllow = ["label", "pie", "bar", "line", "area"];
         return this.application.viewAll((c) => {
            return viewsToAllow.indexOf(c.common().key) > -1;
         });
      }

      labelField() {
         const dc = this.datacollection;
         if (!dc) return null;

         const obj = dc.datasource;
         if (!obj) return null;

         return obj.fieldByID(this.settings.columnLabel);
      }

      valueField() {
         const dc = this.datacollection;
         if (!dc) return null;

         const obj = dc.datasource;
         if (!obj) return null;

         return obj.fieldByID(this.settings.columnValue);
      }

      valueField2() {
         const dc = this.datacollection;
         if (!dc) return null;

         const obj = dc.datasource;
         if (!obj) return null;

         return obj.fieldByID(this.settings.columnValue2);
      }
   };

   return class ABViewChart extends ABViewChartCore {
      /**
       * @method getPluginKey
       * return the plugin key for this view.
       * @return {string} plugin key
       */
      static getPluginKey() {
         return this.common().key;
      }

      static getPluginType() {
         return "view";
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component(parentId) {
         return new ABAbviewchartComponent(this, parentId);
      }

      fromValues(values) {
         super.fromValues(values);
         this.refreshData();
      }

      getDCChart() {
         if (!this._dcChart) this._dcChart = new webix.DataCollection();

         return this._dcChart;
      }

      refreshData() {
         const dc = this.datacollection;
         if (dc == null) {
            return this.getDCChart();
         }

         const labelCol = this.labelField();
         const valueCol = this.valueField();
         const valueCol2 = this.valueField2();

         if (!labelCol || !valueCol) {
            return this.getDCChart();
         }

         const numberColName = valueCol.columnName;

         let numberColName2 = "";

         if (this.settings.multipleSeries && valueCol2) {
            numberColName2 = valueCol2.columnName;
         }

         const colorList = [
            "#ee4339",
            "#ee9336",
            "#eed236",
            "#d3ee36",
            "#a7ee70",
            "#58dccd",
            "#36abee",
            "#476cee",
            "#a244ea",
            "#e33fc7",
         ];

         const dInfo = dc.getData();

         let results = [];
         let sumData = {};
         let sumNumber = 0;
         let sumNumber2 = 0;
         let countNumber = dInfo.length;

         dInfo.forEach((item) => {
            const labelKey = labelCol.format(item) || item.id;

            let numberVal = parseFloat(item[numberColName] || 0);
            let numberVal2 = null;

            if (this.settings.multipleSeries)
               numberVal2 = parseFloat(item[numberColName2]) || 0;

            switch (valueCol.key) {
               case "formula":
                  numberVal = valueCol.format(item);

                  break;

               case "calculate":
                  numberVal = parseFloat(
                     valueCol.constructor.convertToJs(
                        valueCol.object,
                        valueCol.settings.formula,
                        item,
                        valueCol.settings.decimalPlaces
                     )
                  );

                  break;

               default:
                  break;
            }

            if (sumData[labelKey] == null) {
               let label = labelKey;

               if (labelCol.isConnection) {
                  let relateValues = labelCol.pullRelationValues(item);
                  if (relateValues != null) {
                     if (Array.isArray(relateValues))
                        label = relateValues
                           .map((val) => val.text || "")
                           .join(", ");
                     else label = relateValues.text;
                  }
               }

               if (this.settings.multipleSeries) {
                  sumData[labelKey] = {
                     label: label || item.id,
                     value: 0,
                     value2: 0,
                  };
               } else {
                  sumData[labelKey] = {
                     label: label || item.id,
                     value: 0,
                  };
               }
            }

            sumData[labelKey].value += numberVal;
            sumNumber += numberVal;

            if (this.settings.multipleSeries) {
               sumData[labelKey].value2 += numberVal2;
               sumNumber2 += numberVal2;
            }
         });

         let index = 0;

         for (const key in sumData) {
            let val = sumData[key].value;

            if (val <= 0) continue;

            if (this.settings.isPercentage) {
               val = (val / sumNumber) * 100;
               val = Math.round(val * 100) / 100;
               val = val + " %";
            }

            if (this.settings.multipleSeries) {
               let val2 = sumData[key].value2;

               if (val2 <= 0) continue;

               if (this.settings.isPercentage) {
                  val2 = (val2 / sumNumber2) * 100;
                  val2 = Math.round(val2 * 100) / 100;
                  val2 = val2 + " %";
               }

               results.push({
                  label: sumData[key].label,
                  value: val,
                  value2: val2,
                  color: colorList[index % colorList.length],
                  count: countNumber,
               });
            } else {
               results.push({
                  label: sumData[key].label,
                  value: val,
                  color: colorList[index % colorList.length],
                  count: countNumber,
               });
            }

            index += 1;
         }

         const dcChart = this.getDCChart();

         dcChart.clearAll();
         dcChart.parse(results);
      }

      warningsEval() {
         super.warningsEval();

         let labelField = this.labelField();
         if (!labelField) {
            this.warningsMessage(
               `can't resolve label field[${this.settings.columnLabel}]`
            );
         }

         let valueField = this.valueField();
         if (!valueField) {
            this.warningsMessage(
               `can't resolve value field[${this.settings.columnValue}]`
            );
         }
      }
   };
}


/***/ },

/***/ 71455
/*!*****************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/chart/FNAbviewchartComponent.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewchartComponent)
/* harmony export */ });
function FNAbviewchartComponent({
   AB,
   ABViewContainerComponent,
}) {
   return class FNAbviewchartComponent extends ABViewContainerComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewChart_${baseView.id}`, ids);
      }

      async init(ABParam, accessLevel) {
         await super.init(ABParam, accessLevel);

         const $component = $$(this.ids.component);
         const abWebix = AB.Webix;

         if ($component) abWebix.extend($component, abWebix.ProgressBar);

         const baseView = this.view;
         const dc = baseView.datacollections || baseView.datacollection;

         const ensureDcLoaded = async (d) => {
            if (!d || typeof d.init !== "function") return;
            d.init();
            if (d.dataStatus === d.dataStatusFlag.notInitial) {
               await d.loadData();
            }
         };

         if (Array.isArray(dc)) {
            for (const d of dc) {
               await ensureDcLoaded(d);
            }
         } else if (dc) {
            await ensureDcLoaded(dc);
         }

         if (dc) {
            const eventNames = [
               "changeCursor",
               "cursorStale",
               "create",
               "update",
               "delete",
               "initializedData",
            ];

            ["changeCursor", "cursorStale"].forEach((key) => {
               if (
                  dc.datacollectionLink &&
                  !(key in (dc.datacollectionLink._events ?? []))
               )
                  baseView.eventAdd({
                     emitter: dc.datacollectionLink,
                     eventName: key,
                     listener: () => {
                        baseView.refreshData();
                     },
                  });
            });

            eventNames.forEach((evtName) => {
               baseView.eventAdd({
                  emitter: dc,
                  eventName: evtName,
                  listener: () => {
                     baseView.refreshData();
                  },
               });
            });
         }

         baseView.refreshData();
      }

      onShow() {
         super.onShow();
      }
   };
}


/***/ },

/***/ 3494
/*!*********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/core/ABViewChartCore.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNABViewChartCore)
/* harmony export */ });
function FNABViewChartCore({ ABViewWidgetPlugin }) {
   const ABViewChartPropertyComponentDefaults = {
      dataviewID: "",
      columnValue: "",
      columnLabel: "",
      columnValue2: "",
      isPercentage: 1,
      showLabel: 1,
      labelPosition: "left",
      labelWidth: 120,
      height: 200,
      multipleSeries: 0,
   };

   const ABViewChartDefaults = {
      key: "chart", // {string} unique key for this view
      icon: "bar-chart", // {string} fa-[icon] reference for this view
      labelKey: "Chart", // {string} the multilingual label key for the class label
   };

   return class ABViewChartCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewChartDefaults
         );
      }

      get datacollection() {
         return this.parent.datacollection;
      }

      static getPluginType() {
         return "view";
      }

      static common() {
         return ABViewChartDefaults;
      }

      static defaultValues() {
         return ABViewChartPropertyComponentDefaults;
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
            ABViewChartPropertyComponentDefaults.dataviewID;

         this.settings.columnValue =
            this.settings.columnValue ??
            ABViewChartPropertyComponentDefaults.columnValue;

         this.settings.columnLabel =
            this.settings.columnLabel ??
            ABViewChartPropertyComponentDefaults.columnLabel;

         this.settings.columnValue2 =
            this.settings.columnValue2 ??
            ABViewChartPropertyComponentDefaults.columnValue2;

         this.settings.isPercentage = parseInt(
            this.settings.isPercentage ??
               ABViewChartPropertyComponentDefaults.isPercentage
         );

         this.settings.showLabel = parseInt(
            this.settings.showLabel ??
               ABViewChartPropertyComponentDefaults.showLabel
         );

         this.settings.labelPosition =
            this.settings.labelPosition ||
            ABViewChartPropertyComponentDefaults.labelPosition;

         this.settings.labelWidth = parseInt(
            this.settings.labelWidth ??
               ABViewChartPropertyComponentDefaults.labelWidth
         );

         this.settings.height = parseInt(
            this.settings.height ?? ABViewChartPropertyComponentDefaults.height
         );

         this.settings.multipleSeries = parseInt(
            this.settings.multipleSeries ??
               ABViewChartPropertyComponentDefaults.multipleSeries
         );

         this.translate(this, this, ["chartLabel"]);

         this.refreshData();
      }

      getDCChart() {
         if (!this._dcChart) this._dcChart = new webix.DataCollection();

         return this._dcChart;
      }

      refreshData() {
         const dc = this.datacollection;
         if (dc == null) return this.getDCChart();

         const labelCol = this.labelField();
         const valueCol = this.valueField();
         const valueCol2 = this.valueField2();

         if (!labelCol || !valueCol) return this.getDCChart();

         const numberColName = valueCol.columnName;

         let numberColName2 = "";

         if (this.settings.multipleSeries && valueCol2) {
            numberColName2 = valueCol2.columnName;
         }

         const colorList = [
            "#ee4339",
            "#ee9336",
            "#eed236",
            "#d3ee36",
            "#a7ee70",
            "#58dccd",
            "#36abee",
            "#476cee",
            "#a244ea",
            "#e33fc7",
         ];

         const dInfo = dc.getData();

         let results = [];
         let sumData = {};
         let sumNumber = 0;
         let sumNumber2 = 0;
         let countNumber = dInfo.length;

         dInfo.forEach((item) => {
            const labelKey = labelCol.format(item) || item.id;

            let numberVal = parseFloat(item[numberColName] || 0);
            let numberVal2 = null;

            if (this.settings.multipleSeries)
               numberVal2 = parseFloat(item[numberColName2]) || 0;

            switch (valueCol.key) {
               case "formula":
                  numberVal = valueCol.format(item);

                  break;

               case "calculate":
                  numberVal = parseFloat(
                     valueCol.constructor.convertToJs(
                        valueCol.object,
                        valueCol.settings.formula,
                        item,
                        valueCol.settings.decimalPlaces
                     )
                  );

                  break;

               default:
                  break;
            }

            if (sumData[labelKey] == null) {
               let label = labelKey;

               if (labelCol.isConnection) {
                  let relateValues = labelCol.pullRelationValues(item);
                  if (relateValues != null) {
                     if (Array.isArray(relateValues))
                        label = relateValues
                           .map((val) => val.text || "")
                           .join(", ");
                     else label = relateValues.text;
                  }
               }

               if (this.settings.multipleSeries) {
                  sumData[labelKey] = {
                     label: label || item.id,
                     value: 0,
                     value2: 0,
                  };
               } else {
                  sumData[labelKey] = {
                     label: label || item.id,
                     value: 0,
                  };
               }
            }

            sumData[labelKey].value += numberVal;
            sumNumber += numberVal;

            if (this.settings.multipleSeries) {
               sumData[labelKey].value2 += numberVal2;
               sumNumber2 += numberVal2;
            }
         });

         let index = 0;

         for (const key in sumData) {
            let val = sumData[key].value;

            if (val <= 0) continue;

            if (this.settings.isPercentage) {
               val = (val / sumNumber) * 100;
               val = Math.round(val * 100) / 100;
               val = val + " %";
            }

            if (this.settings.multipleSeries) {
               let val2 = sumData[key].value2;

               if (val2 <= 0) continue;

               if (this.settings.isPercentage) {
                  val2 = (val2 / sumNumber2) * 100;
                  val2 = Math.round(val2 * 100) / 100;
                  val2 = val2 + " %";
               }

               results.push({
                  label: sumData[key].label,
                  value: val,
                  value2: val2,
                  color: colorList[index % colorList.length],
                  count: countNumber,
               });
            } else {
               results.push({
                  label: sumData[key].label,
                  value: val,
                  color: colorList[index % colorList.length],
                  count: countNumber,
               });
            }

            index += 1;
         }

         const dcChart = this.getDCChart();

         dcChart.clearAll();
         dcChart.parse(results);
      }

      warningsEval() {
         super.warningsEval();

         let labelField = this.labelField();
         if (!labelField) {
            this.warningsMessage(
               `can't resolve label field[${this.settings.columnLabel}]`
            );
         }

         let valueField = this.valueField();
         if (!valueField) {
            this.warningsMessage(
               `can't resolve value field[${this.settings.columnValue}]`
            );
         }
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         const viewsToAllow = ["label", "pie", "bar", "line", "area"];
         return this.application.viewAll((c) => {
            return viewsToAllow.indexOf(c.common().key) > -1;
         });
      }

      labelField() {
         const dc = this.datacollection;
         if (!dc) return null;

         const obj = dc.datasource;
         if (!obj) return null;

         return obj.fieldByID(this.settings.columnLabel);
      }

      valueField() {
         const dc = this.datacollection;
         if (!dc) return null;

         const obj = dc.datasource;
         if (!obj) return null;

         return obj.fieldByID(this.settings.columnValue);
      }

      valueField2() {
         const dc = this.datacollection;
         if (!dc) return null;

         const obj = dc.datasource;
         if (!obj) return null;

         return obj.fieldByID(this.settings.columnValue2);
      }
   };
}


/***/ },

/***/ 53511
/*!*************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/core/FNAbviewchartcontainerComponent.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewchartcontainerComponent)
/* harmony export */ });
function findAncestorWithGetDCChart(view) {
   let cur = view && view.parent;
   while (cur) {
      if (typeof cur.getDCChart === "function") return cur;
      cur = cur.parent;
   }
   return null;
}

function FNAbviewchartcontainerComponent({
   ABViewComponentPlugin,
}) {
   return class ABviewchartcontainerComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewChartContainer_${baseView.id}`,
            Object.assign(
               {
                  chartContainer: "",
               },
               ids
            )
         );
      }

      ui(uiChartComponent) {
         const _ui = super.ui([
            Object.assign(
               { id: this.ids.chartContainer },
               uiChartComponent ?? {}
            ),
         ]);

         delete _ui.type;

         return _ui;
      }

      async init(AB) {
         await super.init(AB);
      }

      onShow() {
         super.onShow();
         const baseView = this.view;

         baseView._isShow = true;

         const chartAncestor = findAncestorWithGetDCChart(baseView);
         let dcChart = null;
         if (chartAncestor) {
            if (typeof chartAncestor.refreshData === "function") {
               chartAncestor.refreshData();
            }
            dcChart = chartAncestor.getDCChart();
         } else if (typeof baseView.getDCChart === "function") {
            if (typeof baseView.refreshData === "function") {
               baseView.refreshData();
            }
            dcChart = baseView.getDCChart();
         }
         this.refreshData(dcChart);
      }

      refreshData(dcChart) {
         const $chartContainer = $$(this.ids.chartContainer);
         const $chartComponent = $$(this.ids.component);

         if (dcChart && $chartContainer?.data) {
            $chartContainer.data.sync(dcChart);
         }

         setTimeout(() => {
            $chartComponent?.adjust();
            $chartContainer?.adjust();
         }, 160);
      }
   };
}


/***/ },

/***/ 7494
/*!***********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/line/FNAbviewchartline.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewchartline)
/* harmony export */ });
/* harmony import */ var _chartBindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chartBindings.js */ 3494);
/* harmony import */ var _FNAbviewchartlineComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FNAbviewchartlineComponent.js */ 45839);



// FNAbviewchartline Web
// A web side import for an ABView.
//
function FNAbviewchartline({
   ABViewComponentPlugin,
   ABViewWidgetPlugin,
}) {
   const ABViewChartCore = (0,_chartBindings_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ ABViewWidgetPlugin });

   const ABAbviewchartlineComponent = (0,_FNAbviewchartlineComponent_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      ABViewComponentPlugin,
   });

   const ABViewChartLinePropertyComponentDefaults = {
      lineType: "line",
      linePreset: "plot",
      isLegend: 1,
      // chartWidth: 600,
      chartHeight: 200,
      labelFontSize: 12,
      stepValue: 20,
      maxValue: 100,
   };

   const ABViewDefaults = {
      key: "line", // {string} unique key for this view
      icon: "line-chart", // {string} fa-[icon] reference for this view
      labelKey: "Line", // {string} the multilingual label key for the class label
   };

   class ABViewChartLineCore extends ABViewChartCore {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewChartLinePropertyComponentDefaults;
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

         this.settings.lineType =
            this.settings.lineType ||
            ABViewChartLinePropertyComponentDefaults.lineType;

         this.settings.linePreset =
            this.settings.linePreset ||
            ABViewChartLinePropertyComponentDefaults.linePreset;

         this.settings.isLegend = parseInt(
            this.settings.isLegend ??
            ABViewChartLinePropertyComponentDefaults.isLegend
         );

         // this.settings.chartWidth = parseInt(this.settings.chartWidth || ABViewChartLinePropertyComponentDefaults.chartWidth);
         this.settings.chartHeight = parseInt(
            this.settings.chartHeight ??
            ABViewChartLinePropertyComponentDefaults.chartHeight
         );

         this.settings.labelFontSize = parseInt(
            this.settings.labelFontSize ??
            ABViewChartLinePropertyComponentDefaults.labelFontSize
         );
         this.settings.stepValue = parseInt(
            this.settings.stepValue ??
            ABViewChartLinePropertyComponentDefaults.stepValue
         );
         this.settings.maxValue = parseInt(
            this.settings.maxValue ??
            ABViewChartLinePropertyComponentDefaults.maxValue
         );

         this.translate(this, this, ["lineLabel"]);
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }
   }

   return class ABViewChartLine extends ABViewChartLineCore {
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
      component() {
         return new ABAbviewchartlineComponent(this);
      }

      // constructor(values, application, parent, defaultValues) {
      //    super(values, application, parent, defaultValues);
      // }
   };
}


/***/ },

/***/ 45839
/*!********************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/line/FNAbviewchartlineComponent.js ***!
  \********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewchartlineComponent)
/* harmony export */ });
/* harmony import */ var _chartBindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chartBindings.js */ 53511);


function FNAbviewchartlineComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   const ChartContainerComponent = (0,_chartBindings_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   return class FNAbviewchartlineComponent extends ChartContainerComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewChartLine_${baseView.id}`, ids);
      }

      ui() {
         const settings = this.settings;

         return super.ui({
            view: "chart",
            type: settings.lineType,
            preset: settings.linePreset,
            value: "#value#",
            color: "#color#",
            yAxis: {
               start: 0,
               step: settings.stepValue,
               end: settings.maxValue, //"#maxValue#"
            },
            xAxis: {
               template: settings.isLegend
                  ? `<div style='font-size:${settings.labelFontSize}px;'>#label#</div>`
                  : "",
            },
            legend: settings.isLegend
               ? {
                    template: `<div style='font-size:${settings.labelFontSize}px;'>#label#</div>`,
                    values: [], // TODO : bug in webix 5.1.7
                 }
               : null,
            height: settings.chartHeight,
            // width: settings.chartWidth,
         });
      }
   };
}


/***/ },

/***/ 69448
/*!*********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/pie/FNAbviewchartpie.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewchartpie)
/* harmony export */ });
/* harmony import */ var _chartBindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chartBindings.js */ 3494);
/* harmony import */ var _FNAbviewchartpieComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FNAbviewchartpieComponent.js */ 83497);



// FNAbviewchartpie Web
// A web side import for an ABView.
//
function FNAbviewchartpie({
   /*AB,*/
   ABViewPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
   ABViewWidgetPlugin,
}) {
   const ABViewChartCore = (0,_chartBindings_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ ABViewWidgetPlugin });
   const ABAbviewchartpieComponent = (0,_FNAbviewchartpieComponent_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      ABViewComponentPlugin,
   });

   const ABViewChartPiePropertyComponentDefaults = {
      pieType: "pie",
      isLegend: 1,
      // chartWidth: 600,
      height: 200,
      innerFontSize: 12,
      labelFontSize: 12,
   };

   const ABViewDefaults = {
      key: "pie", // {string} unique key for this view
      icon: "pie-chart", // {string} fa-[icon] reference for this view
      labelKey: "Pie", // {string} the multilingual label key for the class label
   };

   class ABViewChartPieCore extends ABViewChartCore {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewChartPiePropertyComponentDefaults;
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

         this.settings.pieType =
            this.settings.pieType ||
            ABViewChartPiePropertyComponentDefaults.pieType;

         this.settings.isLegend = parseInt(
            this.settings.isLegend ??
            ABViewChartPiePropertyComponentDefaults.isLegend
         );

         // this.settings.chartWidth = parseInt(this.settings.chartWidth || ABViewChartPiePropertyComponentDefaults.chartWidth);
         this.settings.height = parseInt(
            this.settings.height ??
            ABViewChartPiePropertyComponentDefaults.height
         );

         this.settings.innerFontSize = parseInt(
            this.settings.innerFontSize ??
            ABViewChartPiePropertyComponentDefaults.innerFontSize
         );
         this.settings.labelFontSize = parseInt(
            this.settings.labelFontSize ??
            ABViewChartPiePropertyComponentDefaults.labelFontSize
         );

         this.translate(this, this, ["pieLabel"]);
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }
   }

   return class ABViewChartPie extends ABViewChartPieCore {
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
      component() {
         return new ABAbviewchartpieComponent(this);
      }

      // constructor(values, application, parent, defaultValues) {
      //    super(values, application, parent, defaultValues);
      // }
   };
}


/***/ },

/***/ 83497
/*!******************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_chart/pie/FNAbviewchartpieComponent.js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewchartpieComponent)
/* harmony export */ });
/* harmony import */ var _chartBindings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chartBindings.js */ 53511);


function FNAbviewchartpieComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   const ChartContainerComponent = (0,_chartBindings_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   return class FNAbviewchartpieComponent extends ChartContainerComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewChartPie_${baseView.id}`, ids);
      }

      ui() {
         const settings = this.settings;

         return super.ui({
            view: "chart",
            type: settings.pieType,
            value: "#value#",
            color: "#color#",
            legend: settings.isLegend
               ? {
                    width: this.view.parent.settings.labelWidth,
                    template: `<div style='font-size: ${settings.labelFontSize}px;'>#label#</div>`,
                 }
               : null,
            pieInnerText: `<div style='font-size: ${settings.innerFontSize}px;'>#value#</div>`,
            shadow: 1,
            height: settings.height,
            // width: settings.chartWidth,
         });
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
   AB,
   ABViewComponentPlugin,
   ABViewContainer,
   ABViewContainerComponent,
   ABViewPropertyLinkPage,
}) {
   const ABAbviewdataviewComponent = (0,_FNAbviewdataviewComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      AB,
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
            defaultValues ?? ABViewDataviewDefaults
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
            this.settings.xCount ??
            ABViewDataviewPropertyComponentDefaults.xCount
         );
         this.settings.detailsPage =
            this.settings.detailsPage ??
            ABViewDataviewPropertyComponentDefaults.detailsPage;
         this.settings.editPage =
            this.settings.editPage ??
            ABViewDataviewPropertyComponentDefaults.editPage;
         this.settings.detailsTab =
            this.settings.detailsTab ??
            ABViewDataviewPropertyComponentDefaults.detailsTab;
         this.settings.editTab =
            this.settings.editTab ??
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
   AB,
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
            delete this.__throttleRefreshWarning;
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

/***/ 22789
/*!**************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_docxBuilder/FNAbviewdocxbuilder.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewdocxbuilder)
/* harmony export */ });
/* harmony import */ var _FNAbviewdocxbuilderComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewdocxbuilderComponent.js */ 5642);


// FNAbviewdocxbuilder Web
// A web side import for an ABView.
//
function FNAbviewdocxbuilder({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
}) {
   const ABAbviewdocxbuilderComponent = (0,_FNAbviewdocxbuilderComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const ABViewDocxBuilderPropertyComponentDefaults = {
      buttonlabel: "Download DOCX",
      dataviewID: null,
      width: 0,
      filename: "", // uuid
      filelabel: "output.docx",
      language: "en", // en
      toolbarBackground: "ab-background-default",
      buttonPosition: "left",
   };

   const ABViewDefaults = {
      key: "docxBuilder", // {string} unique key for this view
      icon: "file-word-o", // {string} fa-[icon] reference for this view
      labelKey: "DOCX Builder", // {string} the multilingual label key for the class label
   };

   class ABViewDocxBuilderCore extends ABViewWidgetPlugin {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABViewDefaults);
      }

      static common() {
         return ABViewDefaults;
      }

      static defaultValues() {
         return ABViewDocxBuilderPropertyComponentDefaults;
      }

      ///
      /// Instance Methods
      ///

      /**
       * @method toObj()
       *
       * properly compile the current state of this ABViewLabel instance
       * into the values needed for saving.
       *
       * @return {json}
       */
      toObj() {
         this.unTranslate(this, this, ["filelabel", "buttonlabel"]);

         let obj = super.toObj();
         obj.viewIDs = [];
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

         // convert from "0" => 0
         this.settings.width = parseInt(
            this.settings.width ||
               ABViewDocxBuilderPropertyComponentDefaults.width
         );

         this.translate(this, this, ["filelabel", "buttonlabel"]);
      }

      uploadUrl() {
         // TODO: Convert this to use ABFactory.urlFileUpload() or a ABFieldFile
         // to get the URL:

         // support uploading template when more than one data source is selected
         const object = this.datacollections[0].datasource;

         // NOTE: file-upload API needs to have the id of ANY field.
         const field = object ? object.fields()[0] : null;

         return `/file/upload/${object?.id}/${field?.id}/1`;
      }

      downloadUrl() {
         return `/file/${this.settings.filename}`;
      }

      get languageCode() {
         return (
            this.settings.language ||
            ABViewDocxBuilderPropertyComponentDefaults.language
         );
      }

      get datacollections() {
         let dataviewID = (this.settings || {}).dataviewID;
         if (!dataviewID) return [];

         let dvList = dataviewID.split(",") || [];

         return (
            this.AB.datacollections((dv) => dvList.indexOf(dv.id) > -1) || []
         );
      }
   }

   return class ABViewDocxBuilder extends ABViewDocxBuilderCore {
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
         return new ABAbviewdocxbuilderComponent(this, parentId);
      }

      letUserDownload(blob, filename) {
         const url = window.URL.createObjectURL(blob);

         const a = document.createElement("a");
         a.href = url;
         a.download = filename;
         document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
         a.click();
         a.remove(); //afterwards we remove the element again

         window.URL.revokeObjectURL(url);
      }

      warningsEval() {
         super.warningsEval();

         let DC = this.datacollections || this.datacollection;
         if (!DC) {
            this.warningsMessage(
               `can't resolve it's datacollection[${this.settings.dataviewID}]`
            );
         }

         if (!this.settings.filename) {
            this.warningsMessage("is missing a DOCX template file");
         } else {
            // TODO: should we check for the existance of the file?
            // this isn't currently an async friendly fn, so how?
            // let url = this.downloadUrl();
         }
      }
   };
}


/***/ },

/***/ 5642
/*!***********************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_docxBuilder/FNAbviewdocxbuilderComponent.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewdocxbuilderComponent)
/* harmony export */ });
/* harmony import */ var _docxtemplater_v3_0_12_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docxtemplater.v3.0.12.min.js */ 86870);
/* harmony import */ var _docxtemplater_v3_0_12_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_docxtemplater_v3_0_12_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _docxtemplater_image_module_v3_0_2_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docxtemplater-image-module.v3.0.2.min.js */ 91356);
/* harmony import */ var _docxtemplater_image_module_v3_0_2_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_docxtemplater_image_module_v3_0_2_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jszip_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jszip.min.js */ 95258);
/* harmony import */ var _jszip_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jszip_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jszip_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jszip-utils */ 80375);
/* harmony import */ var jszip_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jszip_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var image_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! image-size */ 57975);
/* harmony import */ var image_size__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(image_size__WEBPACK_IMPORTED_MODULE_4__);






function FNAbviewdocxbuilderComponent({
   /*AB,*/
   ABViewComponentPlugin,
}) {
   return class ABAbviewdocxbuilderComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewDocxBuilder_${baseView.id}`,
            Object.assign(
               {
                  downloadButton: "",
                  noFileLabel: "",
               },
               ids
            )
         );
      }

      ui() {
         const baseView = this.view;
         const settings = this.settings;
         const defaultSettings = baseView.constructor.defaultValues();
         const buttonWidth = settings.width ?? defaultSettings.width;

         let autowidth = false;

         if (buttonWidth === 0) autowidth = true;

         let leftSpacer = {
            type: "spacer",
            width: 1,
         };
         let rightSpacer = {
            type: "spacer",
            width: 1,
         };

         switch (settings.buttonPosition ?? defaultSettings.buttonPosition) {
            case "left":
               break;
            case "center":
               leftSpacer = {
                  type: "spacer",
               };
               rightSpacer = {
                  type: "spacer",
               };
               break;
            case "right":
               leftSpacer = {
                  type: "spacer",
               };
               break;
         }

         const buttonLabelText =
            baseView.buttonlabel ||
            settings.buttonlabel ||
            defaultSettings.buttonlabel; // Use || to check empty string ""
         const ids = this.ids;
         const _ui = super.ui([
            {
               view: "toolbar",
               css:
                  settings.toolbarBackground ??
                  defaultSettings.toolbarBackground,
               cols: [
                  leftSpacer,
                  {
                     id: ids.downloadButton,
                     view: "button",
                     css: "webix_primary",
                     type: "icon",
                     icon: "fa fa-file-word-o",
                     label: buttonLabelText,
                     width: settings.width || defaultSettings.width,
                     autowidth: autowidth,
                     click: () => {
                        this.renderFile();
                     },
                     on: {
                        // Add data-cy attribute for cypress tests
                        onAfterRender: () => {
                           const name = baseView.name?.replace(
                              ".docxBuilder",
                              ""
                           );
                           const dataCy = `docx download ${name} ${baseView.id}`;
                           $$(ids.downloadButton)
                              ?.$view.querySelector("button")
                              .setAttribute("data-cy", dataCy);
                        },
                     },
                  },
                  {
                     id: ids.noFileLabel,
                     view: "label",
                     label: this.label("No template file"),
                  },
                  {
                     type: "spacer",
                  },
                  rightSpacer,
               ],
            },
         ]);

         delete _ui.type;

         return _ui;
      }

      async init(AB) {
         await super.init(AB);

         const ids = this.ids;
         const $downloadButton = $$(ids.downloadButton);
         const $noFileLabel = $$(ids.noFileLabel);

         if (this.view.settings.filename) {
            $downloadButton.show();
            $noFileLabel.hide();
         } else {
            $downloadButton.hide();
            $noFileLabel.show();
         }
      }

      async onShow() {
         super.onShow();

         const tasks = [];

         this.view.datacollections.forEach((dc) => {
            if (dc.dataStatus === dc.dataStatusFlag.notInitial)
               // load data when a widget is showing
               tasks.push(dc.loadData());
         });

         // Show loading cursor
         if (tasks.length > 0) this.busy();

         await Promise.all(tasks);

         // Hide loading cursor
         this.ready();
      }

      busy() {
         const $downloadButton = $$(this.ids.downloadButton);

         if (!$downloadButton) return;

         $downloadButton.disable();
         $downloadButton.define("icon", "fa fa-refresh fa-spin");
         $downloadButton.refresh();
      }

      ready() {
         const $downloadButton = $$(this.ids.downloadButton);

         if (!$downloadButton) return;

         $downloadButton.enable();
         $downloadButton.define("icon", "fa fa-file-word-o");
         $downloadButton.refresh();
      }

      async renderFile() {
         this.busy();

         const reportValues = await this.getReportData();

         // console.log("DOCX data: ", reportValues);

         // Download images
         const images = await this.downloadImages(reportValues);

         // Download the template file
         const contentTemplateFile = await this.downloadTemplateFile();

         // Generate Docx file
         const blobFile = this.generateDocxFile(
            contentTemplateFile,
            reportValues,
            images
         );

         const baseView = this.view;

         // Let user download the output file
         baseView.letUserDownload(blobFile, baseView.filelabel);

         // Final step
         this.ready();
      }

      async getReportData() {
         const result = {};
         const tasks = [];

         // Get current cursor
         const datacollections = this.view.datacollections;
         const isDcLabelAdded = datacollections.length > 1;

         datacollections
            .filter((dc) => dc?.datasource)
            .forEach(async (dc) => {
               tasks.push(
                  new Promise((resolve, reject) => {
                     const obj = dc.datasource;
                     const objModel = obj.model();
                     const dcCursor = dc.getCursor();
                     const dcValues = [];

                     // pull the defined sort values
                     let sorts = dc.settings.objectWorkspace.sortFields || [];

                     // pull filter conditions
                     let wheres = this.AB.cloneDeep(
                        dc.settings.objectWorkspace.filterConditions ?? {}
                     );
                     // if there is a selected cursor set the filter here
                     if (dcCursor) {
                        // if there is a selected cursor set the filter here
                        wheres = {
                           glue: "and",
                           rules: [
                              {
                                 key: obj.PK(),
                                 rule: "equals",
                                 value: dcCursor[obj.PK()],
                              },
                           ],
                        };
                     } else if (dc.__reloadWheres) {
                        // if we pass new wheres with a reload use them instead
                        wheres = dc.__reloadWheres;
                     }
                     wheres.glue = wheres.glue || "and";
                     wheres.rules = wheres.rules || [];

                     const __additionalWheres = {
                        glue: "and",
                        rules: [],
                     };

                     // add the filterCond from user filters if there are rules to add
                     if (dc?.__filterCond?.rules?.length > 0) {
                        __additionalWheres.rules.push(dc?.__filterCond);
                     }

                     // Filter by a selected cursor of a link DC
                     let linkRule = dc.ruleLinkedData();
                     if (!dc.settings.loadAll && linkRule) {
                        __additionalWheres.rules.push(linkRule);
                     }
                     // pull data rows following the follow data collection
                     else if (dc.datacollectionFollow) {
                        const followCursor =
                           dc.datacollectionFollow.getCursor();
                        // store the PK as a variable
                        let PK = dc.datasource.PK();
                        // if the datacollection we are following is a query
                        // add "BASE_OBJECT." to the PK so we can select the
                        // right value to report the cursor change to
                        if (dc.datacollectionFollow.settings.isQuery) {
                           PK = "BASE_OBJECT." + PK;
                        }
                        if (followCursor) {
                           wheres = {
                              glue: "and",
                              rules: [
                                 {
                                    key: dc.datasource.PK(),
                                    rule: "equals",
                                    value: followCursor[PK],
                                 },
                              ],
                           };
                        }
                        // Set no return rows
                        else {
                           wheres = {
                              glue: "and",
                              rules: [
                                 {
                                    key: this.datasource.PK(),
                                    rule: "equals",
                                    value: "NO RESULT ROW",
                                 },
                              ],
                           };
                        }
                     }

                     // Combine setting & program filters
                     if (__additionalWheres.rules.length) {
                        if (wheres.rules.length) {
                           __additionalWheres.rules.unshift(wheres);
                        }
                        wheres = __additionalWheres;
                     }

                     // remove any null in the .rules
                     // if (wheres?.rules?.filter) wheres.rules = wheres.rules.filter((r) => r);
                     wheres = obj.whereCleanUp(wheres);

                     // Pull data that have full relation values.
                     // NOTE: When get data from DataCollection, those data is pruned.
                     objModel
                        .findAll({
                           where: wheres || {},
                           skip: 0,
                           sort: sorts,
                           populate: true,
                        })
                        .then((dataList) => {
                           // update property names to column labels to match format names in docx file
                           const mlFields = obj.multilingualFields();

                           dataList?.data.forEach((data) => {
                              let resultData;

                              // For support label of columns every languages
                              obj.fields().forEach((f) => {
                                 const fieldLabels = [];

                                 // Query Objects
                                 if (obj?.isQuery) {
                                    if (
                                       typeof f.object.translations === "string"
                                    )
                                       f.object.translations = JSON.parse(
                                          f.object.translations
                                       );

                                    if (typeof f.translations === "string")
                                       f.translations = JSON.parse(
                                          f.translations
                                       );

                                    (f.object.translations || []).forEach(
                                       (objTran) => {
                                          const fieldTran = (
                                             f.translations || []
                                          ).filter(
                                             (fieldTran) =>
                                                fieldTran.language_code ===
                                                objTran.language_code
                                          )[0];

                                          if (!fieldTran) return;

                                          const objectLabel = objTran.label;
                                          const fieldLabel = fieldTran.label;

                                          // Replace alias with label of object
                                          fieldLabels.push(
                                             `${objectLabel}.${fieldLabel}`
                                          );
                                       }
                                    );
                                 }
                                 // Normal Objects
                                 else if (typeof f.translations === "string")
                                    f.translations = JSON.parse(f.translations);

                                 f.translations.forEach((tran) => {
                                    fieldLabels.push(tran.label);
                                 });

                                 resultData = Object.assign(
                                    resultData ?? {},
                                    this.setReportValues(
                                       data,
                                       f,
                                       fieldLabels,
                                       mlFields
                                    ) ?? {}
                                 );

                                 // Keep ABObject into .scope of DOCX templater
                                 resultData._object = obj;
                              });

                              dcValues.push(resultData);
                           });

                           // If data sources have more than 1 or the result data more than 1 items, then add label of data source
                           const datacollectionData =
                              dcValues.length > 1 ? dcValues : dcValues[0];

                           if (
                              isDcLabelAdded ||
                              (Array.isArray(datacollectionData) &&
                                 datacollectionData.length > 1)
                           )
                              (dc.translations || []).forEach((tran) => {
                                 result[tran.label] = datacollectionData;
                              });
                           else Object.assign(result, datacollectionData);

                           resolve();
                        });
                  })
               );
            });

         await Promise.all(tasks);

         return result;
      }

      setReportValues(data, field, fieldLabels = [], multilinguageFields) {
         const result = {};

         let val = null;

         result.id = data.id;
         result[`${field.columnName}_ORIGIN`] = data[field.columnName]; // Keep origin value for compare value with custom index

         const baseView = this.view;

         // Translate multilinguage fields
         if (multilinguageFields.length) {
            const transFields = (multilinguageFields || []).filter(
               (fieldName) => data[fieldName] != null
            );

            baseView.translate(data, data, transFields, baseView.languageCode);
         }

         // Pull value
         if (field.isConnection) {
            // If field is connected field, then
            // {
            //    fieldName: {Object} or [Array]
            // }
            val = data[this.AB.rules.toFieldRelationFormat(field.columnName)];

            if (val?.forEach)
               val.forEach((v) => {
                  if (!v) return;

                  // Sentry Fix: sometimes v is just the uuid
                  // Q: what should we do in this case?
                  if (typeof v == "string") return;

                  // format relation data
                  if (field.datasourceLink) {
                     field.datasourceLink
                        .fields((f) => !f.isConnection)
                        .forEach((f) => {
                           v[`${f.columnName}_ORIGIN`] = v[f.columnName];

                           v[f.columnName] = f.format(v, {
                              languageCode: baseView.languageCode,
                           });
                        });
                  }

                  // Keep ABObject to relation data
                  if (v && typeof v === "object")
                     v._object = field.datasourceLink;
               });

            // TODO
            // data[label + '_label'] = field.format(baseData);
         } else
            val = field.format(data, {
               languageCode: baseView.languageCode,
            });

         // Set value to report with every languages of label
         fieldLabels.forEach((label) => {
            if (val) result[label] = val;
            else if (!result[label]) result[label] = "";
         });

         // normalize child items
         if (data.data?.length) {
            result.data = result.data || [];

            (data.data || []).forEach((childItem, index) => {
               // add new data item
               result.data[index] = this.setReportValues(
                  childItem,
                  field,
                  fieldLabels,
                  multilinguageFields
               );
            });
         }

         return result;
      }

      async downloadImages(reportValues) {
         const images = {};
         const tasks = [];
         const addDownloadTask = (fieldImage, data = []) => {
            if (Array.isArray(data) == false) {
               data = [data];
            }
            data.forEach((d) => {
               const imageVal = fieldImage.format(d);

               if (imageVal && !images[imageVal]) {
                  tasks.push(
                     new Promise((resolve, reject) => {
                        const imgUrl = fieldImage.urlImage(imageVal); // `/opsportal/image/${this.application.name}/${imageVal}`;

                        jszip_utils__WEBPACK_IMPORTED_MODULE_3___default().getBinaryContent(
                           imgUrl,
                           (error, content) => {
                              if (error) return reject(error);

                              // store binary of image
                              images[imageVal] = content;

                              resolve();
                           }
                        );
                     })
                  );
               }

               // download images of child items
               addDownloadTask(fieldImage, d.data || []);
            });
         };

         this.view.datacollections
            .filter((dc) => dc?.datasource)
            .forEach((dc) => {
               const obj = dc.datasource;

               // let currCursor = dc.getCursor();

               // if (currCursor) {
               //    // Current cursor
               //    const treeCursor = dc.getCursor(true);

               //    currCursor = [this.AB.merge({}, currCursor, treeCursor)];
               // } // List of data
               // else currCursor = dc.getData();

               obj.fields((f) => f.key === "image").forEach((f) => {
                  addDownloadTask(f, reportValues[dc.label] || [reportValues]);
               });
            });

         await Promise.all(tasks);

         return images;
      }

      downloadTemplateFile() {
         const url = this.view.downloadUrl();

         return new Promise((resolve, reject) => {
            jszip_utils__WEBPACK_IMPORTED_MODULE_3___default().getBinaryContent(url, (error, content) => {
               if (error) return reject(error);

               resolve(content);
            });
         });
      }

      generateDocxFile(contentFile, data, images) {
         const summaries = {}; // { varName: sum number, ..., varName2: number2 }
         const zip = new (_jszip_min_js__WEBPACK_IMPORTED_MODULE_2___default())(contentFile);
         const doc = new (_docxtemplater_v3_0_12_min_js__WEBPACK_IMPORTED_MODULE_0___default())();
         const imageModule = new (_docxtemplater_image_module_v3_0_2_min_js__WEBPACK_IMPORTED_MODULE_1___default())({
            centered: false,
            getImage: (tagValue, tagName) => {
               // NOTE: .getImage of version 3.0.2 does not support async
               //       we can buy newer version to support it
               //       https://docxtemplater.com/modules/image/

               return images[tagValue] || "";
            },
            getSize: (imgBuffer, tagValue, tagName) => {
               const defaultVal = [300, 160];
               const baseView = this.view;
               const dc = baseView.datacollection;

               if (!dc) {
                  const dcs = baseView.datacollections;

                  if (dcs) {
                     dcs.forEach((dc) => {
                        let obj = dc.datasource;

                        if (!obj) return false;

                        // This is a query object
                        if (tagName.indexOf(".") > -1) {
                           let tagNames = tagName.split(".");

                           if (!obj.objects) return false; // not a query

                           obj = obj.objects((o) => o.label === tagNames[0])[0]; // Label of object

                           if (!obj) return false;

                           tagName = tagNames[1]; // Field name
                        }

                        const imageField = obj.fields(
                           (f) => f.columnName === tagName
                        )[0];

                        if (!imageField?.settings) return false;

                        if (
                           imageField.settings.useWidth &&
                           imageField.settings.imageWidth
                        )
                           defaultVal[0] = imageField.settings.imageWidth;

                        if (
                           imageField.settings.useHeight &&
                           imageField.settings.imageHeight
                        )
                           defaultVal[1] = imageField.settings.imageHeight;

                        return false;
                     });
                  }
               } else {
                  let obj = dc.datasource;

                  if (!obj) return defaultVal;

                  // This is a query object
                  if (tagName.indexOf(".") > -1) {
                     const tagNames = tagName.split(".");

                     obj = obj.objects((o) => o.label === tagNames[0])[0]; // Label of object

                     if (!obj) return defaultVal;

                     tagName = tagNames[1]; // Field name
                  }

                  const imageField = obj.fields(
                     (f) => f.columnName === tagName
                  )[0];

                  if (!imageField?.settings) return defaultVal;

                  if (
                     imageField.settings.useWidth &&
                     imageField.settings.imageWidth
                  )
                     defaultVal[0] = imageField.settings.imageWidth;

                  if (
                     imageField.settings.useHeight &&
                     imageField.settings.imageHeight
                  )
                     defaultVal[1] = imageField.settings.imageHeight;
               }
               // Find aspect ratio image dimensions
               try {
                  var img = new Uint8Array(imgBuffer);
                  var image = image_size__WEBPACK_IMPORTED_MODULE_4___default()(img);
                  var ratio = Math.min(
                     defaultVal[0] / image.width,
                     defaultVal[1] / image.height
                  );

                  return [image.width * ratio, image.height * ratio];
               } catch (err) {
                  // if invalid image, then should return 0, 0 sizes
                  return defaultVal;
               }
            },
            // getSize: function (imgBuffer, tagValue, tagName) {
            //    if (imgBuffer) {
            //       var maxWidth = 300;
            //       var maxHeight = 160;

            //       // Find aspect ratio image dimensions
            //       try {
            //          var image = sizeOf(imgBuffer);
            //          var ratio = Math.min(maxWidth / image.width, maxHeight / image.height);

            //          return [image.width * ratio, image.height * ratio];
            //       }
            //       // if invalid image, then should return 0, 0 sizes
            //       catch (err) {
            //          return [0, 0];
            //       }

            //    }
            //    else {
            //       return [0, 0];
            //    }
            // }
         });

         try {
            doc.attachModule(imageModule)
               .loadZip(zip)
               .setData(data)
               .setOptions({
                  parser: function (tag) {
                     return {
                        get: function (scope, context) {
                           // NOTE: AppBuilder custom filter : no return empty items
                           if (tag.indexOf("data|") === 0) {
                              const prop = (tag.split("|")[1] || "").trim();

                              return (scope["data"] || []).filter(function (
                                 item
                              ) {
                                 return item[prop] ? true : false;
                              });
                           }
                           // Mark number to add to a variable
                           else if (tag.indexOf("|$sum?") > -1) {
                              const prop = tag.split("|$sum?")[0];
                              const varName = tag.split("|$sum?")[1];

                              let number = scope[prop];

                              if (typeof number === "string")
                                 number = number.replace(
                                    /[^\d.]/g, // return only number and dot
                                    ""
                                 );

                              if (!summaries[varName]) summaries[varName] = 0.0;

                              summaries[varName] += parseFloat(number);

                              return scope[prop];
                           }
                           // Show sum value ^
                           else if (tag.indexOf("$sum?") === 0) {
                              const varName = tag.replace("$sum?", "");

                              return summaries[varName] || 0;
                           }
                           // // Sum number of .data (Grouped query)
                           // else if (tag.indexOf("$sum|") === 0) {
                           //    const prop = (
                           //       tag.split("|")[1] || ""
                           //    ).trim();

                           //    let sum = 0;
                           //    (scope["data"] || []).forEach(
                           //       (childItem) => {
                           //          if (!childItem[prop]) return;

                           //          let number = childItem[prop];
                           //          if (typeof number === "string") {
                           //             number = number.replace(
                           //                /[^\d.]/g, // return only number and dot
                           //                ""
                           //             );
                           //          }

                           //          try {
                           //             sum += parseFloat(
                           //                number || 0
                           //             );
                           //          } catch (e) {}
                           //       }
                           //    );

                           //    // Print number with commas
                           //    if (sum) {
                           //       sum = sum
                           //          .toString()
                           //          .replace(
                           //             /\B(?=(\d{3})+(?!\d))/g,
                           //             ","
                           //          );
                           //    }

                           //    return sum;
                           // }
                           // NOTE: AppBuilder custom filter of another data source
                           else if (tag.indexOf("$") === 0) {
                              const props = tag.replace("$", "").split("|");
                              const propSource = props[0].trim();
                              const propFilter = props[1].trim(); // column name of ABFieldConnect

                              if (!propSource || !propFilter) return "";

                              // Pull Index field of connect field
                              let indexColName;

                              const obj = scope._object;

                              if (obj) {
                                 const connectedField = obj.fields(
                                    (f) => f.columnName === propFilter
                                 )[0];

                                 if (connectedField) {
                                    const indexField =
                                       connectedField.indexField;

                                    indexColName = indexField
                                       ? indexField.columnName
                                       : null;
                                 }
                              }

                              let sourceVals = data[propSource];

                              if (sourceVals && !Array.isArray(sourceVals))
                                 sourceVals = [sourceVals];

                              const getVal = (data) =>
                                 data[`${indexColName}_ORIGIN`] || // Pull origin data to compare by custom index
                                 data[indexColName] ||
                                 data.id ||
                                 data;

                              return (sourceVals || []).filter(function (item) {
                                 // Pull data of parent to compare
                                 let comparer = scope[propFilter];

                                 if (Array.isArray(comparer))
                                    return (
                                       comparer.filter(
                                          (c) => getVal(c) === getVal(item)
                                       ).length > 0
                                    );
                                 else return getVal(item) === getVal(comparer);
                              });
                           }
                           // ์NOTE : Custom filter
                           else if (tag.indexOf("?") > -1) {
                              const result = scope;
                              const prop = tag.split("?")[0];
                              const condition = tag.split("?")[1];

                              if (prop && condition) {
                                 let data = scope[prop];

                                 if (data) {
                                    if (!Array.isArray(data)) data = [data];

                                    return data.filter((d) =>
                                       eval(condition.replace(/\./g, "d."))
                                    );
                                 }
                              }
                              return result;
                           } else if (tag === ".") return scope;
                           else return scope[tag];
                        },
                     };
                  },
               })
               .render(); // render the document
         } catch (error) {
            return error;
         }

         // Output the document using Data-URI
         const docxFile = doc.getZip().generate({
            type: "blob",
            mimeType:
               "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
         });

         return docxFile;
      }
   };
}


/***/ },

/***/ 91356
/*!********************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_docxBuilder/docxtemplater-image-module.v3.0.2.min.js ***!
  \********************************************************************************************************/
(module) {

(function(f){if(true){module.exports=f()}else // removed by dead control flow
{ var g; }})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=undefined;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=undefined;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";var DocUtils=require("docxtemplater").DocUtils;DocUtils.convertPixelsToEmus=function(pixel){return Math.round(pixel*9525)};module.exports=DocUtils},{docxtemplater:5}],2:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var DocUtils=require("./docUtils");var extensionRegex=/[^.]+\.([^.]+)/;var rels={getPrefix:function getPrefix(fileType){return fileType==="docx"?"word":"ppt"},getFileTypeName:function getFileTypeName(fileType){return fileType==="docx"?"document":"presentation"},getRelsFileName:function getRelsFileName(fileName){return fileName.replace(/^.*?([a-zA-Z0-9]+)\.xml$/,"$1")+".xml.rels"},getRelsFilePath:function getRelsFilePath(fileName,fileType){var relsFileName=rels.getRelsFileName(fileName);var prefix=fileType==="pptx"?"ppt/slides":"word";return prefix+"/_rels/"+relsFileName}};module.exports=function(){function ImgManager(zip,fileName,xmlDocuments,fileType){_classCallCheck(this,ImgManager);this.fileName=fileName;this.prefix=rels.getPrefix(fileType);this.zip=zip;this.xmlDocuments=xmlDocuments;this.fileTypeName=rels.getFileTypeName(fileType);this.mediaPrefix=fileType==="pptx"?"../media":"media";var relsFilePath=rels.getRelsFilePath(fileName,fileType);this.relsDoc=xmlDocuments[relsFilePath]||this.createEmptyRelsDoc(xmlDocuments,relsFilePath)}_createClass(ImgManager,[{key:"createEmptyRelsDoc",value:function createEmptyRelsDoc(xmlDocuments,relsFileName){var mainRels=this.prefix+"/_rels/"+this.fileTypeName+".xml.rels";var doc=xmlDocuments[mainRels];if(!doc){var err=new Error("Could not copy from empty relsdoc");err.properties={mainRels:mainRels,relsFileName:relsFileName,files:Object.keys(this.zip.files)};throw err}var relsDoc=DocUtils.str2xml(DocUtils.xml2str(doc));var relationships=relsDoc.getElementsByTagName("Relationships")[0];var relationshipChilds=relationships.getElementsByTagName("Relationship");for(var i=0,l=relationshipChilds.length;i<l;i++){relationships.removeChild(relationshipChilds[i])}xmlDocuments[relsFileName]=relsDoc;return relsDoc}},{key:"loadImageRels",value:function loadImageRels(){var iterable=this.relsDoc.getElementsByTagName("Relationship");return Array.prototype.reduce.call(iterable,function(max,relationship){var id=relationship.getAttribute("Id");if(/^rId[0-9]+$/.test(id)){return Math.max(max,parseInt(id.substr(3),10))}return max},0)}},{key:"addExtensionRels",value:function addExtensionRels(contentType,extension){var contentTypeDoc=this.xmlDocuments["[Content_Types].xml"];var defaultTags=contentTypeDoc.getElementsByTagName("Default");var extensionRegistered=Array.prototype.some.call(defaultTags,function(tag){return tag.getAttribute("Extension")===extension});if(extensionRegistered){return}var types=contentTypeDoc.getElementsByTagName("Types")[0];var newTag=contentTypeDoc.createElement("Default");newTag.namespaceURI=null;newTag.setAttribute("ContentType",contentType);newTag.setAttribute("Extension",extension);types.appendChild(newTag)}},{key:"addImageRels",value:function addImageRels(imageName,imageData,i){if(i==null){i=0}var realImageName=i===0?imageName:imageName+("("+i+")");var imagePath=this.prefix+"/media/"+realImageName;if(this.zip.files[imagePath]!=null){return this.addImageRels(imageName,imageData,i+1)}var image={name:imagePath,data:imageData,options:{binary:true}};this.zip.file(image.name,image.data,image.options);var extension=realImageName.replace(extensionRegex,"$1");this.addExtensionRels("image/"+extension,extension);var relationships=this.relsDoc.getElementsByTagName("Relationships")[0];var newTag=this.relsDoc.createElement("Relationship");newTag.namespaceURI=null;var maxRid=this.loadImageRels()+1;newTag.setAttribute("Id","rId"+maxRid);newTag.setAttribute("Type","http://schemas.openxmlformats.org/officeDocument/2006/relationships/image");newTag.setAttribute("Target",this.mediaPrefix+"/"+realImageName);relationships.appendChild(newTag);return maxRid}}]);return ImgManager}()},{"./docUtils":1}],3:[function(require,module,exports){"use strict";module.exports={getImageXml:function getImageXml(rId,size){return('<w:drawing>\n\t\t<wp:inline distT="0" distB="0" distL="0" distR="0">\n\t\t\t<wp:extent cx="'+size[0]+'" cy="'+size[1]+'"/>\n\t\t\t<wp:effectExtent l="0" t="0" r="0" b="0"/>\n\t\t\t<wp:docPr id="2" name="Image 2" descr="image"/>\n\t\t\t<wp:cNvGraphicFramePr>\n\t\t\t\t<a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/>\n\t\t\t</wp:cNvGraphicFramePr>\n\t\t\t<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">\n\t\t\t\t<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">\n\t\t\t\t\t<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">\n\t\t\t\t\t\t<pic:nvPicPr>\n\t\t\t\t\t\t\t<pic:cNvPr id="0" name="Picture 1" descr="image"/>\n\t\t\t\t\t\t\t<pic:cNvPicPr>\n\t\t\t\t\t\t\t\t<a:picLocks noChangeAspect="1" noChangeArrowheads="1"/>\n\t\t\t\t\t\t\t</pic:cNvPicPr>\n\t\t\t\t\t\t</pic:nvPicPr>\n\t\t\t\t\t\t<pic:blipFill>\n\t\t\t\t\t\t\t<a:blip r:embed="rId'+rId+'">\n\t\t\t\t\t\t\t\t<a:extLst>\n\t\t\t\t\t\t\t\t\t<a:ext uri="{28A0092B-C50C-407E-A947-70E740481C1C}">\n\t\t\t\t\t\t\t\t\t\t<a14:useLocalDpi xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" val="0"/>\n\t\t\t\t\t\t\t\t\t</a:ext>\n\t\t\t\t\t\t\t\t</a:extLst>\n\t\t\t\t\t\t\t</a:blip>\n\t\t\t\t\t\t\t<a:srcRect/>\n\t\t\t\t\t\t\t<a:stretch>\n\t\t\t\t\t\t\t\t<a:fillRect/>\n\t\t\t\t\t\t\t</a:stretch>\n\t\t\t\t\t\t</pic:blipFill>\n\t\t\t\t\t\t<pic:spPr bwMode="auto">\n\t\t\t\t\t\t\t<a:xfrm>\n\t\t\t\t\t\t\t\t<a:off x="0" y="0"/>\n\t\t\t\t\t\t\t\t<a:ext cx="'+size[0]+'" cy="'+size[1]+'"/>\n\t\t\t\t\t\t\t</a:xfrm>\n\t\t\t\t\t\t\t<a:prstGeom prst="rect">\n\t\t\t\t\t\t\t\t<a:avLst/>\n\t\t\t\t\t\t\t</a:prstGeom>\n\t\t\t\t\t\t\t<a:noFill/>\n\t\t\t\t\t\t\t<a:ln>\n\t\t\t\t\t\t\t\t<a:noFill/>\n\t\t\t\t\t\t\t</a:ln>\n\t\t\t\t\t\t</pic:spPr>\n\t\t\t\t\t</pic:pic>\n\t\t\t\t</a:graphicData>\n\t\t\t</a:graphic>\n\t\t</wp:inline>\n\t</w:drawing>\n\t\t').replace(/\t|\n/g,"")},getImageXmlCentered:function getImageXmlCentered(rId,size){return('<w:p>\n\t\t\t<w:pPr>\n\t\t\t\t<w:jc w:val="center"/>\n\t\t\t</w:pPr>\n\t\t\t<w:r>\n\t\t\t\t<w:rPr/>\n\t\t\t\t<w:drawing>\n\t\t\t\t\t<wp:inline distT="0" distB="0" distL="0" distR="0">\n\t\t\t\t\t<wp:extent cx="'+size[0]+'" cy="'+size[1]+'"/>\n\t\t\t\t\t<wp:docPr id="0" name="Picture" descr=""/>\n\t\t\t\t\t<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">\n\t\t\t\t\t\t<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">\n\t\t\t\t\t\t<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">\n\t\t\t\t\t\t\t<pic:nvPicPr>\n\t\t\t\t\t\t\t<pic:cNvPr id="0" name="Picture" descr=""/>\n\t\t\t\t\t\t\t<pic:cNvPicPr>\n\t\t\t\t\t\t\t\t<a:picLocks noChangeAspect="1" noChangeArrowheads="1"/>\n\t\t\t\t\t\t\t</pic:cNvPicPr>\n\t\t\t\t\t\t\t</pic:nvPicPr>\n\t\t\t\t\t\t\t<pic:blipFill>\n\t\t\t\t\t\t\t<a:blip r:embed="rId'+rId+'"/>\n\t\t\t\t\t\t\t<a:stretch>\n\t\t\t\t\t\t\t\t<a:fillRect/>\n\t\t\t\t\t\t\t</a:stretch>\n\t\t\t\t\t\t\t</pic:blipFill>\n\t\t\t\t\t\t\t<pic:spPr bwMode="auto">\n\t\t\t\t\t\t\t<a:xfrm>\n\t\t\t\t\t\t\t\t<a:off x="0" y="0"/>\n\t\t\t\t\t\t\t\t<a:ext cx="'+size[0]+'" cy="'+size[1]+'"/>\n\t\t\t\t\t\t\t</a:xfrm>\n\t\t\t\t\t\t\t<a:prstGeom prst="rect">\n\t\t\t\t\t\t\t\t<a:avLst/>\n\t\t\t\t\t\t\t</a:prstGeom>\n\t\t\t\t\t\t\t<a:noFill/>\n\t\t\t\t\t\t\t<a:ln w="9525">\n\t\t\t\t\t\t\t\t<a:noFill/>\n\t\t\t\t\t\t\t\t<a:miter lim="800000"/>\n\t\t\t\t\t\t\t\t<a:headEnd/>\n\t\t\t\t\t\t\t\t<a:tailEnd/>\n\t\t\t\t\t\t\t</a:ln>\n\t\t\t\t\t\t\t</pic:spPr>\n\t\t\t\t\t\t</pic:pic>\n\t\t\t\t\t\t</a:graphicData>\n\t\t\t\t\t</a:graphic>\n\t\t\t\t\t</wp:inline>\n\t\t\t\t</w:drawing>\n\t\t\t</w:r>\n\t\t</w:p>\n\t\t').replace(/\t|\n/g,"")},getPptxImageXml:function getPptxImageXml(rId,size,offset){return('<p:pic>\n\t\t\t<p:nvPicPr>\n\t\t\t\t<p:cNvPr id="6" name="Picture 2"/>\n\t\t\t\t<p:cNvPicPr>\n\t\t\t\t\t<a:picLocks noChangeAspect="1" noChangeArrowheads="1"/>\n\t\t\t\t</p:cNvPicPr>\n\t\t\t\t<p:nvPr/>\n\t\t\t</p:nvPicPr>\n\t\t\t<p:blipFill>\n\t\t\t\t<a:blip r:embed="rId'+rId+'" cstate="print">\n\t\t\t\t\t<a:extLst>\n\t\t\t\t\t\t<a:ext uri="{28A0092B-C50C-407E-A947-70E740481C1C}">\n\t\t\t\t\t\t\t<a14:useLocalDpi xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" val="0"/>\n\t\t\t\t\t\t</a:ext>\n\t\t\t\t\t</a:extLst>\n\t\t\t\t</a:blip>\n\t\t\t\t<a:srcRect/>\n\t\t\t\t<a:stretch>\n\t\t\t\t\t<a:fillRect/>\n\t\t\t\t</a:stretch>\n\t\t\t</p:blipFill>\n\t\t\t<p:spPr bwMode="auto">\n\t\t\t\t<a:xfrm>\n\t\t\t\t\t<a:off x="'+offset.x+'" y="'+offset.y+'"/>\n\t\t\t\t\t<a:ext cx="'+size[0]+'" cy="'+size[1]+'"/>\n\t\t\t\t</a:xfrm>\n\t\t\t\t<a:prstGeom prst="rect">\n\t\t\t\t\t<a:avLst/>\n\t\t\t\t</a:prstGeom>\n\t\t\t\t<a:noFill/>\n\t\t\t\t<a:ln>\n\t\t\t\t\t<a:noFill/>\n\t\t\t\t</a:ln>\n\t\t\t\t<a:effectLst/>\n\t\t\t\t<a:extLst>\n\t\t\t\t\t<a:ext uri="{909E8E84-426E-40DD-AFC4-6F175D3DCCD1}">\n\t\t\t\t\t\t<a14:hiddenFill xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main">\n\t\t\t\t\t\t\t<a:solidFill>\n\t\t\t\t\t\t\t\t<a:schemeClr val="accent1"/>\n\t\t\t\t\t\t\t</a:solidFill>\n\t\t\t\t\t\t</a14:hiddenFill>\n\t\t\t\t\t</a:ext>\n\t\t\t\t\t<a:ext uri="{91240B29-F687-4F45-9708-019B960494DF}">\n\t\t\t\t\t\t<a14:hiddenLine xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main" w="9525">\n\t\t\t\t\t\t\t<a:solidFill>\n\t\t\t\t\t\t\t\t<a:schemeClr val="tx1"/>\n\t\t\t\t\t\t\t</a:solidFill>\n\t\t\t\t\t\t\t<a:miter lim="800000"/>\n\t\t\t\t\t\t\t<a:headEnd/>\n\t\t\t\t\t\t\t<a:tailEnd/>\n\t\t\t\t\t\t</a14:hiddenLine>\n\t\t\t\t\t</a:ext>\n\t\t\t\t\t<a:ext uri="{AF507438-7753-43E0-B8FC-AC1667EBCBE1}">\n\t\t\t\t\t\t<a14:hiddenEffects xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main">\n\t\t\t\t\t\t\t<a:effectLst>\n\t\t\t\t\t\t\t\t<a:outerShdw dist="35921" dir="2700000" algn="ctr" rotWithShape="0">\n\t\t\t\t\t\t\t\t\t<a:schemeClr val="bg2"/>\n\t\t\t\t\t\t\t\t</a:outerShdw>\n\t\t\t\t\t\t\t</a:effectLst>\n\t\t\t\t\t\t</a14:hiddenEffects>\n\t\t\t\t\t</a:ext>\n\t\t\t\t</a:extLst>\n\t\t\t</p:spPr>\n\t\t</p:pic>\n\t\t').replace(/\t|\n/g,"")}}},{}],4:[function(require,module,exports){"use strict";function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var memoize=require("./memoize");var DOMParser=require("xmldom").DOMParser;var XMLSerializer=require("xmldom").XMLSerializer;var Errors=require("./errors");var DocUtils={};function parser(tag){return _defineProperty({},"get",function get(scope){if(tag==="."){return scope}return scope[tag]})}DocUtils.defaults={nullGetter:function nullGetter(part){if(!part.module){return"undefined"}if(part.module==="rawxml"){return""}return""},parser:memoize(parser),fileType:"docx",delimiters:{start:"{",end:"}"}};DocUtils.mergeObjects=function(){var resObj={};var obj=void 0,keys=void 0;for(var i=0;i<arguments.length;i+=1){obj=arguments[i];keys=Object.keys(obj);for(var j=0;j<keys.length;j+=1){resObj[keys[j]]=obj[keys[j]]}}return resObj};DocUtils.xml2str=function(xmlNode){var a=new XMLSerializer;return a.serializeToString(xmlNode)};DocUtils.decodeUtf8=function(s){try{if(s===undefined){return undefined}return decodeURIComponent(escape(DocUtils.convertSpaces(s)))}catch(e){var err=new Error("End");err.properties.data=s;err.properties.explanation="Could not decode string to UTF8";throw err}};DocUtils.encodeUtf8=function(s){return unescape(encodeURIComponent(s))};DocUtils.str2xml=function(str,errorHandler){var parser=new DOMParser({errorHandler:errorHandler});return parser.parseFromString(str,"text/xml")};DocUtils.charMap={"&":"&amp;","'":"&apos;","<":"&lt;",">":"&gt;"};var regexStripRegexp=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;DocUtils.escapeRegExp=function(str){return str.replace(regexStripRegexp,"\\$&")};DocUtils.charMapRegexes=Object.keys(DocUtils.charMap).map(function(endChar){var startChar=DocUtils.charMap[endChar];return{rstart:new RegExp(DocUtils.escapeRegExp(startChar),"g"),rend:new RegExp(DocUtils.escapeRegExp(endChar),"g"),start:startChar,end:endChar}});DocUtils.wordToUtf8=function(string){var r=void 0;for(var i=0,l=DocUtils.charMapRegexes.length;i<l;i++){r=DocUtils.charMapRegexes[i];string=string.replace(r.rstart,r.end)}return string};DocUtils.utf8ToWord=function(string){if(typeof string!=="string"){string=string.toString()}var r=void 0;for(var i=0,l=DocUtils.charMapRegexes.length;i<l;i++){r=DocUtils.charMapRegexes[i];string=string.replace(r.rend,r.start)}return string};DocUtils.cloneDeep=function(obj){return JSON.parse(JSON.stringify(obj))};DocUtils.concatArrays=function(arrays){return arrays.reduce(function(result,array){Array.prototype.push.apply(result,array);return result},[])};var spaceRegexp=new RegExp(String.fromCharCode(160),"g");DocUtils.convertSpaces=function(s){return s.replace(spaceRegexp," ")};DocUtils.pregMatchAll=function(regex,content){var matchArray=[];var match=void 0;while((match=regex.exec(content))!=null){matchArray.push({array:match,offset:match.index})}return matchArray};DocUtils.sizeOfObject=function(obj){return Object.keys(obj).length};function throwXmlTagNotFound(options){var err=new Errors.XTTemplateError("No tag '"+options.element+"' was found at the "+options.position);err.properties={id:"no_xml_tag_found_at_"+options.position,explanation:"No tag '"+options.element+"' was found at the "+options.position,parsed:options.parsed,index:options.index,element:options.element};throw err}DocUtils.getRight=function(parsed,element,index){for(var i=index,l=parsed.length;i<l;i++){var part=parsed[i];if(part.value==="</"+element+">"){return i}}throwXmlTagNotFound({position:"right",element:element,parsed:parsed,index:index})};DocUtils.getLeft=function(parsed,element,index){var parts=parsed.slice(0,index);for(var i=parts.length-1;i>=0;i--){var part=parts[i];if(part.value.indexOf("<"+element)===0&&[">"," "].indexOf(part.value[element.length+1])!==-1){return i}}throwXmlTagNotFound({position:"left",element:element,parsed:parsed,index:index})};module.exports=DocUtils;DocUtils.traits=require("./traits");DocUtils.moduleWrapper=require("./module-wrapper")},{"./errors":6,"./memoize":9,"./module-wrapper":11,"./traits":20,xmldom:23}],5:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var DocUtils=require("./doc-utils");var wrapper=DocUtils.moduleWrapper;var Docxtemplater=function(){function Docxtemplater(){_classCallCheck(this,Docxtemplater);if(arguments.length>0){throw new Error("The constructor with parameters have been removed in docxtemplater 3.0, please check the upgrade guide.")}this.compiled={};this.modules=[];this.setOptions({})}_createClass(Docxtemplater,[{key:"attachModule",value:function attachModule(module){this.modules.push(wrapper(module));return this}},{key:"setOptions",value:function setOptions(options){var _this=this;this.options=options;Object.keys(DocUtils.defaults).forEach(function(key){var defaultValue=DocUtils.defaults[key];_this[key]=_this.options[key]!=null?_this.options[key]:defaultValue});if(this.fileType==="docx"||this.fileType==="pptx"){this.fileTypeConfig=Docxtemplater.FileTypeConfig[this.fileType]}this.fileTypeConfig=this.options.fileTypeConfig||this.fileTypeConfig;this.options.xmlFileNames=[];return this}},{key:"loadZip",value:function loadZip(zip){if(zip.loadAsync){throw new Error("Docxtemplater doesn't handle JSZip version >=3, see changelog")}this.zip=zip;return this}},{key:"compileFile",value:function compileFile(fileName){var currentFile=this.createTemplateClass(fileName);currentFile.parse();this.compiled[fileName]=currentFile}},{key:"compile",value:function compile(){this.templatedFiles=this.fileTypeConfig.getTemplatedFiles(this.zip)}},{key:"render",value:function render(){var _this2=this;this.modules=this.fileTypeConfig.baseModules.map(function(moduleFunction){return moduleFunction()}).concat(this.modules);this.options=this.modules.reduce(function(options,module){return module.optionsTransformer(options,_this2)},this.options);this.xmlDocuments=this.options.xmlFileNames.reduce(function(xmlDocuments,fileName){var content=_this2.zip.files[fileName].asText();xmlDocuments[fileName]=DocUtils.str2xml(content);return xmlDocuments},{});this.modules.forEach(function(module){module.set({zip:_this2.zip,xmlDocuments:_this2.xmlDocuments,data:_this2.data})});this.compile();this.modules.forEach(function(module){module.set({compiled:_this2.compiled})});this.templatedFiles.forEach(function(fileName){if(_this2.zip.files[fileName]!=null){_this2.compileFile(fileName)}});this.mapper=this.modules.reduce(function(value,module){return module.getRenderedMap(value)},{});Object.keys(this.mapper).forEach(function(to){var mapped=_this2.mapper[to];var from=mapped.from;var currentFile=_this2.compiled[from];currentFile.setTags(mapped.data);currentFile.render();_this2.zip.file(to,currentFile.content)});Object.keys(this.xmlDocuments).forEach(function(fileName){_this2.zip.remove(fileName);var content=DocUtils.encodeUtf8(DocUtils.xml2str(_this2.xmlDocuments[fileName]));return _this2.zip.file(fileName,content,{})});return this}},{key:"setData",value:function setData(data){this.data=data;return this}},{key:"getZip",value:function getZip(){return this.zip}},{key:"createTemplateClass",value:function createTemplateClass(path){var usedData=this.zip.files[path].asText();return this.createTemplateClassFromContent(usedData,path)}},{key:"createTemplateClassFromContent",value:function createTemplateClassFromContent(content,filePath){var _this3=this;var xmltOptions={filePath:filePath};Object.keys(DocUtils.defaults).forEach(function(key){xmltOptions[key]=_this3[key]});xmltOptions.fileTypeConfig=this.fileTypeConfig;xmltOptions.modules=this.modules;return new Docxtemplater.XmlTemplater(content,xmltOptions)}},{key:"getFullText",value:function getFullText(path){return this.createTemplateClass(path||this.fileTypeConfig.textPath).getFullText()}},{key:"getTemplatedFiles",value:function getTemplatedFiles(){this.compile();return this.templatedFiles}}]);return Docxtemplater}();Docxtemplater.DocUtils=require("./doc-utils");Docxtemplater.Errors=require("./errors");Docxtemplater.XmlTemplater=require("./xml-templater");Docxtemplater.FileTypeConfig=require("./file-type-config");Docxtemplater.XmlMatcher=require("./xml-matcher");module.exports=Docxtemplater},{"./doc-utils":4,"./errors":6,"./file-type-config":7,"./xml-matcher":21,"./xml-templater":22}],6:[function(require,module,exports){"use strict";function XTError(message){this.name="GenericError";this.message=message;this.stack=new Error(message).stack}XTError.prototype=Error.prototype;function XTTemplateError(message){this.name="TemplateError";this.message=message;this.stack=new Error(message).stack}XTTemplateError.prototype=new XTError;function XTScopeParserError(message){this.name="ScopeParserError";this.message=message;this.stack=new Error(message).stack}XTScopeParserError.prototype=new XTError;function XTInternalError(message){this.name="InternalError";this.properties={explanation:"InternalError"};this.message=message;this.stack=new Error(message).stack}XTInternalError.prototype=new XTError;module.exports={XTError:XTError,XTTemplateError:XTTemplateError,XTInternalError:XTInternalError,XTScopeParserError:XTScopeParserError}},{}],7:[function(require,module,exports){"use strict";var loopModule=require("./modules/loop");var spacePreserveModule=require("./modules/space-preserve");var rawXmlModule=require("./modules/rawxml");var expandPairTrait=require("./modules/expand-pair-trait");var render=require("./modules/render");var PptXFileTypeConfig={getTemplatedFiles:function getTemplatedFiles(zip){var slideTemplates=zip.file(/ppt\/(slides|slideMasters)\/(slide|slideMaster)\d+\.xml/).map(function(file){return file.name});return slideTemplates.concat(["ppt/presentation.xml"])},textPath:"ppt/slides/slide1.xml",tagsXmlTextArray:["a:t","m:t"],tagsXmlLexedArray:["p:sp","a:tc","a:tr","a:table","a:p","a:r"],tagRawXml:"p:sp",tagTextXml:"a:t",baseModules:[render,expandPairTrait,rawXmlModule,loopModule]};var DocXFileTypeConfig={getTemplatedFiles:function getTemplatedFiles(zip){var slideTemplates=zip.file(/word\/(header|footer)\d+\.xml/).map(function(file){return file.name});return slideTemplates.concat(["word/document.xml"])},textPath:"word/document.xml",tagsXmlTextArray:["w:t","m:t"],tagsXmlLexedArray:["w:tc","w:tr","w:table","w:p","w:r"],tagRawXml:"w:p",tagTextXml:"w:t",baseModules:[render,spacePreserveModule,expandPairTrait,rawXmlModule,loopModule]};module.exports={docx:DocXFileTypeConfig,pptx:PptXFileTypeConfig}},{"./modules/expand-pair-trait":12,"./modules/loop":13,"./modules/rawxml":14,"./modules/render":15,"./modules/space-preserve":16}],8:[function(require,module,exports){"use strict";var Errors=require("./errors");var DocUtils=require("./doc-utils");function inRange(range,match){return range[0]<=match.offset&&match.offset<range[1]}function updateInTextTag(part,inTextTag){if(part.type==="tag"&&part.position==="start"&&part.text){if(inTextTag){throw new Error("Malformed xml : Already in text tag")}return true}if(part.type==="tag"&&part.position==="end"&&part.text){if(!inTextTag){throw new Error("Malformed xml : Already not in text tag")}return false}return inTextTag}function offsetSort(a,b){return a.offset-b.offset}function getTag(tag){var start=1;if(tag[1]==="/"){start=2}var index=tag.indexOf(" ");var end=index===-1?tag.length-1:index;return{tag:tag.slice(start,end),position:start===1?"start":"end"}}function tagMatcher(content,textMatchArray,othersMatchArray){var cursor=0;var contentLength=content.length;var allMatches=DocUtils.concatArrays([textMatchArray.map(function(tag){return{tag:tag,text:true}}),othersMatchArray.map(function(tag){return{tag:tag,text:false}})]).reduce(function(allMatches,t){allMatches[t.tag]=t.text;return allMatches},{});var totalMatches=[];while(cursor<contentLength){cursor=content.indexOf("<",cursor);if(cursor===-1){break}var offset=cursor;cursor=content.indexOf(">",cursor);var tagText=content.slice(offset,cursor+1);var _getTag=getTag(tagText),tag=_getTag.tag,position=_getTag.position;var text=allMatches[tag];if(text==null){continue}totalMatches.push({type:"tag",position:position,text:text,offset:offset,value:tagText})}return totalMatches}function throwUnopenedTagException(options){var err=new Errors.XTTemplateError("Unopened tag");err.properties={xtag:options.xtag.split(" ")[0],id:"unopened_tag",context:options.xtag,explanation:"The tag beginning with '"+options.xtag.substr(0,10)+"' is unclosed"};throw err}function throwUnclosedTagException(options){var err=new Errors.XTTemplateError("Unclosed tag");err.properties={xtag:options.xtag.split(" ")[0].substr(1),id:"unclosed_tag",context:options.xtag,explanation:"The tag beginning with '"+options.xtag.substr(0,10)+"' is unclosed"};throw err}function assertDelimiterOrdered(delimiterMatches,fullText){var inDelimiter=false;var lastDelimiterMatch={offset:0};var xtag=void 0;delimiterMatches.forEach(function(delimiterMatch){xtag=fullText.substr(lastDelimiterMatch.offset,delimiterMatch.offset-lastDelimiterMatch.offset);if(delimiterMatch.position==="start"&&inDelimiter||delimiterMatch.position==="end"&&!inDelimiter){if(delimiterMatch.position==="start"){throwUnclosedTagException({xtag:xtag})}else{throwUnopenedTagException({xtag:xtag})}}inDelimiter=!inDelimiter;lastDelimiterMatch=delimiterMatch});var delimiterMatch={offset:fullText.length};xtag=fullText.substr(lastDelimiterMatch.offset,delimiterMatch.offset-lastDelimiterMatch.offset);if(inDelimiter){throwUnclosedTagException({xtag:xtag})}}function getAllIndexes(arr,val,position){var indexes=[];var offset=-1;do{offset=arr.indexOf(val,offset+1);if(offset!==-1){indexes.push({offset:offset,position:position})}}while(offset!==-1);return indexes}function Reader(innerContentParts){var _this=this;this.innerContentParts=innerContentParts;this.full="";this.parseDelimiters=function(delimiters){_this.full=_this.innerContentParts.join("");var offset=0;_this.ranges=_this.innerContentParts.map(function(part){offset+=part.length;return offset-part.length});var delimiterMatches=DocUtils.concatArrays([getAllIndexes(_this.full,delimiters.start,"start"),getAllIndexes(_this.full,delimiters.end,"end")]).sort(offsetSort);assertDelimiterOrdered(delimiterMatches,_this.full);var delimiterLength={start:delimiters.start.length,end:delimiters.end.length};var cutNext=0;var delimiterIndex=0;_this.parsed=_this.ranges.map(function(offset,i){var range=[offset,offset+this.innerContentParts[i].length];var partContent=this.innerContentParts[i];var delimitersInOffset=[];while(delimiterIndex<delimiterMatches.length&&inRange(range,delimiterMatches[delimiterIndex])){delimitersInOffset.push(delimiterMatches[delimiterIndex]);delimiterIndex++}var parts=[];var cursor=0;if(cutNext>0){cursor=cutNext;cutNext=0}delimitersInOffset.forEach(function(delimiterInOffset){var value=partContent.substr(cursor,delimiterInOffset.offset-offset-cursor);if(value.length>0){parts.push({type:"content",value:value})}parts.push({type:"delimiter",position:delimiterInOffset.position});cursor=delimiterInOffset.offset-offset+delimiterLength[delimiterInOffset.position]});cutNext=cursor-partContent.length;var value=partContent.substr(cursor);if(value.length>0){parts.push({type:"content",value:value})}return parts},_this)}}module.exports={parse:function parse(xmlparsed,delimiters){var inTextTag=false;var innerContentParts=[];xmlparsed.forEach(function(part){inTextTag=updateInTextTag(part,inTextTag);if(inTextTag&&part.type==="content"){innerContentParts.push(part.value)}});var reader=new Reader(innerContentParts);reader.parseDelimiters(delimiters);var newArray=[];var index=0;xmlparsed.forEach(function(part){inTextTag=updateInTextTag(part,inTextTag);if(part.type==="content"){part.position=inTextTag?"insidetag":"outsidetag"}if(inTextTag&&part.type==="content"){Array.prototype.push.apply(newArray,reader.parsed[index].map(function(p){if(p.type==="content"){p.position="insidetag"}return p}));index++}else{newArray.push(part)}});return newArray},xmlparse:function xmlparse(content,xmltags){var matches=tagMatcher(content,xmltags.text,xmltags.other);var cursor=0;var parsed=matches.reduce(function(parsed,match){var value=content.substr(cursor,match.offset-cursor);if(value.length>0){parsed.push({type:"content",value:value})}cursor=match.offset+match.value.length;delete match.offset;if(match.value.length>0){parsed.push(match)}return parsed},[]);var value=content.substr(cursor);if(value.length>0){parsed.push({type:"content",value:value})}return parsed}}},{"./doc-utils":4,"./errors":6}],9:[function(require,module,exports){"use strict";function memoize(func){var stringifyJson=JSON.stringify,cache={};function cachedfun(){var hash=stringifyJson(arguments);return hash in cache?cache[hash]:cache[hash]=func.apply(this,arguments)}return cachedfun}module.exports=memoize},{}],10:[function(require,module,exports){"use strict";function getMinFromArrays(arrays,state){var minIndex=-1;for(var i=0,l=arrays.length;i<l;i++){if(state[i]>=arrays[i].length){continue}if(minIndex===-1||arrays[i][state[i]].offset<arrays[minIndex][state[minIndex]].offset){minIndex=i}}if(minIndex===-1){throw new Error("minIndex negative")}return minIndex}module.exports=function(arrays){var totalLength=arrays.reduce(function(sum,array){return sum+array.length},0);arrays=arrays.filter(function(array){return array.length>0});var resultArray=new Array(totalLength);var state=arrays.map(function(){return 0});var i=0;while(i<=totalLength-1){var arrayIndex=getMinFromArrays(arrays,state);resultArray[i]=arrays[arrayIndex][state[arrayIndex]];state[arrayIndex]++;i++}return resultArray}},{}],11:[function(require,module,exports){"use strict";function emptyFun(){}function identity(i){return i}module.exports=function(module){var defaults={set:emptyFun,parse:emptyFun,render:emptyFun,getTraits:emptyFun,optionsTransformer:identity,getRenderedMap:identity,postparse:identity};if(Object.keys(defaults).every(function(key){return!module[key]})){throw new Error("This module cannot be wrapped, because it doesn't define any of the necessary functions")}Object.keys(defaults).forEach(function(key){module[key]=module[key]||defaults[key]});return module}},{}],12:[function(require,module,exports){"use strict";var traitName="expandPair";var mergeSort=require("../mergesort");var DocUtils=require("../doc-utils");var wrapper=require("../module-wrapper");var _require=require("../traits"),getExpandToDefault=_require.getExpandToDefault;var Errors=require("../errors");function throwUnmatchedLoopException(options){var location=options.location;var t=location==="start"?"unclosed":"unopened";var T=location==="start"?"Unclosed":"Unopened";var err=new Errors.XTTemplateError(T+" loop");var tag=options.part.value;err.properties={id:t+"_loop",explanation:"The loop with tag "+tag+" is "+t,xtag:tag};throw err}function throwClosingTagNotMatchOpeningTag(options){var tags=options.tags;var err=new Errors.XTTemplateError("Closing tag does not match opening tag");err.properties={id:"closing_tag_does_not_match_opening_tag",explanation:'The tag "'+tags[0].value+'" is closed by the tag "'+tags[1].value+'"',openingtag:tags[0].value,closingtag:tags[1].value};throw err}function getOpenCountChange(part){switch(part.location){case"start":return 1;case"end":return-1;default:throw new Error("Location should be one of 'start' or 'end' (given : "+part.location+")")}}function getPairs(traits){if(traits.length===0){return[]}var countOpen=1;var firstTrait=traits[0];for(var i=1;i<traits.length;i++){var currentTrait=traits[i];countOpen+=getOpenCountChange(currentTrait.part);if(countOpen===0){if(currentTrait.part.value!==firstTrait.part.value&&currentTrait.part.value!==""){throwClosingTagNotMatchOpeningTag({tags:[firstTrait.part,currentTrait.part]})}var outer=getPairs(traits.slice(i+1));
return[[firstTrait,currentTrait]].concat(outer)}}var part=firstTrait.part;throwUnmatchedLoopException({part:part,location:part.location})}var expandPairTrait={name:"ExpandPairTrait",postparse:function postparse(parsed,_ref){var getTraits=_ref.getTraits,_postparse=_ref.postparse;var traits=getTraits(traitName,parsed);traits=traits.map(function(trait){return trait||[]});traits=mergeSort(traits);var pairs=getPairs(traits);var expandedPairs=pairs.map(function(pair){var expandTo=pair[0].part.expandTo;if(expandTo==="auto"){expandTo=getExpandToDefault(parsed.slice(pair[0].offset,pair[1].offset))}if(!expandTo){return[pair[0].offset,pair[1].offset]}var left=DocUtils.getLeft(parsed,expandTo,pair[0].offset);var right=DocUtils.getRight(parsed,expandTo,pair[1].offset);return[left,right]});var currentPairIndex=0;var innerParts=void 0;return parsed.reduce(function(newParsed,part,i){var inPair=currentPairIndex<pairs.length&&expandedPairs[currentPairIndex][0]<=i;var pair=pairs[currentPairIndex];var expandedPair=expandedPairs[currentPairIndex];if(!inPair){newParsed.push(part);return newParsed}if(expandedPair[0]===i){innerParts=[]}if(pair[0].offset!==i&&pair[1].offset!==i){innerParts.push(part)}if(expandedPair[1]===i){var basePart=parsed[pair[0].offset];delete basePart.location;delete basePart.expandTo;basePart.subparsed=_postparse(innerParts);newParsed.push(basePart);currentPairIndex++}return newParsed},[])}};module.exports=function(){return wrapper(expandPairTrait)}},{"../doc-utils":4,"../errors":6,"../mergesort":10,"../module-wrapper":11,"../traits":20}],13:[function(require,module,exports){"use strict";var DocUtils=require("../doc-utils");var dashInnerRegex=/^-([^\s]+)\s(.+)$/;var wrapper=require("../module-wrapper");var moduleName="loop";var loopModule={name:"LoopModule",parse:function parse(placeHolderContent){var module=moduleName;var type="placeholder";if(placeHolderContent[0]==="#"){return{type:type,value:placeHolderContent.substr(1),expandTo:"auto",module:module,location:"start",inverted:false}}if(placeHolderContent[0]==="^"){return{type:type,value:placeHolderContent.substr(1),expandTo:"auto",module:module,location:"start",inverted:true}}if(placeHolderContent[0]==="/"){return{type:type,value:placeHolderContent.substr(1),module:module,location:"end"}}if(placeHolderContent[0]==="-"){var value=placeHolderContent.replace(dashInnerRegex,"$2");var expandTo=placeHolderContent.replace(dashInnerRegex,"$1");return{type:type,value:value,expandTo:expandTo,module:module,location:"start",inverted:false}}return null},getTraits:function getTraits(traitName,parsed){if(traitName!=="expandPair"){return}return parsed.reduce(function(tags,part,offset){if(part.type==="placeholder"&&part.module===moduleName){tags.push({part:part,offset:offset})}return tags},[])},render:function render(part,options){if(!part.type==="placeholder"||part.module!==moduleName){return null}var totalValue=[];function loopOver(scope){var scopeManager=options.scopeManager.createSubScopeManager(scope,part.value);totalValue.push(options.render(DocUtils.mergeObjects({},options,{compiled:part.subparsed,tags:{},scopeManager:scopeManager})))}options.scopeManager.loopOver(part.value,loopOver,part.inverted);return{value:totalValue.join("")}}};module.exports=function(){return wrapper(loopModule)}},{"../doc-utils":4,"../module-wrapper":11}],14:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var DocUtils=require("../doc-utils");var Errors=require("../errors");var moduleName="rawxml";var wrapper=require("../module-wrapper");function throwRawTagShouldBeOnlyTextInParagraph(options){var err=new Errors.XTTemplateError("Raw tag should be the only text in paragraph");var tag=options.part.value;err.properties={id:"raw_xml_tag_should_be_only_text_in_paragraph",explanation:"The tag "+tag,xtag:options.part.value,paragraphParts:options.paragraphParts};throw err}function getInner(_ref){var part=_ref.part,left=_ref.left,right=_ref.right,postparsed=_ref.postparsed,index=_ref.index;var paragraphParts=postparsed.slice(left+1,right);paragraphParts.forEach(function(p,i){if(i===index-left-1){return}if(p.type==="placeholder"||p.type==="content"&&p.position==="insidetag"){throwRawTagShouldBeOnlyTextInParagraph({paragraphParts:paragraphParts,part:part})}});return part}var RawXmlModule=function(){function RawXmlModule(){_classCallCheck(this,RawXmlModule);this.name="RawXmlModule"}_createClass(RawXmlModule,[{key:"optionsTransformer",value:function optionsTransformer(options,docxtemplater){this.fileTypeConfig=docxtemplater.fileTypeConfig;return options}},{key:"parse",value:function parse(placeHolderContent){var type="placeholder";if(placeHolderContent[0]!=="@"){return null}return{type:type,value:placeHolderContent.substr(1),module:moduleName}}},{key:"postparse",value:function postparse(parsed){return DocUtils.traits.expandToOne(parsed,{moduleName:moduleName,getInner:getInner,expandTo:this.fileTypeConfig.tagRawXml})}},{key:"render",value:function render(part,options){if(part.module!==moduleName){return null}var value=options.scopeManager.getValue(part.value);if(value==null){value=options.nullGetter(part)}return{value:value}}}]);return RawXmlModule}();module.exports=function(){return wrapper(new RawXmlModule)}},{"../doc-utils":4,"../errors":6,"../module-wrapper":11}],15:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var wrapper=require("../module-wrapper");var Render=function(){function Render(){_classCallCheck(this,Render);this.name="Render"}_createClass(Render,[{key:"set",value:function set(obj){if(obj.compiled){this.compiled=obj.compiled}if(obj.data!=null){this.data=obj.data}}},{key:"getRenderedMap",value:function getRenderedMap(mapper){var _this=this;return Object.keys(this.compiled).reduce(function(mapper,from){mapper[from]={from:from,data:_this.data};return mapper},mapper)}}]);return Render}();module.exports=function(){return wrapper(new Render)}},{"../module-wrapper":11}],16:[function(require,module,exports){"use strict";var wrapper=require("../module-wrapper");var spacePreserve={name:"SpacePreserveModule",postparse:function postparse(parsed){var chunk=[];var inChunk=false;var result=parsed.reduce(function(parsed,part){if(part.type==="tag"&&part.position==="start"&&part.text&&part.value==="<w:t>"){inChunk=true}if(inChunk){if(part.type==="placeholder"&&!part.module){chunk[0].value='<w:t xml:space="preserve">'}chunk.push(part)}else{parsed.push(part)}if(part.type==="tag"&&part.position==="end"&&part.text&&part.value==="</w:t>"){Array.prototype.push.apply(parsed,chunk);inChunk=false;chunk=[]}return parsed},[]);Array.prototype.push.apply(result,chunk);return result}};module.exports=function(){return wrapper(spacePreserve)}},{"../module-wrapper":11}],17:[function(require,module,exports){"use strict";var DocUtils=require("./doc-utils");var parser={postparse:function postparse(parsed,modules){function getTraits(traitName,parsed){return modules.map(function(module){return module.getTraits(traitName,parsed)})}function postparse(parsed){return modules.reduce(function(parsed,module){return module.postparse(parsed,{postparse:postparse,getTraits:getTraits})},parsed)}return postparse(parsed)},parse:function parse(lexed,modules){function moduleParse(placeHolderContent,parsed){var moduleParsed=void 0;for(var i=0,l=modules.length;i<l;i++){var _module=modules[i];moduleParsed=_module.parse(placeHolderContent);if(moduleParsed){parsed.push(moduleParsed);return moduleParsed}}return null}var inPlaceHolder=false;var placeHolderContent=void 0;var tailParts=[];return lexed.reduce(function(parsed,token){if(token.type==="delimiter"){inPlaceHolder=token.position==="start";if(token.position==="end"){placeHolderContent=DocUtils.wordToUtf8(placeHolderContent);if(!moduleParse(placeHolderContent,parsed)){parsed.push({type:"placeholder",value:placeHolderContent})}Array.prototype.push.apply(parsed,tailParts);tailParts=[];return parsed}placeHolderContent="";return parsed}if(inPlaceHolder){if(token.type==="content"&&token.position==="insidetag"){placeHolderContent+=token.value}else{tailParts.push(token)}return parsed}parsed.push(token);return parsed},[])}};module.exports=parser},{"./doc-utils":4}],18:[function(require,module,exports){"use strict";var ScopeManager=require("./scope-manager");var DocUtils=require("./doc-utils");function moduleRender(part,options){var moduleRendered=void 0;for(var i=0,l=options.modules.length;i<l;i++){var _module=options.modules[i];moduleRendered=_module.render(part,options);if(moduleRendered){return moduleRendered}}return false}function render(options){options.render=render;options.modules=options.modules;if(!options.scopeManager){options.scopeManager=ScopeManager.createBaseScopeManager(options)}return options.compiled.map(function(part){var moduleRendered=moduleRender(part,options);if(moduleRendered){return moduleRendered.value}if(part.type==="placeholder"){var value=options.scopeManager.getValue(part.value);if(value==null){value=options.nullGetter(part)}return DocUtils.utf8ToWord(value)}if(part.type==="content"||part.type==="tag"){return part.value}throw new Error('Unimplemented tag type "'+part.type+'"')}).join("")}module.exports=render},{"./doc-utils":4,"./scope-manager":19}],19:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Errors=require("./errors");var ScopeManager=function(){function ScopeManager(options){_classCallCheck(this,ScopeManager);this.scopePath=options.scopePath;this.scopeList=options.scopeList;this.parser=options.parser}_createClass(ScopeManager,[{key:"loopOver",value:function loopOver(tag,callback,inverted){inverted=inverted||false;return this.loopOverValue(this.getValue(tag),callback,inverted)}},{key:"functorIfInverted",value:function functorIfInverted(inverted,functor,value){if(inverted){functor(value)}}},{key:"isValueFalsy",value:function isValueFalsy(value,type){return value==null||!value||type==="[object Array]"&&value.length===0}},{key:"loopOverValue",value:function loopOverValue(value,functor,inverted){var type=Object.prototype.toString.call(value);var currentValue=this.scopeList[this.num];if(this.isValueFalsy(value,type)){return this.functorIfInverted(inverted,functor,currentValue)}if(type==="[object Array]"){for(var i=0,scope;i<value.length;i++){scope=value[i];this.functorIfInverted(!inverted,functor,scope)}return}if(type==="[object Object]"){return this.functorIfInverted(!inverted,functor,value)}if(value===true){return this.functorIfInverted(!inverted,functor,currentValue)}}},{key:"getValue",value:function getValue(tag,num){this.num=num==null?this.scopeList.length-1:num;var err=void 0;var parser=void 0;var result=void 0;var scope=this.scopeList[this.num];try{parser=this.parser(tag)}catch(error){err=new Errors.XTScopeParserError("Scope parser compilation failed");err.properties={id:"scopeparser_compilation_failed",tag:tag,explanation:"The scope parser for the tag "+tag+" failed to compile",rootError:error};throw err}try{result=parser.get(scope,{num:this.num,scopeList:this.scopeList})}catch(error){err=new Errors.XTScopeParserError("Scope parser execution failed");err.properties={id:"scopeparser_execution_failed",explanation:"The scope parser for the tag "+tag+" failed to execute",scope:scope,tag:tag,rootError:error};throw err}if(result==null&&this.num>0){return this.getValue(tag,this.num-1)}return result}},{key:"createSubScopeManager",value:function createSubScopeManager(scope,tag){var options={scopePath:this.scopePath.slice(0),scopeList:this.scopeList.slice(0)};options.parser=this.parser;options.scopeList=this.scopeList.concat(scope);options.scopePath=this.scopePath.concat(tag);return new ScopeManager(options)}}]);return ScopeManager}();ScopeManager.createBaseScopeManager=function(_ref){var parser=_ref.parser,tags=_ref.tags;var options={parser:parser,tags:tags};options.scopePath=[];options.scopeList=[tags];return new ScopeManager(options)};module.exports=ScopeManager},{"./errors":6}],20:[function(require,module,exports){"use strict";var DocUtils=require("./doc-utils");var Errors=require("./errors");function throwRawTagNotInParagraph(options){var err=new Errors.XTTemplateError("Raw tag not in paragraph");var tag=options.part.value;err.properties={id:"raw_tag_outerxml_invalid",explanation:'The tag "'+tag+'"',rootError:options.rootError,xtag:tag};throw err}function lastTagIsOpenTag(array,tag){if(array.length===0){return false}var lastTag=array[array.length-1];var innerLastTag=lastTag.tag.substr(1);var innerCurrentTag=tag.substr(2,tag.length-3);return innerLastTag.indexOf(innerCurrentTag)===0}function addTag(array,tag){array.push({tag:tag});return array}function getListXmlElements(parts){var tags=parts.filter(function(part){return part.type==="tag"}).map(function(part){return part.value});var result=[];for(var i=0,tag;i<tags.length;i++){tag=tags[i];if(tag[1]==="/"){if(lastTagIsOpenTag(result,tag)){result.pop()}else{result=addTag(result,tag)}}else if(tag[tag.length-1]!=="/"){result=addTag(result,tag)}}return result}function getExpandToDefault(parts){var xmlElements=getListXmlElements(parts);for(var i=0;i<xmlElements.length;i++){var xmlElement=xmlElements[i];if(xmlElement.tag.indexOf("<w:tc")===0){return"w:tr"}}return false}function expandOne(part,postparsed,options){var expandTo=part.expandTo||options.expandTo;var index=postparsed.indexOf(part);if(!expandTo){return postparsed}var right=void 0,left=void 0;try{right=DocUtils.getRight(postparsed,expandTo,index);left=DocUtils.getLeft(postparsed,expandTo,index)}catch(rootError){throwRawTagNotInParagraph({part:part,rootError:rootError})}var leftParts=postparsed.slice(left,index);var rightParts=postparsed.slice(index+1,right+1);var inner=options.getInner({index:index,part:part,leftParts:leftParts,rightParts:rightParts,left:left,right:right,postparsed:postparsed});var type=Object.prototype.toString.call(inner);if(type==="[object Array]"){inner=DocUtils.concatArrays(inner)}return DocUtils.concatArrays([postparsed.slice(0,left),[inner],postparsed.slice(right+1)])}function expandToOne(postparsed,options){var expandToElements=postparsed.reduce(function(elements,part){if(part.type==="placeholder"&&part.module===options.moduleName){elements.push(part)}return elements},[]);expandToElements.forEach(function(part){postparsed=expandOne(part,postparsed,options)});return postparsed}module.exports={expandToOne:expandToOne,getExpandToDefault:getExpandToDefault}},{"./doc-utils":4,"./errors":6}],21:[function(require,module,exports){"use strict";var DocUtils=require("./doc-utils");var memoize=require("./memoize");function handleRecursiveCase(res){function replacerUnshift(){var pn={array:Array.prototype.slice.call(arguments)};pn.array.shift();var match=pn.array[0]+pn.array[1];pn.array.unshift(match);pn.array.pop();var offset=pn.array.pop();pn.offset=offset;pn.first=true;res.matches.unshift(pn);res.charactersAdded.unshift(0);return res.charactersAddedCumulative.unshift(0)}if(res.content.indexOf("<")===-1&&res.content.indexOf(">")===-1){res.content.replace(/^()([^<>]*)$/,replacerUnshift)}var r=new RegExp("^()([^<]+)</(?:"+res.tagsXmlArrayJoined+")>");res.content.replace(r,replacerUnshift);function replacerPush(){var pn={array:Array.prototype.slice.call(arguments)};pn.array.pop();var offset=pn.array.pop();pn.offset=offset;pn.last=true;res.matches.push(pn);res.charactersAdded.push(0);return res.charactersAddedCumulative.push(0)}r=new RegExp("(<(?:"+res.tagsXmlArrayJoined+")[^>]*>)([^>]+)$");res.content.replace(r,replacerPush);return res}function xmlMatcher(content,tagsXmlArray){var res={};res.content=content;res.tagsXmlArray=tagsXmlArray;res.tagsXmlArrayJoined=res.tagsXmlArray.join("|");var regexp=new RegExp("(<(?:"+res.tagsXmlArrayJoined+")[^>]*>)([^<>]*)</(?:"+res.tagsXmlArrayJoined+")>","g");res.matches=DocUtils.pregMatchAll(regexp,res.content);res.charactersAddedCumulative=res.matches.map(function(){return 0});res.charactersAdded=res.matches.map(function(){return 0});return handleRecursiveCase(res)}var memoized=memoize(xmlMatcher);module.exports=function(content,tagsXmlArray){return DocUtils.cloneDeep(memoized(content,tagsXmlArray))}},{"./doc-utils":4,"./memoize":9}],22:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var DocUtils=require("./doc-utils");var ScopeManager=require("./scope-manager");var xmlMatcher=require("./xml-matcher");var Errors=require("./errors");var Lexer=require("./lexer");var Parser=require("./parser.js");var _render=require("./render.js");function _getFullText(content,tagsXmlArray){var matcher=xmlMatcher(content,tagsXmlArray);var result=matcher.matches.map(function(match){return match.array[2]});return DocUtils.wordToUtf8(DocUtils.convertSpaces(result.join("")))}module.exports=function(){function XmlTemplater(content,options){_classCallCheck(this,XmlTemplater);this.fromJson(options);this.setModules({inspect:{filePath:this.filePath}});this.load(content)}_createClass(XmlTemplater,[{key:"load",value:function load(content){if(typeof content!=="string"){var err=new Errors.XTInternalError("Content must be a string");err.properties.id="xmltemplater_content_must_be_string";throw err}this.content=content}},{key:"setTags",value:function setTags(tags){this.tags=tags!=null?tags:{};this.scopeManager=ScopeManager.createBaseScopeManager({tags:this.tags,parser:this.parser});return this}},{key:"fromJson",value:function fromJson(options){this.filePath=options.filePath;this.modules=options.modules;this.fileTypeConfig=options.fileTypeConfig;Object.keys(DocUtils.defaults).map(function(key){this[key]=options[key]!=null?options[key]:DocUtils.defaults[key]},this)}},{key:"getFullText",value:function getFullText(){return _getFullText(this.content,this.fileTypeConfig.tagsXmlTextArray)}},{key:"setModules",value:function setModules(obj){this.modules.forEach(function(module){module.set(obj)})}},{key:"parse",value:function parse(){this.xmllexed=Lexer.xmlparse(this.content,{text:this.fileTypeConfig.tagsXmlTextArray,other:this.fileTypeConfig.tagsXmlLexedArray});this.setModules({inspect:{xmllexed:this.xmllexed}});this.lexed=Lexer.parse(this.xmllexed,this.delimiters);this.setModules({inspect:{lexed:this.lexed}});this.parsed=Parser.parse(this.lexed,this.modules);this.setModules({inspect:{parsed:this.parsed}});this.postparsed=Parser.postparse(this.parsed,this.modules);return this}},{key:"render",value:function render(){this.setModules({inspect:{postparsed:this.postparsed}});this.content=_render({compiled:this.postparsed,tags:this.tags,modules:this.modules,parser:this.parser,nullGetter:this.nullGetter,filePath:this.filePath});this.setModules({inspect:{content:this.content}});return this}}]);return XmlTemplater}()},{"./doc-utils":4,"./errors":6,"./lexer":8,"./parser.js":17,"./render.js":18,"./scope-manager":19,"./xml-matcher":21}],23:[function(require,module,exports){function DOMParser(options){this.options=options||{locator:{}}}DOMParser.prototype.parseFromString=function(source,mimeType){var options=this.options;var sax=new XMLReader;var domBuilder=options.domBuilder||new DOMHandler;var errorHandler=options.errorHandler;var locator=options.locator;var defaultNSMap=options.xmlns||{};var entityMap={lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};if(locator){domBuilder.setDocumentLocator(locator)}sax.errorHandler=buildErrorHandler(errorHandler,domBuilder,locator);sax.domBuilder=options.domBuilder||domBuilder;if(/\/x?html?$/.test(mimeType)){entityMap.nbsp=" ";entityMap.copy="©";defaultNSMap[""]="http://www.w3.org/1999/xhtml"}defaultNSMap.xml=defaultNSMap.xml||"http://www.w3.org/XML/1998/namespace";if(source){sax.parse(source,defaultNSMap,entityMap)}else{sax.errorHandler.error("invalid doc source")}return domBuilder.doc};function buildErrorHandler(errorImpl,domBuilder,locator){if(!errorImpl){if(domBuilder instanceof DOMHandler){return domBuilder}errorImpl=domBuilder}var errorHandler={};var isCallback=errorImpl instanceof Function;locator=locator||{};function build(key){var fn=errorImpl[key];if(!fn&&isCallback){fn=errorImpl.length==2?function(msg){errorImpl(key,msg)}:errorImpl}errorHandler[key]=fn&&function(msg){fn("[xmldom "+key+"]\t"+msg+_locator(locator))}||function(){}}build("warning");build("error");build("fatalError");return errorHandler}function DOMHandler(){this.cdata=false}function position(locator,node){node.lineNumber=locator.lineNumber;node.columnNumber=locator.columnNumber}DOMHandler.prototype={startDocument:function(){this.doc=(new DOMImplementation).createDocument(null,null,null);if(this.locator){this.doc.documentURI=this.locator.systemId}},startElement:function(namespaceURI,localName,qName,attrs){var doc=this.doc;var el=doc.createElementNS(namespaceURI,qName||localName);var len=attrs.length;appendElement(this,el);this.currentElement=el;this.locator&&position(this.locator,el);for(var i=0;i<len;i++){var namespaceURI=attrs.getURI(i);var value=attrs.getValue(i);var qName=attrs.getQName(i);var attr=doc.createAttributeNS(namespaceURI,qName);this.locator&&position(attrs.getLocator(i),attr);attr.value=attr.nodeValue=value;el.setAttributeNode(attr)}},endElement:function(namespaceURI,localName,qName){var current=this.currentElement;var tagName=current.tagName;this.currentElement=current.parentNode},startPrefixMapping:function(prefix,uri){},endPrefixMapping:function(prefix){},processingInstruction:function(target,data){var ins=this.doc.createProcessingInstruction(target,data);this.locator&&position(this.locator,ins);appendElement(this,ins)},ignorableWhitespace:function(ch,start,length){},characters:function(chars,start,length){chars=_toString.apply(this,arguments);if(chars){if(this.cdata){var charNode=this.doc.createCDATASection(chars)}else{var charNode=this.doc.createTextNode(chars)}if(this.currentElement){this.currentElement.appendChild(charNode)}else if(/^\s*$/.test(chars)){this.doc.appendChild(charNode)}this.locator&&position(this.locator,charNode)}},skippedEntity:function(name){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(locator){if(this.locator=locator){locator.lineNumber=0}},comment:function(chars,start,length){chars=_toString.apply(this,arguments);var comm=this.doc.createComment(chars);this.locator&&position(this.locator,comm);appendElement(this,comm)},startCDATA:function(){this.cdata=true},endCDATA:function(){this.cdata=false},startDTD:function(name,publicId,systemId){var impl=this.doc.implementation;if(impl&&impl.createDocumentType){var dt=impl.createDocumentType(name,publicId,systemId);this.locator&&position(this.locator,dt);appendElement(this,dt)}},warning:function(error){console.warn("[xmldom warning]\t"+error,_locator(this.locator))},error:function(error){console.error("[xmldom error]\t"+error,_locator(this.locator))},fatalError:function(error){console.error("[xmldom fatalError]\t"+error,_locator(this.locator));throw error}};function _locator(l){if(l){return"\n@"+(l.systemId||"")+"#[line:"+l.lineNumber+",col:"+l.columnNumber+"]"}}function _toString(chars,start,length){if(typeof chars=="string"){return chars.substr(start,length)}else{if(chars.length>=start+length||start){return new java.lang.String(chars,start,length)+""}return chars}}"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){DOMHandler.prototype[key]=function(){return null}});function appendElement(hander,node){if(!hander.currentElement){hander.doc.appendChild(node)}else{hander.currentElement.appendChild(node)}}var XMLReader=require("./sax").XMLReader;var DOMImplementation=exports.DOMImplementation=require("./dom").DOMImplementation;exports.XMLSerializer=require("./dom").XMLSerializer;exports.DOMParser=DOMParser},{"./dom":24,"./sax":25}],24:[function(require,module,exports){function copy(src,dest){for(var p in src){dest[p]=src[p]}}function _extends(Class,Super){var pt=Class.prototype;if(Object.create){var ppt=Object.create(Super.prototype);pt.__proto__=ppt}if(!(pt instanceof Super)){function t(){}t.prototype=Super.prototype;t=new t;copy(pt,t);Class.prototype=pt=t}if(pt.constructor!=Class){if(typeof Class!="function"){console.error("unknow Class:"+Class)}pt.constructor=Class}}var htmlns="http://www.w3.org/1999/xhtml";var NodeType={};var ELEMENT_NODE=NodeType.ELEMENT_NODE=1;var ATTRIBUTE_NODE=NodeType.ATTRIBUTE_NODE=2;var TEXT_NODE=NodeType.TEXT_NODE=3;var CDATA_SECTION_NODE=NodeType.CDATA_SECTION_NODE=4;var ENTITY_REFERENCE_NODE=NodeType.ENTITY_REFERENCE_NODE=5;var ENTITY_NODE=NodeType.ENTITY_NODE=6;var PROCESSING_INSTRUCTION_NODE=NodeType.PROCESSING_INSTRUCTION_NODE=7;var COMMENT_NODE=NodeType.COMMENT_NODE=8;var DOCUMENT_NODE=NodeType.DOCUMENT_NODE=9;var DOCUMENT_TYPE_NODE=NodeType.DOCUMENT_TYPE_NODE=10;var DOCUMENT_FRAGMENT_NODE=NodeType.DOCUMENT_FRAGMENT_NODE=11;var NOTATION_NODE=NodeType.NOTATION_NODE=12;var ExceptionCode={};var ExceptionMessage={};var INDEX_SIZE_ERR=ExceptionCode.INDEX_SIZE_ERR=(ExceptionMessage[1]="Index size error",1);var DOMSTRING_SIZE_ERR=ExceptionCode.DOMSTRING_SIZE_ERR=(ExceptionMessage[2]="DOMString size error",2);var HIERARCHY_REQUEST_ERR=ExceptionCode.HIERARCHY_REQUEST_ERR=(ExceptionMessage[3]="Hierarchy request error",3);var WRONG_DOCUMENT_ERR=ExceptionCode.WRONG_DOCUMENT_ERR=(ExceptionMessage[4]="Wrong document",4);var INVALID_CHARACTER_ERR=ExceptionCode.INVALID_CHARACTER_ERR=(ExceptionMessage[5]="Invalid character",5);var NO_DATA_ALLOWED_ERR=ExceptionCode.NO_DATA_ALLOWED_ERR=(ExceptionMessage[6]="No data allowed",6);var NO_MODIFICATION_ALLOWED_ERR=ExceptionCode.NO_MODIFICATION_ALLOWED_ERR=(ExceptionMessage[7]="No modification allowed",7);var NOT_FOUND_ERR=ExceptionCode.NOT_FOUND_ERR=(ExceptionMessage[8]="Not found",8);var NOT_SUPPORTED_ERR=ExceptionCode.NOT_SUPPORTED_ERR=(ExceptionMessage[9]="Not supported",9);var INUSE_ATTRIBUTE_ERR=ExceptionCode.INUSE_ATTRIBUTE_ERR=(ExceptionMessage[10]="Attribute in use",10);var INVALID_STATE_ERR=ExceptionCode.INVALID_STATE_ERR=(ExceptionMessage[11]="Invalid state",11);var SYNTAX_ERR=ExceptionCode.SYNTAX_ERR=(ExceptionMessage[12]="Syntax error",12);var INVALID_MODIFICATION_ERR=ExceptionCode.INVALID_MODIFICATION_ERR=(ExceptionMessage[13]="Invalid modification",13);var NAMESPACE_ERR=ExceptionCode.NAMESPACE_ERR=(ExceptionMessage[14]="Invalid namespace",14);var INVALID_ACCESS_ERR=ExceptionCode.INVALID_ACCESS_ERR=(ExceptionMessage[15]="Invalid access",15);function DOMException(code,message){if(message instanceof Error){var error=message}else{error=this;Error.call(this,ExceptionMessage[code]);this.message=ExceptionMessage[code];if(Error.captureStackTrace)Error.captureStackTrace(this,DOMException)}error.code=code;if(message)this.message=this.message+": "+message;return error}DOMException.prototype=Error.prototype;copy(ExceptionCode,DOMException);function NodeList(){}NodeList.prototype={length:0,item:function(index){return this[index]||null},toString:function(isHTML,nodeFilter){for(var buf=[],i=0;i<this.length;i++){serializeToString(this[i],buf,isHTML,nodeFilter)}return buf.join("")}};function LiveNodeList(node,refresh){this._node=node;this._refresh=refresh;_updateLiveList(this)}function _updateLiveList(list){var inc=list._node._inc||list._node.ownerDocument._inc;if(list._inc!=inc){var ls=list._refresh(list._node);__set__(list,"length",ls.length);copy(ls,list);list._inc=inc}}LiveNodeList.prototype.item=function(i){_updateLiveList(this);return this[i]};_extends(LiveNodeList,NodeList);function NamedNodeMap(){}function _findNodeIndex(list,node){var i=list.length;while(i--){if(list[i]===node){return i}}}function _addNamedNode(el,list,newAttr,oldAttr){if(oldAttr){list[_findNodeIndex(list,oldAttr)]=newAttr}else{list[list.length++]=newAttr}if(el){newAttr.ownerElement=el;var doc=el.ownerDocument;if(doc){oldAttr&&_onRemoveAttribute(doc,el,oldAttr);_onAddAttribute(doc,el,newAttr)}}}function _removeNamedNode(el,list,attr){var i=_findNodeIndex(list,attr);if(i>=0){var lastIndex=list.length-1;while(i<lastIndex){list[i]=list[++i]}list.length=lastIndex;if(el){var doc=el.ownerDocument;if(doc){_onRemoveAttribute(doc,el,attr);attr.ownerElement=null}}}else{throw DOMException(NOT_FOUND_ERR,new Error(el.tagName+"@"+attr))}}NamedNodeMap.prototype={length:0,item:NodeList.prototype.item,getNamedItem:function(key){var i=this.length;while(i--){var attr=this[i];if(attr.nodeName==key){return attr}}},setNamedItem:function(attr){var el=attr.ownerElement;if(el&&el!=this._ownerElement){throw new DOMException(INUSE_ATTRIBUTE_ERR)}var oldAttr=this.getNamedItem(attr.nodeName);_addNamedNode(this._ownerElement,this,attr,oldAttr);return oldAttr},setNamedItemNS:function(attr){var el=attr.ownerElement,oldAttr;if(el&&el!=this._ownerElement){throw new DOMException(INUSE_ATTRIBUTE_ERR)}oldAttr=this.getNamedItemNS(attr.namespaceURI,attr.localName);_addNamedNode(this._ownerElement,this,attr,oldAttr);return oldAttr},removeNamedItem:function(key){var attr=this.getNamedItem(key);_removeNamedNode(this._ownerElement,this,attr);return attr},removeNamedItemNS:function(namespaceURI,localName){var attr=this.getNamedItemNS(namespaceURI,localName);_removeNamedNode(this._ownerElement,this,attr);return attr},getNamedItemNS:function(namespaceURI,localName){var i=this.length;while(i--){var node=this[i];if(node.localName==localName&&node.namespaceURI==namespaceURI){return node}}return null}};function DOMImplementation(features){this._features={};if(features){for(var feature in features){this._features=features[feature]}}}DOMImplementation.prototype={hasFeature:function(feature,version){var versions=this._features[feature.toLowerCase()];if(versions&&(!version||version in versions)){
return true}else{return false}},createDocument:function(namespaceURI,qualifiedName,doctype){var doc=new Document;doc.implementation=this;doc.childNodes=new NodeList;doc.doctype=doctype;if(doctype){doc.appendChild(doctype)}if(qualifiedName){var root=doc.createElementNS(namespaceURI,qualifiedName);doc.appendChild(root)}return doc},createDocumentType:function(qualifiedName,publicId,systemId){var node=new DocumentType;node.name=qualifiedName;node.nodeName=qualifiedName;node.publicId=publicId;node.systemId=systemId;return node}};function Node(){}Node.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(newChild,refChild){return _insertBefore(this,newChild,refChild)},replaceChild:function(newChild,oldChild){this.insertBefore(newChild,oldChild);if(oldChild){this.removeChild(oldChild)}},removeChild:function(oldChild){return _removeChild(this,oldChild)},appendChild:function(newChild){return this.insertBefore(newChild,null)},hasChildNodes:function(){return this.firstChild!=null},cloneNode:function(deep){return cloneNode(this.ownerDocument||this,this,deep)},normalize:function(){var child=this.firstChild;while(child){var next=child.nextSibling;if(next&&next.nodeType==TEXT_NODE&&child.nodeType==TEXT_NODE){this.removeChild(next);child.appendData(next.data)}else{child.normalize();child=next}}},isSupported:function(feature,version){return this.ownerDocument.implementation.hasFeature(feature,version)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(namespaceURI){var el=this;while(el){var map=el._nsMap;if(map){for(var n in map){if(map[n]==namespaceURI){return n}}}el=el.nodeType==ATTRIBUTE_NODE?el.ownerDocument:el.parentNode}return null},lookupNamespaceURI:function(prefix){var el=this;while(el){var map=el._nsMap;if(map){if(prefix in map){return map[prefix]}}el=el.nodeType==ATTRIBUTE_NODE?el.ownerDocument:el.parentNode}return null},isDefaultNamespace:function(namespaceURI){var prefix=this.lookupPrefix(namespaceURI);return prefix==null}};function _xmlEncoder(c){return c=="<"&&"&lt;"||c==">"&&"&gt;"||c=="&"&&"&amp;"||c=='"'&&"&quot;"||"&#"+c.charCodeAt()+";"}copy(NodeType,Node);copy(NodeType,Node.prototype);function _visitNode(node,callback){if(callback(node)){return true}if(node=node.firstChild){do{if(_visitNode(node,callback)){return true}}while(node=node.nextSibling)}}function Document(){}function _onAddAttribute(doc,el,newAttr){doc&&doc._inc++;var ns=newAttr.namespaceURI;if(ns=="http://www.w3.org/2000/xmlns/"){el._nsMap[newAttr.prefix?newAttr.localName:""]=newAttr.value}}function _onRemoveAttribute(doc,el,newAttr,remove){doc&&doc._inc++;var ns=newAttr.namespaceURI;if(ns=="http://www.w3.org/2000/xmlns/"){delete el._nsMap[newAttr.prefix?newAttr.localName:""]}}function _onUpdateChild(doc,el,newChild){if(doc&&doc._inc){doc._inc++;var cs=el.childNodes;if(newChild){cs[cs.length++]=newChild}else{var child=el.firstChild;var i=0;while(child){cs[i++]=child;child=child.nextSibling}cs.length=i}}}function _removeChild(parentNode,child){var previous=child.previousSibling;var next=child.nextSibling;if(previous){previous.nextSibling=next}else{parentNode.firstChild=next}if(next){next.previousSibling=previous}else{parentNode.lastChild=previous}_onUpdateChild(parentNode.ownerDocument,parentNode);return child}function _insertBefore(parentNode,newChild,nextChild){var cp=newChild.parentNode;if(cp){cp.removeChild(newChild)}if(newChild.nodeType===DOCUMENT_FRAGMENT_NODE){var newFirst=newChild.firstChild;if(newFirst==null){return newChild}var newLast=newChild.lastChild}else{newFirst=newLast=newChild}var pre=nextChild?nextChild.previousSibling:parentNode.lastChild;newFirst.previousSibling=pre;newLast.nextSibling=nextChild;if(pre){pre.nextSibling=newFirst}else{parentNode.firstChild=newFirst}if(nextChild==null){parentNode.lastChild=newLast}else{nextChild.previousSibling=newLast}do{newFirst.parentNode=parentNode}while(newFirst!==newLast&&(newFirst=newFirst.nextSibling));_onUpdateChild(parentNode.ownerDocument||parentNode,parentNode);if(newChild.nodeType==DOCUMENT_FRAGMENT_NODE){newChild.firstChild=newChild.lastChild=null}return newChild}function _appendSingleChild(parentNode,newChild){var cp=newChild.parentNode;if(cp){var pre=parentNode.lastChild;cp.removeChild(newChild);var pre=parentNode.lastChild}var pre=parentNode.lastChild;newChild.parentNode=parentNode;newChild.previousSibling=pre;newChild.nextSibling=null;if(pre){pre.nextSibling=newChild}else{parentNode.firstChild=newChild}parentNode.lastChild=newChild;_onUpdateChild(parentNode.ownerDocument,parentNode,newChild);return newChild}Document.prototype={nodeName:"#document",nodeType:DOCUMENT_NODE,doctype:null,documentElement:null,_inc:1,insertBefore:function(newChild,refChild){if(newChild.nodeType==DOCUMENT_FRAGMENT_NODE){var child=newChild.firstChild;while(child){var next=child.nextSibling;this.insertBefore(child,refChild);child=next}return newChild}if(this.documentElement==null&&newChild.nodeType==ELEMENT_NODE){this.documentElement=newChild}return _insertBefore(this,newChild,refChild),newChild.ownerDocument=this,newChild},removeChild:function(oldChild){if(this.documentElement==oldChild){this.documentElement=null}return _removeChild(this,oldChild)},importNode:function(importedNode,deep){return importNode(this,importedNode,deep)},getElementById:function(id){var rtv=null;_visitNode(this.documentElement,function(node){if(node.nodeType==ELEMENT_NODE){if(node.getAttribute("id")==id){rtv=node;return true}}});return rtv},createElement:function(tagName){var node=new Element;node.ownerDocument=this;node.nodeName=tagName;node.tagName=tagName;node.childNodes=new NodeList;var attrs=node.attributes=new NamedNodeMap;attrs._ownerElement=node;return node},createDocumentFragment:function(){var node=new DocumentFragment;node.ownerDocument=this;node.childNodes=new NodeList;return node},createTextNode:function(data){var node=new Text;node.ownerDocument=this;node.appendData(data);return node},createComment:function(data){var node=new Comment;node.ownerDocument=this;node.appendData(data);return node},createCDATASection:function(data){var node=new CDATASection;node.ownerDocument=this;node.appendData(data);return node},createProcessingInstruction:function(target,data){var node=new ProcessingInstruction;node.ownerDocument=this;node.tagName=node.target=target;node.nodeValue=node.data=data;return node},createAttribute:function(name){var node=new Attr;node.ownerDocument=this;node.name=name;node.nodeName=name;node.localName=name;node.specified=true;return node},createEntityReference:function(name){var node=new EntityReference;node.ownerDocument=this;node.nodeName=name;return node},createElementNS:function(namespaceURI,qualifiedName){var node=new Element;var pl=qualifiedName.split(":");var attrs=node.attributes=new NamedNodeMap;node.childNodes=new NodeList;node.ownerDocument=this;node.nodeName=qualifiedName;node.tagName=qualifiedName;node.namespaceURI=namespaceURI;if(pl.length==2){node.prefix=pl[0];node.localName=pl[1]}else{node.localName=qualifiedName}attrs._ownerElement=node;return node},createAttributeNS:function(namespaceURI,qualifiedName){var node=new Attr;var pl=qualifiedName.split(":");node.ownerDocument=this;node.nodeName=qualifiedName;node.name=qualifiedName;node.namespaceURI=namespaceURI;node.specified=true;if(pl.length==2){node.prefix=pl[0];node.localName=pl[1]}else{node.localName=qualifiedName}return node}};_extends(Document,Node);function Element(){this._nsMap={}}Element.prototype={nodeType:ELEMENT_NODE,hasAttribute:function(name){return this.getAttributeNode(name)!=null},getAttribute:function(name){var attr=this.getAttributeNode(name);return attr&&attr.value||""},getAttributeNode:function(name){return this.attributes.getNamedItem(name)},setAttribute:function(name,value){var attr=this.ownerDocument.createAttribute(name);attr.value=attr.nodeValue=""+value;this.setAttributeNode(attr)},removeAttribute:function(name){var attr=this.getAttributeNode(name);attr&&this.removeAttributeNode(attr)},appendChild:function(newChild){if(newChild.nodeType===DOCUMENT_FRAGMENT_NODE){return this.insertBefore(newChild,null)}else{return _appendSingleChild(this,newChild)}},setAttributeNode:function(newAttr){return this.attributes.setNamedItem(newAttr)},setAttributeNodeNS:function(newAttr){return this.attributes.setNamedItemNS(newAttr)},removeAttributeNode:function(oldAttr){return this.attributes.removeNamedItem(oldAttr.nodeName)},removeAttributeNS:function(namespaceURI,localName){var old=this.getAttributeNodeNS(namespaceURI,localName);old&&this.removeAttributeNode(old)},hasAttributeNS:function(namespaceURI,localName){return this.getAttributeNodeNS(namespaceURI,localName)!=null},getAttributeNS:function(namespaceURI,localName){var attr=this.getAttributeNodeNS(namespaceURI,localName);return attr&&attr.value||""},setAttributeNS:function(namespaceURI,qualifiedName,value){var attr=this.ownerDocument.createAttributeNS(namespaceURI,qualifiedName);attr.value=attr.nodeValue=""+value;this.setAttributeNode(attr)},getAttributeNodeNS:function(namespaceURI,localName){return this.attributes.getNamedItemNS(namespaceURI,localName)},getElementsByTagName:function(tagName){return new LiveNodeList(this,function(base){var ls=[];_visitNode(base,function(node){if(node!==base&&node.nodeType==ELEMENT_NODE&&(tagName==="*"||node.tagName==tagName)){ls.push(node)}});return ls})},getElementsByTagNameNS:function(namespaceURI,localName){return new LiveNodeList(this,function(base){var ls=[];_visitNode(base,function(node){if(node!==base&&node.nodeType===ELEMENT_NODE&&(namespaceURI==="*"||node.namespaceURI===namespaceURI)&&(localName==="*"||node.localName==localName)){ls.push(node)}});return ls})}};Document.prototype.getElementsByTagName=Element.prototype.getElementsByTagName;Document.prototype.getElementsByTagNameNS=Element.prototype.getElementsByTagNameNS;_extends(Element,Node);function Attr(){}Attr.prototype.nodeType=ATTRIBUTE_NODE;_extends(Attr,Node);function CharacterData(){}CharacterData.prototype={data:"",substringData:function(offset,count){return this.data.substring(offset,offset+count)},appendData:function(text){text=this.data+text;this.nodeValue=this.data=text;this.length=text.length},insertData:function(offset,text){this.replaceData(offset,0,text)},appendChild:function(newChild){throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])},deleteData:function(offset,count){this.replaceData(offset,count,"")},replaceData:function(offset,count,text){var start=this.data.substring(0,offset);var end=this.data.substring(offset+count);text=start+text+end;this.nodeValue=this.data=text;this.length=text.length}};_extends(CharacterData,Node);function Text(){}Text.prototype={nodeName:"#text",nodeType:TEXT_NODE,splitText:function(offset){var text=this.data;var newText=text.substring(offset);text=text.substring(0,offset);this.data=this.nodeValue=text;this.length=text.length;var newNode=this.ownerDocument.createTextNode(newText);if(this.parentNode){this.parentNode.insertBefore(newNode,this.nextSibling)}return newNode}};_extends(Text,CharacterData);function Comment(){}Comment.prototype={nodeName:"#comment",nodeType:COMMENT_NODE};_extends(Comment,CharacterData);function CDATASection(){}CDATASection.prototype={nodeName:"#cdata-section",nodeType:CDATA_SECTION_NODE};_extends(CDATASection,CharacterData);function DocumentType(){}DocumentType.prototype.nodeType=DOCUMENT_TYPE_NODE;_extends(DocumentType,Node);function Notation(){}Notation.prototype.nodeType=NOTATION_NODE;_extends(Notation,Node);function Entity(){}Entity.prototype.nodeType=ENTITY_NODE;_extends(Entity,Node);function EntityReference(){}EntityReference.prototype.nodeType=ENTITY_REFERENCE_NODE;_extends(EntityReference,Node);function DocumentFragment(){}DocumentFragment.prototype.nodeName="#document-fragment";DocumentFragment.prototype.nodeType=DOCUMENT_FRAGMENT_NODE;_extends(DocumentFragment,Node);function ProcessingInstruction(){}ProcessingInstruction.prototype.nodeType=PROCESSING_INSTRUCTION_NODE;_extends(ProcessingInstruction,Node);function XMLSerializer(){}XMLSerializer.prototype.serializeToString=function(node,isHtml,nodeFilter){return nodeSerializeToString.call(node,isHtml,nodeFilter)};Node.prototype.toString=nodeSerializeToString;function nodeSerializeToString(isHtml,nodeFilter){var buf=[];var refNode=this.nodeType==9?this.documentElement:this;var prefix=refNode.prefix;var uri=refNode.namespaceURI;if(uri&&prefix==null){var prefix=refNode.lookupPrefix(uri);if(prefix==null){var visibleNamespaces=[{namespace:uri,prefix:null}]}}serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);return buf.join("")}function needNamespaceDefine(node,isHTML,visibleNamespaces){var prefix=node.prefix||"";var uri=node.namespaceURI;if(!prefix&&!uri){return false}if(prefix==="xml"&&uri==="http://www.w3.org/XML/1998/namespace"||uri=="http://www.w3.org/2000/xmlns/"){return false}var i=visibleNamespaces.length;while(i--){var ns=visibleNamespaces[i];if(ns.prefix==prefix){return ns.namespace!=uri}}return true}function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){if(nodeFilter){node=nodeFilter(node);if(node){if(typeof node=="string"){buf.push(node);return}}else{return}}switch(node.nodeType){case ELEMENT_NODE:if(!visibleNamespaces)visibleNamespaces=[];var startVisibleNamespaces=visibleNamespaces.length;var attrs=node.attributes;var len=attrs.length;var child=node.firstChild;var nodeName=node.tagName;isHTML=htmlns===node.namespaceURI||isHTML;buf.push("<",nodeName);for(var i=0;i<len;i++){var attr=attrs.item(i);if(attr.prefix=="xmlns"){visibleNamespaces.push({prefix:attr.localName,namespace:attr.value})}else if(attr.nodeName=="xmlns"){visibleNamespaces.push({prefix:"",namespace:attr.value})}}for(var i=0;i<len;i++){var attr=attrs.item(i);if(needNamespaceDefine(attr,isHTML,visibleNamespaces)){var prefix=attr.prefix||"";var uri=attr.namespaceURI;var ns=prefix?" xmlns:"+prefix:" xmlns";buf.push(ns,'="',uri,'"');visibleNamespaces.push({prefix:prefix,namespace:uri})}serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces)}if(needNamespaceDefine(node,isHTML,visibleNamespaces)){var prefix=node.prefix||"";var uri=node.namespaceURI;var ns=prefix?" xmlns:"+prefix:" xmlns";buf.push(ns,'="',uri,'"');visibleNamespaces.push({prefix:prefix,namespace:uri})}if(child||isHTML&&!/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){buf.push(">");if(isHTML&&/^script$/i.test(nodeName)){while(child){if(child.data){buf.push(child.data)}else{serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces)}child=child.nextSibling}}else{while(child){serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);child=child.nextSibling}}buf.push("</",nodeName,">")}else{buf.push("/>")}return;case DOCUMENT_NODE:case DOCUMENT_FRAGMENT_NODE:var child=node.firstChild;while(child){serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);child=child.nextSibling}return;case ATTRIBUTE_NODE:return buf.push(" ",node.name,'="',node.value.replace(/[<&"]/g,_xmlEncoder),'"');case TEXT_NODE:return buf.push(node.data.replace(/[<&]/g,_xmlEncoder));case CDATA_SECTION_NODE:return buf.push("<![CDATA[",node.data,"]]>");case COMMENT_NODE:return buf.push("<!--",node.data,"-->");case DOCUMENT_TYPE_NODE:var pubid=node.publicId;var sysid=node.systemId;buf.push("<!DOCTYPE ",node.name);if(pubid){buf.push(' PUBLIC "',pubid);if(sysid&&sysid!="."){buf.push('" "',sysid)}buf.push('">')}else if(sysid&&sysid!="."){buf.push(' SYSTEM "',sysid,'">')}else{var sub=node.internalSubset;if(sub){buf.push(" [",sub,"]")}buf.push(">")}return;case PROCESSING_INSTRUCTION_NODE:return buf.push("<?",node.target," ",node.data,"?>");case ENTITY_REFERENCE_NODE:return buf.push("&",node.nodeName,";");default:buf.push("??",node.nodeName)}}function importNode(doc,node,deep){var node2;switch(node.nodeType){case ELEMENT_NODE:node2=node.cloneNode(false);node2.ownerDocument=doc;case DOCUMENT_FRAGMENT_NODE:break;case ATTRIBUTE_NODE:deep=true;break}if(!node2){node2=node.cloneNode(false)}node2.ownerDocument=doc;node2.parentNode=null;if(deep){var child=node.firstChild;while(child){node2.appendChild(importNode(doc,child,deep));child=child.nextSibling}}return node2}function cloneNode(doc,node,deep){var node2=new node.constructor;for(var n in node){var v=node[n];if(typeof v!="object"){if(v!=node2[n]){node2[n]=v}}}if(node.childNodes){node2.childNodes=new NodeList}node2.ownerDocument=doc;switch(node2.nodeType){case ELEMENT_NODE:var attrs=node.attributes;var attrs2=node2.attributes=new NamedNodeMap;var len=attrs.length;attrs2._ownerElement=node2;for(var i=0;i<len;i++){node2.setAttributeNode(cloneNode(doc,attrs.item(i),true))}break;case ATTRIBUTE_NODE:deep=true}if(deep){var child=node.firstChild;while(child){node2.appendChild(cloneNode(doc,child,deep));child=child.nextSibling}}return node2}function __set__(object,key,value){object[key]=value}try{if(Object.defineProperty){Object.defineProperty(LiveNodeList.prototype,"length",{get:function(){_updateLiveList(this);return this.$$length}});Object.defineProperty(Node.prototype,"textContent",{get:function(){return getTextContent(this)},set:function(data){switch(this.nodeType){case ELEMENT_NODE:case DOCUMENT_FRAGMENT_NODE:while(this.firstChild){this.removeChild(this.firstChild)}if(data||String(data)){this.appendChild(this.ownerDocument.createTextNode(data))}break;default:this.data=data;this.value=data;this.nodeValue=data}}});function getTextContent(node){switch(node.nodeType){case ELEMENT_NODE:case DOCUMENT_FRAGMENT_NODE:var buf=[];node=node.firstChild;while(node){if(node.nodeType!==7&&node.nodeType!==8){buf.push(getTextContent(node))}node=node.nextSibling}return buf.join("");default:return node.nodeValue}}__set__=function(object,key,value){object["$$"+key]=value}}}catch(e){}exports.DOMImplementation=DOMImplementation;exports.XMLSerializer=XMLSerializer},{}],25:[function(require,module,exports){var nameStartChar=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;var nameChar=new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");var tagNamePattern=new RegExp("^"+nameStartChar.source+nameChar.source+"*(?::"+nameStartChar.source+nameChar.source+"*)?$");var S_TAG=0;var S_ATTR=1;var S_ATTR_SPACE=2;var S_EQ=3;var S_ATTR_NOQUOT_VALUE=4;var S_ATTR_END=5;var S_TAG_SPACE=6;var S_TAG_CLOSE=7;function XMLReader(){}XMLReader.prototype={parse:function(source,defaultNSMap,entityMap){var domBuilder=this.domBuilder;domBuilder.startDocument();_copy(defaultNSMap,defaultNSMap={});parse(source,defaultNSMap,entityMap,domBuilder,this.errorHandler);domBuilder.endDocument()}};function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){function fixedFromCharCode(code){if(code>65535){code-=65536;var surrogate1=55296+(code>>10),surrogate2=56320+(code&1023);return String.fromCharCode(surrogate1,surrogate2)}else{return String.fromCharCode(code)}}function entityReplacer(a){var k=a.slice(1,-1);if(k in entityMap){return entityMap[k]}else if(k.charAt(0)==="#"){return fixedFromCharCode(parseInt(k.substr(1).replace("x","0x")))}else{errorHandler.error("entity not found:"+a);return a}}function appendText(end){if(end>start){var xt=source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);locator&&position(start);domBuilder.characters(xt,0,end-start);start=end}}function position(p,m){while(p>=lineEnd&&(m=linePattern.exec(source))){lineStart=m.index;lineEnd=lineStart+m[0].length;locator.lineNumber++}locator.columnNumber=p-lineStart+1}var lineStart=0;var lineEnd=0;var linePattern=/.*(?:\r\n?|\n)|.*$/g;var locator=domBuilder.locator;var parseStack=[{currentNSMap:defaultNSMapCopy}];var closeMap={};var start=0;while(true){try{var tagStart=source.indexOf("<",start);if(tagStart<0){if(!source.substr(start).match(/^\s*$/)){var doc=domBuilder.doc;var text=doc.createTextNode(source.substr(start));doc.appendChild(text);domBuilder.currentElement=text}return}if(tagStart>start){appendText(tagStart)}switch(source.charAt(tagStart+1)){case"/":var end=source.indexOf(">",tagStart+3);var tagName=source.substring(tagStart+2,end);var config=parseStack.pop();if(end<0){tagName=source.substring(tagStart+2).replace(/[\s<].*/,"");errorHandler.error("end tag name: "+tagName+" is not complete:"+config.tagName);end=tagStart+1+tagName.length}else if(tagName.match(/\s</)){tagName=tagName.replace(/[\s<].*/,"");errorHandler.error("end tag name: "+tagName+" maybe not complete");end=tagStart+1+tagName.length}var localNSMap=config.localNSMap;var endMatch=config.tagName==tagName;var endIgnoreCaseMach=endMatch||config.tagName&&config.tagName.toLowerCase()==tagName.toLowerCase();if(endIgnoreCaseMach){domBuilder.endElement(config.uri,config.localName,tagName);if(localNSMap){for(var prefix in localNSMap){domBuilder.endPrefixMapping(prefix)}}if(!endMatch){errorHandler.fatalError("end tag name: "+tagName+" is not match the current start tagName:"+config.tagName)}}else{parseStack.push(config)}end++;break;case"?":locator&&position(tagStart);end=parseInstruction(source,tagStart,domBuilder);break;case"!":locator&&position(tagStart);end=parseDCC(source,tagStart,domBuilder,errorHandler);break;default:locator&&position(tagStart);var el=new ElementAttributes;var currentNSMap=parseStack[parseStack.length-1].currentNSMap;var end=parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);var len=el.length;if(!el.closed&&fixSelfClosed(source,end,el.tagName,closeMap)){el.closed=true;if(!entityMap.nbsp){errorHandler.warning("unclosed xml attribute")}}if(locator&&len){var locator2=copyLocator(locator,{});for(var i=0;i<len;i++){var a=el[i];position(a.offset);a.locator=copyLocator(locator,{})}domBuilder.locator=locator2;if(appendElement(el,domBuilder,currentNSMap)){parseStack.push(el)}domBuilder.locator=locator}else{if(appendElement(el,domBuilder,currentNSMap)){parseStack.push(el)}}if(el.uri==="http://www.w3.org/1999/xhtml"&&!el.closed){end=parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)}else{end++}}}catch(e){errorHandler.error("element parse error: "+e);end=-1}if(end>start){start=end}else{appendText(Math.max(tagStart,start)+1)}}}function copyLocator(f,t){t.lineNumber=f.lineNumber;t.columnNumber=f.columnNumber;return t}function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){var attrName;var value;var p=++start;var s=S_TAG;while(true){var c=source.charAt(p);switch(c){case"=":if(s===S_ATTR){attrName=source.slice(start,p);s=S_EQ}else if(s===S_ATTR_SPACE){s=S_EQ}else{throw new Error("attribute equal must after attrName")}break;case"'":case'"':if(s===S_EQ||s===S_ATTR){if(s===S_ATTR){errorHandler.warning('attribute value must after "="');attrName=source.slice(start,p)}start=p+1;p=source.indexOf(c,start);if(p>0){value=source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);el.add(attrName,value,start-1);s=S_ATTR_END}else{throw new Error("attribute value no end '"+c+"' match")}}else if(s==S_ATTR_NOQUOT_VALUE){value=source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);el.add(attrName,value,start);errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+")!!");start=p+1;s=S_ATTR_END}else{throw new Error('attribute value must after "="')}break;case"/":switch(s){case S_TAG:el.setTagName(source.slice(start,p));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:s=S_TAG_CLOSE;el.closed=true;case S_ATTR_NOQUOT_VALUE:case S_ATTR:case S_ATTR_SPACE:break;default:throw new Error("attribute invalid close char('/')")}break;case"":errorHandler.error("unexpected end of input");if(s==S_TAG){el.setTagName(source.slice(start,p))}return p;case">":switch(s){case S_TAG:el.setTagName(source.slice(start,p));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:break;case S_ATTR_NOQUOT_VALUE:case S_ATTR:value=source.slice(start,p);if(value.slice(-1)==="/"){el.closed=true;value=value.slice(0,-1)}case S_ATTR_SPACE:if(s===S_ATTR_SPACE){value=attrName}if(s==S_ATTR_NOQUOT_VALUE){errorHandler.warning('attribute "'+value+'" missed quot(")!!');el.add(attrName,value.replace(/&#?\w+;/g,entityReplacer),start)}else{if(currentNSMap[""]!=="http://www.w3.org/1999/xhtml"||!value.match(/^(?:disabled|checked|selected)$/i)){errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!')}el.add(value,value,start)}break;case S_EQ:throw new Error("attribute value missed!!")}return p;case"":c=" ";default:if(c<=" "){switch(s){case S_TAG:el.setTagName(source.slice(start,p));s=S_TAG_SPACE;break;case S_ATTR:attrName=source.slice(start,p);s=S_ATTR_SPACE;break;case S_ATTR_NOQUOT_VALUE:var value=source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);errorHandler.warning('attribute "'+value+'" missed quot(")!!');el.add(attrName,value,start);case S_ATTR_END:s=S_TAG_SPACE;break}}else{switch(s){case S_ATTR_SPACE:var tagName=el.tagName;if(currentNSMap[""]!=="http://www.w3.org/1999/xhtml"||!attrName.match(/^(?:disabled|checked|selected)$/i)){errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!')}el.add(attrName,attrName,start);start=p;s=S_ATTR;break;case S_ATTR_END:errorHandler.warning('attribute space is required"'+attrName+'"!!');case S_TAG_SPACE:s=S_ATTR;start=p;break;case S_EQ:s=S_ATTR_NOQUOT_VALUE;start=p;break;case S_TAG_CLOSE:throw new Error("elements closed character '/' and '>' must be connected to")}}}p++}}function appendElement(el,domBuilder,currentNSMap){var tagName=el.tagName;var localNSMap=null;var i=el.length;while(i--){var a=el[i];var qName=a.qName;var value=a.value;var nsp=qName.indexOf(":");if(nsp>0){var prefix=a.prefix=qName.slice(0,nsp);var localName=qName.slice(nsp+1);var nsPrefix=prefix==="xmlns"&&localName}else{localName=qName;prefix=null;nsPrefix=qName==="xmlns"&&""}a.localName=localName;if(nsPrefix!==false){if(localNSMap==null){localNSMap={};_copy(currentNSMap,currentNSMap={})}currentNSMap[nsPrefix]=localNSMap[nsPrefix]=value;a.uri="http://www.w3.org/2000/xmlns/";domBuilder.startPrefixMapping(nsPrefix,value)}}var i=el.length;while(i--){a=el[i];var prefix=a.prefix;if(prefix){if(prefix==="xml"){a.uri="http://www.w3.org/XML/1998/namespace"}if(prefix!=="xmlns"){a.uri=currentNSMap[prefix||""]}}}var nsp=tagName.indexOf(":");if(nsp>0){prefix=el.prefix=tagName.slice(0,nsp);localName=el.localName=tagName.slice(nsp+1)}else{prefix=null;localName=el.localName=tagName}var ns=el.uri=currentNSMap[prefix||""];domBuilder.startElement(ns,localName,tagName,el);if(el.closed){domBuilder.endElement(ns,localName,tagName);if(localNSMap){for(prefix in localNSMap){domBuilder.endPrefixMapping(prefix)}}}else{el.currentNSMap=currentNSMap;el.localNSMap=localNSMap;return true}}function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){if(/^(?:script|textarea)$/i.test(tagName)){var elEndStart=source.indexOf("</"+tagName+">",elStartEnd);var text=source.substring(elStartEnd+1,elEndStart);if(/[&<]/.test(text)){if(/^script$/i.test(tagName)){domBuilder.characters(text,0,text.length);return elEndStart}text=text.replace(/&#?\w+;/g,entityReplacer);domBuilder.characters(text,0,text.length);return elEndStart}}return elStartEnd+1}function fixSelfClosed(source,elStartEnd,tagName,closeMap){var pos=closeMap[tagName];if(pos==null){pos=source.lastIndexOf("</"+tagName+">");if(pos<elStartEnd){pos=source.lastIndexOf("</"+tagName)}closeMap[tagName]=pos}return pos<elStartEnd}function _copy(source,target){for(var n in source){target[n]=source[n]}}function parseDCC(source,start,domBuilder,errorHandler){var next=source.charAt(start+2);switch(next){case"-":if(source.charAt(start+3)==="-"){var end=source.indexOf("-->",start+4);if(end>start){domBuilder.comment(source,start+4,end-start-4);return end+3}else{errorHandler.error("Unclosed comment");return-1}}else{return-1}default:if(source.substr(start+3,6)=="CDATA["){var end=source.indexOf("]]>",start+9);domBuilder.startCDATA();domBuilder.characters(source,start+9,end-start-9);domBuilder.endCDATA();return end+3}var matchs=split(source,start);var len=matchs.length;if(len>1&&/!doctype/i.test(matchs[0][0])){var name=matchs[1][0];var pubid=len>3&&/^public$/i.test(matchs[2][0])&&matchs[3][0];var sysid=len>4&&matchs[4][0];var lastMatch=matchs[len-1];domBuilder.startDTD(name,pubid&&pubid.replace(/^(['"])(.*?)\1$/,"$2"),sysid&&sysid.replace(/^(['"])(.*?)\1$/,"$2"));domBuilder.endDTD();return lastMatch.index+lastMatch[0].length}}return-1}function parseInstruction(source,start,domBuilder){var end=source.indexOf("?>",start);if(end){var match=source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);if(match){var len=match[0].length;domBuilder.processingInstruction(match[1],match[2]);return end+2}else{return-1}}return-1}function ElementAttributes(source){}ElementAttributes.prototype={setTagName:function(tagName){if(!tagNamePattern.test(tagName)){throw new Error("invalid tagName:"+tagName)}this.tagName=tagName},add:function(qName,value,offset){if(!tagNamePattern.test(qName)){throw new Error("invalid attribute:"+qName)}this[this.length++]={qName:qName,value:value,offset:offset}},length:0,getLocalName:function(i){return this[i].localName},getLocator:function(i){return this[i].locator},getQName:function(i){return this[i].qName},getURI:function(i){return this[i].uri},getValue:function(i){return this[i].value}};function _set_proto_(thiz,parent){thiz.__proto__=parent;return thiz}if(!(_set_proto_({},_set_proto_.prototype)instanceof _set_proto_)){_set_proto_=function(thiz,parent){function p(){}p.prototype=parent;p=new p;for(parent in thiz){p[parent]=thiz[parent]}return p}}function split(source,start){var match;var buf=[];var reg=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;reg.lastIndex=start;reg.exec(source);while(match=reg.exec(source)){buf.push(match);if(match[1])return buf}}exports.XMLReader=XMLReader},{}],"/src/js/index.js":[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var templates=require("./templates");var DocUtils=require("docxtemplater").DocUtils;var DOMParser=require("xmldom").DOMParser;function isNaN(number){return!(number===number)}var ImgManager=require("./imgManager");var moduleName="open-xml-templating/docxtemplater-image-module";function getInnerDocx(_ref){var part=_ref.part;return part}function getInnerPptx(_ref2){var part=_ref2.part,left=_ref2.left,right=_ref2.right,postparsed=_ref2.postparsed;var xmlString=postparsed.slice(left+1,right).reduce(function(concat,item){return concat+item.value},"");var xmlDoc=(new DOMParser).parseFromString("<xml>"+xmlString+"</xml>");var offset=xmlDoc.getElementsByTagName("a:off");var ext=xmlDoc.getElementsByTagName("a:ext");part.ext={cx:parseInt(ext[0].getAttribute("cx"),10),cy:parseInt(ext[0].getAttribute("cy"),10)};part.offset={x:parseInt(offset[0].getAttribute("x"),10),y:parseInt(offset[0].getAttribute("y"),10)};return part}var ImageModule=function(){function ImageModule(options){_classCallCheck(this,ImageModule);this.name="ImageModule";this.options=options||{};this.imgManagers={};if(this.options.centered==null){this.options.centered=false}if(this.options.getImage==null){throw new Error("You should pass getImage")}if(this.options.getSize==null){throw new Error("You should pass getSize")}this.imageNumber=1}_createClass(ImageModule,[{key:"optionsTransformer",value:function optionsTransformer(options,docxtemplater){
var relsFiles=docxtemplater.zip.file(/\.xml\.rels/).concat(docxtemplater.zip.file(/\[Content_Types\].xml/)).map(function(file){return file.name});this.fileTypeConfig=docxtemplater.fileTypeConfig;this.fileType=docxtemplater.fileType;this.zip=docxtemplater.zip;options.xmlFileNames=options.xmlFileNames.concat(relsFiles);return options}},{key:"set",value:function set(options){if(options.zip){this.zip=options.zip}if(options.xmlDocuments){this.xmlDocuments=options.xmlDocuments}}},{key:"parse",value:function parse(placeHolderContent){var module=moduleName;var type="placeholder";if(placeHolderContent.substring(0,2)==="%%"){return{type:type,value:placeHolderContent.substr(2),module:module,centered:true}}if(placeHolderContent.substring(0,1)==="%"){return{type:type,value:placeHolderContent.substr(1),module:module,centered:false}}return null}},{key:"postparse",value:function postparse(parsed){var expandTo=void 0;var getInner=void 0;if(this.fileType==="pptx"){expandTo="p:sp";getInner=getInnerPptx}else{expandTo=this.options.centered?"w:p":"w:t";getInner=getInnerDocx}return DocUtils.traits.expandToOne(parsed,{moduleName:moduleName,getInner:getInner,expandTo:expandTo})}},{key:"render",value:function render(part,options){this.imgManagers[options.filePath]=this.imgManagers[options.filePath]||new ImgManager(this.zip,options.filePath,this.xmlDocuments,this.fileType);var imgManager=this.imgManagers[options.filePath];if(!part.type==="placeholder"||part.module!==moduleName){return null}try{var tagValue=options.scopeManager.getValue(part.value);if(!tagValue){throw new Error("tagValue is empty")}var imgBuffer=this.options.getImage(tagValue,part.value);var rId=imgManager.addImageRels(this.getNextImageName(),imgBuffer);var sizePixel=this.options.getSize(imgBuffer,tagValue,part.value);return this.getRenderedPart(part,rId,sizePixel)}catch(e){return{value:this.fileTypeConfig.tagTextXml}}}},{key:"getRenderedPart",value:function getRenderedPart(part,rId,sizePixel){if(isNaN(rId)){throw new Error("rId is NaN, aborting")}var size=[DocUtils.convertPixelsToEmus(sizePixel[0]),DocUtils.convertPixelsToEmus(sizePixel[1])];var centered=this.options.centered||part.centered;var newText=void 0;if(this.fileType==="pptx"){newText=this.getRenderedPartPptx(part,rId,size,centered)}else{newText=this.getRenderedPartDocx(rId,size,centered)}return{value:newText}}},{key:"getRenderedPartPptx",value:function getRenderedPartPptx(part,rId,size,centered){var offset={x:part.offset.x,y:part.offset.y};var cellCX=part.ext.cx;var cellCY=part.ext.cy;var imgW=size[0];var imgH=size[1];if(centered){offset.x+=cellCX/2-imgW/2;offset.y+=cellCY/2-imgH/2}return templates.getPptxImageXml(rId,[imgW,imgH],offset)}},{key:"getRenderedPartDocx",value:function getRenderedPartDocx(rId,size,centered){return centered?templates.getImageXmlCentered(rId,size):templates.getImageXml(rId,size)}},{key:"getNextImageName",value:function getNextImageName(){var name="image_generated_"+this.imageNumber+".png";this.imageNumber++;return name}}]);return ImageModule}();module.exports=ImageModule},{"./imgManager":2,"./templates":3,docxtemplater:5,xmldom:23}]},{},[])("/src/js/index.js")});

/***/ },

/***/ 86870
/*!********************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_docxBuilder/docxtemplater.v3.0.12.min.js ***!
  \********************************************************************************************/
(module) {

(function(f){if(true){module.exports=f()}else // removed by dead control flow
{ var g; }})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=undefined;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=undefined;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}var memoize=require("./memoize");var DOMParser=require("xmldom").DOMParser;var XMLSerializer=require("xmldom").XMLSerializer;var Errors=require("./errors");var DocUtils={};function parser(tag){return _defineProperty({},"get",function get(scope){if(tag==="."){return scope}return scope[tag]})}DocUtils.defaults={nullGetter:function nullGetter(part){if(!part.module){return"undefined"}if(part.module==="rawxml"){return""}return""},parser:memoize(parser),delimiters:{start:"{",end:"}"}};DocUtils.mergeObjects=function(){var resObj={};var obj=void 0,keys=void 0;for(var i=0;i<arguments.length;i+=1){obj=arguments[i];keys=Object.keys(obj);for(var j=0;j<keys.length;j+=1){resObj[keys[j]]=obj[keys[j]]}}return resObj};DocUtils.xml2str=function(xmlNode){var a=new XMLSerializer;return a.serializeToString(xmlNode)};DocUtils.decodeUtf8=function(s){try{if(s===undefined){return undefined}return decodeURIComponent(escape(DocUtils.convertSpaces(s)))}catch(e){var err=new Error("End");err.properties.data=s;err.properties.explanation="Could not decode string to UTF8";throw err}};DocUtils.encodeUtf8=function(s){return unescape(encodeURIComponent(s))};DocUtils.str2xml=function(str,errorHandler){var parser=new DOMParser({errorHandler:errorHandler});return parser.parseFromString(str,"text/xml")};DocUtils.charMap={"&":"&amp;","'":"&apos;","<":"&lt;",">":"&gt;"};var regexStripRegexp=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;DocUtils.escapeRegExp=function(str){return str.replace(regexStripRegexp,"\\$&")};DocUtils.charMapRegexes=Object.keys(DocUtils.charMap).map(function(endChar){var startChar=DocUtils.charMap[endChar];return{rstart:new RegExp(DocUtils.escapeRegExp(startChar),"g"),rend:new RegExp(DocUtils.escapeRegExp(endChar),"g"),start:startChar,end:endChar}});DocUtils.wordToUtf8=function(string){var r=void 0;for(var i=0,l=DocUtils.charMapRegexes.length;i<l;i++){r=DocUtils.charMapRegexes[i];string=string.replace(r.rstart,r.end)}return string};DocUtils.utf8ToWord=function(string){if(typeof string!=="string"){string=string.toString()}var r=void 0;for(var i=0,l=DocUtils.charMapRegexes.length;i<l;i++){r=DocUtils.charMapRegexes[i];string=string.replace(r.rend,r.start)}return string};DocUtils.cloneDeep=function(obj){return JSON.parse(JSON.stringify(obj))};DocUtils.concatArrays=function(arrays){return arrays.reduce(function(result,array){Array.prototype.push.apply(result,array);return result},[])};var spaceRegexp=new RegExp(String.fromCharCode(160),"g");DocUtils.convertSpaces=function(s){return s.replace(spaceRegexp," ")};DocUtils.pregMatchAll=function(regex,content){var matchArray=[];var match=void 0;while((match=regex.exec(content))!=null){matchArray.push({array:match,offset:match.index})}return matchArray};DocUtils.sizeOfObject=function(obj){return Object.keys(obj).length};function throwXmlTagNotFound(options){var err=new Errors.XTTemplateError("No tag '"+options.element+"' was found at the "+options.position);err.properties={id:"no_xml_tag_found_at_"+options.position,explanation:"No tag '"+options.element+"' was found at the "+options.position,parsed:options.parsed,index:options.index,element:options.element};throw err}DocUtils.getRight=function(parsed,element,index){for(var i=index,l=parsed.length;i<l;i++){var part=parsed[i];if(part.value==="</"+element+">"){return i}}throwXmlTagNotFound({position:"right",element:element,parsed:parsed,index:index})};DocUtils.getLeft=function(parsed,element,index){for(var i=index;i>=0;i--){var part=parsed[i];if(part.value.indexOf("<"+element)===0&&[">"," "].indexOf(part.value[element.length+1])!==-1){return i}}throwXmlTagNotFound({position:"left",element:element,parsed:parsed,index:index})};module.exports=DocUtils},{"./errors":2,"./memoize":5,xmldom:19}],2:[function(require,module,exports){"use strict";function XTError(message){this.name="GenericError";this.message=message;this.stack=new Error(message).stack}XTError.prototype=Error.prototype;function XTTemplateError(message){this.name="TemplateError";this.message=message;this.stack=new Error(message).stack}XTTemplateError.prototype=new XTError;function XTScopeParserError(message){this.name="ScopeParserError";this.message=message;this.stack=new Error(message).stack}XTScopeParserError.prototype=new XTError;function XTInternalError(message){this.name="InternalError";this.properties={explanation:"InternalError"};this.message=message;this.stack=new Error(message).stack}XTInternalError.prototype=new XTError;module.exports={XTError:XTError,XTTemplateError:XTTemplateError,XTInternalError:XTInternalError,XTScopeParserError:XTScopeParserError}},{}],3:[function(require,module,exports){"use strict";var loopModule=require("./modules/loop");var spacePreserveModule=require("./modules/space-preserve");var rawXmlModule=require("./modules/rawxml");var expandPairTrait=require("./modules/expand-pair-trait");var render=require("./modules/render");var PptXFileTypeConfig={getTemplatedFiles:function getTemplatedFiles(zip){var slideTemplates=zip.file(/ppt\/(slides|slideMasters)\/(slide|slideMaster)\d+\.xml/).map(function(file){return file.name});return slideTemplates.concat(["ppt/presentation.xml"])},textPath:"ppt/slides/slide1.xml",tagsXmlTextArray:["a:t","m:t"],tagsXmlLexedArray:["p:sp","a:tc","a:tr","a:table","a:p","a:r"],tagRawXml:"p:sp",tagTextXml:"a:t",baseModules:[render,expandPairTrait,rawXmlModule,loopModule]};var DocXFileTypeConfig={getTemplatedFiles:function getTemplatedFiles(zip){var slideTemplates=zip.file(/word\/(header|footer)\d+\.xml/).map(function(file){return file.name});return slideTemplates.concat(["word/document.xml"])},textPath:"word/document.xml",tagsXmlTextArray:["w:t","m:t"],tagsXmlLexedArray:["w:tc","w:tr","w:table","w:p","w:r"],tagRawXml:"w:p",tagTextXml:"w:t",baseModules:[render,spacePreserveModule,expandPairTrait,rawXmlModule,loopModule]};module.exports={docx:DocXFileTypeConfig,pptx:PptXFileTypeConfig}},{"./modules/expand-pair-trait":8,"./modules/loop":9,"./modules/rawxml":10,"./modules/render":11,"./modules/space-preserve":12}],4:[function(require,module,exports){"use strict";var Errors=require("./errors");var DocUtils=require("./doc-utils");function inRange(range,match){return range[0]<=match.offset&&match.offset<range[1]}function updateInTextTag(part,inTextTag){if(part.type==="tag"&&part.position==="start"&&part.text){if(inTextTag){throw new Error("Malformed xml : Already in text tag")}return true}if(part.type==="tag"&&part.position==="end"&&part.text){if(!inTextTag){throw new Error("Malformed xml : Already not in text tag")}return false}return inTextTag}function offsetSort(a,b){return a.offset-b.offset}function getTag(tag){var start=1;if(tag[1]==="/"){start=2}var index=tag.indexOf(" ");var end=index===-1?tag.length-1:index;return{tag:tag.slice(start,end),position:start===1?"start":"end"}}function tagMatcher(content,textMatchArray,othersMatchArray){var cursor=0;var contentLength=content.length;var allMatches=DocUtils.concatArrays([textMatchArray.map(function(tag){return{tag:tag,text:true}}),othersMatchArray.map(function(tag){return{tag:tag,text:false}})]).reduce(function(allMatches,t){allMatches[t.tag]=t.text;return allMatches},{});var totalMatches=[];while(cursor<contentLength){cursor=content.indexOf("<",cursor);if(cursor===-1){break}var offset=cursor;cursor=content.indexOf(">",cursor);var tagText=content.slice(offset,cursor+1);var _getTag=getTag(tagText),tag=_getTag.tag,position=_getTag.position;var text=allMatches[tag];if(text==null){continue}totalMatches.push({type:"tag",position:position,text:text,offset:offset,value:tagText})}return totalMatches}function throwUnopenedTagException(options){var err=new Errors.XTTemplateError("Unopened tag");err.properties={xtag:options.xtag.split(" ")[0],id:"unopened_tag",context:options.xtag,explanation:"The tag beginning with '"+options.xtag.substr(0,10)+"' is unclosed"};throw err}function throwUnclosedTagException(options){var err=new Errors.XTTemplateError("Unclosed tag");err.properties={xtag:options.xtag.split(" ")[0].substr(1),id:"unclosed_tag",context:options.xtag,explanation:"The tag beginning with '"+options.xtag.substr(0,10)+"' is unclosed"};throw err}function assertDelimiterOrdered(delimiterMatches,fullText){var inDelimiter=false;var lastDelimiterMatch={offset:0};var xtag=void 0;delimiterMatches.forEach(function(delimiterMatch){xtag=fullText.substr(lastDelimiterMatch.offset,delimiterMatch.offset-lastDelimiterMatch.offset);if(delimiterMatch.position==="start"&&inDelimiter||delimiterMatch.position==="end"&&!inDelimiter){if(delimiterMatch.position==="start"){throwUnclosedTagException({xtag:xtag})}else{throwUnopenedTagException({xtag:xtag})}}inDelimiter=!inDelimiter;lastDelimiterMatch=delimiterMatch});var delimiterMatch={offset:fullText.length};xtag=fullText.substr(lastDelimiterMatch.offset,delimiterMatch.offset-lastDelimiterMatch.offset);if(inDelimiter){throwUnclosedTagException({xtag:xtag})}}function getAllIndexes(arr,val,position){var indexes=[];var offset=-1;do{offset=arr.indexOf(val,offset+1);if(offset!==-1){indexes.push({offset:offset,position:position})}}while(offset!==-1);return indexes}function Reader(innerContentParts){var _this=this;this.innerContentParts=innerContentParts;this.full="";this.parseDelimiters=function(delimiters){_this.full=_this.innerContentParts.join("");var offset=0;_this.ranges=_this.innerContentParts.map(function(part){offset+=part.length;return offset-part.length});var delimiterMatches=DocUtils.concatArrays([getAllIndexes(_this.full,delimiters.start,"start"),getAllIndexes(_this.full,delimiters.end,"end")]).sort(offsetSort);assertDelimiterOrdered(delimiterMatches,_this.full);var delimiterLength={start:delimiters.start.length,end:delimiters.end.length};var cutNext=0;var delimiterIndex=0;_this.parsed=_this.ranges.map(function(offset,i){var range=[offset,offset+this.innerContentParts[i].length];var partContent=this.innerContentParts[i];var delimitersInOffset=[];while(delimiterIndex<delimiterMatches.length&&inRange(range,delimiterMatches[delimiterIndex])){delimitersInOffset.push(delimiterMatches[delimiterIndex]);delimiterIndex++}var parts=[];var cursor=0;if(cutNext>0){cursor=cutNext;cutNext=0}delimitersInOffset.forEach(function(delimiterInOffset){var value=partContent.substr(cursor,delimiterInOffset.offset-offset-cursor);if(value.length>0){parts.push({type:"content",value:value})}parts.push({type:"delimiter",position:delimiterInOffset.position});cursor=delimiterInOffset.offset-offset+delimiterLength[delimiterInOffset.position]});cutNext=cursor-partContent.length;var value=partContent.substr(cursor);if(value.length>0){parts.push({type:"content",value:value})}return parts},_this)}}module.exports={parse:function parse(xmlparsed,delimiters){var inTextTag=false;var innerContentParts=[];xmlparsed.forEach(function(part){inTextTag=updateInTextTag(part,inTextTag);if(inTextTag&&part.type==="content"){innerContentParts.push(part.value)}});var reader=new Reader(innerContentParts);reader.parseDelimiters(delimiters);var newArray=[];var index=0;xmlparsed.forEach(function(part){inTextTag=updateInTextTag(part,inTextTag);if(part.type==="content"){part.position=inTextTag?"insidetag":"outsidetag"}if(inTextTag&&part.type==="content"){Array.prototype.push.apply(newArray,reader.parsed[index].map(function(p){if(p.type==="content"){p.position="insidetag"}return p}));index++}else{newArray.push(part)}});return newArray},xmlparse:function xmlparse(content,xmltags){var matches=tagMatcher(content,xmltags.text,xmltags.other);var cursor=0;var parsed=matches.reduce(function(parsed,match){var value=content.substr(cursor,match.offset-cursor);if(value.length>0){parsed.push({type:"content",value:value})}cursor=match.offset+match.value.length;delete match.offset;if(match.value.length>0){parsed.push(match)}return parsed},[]);var value=content.substr(cursor);if(value.length>0){parsed.push({type:"content",value:value})}return parsed}}},{"./doc-utils":1,"./errors":2}],5:[function(require,module,exports){"use strict";function memoize(func){var stringifyJson=JSON.stringify,cache={};function cachedfun(){var hash=stringifyJson(arguments);return hash in cache?cache[hash]:cache[hash]=func.apply(this,arguments)}return cachedfun}module.exports=memoize},{}],6:[function(require,module,exports){"use strict";function getMinFromArrays(arrays,state){var minIndex=-1;for(var i=0,l=arrays.length;i<l;i++){if(state[i]>=arrays[i].length){continue}if(minIndex===-1||arrays[i][state[i]].offset<arrays[minIndex][state[minIndex]].offset){minIndex=i}}if(minIndex===-1){throw new Error("minIndex negative")}return minIndex}module.exports=function(arrays){var totalLength=arrays.reduce(function(sum,array){return sum+array.length},0);arrays=arrays.filter(function(array){return array.length>0});var resultArray=new Array(totalLength);var state=arrays.map(function(){return 0});var i=0;while(i<=totalLength-1){var arrayIndex=getMinFromArrays(arrays,state);resultArray[i]=arrays[arrayIndex][state[arrayIndex]];state[arrayIndex]++;i++}return resultArray}},{}],7:[function(require,module,exports){"use strict";function emptyFun(){}function identity(i){return i}module.exports=function(module){var defaults={set:emptyFun,parse:emptyFun,render:emptyFun,getTraits:emptyFun,optionsTransformer:identity,getRenderedMap:identity,postparse:identity};if(Object.keys(defaults).every(function(key){return!module[key]})){throw new Error("This module cannot be wrapped, because it doesn't define any of the necessary functions")}Object.keys(defaults).forEach(function(key){module[key]=module[key]||defaults[key]});return module}},{}],8:[function(require,module,exports){"use strict";var traitName="expandPair";var mergeSort=require("../mergesort");var DocUtils=require("../doc-utils");var wrapper=require("../module-wrapper");var _require=require("../traits"),getExpandToDefault=_require.getExpandToDefault;var Errors=require("../errors");function throwUnmatchedLoopException(options){var location=options.location;var t=location==="start"?"unclosed":"unopened";var T=location==="start"?"Unclosed":"Unopened";var err=new Errors.XTTemplateError(T+" loop");var tag=options.part.value;err.properties={id:t+"_loop",explanation:"The loop with tag "+tag+" is "+t,xtag:tag};throw err}function throwClosingTagNotMatchOpeningTag(options){var tags=options.tags;var err=new Errors.XTTemplateError("Closing tag does not match opening tag");err.properties={id:"closing_tag_does_not_match_opening_tag",explanation:'The tag "'+tags[0].value+'" is closed by the tag "'+tags[1].value+'"',openingtag:tags[0].value,closingtag:tags[1].value};throw err}function getOpenCountChange(part){switch(part.location){case"start":return 1;case"end":return-1;default:throw new Error("Location should be one of 'start' or 'end' (given : "+part.location+")")}}function getPairs(traits){if(traits.length===0){return[]}var countOpen=1;var firstTrait=traits[0];for(var i=1;i<traits.length;i++){var currentTrait=traits[i];countOpen+=getOpenCountChange(currentTrait.part);if(countOpen===0){if(currentTrait.part.value!==firstTrait.part.value&&currentTrait.part.value!==""){throwClosingTagNotMatchOpeningTag({tags:[firstTrait.part,currentTrait.part]})}var outer=getPairs(traits.slice(i+1));return[[firstTrait,currentTrait]].concat(outer)}}var part=firstTrait.part;throwUnmatchedLoopException({part:part,location:part.location})}var expandPairTrait={name:"ExpandPairTrait",postparse:function postparse(parsed,_ref){var getTraits=_ref.getTraits,_postparse=_ref.postparse;var traits=getTraits(traitName,parsed);traits=traits.map(function(trait){return trait||[]});traits=mergeSort(traits);var pairs=getPairs(traits);var expandedPairs=pairs.map(function(pair){var expandTo=pair[0].part.expandTo;if(expandTo==="auto"){expandTo=getExpandToDefault(parsed.slice(pair[0].offset,pair[1].offset))}if(!expandTo){return[pair[0].offset,pair[1].offset]}var left=DocUtils.getLeft(parsed,expandTo,pair[0].offset);var right=DocUtils.getRight(parsed,expandTo,pair[1].offset);return[left,right]});var currentPairIndex=0;var innerParts=void 0;return parsed.reduce(function(newParsed,part,i){var inPair=currentPairIndex<pairs.length&&expandedPairs[currentPairIndex][0]<=i;var pair=pairs[currentPairIndex];var expandedPair=expandedPairs[currentPairIndex];if(!inPair){newParsed.push(part);return newParsed}if(expandedPair[0]===i){innerParts=[]}if(pair[0].offset!==i&&pair[1].offset!==i){innerParts.push(part)}if(expandedPair[1]===i){var basePart=parsed[pair[0].offset];delete basePart.location;delete basePart.expandTo;basePart.subparsed=_postparse(innerParts);newParsed.push(basePart);currentPairIndex++}return newParsed},[])}};module.exports=function(){return wrapper(expandPairTrait)}},{"../doc-utils":1,"../errors":2,"../mergesort":6,"../module-wrapper":7,"../traits":16}],9:[function(require,module,exports){"use strict";var DocUtils=require("../doc-utils");var dashInnerRegex=/^-([^\s]+)\s(.+)$/;var wrapper=require("../module-wrapper");var moduleName="loop";var loopModule={name:"LoopModule",parse:function parse(placeHolderContent){var module=moduleName;var type="placeholder";if(placeHolderContent[0]==="#"){return{type:type,value:placeHolderContent.substr(1),expandTo:"auto",module:module,location:"start",inverted:false}}if(placeHolderContent[0]==="^"){return{type:type,value:placeHolderContent.substr(1),expandTo:"auto",module:module,location:"start",inverted:true}}if(placeHolderContent[0]==="/"){return{type:type,value:placeHolderContent.substr(1),module:module,location:"end"}}if(placeHolderContent[0]==="-"){var value=placeHolderContent.replace(dashInnerRegex,"$2");var expandTo=placeHolderContent.replace(dashInnerRegex,"$1");return{type:type,value:value,expandTo:expandTo,module:module,location:"start",inverted:false}}return null},getTraits:function getTraits(traitName,parsed){if(traitName!=="expandPair"){return}return parsed.reduce(function(tags,part,offset){if(part.type==="placeholder"&&part.module===moduleName){tags.push({part:part,offset:offset})}return tags},[])},render:function render(part,options){if(!part.type==="placeholder"||part.module!==moduleName){return null}var totalValue=[];function loopOver(scope){var scopeManager=options.scopeManager.createSubScopeManager(scope,part.value);totalValue.push(options.render(DocUtils.mergeObjects({},options,{compiled:part.subparsed,tags:{},scopeManager:scopeManager})))}options.scopeManager.loopOver(part.value,loopOver,part.inverted);return{value:totalValue.join("")}}};module.exports=function(){return wrapper(loopModule)}},{"../doc-utils":1,"../module-wrapper":7}],10:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var DocUtils=require("../doc-utils");var Errors=require("../errors");var moduleName="rawxml";var wrapper=require("../module-wrapper");function throwRawTagShouldBeOnlyTextInParagraph(options){var err=new Errors.XTTemplateError("Raw tag should be the only text in paragraph");var tag=options.part.value;err.properties={id:"raw_xml_tag_should_be_only_text_in_paragraph",explanation:"The tag "+tag,xtag:options.part.value,paragraphParts:options.paragraphParts};throw err}function getInner(_ref){var part=_ref.part,left=_ref.left,right=_ref.right,postparsed=_ref.postparsed,index=_ref.index;var paragraphParts=postparsed.slice(left+1,right);paragraphParts.forEach(function(p,i){if(i===index-left-1){return}if(p.type==="placeholder"||p.type==="content"&&p.position==="insidetag"){throwRawTagShouldBeOnlyTextInParagraph({paragraphParts:paragraphParts,part:part})}});return part}var RawXmlModule=function(){function RawXmlModule(){_classCallCheck(this,RawXmlModule);this.name="RawXmlModule"}_createClass(RawXmlModule,[{key:"optionsTransformer",value:function optionsTransformer(options,docxtemplater){this.fileTypeConfig=docxtemplater.fileTypeConfig;return options}},{key:"parse",value:function parse(placeHolderContent){var type="placeholder";if(placeHolderContent[0]!=="@"){return null}return{type:type,value:placeHolderContent.substr(1),module:moduleName}}},{key:"postparse",value:function postparse(parsed){return DocUtils.traits.expandToOne(parsed,{moduleName:moduleName,getInner:getInner,expandTo:this.fileTypeConfig.tagRawXml})}},{key:"render",value:function render(part,options){if(part.module!==moduleName){return null}var value=options.scopeManager.getValue(part.value);if(value==null){value=options.nullGetter(part)}return{value:value}}}]);return RawXmlModule}();module.exports=function(){return wrapper(new RawXmlModule)}},{"../doc-utils":1,"../errors":2,"../module-wrapper":7}],11:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var wrapper=require("../module-wrapper");var Render=function(){function Render(){_classCallCheck(this,Render);this.name="Render"}_createClass(Render,[{key:"set",value:function set(obj){if(obj.compiled){this.compiled=obj.compiled}if(obj.data!=null){this.data=obj.data}}},{key:"getRenderedMap",value:function getRenderedMap(mapper){var _this=this;return Object.keys(this.compiled).reduce(function(mapper,from){mapper[from]={from:from,data:_this.data};return mapper},mapper)}}]);return Render}();module.exports=function(){return wrapper(new Render)}},{"../module-wrapper":7}],12:[function(require,module,exports){"use strict";var wrapper=require("../module-wrapper");var spacePreserve={name:"SpacePreserveModule",postparse:function postparse(parsed){var chunk=[];var inChunk=false;var result=parsed.reduce(function(parsed,part){if(part.type==="tag"&&part.position==="start"&&part.text&&part.value==="<w:t>"){inChunk=true}if(inChunk){if(part.type==="placeholder"&&!part.module){chunk[0].value='<w:t xml:space="preserve">'}chunk.push(part)}else{parsed.push(part)}if(part.type==="tag"&&part.position==="end"&&part.text&&part.value==="</w:t>"){Array.prototype.push.apply(parsed,chunk);inChunk=false;chunk=[]}return parsed},[]);Array.prototype.push.apply(result,chunk);return result}};module.exports=function(){return wrapper(spacePreserve)}},{"../module-wrapper":7}],13:[function(require,module,exports){"use strict";var DocUtils=require("./doc-utils");var parser={postparse:function postparse(parsed,modules){function getTraits(traitName,parsed){return modules.map(function(module){return module.getTraits(traitName,parsed)})}function postparse(parsed){return modules.reduce(function(parsed,module){return module.postparse(parsed,{postparse:postparse,getTraits:getTraits})},parsed)}return postparse(parsed)},parse:function parse(lexed,modules){function moduleParse(placeHolderContent,parsed){var moduleParsed=void 0;for(var i=0,l=modules.length;i<l;i++){var _module=modules[i];moduleParsed=_module.parse(placeHolderContent);if(moduleParsed){parsed.push(moduleParsed);return moduleParsed}}return null}var inPlaceHolder=false;var placeHolderContent=void 0;var tailParts=[];return lexed.reduce(function(parsed,token){if(token.type==="delimiter"){inPlaceHolder=token.position==="start";if(token.position==="end"){placeHolderContent=DocUtils.wordToUtf8(placeHolderContent);if(!moduleParse(placeHolderContent,parsed)){parsed.push({type:"placeholder",value:placeHolderContent})}Array.prototype.push.apply(parsed,tailParts);tailParts=[];return parsed}placeHolderContent="";return parsed}if(inPlaceHolder){if(token.type==="content"&&token.position==="insidetag"){placeHolderContent+=token.value}else{tailParts.push(token)}return parsed}parsed.push(token);return parsed},[])}};module.exports=parser},{"./doc-utils":1}],14:[function(require,module,exports){"use strict";var ScopeManager=require("./scope-manager");var DocUtils=require("./doc-utils");function moduleRender(part,options){var moduleRendered=void 0;for(var i=0,l=options.modules.length;i<l;i++){var _module=options.modules[i];moduleRendered=_module.render(part,options);if(moduleRendered){return moduleRendered}}return false}function render(options){options.render=render;options.modules=options.modules;if(!options.scopeManager){options.scopeManager=ScopeManager.createBaseScopeManager(options)}return options.compiled.map(function(part){var moduleRendered=moduleRender(part,options);if(moduleRendered){return moduleRendered.value}if(part.type==="placeholder"){var value=options.scopeManager.getValue(part.value);if(value==null){value=options.nullGetter(part)}return DocUtils.utf8ToWord(value)}if(part.type==="content"||part.type==="tag"){return part.value}throw new Error('Unimplemented tag type "'+part.type+'"')}).join("")}module.exports=render},{"./doc-utils":1,"./scope-manager":15}],15:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Errors=require("./errors");var ScopeManager=function(){function ScopeManager(options){_classCallCheck(this,ScopeManager);this.scopePath=options.scopePath;this.scopeList=options.scopeList;this.parser=options.parser}_createClass(ScopeManager,[{key:"loopOver",value:function loopOver(tag,callback,inverted){inverted=inverted||false;return this.loopOverValue(this.getValue(tag),callback,inverted)}},{key:"functorIfInverted",value:function functorIfInverted(inverted,functor,value){if(inverted){functor(value)}}},{key:"isValueFalsy",value:function isValueFalsy(value,type){return value==null||!value||type==="[object Array]"&&value.length===0}},{key:"loopOverValue",value:function loopOverValue(value,functor,inverted){var type=Object.prototype.toString.call(value);var currentValue=this.scopeList[this.num];if(this.isValueFalsy(value,type)){return this.functorIfInverted(inverted,functor,currentValue)}if(type==="[object Array]"){for(var i=0,scope;i<value.length;i++){scope=value[i];this.functorIfInverted(!inverted,functor,scope)}return}if(type==="[object Object]"){return this.functorIfInverted(!inverted,functor,value)}if(value===true){return this.functorIfInverted(!inverted,functor,currentValue)}}},{key:"getValue",value:function getValue(tag,num){this.num=num==null?this.scopeList.length-1:num;var err=void 0;var parser=void 0;var result=void 0;var scope=this.scopeList[this.num];try{parser=this.parser(tag)}catch(error){err=new Errors.XTScopeParserError("Scope parser compilation failed");err.properties={id:"scopeparser_compilation_failed",tag:tag,explanation:"The scope parser for the tag "+tag+" failed to compile",rootError:error};throw err}try{result=parser.get(scope,{num:this.num,scopeList:this.scopeList})}catch(error){err=new Errors.XTScopeParserError("Scope parser execution failed");err.properties={id:"scopeparser_execution_failed",explanation:"The scope parser for the tag "+tag+" failed to execute",scope:scope,tag:tag,rootError:error};throw err}if(result==null&&this.num>0){return this.getValue(tag,this.num-1)}return result}},{key:"createSubScopeManager",value:function createSubScopeManager(scope,tag){var options={scopePath:this.scopePath.slice(0),scopeList:this.scopeList.slice(0)};options.parser=this.parser;options.scopeList=this.scopeList.concat(scope);options.scopePath=this.scopePath.concat(tag);return new ScopeManager(options)}}]);return ScopeManager}();ScopeManager.createBaseScopeManager=function(_ref){var parser=_ref.parser,tags=_ref.tags;var options={parser:parser,tags:tags};options.scopePath=[];options.scopeList=[tags];return new ScopeManager(options)};module.exports=ScopeManager},{"./errors":2}],16:[function(require,module,exports){"use strict";var DocUtils=require("./doc-utils");var Errors=require("./errors");function throwRawTagNotInParagraph(options){var err=new Errors.XTTemplateError("Raw tag not in paragraph");var tag=options.part.value;err.properties={id:"raw_tag_outerxml_invalid",explanation:'The tag "'+tag+'"',rootError:options.rootError,xtag:tag,postparsed:options.postparsed,expandTo:options.expandTo,index:options.index};throw err}function lastTagIsOpenTag(array,tag){if(array.length===0){return false}var lastTag=array[array.length-1];var innerLastTag=lastTag.tag.substr(1);var innerCurrentTag=tag.substr(2,tag.length-3);return innerLastTag.indexOf(innerCurrentTag)===0}function addTag(array,tag){array.push({tag:tag});return array}function getListXmlElements(parts){var tags=parts.filter(function(part){return part.type==="tag"}).map(function(part){return part.value});var result=[];for(var i=0,tag;i<tags.length;i++){tag=tags[i];if(tag[1]==="/"){if(lastTagIsOpenTag(result,tag)){result.pop()}else{result=addTag(result,tag)}}else if(tag[tag.length-1]!=="/"){result=addTag(result,tag)}}return result}function getExpandToDefault(parts){var xmlElements=getListXmlElements(parts);for(var i=0;i<xmlElements.length;i++){var xmlElement=xmlElements[i];if(xmlElement.tag.indexOf("<w:tc")===0){return"w:tr"}if(xmlElement.tag.indexOf("<a:tc")===0){return"a:tr"}}return false}function expandOne(part,postparsed,options){var expandTo=part.expandTo||options.expandTo;var index=postparsed.indexOf(part);if(!expandTo){return postparsed}var right=void 0,left=void 0;try{right=DocUtils.getRight(postparsed,expandTo,index);left=DocUtils.getLeft(postparsed,expandTo,index)}catch(rootError){if(rootError instanceof Errors.XTTemplateError){throwRawTagNotInParagraph({part:part,rootError:rootError,postparsed:postparsed,expandTo:expandTo,index:index})}throw rootError}var leftParts=postparsed.slice(left,index);var rightParts=postparsed.slice(index+1,right+1);var inner=options.getInner({index:index,part:part,leftParts:leftParts,rightParts:rightParts,left:left,right:right,postparsed:postparsed});if(!inner.length){inner.expanded=[leftParts,rightParts];inner=[inner]}return DocUtils.concatArrays([postparsed.slice(0,left),inner,postparsed.slice(right+1)])}function expandToOne(postparsed,options){var expandToElements=postparsed.reduce(function(elements,part){if(part.type==="placeholder"&&part.module===options.moduleName){elements.push(part)}return elements},[]);expandToElements.forEach(function(part){postparsed=expandOne(part,postparsed,options)});return postparsed}module.exports={expandToOne:expandToOne,getExpandToDefault:getExpandToDefault}},{"./doc-utils":1,"./errors":2}],17:[function(require,module,exports){"use strict";var DocUtils=require("./doc-utils");var memoize=require("./memoize");function handleRecursiveCase(res){function replacerUnshift(){var pn={array:Array.prototype.slice.call(arguments)};pn.array.shift();var match=pn.array[0]+pn.array[1];pn.array.unshift(match);pn.array.pop();var offset=pn.array.pop();pn.offset=offset;pn.first=true;res.matches.unshift(pn);res.charactersAdded.unshift(0);return res.charactersAddedCumulative.unshift(0)}if(res.content.indexOf("<")===-1&&res.content.indexOf(">")===-1){res.content.replace(/^()([^<>]*)$/,replacerUnshift)}var r=new RegExp("^()([^<]+)</(?:"+res.tagsXmlArrayJoined+")>");res.content.replace(r,replacerUnshift);function replacerPush(){var pn={array:Array.prototype.slice.call(arguments)};pn.array.pop();var offset=pn.array.pop();pn.offset=offset;pn.last=true;res.matches.push(pn);res.charactersAdded.push(0);return res.charactersAddedCumulative.push(0)}r=new RegExp("(<(?:"+res.tagsXmlArrayJoined+")[^>]*>)([^>]+)$");res.content.replace(r,replacerPush);return res}function xmlMatcher(content,tagsXmlArray){var res={};res.content=content;res.tagsXmlArray=tagsXmlArray;res.tagsXmlArrayJoined=res.tagsXmlArray.join("|");var regexp=new RegExp("(<(?:"+res.tagsXmlArrayJoined+")[^>]*>)([^<>]*)</(?:"+res.tagsXmlArrayJoined+")>","g");res.matches=DocUtils.pregMatchAll(regexp,res.content);res.charactersAddedCumulative=res.matches.map(function(){return 0});res.charactersAdded=res.matches.map(function(){return 0});return handleRecursiveCase(res)}var memoized=memoize(xmlMatcher);module.exports=function(content,tagsXmlArray){return DocUtils.cloneDeep(memoized(content,tagsXmlArray))}},{"./doc-utils":1,"./memoize":5}],18:[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var DocUtils=require("./doc-utils");var ScopeManager=require("./scope-manager");var xmlMatcher=require("./xml-matcher");var Errors=require("./errors");var Lexer=require("./lexer");var Parser=require("./parser.js");var _render=require("./render.js");function _getFullText(content,tagsXmlArray){var matcher=xmlMatcher(content,tagsXmlArray);var result=matcher.matches.map(function(match){return match.array[2]});return DocUtils.wordToUtf8(DocUtils.convertSpaces(result.join("")))}module.exports=function(){function XmlTemplater(content,options){_classCallCheck(this,XmlTemplater);this.fromJson(options);this.setModules({inspect:{filePath:this.filePath}});this.load(content)}_createClass(XmlTemplater,[{key:"load",value:function load(content){if(typeof content!=="string"){var err=new Errors.XTInternalError("Content must be a string");err.properties.id="xmltemplater_content_must_be_string";throw err}this.content=content}},{key:"setTags",value:function setTags(tags){this.tags=tags!=null?tags:{};this.scopeManager=ScopeManager.createBaseScopeManager({tags:this.tags,parser:this.parser});return this}},{key:"fromJson",value:function fromJson(options){this.filePath=options.filePath;this.modules=options.modules;this.fileTypeConfig=options.fileTypeConfig;Object.keys(DocUtils.defaults).map(function(key){this[key]=options[key]!=null?options[key]:DocUtils.defaults[key]},this)}},{key:"getFullText",value:function getFullText(){return _getFullText(this.content,this.fileTypeConfig.tagsXmlTextArray)}},{key:"setModules",value:function setModules(obj){this.modules.forEach(function(module){module.set(obj)})}},{key:"parse",value:function parse(){this.xmllexed=Lexer.xmlparse(this.content,{text:this.fileTypeConfig.tagsXmlTextArray,other:this.fileTypeConfig.tagsXmlLexedArray});this.setModules({inspect:{xmllexed:this.xmllexed}});this.lexed=Lexer.parse(this.xmllexed,this.delimiters);this.setModules({inspect:{lexed:this.lexed}});this.parsed=Parser.parse(this.lexed,this.modules);this.setModules({inspect:{parsed:this.parsed}});this.postparsed=Parser.postparse(this.parsed,this.modules);return this}},{key:"render",value:function render(to){this.filePath=to;this.setModules({inspect:{postparsed:this.postparsed}});this.content=_render({compiled:this.postparsed,tags:this.tags,modules:this.modules,parser:this.parser,nullGetter:this.nullGetter,filePath:this.filePath});this.setModules({inspect:{content:this.content}});return this}}]);return XmlTemplater}()},{"./doc-utils":1,"./errors":2,"./lexer":4,"./parser.js":13,"./render.js":14,"./scope-manager":15,"./xml-matcher":17}],19:[function(require,module,exports){function DOMParser(options){this.options=options||{locator:{}}}DOMParser.prototype.parseFromString=function(source,mimeType){var options=this.options;var sax=new XMLReader;var domBuilder=options.domBuilder||new DOMHandler;var errorHandler=options.errorHandler;var locator=options.locator;var defaultNSMap=options.xmlns||{};var entityMap={lt:"<",gt:">",amp:"&",quot:'"',apos:"'"};if(locator){domBuilder.setDocumentLocator(locator)}sax.errorHandler=buildErrorHandler(errorHandler,domBuilder,locator);sax.domBuilder=options.domBuilder||domBuilder;if(/\/x?html?$/.test(mimeType)){entityMap.nbsp=" ";entityMap.copy="©";defaultNSMap[""]="http://www.w3.org/1999/xhtml"}defaultNSMap.xml=defaultNSMap.xml||"http://www.w3.org/XML/1998/namespace";if(source){sax.parse(source,defaultNSMap,entityMap)}else{sax.errorHandler.error("invalid doc source")}return domBuilder.doc};function buildErrorHandler(errorImpl,domBuilder,locator){if(!errorImpl){if(domBuilder instanceof DOMHandler){return domBuilder}errorImpl=domBuilder}var errorHandler={};var isCallback=errorImpl instanceof Function;locator=locator||{};function build(key){var fn=errorImpl[key];if(!fn&&isCallback){fn=errorImpl.length==2?function(msg){errorImpl(key,msg)}:errorImpl}errorHandler[key]=fn&&function(msg){fn("[xmldom "+key+"]\t"+msg+_locator(locator))}||function(){}}build("warning");build("error");build("fatalError");return errorHandler}function DOMHandler(){this.cdata=false}function position(locator,node){node.lineNumber=locator.lineNumber;node.columnNumber=locator.columnNumber}DOMHandler.prototype={startDocument:function(){this.doc=(new DOMImplementation).createDocument(null,null,null);if(this.locator){this.doc.documentURI=this.locator.systemId}},startElement:function(namespaceURI,localName,qName,attrs){var doc=this.doc;var el=doc.createElementNS(namespaceURI,qName||localName);var len=attrs.length;appendElement(this,el);this.currentElement=el;this.locator&&position(this.locator,el);for(var i=0;i<len;i++){var namespaceURI=attrs.getURI(i);var value=attrs.getValue(i);var qName=attrs.getQName(i);var attr=doc.createAttributeNS(namespaceURI,qName);this.locator&&position(attrs.getLocator(i),attr);attr.value=attr.nodeValue=value;el.setAttributeNode(attr)}},endElement:function(namespaceURI,localName,qName){var current=this.currentElement;var tagName=current.tagName;this.currentElement=current.parentNode},startPrefixMapping:function(prefix,uri){},endPrefixMapping:function(prefix){},processingInstruction:function(target,data){var ins=this.doc.createProcessingInstruction(target,data);this.locator&&position(this.locator,ins);appendElement(this,ins)},ignorableWhitespace:function(ch,start,length){},characters:function(chars,start,length){chars=_toString.apply(this,arguments);if(chars){if(this.cdata){var charNode=this.doc.createCDATASection(chars)}else{var charNode=this.doc.createTextNode(chars)}if(this.currentElement){this.currentElement.appendChild(charNode)}else if(/^\s*$/.test(chars)){this.doc.appendChild(charNode)}this.locator&&position(this.locator,charNode)}},skippedEntity:function(name){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(locator){if(this.locator=locator){locator.lineNumber=0}},comment:function(chars,start,length){chars=_toString.apply(this,arguments);var comm=this.doc.createComment(chars);this.locator&&position(this.locator,comm);appendElement(this,comm)},startCDATA:function(){this.cdata=true},endCDATA:function(){this.cdata=false},startDTD:function(name,publicId,systemId){var impl=this.doc.implementation;if(impl&&impl.createDocumentType){var dt=impl.createDocumentType(name,publicId,systemId);this.locator&&position(this.locator,dt);appendElement(this,dt)}},warning:function(error){console.warn("[xmldom warning]\t"+error,_locator(this.locator))},error:function(error){console.error("[xmldom error]\t"+error,_locator(this.locator))},fatalError:function(error){console.error("[xmldom fatalError]\t"+error,_locator(this.locator));throw error}};function _locator(l){if(l){return"\n@"+(l.systemId||"")+"#[line:"+l.lineNumber+",col:"+l.columnNumber+"]"}}function _toString(chars,start,length){if(typeof chars=="string"){return chars.substr(start,length)}else{if(chars.length>=start+length||start){return new java.lang.String(chars,start,length)+""}return chars}}"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){DOMHandler.prototype[key]=function(){return null}});function appendElement(hander,node){if(!hander.currentElement){hander.doc.appendChild(node)}else{hander.currentElement.appendChild(node)}}var XMLReader=require("./sax").XMLReader;var DOMImplementation=exports.DOMImplementation=require("./dom").DOMImplementation;exports.XMLSerializer=require("./dom").XMLSerializer;exports.DOMParser=DOMParser},{"./dom":20,"./sax":21}],20:[function(require,module,exports){function copy(src,dest){for(var p in src){dest[p]=src[p]}}function _extends(Class,Super){var pt=Class.prototype;if(Object.create){var ppt=Object.create(Super.prototype);pt.__proto__=ppt}if(!(pt instanceof Super)){function t(){}t.prototype=Super.prototype;t=new t;copy(pt,t);Class.prototype=pt=t}if(pt.constructor!=Class){if(typeof Class!="function"){console.error("unknow Class:"+Class)}pt.constructor=Class}}var htmlns="http://www.w3.org/1999/xhtml";var NodeType={};var ELEMENT_NODE=NodeType.ELEMENT_NODE=1;var ATTRIBUTE_NODE=NodeType.ATTRIBUTE_NODE=2;var TEXT_NODE=NodeType.TEXT_NODE=3;var CDATA_SECTION_NODE=NodeType.CDATA_SECTION_NODE=4;var ENTITY_REFERENCE_NODE=NodeType.ENTITY_REFERENCE_NODE=5;var ENTITY_NODE=NodeType.ENTITY_NODE=6;var PROCESSING_INSTRUCTION_NODE=NodeType.PROCESSING_INSTRUCTION_NODE=7;var COMMENT_NODE=NodeType.COMMENT_NODE=8;var DOCUMENT_NODE=NodeType.DOCUMENT_NODE=9;var DOCUMENT_TYPE_NODE=NodeType.DOCUMENT_TYPE_NODE=10;var DOCUMENT_FRAGMENT_NODE=NodeType.DOCUMENT_FRAGMENT_NODE=11;var NOTATION_NODE=NodeType.NOTATION_NODE=12;var ExceptionCode={};var ExceptionMessage={};var INDEX_SIZE_ERR=ExceptionCode.INDEX_SIZE_ERR=(ExceptionMessage[1]="Index size error",1);var DOMSTRING_SIZE_ERR=ExceptionCode.DOMSTRING_SIZE_ERR=(ExceptionMessage[2]="DOMString size error",2);var HIERARCHY_REQUEST_ERR=ExceptionCode.HIERARCHY_REQUEST_ERR=(ExceptionMessage[3]="Hierarchy request error",3);var WRONG_DOCUMENT_ERR=ExceptionCode.WRONG_DOCUMENT_ERR=(ExceptionMessage[4]="Wrong document",4);var INVALID_CHARACTER_ERR=ExceptionCode.INVALID_CHARACTER_ERR=(ExceptionMessage[5]="Invalid character",5);var NO_DATA_ALLOWED_ERR=ExceptionCode.NO_DATA_ALLOWED_ERR=(ExceptionMessage[6]="No data allowed",6);var NO_MODIFICATION_ALLOWED_ERR=ExceptionCode.NO_MODIFICATION_ALLOWED_ERR=(ExceptionMessage[7]="No modification allowed",7);var NOT_FOUND_ERR=ExceptionCode.NOT_FOUND_ERR=(ExceptionMessage[8]="Not found",8);var NOT_SUPPORTED_ERR=ExceptionCode.NOT_SUPPORTED_ERR=(ExceptionMessage[9]="Not supported",9);var INUSE_ATTRIBUTE_ERR=ExceptionCode.INUSE_ATTRIBUTE_ERR=(ExceptionMessage[10]="Attribute in use",10);var INVALID_STATE_ERR=ExceptionCode.INVALID_STATE_ERR=(ExceptionMessage[11]="Invalid state",11);var SYNTAX_ERR=ExceptionCode.SYNTAX_ERR=(ExceptionMessage[12]="Syntax error",12);var INVALID_MODIFICATION_ERR=ExceptionCode.INVALID_MODIFICATION_ERR=(ExceptionMessage[13]="Invalid modification",13);var NAMESPACE_ERR=ExceptionCode.NAMESPACE_ERR=(ExceptionMessage[14]="Invalid namespace",14);var INVALID_ACCESS_ERR=ExceptionCode.INVALID_ACCESS_ERR=(ExceptionMessage[15]="Invalid access",15);function DOMException(code,message){if(message instanceof Error){var error=message}else{error=this;Error.call(this,ExceptionMessage[code]);this.message=ExceptionMessage[code];if(Error.captureStackTrace)Error.captureStackTrace(this,DOMException)}error.code=code;if(message)this.message=this.message+": "+message;return error}DOMException.prototype=Error.prototype;copy(ExceptionCode,DOMException);function NodeList(){}NodeList.prototype={length:0,item:function(index){return this[index]||null},toString:function(isHTML,nodeFilter){for(var buf=[],i=0;i<this.length;i++){serializeToString(this[i],buf,isHTML,nodeFilter)}return buf.join("")}};function LiveNodeList(node,refresh){this._node=node;this._refresh=refresh;_updateLiveList(this)}function _updateLiveList(list){var inc=list._node._inc||list._node.ownerDocument._inc;if(list._inc!=inc){var ls=list._refresh(list._node);__set__(list,"length",ls.length);copy(ls,list);list._inc=inc}}LiveNodeList.prototype.item=function(i){_updateLiveList(this);return this[i]};_extends(LiveNodeList,NodeList);function NamedNodeMap(){}function _findNodeIndex(list,node){var i=list.length;while(i--){if(list[i]===node){return i}}}function _addNamedNode(el,list,newAttr,oldAttr){if(oldAttr){list[_findNodeIndex(list,oldAttr)]=newAttr}else{list[list.length++]=newAttr}if(el){newAttr.ownerElement=el;var doc=el.ownerDocument;if(doc){oldAttr&&_onRemoveAttribute(doc,el,oldAttr);_onAddAttribute(doc,el,newAttr)}}}function _removeNamedNode(el,list,attr){var i=_findNodeIndex(list,attr);if(i>=0){var lastIndex=list.length-1;while(i<lastIndex){list[i]=list[++i]}list.length=lastIndex;if(el){var doc=el.ownerDocument;if(doc){_onRemoveAttribute(doc,el,attr);attr.ownerElement=null}}}else{throw DOMException(NOT_FOUND_ERR,new Error(el.tagName+"@"+attr))}}NamedNodeMap.prototype={length:0,item:NodeList.prototype.item,getNamedItem:function(key){var i=this.length;while(i--){var attr=this[i];if(attr.nodeName==key){return attr}}},setNamedItem:function(attr){var el=attr.ownerElement;if(el&&el!=this._ownerElement){throw new DOMException(INUSE_ATTRIBUTE_ERR)}var oldAttr=this.getNamedItem(attr.nodeName);_addNamedNode(this._ownerElement,this,attr,oldAttr);return oldAttr},setNamedItemNS:function(attr){var el=attr.ownerElement,oldAttr;if(el&&el!=this._ownerElement){throw new DOMException(INUSE_ATTRIBUTE_ERR)}oldAttr=this.getNamedItemNS(attr.namespaceURI,attr.localName);_addNamedNode(this._ownerElement,this,attr,oldAttr);return oldAttr},removeNamedItem:function(key){var attr=this.getNamedItem(key);_removeNamedNode(this._ownerElement,this,attr);return attr},removeNamedItemNS:function(namespaceURI,localName){var attr=this.getNamedItemNS(namespaceURI,localName);_removeNamedNode(this._ownerElement,this,attr);return attr},getNamedItemNS:function(namespaceURI,localName){var i=this.length;while(i--){var node=this[i];if(node.localName==localName&&node.namespaceURI==namespaceURI){return node}}return null}};function DOMImplementation(features){this._features={};if(features){for(var feature in features){this._features=features[feature]}}}DOMImplementation.prototype={hasFeature:function(feature,version){var versions=this._features[feature.toLowerCase()];if(versions&&(!version||version in versions)){return true}else{return false}},createDocument:function(namespaceURI,qualifiedName,doctype){var doc=new Document;doc.implementation=this;doc.childNodes=new NodeList;doc.doctype=doctype;if(doctype){doc.appendChild(doctype)}if(qualifiedName){var root=doc.createElementNS(namespaceURI,qualifiedName);doc.appendChild(root)}return doc},createDocumentType:function(qualifiedName,publicId,systemId){var node=new DocumentType;node.name=qualifiedName;node.nodeName=qualifiedName;node.publicId=publicId;node.systemId=systemId;return node}};function Node(){}Node.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(newChild,refChild){return _insertBefore(this,newChild,refChild)},replaceChild:function(newChild,oldChild){this.insertBefore(newChild,oldChild);if(oldChild){this.removeChild(oldChild)}},removeChild:function(oldChild){return _removeChild(this,oldChild)},appendChild:function(newChild){return this.insertBefore(newChild,null)},hasChildNodes:function(){return this.firstChild!=null},cloneNode:function(deep){return cloneNode(this.ownerDocument||this,this,deep)},normalize:function(){var child=this.firstChild;while(child){var next=child.nextSibling;if(next&&next.nodeType==TEXT_NODE&&child.nodeType==TEXT_NODE){this.removeChild(next);child.appendData(next.data)}else{child.normalize();child=next}}},isSupported:function(feature,version){return this.ownerDocument.implementation.hasFeature(feature,version)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(namespaceURI){var el=this;while(el){var map=el._nsMap;if(map){for(var n in map){if(map[n]==namespaceURI){return n}}}el=el.nodeType==ATTRIBUTE_NODE?el.ownerDocument:el.parentNode}return null},lookupNamespaceURI:function(prefix){var el=this;while(el){var map=el._nsMap;if(map){if(prefix in map){return map[prefix]}}el=el.nodeType==ATTRIBUTE_NODE?el.ownerDocument:el.parentNode}return null},isDefaultNamespace:function(namespaceURI){var prefix=this.lookupPrefix(namespaceURI);return prefix==null}};function _xmlEncoder(c){return c=="<"&&"&lt;"||c==">"&&"&gt;"||c=="&"&&"&amp;"||c=='"'&&"&quot;"||"&#"+c.charCodeAt()+";"}copy(NodeType,Node);copy(NodeType,Node.prototype);function _visitNode(node,callback){if(callback(node)){return true}if(node=node.firstChild){do{if(_visitNode(node,callback)){return true}}while(node=node.nextSibling)}}function Document(){}function _onAddAttribute(doc,el,newAttr){doc&&doc._inc++;var ns=newAttr.namespaceURI;if(ns=="http://www.w3.org/2000/xmlns/"){el._nsMap[newAttr.prefix?newAttr.localName:""]=newAttr.value}}function _onRemoveAttribute(doc,el,newAttr,remove){doc&&doc._inc++;var ns=newAttr.namespaceURI;if(ns=="http://www.w3.org/2000/xmlns/"){delete el._nsMap[newAttr.prefix?newAttr.localName:""]}}function _onUpdateChild(doc,el,newChild){if(doc&&doc._inc){doc._inc++;var cs=el.childNodes;if(newChild){cs[cs.length++]=newChild}else{var child=el.firstChild;var i=0;while(child){cs[i++]=child;child=child.nextSibling}cs.length=i}}}function _removeChild(parentNode,child){var previous=child.previousSibling;var next=child.nextSibling;if(previous){previous.nextSibling=next}else{parentNode.firstChild=next}if(next){next.previousSibling=previous}else{parentNode.lastChild=previous}_onUpdateChild(parentNode.ownerDocument,parentNode);return child}function _insertBefore(parentNode,newChild,nextChild){var cp=newChild.parentNode;if(cp){cp.removeChild(newChild)}if(newChild.nodeType===DOCUMENT_FRAGMENT_NODE){var newFirst=newChild.firstChild;if(newFirst==null){return newChild}var newLast=newChild.lastChild}else{newFirst=newLast=newChild}var pre=nextChild?nextChild.previousSibling:parentNode.lastChild;newFirst.previousSibling=pre;newLast.nextSibling=nextChild;if(pre){pre.nextSibling=newFirst}else{parentNode.firstChild=newFirst}if(nextChild==null){parentNode.lastChild=newLast}else{nextChild.previousSibling=newLast}do{newFirst.parentNode=parentNode}while(newFirst!==newLast&&(newFirst=newFirst.nextSibling));_onUpdateChild(parentNode.ownerDocument||parentNode,parentNode);if(newChild.nodeType==DOCUMENT_FRAGMENT_NODE){newChild.firstChild=newChild.lastChild=null}return newChild}function _appendSingleChild(parentNode,newChild){var cp=newChild.parentNode;if(cp){var pre=parentNode.lastChild;cp.removeChild(newChild);var pre=parentNode.lastChild}var pre=parentNode.lastChild;newChild.parentNode=parentNode;newChild.previousSibling=pre;newChild.nextSibling=null;if(pre){pre.nextSibling=newChild}else{parentNode.firstChild=newChild}parentNode.lastChild=newChild;_onUpdateChild(parentNode.ownerDocument,parentNode,newChild);return newChild}Document.prototype={nodeName:"#document",nodeType:DOCUMENT_NODE,doctype:null,documentElement:null,_inc:1,insertBefore:function(newChild,refChild){if(newChild.nodeType==DOCUMENT_FRAGMENT_NODE){var child=newChild.firstChild;while(child){var next=child.nextSibling;this.insertBefore(child,refChild);child=next}return newChild}if(this.documentElement==null&&newChild.nodeType==ELEMENT_NODE){this.documentElement=newChild}return _insertBefore(this,newChild,refChild),newChild.ownerDocument=this,newChild},removeChild:function(oldChild){if(this.documentElement==oldChild){this.documentElement=null}return _removeChild(this,oldChild)},importNode:function(importedNode,deep){return importNode(this,importedNode,deep)},getElementById:function(id){var rtv=null;_visitNode(this.documentElement,function(node){if(node.nodeType==ELEMENT_NODE){if(node.getAttribute("id")==id){rtv=node;return true}}});return rtv},createElement:function(tagName){var node=new Element;node.ownerDocument=this;node.nodeName=tagName;node.tagName=tagName;node.childNodes=new NodeList;var attrs=node.attributes=new NamedNodeMap;attrs._ownerElement=node;return node},createDocumentFragment:function(){var node=new DocumentFragment;node.ownerDocument=this;node.childNodes=new NodeList;return node},createTextNode:function(data){var node=new Text;node.ownerDocument=this;node.appendData(data);return node},createComment:function(data){var node=new Comment;node.ownerDocument=this;node.appendData(data);return node},createCDATASection:function(data){var node=new CDATASection;node.ownerDocument=this;node.appendData(data);return node},createProcessingInstruction:function(target,data){var node=new ProcessingInstruction;node.ownerDocument=this;node.tagName=node.target=target;node.nodeValue=node.data=data;return node},createAttribute:function(name){var node=new Attr;node.ownerDocument=this;node.name=name;node.nodeName=name;node.localName=name;node.specified=true;return node},createEntityReference:function(name){var node=new EntityReference;node.ownerDocument=this;node.nodeName=name;return node},createElementNS:function(namespaceURI,qualifiedName){var node=new Element;var pl=qualifiedName.split(":");var attrs=node.attributes=new NamedNodeMap;node.childNodes=new NodeList;node.ownerDocument=this;node.nodeName=qualifiedName;node.tagName=qualifiedName;node.namespaceURI=namespaceURI;if(pl.length==2){node.prefix=pl[0];node.localName=pl[1]}else{node.localName=qualifiedName}attrs._ownerElement=node;return node},createAttributeNS:function(namespaceURI,qualifiedName){var node=new Attr;var pl=qualifiedName.split(":");node.ownerDocument=this;node.nodeName=qualifiedName;node.name=qualifiedName;node.namespaceURI=namespaceURI;node.specified=true;if(pl.length==2){node.prefix=pl[0];node.localName=pl[1]}else{node.localName=qualifiedName}return node}};_extends(Document,Node);function Element(){this._nsMap={}}Element.prototype={nodeType:ELEMENT_NODE,hasAttribute:function(name){return this.getAttributeNode(name)!=null},getAttribute:function(name){var attr=this.getAttributeNode(name);return attr&&attr.value||""},getAttributeNode:function(name){return this.attributes.getNamedItem(name)},setAttribute:function(name,value){var attr=this.ownerDocument.createAttribute(name);attr.value=attr.nodeValue=""+value;this.setAttributeNode(attr)},removeAttribute:function(name){var attr=this.getAttributeNode(name);attr&&this.removeAttributeNode(attr)},appendChild:function(newChild){if(newChild.nodeType===DOCUMENT_FRAGMENT_NODE){return this.insertBefore(newChild,null)}else{return _appendSingleChild(this,newChild)}},setAttributeNode:function(newAttr){return this.attributes.setNamedItem(newAttr)},setAttributeNodeNS:function(newAttr){return this.attributes.setNamedItemNS(newAttr)},removeAttributeNode:function(oldAttr){return this.attributes.removeNamedItem(oldAttr.nodeName)},removeAttributeNS:function(namespaceURI,localName){var old=this.getAttributeNodeNS(namespaceURI,localName);old&&this.removeAttributeNode(old)},hasAttributeNS:function(namespaceURI,localName){return this.getAttributeNodeNS(namespaceURI,localName)!=null},getAttributeNS:function(namespaceURI,localName){var attr=this.getAttributeNodeNS(namespaceURI,localName);return attr&&attr.value||""},setAttributeNS:function(namespaceURI,qualifiedName,value){var attr=this.ownerDocument.createAttributeNS(namespaceURI,qualifiedName);attr.value=attr.nodeValue=""+value;this.setAttributeNode(attr)},getAttributeNodeNS:function(namespaceURI,localName){return this.attributes.getNamedItemNS(namespaceURI,localName)},getElementsByTagName:function(tagName){return new LiveNodeList(this,function(base){var ls=[];_visitNode(base,function(node){if(node!==base&&node.nodeType==ELEMENT_NODE&&(tagName==="*"||node.tagName==tagName)){ls.push(node)}});return ls})},getElementsByTagNameNS:function(namespaceURI,localName){return new LiveNodeList(this,function(base){var ls=[];_visitNode(base,function(node){if(node!==base&&node.nodeType===ELEMENT_NODE&&(namespaceURI==="*"||node.namespaceURI===namespaceURI)&&(localName==="*"||node.localName==localName)){ls.push(node)}});return ls})}};Document.prototype.getElementsByTagName=Element.prototype.getElementsByTagName;Document.prototype.getElementsByTagNameNS=Element.prototype.getElementsByTagNameNS;_extends(Element,Node);function Attr(){}Attr.prototype.nodeType=ATTRIBUTE_NODE;_extends(Attr,Node);function CharacterData(){}CharacterData.prototype={data:"",substringData:function(offset,count){return this.data.substring(offset,offset+count)},appendData:function(text){text=this.data+text;this.nodeValue=this.data=text;this.length=text.length},insertData:function(offset,text){this.replaceData(offset,0,text)},appendChild:function(newChild){throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])},deleteData:function(offset,count){this.replaceData(offset,count,"")},replaceData:function(offset,count,text){var start=this.data.substring(0,offset);var end=this.data.substring(offset+count);text=start+text+end;this.nodeValue=this.data=text;this.length=text.length}};_extends(CharacterData,Node);function Text(){}Text.prototype={nodeName:"#text",nodeType:TEXT_NODE,splitText:function(offset){var text=this.data;var newText=text.substring(offset);text=text.substring(0,offset);this.data=this.nodeValue=text;this.length=text.length;var newNode=this.ownerDocument.createTextNode(newText);if(this.parentNode){this.parentNode.insertBefore(newNode,this.nextSibling)}return newNode}};_extends(Text,CharacterData);function Comment(){}Comment.prototype={nodeName:"#comment",nodeType:COMMENT_NODE};_extends(Comment,CharacterData);function CDATASection(){}CDATASection.prototype={nodeName:"#cdata-section",nodeType:CDATA_SECTION_NODE};_extends(CDATASection,CharacterData);function DocumentType(){}DocumentType.prototype.nodeType=DOCUMENT_TYPE_NODE;_extends(DocumentType,Node);function Notation(){}Notation.prototype.nodeType=NOTATION_NODE;_extends(Notation,Node);function Entity(){}Entity.prototype.nodeType=ENTITY_NODE;_extends(Entity,Node);function EntityReference(){}EntityReference.prototype.nodeType=ENTITY_REFERENCE_NODE;_extends(EntityReference,Node);function DocumentFragment(){}DocumentFragment.prototype.nodeName="#document-fragment";DocumentFragment.prototype.nodeType=DOCUMENT_FRAGMENT_NODE;_extends(DocumentFragment,Node);function ProcessingInstruction(){}ProcessingInstruction.prototype.nodeType=PROCESSING_INSTRUCTION_NODE;_extends(ProcessingInstruction,Node);function XMLSerializer(){}XMLSerializer.prototype.serializeToString=function(node,isHtml,nodeFilter){return nodeSerializeToString.call(node,isHtml,nodeFilter)};Node.prototype.toString=nodeSerializeToString;function nodeSerializeToString(isHtml,nodeFilter){var buf=[];var refNode=this.nodeType==9?this.documentElement:this;var prefix=refNode.prefix;var uri=refNode.namespaceURI;if(uri&&prefix==null){var prefix=refNode.lookupPrefix(uri);if(prefix==null){var visibleNamespaces=[{namespace:uri,prefix:null}]}}serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);return buf.join("")}function needNamespaceDefine(node,isHTML,visibleNamespaces){var prefix=node.prefix||"";var uri=node.namespaceURI;if(!prefix&&!uri){return false}if(prefix==="xml"&&uri==="http://www.w3.org/XML/1998/namespace"||uri=="http://www.w3.org/2000/xmlns/"){return false}var i=visibleNamespaces.length;while(i--){var ns=visibleNamespaces[i];if(ns.prefix==prefix){return ns.namespace!=uri}}return true}function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){if(nodeFilter){node=nodeFilter(node);if(node){if(typeof node=="string"){buf.push(node);return}}else{return}}switch(node.nodeType){case ELEMENT_NODE:if(!visibleNamespaces)visibleNamespaces=[];var startVisibleNamespaces=visibleNamespaces.length;var attrs=node.attributes;var len=attrs.length;var child=node.firstChild;var nodeName=node.tagName;isHTML=htmlns===node.namespaceURI||isHTML;buf.push("<",nodeName);for(var i=0;i<len;i++){var attr=attrs.item(i);if(attr.prefix=="xmlns"){visibleNamespaces.push({prefix:attr.localName,namespace:attr.value})}else if(attr.nodeName=="xmlns"){visibleNamespaces.push({prefix:"",namespace:attr.value})}}for(var i=0;i<len;i++){var attr=attrs.item(i);if(needNamespaceDefine(attr,isHTML,visibleNamespaces)){var prefix=attr.prefix||"";var uri=attr.namespaceURI;var ns=prefix?" xmlns:"+prefix:" xmlns";buf.push(ns,'="',uri,'"');visibleNamespaces.push({prefix:prefix,namespace:uri})}serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces)}if(needNamespaceDefine(node,isHTML,visibleNamespaces)){var prefix=node.prefix||"";var uri=node.namespaceURI;var ns=prefix?" xmlns:"+prefix:" xmlns";buf.push(ns,'="',uri,'"');visibleNamespaces.push({prefix:prefix,namespace:uri})}if(child||isHTML&&!/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){buf.push(">");if(isHTML&&/^script$/i.test(nodeName)){while(child){if(child.data){buf.push(child.data)}else{serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces)}child=child.nextSibling}}else{while(child){serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);child=child.nextSibling}}buf.push("</",nodeName,">")}else{buf.push("/>")}return;case DOCUMENT_NODE:case DOCUMENT_FRAGMENT_NODE:var child=node.firstChild;while(child){serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);child=child.nextSibling}return;case ATTRIBUTE_NODE:return buf.push(" ",node.name,'="',node.value.replace(/[<&"]/g,_xmlEncoder),'"');case TEXT_NODE:return buf.push(node.data.replace(/[<&]/g,_xmlEncoder));case CDATA_SECTION_NODE:return buf.push("<![CDATA[",node.data,"]]>");case COMMENT_NODE:return buf.push("\x3c!--",node.data,"--\x3e");case DOCUMENT_TYPE_NODE:var pubid=node.publicId;var sysid=node.systemId;buf.push("<!DOCTYPE ",node.name);if(pubid){buf.push(' PUBLIC "',pubid);if(sysid&&sysid!="."){buf.push('" "',sysid)}buf.push('">')}else if(sysid&&sysid!="."){buf.push(' SYSTEM "',sysid,'">')}else{var sub=node.internalSubset;if(sub){buf.push(" [",sub,"]")}buf.push(">")}return;case PROCESSING_INSTRUCTION_NODE:return buf.push("<?",node.target," ",node.data,"?>");case ENTITY_REFERENCE_NODE:return buf.push("&",node.nodeName,";");default:buf.push("??",node.nodeName)}}function importNode(doc,node,deep){var node2;switch(node.nodeType){case ELEMENT_NODE:node2=node.cloneNode(false);node2.ownerDocument=doc;case DOCUMENT_FRAGMENT_NODE:break;case ATTRIBUTE_NODE:deep=true;break}if(!node2){node2=node.cloneNode(false)}node2.ownerDocument=doc;node2.parentNode=null;if(deep){var child=node.firstChild;while(child){node2.appendChild(importNode(doc,child,deep));child=child.nextSibling}}return node2}function cloneNode(doc,node,deep){var node2=new node.constructor;for(var n in node){var v=node[n];if(typeof v!="object"){if(v!=node2[n]){node2[n]=v}}}if(node.childNodes){node2.childNodes=new NodeList}node2.ownerDocument=doc;switch(node2.nodeType){case ELEMENT_NODE:var attrs=node.attributes;var attrs2=node2.attributes=new NamedNodeMap;var len=attrs.length;attrs2._ownerElement=node2;for(var i=0;i<len;i++){node2.setAttributeNode(cloneNode(doc,attrs.item(i),true))}break;case ATTRIBUTE_NODE:deep=true}if(deep){var child=node.firstChild;while(child){node2.appendChild(cloneNode(doc,child,deep));child=child.nextSibling}}return node2}function __set__(object,key,value){object[key]=value}try{if(Object.defineProperty){Object.defineProperty(LiveNodeList.prototype,"length",{get:function(){_updateLiveList(this);return this.$$length}});Object.defineProperty(Node.prototype,"textContent",{get:function(){return getTextContent(this)},set:function(data){switch(this.nodeType){case ELEMENT_NODE:case DOCUMENT_FRAGMENT_NODE:while(this.firstChild){this.removeChild(this.firstChild)}if(data||String(data)){this.appendChild(this.ownerDocument.createTextNode(data))}break;default:this.data=data;this.value=data;this.nodeValue=data}}});function getTextContent(node){switch(node.nodeType){case ELEMENT_NODE:case DOCUMENT_FRAGMENT_NODE:var buf=[];node=node.firstChild;while(node){if(node.nodeType!==7&&node.nodeType!==8){buf.push(getTextContent(node))}node=node.nextSibling}return buf.join("");default:return node.nodeValue}}__set__=function(object,key,value){object["$$"+key]=value}}}catch(e){}exports.DOMImplementation=DOMImplementation;exports.XMLSerializer=XMLSerializer},{}],21:[function(require,module,exports){var nameStartChar=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;var nameChar=new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");var tagNamePattern=new RegExp("^"+nameStartChar.source+nameChar.source+"*(?::"+nameStartChar.source+nameChar.source+"*)?$");var S_TAG=0;var S_ATTR=1;var S_ATTR_SPACE=2;var S_EQ=3;var S_ATTR_NOQUOT_VALUE=4;var S_ATTR_END=5;var S_TAG_SPACE=6;var S_TAG_CLOSE=7;function XMLReader(){}XMLReader.prototype={parse:function(source,defaultNSMap,entityMap){var domBuilder=this.domBuilder;domBuilder.startDocument();_copy(defaultNSMap,defaultNSMap={});parse(source,defaultNSMap,entityMap,domBuilder,this.errorHandler);domBuilder.endDocument()}};function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){function fixedFromCharCode(code){if(code>65535){code-=65536;var surrogate1=55296+(code>>10),surrogate2=56320+(code&1023);return String.fromCharCode(surrogate1,surrogate2)}else{return String.fromCharCode(code)}}function entityReplacer(a){var k=a.slice(1,-1);if(k in entityMap){return entityMap[k]}else if(k.charAt(0)==="#"){return fixedFromCharCode(parseInt(k.substr(1).replace("x","0x")))}else{errorHandler.error("entity not found:"+a);return a}}function appendText(end){if(end>start){var xt=source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);locator&&position(start);domBuilder.characters(xt,0,end-start);start=end}}function position(p,m){while(p>=lineEnd&&(m=linePattern.exec(source))){lineStart=m.index;lineEnd=lineStart+m[0].length;locator.lineNumber++}locator.columnNumber=p-lineStart+1}var lineStart=0;var lineEnd=0;var linePattern=/.*(?:\r\n?|\n)|.*$/g;var locator=domBuilder.locator;var parseStack=[{currentNSMap:defaultNSMapCopy}];var closeMap={};var start=0;while(true){try{var tagStart=source.indexOf("<",start);if(tagStart<0){if(!source.substr(start).match(/^\s*$/)){var doc=domBuilder.doc;var text=doc.createTextNode(source.substr(start));doc.appendChild(text);domBuilder.currentElement=text}return}if(tagStart>start){appendText(tagStart)}switch(source.charAt(tagStart+1)){case"/":var end=source.indexOf(">",tagStart+3);var tagName=source.substring(tagStart+2,end);var config=parseStack.pop();if(end<0){tagName=source.substring(tagStart+2).replace(/[\s<].*/,"");errorHandler.error("end tag name: "+tagName+" is not complete:"+config.tagName);end=tagStart+1+tagName.length}else if(tagName.match(/\s</)){tagName=tagName.replace(/[\s<].*/,"");errorHandler.error("end tag name: "+tagName+" maybe not complete");end=tagStart+1+tagName.length}var localNSMap=config.localNSMap;var endMatch=config.tagName==tagName;var endIgnoreCaseMach=endMatch||config.tagName&&config.tagName.toLowerCase()==tagName.toLowerCase();if(endIgnoreCaseMach){domBuilder.endElement(config.uri,config.localName,tagName);if(localNSMap){for(var prefix in localNSMap){domBuilder.endPrefixMapping(prefix)}}if(!endMatch){errorHandler.fatalError("end tag name: "+tagName+" is not match the current start tagName:"+config.tagName)}}else{parseStack.push(config)}end++;break;case"?":locator&&position(tagStart);end=parseInstruction(source,tagStart,domBuilder);break;case"!":locator&&position(tagStart);end=parseDCC(source,tagStart,domBuilder,errorHandler);break;default:locator&&position(tagStart);var el=new ElementAttributes;var currentNSMap=parseStack[parseStack.length-1].currentNSMap;var end=parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);var len=el.length;if(!el.closed&&fixSelfClosed(source,end,el.tagName,closeMap)){el.closed=true;if(!entityMap.nbsp){errorHandler.warning("unclosed xml attribute")}}if(locator&&len){var locator2=copyLocator(locator,{});for(var i=0;i<len;i++){var a=el[i];position(a.offset);a.locator=copyLocator(locator,{})}domBuilder.locator=locator2;if(appendElement(el,domBuilder,currentNSMap)){parseStack.push(el)}domBuilder.locator=locator}else{if(appendElement(el,domBuilder,currentNSMap)){parseStack.push(el)}}if(el.uri==="http://www.w3.org/1999/xhtml"&&!el.closed){end=parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)}else{end++}}}catch(e){errorHandler.error("element parse error: "+e);end=-1}if(end>start){start=end}else{appendText(Math.max(tagStart,start)+1)}}}function copyLocator(f,t){t.lineNumber=f.lineNumber;t.columnNumber=f.columnNumber;return t}function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){var attrName;var value;var p=++start;var s=S_TAG;while(true){var c=source.charAt(p);switch(c){case"=":if(s===S_ATTR){attrName=source.slice(start,p);s=S_EQ}else if(s===S_ATTR_SPACE){s=S_EQ}else{throw new Error("attribute equal must after attrName")}break;case"'":case'"':if(s===S_EQ||s===S_ATTR){if(s===S_ATTR){errorHandler.warning('attribute value must after "="');attrName=source.slice(start,p)}start=p+1;p=source.indexOf(c,start);if(p>0){value=source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);el.add(attrName,value,start-1);s=S_ATTR_END}else{throw new Error("attribute value no end '"+c+"' match")}}else if(s==S_ATTR_NOQUOT_VALUE){value=source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);el.add(attrName,value,start);errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+")!!");start=p+1;s=S_ATTR_END}else{throw new Error('attribute value must after "="')}break;case"/":switch(s){case S_TAG:el.setTagName(source.slice(start,p));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:s=S_TAG_CLOSE;el.closed=true;case S_ATTR_NOQUOT_VALUE:case S_ATTR:case S_ATTR_SPACE:break;default:throw new Error("attribute invalid close char('/')")}break;case"":errorHandler.error("unexpected end of input");if(s==S_TAG){el.setTagName(source.slice(start,p))}return p;case">":switch(s){case S_TAG:el.setTagName(source.slice(start,p));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:break;case S_ATTR_NOQUOT_VALUE:case S_ATTR:value=source.slice(start,p);if(value.slice(-1)==="/"){el.closed=true;value=value.slice(0,-1)}case S_ATTR_SPACE:if(s===S_ATTR_SPACE){value=attrName}if(s==S_ATTR_NOQUOT_VALUE){errorHandler.warning('attribute "'+value+'" missed quot(")!!');el.add(attrName,value.replace(/&#?\w+;/g,entityReplacer),start)}else{if(currentNSMap[""]!=="http://www.w3.org/1999/xhtml"||!value.match(/^(?:disabled|checked|selected)$/i)){errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!')}el.add(value,value,start)}break;case S_EQ:throw new Error("attribute value missed!!")}return p;case"":c=" ";default:if(c<=" "){switch(s){case S_TAG:el.setTagName(source.slice(start,p));s=S_TAG_SPACE;break;case S_ATTR:attrName=source.slice(start,p);s=S_ATTR_SPACE;break;case S_ATTR_NOQUOT_VALUE:var value=source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);errorHandler.warning('attribute "'+value+'" missed quot(")!!');el.add(attrName,value,start);case S_ATTR_END:s=S_TAG_SPACE;break}}else{switch(s){case S_ATTR_SPACE:var tagName=el.tagName;if(currentNSMap[""]!=="http://www.w3.org/1999/xhtml"||!attrName.match(/^(?:disabled|checked|selected)$/i)){errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!')}el.add(attrName,attrName,start);start=p;s=S_ATTR;break;case S_ATTR_END:errorHandler.warning('attribute space is required"'+attrName+'"!!');case S_TAG_SPACE:s=S_ATTR;start=p;break;case S_EQ:s=S_ATTR_NOQUOT_VALUE;start=p;break;case S_TAG_CLOSE:throw new Error("elements closed character '/' and '>' must be connected to")}}}p++}}function appendElement(el,domBuilder,currentNSMap){var tagName=el.tagName;var localNSMap=null;var i=el.length;while(i--){var a=el[i];var qName=a.qName;var value=a.value;var nsp=qName.indexOf(":");if(nsp>0){var prefix=a.prefix=qName.slice(0,nsp);var localName=qName.slice(nsp+1);var nsPrefix=prefix==="xmlns"&&localName}else{localName=qName;prefix=null;nsPrefix=qName==="xmlns"&&""}a.localName=localName;if(nsPrefix!==false){if(localNSMap==null){localNSMap={};_copy(currentNSMap,currentNSMap={})}currentNSMap[nsPrefix]=localNSMap[nsPrefix]=value;a.uri="http://www.w3.org/2000/xmlns/";domBuilder.startPrefixMapping(nsPrefix,value)}}var i=el.length;while(i--){a=el[i];var prefix=a.prefix;if(prefix){if(prefix==="xml"){a.uri="http://www.w3.org/XML/1998/namespace"}if(prefix!=="xmlns"){a.uri=currentNSMap[prefix||""]}}}var nsp=tagName.indexOf(":");if(nsp>0){prefix=el.prefix=tagName.slice(0,nsp);localName=el.localName=tagName.slice(nsp+1)}else{prefix=null;localName=el.localName=tagName}var ns=el.uri=currentNSMap[prefix||""];domBuilder.startElement(ns,localName,tagName,el);if(el.closed){domBuilder.endElement(ns,localName,tagName);if(localNSMap){for(prefix in localNSMap){domBuilder.endPrefixMapping(prefix)}}}else{el.currentNSMap=currentNSMap;el.localNSMap=localNSMap;return true}}function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){if(/^(?:script|textarea)$/i.test(tagName)){var elEndStart=source.indexOf("</"+tagName+">",elStartEnd);var text=source.substring(elStartEnd+1,elEndStart);if(/[&<]/.test(text)){if(/^script$/i.test(tagName)){domBuilder.characters(text,0,text.length);return elEndStart}text=text.replace(/&#?\w+;/g,entityReplacer);domBuilder.characters(text,0,text.length);return elEndStart}}return elStartEnd+1}function fixSelfClosed(source,elStartEnd,tagName,closeMap){var pos=closeMap[tagName];if(pos==null){pos=source.lastIndexOf("</"+tagName+">");if(pos<elStartEnd){pos=source.lastIndexOf("</"+tagName)}closeMap[tagName]=pos}return pos<elStartEnd}function _copy(source,target){for(var n in source){target[n]=source[n]}}function parseDCC(source,start,domBuilder,errorHandler){var next=source.charAt(start+2);switch(next){case"-":if(source.charAt(start+3)==="-"){var end=source.indexOf("--\x3e",start+4);if(end>start){domBuilder.comment(source,start+4,end-start-4);return end+3}else{errorHandler.error("Unclosed comment");return-1}}else{return-1}default:if(source.substr(start+3,6)=="CDATA["){var end=source.indexOf("]]>",start+9);domBuilder.startCDATA();domBuilder.characters(source,start+9,end-start-9);domBuilder.endCDATA();return end+3}var matchs=split(source,start);var len=matchs.length;if(len>1&&/!doctype/i.test(matchs[0][0])){var name=matchs[1][0];var pubid=len>3&&/^public$/i.test(matchs[2][0])&&matchs[3][0];var sysid=len>4&&matchs[4][0];var lastMatch=matchs[len-1];domBuilder.startDTD(name,pubid&&pubid.replace(/^(['"])(.*?)\1$/,"$2"),sysid&&sysid.replace(/^(['"])(.*?)\1$/,"$2"));domBuilder.endDTD();return lastMatch.index+lastMatch[0].length}}return-1}function parseInstruction(source,start,domBuilder){var end=source.indexOf("?>",start);if(end){var match=source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);if(match){var len=match[0].length;domBuilder.processingInstruction(match[1],match[2]);return end+2}else{return-1}}return-1}function ElementAttributes(source){}ElementAttributes.prototype={setTagName:function(tagName){if(!tagNamePattern.test(tagName)){throw new Error("invalid tagName:"+tagName)}this.tagName=tagName},add:function(qName,value,offset){if(!tagNamePattern.test(qName)){throw new Error("invalid attribute:"+qName)}this[this.length++]={qName:qName,value:value,offset:offset}},length:0,getLocalName:function(i){return this[i].localName},getLocator:function(i){return this[i].locator},getQName:function(i){return this[i].qName},getURI:function(i){return this[i].uri},getValue:function(i){return this[i].value}};function _set_proto_(thiz,parent){thiz.__proto__=parent;return thiz}if(!(_set_proto_({},_set_proto_.prototype)instanceof _set_proto_)){_set_proto_=function(thiz,parent){function p(){}p.prototype=parent;p=new p;for(parent in thiz){p[parent]=thiz[parent]}return p}}function split(source,start){var match;var buf=[];var reg=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;reg.lastIndex=start;reg.exec(source);while(match=reg.exec(source)){buf.push(match);if(match[1])return buf}}exports.XMLReader=XMLReader},{}],"/src/js/docxtemplater.js":[function(require,module,exports){"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var DocUtils=require("./doc-utils");DocUtils.traits=require("./traits");DocUtils.moduleWrapper=require("./module-wrapper");var wrapper=DocUtils.moduleWrapper;var Docxtemplater=function(){function Docxtemplater(){_classCallCheck(this,Docxtemplater);if(arguments.length>0){throw new Error("The constructor with parameters have been removed in docxtemplater 3.0, please check the upgrade guide.")}this.compiled={};this.modules=[];this.setOptions({})}_createClass(Docxtemplater,[{key:"attachModule",value:function attachModule(module){this.modules.push(wrapper(module));return this}},{key:"setOptions",value:function setOptions(options){var _this=this;this.options=options;Object.keys(DocUtils.defaults).forEach(function(key){var defaultValue=DocUtils.defaults[key];_this[key]=_this.options[key]!=null?_this.options[key]:defaultValue});if(this.zip){this.updateFileTypeConfig()}return this}},{key:"loadZip",value:function loadZip(zip){if(zip.loadAsync){throw new Error("Docxtemplater doesn't handle JSZip version >=3, see changelog")}this.zip=zip;this.updateFileTypeConfig();return this}},{key:"compileFile",value:function compileFile(fileName){var currentFile=this.createTemplateClass(fileName);currentFile.parse();this.compiled[fileName]=currentFile}},{key:"compile",value:function compile(){this.templatedFiles=this.fileTypeConfig.getTemplatedFiles(this.zip);return this}},{key:"updateFileTypeConfig",value:function updateFileTypeConfig(){this.fileType=this.zip.files["word/document.xml"]?"docx":"pptx";this.fileTypeConfig=this.options.fileTypeConfig||Docxtemplater.FileTypeConfig[this.fileType];return this}},{key:"render",value:function render(){var _this2=this;this.options.xmlFileNames=[];this.modules=this.fileTypeConfig.baseModules.map(function(moduleFunction){return moduleFunction()}).concat(this.modules);this.options=this.modules.reduce(function(options,module){return module.optionsTransformer(options,_this2)},this.options);this.xmlDocuments=this.options.xmlFileNames.reduce(function(xmlDocuments,fileName){var content=_this2.zip.files[fileName].asText();xmlDocuments[fileName]=DocUtils.str2xml(content);return xmlDocuments},{});this.modules.forEach(function(module){module.set({zip:_this2.zip,xmlDocuments:_this2.xmlDocuments,data:_this2.data})});this.compile();this.modules.forEach(function(module){module.set({compiled:_this2.compiled})});this.templatedFiles.forEach(function(fileName){if(_this2.zip.files[fileName]!=null){_this2.compileFile(fileName)}});this.mapper=this.modules.reduce(function(value,module){return module.getRenderedMap(value)},{});Object.keys(this.mapper).forEach(function(to){var mapped=_this2.mapper[to];var from=mapped.from;var currentFile=_this2.compiled[from];currentFile.setTags(mapped.data);currentFile.render(to);_this2.zip.file(to,currentFile.content)});Object.keys(this.xmlDocuments).forEach(function(fileName){_this2.zip.remove(fileName);var content=DocUtils.xml2str(_this2.xmlDocuments[fileName]);return _this2.zip.file(fileName,content,{})});return this}},{key:"setData",value:function setData(data){this.data=data;return this}},{key:"getZip",value:function getZip(){return this.zip}},{key:"createTemplateClass",value:function createTemplateClass(path){var usedData=this.zip.files[path].asText();return this.createTemplateClassFromContent(usedData,path)}},{key:"createTemplateClassFromContent",value:function createTemplateClassFromContent(content,filePath){var _this3=this;var xmltOptions={filePath:filePath};Object.keys(DocUtils.defaults).forEach(function(key){xmltOptions[key]=_this3[key]});xmltOptions.fileTypeConfig=this.fileTypeConfig;xmltOptions.modules=this.modules;return new Docxtemplater.XmlTemplater(content,xmltOptions)}},{key:"getFullText",value:function getFullText(path){return this.createTemplateClass(path||this.fileTypeConfig.textPath).getFullText()}},{key:"getTemplatedFiles",value:function getTemplatedFiles(){this.compile();return this.templatedFiles}}]);return Docxtemplater}();Docxtemplater.DocUtils=require("./doc-utils");Docxtemplater.Errors=require("./errors");Docxtemplater.XmlTemplater=require("./xml-templater");Docxtemplater.FileTypeConfig=require("./file-type-config");Docxtemplater.XmlMatcher=require("./xml-matcher");module.exports=Docxtemplater},{"./doc-utils":1,"./errors":2,"./file-type-config":3,"./module-wrapper":7,"./traits":16,"./xml-matcher":17,"./xml-templater":18}]},{},[])("/src/js/docxtemplater.js")});

/***/ },

/***/ 95258
/*!****************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_docxBuilder/jszip.min.js ***!
  \****************************************************************************/
(module) {

/*!

JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
!function(a){if(true)module.exports=a();else // removed by dead control flow
{ var b; }}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i=undefined;if(!h&&i)return require(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f=undefined,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";function d(a){if(a){this.data=a,this.length=this.data.length,this.index=0,this.zero=0;for(var b=0;b<this.data.length;b++)a[b]=255&a[b]}}var e=a("./dataReader");d.prototype=new e,d.prototype.byteAt=function(a){return this.data[this.zero+a]},d.prototype.lastIndexOfSignature=function(a){for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.length-4;f>=0;--f)if(this.data[f]===b&&this.data[f+1]===c&&this.data[f+2]===d&&this.data[f+3]===e)return f-this.zero;return-1},d.prototype.readData=function(a){if(this.checkOffset(a),0===a)return[];var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"./dataReader":6}],2:[function(a,b,c){"use strict";var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";c.encode=function(a,b){for(var c,e,f,g,h,i,j,k="",l=0;l<a.length;)c=a.charCodeAt(l++),e=a.charCodeAt(l++),f=a.charCodeAt(l++),g=c>>2,h=(3&c)<<4|e>>4,i=(15&e)<<2|f>>6,j=63&f,isNaN(e)?i=j=64:isNaN(f)&&(j=64),k=k+d.charAt(g)+d.charAt(h)+d.charAt(i)+d.charAt(j);return k},c.decode=function(a,b){var c,e,f,g,h,i,j,k="",l=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<a.length;)g=d.indexOf(a.charAt(l++)),h=d.indexOf(a.charAt(l++)),i=d.indexOf(a.charAt(l++)),j=d.indexOf(a.charAt(l++)),c=g<<2|h>>4,e=(15&h)<<4|i>>2,f=(3&i)<<6|j,k+=String.fromCharCode(c),64!=i&&(k+=String.fromCharCode(e)),64!=j&&(k+=String.fromCharCode(f));return k}},{}],3:[function(a,b,c){"use strict";function d(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null}d.prototype={getContent:function(){return null},getCompressedContent:function(){return null}},b.exports=d},{}],4:[function(a,b,c){"use strict";c.STORE={magic:"\0\0",compress:function(a,b){return a},uncompress:function(a){return a},compressInputType:null,uncompressInputType:null},c.DEFLATE=a("./flate")},{"./flate":9}],5:[function(a,b,c){"use strict";var d=a("./utils"),e=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];b.exports=function(a,b){if("undefined"==typeof a||!a.length)return 0;var c="string"!==d.getTypeOf(a);"undefined"==typeof b&&(b=0);var f=0,g=0,h=0;b^=-1;for(var i=0,j=a.length;i<j;i++)h=c?a[i]:a.charCodeAt(i),g=255&(b^h),f=e[g],b=b>>>8^f;return b^-1}},{"./utils":22}],6:[function(a,b,c){"use strict";function d(a){this.data=null,this.length=0,this.index=0,this.zero=0}var e=a("./utils");d.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(a){},readInt:function(a){var b,c=0;for(this.checkOffset(a),b=this.index+a-1;b>=this.index;b--)c=(c<<8)+this.byteAt(b);return this.index+=a,c},readString:function(a){return e.transformTo("string",this.readData(a))},readData:function(a){},lastIndexOfSignature:function(a){},readDate:function(){var a=this.readInt(4);return new Date((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1)}},b.exports=d},{"./utils":22}],7:[function(a,b,c){"use strict";c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!1,c.date=null,c.compression=null,c.compressionOptions=null,c.comment=null,c.unixPermissions=null,c.dosPermissions=null},{}],8:[function(a,b,c){"use strict";var d=a("./utils");c.string2binary=function(a){return d.string2binary(a)},c.string2Uint8Array=function(a){return d.transformTo("uint8array",a)},c.uint8Array2String=function(a){return d.transformTo("string",a)},c.string2Blob=function(a){var b=d.transformTo("arraybuffer",a);return d.arrayBuffer2Blob(b)},c.arrayBuffer2Blob=function(a){return d.arrayBuffer2Blob(a)},c.transformTo=function(a,b){return d.transformTo(a,b)},c.getTypeOf=function(a){return d.getTypeOf(a)},c.checkSupport=function(a){return d.checkSupport(a)},c.MAX_VALUE_16BITS=d.MAX_VALUE_16BITS,c.MAX_VALUE_32BITS=d.MAX_VALUE_32BITS,c.pretty=function(a){return d.pretty(a)},c.findCompression=function(a){return d.findCompression(a)},c.isRegExp=function(a){return d.isRegExp(a)}},{"./utils":22}],9:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,e=a("pako");c.uncompressInputType=d?"uint8array":"array",c.compressInputType=d?"uint8array":"array",c.magic="\b\0",c.compress=function(a,b){return e.deflateRaw(a,{level:b.level||-1})},c.uncompress=function(a){return e.inflateRaw(a)}},{pako:25}],10:[function(a,b,c){"use strict";function d(a,b){return this instanceof d?(this.files={},this.comment=null,this.root="",a&&this.load(a,b),void(this.clone=function(){var a=new d;for(var b in this)"function"!=typeof this[b]&&(a[b]=this[b]);return a})):new d(a,b)}var e=a("./base64");d.prototype=a("./object"),d.prototype.load=a("./load"),d.support=a("./support"),d.defaults=a("./defaults"),d.utils=a("./deprecatedPublicUtils"),d.base64={encode:function(a){return e.encode(a)},decode:function(a){return e.decode(a)}},d.compressions=a("./compressions"),b.exports=d},{"./base64":2,"./compressions":4,"./defaults":7,"./deprecatedPublicUtils":8,"./load":11,"./object":14,"./support":18}],11:[function(a,b,c){"use strict";var d=a("./base64"),e=a("./utf8"),f=a("./utils"),g=a("./zipEntries");b.exports=function(a,b){var c,h,i,j;for(b=f.extend(b||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:e.utf8decode}),b.base64&&(a=d.decode(a)),h=new g(a,b),c=h.files,i=0;i<c.length;i++)j=c[i],this.file(j.fileNameStr,j.decompressed,{binary:!0,optimizedBinaryString:!0,date:j.date,dir:j.dir,comment:j.fileCommentStr.length?j.fileCommentStr:null,unixPermissions:j.unixPermissions,dosPermissions:j.dosPermissions,createFolders:b.createFolders});return h.zipComment.length&&(this.comment=h.zipComment),this}},{"./base64":2,"./utf8":21,"./utils":22,"./zipEntries":23}],12:[function(a,b,c){(function(a){"use strict";b.exports=function(b,c){return new a(b,c)},b.exports.test=function(b){return a.isBuffer(b)}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],13:[function(a,b,c){"use strict";function d(a){this.data=a,this.length=this.data.length,this.index=0,this.zero=0}var e=a("./uint8ArrayReader");d.prototype=new e,d.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"./uint8ArrayReader":19}],14:[function(a,b,c){"use strict";var d=a("./support"),e=a("./utils"),f=a("./crc32"),g=a("./signature"),h=a("./defaults"),i=a("./base64"),j=a("./compressions"),k=a("./compressedObject"),l=a("./nodeBuffer"),m=a("./utf8"),n=a("./stringWriter"),o=a("./uint8ArrayWriter"),p=function(a){if(a._data instanceof k&&(a._data=a._data.getContent(),a.options.binary=!0,a.options.base64=!1,"uint8array"===e.getTypeOf(a._data))){var b=a._data;a._data=new Uint8Array(b.length),0!==b.length&&a._data.set(b,0)}return a._data},q=function(a){var b=p(a),c=e.getTypeOf(b);return"string"===c?!a.options.binary&&d.nodebuffer?l(b,"utf-8"):a.asBinary():b},r=function(a){var b=p(this);return null===b||"undefined"==typeof b?"":(this.options.base64&&(b=i.decode(b)),b=a&&this.options.binary?D.utf8decode(b):e.transformTo("string",b),a||this.options.binary||(b=e.transformTo("string",D.utf8encode(b))),b)},s=function(a,b,c){this.name=a,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=b,this.options=c,this._initialMetadata={dir:c.dir,date:c.date}};s.prototype={asText:function(){return r.call(this,!0)},asBinary:function(){return r.call(this,!1)},asNodeBuffer:function(){var a=q(this);return e.transformTo("nodebuffer",a)},asUint8Array:function(){var a=q(this);return e.transformTo("uint8array",a)},asArrayBuffer:function(){return this.asUint8Array().buffer}};var t=function(a,b){var c,d="";for(c=0;c<b;c++)d+=String.fromCharCode(255&a),a>>>=8;return d},u=function(a){return a=a||{},a.base64!==!0||null!==a.binary&&void 0!==a.binary||(a.binary=!0),a=e.extend(a,h),a.date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),a},v=function(a,b,c){var d,f=e.getTypeOf(b);if(c=u(c),"string"==typeof c.unixPermissions&&(c.unixPermissions=parseInt(c.unixPermissions,8)),c.unixPermissions&&16384&c.unixPermissions&&(c.dir=!0),c.dosPermissions&&16&c.dosPermissions&&(c.dir=!0),c.dir&&(a=x(a)),c.createFolders&&(d=w(a))&&y.call(this,d,!0),c.dir||null===b||"undefined"==typeof b)c.base64=!1,c.binary=!1,b=null,f=null;else if("string"===f)c.binary&&!c.base64&&c.optimizedBinaryString!==!0&&(b=e.string2binary(b));else{if(c.base64=!1,c.binary=!0,!(f||b instanceof k))throw new Error("The data of '"+a+"' is in an unsupported format !");"arraybuffer"===f&&(b=e.transformTo("uint8array",b))}var g=new s(a,b,c);return this.files[a]=g,g},w=function(a){"/"==a.slice(-1)&&(a=a.substring(0,a.length-1));var b=a.lastIndexOf("/");return b>0?a.substring(0,b):""},x=function(a){return"/"!=a.slice(-1)&&(a+="/"),a},y=function(a,b){return b="undefined"!=typeof b&&b,a=x(a),this.files[a]||v.call(this,a,null,{dir:!0,createFolders:b}),this.files[a]},z=function(a,b,c){var d,g=new k;return a._data instanceof k?(g.uncompressedSize=a._data.uncompressedSize,g.crc32=a._data.crc32,0===g.uncompressedSize||a.dir?(b=j.STORE,g.compressedContent="",g.crc32=0):a._data.compressionMethod===b.magic?g.compressedContent=a._data.getCompressedContent():(d=a._data.getContent(),g.compressedContent=b.compress(e.transformTo(b.compressInputType,d),c))):(d=q(a),d&&0!==d.length&&!a.dir||(b=j.STORE,d=""),g.uncompressedSize=d.length,g.crc32=f(d),g.compressedContent=b.compress(e.transformTo(b.compressInputType,d),c)),g.compressedSize=g.compressedContent.length,g.compressionMethod=b.magic,g},A=function(a,b){var c=a;return a||(c=b?16893:33204),(65535&c)<<16},B=function(a,b){return 63&(a||0)},C=function(a,b,c,d,h,i){var j,k,l,n,o=(c.compressedContent,i!==m.utf8encode),p=e.transformTo("string",i(b.name)),q=e.transformTo("string",m.utf8encode(b.name)),r=b.comment||"",s=e.transformTo("string",i(r)),u=e.transformTo("string",m.utf8encode(r)),v=q.length!==b.name.length,w=u.length!==r.length,x=b.options,y="",z="",C="";l=b._initialMetadata.dir!==b.dir?b.dir:x.dir,n=b._initialMetadata.date!==b.date?b.date:x.date;var D=0,E=0;l&&(D|=16),"UNIX"===h?(E=798,D|=A(b.unixPermissions,l)):(E=20,D|=B(b.dosPermissions,l)),j=n.getHours(),j<<=6,j|=n.getMinutes(),j<<=5,j|=n.getSeconds()/2,k=n.getFullYear()-1980,k<<=4,k|=n.getMonth()+1,k<<=5,k|=n.getDate(),v&&(z=t(1,1)+t(f(p),4)+q,y+="up"+t(z.length,2)+z),w&&(C=t(1,1)+t(this.crc32(s),4)+u,y+="uc"+t(C.length,2)+C);var F="";F+="\n\0",F+=o||!v&&!w?"\0\0":"\0\b",F+=c.compressionMethod,F+=t(j,2),F+=t(k,2),F+=t(c.crc32,4),F+=t(c.compressedSize,4),F+=t(c.uncompressedSize,4),F+=t(p.length,2),F+=t(y.length,2);var G=g.LOCAL_FILE_HEADER+F+p+y,H=g.CENTRAL_FILE_HEADER+t(E,2)+F+t(s.length,2)+"\0\0\0\0"+t(D,4)+t(d,4)+p+y+s;return{fileRecord:G,dirRecord:H,compressedObject:c}},D={load:function(a,b){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(a){var b,c,d,f,g=[];for(b in this.files)this.files.hasOwnProperty(b)&&(d=this.files[b],f=new s(d.name,d._data,e.extend(d.options)),c=b.slice(this.root.length,b.length),b.slice(0,this.root.length)===this.root&&a(c,f)&&g.push(f));return g},file:function(a,b,c){if(1===arguments.length){if(e.isRegExp(a)){var d=a;return this.filter(function(a,b){return!b.dir&&d.test(a)})}return this.filter(function(b,c){return!c.dir&&b===a})[0]||null}return a=this.root+a,v.call(this,a,b,c),this},folder:function(a){if(!a)return this;if(e.isRegExp(a))return this.filter(function(b,c){return c.dir&&a.test(b)});var b=this.root+a,c=y.call(this,b),d=this.clone();return d.root=c.name,d},remove:function(a){a=this.root+a;var b=this.files[a];if(b||("/"!=a.slice(-1)&&(a+="/"),b=this.files[a]),b&&!b.dir)delete this.files[a];else for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d<c.length;d++)delete this.files[c[d].name];return this},generate:function(a){a=e.extend(a||{},{base64:!0,compression:"STORE",compressionOptions:null,type:"base64",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:m.utf8encode}),e.checkSupport(a.type),"darwin"!==a.platform&&"freebsd"!==a.platform&&"linux"!==a.platform&&"sunos"!==a.platform||(a.platform="UNIX"),"win32"===a.platform&&(a.platform="DOS");var b,c,d=[],f=0,h=0,k=e.transformTo("string",a.encodeFileName(a.comment||this.comment||""));for(var l in this.files)if(this.files.hasOwnProperty(l)){var p=this.files[l],q=p.options.compression||a.compression.toUpperCase(),r=j[q];if(!r)throw new Error(q+" is not a valid compression method !");var s=p.options.compressionOptions||a.compressionOptions||{},u=z.call(this,p,r,s),v=C.call(this,l,p,u,f,a.platform,a.encodeFileName);f+=v.fileRecord.length+u.compressedSize,h+=v.dirRecord.length,d.push(v)}var w="";w=g.CENTRAL_DIRECTORY_END+"\0\0\0\0"+t(d.length,2)+t(d.length,2)+t(h,4)+t(f,4)+t(k.length,2)+k;var x=a.type.toLowerCase();for(b="uint8array"===x||"arraybuffer"===x||"blob"===x||"nodebuffer"===x?new o(f+h+w.length):new n(f+h+w.length),c=0;c<d.length;c++)b.append(d[c].fileRecord),b.append(d[c].compressedObject.compressedContent);for(c=0;c<d.length;c++)b.append(d[c].dirRecord);b.append(w);var y=b.finalize();switch(a.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return e.transformTo(a.type.toLowerCase(),y);case"blob":return e.arrayBuffer2Blob(e.transformTo("arraybuffer",y),a.mimeType);case"base64":return a.base64?i.encode(y):y;default:return y}},crc32:function(a,b){return f(a,b)},utf8encode:function(a){return e.transformTo("string",m.utf8encode(a))},utf8decode:function(a){return m.utf8decode(a)}};b.exports=D},{"./base64":2,"./compressedObject":3,"./compressions":4,"./crc32":5,"./defaults":7,"./nodeBuffer":12,"./signature":15,"./stringWriter":17,"./support":18,"./uint8ArrayWriter":20,"./utf8":21,"./utils":22}],15:[function(a,b,c){"use strict";c.LOCAL_FILE_HEADER="PK",c.CENTRAL_FILE_HEADER="PK",c.CENTRAL_DIRECTORY_END="PK",c.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",c.ZIP64_CENTRAL_DIRECTORY_END="PK",c.DATA_DESCRIPTOR="PK\b"},{}],16:[function(a,b,c){"use strict";function d(a,b){this.data=a,b||(this.data=f.string2binary(this.data)),this.length=this.data.length,this.index=0,this.zero=0}var e=a("./dataReader"),f=a("./utils");d.prototype=new e,d.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},d.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},d.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"./dataReader":6,"./utils":22}],17:[function(a,b,c){"use strict";var d=a("./utils"),e=function(){this.data=[]};e.prototype={append:function(a){a=d.transformTo("string",a),this.data.push(a)},finalize:function(){return this.data.join("")}},b.exports=e},{"./utils":22}],18:[function(a,b,c){(function(a){"use strict";if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,c.nodebuffer="undefined"!=typeof a,c.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)c.blob=!1;else{var b=new ArrayBuffer(0);try{c.blob=0===new Blob([b],{type:"application/zip"}).size}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e;f.append(b),c.blob=0===f.getBlob("application/zip").size}catch(d){c.blob=!1}}}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],19:[function(a,b,c){"use strict";function d(a){a&&(this.data=a,this.length=this.data.length,this.index=0,this.zero=0)}var e=a("./arrayReader");d.prototype=new e,d.prototype.readData=function(a){if(this.checkOffset(a),0===a)return new Uint8Array(0);var b=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,b},b.exports=d},{"./arrayReader":1}],20:[function(a,b,c){"use strict";var d=a("./utils"),e=function(a){this.data=new Uint8Array(a),this.index=0};e.prototype={append:function(a){0!==a.length&&(a=d.transformTo("uint8array",a),this.data.set(a,this.index),this.index+=a.length)},finalize:function(){return this.data}},b.exports=e},{"./utils":22}],21:[function(a,b,c){"use strict";for(var d=a("./utils"),e=a("./support"),f=a("./nodeBuffer"),g=new Array(256),h=0;h<256;h++)g[h]=h>=252?6:h>=248?5:h>=240?4:h>=224?3:h>=192?2:1;g[254]=g[254]=1;var i=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;f<h;f++)c=a.charCodeAt(f),55296===(64512&c)&&f+1<h&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=c<128?1:c<2048?2:c<65536?3:4;for(b=e.uint8array?new Uint8Array(i):new Array(i),g=0,f=0;g<i;f++)c=a.charCodeAt(f),55296===(64512&c)&&f+1<h&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),c<128?b[g++]=c:c<2048?(b[g++]=192|c>>>6,b[g++]=128|63&c):c<65536?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},j=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return c<0?b:0===c?b:c+g[a[c]]>b?c:b},k=function(a){var b,c,e,f,h=a.length,i=new Array(2*h);for(c=0,b=0;b<h;)if(e=a[b++],e<128)i[c++]=e;else if(f=g[e],f>4)i[c++]=65533,b+=f-1;else{for(e&=2===f?31:3===f?15:7;f>1&&b<h;)e=e<<6|63&a[b++],f--;f>1?i[c++]=65533:e<65536?i[c++]=e:(e-=65536,i[c++]=55296|e>>10&1023,i[c++]=56320|1023&e)}return i.length!==c&&(i.subarray?i=i.subarray(0,c):i.length=c),d.applyFromCharCode(i)};c.utf8encode=function(a){return e.nodebuffer?f(a,"utf-8"):i(a)},c.utf8decode=function(a){if(e.nodebuffer)return d.transformTo("nodebuffer",a).toString("utf-8");a=d.transformTo(e.uint8array?"uint8array":"array",a);for(var b=[],c=0,f=a.length,g=65536;c<f;){var h=j(a,Math.min(c+g,f));e.uint8array?b.push(k(a.subarray(c,h))):b.push(k(a.slice(c,h))),c=h}return b.join("")}},{"./nodeBuffer":12,"./support":18,"./utils":22}],22:[function(a,b,c){"use strict";function d(a){return a}function e(a,b){for(var c=0;c<a.length;++c)b[c]=255&a.charCodeAt(c);return b}function f(a){var b=65536,d=[],e=a.length,f=c.getTypeOf(a),g=0,h=!0;try{switch(f){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0));break;case"nodebuffer":String.fromCharCode.apply(null,j(0))}}catch(i){h=!1}if(!h){for(var k="",l=0;l<a.length;l++)k+=String.fromCharCode(a[l]);return k}for(;g<e&&b>1;)try{"array"===f||"nodebuffer"===f?d.push(String.fromCharCode.apply(null,a.slice(g,Math.min(g+b,e)))):d.push(String.fromCharCode.apply(null,a.subarray(g,Math.min(g+b,e)))),g+=b}catch(i){b=Math.floor(b/2)}return d.join("")}function g(a,b){for(var c=0;c<a.length;c++)b[c]=a[c];return b}var h=a("./support"),i=a("./compressions"),j=a("./nodeBuffer");c.string2binary=function(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(255&a.charCodeAt(c));return b},c.arrayBuffer2Blob=function(a,b){c.checkSupport("blob"),b=b||"application/zip";try{return new Blob([a],{type:b})}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e;return f.append(a),f.getBlob(b)}catch(d){throw new Error("Bug : can't construct the Blob.")}}},c.applyFromCharCode=f;var k={};k.string={string:d,array:function(a){return e(a,new Array(a.length))},arraybuffer:function(a){return k.string.uint8array(a).buffer},uint8array:function(a){return e(a,new Uint8Array(a.length))},nodebuffer:function(a){return e(a,j(a.length))}},k.array={string:f,array:d,arraybuffer:function(a){return new Uint8Array(a).buffer},uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(a)}},k.arraybuffer={string:function(a){return f(new Uint8Array(a))},array:function(a){return g(new Uint8Array(a),new Array(a.byteLength))},arraybuffer:d,uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(new Uint8Array(a))}},k.uint8array={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return a.buffer},uint8array:d,nodebuffer:function(a){return j(a)}},k.nodebuffer={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return k.nodebuffer.uint8array(a).buffer},uint8array:function(a){return g(a,new Uint8Array(a.length))},nodebuffer:d},c.transformTo=function(a,b){if(b||(b=""),!a)return b;c.checkSupport(a);var d=c.getTypeOf(b),e=k[d][a](b);return e},c.getTypeOf=function(a){return"string"==typeof a?"string":"[object Array]"===Object.prototype.toString.call(a)?"array":h.nodebuffer&&j.test(a)?"nodebuffer":h.uint8array&&a instanceof Uint8Array?"uint8array":h.arraybuffer&&a instanceof ArrayBuffer?"arraybuffer":void 0},c.checkSupport=function(a){var b=h[a.toLowerCase()];if(!b)throw new Error(a+" is not supported by this browser")},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(a){var b,c,d="";for(c=0;c<(a||"").length;c++)b=a.charCodeAt(c),d+="\\x"+(b<16?"0":"")+b.toString(16).toUpperCase();return d},c.findCompression=function(a){for(var b in i)if(i.hasOwnProperty(b)&&i[b].magic===a)return i[b];return null},c.isRegExp=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)},c.extend=function(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&&"undefined"==typeof c[b]&&(c[b]=arguments[a][b]);return c}},{"./compressions":4,"./nodeBuffer":12,"./support":18}],23:[function(a,b,c){"use strict";function d(a,b){this.files=[],this.loadOptions=b,a&&this.load(a)}var e=a("./stringReader"),f=a("./nodeBufferReader"),g=a("./uint8ArrayReader"),h=a("./arrayReader"),i=a("./utils"),j=a("./signature"),k=a("./zipEntry"),l=a("./support");a("./object");d.prototype={checkSignature:function(a){var b=this.reader.readString(4);if(b!==a)throw new Error("Corrupted zip or bug : unexpected signature ("+i.pretty(b)+", expected "+i.pretty(a)+")")},isSignature:function(a,b){var c=this.reader.index;this.reader.setIndex(a);var d=this.reader.readString(4),e=d===b;return this.reader.setIndex(c),e},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var a=this.reader.readData(this.zipCommentLength),b=l.uint8array?"uint8array":"array",c=i.transformTo(b,a);this.zipComment=this.loadOptions.decodeFileName(c)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var a,b,c,d=this.zip64EndOfCentralSize-44,e=0;e<d;)a=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readString(b),this.zip64ExtensibleData[a]={id:a,length:b,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var a,b;for(a=0;a<this.files.length;a++)b=this.files[a],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(j.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var a;for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===j.CENTRAL_FILE_HEADER;)a=new k({zip64:this.zip64},this.loadOptions),a.readCentralPart(this.reader),this.files.push(a);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var a=this.reader.lastIndexOfSignature(j.CENTRAL_DIRECTORY_END);if(a<0){var b=!this.isSignature(0,j.LOCAL_FILE_HEADER);throw b?new Error("Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip : can't find end of central directory")}this.reader.setIndex(a);var c=a;if(this.checkSignature(j.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,a=this.reader.lastIndexOfSignature(j.ZIP64_CENTRAL_DIRECTORY_LOCATOR),a<0)throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(a),this.checkSignature(j.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,j.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(j.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip : can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(j.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var e=c-d;if(e>0)this.isSignature(c,j.CENTRAL_FILE_HEADER)||(this.reader.zero=e);else if(e<0)throw new Error("Corrupted zip: missing "+Math.abs(e)+" bytes.")},prepareReader:function(a){var b=i.getTypeOf(a);if(i.checkSupport(b),"string"!==b||l.uint8array)if("nodebuffer"===b)this.reader=new f(a);else if(l.uint8array)this.reader=new g(i.transformTo("uint8array",a));else{if(!l.array)throw new Error("Unexpected error: unsupported type '"+b+"'");this.reader=new h(i.transformTo("array",a))}else this.reader=new e(a,this.loadOptions.optimizedBinaryString)},load:function(a){this.prepareReader(a),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},b.exports=d},{"./arrayReader":1,"./nodeBufferReader":13,"./object":14,"./signature":15,"./stringReader":16,"./support":18,"./uint8ArrayReader":19,"./utils":22,"./zipEntry":24}],24:[function(a,b,c){"use strict";function d(a,b){this.options=a,this.loadOptions=b}var e=a("./stringReader"),f=a("./utils"),g=a("./compressedObject"),h=a("./object"),i=a("./support"),j=0,k=3;d.prototype={isEncrypted:function(){return 1===(1&this.bitFlag)},useUTF8:function(){return 2048===(2048&this.bitFlag)},prepareCompressedContent:function(a,b,c){return function(){var d=a.index;a.setIndex(b);var e=a.readData(c);return a.setIndex(d),e}},prepareContent:function(a,b,c,d,e){return function(){var a=f.transformTo(d.uncompressInputType,this.getCompressedContent()),b=d.uncompress(a);if(b.length!==e)throw new Error("Bug : uncompressed data size mismatch");return b}},readLocalPart:function(a){var b,c;if(a.skip(22),this.fileNameLength=a.readInt(2),c=a.readInt(2),this.fileName=a.readData(this.fileNameLength),a.skip(c),this.compressedSize==-1||this.uncompressedSize==-1)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");if(b=f.findCompression(this.compressionMethod),null===b)throw new Error("Corrupted zip : compression "+f.pretty(this.compressionMethod)+" unknown (inner file : "+f.transformTo("string",this.fileName)+")");if(this.decompressed=new g,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(a,a.index,this.compressedSize,b),this.decompressed.getContent=this.prepareContent(a,a.index,this.compressedSize,b,this.uncompressedSize),this.loadOptions.checkCRC32&&(this.decompressed=f.transformTo("string",this.decompressed.getContent()),h.crc32(this.decompressed)!==this.crc32))throw new Error("Corrupted zip : CRC32 mismatch");
},readCentralPart:function(a){if(this.versionMadeBy=a.readInt(2),this.versionNeeded=a.readInt(2),this.bitFlag=a.readInt(2),this.compressionMethod=a.readString(2),this.date=a.readDate(),this.crc32=a.readInt(4),this.compressedSize=a.readInt(4),this.uncompressedSize=a.readInt(4),this.fileNameLength=a.readInt(2),this.extraFieldsLength=a.readInt(2),this.fileCommentLength=a.readInt(2),this.diskNumberStart=a.readInt(2),this.internalFileAttributes=a.readInt(2),this.externalFileAttributes=a.readInt(4),this.localHeaderOffset=a.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");this.fileName=a.readData(this.fileNameLength),this.readExtraFields(a),this.parseZIP64ExtraField(a),this.fileComment=a.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var a=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),a===j&&(this.dosPermissions=63&this.externalFileAttributes),a===k&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(a){if(this.extraFields[1]){var b=new e(this.extraFields[1].value);this.uncompressedSize===f.MAX_VALUE_32BITS&&(this.uncompressedSize=b.readInt(8)),this.compressedSize===f.MAX_VALUE_32BITS&&(this.compressedSize=b.readInt(8)),this.localHeaderOffset===f.MAX_VALUE_32BITS&&(this.localHeaderOffset=b.readInt(8)),this.diskNumberStart===f.MAX_VALUE_32BITS&&(this.diskNumberStart=b.readInt(4))}},readExtraFields:function(a){var b,c,d,e=a.index;for(this.extraFields=this.extraFields||{};a.index<e+this.extraFieldsLength;)b=a.readInt(2),c=a.readInt(2),d=a.readString(c),this.extraFields[b]={id:b,length:c,value:d}},handleUTF8:function(){var a=i.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(null!==b)this.fileNameStr=b;else{var c=f.transformTo(a,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var d=this.findExtraFieldUnicodeComment();if(null!==d)this.fileCommentStr=d;else{var e=f.transformTo(a,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(e)}}},findExtraFieldUnicodePath:function(){var a=this.extraFields[28789];if(a){var b=new e(a.value);return 1!==b.readInt(1)?null:h.crc32(this.fileName)!==b.readInt(4)?null:h.utf8decode(b.readString(a.length-5))}return null},findExtraFieldUnicodeComment:function(){var a=this.extraFields[25461];if(a){var b=new e(a.value);return 1!==b.readInt(1)?null:h.crc32(this.fileComment)!==b.readInt(4)?null:h.utf8decode(b.readString(a.length-5))}return null}},b.exports=d},{"./compressedObject":3,"./object":14,"./stringReader":16,"./support":18,"./utils":22}],25:[function(a,b,c){"use strict";var d=a("./lib/utils/common").assign,e=a("./lib/deflate"),f=a("./lib/inflate"),g=a("./lib/zlib/constants"),h={};d(h,e,f,g),b.exports=h},{"./lib/deflate":26,"./lib/inflate":27,"./lib/utils/common":28,"./lib/zlib/constants":31}],26:[function(a,b,c){"use strict";function d(a){if(!(this instanceof d))return new d(a);this.options=i.assign({level:s,method:u,chunkSize:16384,windowBits:15,memLevel:8,strategy:t,to:""},a||{});var b=this.options;b.raw&&b.windowBits>0?b.windowBits=-b.windowBits:b.gzip&&b.windowBits>0&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var c=h.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(c!==p)throw new Error(k[c]);if(b.header&&h.deflateSetHeader(this.strm,b.header),b.dictionary){var e;if(e="string"==typeof b.dictionary?j.string2buf(b.dictionary):"[object ArrayBuffer]"===m.call(b.dictionary)?new Uint8Array(b.dictionary):b.dictionary,c=h.deflateSetDictionary(this.strm,e),c!==p)throw new Error(k[c]);this._dict_set=!0}}function e(a,b){var c=new d(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function f(a,b){return b=b||{},b.raw=!0,e(a,b)}function g(a,b){return b=b||{},b.gzip=!0,e(a,b)}var h=a("./zlib/deflate"),i=a("./utils/common"),j=a("./utils/strings"),k=a("./zlib/messages"),l=a("./zlib/zstream"),m=Object.prototype.toString,n=0,o=4,p=0,q=1,r=2,s=-1,t=0,u=8;d.prototype.push=function(a,b){var c,d,e=this.strm,f=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?o:n,"string"==typeof a?e.input=j.string2buf(a):"[object ArrayBuffer]"===m.call(a)?e.input=new Uint8Array(a):e.input=a,e.next_in=0,e.avail_in=e.input.length;do{if(0===e.avail_out&&(e.output=new i.Buf8(f),e.next_out=0,e.avail_out=f),c=h.deflate(e,d),c!==q&&c!==p)return this.onEnd(c),this.ended=!0,!1;0!==e.avail_out&&(0!==e.avail_in||d!==o&&d!==r)||("string"===this.options.to?this.onData(j.buf2binstring(i.shrinkBuf(e.output,e.next_out))):this.onData(i.shrinkBuf(e.output,e.next_out)))}while((e.avail_in>0||0===e.avail_out)&&c!==q);return d===o?(c=h.deflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===p):d!==r||(this.onEnd(p),e.avail_out=0,!0)},d.prototype.onData=function(a){this.chunks.push(a)},d.prototype.onEnd=function(a){a===p&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Deflate=d,c.deflate=e,c.deflateRaw=f,c.gzip=g},{"./utils/common":28,"./utils/strings":29,"./zlib/deflate":33,"./zlib/messages":38,"./zlib/zstream":40}],27:[function(a,b,c){"use strict";function d(a){if(!(this instanceof d))return new d(a);this.options=h.assign({chunkSize:16384,windowBits:0,to:""},a||{});var b=this.options;b.raw&&b.windowBits>=0&&b.windowBits<16&&(b.windowBits=-b.windowBits,0===b.windowBits&&(b.windowBits=-15)),!(b.windowBits>=0&&b.windowBits<16)||a&&a.windowBits||(b.windowBits+=32),b.windowBits>15&&b.windowBits<48&&0===(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var c=g.inflateInit2(this.strm,b.windowBits);if(c!==j.Z_OK)throw new Error(k[c]);this.header=new m,g.inflateGetHeader(this.strm,this.header)}function e(a,b){var c=new d(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function f(a,b){return b=b||{},b.raw=!0,e(a,b)}var g=a("./zlib/inflate"),h=a("./utils/common"),i=a("./utils/strings"),j=a("./zlib/constants"),k=a("./zlib/messages"),l=a("./zlib/zstream"),m=a("./zlib/gzheader"),n=Object.prototype.toString;d.prototype.push=function(a,b){var c,d,e,f,k,l,m=this.strm,o=this.options.chunkSize,p=this.options.dictionary,q=!1;if(this.ended)return!1;d=b===~~b?b:b===!0?j.Z_FINISH:j.Z_NO_FLUSH,"string"==typeof a?m.input=i.binstring2buf(a):"[object ArrayBuffer]"===n.call(a)?m.input=new Uint8Array(a):m.input=a,m.next_in=0,m.avail_in=m.input.length;do{if(0===m.avail_out&&(m.output=new h.Buf8(o),m.next_out=0,m.avail_out=o),c=g.inflate(m,j.Z_NO_FLUSH),c===j.Z_NEED_DICT&&p&&(l="string"==typeof p?i.string2buf(p):"[object ArrayBuffer]"===n.call(p)?new Uint8Array(p):p,c=g.inflateSetDictionary(this.strm,l)),c===j.Z_BUF_ERROR&&q===!0&&(c=j.Z_OK,q=!1),c!==j.Z_STREAM_END&&c!==j.Z_OK)return this.onEnd(c),this.ended=!0,!1;m.next_out&&(0!==m.avail_out&&c!==j.Z_STREAM_END&&(0!==m.avail_in||d!==j.Z_FINISH&&d!==j.Z_SYNC_FLUSH)||("string"===this.options.to?(e=i.utf8border(m.output,m.next_out),f=m.next_out-e,k=i.buf2string(m.output,e),m.next_out=f,m.avail_out=o-f,f&&h.arraySet(m.output,m.output,e,f,0),this.onData(k)):this.onData(h.shrinkBuf(m.output,m.next_out)))),0===m.avail_in&&0===m.avail_out&&(q=!0)}while((m.avail_in>0||0===m.avail_out)&&c!==j.Z_STREAM_END);return c===j.Z_STREAM_END&&(d=j.Z_FINISH),d===j.Z_FINISH?(c=g.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===j.Z_OK):d!==j.Z_SYNC_FLUSH||(this.onEnd(j.Z_OK),m.avail_out=0,!0)},d.prototype.onData=function(a){this.chunks.push(a)},d.prototype.onEnd=function(a){a===j.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Inflate=d,c.inflate=e,c.inflateRaw=f,c.ungzip=e},{"./utils/common":28,"./utils/strings":29,"./zlib/constants":31,"./zlib/gzheader":34,"./zlib/inflate":36,"./zlib/messages":38,"./zlib/zstream":40}],28:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;c.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!=typeof c)throw new TypeError(c+"must be non-object");for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}}return a},c.shrinkBuf=function(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a)};var e={arraySet:function(a,b,c,d,e){if(b.subarray&&a.subarray)return void a.set(b.subarray(c,c+d),e);for(var f=0;f<d;f++)a[e+f]=b[c+f]},flattenChunks:function(a){var b,c,d,e,f,g;for(d=0,b=0,c=a.length;b<c;b++)d+=a[b].length;for(g=new Uint8Array(d),e=0,b=0,c=a.length;b<c;b++)f=a[b],g.set(f,e),e+=f.length;return g}},f={arraySet:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},flattenChunks:function(a){return[].concat.apply([],a)}};c.setTyped=function(a){a?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,e)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,f))},c.setTyped(d)},{}],29:[function(a,b,c){"use strict";function d(a,b){if(b<65537&&(a.subarray&&g||!a.subarray&&f))return String.fromCharCode.apply(null,e.shrinkBuf(a,b));for(var c="",d=0;d<b;d++)c+=String.fromCharCode(a[d]);return c}var e=a("./common"),f=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch(h){f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(h){g=!1}for(var i=new e.Buf8(256),j=0;j<256;j++)i[j]=j>=252?6:j>=248?5:j>=240?4:j>=224?3:j>=192?2:1;i[254]=i[254]=1,c.string2buf=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;f<h;f++)c=a.charCodeAt(f),55296===(64512&c)&&f+1<h&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=c<128?1:c<2048?2:c<65536?3:4;for(b=new e.Buf8(i),g=0,f=0;g<i;f++)c=a.charCodeAt(f),55296===(64512&c)&&f+1<h&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),c<128?b[g++]=c:c<2048?(b[g++]=192|c>>>6,b[g++]=128|63&c):c<65536?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},c.buf2binstring=function(a){return d(a,a.length)},c.binstring2buf=function(a){for(var b=new e.Buf8(a.length),c=0,d=b.length;c<d;c++)b[c]=a.charCodeAt(c);return b},c.buf2string=function(a,b){var c,e,f,g,h=b||a.length,j=new Array(2*h);for(e=0,c=0;c<h;)if(f=a[c++],f<128)j[e++]=f;else if(g=i[f],g>4)j[e++]=65533,c+=g-1;else{for(f&=2===g?31:3===g?15:7;g>1&&c<h;)f=f<<6|63&a[c++],g--;g>1?j[e++]=65533:f<65536?j[e++]=f:(f-=65536,j[e++]=55296|f>>10&1023,j[e++]=56320|1023&f)}return d(j,e)},c.utf8border=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return c<0?b:0===c?b:c+i[a[c]]>b?c:b}},{"./common":28}],30:[function(a,b,c){"use strict";function d(a,b,c,d){for(var e=65535&a|0,f=a>>>16&65535|0,g=0;0!==c;){g=c>2e3?2e3:c,c-=g;do e=e+b[d++]|0,f=f+e|0;while(--g);e%=65521,f%=65521}return e|f<<16|0}b.exports=d},{}],31:[function(a,b,c){"use strict";b.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],32:[function(a,b,c){"use strict";function d(){for(var a,b=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a}return b}function e(a,b,c,d){var e=f,g=d+c;a^=-1;for(var h=d;h<g;h++)a=a>>>8^e[255&(a^b[h])];return a^-1}var f=d();b.exports=e},{}],33:[function(a,b,c){"use strict";function d(a,b){return a.msg=I[b],b}function e(a){return(a<<1)-(a>4?9:0)}function f(a){for(var b=a.length;--b>=0;)a[b]=0}function g(a){var b=a.state,c=b.pending;c>a.avail_out&&(c=a.avail_out),0!==c&&(E.arraySet(a.output,b.pending_buf,b.pending_out,c,a.next_out),a.next_out+=c,b.pending_out+=c,a.total_out+=c,a.avail_out-=c,b.pending-=c,0===b.pending&&(b.pending_out=0))}function h(a,b){F._tr_flush_block(a,a.block_start>=0?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,g(a.strm)}function i(a,b){a.pending_buf[a.pending++]=b}function j(a,b){a.pending_buf[a.pending++]=b>>>8&255,a.pending_buf[a.pending++]=255&b}function k(a,b,c,d){var e=a.avail_in;return e>d&&(e=d),0===e?0:(a.avail_in-=e,E.arraySet(b,a.input,a.next_in,e,c),1===a.state.wrap?a.adler=G(a.adler,b,e,c):2===a.state.wrap&&(a.adler=H(a.adler,b,e,c)),a.next_in+=e,a.total_in+=e,e)}function l(a,b){var c,d,e=a.max_chain_length,f=a.strstart,g=a.prev_length,h=a.nice_match,i=a.strstart>a.w_size-la?a.strstart-(a.w_size-la):0,j=a.window,k=a.w_mask,l=a.prev,m=a.strstart+ka,n=j[f+g-1],o=j[f+g];a.prev_length>=a.good_match&&(e>>=2),h>a.lookahead&&(h=a.lookahead);do if(c=b,j[c+g]===o&&j[c+g-1]===n&&j[c]===j[f]&&j[++c]===j[f+1]){f+=2,c++;do;while(j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&f<m);if(d=ka-(m-f),f=m-ka,d>g){if(a.match_start=b,g=d,d>=h)break;n=j[f+g-1],o=j[f+g]}}while((b=l[b&k])>i&&0!==--e);return g<=a.lookahead?g:a.lookahead}function m(a){var b,c,d,e,f,g=a.w_size;do{if(e=a.window_size-a.lookahead-a.strstart,a.strstart>=g+(g-la)){E.arraySet(a.window,a.window,g,g,0),a.match_start-=g,a.strstart-=g,a.block_start-=g,c=a.hash_size,b=c;do d=a.head[--b],a.head[b]=d>=g?d-g:0;while(--c);c=g,b=c;do d=a.prev[--b],a.prev[b]=d>=g?d-g:0;while(--c);e+=g}if(0===a.strm.avail_in)break;if(c=k(a.strm,a.window,a.strstart+a.lookahead,e),a.lookahead+=c,a.lookahead+a.insert>=ja)for(f=a.strstart-a.insert,a.ins_h=a.window[f],a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+1])&a.hash_mask;a.insert&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+ja-1])&a.hash_mask,a.prev[f&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=f,f++,a.insert--,!(a.lookahead+a.insert<ja)););}while(a.lookahead<la&&0!==a.strm.avail_in)}function n(a,b){var c=65535;for(c>a.pending_buf_size-5&&(c=a.pending_buf_size-5);;){if(a.lookahead<=1){if(m(a),0===a.lookahead&&b===J)return ua;if(0===a.lookahead)break}a.strstart+=a.lookahead,a.lookahead=0;var d=a.block_start+c;if((0===a.strstart||a.strstart>=d)&&(a.lookahead=a.strstart-d,a.strstart=d,h(a,!1),0===a.strm.avail_out))return ua;if(a.strstart-a.block_start>=a.w_size-la&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.strstart>a.block_start&&(h(a,!1),0===a.strm.avail_out)?ua:ua}function o(a,b){for(var c,d;;){if(a.lookahead<la){if(m(a),a.lookahead<la&&b===J)return ua;if(0===a.lookahead)break}if(c=0,a.lookahead>=ja&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),0!==c&&a.strstart-c<=a.w_size-la&&(a.match_length=l(a,c)),a.match_length>=ja)if(d=F._tr_tally(a,a.strstart-a.match_start,a.match_length-ja),a.lookahead-=a.match_length,a.match_length<=a.max_lazy_match&&a.lookahead>=ja){a.match_length--;do a.strstart++,a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart;while(0!==--a.match_length);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+1])&a.hash_mask;else d=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(d&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=a.strstart<ja-1?a.strstart:ja-1,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function p(a,b){for(var c,d,e;;){if(a.lookahead<la){if(m(a),a.lookahead<la&&b===J)return ua;if(0===a.lookahead)break}if(c=0,a.lookahead>=ja&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=ja-1,0!==c&&a.prev_length<a.max_lazy_match&&a.strstart-c<=a.w_size-la&&(a.match_length=l(a,c),a.match_length<=5&&(a.strategy===U||a.match_length===ja&&a.strstart-a.match_start>4096)&&(a.match_length=ja-1)),a.prev_length>=ja&&a.match_length<=a.prev_length){e=a.strstart+a.lookahead-ja,d=F._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-ja),a.lookahead-=a.prev_length-1,a.prev_length-=2;do++a.strstart<=e&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+ja-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart);while(0!==--a.prev_length);if(a.match_available=0,a.match_length=ja-1,a.strstart++,d&&(h(a,!1),0===a.strm.avail_out))return ua}else if(a.match_available){if(d=F._tr_tally(a,0,a.window[a.strstart-1]),d&&h(a,!1),a.strstart++,a.lookahead--,0===a.strm.avail_out)return ua}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&&(d=F._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart<ja-1?a.strstart:ja-1,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function q(a,b){for(var c,d,e,f,g=a.window;;){if(a.lookahead<=ka){if(m(a),a.lookahead<=ka&&b===J)return ua;if(0===a.lookahead)break}if(a.match_length=0,a.lookahead>=ja&&a.strstart>0&&(e=a.strstart-1,d=g[e],d===g[++e]&&d===g[++e]&&d===g[++e])){f=a.strstart+ka;do;while(d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&e<f);a.match_length=ka-(f-e),a.match_length>a.lookahead&&(a.match_length=a.lookahead)}if(a.match_length>=ja?(c=F._tr_tally(a,1,a.match_length-ja),a.lookahead-=a.match_length,a.strstart+=a.match_length,a.match_length=0):(c=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++),c&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function r(a,b){for(var c;;){if(0===a.lookahead&&(m(a),0===a.lookahead)){if(b===J)return ua;break}if(a.match_length=0,c=F._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++,c&&(h(a,!1),0===a.strm.avail_out))return ua}return a.insert=0,b===M?(h(a,!0),0===a.strm.avail_out?wa:xa):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?ua:va}function s(a,b,c,d,e){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d,this.func=e}function t(a){a.window_size=2*a.w_size,f(a.head),a.max_lazy_match=D[a.level].max_lazy,a.good_match=D[a.level].good_length,a.nice_match=D[a.level].nice_length,a.max_chain_length=D[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=ja-1,a.match_available=0,a.ins_h=0}function u(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=$,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new E.Buf16(2*ha),this.dyn_dtree=new E.Buf16(2*(2*fa+1)),this.bl_tree=new E.Buf16(2*(2*ga+1)),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new E.Buf16(ia+1),this.heap=new E.Buf16(2*ea+1),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new E.Buf16(2*ea+1),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function v(a){var b;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=Z,b=a.state,b.pending=0,b.pending_out=0,b.wrap<0&&(b.wrap=-b.wrap),b.status=b.wrap?na:sa,a.adler=2===b.wrap?0:1,b.last_flush=J,F._tr_init(b),O):d(a,Q)}function w(a){var b=v(a);return b===O&&t(a.state),b}function x(a,b){return a&&a.state?2!==a.state.wrap?Q:(a.state.gzhead=b,O):Q}function y(a,b,c,e,f,g){if(!a)return Q;var h=1;if(b===T&&(b=6),e<0?(h=0,e=-e):e>15&&(h=2,e-=16),f<1||f>_||c!==$||e<8||e>15||b<0||b>9||g<0||g>X)return d(a,Q);8===e&&(e=9);var i=new u;return a.state=i,i.strm=a,i.wrap=h,i.gzhead=null,i.w_bits=e,i.w_size=1<<i.w_bits,i.w_mask=i.w_size-1,i.hash_bits=f+7,i.hash_size=1<<i.hash_bits,i.hash_mask=i.hash_size-1,i.hash_shift=~~((i.hash_bits+ja-1)/ja),i.window=new E.Buf8(2*i.w_size),i.head=new E.Buf16(i.hash_size),i.prev=new E.Buf16(i.w_size),i.lit_bufsize=1<<f+6,i.pending_buf_size=4*i.lit_bufsize,i.pending_buf=new E.Buf8(i.pending_buf_size),i.d_buf=1*i.lit_bufsize,i.l_buf=3*i.lit_bufsize,i.level=b,i.strategy=g,i.method=c,w(a)}function z(a,b){return y(a,b,$,aa,ba,Y)}function A(a,b){var c,h,k,l;if(!a||!a.state||b>N||b<0)return a?d(a,Q):Q;if(h=a.state,!a.output||!a.input&&0!==a.avail_in||h.status===ta&&b!==M)return d(a,0===a.avail_out?S:Q);if(h.strm=a,c=h.last_flush,h.last_flush=b,h.status===na)if(2===h.wrap)a.adler=0,i(h,31),i(h,139),i(h,8),h.gzhead?(i(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),i(h,255&h.gzhead.time),i(h,h.gzhead.time>>8&255),i(h,h.gzhead.time>>16&255),i(h,h.gzhead.time>>24&255),i(h,9===h.level?2:h.strategy>=V||h.level<2?4:0),i(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(i(h,255&h.gzhead.extra.length),i(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(a.adler=H(a.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=oa):(i(h,0),i(h,0),i(h,0),i(h,0),i(h,0),i(h,9===h.level?2:h.strategy>=V||h.level<2?4:0),i(h,ya),h.status=sa);else{var m=$+(h.w_bits-8<<4)<<8,n=-1;n=h.strategy>=V||h.level<2?0:h.level<6?1:6===h.level?2:3,m|=n<<6,0!==h.strstart&&(m|=ma),m+=31-m%31,h.status=sa,j(h,m),0!==h.strstart&&(j(h,a.adler>>>16),j(h,65535&a.adler)),a.adler=1}if(h.status===oa)if(h.gzhead.extra){for(k=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending!==h.pending_buf_size));)i(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=pa)}else h.status=pa;if(h.status===pa)if(h.gzhead.name){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.gzindex=0,h.status=qa)}else h.status=qa;if(h.status===qa)if(h.gzhead.comment){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=H(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.status=ra)}else h.status=ra;if(h.status===ra&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&g(a),h.pending+2<=h.pending_buf_size&&(i(h,255&a.adler),i(h,a.adler>>8&255),a.adler=0,h.status=sa)):h.status=sa),0!==h.pending){if(g(a),0===a.avail_out)return h.last_flush=-1,O}else if(0===a.avail_in&&e(b)<=e(c)&&b!==M)return d(a,S);if(h.status===ta&&0!==a.avail_in)return d(a,S);if(0!==a.avail_in||0!==h.lookahead||b!==J&&h.status!==ta){var o=h.strategy===V?r(h,b):h.strategy===W?q(h,b):D[h.level].func(h,b);if(o!==wa&&o!==xa||(h.status=ta),o===ua||o===wa)return 0===a.avail_out&&(h.last_flush=-1),O;if(o===va&&(b===K?F._tr_align(h):b!==N&&(F._tr_stored_block(h,0,0,!1),b===L&&(f(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),g(a),0===a.avail_out))return h.last_flush=-1,O}return b!==M?O:h.wrap<=0?P:(2===h.wrap?(i(h,255&a.adler),i(h,a.adler>>8&255),i(h,a.adler>>16&255),i(h,a.adler>>24&255),i(h,255&a.total_in),i(h,a.total_in>>8&255),i(h,a.total_in>>16&255),i(h,a.total_in>>24&255)):(j(h,a.adler>>>16),j(h,65535&a.adler)),g(a),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?O:P)}function B(a){var b;return a&&a.state?(b=a.state.status,b!==na&&b!==oa&&b!==pa&&b!==qa&&b!==ra&&b!==sa&&b!==ta?d(a,Q):(a.state=null,b===sa?d(a,R):O)):Q}function C(a,b){var c,d,e,g,h,i,j,k,l=b.length;if(!a||!a.state)return Q;if(c=a.state,g=c.wrap,2===g||1===g&&c.status!==na||c.lookahead)return Q;for(1===g&&(a.adler=G(a.adler,b,l,0)),c.wrap=0,l>=c.w_size&&(0===g&&(f(c.head),c.strstart=0,c.block_start=0,c.insert=0),k=new E.Buf8(c.w_size),E.arraySet(k,b,l-c.w_size,c.w_size,0),b=k,l=c.w_size),h=a.avail_in,i=a.next_in,j=a.input,a.avail_in=l,a.next_in=0,a.input=b,m(c);c.lookahead>=ja;){d=c.strstart,e=c.lookahead-(ja-1);do c.ins_h=(c.ins_h<<c.hash_shift^c.window[d+ja-1])&c.hash_mask,c.prev[d&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=d,d++;while(--e);c.strstart=d,c.lookahead=ja-1,m(c)}return c.strstart+=c.lookahead,c.block_start=c.strstart,c.insert=c.lookahead,c.lookahead=0,c.match_length=c.prev_length=ja-1,c.match_available=0,a.next_in=i,a.input=j,a.avail_in=h,c.wrap=g,O}var D,E=a("../utils/common"),F=a("./trees"),G=a("./adler32"),H=a("./crc32"),I=a("./messages"),J=0,K=1,L=3,M=4,N=5,O=0,P=1,Q=-2,R=-3,S=-5,T=-1,U=1,V=2,W=3,X=4,Y=0,Z=2,$=8,_=9,aa=15,ba=8,ca=29,da=256,ea=da+1+ca,fa=30,ga=19,ha=2*ea+1,ia=15,ja=3,ka=258,la=ka+ja+1,ma=32,na=42,oa=69,pa=73,qa=91,ra=103,sa=113,ta=666,ua=1,va=2,wa=3,xa=4,ya=3;D=[new s(0,0,0,0,n),new s(4,4,8,4,o),new s(4,5,16,8,o),new s(4,6,32,32,o),new s(4,4,16,16,p),new s(8,16,32,32,p),new s(8,16,128,128,p),new s(8,32,128,256,p),new s(32,128,258,1024,p),new s(32,258,258,4096,p)],c.deflateInit=z,c.deflateInit2=y,c.deflateReset=w,c.deflateResetKeep=v,c.deflateSetHeader=x,c.deflate=A,c.deflateEnd=B,c.deflateSetDictionary=C,c.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":28,"./adler32":30,"./crc32":32,"./messages":38,"./trees":39}],34:[function(a,b,c){"use strict";function d(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}b.exports=d},{}],35:[function(a,b,c){"use strict";var d=30,e=12;b.exports=function(a,b){var c,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;c=a.state,f=a.next_in,B=a.input,g=f+(a.avail_in-5),h=a.next_out,C=a.output,i=h-(b-a.avail_out),j=h+(a.avail_out-257),k=c.dmax,l=c.wsize,m=c.whave,n=c.wnext,o=c.window,p=c.hold,q=c.bits,r=c.lencode,s=c.distcode,t=(1<<c.lenbits)-1,u=(1<<c.distbits)-1;a:do{q<15&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=r[p&t];b:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,0===w)C[h++]=65535&v;else{if(!(16&w)){if(0===(64&w)){v=r[(65535&v)+(p&(1<<w)-1)];continue b}if(32&w){c.mode=e;break a}a.msg="invalid literal/length code",c.mode=d;break a}x=65535&v,w&=15,w&&(q<w&&(p+=B[f++]<<q,q+=8),x+=p&(1<<w)-1,p>>>=w,q-=w),q<15&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=s[p&u];c:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,!(16&w)){if(0===(64&w)){v=s[(65535&v)+(p&(1<<w)-1)];continue c}a.msg="invalid distance code",c.mode=d;break a}if(y=65535&v,w&=15,q<w&&(p+=B[f++]<<q,q+=8,q<w&&(p+=B[f++]<<q,q+=8)),y+=p&(1<<w)-1,y>k){a.msg="invalid distance too far back",c.mode=d;break a}if(p>>>=w,q-=w,w=h-i,y>w){if(w=y-w,w>m&&c.sane){a.msg="invalid distance too far back",c.mode=d;break a}if(z=0,A=o,0===n){if(z+=l-w,w<x){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}else if(n<w){if(z+=l+n-w,w-=n,w<x){x-=w;do C[h++]=o[z++];while(--w);if(z=0,n<x){w=n,x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}}else if(z+=n-w,w<x){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}for(;x>2;)C[h++]=A[z++],C[h++]=A[z++],C[h++]=A[z++],x-=3;x&&(C[h++]=A[z++],x>1&&(C[h++]=A[z++]))}else{z=h-y;do C[h++]=C[z++],C[h++]=C[z++],C[h++]=C[z++],x-=3;while(x>2);x&&(C[h++]=C[z++],x>1&&(C[h++]=C[z++]))}break}}break}}while(f<g&&h<j);x=q>>3,f-=x,q-=x<<3,p&=(1<<q)-1,a.next_in=f,a.next_out=h,a.avail_in=f<g?5+(g-f):5-(f-g),a.avail_out=h<j?257+(j-h):257-(h-j),c.hold=p,c.bits=q}},{}],36:[function(a,b,c){"use strict";function d(a){return(a>>>24&255)+(a>>>8&65280)+((65280&a)<<8)+((255&a)<<24)}function e(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function f(a){var b;return a&&a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg="",b.wrap&&(a.adler=1&b.wrap),b.mode=L,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=new s.Buf32(pa),b.distcode=b.distdyn=new s.Buf32(qa),b.sane=1,b.back=-1,D):G}function g(a){var b;return a&&a.state?(b=a.state,b.wsize=0,b.whave=0,b.wnext=0,f(a)):G}function h(a,b){var c,d;return a&&a.state?(d=a.state,b<0?(c=0,b=-b):(c=(b>>4)+1,b<48&&(b&=15)),b&&(b<8||b>15)?G:(null!==d.window&&d.wbits!==b&&(d.window=null),d.wrap=c,d.wbits=b,g(a))):G}function i(a,b){var c,d;return a?(d=new e,a.state=d,d.window=null,c=h(a,b),c!==D&&(a.state=null),c):G}function j(a){return i(a,sa)}function k(a){if(ta){var b;for(q=new s.Buf32(512),r=new s.Buf32(32),b=0;b<144;)a.lens[b++]=8;for(;b<256;)a.lens[b++]=9;for(;b<280;)a.lens[b++]=7;for(;b<288;)a.lens[b++]=8;for(w(y,a.lens,0,288,q,0,a.work,{bits:9}),b=0;b<32;)a.lens[b++]=5;w(z,a.lens,0,32,r,0,a.work,{bits:5}),ta=!1}a.lencode=q,a.lenbits=9,a.distcode=r,a.distbits=5}function l(a,b,c,d){var e,f=a.state;return null===f.window&&(f.wsize=1<<f.wbits,f.wnext=0,f.whave=0,f.window=new s.Buf8(f.wsize)),d>=f.wsize?(s.arraySet(f.window,b,c-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):(e=f.wsize-f.wnext,e>d&&(e=d),s.arraySet(f.window,b,c-d,e,f.wnext),d-=e,d?(s.arraySet(f.window,b,c-d,d,0),f.wnext=d,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&&(f.wnext=0),f.whave<f.wsize&&(f.whave+=e))),0}function m(a,b){var c,e,f,g,h,i,j,m,n,o,p,q,r,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa=0,Ba=new s.Buf8(4),Ca=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!a||!a.state||!a.output||!a.input&&0!==a.avail_in)return G;c=a.state,c.mode===W&&(c.mode=X),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,o=i,p=j,xa=D;a:for(;;)switch(c.mode){case L:if(0===c.wrap){c.mode=X;break}for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(2&c.wrap&&35615===m){c.check=0,Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0),m=0,n=0,c.mode=M;break}if(c.flags=0,c.head&&(c.head.done=!1),!(1&c.wrap)||(((255&m)<<8)+(m>>8))%31){a.msg="incorrect header check",c.mode=ma;break}if((15&m)!==K){a.msg="unknown compression method",c.mode=ma;break}if(m>>>=4,n-=4,wa=(15&m)+8,0===c.wbits)c.wbits=wa;else if(wa>c.wbits){a.msg="invalid window size",c.mode=ma;break}c.dmax=1<<wa,a.adler=c.check=1,c.mode=512&m?U:W,m=0,n=0;break;case M:for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.flags=m,(255&c.flags)!==K){a.msg="unknown compression method",c.mode=ma;break}if(57344&c.flags){a.msg="unknown header flags set",c.mode=ma;break}c.head&&(c.head.text=m>>8&1),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0,c.mode=N;case N:for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.time=m),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,Ba[2]=m>>>16&255,Ba[3]=m>>>24&255,c.check=u(c.check,Ba,4,0)),m=0,n=0,c.mode=O;case O:for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,
n+=8}c.head&&(c.head.xflags=255&m,c.head.os=m>>8),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0,c.mode=P;case P:if(1024&c.flags){for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length=m,c.head&&(c.head.extra_len=m),512&c.flags&&(Ba[0]=255&m,Ba[1]=m>>>8&255,c.check=u(c.check,Ba,2,0)),m=0,n=0}else c.head&&(c.head.extra=null);c.mode=Q;case Q:if(1024&c.flags&&(q=c.length,q>i&&(q=i),q&&(c.head&&(wa=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),s.arraySet(c.head.extra,e,g,q,wa)),512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,c.length-=q),c.length))break a;c.length=0,c.mode=R;case R:if(2048&c.flags){if(0===i)break a;q=0;do wa=e[g+q++],c.head&&wa&&c.length<65536&&(c.head.name+=String.fromCharCode(wa));while(wa&&q<i);if(512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,wa)break a}else c.head&&(c.head.name=null);c.length=0,c.mode=S;case S:if(4096&c.flags){if(0===i)break a;q=0;do wa=e[g+q++],c.head&&wa&&c.length<65536&&(c.head.comment+=String.fromCharCode(wa));while(wa&&q<i);if(512&c.flags&&(c.check=u(c.check,e,q,g)),i-=q,g+=q,wa)break a}else c.head&&(c.head.comment=null);c.mode=T;case T:if(512&c.flags){for(;n<16;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(65535&c.check)){a.msg="header crc mismatch",c.mode=ma;break}m=0,n=0}c.head&&(c.head.hcrc=c.flags>>9&1,c.head.done=!0),a.adler=c.check=0,c.mode=W;break;case U:for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}a.adler=c.check=d(m),m=0,n=0,c.mode=V;case V:if(0===c.havedict)return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,F;a.adler=c.check=1,c.mode=W;case W:if(b===B||b===C)break a;case X:if(c.last){m>>>=7&n,n-=7&n,c.mode=ja;break}for(;n<3;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}switch(c.last=1&m,m>>>=1,n-=1,3&m){case 0:c.mode=Y;break;case 1:if(k(c),c.mode=ca,b===C){m>>>=2,n-=2;break a}break;case 2:c.mode=_;break;case 3:a.msg="invalid block type",c.mode=ma}m>>>=2,n-=2;break;case Y:for(m>>>=7&n,n-=7&n;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if((65535&m)!==(m>>>16^65535)){a.msg="invalid stored block lengths",c.mode=ma;break}if(c.length=65535&m,m=0,n=0,c.mode=Z,b===C)break a;case Z:c.mode=$;case $:if(q=c.length){if(q>i&&(q=i),q>j&&(q=j),0===q)break a;s.arraySet(f,e,g,q,h),i-=q,g+=q,j-=q,h+=q,c.length-=q;break}c.mode=W;break;case _:for(;n<14;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.nlen=(31&m)+257,m>>>=5,n-=5,c.ndist=(31&m)+1,m>>>=5,n-=5,c.ncode=(15&m)+4,m>>>=4,n-=4,c.nlen>286||c.ndist>30){a.msg="too many length or distance symbols",c.mode=ma;break}c.have=0,c.mode=aa;case aa:for(;c.have<c.ncode;){for(;n<3;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.lens[Ca[c.have++]]=7&m,m>>>=3,n-=3}for(;c.have<19;)c.lens[Ca[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,ya={bits:c.lenbits},xa=w(x,c.lens,0,19,c.lencode,0,c.work,ya),c.lenbits=ya.bits,xa){a.msg="invalid code lengths set",c.mode=ma;break}c.have=0,c.mode=ba;case ba:for(;c.have<c.nlen+c.ndist;){for(;Aa=c.lencode[m&(1<<c.lenbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(sa<16)m>>>=qa,n-=qa,c.lens[c.have++]=sa;else{if(16===sa){for(za=qa+2;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m>>>=qa,n-=qa,0===c.have){a.msg="invalid bit length repeat",c.mode=ma;break}wa=c.lens[c.have-1],q=3+(3&m),m>>>=2,n-=2}else if(17===sa){for(za=qa+3;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qa,n-=qa,wa=0,q=3+(7&m),m>>>=3,n-=3}else{for(za=qa+7;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qa,n-=qa,wa=0,q=11+(127&m),m>>>=7,n-=7}if(c.have+q>c.nlen+c.ndist){a.msg="invalid bit length repeat",c.mode=ma;break}for(;q--;)c.lens[c.have++]=wa}}if(c.mode===ma)break;if(0===c.lens[256]){a.msg="invalid code -- missing end-of-block",c.mode=ma;break}if(c.lenbits=9,ya={bits:c.lenbits},xa=w(y,c.lens,0,c.nlen,c.lencode,0,c.work,ya),c.lenbits=ya.bits,xa){a.msg="invalid literal/lengths set",c.mode=ma;break}if(c.distbits=6,c.distcode=c.distdyn,ya={bits:c.distbits},xa=w(z,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,ya),c.distbits=ya.bits,xa){a.msg="invalid distances set",c.mode=ma;break}if(c.mode=ca,b===C)break a;case ca:c.mode=da;case da:if(i>=6&&j>=258){a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,v(a,p),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,c.mode===W&&(c.back=-1);break}for(c.back=0;Aa=c.lencode[m&(1<<c.lenbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(ra&&0===(240&ra)){for(ta=qa,ua=ra,va=sa;Aa=c.lencode[va+((m&(1<<ta+ua)-1)>>ta)],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(ta+qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=ta,n-=ta,c.back+=ta}if(m>>>=qa,n-=qa,c.back+=qa,c.length=sa,0===ra){c.mode=ia;break}if(32&ra){c.back=-1,c.mode=W;break}if(64&ra){a.msg="invalid literal/length code",c.mode=ma;break}c.extra=15&ra,c.mode=ea;case ea:if(c.extra){for(za=c.extra;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=fa;case fa:for(;Aa=c.distcode[m&(1<<c.distbits)-1],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(0===(240&ra)){for(ta=qa,ua=ra,va=sa;Aa=c.distcode[va+((m&(1<<ta+ua)-1)>>ta)],qa=Aa>>>24,ra=Aa>>>16&255,sa=65535&Aa,!(ta+qa<=n);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=ta,n-=ta,c.back+=ta}if(m>>>=qa,n-=qa,c.back+=qa,64&ra){a.msg="invalid distance code",c.mode=ma;break}c.offset=sa,c.extra=15&ra,c.mode=ga;case ga:if(c.extra){for(za=c.extra;n<za;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.offset+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}if(c.offset>c.dmax){a.msg="invalid distance too far back",c.mode=ma;break}c.mode=ha;case ha:if(0===j)break a;if(q=p-j,c.offset>q){if(q=c.offset-q,q>c.whave&&c.sane){a.msg="invalid distance too far back",c.mode=ma;break}q>c.wnext?(q-=c.wnext,r=c.wsize-q):r=c.wnext-q,q>c.length&&(q=c.length),pa=c.window}else pa=f,r=h-c.offset,q=c.length;q>j&&(q=j),j-=q,c.length-=q;do f[h++]=pa[r++];while(--q);0===c.length&&(c.mode=da);break;case ia:if(0===j)break a;f[h++]=c.length,j--,c.mode=da;break;case ja:if(c.wrap){for(;n<32;){if(0===i)break a;i--,m|=e[g++]<<n,n+=8}if(p-=j,a.total_out+=p,c.total+=p,p&&(a.adler=c.check=c.flags?u(c.check,f,p,h-p):t(c.check,f,p,h-p)),p=j,(c.flags?m:d(m))!==c.check){a.msg="incorrect data check",c.mode=ma;break}m=0,n=0}c.mode=ka;case ka:if(c.wrap&&c.flags){for(;n<32;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(4294967295&c.total)){a.msg="incorrect length check",c.mode=ma;break}m=0,n=0}c.mode=la;case la:xa=E;break a;case ma:xa=H;break a;case na:return I;case oa:default:return G}return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,(c.wsize||p!==a.avail_out&&c.mode<ma&&(c.mode<ja||b!==A))&&l(a,a.output,a.next_out,p-a.avail_out)?(c.mode=na,I):(o-=a.avail_in,p-=a.avail_out,a.total_in+=o,a.total_out+=p,c.total+=p,c.wrap&&p&&(a.adler=c.check=c.flags?u(c.check,f,p,a.next_out-p):t(c.check,f,p,a.next_out-p)),a.data_type=c.bits+(c.last?64:0)+(c.mode===W?128:0)+(c.mode===ca||c.mode===Z?256:0),(0===o&&0===p||b===A)&&xa===D&&(xa=J),xa)}function n(a){if(!a||!a.state)return G;var b=a.state;return b.window&&(b.window=null),a.state=null,D}function o(a,b){var c;return a&&a.state?(c=a.state,0===(2&c.wrap)?G:(c.head=b,b.done=!1,D)):G}function p(a,b){var c,d,e,f=b.length;return a&&a.state?(c=a.state,0!==c.wrap&&c.mode!==V?G:c.mode===V&&(d=1,d=t(d,b,f,0),d!==c.check)?H:(e=l(a,b,f,f))?(c.mode=na,I):(c.havedict=1,D)):G}var q,r,s=a("../utils/common"),t=a("./adler32"),u=a("./crc32"),v=a("./inffast"),w=a("./inftrees"),x=0,y=1,z=2,A=4,B=5,C=6,D=0,E=1,F=2,G=-2,H=-3,I=-4,J=-5,K=8,L=1,M=2,N=3,O=4,P=5,Q=6,R=7,S=8,T=9,U=10,V=11,W=12,X=13,Y=14,Z=15,$=16,_=17,aa=18,ba=19,ca=20,da=21,ea=22,fa=23,ga=24,ha=25,ia=26,ja=27,ka=28,la=29,ma=30,na=31,oa=32,pa=852,qa=592,ra=15,sa=ra,ta=!0;c.inflateReset=g,c.inflateReset2=h,c.inflateResetKeep=f,c.inflateInit=j,c.inflateInit2=i,c.inflate=m,c.inflateEnd=n,c.inflateGetHeader=o,c.inflateSetDictionary=p,c.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":28,"./adler32":30,"./crc32":32,"./inffast":35,"./inftrees":37}],37:[function(a,b,c){"use strict";var d=a("../utils/common"),e=15,f=852,g=592,h=0,i=1,j=2,k=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],n=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];b.exports=function(a,b,c,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C=s.bits,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=null,O=0,P=new d.Buf16(e+1),Q=new d.Buf16(e+1),R=null,S=0;for(D=0;D<=e;D++)P[D]=0;for(E=0;E<o;E++)P[b[c+E]]++;for(H=C,G=e;G>=1&&0===P[G];G--);if(H>G&&(H=G),0===G)return p[q++]=20971520,p[q++]=20971520,s.bits=1,0;for(F=1;F<G&&0===P[F];F++);for(H<F&&(H=F),K=1,D=1;D<=e;D++)if(K<<=1,K-=P[D],K<0)return-1;if(K>0&&(a===h||1!==G))return-1;for(Q[1]=0,D=1;D<e;D++)Q[D+1]=Q[D]+P[D];for(E=0;E<o;E++)0!==b[c+E]&&(r[Q[b[c+E]]++]=E);if(a===h?(N=R=r,y=19):a===i?(N=k,O-=257,R=l,S-=257,y=256):(N=m,R=n,y=-1),M=0,E=0,D=F,x=q,I=H,J=0,v=-1,L=1<<H,w=L-1,a===i&&L>f||a===j&&L>g)return 1;for(var T=0;;){T++,z=D-J,r[E]<y?(A=0,B=r[E]):r[E]>y?(A=R[S+r[E]],B=N[O+r[E]]):(A=96,B=0),t=1<<D-J,u=1<<I,F=u;do u-=t,p[x+(M>>J)+u]=z<<24|A<<16|B|0;while(0!==u);for(t=1<<D-1;M&t;)t>>=1;if(0!==t?(M&=t-1,M+=t):M=0,E++,0===--P[D]){if(D===G)break;D=b[c+r[E]]}if(D>H&&(M&w)!==v){for(0===J&&(J=H),x+=F,I=D-J,K=1<<I;I+J<G&&(K-=P[I+J],!(K<=0));)I++,K<<=1;if(L+=1<<I,a===i&&L>f||a===j&&L>g)return 1;v=M&w,p[v]=H<<24|I<<16|x-q|0}}return 0!==M&&(p[x+M]=D-J<<24|64<<16|0),s.bits=H,0}},{"../utils/common":28}],38:[function(a,b,c){"use strict";b.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],39:[function(a,b,c){"use strict";function d(a){for(var b=a.length;--b>=0;)a[b]=0}function e(a,b,c,d,e){this.static_tree=a,this.extra_bits=b,this.extra_base=c,this.elems=d,this.max_length=e,this.has_stree=a&&a.length}function f(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b}function g(a){return a<256?ia[a]:ia[256+(a>>>7)]}function h(a,b){a.pending_buf[a.pending++]=255&b,a.pending_buf[a.pending++]=b>>>8&255}function i(a,b,c){a.bi_valid>X-c?(a.bi_buf|=b<<a.bi_valid&65535,h(a,a.bi_buf),a.bi_buf=b>>X-a.bi_valid,a.bi_valid+=c-X):(a.bi_buf|=b<<a.bi_valid&65535,a.bi_valid+=c)}function j(a,b,c){i(a,c[2*b],c[2*b+1])}function k(a,b){var c=0;do c|=1&a,a>>>=1,c<<=1;while(--b>0);return c>>>1}function l(a){16===a.bi_valid?(h(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):a.bi_valid>=8&&(a.pending_buf[a.pending++]=255&a.bi_buf,a.bi_buf>>=8,a.bi_valid-=8)}function m(a,b){var c,d,e,f,g,h,i=b.dyn_tree,j=b.max_code,k=b.stat_desc.static_tree,l=b.stat_desc.has_stree,m=b.stat_desc.extra_bits,n=b.stat_desc.extra_base,o=b.stat_desc.max_length,p=0;for(f=0;f<=W;f++)a.bl_count[f]=0;for(i[2*a.heap[a.heap_max]+1]=0,c=a.heap_max+1;c<V;c++)d=a.heap[c],f=i[2*i[2*d+1]+1]+1,f>o&&(f=o,p++),i[2*d+1]=f,d>j||(a.bl_count[f]++,g=0,d>=n&&(g=m[d-n]),h=i[2*d],a.opt_len+=h*(f+g),l&&(a.static_len+=h*(k[2*d+1]+g)));if(0!==p){do{for(f=o-1;0===a.bl_count[f];)f--;a.bl_count[f]--,a.bl_count[f+1]+=2,a.bl_count[o]--,p-=2}while(p>0);for(f=o;0!==f;f--)for(d=a.bl_count[f];0!==d;)e=a.heap[--c],e>j||(i[2*e+1]!==f&&(a.opt_len+=(f-i[2*e+1])*i[2*e],i[2*e+1]=f),d--)}}function n(a,b,c){var d,e,f=new Array(W+1),g=0;for(d=1;d<=W;d++)f[d]=g=g+c[d-1]<<1;for(e=0;e<=b;e++){var h=a[2*e+1];0!==h&&(a[2*e]=k(f[h]++,h))}}function o(){var a,b,c,d,f,g=new Array(W+1);for(c=0,d=0;d<Q-1;d++)for(ka[d]=c,a=0;a<1<<ba[d];a++)ja[c++]=d;for(ja[c-1]=d,f=0,d=0;d<16;d++)for(la[d]=f,a=0;a<1<<ca[d];a++)ia[f++]=d;for(f>>=7;d<T;d++)for(la[d]=f<<7,a=0;a<1<<ca[d]-7;a++)ia[256+f++]=d;for(b=0;b<=W;b++)g[b]=0;for(a=0;a<=143;)ga[2*a+1]=8,a++,g[8]++;for(;a<=255;)ga[2*a+1]=9,a++,g[9]++;for(;a<=279;)ga[2*a+1]=7,a++,g[7]++;for(;a<=287;)ga[2*a+1]=8,a++,g[8]++;for(n(ga,S+1,g),a=0;a<T;a++)ha[2*a+1]=5,ha[2*a]=k(a,5);ma=new e(ga,ba,R+1,S,W),na=new e(ha,ca,0,T,W),oa=new e(new Array(0),da,0,U,Y)}function p(a){var b;for(b=0;b<S;b++)a.dyn_ltree[2*b]=0;for(b=0;b<T;b++)a.dyn_dtree[2*b]=0;for(b=0;b<U;b++)a.bl_tree[2*b]=0;a.dyn_ltree[2*Z]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0}function q(a){a.bi_valid>8?h(a,a.bi_buf):a.bi_valid>0&&(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0}function r(a,b,c,d){q(a),d&&(h(a,c),h(a,~c)),G.arraySet(a.pending_buf,a.window,b,c,a.pending),a.pending+=c}function s(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}function t(a,b,c){for(var d=a.heap[c],e=c<<1;e<=a.heap_len&&(e<a.heap_len&&s(b,a.heap[e+1],a.heap[e],a.depth)&&e++,!s(b,d,a.heap[e],a.depth));)a.heap[c]=a.heap[e],c=e,e<<=1;a.heap[c]=d}function u(a,b,c){var d,e,f,h,k=0;if(0!==a.last_lit)do d=a.pending_buf[a.d_buf+2*k]<<8|a.pending_buf[a.d_buf+2*k+1],e=a.pending_buf[a.l_buf+k],k++,0===d?j(a,e,b):(f=ja[e],j(a,f+R+1,b),h=ba[f],0!==h&&(e-=ka[f],i(a,e,h)),d--,f=g(d),j(a,f,c),h=ca[f],0!==h&&(d-=la[f],i(a,d,h)));while(k<a.last_lit);j(a,Z,b)}function v(a,b){var c,d,e,f=b.dyn_tree,g=b.stat_desc.static_tree,h=b.stat_desc.has_stree,i=b.stat_desc.elems,j=-1;for(a.heap_len=0,a.heap_max=V,c=0;c<i;c++)0!==f[2*c]?(a.heap[++a.heap_len]=j=c,a.depth[c]=0):f[2*c+1]=0;for(;a.heap_len<2;)e=a.heap[++a.heap_len]=j<2?++j:0,f[2*e]=1,a.depth[e]=0,a.opt_len--,h&&(a.static_len-=g[2*e+1]);for(b.max_code=j,c=a.heap_len>>1;c>=1;c--)t(a,f,c);e=i;do c=a.heap[1],a.heap[1]=a.heap[a.heap_len--],t(a,f,1),d=a.heap[1],a.heap[--a.heap_max]=c,a.heap[--a.heap_max]=d,f[2*e]=f[2*c]+f[2*d],a.depth[e]=(a.depth[c]>=a.depth[d]?a.depth[c]:a.depth[d])+1,f[2*c+1]=f[2*d+1]=e,a.heap[1]=e++,t(a,f,1);while(a.heap_len>=2);a.heap[--a.heap_max]=a.heap[1],m(a,b),n(f,j,a.bl_count)}function w(a,b,c){var d,e,f=-1,g=b[1],h=0,i=7,j=4;for(0===g&&(i=138,j=3),b[2*(c+1)+1]=65535,d=0;d<=c;d++)e=g,g=b[2*(d+1)+1],++h<i&&e===g||(h<j?a.bl_tree[2*e]+=h:0!==e?(e!==f&&a.bl_tree[2*e]++,a.bl_tree[2*$]++):h<=10?a.bl_tree[2*_]++:a.bl_tree[2*aa]++,h=0,f=e,0===g?(i=138,j=3):e===g?(i=6,j=3):(i=7,j=4))}function x(a,b,c){var d,e,f=-1,g=b[1],h=0,k=7,l=4;for(0===g&&(k=138,l=3),d=0;d<=c;d++)if(e=g,g=b[2*(d+1)+1],!(++h<k&&e===g)){if(h<l){do j(a,e,a.bl_tree);while(0!==--h)}else 0!==e?(e!==f&&(j(a,e,a.bl_tree),h--),j(a,$,a.bl_tree),i(a,h-3,2)):h<=10?(j(a,_,a.bl_tree),i(a,h-3,3)):(j(a,aa,a.bl_tree),i(a,h-11,7));h=0,f=e,0===g?(k=138,l=3):e===g?(k=6,l=3):(k=7,l=4)}}function y(a){var b;for(w(a,a.dyn_ltree,a.l_desc.max_code),w(a,a.dyn_dtree,a.d_desc.max_code),v(a,a.bl_desc),b=U-1;b>=3&&0===a.bl_tree[2*ea[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}function z(a,b,c,d){var e;for(i(a,b-257,5),i(a,c-1,5),i(a,d-4,4),e=0;e<d;e++)i(a,a.bl_tree[2*ea[e]+1],3);x(a,a.dyn_ltree,b-1),x(a,a.dyn_dtree,c-1)}function A(a){var b,c=4093624447;for(b=0;b<=31;b++,c>>>=1)if(1&c&&0!==a.dyn_ltree[2*b])return I;if(0!==a.dyn_ltree[18]||0!==a.dyn_ltree[20]||0!==a.dyn_ltree[26])return J;for(b=32;b<R;b++)if(0!==a.dyn_ltree[2*b])return J;return I}function B(a){pa||(o(),pa=!0),a.l_desc=new f(a.dyn_ltree,ma),a.d_desc=new f(a.dyn_dtree,na),a.bl_desc=new f(a.bl_tree,oa),a.bi_buf=0,a.bi_valid=0,p(a)}function C(a,b,c,d){i(a,(L<<1)+(d?1:0),3),r(a,b,c,!0)}function D(a){i(a,M<<1,3),j(a,Z,ga),l(a)}function E(a,b,c,d){var e,f,g=0;a.level>0?(a.strm.data_type===K&&(a.strm.data_type=A(a)),v(a,a.l_desc),v(a,a.d_desc),g=y(a),e=a.opt_len+3+7>>>3,f=a.static_len+3+7>>>3,f<=e&&(e=f)):e=f=c+5,c+4<=e&&b!==-1?C(a,b,c,d):a.strategy===H||f===e?(i(a,(M<<1)+(d?1:0),3),u(a,ga,ha)):(i(a,(N<<1)+(d?1:0),3),z(a,a.l_desc.max_code+1,a.d_desc.max_code+1,g+1),u(a,a.dyn_ltree,a.dyn_dtree)),p(a),d&&q(a)}function F(a,b,c){return a.pending_buf[a.d_buf+2*a.last_lit]=b>>>8&255,a.pending_buf[a.d_buf+2*a.last_lit+1]=255&b,a.pending_buf[a.l_buf+a.last_lit]=255&c,a.last_lit++,0===b?a.dyn_ltree[2*c]++:(a.matches++,b--,a.dyn_ltree[2*(ja[c]+R+1)]++,a.dyn_dtree[2*g(b)]++),a.last_lit===a.lit_bufsize-1}var G=a("../utils/common"),H=4,I=0,J=1,K=2,L=0,M=1,N=2,O=3,P=258,Q=29,R=256,S=R+1+Q,T=30,U=19,V=2*S+1,W=15,X=16,Y=7,Z=256,$=16,_=17,aa=18,ba=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ca=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],da=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ea=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],fa=512,ga=new Array(2*(S+2));d(ga);var ha=new Array(2*T);d(ha);var ia=new Array(fa);d(ia);var ja=new Array(P-O+1);d(ja);var ka=new Array(Q);d(ka);var la=new Array(T);d(la);var ma,na,oa,pa=!1;c._tr_init=B,c._tr_stored_block=C,c._tr_flush_block=E,c._tr_tally=F,c._tr_align=D},{"../utils/common":28}],40:[function(a,b,c){"use strict";function d(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}b.exports=d},{}]},{},[10])(10)});


/***/ },

/***/ 94351
/*!************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewform.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewform)
/* harmony export */ });
/* harmony import */ var _FormComponents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormComponents.js */ 75113);
/* harmony import */ var _FNAbviewformComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FNAbviewformComponent.js */ 11260);
/* harmony import */ var _core_ABViewFormCore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/ABViewFormCore.js */ 76080);
/* harmony import */ var _core_ABViewFormCustomCore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/ABViewFormCustomCore.js */ 43747);
/* harmony import */ var _core_ABViewFormItemCore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/ABViewFormItemCore.js */ 30527);






/**
 * FNAbviewform
 * A web side import for an ABViewForm.
 */
function FNAbviewform(API) {
   const {
      ABViewComponentPlugin,
      ABViewPlugin,
      ABViewContainer,
      ABViewRuleListFormRecordRules,
      ABViewRuleListFormSubmitRules,
      ABViewPropertyAddPage,
      ABViewPropertyEditPage,
      ABFieldImage,
      AB,
   } = API;

   let FormAPI = {
      AB,
      ABViewComponentPlugin,
      ABViewPlugin,
      ABViewPropertyAddPage,
      ABViewPropertyEditPage,
      ABFieldImage,
   };

   // 1. Initialize Base Item
   const {
      FNAbviewformItem,
      FNAbviewformCustom,
      FNAbviewformURL,
      ...otherFComponents
   } = _FormComponents_js__WEBPACK_IMPORTED_MODULE_0__;

   FormAPI.ABViewFormItem = FNAbviewformItem(FormAPI);

   // Store ABViewFormItem for 'instanceof' checks in other plugins
   if (AB && AB.Class) {
      AB.Class.ABViewFormItem = FormAPI.ABViewFormItem;
   }

   FormAPI.ABViewFormItemComponent =
      FormAPI.ABViewFormItem.ABViewFormItemComponent;
   FormAPI.ABViewFormItemCore = (0,_core_ABViewFormItemCore_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ABViewPlugin);

   // 2. Initialize Custom (base for others)
   FormAPI.ABViewFormCustom = FNAbviewformCustom(FormAPI);
   FormAPI.ABViewFormCustomCore = (0,_core_ABViewFormCustomCore_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
      FormAPI.ABViewFormItem
   );

   // 3. Initialize common views
   const views = Object.values(otherFComponents).map((FNv) => FNv(FormAPI));
   views.push(FormAPI.ABViewFormItem);
   views.push(FormAPI.ABViewFormCustom);

   const ABViewFormButton = views.find((v) => v.common().key === "button");
   const ABViewFormCheckbox = views.find((v) => v.common().key === "checkbox");
   const ABViewFormConnect = views.find((v) => v.common().key === "connect");
   const ABViewFormCustom = FormAPI.ABViewFormCustom;
   const ABViewFormDatepicker = views.find(
      (v) => v.common().key === "datepicker"
   );
   const ABViewFormItem = FormAPI.ABViewFormItem;
   const ABViewFormJson = views.find((v) => v.common().key === "json");
   const ABViewFormNumber = views.find((v) => v.common().key === "numberbox");
   const ABViewFormReadonly = views.find(
      (v) => v.common().key === "fieldreadonly"
   );
   const ABViewFormSelectMultiple = views.find(
      (v) => v.common().key === "selectmultiple"
   );
   const ABViewFormSelectSingle = views.find(
      (v) => v.common().key === "selectsingle"
   );
   const ABViewFormTree = views.find((v) => v.common().key === "tree");
   const ABViewFormTextbox = views.find((v) => v.common().key === "textbox");

   // 4. Initialize Form Base and URL view
   const ABRecordRule = ABViewRuleListFormRecordRules;
   const ABSubmitRule = ABViewRuleListFormSubmitRules;

   const ABViewFormBase = (0,_core_ABViewFormCore_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
      ABViewContainer,
      ABViewFormItem,
      ABRecordRule,
      ABSubmitRule
   );

   FormAPI.ABViewFormBase = ABViewFormBase;

   const ABAbviewformComponent = (0,_FNAbviewformComponent_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      AB,
      ABViewComponentPlugin,
      ABViewFormButton,
      ABViewFormCheckbox,
      ABViewFormConnect,
      ABViewFormCustom,
      ABViewFormDatepicker,
      ABViewFormItem,
      ABViewFormJson,
      ABViewFormNumber,
      ABViewFormReadonly,
      ABViewFormSelectMultiple,
      ABViewFormSelectSingle,
      ABViewFormTree,
      ABViewFormTextbox,
   });

   views.forEach((v) => {
      v.getPluginKey = () => v.common().key;
      v.getPluginType = () => "view";
   });

   class ABViewForm extends ABViewFormBase {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues);
         this._callbacks = {
            onBeforeSaveData: () => true,
         };
      }

      static getPluginKey() {
         return this.common().key;
      }

      static getPluginType() {
         return "view";
      }

      static newInstance(application, parent) {
         return application.viewNew(
            { key: this.common().key, plugin_key: this.getPluginKey() },
            parent
         );
      }

      toObj() {
         const result = super.toObj();
         result.plugin_key = this.constructor.getPluginKey();
         return result;
      }

      component(parentId) {
         return new ABAbviewformComponent(this, parentId);
      }

      refreshDefaultButton(ids) {
         let defaultButton = this.views(
            (v) => v instanceof ABViewFormButton && v.settings.isDefault
         )[0];
         if (defaultButton == null) {
            defaultButton = ABViewFormButton.newInstance(
               this.application,
               this
            );
            defaultButton.settings.isDefault = true;
         } else {
            this._views = this.views((v) => v.id != defaultButton.id);
         }
         let yList = this.views().map((v) => (v.position.y || 0) + 1);
         yList.push(this._views.length || 0);
         yList.push($$(ids.fields).length || 0);
         let posY = Math.max(...yList);
         defaultButton.position.y = posY;
         this._views.push(defaultButton);
         return defaultButton;
      }

      getFormValues(formView, obj, dc, dcLink) {
         const visibleFields = ["id"];
         formView.getValues(function (obj) {
            visibleFields.push(obj.config.name);
         });
         const allVals = formView.getValues();
         const formVals = {};
         visibleFields.forEach((val) => {
            formVals[val] = allVals[val];
         });
         this.fieldComponents(
            (comp) =>
               comp instanceof ABViewFormCustom ||
               comp instanceof ABViewFormConnect ||
               comp instanceof ABViewFormDatepicker ||
               comp instanceof ABViewFormSelectMultiple ||
               (comp instanceof ABViewFormJson &&
                  comp.settings.type == "filter")
         ).forEach((f) => {
            const vComponent = this.viewComponents[f.id];
            if (vComponent == null) return;
            const field = f.field();
            if (field) {
               const getValue =
                  vComponent?.getValue ?? vComponent?.logic?.getValue;
               if (getValue)
                  formVals[field.columnName] = getValue.call(
                     vComponent,
                     formVals
                  );
            }
         });
         obj.connectFields().forEach((f) => {
            if (
               visibleFields.indexOf(f.columnName) == -1 &&
               formVals[f.columnName]
            ) {
               delete formVals[f.columnName];
               delete formVals[f.relationName()];
            }
         });
         for (const prop in formVals) {
            if (formVals[prop] == null || formVals[prop].length == 0)
               formVals[prop] = "";
         }
         let linkValues;
         if (dcLink) {
            linkValues = dcLink.getCursor();
         }
         if (linkValues) {
            const objectLink = dcLink.datasource;
            const connectFields = obj.connectFields();
            connectFields.forEach((f) => {
               const formFieldCom = this.fieldComponents(
                  (fComp) => fComp?.field?.()?.id === f?.id
               );
               if (
                  objectLink.id == f.settings.linkObject &&
                  formFieldCom.length < 1 &&
                  formVals[f.columnName] === undefined
               ) {
                  const linkColName = f.indexField
                     ? f.indexField.columnName
                     : objectLink.PK();
                  formVals[f.columnName] = {};
                  formVals[f.columnName][linkColName] =
                     linkValues[linkColName] ?? linkValues.id;
               }
            });
         }
         const cursorFormVals = Object.assign(dc.getCursor() ?? {}, formVals);
         obj.fields((f) => f.key == "calculate" || f.key == "formula").forEach(
            (f) => {
               if (formVals[f.columnName] == null) {
                  let reCalculate = true;
                  if (
                     f.key == "formula" &&
                     f.settings?.where?.rules?.length > 0
                  ) {
                     reCalculate = false;
                  }
                  formVals[f.columnName] = f.format(
                     cursorFormVals,
                     reCalculate
                  );
               }
            }
         );
         if (allVals.translations?.length > 0)
            formVals.translations = allVals.translations;
         obj.formCleanValues(formVals);
         return formVals;
      }

      validateData($formView, object, formVals) {
         let list = "";
         const requiredFields = this.fieldComponents(
            (fComp) =>
               fComp?.field?.().settings?.required == true ||
               fComp?.settings?.required == true
         ).map((fComp) => fComp.field());
         const validator = object.isValidData(formVals);
         let isValid = validator.pass();
         $formView.validate();
         const fixInvalidMessageUI = (col) => {
            const $forminput = $formView.elements[col];
            if (!$forminput) return;
            const height = $forminput.$height;
            if (height < 56) {
               $forminput.define("height", 60);
               $forminput.resize();
            }
            const domInvalidMessage = $forminput.$view.getElementsByClassName(
               "webix_inp_bottom_label"
            )[0];
            if (!domInvalidMessage?.style["margin-left"]) {
               domInvalidMessage.style.marginLeft = `${
                  this.settings.labelWidth ??
                  ABViewFormBase.defaultValues().labelWidth
               }px`;
            }
         };
         requiredFields.forEach((f) => {
            if (!f) return;
            const fieldVal = formVals[f.columnName];
            if (fieldVal == "" || fieldVal == null || fieldVal.length < 1) {
               $formView.markInvalid(
                  f.columnName,
                  this.AB.Label()("This is a required field.")
               );
               list += `<li>${this.AB.Label()("Missing Required Field")} ${
                  f.columnName
               }</li>`;
               isValid = false;
               fixInvalidMessageUI(f.columnName);
            }
         });
         if (!isValid) {
            const saveButton = $formView.queryView({
               view: "button",
               type: "form",
            });
            if (validator?.errors?.length) {
               validator.errors.forEach((err) => {
                  $formView.markInvalid(err.name, err.message);
                  list += `<li>${err.name}: ${err.message}</li>`;
                  fixInvalidMessageUI(err.name);
               });
               saveButton?.disable();
            } else {
               saveButton?.enable();
            }
         }
         if (list) {
            this.AB.Webix.alert({
               type: "alert-error",
               title: this.AB.Label()("Problems Saving"),
               width: 400,
               text: `<ul style='text-align:left'>${list}</ul>`,
            });
         }
         return isValid;
      }

      async recordRulesReady() {
         return this.RecordRule.rulesReady();
      }

      async saveData($formView) {
         if (!this._callbacks?.onBeforeSaveData?.()) return;
         $formView.clearValidation();
         const dv = this.datacollection;
         if (dv == null) return;
         const obj = dv.datasource;
         if (obj == null) return;
         $formView.showProgress?.({ type: "icon" });
         const formVals = this.getFormValues(
            $formView,
            obj,
            dv,
            dv.datacollectionLink
         );
         const formReady = (newFormVals) => {
            if (dv) {
               if (this.settings.clearOnSave) {
                  dv.setCursor(null);
                  $formView.clear();
               } else {
                  if (newFormVals && newFormVals.id)
                     dv.setCursor(newFormVals.id);
               }
            }
            $formView.hideProgress?.();
            if (newFormVals) this.emit("saved", newFormVals);
         };
         const formError = (err) => {
            const $saveButton = $formView.queryView({
               view: "button",
               type: "form",
            });
            if (err) {
               if (err.invalidAttributes) {
                  for (const attr in err.invalidAttributes) {
                     let invalidAttrs = err.invalidAttributes[attr];
                     if (invalidAttrs && invalidAttrs[0])
                        invalidAttrs = invalidAttrs[0];
                     $formView.markInvalid(attr, invalidAttrs.message);
                  }
               } else if (err.sqlMessage) {
                  this.AB.Webix.message({
                     text: err.sqlMessage,
                     type: "error",
                  });
               } else {
                  this.AB.Webix.message({
                     text: this.AB.Label()("System could not save your data"),
                     type: "error",
                  });
                  this.AB.notify.developer(err, {
                     message: "Could not save your data",
                     view: this.toObj(),
                  });
               }
            }
            $saveButton?.enable();
            $formView?.hideProgress?.();
         };
         await this.loadDcDataOfRecordRules();
         await this.recordRulesReady();
         this.doRecordRulesPre(formVals);
         if (!this.validateData($formView, obj, formVals)) {
            $formView.hideProgress?.();
            return;
         }
         let newFormVals;
         try {
            newFormVals = await this.submitValues(formVals);
         } catch (err) {
            formError(err.data);
            return;
         }
         try {
            await this.doRecordRules(newFormVals);
         } catch (err) {
            this.AB.notify.developer(err, {
               message: "Error processing Record Rules.",
               view: this.toObj(),
               newFormVals: newFormVals,
            });
         }
         try {
            this.doSubmitRules(newFormVals);
         } catch (errs) {
            this.AB.notify.developer(errs, {
               message: "Error processing Submit Rules.",
               view: this.toObj(),
               newFormVals: newFormVals,
            });
         }
         formReady(newFormVals);
         return newFormVals;
      }

      focusOnFirst() {
         let topPosition = 0;
         let topPositionId = "";
         this.views().forEach((item) => {
            if (item.key == "textbox" || item.key == "numberbox") {
               if (item.position.y == topPosition) {
                  topPositionId = item.id;
               }
            }
         });
         let childComponent = this.viewComponents[topPositionId];
         if (childComponent && $$(childComponent.ui.id)) {
            $$(childComponent.ui.id).focus();
         }
      }

      async loadDcDataOfRecordRules() {
         const tasks = [];
         (this.settings?.recordRules ?? []).forEach((rule) => {
            (rule?.actionSettings?.valueRules?.fieldOperations ?? []).forEach(
               (op) => {
                  if (op.valueType !== "exist") return;
                  const pullDataDC = this.AB.datacollectionByID(op.value);
                  if (
                     pullDataDC?.dataStatus ===
                     pullDataDC.dataStatusFlag.notInitial
                  )
                     tasks.push(pullDataDC.loadData());
               }
            );
         });
         await Promise.all(tasks);
         return true;
      }

      get viewComponents() {
         const superComponent = this.superComponent();
         return superComponent.viewComponents;
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

      async submitValues(formVals) {
         const model = this.datacollection?.model;
         if (model == null) return;
         if (formVals.id) {
            return await model.update(formVals.id, formVals);
         } else {
            return await model.create(formVals);
         }
      }

      async deleteData($formView) {
         const dc = this.datacollection;
         if (dc == null) return;
         const model = dc.model;
         if (model == null) return;
         const formVals = $formView.getValues();
         if (formVals?.id) {
            const result = await model.delete(formVals.id);
            if (result) {
               dc.setCursor(null);
               $formView.clear();
            }
            return result;
         }
      }
   }

   if (AB && AB.Class) {
      AB.Class.ABViewForm = ABViewForm;
   }

   const ABViewFormURL = FNAbviewformURL({
      ABAbviewformComponent,
      ABViewForm,
   });
   // Ensure ABViewFormURL has the necessary plugin methods
   ABViewFormURL.getPluginKey = () => ABViewFormURL.common().key;
   ABViewFormURL.getPluginType = () => "view";

   return [ABViewForm, ABViewFormURL, ...views];
}


/***/ },

/***/ 19635
/*!******************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformButton.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformButton)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformButtonComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformButtonComponent.js */ 82599);
/* harmony import */ var _core_ABViewFormButtonCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormButtonCore.js */ 70492);



function FNAbviewformButton({
   ABViewComponentPlugin,
   ABViewPlugin,
   ABViewFormItemComponent,
}) {
   const ABViewFormButtonCore = (0,_core_ABViewFormButtonCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewPlugin);

   if (!ABViewFormItemComponent) {
      const error = new Error(
         "ABViewFormButton: ABViewFormItemComponent is undefined"
      );
      console.error(error);
      return null;
   }

   const ABAbviewformButtonComponent = (0,_viewComponent_FNAbviewformButtonComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewFormItemComponent,
   });

   return class ABViewFormButton extends ABViewFormButtonCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformButtonComponent(this);
      }
   };
}


/***/ },

/***/ 70186
/*!********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformCheckbox.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformCheckbox)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformCheckboxComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformCheckboxComponent.js */ 45112);
/* harmony import */ var _core_ABViewFormCheckboxCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormCheckboxCore.js */ 56561);



function FNAbviewformCheckbox({
   ABViewComponentPlugin,
   ABViewFormItemComponent,
   ABViewFormItem,
}) {
   const ABViewFormCheckboxCore =
      (0,_core_ABViewFormCheckboxCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewFormItem);
   const ABAbviewformCheckboxComponent = (0,_viewComponent_FNAbviewformCheckboxComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewFormItemComponent,
   });

   return class ABViewFormCheckbox extends ABViewFormCheckboxCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformCheckboxComponent(this);
      }
   };
}


/***/ },

/***/ 11260
/*!*********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformComponent.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformComponent)
/* harmony export */ });
function FNAbviewformComponent({
   AB,
   ABViewComponentPlugin,
   ABViewFormButton,
   ABViewFormCheckbox,
   ABViewFormConnect,
   ABViewFormCustom,
   ABViewFormDatepicker,
   ABViewFormItem,
   ABViewFormJson,
   ABViewFormNumber,
   ABViewFormReadonly,
   ABViewFormSelectMultiple,
   ABViewFormSelectSingle,
   ABViewFormTextbox,
   ABViewFormTree,
}) {
   async function timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
   }

   const fieldValidations = [];

   return class ABAbviewformComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase ?? `ABViewForm_${baseView.id}`,
            Object.assign(
               {
                  form: "",

                  layout: "",
                  filterComplex: "",
               },
               ids
            )
         );

         this.timerId = null;
         this._showed = false;
      }

      ui() {
         console.log("ABAbviewformComponent.ui()", this.view.key, this.view.id);
         const baseView = this.view;
         const superComponent = baseView.superComponent();
         const rows = superComponent.ui().rows ?? [];
         const fieldValidationsHolder = this.uiValidationHolder();
         const _ui = super.ui([
            {
               id: this.ids.form,
               view: "form",
               abid: baseView.id,
               rows: rows.concat(fieldValidationsHolder),
            },
         ]);

         delete _ui.type;

         return _ui;
      }

      uiValidationHolder() {
         const result = [
            {
               hidden: true,
               rows: [],
            },
         ];

         // NOTE: this._currentObject can be set in the KanBan Side Panel
         const baseView = this.view;
         const object =
            baseView.datacollection?.datasource ?? baseView._currentObject;

         if (!object) return result;

         const validationUI = [];
         const existsFields = baseView.fieldComponents();

         object
            // Pull fields that have validation rules
            .fields((f) => f?.settings?.validationRules)
            .forEach((f) => {
               const view = existsFields.find(
                  (com) => f.id === com.settings.fieldId
               );
               if (!view) return;

               // parse the rules because they were stored as a string
               // check if rules are still a string...if so lets parse them
               if (typeof f.settings.validationRules === "string") {
                  f.settings.validationRules = JSON.parse(
                     f.settings.validationRules
                  );
               }

               // there could be more than one so lets loop through and build the UI
               f.settings.validationRules.forEach((rule, indx) => {
                  const Filter = this.AB.filterComplexNew(
                     `${f.columnName}_${indx}`
                  );
                  // add the new ui to an array so we can add them all at the same time
                  if (typeof Filter.ui === "function") {
                     validationUI.push(Filter.ui());
                  } else {
                     // Legacy v1 method:
                     validationUI.push(Filter.ui);
                  }

                  // store the filter's info so we can assign values and settings after the ui is rendered
                  fieldValidations.push({
                     filter: Filter,
                     view: Filter.ids.querybuilder,
                     columnName: f.columnName,
                     validationRules: rule.rules,
                     invalidMessage: rule.invalidMessage,
                  });
               });
            });

         result[0].rows = validationUI;

         return result;
      }

      async init(AB, accessLevel, options = {}) {
         await super.init(AB);

         this.view.superComponent().init(AB, accessLevel, options);

         this.initCallbacks(options);
         this.initEvents();
         this.initValidationRules();

         const abWebix = this.AB.Webix;
         const $form = $$(this.ids.form);

         if ($form) {
            abWebix.extend($form, abWebix.ProgressBar);
         }

         if (accessLevel < 2) $form.disable();
      }

      initCallbacks(options = {}) {
         // ? We need to determine from these options whether to clear on load?
         if (options?.clearOnLoad) {
            // does this need to be a function?
            this.view.settings.clearOnLoad = options.clearOnLoad();
         }
         // Q: Should we use emit the event instead ?
         const baseView = this.view;

         if (options.onBeforeSaveData)
            baseView._callbacks.onBeforeSaveData = options.onBeforeSaveData;
         else baseView._callbacks.onBeforeSaveData = () => true;
      }

      initEvents() {
         // bind a data collection to form component
         const dc = this.datacollection;

         if (!dc) return;

         // listen DC events
         ["changeCursor", "cursorStale"].forEach((key) => {
            this.eventAdd({
               emitter: dc,
               eventName: key,
               listener: (rowData) => {
                  const baseView = this.view;
                  const linkViaOneConnection = baseView.fieldComponents(
                     (comp) => comp instanceof ABViewFormConnect
                  );
                  // clear previous xxx->one selections and add new from
                  // cursor change
                  linkViaOneConnection.forEach((f) => {
                     const field = f.field();
                     if (
                        field?.settings?.linkViaType == "one" &&
                        field?.linkViaOneValues
                     ) {
                        delete field.linkViaOneValues;
                        const relationVals =
                           rowData?.[field.relationName()] ??
                           rowData?.[field.columnName];
                        if (relationVals) {
                           if (Array.isArray(relationVals)) {
                              const valArray = [];
                              relationVals.forEach((v) => {
                                 valArray.push(
                                    field.getRelationValue(v, {
                                       forUpdate: true,
                                    })
                                 );
                              });
                              field.linkViaOneValues = valArray.join(",");
                           } else {
                              field.linkViaOneValues = field.getRelationValue(
                                 relationVals,
                                 { forUpdate: true }
                              );
                           }
                        }
                     }
                  });

                  this.displayData(rowData);
               },
            });
         });

         const ids = this.ids;

         this.eventAdd({
            emitter: dc,
            eventName: "initializingData",
            listener: () => {
               const $form = $$(ids.form);

               if ($form) {
                  $form.disable();

                  $form.showProgress?.({ type: "icon" });
               }
            },
         });

         this.eventAdd({
            emitter: dc,
            eventName: "initializedData",
            listener: () => {
               const $form = $$(ids.form);

               if ($form) {
                  $form.enable();

                  $form.hideProgress?.();
               }
            },
         });

         // I think this case is currently handled by the DC.[changeCursor, cursorStale]
         // events:
         // this.eventAdd({
         //    emitter: dc,
         //    eventName: "ab.datacollection.update",
         //    listener: (msg, data) => {
         //       if (!data?.objectId) return;

         //       const object = dc.datasource;

         //       if (!object) return;

         //       if (
         //          object.id === data.objectId ||
         //          object.fields((f) => f.settings.linkObject === data.objectId)
         //             .length > 0
         //       ) {
         //          const currData = dc.getCursor();

         //          if (currData) this.displayData(currData);
         //       }
         //    },
         // });

         // bind the cursor event of the parent DC
         const linkDv = dc.datacollectionLink;

         if (linkDv)
            // update the value of link field when data of the parent dc is changed
            ["changeCursor", "cursorStale"].forEach((key) => {
               this.eventAdd({
                  emitter: linkDv,
                  eventName: key,
                  listener: (rowData) => {
                     this.displayParentData(rowData);
                  },
               });
            });
      }

      initValidationRules() {
         const dc = this.datacollection;

         if (!dc) return;

         if (!fieldValidations.length) return;

         // we need to store the rules for use later so lets build a container array
         const complexValidations = [];

         fieldValidations.forEach((f) => {
            // init each ui to have the properties (app and fields) of the object we are editing
            f.filter.applicationLoad?.(dc.datasource.application); // depreciated.
            f.filter.fieldsLoad(dc.datasource.fields());
            // now we can set the value because the fields are properly initialized
            f.filter.setValue(f.validationRules);

            // if there are validation rules present we need to store them in a lookup hash
            // so multiple rules can be stored on a single field
            if (!Array.isArray(complexValidations[f.columnName]))
               complexValidations[f.columnName] = [];

            // now we can push the rules into the hash
            // what happens if $$(f.view) isn't present?
            if ($$(f.view)) {
               complexValidations[f.columnName].push({
                  filters: $$(f.view).getFilterFunction(),
                  // values: $$(ids.form).getValues(),
                  invalidMessage: f.invalidMessage,
               });
            }
         });

         const ids = this.ids;

         // use the lookup to build the validation rules
         Object.keys(complexValidations).forEach((key) => {
            // get our field that has validation rules
            const formField = $$(ids.form).queryView({
               name: key,
            });

            if (!formField) return;

            // store the rules in a data param to be used later
            formField.$view.complexValidations = complexValidations[key];
            // define validation rules
            formField.define("validate", function (nval, oval, field) {
               // get field now that we are validating
               const fieldValidating = $$(ids.form)?.queryView({
                  name: field,
               });
               if (!fieldValidating) return true;

               // default valid is true
               let isValid = true;

               // check each rule that was stored previously on the element
               fieldValidating.$view.complexValidations.forEach((filter) => {
                  const object = dc.datasource;
                  const data = this.getValues();

                  // convert rowData from { colName : data } to { id : data }
                  const newData = {};

                  (object.fields() || []).forEach((field) => {
                     newData[field.id] = data[field.columnName];
                  });

                  // for the case of "this_object" conditions:
                  if (data.uuid) newData["this_object"] = data.uuid;

                  // use helper funtion to check if valid
                  const ruleValid = filter.filters(newData);

                  // if invalid we need to tell the field
                  if (!ruleValid) {
                     isValid = false;
                     // we also need to define an error message
                     fieldValidating.define(
                        "invalidMessage",
                        filter.invalidMessage
                     );
                  }
               });

               return isValid;
            });

            formField.refresh();
         });
      }

      async onShow(data) {
         this.saveButton?.disable();

         this._showed = true;

         const baseView = this.view;

         // call .onShow in the base component
         const superComponent = baseView.superComponent();
         await superComponent.onShow();

         const $form = $$(this.ids.form);
         const dc = this.datacollection;

         if (dc) {
            // clear current cursor on load
            // if (this.settings.clearOnLoad || _logic.callbacks.clearOnLoad() ) {
            const settings = this.settings;

            if (settings.clearOnLoad) {
               dc.setCursor(null);
            }

            // pull data of current cursor
            // await dc.waitReady();
            const rowData = dc.getCursor();

            if ($form) dc.bind($form);

            // do this for the initial form display so we can see defaults
            await this.displayData(rowData);
         }
         // show blank data in the form
         else await this.displayData(data ?? {});

         //Focus on first focusable component
         this.focusOnFirst();

         if ($form) $form.adjust();

         // Load data of DCs that are use in record rules here
         // no need to wait until they are done. (Let the save button enable)
         // It will be re-check again when saving.
         baseView.loadDcDataOfRecordRules();

         this.saveButton?.enable();
      }

      async displayData(rowData) {
         // If setTimeout is already scheduled, no need to do anything
         if (this.timerId) return;

         this.timerId = true;
         await timeout(80);
         this.timerId = null;

         const baseView = this.view;
         const customFields = baseView.fieldComponents(
            (comp) =>
               comp instanceof ABViewFormCustom ||
               // rich text
               (comp instanceof ABViewFormTextbox &&
                  comp.settings.type === "rich") ||
               (comp instanceof ABViewFormJson &&
                  comp.settings.type === "filter")
         );

         const normalFields = baseView.fieldComponents(
            (comp) =>
               comp instanceof ABViewFormItem &&
               !(comp instanceof ABViewFormCustom)
         );

         // Set default values
         if (!rowData) {
            customFields.forEach((f) => {
               const field = f.field();
               if (!field) return;

               const comp = baseView.viewComponents[f.id];
               if (!comp) return;

               // var colName = field.columnName;
               if (this._showed) comp?.onShow?.();

               // set value to each components
               const defaultRowData = {};

               field.defaultValue(defaultRowData);
               field.setValue($$(comp.ids.formItem), defaultRowData);

               comp?.refresh?.(defaultRowData);
            });

            normalFields.forEach((f) => {
               if (f.key === "button") return;

               const field = f.field();
               if (!field) return;

               const comp = baseView.viewComponents[f.id];
               if (!comp) return;

               const colName = field.columnName;

               // set value to each components
               const values = {};

               field.defaultValue(values);
               $$(comp.ids.formItem)?.setValue(values[colName] ?? "");
            });

            // select parent data to default value
            const dc = this.datacollection;
            const linkDv = dc.datacollectionLink;

            if (linkDv) {
               const parentData = linkDv.getCursor();

               this.displayParentData(parentData);
            }
         }

         // Populate value to custom fields
         else {
            customFields.forEach((f) => {
               const comp = baseView.viewComponents[f.id];
               if (!comp) return;

               if (this._showed) comp?.onShow?.();

               // set value to each components
               f?.field()?.setValue($$(comp.ids.formItem), rowData);

               comp?.refresh?.(rowData);
            });

            normalFields.forEach((f) => {
               if (f.key === "button") return;

               const field = f.field();
               if (!field) return;

               const comp = baseView.viewComponents[f.id];
               if (!comp) return;
               //
               if (f.key === "datepicker") {
                  // Not sure why, but the local format isn't applied correctly
                  // without a timeout here
                  setTimeout(() => {
                     field.setValue($$(comp.ids.formItem), rowData);
                  }, 200);
                  return;
               }

               field.setValue($$(comp.ids.formItem), rowData);
            });
         }

         this.timerId = null;
      }

      displayParentData(rowData) {
         const dc = this.datacollection;

         // If the cursor is selected, then it will not update value of the parent field
         const currCursor = dc.getCursor();
         if (currCursor) return;

         const relationField = dc.fieldLink;
         if (!relationField) return;

         const baseView = this.view;
         // Pull a component of relation field
         const relationFieldCom = baseView.fieldComponents((comp) => {
            if (!(comp instanceof ABViewFormItem)) return false;

            return comp.field()?.id === relationField.id;
         })[0];
         if (!relationFieldCom) return;

         const relationFieldView = baseView.viewComponents[relationFieldCom.id];
         if (!relationFieldView) return;

         const $relationFieldView = $$(relationFieldView.ids.formItem),
            relationName = relationField.relationName();

         // pull data of parent's dc
         const formData = {};

         formData[relationName] = rowData;

         // set data of parent to default value
         relationField.setValue($relationFieldView, formData);
      }

      detatch() {
         // TODO: remove any handlers we have attached.
      }

      focusOnFirst() {
         const baseView = this.view;

         let topPosition = 0;
         let topPositionId = "";

         baseView.views().forEach((item) => {
            if (item.key === "textbox" || item.key === "numberbox")
               if (item.position.y === topPosition) {
                  topPosition = item.position.y;
                  topPositionId = item.id;
               }
         });

         const childComponent = baseView.viewComponents[topPositionId];

         if (childComponent && $$(childComponent.ids.formItem))
            $$(childComponent.ids.formItem).focus();
      }

      get saveButton() {
         return $$(this.ids.form)?.queryView({
            view: "button",
            type: "form",
         });
      }
   };
}


/***/ },

/***/ 81921
/*!*******************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformConnect.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformConnect)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformConnectComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformConnectComponent.js */ 16911);
/* harmony import */ var _core_ABViewFormConnectCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormConnectCore.js */ 92774);



function FNAbviewformConnect({
   ABViewComponentPlugin,
   ABViewFormItemComponent,
   ABViewFormItem,
   ABViewPropertyAddPage,
   ABViewPropertyEditPage,
}) {
   const ABViewFormConnectCore = (0,_core_ABViewFormConnectCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewFormItem);
   const ABAbviewformConnectComponent = (0,_viewComponent_FNAbviewformConnectComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewFormItemComponent,
      ABViewPropertyAddPage,
      ABViewPropertyEditPage,
   });

   return class ABViewFormConnect extends ABViewFormConnectCore {
      /**
       * @param {obj} values  key=>value hash of ABView values
       * @param {ABApplication} application the application object this view is under
       * @param {ABView} parent the ABView this view is a child of. (can be null)
       */
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues);

         // Set filter value
         this.__filterComponent = this.AB.filterComplexNew(
            `${this.id}__filterComponent`
         );
         this.__filterComponent.fieldsLoad(
            this.datasource ? this.datasource.fields() : [],
            this.datasource ? this.datasource : null
         );

         this.__filterComponent.setValue(
            this.settings.filterConditions ??
               this.constructor.defaultValues().filterConditions
         );
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

         this.addPageTool.fromSettings(this.settings);
         this.editPageTool.fromSettings(this.settings);
      }

      static get addPageProperty() {
         return ABViewPropertyAddPage.propertyComponent(this.App, this.idBase);
      }

      static get editPageProperty() {
         return ABViewPropertyEditPage.propertyComponent(this.App, this.idBase);
      }

      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformConnectComponent(this);
      }

      get addPageTool() {
         if (this.__addPageTool == null)
            this.__addPageTool = new ABViewPropertyAddPage();

         return this.__addPageTool;
      }

      get editPageTool() {
         if (this.__editPageTool == null)
            this.__editPageTool = new ABViewPropertyEditPage();

         return this.__editPageTool;
      }
   };
}


/***/ },

/***/ 92896
/*!******************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformCustom.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformCustom)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformCustomComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformCustomComponent.js */ 76562);
/* harmony import */ var _core_ABViewFormCustomCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormCustomCore.js */ 43747);



function FNAbviewformCustom({
   ABViewComponentPlugin,
   ABViewFormItemComponent,
   ABViewFormItem,
   ABFieldImage,
}) {
   const ABViewFormCustomCore = (0,_core_ABViewFormCustomCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewFormItem);
   const ABAbviewformCustomComponent = (0,_viewComponent_FNAbviewformCustomComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewFormItemComponent,
      ABFieldImage,
   });

   return class ABViewFormCustom extends ABViewFormCustomCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformCustomComponent(this);
      }
   };
}


/***/ },

/***/ 58969
/*!**********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformDatepicker.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformDatepicker)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformDatepickerComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformDatepickerComponent.js */ 33893);
/* harmony import */ var _core_ABViewFormDatepickerCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormDatepickerCore.js */ 94974);



function FNAbviewformDatepicker({
   ABViewComponentPlugin,
   ABViewFormItemComponent,
   ABViewFormItem,
}) {
   const ABViewFormDatepickerCore =
      (0,_core_ABViewFormDatepickerCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewFormItem);
   const ABAbviewformDatepickerComponent = (0,_viewComponent_FNAbviewformDatepickerComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewFormItemComponent,
   });

   return class ABViewFormDatepicker extends ABViewFormDatepickerCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformDatepickerComponent(this);
      }
   };
}


/***/ },

/***/ 88212
/*!****************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformItem.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformItem)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformItemComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformItemComponent.js */ 66282);
/* harmony import */ var _core_ABViewFormItemCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormItemCore.js */ 30527);



function FNAbviewformItem({
   ABViewComponentPlugin,
   ABViewPlugin,
}) {
   const ABViewFormItemCore = (0,_core_ABViewFormItemCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewPlugin);
   const ABAbviewformItemComponent = (0,_viewComponent_FNAbviewformItemComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
   });

   const ABViewFormItem = class ABViewFormItem extends ABViewFormItemCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformItemComponent(this);
      }

      /**
       * @method parentFormUniqueID
       * return a unique ID based upon the closest form object this component is on.
       * @param {string} key  The basic id string we will try to make unique
       * @return {string}
       */
      parentFormUniqueID(key) {
         var form = this.parentFormComponent();
         var uniqueInstanceID;
         if (form) {
            uniqueInstanceID = form.uniqueInstanceID;
         } else {
            uniqueInstanceID = webix.uid();
         }

         return key + uniqueInstanceID;
      }
   };

   ABViewFormItem.ABViewFormItemComponent = ABAbviewformItemComponent;

   return ABViewFormItem;
}


/***/ },

/***/ 80821
/*!****************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformJson.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformJson)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformJsonComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformJsonComponent.js */ 79533);
/* harmony import */ var _core_ABViewFormJsonCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormJsonCore.js */ 63418);



function FNAbviewformJson({
   ABViewComponentPlugin,
   ABViewFormItemComponent,
   ABViewFormItem,
}) {
   const ABViewFormJsonCore = (0,_core_ABViewFormJsonCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewFormItem);
   const ABAbviewformJsonComponent = (0,_viewComponent_FNAbviewformJsonComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewFormItemComponent,
   });

   return class ABViewFormJson extends ABViewFormJsonCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformJsonComponent(this);
      }
   };
}


/***/ },

/***/ 90618
/*!******************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformNumber.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformNumber)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformNumberComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformNumberComponent.js */ 82592);
/* harmony import */ var _core_ABViewFormNumberCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormNumberCore.js */ 99057);



function FNAbviewformNumber({
   ABViewComponentPlugin,
   ABViewFormItemComponent,
   ABViewFormItem,
}) {
   const ABViewFormNumberCore = (0,_core_ABViewFormNumberCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewFormItem);
   const ABAbviewformNumberComponent = (0,_viewComponent_FNAbviewformNumberComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewFormItemComponent,
   });

   return class ABViewFormNumber extends ABViewFormNumberCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformNumberComponent(this);
      }
   };
}


/***/ },

/***/ 99697
/*!********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformReadonly.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformReadonly)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformReadonlyComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformReadonlyComponent.js */ 59273);
/* harmony import */ var _core_ABViewFormReadonlyCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormReadonlyCore.js */ 15374);



function FNAbviewformReadonly({
   ABViewComponentPlugin,
   ABViewFormItemComponent,
   ABViewFormCustom,
   ABFieldImage,
}) {
   const ABViewFormReadonlyCore =
      (0,_core_ABViewFormReadonlyCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewFormCustom);
   const ABAbviewformReadonlyComponent = (0,_viewComponent_FNAbviewformReadonlyComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewFormItemComponent,
      ABFieldImage,
   });

   return class ABViewFormReadonly extends ABViewFormReadonlyCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformReadonlyComponent(this);
      }
   };
}


/***/ },

/***/ 34355
/*!**************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformSelectMultiple.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformSelectMultiple)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformSelectMultipleComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformSelectMultipleComponent.js */ 67375);
/* harmony import */ var _core_ABViewFormSelectMultipleCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormSelectMultipleCore.js */ 92820);



function FNAbviewformSelectMultiple({
   ABViewComponentPlugin,
   ABViewFormItemComponent,
   ABViewFormItem,
}) {
   const ABViewFormSelectMultipleCore =
      (0,_core_ABViewFormSelectMultipleCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewFormItem);

   const ABAbviewformSelectMultipleComponent =
      (0,_viewComponent_FNAbviewformSelectMultipleComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
         ABViewFormItemComponent,
      });

   return class ABViewFormSelectMultiple extends ABViewFormSelectMultipleCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformSelectMultipleComponent(this);
      }
   };
}


/***/ },

/***/ 13435
/*!************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformSelectSingle.js ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformSelectSingle)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformSelectSingleComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformSelectSingleComponent.js */ 63620);
/* harmony import */ var _core_ABViewFormSelectSingleCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormSelectSingleCore.js */ 54188);



function FNAbviewformSelectSingle({
   ABViewComponentPlugin,
   ABViewFormItemComponent,
   ABViewFormItem,
}) {
   const ABViewFormSelectSingleCore =
      (0,_core_ABViewFormSelectSingleCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewFormItem);
   const ABAbviewformSelectSingleComponent = (0,_viewComponent_FNAbviewformSelectSingleComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewFormItemComponent,
   });

   return class ABViewFormSelectSingle extends ABViewFormSelectSingleCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformSelectSingleComponent(this);
      }
   };
}


/***/ },

/***/ 97727
/*!*******************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformTextbox.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformTextbox)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformTextboxComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformTextboxComponent.js */ 90293);
/* harmony import */ var _core_ABViewFormTextboxCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormTextboxCore.js */ 74760);



function FNAbviewformTextbox({
   ABViewComponentPlugin,
   ABViewFormItemComponent,
   ABViewFormItem,
}) {
   const ABViewFormTextboxCore = (0,_core_ABViewFormTextboxCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewFormItem);
   const ABAbviewformTextboxComponent = (0,_viewComponent_FNAbviewformTextboxComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewFormItemComponent,
   });

   return class ABViewFormTextbox extends ABViewFormTextboxCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformTextboxComponent(this);
      }
   };
}


/***/ },

/***/ 39135
/*!****************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformTree.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformTree)
/* harmony export */ });
/* harmony import */ var _viewComponent_FNAbviewformTreeComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewComponent/FNAbviewformTreeComponent.js */ 76083);
/* harmony import */ var _core_ABViewFormTreeCore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ABViewFormTreeCore.js */ 86856);



function FNAbviewformTree({
   ABViewComponentPlugin,
   ABViewFormItemComponent,
   ABViewFormCustom,
}) {
   const ABViewFormTreeCore = (0,_core_ABViewFormTreeCore_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewFormCustom);
   const ABAbviewformTreeComponent = (0,_viewComponent_FNAbviewformTreeComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewFormItemComponent,
   });

   return class ABViewFormTree extends ABViewFormTreeCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformTreeComponent(this);
      }
   };
}


/***/ },

/***/ 61442
/*!***************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FNAbviewformURL.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformURL)
/* harmony export */ });
/* harmony import */ var _core_ABViewFormURLCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/ABViewFormURLCore.js */ 66897);


function FNAbviewformURL({ ABAbviewformComponent, ABViewForm }) {
   const ABViewFormURLCore = (0,_core_ABViewFormURLCore_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ABViewForm);

   return class ABViewFormURL extends ABViewFormURLCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABAbviewformComponent(this);
      }
   };
}


/***/ },

/***/ 75113
/*!**************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/FormComponents.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FNAbviewformButton: () => (/* reexport safe */ _FNAbviewformButton_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   FNAbviewformCheckbox: () => (/* reexport safe */ _FNAbviewformCheckbox_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   FNAbviewformConnect: () => (/* reexport safe */ _FNAbviewformConnect_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   FNAbviewformCustom: () => (/* reexport safe */ _FNAbviewformCustom_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   FNAbviewformDatepicker: () => (/* reexport safe */ _FNAbviewformDatepicker_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   FNAbviewformItem: () => (/* reexport safe */ _FNAbviewformItem_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   FNAbviewformJson: () => (/* reexport safe */ _FNAbviewformJson_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   FNAbviewformNumber: () => (/* reexport safe */ _FNAbviewformNumber_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   FNAbviewformReadonly: () => (/* reexport safe */ _FNAbviewformReadonly_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   FNAbviewformSelectMultiple: () => (/* reexport safe */ _FNAbviewformSelectMultiple_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   FNAbviewformSelectSingle: () => (/* reexport safe */ _FNAbviewformSelectSingle_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   FNAbviewformTextbox: () => (/* reexport safe */ _FNAbviewformTextbox_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   FNAbviewformTree: () => (/* reexport safe */ _FNAbviewformTree_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   FNAbviewformURL: () => (/* reexport safe */ _FNAbviewformURL_js__WEBPACK_IMPORTED_MODULE_13__["default"])
/* harmony export */ });
/* harmony import */ var _FNAbviewformButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewformButton.js */ 19635);
/* harmony import */ var _FNAbviewformCheckbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FNAbviewformCheckbox.js */ 70186);
/* harmony import */ var _FNAbviewformConnect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FNAbviewformConnect.js */ 81921);
/* harmony import */ var _FNAbviewformCustom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FNAbviewformCustom.js */ 92896);
/* harmony import */ var _FNAbviewformDatepicker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FNAbviewformDatepicker.js */ 58969);
/* harmony import */ var _FNAbviewformItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FNAbviewformItem.js */ 88212);
/* harmony import */ var _FNAbviewformJson_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FNAbviewformJson.js */ 80821);
/* harmony import */ var _FNAbviewformNumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FNAbviewformNumber.js */ 90618);
/* harmony import */ var _FNAbviewformReadonly_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FNAbviewformReadonly.js */ 99697);
/* harmony import */ var _FNAbviewformSelectMultiple_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FNAbviewformSelectMultiple.js */ 34355);
/* harmony import */ var _FNAbviewformSelectSingle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FNAbviewformSelectSingle.js */ 13435);
/* harmony import */ var _FNAbviewformTree_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FNAbviewformTree.js */ 39135);
/* harmony import */ var _FNAbviewformTextbox_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FNAbviewformTextbox.js */ 97727);
/* harmony import */ var _FNAbviewformURL_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FNAbviewformURL.js */ 61442);
















/***/ },

/***/ 70492
/*!*************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormButtonCore.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABView) {
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

   const ABViewFormButtonDefaults = {
      key: "button",
      // {string} unique key for this view

      icon: "square",
      // {string} fa-[icon] reference for this view

      labelKey: "ab.components.button",
      // {string} the multilingual label key for the class label
   };

   return class ABViewFormButtonCore extends ABView {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewFormButtonDefaults
         );
      }

      static common() {
         return ABViewFormButtonDefaults;
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

         this.settings.includeSave = JSON.parse(
            (this.settings?.includeSave ?? true) &&
               ABViewFormButtonPropertyComponentDefaults.includeSave
         );
         this.settings.includeCancel = JSON.parse(
            this.settings.includeCancel ||
               ABViewFormButtonPropertyComponentDefaults.includeCancel
         );
         this.settings.includeReset = JSON.parse(
            this.settings.includeReset ||
               ABViewFormButtonPropertyComponentDefaults.includeReset
         );
         this.settings.includeDelete = JSON.parse(
            this.settings.includeDelete ||
               ABViewFormButtonPropertyComponentDefaults.includeDelete
         );

         this.settings.isDefault = JSON.parse(
            this.settings.isDefault ||
               ABViewFormButtonPropertyComponentDefaults.isDefault
         );
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }
   };
}


/***/ },

/***/ 56561
/*!***************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormCheckboxCore.js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewFormItem) {
   const ABViewFormCheckboxPropertyComponentDefaults = {};

   const ABViewFormCheckboxDefaults = {
      key: "checkbox", // {string} unique key for this view
      icon: "check-square-o", // {string} fa-[icon] reference for this view
      labelKey: "ab.components.checkbox", // {string} the multilingual label key for the class label
   };

   return class ABViewFormCheckboxCore extends ABViewFormItem {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewFormCheckboxDefaults
         );
      }

      static common() {
         return ABViewFormCheckboxDefaults;
      }

      static defaultValues() {
         return ABViewFormCheckboxPropertyComponentDefaults;
      }
   };
}


/***/ },

/***/ 92774
/*!**************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormConnectCore.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewFormItem) {
   const ABViewFormConnectPropertyComponentDefaults = {
      formView: "", // id of form to add new data
      filterConditions: {
         // array of filters to apply to the data table
         glue: "and",
         rules: [],
      },
      sortFields: [],
      // objectWorkspace: {
      //    filterConditions: {
      //       // array of filters to apply to the data table
      //       glue: "and",
      //       rules: [],
      //    },
      // },
      popupWidth: 700,
      popupHeight: 450,
   };

   const ABViewFormConnectDefaults = {
      key: "connect", // {string} unique key for this view
      icon: "list-ul", // {string} fa-[icon] reference for this view
      labelKey: "Connect", // {string} the multilingual label key for the class label
   };

   return class ABViewFormConnectCore extends ABViewFormItem {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewFormConnectDefaults
         );
      }

      static common() {
         return ABViewFormConnectDefaults;
      }

      static defaultValues() {
         return ABViewFormConnectPropertyComponentDefaults;
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

         this.settings.filterConditions =
            this.settings.filterConditions ||
            ABViewFormConnectPropertyComponentDefaults.filterConditions;
      }
   };
}


/***/ },

/***/ 76080
/*!*******************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormCore.js ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewContainer,
   ABViewFormItem,
   ABRecordRule,
   ABSubmitRule
) {
   const ABViewFormDefaults = {
      key: "form", // unique key identifier for this ABViewForm
      icon: "list-alt", // icon reference: (without 'fa-' )
      labelKey: "Form", // {string} the multilingual label key for the class label
   };

   const ABViewFormPropertyComponentDefaults = {
      dataviewID: null,
      showLabel: true,
      labelPosition: "left",
      labelWidth: 120,
      height: 200,
      clearOnLoad: false,
      clearOnSave: false,
      displayRules: [],
      editForm: "none", // The url pointer of ABViewForm

      //	[{
      //		action: {string},
      //		when: [
      //			{
      //				fieldId: {UUID},
      //				comparer: {string},
      //				value: {string}
      //			}
      //		],
      //		values: [
      //			{
      //				fieldId: {UUID},
      //				value: {object}
      //			}
      //		]
      //	}]
      recordRules: [],

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

   return class ABViewFormCore extends ABViewContainer {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewFormDefaults
         );
         this.isForm = true;
      }

      superComponent() {
         if (this._superComponent == null) {
            this._superComponent = super.component();
         }
         return this._superComponent;
      }

      static common() {
         return ABViewFormDefaults;
      }

      static defaultValues() {
         return ABViewFormPropertyComponentDefaults;
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

         this.settings.labelPosition =
            this.settings.labelPosition ||
            ABViewFormPropertyComponentDefaults.labelPosition;

         // convert from "0" => true/false
         this.settings.showLabel = JSON.parse(
            this.settings.showLabel != null
               ? this.settings.showLabel
               : ABViewFormPropertyComponentDefaults.showLabel
         );
         this.settings.clearOnLoad = JSON.parse(
            this.settings.clearOnLoad != null
               ? this.settings.clearOnLoad
               : ABViewFormPropertyComponentDefaults.clearOnLoad
         );
         this.settings.clearOnSave = JSON.parse(
            this.settings.clearOnSave != null
               ? this.settings.clearOnSave
               : ABViewFormPropertyComponentDefaults.clearOnSave
         );

         // convert from "0" => 0
         this.settings.labelWidth = parseInt(
            this.settings.labelWidth == null
               ? ABViewFormPropertyComponentDefaults.labelWidth
               : this.settings.labelWidth
         );
         this.settings.height = parseInt(
            this.settings.height == null
               ? ABViewFormPropertyComponentDefaults.height
               : this.settings.height
         );
      }

      // Use this function in kanban
      objectLoad(object) {
         this._currentObject = object;
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         var viewsToAllow = ["label", "layout", "button", "text"],
            allComponents = this.application.viewAll();

         return allComponents.filter((c) => {
            return viewsToAllow.indexOf(c.common().key) > -1;
         });
      }

      /**
       * @method fieldComponents()
       *
       * return an array of all the ABViewFormField children
       *
       * @param {fn} filter  	a filter fn to return a set of ABViewFormField that this fn
       *						returns true for.
       * @return {array} 	array of ABViewFormField
       */
      fieldComponents(filter) {
         const flattenComponents = (views) => {
            let components = [];

            views.forEach((v) => {
               if (v == null) return;

               components.push(v);

               if (v._views?.length) {
                  components = components.concat(flattenComponents(v._views));
               }
            });

            return components;
         };

         if (this._views?.length) {
            const allComponents = flattenComponents(this._views);

            if (filter == null) {
               filter = (comp) => comp.isFormField;
            }

            return allComponents.filter(filter);
         } else {
            return [];
         }
      }

      addFieldToForm(field, yPosition) {
         if (field == null) return;

         var fieldComponent = field.formComponent();
         if (fieldComponent == null) return;

         var newView = fieldComponent.newInstance(this.application, this);
         if (newView == null) return;

         // set settings to component
         newView.settings = newView.settings || {};
         newView.settings.fieldId = field.id;
         // TODO : Default settings

         if (yPosition != null) newView.position.y = yPosition;

         // add a new component
         this._views.push(newView);

         return newView;
      }

      get RecordRule() {
         let object = this.datacollection?.datasource;

         if (this._recordRule == null) {
            this._recordRule = new ABRecordRule();
         }

         this._recordRule.formLoad(this);
         this._recordRule.fromSettings(this.settings.recordRules);
         this._recordRule.objectLoad(object);

         return this._recordRule;
      }

      doRecordRulesPre(rowData) {
         return this.RecordRule.processPre({ data: rowData, form: this });
      }

      doRecordRules(rowData) {
         // validate for record rules
         if (rowData) {
            let object = this.datacollection.datasource;
            let ruleValidator = object.isValidData(rowData);
            let isUpdatedDataValid = ruleValidator.pass();
            if (!isUpdatedDataValid) {
               console.error("Updated data is invalid.", { rowData: rowData });
               return Promise.reject(new Error("Updated data is invalid."));
            }
         }

         return this.RecordRule.process({ data: rowData, form: this });
      }

      doSubmitRules(rowData) {
         var object = this.datacollection.datasource;

         var SubmitRules = new ABSubmitRule();
         SubmitRules.formLoad(this);
         SubmitRules.fromSettings(this.settings.submitRules);
         SubmitRules.objectLoad(object);

         return SubmitRules.process({ data: rowData, form: this });
      }
   };
}


/***/ },

/***/ 43747
/*!*************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormCustomCore.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewFormItem) {
   const ABViewFormCustomPropertyComponentDefaults = {};

   const ABViewFormCustomDefaults = {
      key: "fieldcustom",
      // {string} unique key for this view
      icon: "object-group",
      // {string} fa-[icon] reference for this view
      labelKey: "ab.components.custom",
      // {string} the multilingual label key for the class label
   };

   return class ABViewFormCustom extends ABViewFormItem {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewFormCustomDefaults
         );
      }

      static common() {
         return ABViewFormCustomDefaults;
      }

      static defaultValues() {
         return ABViewFormCustomPropertyComponentDefaults;
      }
   };
}


/***/ },

/***/ 94974
/*!*****************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormDatepickerCore.js ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewFormItem) {
   const ABViewFormDatepickerPropertyComponentDefaults = {
      timepicker: false,
   };

   const ABViewFormDatepickerDefaults = {
      key: "datepicker", // {string} unique key for this view
      icon: "calendar", // {string} fa-[icon] reference for this view
      labelKey: "ab.components.datepicker", // {string} the multilingual label key for the class label
   };

   return class ABViewFormDatepickerCore extends ABViewFormItem {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewFormDatepickerDefaults
         );
      }

      static common() {
         return ABViewFormDatepickerDefaults;
      }

      static defaultValues() {
         return ABViewFormDatepickerPropertyComponentDefaults;
      }
   };
}


/***/ },

/***/ 30527
/*!***********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormItemCore.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABView) {
   const ABViewFormFieldPropertyComponentDefaults = {
      required: 0,
      disable: 0,
   };

   return class ABViewFormItemCore extends ABView {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues);
         this.isFormField = true;
      }

      static defaultValues() {
         return ABViewFormFieldPropertyComponentDefaults;
      }

      /**
       * @property datacollection
       * return data source
       * NOTE: this view doesn't track a DataCollection.
       * @return {ABDataCollection}
       */
      get datacollection() {
         let form = this.parentFormComponent();
         if (form == null) return null;

         let datacollection = form.datacollection;
         if (datacollection == null) return null;

         return datacollection;
      }

      field() {
         if (this.settings.objectId) {
            let object = this.AB.objectByID(this.settings.objectId);
            if (!object) return null;

            return object.fieldByID(this.settings.fieldId);
         } else {
            let form = this.parentFormComponent();
            if (form == null) return null;

            let object;
            if (form._currentObject) {
               object = form._currentObject;
            } else {
               let datacollection = form.datacollection;
               if (datacollection == null) return null;

               object = datacollection.datasource;
            }

            if (object == null) return null;

            let field = object.fieldByID(this.settings.fieldId);
            return field;
         }
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }
   };
}


/***/ },

/***/ 63418
/*!***********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormJsonCore.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewFormItem) {
   const ABViewFormJsonPropertyComponentDefaults = {
      type: "string", // 'string', 'systemObject' or 'filter'
   };

   const ABViewFormJsonDefaults = {
      key: "json", // {string} unique key for this view
      icon: "brackets-curly", // {string} fa-[icon] reference for this view
      labelKey: "ab.components.json", // {string} the multilingual label key for the class label
   };

   return class ABViewFormJsonCore extends ABViewFormItem {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewFormJsonDefaults
         );
      }

      static common() {
         return ABViewFormJsonDefaults;
      }

      static defaultValues() {
         return ABViewFormJsonPropertyComponentDefaults;
      }
   };
}


/***/ },

/***/ 99057
/*!*************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormNumberCore.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewFormItem) {
   const ABViewFormNumberPropertyComponentDefaults = {
      isStepper: 0,
   };

   const ABViewFormNumberDefaults = {
      key: "numberbox", // {string} unique key for this view
      icon: "hashtag", // {string} fa-[icon] reference for this view
      labelKey: "ab.components.number", // {string} the multilingual label key for the class label
   };

   return class ABViewFormNumberCore extends ABViewFormItem {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewFormNumberDefaults
         );
      }

      static common() {
         return ABViewFormNumberDefaults;
      }

      static defaultValues() {
         return ABViewFormNumberPropertyComponentDefaults;
      }

      ///
      /// Instance Methods
      ///

      /**
       * @method toObj()
       *
       * properly compile the current state of this ABViewFormText instance
       * into the values needed for saving.
       *
       * @return {json}
       */
      toObj() {
         this.unTranslate(this, this, ["label", "formLabel"]);

         var obj = super.toObj();
         obj.views = []; // no subviews
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

         // if this is being instantiated on a read from the Property UI,
         this.settings.isStepper =
            this.settings.isStepper ||
            ABViewFormNumberPropertyComponentDefaults.isStepper;

         // convert from "0" => 0
         this.settings.isStepper = parseInt(this.settings.isStepper);
      }
   };
}


/***/ },

/***/ 15374
/*!***************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormReadonlyCore.js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewFormCustom) {
   const ABViewFormReadonlyPropertyComponentDefaults = {};

   const ABViewFormReadonlyDefaults = {
      key: "fieldreadonly", // {string} unique key for this view
      icon: "eye", // {string} fa-[icon] reference for this view
      labelKey: "ab.components.readonly", // {string} the multilingual label key for the class label
   };

   return class ABViewFormReadonly extends ABViewFormCustom {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewFormReadonlyDefaults
         );
      }

      static common() {
         return ABViewFormReadonlyDefaults;
      }

      static defaultValues() {
         return ABViewFormReadonlyPropertyComponentDefaults;
      }
   };
}


/***/ },

/***/ 92820
/*!*********************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormSelectMultipleCore.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewFormItem) {
   const ABViewFormSelectMultiplePropertyComponentDefaults = {
      type: "multicombo", // 'richselect' or 'radio'
   };

   const ABSelectMultipleDefaults = {
      key: "selectmultiple", // {string} unique key for this view
      icon: "list-ul", // {string} fa-[icon] reference for this view
      labelKey: "ab.components.selectmultiple", // {string} the multilingual label key for the class label
   };

   return class ABViewFormSelectMultipleCore extends ABViewFormItem {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABSelectMultipleDefaults
         );
      }

      static common() {
         return ABSelectMultipleDefaults;
      }

      static defaultValues() {
         return ABViewFormSelectMultiplePropertyComponentDefaults;
      }
   };
}


/***/ },

/***/ 54188
/*!*******************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormSelectSingleCore.js ***!
  \*******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewFormItem) {
   const ABViewFormSelectSinglePropertyComponentDefaults = {
      type: "richselect", // 'richselect' or 'radio'
   };

   const ABSelectSingleDefaults = {
      key: "selectsingle", // {string} unique key for this view
      icon: "list-ul", // {string} fa-[icon] reference for this view
      labelKey: "ab.components.selectsingle", // {string} the multilingual label key for the class label
   };

   return class ABViewFormSelectSingleCore extends ABViewFormItem {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABSelectSingleDefaults
         );
      }

      static common() {
         return ABSelectSingleDefaults;
      }

      static defaultValues() {
         return ABViewFormSelectSinglePropertyComponentDefaults;
      }
   };
}


/***/ },

/***/ 74760
/*!**************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormTextboxCore.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewFormItem) {
   const ABViewFormTextboxPropertyComponentDefaults = {
      type: "single", // 'single', 'multiple' or 'rich'
   };

   const ABViewFormTextboxDefaults = {
      key: "textbox", // {string} unique key for this view
      icon: "i-cursor", // {string} fa-[icon] reference for this view
      labelKey: "ab.components.textbox", // {string} the multilingual label key for the class label
   };

   return class ABViewFormTextboxCore extends ABViewFormItem {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewFormTextboxDefaults
         );
      }

      static common() {
         return ABViewFormTextboxDefaults;
      }

      static defaultValues() {
         return ABViewFormTextboxPropertyComponentDefaults;
      }
   };
}


/***/ },

/***/ 86856
/*!***********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormTreeCore.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewFormCustom) {
   const ABViewFormTreePropertyComponentDefaults = {};

   const ABTreeDefaults = {
      key: "formtree", // {string} unique key for this view
      icon: "sitemap", // {string} fa-[icon] reference for this view
      labelKey: "ab.components.tree", // {string} the multilingual label key for the class label
   };

   return class ABViewFormTreeCore extends ABViewFormCustom {
      constructor(values, application, parent, defaultValues) {
         super(values, application, parent, defaultValues || ABTreeDefaults);
      }

      static common() {
         return ABTreeDefaults;
      }

      static defaultValues() {
         return ABViewFormTreePropertyComponentDefaults;
      }
   };
}


/***/ },

/***/ 66897
/*!**********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/core/ABViewFormURLCore.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewForm) {
   const ABViewFormURLDefaults = {
      key: "form-url", // unique key identifier for this ABViewForm
      icon: "list-alt", // icon reference: (without 'fa-' )
      labelKey: "FormUrl", // {string} the multilingual label key for the class label
   };

   return class ABViewFormURLCore extends ABViewForm {
      static common() {
         return ABViewFormURLDefaults;
      }

      async submitValues(formVals) {
         let url = this.settings.url;
         let method = this.settings.method || "get";
         method = method.toLowerCase();
         if (!["get", "post", "put", "delete"].includes(method)) {
            throw new Error(
               `Invalid method "${method}" specified for ABViewFormURL`
            );
         }

         // remove empty id from formVals
         if (formVals.id === "") {
            delete formVals.id;
         }

         let params = {
            data: formVals,
            url,
         };

         if (this.settings.headers) {
            params.headers = this.settings.headers;
         }

         return await this.AB.Network[method](params);
      }
   };
}


/***/ },

/***/ 82599
/*!*****************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformButtonComponent.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformButtonComponent)
/* harmony export */ });
function FNAbviewformButtonComponent({
   ABViewFormItemComponent,
}) {
   return class ABViewFormButton extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewFormButton_${baseView.id}`, ids);
      }

      ui() {
         const self = this;
         const baseView = this.view;
         const form = baseView.parentFormComponent();
         const settings = baseView.settings ?? {};

         const alignment =
            settings.alignment ||
            baseView.constructor.defaultValues().alignment;

         const _ui = {
            cols: [],
         };

         // spacer
         if (alignment === "center" || alignment === "right") {
            _ui.cols.push({});
         }

         // delete button
         if (settings.includeDelete) {
            _ui.cols.push(
               {
                  view: "button",
                  autowidth: true,
                  value: settings.deleteLabel || this.label("Delete"),
                  css: "webix_danger",
                  click: function () {
                     self.onDelete(this);
                  },
                  on: {
                     onAfterRender: function () {
                        this.getInputNode().setAttribute(
                           "data-cy",
                           `button delete ${form.id}`
                        );
                     },
                  },
               },
               {
                  width: 10,
               }
            );
         }

         // cancel button
         if (settings.includeCancel) {
            _ui.cols.push(
               {
                  view: "button",
                  autowidth: true,
                  value: settings.cancelLabel || this.label("Cancel"),
                  click: function () {
                     self.onCancel(this);
                  },
                  on: {
                     onAfterRender: function () {
                        this.getInputNode().setAttribute(
                           "data-cy",
                           `button cancel ${form.id}`
                        );
                     },
                  },
               },
               {
                  width: 10,
               }
            );
         }

         // reset button
         if (settings.includeReset) {
            _ui.cols.push(
               {
                  view: "button",
                  autowidth: true,
                  value: settings.resetLabel || this.label("Reset"),
                  click: function () {
                     self.onClear(this);
                  },
                  on: {
                     onAfterRender: function () {
                        this.getInputNode().setAttribute(
                           "data-cy",
                           `button reset ${form.id}`
                        );
                     },
                  },
               },
               {
                  width: 10,
               }
            );
         }

         // save button
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

         // spacer
         if (alignment === "center" || alignment === "left") _ui.cols.push({});

         return super.ui(_ui);
      }

      onCancel(cancelButton) {
         const baseView = this.view;
         const settings = baseView.settings ?? {};

         // get form component
         const form = baseView.parentFormComponent();

         // get ABDatacollection
         const dc = form.datacollection;

         // clear cursor of DC if not set to follow another
         if (!dc?.isCursorFollow) {
            dc?.setCursor(null);
         }
         // dc?.setStaticCursor(); // unless it should be static

         cancelButton?.getFormView?.().clear();

         if (settings.afterCancel) form.changePage(settings.afterCancel);
         // If the redirect page is not defined, then redirect to parent page
         else {
            const noPopupFilter = (p) =>
               p.settings && p.settings.type != "popup";

            const pageCurr = this.view.pageParent();
            if (pageCurr) {
               const pageParent =
                  pageCurr.pageParent(noPopupFilter) ?? pageCurr;

               if (pageParent) form.changePage(pageParent.id);
            }
         }
      }

      onClear(resetButton) {
         // get form component
         const form = this.view.parentFormComponent();

         // get ABDatacollection
         const dc = form.datacollection;

         // clear cursor of DC
         if (dc) {
            dc.setCursor(null);
         }

         resetButton?.getFormView?.().clear();
      }

      onSave(saveButton) {
         if (!saveButton) {
            console.error("Require the button element");
            return;
         }
         // get form component
         const form = this.view.parentFormComponent();
         const formView = saveButton.getFormView();

         // disable the save button
         saveButton.disable?.();

         // save data
         form
            .saveData(formView)
            .then(() => {
               saveButton.enable?.();

               //Focus on first focusable component
               form.focusOnFirst();
            })
            .catch((err) => {
               console.error(err);
               // Catch uncaught error reported in Sentry and add context
               // APPBUILDER-WEB-1A3(https://appdev-designs.sentry.io/issues/4631880265/)
               try {
                  saveButton.enable?.();
               } catch (e) {
                  this.AB.notify.developer(e, {
                     context:
                        "formButton.onSave > catch err > saveButton.enable()",
                     buttonID: this?.view?.id,
                     formID: this?.view?.parent?.id,
                  });
               }
            });
      }

      onDelete(deleteButton) {
         this.AB.Webix.confirm({
            title: this.label("Delete data"),
            text: this.label("Do you want to delete this data?"),
            callback: async (confirm) => {
               if (!confirm) return;

               deleteButton.disable?.();

               try {
                  // get form component
                  const form = this.view.parentFormComponent();
                  const $formView = deleteButton.getFormView();

                  // delete a record row
                  await form.deleteData($formView);
               } catch (err) {
                  console.error(err);
               } finally {
                  deleteButton.enable?.();
               }
            },
         });
      }
   };
}


/***/ },

/***/ 45112
/*!*******************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformCheckboxComponent.js ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformCheckboxComponent)
/* harmony export */ });
function FNAbviewformCheckboxComponent({
   ABViewFormItemComponent,
}) {
   return class ABViewFormCheckboxComponent extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewFormCheckbox_${baseView.id}`, ids);
      }

      ui() {
         return super.ui({
            view: "checkbox",
         });
      }
   };
}


/***/ },

/***/ 16911
/*!******************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformConnectComponent.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformConnectComponent)
/* harmony export */ });
function FNAbviewformConnectComponent({
   ABViewFormItemComponent,
}) {
   return class ABViewFormConnectComponent extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewFormConnect_${baseView.id}`,
            Object.assign(
               {
                  popup: "",
                  editpopup: "",
               },
               ids
            )
         );

         this.addPageComponent = null;
         this.editPageComponent = null;
      }

      get field() {
         return this.view.field();
      }

      get multiselect() {
         return this.field?.settings.linkType == "many";
      }

      ui() {
         const field = this.field;
         const baseView = this.view;
         const form = baseView.parentFormComponent();
         const settings = this.settings;

         if (!field) {
            console.error(`This field could not found : ${settings.fieldId}`);

            return super.ui({
               view: "label",
               label: "",
            });
         }

         const multiselect = this.multiselect; // field.settings.linkType == "many";
         const formSettings = form?.settings || {};
         const ids = this.ids;

         let _ui = {
            id: ids.formItem,
            view: multiselect ? "multicombo" : "combo",
            name: field.columnName,
            required:
               field?.settings?.required ||
               parseInt(settings?.required) ||
               false,
            // label: field.label,
            // labelWidth: settings.labelWidth,
            dataFieldId: field.id,
            on: {
               onItemClick: (id, e) => {
                  if (
                     e.target.classList.contains("editConnectedPage") &&
                     e.target.dataset.itemId
                  ) {
                     const rowId = e.target.dataset.itemId;
                     if (!rowId) return;
                     this.goToEditPage(rowId);
                  }
               },
               onChange: (data) => {
                  this._onChange(data);
               },
            },
         };

         if (formSettings.showLabel) {
            _ui.label = field.label;
            _ui.labelWidth = formSettings.labelWidth;
            _ui.labelPosition = formSettings.labelPosition;
         }

         this.initAddEditTool();

         _ui.suggest = {
            button: true,
            selectAll: multiselect ? true : false,
            body: {
               data: [],
               template: `${
                  baseView?.settings?.editForm
                     ? '<i data-item-id="#id#" class="fa fa-cog editConnectedPage"></i>'
                     : ""
               }#value#`,
            },
            on: {
               onShow: () => {
                  field.populateOptionsDataCy($$(ids.formItem), field, form);
               },
            },
            // Support partial matches
            filter: ({ value }, search) =>
               value.toLowerCase().includes(search.toLowerCase()),
         };

         _ui.onClick = {
            customField: (id, e, trg) => {
               if (settings.disable === 1) return;

               const rowData = {};
               const $formItem = $$(ids.formItem);

               if ($formItem) {
                  const node = $formItem.$view;

                  field.customEdit(rowData, /* App,*/ node);
               }
            },
         };

         let apcUI = this.addPageComponent?.ui;
         if (apcUI) {
            // reset some component vals to make room for button
            _ui.label = "";
            _ui.labelWidth = 0;

            // add click event to add new button
            apcUI.on = {
               onItemClick: (/*id, evt*/) => {
                  // let $form = $$(id).getFormView();
                  this.addPageComponent?.onClick(form.datacollection);

                  return false;
               },
            };

            if (_ui.labelPosition == "top") {
               _ui.labelPosition = "left";
               _ui = {
                  inputId: ids.formItem,
                  rows: [
                     {
                        view: "label",
                        label: field.label,
                        // height: 22,
                        align: "left",
                     },
                     {
                        cols: [apcUI, _ui],
                     },
                  ],
               };
            } else {
               _ui = {
                  inputId: ids.formItem,
                  rows: [
                     {
                        cols: [
                           {
                              view: "label",
                              label: field.label,
                              width: formSettings.labelWidth,
                              align: "left",
                           },
                           apcUI,
                           _ui,
                        ],
                     },
                  ],
               };
            }

            _ui = super.ui(_ui);
         } else {
            _ui = {
               inputId: ids.formItem,
               rows: [_ui],
            };

            _ui = super.ui(_ui);

            delete _ui.rows[0].id;
         }

         return _ui;
      }

      async _onChange(data) {
         const ids = this.ids;
         const field = this.field;
         const baseView = this.view;

         if (this.multiselect) {
            if (typeof data == "string") {
               data = data.split(",");
            }
         }

         let selectedValues;
         if (Array.isArray(data)) {
            selectedValues = [];
            data.forEach((record) => {
               selectedValues.push(record.id || record);
            });
         } else {
            selectedValues = data;
            if (typeof data != "object") {
               // we need to convert either index or uuid to full data object
               selectedValues = field.getItemFromVal(data);
            }
            if (selectedValues?.id) {
               selectedValues = selectedValues.id;
            } else {
               selectedValues = data;
            }
         }

         // We can now set the new value but we need to block event listening
         // so it doesn't trigger onChange again
         const $formItem = $$(ids.formItem);

         // Q: if we don't have a $formItem, is any of the rest valid?
         if ($formItem) {
            // for xxx->one connections we need to populate again before setting
            // values because we need to use the selected values to add options
            // to the UI
            if (this?.field?.settings?.linkViaType == "one") {
               this.busy();
               await field.getAndPopulateOptions(
                  $formItem,
                  baseView.options,
                  field,
                  baseView.parentFormComponent()
               );
               this.ready();
            }

            $formItem.blockEvent();

            // store the user's selected option in local storage.
            field.saveSelect(selectedValues);

            const prepedVals = selectedValues.join
               ? selectedValues.join()
               : selectedValues;

            $formItem.setValue(prepedVals);
            $formItem.unblockEvent();
         }
      }

      async init(AB, options) {
         await super.init(AB);

         const $formItem = $$(this.ids.formItem);
         if ($formItem) webix.extend($formItem, webix.ProgressBar);

         this.initAddEditTool();
      }

      initAddEditTool() {
         const baseView = this.view;

         // Initial add/edit page tools
         const addFormID = baseView?.settings?.formView;
         if (addFormID && baseView && !this.addPageComponent) {
            this.addPageComponent = baseView.addPageTool.component(
               this.AB,
               `${baseView.id}_${addFormID}`
            );
            this.addPageComponent.applicationLoad(baseView.application);
            this.addPageComponent.init({
               onSaveData: this.callbackSaveData.bind(this),
               onCancelClick: this.callbackCancel.bind(this),
               clearOnLoad: this.callbackClearOnLoad.bind(this),
            });
         }

         const editFormID = baseView?.settings?.editForm;
         if (editFormID && baseView && !this.editPageComponent) {
            this.editPageComponent = baseView.editPageTool.component(
               this.AB,
               `${baseView.id}_${editFormID}`
            );
            this.editPageComponent.applicationLoad(baseView.application);
            this.editPageComponent.init({
               onSaveData: this.callbackSaveData.bind(this),
               onCancelClick: this.callbackCancel.bind(this),
               clearOnLoad: this.callbackClearOnLoad.bind(this),
            });
         }
      }

      async callbackSaveData(saveData) {
         if (saveData == null) return;
         else if (!Array.isArray(saveData)) saveData = [saveData];

         const ids = this.ids;
         const field = this.field;

         // find the select component
         const $formItem = $$(ids.formItem);
         if (!$formItem) return;

         // Refresh option list
         this.busy();
         field.clearStorage(this.view.settings.filterConditions);
         const data = await field.getAndPopulateOptions(
            $formItem,
            this.view.options,
            field,
            this.view.parentFormComponent()
         );
         this.ready();

         data.forEach((item) => {
            item.value = item.text;
         });

         $formItem.getList().clearAll();
         $formItem.getList().define("data", data);

         if (field.settings.linkType === "many") {
            let selectedItems = $formItem.getValue();
            saveData.forEach((sData) => {
               if (selectedItems.indexOf(sData.id) === -1)
                  selectedItems = selectedItems
                     ? `${selectedItems},${sData.id}`
                     : sData.id;
            });

            $formItem.setValue(selectedItems);
         } else {
            $formItem.setValue(saveData[0].id);
         }
      }

      callbackCancel() {
         $$(this.ids?.popup)?.close?.();

         return false;
      }

      callbackClearOnLoad() {
         return true;
      }

      getValue(rowData) {
         return this.field.getValue($$(this.ids.formItem), rowData);
      }

      busy() {
         const $formItem = $$(this.ids.formItem);

         $formItem?.disable();
         $formItem?.showProgress?.({ type: "icon" });
      }

      ready() {
         const $formItem = $$(this.ids.formItem);

         $formItem?.enable();
         $formItem?.hideProgress?.();
      }

      goToEditPage(rowId) {
         const settings = this.settings;

         if (!settings.editForm) return;

         const editForm = this.view.application.urlResolve(settings.editForm);

         if (!editForm) return;

         // Open the form popup
         this.editPageComponent.onClick().then(() => {
            const dc = editForm.datacollection;

            if (dc) {
               dc.setCursor(rowId);

               this.__editFormDcEvent =
                  this.__editFormDcEvent ||
                  dc.on("initializedData", () => {
                     dc.setCursor(rowId);
                  });
            }
         });
      }

      async onShow() {
         const ids = this.ids;
         const $formItem = $$(ids.formItem);

         if (!$formItem) return;

         const field = this.field;

         if (!field) return;

         const node = $formItem.$view;

         if (!node) return;

         const $node = $$(node);

         if (!$node) return;

         const settings = this.settings;
         let filterConditions = {
            glue: "and",
            rules: [],
         };

         if (settings?.filterConditions?.rules?.length) {
            filterConditions = this.AB.cloneDeep(
               this.view.settings.filterConditions
            );
         }

         // NOTE: compatible with version 1. This code should not be here too long.
         if (
            !filterConditions?.rules?.length &&
            settings?.objectWorkspace?.filterConditions?.rules?.length
         ) {
            filterConditions = this.AB.cloneDeep(
               settings.objectWorkspace.filterConditions
            );
         }

         // Add the filter connected value
         if ((settings?.filterConnectedValue ?? "").indexOf(":") > -1) {
            const values = settings.filterConnectedValue.split(":"),
               uiConfigName = values[0],
               connectFieldId = values[1];

            filterConditions.rules.push({
               key: connectFieldId,
               rule: "filterByConnectValue",
               value: uiConfigName,
            });
         }

         const getFilterByConnectValues = (conditions, depth = 0) => {
            return [
               ...conditions.rules
                  .filter((e) => e.rule === "filterByConnectValue")
                  .map((e) => {
                     const filterByConnectValue = Object.assign({}, e);

                     filterByConnectValue.depth = depth;

                     return filterByConnectValue;
                  }),
            ].concat(
               ...conditions.rules
                  .filter((e) => e.glue)
                  .map((e) => getFilterByConnectValues(e, depth + 1))
            );
         };

         const baseView = this.view;
         const filterByConnectValues = getFilterByConnectValues(
            filterConditions
         ).map((e) => {
            for (const key in baseView.parent.viewComponents) {
               if (
                  !(
                     baseView.parent.viewComponents[key] instanceof
                     this.constructor
                  )
               )
                  continue;

               const $ui = $$(
                  baseView.parent.viewComponents[key]
                     .ui()
                     .rows.find((vc) => vc.inputId)?.inputId
               );

               if ($ui?.config?.name === e.value) {
                  // we need to use the element id stored in the settings to find out what the
                  // ui component id is so later we can use it to look up its current value
                  e.filterValue = $ui;

                  break;
               }
            }

            const ab = this.AB;
            const field = ab
               .objectByID(settings.objectId)
               .fieldByID(settings.fieldId);
            const linkedObject = ab.objectByID(field.settings.linkObject);
            const linkedField = linkedObject.fieldByID(e.key);

            if (linkedField?.settings?.isCustomFK) {
               // finally if this is a custom foreign key we need the stored columnName by
               // default uuid is passed for all non CFK
               e.filterColumn = ab
                  .objectByID(linkedField.settings.linkObject)
                  .fields(
                     (filter) =>
                        filter.id === linkedField.settings.indexField ||
                        linkedField.settings.indexField2
                  )[0].columnName;
            } else e.filterColumn = null;

            return e;
         });

         baseView.options = {
            formView: settings.formView,
            filters: filterConditions,
            // NOTE: settings.objectWorkspace.xxx is a depreciated setting.
            // We will be phasing this out.
            sort: settings.sortFields ?? settings.objectWorkspace?.sortFields,
            editable: settings.disable === 1 ? false : true,
            editPage:
               !settings.editForm || settings.editForm === "none"
                  ? false
                  : true,
            filterByConnectValues,
         };

         // if this field's options are filtered off another field's value we need
         // to make sure the UX helps the user know what to do.
         // fetch the options and set placeholder text for this view
         if (baseView.options.editable) {
            const parentFields = [];

            filterByConnectValues.forEach((fv) => {
               if (fv.filterValue && fv.key) {
                  const $filterValueConfig = $$(fv.filterValue.config.id);

                  let parentField = null;

                  if (!$filterValueConfig) {
                     // this happens in the Interface Builder when only the single form UI is displayed
                     parentField = {
                        id: "perentElement",
                        label: this.label("PARENT ELEMENT"),
                     };
                  } else {
                     const value = field.getValue($filterValueConfig);

                     if (!value) {
                        // if there isn't a value on the parent select element set this one to readonly and change placeholder text
                        parentField = {
                           id: fv.filterValue.config.id,
                           label: $filterValueConfig.config.label,
                        };
                     }

                     $filterValueConfig.attachEvent(
                        "onChange",
                        async (e) => {
                           const parentVal = $filterValueConfig.getValue();

                           if (parentVal) {
                              $node.define("disabled", false);
                              $node.define(
                                 "placeholder",
                                 this.label("Select items")
                              );
                              this.busy();
                              await field.getAndPopulateOptions(
                                 $node,
                                 baseView.options,
                                 field,
                                 baseView.parentFormComponent()
                              );
                              this.ready();
                           } else {
                              $node.define("disabled", true);
                              $node.define(
                                 "placeholder",
                                 this.label(
                                    "Must select item from '{0}' first.",
                                    [$filterValueConfig.config.label]
                                 )
                              );
                           }

                           $node.refresh();
                        },
                        false
                     );
                  }

                  if (
                     parentField &&
                     parentFields.findIndex((e) => e.id === parentField.id) < 0
                  )
                     parentFields.push(parentField);
               }
            });

            if (parentFields.length && !$node.getValue()) {
               $node.define("disabled", true);
               $node.define(
                  "placeholder",
                  this.label(`Must select item from '{0}' first.`, [
                     parentFields.map((e) => e.label).join(", "),
                  ])
               );
            } else {
               $node.define("disabled", false);
               $node.define("placeholder", this.label("Select items"));
            }
         } else {
            $node.define("placeholder", "");
            $node.define("disabled", true);
         }

         $node.refresh();

         // Add data-cy attributes
         const dataCy = `${field.key} ${field.columnName} ${field.id} ${baseView.parent.id}`;
         node.setAttribute("data-cy", dataCy);

         this.busy();
         try {
            await field.getAndPopulateOptions(
               $formItem,
               baseView.options,
               field,
               baseView.parentFormComponent()
            );
         } catch (err) {
            this.AB.notify.developer(err, {
               context:
                  "ABViewFormConnectComponent > onShow() error calling field.getAndPopulateOptions",
            });
         }
         this.ready();

         // Need to refresh selected values when they are custom index
         this._onChange($formItem.getValue());
      }
   };
}


/***/ },

/***/ 76562
/*!*****************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformCustomComponent.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformCustomComponent)
/* harmony export */ });
function FNAbviewformCustomComponent({
   ABViewFormItemComponent,
   ABFieldImage,
}) {
   const DEFAULT_HEIGHT = 80;

   return class ABViewFormCustomComponent extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewFormCustom_${baseView.id}`, ids);
      }

      get new_width() {
         const baseView = this.view;
         const form = baseView.parentFormComponent();
         const formSettings = form?.settings ?? {};
         const settings = baseView.settings ?? {};

         let newWidth = formSettings.labelWidth;

         if (settings.formView) newWidth += 40;
         else if (
            formSettings.showLabel &&
            formSettings.labelPosition === "top"
         )
            newWidth = 0;

         return newWidth;
      }

      ui() {
         const baseView = this.view;
         const field = baseView.field();
         const form = baseView.parentFormComponent();
         const formSettings = form?.settings ?? {};
         const settings = field?.settings ?? baseView.settings ?? {};

         const requiredClass =
            field?.settings?.required || this.settings.required
               ? "webix_required"
               : "";

         let templateLabel = "";

         if (formSettings.showLabel) {
            if (formSettings.labelPosition === "top")
               templateLabel = `<label style="box-sizing: border-box; display:block; text-align: left; margin: 0; padding:1px 7.5px 0 3px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; color: #313131;" class="webix_inp_top_label ${requiredClass}">#label#</label>`;
            else
               templateLabel = `<label style="box-sizing: border-box; width: #width#px; display: inline-block; line-height: 32px; float: left; margin: 0; padding:1px 8px 0 0; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; color: #313131;" class="${requiredClass}">#label#</label>`;
         }

         let height = 38;
         let width = this.new_width;

         if (typeof field == "undefined") {
            console.warn(
               `BaseView[${baseView.id}] returned an undefined field()`,
               baseView.toObj()
            );
         }

         if (field.key === "image" || field.key === "file") {
            if (settings.useHeight) {
               if (formSettings.labelPosition === "top") {
                  height = parseInt(settings.imageHeight) || DEFAULT_HEIGHT;
                  height += 38;
               } else {
                  height = parseInt(settings.imageHeight) || DEFAULT_HEIGHT;
               }
            } else if (formSettings.labelPosition === "top") {
               height = DEFAULT_HEIGHT + 38;
            } else {
               if (DEFAULT_HEIGHT > 38) {
                  height = DEFAULT_HEIGHT;
               }
            }
            width =
               settings.useWidth && settings.imageWidth
                  ? settings.imageWidth
                  : 0;
         } else if (
            formSettings.showLabel &&
            formSettings.labelPosition === "top"
         )
            height = DEFAULT_HEIGHT;

         let template = `<div class="customField ${
            formSettings.labelPosition
         }">${
            formSettings.labelPosition == "top" ? "" : templateLabel
         }#template#</div>`
            .replace(/#width#/g, formSettings.labelWidth)
            .replace(/#label#/g, field?.label ?? "")
            .replace(
               /#template#/g,
               field
                  ?.columnHeader({
                     width: width,
                     height: height,
                     editable: true,
                  })
                  .template({}) ?? ""
            );

         if (settings.useWidth == 0) {
            template = template.replace(
               /"ab-image-data-field" style="float: left; width: 100%/g,
               '"ab-image-data-field" style="float: left; width: calc(100% - ' +
                  formSettings.labelWidth +
                  "px)"
            );
         }

         return super.ui({
            view: "forminput",
            labelWidth: 0,
            paddingY: 0,
            paddingX: 0,
            css: "ab-custom-field",
            body: {
               view: "focusabletemplate",
               css: "customFieldCls",
               borderless: true,
               template: template,
               height: height,
               onClick: {
                  customField: (evt, e, trg) => {
                     if (settings.disable === 1) return;

                     let rowData = {};

                     const formView =
                        this?.parentFormComponent?.() ||
                        this.view?.parentFormComponent?.();

                     if (formView) {
                        const dv = formView.datacollection;
                        if (dv) rowData = dv.getCursor() || {};
                     }

                     let node = $$(trg).getParentView().$view;
                     field?.customEdit(rowData, node, this.ids.formItem, evt);
                  },
               },
            },
         });
      }

      onShow() {
         const ids = this.ids;
         const $formItem = $$(ids.formItem);

         if (!$formItem) return;

         const baseView = this.view;
         const field = baseView.field(),
            rowData = {},
            node = $formItem.$view;

         // Add data-cy attributes
         const dataCy = `${baseView.key} ${field?.key ?? ""} ${
            field?.columnName ?? ""
         } ${baseView.id} ${baseView.parent?.id ?? ""}`;
         node.setAttribute("data-cy", dataCy);

         const options = {
            formId: ids.formItem,
            editable: baseView.settings.disable === 1 ? false : true,
         };

         if (field.key === "image" || field.key === "file") {
            options.height = field.settings.useHeight
               ? parseInt(field.settings.imageHeight) || DEFAULT_HEIGHT
               : DEFAULT_HEIGHT;
            options.width = field.settings.useWidth
               ? parseInt(field.settings.imageWidth) || 0
               : 0;
         }

         field?.customDisplay(rowData, this.AB._App, node, options);
      }

      getValue(rowData) {
         const field = this.view.field();
         const $formItem = $$(this.ids.formItem);

         return field.getValue($formItem, rowData);
      }
   };
}


/***/ },

/***/ 33893
/*!*********************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformDatepickerComponent.js ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformDatepickerComponent)
/* harmony export */ });
function FNAbviewformDatepickerComponent({
   ABViewFormItemComponent,
}) {
   return class ABViewFormDatepickerComponent extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewFormDatepicker_${baseView.id}`, ids);
      }

      ui() {
         const self = this;
         const field = this.view.field();

         const _ui = {
            view: "datepicker",
            suggest: {
               body: {
                  view:
                     this.AB.Account?._config?.languageCode == "th"
                        ? "thaicalendar"
                        : "calendar",
                  type: field.settings?.dateFormat === 1 ? "time" : "",
                  timepicker:
                     field.key === "datetime" &&
                     field.settings?.timeFormat !== 1
                        ? true
                        : false,
                  editable: true,
                  on: {
                     onAfterDateSelect: function (date) {
                        this.getParentView().setMasterValue({
                           value: date,
                        });
                     },
                     onTodaySet: function (date) {
                        this.getParentView().setMasterValue({
                           value: date,
                        });
                     },
                     onDateClear: function (date) {
                        this.getParentView().setMasterValue({
                           value: date,
                        });
                     },
                  },
               },
               on: {
                  onShow: function () {
                     const text = this.getMasterValue();
                     const field = self.view.field();
                     if (!text || !field) return true;

                     const vals = {};
                     vals[field.columnName] = text;
                     const date = self.getValue(vals);

                     const $calendar = this.getChildViews()[0];
                     $calendar.setValue(date);
                  },
               },
            },
         };

         if (!field) return _ui;

         // Ignore date - Only time picker
         if (field.settings?.dateFormat === 1) _ui.type = "time";

         // Date & Time picker
         if (field.key === "datetime" && field.settings?.timeFormat !== 1)
            _ui.timepicker = true;

         // allows entering characters in datepicker input, false by default
         _ui.editable = true;

         // default value
         if (_ui.value && !(_ui.value instanceof Date))
            _ui.value = new Date(_ui.value);

         // if we have webix locale set, will use the date format form there.
         if (!window.webixLocale) _ui.format = field.getFormat();

         return super.ui(_ui);
      }

      getValue(rowData) {
         const field = this.view.field();
         const text = rowData[field.columnName];
         if (!field || !text) return null;

         if (!this.AB) {
            if (this.view.AB) {
               this.AB = this.view.AB;
            } else {
               let errNoAB = new Error(
                  "ABViewFormDatePicerComponent:getValue(): AB was not set."
               );
               console.log("view:", JSON.stringify(this.view.toObj()));
               throw errNoAB;
            }
         }
         let dateVal = this.AB.Webix.Date.strToDate(field.getFormat())(text);
         if (this.AB.Account?._config?.languageCode == "th") {
            dateVal = this.AB.Webix.Date.strToDate("%j/%m/%Y")(text);
         }
         const date = dateVal;

         if (
            this.AB.Account?._config?.languageCode == "th" &&
            field.settings?.dateFormat !== 1
         )
            date.setFullYear(date.getFullYear() - 543);

         return date;
      }
   };
}


/***/ },

/***/ 66282
/*!***************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformItemComponent.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformItemComponent)
/* harmony export */ });
function FNAbviewformItemComponent({ ABViewComponentPlugin }) {
   return class ABViewFormItemComponent extends ABViewComponentPlugin {
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

            if (data[field.columnName])
               _uiFormItem.value = data[field.columnName];

            if (settings.showLabel) _uiFormItem.label = field.label;

            if (field.settings.required || baseView.settings?.required)
               _uiFormItem.required = 1;

            if (baseView.settings?.disable === 1) _uiFormItem.disabled = true;

            // add data-cy to form element for better testing code
            _uiFormItem.on = {
               onAfterRender() {
                  if (this.getList) {
                     const popup = this.getPopup();

                     if (!popup) return;

                     this.getList().data.each((option) => {
                        if (!option) return;

                        // our option.ids are based on builder input and can include the ' character
                        const node = popup.$view.querySelector(
                           `[webix_l_id='${(option?.id ?? "")
                              .toString()
                              .replaceAll("'", "\\'")}']`
                        );

                        if (!node) return;

                        node.setAttribute(
                           "data-cy",
                           `${field.key} options ${option.id} ${field.id} ${
                              form?.id || "nf"
                           }`
                        );
                     });
                  }

                  this.getInputNode?.().setAttribute?.(
                     "data-cy",
                     `${field.key} ${field.columnName} ${field.id} ${
                        form?.id || "nf"
                     }`
                  );
               },
            };

            // this may be needed if we want to format data at this point
            // if (field.format) data = field.format(data);

            _uiFormItem.validate = (val, data, colName) => {
               const validator = this.AB.Validation.validator();

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
}


/***/ },

/***/ 79533
/*!***************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformJsonComponent.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformJsonComponent)
/* harmony export */ });
function FNAbviewformJsonComponent({ ABViewFormItemComponent }) {
   return class ABViewFormJsonComponent extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewFormJson_${baseView.id}`, ids);
         if (this.settings.type == "filter") {
            this.rowFilter = this.AB.filterComplexNew(
               `${baseView.id}_filterComplex`,
               {
                  isSaveHidden: true,
                  height: 300,
                  borderless: false,
                  showObjectName: true,
               }
            );
         }
      }

      getFilterField(instance) {
         if (
            instance?.settings?.filterField &&
            instance?.view?.parent?.viewComponents
         ) {
            let filterField = "";
            for (const value of Object.values(
               instance.view.parent.viewComponents
            )) {
               if (value.settings.fieldId == instance.settings.filterField) {
                  filterField = value;
               }
            }

            if (filterField?.ids?.formItem) {
               return filterField.ids.formItem;
            } else {
               return "";
            }
         } else {
            return "";
         }
      }

      get getSystemObjects() {
         // get list of all objects in the app
         let objects = this.AB.objects();
         // reformat objects into simple array for Webix multicombo
         // if you do not the data causes a maximum stack error
         let objectsArray = [];
         objects.forEach((obj) => {
            objectsArray.push({ id: obj.id, label: obj.label });
         });
         // return the simple array
         return objectsArray;
      }

      refreshFilter(values) {
         if (values) {
            let fieldDefs = [];
            values.forEach((obj) => {
               let object = this.AB.objectByID(obj);
               let fields = object.fields();
               if (fields.length) {
                  fields.forEach((f) => {
                     fieldDefs.push(f);
                  });
               }
            });
            this.rowFilter.fieldsLoad(fieldDefs);
            if ($$(this.ids.formItem).config.value)
               this.rowFilter.setValue($$(this.ids.formItem).config.value);
         } else {
            this.rowFilter.fieldsLoad([]);
            if ($$(this.ids.formItem).config.value)
               this.rowFilter.setValue($$(this.ids.formItem).config.value);
         }
      }

      getValue() {
         return this.rowFilter.getValue();
      }

      setValue(formVals) {
         $$(this.ids.formItem).config.value = formVals;
      }

      ui() {
         const _ui = {};

         switch (
            this.settings.type ||
            this.view.settings.type ||
            this.view.constructor.defaultValues().type
         ) {
            case "string":
               _ui.view = "textarea";
               _ui.disabled = true;
               _ui.height = 200;
               _ui.format = {
                  parse: function (parsed) {
                     try {
                        parsed = JSON.parse(parsed);
                     } catch (err) {
                        // already parsed
                     }
                     return parsed;
                  },
                  edit: function (stringify) {
                     try {
                        stringify = JSON.stringify(stringify);
                     } catch (err) {
                        // already a string
                     }
                     return stringify;
                  },
               };
               break;
            case "systemObject":
               _ui.view = "multicombo";
               _ui.placeholder = this.label(
                  "Select one or more system objects"
               );
               _ui.button = false;
               _ui.stringResult = false;
               _ui.suggest = {
                  selectAll: true,
                  body: {
                     data: this.getSystemObjects,
                     template: webix.template("#label#"),
                  },
               };
               break;
            case "filter":
               _ui.view = "forminput";
               _ui.css = "ab-custom-field";
               _ui.body = this.rowFilter.ui;
               break;
         }

         return super.ui(_ui);
      }

      init() {
         // if (this.settings.type == "filter") {
         //    this.rowFilter.init({ showObjectName: true });
         // }
      }

      onShow() {
         const _ui = this.ui();
         if (this?.settings?.type == "filter") {
            let filterField = this.getFilterField(this);
            if (!$$(filterField)) return;
            $$(filterField).detachEvent("onChange");
            $$(filterField).attachEvent("onChange", (values) => {
               this.refreshFilter(values);
            });
            this.rowFilter.init({ showObjectName: true });
            this.rowFilter.on("changed", (val) => {
               this.setValue(val);
            });
            if ($$(this.ids.formItem).config.value) {
               this.rowFilter.setValue($$(this.ids.formItem).config.value);
            } else {
               this.rowFilter.setValue("");
            }
         }
      }
   };
}


/***/ },

/***/ 82592
/*!*****************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformNumberComponent.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformNumberComponent)
/* harmony export */ });
function FNAbviewformNumberComponent({
   ABViewFormItemComponent,
}) {
   return class ABViewFormNumberComponent extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewFormNumber_${baseView.id}`, ids);
      }

      ui() {
         const settings = this.view.settings ?? {};
         const _ui = {};

         if (settings.isStepper) {
            _ui.view = "counter";
         } else {
            _ui.view = "text";
            _ui.attributes = { type: "number" };
         }

         return super.ui(_ui);
      }
   };
}


/***/ },

/***/ 59273
/*!*******************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformReadonlyComponent.js ***!
  \*******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformReadonlyComponent)
/* harmony export */ });
function FNAbviewformReadonlyComponent({
   ABViewFormItemComponent,
   ABFieldImage,
}) {
   return class ABViewFormReadonlyComponent extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewFormReadonly_${baseView.id}`,
            Object.assign(
               {
                  template: "",
               },
               ids
            )
         );
      }

      ui() {
         const baseView = this.view;
         const field = baseView.field();

         const _ui = {
            view: "forminput",
            labelWidth: 0,
            paddingY: 0,
            paddingX: 0,
            readonly: true,
            css: "ab-readonly-field",
            body: {
               id: this.ids.template,
               view: "label",
               borderless: true,
               css: { "background-color": "#fff" },
               label: "",
            },
         };

         const form = baseView.parentFormComponent();
         const settings = form ? form.settings || {} : {};

         if (settings.showLabel == true && settings.labelPosition == "top") {
            _ui.body.height = 80;
         } else if (field.settings && field.settings.useHeight) {
            _ui.body.height = parseInt(field.settings.imageHeight) || 38;
         } else _ui.body.height = 38;

         return super.ui(_ui);
      }

      async init(AB) {
         await super.init(AB);

         const $formItem = $$(this.ids.formItem);
         if (!$formItem) return;

         const $form = $formItem.getFormView();
         const rowData = $form?.getValues() ?? {};

         this.refresh(rowData);
         $form?.attachEvent("onChange", (newv, oldv) => {
            const rowData = $form?.getValues() ?? {};

            this.refresh(rowData);
         });
      }

      onShow() {
         const $formItem = $$(this.ids.formItem);
         if (!$formItem) return;

         const $form = $formItem.getFormView();
         const rowData = $form?.getValues() ?? {};

         this.refresh(rowData);
      }

      getValue(rowData) {
         const field = this.view.field();
         if (!field) return null;

         return rowData[field.columnName];
      }

      refresh(rowData) {
         const baseView = this.view;
         const form = baseView.parentFormComponent(),
            field = baseView.field();

         const formSettings = form ? form.settings || {} : {};

         let templateLabel = "";

         if (formSettings.showLabel) {
            if (formSettings.labelPosition === "top")
               templateLabel = `<label style="display:block; text-align: left; margin: 0; padding:1px 7.5px 0 3px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;" class="webix_inp_top_label">${field.label}</label>`;
            else
               templateLabel = `<label style="width: ${formSettings.labelWidth}px; display: inline-block; line-height: 32px; float: left; margin: 0; padding:1px 7.5px 0 3px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${field.label}</label>`;
         }

         let newWidth = formSettings.labelWidth;

         if (this.settings && this.settings.formView) newWidth += 40;
         else if (
            formSettings.showLabel &&
            formSettings.labelPosition === "top"
         )
            newWidth = 0;

         const template =
            `<div class="readonlyField">${templateLabel}#template#</div>`.replace(
               /#template#/g,
               field
                  .columnHeader({
                     width: newWidth,
                     editable: true,
                  })
                  .template(rowData)
            );

         // Re-build template element
         $$(this.ids.template)?.setHTML(template);
      }
   };
}


/***/ },

/***/ 67375
/*!*************************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformSelectMultipleComponent.js ***!
  \*************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformSelectMultipleComponent)
/* harmony export */ });
function FNAbviewformSelectMultipleComponent({
   ABViewFormItemComponent,
}) {
   return class ABViewFormSelectMultipleComponent extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewFormSelectMultiple_${baseView.id}`,
            ids
         );
      }

      ui() {
         const baseView = this.view;
         const field = baseView.field(),
            settings = this.settings;
         const options = [];

         if (field?.key === "user") options.push(...field.getUsers());
         else if (field)
            options.push(...(field.settings.options ?? settings.options ?? []));

         const ids = this.ids;
         const _ui = {
            id: ids.formItem,
            view: settings.type || baseView.constructor.defaultValues().type,
            options: options.map((opt) => {
               return {
                  id: opt.id,
                  value: opt.text,
                  hex: opt.hex,
               };
            }),
         };

         switch (_ui.view) {
            case "multicombo":
               _ui.tagMode = false;
               _ui.css = "hideWebixMulticomboTag";
               _ui.tagTemplate = (values) => {
                  const selectedOptions = [];
                  const $formItem = $$(ids.formItem) ?? $$(_ui.id);

                  values.forEach((val) => {
                     selectedOptions.push($formItem.getList().getItem(val));
                  });

                  let vals = selectedOptions;

                  if (field.getSelectedOptions)
                     vals = field.getSelectedOptions(field, selectedOptions);

                  const items = [];

                  vals.forEach((val) => {
                     let hasCustomColor = "";
                     let optionHex = "";

                     if (field.settings.hasColors && val.hex) {
                        hasCustomColor = "hascustomcolor";
                        optionHex = `background: ${val.hex};`;
                     }

                     const text = val.text ? val.text : val.value;

                     items.push(
                        `<span class="webix_multicombo_value ${hasCustomColor}" style="${optionHex}" optvalue="${val.id}"><span>${text}</span><span class="webix_multicombo_delete" role="button" aria-label="Remove item"></span></span>`
                     );
                  });

                  return items.join("");
               };

               break;

            case "checkbox":
               // radio element could not be empty options
               _ui.options.push({
                  id: "temp",
                  value: this.label("Option"),
               });

               break;
         }

         return super.ui(_ui);
      }

      getValue(rowData) {
         const field = this.view.field(),
            $formItem = $$(this.ids.formItem);

         return field.getValue($formItem, rowData);
      }
   };
}


/***/ },

/***/ 63620
/*!***********************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformSelectSingleComponent.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformSelectSingleComponent)
/* harmony export */ });
function FNAbviewformSelectSingleComponent({
   ABViewFormItemComponent,
}) {
   return class ABViewFormSelectSingleComponent extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewFormSelectSingle_${baseView.id}`,
            ids
         );
      }

      ui() {
         const baseView = this.view;
         const field = baseView.field(),
            settings = baseView.settings || this.settings;
         const options = [];

         if (field?.key === "user") options.push(...field.getUsers());
         else if (field)
            options.push(...(field.settings.options ?? settings.options ?? []));
         else options.push(...(settings.options ?? []));

         const _ui = {
            view: settings.type || baseView.constructor.defaultValues().type,
         };

         if (field?.settings.hasColors) {
            _ui.css = "combowithcolors";
            _ui.options = {
               view: "suggest",
               body: {
                  view: "list",
                  data: options.map((opt) => {
                     return {
                        id: opt.id,
                        value: opt.text || opt.value,
                        hex: field.settings.hasColors ? opt.hex : "",
                     };
                  }),
                  template: function (value) {
                     const items = [];

                     let hasCustomColor = "";
                     let optionHex = "";

                     if (value.hex) {
                        hasCustomColor = "hascustomcolor";
                        optionHex = `background: ${value.hex};`;
                     }

                     items.push(
                        `<span class="webix_multicombo_value ${hasCustomColor}" style="${optionHex}" optvalue="${value.id}"><span>${value.value}</span></span>`
                     );

                     return items.join("");
                  },
               },
            };
         } else
            _ui.options = options.map((opt) => {
               return {
                  id: opt.id,
                  value: opt.text || opt.value,
               };
            });

         // radio element could not be empty options
         if (_ui.view === "radio" && _ui.options.length < 1)
            _ui.options.push({
               id: "temp",
               value: this.AB ? this.AB.Label()("Option") : "Option", // Safe fallback
            });

         return super.ui(_ui);
      }
   };
}


/***/ },

/***/ 90293
/*!******************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformTextboxComponent.js ***!
  \******************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformTextboxComponent)
/* harmony export */ });
function FNAbviewformTextboxComponent({
   ABViewFormItemComponent,
}) {
   return class ABViewFormTextboxComponent extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewFormTextbox_${baseView.id}`, ids);
         this.type =
            this.settings.type ||
            this.view.settings.type ||
            this.view.constructor.defaultValues().type;
      }

      ui() {
         const _ui = {};

         switch (this.type) {
            case "single":
               _ui.view = "text";
               break;
            case "multiple":
               _ui.view = "textarea";
               _ui.height = 200;
               break;
            case "rich":
               _ui.view = "forminput";
               _ui.height = 200;
               _ui.css = "ab-rich-text";
               _ui.body = {
                  view: "tinymce-editor",
                  value: "",
                  cdn: "/js/webix/extras/tinymce",
                  config: {
                     plugins: "link",
                     menubar: "format edit",
                     toolbar:
                        "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | fontsize | link",
                  },
               };
               break;
         }

         return super.ui(_ui);
      }

      async onShow() {
         if (this.type !== "rich") return;
         await this.initTinyMCE();
         const _ui = this.ui();
         const _uiFormItem = _ui.rows[0];
         let $formItem = $$(this.ids.formItem);

         // WORKAROUND : to fix breaks TinyMCE when switch pages/tabs
         // https://forum.webix.com/discussion/6772/switching-tabs-breaks-tinymce
         if ($formItem) {
            // recreate rich editor
            $formItem = this.AB.Webix.ui(_uiFormItem, $formItem);

            // Add dataCy to TinyMCE text editor
            const baseView = this.view;

            $formItem
               .getChildViews()[0]
               .getEditor(true)
               .then((editor) => {
                  const dataCy = `${baseView.key} rich ${_uiFormItem.name} ${
                     baseView.id ?? ""
                  } ${baseView.parent?.id ?? ""}`;

                  editor.contentAreaContainer.setAttribute("data-cy", dataCy);
               });
         }
      }

      /**
       * Ensure TinyMCE has been loaded and initialized.
       */
      async initTinyMCE() {
         await this.AB.custom["tinymce-editor"].init();
      }
   };
}


/***/ },

/***/ 76083
/*!***************************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_form/viewComponent/FNAbviewformTreeComponent.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewformTreeComponent)
/* harmony export */ });
function FNAbviewformTreeComponent({ ABViewFormItemComponent }) {
   return class ABViewFormTreeComponent extends ABViewFormItemComponent {
      constructor(baseView, idBase, ids) {
         super(baseView, idBase || `ABViewFormTree_${baseView.id}`, ids);
      }

      ui() {
         const self = this;
         const baseView = this.view;
         const field = baseView.field();

         const _ui = {
            label: "",
            labelWidth: 0,
         };

         // this field may be deleted
         if (!field) return super.ui(_ui);

         const form = baseView.parentFormComponent();
         const formSettings = form ? form.settings || {} : {};

         const requiredClass =
            field.settings.required === 1 ? "webix_required" : "";

         let templateLabel = "";

         if (formSettings.showLabel) {
            if (formSettings.labelPosition === "top")
               templateLabel = `<label style="display:block; text-align: left; margin: 0; padding:1px 7.5px 0 3px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;" class="webix_inp_top_label ${requiredClass}">${field.label}</label>`;
            else
               templateLabel = `<label style="width: ${formSettings.labelWidth}px; display: inline-block; line-height: 32px; float: left; margin: 0; padding:1px 7.5px 0 3px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;" class="${requiredClass}">${field.label}</label>`;
         }

         let newWidth = formSettings.labelWidth;

         if (baseView.settings && baseView.settings.formView) newWidth += 40;

         _ui.view = "forminput";
         _ui.labelWidth = 0;
         _ui.paddingY = 0;
         _ui.paddingX = 0;
         _ui.css = "ab-custom-field";
         _ui.body = {
            view: "focusabletemplate",
            css: "customFieldCls",
            borderless: true,
            template: (obj) => {
               let val = self._value || "";

               if (typeof val == "string" && val.indexOf("[") === 0) {
                  try {
                     val = JSON.parse(val);
                  } catch (e) {
                     /* ignore */
                  }
               }

               const rowData = { [field.columnName]: val };
               const template = field
                  .columnHeader({
                     width: newWidth,
                  })
                  .template(rowData);

               return `<div class="customField">${templateLabel}${template}</div>`;
            },
            height:
               field.settings.useHeight === 1
                  ? parseInt(field.settings.imageHeight)
                  : 38,
            onClick: {
               customField: (id, e, trg) => {
                  const node = $$(this.ids.formItem).$view;

                  field.customEdit(
                     { [field.columnName]: self.getValue() },
                     node,
                     this
                  );
               },
            },
         };

         _ui.on = {
            onAfterRender: function () {
               if (this.config.value) {
                  self._value = this.config.value;
               }
            },
         };

         return super.ui(_ui);
      }

      init(AB) {
         this.AB = AB;

         const $formItem = $$(this.ids.formItem);
         if ($formItem) {
            $formItem.setValue = (vals) => {
               let cleanVals = vals;
               if (typeof cleanVals === "string") {
                  if (cleanVals === "") {
                     cleanVals = "";
                  } else if (cleanVals.indexOf("[") === 0) {
                     try {
                        cleanVals = JSON.parse(cleanVals);
                     } catch (e) {
                        cleanVals = cleanVals
                           .split(",")
                           .filter((v) => v !== "");
                     }
                  } else {
                     cleanVals = cleanVals.split(",").filter((v) => v !== "");
                  }
               }

               if (cleanVals == null) {
                  cleanVals = "";
               } else if (cleanVals !== "" && !Array.isArray(cleanVals)) {
                  cleanVals = [cleanVals];
               }

               this._value = cleanVals;
               if (typeof $formItem.refresh === "function") {
                  $formItem.refresh();
               } else if (
                  typeof $formItem.getBody === "function" &&
                  typeof $formItem.getBody().refresh === "function"
               ) {
                  $formItem.getBody().refresh();
               }
            };
            $formItem.getValue = () => {
               return this._value || "";
            };
            $formItem.setValues = (vals) => {
               $formItem.setValue(vals);
            };
            $formItem.getValues = () => {
               return $formItem.getValue();
            };
         }

         return super.init(AB);
      }

      getValue(rowData) {
         const $formItem = $$(this.ids.formItem);
         if (!$formItem) return "";

         let vals = $formItem.getValue();

         // Pass empty string if the returned values is empty array
         if (Array.isArray(vals) && vals.length === 0) vals = "";

         return vals || "";
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

/***/ 20199
/*!*********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_grid/ABViewGridPopupExport.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ABWorkObjectPopupExport)
/* harmony export */ });
/* harmony import */ var _ui_ClassUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../ui/ClassUI */ 93692);
/*
 * ABViewGridPopupExport.js
 * Manage the Popup that allows you to export data into one of our supported
 * formats.
 */



class ABWorkObjectPopupExport extends _ui_ClassUI__WEBPACK_IMPORTED_MODULE_0__["default"] {
   constructor(idBase) {
      idBase = idBase || "abviewgridpopupExport";

      super({
         popupExport: `${idBase}_popupExport`,
         list: `${idBase}_popupExport_list`,
      });

      this._currentObject = null;
      // {ABObject}
      // The ABObject of the data we will export.  We can find out the fields
      // from the object.

      this._dataCollection = null;
      // {ABDatacCollection}
      // The ABDataCollection that contains the data we are going to export.

      this._grid = null;
      // {webix.grid}
      // the current webix.grid that contains the data we are going to export.

      this._filename = null;
      // {string}
      // the name of the desired output file.

      this._hiddenFields = [];
      // {array}
      // An array of ABField.columnName(s) that we are not wanting to export
   }

   ui() {
      var self = this;

      // webix UI definition:
      return {
         view: "popup",
         id: this.ids.popupExport,
         width: 160,
         height: 0, //150,
         select: false,
         hidden: true,
         body: {
            id: this.ids.list,
            view: "list",
            autoheight: true,
            data: [
               { name: "CSV", icon: "file-excel-o" },
               { name: "Excel", icon: "file-excel-o" },
               { name: "PDF", icon: "file-pdf-o" },
               { name: "PNG", icon: "file-image-o" },
            ],
            template:
               "<div><i class='fa fa-#icon# webix_icon_btn' aria-hidden='true'></i> #name#</div>",
            on: {
               onItemClick: function (id /*, e, node */) {
                  var component = this.getItem(id);
                  self.export(component.name);
               },
            },
         },
      };
   }

   async init(AB) {
      if (AB) {
         this.AB = AB;
      }
      webix.ui(this.ui());
      $$(this.ids.popupExport).resize();
   }

   // internal business logic

   /**
    * @method dataCollectionLoad()
    * the current ABDataCollection we are working with.
    * @param {ABDataCollection} dc
    */
   dataCollectionLoad(dc) {
      this._dataCollection = dc;
   }

   /**
    * @method objectLoad()
    * The current ABObject we are working with.
    * @param {ABObject} object
    */
   objectLoad(object) {
      this._currentObject = object;
   }

   /**
    * @method setHiddenFields
    * Register Fields we don't want exported in our data.
    * @param {array} fields
    *        An array of ABField.columnName(s) to exclude from our export.
    */
   setHiddenFields(fields = []) {
      this._hiddenFields = fields ?? [];
   }

   /**
    * @method setFilename()
    * Register the name of the file we want our data to export as.
    * @param {string} filename
    */
   setFilename(filename) {
      this._filename = filename;
   }

   /**
    * @method setGridComponent()
    * Register the webix.grid that currently stores the data we are
    * exporting.
    * @param {webix.grid} $grid
    */
   setGridComponent($grid) {
      this._grid = $grid;
   }

   /**
    * @function show()
    * Show this component.
    * @param {obj} $view
    *        the webix.$view to hover the popup around.
    */
   show($view) {
      $$(this.ids.popupExport).show($view);
   }

   async export(name) {
      let fnExport;

      let columns = {};

      let dc = this._dataCollection;
      let _currentObject = this._currentObject;
      let _grid = this._grid;
      let _filename = this._filename;

      if (
         dc &&
         (!dc.settings.loadAll || dc.dataStatus == dc.dataStatusFlag.notInitial)
      ) {
         // Load all data
         await dc.reloadData(0, null);
         dc.settings.loadAll = true;
      }

      // client filter data
      // template of report
      if (_currentObject) {
         _currentObject.fields().forEach((f) => {
            // hidden fields
            if (this._hiddenFields.indexOf(f.columnName) > -1) return;

            columns[f.columnName] = {
               template: (rowData) => {
                  return f.format(rowData);
               },
            };
         });
      }

      // If there are checked items, then export them only
      // Otherwise export all items
      const noCheckedRow =
         _grid.data.find({ appbuilder_select_item: 1 }).length < 1;
      const filterRow = (row) =>
         noCheckedRow || row?.appbuilder_select_item == 1;

      switch (name) {
         case "CSV":
            webix.csv.delimiter.cols = ",";

            fnExport = webix.toCSV(_grid, {
               filename:
                  _filename || (_currentObject ? _currentObject.label : null),
               columns: columns,
               filter: filterRow,
            });
            break;
         case "Excel":
            fnExport = webix.toExcel(_grid, {
               filename:
                  _filename || (_currentObject ? _currentObject.label : null),
               name:
                  _filename || (_currentObject ? _currentObject.label : null),
               columns: columns,
               filterHTML: true,
               filter: filterRow,
            });
            break;
         case "PDF":
            fnExport = webix.toPDF(_grid, {
               filename:
                  _filename || (_currentObject ? _currentObject.label : null),
               filterHTML: true,
               filter: filterRow,
            });
            break;
         case "PNG":
            fnExport = webix.toPNG(_grid, {
               filename:
                  _filename || (_currentObject ? _currentObject.label : null),
               // filter: NOT SUPPORT
            });
            break;
      }

      try {
         await fnExport;
         $$(this.ids.popupExport).hide();
      } catch (err) {
         this.AB.notify.developer(err, {
            message: `ABViewGridPopupExport:export(): System could not export: ${name}`,
            exportType: name,
            columns,
            fileName: _filename,
         });
      }
   }

   // this.dataCollectionLoad = _logic.dataCollectionLoad;
   // this.objectLoad = _logic.objectLoad;
   // this.setGridComponent = _logic.setGridComponent;
   // this.setFilename = _logic.setFilename;
   // this.setHiddenFields = _logic.setHiddenFields;
   // this.show = _logic.show;
}


/***/ },

/***/ 60744
/*!*************************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_grid/ABViewGridPopupMassUpdate.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ABViewGridPopupMassUpdate)
/* harmony export */ });
/* harmony import */ var _ui_ClassUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../ui/ClassUI */ 93692);
/* harmony import */ var _RowUpdater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../RowUpdater */ 18815);
/*
 * ABViewGridPopupMassUpdate
 *
 * An ABViewGrid can offer a mass update feature.  This is a ui component
 * to help with the processing of the update.
 *
 */




var L = null;

class ABViewGridPopupMassUpdate extends _ui_ClassUI__WEBPACK_IMPORTED_MODULE_0__["default"] {
   //.extend(idBase, function(App) {

   constructor(ABViewGridComponent, idBase) {
      idBase = idBase || "abviewgridpopupMassUpdate";

      super({
         component: `${idBase}_popupMassUpdate`,
         submit: `${idBase}_submitMassUpdate`,
      });

      this.CurrentObject = null;
      // {ABObject}
      // Which ABObject are we currently working with.

      this.GridComponent = ABViewGridComponent;
      // {ABViewGridComponent}
      // The current ABViewGridComponent we are working with.

      this.AB = ABViewGridComponent.AB;
      // {ABFactory}

      this.rowUpdater = new _RowUpdater__WEBPACK_IMPORTED_MODULE_1__["default"](idBase, this.AB);
      // {RowUpdater}
      // An instance of our RowUpdater form builder.

      if (!L) {
         L = (...params) => {
            return this.AB.Multilingual.label(...params);
         };
      }
   }

   ui() {
      var ids = this.ids;

      // Our webix UI definition:
      return {
         view: "popup",
         id: ids.component,
         // modal: true,
         body: {
            width: 500,
            rows: [
               // Update panel
               this.rowUpdater.ui(),
               { height: 15 },
               {
                  cols: [
                     {},
                     {
                        view: "button",
                        value: L("Cancel"),
                        width: 100,
                        click: () => {
                           this.hide();
                        },
                     },
                     {
                        id: ids.submit,
                        css: "webix_primary",
                        view: "button",
                        label: L("Update"),
                        type: "form",
                        width: 120,
                        click: () => {
                           this.submit();
                        },
                     },
                  ],
               },
            ],
         },
         on: {
            onShow: () => {
               this.onShow();
            },
         },
      };
   }

   async init(AB) {
      webix.ui(this.ui());
      this.rowUpdater.init(AB);

      return Promise.resolve();
   }

   /**
    * @method hide()
    * Hide the popup.
    */
   hide() {
      $$(this.ids.component).hide();
   }

   /**
    * @function objectLoad
    * Ready the Popup according to the current object & datatable
    * @param {ABObject} object
    *        the currently selected object.
    * @param {webix.datatable} dataTable
    *        the dataTable we need to run the mass update on...trust me this
    *        will be good
    */
   objectLoad(object, dataTable) {
      this.CurrentObject = object;
      this.rowUpdater.objectLoad(object);
      this.DataTable = dataTable;
   }

   onShow() {}

   /**
    * @method show()
    * Show this component.
    * @param {obj} $view
    *        the webix.$view to hover the popup around.
    * @param {json} options
    *        Additional webix options related to the .show() method.
    */
   show($view, options = null) {
      if (options != null) {
         $$(this.ids.component).show($view, options);
      } else {
         $$(this.ids.component).show($view);
      }
   }

   /**
    * @method submit()
    * Process the submit action by getting the values to change and then
    * running a batchUpdate() on the items in our datatable that were selected.
    */
   submit() {
      // Update values to records
      let update_button = $$(this.ids.submit),
         update_items = this.rowUpdater.getValue() || [];

      update_button.disable();

      if (!this.GridComponent) {
         // TODO : Message
         // console.log("no data collection to update");
         update_button.enable();
         return;
      } else if (update_items.length < 1) {
         // TODO : Message
         update_button.enable();
         return;
      }

      let $datatable = this.GridComponent.getDataTable(); // $$(DataTable.ui.id);
      let updatedRowIds = [];
      $datatable.data.each(function (row) {
         if (
            row &&
            Object.prototype.hasOwnProperty.call(
               row,
               "appbuilder_select_item"
            ) &&
            row.appbuilder_select_item == 1
         ) {
            updatedRowIds.push(row.id);
         }
      });

      let vals = {};
      update_items.forEach((item) => {
         let fieldInfo = this.CurrentObject.fieldByID(item.fieldId);
         if (!fieldInfo) return;

         vals[fieldInfo.columnName] = item.value;
      });

      if (updatedRowIds.length > 0) {
         webix.confirm({
            title: L("Updating Multiple Records"),
            text: L("Are you sure you want to update the selected records?"),
            callback: (result) => {
               if (result) {
                  if ($datatable && $datatable.showProgress)
                     $datatable.showProgress({ type: "icon" });

                  let objModel = this.CurrentObject.model();
                  objModel
                     .batchUpdate({
                        rowIds: updatedRowIds,
                        values: vals,
                     })
                     .then(() => {
                        // Update webix.datatable
                        (updatedRowIds ?? []).forEach((rowId) => {
                           $datatable.updateItem(rowId, vals);
                        });

                        // Anything we need to do after we are done.
                        update_button.enable();
                        this.hide();

                        if ($datatable && $datatable.hideProgress)
                           $datatable.hideProgress();
                     })
                     .catch((err) => {
                        this.AB.notify.developer(err, {
                           context:
                              "ABViewGridPopupMassUpdate:submit(): Error during batchUpdate",
                           rowIds: updatedRowIds,
                           values: vals,
                        });
                     });
               } else {
                  update_button.enable();
               }
            },
         });
      } else {
         webix.alert({
            title: L("No Records Selected"),
            text: L(
               "You need to select at least one record...did you drink your coffee today?"
            ),
         });
         update_button.enable();
         this.hide();
      }
   }
}


/***/ },

/***/ 23035
/*!************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_grid/FNAbviewgrid.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewgrid)
/* harmony export */ });
/* harmony import */ var _FNAbviewgridComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FNAbviewgridComponent.js */ 78264);


// FNAbviewgrid Web
// A web side import for an ABView.
//
function FNAbviewgrid({
   /*AB,*/
   ABViewWidgetPlugin,
   ABViewComponentPlugin,
   ABViewContainer,
   ABViewPopupSortFields,
   ABViewPropertyFilterData,
   ABViewPropertyLinkPage,
}) {
   const ABViewGridFilter = ABViewPropertyFilterData;

   const ABAbviewgridComponent = (0,_FNAbviewgridComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ABViewComponentPlugin,
      ABViewPopupSortFields,
   });

   const ABViewGridPropertyComponentDefaults = {
      label: "",
      // {string}
      // label is required and you can add more if the component needs them

      // format:0  	// 0 - normal, 1 - title, 2 - description
      dataviewID: "",
      // {uuid}
      // uuid of ABDataCollection that drives the data for our Grid

      padding: 17,
      // {int}
      // the default padding surrounding the component

      showToolbar: 1,
      // {bool}
      // do we show our toolbar?

      isEditable: 0,
      // {bool}
      // do we allow editing in the grid?

      massUpdate: 0,
      // {bool}
      // do we allow the Mass Update capability? (row checkboxes and the
      // MassUpdate popup)

      allowDelete: 0,
      // {bool}
      // do we allow deleting multiple rows at a time? Mass Delete.

      // isFilterable:0,

      isSortable: 1,
      // {bool}
      // do we allow the sort options.

      isExportable: 0,
      // {bool}
      // do we enable the webix export from grid capabilities?

      // linkedObject:'',
      // linkedField:'',
      // linkedPage:'',
      // linkedPageView:'',
      // linkedEditPage:'',
      // linkedEditPageForm:'',

      detailsPage: "",
      // {ABViewPage.id}
      // the ABViewPage that has the details component.

      detailsTab: "",
      // {ABViewTab.id}
      // the ABViewTab component, that has the details component.
      // NOTE: if your details is embedded on a TAB, we need both the
      // .detailsPage & .detailsTab to successfully show the item.

      editPage: "",
      // {ABViewPage.id}
      // the ABViewPage that has the edit component.

      editTab: "",
      // {ABViewTab.id}
      // the ABViewTab component, that has the edit component.
      // NOTE: if your editor is embedded on a TAB, we need both the
      // .editPage & .editTab to successfully show the form.

      trackView: 0,
      // {bool}
      // Do we offer the ability to track changes to this object/row?

      frozenColumnID: "",
      // {ABField.id}
      // id of column you want to stop freezing the left hand side at.

      hiddenFields: [],
      // {array}  [ ABField.id, ABField.id, ... ]
      // array of [ids] to add hidden:true to

      summaryColumns: [],
      // {array}  [ ABField.id, ABField.id, ... ]
      // array of [ids] to add the SUM footer to

      countColumns: [],
      // {array}  [ ABField.id, ABField.id, ... ]
      // array of [ids] to add the Count footer to

      // TODO: get rid of objectWorkspace!
      objectWorkspace: {
         // sortFields:[], // array of columns with their sort configurations
         // filterConditions:[], // array of filters to apply to the data table
         frozenColumnID: "", // id of column you want to stop freezing
         hiddenFields: [], // array of [ids] to add hidden:true to
         summaryColumns: [],
         countColumns: [],
      },
      gridFilter: {
         filterOption: 1,
         userFilterPosition: "toolbar",
         isGlobalToolbar: 1,
      },
      // summaryFields: [], // array of [field ids] to add the summary column in footer
      // countFields: [], // array of [field ids] to add the summary column in footer

      height: 0,
      // {int}
      // The Height of our Grid.
      // See ../views/ABViewDataview.js

      hideHeader: 0,
      labelAsField: 0,
      hideButtons: 0,
      groupBy: "", // id of field

      // TODO: add to ABDesigner.interface design:
      columnConfig: [],
      // {array} [ {columnHeader}, {columnHeader} ... ]
      // An array of column headers for the grid to display. These should
      // be generated at Design time, and can allow the designer to ORDER the
      // columns, assign column widths, fillspace, etc...
      //    {columnHeader}
      //    The minimum amount of information a Grid needs for it's customization
      //    .id {string} ABField.columnName
      //    .fieldId {string} ABField.id
      //    .width {int}
      //    .fillspace {bool}
      //    .minwidth
      //
      //    When displaying column headers, we will ask the
      //    CurrentObject.columnHeaders(), and then modify them with our settings
      //    here.

      saveLocal: 1,
      // {bool}
      // Allow saving of local changes to our grid display. This will enable
      // a user to modify the Grid display locally.
   };

   const ABViewDefaults = {
      key: "grid", // {string} unique key for this view
      icon: "table", // {string} fa-[icon] reference for this view
      labelKey: "Grid", // {string} the multilingual label key for the class label
   };

   /**
    * @function settingsDefault()
    * Verifies a given field is set and if not, defaults to what we havein our
    * ABViewGridPropertyComponentDefaults.
    * NOTE: use this fn() for values that are NOT TRUTHY ... so not for numeric
    * 1 or 0.
    * @param {hash} base
    *        The current settings value hash.
    * @param {string} field
    *        The parameter we are checking.
    */
   function settingsDefault(base, field) {
      if (typeof base[field] == "undefined") {
         base[field] = ABViewGridPropertyComponentDefaults[field];
         return;
      }
      base[field] = base[field] || ABViewGridPropertyComponentDefaults[field];
   }

   /**
    * @function settingsDefaultJSON()
    * Verifies a given field is set and if not, defaults to what we havein our
    * ABViewGridPropertyComponentDefaults.
    * NOTE: use this fn() for values that ARE TRUTHY ... so for numeric 1 or 0
    * @param {hash} base
    *        The current settings value hash.
    * @param {string} field
    *        The parameter we are checking.
    */
   function settingsDefaultJSON(base, field) {
      try {
         if (typeof base[field] == "string") {
            base[field] = JSON.parse(base[field]);
         }
      } catch (e) {
         base[field] = ABViewGridPropertyComponentDefaults[field];
      }
   }

   class ABViewGridCore extends ABViewWidgetPlugin {
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
         return ABViewGridPropertyComponentDefaults;
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

         // if this is being instantiated on a read from the Property UI,
         settingsDefault(this.settings, "dataviewID");

         // Convert to boolean
         // these values are sometimes 0 (number) at this point so the JSON.parse
         // with the || (or) statement was always falling to the default so I am
         // trying to parse the value...if it fails we use the default value
         settingsDefaultJSON(this.settings, "padding");
         settingsDefaultJSON(this.settings, "showToolbar");
         settingsDefaultJSON(this.settings, "isEditable");
         settingsDefaultJSON(this.settings, "massUpdate");
         settingsDefaultJSON(this.settings, "allowDelete");
         // this.settings.isFilterable = JSON.parse(this.settings.isFilterable || ABViewGridPropertyComponentDefaults.isFilterable);
         settingsDefaultJSON(this.settings, "isSortable");
         settingsDefaultJSON(this.settings, "isExportable");
         settingsDefaultJSON(this.settings, "hideHeader");
         settingsDefaultJSON(this.settings, "labelAsField");
         settingsDefaultJSON(this.settings, "hideButtons");
         settingsDefaultJSON(this.settings, "columnConfig");
         settingsDefaultJSON(this.settings, "saveLocal");

         this.settings.gridFilter =
            this.settings.gridFilter ||
            ABViewGridPropertyComponentDefaults.gridFilter;

         try {
            this.settings.gridFilter.filterOption = JSON.parse(
               this.settings.gridFilter.filterOption
            );
         } catch (e) {
            this.settings.gridFilter.filterOption =
               ABViewGridPropertyComponentDefaults.gridFilter.filterOption;
         }

         try {
            this.settings.gridFilter.isGlobalToolbar = JSON.parse(
               this.settings.gridFilter.isGlobalToolbar
            );
         } catch (e) {
            this.settings.gridFilter.isGlobalToolbar =
               ABViewGridPropertyComponentDefaults.gridFilter.isGlobalToolbar;
         }

         // this.settings.linkedObject = this.settings.linkedObject || ABViewGridPropertyComponentDefaults.linkedObject;
         // this.settings.linkedField = this.settings.linkedField || ABViewGridPropertyComponentDefaults.linkedField;
         // this.settings.linkedPage = this.settings.linkedPage || ABViewGridPropertyComponentDefaults.linkedPage;
         // this.settings.linkedPageView = this.settings.linkedPageView || ABViewGridPropertyComponentDefaults.linkedPageView;
         // this.settings.linkedEditPage = this.settings.linkedEditPage || ABViewGridPropertyComponentDefaults.linkedEditPage;
         // this.settings.linkedEditPageForm = this.settings.linkedEditPageForm || ABViewGridPropertyComponentDefaults.linkedEditPageForm;

         settingsDefault(this.settings, "detailsPage");
         settingsDefault(this.settings, "editPage");
         settingsDefault(this.settings, "detailsTab");
         settingsDefault(this.settings, "editTab");
         settingsDefaultJSON(this.settings, "trackView");

         // TODO: remove objectworkspace!
         // this.settings.objectWorkspace =
         //    this.settings.objectWorkspace ||
         //    ABViewGridPropertyComponentDefaults.objectWorkspace;

         // if (typeof this.settings.objectWorkspace != "undefined") {
         //    if (typeof this.settings.objectWorkspace.sortFields == "undefined")
         //       this.settings.objectWorkspace.sortFields = [];
         //    if (
         //       typeof this.settings.objectWorkspace.filterConditions == "undefined"
         //    )
         //       this.settings.objectWorkspace.filterConditions = [];
         //    if (typeof this.settings.objectWorkspace.frozenColumnID == "undefined")
         //       this.settings.objectWorkspace.frozenColumnID = "";
         //    if (typeof this.settings.objectWorkspace.hiddenFields == "undefined")
         //       this.settings.objectWorkspace.hiddenFields = [];
         //    if (typeof this.settings.objectWorkspace.summaryColumns == "undefined")
         //       this.settings.objectWorkspace.summaryColumns = [];
         //    if (typeof this.settings.objectWorkspace.countColumns == "undefined")
         //       this.settings.objectWorkspace.countColumns = [];
         // }

         var owFields = [
            "sortFields",
            "filterConditions",
            "frozenColumnID",
            "hiddenFields",
            "summaryColumns",
            "countColumns",
         ];
         // Transition: if we have an .objectWorkspace, copy those values in here:
         if (this.settings.objectWorkspace) {
            owFields.forEach((f) => {
               if (this.settings[f] == null)
                  this.settings[f] = this.settings.objectWorkspace[f];
            });
         }

         // make sure they have actual default values now.
         owFields.forEach((f) => {
            settingsDefault(this.settings, f);
         });

         // we are not allowed to have sub views:
         this._views = [];
      }

      /**
       * @method componentList
       * return the list of components available on this view to display in the editor.
       */
      componentList() {
         return [];
      }

      removeField(field, cb) {
         let shouldSave = false;

         // check to see if there is a frozenColumnID and if it matches the
         // deleted field
         if (this.settings?.frozenColumnID == field.columnName) {
            // remove the column name from the frozen column id
            this.settings.frozenColumnID = "";
            // flag the object to be saved later
            shouldSave = true;
         }

         // check to see if there are hidden fields
         if (this.settings.hiddenFields?.length) {
            // find if the deleted field is in the array
            let index = this.settings.hiddenFields.indexOf(field.columnName);
            // if so splice it out of the array
            if (index > -1) {
               this.settings.hiddenFields.splice(index, 1);
               // flag the object to be saved later
               shouldSave = true;
            }
         }

         // check to see if there are Summary fields
         if (this.settings.summaryColumns?.length) {
            // find if the deleted field is in the array
            let index = this.settings.summaryColumns.indexOf(field.id);
            // if so splice it out of the array
            if (index > -1) {
               this.settings.summaryColumns.splice(index, 1);
               // flag the object to be saved later
               shouldSave = true;
            }
         }

         // check to see if there are hidden fields
         if (this.settings.countColumns?.length) {
            // find if the deleted field is in the array
            let index = this.settings.countColumns.indexOf(field.id);
            // if so splice it out of the array
            if (index > -1) {
               this.settings.countColumns.splice(index, 1);
               // flag the object to be saved later
               shouldSave = true;
            }
         }
         // if settings were changed call the callback

         cb(null, shouldSave);
      }

      copyUpdateProperyList() {
         return ["detailsPage", "detailsTab", "editPage", "editTab"];
      }
   }

   return class ABViewGrid extends ABViewGridCore {
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
         return new ABAbviewgridComponent(this, parentId);
      }

      /**
       * @param {obj} values  key=>value hash of ABView values
       * @param {ABApplication} application the application object this view is under
       * @param {ABViewWidget} parent the ABViewWidget this view is a child of. (can be null)
       */
      // constructor(values, application, parent, defaultValues) {
      //    super(values, application, parent, defaultValues);
      // }

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
         this.filterHelper.fromSettings(this.settings.gridFilter);
      }

      propertyGroupByList(ids, groupBy) {
         let colNames = groupBy || [];
         if (typeof colNames == "string") {
            colNames = colNames.split(",");
         }

         let options = $$(ids.groupBy).getList().data.find({});

         $$(ids.groupByList).clearAll();
         colNames.forEach((colName) => {
            let opt = options.filter((o) => o.id == colName)[0];
            if (opt) {
               $$(ids.groupByList).add(opt);
            }
         });
      }

      get filterHelper() {
         if (this.__filterHelper == null) {
            this.__filterHelper = new ABViewGridFilter(
               this.AB,
               `${this.id}_filterHelper`
            );
         }

         return this.__filterHelper;
      }

      get linkPageHelper() {
         if (this.__linkPageHelper == null)
            this.__linkPageHelper = new ABViewPropertyLinkPage();

         return this.__linkPageHelper;
      }

      warningsEval() {
         super.warningsEval();
         let origWS = this.warningsSilent;
         this.warningsSilent = true;
         let DC = this.datacollection;
         this.warningsSilent = origWS;
         if (!DC) {
            this.warningsMessage(
               `can't resolve it's datacollection[${this.settings.dataviewID}]`
            );
         }
      }
   };
}


/***/ },

/***/ 78264
/*!*********************************************************************************!*\
  !*** ./AppBuilder/platform/plugins/included/view_grid/FNAbviewgridComponent.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FNAbviewgridComponent)
/* harmony export */ });
/* harmony import */ var _ABViewGridPopupExport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ABViewGridPopupExport.js */ 20199);
/* harmony import */ var _ABViewGridPopupMassUpdate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ABViewGridPopupMassUpdate.js */ 60744);



function FNAbviewgridComponent({
   /*AB,*/
   ABViewComponentPlugin,
   ABViewPopupSortFields,
}) {
   return class ABAbviewgridComponent extends ABViewComponentPlugin {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewGrid_${baseView.id}`,
            Object.assign(
               {
                  table: "",

                  // component: `${base}_component`,
                  toolbar: "",
                  buttonDeleteSelected: "",

                  buttonFilter: "",
                  buttonMassUpdate: "",
                  buttonSort: "",
                  buttonExport: "",

                  globalSearchToolbar: "",

                  datatable: "",
               },
               ids
            )
         );

         this._handler_filterData = (fnFilter, filterRules) => {
            this.callbackFilterData(fnFilter, filterRules); // be notified when there is a change in the filter
         };

         this.handler_select = (...params) => {
            this.selectRow(...params);
         };
         // {fn} .handler_select
         // the callback fn for our selectRow()
         // We want this called when the .datacollection we are linked to
         // emits an "onChange" event.

         this.detatch();
         baseView.filterHelper.on("filter.data", this._handler_filterData);

         // derive these from viewGrid
         this.id = baseView.id;

         /////
         ///// For TEsting:
         /////
         // this.settings.showToolbar = 1;
         // this.settings.isEditable = 1;
         // this.settings.isExportable = 1;
         // this.settings.gridFilter = {
         //    filterOption: 1,
         //    userFilterPosition: "form",
         //    isGlobalToolbar: 1,
         // };

         // this.settings.detailsPage = "some-uuid";
         // this.settings.detailTab = "some_uuid_2";
         // this.settings.trackView = 1;
         /////
         ///// end testing
         /////

         this.columnSplitLeft = 0;
         // {integer}
         // Which column to "split"/"freeze" from the left side of the grid.

         this.columnSplitRight = 0;
         // {integer}
         // The # columns to the right to freeze.

         // this.datacollection = null;
         // // {ABDataCollection}
         // // The Webix DataCollection that manages the data we are displaying.

         this.validationError = false;
         // {bool}
         // Has a Validation Error occured?

         this.linkPage = baseView.linkPageHelper.component();
         // {ABViewPropertyLinkPage}
         //

         const idTable = this.ids.table;
         const ab = this.AB;

         this.PopupExport = new _ABViewGridPopupExport_js__WEBPACK_IMPORTED_MODULE_0__["default"](idTable);
         this.PopupExport.init(ab);
         // {ABViewGridPopupExport}
         // Popup for managing how to export our data.

         this.PopupMassUpdateComponent = new _ABViewGridPopupMassUpdate_js__WEBPACK_IMPORTED_MODULE_1__["default"](
            this,
            idTable
         );
         this.PopupMassUpdateComponent.init(ab);
         // this.PopupMassUpdateComponent.on("")
         // {}
         // The popup for performing a Mass Edit operation.

         this.PopupSortDataTableComponent = new ABViewPopupSortFields(idTable);
         this.PopupSortDataTableComponent.init(ab);
         this.PopupSortDataTableComponent.on("changed", (sortOptions) => {
            this.callbackSortData(sortOptions);
         });
         // {ABViewGridPopupSortFields}
         // The popup for adding sort criteria to our grid.

         this.skippableColumns = [
            "appbuilder_select_item",
            "appbuilder_view_detail",
            "appbuilder_view_track",
            "appbuilder_view_edit",
            "appbuilder_trash",
         ];
         // {array}
         // An array of column names that should be skipped from some of our
         // event handlers.

         // this.EditField = null;
         // // {ABFieldXXX}
         // // Which ABField is the focus of our PopupHeader menu?

         // this.EditNode = null;
         // // {HTML DOM}
         // // The webix.$node where the ABField Header is that our PopupHeader
         // // should be displayed at.

         this.ignoreLocalSettings = false;
         // {bool}
         // should we ignore our local settings in our current context?
         // (used in ABDesigner when our settings will change as we need to
         // use those instead of the saved settings.)

         this._gridSettings = null;
         // {hash} { grid.id : [ {columnHeader}, {columnHeader} ...]}
         // Keep a global copy of our local Grid settings, so we can optimize the header
         // sizes.

         this._isDatacollectionLoaded = false;
      }

      // {string}
      // the unique key for ABViewGrids to store/retrieve their local settings
      get keyStorageSettings() {
         return "abviewgrid_settings";
      }

      detatch() {
         this.view.filterHelper.removeAllListeners("filter.data");
         ["changeCursor", "cursorStale", "cursorSelect"].forEach((key) => {
            this.datacollection?.removeListener(key, this.handler_select);
         });
      }

      /**
       * @method getColumnIndex()
       * return the Datatable.getColumnIndex() value
       * @param {string} id
       *        the uuid of the column we are referencing.
       * @return {integer}
       */
      getColumnIndex(id) {
         let indx = this.getDataTable().getColumnIndex(id);
         if (!this.settings.massUpdate) {
            // the index is 0 based. So if the massUpdate feature isn't
            // enabled, we need to add 1 to the result so they look like
            // a 1, 2, ...

            indx++;
         }
         return indx;
      }

      uiDatatable() {
         const ids = this.ids;
         const settings = this.settings;
         const self = this;

         let view = "datatable";

         if (settings.isTreeDatable || settings.groupBy)
            // switch datatable to support tree
            view = "treetable";

         let selectType = "cell";

         if (
            !settings.isEditable &&
            (settings.detailsPage || settings.editPage)
         )
            selectType = "row";

         return {
            view,
            id: ids.datatable,
            resizeColumn: { size: 10 },
            resizeRow: { size: 10 },
            prerender: false,
            editable: settings.isEditable,
            fixedRowHeight: false,
            height: settings.height || 0,
            editaction: "custom",
            select: selectType,
            footer:
               // show footer when there are summary columns
               settings.summaryColumns.length > 0 ||
               settings.countColumns.length > 0,
            tooltip: true,
            // tooltip: {
            //    // id: ids.tooltip,
            //    template: (obj, common) => {
            //       return this.toolTip(obj, common);
            //    },
            //    on: {
            //       // When showing a larger image preview the tooltip sometime displays part of the image off the screen...this attempts to fix that problem
            //       onBeforeRender: function () {
            //          self.toolTipOnBeforeRender(this.getNode());
            //       },
            //       onAfterRender: function (data) {
            //          self.toolTipOnAfterRender(this.getNode());
            //       },
            //    },
            // },
            dragColumn: true,
            on: {
               onBeforeSelect: function (data, preserve) {
                  if (self.skippableColumns.indexOf(data.column) != -1) {
                     return false;
                  } else if (settings.isEditable) {
                     if (settings.detailsPage || settings.editPage) {
                        return true;
                     }

                     const currObject = self.datacollection.datasource;
                     const selectField = currObject.fields(
                        (f) => f.columnName === data.column
                     )[0];

                     if (selectField == null) return true;

                     const cellNode = this.getItemNode({
                        row: data.row,
                        column: data.column,
                     }),
                        rowData = this.getItem(data.row);

                     return selectField.customEdit(rowData, null, cellNode);
                  } else if (!settings.detailsPage && !settings.editPage)
                     return false;
               },
               onAfterSelect: (data, preserve) => {
                  // {ABObject} data
                  //            the selected object
                  // {bool} prevent
                  //        indicates whether the previous selection state should
                  //        be saved. (is multiselect and they are holding SHIFT)
                  if (this.settings.isEditable) {
                     if (this.settings.detailsPage || this.settings.editPage) {
                        return;
                     }
                     this.onAfterSelect(data, preserve);
                  }
               },
               // onBeforeEditStart: function (/*id*/) {
               //    // Not sure what this is suposed to check, but this condition
               //    // will always be false.
               //    if (!this.getItem(id) == "appbuilder_select_item") return false;
               // },
               onCheck: function (row, col, val) {
                  // Update checkbox data
                  if (col == "appbuilder_select_item") {
                     // do nothing because we will parse the table once we decide
                     // if we are deleting or updating rows
                     self.toggleUpdateDelete();
                  } else {
                     if (settings.isEditable) {
                        // get the field related to this col
                        const currObject = self.datacollection.datasource;
                        const selectField = currObject.fields(
                           (f) => f.columnName === col
                        )[0];

                        // if the colum is not the select item column move on to
                        // the next step to save
                        const state = {
                           value: val,
                        };
                        const editor = {
                           row: row,
                           column: col,
                           config: { fieldID: selectField?.id ?? null },
                        };

                        self.onAfterEditStop(state, editor);
                     } else {
                        const node = this.getItemNode({
                           row: row,
                           column: col,
                        });
                        const checkbox = node.querySelector(
                           'input[type="checkbox"]'
                        );

                        if (val == 1) {
                           checkbox.checked = false;
                        } else {
                           checkbox.checked = true;
                        }
                     }
                  }
               },
               onBeforeEditStop: function (state, editor) {
                  // Check if data loading is complete
                  const oldValue = state.old;
                  let newValue = state.value;
                  if (!Array.isArray(newValue)) newValue = [newValue];
                  if (
                     oldValue != null &&
                     oldValue != "" &&
                     // If options does not load completely, then Webix returns state.value as ['', '', '']
                     newValue.filter((val) => val != null && val != "").length <
                     1 &&
                     // Check if no data load to the option
                     editor.getPopup?.().getList?.().data?.find({}).length < 1
                  ) {
                     return false;
                  }
               },
               onAfterEditStop: (state, editor, ignoreUpdate) => {
                  if (this.validationError == false)
                     this.onAfterEditStop(state, editor, ignoreUpdate);
               },
               onValidationError: function () {
                  this.validationError = true;
               },
               onValidationSuccess: function () {
                  this.validationError = false;
               },

               // We are sorting with server side requests now so we can remove this
               // onAfterLoad: function () {
               //    _logic.onAfterLoad();
               // },
               onColumnResize: function (
                  columnName,
                  newWidth,
                  oldWidth,
                  user_action
               ) {
                  // if we resize the delete column we want to resize the last
                  // column but Webix will not allow since the column is split
                  const rightSplitItems = [
                     "appbuilder_view_detail",
                     "appbuilder_view_track",
                     "appbuilder_view_edit",
                     "appbuilder_trash",
                  ];

                  if (rightSplitItems.indexOf(columnName) != -1) {
                     // Block events so we can leave the delete column alone
                     this.blockEvent();
                     // keeps original width
                     this.setColumnWidth(columnName, oldWidth);
                     this.unblockEvent();
                     // Listen to events again

                     // find the last column's config
                     const column = self.getLastColumn();

                     columnName = column.id;

                     // determine if we are making the column larger or smaller
                     if (newWidth < oldWidth) {
                        newWidth = column.width + 40;
                        // add 40 because there is not any more space to drag so we
                        // will allow 40px increments
                     } else {
                        newWidth = column.width - (newWidth - 40);
                        // take the column's width and subtrack the difference of
                        // the expanded delet column drag
                     }
                     // we don't want columns to be smaller than 50 ?? do we ??
                     // I could be wrong maybe a checkbox could be smaller so this
                     // could change
                     if (newWidth < 50) {
                        newWidth = 50;
                     }
                     // minWidth is important because we are using fillspace:true
                     column.minWidth = newWidth;
                     // Sets the UI
                     this.setColumnWidth(columnName, newWidth);
                  }
                  // Saves the new width
                  if (user_action) {
                     self.onColumnResize(
                        columnName,
                        newWidth,
                        oldWidth,
                        user_action
                     );
                  }
               },
               onRowResize: (rowId) => {
                  // V2: we no longer do anything onRowResize()
                  // before we saved the row height in the record.
                  // this.onRowResize(rowId);
               },
               onBeforeColumnDrag: (sourceId, event) =>
                  !(this.skippableColumns.indexOf(sourceId) !== -1),
               onBeforeColumnDrop: (sourceId, targetId, event) =>
                  // Make sure we are not trying to drop onto one of our special
                  // columns ...
                  !(this.skippableColumns.indexOf(targetId) !== -1),
               onAfterColumnDrop: (sourceId, targetId, event) =>
                  this.onAfterColumnDrop(sourceId, targetId, event),
               // onAfterColumnShow: function (id) {
               //    // console.warn("!! ToDo: onAfterColumnShow()");
               //    // $$(self.webixUiId.visibleFieldsPopup).showField(id);
               // },
               // onAfterColumnHide: function (id) {
               //    // console.warn("!! ToDo: onAfterColumnHide()");
               //    // $$(self.webixUiId.visibleFieldsPopup).hideField(id);
               // },

               onHeaderClick: (id, e, node) => {
                  /* if (settings.configureHeaders) */
                  this.onHeaderClick(id, e, node);
               },
            },
         };
      }

      uiFilter() {
         return this.view.filterHelper.ui();

         // make sure onFilterData is now .emit()ed instead of passing in a callback.
      }

      /**
       * @method uiToolbar()
       * Return the webix definition for the toolbar row for our Grids.
       * @return {json}
       */
      uiToolbar() {
         const ids = this.ids;
         const self = this;

         return {
            view: "toolbar",
            id: ids.toolbar,
            hidden: true,
            css: "ab-data-toolbar",
            cols: [
               {
                  view: "button",
                  id: ids.buttonMassUpdate,
                  css: "webix_transparent",
                  label: this.label("Edit"),
                  icon: "fa fa-pencil-square-o",
                  type: "icon",
                  disabled: true,
                  autowidth: true,
                  click: function () {
                     self.toolbarMassUpdate(this.$view);
                  },
               },
               {
                  view: "button",
                  id: ids.buttonDeleteSelected,
                  css: "webix_transparent",
                  label: this.label("Delete"),
                  icon: "fa fa-trash",
                  type: "icon",
                  disabled: true,
                  autowidth: true,
                  click: function () {
                     self.toolbarDeleteSelected(this.$view);
                  },
               },
               {
                  view: "button",
                  id: ids.buttonFilter,
                  css: "webix_transparent",
                  label: this.label("Filters"),
                  icon: "fa fa-filter",
                  type: "icon",
                  autowidth: true,
                  click: function () {
                     self.toolbarFilter(this.$view);
                  },
               },
               {
                  view: "button",
                  id: ids.buttonSort,
                  css: "webix_transparent",
                  label: this.label("Sort"),
                  icon: "fa fa-sort",
                  type: "icon",
                  autowidth: true,
                  click: function () {
                     self.toolbarSort(this.$view);
                  },
               },
               {
                  view: "button",
                  id: ids.buttonExport,
                  css: "webix_transparent",
                  label: this.label("Export"),
                  icon: "fa fa-print",
                  type: "icon",
                  autowidth: true,
                  click: function () {
                     self.toolbarExport(this.$view);
                  },
               },
               {},
               {
                  id: ids.globalSearchToolbar,
                  view: "search",
                  placeholder: this.label("Search..."),
                  on: {
                     onTimedKeyPress: () => {
                        const searchText = $$(
                           ids.globalSearchToolbar
                        ).getValue();

                        this.view.filterHelper.externalSearchText(searchText);
                     },
                  },
               },
            ],
         };
      }

      ui() {
         const _uiGrid = {
            id: this.ids.table,
            type: "space",
            borderless: true,
            rows: [
               {},
               {
                  view: "label",
                  label: this.label("Select an object to load."),
                  inputWidth: 200,
                  align: "center",
               },
               {},
            ],
         };

         const settings = this.settings;

         if (this.datacollection || settings.dataviewID !== "") {
            _uiGrid.padding = settings.padding;
            _uiGrid.rows = [];
            if (settings.showToolbar) {
               _uiGrid.rows.push(this.uiToolbar());
            }
            if (this.settings.gridFilter.filterOption) {
               _uiGrid.rows.push(this.uiFilter());
            }

            _uiGrid.rows.push(this.uiDatatable());
         }

         const _ui = super.ui([_uiGrid]);

         delete _ui.type;

         return _ui;
      }

      async init(AB, accessLevel = 2) {
         if (AB) await super.init(AB);

         const self = this;
         const ids = this.ids;

         // WORKAROUND : Where should we define this ??
         // For include PDF.js
         const abWebix = AB.Webix;

         abWebix.codebase = "";
         abWebix.cdn = "/js/webix";

         // this shows the options to Hide, Filter, sort , etc...
         // only in Designer?
         // PopupHeaderEditComponent.init({
         //    onClick: _logic.callbackHeaderEdit, // be notified when there is a change in the hidden fields
         // });

         // NOTE: register the onAfterRender() here, so it only registers
         // one.
         const $DataTable = this.getDataTable();

         let throttleCustomDisplay = null;
         let scrollStarted = null;

         if (!$DataTable) return;

         abWebix.extend($DataTable, abWebix.ProgressBar);

         $DataTable.config.accessLevel = accessLevel;

         if (accessLevel < 2) $DataTable.define("editable", false);

         const settings = this.settings;

         const customDisplays = (data) => {
            const CurrentObject = this.datacollection?.datasource;

            if (!CurrentObject || !$DataTable.data) return;

            const displayRecords = [];

            const verticalScrollState = $DataTable.getScrollState().y,
               rowHeight = $DataTable.config.rowHeight,
               startRecIndex = Math.floor(verticalScrollState / rowHeight),
               endRecIndex = startRecIndex + $DataTable.getVisibleCount();

            let index = 0;

            $DataTable.data.order.each((id) => {
               if (id != null && startRecIndex <= index && index <= endRecIndex)
                  displayRecords.push(id);

               index++;
            });

            let editable = settings.isEditable;

            if ($DataTable.config.accessLevel < 2) editable = false;

            CurrentObject.customDisplays(
               data,
               this.AB._App,
               $DataTable,
               displayRecords,
               editable
            );
         };

         $DataTable.attachEvent("onAfterRender", function (data) {
            $DataTable.resize();

            if (throttleCustomDisplay) clearTimeout(throttleCustomDisplay);

            throttleCustomDisplay = setTimeout(() => {
               if (scrollStarted) clearTimeout(scrollStarted);
               customDisplays(this.data);
            }, 350);

            AB.ClassUI.CYPRESS_REF($DataTable);
            Object.keys(ids).forEach((key) => {
               const $el = $$(ids[key]);
               if ($el) {
                  AB.ClassUI.CYPRESS_REF($el);
               }
            });
         });

         // we have some data types that have custom displays that don't look
         // right after scrolling large data sets we need to call customDisplays
         // again
         $DataTable.attachEvent("onScroll", function () {
            if (scrollStarted) clearTimeout(scrollStarted);

            if (throttleCustomDisplay) clearTimeout(throttleCustomDisplay);

            scrollStarted = setTimeout(() => {
               customDisplays(this.data);
            }, 1500);
         });
         $DataTable.attachEvent("onAfterScroll", function () {
            if (throttleCustomDisplay) clearTimeout(throttleCustomDisplay);

            throttleCustomDisplay = setTimeout(() => {
               if (scrollStarted) clearTimeout(scrollStarted);
               customDisplays(this.data);
            }, 350);
         });

         // Process our onItemClick events.
         // this is a good place to check if our delete/trash icon was clicked.
         $DataTable.attachEvent("onItemClick", function (id, e, node) {
            // make sure we have an object selected before processing this.
            const dc = self.datacollection;
            const CurrentObject = dc?.datasource;

            if (!CurrentObject) return;

            if (settings.isEditable === 0) {
               $DataTable.getItem(id);
            }
            // if this was our edit icon:
            // console.log(e.target.className);
            if (e === "auto" || e.target.className.indexOf("eye") > -1) {
               // View a Details Page:
               self.changePage(dc, id, settings.detailsPage);
               self.toggleTab(settings.detailsTab, this);
            } else if (e.target.className.indexOf("pencil") > -1) {
               self.changePage(dc, id, settings.editPage);
               self.toggleTab(settings.editTab, this);
            } else if (e.target.className.indexOf("track") > -1)
               self.emit("object.track", CurrentObject, id.row);
            // App.actions.openObjectTrack(CurrentObject, id.row);
            else if (e.target.className.indexOf("clear-combo-value") > -1) {
               const clearValue = {};

               clearValue[id.column] = "";

               const updateRow = async () => {
                  try {
                     await CurrentObject.model().update(id.row, clearValue);
                  } catch (err) {
                     self.AB.notify.developer(err, {
                        context: "ABViewGridComponent.onItemClick",
                        message: "Error updating item",
                        obj: CurrentObject.toObj(),
                        id: id.row,
                     });
                  }
               };

               updateRow();
            }
            // if this was our trash icon:
            else if (e.target.className.indexOf("trash") > -1) {
               // If the confirm popup is showing, then skip to show a new one
               if (!this._deleteConfirmPopup) {
                  this._deleteConfirmPopup = abWebix.confirm({
                     title: self.label("Delete data"),
                     text: self.label("Do you want to delete this row?"),
                     callback: (result) => {
                        delete this._deleteConfirmPopup;
                        if (result) {
                           const deleteRow = async () => {
                              try {
                                 const response =
                                    await CurrentObject.model().delete(id.row);

                                 if (response.numRows > 0) {
                                    $DataTable.remove(id);
                                    $DataTable.clearSelection();
                                 } else
                                    abWebix.alert({
                                       text: self.label(
                                          "No rows were effected.  This does not seem right."
                                       ),
                                    });
                              } catch (err) {
                                 self.AB.notify.developer(err, {
                                    context: "ABViewGridComponent.onItemClick",
                                    message: "Error deleting item",
                                    obj: CurrentObject.toObj(),
                                    id: id.row,
                                 });

                                 //// TODO: what do we do here?
                              }
                           };

                           deleteRow();
                        }

                        $DataTable.clearSelection();

                        return true;
                     },
                  });
               }
            } else if (settings.detailsPage.length) {
               // If an icon wasn't selected but a details page is set
               // view the details page
               self.changePage(dc, id, settings.detailsPage);
               self.toggleTab(settings.detailsTab, this);
            } else if (settings.editPage.length) {
               // If an icon wasn't selected but an edit page is set
               // view the edit page
               self.changePage(dc, id, settings.editPage);
               self.toggleTab(settings.editTab, this);
            }
         });

         // ABViewGrid Original init();
         if (settings.showToolbar) {
            if (
               settings.massUpdate ||
               settings.isSortable ||
               settings.isExportable ||
               (settings.gridFilter &&
                  settings.gridFilter.filterOption &&
                  settings.gridFilter.userFilterPosition === "toolbar")
            )
               $$(ids.toolbar).show();

            if (!settings.massUpdate) {
               $$(ids.buttonMassUpdate).hide();
               $$(ids.buttonDeleteSelected).hide();
            }

            if (!settings.allowDelete) $$(ids.buttonDeleteSelected).hide();

            if (settings.gridFilter) {
               if (
                  settings.gridFilter.filterOption !== 1 ||
                  settings.gridFilter.userFilterPosition !== "toolbar"
               )
                  $$(ids.buttonFilter).hide();

               if (
                  settings.gridFilter.filterOption === 3 &&
                  settings.gridFilter.globalFilterPosition === "single"
               )
                  $DataTable.hide();

               if (settings.gridFilter.isGlobalToolbar)
                  $$(ids.globalSearchToolbar).show();
               else $$(ids.globalSearchToolbar).hide();

               if (settings.gridFilter.filterOption)
                  this.view.filterHelper.init(this.AB);
            }

            if (!settings.isSortable) $$(ids.buttonSort).hide();

            if (!settings.isExportable) $$(ids.buttonExport).hide();
         }

         if (settings.hideHeader) this.hideHeader();

         const dc =
            this.datacollection ||
            this.AB.datacollectionByID(settings.dataviewID);

         if (!this._isDatacollectionLoaded) this.datacollectionLoad(dc);

         // Make sure
         this._gridSettings =
            this._gridSettings ||
            (await this.AB.Storage.get(this.keyStorageSettings)) ||
            {};

         if (dc?.datasource) {
            // TRANSITION: ABViewGrid_orig line 862 ...

            this.linkPage.init({
               view: this.view,
               datacollection: dc,
            });

            this.refreshHeader();
         }
      }

      /**
       * @method busy()
       * Indicate that our datatable is currently busy loading/processing
       * data.
       */
      busy() {
         this.getDataTable()?.showProgress?.({ type: "icon" });
      }

      /**
       * @method callbackFilterData()
       * Process the provided filter options from our filterHelper.
       * @param {fn} fnFilter
       *        A function that returns true/false for each row of data
       *        to determine if is should exist.
       * @param {array} filterRules
       *        Any Filter Rules added by the user.
       */
      callbackFilterData(fnFilter, filterRules = []) {
         const ids = this.ids;
         const $ButtonFilter = $$(ids.buttonFilter);

         if ($ButtonFilter) {
            const onlyFilterRules = this.view.filterHelper.filterRules();

            $ButtonFilter.define("badge", onlyFilterRules?.rules?.length ?? 0);
            $ButtonFilter.refresh();
         }

         const dc = this.datacollection;

         dc.filterCondition(filterRules);
         dc.reloadData();
      }

      async callbackSortData(sortRules = []) {
         const $buttonSort = $$(this.ids.buttonSort);

         $buttonSort.define("badge", sortRules.length || null);
         $buttonSort.refresh();

         const gridElem = this.getDataTable();

         if (gridElem.data.find({}).length < gridElem.data.count()) {
            try {
               // NOTE: Webix's client sorting does not support dynamic loading.
               // If the data does not be loaded, then load all data.
               await this.datacollection.reloadData(0, 0);
            } catch (err) {
               this.AB.notify.developer(err, {
                  context:
                     "ABViewGrid:callbackSortData(): Error perform datacollection.reloadData()",
               });
            }
         }

         // wait until the grid component will done to repaint UI
         setTimeout(() => {
            gridElem.sort((a, b) =>
               this.PopupSortDataTableComponent.sort(a, b)
            );
         }, 777);
      }

      /**
       * @method changePage()
       * Helper method to switch to another View.
       * @param {ABDataCollection} dv
       *        The DataCollection we are working with.
       * @param {obj} rowItem
       *        the { row:#, column:{string} } of the item that was clicked.
       * @param {ABViewPage.uuid} page
       *        The .uuid of the ABViewPage/ABViewTab we are to swtich to.
       *
       */
      changePage(dv, rowItem, page) {
         const rowId = rowItem?.row ?? null;

         // Set cursor to data view
         if (dv) dv.setCursor(rowId);

         // Pass settings to link page module
         if (this.linkPage) this.linkPage.changePage(page, rowId);
         else super.changePage(page);
      }

      columnConfig(headers = []) {
         this.settings.columnConfig = headers;
      }
      /**
       * @method datacollectionLoad()
       * Assign an ABDataCollection to this component to use instead of any
       * provided .dataviewID in our settings.
       * NOTE: this primarily happens in the ABDesigner's Object Workspace.
       * @param {ABDataCollection} dc
       */
      datacollectionLoad(dc) {
         const oldDC = this.datacollection;
         this.datacollection = dc;

         const CurrentObject = dc?.datasource;
         const $DataTable = this.getDataTable();

         if ($DataTable) {
            // preventing too many handlers
            if (!this.__handler_dc_busy) {
               this.__handler_dc_busy = () => {
                  this.busy();
               };

               this.__handler_dc_ready = () => {
                  this.ready();
                  this.populateGroupData();
               };

               this.__handler_dc_loadData = () => {
                  this.populateGroupData();
               };
            }

            if (oldDC) {
               // remove our listeners from the previous DC
               oldDC.removeListener("initializingData", this.__handler_dc_busy);
               oldDC.removeListener("initializedData", this.__handler_dc_ready);
               oldDC.removeListener("loadData", this.__handler_dc_loadData);
            }

            if (dc) {
               if (dc.datacollectionLink && dc.fieldLink)
                  dc.bind($DataTable, dc.datacollectionLink, dc.fieldLink);
               else dc.bind($DataTable);

               // making sure we only have 1 registered listener on this dc
               dc.removeListener("initializingData", this.__handler_dc_busy);
               dc.on("initializingData", this.__handler_dc_busy);
               dc.removeListener("initializedData", this.__handler_dc_ready);
               dc.on("initializedData", this.__handler_dc_ready);
               dc.removeListener("loadData", this.__handler_dc_loadData);
               dc.on("loadData", this.__handler_dc_loadData);
               this.grouping();

               this._isDatacollectionLoaded = true;
            } else $DataTable.unbind();

            // Be sure to pass on our CurrentObject to our dependent components.
            if (CurrentObject) {
               this.view.filterHelper.objectLoad(CurrentObject);
               this.PopupMassUpdateComponent.objectLoad(
                  CurrentObject,
                  this.getDataTable()
               );
               this.PopupSortDataTableComponent.objectLoad(CurrentObject);

               this.PopupExport.objectLoad(CurrentObject);
               this.PopupExport.dataCollectionLoad(dc);
               this.PopupExport.setGridComponent(this.getDataTable());
               this.PopupExport.setHiddenFields(this.settings.hiddenFields);
               this.PopupExport.setFilename(this.view.label);
            }
         }
      }

      /**
       * @function enableUpdateDelete
       *
       * disable the update or delete buttons in the toolbar if there no items selected
       * we will make this externally accessible so we can call it from within the datatable component
       */
      disableUpdateDelete() {
         $$(this.ids.buttonMassUpdate)?.disable();
         $$(this.ids.buttonDeleteSelected)?.disable();
         // externally indicate that no rows are selected
         this.emit("selection.cleared");
      }

      /**
       * @function enableUpdateDelete
       *
       * enable the update or delete buttons in the toolbar if there are any items selected
       * we will make this externally accessible so we can call it from within the datatable component
       */
      enableUpdateDelete() {
         $$(this.ids.buttonMassUpdate)?.enable();
         $$(this.ids.buttonDeleteSelected)?.enable();
         // externally indicate that a row has been selected
         this.emit("selection");
      }

      freezeDeleteColumn() {
         // we are going to always freeze the delete column if the datatable
         // is wider than the container so it is easy to get to
         return this.getDataTable().define("rightSplit", this.columnSplitRight);
      }

      /**
       * @method getDataTable()
       * return the webix grid component.
       * @return {webix.grid}
       */
      getDataTable() {
         return $$(this.ids.datatable);
      }

      /**
       * @method getLastColumn
       * return the last column of a datagrid that is resizeable
       */
      getLastColumn() {
         const $DataTable = this.getDataTable();

         let lastColumn = {};

         // Loop through each columns config to find out if it is in the split 1 region and set it as the last item...then it will be overwritten by next in line
         $DataTable.eachColumn((columnId) => {
            const columnConfig = $DataTable.getColumnConfig(columnId);

            if (columnConfig.split === 1) lastColumn = columnConfig;
         });

         return lastColumn;
      }

      /**
       * @method grouping()
       * perform any grouping operations
       */
      grouping() {
         if (!this.settings.groupBy) return;

         const $treetable = this.getDataTable();

         // map: {
         //     votes:["votes", "sum"],
         //     title:["year"]
         // }
         const baseGroupMap = {};
         const CurrentObject = this.datacollection.datasource;

         CurrentObject.fields().forEach((f) => {
            switch (f.key) {
               case "number":
                  baseGroupMap[f.columnName] = [f.columnName, "sum"];

                  break;

               case "calculate":
               case "formula":
                  baseGroupMap[f.columnName] = [
                     f.columnName,
                     (prop, listData) => {
                        if (!listData) return 0;

                        let sum = 0;

                        listData.forEach((r) => {
                           // we only want numbers returned so pass `true` as third param
                           // to signify that this is part of a grouping row
                           sum += f.format(r, false, true) * 1;
                        });

                        // simulate reformat from ABFieldFormulaCore
                        if (!f.fieldLink || f.fieldLink.key === "calculate")
                           return sum;
                        else {
                           const rowDataFormat = {};

                           rowDataFormat[f.fieldLink.columnName] = sum;

                           return f.fieldLink.format(rowDataFormat);
                        }
                     },
                  ];

                  break;

               case "connectObject":
                  baseGroupMap[f.columnName] = [
                     f.columnName,
                     (prop, listData) => {
                        if (!listData || !listData.length) return 0;

                        let count = 0;

                        listData.forEach((r) => {
                           const valRelation = r[f.relationName()];

                           // array
                           if (valRelation?.length) count += valRelation.length;
                           // object
                           else if (valRelation) count += 1;
                        });

                        return count;
                     },
                  ];

                  break;

               default:
                  baseGroupMap[f.columnName] = [
                     f.columnName,
                     function (prop, listData) {
                        if (!listData || !listData.length) return 0;

                        let count = 0;

                        listData.forEach((r) => {
                           const val = prop(r);

                           // count only exists data
                           if (val) count += 1;
                        });

                        return count;
                     },
                  ];

                  break;
            }
         });

         // set group definition
         // $DataTable.define("scheme", {
         //    $group: {
         //       by: settings.groupBy,
         //       map: groupMap
         //    }
         // });

         // NOTE: https://snippet.webix.com/e3a2bf60
         let groupBys = (this.settings.groupBy || "")
            .split(",")
            .map((g) => g.trim());
         // Reverse the array NOTE: call .group from child to root
         groupBys = groupBys.reverse();

         groupBys.forEach((colName, gIndex) => {
            const groupMap = this.AB.cloneDeep(baseGroupMap);

            let by;

            // Root
            if (gIndex === groupBys.length - 1) by = colName;
            // Sub groups
            else {
               by = (row) => {
                  let byValue = row[colName];

                  for (let i = gIndex + 1; i < groupBys.length; i++) {
                     byValue = `${row[groupBys[i]]} - ${byValue}`;
                  }

                  return byValue;
               };

               // remove parent group data
               groupBys.forEach((gColName) => {
                  if (gColName !== colName) groupMap[gColName] = [gColName];
               });
            }

            $treetable.data.group({
               by: by,
               map: groupMap,
            });
         });
      }

      hideHeader() {
         const $DataTable = this.getDataTable();

         $DataTable.define("header", false);
         $DataTable.refresh();
      }

      /**
       * @function onAfterColumnDrop
       * When an editor drops a column to save a new column order
       * @param {string} sourceId
       *        the columnName of the item dragged
       * @param {string} targetId
       *        the columnName of the item dropped on
       * @param {event} event
       */
      async onAfterColumnDrop(sourceId, targetId, event) {
         const settings = this.settings;
         const columnConfig = this.localSettings();

         // Reorder our current columnConfig
         // We know what was moved and what item it has replaced/pushed forward
         // so first we want to splice the item moved out of the array of fields
         // and store it so we can put it somewhere else
         let itemMoved = null;
         let oPos = 0; // original position

         for (let i = 0; i < columnConfig.length; i++)
            if (columnConfig[i].id == sourceId) {
               itemMoved = columnConfig[i];
               columnConfig.splice(i, 1);
               oPos = i;

               break;
            }
         // once we have removed/stored it we can find where its new position
         // will be by looping back through the array and finding the item it
         // is going to push forward
         for (let j = 0; j < columnConfig.length; j++)
            if (columnConfig[j].id == targetId) {
               // if the original position was before the new position we will
               // follow webix's logic that the drop should go after the item
               // it was placed on
               if (oPos <= j) j++;

               columnConfig.splice(j, 0, itemMoved);

               break;
            }

         // special case: dropped on end and need to update .fillspace
         // if (j == columnConfig.length - 1) {
         //    if (columnConfig[j - 1].fillspace) {
         //       columnConfig[j - 1].fillspace = false;
         //       columnConfig[j].fillspace = true;
         //    }
         // }

         // if we allow local changes
         this.localSettings(columnConfig);

         if (settings.saveLocal) this.localSettingsSave();

         // Now emit this event, in case an external object is wanting to
         // respond to this: ABDesigner.objectBuilder, Interface  Designer,
         // we send back an array[ ABField.id, ...] in the order we have
         // them.
         this.emit(
            "column.order",
            columnConfig.map((c) => c.fieldID)
         );

         this.refreshHeader();

         // CurrentObject.fieldReorder(sourceId, targetId)
         //    .then(() => {
         //       // reset each column after a drop so we do not have multiple fillspace and minWidth settings
         //       var editiable = settings.isEditable;
         //       if ($DataTable.config.accessLevel < 2) {
         //          editiable = false;
         //       }
         //       var columnHeaders = CurrentObject.columnHeaders(true, editiable);
         //       columnHeaders.forEach(function (col) {
         //          if (col.id == sourceId && col.fillspace == true) {
         //             columnHeader.fillspace = false;
         //             columnHeader.minWidth = columnHeader.width;
         //          }
         //       });

         //       _logic.callbacks.onColumnOrderChange(CurrentObject);
         //       // freeze columns:
         //       let frozenColumnID =
         //          settings.frozenColumnID != null
         //             ? settings.frozenColumnID
         //             : CurrentObject.workspaceFrozenColumnID;
         //       if (frozenColumnID != "") {
         //          $DataTable.define(
         //             "leftSplit",
         //             $DataTable.getColumnIndex(frozenColumnID) + columnSplitLeft
         //          );
         //       } else {
         //          $DataTable.define("leftSplit", columnSplitLeft);
         //       }
         //       _logic.freezeDeleteColumn();
         //       $DataTable.refreshColumns();
         //    })
         //    .catch((err) => {
         //       OP.Error.log("Error saving new column order:", {
         //          error: err,
         //       });
         //    });
      }

      /**
       * @function onAfterEditStop
       * When an editor is finished.
       * @param {json} state
       * @param {} editor
       * @param {} ignoreUpdate
       * @return
       */
      async onAfterEditStop(state, editor, ignoreUpdate) {
         // state:   {value: "new value", old: "old value"}
         // editor:  { column:"columnName", row:ID, value:'value', getInputNode:fn(), config:{}, focus: fn(), getValue: fn(), setValue: function, getInputNode: function, render: function…}

         const $DataTable = this.getDataTable();

         // if you don't edit an empty cell we just need to move on
         if (
            (!state.old && state.value === "") ||
            (state.old === "" && state.value === "")
         ) {
            $DataTable?.clearSelection();

            return false;
         }

         const CurrentObject = this.datacollection.datasource;

         if (editor.config)
            switch (editor.config.editor) {
               case "number":
                  state.value = parseFloat(state.value);

                  break;

               case "datetime":
                  state.value = state.value.getTime();

                  if (state && state.old && state.old.getTime)
                     state.old = state.old.getTime();

                  break;

               default:
               // code block
            }

         // lets make sure we are comparing things properly:
         // reduce newValue and oldValue down to PK if they were objects
         let newVal = state.value;
         if (newVal) {
            newVal = newVal[CurrentObject.PK()] || newVal;
         }
         let oldVal = state.old;
         if (oldVal) {
            oldVal = oldVal[CurrentObject.PK()] || oldVal;
         }

         // NOTE: != vs !== :
         // want to handle when newVal = "3" and oldVal = 3
         // that is why we don't use !== so that we convert the values into
         // the same case.
         if (newVal != oldVal) {
            const item = $DataTable?.getItem(editor.row);

            item[editor.column] = state.value;

            $DataTable.removeCellCss(item.id, editor.column, "webix_invalid");
            $DataTable.removeCellCss(
               item.id,
               editor.column,
               "webix_invalid_cell"
            );

            //maxlength field
            const f = CurrentObject.fieldByID(editor.config?.fieldID);
            if (
               f?.settings.maxLength &&
               state.value.length > f.settings.maxLength
            ) {
               this.AB.alert({
                  title: this.label("Limit max length"),
                  text: this.label(
                     "You can enter a maximum of " +
                     f.settings.maxLength +
                     " characters"
                  ),
               });
               $DataTable.addCellCss(
                  item.id,
                  editor.column,
                  "webix_invalid_cell"
               );
               $DataTable.refresh(editor.row);
               $DataTable.clearSelection();
               return false;
            }

            const validator = CurrentObject.isValidData(item);

            if (validator.pass()) {
               const patch = {};
               patch[editor.column] = item[editor.column];

               const ab = this.AB;

               try {
                  await CurrentObject.model().update(item.id, patch);

                  if ($DataTable.exists(editor.row)) {
                     $DataTable.updateItem(editor.row, item);
                     $DataTable.clearSelection();
                     $DataTable.refresh(editor.row);
                  }
               } catch (err) {
                  ab.notify.developer(err, {
                     context: "ABViewGrid:onAfterEditStop(): Error saving item",
                     item,
                     editor,
                     state,
                     object: CurrentObject.toObj(),
                  });

                  $DataTable.clearSelection();

                  if (
                     ab.Validation.isGridValidationError(
                        err,
                        editor.row,
                        $DataTable
                     )
                  ) {
                     // Do we reset the value?
                     // item[editor.column] = state.old;
                     // $DataTable.updateItem(editor.row, item);
                  } else {
                     // this was some other Error!
                  }
               }
               // CurrentObject.model()
               //    .update(item.id, item)
               //    .then(() => {
               //       if ($DataTable.exists(editor.row)) {
               //          $DataTable.updateItem(editor.row, item);
               //          $DataTable.clearSelection();
               //          $DataTable.refresh(editor.row);
               //       }
               //    })
               //    .catch((err) => {
               //       OP.Error.log("Error saving item:", {
               //          error: err
               //       });

               //       $DataTable.clearSelection();
               //       if (
               //          OP.Validation.isGridValidationError(
               //             err,
               //             editor.row,
               //             $DataTable
               //          )
               //       ) {
               //          // Do we reset the value?
               //          // item[editor.column] = state.old;
               //          // $DataTable.updateItem(editor.row, item);
               //       } else {
               //          // this was some other Error!
               //       }
               //    });
            } else validator.updateGrid(editor.row, $DataTable);
         } else $DataTable?.clearSelection();

         return false;

         // var item = $$(self.webixUiId.objectDatatable).getItem(editor.row);

         // self.updateRowData(state, editor, ignoreUpdate)
         //    .fail(function (err) { // Cached
         //       item[editor.column] = state.old;
         //       $$(self.webixUiId.objectDatatable).updateItem(editor.row, item);
         //       $$(self.webixUiId.objectDatatable).refresh(editor.row);

         //       // TODO : Message

         //       $$(self.webixUiId.objectDatatable).hideProgress();
         //    })
         //    .then(function (result) {
         //       if (item) {
         //          item[editor.column] = state.value;

         //          if (result && result.constructor.name === 'Cached' && result.isUnsync())
         //             item.isUnsync = true;

         //          $$(self.webixUiId.objectDatatable).updateItem(editor.row, item);
         //       }

         //       // TODO : Message

         //       $$(self.webixUiId.objectDatatable).hideProgress();
         //    });
      }

      /**
       * @function onAfterSelect
       * This is when a user clicks on a cell.  We use the onAfterSelect to
       * trigger a normal .editCell() if there isn't a custom editor for this field.
       * @param {json} data webix cell data
       * @return
       */
      onAfterSelect(data /*, preserve */) {
         // data: {row: 1, column: "name", id: "1_name", toString: function}
         // data.row: ABObject.id
         // data.column => columnName of the field

         // Normal update data
         this.getDataTable()?.editCell(data.row, data.column);
      }

      /**
       * @function onColumnResizeResize
       * This is when a user adjusts the size of a column
       * @param {} columnName
       * @param {int} newWidth
       * @param {int} oldWidth
       * @param {} user_action
       * @return
       */
      async onColumnResize(columnName, newWidth, oldWidth, user_action) {
         // update the settings

         let requireRefresh = false;

         const ab = this.AB;

         if (newWidth < 30) {
            newWidth = 30;
            requireRefresh = true;

            ab.Webix.message({
               type: "info",
               text: this.label("minimum column width is {0}", [30]),
               expire: 1000,
            });
         }

         const localSettings = this.localSettings();

         if (localSettings) {
            const header = localSettings.find((h) => h.id == columnName);

            if (header) {
               header.width = newWidth;

               delete header.adjust;
            }
         }

         this.localSettings(localSettings);

         if (this.settings.saveLocal) {
            await this.localSettingsSave();
            // for (const item in GridSettings) {
            //    GridSettings[item].forEach((item) => {
            //       // we cannot include field info because of the cicular structure
            //       if (item?.footer?.field) {
            //          delete item.footer.field;
            //       }
            //    });
            // }
            // await this.AB.Storage.set(this.keyStorageSettings, GridSettings);
         }

         // refresh the display
         if (requireRefresh) this.refreshHeader();

         this.freezeDeleteColumn();

         // this.getDataTable().refreshColumns();

         // TODO: allow external app to respond in special cases:
         // eg: ABDesigner object workspace, interface builder, etc...
         this.emit("column.resize", columnName, newWidth, oldWidth);
      }

      /**
       * @method onHeaderClick
       * process the user clicking on the header for one of our columns.
       */
      onHeaderClick(id, e, node) {
         if (this.skippableColumns.indexOf(id.column) !== -1) return false;

         // save our EditNode & EditField:
         // this.EditNode = node;

         const EditField = this.datacollection.datasource.fields(
            (f) => f.columnName === id.column
         )[0];
         // if (this.EditField) {
         //    // show the popup
         //    PopupHeaderEditComponent.show(node, this.EditField);
         // }

         this.emit("column.header.clicked", node, EditField);

         return false;
      }

      /**
       * @method onShow()
       * perform any preparations necessary when showing this component.
       */
      onShow() {
         super.onShow();

         // make sure our grid is properly .adjust()ed to the screen.
         this.getDataTable()?.adjust();

         const dv = this.datacollection;

         if (dv)
            ["changeCursor", "cursorStale", "cursorSelect"].forEach((key) => {
               this.eventAdd({
                  emitter: dv,
                  eventName: key,
                  listener: this.handler_select.bind(this),
               });
            });
      }

      /**
       * @method ready()
       * Indicate that our datatable is currently ready for operation.
       */
      ready() {
         const dc = this.datacollection;
         if (
            this.isCustomGroup &&
            dc?.dataStatus != dc?.dataStatusFlag.initialized
         )
            return;

         this.getDataTable()?.hideProgress?.();
      }

      /**
       * @function refreshHeader()
       *
       * refresh the header for the table apart from the refresh() command
       * @param {bool} ignoreLocal
       *        Should we ignore our local settings and build directly from
       *        our config settings?
       */
      refreshHeader(ignoreLocal = this.ignoreLocal) {
         // columnSplitRight = 0;
         // wait until we have an Object defined:
         const CurrentObject = this.datacollection.datasource;

         if (!CurrentObject) return;

         const ids = this.ids;
         const $DataTable = $$(ids.datatable);

         if (!$DataTable) return;

         const accessLevel = $DataTable.config.accessLevel;

         $DataTable.define("leftSplit", 0);
         $DataTable.define("rightSplit", 0);

         let rowHeight = 0;

         CurrentObject.imageFields().forEach((image) => {
            const settings = image.getSettings();

            if (settings.useHeight && settings.imageHeight > rowHeight)
               rowHeight = settings.imageHeight;
         });

         if (rowHeight) $DataTable.define("rowHeight", rowHeight);

         // $DataTable.clearAll();

         const settings = this.settings;

         let editable = settings.isEditable;

         if ($DataTable.config.accessLevel < 2) editable = false;

         //// update DataTable structure:
         // get column list from our local settings
         const objColumnHeaders = CurrentObject.columnHeaders(
            true,
            editable,
            // TRANSITION: moving these from .columnHeaders() to here:
            [], //settings.summaryColumns,
            [], //settings.countColumns,
            [] //settings.hiddenFields
         );

         let columnHeaders = this.localSettings();

         const ab = this.AB;

         // if that is empty, pull from our settings.columnConfig
         if (!columnHeaders || ignoreLocal)
            columnHeaders = ab.cloneDeep(this.settings.columnConfig);

         // if that is empty for some reason, rebuild from our CurrentObject
         if (!columnHeaders || columnHeaders.length === 0)
            columnHeaders = objColumnHeaders;

         // sanity check:
         // columnHeaders can't contain a column that doesn't exist in objColumHeaders:
         // (eg: a field might have been removed but localStorage doesn't know that )
         const objColumnHeaderIDs = objColumnHeaders.map((h) => h.fieldID);

         columnHeaders = columnHeaders.filter(
            (c) => objColumnHeaderIDs.indexOf(c.fieldID) > -1
         );

         // default our columnConfig values to our columnHeaders:
         columnHeaders.forEach((c) => {
            // we want to overwrite our default settings with anything stored
            // in local storage
            const origCol = objColumnHeaders.find(
               (h) => h.fieldID === c.fieldID
            );

            // none of our functions can be stored in localStorage, so scan
            // the original column and attach any template functions to our
            // stashed copy.
            // also the suggest for selects and connected fields may contain a
            // function so go ahead and copy the original suggest to the column
            Object.keys(origCol).forEach((k) => {
               if (typeof origCol[k] === "function" || k === "suggest") {
                  c[k] = origCol[k];
               }
            });

            const f = CurrentObject.fieldByID(c.fieldID);

            if (!f) return;

            // if it's a hidden field:
            if (settings.hiddenFields.indexOf(f.columnName) > -1) {
               c.hidden = true;
            }

            // add summary footer:
            if (settings.summaryColumns.indexOf(f.id) > -1) {
               if (f.key == "calculate" || f.key == "formula")
                  c.footer = { content: "totalColumn", field: f };
               else c.footer = { content: "summColumn" };
            }
            // or add the count footer
            else if (settings.countColumns.indexOf(f.id) > -1)
               c.footer = { content: "countColumn" };
         });

         let localSettings = this.localSettings();

         if (!localSettings || ignoreLocal) {
            this.localSettings(columnHeaders);

            localSettings = columnHeaders;
         }

         columnHeaders = ab.cloneDeep(localSettings);

         const fieldValidations = [];
         const rulePops = [];

         columnHeaders.forEach((col) => {
            col.fillspace = false;

            // parse the rules because they were stored as a string
            // check if rules are still a string...if so lets parse them
            if (col.validationRules) {
               if (typeof col.validationRules === "string") {
                  col.validationRules = JSON.parse(col.validationRules);
               }

               if (col.validationRules.length) {
                  const validationUI = [];

                  // there could be more than one so lets loop through and build the UI
                  col.validationRules.forEach((rule) => {
                     const Filter = ab.filterComplexNew(
                        col.id /*+ "_" + webix.uid()*/
                     );
                     // add the new ui to an array so we can add them all at the same time
                     validationUI.push(Filter.ui);
                     // store the filter's info so we can assign values and settings after the ui is rendered
                     fieldValidations.push({
                        filter: Filter,
                        view: Filter.ids.querybuilder,
                        columnName: col.id,
                        validationRules: rule.rules,
                        invalidMessage: rule.invalidMessage,
                     });
                  });

                  // create a unique view id for popup
                  const popUpId =
                     ids.rules + "_" + col.id; /* + "_" + webix.uid() */

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
            }

            // group header
            if (
               settings.groupBy &&
               (settings.groupBy || "").indexOf(col.id) > -1
            ) {
               const groupField = CurrentObject.fieldByID(col.fieldID);

               if (groupField)
                  col.template = (obj, common) => {
                     // return common.treetable(obj, common) + obj.value;
                     if (obj.$group) {
                        const rowData = ab.cloneDeep(obj);

                        rowData[groupField.columnName] = rowData.value;

                        return (
                           common.treetable(obj, common) +
                           groupField.format(rowData)
                        );
                     } else return groupField.format(obj);
                  };
            }
         });

         if (fieldValidations.length) {
            // we need to store the rules for use later so lets build a container array
            const complexValidations = [];

            fieldValidations.forEach((f) => {
               // init each ui to have the properties (app and fields) of the object we are editing
               // f.filter.applicationLoad(CurrentObject.application);
               f.filter.fieldsLoad(CurrentObject.fields());
               // now we can set the value because the fields are properly initialized
               f.filter.setValue(f.validationRules);
               // if there are validation rules present we need to store them in a lookup hash
               // so multiple rules can be stored on a single field
               if (!Array.isArray(complexValidations[f.columnName]))
                  complexValidations[f.columnName] = [];

               // now we can push the rules into the hash
               complexValidations[f.columnName].push({
                  filters: f.filter.getValue(),
                  values: $DataTable.getSelectedItem[f.columnName],
                  invalidMessage: f.invalidMessage,
               });
            });

            const rules = {};

            // store the rules in a data param to be used later
            $DataTable.$view.complexValidations = complexValidations;
            // use the lookup to build the validation rules
            Object.keys(complexValidations).forEach((key) => {
               rules[key] = (value, data) => {
                  // default valid is true
                  let isValid = true;
                  let invalidMessage = "";

                  $DataTable.$view.complexValidations[key].forEach((filter) => {
                     // convert rowData from { colName : data } to { id : data }
                     const newData = {};

                     (CurrentObject.fields() || []).forEach((field) => {
                        newData[field.id] = data[field.columnName];
                     });

                     // for the case of "this_object" conditions:
                     if (data.uuid) {
                        newData["this_object"] = data.uuid;
                        data["this_object"] = data.uuid;
                     }

                     // use helper funtion to check if valid
                     // const ruleValid = filter.filters(newData);
                     const filterComplex = ab.filterComplexNew(
                        `rule-validate-${key}`
                     );
                     filterComplex.fieldsLoad(
                        CurrentObject.fields(),
                        CurrentObject
                     );
                     const ruleValid = filterComplex.isValid(
                        data,
                        filter.filters
                     );

                     // if invalid we need to tell the field
                     if (!ruleValid) {
                        isValid = false;
                        invalidMessage = filter.invalidMessage;
                     }
                  });

                  // we also need to define an error message
                  if (!isValid)
                     ab.Webix.message({
                        type: "error",
                        text: invalidMessage,
                     });

                  return isValid;
               };
            });
            // define validation rules
            $DataTable.define("rules", rules);
            // store the array of view ids on the webix object so we can get it later
            $DataTable.config.rulePops = rulePops;
            $DataTable.refresh();
         } else {
            // check if the previous datatable had rule popups and remove them
            if ($DataTable.config.rulePops)
               $DataTable.config.rulePops.forEach((popup) => {
                  if ($$(popup)) $$(popup).destructor();
               });
            // remove any validation rules from the previous table
            $DataTable.define("rules", {});
            $DataTable.refresh();
         }

         const addedColumns = [];
         // {array} the .id of the columnHeaders we add based upon our settings.
         // this will help us pick the lastColumn that is part of the
         // object.

         if (settings.labelAsField) {
            // console.log(CurrentObject);
            columnHeaders.unshift({
               id: "appbuilder_label_field",
               header: "Label",
               fillspace: true,
               template: (obj) => CurrentObject.displayData(obj),
               // css: { 'text-align': 'center' }
            });
            addedColumns.push("appbuilder_label_field");
         }

         if (settings.massUpdate && accessLevel === 2) {
            columnHeaders.unshift({
               id: "appbuilder_select_item",
               header: { content: "masterCheckbox", contentId: "mch" },
               width: 40,
               template: "<div class='singleSelect'>{common.checkbox()}</div>",
               css: { "text-align": "center" },
            });
            this.columnSplitLeft = 1;
            addedColumns.push("appbuilder_select_item");
         } else this.columnSplitLeft = 0;

         if (settings.detailsPage !== "" && !settings.hideButtons) {
            columnHeaders.push({
               id: "appbuilder_view_detail",
               header: "",
               width: 40,
               template: (obj, common) =>
                  "<div class='detailsView'><span class='webix_icon fa fa-eye'></span></div>",
               css: { "text-align": "center" },
            });
            // columnSplitRight++;
            addedColumns.push("appbuilder_view_detail");
         }

         if (settings.trackView !== 0 && accessLevel === 2) {
            columnHeaders.push({
               id: "appbuilder_view_track",
               header: "",
               width: 40,
               template:
                  "<div class='track'><span class='track fa fa-history'></span></div>",
               css: { "text-align": "center", cursor: "pointer" },
            });
            // columnSplitRight++;
            addedColumns.push("appbuilder_view_track");
         }

         if (
            settings.editPage !== "" &&
            !settings.hideButtons &&
            accessLevel === 2
         ) {
            columnHeaders.push({
               id: "appbuilder_view_edit",
               header: "",
               width: 40,
               template: "<div class='edit'>{common.editIcon()}</div>",
               css: { "text-align": "center" },
            });
            // columnSplitRight++;
            addedColumns.push("appbuilder_view_edit");
         }

         if (settings.allowDelete && accessLevel === 2) {
            columnHeaders.push({
               id: "appbuilder_trash",
               header: "",
               width: 40,
               template: "<div class='trash'>{common.trashIcon()}</div>",
               css: { "text-align": "center" },
            });
            // columnSplitRight++;
            addedColumns.push("appbuilder_trash");
         }

         // find our last displayed column (that isn't one we added);
         let lastCol = null;

         for (let i = columnHeaders.length - 1; i >= 0; i--) {
            const col = columnHeaders[i];
            if (!col.hidden && addedColumns.indexOf(col.id) === -1) {
               lastCol = col;
               break;
            }
         }

         if (lastCol) {
            lastCol.fillspace = true;
            lastCol.minWidth = lastCol.width;
            lastCol.width = 150; // set a width for last column but by default it will fill the available space or use the minWidth to take up more
         }

         $DataTable.refreshColumns(columnHeaders);

         // the addedColumns represent the additional icons that can be added.
         this.columnSplitRight = addedColumns.length;

         // the .massUpdate gets added to Left so don't include that in split right:
         if (addedColumns.indexOf("appbuilder_select_item") > -1)
            this.columnSplitRight -= 1;
         // .columnSplitRight can't be < 0
         if (this.columnSplitRight < 0) this.columnSplitRight = 0;

         // freeze columns:
         const frozenColumnID = settings.frozenColumnID;

         if (frozenColumnID != "")
            $DataTable.define(
               "leftSplit",
               $DataTable.getColumnIndex(frozenColumnID) + 1
            );
         else $DataTable.define("leftSplit", this.columnSplitLeft);

         this.freezeDeleteColumn();
         $DataTable.refreshColumns();
         // }
      }

      /**
       * localSettingsSave()
       * Persist our current working copy of our GridSettings to localStorage.
       * @return {Promise}
       */
      async localSettingsSave() {
         const ab = this.AB;
         const savedLocalSettings =
            (await ab.Storage.get(this.keyStorageSettings)) || {};
         const _gridSettings = this._gridSettings;

         savedLocalSettings[this.settingsID()] = _gridSettings[
            this.settingsID()
         ]
            ? _gridSettings[this.settingsID()]
            : [];

         for (const item in savedLocalSettings) {
            savedLocalSettings[item].forEach((item) => {
               // we cannot include field info because of the cicular structure
               if (item?.footer?.field) delete item.footer.field;
            });
         }

         await ab.Storage.set(this.keyStorageSettings, savedLocalSettings);
      }

      /**
       * @method localSettings()
       * An interface method to handle get/set operations on our local GridSettings
       * storage.
       * .localStorage() : a getter to return the current value
       * .localStorage(value) : a setter to save value as our current value.
       * @param {various} value
       *        the value to set to our settings.
       * @return {various}
       */
      localSettings(value = null) {
         const _gridSettings = this._gridSettings;

         if (value) _gridSettings[this.settingsID()] = value;
         else return _gridSettings[this.settingsID()];
      }

      /**
       * @method selectRow()
       * Select the grid row that correspondes to the provided rowData.
       * @param {json} rowData
       *        A key=>value hash of data that matches an entry in the grid.
       *        rowData.id should match an existing entry.
       */
      selectRow(rowData) {
         let id = rowData?.id ?? rowData;
         if (this.__timeout_selectRow) {
            clearTimeout(this.__timeout_selectRow);
         }
         this.__timeout_selectRow = setTimeout(() => {
            const $DataTable = this.getDataTable();
            if (!$DataTable) return;

            if (!id) $DataTable.unselect();
            else if ($DataTable.exists(id)) {
               $DataTable.select(id, false);
               $DataTable.showItem(id);
            } else $DataTable.select(null, false);

            this.__timeout_selectRow = null;
         }, 15);
      }

      /**
       * @method settingsID()
       * return the unique key for this Grid + object combo to store data
       * in our localStorage.
       * @return {string}
       */
      settingsID() {
         const CurrentObject = this.datacollection.datasource;

         return `${this.id}-${CurrentObject ? CurrentObject.id : "0"}`;
      }

      /**
       * @method toggleTab()
       * recursively toggle tabs into view once a user chooses a detail/edit view
       * to display.
       * @param {ABView.id} parentTab
       * @param {webix.view} wb
       */
      toggleTab(parentTab, wb) {
         // find the tab || if we didn't pass and id we may have passed a domNode
         const tab =
            wb.getTopParentView().queryView({ id: parentTab }) || $$(parentTab);

         if (!tab) return;

         // set the tabbar to to the tab
         const tabbar = tab.getParentView().getParentView();

         if (!tabbar) return;

         // if we have reached the top we won't have a tab
         if (tabbar.setValue) tabbar.setValue(parentTab);

         // find if it is in a multiview of a tab
         const nextTab = tabbar.queryView({ view: "scrollview" }, "parent");

         // if so then do this again
         if (nextTab) this.toggleTab(nextTab, wb);
      }

      toggleUpdateDelete() {
         const $DataTable = this.getDataTable();

         let checkedItems = 0;

         $DataTable.data.each((obj) => {
            if (
               typeof obj !== "undefined" &&
               Object.prototype.hasOwnProperty.call(
                  obj,
                  "appbuilder_select_item"
               ) &&
               obj.appbuilder_select_item === 1
            )
               checkedItems++;
         });

         if (checkedItems > 0) this.enableUpdateDelete();
         else this.disableUpdateDelete();
      }

      toolbarDeleteSelected($view) {
         const $DataTable = this.getDataTable();
         const CurrentObject = this.datacollection.datasource;
         const deleteTasks = [];

         $DataTable.data.each((row) => {
            if (
               typeof row !== "undefined" &&
               // row.hasOwnProperty("appbuilder_select_item") &&
               Object.prototype.hasOwnProperty.call(
                  row,
                  "appbuilder_select_item"
               ) &&
               row.appbuilder_select_item === 1
            ) {
               // NOTE: store a fn() to run later.
               deleteTasks.push(() => CurrentObject.model().delete(row.id));
            }
         });

         const abWebix = this.AB.Webix;

         if (deleteTasks.length > 0)
            abWebix.confirm({
               title: this.label("Delete Multiple Records"),
               text: this.label(
                  "Are you sure you want to delete the selected records?"
               ),
               callback: async (result) => {
                  if (result) {
                     // Now run those functions
                     await Promise.all(deleteTasks.map((t) => t()));

                     // Anything we need to do after we are done.
                     this.disableUpdateDelete();
                  }
               },
            });
         else
            abWebix.alert({
               title: this.label("No Records Selected"),
               text: this.label(
                  "You need to select at least one record...did you drink your coffee today?"
               ),
            });
      }

      toolbarFilter($view) {
         this.view.filterHelper.showPopup($view);
      }

      toolbarSort($view) {
         this.PopupSortDataTableComponent.show($view);
      }

      toolbarExport($view) {
         this.PopupExport.show($view);
      }

      toolbarMassUpdate($view) {
         this.PopupMassUpdateComponent.show($view);
      }

      /**
       * @function toolTip()
       *
       * Retrieve the items toolTip
       */
      toolTip(obj, common) {
         const CurrentObject = this.datacollection.datasource;
         const imageFieldColNames = CurrentObject.imageFields().map(
            (f) => f.columnName
         );

         let tip = "";

         const columnName = common.column.id.replace(" ", "");

         if (Array.isArray(obj[columnName])) {
            obj[columnName].forEach(function (o) {
               if (o.text) tip += o.text + "<br/>";
            });
         } else if (
            typeof obj[columnName + "__relation"] !== "undefined" &&
            typeof obj[columnName] === "number"
         )
            tip = obj[columnName + "__relation"].text;
         else if (typeof obj[columnName + "__relation"] !== "undefined") {
            let relationData = obj[columnName + "__relation"];

            if (!Array.isArray(relationData)) relationData = [relationData];

            (relationData || []).forEach(function (o) {
               if (o) tip += o.text + "<br/>";
            });
         } else if (imageFieldColNames.indexOf(columnName) !== -1) {
            if (!obj[columnName]) {
               return "";
            } else {
               // TODO: we need to get this URL from the ABFieldImage object!
               tip = `<img style='max-width: 500px; max-height: 500px;' src='/file/${obj[columnName]}' />`;
            }
         } else if (common.column.editor === "date")
            tip = common.column.format(obj[columnName]);
         else if (common.column.editor === "richselect")
            CurrentObject.fields().forEach((f) => {
               if (f.columnName === columnName) {
                  if (f.settings.options) {
                     f.settings.options.forEach((o) => {
                        if (o.id === obj[columnName]) {
                           tip = o.text;
                        }
                     });
                  }
               }
            });
         else tip = obj[columnName];

         if (!tip) return "";
         else return tip;
      }

      /**
       * @function toolTipOnBeforeRender()
       *
       * Add visibility "hidden" to all tooltips before render so we can move to a new location without the visual jump
       */
      toolTipOnBeforeRender(node) {
         // var node = $$(ids.tooltip).getNode();
         node.style.visibility = "hidden";
      }

      /**
       * @function toolTipOnAfterRender()
       *
       * If the tooltip is displaying off the screen we want to try to reposition it for a better experience
       */
      toolTipOnAfterRender(node) {
         // var node = $$(ids.tooltip).getNode();
         if (node.firstChild?.nodeName === "IMG") {
            setTimeout(() => {
               const imgBottom =
                  parseInt(node.style.top.replace("px", "")) + 500;
               const imgRight =
                  parseInt(node.style.left.replace("px", "")) + 500;

               if (imgBottom > window.innerHeight) {
                  const imgOffsetY = imgBottom - window.innerHeight;
                  const newTop =
                     parseInt(node.style.top.replace("px", "")) - imgOffsetY;
                  node.style.top = newTop + "px";
               }

               if (imgRight > window.innerWidth) {
                  const imgOffsetX = imgRight - window.innerWidth;
                  const newLeft =
                     parseInt(node.style.left.replace("px", "")) - imgOffsetX;
                  node.style.left = newLeft + "px";
               }

               node.style.visibility = "visible";
            }, 250);
         } else node.style.visibility = "visible";
      }

      get isCustomGroup() {
         const dc = this.datacollection;
         const CurrentObject = dc?.datasource;
         const $DataTable = this.getDataTable();

         return (
            $DataTable?.config?.view === "treetable" && !CurrentObject?.isGroup
         );
      }

      populateGroupData() {
         if (!this.isCustomGroup) return;

         this.busy();

         const dc = this.datacollection;
         const $DataTable = this.getDataTable();

         $DataTable.clearAll();
         $DataTable.parse(dc.getData() || []);

         this.grouping();
         this.ready();
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


/***/ },

/***/ 80236
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
() {

/* (ignored) */

/***/ },

/***/ 88306
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
() {

/* (ignored) */

/***/ },

/***/ 81258
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
() {

/* (ignored) */

/***/ }

}]);
//# sourceMappingURL=AppBuilder_platform_plugins_included_index_js.0bd35a839f72e9ff120a.js.map