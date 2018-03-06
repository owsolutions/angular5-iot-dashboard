webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_reducers__ = __webpack_require__("./src/app/app.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_core_navigation_navigation_component__ = __webpack_require__("./src/app/core/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_core_settings_settings_component__ = __webpack_require__("./src/app/core/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_core_data_table_data_table_component__ = __webpack_require__("./src/app/core/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_core_page_header_page_header_component__ = __webpack_require__("./src/app/core/page-header/page-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_core_forms_text_input_text_input_component__ = __webpack_require__("./src/app/core/forms/text-input/text-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_core_forms_radio_input_radio_input_component__ = __webpack_require__("./src/app/core/forms/radio-input/radio-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_core_forms_select_input_select_input_component__ = __webpack_require__("./src/app/core/forms/select-input/select-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_core_form_elements_form_elements_component__ = __webpack_require__("./src/app/core/form-elements/form-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_core_users_users_component__ = __webpack_require__("./src/app/core/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_core_roles_roles_component__ = __webpack_require__("./src/app/core/roles/roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_core_users_user_single_user_single_component__ = __webpack_require__("./src/app/core/users/user-single/user-single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_core_login_login_component__ = __webpack_require__("./src/app/core/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_core_services_permissions_service__ = __webpack_require__("./src/app/core/services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_core_services_requests_service__ = __webpack_require__("./src/app/core/services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_core_forms_checkbox_input_checkbox_input_component__ = __webpack_require__("./src/app/core/forms/checkbox-input/checkbox-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_core_services_mocks_service__ = __webpack_require__("./src/app/core/services/mocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_core_services_actions_service__ = __webpack_require__("./src/app/core/services/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_core_services_user_service__ = __webpack_require__("./src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_core_services_communicate_service__ = __webpack_require__("./src/app/core/services/communicate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_iot_signup_signup_component__ = __webpack_require__("./src/app/iot/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_iot_signup_signup_success_signup_success_component__ = __webpack_require__("./src/app/iot/signup/signup-success/signup-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_iot_devices_devices_component__ = __webpack_require__("./src/app/iot/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_iot_widgets_widgets_component__ = __webpack_require__("./src/app/iot/widgets/widgets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_iot_activity_activity_widget_activity_widget_component__ = __webpack_require__("./src/app/iot/activity/activity-widget/activity-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__app_iot_locations_locations_component__ = __webpack_require__("./src/app/iot/locations/locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_iot_activity_activity_component__ = __webpack_require__("./src/app/iot/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__app_iot_locations_location_row_location_row_component__ = __webpack_require__("./src/app/iot/locations/location-row/location-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__app_iot_locations_location_edit_location_edit_component__ = __webpack_require__("./src/app/iot/locations/location-edit/location-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__app_iot_shared_helper_box_helper_box_component__ = __webpack_require__("./src/app/iot/shared/helper-box/helper-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__app_iot_shared_output_pin_view_output_pin_view_component__ = __webpack_require__("./src/app/iot/shared/output-pin-view/output-pin-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__app_iot_shared_switch_widgets_switch_widgets_component__ = __webpack_require__("./src/app/iot/shared/switch-widgets/switch-widgets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__app_iot_shared_input_pin_input_pin_component__ = __webpack_require__("./src/app/iot/shared/input-pin/input-pin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__app_iot_shared_output_pin_output_pin_component__ = __webpack_require__("./src/app/iot/shared/output-pin/output-pin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__app_iot_index_icon_widgets_icon_widgets_component__ = __webpack_require__("./src/app/iot/index/icon-widgets/icon-widgets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__app_iot_index_places_places_component__ = __webpack_require__("./src/app/iot/index/places/places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__app_iot_index_index_component__ = __webpack_require__("./src/app/iot/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__app_iot_index_chart_chart_component__ = __webpack_require__("./src/app/iot/index/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__app_iot_default_layout_default_layout_component__ = __webpack_require__("./src/app/iot/default-layout/default-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__app_iot_widgets_large_icon_widget_large_icon_widget_component__ = __webpack_require__("./src/app/iot/widgets/large-icon-widget/large-icon-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__app_iot_widgets_medium_icon_widget_medium_icon_widget_component__ = __webpack_require__("./src/app/iot/widgets/medium-icon-widget/medium-icon-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__app_iot_widgets_large_value_widget_large_value_widget_component__ = __webpack_require__("./src/app/iot/widgets/large-value-widget/large-value-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__app_iot_widgets_full_widget_full_widget_component__ = __webpack_require__("./src/app/iot/widgets/full-widget/full-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__app_iot_quick_status_quick_status_component__ = __webpack_require__("./src/app/iot/quick-status/quick-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__app_iot_quick_status_quick_chart_quick_chart_component__ = __webpack_require__("./src/app/iot/quick-status/quick-chart/quick-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__app_iot_quick_status_user_widget_user_widget_component__ = __webpack_require__("./src/app/iot/quick-status/user-widget/user-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__app_iot_app_info_app_info_component__ = __webpack_require__("./src/app/iot/app-info/app-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__app_iot_app_info_modes_modes_component__ = __webpack_require__("./src/app/iot/app-info/modes/modes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__app_iot_app_info_reminder_timeline_reminder_timeline_component__ = __webpack_require__("./src/app/iot/app-info/reminder-timeline/reminder-timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__app_app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_ng_media__ = __webpack_require__("./node_modules/ng-media/esm5/ng-media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ng_iot__ = __webpack_require__("./node_modules/ng-iot/ng-iot.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__core_drop_file_drop_file_component__ = __webpack_require__("./src/app/core/drop-file/drop-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__core_loading_loading_component__ = __webpack_require__("./src/app/core/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__forms_input_input_component__ = __webpack_require__("./src/app/forms/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__forms_form_holder_form_holder_component__ = __webpack_require__("./src/app/forms/form-holder/form-holder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__app_core_users_logout_logout_component__ = __webpack_require__("./src/app/core/users/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































































var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                AppComponent,
                __WEBPACK_IMPORTED_MODULE_6__app_core_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_core_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_core_data_table_data_table_component__["a" /* DataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_61__app_core_users_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_core_page_header_page_header_component__["a" /* PageHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_core_forms_text_input_text_input_component__["a" /* TextInputComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_core_forms_radio_input_radio_input_component__["a" /* RadioInputComponent */],
                __WEBPACK_IMPORTED_MODULE_12__app_core_forms_select_input_select_input_component__["a" /* SelectInputComponent */],
                __WEBPACK_IMPORTED_MODULE_13__app_core_form_elements_form_elements_component__["a" /* FormElementsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__app_core_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__app_core_roles_roles_component__["a" /* RolesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__app_core_users_user_single_user_single_component__["a" /* UserSingleComponent */],
                __WEBPACK_IMPORTED_MODULE_20__app_core_forms_checkbox_input_checkbox_input_component__["a" /* CheckboxInputComponent */],
                __WEBPACK_IMPORTED_MODULE_17__app_core_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__app_iot_devices_devices_component__["a" /* DevicesComponent */],
                __WEBPACK_IMPORTED_MODULE_28__app_iot_widgets_widgets_component__["a" /* WidgetsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__app_iot_activity_activity_widget_activity_widget_component__["a" /* ActivityWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_30__app_iot_locations_locations_component__["a" /* LocationsComponent */],
                __WEBPACK_IMPORTED_MODULE_31__app_iot_activity_activity_component__["a" /* ActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_32__app_iot_locations_location_row_location_row_component__["a" /* LocationRowComponent */],
                __WEBPACK_IMPORTED_MODULE_33__app_iot_locations_location_edit_location_edit_component__["a" /* LocationEditComponent */],
                __WEBPACK_IMPORTED_MODULE_34__app_iot_shared_helper_box_helper_box_component__["a" /* HelperBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_35__app_iot_shared_output_pin_view_output_pin_view_component__["a" /* OutputPinViewComponent */],
                __WEBPACK_IMPORTED_MODULE_36__app_iot_shared_switch_widgets_switch_widgets_component__["a" /* SwitchWidgetsComponent */],
                __WEBPACK_IMPORTED_MODULE_37__app_iot_shared_input_pin_input_pin_component__["a" /* InputPinComponent */],
                __WEBPACK_IMPORTED_MODULE_38__app_iot_shared_output_pin_output_pin_component__["a" /* OutputPinComponent */],
                __WEBPACK_IMPORTED_MODULE_39__app_iot_index_icon_widgets_icon_widgets_component__["a" /* IconWidgetsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__app_iot_index_places_places_component__["a" /* PlacesComponent */],
                __WEBPACK_IMPORTED_MODULE_41__app_iot_index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_42__app_iot_index_chart_chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_43__app_iot_default_layout_default_layout_component__["a" /* DefaultLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_44__app_iot_widgets_large_icon_widget_large_icon_widget_component__["a" /* LargeIconWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_45__app_iot_widgets_medium_icon_widget_medium_icon_widget_component__["a" /* MediumIconWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_46__app_iot_widgets_large_value_widget_large_value_widget_component__["a" /* LargeValueWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_47__app_iot_widgets_full_widget_full_widget_component__["a" /* FullWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_48__app_iot_quick_status_quick_status_component__["a" /* QuickStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_49__app_iot_quick_status_quick_chart_quick_chart_component__["a" /* QuickChartComponent */],
                __WEBPACK_IMPORTED_MODULE_50__app_iot_quick_status_user_widget_user_widget_component__["a" /* UserWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_51__app_iot_app_info_app_info_component__["a" /* AppInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_52__app_iot_app_info_modes_modes_component__["a" /* ModesComponent */],
                __WEBPACK_IMPORTED_MODULE_53__app_iot_app_info_reminder_timeline_reminder_timeline_component__["a" /* ReminderTimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_25__app_iot_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_26__app_iot_signup_signup_success_signup_success_component__["a" /* SignupSuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_57__core_drop_file_drop_file_component__["a" /* DropFileComponent */],
                __WEBPACK_IMPORTED_MODULE_58__core_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_59__forms_input_input_component__["a" /* InputComponent */],
                __WEBPACK_IMPORTED_MODULE_60__forms_form_holder_form_holder_component__["a" /* FormHolderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_56_ng_iot__["a" /* NgIotModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_55_ng_media__["a" /* NgMediaModule */],
                __WEBPACK_IMPORTED_MODULE_56_ng_iot__["a" /* NgIotModule */],
                Object(__WEBPACK_IMPORTED_MODULE_54__app_app_routes__["a" /* createRoutes */])(),
                Object(__WEBPACK_IMPORTED_MODULE_5__app_app_reducers__["a" /* appReducersGenerator */])()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__app_core_services_permissions_service__["a" /* PermissionsService */],
                __WEBPACK_IMPORTED_MODULE_19__app_core_services_requests_service__["a" /* RequestsService */],
                __WEBPACK_IMPORTED_MODULE_21__app_core_services_mocks_service__["a" /* MocksService */],
                __WEBPACK_IMPORTED_MODULE_22__app_core_services_actions_service__["a" /* ActionsService */],
                __WEBPACK_IMPORTED_MODULE_23__app_core_services_user_service__["b" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_24__app_core_services_communicate_service__["a" /* CommunicateService */],
                __WEBPACK_IMPORTED_MODULE_23__app_core_services_user_service__["a" /* AuthGuard */]
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = appReducersGenerator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_iot_data_layer_devices_reducer__ = __webpack_require__("./src/app/iot/data-layer/devices.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_iot_data_layer_locations_reducer__ = __webpack_require__("./src/app/iot/data-layer/locations.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_iot_data_layer_activity_reducer__ = __webpack_require__("./src/app/iot/data-layer/activity.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_iot_data_layer_widgets_reducer__ = __webpack_require__("./src/app/iot/data-layer/widgets.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_data_layer_roles_reducer__ = __webpack_require__("./src/app/core/data-layer/roles.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");






function appReducersGenerator() {
    return __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* StoreModule */].forRoot({
        devices: __WEBPACK_IMPORTED_MODULE_0__app_iot_data_layer_devices_reducer__["a" /* devicesReducer */],
        locations: __WEBPACK_IMPORTED_MODULE_1__app_iot_data_layer_locations_reducer__["a" /* locationsReducer */],
        activities: __WEBPACK_IMPORTED_MODULE_2__app_iot_data_layer_activity_reducer__["a" /* activitiesReducer */],
        widgets: __WEBPACK_IMPORTED_MODULE_3__app_iot_data_layer_widgets_reducer__["a" /* widgetsReducer */],
        roles: __WEBPACK_IMPORTED_MODULE_4__app_core_data_layer_roles_reducer__["a" /* rolesReducer */]
    });
}


/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (immutable) */ __webpack_exports__["a"] = createRoutes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_core_login_login_component__ = __webpack_require__("./src/app/core/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_iot_index_index_component__ = __webpack_require__("./src/app/iot/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_iot_locations_locations_component__ = __webpack_require__("./src/app/iot/locations/locations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_settings_settings_component__ = __webpack_require__("./src/app/core/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_iot_devices_devices_component__ = __webpack_require__("./src/app/iot/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_iot_activity_activity_component__ = __webpack_require__("./src/app/iot/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_iot_widgets_widgets_component__ = __webpack_require__("./src/app/iot/widgets/widgets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_iot_locations_location_edit_location_edit_component__ = __webpack_require__("./src/app/iot/locations/location-edit/location-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_core_form_elements_form_elements_component__ = __webpack_require__("./src/app/core/form-elements/form-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_core_users_users_component__ = __webpack_require__("./src/app/core/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_core_roles_roles_component__ = __webpack_require__("./src/app/core/roles/roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_core_users_user_single_user_single_component__ = __webpack_require__("./src/app/core/users/user-single/user-single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__ = __webpack_require__("./src/app/iot/layout/DefaultLayout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_iot_signup_signup_component__ = __webpack_require__("./src/app/iot/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_iot_signup_signup_success_signup_success_component__ = __webpack_require__("./src/app/iot/signup/signup-success/signup-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_core_drop_file_drop_file_component__ = __webpack_require__("./src/app/core/drop-file/drop-file.component.ts");

















var appRoutes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_2__app_iot_index_index_component__["a" /* IndexComponent */], 'index'),
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_3__app_iot_locations_locations_component__["a" /* LocationsComponent */], 'locations'),
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_4__app_core_settings_settings_component__["a" /* SettingsComponent */], 'settings'),
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_8__app_iot_locations_location_edit_location_edit_component__["a" /* LocationEditComponent */], 'locations/edit/:id', { data: { mode: 'edit' } }),
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_8__app_iot_locations_location_edit_location_edit_component__["a" /* LocationEditComponent */], 'locations/edit/:id', { data: { mode: 'new' } }),
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_10__app_core_users_users_component__["a" /* UsersComponent */], 'users'),
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_11__app_core_roles_roles_component__["a" /* RolesComponent */], 'roles'),
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_6__app_iot_activity_activity_component__["a" /* ActivityComponent */], 'activities'),
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_5__app_iot_devices_devices_component__["a" /* DevicesComponent */], 'devices'),
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_7__app_iot_widgets_widgets_component__["a" /* WidgetsComponent */], 'widgets'),
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_9__app_core_form_elements_form_elements_component__["a" /* FormElementsComponent */], 'form-elements'),
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["a" /* AuthLayout */])(__WEBPACK_IMPORTED_MODULE_12__app_core_users_user_single_user_single_component__["a" /* UserSingleComponent */], 'user/:id'),
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__app_core_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_14__app_iot_signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'signup-success',
        component: __WEBPACK_IMPORTED_MODULE_15__app_iot_signup_signup_success_signup_success_component__["a" /* SignupSuccessComponent */]
    },
    Object(__WEBPACK_IMPORTED_MODULE_13__app_iot_layout_DefaultLayout__["b" /* DefaultLayout */])(__WEBPACK_IMPORTED_MODULE_16__app_core_drop_file_drop_file_component__["a" /* DropFileComponent */], 'gallery')
];
function createRoutes() {
    return __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
}


/***/ }),

/***/ "./src/app/core/data-layer/roles.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rolesReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_core_functions_UpdateOrInsert__ = __webpack_require__("./src/app/core/functions/UpdateOrInsert.ts");

function rolesReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'UPDATE_ROLE':
            return Object(__WEBPACK_IMPORTED_MODULE_0__app_core_functions_UpdateOrInsert__["a" /* default */])(action.payload, state, 'id');
        case 'INSERT_ROLE':
            return state.concat(action.payload);
    }
    return state;
}


/***/ }),

/***/ "./src/app/core/data-table/data-table-definitions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createPagiantion;
function createPagiantion(aoData) {
    var options = {};
    aoData.forEach(function (data) {
        options[data.name] = data.value;
    });
    return options;
}


/***/ }),

/***/ "./src/app/core/data-table/data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div style='overflow-x: auto'>\n    <table id=\"example\" class=\"display mdl-data-table\" width=\"100%\"></table>    \n</div>"

/***/ }),

/***/ "./src/app/core/data-table/data-table.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/data-table/data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_table_normalizer__ = __webpack_require__("./src/app/core/data-table/data-table.normalizer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        this.schema = null;
    }
    DataTableComponent.prototype.ngOnInit = function () {
        if (this.schema) {
            var structure = Object(__WEBPACK_IMPORTED_MODULE_1__data_table_normalizer__["a" /* getDataTable */])(this.schema);
            $('#example').DataTable(structure);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('schema'),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "schema", void 0);
    DataTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-data-table',
            template: __webpack_require__("./src/app/core/data-table/data-table.component.html"),
            styles: [__webpack_require__("./src/app/core/data-table/data-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/core/data-table/data-table.normalizer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDataTable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_table_definitions__ = __webpack_require__("./src/app/core/data-table/data-table-definitions.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

function castApiIntoDataTable(response) {
    return {
        draw: 0,
        recordsTotal: response.table.count,
        recordsFiltered: response.table.count,
        data: response.data
    };
}
function getDataTable(config) {
    var _this = this;
    return {
        displayStart: config.page ? (config.page - 1) * 10 : 0,
        columns: config.columns,
        columnDefs: [
            {
                targets: [0],
                className: 'mdl-data-table__cell--non-numeric'
            }
        ],
        'serverSide': true,
        'fnServerData': function (sSource, aoData, fnCallback) { return __awaiter(_this, void 0, void 0, function () {
            var pagination, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        pagination = Object(__WEBPACK_IMPORTED_MODULE_0__data_table_definitions__["a" /* createPagiantion */])(aoData);
                        return [4 /*yield*/, config.paginator(pagination)];
                    case 1:
                        response = _a.sent();
                        response = castApiIntoDataTable(response);
                        if (config.filterColumns) {
                            response.data = config.filterColumns(response.data);
                        }
                        if (config.onContentChange) {
                            config.onContentChange(response, pagination);
                        }
                        fnCallback(response);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error: ', error_1);
                        fnCallback({
                            draw: 0,
                            recordsTotal: 0,
                            recordsFiltered: 0,
                            data: []
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }
    };
}


/***/ }),

/***/ "./src/app/core/drop-file/drop-file.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"File Drop\" icon=\"icon icon-camera-alt\"></app-page-header>\n\n<div style=\"padding: 10px\">\n  <app-ng-media></app-ng-media>\n</div>\n"

/***/ }),

/***/ "./src/app/core/drop-file/drop-file.component.scss":
/***/ (function(module, exports) {

module.exports = ".dropable {\n  padding: 60px;\n  text-align: center;\n  font-size: 12px;\n  border: 3px dotted silver;\n  margin: 15px; }\n\n.dropable.onhover {\n  border: 3px dotted #00cb7a; }\n"

/***/ }),

/***/ "./src/app/core/drop-file/drop-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropFileComponent = /** @class */ (function () {
    function DropFileComponent() {
    }
    DropFileComponent.prototype.initializeDropZone = function (url) {
        if (url === void 0) { url = '/upload'; }
        var $el = $('div#drop-zone-1').dropzone({ url: url });
        $el.on('dragenter', function () {
            $el.addClass('onhover');
        });
        $el.on('dragleave', function () {
            $el.removeClass('onhover');
        });
        return $el;
    };
    DropFileComponent.prototype.ngOnInit = function () {
        if (typeof $ !== 'undefined') {
            this.initializeDropZone();
        }
    };
    DropFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-drop-file',
            template: __webpack_require__("./src/app/core/drop-file/drop-file.component.html"),
            styles: [__webpack_require__("./src/app/core/drop-file/drop-file.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DropFileComponent);
    return DropFileComponent;
}());



/***/ }),

/***/ "./src/app/core/form-elements/form-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"widget-wrap\">\n                <div class=\"widget-header block-header margin-bottom-0 clearfix\">\n                    <div class=\"pull-left\">\n                        <h3>Input</h3>\n                        <p>All kind of text input </p>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"widget-container\">\n                    <div class=\"widget-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"j-forms\">\n\n                                    <div class=\"form-content\">\n\n                                        <!-- start text password -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6 unit\">\n                                                <label class=\"label\">Text</label>\n                                                <div class=\"input\">\n                                                    <label class=\"icon-left\" for=\"text\">\n                                                        <i class=\"icon icon-edit\"></i>\n                                                    </label>\n                                                    <input class=\"form-control\" type=\"text\" placeholder=\"some text\" id=\"text\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6 unit\">\n                                                <label class=\"label\">Password</label>\n                                                <div class=\"input\">\n                                                    <label class=\"icon-left\" for=\"password\">\n                                                        <i class=\"icon icon-lock\"></i>\n                                                    </label>\n                                                    <input class=\"form-control\" type=\"password\" placeholder=\"password\" id=\"password\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end text password -->\n\n                                        <!-- start email url -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6 unit\">\n                                                <label class=\"label\">Email</label>\n                                                <div class=\"input\">\n                                                    <label class=\"icon-left\" for=\"email\">\n                                                        <i class=\"icon icon-envelope-o\"></i>\n                                                    </label>\n                                                    <input class=\"form-control\" type=\"email\" placeholder=\"email@example.com\" id=\"email\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6 unit\">\n                                                <label class=\"label\">Url</label>\n                                                <div class=\"input\">\n                                                    <label class=\"icon-left\" for=\"url\">\n                                                        <i class=\"icon icon-globe\"></i>\n                                                    </label>\n                                                    <input class=\"form-control\" type=\"url\" placeholder=\"http://www.example.com\" id=\"url\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end email url -->\n\n                                        <!-- start search -->\n                                        <div class=\"unit\">\n                                            <label class=\"label\">Search</label>\n                                            <div class=\"input\">\n                                                <label class=\"icon-left\" for=\"search\">\n                                                    <i class=\"icon icon-search\"></i>\n                                                </label>\n                                                <input class=\"form-control\" type=\"search\" placeholder=\"I am looking for...\" id=\"search\">\n                                            </div>\n                                        </div>\n                                        <!-- end search -->\n\n                                        <!-- start textarea -->\n                                        <div class=\"unit\">\n                                            <label class=\"label\">Textarea</label>\n                                            <div class=\"input\">\n                                                <label class=\"icon-left\" for=\"textarea\">\n                                                    <i class=\"icon icon-file-text-o\"></i>\n                                                </label>\n                                                <textarea class=\"form-control\" placeholder=\"your message...\" spellcheck=\"false\" id=\"textarea\"></textarea>\n                                            </div>\n                                        </div>\n                                        <!-- end textarea -->\n\n                                    </div>\n                                    <!-- end /.content -->\n\n                                    <div class=\"form-footer\">\n                                        <button type=\"submit\" class=\"btn btn-success primary-btn processing\">Processing...</button>\n                                        <button type=\"reset\" class=\"btn btn-danger secondary-btn\">Reset</button>\n                                        <button type=\"submit\" class=\"btn btn-info primary-btn\">Submit</button>\n                                    </div>\n                                    <!-- end /.footer -->\n\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"widget-wrap\">\n                <div class=\"widget-header block-header margin-bottom-0 clearfix\">\n                    <div class=\"pull-left\">\n                        <h3>Select</h3>\n                        <p>All kind of selectbox </p>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"widget-container\">\n                    <div class=\"widget-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"j-forms\">\n\n                                    <div class=\"form-content\">\n                                        <!-- start single select -->\n                                        <div class=\"unit\">\n                                            <label class=\"input select\">\n                                                <select class=\"form-control\">\n                                                    <option value=\"none\">Select fruit</option>\n                                                    <option value=\"0\">Apple</option>\n                                                    <option value=\"1\">Banana</option>\n                                                    <option value=\"2\">Coconut</option>\n                                                    <option value=\"3\">Mango</option>\n                                                    <option value=\"4\">Melon</option>\n                                                    <option value=\"5\">Orange</option>\n                                                    <option value=\"6\">Pear</option>\n                                                    <option value=\"7\">Watermelon</option>\n                                                </select>\n                                                <i></i>\n                                            </label>\n                                        </div>\n                                        <!-- end single select -->\n\n                                        <!-- start multiple select -->\n                                        <div class=\"unit\">\n                                            <label class=\"input multiple-select\">\n                                                <select multiple=\"\" class=\"form-control\">\n                                                    <option value=\"0\" selected=\"\">Apple</option>\n                                                    <option value=\"1\">Banana</option>\n                                                    <option value=\"2\">Coconut</option>\n                                                    <option value=\"3\">Mango</option>\n                                                    <option value=\"4\">Melon</option>\n                                                    <option value=\"5\">Orange</option>\n                                                    <option value=\"6\">Pear</option>\n                                                    <option value=\"7\">Watermelon</option>\n                                                </select>\n                                            </label>\n                                        </div>\n                                        <!-- end multiple select -->\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"widget-wrap\">\n                <div class=\"widget-header block-header margin-bottom-0 clearfix\">\n                    <div class=\"pull-left\">\n                        <h3>File Input</h3>\n                        <p>All kind of File Input</p>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"widget-container\">\n                    <div class=\"widget-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"j-forms\">\n\n                                    <div class=\"form-content\">\n\n                                        <div class=\"row\">\n                                            <!-- start prepend small file button -->\n                                            <div class=\"col-md-6 unit\">\n                                                <div class=\"input prepend-small-btn\">\n                                                    <div class=\"file-button\">\n                                                        Browse\n                                                        <input class=\"btn btn-success\" type=\"file\" onchange=\"document.getElementById('prepend-small-btn').value = this.value;\">\n                                                    </div>\n                                                    <input class=\"form-control\" type=\"text\" id=\"prepend-small-btn\" readonly=\"\" placeholder=\"no file selected\">\n                                                </div>\n                                            </div>\n                                            <!-- end prepend small file button -->\n                                            <!-- start append small file button -->\n                                            <div class=\"col-md-6 unit\">\n                                                <div class=\"input append-small-btn\">\n                                                    <div class=\"file-button\">\n                                                        Browse\n                                                        <input class=\"form-control\" type=\"file\" onchange=\"document.getElementById('append-small-btn').value = this.value;\">\n                                                    </div>\n                                                    <input class=\"form-control\" type=\"text\" id=\"append-small-btn\" readonly=\"\" placeholder=\"no file selected\">\n                                                </div>\n                                            </div>\n                                            <!-- end append small file button -->\n                                        </div>\n                                        <!-- end j-row -->\n\n                                        <!-- start append big file button -->\n                                        <div class=\"unit\">\n                                            <div class=\"input append-big-btn\">\n                                                <label class=\"icon-left\" for=\"append-big-btn\">\n                                                    <i class=\"icon icon-download\"></i>\n                                                </label>\n                                                <div class=\"file-button\">\n                                                    Browse\n                                                    <input type=\"file\" class=\"form-control\" onchange=\"document.getElementById('append-big-btn').value = this.value;\">\n                                                </div>\n                                                <input class=\"form-control\" type=\"text\" id=\"append-big-btn\" readonly=\"\" placeholder=\"no file selected\">\n                                            </div>\n                                        </div>\n                                        <!-- end append big file button -->\n\n                                        <!-- start prepend big file button -->\n                                        <div class=\"unit\">\n                                            <div class=\"input prepend-big-btn\">\n                                                <label class=\"icon-right\" for=\"prepend-big-btn\">\n                                                    <i class=\"icon icon-download\"></i>\n                                                </label>\n                                                <div class=\"file-button\">\n                                                    Browse\n                                                    <input class=\"form-control\" type=\"file\" onchange=\"document.getElementById('prepend-big-btn').value = this.value;\">\n                                                </div>\n                                                <input class=\"form-control\" type=\"text\" id=\"prepend-big-btn\" readonly=\"\" placeholder=\"no file selected\">\n                                            </div>\n                                        </div>\n                                        <!-- end prepend big file button -->\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"widget-wrap\">\n                <div class=\"widget-header block-header margin-bottom-0 clearfix\">\n                    <div class=\"pull-left\">\n                        <h3>Widget Addon</h3>\n                        <p>All kind of widget addon input </p>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"widget-container\">\n                    <div class=\"widget-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"j-forms\">\n\n                                    <div class=\"form-content\">\n\n                                        <!-- start widget addons -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6 unit\">\n                                                <div class=\"widget left-50\">\n                                                    <div class=\"input\">\n                                                        <input class=\"form-control\" type=\"text\" id=\"@\" placeholder=\"email\">\n                                                    </div>\n                                                    <label class=\"addon adn-50 adn-left\" for=\"@\">\n                                                        <i class=\"icon icon-at\"></i>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6 unit\">\n                                                <div class=\"widget left-50 right-50\">\n                                                    <div class=\"input\">\n                                                        <input class=\"form-control\" type=\"text\" id=\"$\" placeholder=\"price\">\n                                                    </div>\n                                                    <label class=\"addon adn-50 adn-left\" for=\"$\">\n                                                        <i class=\"icon icon-usd\"></i>\n                                                    </label>\n                                                    <label class=\"addon adn-50 adn-right\" for=\"$\">\n                                                        .00\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end widget addons -->\n\n                                        <!-- start widget addons -->\n                                        <div class=\"unit\">\n                                            <div class=\"widget right-130\">\n                                                <div class=\"input\">\n                                                    <label class=\"icon-left\" for=\"domain\">\n                                                        <i class=\"icon icon-envelope-o\"></i>\n                                                    </label>\n                                                    <input class=\"form-control\" type=\"text\" id=\"domain\" placeholder=\"your username\">\n                                                </div>\n                                                <label class=\"addon adn-130 adn-right\" for=\"domain\">\n                                                    @gmail.com\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <!-- end widget addons -->\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"widget-wrap\">\n                <div class=\"widget-header block-header margin-bottom-0 clearfix\">\n                    <div class=\"pull-left\">\n                        <h3>Widget Button & Link</h3>\n                        <p>All kind of widget addon input </p>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"widget-container\">\n                    <div class=\"widget-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"j-forms\">\n\n                                    <div class=\"form-content\">\n\n                                        <!-- start widget buttons 50 -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6 unit\">\n                                                <div class=\"widget right-50\">\n                                                    <div class=\"input\">\n                                                        <input class=\"form-control\" type=\"search\" placeholder=\"i'm looking for...\">\n                                                    </div>\n                                                    <button type=\"submit\" class=\"addon-btn adn-50 adn-right\">\n                                                        <i class=\"icon icon-search\"></i>\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6 unit\">\n                                                <div class=\"widget right-50\">\n                                                    <div class=\"input\">\n                                                        <input class=\"form-control\" type=\"text\">\n                                                    </div>\n                                                    <button type=\"submit\" class=\"addon-btn adn-50 adn-right\">\n                                                        Go!\n                                                    </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end widget buttons 50 -->\n\n                                        <!-- start widget button 130 -->\n                                        <div class=\"unit\">\n                                            <div class=\"widget left-130\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" placeholder=\"enter your email\">\n                                                </div>\n                                                <button type=\"submit\" class=\"addon-btn adn-130 adn-left\">\n                                                    Subscribe\n                                                </button>\n                                            </div>\n                                        </div>\n                                        <!-- end widget button 130 -->\n                                        <!-- start link -->\n                                        <div class=\"unit\">\n                                            <label class=\"checkbox\">\n                                                <input type=\"checkbox\">\n                                                <i></i> I have read and agree with <a href=\"#\" class=\"link\">Terms of service</a>\n                                            </label>\n                                        </div>\n                                        <!-- end link -->\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"widget-wrap\">\n                <div class=\"widget-header block-header margin-bottom-0 clearfix\">\n                    <div class=\"pull-left\">\n                        <h3>Checkbox and Radio</h3>\n                        <p>All kind of Checkbox and Radio </p>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"widget-container\">\n                    <div class=\"widget-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"j-forms\">\n\n                                    <div class=\"form-content\">\n\n                                        <!-- start columned checkbox and radio -->\n                                        <div class=\"unit\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-3\">\n                                                    <label class=\"checkbox\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Apple\n                                                    </label>\n                                                    <label class=\"checkbox\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Banana\n                                                    </label>\n                                                    <label class=\"checkbox\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Coconut\n                                                    </label>\n                                                </div>\n                                                <div class=\"col-md-3\">\n                                                    <label class=\"checkbox\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Mango\n                                                    </label>\n                                                    <label class=\"checkbox\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Melon\n                                                    </label>\n                                                    <label class=\"checkbox\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Lemon\n                                                    </label>\n                                                </div>\n                                                <div class=\"col-md-3\">\n                                                    <label class=\"radio\">\n                                                        <input type=\"radio\" name=\"radio\" checked=\"\">\n                                                        <i></i> Apricot\n                                                    </label>\n                                                    <label class=\"radio\">\n                                                        <input type=\"radio\" name=\"radio\">\n                                                        <i></i> Grapes\n                                                    </label>\n                                                    <label class=\"radio\">\n                                                        <input type=\"radio\" name=\"radio\">\n                                                        <i></i> Kiwi\n                                                    </label>\n                                                </div>\n                                                <div class=\"col-md-3\">\n                                                    <label class=\"radio\">\n                                                        <input type=\"radio\" name=\"radio\">\n                                                        <i></i> Orange\n                                                    </label>\n                                                    <label class=\"radio\">\n                                                        <input type=\"radio\" name=\"radio\">\n                                                        <i></i> Pear\n                                                    </label>\n                                                    <label class=\"radio\">\n                                                        <input type=\"radio\" name=\"radio\">\n                                                        <i></i> Watermelon\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end j-row -->\n                                        <!-- end columned checkbox and radio -->\n\n                                        <!-- start inline checkbox -->\n                                        <div class=\"unit\">\n                                            <div class=\"inline-group\">\n                                                <label class=\"label\">Inline checkbox</label>\n                                                <label class=\"checkbox\">\n                                                    <input type=\"checkbox\">\n                                                    <i></i> Apple\n                                                </label>\n                                                <label class=\"checkbox\">\n                                                    <input type=\"checkbox\">\n                                                    <i></i> Mango\n                                                </label>\n                                                <label class=\"checkbox\">\n                                                    <input type=\"checkbox\">\n                                                    <i></i> Melon\n                                                </label>\n                                                <label class=\"checkbox\">\n                                                    <input type=\"checkbox\">\n                                                    <i></i> Lemon\n                                                </label>\n                                                <label class=\"checkbox\">\n                                                    <input type=\"checkbox\">\n                                                    <i></i> Watermelon\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <!-- end inline checkbox -->\n\n                                        <!-- start inline radio -->\n                                        <div class=\"unit\">\n                                            <div class=\"inline-group\">\n                                                <label class=\"label\">Inline radio</label>\n                                                <label class=\"radio\">\n                                                    <input type=\"radio\" name=\"i-radio\" checked=\"\">\n                                                    <i></i> Apple\n                                                </label>\n                                                <label class=\"radio\">\n                                                    <input type=\"radio\" name=\"i-radio\">\n                                                    <i></i> Mango\n                                                </label>\n                                                <label class=\"radio\">\n                                                    <input type=\"radio\" name=\"i-radio\">\n                                                    <i></i> Melon\n                                                </label>\n                                                <label class=\"radio\">\n                                                    <input type=\"radio\" name=\"i-radio\">\n                                                    <i></i> Lemon\n                                                </label>\n                                                <label class=\"radio\">\n                                                    <input type=\"radio\" name=\"i-radio\">\n                                                    <i></i> Watermelon\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <!-- end inline radio -->\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"widget-wrap\">\n                <div class=\"widget-header block-header margin-bottom-0 clearfix\">\n                    <div class=\"pull-left\">\n                        <h3>On/Off Switch</h3>\n                        <p>All kind of On/Off switch </p>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"widget-container\">\n                    <div class=\"widget-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"j-forms\">\n\n                                    <div class=\"form-content\">\n                                        <!-- start columned toggle -->\n                                        <div class=\"unit\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4\">\n                                                    <label class=\"checkbox-toggle\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Apple\n                                                    </label>\n                                                    <label class=\"checkbox-toggle\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Banana\n                                                    </label>\n                                                    <label class=\"checkbox-toggle\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Coconut\n                                                    </label>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <label class=\"checkbox-toggle\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Mango\n                                                    </label>\n                                                    <label class=\"checkbox-toggle\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Melon\n                                                    </label>\n                                                    <label class=\"checkbox-toggle\">\n                                                        <input type=\"checkbox\">\n                                                        <i></i> Lemon\n                                                    </label>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <label class=\"radio-toggle\">\n                                                        <input type=\"radio\" name=\"radio-toggle\" checked=\"\">\n                                                        <i></i> Orange\n                                                    </label>\n                                                    <label class=\"radio-toggle\">\n                                                        <input type=\"radio\" name=\"radio-toggle\">\n                                                        <i></i> Pear\n                                                    </label>\n                                                    <label class=\"radio-toggle\">\n                                                        <input type=\"radio\" name=\"radio-toggle\">\n                                                        <i></i> Watermelon\n                                                    </label>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end j-row -->\n                                        <!-- end columned toggle -->\n\n                                        <!-- start inline toggle checkbox -->\n                                        <div class=\"unit\">\n                                            <div class=\"inline-group\">\n                                                <label class=\"label\">Inline checkbox</label>\n                                                <label class=\"checkbox-toggle\">\n                                                    <input type=\"checkbox\">\n                                                    <i></i> Mango\n                                                </label>\n                                                <label class=\"checkbox-toggle\">\n                                                    <input type=\"checkbox\">\n                                                    <i></i> Melon\n                                                </label>\n                                                <label class=\"checkbox-toggle\">\n                                                    <input type=\"checkbox\">\n                                                    <i></i> Watermelon\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <!-- end inline toggle checkbox -->\n\n                                        <!-- start inline toggle radio -->\n                                        <div class=\"unit\">\n                                            <div class=\"inline-group\">\n                                                <label class=\"label\">Inline radio</label>\n                                                <label class=\"radio-toggle\">\n                                                    <input type=\"radio\" name=\"i-radio-toggle\" checked=\"\">\n                                                    <i></i> Apple\n                                                </label>\n                                                <label class=\"radio-toggle\">\n                                                    <input type=\"radio\" name=\"i-radio-toggle\">\n                                                    <i></i> Mango\n                                                </label>\n                                                <label class=\"radio-toggle\">\n                                                    <input type=\"radio\" name=\"i-radio-toggle\">\n                                                    <i></i> Melon\n                                                </label>\n                                                <label class=\"radio-toggle\">\n                                                    <input type=\"radio\" name=\"i-radio-toggle\">\n                                                    <i></i> Watermelon\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <!-- end inline toggle radio -->\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"widget-wrap\">\n                <div class=\"widget-header block-header margin-bottom-0 clearfix\">\n                    <div class=\"pull-left\">\n                        <h3>Ratings</h3>\n                        <p>All kind of ratings </p>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"widget-container\">\n                    <div class=\"widget-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"j-forms\">\n                                    <div class=\"form-content\">\n                                        <!-- start ratings -->\n                                        <div class=\"unit\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-5\">\n                                                    <div class=\"rating-group\">\n                                                        <label class=\"label\">Quality</label>\n                                                        <div class=\"ratings\">\n                                                            <input id=\"5q\" type=\"radio\" name=\"quality-rating\">\n                                                            <label for=\"5q\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"4q\" type=\"radio\" name=\"quality-rating\">\n                                                            <label for=\"4q\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"3q\" type=\"radio\" name=\"quality-rating\">\n                                                            <label for=\"3q\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"2q\" type=\"radio\" name=\"quality-rating\">\n                                                            <label for=\"2q\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"1q\" type=\"radio\" name=\"quality-rating\">\n                                                            <label for=\"1q\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"rating-group\">\n                                                        <label class=\"label\">Flexibility</label>\n                                                        <div class=\"ratings\">\n                                                            <input id=\"5f\" type=\"radio\" name=\"flex-rating\">\n                                                            <label for=\"5f\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"4f\" type=\"radio\" name=\"flex-rating\">\n                                                            <label for=\"4f\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"3f\" type=\"radio\" name=\"flex-rating\">\n                                                            <label for=\"3f\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"2f\" type=\"radio\" name=\"flex-rating\">\n                                                            <label for=\"2f\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"1f\" type=\"radio\" name=\"flex-rating\">\n                                                            <label for=\"1f\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"rating-group\">\n                                                        <label class=\"label\">Service</label>\n                                                        <div class=\"ratings\">\n                                                            <input id=\"5s\" type=\"radio\" name=\"service-rating\">\n                                                            <label for=\"5s\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"4s\" type=\"radio\" name=\"service-rating\">\n                                                            <label for=\"4s\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"3s\" type=\"radio\" name=\"service-rating\">\n                                                            <label for=\"3s\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"2s\" type=\"radio\" name=\"service-rating\">\n                                                            <label for=\"2s\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                            <input id=\"1s\" type=\"radio\" name=\"service-rating\">\n                                                            <label for=\"1s\">\n                                                                <i class=\"icon icon-star\"></i>\n                                                            </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-md-offset-2 col-md-5\">\n                                                    <div class=\"rating-group\">\n                                                        <label class=\"label\">Support</label>\n                                                        <div class=\"ratings\">\n                                                            <input id=\"5supp\" type=\"radio\" name=\"supp-rating\">\n                                                            <label for=\"5supp\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"4supp\" type=\"radio\" name=\"supp-rating\">\n                                                            <label for=\"4supp\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"3supp\" type=\"radio\" name=\"supp-rating\">\n                                                            <label for=\"3supp\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"2supp\" type=\"radio\" name=\"supp-rating\">\n                                                            <label for=\"2supp\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"1supp\" type=\"radio\" name=\"supp-rating\">\n                                                            <label for=\"1supp\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"rating-group\">\n                                                        <label class=\"label\">Delivery</label>\n                                                        <div class=\"ratings\">\n                                                            <input id=\"5d\" type=\"radio\" name=\"delivery-rating\">\n                                                            <label for=\"5d\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"4d\" type=\"radio\" name=\"delivery-rating\">\n                                                            <label for=\"4d\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"3d\" type=\"radio\" name=\"delivery-rating\">\n                                                            <label for=\"3d\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"2d\" type=\"radio\" name=\"delivery-rating\">\n                                                            <label for=\"2d\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"1d\" type=\"radio\" name=\"delivery-rating\">\n                                                            <label for=\"1d\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"rating-group\">\n                                                        <label class=\"label\">Products</label>\n                                                        <div class=\"ratings\">\n                                                            <input id=\"5p\" type=\"radio\" name=\"products-rating\">\n                                                            <label for=\"5p\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"4p\" type=\"radio\" name=\"products-rating\">\n                                                            <label for=\"4p\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"3p\" type=\"radio\" name=\"products-rating\">\n                                                            <label for=\"3p\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"2p\" type=\"radio\" name=\"products-rating\">\n                                                            <label for=\"2p\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                            <input id=\"1p\" type=\"radio\" name=\"products-rating\">\n                                                            <label for=\"1p\">\n                                                                <i class=\"icon icon-thumbs-o-up\"></i>\n                                                            </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <!-- end j-row -->\n                                        </div>\n                                        <!-- end ratings -->\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"widget-wrap\">\n                <div class=\"widget-header block-header margin-bottom-0 clearfix\">\n                    <div class=\"pull-left\">\n                        <h3>Flexibility of fields</h3>\n                        <p>All kind of flexibility of fields </p>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"widget-container margin-top-0\">\n                    <div class=\"widget-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"j-forms\">\n\n                                    <div class=\"form-content\">\n                                        <!-- start first name, last name -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-2\">\n                                                <label class=\"label label-left\">First name</label>\n                                            </div>\n                                            <div class=\"col-md-4 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" placeholder=\"e.g. John\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-2\">\n                                                <label class=\"label label-left\">Last name</label>\n                                            </div>\n                                            <div class=\"col-md-4 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" placeholder=\"e.g. Doe\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end first name, last name -->\n\n                                        <!-- start date of birth -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <label class=\"label\">Date of birth / Gender</label>\n                                            </div>\n                                            <div class=\"col-md-2 unit\">\n                                                <label class=\"input select\">\n                                                    <select class=\"form-control\">\n                                                        <option value=\"1\" selected=\"\">1</option>\n                                                        <option value=\"2\">2</option>\n                                                        <option value=\"3\">3</option>\n                                                        <option value=\"4\">4</option>\n                                                        <option value=\"5\">5</option>\n                                                        <option value=\"6\">6</option>\n                                                        <option value=\"7\">7</option>\n                                                        <option value=\"8\">8</option>\n                                                        <option value=\"9\">9</option>\n                                                        <option value=\"10\">10</option>\n                                                        <option value=\"11\">11</option>\n                                                        <option value=\"12\">12</option>\n                                                        <option value=\"13\">13</option>\n                                                        <option value=\"14\">14</option>\n                                                        <option value=\"15\">15</option>\n                                                        <option value=\"16\">16</option>\n                                                        <option value=\"17\">17</option>\n                                                        <option value=\"18\">18</option>\n                                                        <option value=\"19\">19</option>\n                                                        <option value=\"20\">20</option>\n                                                        <option value=\"21\">21</option>\n                                                        <option value=\"22\">22</option>\n                                                        <option value=\"23\">23</option>\n                                                        <option value=\"24\">24</option>\n                                                        <option value=\"25\">25</option>\n                                                        <option value=\"26\">26</option>\n                                                        <option value=\"27\">27</option>\n                                                        <option value=\"28\">28</option>\n                                                        <option value=\"29\">29</option>\n                                                        <option value=\"30\">30</option>\n                                                        <option value=\"31\">31</option>\n                                                    </select>\n                                                    <i></i>\n                                                </label>\n                                            </div>\n                                            <div class=\"col-md-4 unit\">\n                                                <label class=\"input select\">\n                                                    <select class=\"form-control\">\n                                                        <option value=\"jan\" selected=\"\">January</option>\n                                                        <option value=\"feb\">February</option>\n                                                        <option value=\"mar\">March</option>\n                                                        <option value=\"apr\">April</option>\n                                                        <option value=\"may\">May</option>\n                                                        <option value=\"jun\">June</option>\n                                                        <option value=\"jul\">July</option>\n                                                        <option value=\"aug\">August</option>\n                                                        <option value=\"sep\">September</option>\n                                                        <option value=\"oct\">October</option>\n                                                        <option value=\"nov\">November</option>\n                                                        <option value=\"dec\">December</option>\n                                                    </select>\n                                                    <i></i>\n                                                </label>\n                                            </div>\n                                            <div class=\"col-md-3 unit\">\n                                                <label class=\"input select\">\n                                                    <select class=\"form-control\">\n                                                        <option value=\"2015\" selected=\"\">2015</option>\n                                                        <option value=\"2016\">2014</option>\n                                                        <option value=\"2017\">2013</option>\n                                                        <option value=\"2018\">2012</option>\n                                                        <option value=\"2019\">2011</option>\n                                                        <option value=\"2020\">2010</option>\n                                                        <option value=\"2021\">2009</option>\n                                                        <option value=\"2022\">2008</option>\n                                                        <option value=\"2021\">2007</option>\n                                                        <option value=\"2022\">2006</option>\n                                                        <option value=\"2021\">2005</option>\n                                                        <option value=\"2022\">2004</option>\n                                                        <option value=\"2021\">2003</option>\n                                                        <option value=\"2022\">2002</option>\n                                                        <option value=\"2021\">2001</option>\n                                                        <option value=\"2022\">2000</option>\n                                                    </select>\n                                                    <i></i>\n                                                </label>\n                                            </div>\n                                            <div class=\"col-md-3 unit\">\n                                                <label class=\"input select\">\n                                                    <select class=\"form-control\">\n                                                        <option value=\"none\" selected=\"\">gender</option>\n                                                        <option value=\"male\">male</option>\n                                                        <option value=\"female\">female</option>\n                                                        <option value=\"other\">other</option>\n                                                    </select>\n                                                    <i></i>\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <!-- end date of birth -->\n\n                                        <div class=\"divider gap-top-20 gap-bottom-45\"></div>\n\n                                        <div class=\"row\">\n                                            <!-- start country -->\n                                            <div class=\"col-lg-8 unit\">\n                                                <label class=\"label\">Select your country</label>\n                                                <label class=\"input select\">\n                                                    <select class=\"form-control\">\n                                                        <option value=\"none\">select country</option>\n                                                        <option value=\"Australia\">Australia</option>\n                                                        <option value=\"Austria\">Austria</option>\n                                                        <option value=\"Brazil\">Brazil</option>\n                                                        <option value=\"Canada\">Canada</option>\n                                                        <option value=\"Germany\">Germany</option>\n                                                        <option value=\"India\">India</option>\n                                                        <option value=\"Italy\">Italy</option>\n                                                        <option value=\"Japan\">Japan</option>\n                                                        <option value=\">Netherlands\">Netherlands</option>\n                                                        <option value=\">New Zealand\">New Zealand</option>\n                                                        <option value=\"Philippines\">Philippines</option>\n                                                        <option value=\"Portugal\">Portugal</option>\n                                                        <option value=\"South Africa\">South Africa</option>\n                                                        <option value=\"Spain\">Spain</option>\n                                                        <option value=\"Switzerland\">Switzerland</option>\n                                                        <option value=\"Sweden\">Sweden</option>\n                                                        <option value=\"Turkey\">Turkey</option>\n                                                        <option value=\"United Arab Emirates\">United Arab Emirates</option>\n                                                        <option value=\"United Kingdom\">United Kingdom</option>\n                                                        <option value=\"USA\">USA</option>\n                                                    </select>\n                                                    <i></i>\n                                                </label>\n                                            </div>\n                                            <!-- end country -->\n                                            <!-- start post code -->\n                                            <div class=\"col-md-4 unit\">\n                                                <label class=\"label\">Post code</label>\n                                                <div class=\"input\">\n                                                    <label class=\"icon-right\" for=\"post\">\n                                                        <i class=\"icon icon-bookmark-o\"></i>\n                                                    </label>\n                                                    <input class=\"form-control\" type=\"text\" id=\"post\" placeholder=\"e.g. 103-3478\">\n                                                </div>\n                                            </div>\n                                            <!-- end post code -->\n                                        </div>\n\n                                        <!-- start address -->\n                                        <div class=\"unit\">\n                                            <label class=\"label\">Address</label>\n                                            <div class=\"input\">\n                                                <label class=\"icon-right\" for=\"address\">\n                                                    <i class=\"icon icon-building-o\"></i>\n                                                </label>\n                                                <input class=\"form-control\" type=\"text\" id=\"address\" placeholder=\"e.g. 443 Seventh Avenue, 16th Floor, New York, NY\">\n                                            </div>\n                                        </div>\n                                        <!-- end address -->\n\n                                        <div class=\"divider gap-top-45 gap-bottom-45\"></div>\n\n                                        <!-- start card info -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-2\">\n                                                <label class=\"label label-left\">Card Info</label>\n                                            </div>\n                                            <div class=\"col-md-10 unit\">\n                                                <div class=\"input\">\n                                                    <label class=\"icon-right\" for=\"first-name\">\n                                                        <i class=\"icon icon-user\"></i>\n                                                    </label>\n                                                    <input class=\"form-control\" type=\"text\" id=\"first-name\" placeholder=\"name on card\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end card info -->\n\n                                        <!-- start card number + cvv2 -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-9 unit\">\n                                                <div class=\"input\">\n                                                    <label class=\"icon-right\" for=\"number\">\n                                                        <i class=\"icon icon-credit-card\"></i>\n                                                    </label>\n                                                    <input class=\"form-control\" type=\"text\" id=\"number\" placeholder=\"card number\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3 unit\">\n                                                <div class=\"input\">\n                                                    <label class=\"icon-right\" for=\"cvv2\">\n                                                        <i class=\"icon icon-unlock\"></i>\n                                                    </label>\n                                                    <input class=\"form-control\" type=\"text\" id=\"cvv2\" placeholder=\"cvv2\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end card number + cvv2 -->\n\n                                        <!-- start expirity date -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3\">\n                                                <label class=\"label label-left\">Expires End</label>\n                                            </div>\n                                            <div class=\"col-md-2 unit\">\n                                                <label class=\"input select\">\n                                                    <select class=\"form-control\">\n                                                        <option value=\"01\">01</option>\n                                                        <option value=\"02\">02</option>\n                                                        <option value=\"03\">03</option>\n                                                        <option value=\"04\">04</option>\n                                                        <option value=\"05\">05</option>\n                                                        <option value=\"06\">06</option>\n                                                        <option value=\"07\">07</option>\n                                                        <option value=\"08\">08</option>\n                                                        <option value=\"09\">09</option>\n                                                        <option value=\"10\">10</option>\n                                                        <option value=\"11\">11</option>\n                                                        <option value=\"12\">12</option>\n                                                    </select>\n                                                    <i></i>\n                                                </label>\n                                            </div>\n                                            <div class=\"col-md-3 unit\">\n                                                <label class=\"input select\">\n                                                    <select class=\"form-control\">\n                                                        <option value=\"2015\">2015</option>\n                                                        <option value=\"2016\">2016</option>\n                                                        <option value=\"2017\">2017</option>\n                                                        <option value=\"2018\">2018</option>\n                                                        <option value=\"2019\">2019</option>\n                                                        <option value=\"2020\">2020</option>\n                                                        <option value=\"2021\">2021</option>\n                                                        <option value=\"2022\">2022</option>\n                                                    </select>\n                                                    <i></i>\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <!-- end expirity date -->\n\n                                        <div class=\"w-section-header\">\n                                            <h3>Grid</h3>\n                                        </div>\n\n                                        <!-- start 2/12 -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-2 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"2/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-2 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"2/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-2 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"2/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-2 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"2/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-2 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"2/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-2 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"2/12\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end 2/12 -->\n\n                                        <!-- start 3/12 -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"3/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"3/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"3/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"3/12\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end 3/12 -->\n\n                                        <!-- start 4/12 -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-4 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"4/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-4 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"4/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-4 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"4/12\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end 4/12 -->\n\n                                        <!-- start 5/12 5/12 2/12 -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-5 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"5/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-5 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"5/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-2 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"2/12\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end 5/12 5/12 2/12-->\n\n                                        <!-- start 6/12 -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"6/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-6 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"6/12\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end 6/12 -->\n\n                                        <!-- start 7/12 5/12-->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-7 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"7/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-5 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"5/12\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end 7/12 5/12-->\n\n                                        <!-- start 8/12 4/12 -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-8 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"8/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-4 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"4/12\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end 8/12 4/12 -->\n\n                                        <!-- start 9/12 3/12 -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-9 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"9/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-3 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"3/12\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end 9/12 3/12 -->\n\n                                        <!-- start 10/12 2/12 -->\n                                        <div class=\"row\">\n                                            <div class=\"col-md-10 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"10/12\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-2 unit\">\n                                                <div class=\"input\">\n                                                    <input class=\"form-control\" type=\"text\" readonly=\"\" placeholder=\"2/12\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <!-- end 10/12 2/12 -->\n                                    </div>\n                                    <!-- end /.content -->\n\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"widget-wrap\">\n                <div class=\"widget-header block-header margin-bottom-0 clearfix\">\n                    <div class=\"pull-left\">\n                        <h3>Buttons</h3>\n                        <p>All buttons with size &amp; variations </p>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"widget-container margin-top-0\">\n                    <div class=\"widget-content\">\n                        <div class=\"j-forms\">\n\n                            <div class=\"ex-container\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-default\">Default</a>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-primary\">Primary</a>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-success\">Success</a>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-info\">Info</a>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-warning\">Warning</a>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-danger\">Danger</a>\n                                        </div>\n\n                                    </div>\n\n\n                                </div>\n                            </div>\n                            <div class=\"ex-container\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-default disabled\">Default</a>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-primary disabled\">Primary</a>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-success disabled\">Success</a>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-info disabled\">Info</a>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-warning disabled\">Warning</a>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-ex-container\">\n                                            <a href=\"#\" class=\"btn btn-danger disabled\">Danger</a>\n                                        </div>\n\n                                    </div>\n\n\n                                </div>\n                            </div>\n\n\n                            <div class=\"ex-container\">\n                                <div class=\"row margin-bottom-10\">\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-group-ex-container\">\n                                            <div class=\"btn-group dropup\">\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-default\">Default</a>\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon icon-keyboard_arrow_down\"></i></a>\n                                                <ul class=\"dropdown-menu\">\n                                                    <li><a href=\"javascript:void(0)\">Action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Another action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Something else here</a>\n                                                    </li>\n                                                    <li class=\"divider\"></li>\n                                                    <li><a href=\"javascript:void(0)\">Separated link</a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-group-ex-container\">\n                                            <div class=\"btn-group dropup\">\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-primary\">Primary</a>\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon icon-keyboard_arrow_down\"></i></a>\n                                                <ul class=\"dropdown-menu\">\n                                                    <li><a href=\"javascript:void(0)\">Action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Another action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Something else here</a>\n                                                    </li>\n                                                    <li class=\"divider\"></li>\n                                                    <li><a href=\"javascript:void(0)\">Separated link</a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-group-ex-container\">\n                                            <div class=\"btn-group dropup\">\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-success\">Success</a>\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon icon-keyboard_arrow_down\"></i></a>\n                                                <ul class=\"dropdown-menu\">\n                                                    <li><a href=\"javascript:void(0)\">Action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Another action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Something else here</a>\n                                                    </li>\n                                                    <li class=\"divider\"></li>\n                                                    <li><a href=\"javascript:void(0)\">Separated link</a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-group-ex-container\">\n                                            <div class=\"btn-group dropup\">\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-info\">Info</a>\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"icon icon-keyboard_arrow_down\"></i></a>\n                                                <ul class=\"dropdown-menu\">\n                                                    <li><a href=\"javascript:void(0)\">Action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Another action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Something else here</a>\n                                                    </li>\n                                                    <li class=\"divider\"></li>\n                                                    <li><a href=\"javascript:void(0)\">Separated link</a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-group-ex-container\">\n                                            <div class=\"btn-group dropup\">\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-warning\">Warning</a>\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-warning dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon icon-keyboard_arrow_down\"></i></a>\n                                                <ul class=\"dropdown-menu\">\n                                                    <li><a href=\"javascript:void(0)\">Action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Another action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Something else here</a>\n                                                    </li>\n                                                    <li class=\"divider\"></li>\n                                                    <li><a href=\"javascript:void(0)\">Separated link</a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"col-md-2 col-sm-4\">\n                                        <div class=\"btn-group-ex-container\">\n                                            <div class=\"btn-group dropup\">\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-danger\">danger</a>\n                                                <a href=\"javascript:void(0)\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"icon icon-keyboard_arrow_down\"></i></a>\n                                                <ul class=\"dropdown-menu\">\n                                                    <li><a href=\"javascript:void(0)\">Action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Another action</a>\n                                                    </li>\n                                                    <li><a href=\"javascript:void(0)\">Something else here</a>\n                                                    </li>\n                                                    <li class=\"divider\"></li>\n                                                    <li><a href=\"javascript:void(0)\">Separated link</a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"widget-wrap\">\n                <div class=\"widget-header block-header margin-bottom-0 clearfix\">\n                    <div class=\"pull-left\">\n                        <h3>Sliders</h3>\n                        <p>All sliders </p>\n                    </div>\n                </div>\n                <hr/>\n                <div class=\"widget-container margin-top-0\">\n                    <div class=\"widget-content\">\n                        <div class=\"ex-container\">\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"range-selector range-group\">\n                                        <input id=\"ageInputId\" type=\"range\" min=\"0\" max=\"100\" step=\"3\" oninput=\"ageOutputId.value = ageInputId.value\">\n                                        <output name=\"ageOutputName\" id=\"ageOutputId\">0</output>%\n                                    </div>\n                                </div>\n                                <br/>\n                                <br/>\n                                <div class=\"col-md-6\">\n                                    <div class=\"range-selector range-group\">\n                                        <i class=\"icon icon-light-bulb-outline\"></i>\n                                        <input id=\"ageInputId1\" type=\"range\" min=\"0\" max=\"100\" step=\"3\" oninput=\"ageOutputId1.value = ageInputId1.value\">\n                                        <i class=\"icon icon-black-light-bulb\"></i>\n                                        <output name=\"ageOutputName\" id=\"ageOutputId1\">0</output>%\n                                    </div>\n                                </div>\n\n                                <br/>\n                                <br/>\n                                <div class=\"col-md-6\">\n                                    <div class=\"range-selector range-group\">\n                                        <input id=\"ageInputId2\" type=\"range\" min=\"0\" max=\"100\" step=\"3\" oninput=\"ageOutputId2.value = ageInputId2.value\">\n                                        <i class=\"icon icon-black-light-bulb\"></i>\n                                        <output name=\"ageOutputName\" id=\"ageOutputId2\">0</output>%\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/form-elements/form-elements.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/form-elements/form-elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormElementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormElementsComponent = /** @class */ (function () {
    function FormElementsComponent() {
    }
    FormElementsComponent.prototype.ngOnInit = function () {
    };
    FormElementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-elements',
            template: __webpack_require__("./src/app/core/form-elements/form-elements.component.html"),
            styles: [__webpack_require__("./src/app/core/form-elements/form-elements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormElementsComponent);
    return FormElementsComponent;
}());



/***/ }),

/***/ "./src/app/core/forms/checkbox-input/checkbox-input.component.html":
/***/ (function(module, exports) {

module.exports = "\n<label class=\"checkbox-toggle\">\n    <input [checked]=\"checked\" (change)=\"onInputChange($event)\" type=\"checkbox\">\n    <i [attr.check]=\"check\" [attr.uncheck]=\"uncheck\"></i> {{name}}\n</label>"

/***/ }),

/***/ "./src/app/core/forms/checkbox-input/checkbox-input.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/forms/checkbox-input/checkbox-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxInputComponent = /** @class */ (function () {
    function CheckboxInputComponent() {
        this.name = '';
        this.check = 'ON';
        this.uncheck = 'OFF';
        this.checked = false;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    CheckboxInputComponent.prototype.onInputChange = function (e) {
        this.onChange.emit(e.target.checked);
    };
    CheckboxInputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('name'),
        __metadata("design:type", Object)
    ], CheckboxInputComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('check'),
        __metadata("design:type", Object)
    ], CheckboxInputComponent.prototype, "check", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('uncheck'),
        __metadata("design:type", Object)
    ], CheckboxInputComponent.prototype, "uncheck", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('checked'),
        __metadata("design:type", Object)
    ], CheckboxInputComponent.prototype, "checked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('onChange'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], CheckboxInputComponent.prototype, "onChange", void 0);
    CheckboxInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkbox-input',
            template: __webpack_require__("./src/app/core/forms/checkbox-input/checkbox-input.component.html"),
            styles: [__webpack_require__("./src/app/core/forms/checkbox-input/checkbox-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxInputComponent);
    return CheckboxInputComponent;
}());



/***/ }),

/***/ "./src/app/core/forms/radio-input/radio-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <div class=\"input-group Name\">\n    <span class=\"input-group-addon\"><i class=\"{{icon}}\"></i></span>\n    <div class=\"div form-control\">\n      <label class=\" radio-inline\"><input type=\"radio\" name=\"optradio\">Digital</label>\n      <label class=\" radio-inline\"><input type=\"radio\" name=\"optradio\">Analog</label>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/forms/radio-input/radio-input.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/forms/radio-input/radio-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadioInputComponent = /** @class */ (function () {
    function RadioInputComponent() {
    }
    RadioInputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], RadioInputComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], RadioInputComponent.prototype, "icon", void 0);
    RadioInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forms-radio-input',
            template: __webpack_require__("./src/app/core/forms/radio-input/radio-input.component.html"),
            styles: [__webpack_require__("./src/app/core/forms/radio-input/radio-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RadioInputComponent);
    return RadioInputComponent;
}());



/***/ }),

/***/ "./src/app/core/forms/select-input/select-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"inputName\">{{name}}*</label>\n  <div class=\"input-group Name\">\n    <span class=\"input-group-addon\"><i class=\"{{icon}}\"></i></span>\n    <select type=\"text\" class=\"form-control\" (change)=\"onInputChange($event)\">\n      <option *ngFor=\"let option of options\" [selected]=\"(option.value ? option.value : option.name) === selected\" value=\"{{option.value ? option.value : option.name}}\">{{option.name}}</option>\n    </select>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/forms/select-input/select-input.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/forms/select-input/select-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectInputComponent = /** @class */ (function () {
    function SelectInputComponent() {
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SelectInputComponent.prototype.onInputChange = function (e) {
        this.onChange.emit(e.target.value);
    };
    SelectInputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectInputComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectInputComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectInputComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectInputComponent.prototype, "selected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SelectInputComponent.prototype, "onChange", void 0);
    SelectInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forms-select-input',
            template: __webpack_require__("./src/app/core/forms/select-input/select-input.component.html"),
            styles: [__webpack_require__("./src/app/core/forms/select-input/select-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectInputComponent);
    return SelectInputComponent;
}());



/***/ }),

/***/ "./src/app/core/forms/text-input/text-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"inputName\">{{name}}*</label>\n  <div class=\"input-group Name\">\n    <span class=\"input-group-addon\"><i class=\"{{icon}}\"></i></span>\n    <input type=\"text\" class=\"form-control\" \n    value=\"{{value}}\" (keyup)=\"onInputChange($event)\" placeholder=\"{{placeholder}}\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/forms/text-input/text-input.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/forms/text-input/text-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextInputComponent = /** @class */ (function () {
    function TextInputComponent() {
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    TextInputComponent.prototype.onInputChange = function (e) {
        this.onChange.emit(e.target.value);
    };
    TextInputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TextInputComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TextInputComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TextInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TextInputComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], TextInputComponent.prototype, "onChange", void 0);
    TextInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forms-text-input',
            template: __webpack_require__("./src/app/core/forms/text-input/text-input.component.html"),
            styles: [__webpack_require__("./src/app/core/forms/text-input/text-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TextInputComponent);
    return TextInputComponent;
}());



