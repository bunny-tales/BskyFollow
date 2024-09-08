import './polyfills.server.mjs';
import{A as o,B as M,C as P,D as ie,E as De,F as d,G as Me,H as N,I as ne,J as re,K as se,L as oe,M as k,O as we,S as Ae,U as Ee,W as Fe,X as j,Y as p,Z as Ie,_ as ae,a as ge,aa as Oe,b as me,ba as xe,c as ve,ca as Se,d as ye,da as T,e as Z,ea as R,f as X,fa as Pe,g as Y,ga as Ne,h as g,ha as ke,i as _e,ia as je,j as O,k as K,l as m,la as Te,m as Ce,n as Ve,o as x,p as J,pa as Re,q as Q,r as u,s as a,sa as Ge,t as ee,u as S,v as D,w as te,x as f,y as be,z as l}from"./chunk-LDXUK4CX.mjs";import{a as c,b as h,h as b}from"./chunk-5XUXGTUW.mjs";var G=class t{title="bskyFollow";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=O({type:t,selectors:[["app-root"]],standalone:!0,features:[k],decls:4,vars:0,consts:[[1,"brand"]],template:function(i,n){i&1&&(l(0,"div",0)(1,"h2"),d(2,"BSky Follow"),o()(),M(3,"router-outlet"))},dependencies:[Re],styles:[".brand[_ngcontent-%COMP%]{display:flex;flex:1;background-color:#141414;justify-content:center}"]})};var ze=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(a(ee),a(J))},e.\u0275dir=m({type:e});let t=e;return t})(),dt=(()=>{let e=class e extends ze{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=Ve(e)))(s||e)}})(),e.\u0275dir=m({type:e,features:[D]});let t=e;return t})(),Ze=new g("");var ht={provide:Ze,useExisting:Z(()=>$),multi:!0};function ft(){let t=ae()?ae().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var pt=new g(""),$=(()=>{let e=class e extends ze{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ft())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(a(ee),a(J),a(pt,8))},e.\u0275dir=m({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&P("input",function(V){return s._handleInput(V.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(V){return s._compositionEnd(V.target.value)})},features:[oe([ht]),D]});let t=e;return t})();var gt=new g(""),mt=new g("");function Xe(t){return t!=null}function Ye(t){return we(t)?me(t):t}function Ke(t){let e={};return t.forEach(i=>{e=i!=null?c(c({},e),i):e}),Object.keys(e).length===0?null:e}function Je(t,e){return e.map(i=>i(t))}function vt(t){return!t.validate}function Qe(t){return t.map(e=>vt(e)?e:i=>e.validate(i))}function yt(t){if(!t)return null;let e=t.filter(Xe);return e.length==0?null:function(i){return Ke(Je(i,e))}}function et(t){return t!=null?yt(Qe(t)):null}function _t(t){if(!t)return null;let e=t.filter(Xe);return e.length==0?null:function(i){let n=Je(i,e).map(Ye);return ye(n).pipe(ve(Ke))}}function tt(t){return t!=null?_t(Qe(t)):null}function Ue(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ct(t){return t._rawValidators}function Vt(t){return t._rawAsyncValidators}function ue(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function Be(t,e){let i=ue(e);return ue(t).forEach(r=>{B(i,r)||i.push(r)}),i}function He(t,e){return ue(e).filter(i=>!B(t,i))}var H=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=et(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=tt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},ce=class extends H{get formDirective(){return null}get path(){return null}},I=class extends H{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},de=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},bt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},mi=h(c({},bt),{"[class.ng-submitted]":"isSubmitted"}),it=(()=>{let e=class e extends de{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(a(I,2))},e.\u0275dir=m({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&be("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[D]});let t=e;return t})();var w="VALID",U="INVALID",v="PENDING",A="DISABLED",_=class{},L=class extends _{constructor(e,i){super(),this.value=e,this.source=i}},E=class extends _{constructor(e,i){super(),this.pristine=e,this.source=i}},F=class extends _{constructor(e,i){super(),this.touched=e,this.source=i}},y=class extends _{constructor(e,i){super(),this.status=e,this.source=i}};function Dt(t){return(W(t)?t.validators:t)||null}function Mt(t){return Array.isArray(t)?et(t):t||null}function wt(t,e){return(W(e)?e.asyncValidators:t)||null}function At(t){return Array.isArray(t)?tt(t):t||null}function W(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var he=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=j(()=>this.statusReactive()),this.statusReactive=S(void 0),this._pristine=j(()=>this.pristineReactive()),this.pristineReactive=S(!0),this._touched=j(()=>this.touchedReactive()),this.touchedReactive=S(!1),this._events=new ge,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return p(this.statusReactive)}set status(e){p(()=>this.statusReactive.set(e))}get valid(){return this.status===w}get invalid(){return this.status===U}get pending(){return this.status==v}get disabled(){return this.status===A}get enabled(){return this.status!==A}get pristine(){return p(this.pristineReactive)}set pristine(e){p(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return p(this.touchedReactive)}set touched(e){p(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Be(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(He(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(He(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(h(c({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new F(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new F(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(h(c({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new E(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new E(!0,n))}markAsPending(e={}){this.status=v;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new y(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(h(c({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable(h(c({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new L(this.value,n)),this._events.next(new y(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(c({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(n=>{n.enable(h(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(c({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===v)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new L(this.value,i)),this._events.next(new y(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(h(c({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=Ye(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new y(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new x,this.statusChanges=new x}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(U)?U:w}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new E(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new F(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){W(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Mt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=At(this._rawAsyncValidators)}};var nt=new g("CallSetDisabledState",{providedIn:"root",factory:()=>fe}),fe="always";function Et(t,e){return[...e.path,t]}function Ft(t,e,i=fe){Ot(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),xt(t,e),Pt(t,e),St(t,e),It(t,e)}function Le(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function It(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function Ot(t,e){let i=Ct(t);e.validator!==null?t.setValidators(Ue(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Vt(t);e.asyncValidator!==null?t.setAsyncValidators(Ue(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Le(e._rawValidators,r),Le(e._rawAsyncValidators,r)}function xt(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&rt(t,e)})}function St(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&rt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function rt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Pt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Nt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function kt(t){return Object.getPrototypeOf(t.constructor)===dt}function jt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===$?i=s:kt(s)?n=s:r=s}),r||n||i||null}function $e(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function We(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Tt=class extends he{constructor(e=null,i,n){super(Dt(i),wt(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),W(i)&&(i.nonNullable||i.initialValueIsDefault)&&(We(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){$e(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){$e(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){We(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Rt={provide:I,useExisting:Z(()=>pe)},qe=Promise.resolve(),pe=(()=>{let e=class e extends I{constructor(n,r,s,C,V,ut){super(),this._changeDetectorRef=V,this.callSetDisabledState=ut,this.control=new Tt,this._registered=!1,this.name="",this.update=new x,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=jt(this,C)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Nt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ft(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){qe.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&Fe(r);qe.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Et(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(a(ce,9),a(gt,10),a(mt,10),a(Ze,10),a(Ee,8),a(nt,8))},e.\u0275dir=m({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[oe([Rt]),D,Ce]});let t=e;return t})();var Gt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=K({type:e}),e.\u0275inj=Y({});let t=e;return t})();var st=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:nt,useValue:n.callSetDisabledState??fe}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=K({type:e}),e.\u0275inj=Y({imports:[Gt]});let t=e;return t})();var q=class t{constructor(e){this.http=e}apiUrlFollows="https://public.api.bsky.app/xrpc/app.bsky.graph.getFollows";apiUrlFollowers="https://public.api.bsky.app/xrpc/app.bsky.graph.getFollowers";apiProfile="https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile";getFollows(e,i,n=null){let r=new R().set("actor",i).set("limit",100);n&&(r=r.set("cursor",n));let s=new T({Authorization:`Bearer ${e}`});return this.http.get(`${this.apiUrlFollows}`,{headers:s,params:r})}getFollowers(e,i,n=null){let r=new R().set("actor",i).set("limit",100);n&&(r=r.set("cursor",n));let s=new T({Authorization:`Bearer ${e}`});return this.http.get(`${this.apiUrlFollowers}`,{headers:s,params:r})}getProfile(e,i){let n=new R().set("actor",i),r=new T({Authorization:`Bearer ${e}`});return this.http.get(`${this.apiProfile}`,{headers:r,params:n})}static \u0275fac=function(i){return new(i||t)(_e(Pe))};static \u0275prov=X({token:t,factory:t.\u0275fac,providedIn:"root"})};function Ht(t,e){if(t&1&&(l(0,"div",10),M(1,"img",11),l(2,"div",12)(3,"h3"),d(4),o(),l(5,"span")(6,"b"),d(7,"Nick:"),o(),d(8),o()()()),t&2){let i=ie();u(),De("alt",i.subject.displayName),f("src",i.subject.avatar,Q),u(3),Me(i.subject.displayName),u(4),N(" ",i.subject.handle,"")}}function Lt(t,e){t&1&&(l(0,"h5"),d(1,"Aguarde"),o())}function $t(t,e){if(t&1&&(l(0,"h5"),d(1),o()),t&2){let i=ie();u(),N(" ",i.hasAlert,"")}}function Wt(t,e){if(t&1&&(l(0,"div",13),M(1,"img",14),l(2,"div",12)(3,"span")(4,"b"),d(5,"Nick: "),o(),d(6),o()()()),t&2){let i=e.$implicit;u(),f("src",i.avatar,Q),u(5),N(" ",i.handle,"")}}var z=class t{constructor(e){this.pesquisaService=e}token="";usuario="";hasAlert="";isLoading=!1;subject=null;followsData=[];followersHandles=new Set;missingFollowers=[];loadAllFollows(e=null){return b(this,null,function*(){let i=!0;for(;i;){let n=yield this.pesquisaService.getFollows(this.token,this.usuario,e).toPromise();n.follows.forEach(r=>{this.followsData.push({handle:r.handle,avatar:r.avatar||"default-avatar-url"})}),e=n.cursor||null,i=!!e}})}loadAllFollowers(e=null){return b(this,null,function*(){let i=!0;for(;i;){let n=yield this.pesquisaService.getFollowers(this.token,this.usuario,e).toPromise();n.followers.forEach(r=>{this.followersHandles.add(r.handle)}),e=n.cursor||null,i=!!e}})}getProfile(){return b(this,null,function*(){try{this.subject=yield this.pesquisaService.getProfile(this.token,this.usuario).toPromise(),console.log("Profile carregado:",this.subject)}catch(e){console.error("Erro ao carregar o profile:",e)}})}carregarDados(){return b(this,null,function*(){this.isLoading=!0;try{yield this.getProfile(),this.subject.followsCount<501?(yield this.loadAllFollows(),yield this.loadAllFollowers()):this.hasAlert="Somente contas com at\xE9 500 seguidores podem acessar essa fun\xE7\xE3o.",this.missingFollowers=this.followsData.filter(e=>!this.followersHandles.has(e.handle))}catch(e){console.error("Erro ao carregar os dados:",e)}finally{this.isLoading=!1}})}unfollow(e){console.log("Quem sabe vem a\xED")}static \u0275fac=function(i){return new(i||t)(a(q))};static \u0275cmp=O({type:t,selectors:[["app-unfollowers"]],standalone:!0,features:[k],decls:14,vars:6,consts:[[1,"container"],[1,"section-left"],[1,"one"],["placeholder","Insira o Token",1,"input",3,"ngModelChange","ngModel"],["placeholder","Insira o Nick",1,"input",3,"ngModelChange","ngModel"],[1,"btn",3,"click"],["class","two",4,"ngIf"],[1,"section-right"],[4,"ngIf"],["class","follow-item",4,"ngFor","ngForOf"],[1,"two"],[1,"avatar",3,"src","alt"],[1,"subject-info"],[1,"follow-item"],["alt","Avatar",1,"avatar",3,"src"]],template:function(i,n){i&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"input",3),se("ngModelChange",function(s){return re(n.token,s)||(n.token=s),s}),o(),l(4,"input",4),se("ngModelChange",function(s){return re(n.usuario,s)||(n.usuario=s),s}),o(),l(5,"button",5),P("click",function(){return n.carregarDados()}),d(6,"Pesquisar"),o()(),te(7,Ht,9,4,"div",6),o(),l(8,"div",7)(9,"h3"),d(10,"Mutuals que n\xE3o seguem de volta"),o(),te(11,Lt,2,0,"h5",8)(12,$t,2,1,"h5",8)(13,Wt,7,2,"div",9),o()()),i&2&&(u(3),ne("ngModel",n.token),u(),ne("ngModel",n.usuario),u(3),f("ngIf",n.subject),u(4),f("ngIf",n.isLoading),u(),f("ngIf",n.hasAlert),u(),f("ngForOf",n.missingFollowers))},dependencies:[st,$,it,pe,Se,Oe,xe],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:row}@media (max-width: 425px){.container[_ngcontent-%COMP%]{flex-direction:column}}.avatar[_ngcontent-%COMP%]{width:50px;height:50px;object-fit:cover;border-radius:50%}.section-left[_ngcontent-%COMP%], .section-right[_ngcontent-%COMP%]{flex:1}.section-left[_ngcontent-%COMP%]{width:30%}.section-left[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:20px}.section-left[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;padding:10px;margin-bottom:5px;border-radius:5px}.section-left[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border-radius:5px;padding:10px;background:#df3b57;color:#fff}.section-left[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background-color:#ee4b6a}.section-left[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem;border-radius:5px;background-color:#0f7173;color:#fff;margin:20px}.section-left[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{margin-right:1rem}.section-left[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]   .subject-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.25rem}@media (max-width: 425px){.section-left[_ngcontent-%COMP%]{width:100%}}.section-right[_ngcontent-%COMP%]{width:70%}.section-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;align-items:center;text-align:center}.section-right[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:center}.section-right[_ngcontent-%COMP%]   .follow-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1rem;border-radius:5px;background-color:#0f7173;color:#fff;margin:20px}.section-right[_ngcontent-%COMP%]   .follow-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{margin-right:1rem}.section-right[_ngcontent-%COMP%]   .follow-item[_ngcontent-%COMP%]   .subject-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.25rem}"]})};var ot=[{path:"",title:"Home",component:z}];var at={providers:[Ae({eventCoalescing:!0}),Ge(ot),je(),Ne()]};var qt={providers:[Te()]},lt=Ie(at,qt);var zt=()=>ke(G,lt),$i=zt;export{$i as a};
