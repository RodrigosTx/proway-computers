"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[283],{2283:(ye,F,M)=>{M.r(F),M.d(F,{ContatoModule:()=>ge});var O=M(6814),R=M(33),d=M(95),s=M(9468);function J(a,c){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa de no m\xednimo 4 caracteres. "),s.qZA())}function q(a,c){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa ser preenchido. "),s.qZA())}function U(a,c){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,J,2,0,"small",11),s.YNc(2,q,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.nome.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.nome.hasError("required"))}}function W(a,c){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa de no m\xednimo 10 caracteres. "),s.qZA())}function Y(a,c){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa ser preenchido. "),s.qZA())}function Q(a,c){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,W,2,0,"small",11),s.YNc(2,Y,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.assunto.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.assunto.hasError("required"))}}function z(a,c){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa de no m\xednimo 11 caracteres. "),s.qZA())}function G(a,c){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa ser preenchido. "),s.qZA())}function K(a,c){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,z,2,0,"small",11),s.YNc(2,G,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.telefone.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.telefone.hasError("required"))}}function X(a,c){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa ser um e-mail v\xe1lido. "),s.qZA())}function ee(a,c){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa ser preenchido. "),s.qZA())}function te(a,c){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,X,2,0,"small",11),s.YNc(2,ee,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.email.hasError("email")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.email.hasError("required"))}}function se(a,c){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa de no m\xednimo 20 caracteres. "),s.qZA())}function ie(a,c){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa ser preenchido. "),s.qZA())}function re(a,c){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,se,2,0,"small",11),s.YNc(2,ie,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.mensagem.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.mensagem.hasError("required"))}}const ae=[{path:"",component:(()=>{class a{constructor(e){this.fb=e,this.formContato=this.fb.group({nome:["",[d.kI.minLength(4),d.kI.required]],assunto:["",[d.kI.minLength(10),d.kI.required]],telefone:["",[d.kI.minLength(11),d.kI.required]],email:["",[d.kI.email,d.kI.required]],mensagem:["",[d.kI.minLength(20),d.kI.required]]})}enviarFormulario(){alert("A mensagem foi enviada")}}return a.\u0275fac=function(e){return new(e||a)(s.Y36(d.qu))},a.\u0275cmp=s.Xpm({type:a,selectors:[["app-contato"]],decls:18,vars:27,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite o seu nome","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 0 0000-0000","formControlName","telefone"],["type","email","placeholder","Digite o seu e-mail","formControlName","email"],["maxlength","300","rows","4","placeholder","Digite a sua mensagem","formControlName","mensagem"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.300361031368!2d-49.0703074!3d-26.9169772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18c3b4a71d65%3A0xa5ec9dd8406a6a7!2sProWay!5e0!3m2!1spt-BR!2sbr!4v1696886131182!5m2!1spt-BR!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(s.TgZ(0,"h2",0),s._uU(1,"Entre em contato"),s.qZA(),s.TgZ(2,"section",1)(3,"form",2),s.NdJ("ngSubmit",function(){return t.enviarFormulario()}),s._UZ(4,"input",3),s.YNc(5,U,3,2,"div",4),s._UZ(6,"input",5),s.YNc(7,Q,3,2,"div",4),s._UZ(8,"input",6),s.YNc(9,K,3,2,"div",4),s._UZ(10,"input",7),s.YNc(11,te,3,2,"div",4),s._UZ(12,"textarea",8),s.YNc(13,re,3,2,"div",4),s.TgZ(14,"button",9),s._uU(15,"Enviar"),s.qZA()(),s.TgZ(16,"address"),s._UZ(17,"iframe",10),s.qZA()()),2&e&&(s.xp6(3),s.Q6J("formGroup",t.formContato),s.xp6(1),s.ekj("valid",t.formContato.controls.nome.valid)("invalid",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.assunto.valid)("invalid",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.telefone.valid)("invalid",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.email.valid)("invalid",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.mensagem.valid)("invalid",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),s.xp6(1),s.Q6J("disabled",t.formContato.invalid))},dependencies:[O.O5,d._Y,d.Fj,d.JJ,d.JL,d.nD,d.sg,d.u],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),a})()}];let ne=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[R.Bz.forChild(ae),R.Bz]}),a})();const D=new s.OlP("ngx-mask config"),L=new s.OlP("new ngx-mask config"),j=new s.OlP("initial ngx-mask config"),le={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,apm:!1,leadZero:!1,keepCharacterPositions:!1,triggerOnMaskChange:!1,inputTransformFn:a=>a,outputTransformFn:a=>a,maskFilled:new s.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}};let oe=(()=>{class a{constructor(){this._config=(0,s.f3M)(D),this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.hiddenInput=this._config.hiddenInput,this.clearIfNotMatch=this._config.clearIfNotMatch,this.specialCharacters=this._config.specialCharacters,this.patterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime,this.leadZero=this._config.leadZero,this.apm=this._config.apm,this.inputTransformFn=this._config.inputTransformFn,this.outputTransformFn=this._config.outputTransformFn,this.keepCharacterPositions=this._config.keepCharacterPositions,this._shift=new Set,this.maskExpression="",this.actualValue="",this.showKeepCharacterExp="",this.shownMaskExpression="",this.deletedSpecialCharacter=!1,this._formatWithSeparators=(e,t,i,n)=>{let o=[],m="";if(Array.isArray(i)){const k=new RegExp(i.map(f=>"[\\^$.|?*+()".indexOf(f)>=0?`\\${f}`:f).join("|"));o=e.split(k),m=e.match(k)?.[0]??""}else o=e.split(i),m=i;const r=o.length>1?`${m}${o[1]}`:"";let l=o[0]??"";const p=this.separatorLimit.replace(/\s/g,"");p&&+p&&(l="-"===l[0]?`-${l.slice(1,l.length).slice(0,p.length)}`:l.slice(0,p.length));const v=/(\d+)(\d{3})/;for(;t&&v.test(l);)l=l.replace(v,"$1"+t+"$2");return void 0===n?l+r:0===n?l:l+r.substring(0,n+1)},this.percentage=e=>{const t=e.replace(",","."),i=Number(t);return!isNaN(i)&&i>=0&&i<=100},this.getPrecision=e=>{const t=e.split(".");return t.length>1?Number(t[t.length-1]):1/0},this.checkAndRemoveSuffix=e=>{for(let t=this.suffix?.length-1;t>=0;t--){const i=this.suffix.substring(t,this.suffix?.length);if(e.includes(i)&&t!==this.suffix?.length-1&&(t-1<0||!e.includes(this.suffix.substring(t-1,this.suffix?.length))))return e.replace(i,"")}return e},this.checkInputPrecision=(e,t,i)=>{if(t<1/0){if(Array.isArray(i)){const r=i.find(l=>l!==this.thousandSeparator);i=r||i[0]}const n=new RegExp(this._charToRegExpExpression(i)+`\\d{${t}}.*$`),o=e.match(n),m=(o&&o[0]?.length)??0;m-1>t&&(e=e.substring(0,e.length-(m-1-t))),0===t&&this._compareOrIncludes(e[e.length-1],i,this.thousandSeparator)&&(e=e.substring(0,e.length-1))}return e}}applyMaskWithPattern(e,t){const[i,n]=t;return this.customPattern=n,this.applyMask(e,i)}applyMask(e,t,i=0,n=!1,o=!1,m=(()=>{})){if(!t||"string"!=typeof e)return"";let r=0,l="",p=!1,v=!1,k=1,f=!1;e.slice(0,this.prefix.length)===this.prefix&&!this.showMaskTyped&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e)),"("===e&&this.prefix&&(e="");const g=e.toString().split("");if(this.allowNegativeNumbers&&"-"===e.slice(r,r+1)&&(l+=e.slice(r,r+1)),"IP"===t){const u=e.split(".");this.ipError=this._validIP(u),t="099.099.099.099"}const w=[];for(let u=0;u<e.length;u++)e[u]?.match("\\d")&&w.push(e[u]??"");if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==w.length&&14!==w.length,t=w.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)&&!o){e=this._stripToDecimal(e);const x=this.getPrecision(t);e=this.checkInputPrecision(e,x,this.decimalMarker)}const u="string"==typeof this.decimalMarker?this.decimalMarker:".";if(e.indexOf(u)>0&&!this.percentage(e.substring(0,e.indexOf(u)))){let x=e.substring(0,e.indexOf(u)-1);this.allowNegativeNumbers&&"-"===e.slice(r,r+1)&&!o&&(x=e.substring(0,e.indexOf(u))),e=`${x}${e.substring(e.indexOf(u),e.length)}`}let h="";h=this.allowNegativeNumbers&&"-"===e.slice(r,r+1)?e.slice(r+1,r+e.length):e,l=this.percentage(h)?this._splitPercentZero(e):this._splitPercentZero(e.substring(0,e.length-1))}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\]:";<>.?/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&e[1]!==this.thousandSeparator&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!o?e.slice(0,e.length-1):e,o&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const u=this._charToRegExpExpression(this.thousandSeparator);let h='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(u,"");if(Array.isArray(this.decimalMarker))for(const _ of this.decimalMarker)h=h.replace(this._charToRegExpExpression(_),"");else h=h.replace(this._charToRegExpExpression(this.decimalMarker),"");const x=new RegExp("["+h+"]");(e.match(x)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const S=this.getPrecision(t),N=(e=this.checkInputPrecision(e,S,this.decimalMarker)).replace(new RegExp(u,"g"),"");l=this._formatWithSeparators(N,this.thousandSeparator,this.decimalMarker,S);const y=l.indexOf(",")-e.indexOf(","),C=l.length-e.length;if(C>0&&l[i]!==this.thousandSeparator){v=!0;let _=0;do{this._shift.add(i+_),_++}while(_<C)}else l[i-1]===this.decimalMarker||-4===C||-3===C||","===l[i]?(this._shift.clear(),this._shift.add(i-1)):0!==y&&i>0&&!(l.indexOf(",")>=i&&i>3)||!(l.indexOf(".")>=i&&i>3)&&C<=0?(this._shift.clear(),v=!0,k=C,this._shift.add(i+=C)):this._shift.clear()}else for(let u=0,h=g[0];u<g.length&&r!==t.length;u++,h=g[u]??""){const x="*"in this.patterns;if(this._checkSymbolMask(h,t[r]??"")&&"?"===t[r+1])l+=h,r+=2;else if("*"===t[r+1]&&p&&this._checkSymbolMask(h,t[r+2]??""))l+=h,r+=3,p=!1;else if(this._checkSymbolMask(h,t[r]??"")&&"*"===t[r+1]&&!x)l+=h,p=!0;else if("?"===t[r+1]&&this._checkSymbolMask(h,t[r+2]??""))l+=h,r+=3;else if(this._checkSymbolMask(h,t[r]??"")){if("H"===t[r]&&(this.apm?Number(h)>9:Number(h)>2)){i+=1,r+=1,this._shiftStep(t,r,g.length),u--,this.leadZeroDateTime&&(l+="0");continue}if("h"===t[r]&&(this.apm?1===l.length&&Number(l)>1||"1"===l&&Number(h)>2||1===e.slice(r-1,r).length&&Number(e.slice(r-1,r))>2||"1"===e.slice(r-1,r)&&Number(h)>2:"2"===l&&Number(h)>3||("2"===l.slice(r-2,r)||"2"===l.slice(r-3,r)||"2"===l.slice(r-4,r)||"2"===l.slice(r-1,r))&&Number(h)>3&&r>10)){i+=1,r+=1,u--;continue}if(("m"===t[r]||"s"===t[r])&&Number(h)>5){i+=1,r+=1,this._shiftStep(t,r,g.length),u--,this.leadZeroDateTime&&(l+="0");continue}const S=31,N=e[r],y=e[r+1],C=e[r+2],_=e[r-1],Z=e[r-2],ke=e[r-3],b=e.slice(r-3,r-1),P=e.slice(r-1,r+1),E=e.slice(r,r+2),$=e.slice(r-2,r);if("d"===t[r]){const B="M0"===t.slice(0,2),H="M0"===t.slice(0,2)&&this.specialCharacters.includes(Z);if(Number(h)>3&&this.leadZeroDateTime||!B&&(Number(E)>S||Number(P)>S||this.specialCharacters.includes(y))||(H?Number(P)>S||!this.specialCharacters.includes(N)&&this.specialCharacters.includes(C)||this.specialCharacters.includes(N):Number(E)>S||this.specialCharacters.includes(y))){i+=1,r+=1,this._shiftStep(t,r,g.length),u--,this.leadZeroDateTime&&(l+="0");continue}}if("M"===t[r]){const H=0===r&&(Number(h)>2||Number(E)>12||this.specialCharacters.includes(y)),_e=t.slice(r+2,r+3),ve=b.includes(_e)&&(this.specialCharacters.includes(Z)&&Number(P)>12&&!this.specialCharacters.includes(N)||this.specialCharacters.includes(N)||this.specialCharacters.includes(ke)&&Number($)>12&&!this.specialCharacters.includes(_)||this.specialCharacters.includes(_)),Se=Number(b)<=S&&!this.specialCharacters.includes(b)&&this.specialCharacters.includes(_)&&(Number(E)>12||this.specialCharacters.includes(y)),Ce=Number(E)>12&&5===r||this.specialCharacters.includes(y)&&5===r,xe=Number(b)>S&&!this.specialCharacters.includes(b)&&!this.specialCharacters.includes($)&&Number($)>12,Me=Number(b)<=S&&!this.specialCharacters.includes(b)&&!this.specialCharacters.includes(_)&&Number(P)>12;if(Number(h)>1&&this.leadZeroDateTime||H||ve||Me||xe||Se||Ce&&!this.leadZeroDateTime){i+=1,r+=1,this._shiftStep(t,r,g.length),u--,this.leadZeroDateTime&&(l+="0");continue}}l+=h,r++}else" "===h&&" "===t[r]||"/"===h&&"/"===t[r]?(l+=h,r++):-1!==this.specialCharacters.indexOf(t[r]??"")?(l+=t[r],r++,this._shiftStep(t,r,g.length),u--):"9"===t[r]&&this.showMaskTyped?this._shiftStep(t,r,g.length):this.patterns[t[r]??""]&&this.patterns[t[r]??""]?.optional?(g[r]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&!this.patterns[t[r]??""]?.optional&&(l+=g[r]),t.includes("9*")&&t.includes("0*")&&r++,r++,u--):"*"===this.maskExpression[r+1]&&this._findSpecialChar(this.maskExpression[r+2]??"")&&this._findSpecialChar(h)===this.maskExpression[r+2]&&p||"?"===this.maskExpression[r+1]&&this._findSpecialChar(this.maskExpression[r+2]??"")&&this._findSpecialChar(h)===this.maskExpression[r+2]&&p?(r+=3,l+=h):this.showMaskTyped&&this.specialCharacters.indexOf(h)<0&&h!==this.placeHolderCharacter&&1===this.placeHolderCharacter.length&&(f=!0)}l.length+1===t.length&&-1!==this.specialCharacters.indexOf(t[t.length-1]??"")&&(l+=t[t.length-1]);let T=i+1;for(;this._shift.has(T);)k++,T++;let I=n&&!t.startsWith("separator")?r:this._shift.has(i)?k:0;f&&I--,m(I,v),k<0&&this._shift.clear();let V=!1;o&&(V=g.every(u=>this.specialCharacters.includes(u)));let A=`${this.prefix}${V?"":l}${this.suffix}`;if(0===l.length&&(A=this.dropSpecialCharacters?`${l}`:`${this.prefix}${l}`),l.includes("-")&&this.prefix&&this.allowNegativeNumbers){if(o&&"-"===l)return"";A=`-${this.prefix}${l.split("-").join("")}${this.suffix}`}return A}_findSpecialChar(e){return this.specialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.patterns=this.customPattern?this.customPattern:this.patterns,(this.patterns[t]?.pattern&&this.patterns[t]?.pattern.test(e))??!1}_stripToDecimal(e){return e.split("").filter((t,i)=>{const n="string"==typeof this.decimalMarker?t===this.decimalMarker:this.decimalMarker.includes(t);return t.match("^-?\\d")||t===this.thousandSeparator||n||"-"===t&&0===i&&this.allowNegativeNumbers}).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,i){const n=/[*?]/g.test(e.slice(0,t))?i:t;this._shift.add(n+this.prefix.length||0)}_compareOrIncludes(e,t,i){return Array.isArray(t)?t.filter(n=>n!==i).includes(e):e===t}_validIP(e){return!(4===e.length&&!e.some((t,i)=>e.length!==i+1?""===t||Number(t)>255:""===t||Number(t.substring(0,3))>255))}_splitPercentZero(e){const t=e.indexOf("string"==typeof this.decimalMarker?this.decimalMarker:".");if(-1===t){const i=parseInt(e,10);return isNaN(i)?"":i.toString()}{const i=parseInt(e.substring(0,t),10),n=e.substring(t+1),o=isNaN(i)?"":i.toString();return""===o?"":o+("string"==typeof this.decimalMarker?this.decimalMarker:".")+n}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac}),a})(),he=(()=>{class a extends oe{constructor(){super(...arguments),this.isNumberValue=!1,this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this._maskExpressionArray=[],this.triggerOnMaskChange=!1,this._emitValue=!1,this._previousValue="",this._currentValue="",this.onChange=e=>{},this.document=(0,s.f3M)(O.K0),this._config=(0,s.f3M)(D),this._elementRef=(0,s.f3M)(s.SBq,{optional:!0}),this._renderer=(0,s.f3M)(s.Qsj,{optional:!0})}applyMask(e,t,i=0,n=!1,o=!1,m=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const r=e&&"number"==typeof this.selStart?e[this.selStart]??"":"";let l="";if(void 0!==this.hiddenInput&&!this.writingValue){let f=e&&1===e.length?e.split(""):this.actualValue.split("");"object"==typeof this.selStart&&"object"==typeof this.selEnd?(this.selStart=Number(this.selStart),this.selEnd=Number(this.selEnd)):""!==e&&f.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>f.length?f.splice(this.selStart,0,r):e.length<f.length&&(f.length-e.length==1?f.splice(o?this.selStart-1:e.length-1,1):f.splice(this.selStart,this.selEnd-this.selStart))):f=[],this.showMaskTyped&&(this.hiddenInput||(e=this.removeMask(e))),l=this.actualValue.length&&f.length<=e.length?this.shiftTypedSymbols(f.join("")):e}if(n&&(this.hiddenInput||!this.hiddenInput)&&(l=e),this.deletedSpecialCharacter&&i&&(this.specialCharacters.includes(this.actualValue.slice(i,i+1))?i+=1:"M0"!==t.slice(i-1,i+1)&&(i-=2),this.deletedSpecialCharacter=!1),this.showMaskTyped&&1===this.placeHolderCharacter.length&&!this.leadZeroDateTime&&(e=this.removeMask(e)),l=this.maskChanged?e:l&&l.length?l:e,this.showMaskTyped&&this.keepCharacterPositions&&this.actualValue&&!n){const f=this.dropSpecialCharacters?this.removeMask(this.actualValue):this.actualValue;return this.formControlResult(f),this.actualValue?this.actualValue:this.prefix+this.maskIsShown+this.suffix}const p=super.applyMask(l,t,i,n,o,m);if(this.actualValue=this.getActualValue(p),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.specialCharacters=this.specialCharacters.filter(f=>!this._compareOrIncludes(f,this.decimalMarker,this.thousandSeparator))),(p||""===p)&&(this._previousValue=this._currentValue,this._currentValue=p,this._emitValue=this._previousValue!==this._currentValue||this.maskChanged||this._previousValue===this._currentValue&&n),this._emitValue&&this.formControlResult(p),!this.showMaskTyped||this.showMaskTyped&&this.hiddenInput)return this.hiddenInput?o?this.hideInput(p,this.maskExpression):this.hideInput(p,this.maskExpression)+this.maskIsShown.slice(p.length):p;const v=p.length,k=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const f=this._numberSkipedSymbols(p);return p+k.slice(v+f)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?p+k:p+k.slice(v)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let i=t.exec(e),n=0;for(;null!=i;)n+=1,i=t.exec(e);return n}applyValueChanges(e,t,i,n=(()=>{})){const o=this._elementRef?.nativeElement;o&&(o.value=this.applyMask(o.value,this.maskExpression,e,t,i,n),o!==this._getActiveElement()&&this.clearIfNotMatchFn())}hideInput(e,t){return e.split("").map((i,n)=>this.patterns&&this.patterns[t[n]??""]&&this.patterns[t[n]??""]?.symbol?this.patterns[t[n]??""]?.symbol:i).join("")}getActualValue(e){const t=e.split("").filter((i,n)=>{const o=this.maskExpression[n]??"";return this._checkSymbolMask(i,o)||this.specialCharacters.includes(o)&&i===o});return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((n,o)=>{if(this.specialCharacters.includes(e[o+1]??"")&&e[o+1]!==this.maskExpression[o+1])return t=n,e[o+1];if(t.length){const m=t;return t="",m}return n})||[]).join("")}numberToString(e){return!e&&0!==e||this.maskExpression.startsWith("separator")&&(this.leadZero||!this.dropSpecialCharacters)||this.maskExpression.startsWith("separator")&&this.separatorLimit.length>14&&String(e).length>14?String(e):Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}).replace("/-/","-")}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.placeHolderCharacter.length===this.maskExpression.length?this.placeHolderCharacter:this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef?.nativeElement;e&&this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(this.placeHolderCharacter,"").length&&(this.formElementProperty=["value",""],this.applyMask("",this.maskExpression))}set formElementProperty([e,t]){!this._renderer||!this._elementRef||Promise.resolve().then(()=>this._renderer?.setProperty(this._elementRef?.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(i=>this._findSpecialChar(i)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.specialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let i=0;i<e.length;i++){const n=e[i]??"";n&&n.match("\\d")&&t.push(n)}return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,i=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const n=[];for(let o=0;o<e.length;o++){const m=e[o]??"";m&&m.match("\\d")&&n.push(m)}return n.length<=3?t.slice(n.length,t.length):n.length>3&&n.length<=6?t.slice(n.length+1,t.length):n.length>6&&n.length<=9?t.slice(n.length+2,t.length):n.length>9&&n.length<11?t.slice(n.length+3,t.length):11===n.length?"":12===n.length?i.slice(17===e.length?16:15,i.length):n.length>12&&n.length<=14?i.slice(n.length+4,i.length):""}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){if(this.writingValue||!this.triggerOnMaskChange&&this.maskChanged)return this.maskChanged&&this.onChange(this.outputTransformFn(this._toNumber(this._checkSymbols(this._removeSuffix(this._removePrefix(e)))))),void(this.maskChanged=!1);Array.isArray(this.dropSpecialCharacters)?this.onChange(this.outputTransformFn(this._toNumber(this._checkSymbols(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))))):this.onChange(this.outputTransformFn(this._toNumber(this.dropSpecialCharacters||!this.dropSpecialCharacters&&this.prefix===e?this._checkSymbols(this._removeSuffix(this._removePrefix(e))):e)))}_toNumber(e){if(!this.isNumberValue||""===e||this.maskExpression.startsWith("separator")&&(this.leadZero||!this.dropSpecialCharacters))return e;if(String(e).length>16&&this.separatorLimit.length>14)return String(e);const t=Number(e);if(this.maskExpression.startsWith("separator")&&Number.isNaN(t)){const i=String(e).replace(",",".");return Number(i)}return Number.isNaN(t)?e:t}_removeMask(e,t){return this.maskExpression.startsWith("percent")&&e.includes(".")?e:e&&e.replace(this._regExpForRemove(t),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){const t=Array.isArray(this.dropSpecialCharacters)?this.specialCharacters.filter(i=>this.dropSpecialCharacters.includes(i)):this.specialCharacters;return this._removeMask(e,t)}_regExpForRemove(e){return new RegExp(e.map(t=>`\\${t}`).join("|"),"gi")}_replaceDecimalMarkerToDot(e){const t=Array.isArray(this.decimalMarker)?this.decimalMarker:[this.decimalMarker];return e.replace(this._regExpForRemove(t),".")}_checkSymbols(e){if(""===e)return e;this.maskExpression.startsWith("percent")&&","===this.decimalMarker&&(e=e.replace(",","."));const t=this._retrieveSeparatorPrecision(this.maskExpression),i=this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(e));return this.isNumberValue&&t?e===this.decimalMarker?null:this.separatorLimit.length>14?String(i):this._checkPrecision(this.maskExpression,i):i}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){const i=e.slice(10,11);return e.indexOf("2")>0||this.leadZero&&Number(i)>1?(","===this.decimalMarker&&this.leadZero&&(t=t.replace(",",".")),this.leadZero?Number(t).toFixed(Number(i)):Number(t).toFixed(2)):this.numberToString(t)}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,i,n)=>{if(this._start="{"===i?n:this._start,"}"!==i)return this._findSpecialChar(i)?t+i:t;this._end=n;const o=Number(e.slice(this._start+1,this._end)),m=new Array(o+1).join(e[this._start-1]);if(e.slice(0,this._start).length>1&&e.includes("S")){const r=e.slice(0,this._start-1);return r.includes("{")?t+m:r+t+m}return t+m},"")||e}currentLocaleDecimalMarker(){return 1.1.toLocaleString().substring(1,2)}}return a.\u0275fac=function(){let c;return function(t){return(c||(c=s.n5z(a)))(t||a)}}(),a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac}),a})();function ce(){const a=(0,s.f3M)(j),c=(0,s.f3M)(L);return c instanceof Function?{...a,...c()}:{...a,...c}}var pe=M(6593),fe=M(263);(0,pe.Cg)(fe.y,{providers:[function ue(a){return(0,s.MR2)(function me(a){return[{provide:L,useValue:a},{provide:j,useValue:le},{provide:D,useFactory:ce},he]}(a))}({validation:!1})]}).catch(a=>console.error(a));let ge=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[O.ez,ne,d.UX]}),a})()}}]);