/***/ }),

/***/ "./src/app/core/functions/UpdateOrInsert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = UpdateOrInsert;
function UpdateOrInsert(element, context, compareKey) {
    var updated = false;
    var newContext;
    newContext = context.map(function ($el) {
        if ($el[compareKey] === element[compareKey]) {
            updated = true;
            return element;
        }
        return $el;
    });
    if (!updated) {
        newContext = context.concat(element);
    }
    return newContext;
}


/***/ }),

/***/ "./src/app/core/functions/UpdateOrPrepend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = UpdateOrPrepend;
function UpdateOrPrepend(element, context, compareKey) {
    var updated = false;
    var newContext;
    newContext = context.map(function ($el) {
        if ($el[compareKey] === element[compareKey]) {
            updated = true;
            return element;
        }
        return $el;
    });
    if (!updated) {
        newContext = [element].concat(context);
    }
    return newContext;
}


/***/ }),

/***/ "./src/app/core/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"dot1\"></div>\n  <div class=\"dot2\"></div>\n</div>"

/***/ }),

/***/ "./src/app/core/loading/loading.component.scss":
/***/ (function(module, exports) {

module.exports = ".spinner {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  text-align: center;\n  -webkit-animation: sk-rotate 2.0s infinite linear;\n  animation: sk-rotate 2.0s infinite linear; }\n\n.dot1, .dot2 {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.dot2 {\n  top: auto;\n  bottom: 0;\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-rotate {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes sk-rotate {\n  100% {\n    transform: rotate(360deg);\n    -webkit-transform: rotate(360deg); } }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/core/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: __webpack_require__("./src/app/core/loading/loading.component.html"),
            styles: [__webpack_require__("./src/app/core/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/core/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-page social-login\">\n  <div class=\"login-container boxed-login\">\n    <div class=\"col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 no-float\">\n      <div class=\"login-form-container\">\n        <div class=\"j-forms\">\n          <div class=\"login-form-header\">\n            <div class=\"logo\">\n              <img src=\"assets/images/logo.png\" alt=\"logo\">\n              <span>Smart home</span>\n            </div>\n          </div>\n\n          <form (submit)=\"login()\">\n            <div class=\"login-form-content\">\n              <div class=\"unit\">\n                <div class=\"input login-input\">\n                  <label class=\"icon-left\" for=\"login\">\n                      <i class=\"icon icon-person\"></i>\n                  </label>\n                  <input (change)=\"changeInput('username', $event.target.value)\" class=\"form-control login-frm-input\" type=\"text\" id=\"login\" name=\"login\" placeholder=\"Username / Email\">\n                </div>\n              </div>\n              <div class=\"unit\">\n                <div class=\"input login-input\">\n                  <label class=\"icon-left\" for=\"password\">\n                      <i class=\"icon icon-vpn_key\"></i>\n                  </label>\n                  <input (change)=\"changeInput('password', $event.target.value)\" class=\"form-control login-frm-input\" type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\">\n                  <span class=\"hint\">\n                <a href=\"#\" class=\"link\">Forgot password?</a>\n              </span>\n                </div>\n              </div>\n\n              <div class=\"unit\">\n                <label class=\"checkbox\">\n                      <input type=\"checkbox\" (change)=\"changeInput('remember', $event.target.checked)\" name=\"logged\" value=\"true\" checked=\"\">\n                      <i></i>\n                      Keep me logged in\n                  </label>\n              </div>\n\n              <div class=\"response\"></div>\n\n            </div>\n          </form>\n          <div class=\"login-form-footer\">\n            <a (click)=\"login()\" class=\"btn-block btn btn-primary\">Sign in</a>\n            <a routerLink='/signup' class=\"btn-block btn btn-danger\">Or signup for free</a>\n          </div>\n          \n            \n        \n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/core/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "/deep/body {\n  background-color: #0069ff; }\n\n.card-shadow {\n  -webkit-box-shadow: 0 0.1em 0.25em rgba(0, 0, 0, 0.1), 0 0.1em 0.2em rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0.1em 0.25em rgba(0, 0, 0, 0.1), 0 0.1em 0.2em rgba(0, 0, 0, 0.1); }\n\n.login-page {\n  padding-top: 0px;\n  background-repeat: repeat;\n  background-attachment: fixed; }\n\n.login-container {\n  margin-top: 60px; }\n\n.login-form-header {\n  padding: 10px 30px 35px 30px; }\n\n.login-form-header .logo {\n    text-align: center; }\n\n.login-form-header .logo img {\n      width: 50px; }\n\n.login-form-header .logo span {\n      font-size: 20px;\n      font-weight: bold;\n      margin-left: 10px;\n      position: relative;\n      top: 5px; }\n\n.login-input .login-frm-input {\n  height: 50px; }\n\n.login-input .icon-left {\n  height: 48px;\n  line-height: 47px !important; }\n\n.login-form-footer .btn {\n  padding: 10px 20px !important;\n  font-size: 16px !important;\n  font-weight: 400 !important; }\n\n.btn-login {\n  padding: 10px 20px !important;\n  background-color: #fff !important;\n  border: #bbb 1px solid !important;\n  border-radius: 3px !important;\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12) !important;\n          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12) !important;\n  font-size: 16px !important;\n  font-weight: 400 !important; }\n\n.btn-login:hover {\n    background-color: #17bab8 !important;\n    border: #17bab8 1px solid !important;\n    -webkit-box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19) !important;\n            box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19) !important;\n    color: #fff !important; }\n\n.btn-login:focus {\n    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12) !important;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12) !important; }\n\n.login-page-footer {\n  margin-top: 30px;\n  text-align: center; }\n\n.boxed-login .login-form-container {\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  padding: 25px;\n  border-radius: 5px; }\n\n.boxed-login .login-form-footer {\n  padding: 25px;\n  margin-top: 25px;\n  margin-left: -25px;\n  margin-right: -25px;\n  margin-bottom: -25px;\n  border-radius: 0 0 4px 4px; }\n\n.boxed-login .login-form-footer .btn {\n    padding: 10px 20px !important;\n    font-size: 16px !important;\n    font-weight: 400 !important; }\n\n.social-login {\n  padding-top: 10vh; }\n\n.social-login > .login-container {\n    margin-top: 0px !important; }\n\n.social-login .login-form-footer {\n    margin-bottom: 25px !important; }\n\n.error-code {\n  margin-bottom: 30px;\n  font-size: 150px;\n  text-align: center;\n  font-family: 'Kranky', cursive; }\n\n.error-code > div {\n    position: relative;\n    display: inline-block;\n    background-color: #fff;\n    padding: 0px 30px;\n    border-radius: 100px 60px 40px 0px;\n    -moz-border-radius: 100px 60px 40px 0px;\n    -webkit-border-radius: 100px 60px 40px 0px;\n    line-height: normal; }\n\n.error-code > div > span {\n      color: #17bab8; }\n\n.error-code > div:after {\n      content: \"\";\n      width: 0;\n      height: 0;\n      border-top: 60px solid #fff;\n      border-right: 60px solid transparent;\n      position: absolute;\n      left: 0px;\n      bottom: -40px; }\n\n.error-message {\n  margin-bottom: 40px;\n  text-align: right; }\n\n.error-message h4 {\n    font-size: 32px;\n    font-weight: 300;\n    color: #e57373; }\n\n.error-body {\n  margin-bottom: 60px; }\n\n.error-footer-container {\n  margin-top: 30px;\n  padding: 15px;\n  color: #666; }\n\n.error-footer-container a {\n    color: #868686; }\n\n.error-footer-container a:hover, .error-footer-container a:focus {\n      text-decoration: none; }\n\n.error-footer-container .footer-right {\n    text-align: right; }\n\n.error-footer-container .footer-right .footer-meta i {\n      color: #00bcd4; }\n"

/***/ }),

/***/ "./src/app/core/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_services_user_service__ = __webpack_require__("./src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_services_communicate_service__ = __webpack_require__("./src/app/core/services/communicate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(document, user, router, communicate) {
        this.document = document;
        this.user = user;
        this.router = router;
        this.communicate = communicate;
        this.form = {
            password: '',
            remember: false,
            username: ''
        };
        this.bodyClass = 'login-state';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.document.body.classList.add(this.bodyClass);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.document.body.classList.remove(this.bodyClass);
    };
    LoginComponent.prototype.changeInput = function (field, value) {
        this.form[field] = value;
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.user.Login(this.form.username, this.form.password)];
                    case 1:
                        if (_a.sent()) {
                            this.router.navigateByUrl('/index');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/core/login/login.component.html"),
            styles: [__webpack_require__("./src/app/core/login/login.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Document,
            __WEBPACK_IMPORTED_MODULE_2__app_core_services_user_service__["b" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_core_services_communicate_service__["a" /* CommunicateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navigation\">\n    <div class=\"nav-item-container\">    \n        <a *ngFor=\"let nav of getNavigation()\" [routerLink]='nav.link' routerLinkActive=\"active\">\n            <i [class]=\"nav.icon\"></i>\n            {{nav.title}}\n        </a>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/core/navigation/navigation.component.scss":
/***/ (function(module, exports) {

module.exports = "nav.navigation {\n  overflow-y: auto;\n  background: #1a1a1c; }\n  @media (min-width: 992px) {\n    nav.navigation {\n      position: fixed;\n      left: 0px;\n      top: 0px;\n      bottom: 0;\n      width: 100px; } }\n  nav.navigation .nav-item-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow-x: auto;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  @media (max-width: 991px) {\n      nav.navigation .nav-item-container {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; } }\n  nav.navigation .nav-item-container a {\n      text-decoration: none;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: center;\n      padding: 15px 6px 15px 3px;\n      color: #7f7f7f;\n      display: inline-block;\n      font-weight: bold; }\n  nav.navigation .nav-item-container a i {\n        display: block;\n        font-size: 30px;\n        padding-bottom: 5px; }\n  nav.navigation .nav-item-container a:hover, nav.navigation .nav-item-container a.active {\n        border-left: 3px solid #00cb7a;\n        background-color: #313435;\n        padding-left: 0px;\n        cursor: pointer; }\n  nav.navigation .nav-item-container a:hover i, nav.navigation .nav-item-container a.active i {\n          color: #aaaaaa; }\n  @media (max-width: 991px) {\n        nav.navigation .nav-item-container a {\n          min-width: 100px; } }\n"

/***/ }),

/***/ "./src/app/core/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_services_user_service__ = __webpack_require__("./src/app/core/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(user, authGurard) {
        this.user = user;
        this.authGurard = authGurard;
        this.navigation = [
            {
                link: '/index',
                icon: 'icon icon-home',
                title: 'Home'
            },
            {
                link: '/devices',
                icon: 'icon icon-developer_board',
                title: 'Devices',
                permissions: ['DEVICES::VIEW'],
                auth: true
            },
            {
                link: '/widgets',
                icon: 'icon icon-widgets',
                title: 'Widgets',
                permissions: ['WIDGETS::VIEW'],
                auth: true
            },
            {
                link: '/gallery',
                icon: 'icon icon-account_box',
                title: 'File upload',
                permissions: ['USERS::VIEW'],
                auth: true
            },
            {
                link: '/users',
                icon: 'icon icon-account_box',
                title: 'Users',
                permissions: ['USERS::VIEW'],
                auth: true
            },
            {
                link: '/roles',
                icon: 'icon icon-key',
                title: 'Roles & permissions',
                permissions: ['ROLES::VIEW'],
                auth: true
            },
            {
                link: '/locations',
                icon: 'icon icon-room',
                title: 'locations',
                permissions: ['LOCATIONS::VIEW'],
                auth: true
            },
            {
                link: '/activities',
                icon: 'icon icon-notifications_active',
                title: 'Activities',
                permissions: ['ACTIVITIES::VIEW'],
                auth: true
            },
            {
                link: '/form-elements',
                icon: 'icon icon-wpforms',
                title: 'Form elements'
            },
            {
                link: '/login',
                icon: 'icon icon-exit_to_app',
                title: 'Logout'
            }
        ];
    }
    NavigationComponent.prototype.getNavigation = function () {
        var _this = this;
        return this.navigation.filter(function (item) {
            if (item.auth === true) {
                if (!_this.authGurard.canActivate()) {
                    return false;
                }
            }
            return _this.user.canActivate(item.permissions);
        });
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/core/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/core/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_core_services_user_service__["b" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__app_core_services_user_service__["a" /* AuthGuard */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/core/page-header/page-header.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class='page-title'>\n  <i class=\"{{icon}}\"></i>\n  {{title}}\n</h1>"

/***/ }),

/***/ "./src/app/core/page-header/page-header.component.scss":
/***/ (function(module, exports) {

module.exports = ".page-title {\n  background: #00cb7a;\n  margin: 0;\n  font-size: 23px;\n  padding: 10px 15px;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/core/page-header/page-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "icon", void 0);
    PageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-header',
            template: __webpack_require__("./src/app/core/page-header/page-header.component.html"),
            styles: [__webpack_require__("./src/app/core/page-header/page-header.component.scss")]
        })
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/roles/roles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container j-forms\">\n  <div class=\"cards row\">\n    <div class=\"col-md-4 col-sm-6\" *ngFor=\"let role of roles\">\n      <div class=\"card\">\n        <i class=\"icon icon-user\"></i>\n        <h2>{{role.title}}</h2>\n        <p>{{countRolePermissions(role)}} Users having this role</p>\n\n        <div class=\"permission-box\">\n          <div *ngFor=\"let perm of perms\">\n            <app-checkbox-input \n              [checked]=\"roleHasPermission(role, perm)\" \n              (onChange)=\"onPermChange($event, perm, role)\" \n              [name]='perm.title'\n              >\n            </app-checkbox-input>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/core/roles/roles.component.scss":
/***/ (function(module, exports) {

module.exports = ".page-container {\n  padding: 15px; }\n\n.cards .icon {\n  font-size: 48px; }\n\n.cards .card {\n  color: white;\n  background: #00cb7a;\n  text-align: center;\n  padding: 15px 0;\n  margin-bottom: 15px; }\n\n.cards .permission-box {\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/core/roles/roles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_services_permissions_service__ = __webpack_require__("./src/app/core/services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_services_requests_service__ = __webpack_require__("./src/app/core/services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var RolesComponent = /** @class */ (function () {
    function RolesComponent(router, permissions, requests, store) {
        this.router = router;
        this.permissions = permissions;
        this.requests = requests;
        this.store = store;
        this.perms = [];
        this.roles = [];
    }
    RolesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.store.select('roles').subscribe(function (collection) {
                    _this.roles = collection;
                });
                this.perms = this.permissions.getAll();
                return [2 /*return*/];
            });
        });
    };
    RolesComponent.prototype.countRolePermissions = function (role) {
        return role.permissions.length;
    };
    RolesComponent.prototype.roleHasPermission = function (role, permission) {
        var $perm = role.permissions.find(function (perm) { return perm.key === permission.key; });
        return $perm ? true : false;
    };
    RolesComponent.prototype.onPermChange = function (value, perm, role) {
        // If true, we need to add this permission to role, otherwise, remove it.
        if (value) {
            role.permissions = role.permissions.concat(perm);
            this.store.dispatch({
                type: 'UPDATE_ROLE',
                payload: role
            });
        }
        else {
            role.permissions = role.permissions.filter(function (p) { return p.key !== perm.key; });
        }
    };
    RolesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-roles',
            template: __webpack_require__("./src/app/core/roles/roles.component.html"),
            styles: [__webpack_require__("./src/app/core/roles/roles.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_services_permissions_service__["a" /* PermissionsService */],
            __WEBPACK_IMPORTED_MODULE_3__app_core_services_requests_service__["a" /* RequestsService */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/core/services/actions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_iot_definitions__ = __webpack_require__("./src/app/iot/definitions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActionsService = /** @class */ (function () {
    function ActionsService(store) {
        this.store = store;
    }
    ActionsService.prototype.triggerDeviceChange = function ($event, device, pin, newValue) {
        this.notfityActivity({
            icon: 'icon-play',
            iconType: 'icon',
            reason: 'Ali',
            time: '10 Minutes ago',
            description: $event.target.value + ' -> ' + device.uniqueid + ' > ' + newValue,
            id: Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(111, 999),
            type: __WEBPACK_IMPORTED_MODULE_2__app_iot_definitions__["a" /* ActivityTypes */].DevicePinChange,
            meta: {
                device: device, pin: pin, newValue: newValue
            }
        });
    };
    ActionsService.prototype.createWidgets = function (widget) {
        this.widgets = this.store.select('widgets');
        this.store.dispatch({ type: 'UPDATE_WIDGET', payload: widget });
    };
    ActionsService.prototype.findWidget = function (device, pin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.store.select(function (state) { return state.widgets; }).subscribe(function (widgets) {
                var widget = widgets.filter(function (x) { return pin && device && x.device.uniqueid === device.uniqueid && x.pin.id === pin.id; });
                resolve(widget[0]);
            });
        });
    };
    /**
     * When a new event happens on system, you can call this function
     * to notify the rest of application an event occured.
     */
    ActionsService.prototype.notfityActivity = function (activity) {
        this.store.dispatch({ type: 'UPDATE_ACTIVITY', payload: activity });
    };
    ActionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], ActionsService);
    return ActionsService;
}());



/***/ }),

/***/ "./src/app/core/services/communicate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requests_service__ = __webpack_require__("./src/app/core/services/requests.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CommunicateService = /** @class */ (function () {
    function CommunicateService(store, requests) {
        this.store = store;
        this.requests = requests;
        this.getDevices();
        this.getRoles();
        this.getLocations();
        this.getActivities();
        this.getWidgets();
    }
    CommunicateService.prototype.authenticateUser = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requests.authenticateUser(username, password)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    CommunicateService.prototype.getWidgets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var collections, _i, collections_1, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requests.getWidgets()];
                    case 1:
                        collections = _a.sent();
                        for (_i = 0, collections_1 = collections; _i < collections_1.length; _i++) {
                            item = collections_1[_i];
                            this.store.dispatch({
                                type: 'UPDATE_WIDGET',
                                payload: item
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CommunicateService.prototype.getActivities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var collections, _i, collections_2, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requests.getActivities()];
                    case 1:
                        collections = _a.sent();
                        for (_i = 0, collections_2 = collections; _i < collections_2.length; _i++) {
                            item = collections_2[_i];
                            this.store.dispatch({
                                type: 'UPDATE_ACTIVITY',
                                payload: item
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CommunicateService.prototype.getDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var collections, _i, collections_3, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requests.getDevices()];
                    case 1:
                        collections = _a.sent();
                        for (_i = 0, collections_3 = collections; _i < collections_3.length; _i++) {
                            item = collections_3[_i];
                            this.store.dispatch({
                                type: 'UPDATE_DEVICE',
                                payload: item
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CommunicateService.prototype.getLocations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var collections, _i, collections_4, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requests.getLocations()];
                    case 1:
                        collections = _a.sent();
                        for (_i = 0, collections_4 = collections; _i < collections_4.length; _i++) {
                            item = collections_4[_i];
                            this.store.dispatch({
                                type: 'UPDATE_LOCATION',
                                payload: item
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CommunicateService.prototype.getRoles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var collections, _i, collections_5, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requests.getRoles()];
                    case 1:
                        collections = _a.sent();
                        for (_i = 0, collections_5 = collections; _i < collections_5.length; _i++) {
                            item = collections_5[_i];
                            this.store.dispatch({
                                type: 'INSERT_ROLE',
                                payload: item
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CommunicateService.prototype.findRoleById = function (id) {
        var role = null;
        this.store.select('roles').subscribe(function (collection) {
            role = collection.find(function (x) { return x.id === id; });
        });
        return role;
    };
    CommunicateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_2__requests_service__["a" /* RequestsService */]])
    ], CommunicateService);
    return CommunicateService;
}());



/***/ }),

/***/ "./src/app/core/services/mocks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MocksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_iot_definitions__ = __webpack_require__("./src/app/iot/definitions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__permissions_service__ = __webpack_require__("./src/app/core/services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_faker__ = __webpack_require__("./node_modules/faker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_faker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_faker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * All mocks data for application sits here. In general, data doesn't belong to components,
 * the data layer is completely independent from the componenets;
 * Components read data from store.
 * Hence, reducers, actions and mocks all are flat in the project directory.
 */
var MocksService = /** @class */ (function () {
    function MocksService(permissions) {
        this.permissions = permissions;
    }
    MocksService.prototype.Activities = function () {
        return [
            {
                icon: 'assets/images/avatar-2.jpg',
                reason: 'Katy',
                type: __WEBPACK_IMPORTED_MODULE_1__app_iot_definitions__["a" /* ActivityTypes */].DevicePinChange,
                description: 'Security Alaram',
                time: '10 minutes ago',
                iconType: 'image',
                meta: {},
                id: 0
            },
            {
                icon: 'icon-play_arrow',
                reason: 'Sonos PLAY',
                type: __WEBPACK_IMPORTED_MODULE_1__app_iot_definitions__["a" /* ActivityTypes */].DevicePinChange,
                description: 'Bakermat - teach me',
                time: '26 minutes ago',
                iconType: 'icon',
                meta: {},
                id: 1
            },
            {
                icon: 'icon-wifi2',
                reason: 'Macbook',
                type: __WEBPACK_IMPORTED_MODULE_1__app_iot_definitions__["a" /* ActivityTypes */].DevicePinChange,
                description: 'Wifi network',
                time: '29 minutes ago',
                iconType: 'icon',
                meta: {},
                id: 2
            },
            {
                icon: 'assets/images/avatar-3.jpg',
                reason: 'Chromecast',
                type: __WEBPACK_IMPORTED_MODULE_1__app_iot_definitions__["a" /* ActivityTypes */].DevicePinChange,
                description: 'Interstellar',
                time: '2 hour ago',
                iconType: 'image',
                meta: {},
                id: 3
            },
            {
                icon: 'assets/images/avatar-1.jpg',
                reason: 'Incomming call',
                type: __WEBPACK_IMPORTED_MODULE_1__app_iot_definitions__["a" /* ActivityTypes */].DevicePinChange,
                description: 'Micheal Darrah',
                time: '3 hour ago',
                iconType: 'image',
                meta: {},
                id: 4
            }
        ];
    };
    MocksService.prototype.Locations = function () {
        return [
            { id: 1, name: 'Kitchen', 'icon': 'kitchen.svg' },
            { id: 2, name: 'Bathroom', 'icon': 'bathroom.svg' },
            { id: 3, name: 'Master bedrrom', 'icon': 'master-bedroom.svg' },
            { id: 4, name: 'Kitchen', 'icon': 'kitchen.svg' },
            { id: 5, name: 'Bathroom', 'icon': 'master-bedroom.svg' }
        ];
    };
    MocksService.prototype.User = function () {
        return {
            email: 'alitorabi@seekasia.com',
            username: 'alitorabi',
            avatar: 'c81d6398-d086-42ba-a4a8-c6b65acaa1ce.jpg',
            firstname: 'Ali',
            lastname: 'Doe ',
            role: this.Roles()[0]
        };
    };
    MocksService.prototype.Roles = function () {
        return [
            {
                permissions: [
                    this.permissions.findByKey('DEVICES::VIEW'),
                    this.permissions.findByKey('WIDGETS::VIEW'),
                    this.permissions.findByKey('LOCATIONS::VIEW'),
                    this.permissions.findByKey('ACTIVITIES::VIEW'),
                    this.permissions.findByKey('ROLES::VIEW'),
                    this.permissions.findByKey('USERS::VIEW')
                ],
                id: 1,
                title: 'Content Moderator'
            },
            {
                permissions: [],
                id: 2,
                title: 'Higher manager'
            },
            {
                permissions: [],
                id: 3,
                title: 'Installler'
            }
        ];
    };
    MocksService.prototype.Devices = function () {
        function value() {
            switch (Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["random"])(0, 1)) {
                case 0:
                    return Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["random"])(0, 1) ? 'ON' : 'OFF';
                case 1:
                    return Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["random"])(1000, 9000) * 0.001;
            }
        }
        function createPins(id) {
            if (id === void 0) { id = 2; }
            return Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["times"])(8, function (index) {
                return {
                    id: index,
                    type: Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["random"])(0, 1) === 1 ? 'input' : 'output',
                    value: value()
                };
            });
        }
        function createDevices(id) {
            if (id === void 0) { id = 3; }
            return Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["times"])(id, function () {
                return {
                    uniqueid: 'dev-' + Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["random"])(1111, 9999),
                    pins: createPins(2)
                };
            });
        }
        return createDevices();
    };
    MocksService.prototype.Widgets = function () {
        var devices = this.Devices();
        var locations = this.Locations();
        return Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["times"])(4, function () {
            var device = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["sample"])(devices);
            var location = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["sample"])(locations);
            return {
                device: device,
                location: location,
                name: Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["sample"])(['Cloud', 'Lamp', 'Bridge']),
                pin: Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["sample"])(device.pins)
            };
        });
    };
    MocksService.prototype.Users = function (_a) {
        var offset = _a.offset;
        return {
            table: {
                count: 3
            },
            data: Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["times"])(3, function (index) {
                return {
                    'id': index + +offset + 1,
                    'firstname': __WEBPACK_IMPORTED_MODULE_4_faker___default.a.name.findName().split(' ')[0],
                    'lastname': __WEBPACK_IMPORTED_MODULE_4_faker___default.a.name.findName().split(' ')[0],
                    'email': __WEBPACK_IMPORTED_MODULE_4_faker___default.a.internet.email()
                };
            })
        };
    };
    MocksService.prototype.createVPC = function (form) {
        function hasUnvalidFields(vpc) {
            var errors = [];
            if (!vpc.administrator) {
                errors.push({
                    location: 'administrator',
                    message: 'You didn\'t provide the administrator email. VPC needs an administrator'
                });
            }
            if (!vpc.administratorPassword) {
                errors.push({
                    location: 'administratorPassword',
                    message: 'Make sure you provide a password longer than 8 characters'
                });
            }
            if (!vpc.vpcname) {
                errors.push({
                    location: 'vpcname',
                    message: 'Please provide the vpcname'
                });
            }
            if (!vpc.vpcregion) {
                errors.push({
                    location: 'vpcregion',
                    message: 'Please select your geographical location.'
                });
            }
            return errors;
        }
        if (hasUnvalidFields(form).length) {
            return {
                error: {
                    code: 1,
                    message: 'Please fix the errors within the form',
                    errors: hasUnvalidFields(form)
                }
            };
        }
        return {
            data: {
                items: [
                    {
                        vpc: form
                    }
                ]
            }
        };
    };
    MocksService.prototype.createUser = function (form) {
        function hasUnvalidFields(vpc) {
            var errors = [];
            if (!vpc.firstname) {
                errors.push({
                    location: 'firstname',
                    message: 'You didn\'t provide the firstname'
                });
            }
            if (!vpc.lastname) {
                errors.push({
                    location: 'lastname',
                    message: 'You didn\t provide the lastname'
                });
            }
            if (!vpc.email) {
                errors.push({
                    location: 'email',
                    message: 'Please provide the email'
                });
            }
            if (!vpc.password) {
                errors.push({
                    location: 'password',
                    message: 'Please provide a strong password'
                });
            }
            return errors;
        }
        if (hasUnvalidFields(form).length) {
            return {
                error: {
                    code: 1,
                    message: 'Please fix the errors within the form',
                    errors: hasUnvalidFields(form)
                }
            };
        }
        return {
            data: {
                items: [
                    {
                        vpc: form
                    }
                ]
            }
        };
    };
    MocksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__permissions_service__["a" /* PermissionsService */]])
    ], MocksService);
    return MocksService;
}());



