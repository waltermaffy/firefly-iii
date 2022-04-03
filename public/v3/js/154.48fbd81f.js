"use strict";(self["webpackChunkfirefly_iii"]=self["webpackChunkfirefly_iii"]||[]).push([[154],{154:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var i=a(3673),n=a(2323);const s=(0,i.Uk)("Edit"),o=(0,i.Uk)("Delete");function r(e,t,a,r,l,p){const u=(0,i.up)("q-th"),d=(0,i.up)("q-tr"),g=(0,i.up)("router-link"),c=(0,i.up)("q-td"),m=(0,i.up)("q-item-label"),h=(0,i.up)("q-item-section"),f=(0,i.up)("q-item"),w=(0,i.up)("q-list"),b=(0,i.up)("q-btn-dropdown"),y=(0,i.up)("q-table"),k=(0,i.up)("q-fab-action"),q=(0,i.up)("q-fab"),_=(0,i.up)("q-page-sticky"),Z=(0,i.up)("q-page"),W=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(Z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(y,{title:e.$t("firefly.subscriptions"),rows:l.rows,columns:l.columns,"row-key":"id",onRequest:p.onRequest,pagination:l.pagination,"onUpdate:pagination":t[0]||(t[0]=e=>l.pagination=e),loading:l.loading,class:"q-ma-md"},{header:(0,i.w5)((e=>[(0,i.Wm)(d,{props:e},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cols,(t=>((0,i.wg)(),(0,i.j4)(u,{key:t.name,props:e},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,i.w5)((e=>[(0,i.Wm)(d,{props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{key:"name",props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{to:{name:"subscriptions.show",params:{id:e.row.id}},class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.row.name),1)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,i.Wm)(c,{key:"menu",props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{color:"primary",label:"Actions",size:"sm"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[(0,i.wy)(((0,i.wg)(),(0,i.j4)(f,{clickable:"",to:{name:"subscriptions.edit",params:{id:e.row.id}}},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[s])),_:1})])),_:1})])),_:2},1032,["to"])),[[W]]),(0,i.wy)(((0,i.wg)(),(0,i.j4)(f,{clickable:"",onClick:t=>p.deleteSubscription(e.row.id,e.row.name)},{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[o])),_:1})])),_:1})])),_:2},1032,["onClick"])),[[W]])])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["title","rows","columns","onRequest","pagination","loading"]),(0,i.Wm)(_,{position:"bottom-right",offset:[18,18]},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{label:"Actions",square:"","vertical-actions-align":"right","label-position":"left",color:"green",icon:"fas fa-chevron-up",direction:"up"},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{color:"primary",square:"",to:{name:"subscriptions.create",params:{type:"asset"}},icon:"fas fa-exchange-alt",label:"New subscription"},null,8,["to"])])),_:1})])),_:1})])),_:1})}var l=a(3617),p=a(5474);class u{list(e,t){let a="/api/v1/bills";return p.api.get(a,{params:{page:e,cache:t}})}}var d=a(2017);const g={name:"Index",computed:{...(0,l.Se)("fireflyiii",["getRange","getCacheKey","getListPageSize"])},created(){this.pagination.rowsPerPage=this.getListPageSize},mounted(){if(this.type=this.$route.params.type,null===this.getRange.start||null===this.getRange.end){const e=(0,l.oR)();e.subscribe(((e,t)=>{"fireflyiii/setRange"===e.type&&(this.range={start:e.payload.start,end:e.payload.end},this.triggerUpdate())}))}null!==this.getRange.start&&null!==this.getRange.end&&(this.range={start:this.getRange.start,end:this.getRange.end},this.triggerUpdate())},data(){return{rows:[],pagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:5,rowsNumber:100},loading:!1,columns:[{name:"name",label:"Name",field:"name",align:"left"},{name:"menu",label:" ",field:"menu",align:"right"}]}},methods:{onRequest:function(e){this.page=e.pagination.page,this.triggerUpdate()},deleteSubscription:function(e,t){this.$q.dialog({title:"Confirm",message:'Do you want to delete subscriptions "'+t+'"? Transactions linked to this subscription will not be deleted.',cancel:!0,persistent:!0}).onOk((()=>{this.destroySubscription(e)}))},destroySubscription:function(e){new d.Z("bills").destroy(e).then((()=>{this.$store.dispatch("fireflyiii/refreshCacheKey"),this.triggerUpdate()}))},triggerUpdate:function(){if(this.loading)return;if(null===this.range.start||null===this.range.end)return;this.loading=!0;const e=new u;this.rows=[],e.list(this.page,this.getCacheKey).then((e=>{this.pagination.rowsPerPage=e.data.meta.pagination.per_page,this.pagination.rowsNumber=e.data.meta.pagination.total,this.pagination.page=this.page;for(let t in e.data.data)if(e.data.data.hasOwnProperty(t)){let a=e.data.data[t],i={id:a.id,name:a.attributes.name};this.rows.push(i)}this.loading=!1}))}}};var c=a(4260),m=a(4379),h=a(4993),f=a(8186),w=a(2414),b=a(3884),y=a(2226),k=a(7011),q=a(3414),_=a(2035),Z=a(2350),W=a(4264),Q=a(9200),R=a(9975),P=a(677),U=a(7518),C=a.n(U);const S=(0,c.Z)(g,[["render",r]]),v=S;C()(g,"components",{QPage:m.Z,QTable:h.Z,QTr:f.Z,QTh:w.Z,QTd:b.Z,QBtnDropdown:y.Z,QList:k.Z,QItem:q.Z,QItemSection:_.Z,QItemLabel:Z.Z,QPageSticky:W.Z,QFab:Q.Z,QFabAction:R.Z}),C()(g,"directives",{ClosePopup:P.Z})}}]);