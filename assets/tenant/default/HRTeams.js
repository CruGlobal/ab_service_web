/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ABViewOrgChartTeams.js":
/*!********************************!*\
  !*** ./ABViewOrgChartTeams.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ABViewOrgChartTeamsCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ABViewOrgChartTeamsCore */ "./ABViewOrgChartTeamsCore.js");
/* harmony import */ var _ABViewOrgChartTeamsComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ABViewOrgChartTeamsComponent */ "./ABViewOrgChartTeamsComponent.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABView, ABViewComponent) {
   const ABViewOrgChartTeamsCore = (0,_ABViewOrgChartTeamsCore__WEBPACK_IMPORTED_MODULE_0__["default"])(ABView);
   const ABViewOrgChartTeamsComponent = (0,_ABViewOrgChartTeamsComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(ABViewComponent);
   return class ABViewOrgChartTeams extends ABViewOrgChartTeamsCore {
      /**
       * @method component()
       * return a UI component based upon this view.
       * @return {obj} UI component
       */
      component() {
         return new ABViewOrgChartTeamsComponent(this);
      }
   };
}


/***/ }),

/***/ "./ABViewOrgChartTeamsComponent.js":
/*!*****************************************!*\
  !*** ./ABViewOrgChartTeamsComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_CustomProcessTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/CustomProcessTasks.js */ "./libs/CustomProcessTasks.js");
/* harmony import */ var _components_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/constants.js */ "./components/constants.js");
/* harmony import */ var _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dcContainer.js */ "./components/dcContainer.js");
/* harmony import */ var _components_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/utils.js */ "./components/utils.js");
/* harmony import */ var _components_data_panel_staffDataPanel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/data_panel/staffDataPanel.js */ "./components/data_panel/staffDataPanel.js");
/* harmony import */ var _components_data_panel_rcDataPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/data_panel/rcDataPanel.js */ "./components/data_panel/rcDataPanel.js");








const DC_OFFSET = 20;
const TEAM_CHART_MAX_DEPTH = 10; // prevent inifinite loop
const FORM_LABEL_WIDTH = 130;
const PROGRESS_STATUS_WIDTH = 80;
const PROGRESS_STATUS_DELAY = 500;
const PROGRESS_STATUS_KEY_COMMON = "common";
const PROGRESS_STATUS_KEY_PRINCIPAL = "principal";
const PROGRESS_STATUS_VALUE_COMMON_INIT_PAGE = "Initializing page";
const PROGRESS_STATUS_VALUE_COMMON_INIT_DCs = "Initializing DCs";
const PROGRESS_STATUS_VALUE_COMMON_CHANGE_ENTITY = "Changing to a new entity";
const TIMEOUT_RETRY_PAGEDATA = 15000;

//TODO (Guy): These should be ABDesigner settings.
const CONTENT_LINK_DATAPANEL_COLUMNNAME = "custrecord_ccc_team_assign_emp_id";
const DATAPANEL_EMERITUS_STATUS_COLUMNNAME = "custentity_ccc_emeritus_status";
const DATAPANEL_ORG_STATUS_COLUMNNAME = "custentity_ccc_org_status";
const EXTERNAL_SUPPORT_COLUMNNAME = "custrecord_whq_team_is_external_support";
const RESPONSIBILITY_ASSIGNMENT_COLUMNNAME =
   "custrecord_ccc_team_resp_assignment_id";