/***/ }),

/***/ "./src/app/core/services/permissions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PermissionsService = /** @class */ (function () {
    function PermissionsService() {
    }
    PermissionsService.prototype.UsersPermissions = function () {
        return [
            {
                group: 'USERS',
                key: 'USERS::CREATE',
                title: 'Create user'
            },
            {
                group: 'USERS',
                key: 'USERS::UPDATE',
                title: 'Update user'
            },
            {
                group: 'USERS',
                key: 'USERS::DELETE',
                title: 'Delete user'
            },
            {
                group: 'USERS',
                key: 'USERS::VIEW',
                title: 'View users'
            }
        ];
    };
    PermissionsService.prototype.DevicesPermissions = function () {
        return [
            {
                title: 'Update device infomration',
                group: 'DEVICES',
                key: 'DEVICES::UPDATE_INFORMATION'
            },
            {
                title: 'Update devices',
                group: 'DEVICES',
                key: 'DEVICES::VIEW'
            }
        ];
    };
    PermissionsService.prototype.LocationsPermissions = function () {
        return [
            {
                title: 'View Locations',
                group: 'LOCATIONS',
                key: 'LOCATIONS::VIEW'
            }
        ];
    };
    PermissionsService.prototype.ActivitiesPermissions = function () {
        return [
            {
                title: 'View Activities',
                group: 'ACTIVITIES',
                key: 'ACTIVITIES::VIEW'
            }
        ];
    };
    PermissionsService.prototype.RolesPermissions = function () {
        return [
            {
                title: 'View Roles',
                group: 'ROLES',
                key: 'ROLES::VIEW'
            }
        ];
    };
    PermissionsService.prototype.WidgetsPermissions = function () {
        return [
            {
                group: 'WIDGETS',
                key: 'WIDGETS::CREATE',
                title: 'Create widget'
            },
            {
                group: 'WIDGETS',
                key: 'WIDGETS::UPDATE',
                title: 'Update widget info'
            },
            {
                group: 'WIDGETS',
                key: 'WIDGETS::CHANGE',
                title: 'Change widgets output'
            },
            {
                group: 'WIDGETS',
                key: 'WIDGETS::VIEW',
                title: 'View widgets'
            }
        ];
    };
    PermissionsService.prototype.getAll = function () {
        return this.DevicesPermissions()
            .concat(this.UsersPermissions())
            .concat(this.LocationsPermissions())
            .concat(this.RolesPermissions())
            .concat(this.ActivitiesPermissions())
            .concat(this.WidgetsPermissions());
    };
    PermissionsService.prototype.findByKey = function (key) {
        return this.getAll().find(function (x) { return x.key === key; });
    };
    PermissionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PermissionsService);
    return PermissionsService;
}());



