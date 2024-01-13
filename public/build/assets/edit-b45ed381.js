import{a as p,d as f,f as c}from"./format-money-43e05102.js";import{G as g}from"./get-a29f6df7.js";import{p as m}from"./parse-downloaded-splits-4afea167.js";import{p as w,d as y,e as a,f as b,g as S,h as P,i as v,l as A,a as C,b as _,c as E,s as D,j as x,k as l,m as u}from"./splice-errors-into-transactions-9c9b99c0.js";import{i as r,m as B}from"./vendor-fca45885.js";import{d as T}from"./create-empty-split-fb5bda92.js";import"./get-94678769.js";class L{put(s,o){let e="/api/v2/transactions/"+parseInt(o.id);return p.put(e,s)}}const n=x();let U=function(){return{entries:[],formStates:{loadingCurrencies:!0,loadingBudgets:!0,loadingPiggyBanks:!0,loadingSubscriptions:!0,isSubmitting:!1,returnHereButton:!1,saveAsNewButton:!1,resetButton:!0,rulesButton:!0,webhooksButton:!0},formBehaviour:{formType:"edit",foreignCurrencyEnabled:!0},formData:{defaultCurrency:null,enabledCurrencies:[],nativeCurrencies:[],foreignCurrencies:[],budgets:[],piggyBanks:[],subscriptions:[]},groupProperties:{transactionType:"unknown",title:null,id:null,totalAmount:0},notifications:{error:{show:!1,text:"",url:""},success:{show:!1,text:"",url:""},wait:{show:!1,text:""}},submitTransaction(){this.notifications.error.show=!1,this.notifications.success.show=!1,this.notifications.wait.show=!1;for(let e in this.entries)this.entries.hasOwnProperty(e)&&(this.entries[e].errors=T());this.formStates.isSubmitting=!0;let t=w(this.entries,this.groupProperties.transactionType),s={group_title:this.groupProperties.title,fire_webhooks:this.formStates.webhooksButton,apply_rules:this.formStates.rulesButton,transactions:t};this.groupProperties.title===null&&t.length>1&&(s.group_title=t[0].description);let o=new L;console.log(s),o.put(s,{id:this.groupProperties.id}).then(e=>{const i=e.data.data;if(this.groupProperties.id=parseInt(i.id),this.groupProperties.title=i.attributes.group_title??i.attributes.transactions[0].description,y(this.groupProperties.id,i.attributes.transactions)>0){this.notifications.wait.show=!0,this.notifications.wait.text=r.t("firefly.wait_attachments");return}this.showMessageOrRedirectUser()}).catch(e=>{this.submitting=!1,console.log(e),typeof e.response<"u"&&this.parseErrors(e.response.data)})},filters:{source:[],destination:[]},addedSplit(){setTimeout(()=>{const t=function(s,o,e){return s.name_with_balance+'<br><small class="text-muted">'+r.t("firefly.account_type_"+s.type)+"</small>"};a({selector:"input.ac-source",serverUrl:n.account,filters:this.filters.source,onRenderItem:t,onChange:b,onSelectItem:S}),console.log("ok"),console.log(this.entries[0].source_account.alpine_name),a({selector:"input.ac-dest",serverUrl:n.account,filters:this.filters.destination,onRenderItem:t,onChange:P,onSelectItem:v}),a({selector:"input.ac-category",serverUrl:n.category,valueField:"id",labelField:"name",onChange:l,onSelectItem:l}),a({selector:"input.ac-description",serverUrl:n.description,valueField:"id",labelField:"description",onChange:u,onSelectItem:u})},250)},changedDateTime(t){console.warn("changedDateTime, event is not used")},changedDescription(t){console.warn("changedDescription, event is not used")},changedDestinationAccount(t){console.warn("changedDestinationAccount, event is not used")},changedSourceAccount(t){console.warn("changedSourceAccount, event is not used")},formattedTotalAmount(){return this.entries.length===0?c(this.groupProperties.totalAmount,"EUR"):c(this.groupProperties.totalAmount,this.entries[0].currency_code??"EUR")},getTags(t){return console.log("at get tags "+t),console.log(this.entries[t].tags),this.entries[t].tags??[]},getTransactionGroup(){this.entries=[];const t=window.location.href.split("/"),s=parseInt(t[t.length-1]);new g().show(s,{}).then(e=>{const i=e.data.data;this.groupProperties.id=parseInt(i.id),this.groupProperties.transactionType=i.attributes.transactions[0].type,this.groupProperties.title=i.attributes.title??i.attributes.transactions[0].description,this.entries=m(i.attributes.transactions),this.notifications.wait.show=!1}).then(()=>{this.groupProperties.totalAmount=0;for(let e in this.entries)this.entries.hasOwnProperty(e)&&(this.groupProperties.totalAmount=this.groupProperties.totalAmount+parseFloat(this.entries[e].amount),this.filters.source.push(this.entries[e].source_account.type),this.filters.destination.push(this.entries[e].source_account.type));console.log(this.filters),setTimeout(()=>{B.init("select.ac-tags",{allowClear:!0,server:n.tag,liveServer:!0,clearEnd:!0,allowNew:!0,notFoundMessage:r.t("firefly.nothing_found"),noCache:!0,fetchOptions:{headers:{"X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content}}})},150)})},init(){this.notifications.wait.show=!0,this.notifications.wait.text=r.t("firefly.wait_loading_transaction"),this.getTransactionGroup(),A().then(t=>{this.formStates.loadingCurrencies=!1,this.formData.defaultCurrency=t.defaultCurrency,this.formData.enabledCurrencies=t.enabledCurrencies,this.formData.nativeCurrencies=t.nativeCurrencies,this.formData.foreignCurrencies=t.foreignCurrencies}),C().then(t=>{this.formData.budgets=t,this.formStates.loadingBudgets=!1}),_().then(t=>{this.formData.piggyBanks=t,this.formStates.loadingPiggyBanks=!1}),E().then(t=>{this.formData.subscriptions=t,this.formStates.loadingSubscriptions=!1}),document.addEventListener("upload-success",t=>{this.processUpload(t),document.querySelectorAll("input[type=file]").value=""}),document.addEventListener("upload-error",t=>{this.processUploadError(t)}),document.addEventListener("location-move",t=>{this.entries[t.detail.index].latitude=t.detail.latitude,this.entries[t.detail.index].longitude=t.detail.longitude}),document.addEventListener("location-set",t=>{this.entries[t.detail.index].hasLocation=!0,this.entries[t.detail.index].latitude=t.detail.latitude,this.entries[t.detail.index].longitude=t.detail.longitude,this.entries[t.detail.index].zoomLevel=t.detail.zoomLevel}),document.addEventListener("location-zoom",t=>{this.entries[t.detail.index].hasLocation=!0,this.entries[t.detail.index].zoomLevel=t.detail.zoomLevel})},changedAmount(t){const s=parseInt(t.target.dataset.index);this.entries[s].amount=parseFloat(t.target.value),this.groupProperties.totalAmount=0;for(let o in this.entries)this.entries.hasOwnProperty(o)&&(this.groupProperties.totalAmount=this.groupProperties.totalAmount+parseFloat(this.entries[o].amount))},showMessageOrRedirectUser(){if(this.notifications.error.show=!1,this.notifications.success.show=!1,this.notifications.wait.show=!1,this.formStates.returnHereButton){this.notifications.success.show=!0,this.notifications.success.url="transactions/show/"+this.groupProperties.id,this.notifications.success.text=r.t("firefly.updated_journal_js",{description:this.groupProperties.title});return}window.location="transactions/show/"+this.groupProperties.id+"?transaction_group_id="+this.groupProperties.id+"&message=updated"},parseErrors(t){this.notifications.error.show=!0,this.notifications.success.show=!1,this.notifications.wait.show=!1,this.formStates.isSubmitting=!1,this.notifications.error.text=r.t("firefly.errors_submission",{errorMessage:t.message}),t.hasOwnProperty("errors")&&(this.entries=D(t.errors,this.entries))},processUpload(t){this.showMessageOrRedirectUser()},processUploadError(t){this.notifications.success.show=!1,this.notifications.wait.show=!1,this.notifications.error.show=!0,this.formStates.isSubmitting=!1,this.notifications.error.text=r.t("firefly.errors_upload"),console.error(t)}}},h={transactions:U,dates:f};function d(){Object.keys(h).forEach(t=>{console.log(`Loading page component "${t}"`);let s=h[t]();Alpine.data(t,()=>s)}),Alpine.start()}document.addEventListener("firefly-iii-bootstrapped",()=>{console.log("Loaded through event listener."),d()});window.bootstrapped&&(console.log("Loaded through window variable."),d());