const ORG_SENT_STATUSES = ["9", "12", "15"];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewComponent) {
   return class ABViewOrgChartTeamsComponent extends ABViewComponent {
      constructor(baseView, idBase, ids) {
         super(
            baseView,
            idBase || `ABViewOrgChart_${baseView.id}`,
            Object.assign(
               {
                  chartView: "",
                  chartContent: "",
                  dataPanel: "",
                  dataPanelButton: "",
                  dataPanelPopup: "",
                  dataPanelRcSearch: "",
                  dataPanelRcFilterMode: "",
                  dataPanelRcList: "",
                  filterButton: "",
                  filterPopup: "",
                  filterForm: "",
                  contentForm: "",
                  contentFormData: "",
                  progressStatus: "",
                  teamForm: "",
                  teamFormCode: "",
                  teamFormPopup: "",
                  teamFormStrategy: "",
                  teamFormSubmit: "",
                  teamFormTitle: "",
               },
               ids
            )
         );

         // Private parameters
         this._utils = new _components_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.AB);
         this._resources = [
            __webpack_require__.e(/*! import() */ "js_orgchart-webcomponents_js").then(__webpack_require__.bind(__webpack_require__, /*! ./js/orgchart-webcomponents.js */ "./js/orgchart-webcomponents.js")),
            __webpack_require__.e(/*! import() */ "styles_orgchart-webcomponents_css").then(__webpack_require__.bind(__webpack_require__, /*! ./styles/orgchart-webcomponents.css */ "./styles/orgchart-webcomponents.css")),
            __webpack_require__.e(/*! import() */ "styles_team-widget_css").then(__webpack_require__.bind(__webpack_require__, /*! ./styles/team-widget.css */ "./styles/team-widget.css")),
         ];
         this._dataPanels = {
            staff: new _components_data_panel_staffDataPanel_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.AB, this.ids, this.settings),
            rc: new _components_data_panel_rcDataPanel_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.AB, this.ids, this.settings),
         };
         this._selectedDataPanel = this._dataPanels.staff;
         this.__orgchart = null;
         this.__filters = {
            inactive: 0,
         };
         this._OrgChart = null;
         this._initialized = false;
         this._promisePageData = null;
         this._isPageDataTerminated = false;
         this._progressStatusQueues = [];
         this._chartData = null;
         this._strategyCodeOpts = [];
         this._strategyOpts = [];
         this._fnContentDragEnd = (event) => {
            // event.target.style.opacity = "1";
         };
         this._fnContentDragOver = (event) => {
            event.preventDefault();
            event.stopPropagation();
         };
         this._fnContentDragStart = (event) => {
            event.stopPropagation();
            this._$eventTarget = event.target;
            const data = this._dataPanels.staff.getSavedDragData(event);
            data.source = event.target.dataset.source;
            // switch ($eventTarget.className) {
            //    case "webix_list_item":
            //       data.pk = dataset.pk;
            //       data.contentLinkedFieldID = dataset.contentLinkedFieldId;
            //       break;
            //    default:
            //       data.source = dataset.source;
            //       break;
            // }
            event.dataTransfer.setData("text/plain", JSON.stringify(data));
            // $eventTarget.style.opacity = "0.5";
         };
         this._fnRcDragStart = (event) => {
            event.stopPropagation();
            event.dataTransfer.setData("id", event.target.id);
            event.dataTransfer.setData("isRC", 1);
         };
         this._fnRcDrop = async (event) => {
            const dataTransfer = event.dataTransfer;
            if (dataTransfer.getData("isRC") != 1) return;

            event.stopPropagation();

            const $rcRecord = document.getElementById(
               dataTransfer.getData("id")
            );

            this._fnBusyRecord($rcRecord);

            const teamObj = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.team.datasource;
            const fieldTeamRC = teamObj.fieldByID(
               _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEAM_RESPONSIBILITY_CENTRE_FIELD_ID
            );
            const fieldRcTeam = fieldTeamRC.fieldLink;
            const rcObj = fieldRcTeam.object;

            // RC id
            const rcId = $rcRecord.dataset.id;
            const rcData = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.responsibilityCenter.getData(
               (item) => item.id == rcId
            )[0];
            rcData[fieldRcTeam.columnName] =
               rcData[fieldRcTeam.columnName] || [];

            // Team id
            const $group = event.currentTarget;
            const teamId = this.teamRecordID(
               $group.parentElement.parentElement.id
            );
            const teamData = this.datacollection.getData(
               (item) => item.id == teamId
            )[0];

            // Check exists
            if (
               rcData?.[fieldRcTeam.columnName].find(
                  (team) => team?.id ?? team == teamId
               ) ||
               teamData?.[fieldTeamRC.columnName].find(
                  (rc) => rc?.id ?? rc == rcId
               )
            ) {
               this.AB.Webix.alert({
                  title: this.label("Already Exists"),
                  text: this.label("Team is already assigned to this RC."),
                  ok: this.label("OK"),
               });
               return;
            }

            // Relate RC to Team
            if (
               rcData[fieldRcTeam.columnName].find(
                  (team) => team.id ?? team == teamId
               ) == null
            ) {
               rcData[fieldRcTeam.columnName] =
                  rcData[fieldRcTeam.columnName] || [];
               rcData[fieldRcTeam.columnName].push(teamId);
               rcData[fieldRcTeam.relationName()] =
                  rcData[fieldRcTeam.relationName()] ?? [];
               rcData[fieldRcTeam.relationName()].push(teamData);
            }

            const $newRcDom = this._addRcToGroup(teamData, rcData);
            this._fnBusyRecord($newRcDom);

            // Relate Team to RC
            teamData[fieldTeamRC.columnName] =
               teamData[fieldTeamRC.columnName] ?? [];
            teamData[fieldTeamRC.columnName].push(rcData.id);

            const relatedRC = this.AB.cloneDeep(rcData);
            // Prevent circular reference
            delete relatedRC[fieldRcTeam.relationName()];
            teamData[fieldTeamRC.relationName()] =
               teamData[fieldTeamRC.relationName()] ?? [];
            teamData[fieldTeamRC.relationName()].push(relatedRC);

            try {
               await teamObj.model().update(teamData.id, teamData);
            } catch (err) {
               $newRcDom.remove();
               console.error(err);
            }

            this._fnReadyRecord($rcRecord);
            this._fnReadyRecord($newRcDom);

            // TODO: remove exists RC?
         };

         this._fnContentDrop = async (event) => {
            const dataTransfer = event.dataTransfer;
            if (
               dataTransfer.getData("isnode") == 1 ||
               dataTransfer.getData("isRC") == 1
            )
               return;

            event.stopPropagation();
            const $teamRecord =
               this._$eventTarget?.closest(".team-group-record");
            this._fnBusyRecord($teamRecord);

            const settings = this.settings;
            const dropContentToCreate = settings.dropContentToCreate === 1;
            const teamObj = this.datacollection.datasource;
            const teamObjPK = teamObj.PK();
            const contentFieldLink = teamObj.fieldByID(
               settings.contentField
            ).fieldLink;
            const contentObj = contentFieldLink.object;
            const contentDateStartColumnName = contentObj.fieldByID(
               settings.contentFieldDateStart
            ).columnName;
            const contentDateEndColumnName = contentObj.fieldByID(
               settings.contentFieldDateEnd
            ).columnName;
            const contentGroupByField = contentObj.fieldByID(
               settings.contentGroupByField
            );
            const contentGroupByColumnName = contentGroupByField.columnName;
            const contentPrincipleColumnName = this.AB.definitionByID(
               this.settings.contentPrincipleField
            ).columnName;
            const contentFieldLinkColumnName = contentFieldLink.columnName;
            const $group = event.currentTarget;
            const $content = $group.parentElement;
            const newGroupDataPK = $group.dataset.pk;
            const newTeamDataPK = JSON.parse(
               $content.parentElement.dataset.source
            )._rawData[teamObjPK];
            const parsedDataTransfer = JSON.parse(
               dataTransfer.getData("text/plain")
            );
            let updatedValue = parsedDataTransfer.source;
            const { dataPK, contentLinkedFieldID } =
               this._dataPanels.staff.extractDragData(parsedDataTransfer);
            const draggedNodes = [];
            let isRefreshed = true;
            try {
               if (!updatedValue) {
                  // This is a drop from Employee list (new assignment)
                  const contentLinkedColumnName =
                     contentObj.fieldByID(contentLinkedFieldID).columnName;
                  const pendingPromises = [];
                  const newDate = new Date();

                  // Employee can have multiple assignments but not the same team, so don't close
                  // existing
                  const $contentRecords =
                     $content.getElementsByClassName("team-group-record");
                  let isUpdated = false;
                  for (const $contentRecord of $contentRecords) {
                     const contentValue = JSON.parse(
                        $contentRecord.dataset.source
                     );
                     if (contentValue[contentLinkedColumnName] == dataPK) {
                        if (!isUpdated) {
                           if (
                              contentValue[contentGroupByColumnName] ==
                              newGroupDataPK
                           ) {
                              isRefreshed = false;
                              isUpdated = true;
                              continue;
                           } else if (
                              this._isLessThanDay(
                                 new Date(
                                    contentValue[contentDateStartColumnName]
                                 )
                              )
                           ) {
                              contentValue[contentGroupByColumnName] =
                                 newGroupDataPK;
                              pendingPromises.push(
                                 this.updateData(
                                    _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                                    this._parseFormValueByType(
                                       _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                                       contentValue,
                                       contentValue
                                    )
                                 )
                              );
                              if (contentValue[contentPrincipleColumnName] == 1)
                                 this._addUserFormQueue(contentValue);
                              this._fnBusyTeamRecord($contentRecord);
                              draggedNodes.push($contentRecord);
                              isRefreshed = true;
                              isUpdated = true;
                              continue;
                           }
                        }
                        contentValue[contentDateEndColumnName] = newDate;
                        pendingPromises.push(
                           this.updateData(
                              _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                              this._parseFormValueByType(
                                 _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                                 contentValue,
                                 contentValue
                              )
                           )
                        );
                        this._fnBusyRecord($contentRecord);
                        draggedNodes.push($contentRecord);
                        isRefreshed = true;
                     }
                  }
                  if (!isUpdated) {
                     updatedValue = {};
                     updatedValue[contentDateStartColumnName] = newDate;
                     updatedValue[contentLinkedColumnName] = dataPK;
                     updatedValue[contentFieldLinkColumnName] = newTeamDataPK;
                     updatedValue[contentGroupByColumnName] = newGroupDataPK;
                     const customProcessTasks = new _libs_CustomProcessTasks_js__WEBPACK_IMPORTED_MODULE_0__["default"](
                        this,
                        this._parseFormValueByType(
                           _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                           updatedValue,
                           updatedValue
                        ),
                        draggedNodes.map(
                           ($draggedNode) => $draggedNode.id.split("_")[1]
                        )
                     );
                     pendingPromises.push(
                        (async () => {
                           const $draggedNode =
                              await this._createUIContentRecord(
                                 updatedValue,
                                 ""
                              );
                           $group
                              .querySelector(".team-group-content")
                              .appendChild($draggedNode);
                           this._fnBusyRecord($draggedNode);
                           draggedNodes.push($draggedNode);
                        })(),
                        (async () =>
                           await this.createData(
                              _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                              await customProcessTasks.run()
                           ))()
                     );
                  }
                  updatedValue = (await Promise.all(pendingPromises))[
                     pendingPromises.length - 1
                  ];
               } else {
                  updatedValue = JSON.parse(updatedValue);
                  const $contentRecords =
                     $content.getElementsByClassName("team-group-record");
                  const dataPanelDCs = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.dataPanels;
                  for (const dataPanelDC of dataPanelDCs) {
                     const dataPanelLinkedColumnName =
                        dataPanelDC.datasource.connectFields(
                           (connectField) =>
                              connectField.datasourceLink === contentObj
                        )[0].columnName;
                     for (const $contentRecord of $contentRecords) {
                        const contentRecord = JSON.parse(
                           $contentRecord.dataset.source
                        );
                        if (
                           (updatedValue.id != contentRecord.id &&
                              contentRecord[dataPanelLinkedColumnName] ==
                                 updatedValue[dataPanelLinkedColumnName]) ||
                           (updatedValue.id == contentRecord.id &&
                              updatedValue[contentGroupByColumnName] ==
                                 $group.dataset.pk)
                        ) {
                           this._fnReadyRecord($teamRecord);
                           return;
                        }
                     }
                  }

                  // This is move form another team node
                  // Move the child node to the target
                  const $draggedNode = document.querySelector(
                     `#${this.contentNodeID(updatedValue.id)}`
                  );
                  $draggedNode.parentNode.removeChild($draggedNode);
                  $group
                     .querySelector(".team-group-content")
                     .appendChild($draggedNode);
                  this._fnBusyRecord($draggedNode);
                  draggedNodes.push($draggedNode);
                  if (
                     !dropContentToCreate ||
                     (updatedValue[contentFieldLinkColumnName] ==
                        newTeamDataPK &&
                        this._isLessThanDay(
                           new Date(updatedValue[contentDateStartColumnName])
                        ))
                  ) {
                     updatedValue[contentFieldLinkColumnName] = newTeamDataPK;
                     updatedValue[contentGroupByColumnName] = newGroupDataPK;
                     updatedValue = await this.updateData(
                        _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                        this._parseFormValueByType(
                           _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                           updatedValue,
                           updatedValue
                        )
                     );
                     if (updatedValue[contentPrincipleColumnName] == 1)
                        this._addUserFormQueue(updatedValue);
                  } else {
                     const pendingPromises = [];
                     // TODO (Guy): Force update Date End with a current date.
                     updatedValue[contentDateEndColumnName] = new Date();
                     pendingPromises.push(
                        this.updateData(
                           _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                           this._parseFormValueByType(
                              _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                              updatedValue,
                              updatedValue
                           )
                        )
                     );
                     updatedValue[contentDateStartColumnName] =
                        updatedValue[contentDateEndColumnName];
                     const customProcessTasks = new _libs_CustomProcessTasks_js__WEBPACK_IMPORTED_MODULE_0__["default"](
                        this,
                        this._parseFormValueByType(
                           _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                           updatedValue,
                           updatedValue
                        ),
                        [updatedValue.id.toString()]
                     );
                     updatedValue[contentFieldLinkColumnName] = newTeamDataPK;
                     updatedValue[contentGroupByColumnName] = newGroupDataPK;
                     pendingPromises.push(
                        (async () =>
                           await this.createData(
                              _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                              await customProcessTasks.run()
                           ))()
                     );
                     updatedValue = (await Promise.all(pendingPromises))[
                        pendingPromises.length - 1
                     ];
                  }
                  this._fnReadyRecord($draggedNode);
               }
               if (isRefreshed) {
                  draggedNodes.forEach(($draggedNode) => {
                     $draggedNode.remove();
                  });
                  this._addContentRecordToGroup(updatedValue);
                  this._refreshDataPanel();
               }
            } catch (err) {
               // TODO (Guy): The update data error.
               console.error(err);
            }
            this._fnReadyRecord($teamRecord);
         };
         this._fnCreateNode = ($node, data) => {
            // set team id
            $node.dataset.id = data._rawData.id;

            // remove built in icon
            $node.querySelector(".title > i")?.remove();

            // customize
            if (data._rawData[EXTERNAL_SUPPORT_COLUMNNAME] === 1) {
               $node.style.margin = "0px 12px";
               $node.style.borderStyle = "solid";
               $node.style.borderColor = "#808080";
               $node.style.borderRadius = "20px";
               $node.style.borderWidth = "6px";
            }
            const $content = $node.children.item(1);
            $content.innerHTML = "";
            const contentGroupOptions = this._getDropZoneSections();
            const contentGroupOptionsLength = contentGroupOptions.length;
            if (data.filteredOut || contentGroupOptionsLength === 0) {
               // This node doesn't pass the filter, but it's children do so
               // simplify the display.
               $content.style.display = "none";
               return;
            }
            const settings = this.settings;
            const $nodeSpacer = element("div", "spacer");
            $content.appendChild($nodeSpacer);
            const nodeSpacerStyle = $nodeSpacer.style;
            nodeSpacerStyle.backgroundColor = "";
            for (const group of contentGroupOptions) {
               const $group = element("div", "team-group-section");
               $content.appendChild($group);
               const groupStyle = $group.style;
               groupStyle["minHeight"] = `${325 / contentGroupOptionsLength}px`;

               // TODO: should this be a config option
               const groupText = group.name;
               $group.setAttribute("data-pk", group.id);

               if (group.extraClass) $group.classList.add(group.extraClass);
               const $leaderIcon = element(
                  "span",
                  `team-group-title ${group.icon}`
               );
               $group.appendChild($leaderIcon);

               if (settings.showGroupTitle === 1) {
                  const $groupTitle = element("span", "team-group-title");
                  $groupTitle.appendChild(document.createTextNode(groupText));
                  $group.appendChild($groupTitle);
               }
               const $groupContent = element("div", "team-group-content");
               $group.appendChild($groupContent);
               if (settings.draggable === 1) {
                  $group.addEventListener("dragover", this._fnContentDragOver);
                  $group.addEventListener("drop", group.fnDrop);
               }
            }
            const dataID = this.teamRecordID(data.id);

            // Edit / Delete buttons of Team node
            let $sectionButton;
            if (this._roles.isHRG || this._roles.isAdmin) {
               $sectionButton = element("div", "team-button-section");
               $content.appendChild($sectionButton);
               const $editButton = element("div", "team-button");
               $editButton.append(element("i", "fa fa-pencil"));
               const $addButton = element("div", "team-button");
               $addButton.append(element("i", "fa fa-plus"));
               $sectionButton.append($editButton, $addButton);

               $addButton.onclick = () => {
                  this._showTeamFormPopup("Add", { __parentID: dataID });
               };
               $editButton.onclick = () =>
                  this._showTeamFormPopup(
                     "Edit",
                     this.datacollection.getData((e) => e.id == dataID)[0]
                  );
            }
            $node.querySelector(".title").ondblclick = () =>
               this._showTeamFormPopup(
                  "Edit",
                  this.datacollection.getData((e) => e.id == dataID)[0]
               );
            if (this.__filters.inactive == 1) {
               const isInactive = data.isInactive;
               const activeClass = isInactive ? "is-inactive" : "is-active";
               const $active = element("div", `team-button ${activeClass}`);
               const $span = element("span", "active-text");
               $span.innerHTML = isInactive ? "INACTIVE" : "ACTIVE";
               $active.append($span);
               $sectionButton?.append($active);
            }
            (async () => {
               if (
                  !(await this.teamCanDelete(
                     this.datacollection.getData((e) => e.id == dataID)[0]
                  ))
               )
                  return;
               const $deleteButton = element("div", "team-button");
               $deleteButton.append(element("i", "fa fa-trash"));
               $deleteButton.onclick = () =>
                  this.teamDelete(
                     this.datacollection.getData((e) => e.id == dataID)[0]
                  );
               $sectionButton?.append($deleteButton);
            })();
         };
         this._fnDropNode = async (event) => {
            this.busy();
            const eventDetail = event.detail;
            const dragedRecord = JSON.parse(
               eventDetail.draggedNode.dataset.source
            )._rawData;
            const dc = this.datacollection;
            dragedRecord[
               // Parent node definition.
               this._getLinkedColumnNameByConnectFieldID(this.settings.teamLink)
            ] = JSON.parse(eventDetail.dropZone.dataset.source)._rawData.id;
            try {
               await this.updateData(
                  dc,
                  this._parseFormValueByType(dc, dragedRecord, dragedRecord)
               );
            } catch (err) {
               // TODO (Guy): The update data error.
               console.error(err);
            }
            try {
               //TODO (Guy): This should update only the specific node.
               await this.refresh(false);
            } catch (err) {
               // TODO (Guy): The update data error.
               console.error(err);
            }
            this.ready();
         };

         this._fnChangeEntity = async () => {
            this._isPageDataTerminated = true;
            this._addProgressStatusQueue(
               PROGRESS_STATUS_KEY_COMMON,
               PROGRESS_STATUS_VALUE_COMMON_CHANGE_ENTITY
            );
            this._removeOrgChart();
            try {
               await this._utils.waitDOM();
               await Promise.all(
                  this._getAllDCs().map((dc) => this._utils.waitDCReady(dc))
               );
               // Wait until the next event loop.
               await Promise.resolve();
               // await this._promisePageData;
               this._isPageDataTerminated = false;
               await this.refresh();
            } catch (err) {
               // TODO (Guy): The update data error.
               console.error(err);
            }
            this._removeProgressStatusQueue(
               PROGRESS_STATUS_KEY_COMMON,
               PROGRESS_STATUS_VALUE_COMMON_CHANGE_ENTITY
            );
         };
         this._fnShowContentForm = (event) => {
            const self = this;
            const $teamRecord =
               event.currentTarget.closest(".team-group-record");
            const contentValue = JSON.parse(
               event.currentTarget.dataset.source ||
                  event.currentTarget.parentElement.dataset.source
            );
            for (const fieldID of self.settings.setEditableContentFields) {
               const field =
                  _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content.datasource.fieldByID(fieldID);

               // skip the Responsibility Assignment field
               // How can I do this more properly?
               if (field.columnName == RESPONSIBILITY_ASSIGNMENT_COLUMNNAME)
                  continue;

               if (field.key === "connectObject") {
                  const linkedDC = self
                     ._getAllDCs()
                     .find((dc) => dc.datasource === field.datasourceLink);
                  const linkedFieldPK = linkedDC.datasource.PK();
                  if (
                     linkedDC.getData(
                        (e) =>
                           e[linkedFieldPK] == contentValue[field.columnName]
                     ).length === 0
                  ) {
                     self.AB.Webix.alert({
                        title: `${self.label("Caution")}: ${self.label(
                           "Fetching Data"
                        )}`,
                        ok: self.label("Got it!"),
                        text: self.label(
                           "This assignment is still fetching incompletely. Please wait until it's done."
                        ),
                     });
                     return;
                  }
               }
            }
            const editContentFieldsToCreateNew =
               self.settings.editContentFieldsToCreateNew;
            const contentDateStartColumnName = self.AB.definitionByID(
               self.settings.contentFieldDateStart
            )?.columnName;
            const contentDateEndColumnName = self.AB.definitionByID(
               self.settings.contentFieldDateEnd
            )?.columnName;
            const contentPrincipleColumnName = self.AB.definitionByID(
               self.settings.contentPrincipleField
            ).columnName;
            const rules = {};
            const contentFormElements =
               self.settings.setEditableContentFields.map((fieldID) => {
                  const { element, rule } = self._createWebixUIFieldByFieldID(
                     fieldID,
                     contentValue
                  );
                  Object.assign(rules, rule);
                  return element;
               });
            contentFormElements.push({
               view: "button",
               value: self.label("Save"),
               css: "webix_primary",
               async click() {
                  const $contentFormData = $$(self.ids.contentFormData);
                  if (!$contentFormData.validate()) return;
                  let newFormData = self._parseFormValueByType(
                     _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                     contentValue,
                     Object.assign(
                        {},
                        contentValue,
                        $contentFormData.getValues()
                     )
                  );
                  const $contentForm = $$(self.ids.contentForm);
                  $contentForm.blockEvent();
                  $contentForm.$view.remove();
                  $contentForm.destructor();
                  if (
                     !self._checkIfDataChanged(
                        _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                        newFormData
                     )
                  )
                     return;
                  const teamDC = self.datacollection;
                  const dataID = newFormData.id;
                  const customProcessTasks = new _libs_CustomProcessTasks_js__WEBPACK_IMPORTED_MODULE_0__["default"](
                     self,
                     newFormData,
                     [dataID]
                  );
                  const isEnded =
                     new Date(newFormData[contentDateEndColumnName]) <=
                     new Date();
                  let isCreated =
                     !isEnded &&
                     !self._isLessThanDay(
                        new Date(contentValue[contentDateStartColumnName])
                     );
                  const isChangedToPrincipal =
                     contentValue[contentPrincipleColumnName] !=
                        newFormData[contentPrincipleColumnName] &&
                     newFormData[contentPrincipleColumnName] == 1;
                  const $progressStatus = $$(self.ids.progressStatus);
                  try {
                     if (isCreated) {
                        isCreated = false;
                        for (const editContentFieldToCreateNew of editContentFieldsToCreateNew) {
                           const editContentFieldToCreateNewColumnName =
                              _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content.datasource.fieldByID(
                                 editContentFieldToCreateNew
                              )?.columnName;
                           if (
                              !isCreated &&
                              contentValue[
                                 editContentFieldToCreateNewColumnName
                              ] != null &&
                              contentValue[
                                 editContentFieldToCreateNewColumnName
                              ] !== "" &&
                              JSON.stringify(
                                 newFormData[
                                    editContentFieldToCreateNewColumnName
                                 ] ?? ""
                              ) !==
                                 JSON.stringify(
                                    contentValue[
                                       editContentFieldToCreateNewColumnName
                                    ]
                                 )
                           ) {
                              isCreated = true;
                              break;
                           }
                        }
                     }
                     if (isEnded)
                        await new Promise((resolve, reject) => {
                           self.AB.Webix.confirm({
                              title: `${self.label("Caution")}: ${self.label(
                                 "Ending Current Assignment"
                              )}`,
                              ok: self.label(
                                 "Continue with ending this assignment"
                              ),
                              cancel: self.label("Cancel"),
                              text: [
                                 self.label(
                                    "When you provide an End Date, the current assignment is ended when the date = the current date and the assignment will no longer show on this team."
                                 ),
                                 self.label(
                                    "This will put the team member back into the unassigned list box if they have no other active assignments."
                                 ),
                              ].join("\n"),
                              css: "orgchart-teams-edit-content-confirm-popup",
                           })
                              .then(resolve)
                              .fail(reject);
                        });
                     else if (
                        isChangedToPrincipal &&
                        (await customProcessTasks.hasPrincipalInEntity())
                     ) {
                        await new Promise((resolve, reject) => {
                           self.AB.Webix.confirm({
                              title: self.label(
                                 "Warning: this team member already has a principal assignment in this entity"
                              ),
                              ok: self.label("Save with principal"),
                              cancel: self.label("Cancel"),
                              text: self.label(
                                 'Press "Save with principal" to remove principal status from the other assignment and make this assignment the principal. Or choose "Cancel" to not save this form.'
                              ),
                              css: "orgchart-teams-edit-content-confirm-popup",
                           })
                              .then(resolve)
                              .fail(reject);
                        });
                     } else if (isCreated)
                        await new Promise((resolve, reject) => {
                           self.AB.Webix.confirm({
                              title: `${self.label("Caution")}: ${self.label(
                                 "Creating New Assignment"
                              )}`,
                              ok: self.label("Continue with new assignment"),
                              cancel: self.label("Cancel"),
                              text: self.label(
                                 "When you change the Role type, Job title or Principal, then the current assignment is closed with the current date and a new assignment is created for this team."
                              ),
                              css: "orgchart-teams-edit-content-confirm-popup",
                           })
                              .then(resolve)
                              .fail(reject);
                        });
                  } catch {
                     return;
                  }
                  self._fnBusyRecord($teamRecord);
                  const contentNodes = [];
                  try {
                     if (isChangedToPrincipal) {
                        self._addProgressStatusQueue(
                           PROGRESS_STATUS_KEY_PRINCIPAL,
                           customProcessTasks.employeeValueEmail
                        );
                        newFormData = await customProcessTasks.run({
                           isChanging: true,
                        });
                        contentNodes.push(
                           ...customProcessTasks.updatedPrincipals
                        );
                     }

                     // TODO (Guy): Trigger process update.
                     if (customProcessTasks.needApproval) {
                        await Promise.all([
                           new Promise((resolve) => {
                              self._addUserFormQueue(newFormData, {
                                 needUserForm: customProcessTasks.needApproval,
                                 callback: resolve,
                              });
                           }),
                           (async () => {
                              await _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content.model.update(
                                 dataID,
                                 {
                                    [contentPrincipleColumnName]: "1",
                                 }
                              );
                              _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content.model.update(dataID, {
                                 [contentPrincipleColumnName]: "0",
                              });
                           })(),
                        ]);
                     } else {
                        if (isCreated) {
                           const oldData = {};
                           oldData[contentDateEndColumnName] = new Date();
                           await Promise.all([
                              self.updateData(_components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content, {
                                 ...oldData,
                                 id: dataID,
                              }),
                              (async () => {
                                 newFormData[contentDateStartColumnName] =
                                    oldData[contentDateEndColumnName];
                                 newFormData = await self.createData(
                                    _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                                    newFormData
                                 );
                              })(),
                           ]);
                        } else {
                           newFormData = await self.updateData(
                              _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
                              {
                                 ...newFormData,
                                 id: dataID,
                              }
                           );
                           if (newFormData[contentPrincipleColumnName] == 1)
                              self._addUserFormQueue(newFormData);
                        }
                        contentNodes.push({
                           [dataID]: (!isEnded && newFormData) || null,
                        });
                     }
                     if (isChangedToPrincipal)
                        self._removeProgressStatusQueue(
                           PROGRESS_STATUS_KEY_PRINCIPAL,
                           customProcessTasks.employeeValueEmail
                        );
                  } catch (err) {
                     // TODO (Guy): The update data error.
                     console.error(err);
                  }
                  for (const contentNode of contentNodes) {
                     const key = Object.keys(contentNode)[0];
                     document.getElementById(self.contentNodeID(key))?.remove();
                     contentNode[key] &&
                        self._addContentRecordToGroup(contentNode[key]);
                  }
                  self._fnReadyRecord($teamRecord);
                  self._refreshDataPanel();
               },
            });
            self.AB.Webix.ui({
               view: "window",
               id: self.ids.contentForm,
               close: true,
               move: true,
               position: "center",
               css: { "border-radius": "10px" },
               head: {
                  view: "toolbar",
                  css: "webix_dark team-form-header",
                  cols: [
                     { width: 5 },
                     {
                        view: "label",
                        label: `${self.label("Edit")} ${
                           _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content.datasource.label
                        }`,
                        align: "left",
                     },
                     {
                        view: "icon",
                        icon: "fa fa-times",
                        align: "right",
                        width: 60,
                        click() {
                           const $contentForm = $$(self.ids.contentForm);
                           $contentForm.blockEvent();
                           $contentForm.$view.remove();
                           $contentForm.destructor();
                        },
                     },
                  ],
               },
               body: {
                  width: 600,
                  rows: [
                     {
                        view: "form",
                        id: self.ids.contentFormData,
                        elements: contentFormElements,
                        rules,
                     },
                  ],
               },
               on: {
                  onHide() {
                     this.$view.remove();
                     this.destructor();
                  },
                  onShow() {
                     self._setFormValues(
                        self.ids.contentFormData,
                        contentValue
                     );
                  },
               },
            }).show();
         };
         this._fnShowFilterPopup = async (event) => {
            const contentDisplayedFieldFilters =
               this.settings.contentDisplayedFieldFilters;
            const ids = this.ids;
            let $popup = $$(ids.filterPopup);
            if (!$popup) {
               const self = this;
               $popup = webix.ui({
                  view: "popup",
                  css: "filter-popup",
                  id: ids.filterPopup,
                  body: {
                     rows: [
                        {
                           view: "form",
                           borderless: true,
                           hidden: true,
                           id: ids.filterForm,
                           elements: [
                              {
                                 view: "text",
                                 label: this.label("Team Name"),
                                 labelWidth: FORM_LABEL_WIDTH,
                                 name: "teamName",
                                 clear: true,
                              },
                              {
                                 view: "combo",
                                 label: this.label("Strategy"),
                                 labelWidth: FORM_LABEL_WIDTH,
                                 options: this._strategyCodeOpts,
                                 name: "strategy",
                                 clear: "replace",
                              },
                              {
                                 view: "checkbox",
                                 name: "inactive",
                                 labelRight: this.label("Show Inactive Teams"),
                                 labelWidth: FORM_LABEL_WIDTH,
                              },
                              ...(() => {
                                 const contentDisplayedFieldFilterViews = [];
                                 for (const contentDisplayedFieldFilterKey in contentDisplayedFieldFilters) {
                                    const [, objID, fieldID, isActive] =
                                       contentDisplayedFieldFilterKey.split(
                                          "."
                                       );
                                    if (isActive == 1) {
                                       const obj = this.AB.objectByID(objID);
                                       const field = obj.fieldByID(fieldID);
                                       switch (fieldID) {
                                          // TODO (Guy): Hardcode for the role type filter.
                                          case "96dc0d8d-7fb4-4bb1-8b80-a262aae41eed":
                                             const columnName =
                                                this.AB.definitionByID(
                                                   fieldID
                                                ).columnName;
                                             contentDisplayedFieldFilterViews.push(
                                                {
                                                   view: "combo",
                                                   label: contentDisplayedFieldFilters[
                                                      contentDisplayedFieldFilterKey
                                                   ],
                                                   labelWidth: FORM_LABEL_WIDTH,
                                                   options:
                                                      _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.contentGroup
                                                         .getData()
                                                         .map(
                                                            (
                                                               contentGroupValue
                                                            ) => ({
                                                               id: contentGroupValue[
                                                                  columnName
                                                               ],
                                                               value: contentGroupValue[
                                                                  columnName
                                                               ],
                                                            })
                                                         ),
                                                   name: contentDisplayedFieldFilterKey,
                                                   clear: "replace",
                                                }
                                             );
                                             break;
                                          default:
                                             switch (field.key) {
                                                case "boolean":
                                                   contentDisplayedFieldFilterViews.push(
                                                      {
                                                         view: "richselect",
                                                         label: contentDisplayedFieldFilters[
                                                            contentDisplayedFieldFilterKey
                                                         ],
                                                         labelWidth:
                                                            FORM_LABEL_WIDTH,
                                                         name: contentDisplayedFieldFilterKey,
                                                         options: [
                                                            {
                                                               id: "0",
                                                               value: "False",
                                                            },
                                                            {
                                                               id: "1",
                                                               value: "True",
                                                            },
                                                         ],
                                                         clear: true,
                                                      }
                                                   );
                                                   break;
                                                default:
                                                   contentDisplayedFieldFilterViews.push(
                                                      {
                                                         view: "text",
                                                         label: contentDisplayedFieldFilters[
                                                            contentDisplayedFieldFilterKey
                                                         ],
                                                         labelWidth:
                                                            FORM_LABEL_WIDTH,
                                                         name: contentDisplayedFieldFilterKey,
                                                         clear: true,
                                                      }
                                                   );
                                                   break;
                                             }
                                             break;
                                       }
                                    }
                                 }
                                 return contentDisplayedFieldFilterViews;
                              })(),
                              {
                                 cols: [
                                    {},
                                    {
                                       view: "icon",
                                       icon: "fa fa-check",
                                       css: "filter-apply",
                                       click: () => this.filterApply(),
                                    },
                                 ],
                              },
                           ],
                        },
                     ],
                  },
                  on: {
                     onShow() {
                        $$(ids.filterForm).show();
                     },
                     onHide() {
                        $$(ids.filterForm).hide();
                     },
                  },
               });
            }
            $popup.show($$(ids.filterButton).$view);
         };
         this._fnBusyRecord = ($record) => {
            if ($record == null) return;

            $record.setAttribute("draggable", "false");

            // Hide the edit button
            const $buttonEdit = $record.querySelector(".record-edit-icon");
            if ($buttonEdit) {
               $buttonEdit.style.display = "none";
            }

            // Show the loading icon
            const $iconLoading = $record.querySelector(".record-loading-icon");
            if ($iconLoading) {
               $iconLoading.style.visibility = "visible";
            }
         };
         this._fnReadyRecord = ($record) => {
            if ($record == null) return;

            $record.setAttribute("draggable", "true");

            // Hide the edit button
            const $buttonEdit = $record.querySelector(".record-edit-icon");
            if ($buttonEdit) {
               $buttonEdit.style.display = "block";
            }

            // Show the loading icon
            const $iconLoading = $record.querySelector(".record-loading-icon");
            if ($iconLoading) {
               $iconLoading.style.visibility = "hidden";
            }
         };

         // Generate strategy css
         const css = [
            "org-chart .strategy-external .title{background:#989898 !important;}",
         ];
         const colors = this.settings.strategyColors;
         for (let key in colors)
            css.push(
               `org-chart .strategy-${key} .title{background:${colors[key]} !important;}`
            );
         const style = document.createElement("style");
         style.innerHTML = css.join("");
         document.getElementsByTagName("head")[0].appendChild(style);

         // TODO (Guy): Hack!!!
         const processFormDataKey =
            "491956b4-c33c-49d7-b4fe-5ccd0911d62d.EmployeeEmail";
         this._userFormQueues = [];
         this._fnUserFormListener = this.AB._events["ab.task.userform"];
         this.AB.off("ab.task.userform", this._fnUserFormListener);
         this.AB.on("ab.task.userform", async (data) => {
            if (
               !Object.prototype.hasOwnProperty.call(
                  data.formData,
                  processFormDataKey
               )
            ) {
               this._fnUserFormListener(data);
               return;
            }
            if (this._userFormQueues.length === 0) return;
            const userFormQueueIndex = this._userFormQueues.findIndex(
               (e) =>
                  e.dataPanelRecord.email === data.formData[processFormDataKey]
            );
            if (userFormQueueIndex > -1) {
               const userFormQueue = this._userFormQueues.splice(
                  userFormQueueIndex,
                  1
               )[0];
               if (userFormQueue.needUserForm) this._fnUserFormListener(data);
               if (userFormQueue.callback) {
                  const result = userFormQueue.callback();
                  if (result instanceof Promise) {
                     try {
                        await result;
                     } catch (err) {
                        // TODO (Guy): Error log
                        console.error(err);
                     }
                  }
               }
            }
         });
      }

      _confirmBox(title, description, yes = "Yes", cancel = "Cancel") {
         return new Promise((resolve) => {
            this.AB.Webix.confirm({
               title: this.label(title),
               text: this.label(description),
               ok: this.label(yes),
               cancel: this.label(cancel),
            })
               .then((result) => {
                  resolve(result);
               })
               .fail(() => {
                  resolve(false);
               });
         });
      }

      _addContentRecordToGroup(contentRecord) {
         const linkedContentColumnName = this.AB.definitionByID(
            this.AB.definitionByID(this.settings.contentField).settings
               .linkColumn
         ).columnName;
         const $teamNode = document.getElementById(
            this.teamNodeID(contentRecord[linkedContentColumnName])
         );
         if ($teamNode == null) return;
         const contentGroupDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.contentGroup;
         const contentGroupDataPK =
            contentRecord[
               this.AB.definitionByID(this.settings.contentGroupByField)
                  .columnName
            ];
         const contentGroupPKField = contentGroupDC.datasource.PK();
         if (
            contentGroupDC.getData(
               (e) => e[contentGroupPKField] == contentGroupDataPK
            )[0] == null
         )
            return;
         const $groupSection = $teamNode.querySelector(
            `.team-group-section[data-pk="${contentGroupDataPK}"] > .team-group-content`
         );
         if ($groupSection == null) return;

         (async () => {
            await this._utils.waitDOM();
            const principalColumnName =
                  this.AB.definitionByID(this.settings.contentPrincipleField)
                     .columnName
            const isNewChildPrincipal = contentRecord[principalColumnName] === 1;
            const $newChild = await this._createUIContentRecord(contentRecord, isNewChildPrincipal
               ? this.settings.strategyColors[
                  $teamNode.classList.item(1).replace("strategy-", "")
               ]: "");
            const dataPanelDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list
               .contentDisplays
               .find((contentDisplay) => contentDisplay.datasource === _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.dataPanels[0].datasource);
            const dataPanelPK = dataPanelDC.datasource.PK();
            const dataPanelRecord = dataPanelDC.getData((e) => e[dataPanelPK] === contentRecord[CONTENT_LINK_DATAPANEL_COLUMNNAME])[0];
            const isNewChildEmeritus = dataPanelRecord?.[DATAPANEL_EMERITUS_STATUS_COLUMNNAME] === 1;
            for (const $child of $groupSection.children) {
               const childContentRecord = JSON.parse($child.dataset.source);
               const isChildPrincipal = childContentRecord[principalColumnName] === 1;
               if (isNewChildPrincipal && !isChildPrincipal) {
                  $child.before($newChild);
                  return;
               } else if (!isNewChildPrincipal && isChildPrincipal)
                  continue;
               const childDataPanelRecord = dataPanelDC.getData((e) => e[dataPanelPK] === childContentRecord[CONTENT_LINK_DATAPANEL_COLUMNNAME])[0];
               const isChildEmeritus = childDataPanelRecord[DATAPANEL_EMERITUS_STATUS_COLUMNNAME] === 1;
               if (dataPanelRecord == null) {
                  $child.after($newChild);
                  return;
               } else if (!isNewChildEmeritus && isChildEmeritus) {
                  $child.before($newChild);
                  return;
               } else if (isNewChildEmeritus && !isChildEmeritus)
                  continue;
               const sortingResult = this._utils.sortByEmployeeLastname(dataPanelRecord, childDataPanelRecord);
               if (sortingResult === -1) {
                  $child.before($newChild);
                  return;
               } else if (sortingResult === 0) {
                  if (this._utils.sortByEmployeeFirstname(dataPanelRecord, childDataPanelRecord) === -1)
                     $child.before($newChild);
                  else
                     $child.after($newChild);
                  return;
               }
            }
            $groupSection.appendChild($newChild);
         })();
      }

      _addRcToGroup(teamRecord, rcRecord) {
         const $teamNode = document.getElementById(
            this.teamNodeID(teamRecord.id)
         );
         if ($teamNode == null) return;

         const contentGroupDataPK = _components_data_panel_rcDataPanel_js__WEBPACK_IMPORTED_MODULE_5__["default"].dropZoneSections[0].id;
         const $groupSection = $teamNode.querySelector(
            `.team-group-section[data-pk="${contentGroupDataPK}"] > .team-group-content`
         );

         const $rcDom = this._createUIRcRecord(rcRecord);
         $groupSection.appendChild($rcDom);

         return $rcDom;
      }

      _cleanUpRcView(teamRecord = null) {
         let $parent = document;
         if (teamRecord) {
            $parent = document.getElementById(this.teamNodeID(teamRecord.id));
            if ($parent == null) return;
         }

         const contentGroupDataPK = _components_data_panel_rcDataPanel_js__WEBPACK_IMPORTED_MODULE_5__["default"].dropZoneSections[0].id;
         const $groupSections = $parent.querySelectorAll(
            `.team-group-section[data-pk="${contentGroupDataPK}"] > .team-group-content`
         );
         $groupSections.forEach(($grpSection) => {
            $grpSection.replaceChildren();
         });
      }

      async _fnExcludeRc(event) {
         const $rc = event.currentTarget.closest(".rc-record");
         if ($rc == null) return;

         const yesOrNo = await this._confirmBox(
            "Remove RC relationship?",
            "This will remove the link between the Team and RC. Are you sure you want to do this?"
         );
         if (!yesOrNo) return;

         const $team = $rc.closest(".node");
         if ($team == null) return;

         this._fnBusyRecord($rc);

         const teamObj = this.datacollection.datasource;
         const contentFieldLink = teamObj.fieldByID(
            _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEAM_RESPONSIBILITY_CENTRE_FIELD_ID
         );

         const dc = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.team;
         const teamId = $team.dataset.id;
         const rcId = $rc.dataset.id;
         let teamData = dc.getData((item) => item.id == teamId)[0];

         // Unrelate the RC from the team.
         teamData[contentFieldLink.columnName] = (
            teamData[contentFieldLink.columnName] ?? []
         ).filter((relatedTeam) => relatedTeam.id ?? relatedTeam != rcId);
         teamData[contentFieldLink.relationName()] = (
            teamData[contentFieldLink.relationName()] ?? []
         ).filter((relatedTeam) => relatedTeam.id ?? relatedTeam != rcId);

         await dc.datasource.model().update(teamData.id, teamData);

         this._fnReadyRecord($rc);
         $rc.remove();
      }

      _addProgressStatusQueue(key, value) {
         this._progressStatusQueues.push({
            key,
            value,
         });
         this._refreshProgressStatus();
      }

      _cleanValue(dc, value) {
         value = structuredClone(value);
         const editableColumnNames = [];
         if (_components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.entity) {
            const entityLinkField =
               _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.entity.datasource.connectFields(
                  (f) => f.settings.linkObject === dc.datasource.id
               )[0];
            if (entityLinkField)
               editableColumnNames.push(entityLinkField.fieldLink.columnName);
         }
         switch (dc) {
            case this.datacollection:
               editableColumnNames.push(
                  this.AB.definitionByID(this.settings.teamName).columnName,
                  this.AB.definitionByID(this.settings.teamInactive).columnName,
                  this.AB.definitionByID(this.settings.teamStrategy).columnName,
                  this._getLinkedColumnNameByConnectFieldID(
                     this.settings.teamLink
                  ),
                  EXTERNAL_SUPPORT_COLUMNNAME
               );
               break;
            case _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content:
               editableColumnNames.push(
                  ..._components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content.datasource
                     .fields(
                        (field) =>
                           this.settings.setEditableContentFields.indexOf(
                              field.id
                           ) > -1
                     )
                     .map((field) => field.columnName),
                  this._getLinkedColumnNameByConnectFieldID(
                     this.settings.contentField
                  ),
                  CONTENT_LINK_DATAPANEL_COLUMNNAME
               );
               break;
            default:
               break;
         }
         for (const key in value)
            if (editableColumnNames.indexOf(key) === -1) delete value[key];
            // Convert the Responsibility field value according to AB return format
            // QUESTION: Should other fields be processed here too?
            else if (
               key == RESPONSIBILITY_ASSIGNMENT_COLUMNNAME &&
               value[key]
            ) {
               const field = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content.datasource.fields(
                  (field) => field.columnName === key
               )[0];
               value[key] = field.editParse(value[key]);
            }
         return value;
      }

      async _createUIContentRecord(data, color) {
         const $ui = element("div", "team-group-record");
         $ui.setAttribute("id", this.contentNodeID(data.id));
         $ui.setAttribute("data-source", JSON.stringify(data));
         $ui.style.borderColor = color;
         $ui.addEventListener("dblclick", this._fnShowContentForm);
         if (
            this.settings.draggable === 1 &&
            (this._roles.isHRG || this._roles.isAdmin)
         ) {
            $ui.setAttribute("draggable", "true");
            $ui.addEventListener("dragstart", this._fnContentDragStart);
            $ui.addEventListener("dragend", this._fnContentDragEnd);
         }

         // TODO (Guy): Now we are hardcoding for each display
         const hardcodedDisplays = [
            element("div", "display-block"),
            element("div", "display-block"),
            element("div", "display-block display-block-right"),
         ];
         const $hardcodedSpecialDisplay = element(
            "div",
            "team-group-record-display"
         );
         let currentDataRecords = [];
         let currentField = null;
         let currentDisplayIndex = 0;
         const contentDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content;
         const contentObjID = contentDC.datasource.id;
         const contentDisplayedFields = this.settings.contentDisplayedFields;
         const contentDisplayedFieldsKeys = Object.keys(contentDisplayedFields);
         const contentDisplayDCs = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.contentDisplays;
         let $jobTitle;
         for (let j = 0; j < contentDisplayedFieldsKeys.length; j++) {
            const displayedFieldKey = contentDisplayedFieldsKeys[j];
            const [atDisplay, objID] = displayedFieldKey.split(".");
            const displayedObj = AB.objectByID(objID);
            const displayedFieldID = contentDisplayedFields[displayedFieldKey];
            const displayedField = displayedObj.fieldByID(displayedFieldID);
            const displayDC = contentDisplayDCs.find(
               (contentDisplayDC) => contentDisplayDC.datasource.id === objID
            );
            switch (objID) {
               case contentObjID:
                  currentDataRecords = [data];
                  break;
               default:
                  if (currentField == null) break;
                  if (currentDataRecords.length > 0) {
                     const currentColumnName = currentField.columnName;
                     const currentDataPKs = [];
                     do {
                        const currentFieldData =
                           currentDataRecords.pop()[currentColumnName];
                        if (Array.isArray(currentFieldData)) {
                           if (currentFieldData.length > 0)
                              currentDataPKs.push(...currentFieldData);
                        } else if (currentFieldData != null)
                           currentDataPKs.push(currentFieldData);
                     } while (currentDataRecords.length > 0);
                     await this._utils.waitDCReady(displayDC);
                     currentDataRecords = displayDC.getData((r) => {
                        return currentDataPKs.some((id) => id == r.id);
                     });
                  }
                  break;
            }
            if (
               contentDisplayedFieldsKeys[j + 1]?.split(".")[0] === atDisplay
            ) {
               currentField = displayedField;
               continue;
            }
            const $currentDisplay = element("div", "team-group-record-display");
            const displayedColumnName = displayedField.columnName;
            // TODO (Guy): Now we are hardcoding for each display.
            // $rowData.appendChild($currentDisplay);
            switch (currentDisplayIndex) {
               case 0:
                  hardcodedDisplays[0].appendChild($currentDisplay);
                  break;
               case 1:
                  let i = 0;
                  while (
                     currentDataRecords.length > 0 &&
                     currentDataRecords[i] != null
                  )
                     if (
                        currentDataRecords[i][displayedColumnName] == null ||
                        currentDataRecords[i][displayedColumnName] === ""
                     )
                        currentDataRecords.splice(i, 1);
                     else i++;
                  if (currentDataRecords.length) {
                     $jobTitle = $currentDisplay;
                     $currentDisplay.classList.add(
                        "team-group-record-job-title"
                     );
                     hardcodedDisplays[1].appendChild($currentDisplay);
                  }
                  break;
               case 2:
                  if ($jobTitle)
                     hardcodedDisplays[1].insertBefore(
                        $hardcodedSpecialDisplay,
                        $jobTitle
                     );
                  else
                     hardcodedDisplays[1].appendChild($hardcodedSpecialDisplay);
                  $hardcodedSpecialDisplay.appendChild($currentDisplay);
                  break;
               case 3:
                  $hardcodedSpecialDisplay.prepend($currentDisplay);
                  break;
               case 5:
                  hardcodedDisplays.unshift(
                     element("div", "team-group-record-initials")
                  );
                  hardcodedDisplays[0].appendChild($currentDisplay);
                  break;
               default:
                  hardcodedDisplays[1].appendChild($currentDisplay);
                  break;
            }
            currentDisplayIndex++;
            const contentDisplayedFieldTypePrefix = `${displayedFieldKey}.${displayedFieldID}`;
            const contentDisplayedFieldMappingDataObj =
               JSON.parse(
                  this.settings.contentDisplayedFieldMappingData?.[
                     contentDisplayedFieldTypePrefix
                  ] || null
               ) || {};
            if (
               this.settings.contentDisplayedFieldTypes[
                  `${contentDisplayedFieldTypePrefix}.0`
               ] != null
            )
               $currentDisplay.style.display = "none";
            switch (
               this.settings.contentDisplayedFieldTypes[
                  `${contentDisplayedFieldTypePrefix}.1`
               ]
            ) {
               case "icon":
                  // TODO (Guy): Add logic.
                  break;
               case "image":
                  while (currentDataRecords.length > 0) {
                     const currentDataRecordValue =
                        currentDataRecords.pop()[displayedColumnName];
                     const $img = document.createElement("img");
                     $currentDisplay.appendChild($img);
                     $img.setAttribute(
                        "src",
                        contentDisplayedFieldMappingDataObj[
                           currentDataRecordValue
                        ] ?? currentDataRecordValue
                     );
                  }
                  break;
               case "svg":
                  while (currentDataRecords.length > 0) {
                     const currentDataRecord = currentDataRecords.pop();
                     const currentDataRecordID = currentDataRecord.id;
                     const currentDataRecordValue =
                        currentDataRecord[displayedColumnName];
                     const SVG_NS = "http://www.w3.org/2000/svg";
                     const X_LINK_NS = "http://www.w3.org/1999/xlink";
                     const $svg = document.createElementNS(SVG_NS, "svg");
                     $currentDisplay.appendChild($svg);
                     $svg.setAttribute("viewBox", "0 0 6 6");
                     $svg.setAttribute("fill", "none");
                     $svg.setAttribute("xmlns", SVG_NS);
                     $svg.setAttribute("xmlns:xlink", X_LINK_NS);
                     const $rect = document.createElementNS(SVG_NS, "rect");
                     const $defs = document.createElementNS(SVG_NS, "defs");
                     $svg.append($rect, $defs);
                     $rect.setAttribute("width", "6");
                     $rect.setAttribute("height", "6");
                     const patternID = `display-svg.pattern.${currentDataRecordID}`;
                     $rect.setAttribute("fill", `url(#${patternID})`);
                     const $pattern = document.createElementNS(
                        SVG_NS,
                        "pattern"
                     );
                     const $image = document.createElementNS(SVG_NS, "image");
                     $defs.append($pattern, $image);
                     $pattern.id = patternID;
                     $pattern.setAttributeNS(
                        null,
                        "patternContentUnits",
                        "objectBoundingBox"
                     );
                     $pattern.setAttribute("width", "1");
                     $pattern.setAttribute("height", "1");
                     const imageID = `display-svg.image.${currentDataRecordID}`;
                     $image.id = imageID;
                     $image.setAttribute("width", "512");
                     $image.setAttribute("height", "512");
                     $image.setAttributeNS(
                        X_LINK_NS,
                        "xlink:href",
                        contentDisplayedFieldMappingDataObj[
                           currentDataRecordValue
                        ] ?? currentDataRecordValue
                     );
                     const $use = document.createElementNS(SVG_NS, "use");
                     $pattern.appendChild($use);
                     $use.setAttributeNS(
                        X_LINK_NS,
                        "xlink:href",
                        `#${imageID}`
                     );
                     $use.setAttribute("transform", "scale(0.002)");
                  }
                  break;
               default:
                  while (currentDataRecords.length > 0) {
                     const currentDataRecordValue =
                        currentDataRecords.pop()[displayedColumnName];
                     $currentDisplay.appendChild(
                        document.createTextNode(
                           contentDisplayedFieldMappingDataObj[
                              currentDataRecordValue
                           ] ?? currentDataRecordValue
                        )
                     );
                  }

                  // TODO (Guy): Hardcode limit text.
                  if (currentDisplayIndex - 1 === 1)
                     $currentDisplay.textContent =
                        $currentDisplay.textContent.slice(0, 35);
                  break;
            }
            currentField = null;
         }

         // TODO (Guy): Now we are hardcoding for each display.
         const hardcodedDisplaysLength = hardcodedDisplays.length;
         for (let i = 0; i < hardcodedDisplaysLength; i++) {
            const $hardcodedDisplay = hardcodedDisplays[i];
            $ui.appendChild($hardcodedDisplay);
            const children = $hardcodedDisplay.children;
            let isShown = false;
            let j = 0;
            let child, grandChildren, grandChildrenLength;
            switch (i) {
               case 1:
                  child = children.item(j);
                  grandChildren = child.children;
                  grandChildrenLength = grandChildren.length;
                  for (; j < grandChildrenLength; j++)
                     if (grandChildren[j].style.display !== "none") {
                        isShown = true;
                        break;
                     }
                  if (isShown) continue;
                  child.style.display = "none";
                  j = 1;
                  break;
               default:
                  break;
            }
            const childrenLength = children.length;
            const hardcodedDisplayStyle = $hardcodedDisplay.style;
            for (; j < childrenLength; j++)
               if (children.item(j).style.display !== "none") {
                  isShown = true;
                  break;
               }
            !isShown && (hardcodedDisplayStyle.display = "none");
         }

         if (this._roles.isHRG || this._roles.isAdmin) {
            const $editIcon = element("div", "record-edit-icon");
            $editIcon.appendChild(element("i", "fa fa-pencil"));
            $editIcon.addEventListener("click", this._fnShowContentForm);

            const $loadingIcon = element("div", "record-loading-icon");
            $loadingIcon.appendChild(
               element("i", "fa fa-refresh fa-spin loading-spinner")
            );

            $ui.appendChild($editIcon);
            $ui.appendChild($loadingIcon);
         }

         return $ui;
      }

      _createUIRcRecord(rc) {
         const $ui = element("div", "rc-record");

         if (
            this.settings.draggable === 1 &&
            (this._roles.isFinance || this._roles.isAdmin)
         ) {
            $ui.setAttribute("draggable", "true");
            $ui.addEventListener("dragstart", this._fnRcDragStart);
         }

         $ui.dataset.id = rc.id;
         $ui.setAttribute("id", this.contentNodeID(rc.id));

         const $rcName = element("div", "rc-record-name");
         $rcName.innerText = rc.name;
         $ui.appendChild($rcName);

         if (this._roles.isFinance || this._roles.isAdmin) {
            const $removeIcon = element("div", "record-edit-icon");
            $removeIcon.appendChild(element("i", "fa fa-trash-o"));
            $removeIcon.addEventListener("click", (event) => {
               this._fnExcludeRc(event);
            });

            const $loadingIcon = element("div", "record-loading-icon");
            $loadingIcon.appendChild(
               element("i", "fa fa-refresh fa-spin loading-spinner")
            );

            $ui.appendChild($removeIcon);
            $ui.appendChild($loadingIcon);
         }

         return $ui;
      }

      _createWebixUIFieldByFieldID(fieldID, value) {
         const field = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content.datasource.fields(
            (field) => field.id === fieldID
         )[0];
         if (field == null)
            return {
               view: "label",
               label: this.label("Missing Field"),
               labelWidth: FORM_LABEL_WIDTH,
            };

         // TODO (Guy): Add validators.
         let invalidMessage = "";
         const rule = {};
         const contentDateStartColumnName = this.AB.definitionByID(
            this.settings.contentFieldDateStart
         )?.columnName;
         const contentDateEndColumnName = this.AB.definitionByID(
            this.settings.contentFieldDateEnd
         )?.columnName;
         switch (field.columnName) {
            case contentDateEndColumnName:
               invalidMessage = this.label(
                  `The ${field.label} must be later than the ${contentDateStartColumnName}.`
               );
               rule[field.columnName] = (value) =>
                  value >
                     $$(this.ids.contentFormData).getValues()[
                        contentDateStartColumnName
                     ] ||
                  value === "" ||
                  value == null;
               break;
            default:
               rule[field.columnName] = () => true;
               break;
         }
         let element = {
            view: "text",
            name: field.columnName,
            label: field.label,
            labelWidth: FORM_LABEL_WIDTH,
            invalidMessage,
         };
         switch (field.key) {
            case "boolean":
               element.view = "checkbox";
               // TODO (Guy): Hardcode parsing specific field
               switch (field.columnName) {
                  case this.AB.definitionByID(
                     this.settings.contentPrincipleField
                  ).columnName:
                     // TODO (Guy): Hardcode getting data panel dc.
                     const dataPanelDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.contentDisplays.find(
                        (contentDisplayDC) =>
                           contentDisplayDC.datasource ===
                           _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.dataPanels[0].datasource
                     );
                     const dataPanelPK = dataPanelDC.datasource.PK();
                     const teamPK = this.datacollection.datasource.PK();
                     const contentLinkedTeamColumnName =
                        this._getLinkedColumnNameByConnectFieldID(
                           this.settings.contentField
                        );
                     element.disabled =
                        this.ORG_SENT_STATUSES.indexOf(
                           dataPanelDC
                              .getData(
                                 (e) =>
                                    e[dataPanelPK] ==
                                    value[CONTENT_LINK_DATAPANEL_COLUMNNAME]
                              )[0]
                              [DATAPANEL_ORG_STATUS_COLUMNNAME]?.toString()
                        ) > -1 ||
                        this.datacollection.getData(
                           (e) =>
                              e[teamPK] == value[contentLinkedTeamColumnName]
                        )[0][EXTERNAL_SUPPORT_COLUMNNAME] == 1;
                     break;
                  default:
                     break;
               }
               break;
            case "number":
               element.view = "counter";
               element.type = "number";
               break;
            case "list":
               element.view =
                  (field.settings.isMultiple === 1 && "muticombo") || "combo";
               element.options = field.settings.options.map((option) => ({
                  id: option.id,
                  value: option.text,
               }));
               break;
            case "user":
            case "connectObject":
               {
                  const linkedDC = this._getAllDCs().find(
                     (dc) => dc.datasource === field.datasourceLink
                  );

                  // TODO (Guy): Hardcode for the employee field
                  if (field.columnName === CONTENT_LINK_DATAPANEL_COLUMNNAME) {
                     delete element.name;
                     element.view = "text";
                     element.label = "Name";
                     element.disabled = true;
                     const linkedFieldPK = field.datasourceLink.PK();
                     element.value = linkedDC.datasource.displayData(
                        linkedDC.getData(
                           (e) => e[linkedFieldPK] == value[field.columnName]
                        )[0]
                     );
                     return { element, rule };
                  }
                  // Hardcode for the responsibility assignment field ??
                  else if (
                     field.columnName == RESPONSIBILITY_ASSIGNMENT_COLUMNNAME
                  ) {
                     element = this._elementResponsibility(field, value);
                     break;
                  }
                  element.options = linkedDC.getData().map((e) => ({
                     id: e.id,
                     value: linkedDC.datasource.displayData(e),
                  }));
                  if (field.linkType() === "one") element.view = "combo";
                  else {
                     element.view = "multicombo";
                     element.labelAlign = "left";
                     element.stringResult = false;
                  }
               }
               break;
            case "date":
            case "datetime":
               element.view = "datepicker";
               element.stringResult = true;
               element.timepicker = field.key === "datetime";
               element.editable = true;
               element.format = function (date) {
                  let valInput = element._input?.value || "";

                  // If the entered input does not include /, then add them.
                  if (valInput && valInput.indexOf("/") < 0) {
                     valInput = [
                        valInput.slice(0, 2) || "01",
                        valInput.slice(2, 4) || "01",
                        valInput.slice(4, 6) || new Date().getFullYear(),
                     ].join("/");
                     date = AB.Webix.i18n.dateFormatDate(valInput);
                  }

                  // If the entered date does not include a year, then set the current year.
                  if (valInput && !valInput.split("/")[2]) {
                     date.setFullYear(new Date().getFullYear());
                  }

                  return AB.Webix.i18n.dateFormatStr(date);
               };
               element.on = {
                  onKeyPress: function () {
                     // store the input element
                     element._input = this.$view.querySelector("input");
                  },
               };
               break;
            case "file":
            case "image":
               // TODO (Guy): Add logic
               break;
            // case "json":
            // case "LongText":
            // case "string":
            // case "email":
            default:
               break;
         }
         return { element, rule };
      }

      _checkIfDataChanged(dc, newValue) {
         const objPK = dc.datasource.PK();
         const oldValue = dc.getData((e) => e[objPK] == newValue[objPK])[0];

         // TODO (Guy): Check array in the future.
         const fields = dc.datasource.fields();
         for (const field of fields) {
            if (
               (newValue[field.columnName] ?? "") == "" &&
               (oldValue[field.columnName] ?? "") == ""
            )
               continue;
            switch (field.key) {
               case "date": {
                  if ((oldValue[field.columnName] ?? "") == "") break;
                  const oldValueDateParts = new Date(oldValue[field.columnName])
                     .toLocaleDateString()
                     .split("/");
                  oldValueDateParts[0].length === 1 &&
                     (oldValueDateParts[0] = `0${oldValueDateParts[0]}`);
                  oldValueDateParts[1].length === 1 &&
                     (oldValueDateParts[1] = `0${oldValueDateParts[1]}`);
                  oldValueDateParts.unshift(oldValueDateParts.pop());
                  oldValue[field.columnName] = oldValueDateParts.join("-");
                  break;
               }
               default:
                  break;
            }
            if (
               JSON.stringify(newValue[field.columnName]) !=
               JSON.stringify(oldValue[field.columnName])
            )
               return true;
         }
         return false;
      }

      _getAllDCs() {
         const entityDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.entity;
         const teamDC = this.datacollection;
         const contentDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content;
         const contentGroupDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.contentGroup;
         const strategyCodeDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.strategyCode;
         const subStrategyDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.subStrategy;
         const teamStrategyDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.teamStrategy;
         const responsibilityDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.responsibility;
         const results = [
            entityDC,
            teamDC,
            contentDC,
            contentGroupDC,
            strategyCodeDC,
            subStrategyDC,
            teamStrategyDC,
            responsibilityDC,
         ];

         const contentDisplaysDCs = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.contentDisplays.filter(
            (contentDisplayDC) => results.indexOf(contentDisplayDC) === -1
         );

         return results.concat(contentDisplaysDCs);
      }

      _getChildChartDataByID(id, chartData = this._chartData) {
         if (this.teamNodeID(id) === chartData.id) return chartData;
         if (chartData.children?.length > 0) {
            for (let child of chartData.children) {
               child = this._getChildChartDataByID(id, child);
               if (child != null) return child;
            }
         }
      }

      _getLinkedColumnNameByConnectFieldID(connectFieldID) {
         return this.AB.definitionByID(
            this._getLinkedFieldIDByConnectFieldID(connectFieldID)
         ).columnName;
      }

      _getLinkedFieldIDByConnectFieldID(connectFieldID) {
         return this.AB.definitionByID(connectFieldID).settings.linkColumn;
      }

      _getLinkedObjIDByConnectFieldID(connectFieldID) {
         return this.AB.definitionByID(connectFieldID)?.settings?.linkObject;
      }

      // TODO (Guy): Hardcode to hide the reason popup to prevent to continue the next process task
      _addUserFormQueue(
         contentValue,
         { callback, needUserForm } = { callback: null, needUserForm: false }
      ) {
         const dataPanelDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.contentDisplays.find(
            (contentDisplayDC) =>
               contentDisplayDC.datasource ===
               _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.dataPanels[0].datasource
         );
         const dataPanelPK = dataPanelDC.datasource.PK();
         this._userFormQueues.push({
            dataPanelRecord: dataPanelDC.getData(
               (e) =>
                  e[dataPanelPK] ==
                  contentValue[CONTENT_LINK_DATAPANEL_COLUMNNAME]
            )[0],
            callback,
            needUserForm,
         });
      }

      _isLessThanDay(date) {
         return Math.abs(new Date() - date) / 36e5 < 24;
      }

      async _fetchAllData(dc) {
         await this._utils.waitDCReady(dc);

         const totalCount = dc.totalCount;
         let records = dc.getData();

         // Load data to the end
         while (records.length < totalCount) {
            // await dc.loadData(records.length);
            await dc.loadData(0, _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].RECORD_LIMIT);
            records = dc.getData();
         }

         return dc.getData();
      }

      async _pageData(dc, mainCallback, callback) {
         await this._utils.waitDCReady(dc);
         let records = dc.getData();
         const retryTimeout = setTimeout(async () => {
            try {
               mainCallback &&
                  (await mainCallback(records, false, dc, callback));
            } catch (err) {
               // TODO (Guy): Error log
               console.error(err);
            }
         }, TIMEOUT_RETRY_PAGEDATA);
         try {
            if (
               records.length < DC_OFFSET ||
               (records.length - DC_OFFSET) % _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].RECORD_LIMIT > 0 ||
               this._isPageDataTerminated
            )
               throw null;
            try {
               await dc.loadData(
                  _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].RECORD_LIMIT * parseInt(records.length / _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].RECORD_LIMIT),
                  _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].RECORD_LIMIT
               );
            } catch {}
            if (
               dc.getData().length === records.length ||
               this._isPageDataTerminated
            )
               throw null;
            records = dc.getData();
            if (
               (records.length - DC_OFFSET) % _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].RECORD_LIMIT > 0 ||
               this._isPageDataTerminated
            )
               throw null;
            clearTimeout(retryTimeout);
            mainCallback && (await mainCallback(records, false, dc, callback));
         } catch (err) {
            // TODO (Guy): Error log
            if (err) console.error(err);
            else {
               clearTimeout(retryTimeout);
               try {
                  mainCallback &&
                     (await mainCallback(records, true, dc, callback));
               } catch (err) {
                  console.error(err);
               }
            }
         }
      }

      _parseFormValueByType(dc, oldFormData, newFormData) {
         const allFields = dc.datasource.fields();
         for (const field of allFields) {
            const fieldKey = field.key;
            const columnName = field.columnName;
            const oldValue = oldFormData?.[columnName];
            const newValue = newFormData[columnName];
            switch (fieldKey) {
               case "date":
                  if (oldValue === undefined && newValue == null)
                     delete newFormData[columnName];
                  else {
                     newFormData[columnName] = new Date(newValue);
                     if (isNaN(newFormData[columnName]))
                        delete newFormData[columnName];
                     else
                        newFormData[columnName] = `${newFormData[
                           columnName
                        ].getFullYear()}-${String(
                           newFormData[columnName].getMonth() + 1
                        ).padStart(2, "0")}-${String(
                           newFormData[columnName].getDate()
                        ).padStart(2, "0")}`;
                  }
                  break;
               case "datetime":
                  if (oldValue === undefined && newValue == null)
                     delete newFormData[columnName];
                  try {
                     newValue instanceof Date &&
                        (newFormData[columnName] = newValue.toISOString());
                  } catch {
                     delete newFormData[columnName];
                  }
                  break;
               case "connectObject":
                  delete newFormData[`${columnName}__relation`];
                  if (field.linkType() === "one") {
                     if (
                        oldValue === undefined &&
                        newFormData[columnName] == null
                     )
                        delete newFormData[columnName];
                     else
                        switch (typeof oldValue) {
                           case "number":
                              newFormData[columnName] =
                                 parseInt(newValue) || null;
                              break;
                           case "string":
                              newFormData[columnName] =
                                 newValue?.toString() || null;
                              break;
                           default:
                              break;
                        }
                  }
                  // TODO (Guy): Many logic in the future. Now we don't have an array data changed.
                  // else delete newFormData[columnName];
                  break;
               default:
                  if (newValue == null || newValue === "")
                     if (oldValue === undefined) {
                        delete newFormData[columnName];
                        break;
                     } else if (oldValue === "") {
                        newFormData[columnName] = "";
                        break;
                     }
                  switch (fieldKey) {
                     case "boolean":
                        switch (typeof oldValue) {
                           case "number":
                              newFormData[columnName] = newValue;
                              break;
                           case "string":
                              newFormData[columnName] =
                                 newValue === 1 ? "1" : "0";
                              break;
                           default:
                              newFormData[columnName] = newValue == 1;
                              break;
                        }
                        break;
                     case "number":
                        const paredNewValue = parseInt(newValue);
                        if (isNaN(parseInt(newValue))) {
                           if (oldValue === undefined)
                              delete newFormData[columnName];
                           else newFormData[columnName] = oldValue;
                           break;
                        }
                        switch (typeof oldValue) {
                           case "string":
                              newFormData[columnName] =
                                 paredNewValue.toString();
                              break;
                           default:
                              newFormData[columnName] = paredNewValue;
                              break;
                        }
                        break;
                     case "string":
                        newFormData[columnName] = newValue?.toString() || "";
                        break;
                     default:
                        break;
                  }
                  break;
            }
         }
         return newFormData;
      }

      async _refreshDataPanel() {
         $$(this.ids.dataPanel)
            ?.getChildViews()[1]
            .getChildViews()
            .forEach(($childView) => $childView.callEvent("onViewShow"));
      }

      _refreshOrgChart() {
         const teamDC = this.datacollection;
         if (teamDC == null) {
            this._removeOrgChart();
            return;
         }

         // Find the top node
         let topNodeData = teamDC.getCursor();
         const settings = this.settings;
         const topNodeColumn = this.AB.definitionByID(
            settings.topTeam
         ).columnName;
         if (settings.topTeam) {
            const topFromField = teamDC.getData(
               (e) => e[topNodeColumn] == 1
            )[0];
            topNodeData = topFromField ? topFromField : topNodeData;
         }
         if (!topNodeData) {
            this._removeOrgChart();
            return;
         }

         /**
          * Recursive function to prepare child node data
          * @param {object} node the current node
          * @param {number} [depth=0] a count of how many times we have recursed
          */
         const teamObjPK = teamDC.datasource.PK();
         const teamLinkedColumnName = this.AB.definitionByID(
            this.AB.definitionByID(settings.teamLink).settings.linkColumn
         ).columnName;
         const teamNameColumnName = this.AB.definitionByID(
            settings.teamName
         ).columnName;
         const teamInactiveColumnName = this.AB.definitionByID(
            settings.teamInactive
         ).columnName;
         const teamStrategyDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.teamStrategy;
         const teamStrategyObjPK = teamStrategyDC.datasource.PK();
         const teamStrategyColumnName = this.AB.definitionByID(
            settings.teamStrategy
         ).columnName;
         const strategyCodeColumnName = this.AB.definitionByID(
            settings.strategyCode
         ).columnName;
         const pullChildData = (node, depth = 0) => {
            if (depth >= TEAM_CHART_MAX_DEPTH) return;
            node.children = [];
            teamDC
               .getData(
                  (e) => e[teamLinkedColumnName] == node._rawData[teamObjPK]
               )
               .forEach((childData) => {
                  // Don't show inactive teams
                  if (
                     childData[teamLinkedColumnName] == childData[teamObjPK] ||
                     (this.__filters?.inactive == 0 &&
                        childData[teamInactiveColumnName])
                  )
                     return;
                  const child = {
                     name: childData[teamNameColumnName],
                     id: this.teamNodeID(childData[teamObjPK]),
                     className: `strategy-${
                        teamStrategyDC.getData(
                           (e) =>
                              e[teamStrategyObjPK] ==
                              childData[teamStrategyColumnName]
                        )[0]?.[strategyCodeColumnName]
                     }`,
                     isInactive: childData[teamInactiveColumnName],
                     _rawData: childData,
                  };
                  child.filteredOut = this.filterTeam(child);
                  // if (childData[EXTERNAL_SUPPORT_COLUMNNAME] == 1)
                  //   child.className = `strategy-external`;
                  pullChildData(child, depth + 1);

                  // If this node is filtered we still need it if it has children
                  // that pass
                  if (!child.filteredOut || child.children?.length > 0)
                     node.children.push(child);
               });
            if (node.children.length === 0) {
               delete node.children;
            } else {
               // sort children alphaetically
               node.children = node.children.sort(sortByTeamName);
            }
         };
         // the Root node
         const chartTopNode = (this._chartData = {
            id: this.teamNodeID(topNodeData[teamObjPK]),
            name: topNodeData[teamNameColumnName] ?? "",
            className: `strategy-${
               teamStrategyDC.getData(
                  (e) =>
                     e[teamStrategyObjPK] == topNodeData[teamStrategyColumnName]
               )[0]?.[strategyCodeColumnName]
            }`,
            isInactive: topNodeData[teamInactiveColumnName],
            _rawData: topNodeData,
            filteredOut: false,
         });
         chartTopNode.filteredOut = this.filterTeam(chartTopNode);
         pullChildData(chartTopNode);
         const draggable = settings.draggable === 1;
         const orgchart = new this._OrgChart({
            data: this.AB.cloneDeep(chartTopNode),
            direction: settings.direction,
            pan: true,
            zoom: false,
            draggable,
            parentNodeSymbol: false,
            createNode: this._fnCreateNode,
            nodeContent: "description",
         });
         // On drop update the parent (dropZone) of the node
         if (draggable)
            orgchart.addEventListener("nodedropped.orgchart", this._fnDropNode);
         if (this.__orgchart != null) {
            orgchart.dataset.panStart = this.__orgchart.dataset.panStart;
            orgchart.setAttribute(
               "style",
               this.__orgchart.getAttribute("style")
            );
            this.__orgchart.remove();
         }
         $$(this.ids.chartContent).$view.appendChild(
            (this.__orgchart = orgchart)
         );
      }

      _refreshProgressStatus() {
         const $progressStatus = $$(this.ids.progressStatus);
         if (this._progressStatusQueues.length > 0) {
            this.busy();
            const commonQueues = [];
            const principalQueues = [];
            for (const { key, value } of this._progressStatusQueues) {
               switch (key) {
                  case "principal":
                     principalQueues.push(value);
                     break;
                  default:
                     commonQueues.push(value);
                     break;
               }
            }
            const templateElements = ["<div>"];
            if (commonQueues.length > 0)
               templateElements.push(
                  "<div>",
                  "</span>",
                  this.label("Loading necessary components:"),
                  "</span>",
                  "<ul>",
                  ...commonQueues.map((e) => `<li>${this.label(e)}</li>`),
                  "</ul>",
                  "</div>"
               );
            if (principalQueues.length > 0)
               templateElements.push(
                  "<div>",
                  "</span>",
                  this.label(
                     "Please DO NOT close. Checking for principal assignment allowance changes for:"
                  ),
                  "</span>",
                  "<ul>",
                  ...principalQueues.map((e) => `<li>${e}</li>`),
                  "</ul>",
                  "</div>"
               );
            templateElements.push("</div>");
            $progressStatus.define("tooltip", {
               template: templateElements.join(""),
            });
            $progressStatus.refresh();
            !$progressStatus.isVisible() && $progressStatus.show();
         } else if ($progressStatus.isVisible()) {
            $progressStatus.$view
               .getElementsByClassName("progress-status")
               .item(0)
               .classList.add("progress-status-done");
            const iconClassList = $progressStatus.$view
               .getElementsByTagName("i")
               .item(0).classList;
            iconClassList.replace("fa-refresh", "fa-check-circle");
            iconClassList.remove("progress-status-spin");
            $progressStatus.hide();
            this.ready();
         }
      }

      async _reloadDC(dc) {
         await (dc.reloadPromise ||
            dc.reloadData(
               0,
               _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].RECORD_LIMIT * Math.ceil(dc.getData().length / _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].RECORD_LIMIT) ||
                  _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].RECORD_LIMIT
            ));
      }

      async _removeProgressStatusQueue(key, value) {
         // Delay waiting to refresh the progress status
         if (this.__throttleProgressStatus)
            delete this.__throttleProgressStatus;
         this.__throttleProgressStatus = this._utils.timeout(
            PROGRESS_STATUS_DELAY
         );
         await this.__throttleProgressStatus;

         // const index = this._progressStatusQueues.findIndex(
         //    (e) => e.key === key && e.value === value
         // );
         // index > -1 && this._progressStatusQueues.splice(index, 1);
         this._progressStatusQueues = this._progressStatusQueues.filter(
            (e) => `${e.key}-${e.value}` !== `${key}-${value}`
         );
         this._refreshProgressStatus();
      }

      _removeOrgChart() {
         if (this.__orgchart) {
            this.__orgchart.remove();
            this.__orgchart = null;
         }
         this._chartData = null;
      }

      _setFormValues(webixViewID, value) {
         const $form = $$(webixViewID);
         const formValue = $form.getValues();
         value = structuredClone(value);
         for (const key in formValue) {
            switch ($form.elements[key].config.view) {
               case "checkbox":
                  formValue[key] = parseInt(value[key]);
                  if (isNaN(formValue[key])) formValue[key] = 0;
                  break;
               case "datepicker":
                  formValue[key] = new Date(value[key]);
                  if (isNaN(formValue[key].getTime())) formValue[key] = "";
                  break;
               default:
                  formValue[key] = value[key] ?? "";
                  break;
            }
         }
         $form.setValues(formValue);
      }

      _setUpdatedBy(dc, values) {
         values[
            // TODO (Guy): This should be the ABDesigner setting.
            dc.datasource.fields(
               (field) =>
                  field.columnName.indexOf("_last_upd_by_in_app") > -1 ||
                  field.columnName.indexOf("_update_in_app") > -1
            )[0].columnName
         ] = this.AB.Account.email();
      }

      _showDataPanel() {
         let $panel = $$(this.ids.dataPanelPopup);
         if (!$panel) {
            $panel = this.AB.Webix.ui({
               id: this.ids.dataPanelPopup,
               view: "popup",
               width: 250,
               body: this._uiDataPanel(),
               css: "data-panel-popup",
               modal: true,
               resize: true,
            });
         }

         // toggle
         if ($panel.isVisible()) {
            $panel.hide();
            return;
         }

         const $dpButtonWebix = $$(this.ids.dataPanelButton).$view;
         const $dpButtonElem =
            $dpButtonWebix.querySelector(".data-panel-button");
         // Ensure the popup will stay to the right when resizing
         if (!this._resizeObserver) {
            this._resizeObserver = new ResizeObserver(([e]) => {
               // Hide the panel when the widget is hidden (ex. switched to another App)
               if (e.contentRect.width == 0 && e.contentRect.height == 0) {
                  return $panel.hide();
               }
               // $panel.show($dpButtonElem, { x: -30, y: -35 });
               $panel.show($dpButtonElem, { pos: "bottom", x: -30 });
            });
         }
         this._resizeObserver.observe($dpButtonWebix);
         // $panel.show($dpButtonElem, { x: -30, y: -35 });
         $panel.show($dpButtonElem, { pos: "bottom", x: -30 });
         this._refreshDataPanel();
      }

      _showTeamFormPopup(mode, value) {
         if (value.__parentID) {
            value[
               this._getLinkedColumnNameByConnectFieldID(this.settings.teamLink)
            ] = value.__parentID;
            delete value.__parentID;
         }
         this.AB.Webix.ui(this._uiTeamFormPopup(mode, value)).show();
      }

      _uiDataPanelButton() {
         return {
            view: "template",
            id: this.ids.dataPanelButton,
            template: `<div class="filter-button switch-data-panel">
                           <span class="fa ${
                              this._selectedDataPanel instanceof _components_data_panel_staffDataPanel_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                                 ? _components_data_panel_rcDataPanel_js__WEBPACK_IMPORTED_MODULE_5__["default"].icon
                                 : _components_data_panel_staffDataPanel_js__WEBPACK_IMPORTED_MODULE_4__["default"].icon
                           }"></span>
                        </div>
                        <div class="filter-button data-panel-button">
                           <span class="fa ${
                              this._selectedDataPanel.constructor.icon
                           }"></span>
                           <span>&nbsp;${this.label(
                              this._selectedDataPanel.constructor.label
                           )}</span>
                        </div>`,
            align: "right",
            width: 330,
            onClick: {
               "data-panel-button": (ev) => this._selectedDataPanel.show(ev),
               "switch-data-panel": (ev) => this.switchDataPanel(),
            },
         };
      }

      _uiTeamFormPopup(mode, value) {
         const self = this;
         const nameField = self.datacollection.datasource.fieldByID(
            self.settings.teamName
         );
         const strategyField = self.datacollection.datasource.fieldByID(
            self.settings.teamStrategy
         );
         const teamLinkTeamField = self.datacollection.datasource.fieldByID(
            self.settings.teamLink
         ).fieldLink;
         const isEditMode = mode === "Edit";
         const isDisabled =
            isEditMode &&
            (value[self.AB.definitionByID(self.settings.topTeam).columnName] ==
               1 ||
               value[EXTERNAL_SUPPORT_COLUMNNAME] == 1 ||
               value[
                  self.AB.definitionByID(self.settings.teamCanInactivate)
                     .columnName
               ] == 0);
         const objPK = self.datacollection.datasource.PK();
         return {
            view: "window",
            id: self.ids.teamFormPopup,
            close: true,
            move: true,
            position: "center",
            width: 400,
            css: { "border-radius": "10px" },
            head: {
               view: "toolbar",
               css: "webix_dark team-form-header",
               cols: [
                  { width: 5 },
                  {
                     view: "label",
                     label: this.label(`${mode} Team`),
                     align: "left",
                  },
                  {
                     view: "icon",
                     icon: "fa fa-times",
                     align: "right",
                     width: 60,
                     click() {
                        const $teamFormPopup = $$(self.ids.teamFormPopup);
                        $teamFormPopup.blockEvent();
                        $teamFormPopup.$view.remove();
                        $teamFormPopup.destructor();
                     },
                  },
               ],
            },
            body: {
               rows: [
                  {
                     view: "form",
                     id: self.ids.teamForm,
                     borderless: true,
                     elements: [
                        {
                           view: "text",
                           label: nameField.label,
                           labelWidth: FORM_LABEL_WIDTH,
                           name: nameField.columnName,
                           required: true,
                        },
                        {
                           cols: [
                              {
                                 view: "richselect",
                                 label: self.label("Strategy"),
                                 labelWidth: FORM_LABEL_WIDTH,
                                 id: self.ids.teamFormCode,
                                 options: self._strategyCodeOpts,
                                 disabled: isDisabled,
                                 required: true,
                                 on: {
                                    onChange(code, previous) {
                                       if (code === previous) return;
                                       const $strategyField = $$(
                                          self.ids.teamFormStrategy
                                       );
                                       $strategyField.define(
                                          "options",
                                          (code &&
                                             self._strategyOpts.filter(
                                                (strategyOpt) =>
                                                   strategyOpt.code == code
                                             )) ||
                                             self._strategyOpts
                                       );
                                       $strategyField.refresh();
                                    },
                                 },
                              },
                              {
                                 view: "icon",
                                 icon: "fa fa-question-circle",
                                 tooltip: "Open Strategy Guide",
                                 align: "left",
                                 css: {
                                    "margin-top": "6px",
                                    cursor: "pointer",
                                    color: "#007bff",
                                 },
                                 click() {
                                    window.open(
                                       "https://www.helpducks.org/440059-employee-records/strategies?from_search=154432295",
                                       "_blank"
                                    );
                                 },
                              },
                           ],
                        },
                        {
                           cols: [
                              {
                                 view: "richselect",
                                 label: self.label("Sub Strategy"),
                                 labelWidth: FORM_LABEL_WIDTH,
                                 name: strategyField.columnName,
                                 id: self.ids.teamFormStrategy,
                                 options: [],
                                 disabled: isDisabled,
                                 required: true,
                                 on: {
                                    onChange() {
                                       const value = this.getValue();
                                       if (value) {
                                          const { code } =
                                             self._strategyOpts.find(
                                                (strategyOpt) =>
                                                   strategyOpt.id === value
                                             );
                                          $$(self.ids.teamFormCode).setValue(
                                             code
                                          );
                                          this.define(
                                             "options",
                                             code &&
                                                (self._strategyOpts.filter(
                                                   (strategyOpt) =>
                                                      strategyOpt.code == code
                                                ) ||
                                                   self._strategyOpts)
                                          );
                                          this.refresh();
                                       }
                                    },
                                 },
                              },
                              {
                                 view: "icon",
                                 icon: "fa fa-question-circle",
                                 tooltip: "Open Sub Strategy Guide",
                                 align: "left",
                                 css: {
                                    "margin-top": "6px",
                                    cursor: "pointer",
                                    color: "#007bff",
                                 },
                                 click() {
                                    window.open(
                                       "https://www.helpducks.org/440059-employee-records/sub-strategies?from_search=154432441",
                                       "_blank"
                                    );
                                 },
                              },
                           ],
                        },
                        {
                           view: "combo",
                           label: teamLinkTeamField.label,
                           labelWidth: FORM_LABEL_WIDTH,
                           name: teamLinkTeamField.columnName,
                           options: self.datacollection
                              .getData((e) => e[objPK] != value[objPK])
                              .map((e) => ({
                                 id: e[objPK],
                                 value: e[nameField.columnName],
                              })),
                           required: true,
                           disabled: !isEditMode || isDisabled,
                        },
                        {
                           view: "switch",
                           disabled: !self.teamCanInactivate(value),
                           name: self.AB.definitionByID(
                              self.settings.teamInactive
                           ).columnName,
                           label: self.label("Inactive"),
                        },
                        { view: "text", name: "id", hidden: true },
                        {
                           id: self.ids.teamFormSubmit,
                           view: "button",
                           value: self.label("Save"),
                           disabled: true,
                           css: "webix_primary",
                           async click() {
                              let newValue = $$(self.ids.teamForm).getValues();
                              if (newValue.id) {
                                 const $node = document.getElementById(
                                    self.teamNodeID(newValue.id)
                                 );
                                 newValue = self._parseFormValueByType(
                                    self.datacollection,
                                    newValue,
                                    newValue
                                 );
                                 if (
                                    !self._checkIfDataChanged(
                                       self.datacollection,
                                       newValue
                                    )
                                 )
                                    return;
                                 self.teamEdit(newValue);
                              } else {
                                 self.teamAddChild(
                                    self._parseFormValueByType(
                                       self.datacollection,
                                       null,
                                       newValue
                                    )
                                 );
                              }
                              const $teamFormPopup = $$(self.ids.teamFormPopup);
                              $teamFormPopup.blockEvent();
                              $teamFormPopup.$view.remove();
                              $teamFormPopup.destructor();
                           },
                        },
                     ],
                     on: {
                        onChange() {
                           const value = $$(self.ids.teamForm).getValues();
                           let valid =
                              !!value[strategyField.columnName] &&
                              !!value[nameField.columnName];
                           if (isEditMode)
                              valid =
                                 valid && !!value[teamLinkTeamField.columnName];
                           const $teamFormSubmit = $$(self.ids.teamFormSubmit);
                           if (valid) $teamFormSubmit.enable();
                           else $teamFormSubmit.disable();
                        },
                     },
                  },
               ],
            },
            on: {
               onHide() {
                  this.$view.remove();
                  this.destructor();
               },
               onShow() {
                  self._setFormValues(self.ids.teamForm, value);
               },
            },
         };
      }

      _elementResponsibility(field, value) {
         // clean previous values
         delete field.linkViaOneValues;

         const formAddResponsibilityId = "b0784e31-a512-4ea9-925b-d500c0adae95";
         const fieldEntityId = "acfbfcd6-fcd4-42c9-968e-869be9ec7c5e";
         const fieldUpdatedBy = "569016c7-3b3c-4696-95be-9ec73cab1b51";
         const fieldInactiveId = "953f84f4-eb3a-4cbb-b94f-ac550cb1b34a";

         const viewForm = this.AB.Class.ABViewManager.newView(
            {
               id: `mock_form_of_${field.id}`,
               key: "form",
               settings: {
                  dataviewID: "",
                  labelWidth: FORM_LABEL_WIDTH,
               },
            },
            this.view.application
         );

         const filterConditions = {
            glue: "and",
            rules: [
               {
                  key: fieldEntityId,
                  rule: "equals",
                  value: _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.entity.getCursor()?.id,
               },
               {
                  key: fieldUpdatedBy,
                  rule: "is_current_email",
               },
               {
                  glue: "or",
                  rules: [
                     {
                        key: fieldInactiveId,
                        rule: "unchecked",
                     },
                     {
                        key: fieldInactiveId,
                        rule: "is_null",
                     },
                  ],
               },
            ],
         };

         const viewConnect = this.AB.Class.ABViewManager.newView(
            {
               id: `field_${field.id}`,
               key: "connect",
               settings: {
                  objectId: field.object.id,
                  fieldId: field.id,
                  formView: formAddResponsibilityId,
                  filterConditions,
               },
            },
            this.view.application,
            viewForm
         );
         const viewConnectComponent = viewConnect.component();
         const result = viewConnectComponent.ui();

         const inputMulticombo = result.rows[0].rows[0].cols[2];
         $$(inputMulticombo.id)?.destructor();

         inputMulticombo.value = value[field.columnName]
            ?.filter((rc) => rc)
            .map((rc) => rc.id ?? rc)
            .join(",");

         // trigger .onShow to pull/populate data
         inputMulticombo.on = inputMulticombo.on ?? {};
         inputMulticombo.on.onAfterRender = async () => {
            const $multicombo = $$(inputMulticombo.id);
            if ($multicombo.__populated) return;
            $multicombo.getList().clearAll();

            // populate values
            $multicombo.blockEvent();
            await viewConnectComponent.onShow();
            $multicombo.__populated = true;
            $multicombo.unblockEvent();
         };

         return result;
      }

      ui() {
         const self = this;
         const ids = self.ids;
         const AB = self.AB;
         const Webix = AB.Webix;
         const _ui = super.ui([
            {
               id: ids.chartView,
               // view: "template",
               responsive: true,
               type: "clean",
               rows: [
                  {
                     responsive: true,
                     view: "toolbar",
                     height: 50,
                     type: "clean",
                     cols: [
                        {
                           view: "template",
                           id: this.ids.filterButton,
                           template: `<button class="filter-button">
                              <i class="fa fa-filter"></i> ${self.label(
                                 "Filter"
                              )}</button>`,
                           align: "left",
                           width: 120,
                           onClick: {
                              "filter-button": (ev) =>
                                 self._fnShowFilterPopup(ev),
                           },
                        },
                        {
                           fillspace: true,
                        },
                        {
                           view: "template",
                           id: this.ids.progressStatus,
                           width: PROGRESS_STATUS_WIDTH,
                           hidden: true,
                           template: `<div class="progress-status">
                              <i class="fa fa-refresh progress-status-spin"></i></div>`,
                           tooltip: false,
                           onClick: {
                              "progress-status": (ev, id) => {
                                 this._progressStatusQueues = [];
                                 this._refreshProgressStatus();
                              },
                           },
                        },
                        {
                           fillspace: true,
                        },
                        this._uiDataPanelButton(),
                     ],
                  },
                  {
                     responsive: true,
                     id: ids.chartContent,
                     view: "template",
                     scroll: "auto",
                     on: {
                        onAfterRender() {
                           Webix.extend(this, Webix.ProgressBar);
                        },
                     },
                  },
               ],
            },
         ]);
         delete _ui.type;
         return _ui;
      }

      async init(AB, accessLevel) {
         await super.init(AB, accessLevel);

         this._initRole();

         const tasks = [];
         const settings = this.settings;
         _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].AB = AB;

         // WORKAROUND: Convert to the custom DC
         const teamDC = (this.datacollection =
            this._utils.createCustomDCByObjID(
               this.datacollection.datasource.id,
               {
                  linkedDC: this.datacollection.datacollectionLink,
                  filter:
                     this.datacollection.settings.objectWorkspace
                        .filterConditions,
                  populate: [_components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEAM_RESPONSIBILITY_CENTRE_FIELD_ID],
                  skipPack: true,
               }
            ));
         _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.team = teamDC;
         _components_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].initDC(teamDC);

         tasks.push(
            (async () => {
               this._addProgressStatusQueue(
                  PROGRESS_STATUS_KEY_COMMON,
                  PROGRESS_STATUS_VALUE_COMMON_INIT_PAGE
               );

               this._resources = await Promise.all(this._resources);
               this._OrgChart ||
                  (this._OrgChart = (() => {
                     const OrgChart = this._resources[0].default;
                     const _oldOnDragStart = OrgChart.prototype._onDragStart;
                     OrgChart.prototype._onDragStart = (event) => {
                        event.dataTransfer.setData("isnode", 1);
                        this.__orgchart != null &&
                           _oldOnDragStart.call(this.__orgchart, event);
                     };
                     return OrgChart;
                  })());

               this._removeProgressStatusQueue(
                  PROGRESS_STATUS_KEY_COMMON,
                  PROGRESS_STATUS_VALUE_COMMON_INIT_PAGE
               );
            })()
         );

         tasks.push(
            new Promise(async (next, fail) => {
               this._addProgressStatusQueue(
                  PROGRESS_STATUS_KEY_COMMON,
                  PROGRESS_STATUS_VALUE_COMMON_INIT_DCs
               );

               try {
                  await _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].init(AB, settings);
                  next();
               } catch (err) {
                  fail(err);
               }

               this._removeProgressStatusQueue(
                  PROGRESS_STATUS_KEY_COMMON,
                  PROGRESS_STATUS_VALUE_COMMON_INIT_DCs
               );
            })
         );

         // Data Panel
         this._dataPanels.staff.init();
         this._dataPanels.rc.init();

         await Promise.all(tasks);

         this._initDCevents();

         this._initialized = true;

         if (this._isShown) this.refresh();

         this._strategyCodeOpts = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.strategyCode
            .getData()
            .map((strategyCodeValue) => ({
               id: strategyCodeValue.id,
               value: strategyCodeValue.name,
            }))
            .sort();

         const subStrategyObjPK =
            _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.subStrategy.datasource?.PK?.();
         const subStrategyColumnName = this.AB.definitionByID(
            settings.subStrategy
         )?.columnName;
         const strategyCodeColumnName = this.AB.definitionByID(
            settings.strategyCode
         )?.columnName;

         this._strategyOpts = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.teamStrategy
            .getData()
            .map((teamStrategyValue) => ({
               id: teamStrategyValue.id,
               // TODO (Guy): Hardcode to use the name column.
               value: _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.subStrategy.getData(
                  (subStrategyValue) =>
                     subStrategyValue[subStrategyObjPK] ==
                     teamStrategyValue[subStrategyColumnName]
               )[0]?.name,
               code: teamStrategyValue[strategyCodeColumnName],
            }))
            .sort();
      }

      _initDCevents() {
         _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.entity.on(
            _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].EVENT_CHANGE_CURSOR,
            this._fnChangeEntity
         );
      }

      _initRole() {
         const userRoles = this.AB.Account.roles();
         this._roles = this._roles ?? {};
         this._roles.isAdmin =
            userRoles.filter(
               (role) => (role.uuid ?? role) == _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].ROLE_SYSTEM_ADMIN
            ).length > 0;
         this._roles.isHRG =
            userRoles.filter((role) => (role.uuid ?? role) == _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].ROLE_HRG)
               .length > 0;
         this._roles.isFinance =
            userRoles.filter(
               (role) => (role.uuid ?? role) == _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].ROLE_FINANCE
            ).length > 0;

         // Set data panel based on role
         if (
            (this._roles.isHRG && this._roles.isFinance) ||
            this._roles.isAdmin
         ) {
            // If both HRG & Finance role, treat as Admin
            this._roles.isAdmin = true;
            this._selectedDataPanel = this._dataPanels.staff;
         } else if (this._roles.isHRG) {
            this._selectedDataPanel = this._dataPanels.staff;
         } else if (this._roles.isFinance) {
            this._selectedDataPanel = this._dataPanels.rc;
         }

         this.switchDataPanel(this._selectedDataPanel);
      }

      _refreshRcView() {
         const teamDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.team;
         const fieldRc = teamDC.datasource.fields(
            (fld) => fld.id == _components_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEAM_RESPONSIBILITY_CENTRE_FIELD_ID
         )[0];

         const teamRecords = teamDC.getData();
         (teamRecords ?? []).forEach((team) => {
            // Clean up
            this._cleanUpRcView(team);

            const rcs = team[fieldRc.relationName()];
            (rcs ?? []).forEach((rc) => {
               if (!rc) return;

               this._addRcToGroup(team, rc);
            });
         });
      }

      async _refreshContentView() {
         const contentRecs = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content.getData();
         for (const contentRec of contentRecs)
            this._addContentRecordToGroup(contentRec);
      }

      _getDropZoneSections() {
         const dropzone = []
            .concat(_components_data_panel_rcDataPanel_js__WEBPACK_IMPORTED_MODULE_5__["default"].dropZoneSections)
            .concat(_components_data_panel_staffDataPanel_js__WEBPACK_IMPORTED_MODULE_4__["default"].dropZoneSections)
            .map((zone) => {
               switch (zone.id) {
                  case "RC":
                     zone.fnDrop = this._fnRcDrop;
                     break;
                  default:
                     // If HRG role, allow dropping content to Leader & Member section
                     if (this._roles.isHRG) zone.fnDrop = this._fnContentDrop;
                     break;
               }

               return zone;
            });

         // Finance role, does not show Member section
         if (this._roles.isFinance && !this._roles.isAdmin) {
            const indexMember = dropzone.findIndex(
               (zone) => zone.name == "Member"
            );
            dropzone.splice(indexMember, 1);
         }

         return dropzone;
      }

      async createData(dc, value) {
         value = this._cleanValue(dc, value);
         if (_components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.entity) {
            const entityLinkField =
               _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.entity.datasource.connectFields(
                  (f) => f.settings.linkObject === dc.datasource.id
               )[0];
            if (
               value[entityLinkField.fieldLink.columnName] == null ||
               value[entityLinkField.fieldLink.columnName] === ""
            ) {
               const entityObjPK = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.entity.datasource.PK();
               value[entityLinkField.fieldLink.columnName] =
                  _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.entity.getCursor()[entityObjPK];
            }
         }
         switch (dc) {
            case _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content:
               delete value[
                  this.AB.definitionByID(this.settings.contentFieldDateEnd)
                     .columnName
               ];
               break;
            default:
               break;
         }
         this._setUpdatedBy(dc, value);
         value = await dc.model.create(value);
         this.parseDCData(dc, value);
         return value;
      }

      async onShow() {
         this._isShown = true;
         this.AB.performance.mark("TeamChart.onShow");
         await this.refresh();
         this.AB.performance.measure("TeamChart.onShow");
      }

      async parseDCData(dc, value) {
         if (dc.isValidData(value)) {
            if (dc.$dc.exists(value.id)) dc.$dc.updateItem(value.id, value);
            else dc.$dc.add(value);
         } else dc.$dc.remove(value.id);
      }

      async refresh() {
         if (!this._initialized) {
            // alert("WHAT !!!");
            return;
         }

         this.switchDataPanel(this._selectedDataPanel);

         const ids = this.ids;
         $$(ids.teamFormPopup)?.destructor();
         $$(ids.contentForm)?.destructor();

         let tasks = [];

         // Load data of the Team Object
         await this._fetchAllData(this.datacollection);
         this._refreshOrgChart();

         // Render RC section
         tasks.push(
            new Promise(async (next) => {
               await this._utils.waitDOM();

               this._refreshRcView();
               next();
            })
         );

         let loadDcs = [
            _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content,
            ..._components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.contentDisplays,
         ];
         // Remove duplicate DCs
         loadDcs = loadDcs.filter(function (dc, pos) {
            return loadDcs.findIndex((dc2) => dc.id == dc2.id) == pos;
         });

         tasks = tasks.concat([
            ...loadDcs.map(
               (dc) =>
                  new Promise(async (next) => {
                     await this._fetchAllData(dc);
                     next();
                  })
            ),
         ]);

         await Promise.all(tasks);

         this._refreshContentView();
         // this._refreshDataPanel();

         const topTeamColumnName = this.AB.definitionByID(
            this.settings.topTeam
         ).columnName;

         if (
            this.datacollection.getData((e) => e[topTeamColumnName] == 1)
               .length === 0
         )
            this.AB.Webix.alert({
               title: `${this.label("Warning")}: ${this.label("No Team")}`,
               ok: this.label("OK"),
               text: this.label("No team is assigned to this entity"),
            });
      }

      async updateData(dc, value) {
         const id = value.id;
         value = this._cleanValue(dc, value);
         this._setUpdatedBy(dc, value);
         value = await dc.model.update(id, value);
         this.parseDCData(dc, value);
         return value;
      }

      async filterApply() {
         this.busy();
         // await this._promisePageData;
         const ids = this.ids;
         $$(ids.filterPopup).hide();
         this.__filters = $$(ids.filterForm).getValues();
         try {
            await this.refresh(false);
         } catch (err) {
            // TODO (Guy): The update data error.
            console.error(err);
         }
         this.ready();
      }

      filterTeam(teamNode) {
         const filters = this.__filters;
         let filter = false;
         filters.strategy = filters.strategy ?? "";
         filters.teamName = filters.teamName ?? "";

         // Apply filters (match using or)
         if (filters.strategy || filters.teamName) {
            filter = true;
            if (
               filters.strategy !== "" &&
               filters.strategy == teamNode.className.replace("strategy-", "")
            )
               filter = false;
            if (
               filters.teamName !== "" &&
               teamNode.name
                  .toLowerCase()
                  .includes(filters.teamName.toLowerCase())
            )
               filter = false;
            if (!filter) return filter;
         }
         const settings = this.settings;
         const contentDisplayFieldFilters =
            settings.contentDisplayedFieldFilters;
         for (const key in contentDisplayFieldFilters) {
            filters[key] = filters[key] ?? "";
            if (filters[key] !== "") filter = true;
         }
         if (!filter) return filter;
         const contentField = settings.contentField;
         const teamObj = this.datacollection.datasource;
         const contentFieldLinkColumnName = teamObj.connectFields(
            (connectField) => connectField.id === contentField
         )[0].fieldLink.columnName;
         const contentDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content;
         const contentObj = contentDC.datasource;
         const contentObjID = contentObj.id;
         const contentObjPK = contentObj.PK();
         const teamRecordPK = teamNode._rawData[teamObj.PK()];
         const contentDisplayedFields = settings.contentDisplayedFields;
         const contentDisplayedFieldKeys = Object.keys(contentDisplayedFields);
         const contentDisplayDCs = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.contentDisplays;
         let currentContentDisplayFieldKey = null;
         let currentContentDisplayDC = null;
         let currentContentDisplayObjID = null;
         let currentContentDisplayObjPK = null;
         let currentContentDisplayColumnName = null;
         let currentContentDisplayFilterValue = null;
         let currentContentDisplayRecords = [];
         while (contentDisplayedFieldKeys.length > 0) {
            currentContentDisplayFieldKey = contentDisplayedFieldKeys.pop();
            [, currentContentDisplayObjID] =
               currentContentDisplayFieldKey.split(".");
            currentContentDisplayFilterValue =
               filters[
                  `${currentContentDisplayFieldKey}.${contentDisplayedFields[currentContentDisplayFieldKey]}.0`
               ];
            if (currentContentDisplayFilterValue == null)
               currentContentDisplayFilterValue =
                  filters[
                     `${currentContentDisplayFieldKey}.${contentDisplayedFields[currentContentDisplayFieldKey]}.1`
                  ];
            if (currentContentDisplayFilterValue != null) {
               if (currentContentDisplayFilterValue === "") continue;
               currentContentDisplayFilterValue =
                  currentContentDisplayFilterValue.toString().toLowerCase();
               currentContentDisplayDC = contentDisplayDCs.find(
                  (contentDisplayDC) =>
                     contentDisplayDC.datasource.id ===
                     currentContentDisplayObjID
               );
               currentContentDisplayObjPK =
                  currentContentDisplayDC.datasource.PK();
               currentContentDisplayColumnName = this.AB.definitionByID(
                  contentDisplayedFields[currentContentDisplayFieldKey]
               ).columnName;
               currentContentDisplayRecords = currentContentDisplayDC
                  .getData(
                     (contentDisplayRecord) =>
                        contentDisplayRecord[currentContentDisplayColumnName]
                           ?.toString()
                           .toLowerCase()
                           .indexOf(currentContentDisplayFilterValue) > -1
                  )
                  .map((contentDisplayRecord) =>
                     contentDisplayRecord[
                        currentContentDisplayObjPK
                     ]?.toString()
                  );
            } else if (currentContentDisplayRecords.length > 0) {
               currentContentDisplayDC = contentDisplayDCs.find(
                  (contentDisplayDC) =>
                     contentDisplayDC.datasource.id ===
                     currentContentDisplayObjID
               );
               currentContentDisplayObjPK =
                  currentContentDisplayDC.datasource.PK();
               currentContentDisplayColumnName = this.AB.definitionByID(
                  contentDisplayedFields[currentContentDisplayFieldKey]
               ).columnName;
               currentContentDisplayRecords = currentContentDisplayDC
                  .getData((contentDisplayRecord) => {
                     const contentDisplayRecordData =
                        contentDisplayRecord[currentContentDisplayColumnName];
                     return Array.isArray(contentDisplayRecordData)
                        ? contentDisplayRecordData.findIndex(
                             (e) =>
                                currentContentDisplayRecords.indexOf(
                                   e.toString()
                                ) > -1
                          ) > -1
                        : currentContentDisplayRecords.indexOf(
                             contentDisplayRecordData?.toString()
                          ) > -1;
                  })
                  .map((contentDisplayRecord) =>
                     contentDisplayRecord[currentContentDisplayObjPK].toString()
                  );
            }
            if (
               currentContentDisplayObjID === contentObjID &&
               currentContentDisplayRecords.length > 0 &&
               contentDC
                  .getData(
                     (contentRecord) =>
                        contentRecord[contentFieldLinkColumnName] ==
                        teamRecordPK
                  )
                  .findIndex(
                     (contentRecord) =>
                        currentContentDisplayRecords.indexOf(
                           contentRecord[contentObjPK].toString()
                        ) > -1
                  ) > -1
            ) {
               filter = false;
               break;
            }
         }
         return filter;
      }

      async teamAddChild(value, isServerSideUpdate = true, children = []) {
         if (this.__orgchart == null) return;
         this.busy();
         const teamLinkTeamColumnName =
            this._getLinkedColumnNameByConnectFieldID(this.settings.teamLink);
         const teamObjPK = this.datacollection.datasource.PK();
         const parentValue = this.datacollection.getData(
            (e) => e[teamObjPK] == value[teamLinkTeamColumnName]
         )[0];
         if (
            parentValue?.[EXTERNAL_SUPPORT_COLUMNNAME] == 1 &&
            (value[EXTERNAL_SUPPORT_COLUMNNAME] == null ||
               value[EXTERNAL_SUPPORT_COLUMNNAME] === "")
         )
            value[EXTERNAL_SUPPORT_COLUMNNAME] =
               parentValue[EXTERNAL_SUPPORT_COLUMNNAME];
         if (isServerSideUpdate) {
            try {
               value = await this.createData(this.datacollection, value);
            } catch (err) {
               // TODO (Guy): The update error.
               console.error(err);
               this.ready();
               return;
            }
         }
         const parent = document.querySelector(
            `#${this.teamNodeID(value[teamLinkTeamColumnName])}`
         );
         if (parent != null) {
            const hasChild = parent.parentNode.colSpan > 1;
            const teamStrategyDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.teamStrategy;
            const teamStrategyObjPK = teamStrategyDC.datasource.PK();
            const teamStrategyColumnName = this.AB.definitionByID(
               this.settings.teamStrategy
            ).columnName;
            const strategyCodeColumnName = this.AB.definitionByID(
               this.settings.strategyCode
            ).columnName;
            const teamValuePK = value[teamObjPK];
            const newChild = {
               name: value[
                  this.AB.definitionByID(this.settings.teamName).columnName
               ],
               filteredOut: false,
               isInactive:
                  value[
                     this.AB.definitionByID(this.settings.teamInactive)
                        .columnName
                  ],
               id: this.teamNodeID(teamValuePK),
               relationship: hasChild ? "110" : "100",
               className: `strategy-${
                  teamStrategyDC.getData(
                     (e) =>
                        e[teamStrategyObjPK] == value[teamStrategyColumnName]
                  )[0]?.[strategyCodeColumnName]
               }`,
               _rawData: value,
            };
            newChild.filteredOut = this.filterTeam(newChild);

            // Need to add differently if the node already has child nodes
            if (hasChild)
               this.__orgchart.addSiblings(
                  // Sibling
                  this.closest(parent, (el) => el.nodeName === "TABLE")
                     .querySelector(".nodes")
                     .querySelector(".node"),
                  { siblings: [newChild] }
               );
            else this.__orgchart.addChildren(parent, { children: [newChild] });
            const contentLinkedColumnName =
               this._getLinkedColumnNameByConnectFieldID(
                  this.settings.contentField
               );
            await this._utils.waitDOM();
            for (const contentRecord of _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content.getData(
               (e) => e[contentLinkedColumnName] == teamValuePK
            ))
               this._addContentRecordToGroup(contentRecord);
         }
         this.ready();
      }

      teamCanInactivate(values) {
         const settings = this.settings;
         const isInactive = this.AB.definitionByID(
            settings.teamInactive
         ).columnName;
         if (values[isInactive]) return true; // Allow activating inactive teams
         const canInactive = this.AB.definitionByID(
            settings.teamCanInactivate
         ).columnName;
         if (!values[canInactive]) return false;
         const teamDC = this.datacollection;
         const teamObjPK = teamDC.datasource.PK();
         const teamLinkedColumnName = this.AB.definitionByID(
            this.AB.definitionByID(settings.teamLink).settings.linkColumn
         ).columnName;
         const teamValuePK = values[teamObjPK];
         if (
            teamDC.getData(
               (e) =>
                  e[teamLinkedColumnName] == teamValuePK &&
                  e[isInactive] == false
            ).length > 0
         )
            return false;
         const contentDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content;
         const contentLinkedColumnName =
            this._getLinkedColumnNameByConnectFieldID(settings.contentField);
         if (
            contentDC.getData((e) => e[contentLinkedColumnName] == teamValuePK)
               .length > 0
         )
            return false;
         return true;
      }

      async teamCanDelete(values) {
         const settings = this.settings;
         if (
            !values[
               this.AB.definitionByID(settings.teamCanInactivate).columnName
            ]
         )
            return false;
         const teamDC = this.datacollection;
         const teamLinkedColumnName = this.AB.definitionByID(
            this.AB.definitionByID(settings.teamLink).settings.linkColumn
         ).columnName;
         const teamValuePK = values[teamDC.datasource.PK()];
         if (
            teamDC.getData((e) => e[teamLinkedColumnName] == teamValuePK)
               .length > 0
         )
            return false;
         const contentDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.content;
         const contentLinkedColumnName =
            this._getLinkedColumnNameByConnectFieldID(settings.contentField);
         return !(
            contentDC.getData((e) => e[contentLinkedColumnName] == teamValuePK)
               .length > 0 ||
            (
               await contentDC.model.findAll({
                  limit: 1,
                  where: {
                     glue: "and",
                     rules: [
                        {
                           key: contentLinkedColumnName,
                           rule: "equals",
                           value: teamValuePK,
                        },
                     ],
                  },
               })
            ).data.length > 0
         );
      }

      teamDelete(values, isServerSideUpdate = true) {
         const $teamNode = document.querySelector(
            `#${this.teamNodeID(values.id)}`
         );
         if (isServerSideUpdate) {
            if ($teamNode.querySelectorAll(".team-group-record").length > 0)
               this.AB.Webix.alert({
                  text: this.label(
                     "Since there are assignments or teams associated with this team, this action cannot be done until all of its assignments are made inactive"
                  ),
               });
            else
               this.AB.Webix.confirm({
                  text: this.label(
                     "This will permanently remove this team. Click OK to continue or Cancel to not remove the team."
                  ),
               }).then(() => {
                  this.datacollection.model.delete(values.id);
                  this.__orgchart.removeNodes($teamNode);
               });
         } else this.__orgchart.removeNodes($teamNode);
      }

      async teamEdit(values, isServerSideUpdate = true) {
         this.busy();
         if (this.__orgchart == null) return;
         const settings = this.settings;
         let _rawData = values;
         const teamDC = this.datacollection;
         const teamObj = teamDC.datasource;
         if (isServerSideUpdate) {
            try {
               _rawData = await this.updateData(teamDC, _rawData);
            } catch (err) {
               // TODO (Guy): the update error
               console.error(err);
               this.ready();
               return;
            }
         }
         const teamNodeID = this.teamNodeID(_rawData[teamObj.PK()]);
         const $node = document.querySelector(`#${teamNodeID}`);

         // Remove inactive node from display, unless the filter setting to show
         // inctive nodes is on.
         if (
            this.__filters.inactive == 0 &&
            _rawData[this.AB.definitionByID(settings.teamInactive).columnName]
         ) {
            this.__orgchart.removeNodes($node);
            this.ready();
            return;
         }
         const oldChartData = JSON.parse($node.dataset.source);
         const linkColumnName = teamObj.fieldByID(
            this.AB.definitionByID(settings.teamLink).settings.linkColumn
         ).columnName;
         if (
            oldChartData._rawData[linkColumnName] != _rawData[linkColumnName]
         ) {
            this.__orgchart.removeNodes($node);
            this.teamAddChild(
               _rawData,
               false,
               this._getChildChartDataByID(_rawData.id)?.children
            );
            this.ready();
            return;
         }
         const teamStrategyDC = _components_dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.teamStrategy;
         const teamStrategyObjPK = teamStrategyDC.datasource.PK();
         const teamStrategyColumnName = this.AB.definitionByID(
            settings.teamStrategy
         ).columnName;
         const strategyCodeColumnName = this.AB.definitionByID(
            settings.strategyCode
         ).columnName;
         const currentStrategy =
            $node.classList?.value?.match(/strategy-\S+/)[0];
         const strategyCodeValuePK = teamStrategyDC.getData(
            (e) => e[teamStrategyObjPK] == _rawData[teamStrategyColumnName]
         )[0]?.[strategyCodeColumnName];
         const newStrategy =
            (strategyCodeValuePK && `strategy-${strategyCodeValuePK}`) ||
            currentStrategy;
         if (currentStrategy !== newStrategy) {
            $node.classList?.remove(currentStrategy);
            $node.classList?.add(newStrategy);
         }
         const teamValueName =
            _rawData[this.AB.definitionByID(settings.teamName).columnName];
         const newChartData = {
            className: newStrategy,
            filteredOut: false,
            id: teamNodeID,
            isInactive:
               _rawData[
                  this.AB.definitionByID(settings.teamInactive).columnName
               ],
            name: teamValueName,
            relationship: oldChartData.relationship,
            _rawData,
         };
         newChartData.filteredOut = this.filterTeam(newChartData);
         $node.dataset.source = JSON.stringify(newChartData);
         $node.querySelector(".title").innerHTML = teamValueName;
         this.ready();
      }

      switchDataPanel(dataPanel = null) {
         const $btnDataPanel = $$(this.ids.dataPanelButton);

         if (dataPanel) this._selectedDataPanel = dataPanel;
         // Toggle between the 2 data panels
         else if (this._selectedDataPanel == this._dataPanels.rc)
            this._selectedDataPanel = this._dataPanels.staff;
         else this._selectedDataPanel = this._dataPanels.rc;

         this.AB.Webix.ui(this._uiDataPanelButton(), $btnDataPanel);

         const $buttonSwitchDataPanel =
            document.querySelector(".switch-data-panel");

         if ($buttonSwitchDataPanel && this._roles.isAdmin)
            $buttonSwitchDataPanel.style.visibility = "visible";
      }

      // HELPERS

      /**
       * generate a id for the assignment dom node based on it's record id
       * @param {string} id record id
       */
      contentNodeID(id) {
         return `contentnode_${id}`;
      }

      /**
       * generate a id for the team dom node based on it's record id
       * @param {string} id record id
       */
      teamNodeID(id) {
         return `teamnode_${id}`;
      }

      /**
       * extract the record id from the team dom node id
       * @param {string} id dom node id
       */
      teamRecordID(id) {
         return id.split("_")[1];
      }

      /**
       * Recursively finds the closest ancestor element that matches the provided function.
       * @param {Element} el - The starting element.
       * @param {Function} fn - The function to test against.
       * @return {Element|null} The closest matching ancestor element or null if no match is found.
       */
      closest(el, fn) {
         return (
            el &&
            (fn(el) &&
            el !== document.querySelector(`#${this.ids.chartContent}`)
               ? el
               : this.closest(el.parentNode, fn))
         );
      }

      busy() {
         // const $chartView = $$(this.ids.chartContent);
         const $filterButton = $$(this.ids.filterButton);

         // $chartView.disable();
         // $chartView.showProgress({ type: "icon" });
         $filterButton.disable();
      }

      ready() {
         // const $chartView = $$(this.ids.chartContent);
         const $filterButton = $$(this.ids.filterButton);

         // $chartView.enable();
         // $chartView.hideProgress();

         $filterButton.enable();
      }

      get allDCs() {
         return this._getAllDCs();
      }

      get ORG_SENT_STATUSES() {
         return structuredClone(ORG_SENT_STATUSES);
      }
   };
}