/***/ }),

/***/ "./src/app/core/services/requests.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__permissions_service__ = __webpack_require__("./src/app/core/services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_service__ = __webpack_require__("./src/app/core/services/mocks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function timeout(ms) {
    if (ms === void 0) { ms = 1000; }
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve(); }, ms);
    });
}
var RequestsService = /** @class */ (function () {
    function RequestsService(permissions, mocks) {
        this.permissions = permissions;
        this.mocks = mocks;
    }
    RequestsService.prototype.getWidgets = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mocks.Widgets()];
            });
        });
    };
    RequestsService.prototype.createUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mocks.createUser(user)];
            });
        });
    };
    RequestsService.prototype.createVPC = function (vpcInformation) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, timeout(200)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.mocks.createVPC(vpcInformation)];
                }
            });
        });
    };
    RequestsService.prototype.getLocations = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mocks.Locations()];
            });
        });
    };
    RequestsService.prototype.getActivities = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mocks.Activities()];
            });
        });
    };
    RequestsService.prototype.getDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mocks.Devices()];
            });
        });
    };
    RequestsService.prototype.getRoles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mocks.Roles()];
            });
        });
    };
    RequestsService.prototype.getUsers = function (offset, limit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mocks.Users({ offset: offset })];
            });
        });
    };
    RequestsService.prototype.authenticateUser = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.mocks.User()];
            });
        });
    };
    RequestsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__permissions_service__["a" /* PermissionsService */], __WEBPACK_IMPORTED_MODULE_2__mocks_service__["a" /* MocksService */]])
    ], RequestsService);
    return RequestsService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communicate_service__ = __webpack_require__("./src/app/core/services/communicate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var UserService = /** @class */ (function () {
    function UserService(communicate) {
        this.communicate = communicate;
    }
    Object.defineProperty(UserService.prototype, "User", {
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.logout = function () {
        this.user = null;
    };
    UserService.prototype.canActivate = function (permissions) {
        if (permissions && permissions.length) {
            var _loop_1 = function (key) {
                var perm = this_1.User.role.permissions.find(function (x) { return x && x.key === key; });
                if (!perm) {
                    return { value: false };
                }
            };
            var this_1 = this;
            for (var _i = 0, permissions_1 = permissions; _i < permissions_1.length; _i++) {
                var key = permissions_1[_i];
                var state_1 = _loop_1(key);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
        }
        return true;
    };
    UserService.prototype.Login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.communicate.authenticateUser(username, password)];
                    case 1:
                        user = _a.sent();
                        this.user = user;
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__communicate_service__["a" /* CommunicateService */]])
    ], UserService);
    return UserService;
}());

var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.user.User) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return !!this.user.User;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [UserService,
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Settings\" icon=\"icon icon-location\"></app-page-header>"

/***/ }),

/***/ "./src/app/core/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/core/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/core/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/core/users/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "Logging out..."

/***/ }),

/***/ "./src/app/core/users/logout/logout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/users/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_services_user_service__ = __webpack_require__("./src/app/core/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, user) {
        this.router = router;
        this.user = user;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.user.logout();
        this.router.navigateByUrl('/login');
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/core/users/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/core/users/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__app_core_services_user_service__["b" /* UserService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/core/users/user-single/user-single.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-single works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/users/user-single/user-single.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/users/user-single/user-single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSingleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserSingleComponent = /** @class */ (function () {
    function UserSingleComponent() {
    }
    UserSingleComponent.prototype.ngOnInit = function () {
    };
    UserSingleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-single',
            template: __webpack_require__("./src/app/core/users/user-single/user-single.component.html"),
            styles: [__webpack_require__("./src/app/core/users/user-single/user-single.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserSingleComponent);
    return UserSingleComponent;
}());



/***/ }),

/***/ "./src/app/core/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <app-data-table *ngIf=\"schema\" [schema]=\"schema\"></app-data-table>\n</div>\n"

/***/ }),

/***/ "./src/app/core/users/users.component.scss":
/***/ (function(module, exports) {

module.exports = ".page-container {\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/core/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_services_requests_service__ = __webpack_require__("./src/app/core/services/requests.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(router, requests) {
        var _this = this;
        this.router = router;
        this.requests = requests;
        this.schema = {};
        this.schema = {
            'filterColumns': function filterColumns(data) {
                return data.map(function (item) {
                    var id = item['id'];
                    return [
                        item['id'],
                        item['firstname'],
                        item['lastname'],
                        item['email'],
                        "<a class='btn btn-primary' data-single-id='" + id + "'>View</a>"
                    ];
                });
            },
            columns: [
                { title: 'Id' },
                { title: 'Firstname' },
                { title: 'Lastname' },
                { title: 'Email' },
                { title: 'actions' }
            ],
            paginator: function (aoData, url) {
                if (url === void 0) { url = ''; }
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.requests.getUsers(+aoData.start, +aoData.length)];
                    });
                });
            }
        };
    }
    UsersComponent.prototype.setupEvents = function () {
        var ref = this;
        if (typeof $ !== 'undefined') {
            $('body').on('click', 'a[data-single-id]', function () {
                var key = $(this).attr('data-single-id');
                ref.router.navigateByUrl('/user/' + key);
            });
        }
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.setupEvents();
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/core/users/users.component.html"),
            styles: [__webpack_require__("./src/app/core/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__app_core_services_requests_service__["a" /* RequestsService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/forms/form-holder/form-holder.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-page social-login\">\n  <div class=\"login-container boxed-login\">\n    <div class=\"col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 no-float\" style=\"position: relative;\">\n      <div class=\"login-form-container\">\n        <div class=\"loading-container\">\n          <app-loading *ngIf=\"isRequesting\"></app-loading>\n        </div>\n        <div class=\"j-forms\">\n          <div class=\"login-form-header\">\n              <h2>{{title}}</h2>\n          </div>\n          <form (submit)=\"Onsubmit()\" >\n            <div class=\"login-form-content\">\n              <ng-content></ng-content>\n            </div>\n\n           \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n  "

/***/ }),

/***/ "./src/app/forms/form-holder/form-holder.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-shadow {\n  -webkit-box-shadow: 0 0.1em 0.25em rgba(0, 0, 0, 0.1), 0 0.1em 0.2em rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0.1em 0.25em rgba(0, 0, 0, 0.1), 0 0.1em 0.2em rgba(0, 0, 0, 0.1); }\n\n/deep/body {\n  background-color: #0069ff; }\n\n.login-form-header {\n  text-align: center; }\n\n.login-page {\n  padding-top: 0px;\n  background-repeat: repeat;\n  background-attachment: fixed;\n  background-color: #0069ff; }\n\n.login-container {\n  margin-top: 60px; }\n\n.login-form-header {\n  padding: 10px 30px 35px 30px; }\n\n.login-form-header .logo {\n    text-align: center; }\n\n.login-form-header .logo img {\n      width: 50px; }\n\n.login-form-header .logo span {\n      font-size: 20px;\n      font-weight: bold;\n      margin-left: 10px;\n      position: relative;\n      top: 5px; }\n\n.login-input .login-frm-input {\n  height: 50px; }\n\n.login-input .icon-left {\n  height: 48px;\n  line-height: 47px !important; }\n\n.login-form-footer .btn {\n  padding: 10px 20px !important;\n  font-size: 16px !important;\n  font-weight: 400 !important; }\n\n.btn-login {\n  padding: 10px 20px !important;\n  background-color: #fff !important;\n  border: #bbb 1px solid !important;\n  border-radius: 3px !important;\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12) !important;\n          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12) !important;\n  font-size: 16px !important;\n  font-weight: 400 !important; }\n\n.btn-login:hover {\n    background-color: #17bab8 !important;\n    border: #17bab8 1px solid !important;\n    -webkit-box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19) !important;\n            box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19) !important;\n    color: #fff !important; }\n\n.btn-login:focus {\n    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12) !important;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12) !important; }\n\n.login-page-footer {\n  margin-top: 30px;\n  text-align: center; }\n\n.boxed-login .login-form-container {\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  padding: 25px;\n  border-radius: 5px; }\n\n.boxed-login .login-form-footer {\n  padding: 25px;\n  margin-top: 25px;\n  margin-left: -25px;\n  margin-right: -25px;\n  margin-bottom: -25px;\n  border-radius: 0 0 4px 4px; }\n\n.boxed-login .login-form-footer .btn {\n    padding: 10px 20px !important;\n    font-size: 16px !important;\n    font-weight: 400 !important; }\n\n.social-login {\n  padding-top: 10vh; }\n\n.social-login > .login-container {\n    margin-top: 0px !important; }\n\n.social-login .login-form-footer {\n    margin-bottom: 25px !important; }\n\n.error-code {\n  margin-bottom: 30px;\n  font-size: 150px;\n  text-align: center;\n  font-family: 'Kranky', cursive; }\n\n.error-code > div {\n    position: relative;\n    display: inline-block;\n    background-color: #fff;\n    padding: 0px 30px;\n    border-radius: 100px 60px 40px 0px;\n    -moz-border-radius: 100px 60px 40px 0px;\n    -webkit-border-radius: 100px 60px 40px 0px;\n    line-height: normal; }\n\n.error-code > div > span {\n      color: #17bab8; }\n\n.error-code > div:after {\n      content: \"\";\n      width: 0;\n      height: 0;\n      border-top: 60px solid #fff;\n      border-right: 60px solid transparent;\n      position: absolute;\n      left: 0px;\n      bottom: -40px; }\n\n.error-message {\n  margin-bottom: 40px;\n  text-align: right; }\n\n.error-message h4 {\n    font-size: 32px;\n    font-weight: 300;\n    color: #e57373; }\n\n.error-body {\n  margin-bottom: 60px; }\n\n.error-footer-container {\n  margin-top: 30px;\n  padding: 15px;\n  color: #666; }\n\n.error-footer-container a {\n    color: #868686; }\n\n.error-footer-container a:hover, .error-footer-container a:focus {\n      text-decoration: none; }\n\n.error-footer-container .footer-right {\n    text-align: right; }\n\n.error-footer-container .footer-right .footer-meta i {\n      color: #00bcd4; }\n\n.loader {\n  margin-top: 220px;\n  margin-bottom: 90px; }\n\n.loading-container {\n  position: absolute;\n  top: 0;\n  left: 45px; }\n\n.login-form-container {\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/forms/form-holder/form-holder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormHolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormHolderComponent = /** @class */ (function () {
    function FormHolderComponent() {
        this.title = '';
        this.isRequesting = false;
        this.submit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    FormHolderComponent.prototype.ngOnInit = function () {
    };
    FormHolderComponent.prototype.Onsubmit = function () {
        this.submit.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", Object)
    ], FormHolderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('isRequesting'),
        __metadata("design:type", Object)
    ], FormHolderComponent.prototype, "isRequesting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('submit'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], FormHolderComponent.prototype, "submit", void 0);
    FormHolderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-holder',
            template: __webpack_require__("./src/app/forms/form-holder/form-holder.component.html"),
            styles: [__webpack_require__("./src/app/forms/form-holder/form-holder.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FormHolderComponent);
    return FormHolderComponent;
}());



/***/ }),

