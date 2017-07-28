/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './home';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/components/toast/toast';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from 'ionic-angular/components/app/app';
import * as import20 from 'ionic-angular/components/toolbar/toolbar';
import * as import21 from 'ionic-angular/util/keyboard';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from 'ionic-angular/components/tabs/tabs';
import * as import24 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import25 from 'ionic-angular/components/navbar/navbar';
import * as import26 from 'ionic-angular/components/content/content';
export var Wrapper_HomePage = (function () {
    function Wrapper_HomePage(p0, p1) {
        this.changed = false;
        this.context = new import0.HomePage(p0, p1);
    }
    Wrapper_HomePage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_HomePage;
}());
var renderType_HomePage_Host = null;
var _View_HomePage_Host0 = (function (_super) {
    __extends(_View_HomePage_Host0, _super);
    function _View_HomePage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage_Host0, renderType_HomePage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-home', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HomePage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HomePage_0_4 = new Wrapper_HomePage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.ToastController));
        this._appEl_0.initComponent(this._HomePage_0_4.context, [], compView_0);
        compView_0.create(this._HomePage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HomePage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HomePage) && (0 === requestNodeIndex))) {
            return this._HomePage_0_4.context;
        }
        return notFoundResult;
    };
    _View_HomePage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._HomePage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_HomePage_Host0;
}(import1.AppView));
function viewFactory_HomePage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomePage_Host === null)) {
        (renderType_HomePage_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_HomePage_Host0(viewUtils, parentInjector, declarationEl);
}
export var HomePageNgFactory = new import11.ComponentFactory('page-home', viewFactory_HomePage_Host0, import0.HomePage);
var styles_HomePage = [];
var renderType_HomePage = null;
var _View_HomePage0 = (function (_super) {
    __extends(_View_HomePage0, _super);
    function _View_HomePage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage0, renderType_HomePage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'head', null);
        this._el_1 = this.renderer.createElement(this._el_0, 'meta', null);
        this.renderer.setElementAttribute(this._el_1, 'charset', 'utf-8');
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_3_3 = new import12.Wrapper_Header(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_3), this.renderer, this.parentInjector.get(import18.ViewController, null));
        this._text_4 = this.renderer.createText(this._el_3, '\n  ', null);
        this._el_5 = this.renderer.createElement(this._el_3, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_5, 'class', 'toolbar');
        this._appEl_5 = new import3.AppElement(5, 3, this, this._el_5);
        var compView_5 = import13.viewFactory_Navbar0(this.viewUtils, this.injector(5), this._appEl_5);
        this._Navbar_5_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import19.App), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_5), this.renderer);
        this._appEl_5.initComponent(this._Navbar_5_4.context, [], compView_5);
        this._text_6 = this.renderer.createText(null, '\n    ', null);
        this._el_7 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_7 = new import3.AppElement(7, 5, this, this._el_7);
        var compView_7 = import14.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(7), this._appEl_7);
        this._ToolbarTitle_7_4 = new import14.Wrapper_ToolbarTitle(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_7), this.renderer, this.parentInjector.get(import20.Toolbar, null), this._Navbar_5_4.context);
        this._appEl_7.initComponent(this._ToolbarTitle_7_4.context, [], compView_7);
        this._text_8 = this.renderer.createText(null, '\n      Ionic Blank\n    ', null);
        compView_7.create(this._ToolbarTitle_7_4.context, [[].concat([this._text_8])], null);
        this._text_9 = this.renderer.createText(null, '\n  ', null);
        compView_5.create(this._Navbar_5_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_6,
                this._el_7,
                this._text_9
            ])
        ], null);
        this._text_10 = this.renderer.createText(this._el_3, '\n', null);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_12 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_12, 'padding', '');
        this._appEl_12 = new import3.AppElement(12, null, this, this._el_12);
        var compView_12 = import15.viewFactory_Content0(this.viewUtils, this.injector(12), this._appEl_12);
        this._Content_12_4 = new import15.Wrapper_Content(this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_12), this.renderer, this.parentInjector.get(import19.App), this.parentInjector.get(import21.Keyboard), this.parentInjector.get(import22.NgZone), this.parentInjector.get(import18.ViewController, null), this.parentInjector.get(import23.Tabs, null));
        this._appEl_12.initComponent(this._Content_12_4.context, [], compView_12);
        this._text_13 = this.renderer.createText(null, '\n    ', null);
        this._el_14 = this.renderer.createElement(null, 'button', null);
        this._text_15 = this.renderer.createText(this._el_14, 'TESTE BLE', null);
        this._text_16 = this.renderer.createText(null, '\n  ', null);
        this._el_17 = this.renderer.createElement(null, 'h1', null);
        this._text_18 = this.renderer.createText(this._el_17, '', null);
        this._text_19 = this.renderer.createText(null, '\n', null);
        compView_12.create(this._Content_12_4.context, [
            [],
            [].concat([
                this._text_13,
                this._el_14,
                this._text_16,
                this._el_17,
                this._text_19
            ]),
            []
        ], null);
        this._text_20 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_14, 'click', this.eventHandler(this._handle_click_14_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20
        ], [disposable_0], []);
        return null;
    };
    _View_HomePage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.ToolbarTitle) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._ToolbarTitle_7_4.context;
        }
        if (((token === import25.Navbar) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Navbar_5_4.context;
        }
        if (((token === import20.Header) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._Header_3_3.context;
        }
        if (((token === import26.Content) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Content_12_4.context;
        }
        return notFoundResult;
    };
    _View_HomePage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_3_3.detectChangesInternal(this, this._el_3, throwOnChange);
        this._Navbar_5_4.detectChangesInternal(this, this._el_5, throwOnChange);
        if (this._ToolbarTitle_7_4.detectChangesInternal(this, this._el_7, throwOnChange)) {
            this._appEl_7.componentView.markAsCheckOnce();
        }
        if (this._Content_12_4.detectChangesInternal(this, this._el_12, throwOnChange)) {
            this._appEl_12.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Navbar_5_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_5, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_5_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_5, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_12_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_12, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_4 = import4.interpolate(1, '', this.context.heartRate, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_18, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_5_4.context.ngAfterViewInit();
            }
        }
    };
    _View_HomePage0.prototype.destroyInternal = function () {
        this._Content_12_4.context.ngOnDestroy();
    };
    _View_HomePage0.prototype._handle_click_14_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.bleConnect() !== false);
        return (true && pd_0);
    };
    return _View_HomePage0;
}(import1.AppView));
export function viewFactory_HomePage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomePage === null)) {
        (renderType_HomePage = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_HomePage, {}));
    }
    return new _View_HomePage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=home.ngfactory.js.map