/**
 * Creates a new HTML element with the given type and classes
 * @param {string} type - The type of the HTML element to create.
 * @param {string} classes - A space-separated list of classes to add to the element.
 * @returns {Element} The newly created HTML element.
 */
function element(type, classes = "") {
   const elem = document.createElement(type);
   if (classes) elem.classList.add(...classes.split(" "));
   return elem;
}

function sortByTeamName(a, b) {
   return (a.name ?? "").toLowerCase() > (b.name ?? "").toLowerCase() ? 1 : -1;
}


/***/ }),

/***/ "./ABViewOrgChartTeamsCore.js":
/*!************************************!*\
  !*** ./ABViewOrgChartTeamsCore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ABViewOrgChartTeamsPropertyComponentDefaults = {
   // Team settings
   datacollectionID: "",
   teamLink: "",
   teamName: "",
   topTeam: "",
   teamInactive: "",
   teamCanInactivate: "",
   teamStrategy: "",
   subStrategy: "",
   strategyCode: "",
   strategyColors: [],

   // Content settings
   contentField: "",
   contentFieldFilter: null,
   editContentFieldsToCreateNew: [],
   setEditableContentFields: [],
   contentGroupByField: "",
   showGroupTitle: 0,
   // contentDataPanelField: "",
   // contentDataPanelTabs: {},
   dataPanelDCs: {},
   contentFieldDateStart: "",
   contentFieldDateEnd: "",
   contentPrincipleField: "",
   contentDisplayedFields: {},
   contentDisplayedFieldTypes: {},
   contentDisplayedFieldMappingData: {},
   contentDisplayedFieldFilters: {},

   // Chart property settings
   draggable: 1,
   dropContentToCreate: 0,
   direction: "t2b",
   height: 0,
};

const ABViewOrgChartTeamsDefaults = {
   key: "plugin_hr_teams", // {string} unique key for this view
   icon: "users", // {string} fa-[icon] reference for this view
   labelKey: "HR Teams", // {string} the multilingual label key for the class label
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ABViewWidget) {
   return class ABViewOrgChartTeamsCore extends ABViewWidget {
      constructor(values, application, parent, defaultValues) {
         super(
            values,
            application,
            parent,
            defaultValues || ABViewOrgChartTeamsDefaults
         );
      }

      static common() {
         return ABViewOrgChartTeamsDefaults;
      }

      static defaultValues() {
         return ABViewOrgChartTeamsPropertyComponentDefaults;
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

         // Team settings
         this.settings.datacollectionID =
            this.settings.datacollectionID ??
            ABViewOrgChartTeamsPropertyComponentDefaults.datacollectionID;
         this.settings.teamLink =
            this.settings.teamLink ??
            ABViewOrgChartTeamsPropertyComponentDefaults.teamLink;
         this.settings.teamName =
            this.settings.teamName ??
            ABViewOrgChartTeamsPropertyComponentDefaults.teamName;
         this.settings.topTeam =
            this.settings.topTeam ??
            ABViewOrgChartTeamsPropertyComponentDefaults.topTeam;
         this.settings.teamInactive =
            this.settings.teamInactive ??
            ABViewOrgChartTeamsPropertyComponentDefaults.teamInactive;
         this.settings.teamCanInactivate =
            this.settings.teamCanInactivate ??
            ABViewOrgChartTeamsPropertyComponentDefaults.teamCanInactivate;
         this.settings.teamStrategy =
            this.settings.teamStrategy ??
            ABViewOrgChartTeamsPropertyComponentDefaults.teamStrategy;
         this.settings.strategyCode =
            this.settings.strategyCode ??
            ABViewOrgChartTeamsPropertyComponentDefaults.strategyCode;
         this.settings.strategyColors =
            this.settings.strategyColors ??
            ABViewOrgChartTeamsPropertyComponentDefaults.strategyColors;
         this.settings.subStrategy =
            this.settings.subStrategy ??
            ABViewOrgChartTeamsPropertyComponentDefaults.subStrategy;

         // Content settings
         this.settings.contentField =
            this.settings.contentField ??
            ABViewOrgChartTeamsPropertyComponentDefaults.contentField;
         this.settings.contentFieldFilter =
            this.settings.contentFieldFilter ??
            ABViewOrgChartTeamsPropertyComponentDefaults.contentFieldFilter;
         this.settings.editContentFieldsToCreateNew =
            this.settings.editContentFieldsToCreateNew ??
            ABViewOrgChartTeamsPropertyComponentDefaults.editContentFieldsToCreateNew;
         this.settings.setEditableContentFields =
            this.settings.setEditableContentFields ??
            ABViewOrgChartTeamsPropertyComponentDefaults.setEditableContentFields;
         this.settings.contentGroupByField =
            this.settings.contentGroupByField ??
            ABViewOrgChartTeamsPropertyComponentDefaults.contentGroupByField;
         this.settings.showGroupTitle =
            this.settings.showGroupTitle ??
            ABViewOrgChartTeamsPropertyComponentDefaults.showGroupTitle;
         //        this.settings.contentDataPanelField =
         //           this.settings.contentDataPanelField ??
         //           ABViewOrgChartTeamsPropertyComponentDefaults.contentDataPanelField;
         //        this.settings.contentDataPanelTabs =
         //           this.settings.contentDataPanelTabs ??
         //           ABViewOrgChartTeamsPropertyComponentDefaults.contentDataPanelTabs;
         this.settings.dataPanelDCs =
            this.settings.dataPanelDCs ??
            ABViewOrgChartTeamsPropertyComponentDefaults.dataPanelDCs;
         this.settings.contentFieldDateStart =
            this.settings.contentFieldDateStart ??
            ABViewOrgChartTeamsPropertyComponentDefaults.contentFieldDateStart;
         this.settings.connectFieldDateEnd =
            this.settings.connectFieldDateEnd ??
            ABViewOrgChartTeamsPropertyComponentDefaults.contentFieldDateEnd;
         this.settings.contentPrincipleField =
            this.settings.contentPrincipleField ??
            ABViewOrgChartTeamsPropertyComponentDefaults.contentPrincipleField;
         this.settings.contentDisplayedFields =
            this.settings.contentDisplayedFields ??
            ABViewOrgChartTeamsPropertyComponentDefaults.contentDisplayedFields;
         this.settings.contentDisplayedFieldTypes =
            this.settings.contentDisplayedFieldTypes ??
            ABViewOrgChartTeamsPropertyComponentDefaults.contentDisplayedFieldTypes;
         this.settings.contentDisplayedFieldMappingData =
            this.settings.contentDisplayedFieldMappingData ??
            ABViewOrgChartTeamsPropertyComponentDefaults.contentDisplayedFieldMappingData;
         this.settings.contentDisplayedFieldFilters =
            this.settings.contentDisplayedFieldFilters ??
            ABViewOrgChartTeamsPropertyComponentDefaults.contentDisplayedFieldFilters;

         // Chart property settings
         this.settings.draggable = JSON.parse(
            this.settings.draggable ??
               ABViewOrgChartTeamsPropertyComponentDefaults.draggable
         );
         this.settings.dropContentToCreate = JSON.parse(
            this.settings.dropContentToCreate ??
               ABViewOrgChartTeamsPropertyComponentDefaults.dropContentToCreate
         );
         this.settings.direction =
            this.settings.direction ??
            ABViewOrgChartTeamsPropertyComponentDefaults.direction;
         this.settings.height = parseInt(
            this.settings.height ??
               ABViewOrgChartTeamsPropertyComponentDefaults.height
         );
      }

      get datacollection() {
         const datacollectionID = (this.settings || {}).datacollectionID;

         return this.AB.datacollectionByID(datacollectionID);
      }

      getValueFields(object) {
         // OrgChart supports only one parent node.
         return (
            object?.connectFields(
               (f) => f.linkType() == "many" && f.linkViaType() == "one"
            ) ?? []
         );
      }

      /**
       * @function valueFields()
       * Return IDs of connect field for each layer of OrgChart, starting from the top to the bottom.
       *
       * @return {Array}
       *
       */
      valueFields() {
         let fieldValues = (this.settings?.fields ?? "").split(",");
         if (!Array.isArray(fieldValues)) fieldValues = [fieldValues];

         const result = [];

         let obj = this.datacollection?.datasource;
         fieldValues.forEach((fId) => {
            if (!fId) return;

            const field = obj?.fieldByID?.(fId);
            if (!field) return;

            result.push(field);
            obj = field.datasourceLink;
         });

         return result;
      }

      // descriptionField() {
      //    return this.valueField()?.datasourceLink?.fieldByID?.(
      //       this.settings.columnDescription
      //    );
      // }
   };
}