/***/ "./src/app/forms/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"unit\">\n  <div class=\"input login-input\">\n    <label class=\"icon-left\" for=\"login\">\n        <i class=\"icon icon-{{icon}}\"></i>\n    </label>\n    <input \n      [disabled]=\"isRequesting\"\n      (change)=\"changeInput($event.target.value)\" class=\"form-control login-frm-input\" \n      [type]=\"type\"\n      [placeholder]=\"placeholder\">\n  </div>\n  <div class='alert alert-warning' *ngIf='error(name)'>\n    Error: {{error(name)}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forms/input/input.component.scss":
/***/ (function(module, exports) {

module.exports = ".alert {\n  padding: 7px;\n  margin-top: 5px; }\n"

/***/ }),

/***/ "./src/app/forms/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this._response = null;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.icon = 'person';
        this.placeholder = '';
        this.type = '';
        this.name = '';
        this.isRequesting = false;
    }
    Object.defineProperty(InputComponent.prototype, "response", {
        set: function (value) {
            this._response = value;
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.changeInput = function (value) {
        this.change.emit(value);
    };
    InputComponent.prototype.error = function (fieldName) {
        var res = this._response;
        if (!res || !res.error || !res.error.errors ||
            !res.error.errors.find) {
            return '';
        }
        var error = res.error.errors.find(function (x) { return x.location === fieldName; });
        return error ? error.message : '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('change'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], InputComponent.prototype, "change", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('icon'),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('placeholder'),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('type'),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('name'),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('isRequesting'),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "isRequesting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('response'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputComponent.prototype, "response", null);
    InputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-input',
            template: __webpack_require__("./src/app/forms/input/input.component.html"),
            styles: [__webpack_require__("./src/app/forms/input/input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/iot/activity/activity-widget/activity-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"timeline-container\">\n  <h4 class='box-title'>\n    RECENT ACTIVITY\n  </h4>\n  <ul>\n    <li *ngFor=\"let activity of activities;\" [attr.date-is]=\"activity.time\">\n      <span>\n        <img *ngIf=\"activity.iconType == 'image'\" src=\"{{activity.icon}}\">\n        <i *ngIf=\"activity.iconType == 'icon'\" class=\"{{activity.icon}}\"></i>\n      </span>\n      <h3><b>{{activity.reason}}</b> {{activity.type}}</h3>\n      <div class=\"description\">\n        <p>{{activity.description}}</p>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/iot/activity/activity-widget/activity-widget.component.scss":
/***/ (function(module, exports) {

module.exports = "#timeline-container {\n  width: 100%;\n  overflow: hidden;\n  background: #e6eaf5; }\n  #timeline-container > ul {\n    margin-left: 45px;\n    border-left: 2px solid #d7dbe6; }\n  #timeline-container > ul > li {\n      list-style: none;\n      padding-left: 30px;\n      position: relative;\n      margin-bottom: 20px; }\n  #timeline-container > ul > li .description {\n        font-weight: bold;\n        color: #8e96ad;\n        font-size: 14px; }\n  #timeline-container > ul > li .description p {\n          margin-bottom: 5px; }\n  #timeline-container > ul > li h3 {\n        font-size: 14px;\n        color: #9da4b8; }\n  #timeline-container > ul > li > span {\n        background: #e6eaf5;\n        display: block;\n        width: 40px;\n        height: 40px;\n        -webkit-box-shadow: 0 0 0 4px #e6eaf5;\n                box-shadow: 0 0 0 4px #e6eaf5;\n        overflow: hidden;\n        position: absolute;\n        border-radius: 50%;\n        left: -20px; }\n  #timeline-container > ul > li > span i {\n          display: block;\n          width: 40px;\n          height: 40px;\n          border-radius: 50%;\n          border: 2px solid #8e96ad;\n          color: #9da4b8;\n          padding-left: 8px;\n          font-size: 20px;\n          line-height: 3px; }\n  #timeline-container > ul > li > span i:before {\n            width: 2.15em !important;\n            display: block !important;\n            padding-top: .9em; }\n  #timeline-container > ul > li > span img {\n          width: 40px;\n          height: 40px; }\n  #timeline-container > ul > li:after {\n        content: attr(date-is);\n        color: #00cb7a;\n        font-size: 11px; }\n"

/***/ }),

/***/ "./src/app/iot/activity/activity-widget/activity-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityWidgetComponent = /** @class */ (function () {
    function ActivityWidgetComponent(chRef, store) {
        this.chRef = chRef;
        this.store = store;
        // Initialize the private variables
    }
    ActivityWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('activities').subscribe(function (activities) {
            _this.activities = activities;
        });
    };
    ActivityWidgetComponent.prototype.ngOnDestroy = function () {
        this.chRef.detach();
    };
    ActivityWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activity-widget',
            template: __webpack_require__("./src/app/iot/activity/activity-widget/activity-widget.component.html"),
            styles: [__webpack_require__("./src/app/iot/activity/activity-widget/activity-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], ActivityWidgetComponent);
    return ActivityWidgetComponent;
}());



/***/ }),

/***/ "./src/app/iot/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Activities\" icon=\"icon icon-camera-alt\"></app-page-header>\n\n<table class=\"flat-table\">\n  <tbody>\n    <tr >\n      <th>Id</th>\n      <th>Type</th>\n      <th>Device</th>\n      <th>Pin</th>\n      <th>Change</th>\n      <th>description</th>\n    </tr>\n    <tr *ngFor=\"let activity of activities;\">\n      <td>{{activity.id}}</td>\n      <td>{{getType(activity.type)}}</td>\n      <td>{{activity.meta && activity.meta.device ? activity.meta.device.uniqueid : '-'}}</td>\n      <td>\n        {{activity.meta && activity.meta.pin ? activity.meta.pin.id : '-'}}\n      </td>\n      <td>\n        {{activity.meta ? activity.meta.newValue: '-'}}\n      </td>\n      <td>{{activity.description}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/iot/activity/activity.component.scss":
/***/ (function(module, exports) {

module.exports = ".flat-table {\n  font-family: sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 115%;\n  overflow: auto;\n  width: 100%; }\n  .flat-table th {\n    background-color: #00cb7a;\n    color: white;\n    font-weight: normal;\n    padding: 10px 30px;\n    text-align: center; }\n  .flat-table td {\n    background-color: #eeeeee;\n    color: #6f6f6f;\n    padding: 20px 30px; }\n"

/***/ }),

/***/ "./src/app/iot/activity/activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_iot_definitions__ = __webpack_require__("./src/app/iot/definitions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(chRef, store) {
        this.chRef = chRef;
        this.store = store;
        // Initialize the private variables
    }
    ActivityComponent.prototype.getType = function (type) {
        return __WEBPACK_IMPORTED_MODULE_2__app_iot_definitions__["a" /* ActivityTypes */][type];
    };
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('activities').subscribe(function (activities) {
            _this.activities = activities;
        });
    };
    ActivityComponent.prototype.ngOnDestroy = function () {
        this.chRef.detach();
    };
    ActivityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activity',
            template: __webpack_require__("./src/app/iot/activity/activity.component.html"),
            styles: [__webpack_require__("./src/app/iot/activity/activity.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/iot/app-info/app-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-info\">\n  <div class=\"docked\">    \n    <ng-iot-thermostat></ng-iot-thermostat>\n    <app-modes></app-modes>\n    <app-reminder-timeline></app-reminder-timeline>\n    <app-activity-widget></app-activity-widget>\n  </div> \n</div>"

/***/ }),

/***/ "./src/app/iot/app-info/app-info.component.scss":
/***/ (function(module, exports) {

module.exports = ".app-info {\n  background: #eef1f8;\n  -webkit-transition: width 0.3s, right 0.5s;\n  transition: width 0.3s, right 0.5s;\n  position: fixed;\n  right: -300px;\n  top: 0px;\n  bottom: 0;\n  width: 300px;\n  overflow-x: hidden; }\n  .app-info::-webkit-scrollbar-track {\n    background-color: white; }\n  .app-info::-webkit-scrollbar {\n    width: 6px;\n    background-color: #F5F5F5; }\n  .app-info::-webkit-scrollbar-thumb {\n    background-color: #edf1f7; }\n  @media (min-width: 1366px) {\n    .app-info {\n      right: 0; } }\n  @media (min-width: 1600px) {\n    .app-info {\n      width: 350px; } }\n  .app-info /deep/.box-title {\n    color: #9fa7ba;\n    font-weight: bold;\n    padding: 0 30px; }\n  .app-info /deep/.box-title:nth-child(1) {\n      margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/iot/app-info/app-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppInfoComponent = /** @class */ (function () {
    function AppInfoComponent() {
    }
    AppInfoComponent.prototype.ngOnInit = function () {
    };
    AppInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-info',
            template: __webpack_require__("./src/app/iot/app-info/app-info.component.html"),
            styles: [__webpack_require__("./src/app/iot/app-info/app-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppInfoComponent);
    return AppInfoComponent;
}());



/***/ }),

/***/ "./src/app/iot/app-info/custom-switch.scss":
/***/ (function(module, exports) {

module.exports = ".c-switch {\n  position: relative; }\n  .c-switch .cmn-toggle {\n    position: absolute;\n    margin-left: -9999px;\n    visibility: hidden; }\n  .c-switch .cmn-toggle + label {\n      display: block;\n      position: relative;\n      cursor: pointer;\n      outline: none;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n  .c-switch input.cmn-toggle-round + label {\n    padding: 2px;\n    width: 120px;\n    height: 60px;\n    background-color: #dbdee7;\n    border-radius: 60px;\n    -webkit-transition: background 0.4s;\n    transition: background 0.4s;\n    font-size: 35px;\n    overflow: hidden; }\n  .c-switch input.cmn-toggle-round + label:after, .c-switch input.cmn-toggle-round + label:before {\n      display: block;\n      position: absolute;\n      top: 1px;\n      left: 1px;\n      bottom: 1px;\n      font-family: \"fontello\";\n      font-style: normal;\n      font-weight: normal;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      content: \"\"; }\n  .c-switch input.cmn-toggle-round + label:after {\n      width: 50px;\n      height: 50px;\n      top: 5px;\n      margin-left: 5px;\n      background-color: #fff;\n      border-radius: 100%;\n      -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n      -webkit-transition: margin 0.4s;\n      transition: margin 0.4s;\n      content: attr(data-unchecked);\n      text-indent: 65px;\n      color: #888; }\n  .c-switch input.cmn-toggle-round + label:before {\n      content: attr(data-checked);\n      margin-top: 4px;\n      margin-left: -40px;\n      -webkit-transition: margin-left 0.4s;\n      transition: margin-left 0.4s;\n      color: white; }\n  .c-switch input.cmn-toggle-round:checked + label {\n    background-color: #8ce196; }\n  .c-switch input.cmn-toggle-round:checked + label:after {\n      margin-left: 64px; }\n  .c-switch input.cmn-toggle-round:checked + label:before {\n      margin-left: 18px; }\n  .c-switch.smallest {\n    -webkit-transform: scale(0.4);\n    transform: scale(0.4); }\n  .c-switch.small {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5); }\n  .c-switch.large {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8); }\n  .c-switch.largest {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n"

/***/ }),

/***/ "./src/app/iot/app-info/modes/modes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"modes-wrapp\">\n  <div class=\"col-md-12\">\n    <div class=\"col-sm-7 title\">\n      Away mode :\n    </div>\n    <div class=\"col-sm-5\">\n      <div class=\"row\">\n        <div class=\"c-switch small\">\n          <input id=\"away-mode\" class=\"cmn-toggle cmn-toggle-round\" type=\"checkbox\">\n          <label for=\"away-mode\" data-checked=\"\" data-unchecked=\"\"></label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n    <div class=\"col-sm-7 title\">\n      Frost-Guard mode :\n    </div>\n    <div class=\"col-sm-5\">\n      <div class=\"row\">\n        <div class=\"c-switch small\">\n          <input id=\"frost-guard-mode\" class=\"cmn-toggle cmn-toggle-round\" checked type=\"checkbox\">\n          <label for=\"frost-guard-mode\" data-checked=\"\" data-unchecked=\"\"></label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/iot/app-info/modes/modes.component.scss":
/***/ (function(module, exports) {

module.exports = "#modes-wrapp {\n  height: auto;\n  overflow: hidden; }\n  #modes-wrapp .row {\n    margin-top: -10px; }\n  #modes-wrapp .title {\n    font-size: 17px;\n    color: #bbbdc3;\n    font-weight: bold;\n    padding-top: 10px; }\n"

/***/ }),

/***/ "./src/app/iot/app-info/modes/modes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModesComponent = /** @class */ (function () {
    function ModesComponent() {
    }
    ModesComponent.prototype.ngOnInit = function () {
    };
    ModesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modes',
            template: __webpack_require__("./src/app/iot/app-info/modes/modes.component.html"),
            styles: [__webpack_require__("./src/app/iot/app-info/modes/modes.component.scss"), __webpack_require__("./src/app/iot/app-info/custom-switch.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModesComponent);
    return ModesComponent;
}());



/***/ }),

/***/ "./src/app/iot/app-info/reminder-timeline/reminder-timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"timeline\" style=\"height: 200px; min-width: 310px\"></div>\n\n<h4 class='box-title'>\n  ALARM\n</h4>\n<div id=\"switch-wrapp\">\n  <div class=\"col-md-12\">\n    <div class=\"col-sm-4 title\">\n      Status :\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"row\">\n        <div class=\"c-switch small\">\n          <input id=\"alarm\" class=\"cmn-toggle cmn-toggle-round\" type=\"checkbox\">\n          <label for=\"alarm\" data-checked=\"OFF\" data-unchecked=\"ON\"></label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/iot/app-info/reminder-timeline/reminder-timeline.component.scss":
/***/ (function(module, exports) {

module.exports = "#timeline {\n  position: relative;\n  height: auto;\n  width: 100%;\n  overflow: hidden; }\n  #timeline /deep/.highcharts-range-selector-buttons, #timeline /deep/.highcharts-scrollbar {\n    visibility: hidden; }\n  #timeline /deep/.range-selector-wrapper {\n    right: 10px;\n    top: 10px;\n    z-index: 1;\n    position: absolute; }\n  #timeline:hover /deep/ .highcharts-scrollbar {\n    visibility: visible; }\n  #timeline /deep/.highcharts-plot-line-label {\n    width: 19px;\n    height: 19px;\n    border-radius: 50%;\n    display: inline-block;\n    background: #fff;\n    -webkit-transform: translate(-13px, -9px) !important;\n            transform: translate(-13px, -9px) !important;\n    -webkit-box-shadow: 0 0 5px #ddd;\n            box-shadow: 0 0 5px #ddd; }\n  #timeline /deep/.highcharts-plot-line-label:after {\n    content: '';\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    display: inline-block;\n    top: 3px;\n    border: 3px solid #d0d6e2;\n    position: relative;\n    left: 3px; }\n  #switch-wrapp {\n  height: auto;\n  overflow: hidden; }\n  #switch-wrapp .row {\n    margin-top: -10px; }\n  #switch-wrapp .title {\n    font-size: 17px;\n    color: #bbbdc3;\n    font-weight: bold;\n    padding-top: 10px; }\n  .c-switch {\n  margin-right: -25px; }\n  .c-switch input.cmn-toggle-round + label {\n    width: 100% !important;\n    font-size: 30px !important; }\n  .c-switch input.cmn-toggle-round + label:after, .c-switch input.cmn-toggle-round + label:before {\n      font-family: inherit !important;\n      font-weight: bold !important; }\n  .c-switch input.cmn-toggle-round + label:after {\n      width: 50% !important;\n      border-radius: 60px !important;\n      content: attr(data-checked) !important;\n      text-indent: 25px !important;\n      color: #888 !important;\n      line-height: 50px !important; }\n  .c-switch input.cmn-toggle-round + label:before {\n      margin-left: 30px !important;\n      color: #8ce196 !important;\n      display: none !important; }\n  .c-switch input.cmn-toggle-round:checked + label:after {\n    content: attr(data-unchecked) !important;\n    margin-left: 47% !important;\n    color: #8ce196 !important;\n    text-indent: 32px !important; }\n  .c-switch input.cmn-toggle-round:checked + label:before {\n    margin-left: 18px;\n    color: white !important; }\n"

/***/ }),

/***/ "./src/app/iot/app-info/reminder-timeline/reminder-timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderTimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReminderTimelineComponent = /** @class */ (function () {
    function ReminderTimelineComponent() {
    }
    ReminderTimelineComponent.prototype.timelineOption = function () {
        return {
            chart: {
                backgroundColor: 'transparent',
                type: 'line',
                renderTo: 'timeline',
                margin: [0, 0, 0, 0]
            },
            tooltip: {
                enabled: false
            },
            scrollbar: {
                barBackgroundColor: '#dfdfdf',
                barBorderRadius: 7,
                barBorderWidth: 0,
                buttonBackgroundColor: 'none',
                buttonBorderWidth: 0,
                buttonBorderRadius: 7,
                trackBackgroundColor: 'none',
                trackBorderWidth: 0,
                trackBorderRadius: 8,
                trackBorderColor: '#dfdfdf'
            },
            title: null,
            xAxis: {
                plotLines: [{
                        value: 1499433993000,
                        width: 2,
                        color: '#d0d6e2',
                        label: {
                            text: '',
                            useHTML: true,
                            verticalAlign: 'bottom',
                            class: 'sami'
                        }
                    }],
                min: 1499425233000,
                max: 1499443233000,
                crosshair: false
            },
            yAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null,
                },
                opposite: true,
                gridLineWidth: 0,
                min: 0,
                max: 10
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            navigator: {
                enabled: false
            },
            series: this.getTimelineSeries()
        };
    };
    ReminderTimelineComponent.prototype.getDataSeries = function (begin, offset) {
        return [
            [begin, offset % 2 === 0 ? offset : offset + 2],
            [begin + (Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(1, 3) * 3600 * 1000), offset % 2 === 0 ? offset : offset + 2]
        ];
    };
    ReminderTimelineComponent.prototype.getTimelineSeries = function () {
        return [{
                data: [[1499382584000, 5], [1499389784000, 5]],
                lineWidth: 10,
                name: {
                    title: 'Confort',
                    icon: 'icon-bed'
                }
            }, {
                data: [[1499396984000, 2], [1499407784000, 2]],
                lineWidth: 10,
                name: {
                    title: 'Eco',
                    icon: 'icon-leaf'
                }
            }, {
                data: [[1499411384000, 8], [1499418584000, 8]],
                lineWidth: 10,
                name: {
                    title: 'Night',
                    icon: 'icon-moon'
                }
            }, {
                data: [[1499425658000, 5], [1499432858000, 5]],
                lineWidth: 10,
                name: {
                    title: 'Game',
                    icon: 'icon-gamepad'
                }
            }, {
                data: [[1499429258000, 8], [1499440058000, 8]],
                lineWidth: 10,
                name: {
                    title: 'Recreation',
                    icon: 'icon-keyboard'
                }
            }, {
                data: [[1499436458000, 2], [1499447258000, 2]],
                lineWidth: 10,
                name: {
                    title: 'Visit',
                    icon: 'icon-stethoscope'
                }
            }, {
                data: [[1499466393000, 5], [1499469993000, 5]],
                lineWidth: 10,
                name: {
                    title: 'Work',
                    icon: 'icon-briefcase'
                }
            }, {
                data: [[1499473593000, 2], [1499484393000, 2]],
                lineWidth: 10,
                name: {
                    title: 'Shopping',
                    icon: 'icon-shopping-bag'
                }
            }, {
                data: [[1499477193000, 5], [1499491593000, 5]],
                lineWidth: 10,
                name: {
                    title: 'Confort',
                    icon: 'icon-flash'
                }
            }];
    };
    ReminderTimelineComponent.prototype.timelineSeries = function (count) {
        var _this = this;
        if (count === void 0) { count = 8; }
        var offsets = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["shuffle"])(Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["times"])(count, function (index) { return index; }));
        var labels = [['Confort', 'icon-bed'],
            ['Eco', 'icon-leaf'],
            ['Night', 'icon-moon'],
            ['Game', 'icon-gamepad'],
            ['Recreation', 'icon-keyboard'],
            ['Visit', 'icon-stethoscope'],
            ['Work', 'icon-briefcase'],
            ['Shopping', 'icon-shopping-bag']];
        return Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["times"])(count, function (index) {
            var offset = offsets.pop();
            var title = labels.pop();
            var date = new Date().getTime();
            var seeek = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(-72, 72);
            var begin = date + (seeek * 10000);
            return {
                data: _this.getDataSeries(begin, offset),
                lineWidth: 10,
                name: {
                    title: title[0],
                    icon: title[1]
                }
            };
        });
    };
    ReminderTimelineComponent.prototype.titleGenerator = function () {
        for (var k in this.chart.series) {
            if (typeof this.chart.series[k] === 'object') {
                var icon = '<i class="icon ' + this.chart.series[k].name.icon + '"></i>', title = '<span>' + this.chart.series[k].name.title + '</span>', titleWrapp = document.createElement('span');
                titleWrapp.innerHTML = icon + title;
                titleWrapp.id = 'highcharts-series-title' + k;
                titleWrapp.style.position = 'absolute';
                titleWrapp.style.color = this.chart.series[k].color;
                titleWrapp.style.fontSize = '14';
                titleWrapp.style.fontWeight = 'bold';
                titleWrapp.style.width = '100%';
                titleWrapp.style.left = (this.retPosition()[k].x + (this.retPosition()[k].width / 3)) + 'px';
                titleWrapp.style.top = (this.retPosition()[k].y + 7) + 'px';
                // tslint:disable-next-line:max-line-length
                this.retPosition()[k].x + (this.retPosition()[k].width / 3) <= 0 ? titleWrapp.style.opacity = '0' : titleWrapp.style.opacity = '1';
                document.getElementById('timeline').appendChild(titleWrapp);
            }
        }
    };
    ReminderTimelineComponent.prototype.drawChart = function () {
        var _this = this;
        var chart = this.chart = new Highcharts.stockChart(this.timelineOption());
        Highcharts.addEvent(chart, 'redraw', function () {
            for (var k in chart.series) {
                if (typeof chart.series[k] === 'object') {
                    var title = document.getElementById('highcharts-series-title' + k);
                    title.style.left = (_this.retPosition()[k].x + (_this.retPosition()[k].width / 3)) + 'px';
                    title.style.top = (_this.retPosition()[k].y + 7) + 'px';
                    (_this.retPosition()[k].x + (_this.retPosition()[k].width / 3) <= 0) ? title.style.opacity = '0' : title.style.opacity = '1';
                }
            }
        });
    };
    ReminderTimelineComponent.prototype.retPosition = function () {
        var allPositions = [];
        for (var k in this.chart.series) {
            if (typeof this.chart.series[k] === 'object') {
                var chartSeries = document.querySelector('#timeline .highcharts-series-' + k);
                allPositions.push(chartSeries.getBBox());
            }
        }
        return allPositions;
    };
    ReminderTimelineComponent.prototype.ngOnInit = function () {
        this.drawChart();
        this.titleGenerator();
    };
    ReminderTimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reminder-timeline',
            template: __webpack_require__("./src/app/iot/app-info/reminder-timeline/reminder-timeline.component.html"),
            styles: [__webpack_require__("./src/app/iot/app-info/reminder-timeline/reminder-timeline.component.scss"), __webpack_require__("./src/app/iot/app-info/custom-switch.scss")]
        })
    ], ReminderTimelineComponent);
    return ReminderTimelineComponent;
}());



/***/ }),

/***/ "./src/app/iot/data-layer/activity.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = activitiesReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_core_functions_UpdateOrPrepend__ = __webpack_require__("./src/app/core/functions/UpdateOrPrepend.ts");

function activitiesReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'UPDATE_ACTIVITY':
            return Object(__WEBPACK_IMPORTED_MODULE_0__app_core_functions_UpdateOrPrepend__["a" /* default */])(action.payload, state, 'id');
    }
    return state;
}


/***/ }),

/***/ "./src/app/iot/data-layer/devices.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UPDATE_DEVICE */
/* harmony export (immutable) */ __webpack_exports__["a"] = devicesReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_core_functions_UpdateOrInsert__ = __webpack_require__("./src/app/core/functions/UpdateOrInsert.ts");

var UPDATE_DEVICE = 'UPDATE_DEVICE';
function devicesReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'UPDATE_DEVICE':
            return Object(__WEBPACK_IMPORTED_MODULE_0__app_core_functions_UpdateOrInsert__["a" /* default */])(action.payload, state, 'uniqueid');
        case 'INSERT_DEVICE':
            return state.concat(action.payload);
    }
    return state;
}


/***/ }),

/***/ "./src/app/iot/data-layer/locations.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = locationsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_core_functions_UpdateOrInsert__ = __webpack_require__("./src/app/core/functions/UpdateOrInsert.ts");

function locationsReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'UPDATE_LOCATION':
            return Object(__WEBPACK_IMPORTED_MODULE_0__app_core_functions_UpdateOrInsert__["a" /* default */])(action.payload, state, 'id');
    }
    return state;
}


/***/ }),

/***/ "./src/app/iot/data-layer/widgets.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = widgetsReducer;
function widgetsReducer(widgets, action) {
    if (widgets === void 0) { widgets = []; }
    switch (action.type) {
        case 'UPDATE_WIDGET':
            var widget_1 = action.payload;
            var exists_1 = false;
            // find widget by device and pin, not the name.
            widgets = widgets.map(function (T) {
                if (T.device.uniqueid === widget_1.device.uniqueid && T.pin.id === widget_1.pin.id) {
                    exists_1 = true;
                    T.name = widget_1.name;
                }
                return T;
            });
            if (!exists_1) {
                widgets = widgets.concat(widget_1);
            }
    }
    return widgets;
}


