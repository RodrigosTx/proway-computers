"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[899],{1899:(v,h,a)=>{a.r(h),a.d(h,{CarrinhoModule:()=>x});var l=a(6814),s=a(33),t=a(9468),d=a(8594),c=a(95);function C(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",6),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8," Quatidade: "),t.TgZ(9,"input",7),t.NdJ("ngModelChange",function(i){const u=t.CHM(n).$implicit;return t.KtG(u.quantidade=i)})("change",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.calcularTotal())}),t.qZA()(),t.TgZ(10,"button",8),t.NdJ("click",function(){const p=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.removerProdutoCarrinho(p.id))}),t._UZ(11,"i",9),t.qZA()()}if(2&o){const n=e.$implicit;t.xp6(1),t.Q6J("src",n.imagem,t.LSH),t.xp6(2),t.hij("",n.descricao," "),t.xp6(2),t.Oqu(t.xi3(6,4,n.preco,"BRL")),t.xp6(4),t.Q6J("ngModel",n.quantidade)}}function g(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"ul"),t.YNc(2,C,12,7,"li",3),t.qZA(),t.TgZ(3,"h2",4),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.comprar())}),t._uU(7,"Comprar"),t.qZA()()}if(2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.itensCarrinho),t.xp6(2),t.hij("Total: ",t.xi3(5,2,n.total,"BRL"),"")}}function m(o,e){1&o&&t._uU(0,"Nenhum produto foi adicionado ao carrinho")}const f=[{path:"",component:(()=>{class o{constructor(n,r){this.carrinhoService=n,this.router=r,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calcularTotal()}calcularTotal(){this.total=this.itensCarrinho.reduce((n,r)=>n+r.preco*r.quantidade,0)}removerProdutoCarrinho(n){this.itensCarrinho=this.itensCarrinho.filter(r=>r.id!==n),this.carrinhoService.removerProdutoCarrinho(n),this.calcularTotal()}comprar(){alert("Parab\xe9ns, voc\xea finalizou a sua compra!"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(d.e),t.Y36(s.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-tittle"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(n,r){if(1&n&&(t.TgZ(0,"h2",0),t._uU(1,"Carrinho"),t.qZA(),t.YNc(2,g,8,5,"div",1),t.YNc(3,m,1,0,"ng-template",null,2,t.W1O)),2&n){const i=t.MAs(4);t.xp6(2),t.Q6J("ngIf",r.itensCarrinho.length>0)("ngIfElse",i)}},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.On,l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),o})()}];let _=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(f),s.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,_,c.u5]}),o})()}}]);