/***/ }),

/***/ "./ABViewOrgChartTeamsEditor.js":
/*!**************************************!*\
  !*** ./ABViewOrgChartTeamsEditor.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * ABViewOrgChartEditor
 * The widget that displays the UI Editor Component on the screen
 * when designing the UI.
 */
var myClass = null;
// {singleton}
// we will want to call this factory fn() repeatedly in our imports,
// but we only want to define 1 Class reference.

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(AB, FABViewDefault) {
   if (!myClass) {
      const ABViewDefault = FABViewDefault(AB);
      // var L = UIClass.L();
      // var L = ABViewContainer.L();

      myClass = class ABViewOrgChartTeamsEditor extends ABViewDefault {
         static get key() {
            return "plugin_hr_teams";
         }

         constructor(view, base = "interface_editor_viewOrgChartTeans") {
            // base: {string} unique base id reference

            super(view, base);

            // this.component = this.view.component();
         }

         ui() {
            let _ui = super.ui();
            return _ui;
         }

         init(AB) {
            this.AB = AB;
            return super.init(AB);
         }

         detatch() {
            this.component?.detatch?.();
         }

         onShow() {
            this.component?.onShow?.();
         }
      };
   }

   return myClass;
}


/***/ }),

/***/ "./ABViewOrgChartTeamsProperty.js":
/*!****************************************!*\
  !*** ./ABViewOrgChartTeamsProperty.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * ABViewChartTeams
 * A Property manager for our ABViewChartTeams definitions
 */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(AB, FABView) {
   const BASE_ID = "properties_abview_org_chart_teams";

   const ABView = FABView(AB);
   const uiConfig = AB.Config.uiSettings();
   const L = ABView.L();

   class ABViewOrgChartTeamsProperty extends ABView {
      constructor() {
         super(BASE_ID, {
            datacollectionID: "",
            strategyCode: "",
            subStrategy: "",
            teamInactive: "",
            teamCanInactivate: "",
            teamLink: "",
            teamName: "",
            teamStrategy: "",
            topTeam: "",
            fields: "",
            direction: "",
            depth: "",
            draggable: "",
            dropContentToCreate: "",
            pan: "",
            zoom: "",
            height: "",
            export: "",
            exportFilename: "",
            groupByField: "",
            showGroupTitle: "",
            editContentFieldsToCreateNew: "",
            setEditableContentFields: "",
            contentField: "",
            contentFieldFilter: "",
            contentFieldDateStart: "",
            contentFieldDateEnd: "",
            contentFieldFilterButton: "",
            contentGroupByField: "",
            contentDisplayedFields: "",
            contentDisplayedFieldsAdd: "",
            contentDisplayedFieldFilters: "",
            contentDisplayedFieldFiltersSet: "",
            contentDisplayedFieldTypes: "",
            contentDisplayedFieldTypesSet: "",
            contentDisplayedFieldMappingData: "",
            contentDisplayedFieldMappingDataSet: "",
            contentPrincipleField: "",
            showDataPanel: "",
            dataPanelDCs: "",
            dataPanelDCsAdd: "",
            strategyColorPopup: "",
            strategyColorForm: "",
            entityDatacollection: "",
         });
         this.AB = AB;
         const contentFieldFilter = (this.contentFieldFilter =
            AB.filterComplexNew(this.ids.contentFieldFilter));
         contentFieldFilter.on("save", () => {
            if (
               !contentFieldFilter.isConditionComplete(
                  contentFieldFilter.getValue()
               )
            )
               contentFieldFilter.setValue({ glue: "and", rules: [] });
            this.onChange();
         });
      }

      static get key() {
         return "plugin_hr_teams";
      }

      _uiDataPanelDC(labelValue = "", dcID = "") {
         const self = this;
         const ids = self.ids;
         const $dataPanelDCs = $$(ids.dataPanelDCs);
         const validOBJIDs = this.CurrentView.datacollection.datasource
            .fieldByID($$(ids.contentField).getValue())
            .datasourceLink.connectFields(
               (connectField) => connectField.linkType() === "one"
            )
            .map((connectField) => connectField.datasourceLink.id);
         const dcs = this.AB.datacollections(
            (dc) => validOBJIDs.indexOf(dc.datasource.id) > -1
         );
         const dcOptions = dcs.map((dc) => ({
            id: dc.id,
            value: dc.label,
            dc,
         }));
         const getUILabel = (dcID, elementIndex) => ({
            view: "text",
            name: `${elementIndex}.${dcID}`,
            // label: L("Name"),
            // labelWidth: uiConfig.labelWidthMedium,
            on: {
               onChange: () => {
                  this.onChange();
               },
               onViewShow() {
                  this.setValue(labelValue);
               },
            },
         });
         return {
            cols: [
               {
                  view: "richselect",
                  label: `${L("Panel")} ${
                     $dataPanelDCs.getChildViews().length + 1
                  }`,
                  labelWidth: uiConfig.labelWidthMedium,
                  options: dcOptions,
                  on: {
                     onChange(newValue) {
                        const $parentView = this.getParentView();
                        const sameLevelViews = $parentView.getChildViews();
                        if ($parentView.getChildViews().length === 3)
                           $parentView.removeView(sameLevelViews[1].config.id);
                        $parentView.addView(
                           getUILabel(
                              newValue,
                              $dataPanelDCs
                                 .getChildViews()
                                 .findIndex(
                                    ($dataPanelDCsChild) =>
                                       $dataPanelDCsChild === $parentView
                                 )
                           ),
                           1
                        );
                     },
                     onViewShow() {
                        if (dcID == null || dcID === "") return;
                        this.setValue(dcID);
                     },
                  },
               },
               {
                  view: "button",
                  css: "webix_danger",
                  type: "icon",
                  icon: "wxi-close",
                  width: uiConfig.buttonWidthExtraSmall,
                  click() {
                     self.deleteDataPanelDC(this.getParentView().config.id);
                     self.onChange();
                  },
               },
            ],
         };
      }

      _uiContentDisplayedField(fieldID = "", obj, atDisplay) {
         const self = this;
         const ids = self.ids;
         const datasource = this.CurrentView.datacollection.datasource;
         const datasourceID = datasource.id;
         const parentObj = datasource.fieldByID(
            $$(ids.contentField).getValue()
         ).datasourceLink;
         const parentObjID = parentObj.id;
         const objID = obj?.id || parentObjID;
         const $contentDisplayedFields = $$(ids.contentDisplayedFields);
         const $contentDisplayedFieldTypes = $$(ids.contentDisplayedFieldTypes);
         const $contentDisplayedFieldMappingData = $$(
            ids.contentDisplayedFieldMappingData
         );
         const $contentDisplayedFieldFilters = $$(
            ids.contentDisplayedFieldFilters
         );
         const filterFields = (f) => {
            const linkedObjID = f.datasourceLink?.id;
            return linkedObjID !== datasourceID && linkedObjID !== parentObjID;
         };
         const getOnSelectChangeFn =
            (currentObj, currentAtDisplay) => (newValue) => {
               const field = currentObj.fieldByID(newValue);
               if (field.key === "connectObject") {
                  $contentDisplayedFields.addView(
                     this._uiContentDisplayedField(
                        "",
                        field.datasourceLink,
                        currentAtDisplay
                     )
                  );
               }
               this.populateContentDisplayedFields(
                  $contentDisplayedFields.getValues(),
                  $contentDisplayedFieldTypes.getValues(),
                  $contentDisplayedFieldMappingData.getValues(),
                  $contentDisplayedFieldFilters.getValues()
               );
               this.onChange();
            };
         if (objID === parentObjID) {
            const rootAtDisplay = Object.keys(
               $contentDisplayedFields.elements
            ).filter((key) => key.includes(objID)).length;
            return {
               cols: [
                  {
                     view: "richselect",
                     name: `${rootAtDisplay}.${parentObjID}`,
                     label: `${L("Display")} ${rootAtDisplay + 1}`,
                     labelWidth: uiConfig.labelWidthMedium,
                     options:
                        parentObj.fields(filterFields).map(fieldToOption) || [],
                     value: fieldID,
                     on: {
                        onChange: getOnSelectChangeFn(parentObj, rootAtDisplay),
                     },
                  },
                  {
                     view: "button",
                     css: "webix_danger",
                     type: "icon",
                     icon: "wxi-close",
                     width: uiConfig.buttonWidthExtraSmall,
                     click() {
                        self.deleteContentDisplayedField(
                           this.getParentView().getChildViews()[0].config.id
                        );
                        self.onChange();
                     },
                  },
               ],
            };
         }
         return {
            cols: [
               {
                  view: "richselect",
                  name: `${atDisplay}.${objID}`,
                  label: "->",
                  labelWidth: uiConfig.labelWidthMedium,
                  options: obj.fields(filterFields).map(fieldToOption) || [],
                  value: fieldID,
                  on: {
                     onChange: getOnSelectChangeFn(obj, atDisplay),
                  },
               },
               {
                  view: "button",
                  css: "webix_danger",
                  type: "icon",
                  icon: "wxi-close",
                  width: uiConfig.buttonWidthExtraSmall,
                  click() {
                     self.deleteContentDisplayedField(
                        this.getParentView().getChildViews()[0].config.id
                     );
                     self.onChange();
                  },
               },
            ],
         };
      }

      ui() {
         const ids = this.ids;
         const contentFieldFilter = this.contentFieldFilter;
         return super.ui([
            {
               id: ids.datacollectionID,
               name: "datacollectionID",
               view: "richselect",
               label: L("Team Data"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [],
               on: {
                  onChange: (value) => {
                     this.CurrentView.settings.datacollectionID = value;
                     const obj = this.CurrentView?.datacollection?.datasource;
                     this.populateTeamFieldOptions(obj);
                     this.onChange();
                  },
               },
            },
            {
               id: ids.teamLink,
               view: "richselect",
               label: L("Team Link"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [],
               on: { onChange: () => this.onChange() },
            },
            {
               id: ids.teamName,
               view: "richselect",
               label: L("Team Name"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [],
               on: { onChange: () => this.onChange() },
            },
            {
               id: ids.topTeam,
               view: "richselect",
               label: L("Top Team"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [],
               on: { onChange: () => this.onChange() },
            },
            {
               id: ids.teamInactive,
               view: "richselect",
               label: L("Team Inactive"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [],
               on: { onChange: () => this.onChange() },
            },
            {
               id: ids.teamCanInactivate,
               view: "richselect",
               label: L("Can Inactivate"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [],
               on: { onChange: () => this.onChange() },
            },
            {
               cols: [
                  {
                     view: "label",
                     label: L("Content Field"),
                     width: uiConfig.labelWidthLarge,
                  },
                  {
                     id: ids.contentField,
                     name: "contentField",
                     view: "richselect",
                     options: [],
                     on: {
                        onChange: (newValue) => {
                           const $editContentFieldsToCreateNew = $$(
                              ids.editContentFieldsToCreateNew
                           );
                           const $setEditableContentFields = $$(
                              ids.setEditableContentFields
                           );
                           const $contentDisplayedFieldsAdd = $$(
                              ids.contentDisplayedFieldsAdd
                           );
                           const $contentFieldFilterButton = $$(
                              ids.contentFieldFilterButton
                           );
                           const $contentGroupByField = $$(
                              ids.contentGroupByField
                           );
                           const $contentPrincipleField = $$(
                              ids.contentPrincipleField
                           );
                           const $contentFieldDateStart = $$(
                              ids.contentFieldDateStart
                           );
                           const $contentFieldDateEnd = $$(
                              ids.contentFieldDateEnd
                           );
                           const $showGroupTitle = $$(ids.showGroupTitle);
                           contentFieldFilter.init();
                           contentFieldFilter.setValue({
                              glue: "and",
                              rules: [],
                           });
                           if (newValue != null && newValue !== "") {
                              const contentObj =
                                 this.CurrentView.datacollection.datasource.fieldByID(
                                    newValue
                                 ).datasourceLink;
                              const contentObjFields = contentObj.fields();
                              const contentDateFields = contentObjFields.filter(
                                 (field) =>
                                    field.key === "date" ||
                                    field.key === "datetime"
                              );
                              $contentFieldDateStart.define(
                                 "options",
                                 contentDateFields.map(fieldToOption)
                              );
                              $contentFieldDateEnd.define(
                                 "options",
                                 contentDateFields.map(fieldToOption)
                              );
                              const contentObjMappedFields =
                                 // contentObjFields.map(fieldToOption) *** (Guy) this makes my chrome browser crash (Only multi-selection) it is because { field: f } ***
                                 contentObjFields.map((contentObjField) => ({
                                    id: contentObjField.id,
                                    value: contentObjField.label,
                                 }));
                              $editContentFieldsToCreateNew.define(
                                 "options",
                                 contentObjMappedFields
                              );
                              $setEditableContentFields.define(
                                 "options",
                                 contentObjMappedFields
                              );
                              contentFieldFilter.fieldsLoad(contentObjFields);
                              $contentGroupByField.define("options", [
                                 { id: "", value: "", $empty: true },
                                 ...contentObjFields
                                    .filter(
                                       (f) => f.key === "connectObject" //&&
                                       // f.settings.isMultiple === 0
                                    )
                                    .map(fieldToOption),
                              ]);
                              $contentPrincipleField.define(
                                 "options",
                                 contentObjFields
                                    .filter((f) => f.key === "boolean")
                                    .map(fieldToOption)
                              );
                              $editContentFieldsToCreateNew.enable();
                              $contentFieldFilterButton.enable();
                              $contentDisplayedFieldsAdd.show();
                              $contentFieldDateStart.show();
                              $contentFieldDateEnd.show();
                              $contentGroupByField.show();
                              $contentPrincipleField.show();
                              $showGroupTitle.show();
                           } else {
                              $editContentFieldsToCreateNew.define(
                                 "options",
                                 []
                              );
                              contentFieldFilter.fieldsLoad([]);
                              $contentGroupByField.define("options", []);
                              $contentPrincipleField.define("options", []);
                              $editContentFieldsToCreateNew.enable();
                              $contentFieldFilterButton.disable();
                              $contentDisplayedFieldsAdd.hide();
                              $contentFieldDateStart.hide();
                              $contentFieldDateEnd.hide();
                              $contentGroupByField.hide();
                              $contentPrincipleField.hide();
                              $showGroupTitle.hide();
                           }
                           $editContentFieldsToCreateNew.setValue([]);
                           $showGroupTitle.setValue(0);
                           $contentGroupByField.setValue("");
                           this.populateContentDisplayedFields();
                           this.onChange();
                        },
                     },
                  },
                  {
                     id: ids.contentFieldFilterButton,
                     view: "button",
                     type: "icon",
                     icon: "fa fa-filter",
                     css: "webix_primary",
                     disabled: true,
                     width: uiConfig.buttonWidthExtraSmall,
                     click() {
                        contentFieldFilter.popUp(this.$view, null, {
                           pos: "top",
                        });
                     },
                  },
               ],
            },
            {
               id: ids.contentFieldDateStart,
               name: "contentFieldDateStart",
               label: L("Date Start"),
               labelWidth: uiConfig.labelWidthLarge,
               view: "richselect",
               options: [],
               on: {
                  onChange: () => {
                     this.onChange();
                  },
               },
            },
            {
               id: ids.contentFieldDateEnd,
               name: "contentFieldDateEnd",
               label: L("Date End"),
               labelWidth: uiConfig.labelWidthLarge,
               view: "richselect",
               options: [],
               on: {
                  onChange: () => {
                     this.onChange();
                  },
               },
            },
            {
               id: ids.contentGroupByField,
               hidden: true,
               name: "contentGroupByField",
               view: "richselect",
               label: L("Content Group By Field"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [],
               on: {
                  onChange: (/*newValue*/) => {
                     this.onChange();
                  },
               },
            },
            {
               id: ids.contentPrincipleField,
               hidden: true,
               name: "contentPrincipleField",
               view: "richselect",
               label: L("Principle Field"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [],
               on: {
                  onChange: () => {
                     this.onChange();
                  },
               },
            },
            {
               id: ids.showGroupTitle,
               hidden: true,
               name: "showGroupTitle",
               view: "checkbox",
               label: L("Show Group Title"),
               labelWidth: uiConfig.labelWidthLarge,
               value: 0,
               on: {
                  onChange: (/*newValue*/) => {
                     this.onChange();
                  },
               },
            },
            {
               rows: [
                  {
                     view: "label",
                     label: L(
                        "Force the creation of a new row of data by editing the content fields"
                     ),
                  },
                  {
                     id: ids.editContentFieldsToCreateNew,
                     view: "multicombo",
                     value: [],
                     options: [],
                     placeholder: L(
                        "Choose the content fields to create a new entry through editing"
                     ),
                     labelAlign: "left",
                     stringResult: false /* returns data as an array of [id] */,
                     on: {
                        onChange: () => {
                           this.onChange();
                        },
                     },
                  },
                  {
                     view: "label",
                     label: L("Set the editable content fields"),
                  },
                  {
                     id: ids.setEditableContentFields,
                     view: "multicombo",
                     value: [],
                     options: [],
                     placeholder: L("Choose the editable content fields"),
                     labelAlign: "left",
                     stringResult: false /* returns data as an array of [id] */,
                     on: {
                        onChange: () => {
                           this.onChange();
                        },
                     },
                  },
               ],
            },
            {
               id: ids.contentDisplayedFieldsAdd,
               hidden: true,
               cols: [
                  {
                     view: "label",
                     label: L("Content Displayed Fields"),
                  },
                  {
                     view: "button",
                     type: "icon",
                     icon: "fa fa-plus",
                     css: "webix_primary",
                     width: uiConfig.buttonWidthExtraSmall,
                     click: () => {
                        const $contentDisplayedFields = $$(
                           ids.contentDisplayedFields
                        );
                        if (!$contentDisplayedFields.isVisible())
                           $contentDisplayedFields.show();
                        $contentDisplayedFields.addView(
                           this._uiContentDisplayedField()
                        );
                     },
                  },
               ],
            },
            {
               id: ids.contentDisplayedFields,
               view: "form",
               hidden: true,
               elements: [],
            },
            {
               id: ids.contentDisplayedFieldTypesSet,
               hidden: true,
               rows: [
                  {
                     view: "label",
                     label: L(
                        "Set content active displays and displayed types"
                     ),
                  },
                  {
                     id: ids.contentDisplayedFieldTypes,
                     view: "form",
                     elements: [],
                  },
               ],
            },
            {
               id: ids.contentDisplayedFieldMappingDataSet,
               hidden: true,
               rows: [
                  {
                     view: "label",
                     label: L("Set content mapping displayed data"),
                  },
                  {
                     id: ids.contentDisplayedFieldMappingData,
                     view: "form",
                     elements: [],
                  },
               ],
            },
            {
               id: ids.contentDisplayedFieldFiltersSet,
               hidden: true,
               rows: [
                  {
                     view: "label",
                     label: L("Set content displayed filters by field"),
                  },
                  {
                     id: ids.contentDisplayedFieldFilters,
                     view: "form",
                     elements: [],
                  },
               ],
            },
            {
               id: ids.showDataPanel,
               name: "showDataPanel",
               view: "checkbox",
               label: L("Show Data Panel"),
               labelWidth: uiConfig.labelWidthLarge,
               value: 0,
               on: {
                  onChange: (newValue) => {
                     const $dataPanelDCsAdd = $$(ids.dataPanelDCsAdd);
                     if (newValue === 1) $dataPanelDCsAdd.show();
                     else $dataPanelDCsAdd.hide();
                     this.populateDataPanelDCs({});
                     this.onChange();
                  },
               },
            },
            {
               id: ids.dataPanelDCsAdd,
               hidden: true,
               cols: [
                  {
                     view: "label",
                     label: L("Data Panel DCs"),
                  },
                  {
                     view: "button",
                     type: "icon",
                     icon: "fa fa-plus",
                     css: "webix_primary",
                     width: uiConfig.buttonWidthExtraSmall,
                     click: () => {
                        const $dataPanelDCs = $$(ids.dataPanelDCs);
                        if (!$dataPanelDCs.isVisible()) $dataPanelDCs.show();
                        $dataPanelDCs.addView(this._uiDataPanelDC());
                     },
                  },
               ],
            },
            {
               id: ids.dataPanelDCs,
               view: "form",
               hidden: true,
               elements: [],
            },
            {
               id: ids.teamStrategy,
               view: "richselect",
               label: L("Strategy"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [],
               on: {
                  onChange: (value) => {
                     this.populateStrategyOptions(value);
                     this.onChange();
                  },
               },
            },
            {
               cols: [
                  {
                     id: ids.strategyCode,
                     view: "richselect",
                     label: L("Strategy Code"),
                     labelWidth: uiConfig.labelWidthLarge,
                     options: [],
                     on: {
                        onChange: () => {
                           this.onChange();
                           $$(this.ids.strategyColorPopup)?.close();
                        },
                     },
                  },
                  {
                     view: "icon",
                     icon: "fa fa-paint-brush",
                     allign: "right",
                     click: () => this.strategyColorPopup(),
                  },
               ],
            },
            {
               id: ids.subStrategy,
               view: "richselect",
               label: L("Sub Strategy"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [],
               on: { onChange: () => this.onChange() },
            },
            {
               id: ids.draggable,
               name: "draggable",
               view: "checkbox",
               label: L("Drag & Drop"),
               labelWidth: uiConfig.labelWidthLarge,
               value: 0,
               on: {
                  onChange: (newValue) => {
                     const $dropContentToCreate = $$(ids.dropContentToCreate);
                     if (newValue === 0) {
                        $dropContentToCreate.setValue(0);
                        $dropContentToCreate.hide();
                     } else $dropContentToCreate.show();
                     this.onChange();
                  },
               },
            },
            {
               id: ids.dropContentToCreate,
               name: "dropContentToCreate",
               view: "checkbox",
               label: L("Drop content to create"),
               labelWidth: uiConfig.labelWidthLarge,
               hidden: true,
               value: 0,
               on: { onChange: () => this.onChange() },
            },
            {
               id: ids.direction,
               name: "direction",
               view: "richselect",
               label: L("Direction"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [
                  { id: "t2b", value: L("Top to Bottom") },
                  { id: "b2t", value: L("Bottom to Top") },
                  { id: "l2r", value: L("Left to Right") },
                  { id: "r2l", value: L("Right to Left") },
               ],
               on: { onChange: () => this.onChange() },
            },
            {
               id: ids.entityDatacollection,
               name: "entityDatacollection",
               view: "richselect",
               label: L("Entity"),
               labelWidth: uiConfig.labelWidthLarge,
               options: [],
               on: {
                  onChange: () => this.onChange(),
               },
            },
            {
               id: ids.depth,
               name: "depth",
               hidden: true, // NOTE: use choose Connect Fields option
               view: "counter",
               label: L("Depth"),
               labelWidth: uiConfig.labelWidthLarge,
               value: 0,
               on: { onChange: () => this.onChange() },
            },
            {
               hidden: true, // NOTE: does not support
               id: ids.pan,
               name: "pan",
               view: "checkbox",
               label: L("Pan"),
               labelWidth: uiConfig.labelWidthLarge,
               value: 0,
               on: { onChange: () => this.onChange() },
            },
            {
               hidden: true, // NOTE: does not support
               id: ids.zoom,
               name: "zoom",
               view: "checkbox",
               label: L("Zoom"),
               labelWidth: uiConfig.labelWidthLarge,
               value: 0,
               on: { onChange: () => this.onChange() },
            },
            {
               id: ids.height,
               view: "counter",
               name: "height",
               label: L("Height"),
               labelWidth: uiConfig.labelWidthLarge,
               on: { onChange: () => this.onChange() },
            },
            {
               hidden: true, // NOTE: does not support
               view: "fieldset",
               label: L("Export"),
               body: {
                  view: "layout",
                  borderless: true,
                  rows: [
                     {
                        id: ids.export,
                        name: "export",
                        view: "checkbox",
                        label: L("Is Exportable"),
                        labelWidth: uiConfig.labelWidthLarge,
                        value: 0,
                        on: {
                           onChange: () => {
                              this.onChange();
                           },
                        },
                     },
                     {
                        id: ids.exportFilename,
                        view: "text",
                        name: "exportFilename",
                        label: L("File name"),
                        placeholder: L("Enter file name"),
                        labelWidth: uiConfig.labelWidthLarge,
                     },
                  ],
               },
            },
         ]);
      }

      async init(AB) {
         this.AB = AB;
         await super.init(AB);
         webix.extend($$(this.ids.component), webix.ProgressBar);
         this.contentFieldFilter.queriesLoad(
            this.CurrentApplication?.queriesIncluded()
         );
      }

      deleteContentDisplayedField(id) {
         const ids = this.ids;
         const $contentDisplayedFields = $$(ids.contentDisplayedFields);
         const $elements = $contentDisplayedFields.elements;
         const $richselect = $$(id);
         const deletedElementKey = $richselect.config.name;
         if (
            deletedElementKey.includes(
               this.CurrentView.datacollection.datasource.fieldByID(
                  $$(ids.contentField).getValue()
               ).datasourceLink.id
            )
         ) {
            const deletedAtDisplay = deletedElementKey.split(".")[0];
            for (const key in $elements) {
               if (!key.includes(`${deletedAtDisplay}.`)) continue;
               $contentDisplayedFields.removeView(
                  $elements[key].getParentView().config.id
               );
            }
         } else
            $contentDisplayedFields.removeView(
               $richselect.getParentView().config.id
            );
         this.populateContentDisplayedFields(
            $contentDisplayedFields.getValues()
         );
      }

      deleteDataPanelDC(id) {
         const $dataPanelDCs = $$(this.ids.dataPanelDCs);
         $dataPanelDCs.removeView(id);
         this.populateDataPanelDCs($dataPanelDCs.getValues());
      }

      populate(view) {
         super.populate(view);
         const ids = this.ids;
         const $component = $$(ids.component);
         const defaultValues = this.defaultValues();
         const values = Object.assign(
            $component.getValues(),
            Object.assign(defaultValues, view.settings)
         );
         // const $fieldList = $$(ids.fields);
         // $fieldList.clearAll();
         this.populateDatacollection(values.datacollectionId);
         const teamObj = this.CurrentView?.datacollection?.datasource;
         if (teamObj) {
            this.populateTeamFieldOptions(teamObj);
            [
               "teamCanInactivate",
               "teamInactive",
               "teamLink",
               "teamName",
               "teamStrategy",
               "topTeam",
               "contentField",
               "contentGroupByField",
               "contentPrincipleField",
               "editContentFieldsToCreateNew",
               "setEditableContentFields",
               "showGroupTitle",
               "showDataPanel",
            ].forEach((f) => $$(ids[f]).setValue(values[f]));
            this.contentFieldFilter.setValue(
               JSON.parse(values.contentFieldFilter)
            );
            this.populateContentDisplayedFields(
               values.contentDisplayedFields,
               values.contentDisplayedFieldTypes,
               values.contentDisplayedFieldMappingData,
               values.contentDisplayedFieldFilters
            );
            this.populateDataPanelDCs(values.dataPanelDCs);
            if (values.teamStrategy) {
               this.populateStrategyOptions(values.teamStrategy);
               $$(ids.strategyCode).setValue(values.strategyCode);
               $$(ids.subStrategy).setValue(values.subStrategy);
            }
         }
         $component.setValues(values);
      }

      populateDatacollection(datacollectionId) {
         const $dataCollection = $$(this.ids.datacollectionID);

         // Pull data collections to options
         const dcOptions = this.CurrentView.application
            .datacollectionsIncluded()
            .map((d) => {
               return { id: d.id, value: d.label };
            });
         $dataCollection.define("options", dcOptions);
         $dataCollection.define("value", datacollectionId);
         $dataCollection.refresh();
         $$(this.ids.entityDatacollection).define("options", dcOptions);
         $$(this.ids.entityDatacollection).refresh();
      }

      refreshValueFieldOptions(fieldValues = []) {
         const ids = this.ids;
         const view = this.CurrentView;
         const $fieldList = $$(ids.fields);

         $fieldList.clearAll();

         // Populate 1:M fields option of the root object
         this.populateSubValueFieldOptions(view.datacollection?.datasource);

         // Populate sub 1:M fields option of each fields
         fieldValues.forEach((fId) => {
            if (!fId) return;

            const $fieldItem = $fieldList.getItem(fId);
            if ($fieldItem) {
               const abField = $fieldItem.field;
               this.populateSubValueFieldOptions(abField.datasourceLink, fId);
            }
         });

         // Set check items
         $fieldList.blockEvent();
         fieldValues.forEach((fId) => {
            if ($fieldList.exists(fId)) $fieldList.checkItem(fId);
         });
         $fieldList.unblockEvent();
      }

      populateTeamFieldOptions(object) {
         const view = this.CurrentView;
         const ids = this.ids;
         const m2oFields = view.getValueFields(object).map(fieldToOption);
         const o2mFields =
            object.connectFields(
               (f) => f.linkType() == "one" && f.linkViaType() == "many"
            ) ?? [];
         $$(ids.teamStrategy).define("options", o2mFields.map(fieldToOption));
         $$(ids.teamLink).define("options", m2oFields);
         const textFields = object
            ?.fields((f) => f.key === "string")
            .map(fieldToOption);
         $$(ids.teamName).define("options", textFields);
         const booleanFields = object
            ?.fields((f) => f.key === "boolean")
            .map(fieldToOption);

         // Add an empty option as this is an optional setting.
         booleanFields.unshift({ id: "", value: "", $empty: true });
         $$(ids.topTeam).define("options", booleanFields);
         $$(ids.teamInactive).define("options", booleanFields);
         $$(ids.teamCanInactivate).define("options", booleanFields);
         $$(ids.contentField).define("options", [
            { id: "", value: "", $empty: true },
            ...m2oFields,
         ]);
      }

      populateContentDisplayedFields(
         values = {},
         types = {},
         mappingDataValues = {},
         filters = {}
      ) {
         const self = this;
         const webix = this.AB.Webix;
         const ids = this.ids;
         const $contentDisplayedFields = $$(ids.contentDisplayedFields);
         const contentDisplayedFieldsElements =
            $contentDisplayedFields.elements;
         for (const key in contentDisplayedFieldsElements)
            $contentDisplayedFields.removeView(
               contentDisplayedFieldsElements[key].getParentView().config.id
            );
         const $contentDisplayedFieldTypes = $$(ids.contentDisplayedFieldTypes);
         const contentDisplayedFieldTypesElements =
            $contentDisplayedFieldTypes.elements;
         const $contentDisplayedFieldTypesSet = $$(
            ids.contentDisplayedFieldTypesSet
         );
         for (const key in contentDisplayedFieldTypesElements)
            $contentDisplayedFieldTypes.removeView(
               contentDisplayedFieldTypesElements[key].getParentView().config.id
            );
         const $contentDisplayedFieldMappingData = $$(
            ids.contentDisplayedFieldMappingData
         );
         const contentDisplayedFieldMappingDataElements =
            $contentDisplayedFieldMappingData.elements;
         const $contentDisplayedFieldMappingDataSet = $$(
            ids.contentDisplayedFieldMappingDataSet
         );
         const $contentDisplayedFieldFilters = $$(
            ids.contentDisplayedFieldFilters
         );
         for (const key in contentDisplayedFieldMappingDataElements)
            $contentDisplayedFieldMappingData.removeView(
               contentDisplayedFieldMappingDataElements[key].getParentView()
                  .config.id
            );
         const contentDisplayedFieldFiltersElements =
            $contentDisplayedFieldFilters.elements;
         const $contentDisplayedFieldFiltersSet = $$(
            ids.contentDisplayedFieldFiltersSet
         );
         for (const key in contentDisplayedFieldFiltersElements)
            $contentDisplayedFieldFilters.removeView(
               contentDisplayedFieldFiltersElements[key].getParentView().config
                  .id
            );
         $contentDisplayedFieldTypesSet.hide();
         $contentDisplayedFieldMappingDataSet.hide();
         $contentDisplayedFieldFiltersSet.hide();
         const keys = Object.keys(values);
         if (keys.length === 0) {
            $contentDisplayedFields.hide();
            return;
         }
         const obj = this.CurrentView.datacollection.datasource.fieldByID(
            $$(ids.contentField).getValue()
         )?.datasourceLink;
         if (obj == null) {
            $contentDisplayedFields.hide();
            $$(ids.contentDisplayedFieldsAdd).hide();
            return;
         }
         const typeKeys = Object.keys(types);
         const filterKeys = Object.keys(filters);
         const objID = obj.id;
         const parentKeys = [];
         const childKeys = [];
         const createOptionsView = (key, field) => {
            const optionPrefix = `${key}.${field.id}`;
            const fieldLabel = field.label;
            const typeKeyIndex = typeKeys.findIndex(
               (typeKey) => typeKey.indexOf(optionPrefix) > -1
            );
            const typeSwitchValue = parseInt(
               typeKeys
                  .find((typeKey) => typeKey.indexOf(optionPrefix) > -1)
                  ?.split(".")[3]
            );
            $contentDisplayedFieldTypes.addView({
               cols: [
                  {
                     view: "switch",
                     label: fieldLabel,
                     labelWidth: uiConfig.labelWidthMedium,
                     value: isNaN(typeSwitchValue) ? 1 : typeSwitchValue,
                     on: {
                        onChange: (newValue, oldValue) => {
                           const oldTypes =
                              $contentDisplayedFieldTypes.getValues();
                           const oldTypeEntries = Object.entries(oldTypes);
                           const newTypes = {};
                           const oldTypePrefix = `${optionPrefix}.${oldValue}`;
                           for (const [key, value] of oldTypeEntries)
                              if (key.indexOf(oldTypePrefix) > -1)
                                 newTypes[`${optionPrefix}.${newValue}`] =
                                    value;
                              else newTypes[key] = value;
                           this.populateContentDisplayedFields(
                              $contentDisplayedFields.getValues(),
                              newTypes,
                              $contentDisplayedFieldMappingData.getValues(),
                              $contentDisplayedFieldFilters.getValues()
                           );
                           this.onChange();
                        },
                        onViewShow() {
                           this.getParentView().addView({
                              view: "richselect",
                              options: [
                                 { id: "icon", value: "Icon" },
                                 { id: "image", value: "Image" },
                                 { id: "svg", value: "SVG" },
                                 { id: "text", value: "Text" },
                              ],
                              name: `${optionPrefix}.${this.getValue()}`,
                              value:
                                 (typeKeyIndex > -1 &&
                                    types[typeKeys[typeKeyIndex]]) ||
                                 "text",
                              on: {
                                 onChange: () => {
                                    self.onChange();
                                 },
                              },
                           });
                        },
                     },
                  },
               ],
            });
            const mappingDataValue = mappingDataValues[optionPrefix];
            $contentDisplayedFieldMappingData.addView({
               cols: [
                  {
                     view: "label",
                     label: fieldLabel,
                     width: uiConfig.labelWidthMedium,
                  },
                  {
                     view: "button",
                     label: "Set",
                     width: uiConfig.buttonWidthExtraSmall,
                     click: () => {
                        const getValueViewUI = (key = "", value = "") => ({
                           cols: [
                              {
                                 view: "text",
                                 placeholder: L("The value need to map."),
                                 value: key,
                              },
                              {
                                 view: "label",
                                 label: L("to"),
                                 align: "center",
                                 width: uiConfig.labelWidthSmall,
                              },
                              {
                                 view: "text",
                                 placeholder: (() => {
                                    switch (value) {
                                       case "icon":
                                          return L("Icon class text.");
                                       case "image":
                                       case "svg":
                                          return L(
                                             "Image url or Base64 (ex. data:image/png;base64,AAABBBCCC) url."
                                          );
                                       default:
                                          return L("New text.");
                                    }
                                 })(),
                                 value,
                              },
                              {
                                 view: "button",
                                 css: "webix_danger",
                                 type: "icon",
                                 icon: "wxi-close",
                                 width: uiConfig.buttonWidthExtraSmall,
                                 click() {
                                    const $childView = this.getParentView();
                                    $childView
                                       .getParentView()
                                       .removeView($childView.config.id);
                                 },
                              },
                           ],
                        });
                        const $popup = webix.ui({
                           view: "window",
                           close: true,
                           title: L("Map Data"),
                           position: "center",
                           body: {
                              view: "form",
                              elements: [
                                 {
                                    view: "button",
                                    label: L("Add a value"),
                                    click() {
                                       this.getParentView()
                                          .getChildViews()[1]
                                          .addView(getValueViewUI());
                                    },
                                 },
                                 {
                                    rows: [],
                                 },
                                 {
                                    view: "button",
                                    label: L("Apply"),
                                    click() {
                                       const $valueView =
                                          this.getParentView().getChildViews()[1];
                                       const mapingValues = {};
                                       const valueChildViews =
                                          $valueView.getChildViews();
                                       for (const $valueChildView of valueChildViews) {
                                          const valueChildViewElements =
                                             $valueChildView.getChildViews();
                                          mapingValues[
                                             valueChildViewElements[0].getValue()
                                          ] =
                                             valueChildViewElements[2].getValue();
                                       }
                                       $contentDisplayedFieldMappingData.elements[
                                          optionPrefix
                                       ]?.setValue(
                                          JSON.stringify(mapingValues)
                                       );
                                       $popup.hide();
                                       self.onChange();
                                    },
                                 },
                              ],
                           },
                           on: {
                              onHide() {
                                 this.destructor();
                              },
                           },
                        });
                        try {
                           const $valueView = $popup
                              .getChildViews()[1]
                              .getChildViews()[1];
                           const mappingDataObj = JSON.parse(mappingDataValue);
                           for (const key in mappingDataObj)
                              $valueView.addView(
                                 getValueViewUI(key, mappingDataObj[key])
                              );
                        } catch {}
                        $popup.show();
                     },
                  },
                  {
                     view: "text",
                     name: optionPrefix,
                     disabled: true,
                     value: mappingDataValue || JSON.stringify({}),
                  },
               ],
            });
            const filterCheckboxValue = parseInt(
               filterKeys
                  .find((filterKey) => filterKey.indexOf(optionPrefix) > -1)
                  ?.split(".")[3]
            );
            $contentDisplayedFieldFilters.addView({
               cols: [
                  {
                     view: "checkbox",
                     label: fieldLabel,
                     labelWidth: uiConfig.labelWidthMedium,
                     value: isNaN(filterCheckboxValue)
                        ? 0
                        : filterCheckboxValue,
                     on: {
                        onChange: (newValue, oldValue) => {
                           const oldFilters =
                              $contentDisplayedFieldFilters.getValues();
                           const oldFilterEntries = Object.entries(oldFilters);
                           const newFilters = {};
                           const oldFilterKey = `${optionPrefix}.${oldValue}`;
                           for (const [key, value] of oldFilterEntries)
                              if (key === oldFilterKey)
                                 newFilters[`${optionPrefix}.${newValue}`] = "";
                              else newFilters[key] = value;
                           this.populateContentDisplayedFields(
                              $contentDisplayedFields.getValues(),
                              $contentDisplayedFieldTypes.getValues(),
                              $contentDisplayedFieldMappingData.getValues(),
                              newFilters
                           );
                           this.onChange();
                        },
                        onViewShow() {
                           const currentFilterCheckboxValue = this.getValue();
                           const filterKey = `${optionPrefix}.${currentFilterCheckboxValue}`;
                           this.getParentView().addView({
                              view: "text",
                              placeholder: L("Add the new field label."),
                              name: filterKey,
                              value: filters[filterKey] || fieldLabel,
                              disabled:
                                 currentFilterCheckboxValue === 1
                                    ? false
                                    : true,
                              on: {
                                 onChange: () => {
                                    self.onChange();
                                 },
                              },
                           });
                        },
                     },
                  },
               ],
            });
         };
         while (keys.length > 0) {
            const key = keys.pop();
            (key.includes(objID) && parentKeys.push(key)) ||
               childKeys.push(key);
         }
         while (parentKeys.length > 0) {
            const parentKey = parentKeys.pop();
            const parentFieldID = values[parentKey] ?? "";
            $contentDisplayedFields.addView(
               this._uiContentDisplayedField(parentFieldID)
            );
            const parentField = obj.fieldByID(parentFieldID);
            if (parentField == null) continue;
            switch (parentField.key) {
               case "connectObject":
               case "user":
                  break;
               default:
                  createOptionsView(parentKey, parentField);
                  continue;
            }
            const currentAtDisplay =
               Object.keys($contentDisplayedFields.getValues()).filter(
                  (currentKey) => currentKey.includes(objID)
               ).length - 1;
            while (
               childKeys.findIndex((childKey) =>
                  childKey.includes(`${parentKey.split(".")[0]}.`)
               ) > -1
            ) {
               const childKey = childKeys.pop();
               const childObj = this.AB.objectByID(childKey.split(".")[1]);
               const childFieldID = values[childKey] ?? "";
               $contentDisplayedFields.addView(
                  this._uiContentDisplayedField(
                     childFieldID,
                     childObj,
                     currentAtDisplay
                  )
               );
               const childField = childObj.fieldByID(childFieldID);
               if (childField == null) continue;
               switch (childField.key) {
                  case "connectObject":
                  case "user":
                     break;
                  default:
                     createOptionsView(childKey, childField);
                     continue;
               }
            }
         }
         $contentDisplayedFields.show();
         $contentDisplayedFieldTypesSet.show();
         $contentDisplayedFieldMappingDataSet.show();
         $contentDisplayedFieldFiltersSet.show();
      }

      populateDataPanelDCs(values) {
         const ids = this.ids;
         const $dataPanelDCs = $$(ids.dataPanelDCs);
         const dataPanelDCsChidren = $dataPanelDCs.getChildViews();
         while (dataPanelDCsChidren.length > 0)
            $dataPanelDCs.removeView(dataPanelDCsChidren[0].config.id);
         $dataPanelDCs.hide();
         const contentFieldValue = $$(ids.contentField).getValue();
         const keys = Object.keys(values);
         if (
            contentFieldValue == null ||
            contentFieldValue === "" ||
            keys.length === 0
         )
            return;
         while (keys.length > 0) {
            const key = keys.shift();
            $dataPanelDCs.addView(
               this._uiDataPanelDC(values[key] ?? "", key.split(".")[1] ?? "")
            );
         }
         $dataPanelDCs.show();
      }

      populateStrategyOptions(fieldID) {
         const strategyObj = this.AB.objectByID(
            this.AB.definitionByID(fieldID).settings.linkObject
         );
         const listFields = strategyObj
            .fields((f) => f.key === "connectObject")
            .map(fieldToOption);
         $$(this.ids.strategyCode).define("options", listFields);
         $$(this.ids.subStrategy).define("options", listFields);
      }

      async strategyColorPopup() {
         const codeFieldID = $$(this.ids.strategyCode).getValue();
         if (!codeFieldID) return;

         let $popup = $$(this.ids.strategyColorPopup);

         if (!$popup) {
            const values = this.CurrentView.settings.strategyColors ?? {};
            const link =
               this.AB.definitionByID(codeFieldID).settings.linkObject;
            const strategies = await this.AB.objectByID(link).model().findAll();
            const strategyTypes = strategies.data.map((strategy) => {
               return {
                  view: "colorpicker",
                  label: strategy.name,
                  name: strategy.id,
                  value: values[strategy.id] ?? "#111111",
                  suggest: {
                     type: "colorselect",
                     body: {
                        button: true,
                     },
                  },
               };
            });

            $popup = this.AB.Webix.ui({
               view: "window",
               id: this.ids.strategyColorPopup,
               close: true,
               title: L("Set Colors"),
               position: "center",
               body: {
                  view: "form",
                  id: this.ids.strategyColorForm,
                  elements: [
                     ...strategyTypes,
                     {
                        view: "button",
                        label: L("Apply"),
                        click: () => {
                           this.onChange();
                           $$(this.ids.strategyColorPopup).hide();
                        },
                     },
                  ],
               },
            });
         }
         $popup.show();
      }

      // populateDescriptionFieldOptions(fieldId) {
      //    const valueField = this.CurrentView.valueField();
      //    const $columnDescription = $$(this.ids.columnDescription);

      //    const connectFieldOpts =
      //       valueField?.datasourceLink
      //          ?.fields?.((f) => f.key != "connectObject")
      //          .map?.((f) => {
      //             return {
      //                id: f.id,
      //                value: f.label,
      //             };
      //          }) ?? [];
      //    $columnDescription.define("options", connectFieldOpts);
      //    $columnDescription.define("value", fieldId);
      //    $columnDescription.refresh();
      // }

      defaultValues() {
         const ViewClass = this.ViewClass();

         let values = null;

         if (ViewClass) {
            values = ViewClass.defaultValues();
         }

         return values;
      }

      /**
       * @method values
       * return the values for this form.
       * @return {obj}
       */
      values() {
         const values = super.values();
         const ids = this.ids;
         const settings = (values.settings = Object.assign(
            $$(ids.component).getValues(),
            values.settings
         ));
         // Retrive the values of your properties from Webix and store them in the view
         settings.teamLink = $$(ids.teamLink).getValue();
         settings.teamName = $$(ids.teamName).getValue();
         settings.topTeam = $$(ids.topTeam).getValue();
         settings.teamInactive = $$(ids.teamInactive).getValue();
         settings.teamCanInactivate = $$(ids.teamCanInactivate).getValue();
         settings.teamStrategy = $$(ids.teamStrategy).getValue();
         settings.subStrategy = $$(ids.subStrategy).getValue();
         settings.strategyCode = $$(ids.strategyCode).getValue();
         settings.dataCollectionId = $$(ids.datacollectionID).getValue();
         settings.contentField = $$(ids.contentField).getValue();
         settings.contentGroupByField = $$(ids.contentGroupByField).getValue();
         settings.contentPrincipleField = $$(
            ids.contentPrincipleField
         ).getValue();
         settings.editContentFieldsToCreateNew = $$(
            ids.editContentFieldsToCreateNew
         ).getValue();
         settings.setEditableContentFields = $$(
            ids.setEditableContentFields
         ).getValue();
         settings.contentFieldFilter = JSON.stringify(
            this.contentFieldFilter.getValue()
         );
         settings.contentDisplayedFields = $$(
            ids.contentDisplayedFields
         ).getValues();
         settings.contentDisplayedFieldTypes = $$(
            ids.contentDisplayedFieldTypes
         ).getValues();
         settings.contentDisplayedFieldMappingData = $$(
            ids.contentDisplayedFieldMappingData
         ).getValues();
         settings.contentDisplayedFieldFilters = $$(
            ids.contentDisplayedFieldFilters
         ).getValues();
         settings.contentFieldDateStart = $$(
            ids.contentFieldDateStart
         ).getValue();
         settings.contentFieldDateEnd = $$(ids.contentFieldDateEnd).getValue();
         settings.dataPanelDCs = $$(ids.dataPanelDCs).getValues();
         const $colorForm = $$(ids.strategyColorForm);
         settings.strategyColors =
            $colorForm?.getValues() ?? settings.strategyColors;
         return values;
      }

      /**
       * @method FieldClass()
       * A method to return the proper ABViewXXX Definition.
       * NOTE: Must be overwritten by the Child Class
       */
      ViewClass() {
         return super._ViewClass("plugin_hr_teams");
      }
   }

   return ABViewOrgChartTeamsProperty;
}

function fieldToOption(f) {
   return {
      id: f.id,
      value: f.label,
      field: f,
   };
}


/***/ }),

/***/ "./components/constants.js":
/*!*********************************!*\
  !*** ./components/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
   EVENT_CHANGE_CURSOR: "changeCursor",
   EVENT_CREATE: "create",
   EVENT_LOAD_DATA: "loadData",
   RECORD_LIMIT: 1000,
   ONE_SECOND: 1000,

   // TODO: will add this to Property settings later.
   RESPONSIBILITY_ASSIGNMENT_FIELD_ID: "843c8c88-8a2e-11f0-84bd-0242ac150002",
   TEAM_RESPONSIBILITY_CENTRE_FIELD_ID: "0b4f6895-9860-11f0-ac08-0242ac150002",
   RESPONSIBILITY_CENTRE_ENTITY_FIELD_ID:
      "f06a2e30-9847-11f0-8a6b-0242ac150003",
   RESPONSIBILITY_CENTRE_DC_ID: "3791954c-89c4-4372-84af-9fe8a0b0bec8",
   RESPONSIBILITY_CENTRE_INACTIVE_FIELD_ID:
      "0247418d-9855-11f0-a3a3-0242ac150003",

   ROLE_SYSTEM_ADMIN: "dd6c2d34-0982-48b7-bc44-2456474edbea",
   ROLE_HRG: "39ae03d7-0350-4227-b6e1-e03777688eff",
   ROLE_FINANCE: "e32dbd38-2300-4aac-84a9-d2c704bd2a29",
});


/***/ }),

/***/ "./components/data_panel/_DataPanel.js":
/*!*********************************************!*\
  !*** ./components/data_panel/_DataPanel.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataPanel)
/* harmony export */ });
class DataPanel {
   static get icon() {
      return "fa-square";
   }
   static get label() {
      return "DATA PANEL LABEL";
   }

   init() {}

   show() {}

   refresh() {}
}


/***/ }),

/***/ "./components/data_panel/rcDataPanel.js":
/*!**********************************************!*\
  !*** ./components/data_panel/rcDataPanel.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RcDataPanel)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./components/constants.js");
/* harmony import */ var _DataPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataPanel.js */ "./components/data_panel/_DataPanel.js");
/* harmony import */ var _dcContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dcContainer.js */ "./components/dcContainer.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./components/utils.js");





class RcDataPanel extends _DataPanel_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
   static get icon() {
      return "fa-university";
   }
   static get label() {
      return "Responsibility Centre";
   }

   static get dropZoneSections() {
      return [
         {
            id: "RC",
            name: "Responsibility Centre",
            icon: "fa fa-university",
            extraClass: "responsibility-centre",
         },
      ];
   }

   constructor(AB, ids, settings) {
      super();

      this._utils = new _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"](AB);

      this.AB = AB;
      this.ids = ids;
      this.settings = settings;
   }

   init() {
      _dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.responsibilityCenter = this.AB.datacollectionByID(
         _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].RESPONSIBILITY_CENTRE_DC_ID
      );
      // DcContainer.list.responsibilityCenter.init();
      // Utils.initDC(DcContainer.list.responsibilityCenter);

      // const RESPONSIBILITY_CENTRE_TEAM_FIELD_ID =
      //    this._utils.getLinkedFieldIDByConnectFieldID(
      //       CONST.TEAM_RESPONSIBILITY_CENTRE_FIELD_ID
      //    );

      // DcContainer.list.responsibilityCenter = this._utils.createCustomDCByObjID(
      //    this._utils.getLinkedObjIDByConnectFieldID(
      //       CONST.TEAM_RESPONSIBILITY_CENTRE_FIELD_ID
      //    ),
      //    {
      //       loadAll: true,
      //       linkedDC: DcContainer.list.entity,
      //       select: ["id", "name", CONST.RESPONSIBILITY_CENTRE_ENTITY_FIELD_ID],
      //       // populate: [RESPONSIBILITY_CENTRE_TEAM_FIELD_ID],
      //       // T T
      //       skipPack: true,
      //       filter: {
      //          glue: "and",
      //          rules: [
      //             {
      //                key: CONST.RESPONSIBILITY_CENTRE_INACTIVE_FIELD_ID,
      //                rule: "unchecked",
      //             },
      //          ],
      //       },
      //    }
      // );
   }

   show(ev) {
      if (this._popup == null) {
         this._popup = this.AB.Webix.ui(this._uiPopup());
         const $list = $$(this.ids.dataPanelRcList);
         this.AB.Webix.extend($list, this.AB.Webix.ProgressBar);
         // DcContainer.list.responsibilityCenter.bind($list);
      }

      this._popup.show(ev, { pos: "bottom", x: -12, y: 16 });
   }

   async refresh() {
      const $list = $$(this.ids.dataPanelRcList);
      $list.clearAll();
      this._busy();

      // Refresh data
      const dcRC = _dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.responsibilityCenter;
      const linkDC = dcRC.datacollectionLink;
      if (this._previousParentDcCursorId != linkDC.getCursor()?.id) {
         await dcRC.loadData(0, _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].RECORD_LIMIT);
         this._previousParentDcCursorId = linkDC.getCursor()?.id;
      }

      const dc = _dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.responsibilityCenter;
      _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].initDC(dc);
      await this._utils.waitDCReady(dc);
      const rcList = dc.getData() ?? [];
      $list.parse(rcList);
      this._filterRCList();

      this._ready();
   }

   _ui() {
      return {
         rows: [
            {
               id: this.ids.dataPanelRcSearch,
               view: "search",
               align: "center",
               placeholder: "Search by title...",
               on: {
                  onTimedKeyPress: () => {
                     this._filterRCList();
                  },
               },
            },
            {
               id: this.ids.dataPanelRcFilterMode,
               view: "segmented",
               options: [
                  { id: "all", value: "All" },
                  { id: "unplaced", value: "Unplaced" },
                  { id: "placed", value: "Placed" },
               ],
               on: {
                  onChange: () => {
                     this._filterRCList();
                  },
               },
            },
            {
               id: this.ids.dataPanelRcList,
               view: "list",
               width: 310,
               height: 500,
               template: (item) => {
                  return `${item.name}`;
               },
               type: {
                  css: "cursor-move",
                  height: 35,
                  width: 310,
               },
               select: false,
               drag: false,
               data: [],
               on: {
                  onAfterRender: () => {
                     const $list = $$(this.ids.dataPanelRcList);
                     $list.$view
                        .querySelectorAll(".cursor-move")
                        .forEach((elem, inx) => {
                           elem.id = `rc_datapanel_${inx}`;
                           elem.dataset.id = $list.getIdByIndex(inx);
                           elem.setAttribute("draggable", "true");
                           elem.addEventListener("dragstart", (event) => {
                              this._fnDragStart(elem.id, event);
                           });
                        });
                  },
               },
            },
         ],
      };
   }

   _uiPopup() {
      return {
         view: "popup",
         width: 310,
         body: this._ui(),
         on: {
            onShow: () => {
               this.refresh();
            },
         },
      };
   }

   _filterRCList() {
      const ids = this.ids;
      const mode = $$(ids.dataPanelRcFilterMode).getValue();
      const searchText = $$(ids.dataPanelRcSearch).getValue().toLowerCase();

      const teamDC = _dcContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"].list.team;
      const fieldRc = teamDC.datasource.fields(
         (fld) => fld.id == _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].TEAM_RESPONSIBILITY_CENTRE_FIELD_ID
      )[0];

      // Get placed RC ids
      const placedRCIds = new Set();
      (teamDC.getData() ?? []).forEach((team) => {
         (team?.[fieldRc.relationName()] ?? []).forEach((rc) => {
            if (!rc) return;
            placedRCIds.add(rc.id);
         });
      });

      const filterSearch = (item) =>
         searchText == "" || item.name.toLowerCase().indexOf(searchText) != -1;

      switch (mode) {
         case "all":
            $$(ids.dataPanelRcList).filter((item) => filterSearch(item));
            break;
         case "unplaced":
            $$(ids.dataPanelRcList).filter((item) => {
               return filterSearch(item) && placedRCIds.has(item.id) == false;
            });
            break;
         case "placed":
            $$(ids.dataPanelRcList).filter((item) => {
               return filterSearch(item) && placedRCIds.has(item.id);
            });
            break;
      }
   }

   _busy() {
      const $search = $$(this.ids.dataPanelRcSearch);
      const $list = $$(this.ids.dataPanelRcList);

      $search.disable();
      $list.disable();
      $list.showProgress({ type: "icon" });
   }

   _ready() {
      const $search = $$(this.ids.dataPanelRcSearch);
      const $list = $$(this.ids.dataPanelRcList);

      $search.enable();
      $list.enable();
      $list.hideProgress();
   }

   _fnDragStart(domId, event) {
      event.stopPropagation();
      event.dataTransfer.setData("id", domId);
      event.dataTransfer.setData("isRC", 1);
   }
}