/***/ }),

/***/ "./src/app/iot/default-layout/default-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n\n    <router-outlet name=\"navigation\"></router-outlet>\n    <div class=\"app-component-outlet\">\n        <router-outlet></router-outlet>\n    </div>\n    <router-outlet name=\"quick-status\"></router-outlet>\n    <router-outlet name=\"app-info\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/iot/default-layout/default-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ".app-component-outlet {\n  position: relative;\n  left: 0px;\n  right: 0px;\n  -webkit-transition: right 0.5s, left 0.5s;\n  transition: right 0.5s, left 0.5s; }\n  @media (min-width: 992px) {\n    .app-component-outlet {\n      position: absolute;\n      left: 400px;\n      right: 0px; } }\n  @media (min-width: 1367px) {\n    .app-component-outlet {\n      right: 300px; } }\n  @media (min-width: 1600px) {\n    .app-component-outlet {\n      position: absolute;\n      left: 450px;\n      right: 350px; } }\n"

/***/ }),

/***/ "./src/app/iot/default-layout/default-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultLayoutComponent = /** @class */ (function () {
    function DefaultLayoutComponent() {
    }
    DefaultLayoutComponent.prototype.ngOnInit = function () {
    };
    DefaultLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-default-layout',
            template: __webpack_require__("./src/app/iot/default-layout/default-layout.component.html"),
            styles: [__webpack_require__("./src/app/iot/default-layout/default-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());



/***/ }),

/***/ "./src/app/iot/definitions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityTypes; });
/**
 * Occures when a device changes
 */
var ActivityTypes;
(function (ActivityTypes) {
    ActivityTypes[ActivityTypes["DevicePinChange"] = 0] = "DevicePinChange";
})(ActivityTypes || (ActivityTypes = {}));


/***/ }),

/***/ "./src/app/iot/devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-header [title]=\"'Devices ' + devices.length\" icon=\"icon icon-keyboard\"></app-page-header>\n<div class='page-container'>\n  <div class=\"page-description\">\n    <p>\n      Devices currently connected to the software are shown as chipsets below. Maximum recognized pins for community version is 16 pins, which can be configurated as input or output.\n    </p>\n    <p>\n      By Clicking on each pin, you can see the details, and manipulate the value of pin, if it's output. Creating a new device is not allowed in this application, since each device must be self descriptive,\n      when sends a new message to the application. On the other hand, you can delete a device, if you disconnected from infrustucture, and if you reconnect, you might see it back, but without any user configured data.\n    </p>\n\n  </div>\n  <div class=\"device-box-container\">\n    <div *ngFor=\"let device of devices\" class=\"col-sm-6 padding-box\">\n      <ng-iot-device-ic [device]=\"device\" (onFocusDevice)=\"clickDispatch($event);\"></ng-iot-device-ic>\n    </div>\n  </div>\n</div>\n\n<div class=\"clearfix\"></div>\n<app-helper-box (onFocusLost)=\"unfocus();\" [device]=\"focusedDevice\" [pin]=\"focusedPin\">  </app-helper-box>"

/***/ }),

/***/ "./src/app/iot/devices/devices.component.scss":
/***/ (function(module, exports) {

module.exports = ".padding-box {\n  padding: 15px;\n  text-align: center; }\n\n.page-container {\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/iot/devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_services_communicate_service__ = __webpack_require__("./src/app/core/services/communicate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(chRef, store, communications) {
        this.chRef = chRef;
        this.store = store;
        this.communications = communications;
        this.focusedDevice = null;
        this.focusedPin = null;
        // Initialize private variables
    }
    DevicesComponent.prototype.clickDispatch = function (_a) {
        var device = _a.device, pin = _a.pin;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this.focusedDevice = device;
                this.focusedPin = pin;
                return [2 /*return*/];
            });
        });
    };
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('devices').subscribe(function (collection) {
            _this.devices = collection;
            _this.chRef.detectChanges();
        });
        this.store.select('locations').subscribe(function (collection) {
            _this.locations = collection;
        });
    };
    DevicesComponent.prototype.ngOnDestroy = function () {
        this.chRef.detach();
    };
    DevicesComponent.prototype.unfocus = function () {
        this.focusedPin = null;
        this.focusedDevice = null;
    };
    DevicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-devices',
            template: __webpack_require__("./src/app/iot/devices/devices.component.html"),
            styles: [__webpack_require__("./src/app/iot/devices/devices.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_2__app_core_services_communicate_service__["a" /* CommunicateService */]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/iot/index/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-wrapper\">\n    <div class=\"range-selector-wrapper  hidden-xs \">\n        <button *ngFor=\"let exp of chartExt\" class=\"setChartEx\" [ngClass]=\"exp === expFocus ? 'pressed' : ''\" (click)=\"setChartExtreme(exp)\">{{exp}}</button>\n    </div>\n    <div id=\"container\" style=\"height: 325px; min-width: 310px\"></div>\n    <select class=\"form-control visible-xs\" (change)=\"setChartExtreme($event.target.value)\">\n        <option *ngFor=\"let exp of chartExt\" [value]=\"exp\">{{exp}}</option>\n    </select>\n</div>\n\n<div class=\"large-icon-status\">\n    <div class=\"large-icon-widget legend-chart\"  *ngFor=\"let widget of largeWidgets; let i = index\" [attr.data-set]=\"i\">\n        <div class=\"title\">{{widget.title}}</div>\n        <i class=\"{{widget.icon}}\"></i>\n        <div class=\"value\">{{widget.value}}<sub>{{widget.unit}}</sub></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/iot/index/chart/chart.component.scss":
/***/ (function(module, exports) {

module.exports = ".chart-wrapper #container {\n  margin-top: 20px; }\n\n.chart-wrapper /deep/ .highcharts-range-selector-buttons, .chart-wrapper /deep/ .highcharts-scrollbar {\n  visibility: hidden; }\n\n.chart-wrapper .range-selector-wrapper {\n  right: 10px;\n  top: 10px;\n  z-index: 1;\n  position: absolute; }\n\n.chart-wrapper .setChartEx {\n  background: transparent;\n  border: 2px solid lightgray;\n  color: lightgray;\n  padding: 7px 9px;\n  border-radius: 20px;\n  cursor: pointer;\n  outline: none;\n  margin-left: 5px; }\n\n.chart-wrapper .setChartEx:hover, .chart-wrapper .setChartEx.pressed {\n  border: 2px solid gray;\n  color: gray; }\n\n.chart-wrapper /deep/ .highcharts-axis-labels.highcharts-yaxis-labels span {\n  background: #e1e1e1;\n  border-radius: 5px;\n  color: gray;\n  padding: 3px 5px;\n  opacity: 0 !important;\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s; }\n\n.chart-wrapper:hover /deep/ .highcharts-axis-labels.highcharts-yaxis-labels span {\n  opacity: 1 !important;\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s; }\n\n.large-icon-status {\n  border-top: 2px solid #f1f3f7;\n  border-bottom: 2px solid #f1f3f7;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.large-icon-status .large-icon-widget {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: center;\n    border-left: 2px solid #f1f3f7;\n    padding: 15px 0;\n    cursor: pointer; }\n\n.large-icon-status .large-icon-widget.deActive {\n      background: #fafafa;\n      color: #aaa !important; }\n\n.large-icon-status .large-icon-widget:first-child {\n      border-left: none; }\n\n.large-icon-status .large-icon-widget:nth-child(1) {\n      color: #18dba9; }\n\n.large-icon-status .large-icon-widget:nth-child(2) {\n      color: #00c369; }\n\n.large-icon-status .large-icon-widget:nth-child(3) {\n      color: #00d4fc; }\n\n.large-icon-status .large-icon-widget .title {\n      font-size: 16px;\n      font-weight: bold; }\n\n.large-icon-status .large-icon-widget .value {\n      font-size: 30px; }\n\n.large-icon-status .large-icon-widget .value sub {\n        font-size: 18px;\n        top: 0;\n        margin-left: 5px;\n        font-weight: bold; }\n\n.large-icon-status .large-icon-widget .icon {\n      font-size: 50px;\n      margin: 15px 0;\n      display: block; }\n"

/***/ }),

/***/ "./src/app/iot/index/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.chartExt = [
            'half_hour',
            'hour',
            'day',
            'week',
            'month',
            'year'
        ];
        this.expFocus = null;
    }
    ChartComponent.prototype.getMock = function (count) {
        if (count === void 0) { count = 300; }
        return Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["times"])(count, function (index) {
            return [
                1317888000000 + (index * 60000),
                Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(32000, 40000) / 100,
                Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(32000, 40000) / 100,
                Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(32000, 40000) / 100,
            ];
        });
    };
    ChartComponent.prototype.getSeries = function () {
        return [
            {
                name: 'Power',
                type: 'area',
                data: this.getMock(),
                yAxis: 1,
                gapSize: 5,
                tooltip: {
                    valueSuffix: ' Wh',
                },
                marker: {
                    enabled: false,
                    fillColor: '#FFF',
                    lineColor: '#52dba7',
                    lineWidth: 1,
                    symbol: 'circle',
                    radius: 3
                },
                fillColor: 'rgba(248, 250, 249, 0.8)',
                lineColor: '#52dba7'
            },
            {
                name: 'Consumption',
                type: 'area',
                gapSize: 5,
                data: this.getMock(),
                marker: {
                    enabled: false,
                    fillColor: '#FFF',
                    lineColor: '#2bc661',
                    lineWidth: 1,
                    symbol: 'circle',
                    radius: 3
                },
                tooltip: {
                    valueSuffix: ' kWh'
                },
                fillColor: 'rgba(232, 245, 236, 0.8)',
                lineColor: '#2bc661'
            },
            {
                name: 'Water',
                type: 'area',
                data: this.getMock(),
                gapSize: 5,
                yAxis: 2,
                tooltip: {
                    valueDecimals: 2,
                    valueSuffix: ' L'
                },
                marker: {
                    enabled: false,
                    fillColor: '#FFF',
                    lineColor: 'rgb(0, 212, 252)',
                    lineWidth: 1,
                    symbol: 'circle',
                    radius: 3
                },
                fillColor: 'rgba(230, 251, 255, 0.7)',
                lineColor: 'rgb(0, 212, 252)',
                threshold: null
            }
        ];
    };
    ChartComponent.prototype.getChartOptions = function () {
        var chartOpt = {
            chart: {
                backgroundColor: 'transparent',
                type: 'areaspline',
                renderTo: 'container',
                margin: 10
            },
            title: {
                text: 'ENERGY',
                align: 'left',
                style: {
                    color: '#9ea9bf',
                    fontSize: '22px'
                },
                y: 6
            },
            xAxis: {
                gapGridLineWidth: 0
            },
            yAxis: [
                {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null,
                        format: '{value:.1f} Wh',
                    },
                    gridLineDashStyle: 'longdash',
                    gridLineColor: '#e4e4e4',
                    gridZIndex: 4
                },
                {
                    title: {
                        text: null
                    },
                    labels: {
                        format: '{value:.1f} kWh',
                        x: 65,
                        y: -30,
                        useHTML: true
                    },
                    gridLineDashStyle: 'longdash',
                    gridLineColor: '#e4e4e4',
                    gridZIndex: 4,
                    opposite: false,
                },
                {
                    title: {
                        text: null
                    },
                    labels: {
                        format: '{value} L',
                        x: -45,
                        y: -30,
                        useHTML: true
                    },
                    gridLineDashStyle: 'longdash',
                    gridLineColor: '#e4e4e4',
                    gridZIndex: 4,
                    opposite: true
                }
            ],
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            navigator: {
                enabled: false
            },
            rangeSelector: {
                buttons: [
                    {
                        type: 'hour',
                        count: 1,
                        text: 'HOUR'
                    }
                ],
                selected: 0,
                inputEnabled: false
            },
            series: this.getSeries()
        };
        return chartOpt;
    };
    ChartComponent.prototype.setChartExtreme = function (dataSet) {
        this.expFocus = dataSet;
        var extremes = this.chart.xAxis[0].getExtremes();
        var max = extremes.max;
        var min = 0;
        switch (dataSet) {
            case 'half_hour':
                min = max - 1800000;
                break;
            case 'hour':
                min = max - 3600000;
                break;
            case 'day':
                min = max - 86400000;
                break;
            case 'week':
                min = max - 604800000;
                break;
            case 'month':
                min = max - 2592000000;
                break;
            case 'year':
                min = max - 31104000000;
                break;
        }
        this.chart.xAxis[0].setExtremes(min, max);
    };
    ChartComponent.prototype.drawChart = function () {
        this.chart = new Highcharts.stockChart(this.getChartOptions());
    };
    ChartComponent.prototype.mockData = function () {
        return [
            {
                'title': 'Power',
                'icon': 'icon icon-power',
                'value': Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(300, 600),
                'unit': 'Wh'
            },
            {
                'title': 'Consumption',
                'icon': 'icon icon-consum',
                'value': Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(5500, 6000) / 100,
                'unit': 'kWh'
            },
            {
                'title': 'Water',
                'icon': 'icon icon-water',
                'value': Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(200, 800) / 100,
                'unit': 'L'
            }
        ];
    };
    ChartComponent.prototype.ngAfterViewInit = function () {
        var chart = this.chart;
        this.putChartLegend(chart);
    };
    ChartComponent.prototype.putChartLegend = function (chart) {
        var legend = document.getElementsByClassName('legend-chart');
        Array.from(legend).forEach(function ($el) {
            $el.addEventListener('click', function () {
                var key = this.getAttribute('data-set');
                if (chart.series[key].options.visible === false) {
                    this.classList.remove('deActive');
                    chart.series[key].show();
                }
                else {
                    this.classList.add('deActive');
                    chart.series[key].hide();
                }
            });
        });
    };
    ChartComponent.prototype.ngOnInit = function () {
        this.largeWidgets = this.mockData();
        this.places = [
            { name: 'Kitchen', 'icon': 'four-cooking-accessories-set-for-kitchen.svg' },
            { name: 'Bathroom', 'icon': 'bathtub.svg' },
            { name: 'Master bedrrom', 'icon': 'fireplace.svg' },
            { name: 'Living room', 'icon': 'living-room.svg' },
            { name: 'Conference room', 'icon': 'conference.svg' }
        ];
        this.drawChart();
    };
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index-chart',
            template: __webpack_require__("./src/app/iot/index/chart/chart.component.html"),
            styles: [__webpack_require__("./src/app/iot/index/chart/chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/iot/index/icon-widgets/icon-widgets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"large-icon-status\">\n    <div class=\"large-icon-widget legend-chart\" *ngFor=\"let widget of largeWidgets\">\n        <div class=\"title\">{{widget.title}}</div>\n        <i class=\"{{widget.icon}}\"></i>\n        <div class=\"value\">{{widget.value}}<sub>{{widget.unit}}</sub></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/iot/index/icon-widgets/icon-widgets.component.scss":
/***/ (function(module, exports) {

module.exports = ".large-icon-status {\n  margin-top: 15px;\n  border-top: 1px solid #f1f3f7;\n  border-bottom: 1px solid #f1f3f7;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .large-icon-status .large-icon-widget {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: center;\n    border-left: 1px solid #f1f3f7;\n    padding: 15px 0; }\n  .large-icon-status .large-icon-widget:first-child {\n      border-left: none; }\n  .large-icon-status .large-icon-widget:nth-child(1) {\n      color: #18dba9; }\n  .large-icon-status .large-icon-widget:nth-child(2) {\n      color: #00c369; }\n  .large-icon-status .large-icon-widget:nth-child(3) {\n      color: #00d4fc; }\n  .large-icon-status .large-icon-widget .title {\n      font-size: 13px; }\n  .large-icon-status .large-icon-widget .value {\n      font-size: 30px; }\n  @media (max-width: 767px) {\n        .large-icon-status .large-icon-widget .value {\n          font-size: 25px; } }\n  .large-icon-status .large-icon-widget .value sub {\n        font-size: 15px;\n        top: 0;\n        margin-left: 5px; }\n  .large-icon-status .large-icon-widget .icon {\n      font-size: 40px;\n      margin: 15px 0;\n      display: block; }\n  @media (max-width: 767px) {\n        .large-icon-status .large-icon-widget .icon {\n          font-size: 35px; } }\n"

/***/ }),

/***/ "./src/app/iot/index/icon-widgets/icon-widgets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconWidgetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var IconWidgetsComponent = /** @class */ (function () {
    function IconWidgetsComponent() {
    }
    IconWidgetsComponent.prototype.mockData = function () {
        return [
            {
                'title': 'Power',
                'icon': 'icon icon-flash',
                'value': Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(300, 600),
                'unit': 'Wh'
            },
            {
                'title': 'Consumption',
                'icon': 'icon icon-temperatire',
                'value': Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(5500, 6000) / 100,
                'unit': 'kWh'
            },
            {
                'title': 'Water',
                'icon': 'icon icon-tint',
                'value': Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(200, 800) / 100,
                'unit': 'L'
            }
        ];
    };
    IconWidgetsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.largeWidgets = this.mockData();
                this.places = [
                    { name: 'Kitchen', 'icon': 'four-cooking-accessories-set-for-kitchen.svg' },
                    { name: 'Bathroom', 'icon': 'bathtub.svg' },
                    { name: 'Master bedrrom', 'icon': 'fireplace.svg' },
                    { name: 'Living room', 'icon': 'living-room.svg' },
                    { name: 'Conference room', 'icon': 'conference.svg' }
                ];
                return [2 /*return*/];
            });
        });
    };
    IconWidgetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-icon-widgets',
            template: __webpack_require__("./src/app/iot/index/icon-widgets/icon-widgets.component.html"),
            styles: [__webpack_require__("./src/app/iot/index/icon-widgets/icon-widgets.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IconWidgetsComponent);
    return IconWidgetsComponent;
}());



/***/ }),

/***/ "./src/app/iot/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<app-index-chart></app-index-chart>\n<!--<app-icon-widgets></app-icon-widgets>-->\n<app-places></app-places>"

/***/ }),

/***/ "./src/app/iot/index/index.component.scss":
/***/ (function(module, exports) {

module.exports = "/deep/body {\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/iot/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/iot/index/index.component.html"),
            styles: [__webpack_require__("./src/app/iot/index/index.component.scss")]
        })
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/iot/index/places/places.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"place-container\">\n    <div *ngFor=\"let location of places;\">\n        <app-location-row [widgets]=\"findWidgets(location)\" [location]=\"location\"></app-location-row>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/iot/index/places/places.component.scss":
/***/ (function(module, exports) {

module.exports = ".place-container > div {\n  padding: 15px 20px 5px;\n  border-bottom: 2px solid #f1f1f1; }\n  .place-container > div:hover {\n    background: #F9F9F9; }\n"

/***/ }),

/***/ "./src/app/iot/index/places/places.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var PlacesComponent = /** @class */ (function () {
    function PlacesComponent(chRef, store) {
        this.chRef = chRef;
        this.store = store;
        this.places = [];
        this.widgets = [];
        // Initialize the private variables
    }
    PlacesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.store.select('locations').subscribe(function (locations) {
                    _this.places = locations;
                    _this.chRef.detectChanges();
                });
                this.store.select('widgets').subscribe(function (collection) {
                    _this.widgets = collection;
                });
                return [2 /*return*/];
            });
        });
    };
    PlacesComponent.prototype.findWidgets = function (location) {
        return this.widgets.filter(function (widget) { return widget.location && widget.location.id === location.id; });
    };
    PlacesComponent.prototype.ngOnDestroy = function () {
        this.chRef.detach();
    };
    PlacesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-places',
            template: __webpack_require__("./src/app/iot/index/places/places.component.html"),
            styles: [__webpack_require__("./src/app/iot/index/places/places.component.scss"), __webpack_require__("./src/app/iot/shared/checkbox-switch.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], PlacesComponent);
    return PlacesComponent;
}());



/***/ }),

/***/ "./src/app/iot/layout/DefaultLayout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AuthLayout;
/* harmony export (immutable) */ __webpack_exports__["b"] = DefaultLayout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_core_navigation_navigation_component__ = __webpack_require__("./src/app/core/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_iot_quick_status_quick_status_component__ = __webpack_require__("./src/app/iot/quick-status/quick-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_iot_app_info_app_info_component__ = __webpack_require__("./src/app/iot/app-info/app-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_iot_default_layout_default_layout_component__ = __webpack_require__("./src/app/iot/default-layout/default-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_services_user_service__ = __webpack_require__("./src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var SidebarOutlets = [
    {
        path: '',
        outlet: 'navigation',
        component: __WEBPACK_IMPORTED_MODULE_0__app_core_navigation_navigation_component__["a" /* NavigationComponent */]
    },
    {
        outlet: 'quick-status',
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__app_iot_quick_status_quick_status_component__["a" /* QuickStatusComponent */]
    },
    {
        outlet: 'app-info',
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_iot_app_info_app_info_component__["a" /* AppInfoComponent */]
    }
];
function AuthLayout(component, route, options) {
    if (options === void 0) { options = {}; }
    return __assign({ path: route }, options, { canActivate: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].production ? [__WEBPACK_IMPORTED_MODULE_4__app_core_services_user_service__["a" /* AuthGuard */]] : [], component: __WEBPACK_IMPORTED_MODULE_3__app_iot_default_layout_default_layout_component__["a" /* DefaultLayoutComponent */], children: [
            {
                path: '',
                component: component
            }
        ].concat(SidebarOutlets) });
}
function DefaultLayout(component, route, options) {
    if (options === void 0) { options = {}; }
    return __assign({ path: route }, options, { component: __WEBPACK_IMPORTED_MODULE_3__app_iot_default_layout_default_layout_component__["a" /* DefaultLayoutComponent */], children: [
            {
                path: '',
                component: component
            }
        ].concat(SidebarOutlets) });
}


/***/ }),

/***/ "./src/app/iot/locations/location-edit/location-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Edit location\" icon=\"icon icon-camera-alt\"></app-page-header>\n\n<div class=\"body\" *ngIf=\"location\">\n\n  <app-forms-text-input\n    placeholder=\"Location name\"\n    icon=\"icon icon-user\"\n    name=\"Location name\"\n    [value]=\"location.name\"\n    (onChange)=\"onInputChange('name', $event)\"\n    >\n  </app-forms-text-input>\n\n  <app-forms-select-input\n    placeholder=\"Select the icon\"\n    icon=\"icon icon-user\"\n    name=\"Location Icon\"\n    [selected]=\"location.icon\"\n    [options]=\"defaultIcons\"\n    (onChange)=\"onInputChange('icon', $event)\"\n    >\n  </app-forms-select-input>\n\n  <a (click)=\"formSubmit()\" class=\"btn btn-primary\" *ngIf=\"mode == 'new'\">Create new location</a>\n  <a (click)=\"formSubmit()\" class=\"btn btn-primary\" *ngIf=\"mode == 'edit'\">Edit location</a>\n\n</div>"

/***/ }),

/***/ "./src/app/iot/locations/location-edit/location-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ".body {\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/iot/locations/location-edit/location-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_services_communicate_service__ = __webpack_require__("./src/app/core/services/communicate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LocationEditComponent = /** @class */ (function () {
    function LocationEditComponent(communications, route, store, router) {
        this.communications = communications;
        this.route = route;
        this.store = store;
        this.router = router;
        /**
         * If we are on a editing mode, it has a number;
         * otherwise we only having null.
         */
        this.id = null;
        /**
         * Mode shows if it's an editing mode or not.
         * initial mode is new; but it will be set
         * through the routes
         */
        this.mode = 'new';
        /**
         * When editing form, temporary values are stored
         * in this object.
         */
        this.form = {
            name: '',
            icon: '',
            id: null
        };
        this.location = {
            icon: '',
            id: null,
            name: ''
        };
        this.defaultIcons = [
            { name: 'Kitchen', value: 'four-cooking-accessories-set-for-kitchen.svg' },
            { name: 'Bathroom', value: 'bathtub.svg' },
            { name: 'Master bedrrom', value: 'fireplace.svg' },
            { name: 'Living room', value: 'living-room.svg' },
            { name: 'Conference room', value: 'conference.svg' }
        ];
    }
    /**
     * Assigns the mode and id above;
     * make sure you call this on ngInit
     */
    LocationEditComponent.prototype.extractRouterInfo = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.mode = data['mode'];
        });
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
    };
    LocationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.extractRouterInfo();
        if (this.mode === 'edit') {
            this.store.select('locations').subscribe(function (locations) {
                _this.location = locations.find(function (x) { return x.id === _this.id; });
                _this.form = Object.assign({}, _this.location);
            });
        }
    };
    LocationEditComponent.prototype.postToServer = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                id = 0;
                this.store.select('locations').subscribe(function (locations) {
                    id = +Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["maxBy"])(locations, function (x) { return x.id; }).id + 1;
                });
                return [2 /*return*/, {
                        icon: location.icon,
                        id: location.id ? location.id : id,
                        name: location.name
                    }];
            });
        });
    };
    LocationEditComponent.prototype.formSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postToServer(this.form)];
                    case 1:
                        result = _a.sent();
                        this.store.dispatch({
                            type: 'UPDATE_LOCATION',
                            payload: result
                        });
                        this.router.navigateByUrl('/locations');
                        return [2 /*return*/];
                }
            });
        });
    };
    LocationEditComponent.prototype.onInputChange = function (field, value) {
        this.form[field] = value;
    };
    LocationEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-edit',
            template: __webpack_require__("./src/app/iot/locations/location-edit/location-edit.component.html"),
            styles: [__webpack_require__("./src/app/iot/locations/location-edit/location-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_core_services_communicate_service__["a" /* CommunicateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LocationEditComponent);
    return LocationEditComponent;
}());



/***/ }),

/***/ "./src/app/iot/locations/location-row/location-row.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"place-row-link\" routerLink='/locations/edit/{{location.id}}'>\n    <div class=\"row place-row clearfix\">\n        <div class=\"col-sm-3 col-xs-6 title-icon\">\n            <h2>{{location.name}} {{ location.id }} </h2>\n\n            <img width='200px' [src]=\"'assets/images/' + location.icon\" alt=\"\">\n\n        </div>\n        <div class=\"col-sm-3 col-xs-6 value-box\">\n            <h4>Temperature</h4>\n            <div class=\"value\">\n                22.8<sup>&#8451;</sup>\n            </div>\n        </div>\n        <div class=\"clearfix visible-xs\"></div>\n        <div class=\"col-sm-3 col-xs-6\">\n            <h4>Name</h4>\n            <ul class=\"list-names\" *ngIf=\"widgets && widgets.length > 0\">\n                <li *ngFor=\"let widget of widgets;\">{{widget.name}}</li>\n            </ul>\n        </div>\n        <div class=\"col-sm-3 col-xs-6\">\n            <h4>Status</h4>\n            <ul class=\"list status\" *ngIf=\"widgets && widgets.length > 0\">\n\n                <app-output-pin-view *ngFor=\"let widget of widgets;\" [pin]=\"widget.pin\" [device]=\"widget.device\"></app-output-pin-view>\n            </ul>\n        </div>\n        <div class=\"col-sm-1\">\n            <span class=\"icon icon-arrow_forward icon-round-next\"></span>\n        </div>\n    </div>\n</a>"