/***/ }),

/***/ "./components/data_panel/staffDataPanel.js":
/*!*************************************************!*\
  !*** ./components/data_panel/staffDataPanel.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StaffDataPanel)
/* harmony export */ });
/* harmony import */ var _DataPanel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_DataPanel.js */ "./components/data_panel/_DataPanel.js");
/* harmony import */ var _dcContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dcContainer.js */ "./components/dcContainer.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./components/utils.js");




class StaffDataPanel extends _DataPanel_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
   static get icon() {
      return "fa-user";
   }
   static get label() {
      return "Staff Assignment";
   }
   static get dropZoneSections() {
      const contentGroupDC = _dcContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"].list.contentGroup;
      const groupObjPKColumeName = contentGroupDC.datasource.PK();
      const contentGroupOptions = contentGroupDC.getData() ?? [];

      return contentGroupOptions.map((group) => {
         group.id = group[groupObjPKColumeName];

         switch (group.name) {
            case "Leader":
               group.extraClass = "leader";
               group.icon = "fa fa-user-circle-o";
               break;
            case "Member":
               group.icon = "fa fa-users";
               break;
         }

         return group;
      });
   }

   constructor(AB, ids, settings) {
      super();

      this._utils = new _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"](AB);

      this.AB = AB;
      this.ids = ids;
      this.settings = settings;
   }

   init() {
      // Preparing for the data panel DCs.
      const dataPanelDCs = this.settings.dataPanelDCs;
      for (const key in dataPanelDCs) {
         const [, dataPanelDCID] = key.split(".");
         const _dataPanelDC = this.AB.datacollectionByID(dataPanelDCID);
         _dcContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"].list.dataPanels.findIndex(
            (_dataPanelDC) => _dataPanelDC.id === dataPanelDCID
         ) < 0 && _dcContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"].list.dataPanels.push(_dataPanelDC);
         _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].initDC(_dataPanelDC);
      }
   }

   show() {
      let $panel = $$(this.ids.dataPanelPopup);
      if (!$panel) {
         $panel = this.AB.Webix.ui({
            id: this.ids.dataPanelPopup,
            view: "window",
            height: 500,
            width: 270,
            headHeight: 35,
            // head: {
            //    view: "template",
            //    borderless: true,
            //    template: `<div><span class="fa fa-close data-panel-close"></span></div>`,
            //    height: 35,
            //    onClick: {
            //       "data-panel-close": () => {
            //          $$(this.ids.dataPanelPopup).hide();
            //          this._resizeObserver?.unobserve(
            //             $$(this.ids.dataPanelButton).$view
            //          );
            //          return false;
            //       },
            //    },
            // },
            body: this._ui(),
            css: "data-panel-popup",
            close: true,
            move: true,
            modal: true,
            resize: true,
         });
      }

      // toggle
      if ($panel.isVisible()) {
         $panel.hide();
         return;
      }

      const $dpButtonWebix = $$(this.ids.dataPanelButton).$view;
      const $dpButtonElem = $dpButtonWebix.querySelector(".data-panel-button");
      // Ensure the popup will stay to the right when resizing
      // if (!this._resizeObserver && ResizeObserver) {
      //    this._resizeObserver = new ResizeObserver(([e]) => {
      //       // Hide the panel when the widget is hidden (ex. switched to another App)
      //       if (e.contentRect.width == 0 && e.contentRect.height == 0) {
      //          return $panel.hide();
      //       }
      //       // $panel.show($dpButtonElem, { x: -30, y: -35 });
      //       $panel.show($dpButtonElem, { pos: "bottom", x: -30 });
      //    });
      // }
      // this._resizeObserver.observe($dpButtonWebix);
      // $panel.show($dpButtonElem, { x: -30, y: -35 });
      $panel.show($dpButtonElem, { pos: "bottom", x: -30 });
      this.refresh();
   }

   refresh() {
      $$(this.ids.dataPanel)
         ?.getChildViews()[1]
         .getChildViews()
         .forEach(($childView) => $childView.callEvent("onViewShow"));
   }

   _ui() {
      const self = this;
      const _dataPanelDCs = _dcContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"].list.dataPanels;
      const dataPanelDCs = self.settings.dataPanelDCs;
      const contentObjID = self._utils.getLinkedObjIDByConnectFieldID(
         self.settings.contentField
      );
      const cells = [];
      for (const key in dataPanelDCs) {
         const [tabIndex, dataPanelDCID] = key.split(".");

         // TODO (Guy): Hardcode data panel DCs for Employee.
         // const _dataPanelDC = _dataPanelDCs.find(
         //    (dataPanelDC) => dataPanelid === dataPanelDCID
         // );
         const _dataPanelDC = _dcContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"].list.contentDisplays.find(
            (contentDisplayDC) =>
               contentDisplayDC.datasource.id ===
               _dataPanelDCs.find(
                  (dataPanelDC) => dataPanelDC.id === dataPanelDCID
               ).datasource.id
         );
         const contentDC = _dcContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"].list.content;
         const header = dataPanelDCs[key];
         if (_dataPanelDC == null)
            cells.push({
               header,
               body: {
                  view: "list",
                  // css: { overflow: "auto", "max-height": "90%" },
                  data: [],
               },
            });
         else {
            const panelObj = _dataPanelDC.datasource;
            cells.push({
               header,
               body: {
                  view: "list",
                  template: (data) =>
                     `<div class="data-panel-employee"><span class="initials">${
                        data.initials
                     }</span> ${panelObj.displayData(data)}</div>`,
                  borderless: true,
                  // css: "data-panel-employee-list",
                  data: [],
                  on: {
                     async onViewShow() {
                        await self._utils.waitDCReady(_dataPanelDC);
                        const contentLinkedField = panelObj.connectFields(
                           (field) => field.datasourceLink.id == contentObjID
                        )[0].fieldLink;
                        const contentLinkedColumnName =
                           contentLinkedField.columnName;
                        this.clearAll();
                        this.define(
                           "data",
                           // TODO (Guy): Hardcode Employee DC.
                           (parseInt(tabIndex) < 2
                              ? _dataPanelDC.getData(
                                   (panelRecord) =>
                                      panelRecord.isinactive !== "T" &&
                                      (tabIndex === "0"
                                         ? contentDC.getData(
                                              (contentRecord) =>
                                                 contentRecord[
                                                    contentLinkedColumnName
                                                 ] == panelRecord.id
                                           )[0] == null
                                         : contentDC.getData(
                                              (contentRecord) =>
                                                 contentRecord[
                                                    contentLinkedColumnName
                                                 ] == panelRecord.id
                                           )[0] != null)
                                )
                              : _dataPanelDCs
                                   .find(
                                      (dataPanelDC) =>
                                         dataPanelDC.id === dataPanelDCID
                                   )
                                   .getData()
                           ).sort(self._utils.sortByEmployeeLastname)
                        );
                        await self._utils.waitDOM();
                        const $itemElements =
                           this.$view.children.item(0).children;
                        const itemElementsLength = $itemElements.length;
                        const contentFieldID = contentLinkedField.id;
                        let count = 0;
                        while (count < itemElementsLength) {
                           const $itemElement = $itemElements.item(count++);
                           $itemElement.setAttribute(
                              "data-content-linked-field-id",
                              contentFieldID
                           );
                           const dataPanelRecord = _dataPanelDC.getData(
                              (e) =>
                                 e.id == $itemElement.getAttribute("webix_l_id")
                           )[0];
                           if (dataPanelRecord == null) continue;
                           $itemElement.setAttribute(
                              "data-pk",
                              dataPanelRecord[panelObj.PK()]
                           );
                           $itemElement.setAttribute("draggable", "true");
                           $itemElement.addEventListener(
                              "dragstart",
                              (event) => {
                                 self._fnDragStart(event);
                              }
                           );
                        }
                     },
                  },
               },
            });
         }
      }
      return {
         type: "clean",
         rows: [
            {
               id: this.ids.dataPanel,
               view: "tabview",
               // css: "data-panel-tabview",
               padding: 0,
               borderless: true,
               tabbar: {
                  height: 35,
                  align: "left",
                  // type: "bottom",
                  css: "data-panel-tabbar",
               },
               cells,
            },
         ],
      };
   }

   _fnDragStart(event) {
      const data = this.getSavedDragData(event);
      event.dataTransfer.setData("text/plain", JSON.stringify(data));
   }

   getSavedDragData(event) {
      const dataset = event.target.dataset;
      return {
         pk: dataset.pk,
         contentLinkedFieldID: dataset.contentLinkedFieldId,
      };
   }

   /**
   @function extractDragData
   @return {Object} - {
               dataPK,
               contentLinkedFieldID,
            }
   */
   extractDragData(dataTransfer) {
      return {
         dataPK: dataTransfer.pk,
         contentLinkedFieldID: dataTransfer.contentLinkedFieldID,
      };
   }
}