/***/ }),

/***/ "./src/app/iot/locations/location-row/location-row.component.scss":
/***/ (function(module, exports) {

module.exports = ".next-button {\n  display: inline-block; }\n\n.place-row-link {\n  text-decoration: none; }\n\n.place-row-link:hover .icon-round-next {\n    background: #8ce196;\n    color: white; }\n\n.value-box {\n  font-size: 35px;\n  padding-top: 0px;\n  color: #9aa7ba; }\n\n.value-box .value {\n    padding-top: 30px; }\n\n.value-box .value sup {\n      font-size: 16px; }\n\n.icon-round-next {\n  -webkit-box-shadow: 0px 0px 0px 4px #f8f9fb;\n          box-shadow: 0px 0px 0px 4px #f8f9fb;\n  border: 1px solid #dde0e8;\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  color: #b9c3d5;\n  text-align: center;\n  padding: 3px;\n  font-size: 25px;\n  display: inline-block;\n  line-height: 35px;\n  text-indent: 2px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s; }\n\n.list.status {\n  list-style: none;\n  font-size: 13px; }\n\n.list.status li {\n    padding: 0;\n    height: 38px; }\n\n.list.status li span {\n      font-weight: bold; }\n\n.list.status li span.on {\n        color: #acd942; }\n\n.list.status li span.on i {\n          border: 1px solid #acd942; }\n\n.list.status li span.off {\n        color: #fe4728; }\n\n.list.status li span.off i {\n          border: 1px solid #fe4728; }\n\n.list.status li span > i {\n        font-style: normal;\n        border-radius: 50%;\n        width: 20px;\n        height: 20px;\n        display: inline-block;\n        padding-left: 0.27em; }\n\n.list-names {\n  list-style: none;\n  font-size: 13px; }\n\n.list-names li {\n    padding: 3px 0;\n    height: 40px; }\n\n.place-row {\n  padding: 15px 30px;\n  border-bottom: 1px solid #f1f3f7;\n  display: table-row; }\n\n.place-row > div {\n    display: table-cell;\n    float: none;\n    vertical-align: middle;\n    position: relative; }\n\n.place-row > div > h4 {\n      position: absolute;\n      top: 0; }\n\nh4 {\n  font-size: 13px;\n  color: #c3cbd4; }\n\nh2 {\n  margin: 10px 0;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: #9fa9bb; }\n\n.title-icon .icon {\n  font-size: 60px; }\n\n.align-bottom {\n  vertical-align: bottom !important; }\n\n.circularProgress {\n  float: left;\n  position: relative;\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  background-color: #f2f2f2;\n  overflow: hidden;\n  margin-right: 5px; }\n\n.circularProgress:after {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    display: block; }\n\n.circularProgress .circularProgress__overlay {\n    position: absolute;\n    width: 17px;\n    height: 17px;\n    background-color: #f2f2f2;\n    border-radius: 50%;\n    margin-left: 2px;\n    margin-top: 2px; }\n"

/***/ }),

/***/ "./src/app/iot/locations/location-row/location-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationRowComponent = /** @class */ (function () {
    function LocationRowComponent() {
        this.widgets = [];
        this.location = null;
    }
    LocationRowComponent.prototype.setPrecent = function (precent) {
        var increment = 360 / 100;
        var half = Math.round(100 / 2);
        var nextdeg = 0;
        var bgGradient = '';
        if (precent < half) {
            nextdeg = 90 + (increment * precent);
            // tslint:disable-next-line:max-line-length
            bgGradient = 'linear-gradient(90deg, #f2f2f2 50%, transparent 50%, transparent), linear-gradient(' + nextdeg + 'deg, #777 50%, #f2f2f2 50%, #f2f2f2)';
        }
        else {
            nextdeg = -90 + (increment * (precent - half));
            // tslint:disable-next-line:max-line-length
            bgGradient = 'linear-gradient(' + nextdeg + 'deg, #777 50%, transparent 50%, transparent), linear-gradient(270deg, #777 50%, #f2f2f2 50%, #f2f2f2)';
        }
        var styles = {
            'background-image': bgGradient
        };
        return styles;
    };
    LocationRowComponent.prototype.ngOnInit = function () {
        this.precent = 55;
        this.precentStyle = this.setPrecent(this.precent);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], LocationRowComponent.prototype, "widgets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LocationRowComponent.prototype, "location", void 0);
    LocationRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-row',
            template: __webpack_require__("./src/app/iot/locations/location-row/location-row.component.html"),
            styles: [__webpack_require__("./src/app/iot/locations/location-row/location-row.component.scss")]
        })
    ], LocationRowComponent);
    return LocationRowComponent;
}());



/***/ }),

/***/ "./src/app/iot/locations/locations.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-header title=\"Locations\" icon=\"icon icon-location\"></app-page-header>\n<a routerLink=\"/locations/new\" class=\"btn btn-primary docked\">Add location</a>\n\n<div *ngFor=\"let location of locations;\">\n    <app-location-row [widgets]=\"findWidgets(location)\" [location]=\"location\"></app-location-row>\n</div>"

/***/ }),

/***/ "./src/app/iot/locations/locations.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/iot/locations/locations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_services_communicate_service__ = __webpack_require__("./src/app/core/services/communicate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(chRef, store, communications) {
        this.chRef = chRef;
        this.store = store;
        this.communications = communications;
        // Initialize private variables
    }
    LocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('locations').subscribe(function (collection) {
            _this.locations = collection;
        });
        this.store.select('widgets').subscribe(function (collection) {
            _this.widgets = collection;
        });
    };
    LocationsComponent.prototype.findWidgets = function (location) {
        return this.widgets.filter(function (widget) { return widget.location.id === location.id; });
    };
    LocationsComponent.prototype.ngOnDestroy = function () {
        this.chRef.detach();
    };
    LocationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-locations',
            template: __webpack_require__("./src/app/iot/locations/locations.component.html"),
            styles: [__webpack_require__("./src/app/iot/locations/locations.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_2__app_core_services_communicate_service__["a" /* CommunicateService */]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "./src/app/iot/quick-status/quick-chart/quick-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"quick-chart-container\"></div>"

/***/ }),

/***/ "./src/app/iot/quick-status/quick-chart/quick-chart.component.scss":
/***/ (function(module, exports) {

module.exports = "#quick-chart-container {\n  width: 100%;\n  position: relative;\n  height: 150px;\n  margin: 25px auto; }\n  #quick-chart-container /deep/ .highcharts-container {\n    width: 100% !important;\n    position: absolute !important;\n    left: 0;\n    right: 0; }\n"

/***/ }),

/***/ "./src/app/iot/quick-status/quick-chart/quick-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuickChartComponent = /** @class */ (function () {
    function QuickChartComponent() {
    }
    QuickChartComponent.prototype.drawChart = function (data) {
        Highcharts.chart('quick-chart-container', {
            chart: {
                backgroundColor: 'transparent',
                type: 'areaspline',
                spacingBottom: 0,
                spacingTop: 10,
                spacingLeft: 0,
                spacingRight: 0,
            },
            tooltip: {
                enable: null
            },
            title: {
                text: null
            },
            xAxis: {
                min: 1, max: 6,
                categories: [
                    'MON',
                    'TUE',
                    'WED',
                    'THU',
                    'FRI',
                    'SAT',
                    'SUN',
                    'MON',
                    'TUE',
                    'WED'
                ],
                labels: {
                    style: {
                        color: 'rgba(255,255,255,0.8)'
                    },
                    y: -10,
                    x: 0
                },
                tickLength: -250,
                tickColor: 'rgba(255,255,255,0.25)',
                lineColor: 'transparent'
            },
            yAxis: {
                min: 0,
                gridLineWidth: 0,
                title: {
                    text: ''
                },
                labels: {
                    enabled: false
                },
                stackLabels: {
                    enabled: true,
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0,
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                    name: 'Temperature',
                    data: [
                        11, 15, 10, 16, 10, 15, 11, 14, 9, 14
                    ],
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, 'rgba(0,0,0,.3)'],
                            [1, 'rgba(0,0,0,.05)']
                        ]
                    },
                    lineWidth: 2.2,
                    lineColor: 'rgba(255,255,255,0.5)',
                    dataLabels: {
                        enabled: true,
                        color: '#FFFFFF',
                        align: 'left',
                        x: -15,
                        y: top,
                        format: '{y}˚',
                        style: {
                            fontWeight: 'light',
                            fontSize: 13,
                            textOutline: false
                        }
                    }
                }]
        });
    };
    QuickChartComponent.prototype.ngOnInit = function () {
        this.chartData = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["times"])(10, function () { return Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(1, 100); });
        this.drawChart(this.chartData);
    };
    QuickChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quick-chart',
            template: __webpack_require__("./src/app/iot/quick-status/quick-chart/quick-chart.component.html"),
            styles: [__webpack_require__("./src/app/iot/quick-status/quick-chart/quick-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuickChartComponent);
    return QuickChartComponent;
}());



/***/ }),

/***/ "./src/app/iot/quick-status/quick-status.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"quick-status\">\n        <div class=\"docked\">\n            \n            <app-user-widget></app-user-widget>\n\n            <h2>Quick view</h2>\n            <div class=\"flex-container\">\n                <div class='flex-item'>\n                    <div class=\"large-icon-widget\">\n                        <i class=\"icon\" [ngClass]=\"weatherConditions.largeTemp.icon\"></i>\n                        <span class=\"value\">{{weatherConditions.largeTemp.degree}}˚</span>\n                    </div>\n                </div>\n                <div class='flex-item'>\n                    <div class='flex-item'>\n                    <div class=\"large-icon-widget\">\n                        <i class=\"icon\" [ngClass]=\"weatherConditions.smallTemp.icon\"></i>\n                        <span class=\"value\">{{weatherConditions.smallTemp.degree}}˚</span>\n                    </div>\n                </div>\n                </div>\n            </div>\n\n            <div class=\"flex-container medium-icon-widget-wrapper\">\n                <div class='flex-item'>\n                    <div class=\"medium-icon-widget\">\n                        <div class='title'>Wind</div>\n                        <i class=\"icon icon-wind\"></i>\n                        <div class=\"value\">{{weatherConditions.wind}} km/h</div>\n                    </div>\n                </div>\n                <div class='flex-item'>\n                    <div class=\"medium-icon-widget\">\n                        <div class='title'>Pressure</div>\n                        <span class=\"midVal\">\n                            {{weatherConditions.pressure}}\n                        </span>\n                        <div class=\"value\">hPa</div>\n                    </div>\n                </div>\n                <div class='flex-item'>\n                    <div class=\"medium-icon-widget\">\n                        <div class='title'>Precipitation</div>\n                        <span class=\"midVal\">\n                            {{weatherConditions.precipitation}}\n                        </span>\n                        <div class=\"value\">mm</div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Load quick-chart component-->\n            <app-quick-chart></app-quick-chart>\n\n            <h2>Netatmo indoor</h2>\n\n            <div class=\"flex-container bordered-bottom\">\n                <div class='flex-item' app-large-value-widget></div>\n                <div class='flex-item' app-large-value-widget></div>\n                <div class='flex-item' app-large-value-widget></div>\n            </div>\n\n            <div app-full-widget class=\"flex-container padding-medium\"></div>\n\n            <div class=\"flex-container bordered-top\">\n                <div class='flex-item' app-large-value-widget></div>\n                <div class='flex-item' app-large-value-widget></div>\n            </div>\n        </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/iot/quick-status/quick-status.component.scss":
/***/ (function(module, exports) {

module.exports = ".quick-status {\n  background: #44d9a1;\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #44d9a1), color-stop(49%, #38cf80), color-stop(100%, #02bc56));\n  background: -webkit-gradient(linear, left top, left bottom, from(#44d9a1), color-stop(49%, #38cf80), to(#02bc56));\n  background: linear-gradient(to bottom, #44d9a1 0%, #38cf80 49%, #02bc56 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=#44d9a1, endColorstr=#02bc56, GradientType=0 );\n  -webkit-transition: width 0.3s;\n  transition: width 0.3s;\n  position: fixed;\n  left: -300px;\n  top: 0px;\n  bottom: 0;\n  width: 300px;\n  overflow-x: hidden; }\n  .quick-status::-webkit-scrollbar-track {\n    background-color: white; }\n  .quick-status::-webkit-scrollbar {\n    width: 6px;\n    background-color: #F5F5F5; }\n  .quick-status::-webkit-scrollbar-thumb {\n    background-color: #edf1f7; }\n  .quick-status.active {\n    -webkit-transition: left 0.5s;\n    transition: left 0.5s;\n    left: 0; }\n  .quick-status .calendar-box {\n    min-height: 200px;\n    display: inline-block;\n    width: 100%; }\n  .quick-status h2 {\n    font-size: 16px;\n    text-transform: uppercase;\n    color: #daf5e9;\n    text-align: center;\n    font-weight: bold; }\n  .quick-status .bordered-bottom {\n    padding-bottom: 10px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\n  .quick-status .bordered-bottom .large-value-item:first-child {\n      border-right: 1px solid rgba(255, 255, 255, 0.3); }\n  .quick-status .bordered-top {\n    padding-top: 10px;\n    border-top: 1px solid rgba(255, 255, 255, 0.3); }\n  .quick-status .bordered-top .large-value-item:first-child {\n      border-right: 1px solid rgba(255, 255, 255, 0.3); }\n  .quick-status .padding-medium {\n    padding: 15px 0; }\n  .quick-status .medium-icon-widget {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .quick-status .medium-icon-widget .value, .quick-status .medium-icon-widget .icon, .quick-status .medium-icon-widget .title, .quick-status .medium-icon-widget .midVal {\n      display: block;\n      text-align: center;\n      font-size: 12px;\n      color: white; }\n  .quick-status .medium-icon-widget .icon {\n      font-size: 30px; }\n  .quick-status .medium-icon-widget .midVal {\n      font-size: 28px; }\n  .quick-status .large-icon-widget {\n    text-align: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding-bottom: 15px; }\n  .quick-status .large-icon-widget .value, .quick-status .large-icon-widget .icon {\n      font-size: 42px;\n      color: white; }\n  .quick-status .medium-icon-widget-wrapper .flex-item {\n    border-right: 1px solid rgba(255, 255, 255, 0.2); }\n  .quick-status .medium-icon-widget-wrapper .flex-item:last-child {\n      border-right: 0; }\n  @media (min-width: 992px) {\n    .quick-status {\n      left: 100px; } }\n  @media (min-width: 1600px) {\n    .quick-status {\n      width: 350px; } }\n"

/***/ }),

/***/ "./src/app/iot/quick-status/quick-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuickStatusComponent = /** @class */ (function () {
    function QuickStatusComponent() {
    }
    QuickStatusComponent.prototype.ngOnInit = function () {
        this.weatherConditions = {
            largeTemp: {
                icon: 'icon-cloudy',
                degree: 10
            },
            smallTemp: {
                icon: 'icon-rainy2',
                degree: 6
            },
            wind: 10,
            pressure: 1016,
            precipitation: 4
        };
    };
    QuickStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quick-status',
            template: __webpack_require__("./src/app/iot/quick-status/quick-status.component.html"),
            styles: [__webpack_require__("./src/app/iot/quick-status/quick-status.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuickStatusComponent);
    return QuickStatusComponent;
}());



/***/ }),

/***/ "./src/app/iot/quick-status/user-widget/user-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-widget-container\" *ngIf=\"User\">\n    <div class='background-overlay'>\n        <div class=\"avatar\">\n            <img [src]=\"'assets/images/users/' + User.username + '/' + User.avatar\" [alt]=\"User.firstname + ' ' + User.lastname\" [title]=\"User.firstname + ' ' + User.lastname\"/>\n        </div>\n        <div class=\"user-detail\">\n            <p class=\"ud-user\" *ngIf=\"User\">{{User.firstname + ' ' + User.lastname}}</p>\n        </div>\n        <div class=\"user-accesory\" *ngIf=\"User\">\n            <div><a [routerLink]='index'><i class=\"icon icon-settings\"></i></a></div>\n            <div><a [routerLink]='index'><i class=\"icon icon-mail_outline\"></i></a></div>\n            <div><a [routerLink]='index'><i class=\"icon icon-notifications_none\"></i></a></div>\n            <div><a [routerLink]='index'><i class=\"icon icon-power_settings_new\"></i></a></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/iot/quick-status/user-widget/user-widget.component.scss":
/***/ (function(module, exports) {

module.exports = ".user-widget-container {\n  position: relative;\n  margin-bottom: 15px; }\n  .user-widget-container .background-overlay {\n    background: rgba(0, 0, 0, 0.1); }\n  .user-widget-container .background-overlay:after {\n      content: ' ';\n      display: block;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      z-index: -1;\n      opacity: .5;\n      background-image: url(\"/assets/images/userbg.png\");\n      background-repeat: no-repeat;\n      background-position: 50% 0;\n      -ms-background-size: cover;\n      background-size: cover; }\n  .user-widget-container .background-overlay i {\n      font-size: 17px;\n      color: rgba(255, 255, 255, 0.8); }\n  .user-widget-container .date-time {\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    height: 150px;\n    padding: 50px 30px 15px;\n    background: rgba(255, 255, 255, 0);\n    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(100%, rgba(0, 0, 0, 0.74)));\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(0, 0, 0, 0.74)));\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.74) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#000000', GradientType=0 ); }\n  .user-widget-container .date-time > span {\n      display: inline-block;\n      color: white;\n      font-size: 19px; }\n  .user-widget-container .date-time .q-week-day {\n      display: block; }\n  .user-widget-container .date-time .q-month, .user-widget-container .date-time .q-day {\n      font-size: 40px; }\n  .user-widget-container .date-time .q-day {\n      position: relative; }\n  .user-widget-container .date-time .q-day > span {\n        font-size: 14px;\n        position: absolute;\n        top: 10px;\n        right: -15px; }\n  .user-widget-container .date-time .q-time {\n      float: right;\n      margin-top: 20px; }\n  .user-widget-container .avatar {\n    text-align: center;\n    padding: 15px; }\n  .user-widget-container .avatar img {\n      border-radius: 50%;\n      width: 100px; }\n  .user-widget-container .user-detail {\n    text-align: center;\n    color: #fff;\n    font-size: 22px; }\n  .user-widget-container .user-detail .ud-title + .ud-user {\n      padding-bottom: 40px; }\n  .user-widget-container .user-accesory {\n    padding: 5px 25px 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    text-align: center; }\n  .user-widget-container .user-accesory > div {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n  .user-widget-container .user-accesory > div > a {\n        text-decoration: none;\n        width: 40px;\n        height: 30px;\n        padding-top: 0.5em;\n        background: rgba(0, 0, 0, 0.1);\n        display: inline-block;\n        border-radius: 5px; }\n  .user-widget-container .user-accesory > div > a:hover {\n          background: rgba(0, 0, 0, 0.2); }\n"

/***/ }),

/***/ "./src/app/iot/quick-status/user-widget/user-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_services_user_service__ = __webpack_require__("./src/app/core/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserWidgetComponent = /** @class */ (function () {
    function UserWidgetComponent(user) {
        this.user = user;
    }
    UserWidgetComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(UserWidgetComponent.prototype, "User", {
        get: function () {
            return this.user.User;
        },
        enumerable: true,
        configurable: true
    });
    UserWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-widget',
            template: __webpack_require__("./src/app/iot/quick-status/user-widget/user-widget.component.html"),
            styles: [__webpack_require__("./src/app/iot/quick-status/user-widget/user-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_core_services_user_service__["b" /* UserService */]])
    ], UserWidgetComponent);
    return UserWidgetComponent;
}());



/***/ }),

/***/ "./src/app/iot/shared/checkbox-switch.scss":
/***/ (function(module, exports) {

module.exports = "input[type=\"checkbox\"].ios-switch {\n  position: absolute;\n  opacity: 0; }\n\n/* Normal Track */\n\ninput[type=\"checkbox\"].ios-switch + div {\n  vertical-align: middle;\n  width: 40px;\n  height: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  border-radius: 999px;\n  background-color: rgba(0, 0, 0, 0.1);\n  -webkit-transition-duration: .4s;\n  -webkit-transition-property: background-color, box-shadow;\n  -webkit-box-shadow: inset 0 0 0 0px rgba(0, 0, 0, 0.4);\n          box-shadow: inset 0 0 0 0px rgba(0, 0, 0, 0.4); }\n\n/* Checked Track (Blue) */\n\ninput[type=\"checkbox\"].ios-switch:checked + div {\n  width: 40px;\n  background-position: 0 0;\n  background-color: silver;\n  border: 1px solid silver;\n  -webkit-box-shadow: inset 0 0 0 10px silver;\n          box-shadow: inset 0 0 0 10px silver; }\n\n/* Tiny Track */\n\ninput[type=\"checkbox\"].tinyswitch.ios-switch + div {\n  width: 34px;\n  height: 18px; }\n\n/* Big Track */\n\ninput[type=\"checkbox\"].bigswitch.ios-switch + div {\n  width: 50px;\n  height: 25px; }\n\n/* Green Track */\n\ninput[type=\"checkbox\"].green.ios-switch:checked + div {\n  background-color: silver;\n  border: 1px solid silver;\n  -webkit-box-shadow: inset 0 0 0 10px silver;\n          box-shadow: inset 0 0 0 10px silver; }\n\n/* Normal Knob */\n\ninput[type=\"checkbox\"].ios-switch + div > div {\n  float: left;\n  width: 18px;\n  height: 18px;\n  border-radius: inherit;\n  background: #ffffff;\n  -webkit-transition-timing-function: cubic-bezier(0.54, 1.85, 0.5, 1);\n  -webkit-transition-duration: 0.4s;\n  -webkit-transition-property: transform, background-color, box-shadow;\n  -moz-transition-timing-function: cubic-bezier(0.54, 1.85, 0.5, 1);\n  -moz-transition-duration: 0.4s;\n  -moz-transition-property: transform, background-color;\n  -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px rgba(0, 0, 0, 0.4);\n          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px rgba(0, 0, 0, 0.4);\n  pointer-events: none;\n  margin-top: 1px;\n  margin-left: 1px; }\n\n/* Checked Knob (Blue Style) */\n\ninput[type=\"checkbox\"].ios-switch:checked + div > div {\n  -webkit-transform: translate3d(20px, 0, 0);\n  -moz-transform: translate3d(20px, 0, 0);\n  background-color: #ffffff;\n  -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px silver;\n          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px silver; }\n\n/* Tiny Knob */\n\ninput[type=\"checkbox\"].tinyswitch.ios-switch + div > div {\n  width: 16px;\n  height: 16px;\n  margin-top: 1px; }\n\n/* Checked Tiny Knob (Blue Style) */\n\ninput[type=\"checkbox\"].tinyswitch.ios-switch:checked + div > div {\n  -webkit-transform: translate3d(16px, 0, 0);\n  -moz-transform: translate3d(16px, 0, 0);\n  -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px silver;\n          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0px 0px 0 1px silver; }\n\n/* Big Knob */\n\ninput[type=\"checkbox\"].bigswitch.ios-switch + div > div {\n  width: 23px;\n  height: 23px;\n  margin-top: 1px; }\n\n/* Checked Big Knob (Blue Style) */\n\ninput[type=\"checkbox\"].bigswitch.ios-switch:checked + div > div {\n  -webkit-transform: translate3d(25px, 0, 0);\n  -moz-transform: translate3d(16px, 0, 0);\n  -webkit-box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3), 0px 0px 0 1px silver;\n          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3), 0px 0px 0 1px silver; }\n\n/* Green Knob */\n\ninput[type=\"checkbox\"].green.ios-switch:checked + div > div {\n  -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0 0 0 1px #00a23f;\n          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3), 0 0 0 1px #00a23f; }\n"

/***/ }),

/***/ "./src/app/iot/shared/helper-box/helper-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"helper-box\" [ngClass]=\"device ? 'active' : ''\" (mouseleave)=\"unfocus()\" > \n  <div *ngIf=\"device\">\n    \n    <h1 class='helper-box-title clearfix'>\n      <div class='page-label pull-left'>\n        <i class=\"icon icon-keyboard\"></i>\n        Pin configuration\n      </div>\n    </h1>\n    <div class=\"box-content device-configuration\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h3>{{device.uniqueid}} Pin: <font color='green'>{{pin.id}}</font> </h3>\n          <div class=\"device-description\">\n            Modify: <app-output-pin [pin]=\"pin\" [device]=\"device\"></app-output-pin>\n            <br>\n            Realtime value: {{pin.value}}\n          </div>\n          {{describeDevice(device)}}\n\n        </div>\n        <div class=\"col-sm-6\" >\n          \n          <section *ngIf=\"pin\" >\n            <div class=\"device-description\">\n              <app-forms-text-input\n                placeholder=\"Type the widget name ( e.g: Front Lamp )\"\n                icon=\"icon icon-user\"\n                name=\"Widget name\"\n                [value]=\"form.name\"\n                (onChange)=\"onWidgetNameInputChange($event)\"\n                >\n              </app-forms-text-input>\n              <app-forms-select-input\n                placeholder=\"Select the position\"\n                icon=\"icon icon-user\"\n                name=\"Widget Place\"\n                [selected]=\"form.location\"\n                [options]=\"[{'name':'-- no place --', 'value':''}].concat(locations)\"\n                (onChange)=\"onPlaceChange($event)\"\n                >\n              </app-forms-select-input>\n\n              <input type=\"submit\" class=\"form-control\" value=\"Update\" (click)=\"submitForm()\">\n              <br>\n              <input type=\"submit\" class=\"form-control btn-warning\" value=\"Cancel\" (click)=\"unfocus()\">\n            </div>\n          </section>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/iot/shared/helper-box/helper-box.component.scss":
/***/ (function(module, exports) {

module.exports = ".helper-box {\n  overflow-y: scroll;\n  border-top: 3px solid #00cb7a;\n  background: #e8e8e2;\n  position: fixed;\n  height: 450px;\n  top: 100%;\n  height: 450px;\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s; }\n  .helper-box .helper-box-title {\n    background: #00cb7a;\n    margin: 0;\n    font-size: 17px;\n    padding: 9px 15px 9px;\n    color: white; }\n  .helper-box.active {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  @media (min-width: 992px) {\n    .helper-box {\n      left: 400px;\n      right: 0px; } }\n  @media (min-width: 1367px) {\n    .helper-box {\n      right: 300px; } }\n  @media (min-width: 1600px) {\n    .helper-box {\n      left: 450px;\n      right: 350px; } }\n  .device-configuration {\n  padding: 15px; }\n  .device-configuration h3 {\n    margin: 0 auto 10px;\n    font-size: 21px; }\n"

/***/ }),