/***/ }),

/***/ "./components/dcContainer.js":
/*!***********************************!*\
  !*** ./components/dcContainer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DcContainer)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./components/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./components/constants.js");



class DcContainer {
   static get list() {
      if (!this._datacollections) {
         this._datacollections = {
            content: null,
            contentGroup: null,
            contentDisplays: [],
            dataPanels: [],
            entity: null,
            responsibility: null,
            responsibilityCenter: null,
            strategyCode: null,
            subStrategy: null,
            team: null,
            teamStrategy: null,
         };
      }

      return this._datacollections;
   }

   static async init(AB, settings) {
      this.AB = AB;
      this._utils = new _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"](AB);

      // WORKAROUND
      const teamDC = this.list.team;

      // Stable DCs.
      const contentGroupDC = (this.list.contentGroup =
         this._utils.createCustomDCByObjID(
            this._utils.getLinkedObjIDByConnectFieldID(
               settings.contentGroupByField
            ),
            { loadAll: true }
         ));
      const teamStrategyDC = (this.list.teamStrategy =
         this._utils.createCustomDCByObjID(
            this._utils.getLinkedObjIDByConnectFieldID(settings.teamStrategy),
            { loadAll: true }
         ));
      const strategyCodeDC = (this.list.strategyCode =
         this._utils.createCustomDCByObjID(
            this._utils.getLinkedObjIDByConnectFieldID(settings.strategyCode),
            { loadAll: true }
         ));
      const subStrategyDC = (this.list.subStrategy =
         this._utils.createCustomDCByObjID(
            this._utils.getLinkedObjIDByConnectFieldID(settings.subStrategy),
            { loadAll: true }
         ));
      this.list.responsibility = this._utils.createCustomDCByObjID(
         this._utils.getLinkedObjIDByConnectFieldID(
            _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].RESPONSIBILITY_ASSIGNMENT_FIELD_ID
         ),
         { loadAll: true }
      );

      // Preparing for the entity DC and wait for setting a cursor.
      const entityDC = (this.list.entity = teamDC.datacollectionLink);
      if (entityDC != null) {
         _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].initDC(entityDC);
      }

      // Preparing for the content DC.
      const contentFieldFilter = JSON.parse(settings.contentFieldFilter);
      const contentDC = (this.list.content = this._utils.createCustomDCByObjID(
         this._utils.getLinkedObjIDByConnectFieldID(settings.contentField),
         {
            linkedDC: entityDC,
            populate: [_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].RESPONSIBILITY_ASSIGNMENT_FIELD_ID],
            skipPack: true,
            filter: {
               glue: "and",
               rules: [
                  // TODO (Guy): Hardcode date start filter.
                  {
                     key: settings.contentFieldDateStart,
                     rule: "is_not_null",
                     value: "",
                  },
                  {
                     glue: "or",
                     rules:
                        (contentFieldFilter?.rules?.length > 0 && [
                           contentFieldFilter,

                           // TODO (Guy): Hardcode date end filter.
                           {
                              key: settings.contentFieldDateEnd,
                              rule: "is_null",
                              value: "",
                           },
                        ]) ||
                        [],
                  },
               ],
            },
         }
      ));

      // Prepare display DCs.
      const contentDisplayedFieldKeys = Object.keys(
         settings.contentDisplayedFields
      );
      const contentDisplayDCs = this.list.contentDisplays;
      if (contentDisplayedFieldKeys.length > 0) {
         let [, objID] = contentDisplayedFieldKeys.pop().split(".");
         while (contentDisplayedFieldKeys.length > 0) {
            if (
               contentDisplayDCs.findIndex(
                  (contentDisplayDC) => contentDisplayDC.datasource.id === objID
               ) < 0
            )
               switch (objID) {
                  case teamDC.datasource.id:
                     contentDisplayDCs.push(teamDC);
                     break;
                  case contentGroupDC.datasource.id:
                     contentDisplayDCs.push(contentGroupDC);
                     break;
                  case strategyCodeDC.datasource.id:
                     contentDisplayDCs.push(strategyCodeDC);
                     break;
                  case subStrategyDC.datasource.id:
                     contentDisplayDCs.push(subStrategyDC);
                     break;
                  case teamStrategyDC.datasource.id:
                     contentDisplayDCs.push(teamStrategyDC);
                     break;
                  case contentDC.datasource.id:
                     contentDisplayDCs.push(contentDC);
                     break;
                  default:
                     if (entityDC?.datasource.id === objID)
                        contentDisplayDCs.push(entityDC);
                     else
                        contentDisplayDCs.push(
                           this._utils.createCustomDCByObjID(objID, {
                              linkedDC: entityDC,
                           })
                        );
                     break;
               }
            [, objID] = contentDisplayedFieldKeys.pop().split(".");
         }
      }

      const pendingPromises = [];

      for (const propName in DcContainer.list) {
         let dcs = DcContainer.list[propName];
         if (dcs == null) continue;

         // convert to Array
         if (Array.isArray(dcs) === false) dcs = [dcs];

         // load and wait for ready
         dcs.forEach((dc) => {
            pendingPromises.push(this._utils.waitDCReady(dc));
            _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].initDC(dc);
         });
      }

      await Promise.all(pendingPromises);
   }
}


/***/ }),

/***/ "./components/utils.js":
/*!*****************************!*\
  !*** ./components/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrgChartUtils)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./components/constants.js");


class OrgChartUtils {
   constructor(AB) {
      this.AB = AB;
   }

   getLinkedColumnNameByConnectFieldID(connectFieldID) {
      return this.AB.definitionByID(
         this.getLinkedFieldIDByConnectFieldID(connectFieldID)
      ).columnName;
   }

   getLinkedFieldIDByConnectFieldID(connectFieldID) {
      return this.AB.definitionByID(connectFieldID).settings.linkColumn;
   }

   getLinkedObjIDByConnectFieldID(connectFieldID) {
      return this.AB.definitionByID(connectFieldID)?.settings?.linkObject;
   }

   isLessThanDay(date) {
      return Math.abs(new Date() - date) / 36e5 < 24;
   }

   /** Data Collection */
   createCustomDCByObjID(
      objID,
      {
         loadAll = false,
         filter,
         linkedDC,
         select = null,
         populate = false,
         skipPack = false,
      }
   ) {
      const obj = this.AB.objectByID(objID);
      if (!obj) {
         console.error(
            `OrgChartUtils.createCustomDCByObjID: Object ${objID} not found.`
         );
         return null;
      }
      const settings = {
         datasourceID: objID,
         select,
         populate,
         loadAll,
         objectWorkspace: {},
         skipPack,
      };
      if (linkedDC != null) {
         const linkedObjID = linkedDC.datasource.id;
         (settings.linkFieldID = this.AB.definitionByID(objID).fieldIDs.find(
            (fieldID) =>
               this.AB.definitionByID(fieldID).settings.linkObject ===
               linkedObjID
         )) && (settings.linkDatacollectionID = linkedDC.id);
      }
      if (filter) settings.objectWorkspace.filterConditions = filter;
      const dc = this.AB.datacollectionNew({
         id: `dc.${objID}`,
         label: obj.label,
         settings,
      });
      // OrgChartUtils.initDC(dc);
      if (linkedDC) {
         dc.eventRemove("cursorStale", linkedDC);
         dc.$dc.__prevLinkDcCursor = linkedDC.getCursor()?.id?.toString();
      }
      return dc;
   }

   static initDC(dc) {
      dc.init();
      if (dc.dataStatus === dc.dataStatusFlag.notInitial) dc.loadData();
   }

   // TODO (Guy): Some DC.waitReady() won't be resolved.
   async waitDCReady(dc) {
      // Wait for the next event loop
      await Promise.resolve();
      if (dc.reloadPromise != null) await dc.reloadPromise;

      switch (dc.dataStatus) {
         case dc.dataStatusFlag.initialized:
            dc._events.initializedData && dc.emit("initializedData");
            break;
         case dc.dataStatusFlag.initializing:
            await new Promise((resolve) => {
               let timeoutID = null;
               const forceDCReady = () => {
                  if (dc.dataStatus === dc.dataStatusFlag.initialized) {
                     dc.emit("initializedData");
                     return;
                  }
                  timeoutID = setTimeout(forceDCReady, _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].ONE_SECOND);
               };
               timeoutID = setTimeout(forceDCReady, _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].ONE_SECOND);
               dc.once("initializedData", () => {
                  clearTimeout(timeoutID);
                  timeoutID = null;
                  resolve();
               });
            });
            break;
         default:
            break;
      }
   }

   async waitDOM(callback, ...params) {
      return new Promise((resolve, reject) => {
         requestAnimationFrame(() => {
            requestAnimationFrame(() => {
               (async () => {
                  try {
                     if (callback) await callback(...params);
                     resolve();
                  } catch (err) {
                     reject(err);
                  }
               })()
            });
         });
      });
   }

   timeout(ms) {
      return new Promise((resolve) => {
         setTimeout(() => resolve(), ms);
      });
   }

   // TODO (Guy): Hardcode by specipic fields.
   sortByEmployeeFirstname(a, b) {
      a = a.firstname?.toLowerCase() ?? "";
      b = b.firstname?.toLowerCase() ?? ""
      return a > b
         ? 1
         : (a < b ? -1: 0);
   }

   // TODO (Guy): Hardcode by specipic fields.
   sortByEmployeeLastname(a, b) {
      a = a.lastname?.toLowerCase() ?? "";
      b = b.lastname?.toLowerCase() ?? ""
      return a > b
         ? 1
         : (a < b ? -1: 0);
   }
}