/***/ "./src/app/iot/shared/helper-box/helper-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_services_actions_service__ = __webpack_require__("./src/app/core/services/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HelperBoxComponent = /** @class */ (function () {
    function HelperBoxComponent(chRef, store, actions) {
        this.chRef = chRef;
        this.store = store;
        this.actions = actions;
        this.device = null;
        this.pin = null;
        this.onFocusLost = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.form = {
            name: '',
            location: ''
        };
        // Initialize private variables
    }
    HelperBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('locations').subscribe(function (collection) {
            _this.locations = collection;
        });
    };
    HelperBoxComponent.prototype.ngOnDestroy = function () {
        this.chRef.detach();
    };
    HelperBoxComponent.prototype.ngOnChanges = function (changes) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actions.findWidget(this.device, this.pin)];
                    case 1:
                        widget = _a.sent();
                        if (!widget) {
                            return [2 /*return*/, this.resetForm()];
                        }
                        this.form.name = widget.name;
                        if (widget.location) {
                            this.form.location = widget.location.id;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HelperBoxComponent.prototype.createWidgetObject = function () {
        var _this = this;
        return {
            device: this.device,
            pin: this.pin,
            name: this.form.name,
            location: this.locations.find(function (x) { return x.id === _this.form.location; })
        };
    };
    HelperBoxComponent.prototype.submitForm = function () {
        if (!this.device || !this.pin) {
            return void 0;
        }
        var args = this.createWidgetObject();
        this.actions.createWidgets(args);
    };
    HelperBoxComponent.prototype.describeDevice = function (device) {
        return "This device has " + this.countInputPins(device) + " inputs, and " + this.countOutputPins(device) + " outputs.";
    };
    HelperBoxComponent.prototype.countInputPins = function (device) {
        return device.pins.filter(function (pin) { return pin.type === 'input'; }).length;
    };
    HelperBoxComponent.prototype.countOutputPins = function (device) {
        return device.pins.filter(function (pin) { return pin.type === 'output'; }).length;
    };
    HelperBoxComponent.prototype.unfocus = function () {
        this.onFocusLost.emit();
    };
    HelperBoxComponent.prototype.resetForm = function () {
        this.form.name = '';
        this.form.location = '';
    };
    HelperBoxComponent.prototype.onPlaceChange = function (value) {
        this.form.location = value;
    };
    HelperBoxComponent.prototype.onWidgetNameInputChange = function (value) {
        this.form.name = value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HelperBoxComponent.prototype, "device", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HelperBoxComponent.prototype, "pin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], HelperBoxComponent.prototype, "onFocusLost", void 0);
    HelperBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-helper-box',
            template: __webpack_require__("./src/app/iot/shared/helper-box/helper-box.component.html"),
            styles: [__webpack_require__("./src/app/iot/shared/helper-box/helper-box.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_1__app_core_services_actions_service__["a" /* ActionsService */]])
    ], HelperBoxComponent);
    return HelperBoxComponent;
}());



/***/ }),

/***/ "./src/app/iot/shared/input-pin/input-pin.component.html":
/***/ (function(module, exports) {

module.exports = "<span class='input-pin'>\n  <span class=\"pin-id\">\n    {{pin.id}}\n  </span>\n  <span class=\"pin-value\">\n    {{castPinValue(pin.value)}}\n  </span>\n</span>"

/***/ }),

/***/ "./src/app/iot/shared/input-pin/input-pin.component.scss":
/***/ (function(module, exports) {

module.exports = ".input-pin {\n  background: white;\n  margin: 5px 0;\n  padding: 0;\n  display: inline-block; }\n  .input-pin .pin-id, .input-pin .pin-value {\n    display: inline-block;\n    padding: 5px 3px; }\n  .input-pin .pin-id {\n    background: #059547;\n    color: white; }\n"

/***/ }),

/***/ "./src/app/iot/shared/input-pin/input-pin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputPinComponent = /** @class */ (function () {
    function InputPinComponent() {
        this.pin = null;
    }
    /**
     * Since each pin
     */
    InputPinComponent.prototype.castPinValue = function (value) {
        if (value === 'ON') {
            return 'on';
        }
        if (value === 'OFF') {
            return 'off';
        }
        return parseFloat(value).toPrecision(3);
    };
    InputPinComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InputPinComponent.prototype, "pin", void 0);
    InputPinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-input-pin',
            template: __webpack_require__("./src/app/iot/shared/input-pin/input-pin.component.html"),
            styles: [__webpack_require__("./src/app/iot/shared/input-pin/input-pin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputPinComponent);
    return InputPinComponent;
}());



/***/ }),

/***/ "./src/app/iot/shared/output-pin-view/output-pin-view.component.html":
/***/ (function(module, exports) {

module.exports = "\n<li *ngIf=\"pin && pin.value == 'ON'\">\n    <span class=\"on\"><i>&#10003;</i> ON</span>\n</li>\n\n<li *ngIf=\"pin && pin.value == 'OFF'\">\n    <span class=\"off\"><i>&#10005;</i> OFF</span>\n</li>\n\n<li *ngIf=\"pin && pin.value != 'OFF' && pin.value != 'ON'\">\n    <div class=\"circularProgress\" [ngStyle]=\"precentStyle\">   \n        <div class=\"circularProgress__overlay\"></div>\n    </div>\n    {{round(pin.value)}}   \n</li>\n\n\n"

/***/ }),

/***/ "./src/app/iot/shared/output-pin-view/output-pin-view.component.scss":
/***/ (function(module, exports) {

module.exports = ".circularProgress {\n  float: left;\n  position: relative;\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  background-color: #f2f2f2;\n  overflow: hidden;\n  margin-right: 5px; }\n  .circularProgress:after {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    display: block; }\n  .circularProgress .circularProgress__overlay {\n    position: absolute;\n    width: 17px;\n    height: 17px;\n    background-color: #f2f2f2;\n    border-radius: 50%;\n    margin-left: 2px;\n    margin-top: 2px; }\n  li {\n  padding: 0;\n  height: 38px; }\n  li span {\n    font-weight: bold; }\n  li span.on {\n      color: #acd942; }\n  li span.on i {\n        border: 1px solid #acd942; }\n  li span.off {\n      color: #fe4728; }\n  li span.off i {\n        border: 1px solid #fe4728; }\n  li span > i {\n      font-style: normal;\n      border-radius: 50%;\n      width: 20px;\n      height: 20px;\n      display: inline-block;\n      padding-left: 0.27em; }\n"

/***/ }),

/***/ "./src/app/iot/shared/output-pin-view/output-pin-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputPinViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OutputPinViewComponent = /** @class */ (function () {
    function OutputPinViewComponent() {
        this.pin = null;
        this.device = null;
    }
    OutputPinViewComponent.prototype.setPrecent = function (precent) {
        var increment = 360 / 100;
        var half = Math.round(100 / 2);
        var nextdeg = 0;
        var bgGradient = '';
        if (precent < half) {
            nextdeg = 90 + (increment * precent);
            // tslint:disable-next-line:max-line-length
            bgGradient = 'linear-gradient(90deg, #f2f2f2 50%, transparent 50%, transparent), linear-gradient(' + nextdeg + 'deg, #777 50%, #f2f2f2 50%, #f2f2f2)';
        }
        else {
            nextdeg = -90 + (increment * (precent - half));
            // tslint:disable-next-line:max-line-length
            bgGradient = 'linear-gradient(' + nextdeg + 'deg, #777 50%, transparent 50%, transparent), linear-gradient(270deg, #777 50%, #f2f2f2 50%, #f2f2f2)';
        }
        var styles = {
            'background-image': bgGradient
        };
        return styles;
    };
    OutputPinViewComponent.prototype.round = function (input) {
        return Math.floor(input);
    };
    OutputPinViewComponent.prototype.ngOnInit = function () {
        this.precent = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(20, 90);
        this.precentStyle = this.setPrecent(this.precent);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('pin'),
        __metadata("design:type", Object)
    ], OutputPinViewComponent.prototype, "pin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('device'),
        __metadata("design:type", Object)
    ], OutputPinViewComponent.prototype, "device", void 0);
    OutputPinViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-output-pin-view',
            template: __webpack_require__("./src/app/iot/shared/output-pin-view/output-pin-view.component.html"),
            styles: [__webpack_require__("./src/app/iot/shared/output-pin-view/output-pin-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OutputPinViewComponent);
    return OutputPinViewComponent;
}());



/***/ }),

/***/ "./src/app/iot/shared/output-pin/output-pin.component.html":
/***/ (function(module, exports) {

module.exports = "<span class='output-pin'>\n  <span class=\"pin-value\">\n    <label *ngIf=\"findType(pin.value) === 'switch'\">\n      <input \n        (change)=\"pin.value = changeDigitalData($event, device, pin)\" \n        [checked]=\"pin.value === 'ON'\" type=\"checkbox\" class=\"ios-switch\" \n        [ngClass]=\"switchSize ? switchSize : 'bigswitch'\" \n      >\n      <div><div></div></div>\n    </label>\n\n    <div class=\"range-selector\" *ngIf=\"findType(pin.value) === 'input'\">\n        <input type=\"range\" min=\"0\" max=\"100\" step=\"0.5\" (change)=\"pin.value = changeAnalogData($event, device, pin)\" >\n    </div>\n\n  </span>\n</span>\n\n\n"

/***/ }),

/***/ "./src/app/iot/shared/output-pin/output-pin.component.scss":
/***/ (function(module, exports) {

module.exports = ".output-pin {\n  margin: 5px 0;\n  padding: 0;\n  display: inline-block; }\n  .output-pin .pin-id, .output-pin .pin-value {\n    display: inline-block;\n    padding: 5px 3px; }\n  .output-pin .pin-id {\n    background: #059547;\n    color: white; }\n  .output-pin input {\n    padding: 6px 5px;\n    font-size: 24px;\n    border: 0;\n    margin-top: -5px;\n    background: transparent; }\n"

/***/ }),

/***/ "./src/app/iot/shared/output-pin/output-pin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputPinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_services_actions_service__ = __webpack_require__("./src/app/core/services/actions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OutputPinComponent = /** @class */ (function () {
    function OutputPinComponent(actions) {
        this.actions = actions;
        this.pin = null;
        this.device = null;
        this.switchSize = 'bigswitch';
    }
    OutputPinComponent.prototype.ngOnInit = function () {
    };
    OutputPinComponent.prototype.findType = function (value) {
        if (value === 'ON' || value === 'OFF') {
            return 'switch';
        }
        return 'input';
    };
    OutputPinComponent.prototype.castPinValue = function (value) {
        if (value === 'ON') {
            return 'on';
        }
        if (value === 'OFF') {
            return 'off';
        }
        return parseFloat(value).toPrecision(3);
    };
    OutputPinComponent.prototype.changeAnalogData = function ($event, device, pin) {
        var newValue = $event.target.value;
        this.actions.triggerDeviceChange($event, device, pin, newValue);
        return newValue;
    };
    OutputPinComponent.prototype.changeDigitalData = function ($event, device, pin) {
        var newValue = $event.target.checked ? 'ON' : 'OFF';
        this.actions.triggerDeviceChange($event, device, pin, newValue);
        return newValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('pin'),
        __metadata("design:type", Object)
    ], OutputPinComponent.prototype, "pin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('device'),
        __metadata("design:type", Object)
    ], OutputPinComponent.prototype, "device", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('switchSize'),
        __metadata("design:type", Object)
    ], OutputPinComponent.prototype, "switchSize", void 0);
    OutputPinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-output-pin',
            template: __webpack_require__("./src/app/iot/shared/output-pin/output-pin.component.html"),
            styles: [__webpack_require__("./src/app/iot/shared/output-pin/output-pin.component.scss"), __webpack_require__("./src/app/iot/shared/checkbox-switch.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_core_services_actions_service__["a" /* ActionsService */]])
    ], OutputPinComponent);
    return OutputPinComponent;
}());



/***/ }),

/***/ "./src/app/iot/shared/switch-widgets/switch-widgets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-box\">\n  <div class=\"info-box col-sm-6\">\n    <i class=\"{{widget.icon ? widget.icon : 'icon icon-cloud'}}\"></i>\n    <div class=\"name\">\n      <span>{{widget.name}} {{widget.location ? ' in ' + widget.location.name : ''}}</span>\n      <span>{{value(widget)}}</span>\n    </div>\n  </div>\n  <div class=\"controlls col-sm-6\">\n    <app-output-pin [pin]=\"widget.pin\" [device]=\"widget.device\"></app-output-pin> \n  </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/iot/shared/switch-widgets/switch-widgets.component.scss":
/***/ (function(module, exports) {

module.exports = ".widget-box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  float: left;\n  background-color: #00cb7a;\n  margin: 7.5px 0;\n  padding: 10px 0; }\n  .widget-box:hover {\n    -webkit-transition: 0.3s all ease-in-out;\n    transition: 0.3s all ease-in-out;\n    background-color: #43A047; }\n  .widget-box .icon {\n    font-size: 45px;\n    color: white; }\n  .widget-box .info-box {\n    font-size: 16px;\n    margin-left: 15px; }\n  .widget-box .info-box .name {\n      font-size: 13px;\n      color: white; }\n  .widget-box .controlls {\n    text-align: right;\n    padding-top: 15px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .widget-box .controlls label {\n      margin: 5px 0;\n      display: block; }\n"

/***/ }),

/***/ "./src/app/iot/shared/switch-widgets/switch-widgets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchWidgetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchWidgetsComponent = /** @class */ (function () {
    function SwitchWidgetsComponent() {
    }
    SwitchWidgetsComponent.prototype.ngOnInit = function () {
    };
    SwitchWidgetsComponent.prototype.value = function (widget) {
        if (!widget.pin.value.toFixed) {
            return widget.pin.value;
        }
        if (widget.pin.value === 'ON' || widget.pin.value === 'OFF') {
            return widget.pin.value;
        }
        return widget.pin.value.toFixed(2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SwitchWidgetsComponent.prototype, "widget", void 0);
    SwitchWidgetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-switch-widgets',
            template: __webpack_require__("./src/app/iot/shared/switch-widgets/switch-widgets.component.html"),
            styles: [__webpack_require__("./src/app/iot/shared/switch-widgets/switch-widgets.component.scss"), __webpack_require__("./src/app/iot/shared/checkbox-switch.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SwitchWidgetsComponent);
    return SwitchWidgetsComponent;
}());



/***/ }),

/***/ "./src/app/iot/signup/signup-success/signup-success.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <div class=\"container\">\n    <div class=\"col-sm-4\">\n      <img src=\"assets/images/thankyou.svg\" alt=\"\">\n    </div>\n    <div class=\"col-sm-6\">\n      <h1>Your signup is successful</h1>\n      <p>Thank you for joining us. You can now use sign-in button to enter the application</p>\n      <a routerLink='/login' class=\"btn btn-primary\">Login</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/iot/signup/signup-success/signup-success.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 30px; }\n  .container h1, .container p {\n    text-shadow: 2px 0px 1px white; }\n"

/***/ }),

/***/ "./src/app/iot/signup/signup-success/signup-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupSuccessComponent = /** @class */ (function () {
    function SignupSuccessComponent() {
    }
    SignupSuccessComponent.prototype.ngOnInit = function () {
    };
    SignupSuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup-success',
            template: __webpack_require__("./src/app/iot/signup/signup-success/signup-success.component.html"),
            styles: [__webpack_require__("./src/app/iot/signup/signup-success/signup-success.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupSuccessComponent);
    return SignupSuccessComponent;
}());



/***/ }),

/***/ "./src/app/iot/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<app-form-holder title=\"Signup\" [isRequesting]=\"isRequesting\" (submit)=\"signup();\">\n  <app-input\n    name=\"firstname\"\n    [isRequesting]=\"isRequesting\"\n    [response]=\"response\"\n    (change)=\"changeInput('firstname', $event)\"\n    placeholder=\"Your firstname\">\n  </app-input>\n  <app-input\n    name=\"lastname\"\n    [isRequesting]=\"isRequesting\"\n    [response]=\"response\"\n    (change)=\"changeInput('lastname', $event)\"\n    placeholder=\"Your lastname\">\n  </app-input>\n  <app-input\n    name=\"email\"\n    icon=\"email\"\n    type=\"email\"\n    [isRequesting]=\"isRequesting\"\n    [response]=\"response\"\n    (change)=\"changeInput('email', $event)\"\n    placeholder=\"Your email\">\n  </app-input>\n  <app-input\n    icon=\"vpn_key\"\n    name=\"password\"\n    type=\"password\"\n    [isRequesting]=\"isRequesting\"\n    [response]=\"response\"\n    (change)=\"changeInput('password', $event)\"\n    placeholder=\"Your password\">\n  </app-input>\n\n  <app-input\n    icon=\"vpn_key\"\n    name=\"password2\"\n    type=\"password\"\n    [isRequesting]=\"isRequesting\"\n    [response]=\"response\"\n    (change)=\"changeInput('password2', $event)\"\n    placeholder=\"Repeat Your password\">\n  </app-input>\n  <a routerLink='/login' class=\"link\">Or signin now.</a>\n  <div class=\"login-form-footer\">\n    <a (click)=\"signup()\" class=\"btn-block btn btn-primary\">Sign up</a>\n  </div>\n</app-form-holder>\n"

/***/ }),

/***/ "./src/app/iot/signup/signup.component.scss":
/***/ (function(module, exports) {

module.exports = ".login-form-footer {\n  padding: 25px;\n  margin-top: 25px;\n  margin-left: -25px;\n  margin-right: -25px;\n  margin-bottom: -25px;\n  border-radius: 0 0 4px 4px; }\n  .login-form-footer .btn {\n    padding: 10px 20px !important;\n    font-size: 16px !important;\n    font-weight: 400 !important; }\n"

/***/ }),

/***/ "./src/app/iot/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_services_requests_service__ = __webpack_require__("./src/app/core/services/requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(requests, router) {
        this.requests = requests;
        this.router = router;
        this.response = null;
        this.formErrors = [];
        this.isRequesting = false;
        this.form = {
            firstname: '',
            lastname: '',
            password: '',
            password2: '',
            email: '',
        };
        this.formErrors = [];
    }
    SignupComponent.prototype.findFieldErrorMessage = function (fieldName) {
        var error = this.formErrors.find(function (x) { return x.field === fieldName; });
        return error ? error.message : '';
    };
    SignupComponent.prototype.changeInput = function (field, value) {
        if (typeof value !== 'string') {
            return value;
        }
        this.form[field] = value;
    };
    SignupComponent.prototype.signup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.response = null;
                        this.isRequesting = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.requests.createUser(this.form)];
                    case 2:
                        result = _a.sent();
                        this.isRequesting = false;
                        this.response = result;
                        if (result.error && result.error.errors) {
                            this.formErrors = result.error.errors;
                        }
                        if (result.data && result.data.items && result.data.items.length) {
                            this.router.navigateByUrl('/signup-success');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.isRequesting = false;
                        alert('Unexpected error occured.');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/iot/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/iot/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_core_services_requests_service__["a" /* RequestsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/iot/widgets/full-widget/full-widget.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"flex-item single-large-icon\">\n  <i [ngClass]=\" 'icon icon-thermometer-' + thermometerValue \"></i>  \n</div>\n \n<div class=\"flex-item large-value-item\">\n    <div class=\"value\">22.8<sup>C</sup></div>\n    <div class=\"title\">Temperature</div>\n</div>\n"

/***/ }),

/***/ "./src/app/iot/widgets/full-widget/full-widget.component.scss":
/***/ (function(module, exports) {

module.exports = ".single-large-icon {\n  text-align: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .single-large-icon .icon {\n    color: white;\n    font-size: 45px;\n    margin-top: 10px;\n    display: inline-block; }\n  .large-value-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .large-value-item sup {\n    top: -12px;\n    font-size: 12px; }\n  .large-value-item .value, .large-value-item .title {\n    color: white;\n    text-align: center; }\n  .large-value-item .value {\n    font-size: 30px; }\n"

/***/ }),

/***/ "./src/app/iot/widgets/full-widget/full-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullWidgetComponent = /** @class */ (function () {
    function FullWidgetComponent() {
    }
    FullWidgetComponent.prototype.ngOnInit = function () {
        this.thermometerValue = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(0, 4);
    };
    FullWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            /* tslint:disable-next-line */
            selector: '[app-full-widget]',
            template: __webpack_require__("./src/app/iot/widgets/full-widget/full-widget.component.html"),
            styles: [__webpack_require__("./src/app/iot/widgets/full-widget/full-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FullWidgetComponent);
    return FullWidgetComponent;
}());



/***/ }),

/***/ "./src/app/iot/widgets/large-icon-widget/large-icon-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"large-icon-widget\">\n    <i class=\"icon icon-adjust\"></i>\n    <span class=\"value\">10˚</span>\n</div>"

/***/ }),

/***/ "./src/app/iot/widgets/large-icon-widget/large-icon-widget.component.scss":
/***/ (function(module, exports) {

module.exports = ".large-icon-widget {\n  text-align: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding-bottom: 15px; }\n  .large-icon-widget .value, .large-icon-widget .icon {\n    font-size: 42px;\n    color: white; }\n"

/***/ }),

/***/ "./src/app/iot/widgets/large-icon-widget/large-icon-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LargeIconWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LargeIconWidgetComponent = /** @class */ (function () {
    function LargeIconWidgetComponent() {
    }
    LargeIconWidgetComponent.prototype.ngOnInit = function () {
    };
    LargeIconWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            /* tslint:disable-next-line */
            selector: '[app-large-icon-widget]',
            template: __webpack_require__("./src/app/iot/widgets/large-icon-widget/large-icon-widget.component.html"),
            styles: [__webpack_require__("./src/app/iot/widgets/large-icon-widget/large-icon-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LargeIconWidgetComponent);
    return LargeIconWidgetComponent;
}());



/***/ }),

/***/ "./src/app/iot/widgets/large-value-widget/large-value-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"large-value-item\">\n    <div class=\"value\">{{value}}<sup>%</sup></div>\n    <div class=\"title\">Humidity</div>\n</div>"

/***/ }),

/***/ "./src/app/iot/widgets/large-value-widget/large-value-widget.component.scss":
/***/ (function(module, exports) {

module.exports = ".large-value-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .large-value-item sup {\n    top: -12px;\n    font-size: 12px; }\n  .large-value-item .value, .large-value-item .title {\n    color: white;\n    text-align: center; }\n  .large-value-item .value {\n    font-size: 30px; }\n"

/***/ }),

/***/ "./src/app/iot/widgets/large-value-widget/large-value-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LargeValueWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LargeValueWidgetComponent = /** @class */ (function () {
    function LargeValueWidgetComponent() {
    }
    LargeValueWidgetComponent.prototype.ngOnInit = function () {
        this.value = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["random"])(20, 90);
    };
    LargeValueWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            /* tslint:disable-next-line */
            selector: '[app-large-value-widget]',
            template: __webpack_require__("./src/app/iot/widgets/large-value-widget/large-value-widget.component.html"),
            styles: [__webpack_require__("./src/app/iot/widgets/large-value-widget/large-value-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LargeValueWidgetComponent);
    return LargeValueWidgetComponent;
}());



/***/ }),

/***/ "./src/app/iot/widgets/medium-icon-widget/medium-icon-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"medium-icon-widget\">\n    <div class='title'>Wind</div>\n    <i class=\"icon icon-adjust\"></i>\n    <div class=\"value\">10 km/h</div>\n</div>"

/***/ }),

/***/ "./src/app/iot/widgets/medium-icon-widget/medium-icon-widget.component.scss":
/***/ (function(module, exports) {

module.exports = ".medium-icon-widget {\n  border-right: 1px solid rgba(255, 255, 255, 0.3);\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .medium-icon-widget:last-child {\n    border-right: none; }\n  .medium-icon-widget .value, .medium-icon-widget .icon, .medium-icon-widget .title, .medium-icon-widget > span {\n    display: block;\n    text-align: center;\n    font-size: 11px;\n    color: white; }\n  .medium-icon-widget > span {\n    font-size: 22px;\n    font-weight: bold;\n    padding: 5px 0; }\n  .medium-icon-widget .icon {\n    font-size: 22px;\n    -webkit-animation: spin 9s linear infinite;\n    animation: spin 9s linear infinite; }\n"

/***/ }),

/***/ "./src/app/iot/widgets/medium-icon-widget/medium-icon-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediumIconWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediumIconWidgetComponent = /** @class */ (function () {
    function MediumIconWidgetComponent() {
    }
    MediumIconWidgetComponent.prototype.ngOnInit = function () {
    };
    MediumIconWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            /* tslint:disable-next-line */
            selector: '[app-medium-icon-widget]',
            template: __webpack_require__("./src/app/iot/widgets/medium-icon-widget/medium-icon-widget.component.html"),
            styles: [__webpack_require__("./src/app/iot/widgets/medium-icon-widget/medium-icon-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MediumIconWidgetComponent);
    return MediumIconWidgetComponent;
}());



/***/ }),

/***/ "./src/app/iot/widgets/widgets.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-header [title]=\"'Widgets ' + widgets.length\" icon=\"icon icon-camera-alt\"></app-page-header>\n<div class=\"page-container\">\n  <div class=\"page-description\">\n    <p>\n      You can define widgets on devices list, clicking on each device pin, and set a alias name.\n      Then, you will be able to control them.\n    </p>\n  </div>\n  <app-switch-widgets class=\"col-md-6 col-sm-12\" [widget]=\"widget\" *ngFor=\"let widget of widgets\"></app-switch-widgets>\n</div>"

/***/ }),

/***/ "./src/app/iot/widgets/widgets.component.scss":
/***/ (function(module, exports) {

module.exports = ".page-container {\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/iot/widgets/widgets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetsComponent = /** @class */ (function () {
    function WidgetsComponent(store) {
        this.store = store;
        // Initialize private variables
    }
    WidgetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('widgets').subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widgets',
            template: __webpack_require__("./src/app/iot/widgets/widgets.component.html"),
            styles: [__webpack_require__("./src/app/iot/widgets/widgets.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], WidgetsComponent);
    return WidgetsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    hmr: false
};


/***/ }),

/***/ "./src/hmr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hmrBootstrap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);


var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = Object(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__("./src/hmr.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
var bootstrap = function () { return Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]); };
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].hmr) {
    if (false) {
        hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.error('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map