/***/ }),

/***/ "./libs/CustomProcessTasks.js":
/*!************************************!*\
  !*** ./libs/CustomProcessTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomProcessTasks)
/* harmony export */ });
// TODO (Guy): Figure out how to get these field.
const EMPLOYEE_EMAIL_COLUMNNAME = "email";
const EMPLOYEE_ORG_STATUS_COLUMNNAME = "custentity_ccc_org_status";
const EXTERNAL_SUPPORT_COLUMNNAME = "custrecord_whq_team_is_external_support";
class CustomProcessTasks {
   constructor(instance, input, oldInputs = []) {
      this._instance = instance;
      this._input = input;
      this._oldInputs = oldInputs;
      this._AB = this._instance.AB;
      this._settings = this._instance.settings;
      this._teamDC = this._instance.datacollection;
      this._entityDC = this._AB.datacollectionByID(
         this._settings.entityDatacollection
      );
      this._entityOBJ = this._entityDC.datasource;
      this._entityValuePK = parseInt(
         this._entityDC.getCursor()[this._entityOBJ.PK()]
      );
      const contentFieldID = this._settings.contentField;
      this._assignmentOBJ = this._teamDC.datasource.connectFields(
         (connectField) => connectField.id === contentFieldID
      )[0].datasourceLink;
      this._assignmentDC = this._instance.allDCs.find(
         (dc) => dc.datasource === this._assignmentOBJ
      );
      this._assignmentModel = this._assignmentDC.model;
      this._assignmentPK = this._assignmentOBJ.PK();
      this._employeeOBJ = this._AB.datacollectionByID(
         Object.keys(this._settings.dataPanelDCs)[0].split(".")[1]
      ).datasource;
      this._employeeDC = this._instance.allDCs.find(
         (dc) => dc.datasource === this._employeeOBJ
      );
      this._employeeModel = this._employeeDC.model;
      this._employeePK = this._employeeOBJ.PK();
      this._assignmentDateStartColumnName = this._AB.definitionByID(
         this._settings.contentFieldDateStart
      ).columnName;
      this._assignmentDateEndColumnName = this._AB.definitionByID(
         this._settings.contentFieldDateEnd
      ).columnName;
      this._assignmentLinkingEmployeeColumnName =
         this._assignmentOBJ.connectFields(
            (connectField) => connectField.datasourceLink === this._employeeOBJ
         )[0].columnName;
      this._assignmentLinkingEntityColumnName =
         this._assignmentOBJ.connectFields(
            (connectField) => connectField.datasourceLink === this._entityOBJ
         )[0].columnName;
      this._assignmentLinkingTeamColumnName = this._AB.definitionByID(
         this._AB.definitionByID(this._settings.contentField).settings
            .linkColumn
      ).columnName;
      this._assignmentPrincipleColumnName = this._AB.definitionByID(
         this._settings.contentPrincipleField
      ).columnName;
      this._employeeValuePK = parseInt(
         this._input[this._assignmentLinkingEmployeeColumnName]
      );
      this._employeeValue = this._employeeDC.getData(
         (e) => e[this._employeePK] == this._employeeValuePK
      )[0];
      this._employeeValueEmail = this._employeeValue[EMPLOYEE_EMAIL_COLUMNNAME];

      // Cached states;
      this._isExternalSupport = null;
      this._needApproval = false;
      this._updatedPrincipals = [];
   }

   _findDCRecordByPK(dc, valuePK) {
      const pk = dc.datasource.PK();
      return dc.getData((e) => e[pk] == valuePK)[0];
   }

   async _getPrincipalAssignmentValues(
      { not, entityValuePKs } = {
         not: false,
         entityValuePKs: [this._entityValuePK],
      },
      otherEmployeePKs = []
   ) {
      entityValuePKs = entityValuePKs || [this._entityValuePK];
      entityValuePKs.length === 0 && entityValuePKs.push(this._entityValuePK);
      const results = [];
      if (!not) {
         const currEntityValueIndex = entityValuePKs.indexOf(
            this._entityValuePK
         );
         if (
            currEntityValueIndex > -1 &&
            entityValuePKs.splice(currEntityValueIndex, 1)
         ) {
            await this._assignmentDC.reloadPromise;
            results.push(
               ...this._assignmentDC.getData(
                  (e) =>
                     this._oldInputs.indexOf(e[this._assignmentPK].toString()) <
                        0 &&
                     e[this._assignmentPrincipleColumnName] == 1 &&
                     e[this._assignmentLinkingEmployeeColumnName] ==
                        this._employeeValuePK
               )
            );
         }
      }
      if (entityValuePKs.length === 0) return results;
      const rules = [
         this._assignmentDC.settings.objectWorkspace.filterConditions,
         {
            key: this._assignmentLinkingEntityColumnName,
            rule: (not && "not_in") || "in",
            value: entityValuePKs,
         },
         {
            key: this._assignmentPrincipleColumnName,
            rule: "checked",
            value: "",
         },
      ];
      otherEmployeePKs.length > 0 &&
         rules.push({
            key: this._assignmentLinkingEmployeeColumnName,
            rule: "in",
            value: otherEmployeePKs,
         });
      results.push(
         ...(
            await this._assignmentModel.findAll({
               where: {
                  glue: "and",
                  rules,
               },
            })
         ).data
      );
      return results;
   }

   async _getEmployeeValuesByEmail(
      { not, entityValuePKs } = {
         not: false,
         entityValuePKs: [this._entityValuePK],
      }
   ) {
      entityValuePKs = entityValuePKs || [this._entityValuePK];
      entityValuePKs.length === 0 && entityValuePKs.push(this._entityValuePK);
      const employeeValuePK =
         this._input[this._assignmentLinkingEmployeeColumnName];
      return (
         await this._employeeModel.findAll({
            where: {
               glue: "and",
               rules: [
                  {
                     key: EMPLOYEE_EMAIL_COLUMNNAME,
                     rule: "equals",
                     value: this._employeeValueEmail,
                  },
                  {
                     // Employee that is linking Entity column name.
                     key: this._employeeOBJ.connectFields(
                        (connectField) =>
                           connectField.datasourceLink === this._entityOBJ
                     )[0].columnName,
                     rule: (not && "not_in") || "in",
                     value: entityValuePKs,
                  },
               ],
            },
         })
      ).data;
   }

   async _updateWithNoPrincipal(principalAssignmentValue) {
      let oldData = {
         id: principalAssignmentValue.id,
      };
      oldData[this._assignmentDateEndColumnName] = new Date();
      principalAssignmentValue[this._assignmentDateStartColumnName] =
         oldData[this._assignmentDateEndColumnName];
      principalAssignmentValue[this._assignmentPrincipleColumnName] = 0;
      [oldData, principalAssignmentValue] = await Promise.all([
         this._instance.updateData(this._assignmentDC, oldData),
         (async () =>
            Object.assign(
               principalAssignmentValue,
               await this._instance.createData(
                  this._assignmentDC,
                  principalAssignmentValue
               )
            ))(),
      ]);
      this._updatedPrincipals.push({ [oldData.id]: principalAssignmentValue });
   }

   async run({ isChanging } = { isChanging: false }) {
      if (
         this.isExternalSupport() ||
         this._instance.ORG_SENT_STATUSES.indexOf(
            this._employeeValue[EMPLOYEE_ORG_STATUS_COLUMNNAME]?.toString()
         ) > -1
      ) {
         this._input[this._assignmentPrincipleColumnName] = 0;
         return this._input;
      }
      const employeeInOtherEntityValues = await this._getEmployeeValuesByEmail({
         not: true,
      });
      if (employeeInOtherEntityValues.length == 0) {
         const principalAssignmentValues =
            await this._getPrincipalAssignmentValues();
         this._input[this._assignmentPrincipleColumnName] =
            principalAssignmentValues.length > 0 ? 0 : 1;
         if (
            this._input[this._assignmentPrincipleColumnName] == 0 &&
            isChanging
         ) {
            await Promise.all(
               principalAssignmentValues.map((principalAssignmentValue) =>
                  this._updateWithNoPrincipal(principalAssignmentValue)
               )
            );
            this._input[this._assignmentPrincipleColumnName] = 1;
         }
         return this._input;
      }
      const principalAssignmentValues =
         await this._getPrincipalAssignmentValues(
            { not: true },
            employeeInOtherEntityValues.map((e) => e[this._employeePK])
         );
      if (principalAssignmentValues.length == 0) {
         const principalAssignmentValues =
            await this._getPrincipalAssignmentValues();
         this._input[this._assignmentPrincipleColumnName] =
            principalAssignmentValues.length > 0 ? 0 : 1;
         if (
            this._input[this._assignmentPrincipleColumnName] == 0 &&
            isChanging
         ) {
            await Promise.all(
               principalAssignmentValues.map((principalAssignmentValue) =>
                  this._updateWithNoPrincipal(principalAssignmentValue)
               )
            );
            this._input[this._assignmentPrincipleColumnName] = 1;
         }
         return this._input;
      }
      this._input[this._assignmentPrincipleColumnName] = (
         await Promise.all(
            principalAssignmentValues.map(async (principalAssignmentValue) => {
               const currEmployeeValuePK =
                  principalAssignmentValue[
                     this._assignmentLinkingEmployeeColumnName
                  ];
               for (const employeeInOtherEntityValue of employeeInOtherEntityValues)
                  if (
                     employeeInOtherEntityValue[this._employeePK] ==
                        currEmployeeValuePK &&
                     this._instance.ORG_SENT_STATUSES.indexOf(
                        employeeInOtherEntityValue[
                           EMPLOYEE_ORG_STATUS_COLUMNNAME
                        ]?.toString()
                     ) > -1
                  ) {
                     await this._updateWithNoPrincipal(
                        principalAssignmentValue
                     );
                     return true;
                  }
               return false;
            })
         )
      ).some((e) => e)
         ? 1
         : 0;
      if (
         this._input[this._assignmentPrincipleColumnName] == 0 &&
         isChanging &&
         this._instance.ORG_SENT_STATUSES.indexOf(
            this._employeeValue[EMPLOYEE_ORG_STATUS_COLUMNNAME]?.toString()
         ) === -1
      )
         this._needApproval = isChanging;
      return this._input;
   }

   async hasPrincipalInEntity() {
      return (await this._getPrincipalAssignmentValues()).length > 0;
   }

   isExternalSupport() {
      return (
         this._isExternalSupport ??
         (this._isExternalSupport =
            this._findDCRecordByPK(
               this._teamDC,
               this._input[this._assignmentLinkingTeamColumnName]
            )[EXTERNAL_SUPPORT_COLUMNNAME] == 1)
      );
   }

   get needApproval() {
      return this._needApproval;
   }

   get updatedPrincipals() {
      return this._updatedPrincipals;
   }

   get employeeValueEmail() {
      return this._employeeValueEmail;
   }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk prefetch function */
/******/ 	(() => {
/******/ 		__webpack_require__.F = {};
/******/ 		__webpack_require__.E = (chunkId) => {
/******/ 			Object.keys(__webpack_require__.F).map((key) => {
/******/ 				__webpack_require__.F[key](chunkId);
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "HR" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "hrteamwidget:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Teams": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.F.j = (chunkId) => {
/******/ 			if((!__webpack_require__.o(installedChunks, chunkId) || installedChunks[chunkId] === undefined) && true) {
/******/ 				installedChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/ 		
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "prefetch";
/******/ 				link.as = "script";
/******/ 				link.href = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 				document.head.appendChild(link);
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhrteamwidget"] = self["webpackChunkhrteamwidget"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup prefetch */
/******/ 	(() => {
/******/ 		__webpack_require__.O(0, ["Teams"], () => {
/******/ 			["js_orgchart-webcomponents_js","styles_orgchart-webcomponents_css","styles_team-widget_css"].map(__webpack_require__.E);
/******/ 		}, 5);
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ABViewOrgChartTeams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ABViewOrgChartTeams */ "./ABViewOrgChartTeams.js");
/* harmony import */ var _ABViewOrgChartTeamsEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ABViewOrgChartTeamsEditor */ "./ABViewOrgChartTeamsEditor.js");
/* harmony import */ var _ABViewOrgChartTeamsProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ABViewOrgChartTeamsProperty */ "./ABViewOrgChartTeamsProperty.js");




const plugin = {
   /* global VERSION -- injected by webpack define plugin */
   version: "1.0.8",
   key: "HRTeams",
   apply: function (AB) {
      const ABView = AB.Class.ABViewManager.viewClass("view");
      const ABViewComponent = AB.Class.ABViewComponent;

      // Add our view class to ViewManager
      const ABViewOrgChartTeams = (0,_ABViewOrgChartTeams__WEBPACK_IMPORTED_MODULE_0__["default"])(ABView, ABViewComponent);
      AB.Class.ABViewManager.addViewClass(ABViewOrgChartTeams);

      // Convert Existing Views that have already been loaded (they got loaded
      // as ABViews since our class wasn't loaded yet)
      AB.applications().forEach((app) => {
         app.views((v) => v.key === "plugin_hr_teams").forEach(
            (view, i, views) => {
               const newView = new ABViewOrgChartTeams(
                  view.toObj(),
                  view.application,
                  view.parent
               );
               // Overwrite the view
               views[i] = newView;
               // Also update the parent view
               const parent = view.parent;
               parent.viewRemove(view);
               parent.viewInsert(newView);
            }
         );
      });

      AB.pluginLoad({
         id: this.key,
         isPlugin: true,
         label: "HR Teams Widget",
         editor: _ABViewOrgChartTeamsEditor__WEBPACK_IMPORTED_MODULE_1__["default"],
         viewProperty: _ABViewOrgChartTeamsProperty__WEBPACK_IMPORTED_MODULE_2__["default"],
      });
   },
   definitions: () => [],
   labels: () => [],
};

window.__AB_Plugins = window.__AB_Plugins || [];

window.__AB_Plugins.push(plugin);

})();

__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ })()
;
//# sourceMappingURL=HRTeams.js.map