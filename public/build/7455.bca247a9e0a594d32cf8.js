"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7455],{776:(xt,st,e)=>{e.d(st,{B:()=>K});var t=e(74848),g=e(96540),E=e(42418),R=e(31678),Q=e(82843),J=e(23770),L=e(21607),V=e(57220),S=e(72399),h=e(49785),Z=e(88575),it=e(10880);const Y=({pathPrefix:u,className:d,readOnly:C=!1})=>{const{register:P}=(0,h.xW)();return(0,t.jsx)("div",{className:d,children:(0,t.jsx)(Z.D,{disabled:C,children:(0,t.jsx)(it.S,{...P(`${u}sendResolved`),label:"Send resolved",disabled:C,description:"Whether or not to notify about resolved alerts."})})})};var ot=e(18022);const k=Object.freeze({__id:"",sendResolved:!0,secureSettings:{},settings:{},secureFields:{},type:"email"}),r=L.r.map(u=>({dto:u})),K=({existing:u,alertManagerSourceName:d,config:C,readOnly:P=!1})=>{const M=(0,R.useDispatch)(),H=(0,V.AL)(d),[q]=(0,g.useMemo)(()=>u?(0,S.Iq)(u,L.r):[void 0,{}],[u]),_=async F=>{const rt=(0,S.QX)(F,k);await M((0,J.RW)({newConfig:(0,S.jS)(C,rt,u?.name),oldConfig:C,alertManagerSourceName:d,successMessage:u?"Contact point updated.":"Contact point created.",redirectPath:"/alerting/notifications"})).then(()=>{M(Q.m.util.invalidateTags(["AlertmanagerConfiguration"]))})},tt=(0,g.useMemo)(()=>C.alertmanager_config.receivers?.map(({name:F})=>F).filter(F=>F!==u?.name)??[],[C,u]),$=!P;return(0,t.jsxs)(t.Fragment,{children:[!H&&(0,t.jsx)(E.F,{title:"Info",severity:"info",children:"Note that empty string values will be replaced with global defaults where appropriate."}),(0,t.jsx)(ot.k,{isEditable:$,isTestable:$,config:C,onSubmit:_,initialValues:q,notifiers:r,alertManagerSourceName:d,defaultItem:k,takenReceiverNames:tt,commonSettingsComponent:Y})]})}},17430:(xt,st,e)=>{e.d(st,{a:()=>pt});var t=e(74848),g=e(96540),E=e(39558),R=e(42418),Q=e(31678),J=e(82843),L=e(23770),V=e(57220),S=e(72399),h=e(48205),Z=e(37534),it=e(59647),Y=e(49785),ot=e(88575),k=e(10880);const r=({pathPrefix:i,className:l,readOnly:c=!1})=>{const{register:n}=(0,Y.xW)();return(0,t.jsx)("div",{className:l,children:(0,t.jsx)(ot.D,{children:(0,t.jsx)(k.S,{...n(`${i}disableResolveMessage`),label:"Disable resolved message",description:"Disable the resolve message [OK] that is sent when alerting state returns to false",disabled:c})})})};var K=e(18022),u=e(32196),d=e(40845),C=e(37390),P=e(60029),M=e(94354),H=e(55852),q=e(55740),_=e(31099),tt=e(97171),$=(i=>(i.predefined="Predefined",i.custom="Custom",i))($||{});const F=Object.values($).map(i=>({label:i,value:i})),rt={annotations:[...q.kl],labels:[{key:"",value:""}]},ht=({isOpen:i,onDismiss:l,onTest:c})=>{const[n,s]=(0,g.useState)("Predefined"),a=(0,d.of)(Ct),p=(0,Y.mN)({defaultValues:rt,mode:"onBlur"}),W=j=>{if(n==="Custom"){const A={annotations:j.annotations.filter(({key:v,value:x})=>!!v&&!!x).reduce((v,{key:x,value:I})=>({...v,[x]:I}),{}),labels:j.labels.filter(({key:v,value:x})=>!!v&&!!x).reduce((v,{key:x,value:I})=>({...v,[x]:I}),{})};c(A)}else c()};return(0,t.jsxs)(C.a,{onDismiss:l,isOpen:i,title:"Test contact point",children:[(0,t.jsxs)("div",{className:a.section,children:[(0,t.jsx)(P.J,{children:"Notification message"}),(0,t.jsx)(M.z,{options:F,value:n,onChange:j=>s(j)})]}),(0,t.jsx)(Y.Op,{...p,children:(0,t.jsxs)("form",{onSubmit:p.handleSubmit(W),children:[n==="Predefined"&&(0,t.jsxs)("div",{className:a.section,children:["You will send a test notification that uses a predefined alert. If you have defined a custom template or message, for better results switch to ",(0,t.jsx)("strong",{children:"custom"})," notification message, from above."]}),n==="Custom"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:a.section,children:"You will send a test notification that uses the annotations defined below. This is a good option if you use custom templates and messages."}),(0,t.jsx)("div",{className:a.section,children:(0,t.jsx)(_.A,{})}),(0,t.jsx)("div",{className:a.section,children:(0,t.jsx)(tt.Ay,{})})]}),(0,t.jsx)(C.a.ButtonRow,{children:(0,t.jsx)(H.$n,{type:"submit",children:"Send test notification"})})]})})]})},Ct=i=>({flexRow:(0,u.css)({display:"flex",flexDirection:"row",alignItems:"flex-start",marginBottom:i.spacing(1)}),section:(0,u.css)({marginBottom:i.spacing(2)})}),lt=Object.freeze({__id:"",secureSettings:{},settings:{},secureFields:{},disableResolveMessage:!1,type:"email"}),pt=({existing:i,alertManagerSourceName:l,config:c,readOnly:n=!1})=>{const s=(0,Q.useDispatch)(),{onCallNotifierMeta:a,extendOnCallNotifierFeatures:p,extendOnCallReceivers:W,onCallFormValidators:j,createOnCallIntegrations:A,isLoadingOnCallIntegration:v,hasOnCallError:x}=(0,it.VY)(),{useGrafanaNotifiersQuery:I}=J.m,{data:o=[],isLoading:G}=I(),[b,T]=(0,g.useState)(),[N,et]=(0,g.useMemo)(()=>!i||G||v?[void 0,{}]:(0,S.Xo)(W(i),o),[i,G,o,W,v]),D=async m=>{const gt=(0,S.bB)(m,et,lt,o),w=await A(gt),ut=(0,S.jS)(c,w,i?.name);await s((0,L.RW)({newConfig:ut,oldConfig:c,alertManagerSourceName:V.hY,successMessage:i?"Contact point updated.":"Contact point created",redirectPath:"/alerting/notifications"})).then(()=>{s(J.m.util.invalidateTags(["AlertmanagerConfiguration"]))})},ct=m=>{T(m)},yt=m=>{if(b){const gt=et[b.__id],w=(0,S.qg)(b,lt,"test",gt),ut={alertManagerSourceName:l,receivers:[{name:"test",grafana_managed_receiver_configs:[w]}],alert:m};s((0,L.bO)(ut))}},nt=(0,g.useMemo)(()=>c.alertmanager_config.receivers?.map(({name:m})=>m).filter(m=>m!==i?.name)??[],[c,i]),B=i?(i.grafana_managed_receiver_configs??[]).some(m=>!!m.provenance):!1,at=!n&&!B,ft=!n;if(G||v)return(0,t.jsx)(E._,{text:"Loading notifiers..."});const dt=o.map(m=>m.type==="oncall"?{dto:p(m),meta:a}:{dto:m});return(0,t.jsxs)(t.Fragment,{children:[x&&(0,t.jsx)(R.F,{severity:"error",title:"Loading OnCall integration failed",children:"Grafana OnCall plugin has been enabled in your Grafana instances but it is not reachable. Please check the plugin configuration"}),B&&(0,t.jsx)(h.Yi,{resource:h.hk.ContactPoint}),(0,t.jsx)(K.k,{isEditable:at,isTestable:ft,config:c,onSubmit:D,initialValues:N,onTestChannel:ct,notifiers:dt,alertManagerSourceName:l,defaultItem:{...lt},takenReceiverNames:nt,commonSettingsComponent:r,customValidators:{[Z.J4.OnCall]:j}}),(0,t.jsx)(ht,{onDismiss:()=>T(void 0),isOpen:!!b,onTest:m=>yt(m)})]})}},18022:(xt,st,e)=>{e.d(st,{k:()=>i});var t=e(74848),g=e(32196),E=e(96540),R=e(49785),Q=e(17172),J=e(40845),L=e(42418),V=e(88575),S=e(10354),h=e(55852),Z=e(3169),it=e(40715),Y=e(94954),ot=e(25027),k=e(26423),r=e(45124),K=e(56361),u=e(88467),d=e(2543),C=e(90182),P=e(94753),M=e(8484),H=e(61410),q=e(59647),_=e(23807);function tt({defaultValues:n,selectedChannelOptions:s,onResetSecureField:a,secureFields:p,errors:W,pathPrefix:j="",readOnly:A=!1,customValidators:v={}}){const{watch:x}=(0,R.xW)(),I=x();return(0,t.jsx)(t.Fragment,{children:s.map((o,G)=>{const b=`${o.label}-${G}`,T=j.split("."),N=T.length>=2?I.items?.[Number(T[1])].settings?.[o.showWhen.field]:void 0;if(o.showWhen.field&&N!==o.showWhen.is)return null;if(p&&p[o.propertyName])return(0,t.jsx)(V.D,{label:o.label,description:o.description||void 0,children:(0,t.jsx)(S.p,{readOnly:!0,value:"Configured",suffix:A?null:(0,t.jsx)(h.$n,{onClick:()=>a(o.propertyName),fill:"text",type:"button",size:"sm",children:"Clear"})})},b);const et=(o.secure?W?.secureSettings:W?.settings)?.[o.propertyName],D=n?.settings?.[o.propertyName];return(0,t.jsx)(_.e,{defaultValue:D,readOnly:A,error:et,pathPrefix:j,pathSuffix:o.secure?"secureSettings.":"settings.",option:o,customValidator:v[o.propertyName]},b)})})}var $=e(14591);function F({defaultValues:n,initialValues:s,pathPrefix:a,onDuplicate:p,onDelete:W,onTest:j,notifiers:A,errors:v,secureFields:x,commonSettingsComponent:I,isEditable:o=!0,isTestable:G,customValidators:b={}}){const T=(0,J.of)(rt),N=(0,E.useCallback)(f=>`${a}${f}`,[a]),{control:et,watch:D,register:ct,trigger:yt,formState:nt,setValue:B}=(0,R.xW)(),at=D(N("type"))??n.type,ft=D(N("settings.parse_mode")),{loading:dt}=(0,H.$)(f=>f.testReceivers),gt=D(N("settings.integration_type"))!==q.U0.NewIntegration;(0,E.useEffect)(()=>{ct(`${a}.__id`),ct(`${a}.secureFields`)},[ct,a]),(0,E.useEffect)(()=>{const f=D((U,{name:z,type:It})=>{const Nt=z?U[z]:"";s&&z===N("type")&&Nt===s.type&&It==="change"&&B(N("settings"),s.settings),s&&z===N("settings.integration_type")&&Nt===q.U0.ExistingIntegration&&B(N("settings.url"),s.settings.url)});return()=>f.unsubscribe()},[at,s,B,N,D]);const[w,ut]=(0,E.useState)(x??{}),O=f=>{if(w[f]){const U={...x};delete U[f],ut(U),B(`${a}.secureFields`,U)}},y=(0,E.useMemo)(()=>(0,d.sortBy)(A,({dto:f,meta:U})=>[U?.order??0,f.name]).map(({dto:{name:f,type:U},meta:z})=>({label:f,value:U,description:z?.description,isDisabled:z?!z.enabled:!1,imgUrl:z?.iconUrl})),[A]),mt=async()=>{await yt(),Object.keys(nt.errors).length===0&&j&&j()},X=A.find(({dto:{type:f}})=>f===at),Et=at==="telegram"&&!(ft==="None"||!ft),Ot=X?.dto.options.filter(f=>f.required),jt=X?.dto.options.filter(f=>!f.required),Ft=`contact-point-type-${a}`;return(0,t.jsxs)("div",{className:T.wrapper,"data-testid":"item-container",children:[(0,t.jsxs)("div",{className:T.topRow,children:[(0,t.jsx)("div",{children:(0,t.jsx)(V.D,{label:"Integration",htmlFor:Ft,"data-testid":`${a}type`,children:(0,t.jsx)(R.xI,{name:N("type"),defaultValue:n.type,render:({field:{ref:f,onChange:U,...z}})=>(0,t.jsx)(C.l6,{disabled:!o,inputId:Ft,...z,width:37,options:y,onChange:It=>U(It?.value)}),control:et,rules:{required:!0}})})}),(0,t.jsxs)("div",{className:T.buttons,children:[G&&j&&gt&&(0,t.jsx)(h.$n,{disabled:dt,size:"xs",variant:"secondary",type:"button",onClick:()=>mt(),icon:dt?"spinner":"message",children:"Test"}),o&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.$n,{size:"xs",variant:"secondary",type:"button",onClick:()=>p(),icon:"copy",children:"Duplicate"}),W&&(0,t.jsx)(h.$n,{"data-testid":`${a}delete-button`,size:"xs",variant:"secondary",type:"button",onClick:()=>W(),icon:"trash-alt",children:"Delete"})]})]})]}),X&&(0,t.jsxs)("div",{className:T.innerContent,children:[Et&&(0,t.jsx)(L.F,{title:(0,M.t)("alerting.contact-points.telegram.parse-mode-warning-title","Telegram messages are limited to 4096 UTF-8 characters."),severity:"warning",children:(0,t.jsxs)(M.x6,{i18nKey:"alerting.contact-points.telegram.parse-mode-warning-body",children:["If you use a ",(0,t.jsx)(P.E,{variant:"code",children:"parse_mode"})," option other than ",(0,t.jsx)(P.E,{variant:"code",children:"None"}),", truncation may result in an invalid message, causing the notification to fail. For longer messages, we recommend using an alternative contact method."]})}),(0,t.jsx)(tt,{defaultValues:n,selectedChannelOptions:Ot?.length?Ot:jt,secureFields:w,errors:v,onResetSecureField:O,pathPrefix:a,readOnly:!o,customValidators:b}),!!(Ot?.length&&jt?.length)&&(0,t.jsxs)($.i,{label:`Optional ${X.dto.name} settings`,children:[X.dto.info!==""&&(0,t.jsx)(L.F,{title:"",severity:"info",children:X.dto.info}),(0,t.jsx)(tt,{defaultValues:n,selectedChannelOptions:jt,secureFields:w,onResetSecureField:O,errors:v,pathPrefix:a,readOnly:!o,customValidators:b})]}),(0,t.jsx)($.i,{label:"Notification settings",children:(0,t.jsx)(I,{pathPrefix:a,readOnly:!o})})]})]})}const rt=n=>({buttons:(0,g.css)({"& > * + *":{marginLeft:n.spacing(1)}}),innerContent:(0,g.css)({maxWidth:"536px"}),wrapper:(0,g.css)({margin:n.spacing(2,0),padding:n.spacing(1),border:`solid 1px ${n.colors.border.medium}`,borderRadius:n.shape.radius.default,maxWidth:`${n.breakpoints.values.xl}${n.breakpoints.unit}`}),topRow:(0,g.css)({display:"flex",flexDirection:"row",justifyContent:"space-between"}),channelSettingsHeader:(0,g.css)({marginTop:n.spacing(2)})});function ht({pathPrefix:n}){const{register:s}=(0,R.xW)();return(0,E.useEffect)(()=>{s(`${n}.__id`),s(`${n}.__deleted`)},[s,n]),(0,t.jsx)(t.Fragment,{})}function Ct(n){if(n)return{...n,items:n.items.map(s=>({...s,settings:{...s.settings,http_config:s.settings?.http_config?lt(s.settings?.http_config):void 0}}))}}function lt(n){return pt(n)?n:{...(0,d.omit)(n,"authorization"),bearer_token:n.authorization?.credentials,bearer_token_file:n.authorization?.credentials_file}}function pt(n){return["bearer_token","bearer_token_file"].some(s=>s in n)}function i({config:n,initialValues:s,defaultItem:a,notifiers:p,alertManagerSourceName:W,onSubmit:j,onTestChannel:A,takenReceiverNames:v,commonSettingsComponent:x,isEditable:I,isTestable:o,customValidators:G}){const b=(0,Z._2)(),T=(0,J.of)(l),et=Ct(s)??{name:"",items:[{...a,__id:String(Math.random())}]},D=(0,R.mN)({defaultValues:structuredClone(et)});(0,it.o)(O=>O.unifiedAlerting.saveAMConfig=u.jA);const{handleSubmit:ct,register:yt,formState:{errors:nt,isSubmitting:B},getValues:at}=D,{fields:ft,append:dt,remove:m}=(0,r.r)({name:"items",formAPI:D,softDelete:!0}),gt=(0,E.useCallback)(O=>v.map(y=>y.trim().toLowerCase()).includes(O.trim().toLowerCase())?"Another receiver with this name already exists.":!0,[v]),w=async O=>{try{await j({...O,items:O.items.filter(y=>!y.__deleted)})}catch(y){if(y instanceof Error||(0,Q.NF)(y)){b.error("Failed to save the contact point",c(y));const mt=new Error("Failed to save the contact point");mt.cause=y,(0,ot.vV)(mt)}throw y}},ut=()=>{b.error("There are errors in the form. Please correct them and try again!")};return(0,t.jsxs)(R.Op,{...D,children:[!n.alertmanager_config.route&&(0,t.jsx)(L.F,{severity:"warning",title:"Attention",children:"Because there is no default policy configured yet, this contact point will automatically be set as default."}),(0,t.jsxs)("form",{onSubmit:ct(w,ut),children:[(0,t.jsx)("h4",{className:T.heading,children:I?s?"Update contact point":"Create contact point":"Contact point"}),(0,t.jsx)(V.D,{label:"Name",invalid:!!nt.name,error:nt.name&&nt.name.message,required:!0,children:(0,t.jsx)(S.p,{readOnly:!I,id:"name",...yt("name",{required:"Name is required",validate:{nameIsAvailable:gt}}),width:39,placeholder:"Name"})}),ft.map((O,y)=>{const mt=`items.${y}.`;if(O.__deleted)return(0,t.jsx)(ht,{pathPrefix:mt},O.__id);const X=s?.items.find(({__id:vt})=>vt===O.__id);return(0,t.jsx)(F,{defaultValues:O,initialValues:X,onDuplicate:()=>{const vt=at().items[y];dt({...vt,__id:String(Math.random())})},onTest:A?()=>{const vt=at().items[y];A(vt)}:void 0,onDelete:()=>m(y),pathPrefix:mt,notifiers:p,secureFields:X?.secureFields,errors:nt?.items?.[y],commonSettingsComponent:x,isEditable:I,isTestable:o,customValidators:G?G[O.type]:void 0},O.__id)}),(0,t.jsxs)(t.Fragment,{children:[I&&(0,t.jsx)(h.$n,{type:"button",icon:"plus",variant:"secondary",onClick:()=>dt({...a,__id:String(Math.random())}),children:"Add contact point integration"}),(0,t.jsxs)("div",{className:T.buttons,children:[I&&(0,t.jsxs)(t.Fragment,{children:[B&&(0,t.jsx)(h.$n,{disabled:!0,icon:"spinner",variant:"primary",children:"Saving..."}),!B&&(0,t.jsx)(h.$n,{type:"submit",children:"Save contact point"})]}),(0,t.jsx)(h.z9,{disabled:B,variant:"secondary","data-testid":"cancel-button",href:(0,K.nL)("alerting/notifications",W),children:"Cancel"})]})]})]})]})}const l=n=>({heading:(0,g.css)({margin:n.spacing(4,0)}),buttons:(0,g.css)({marginTop:n.spacing(4),"& > * + *":{marginLeft:n.spacing(1)}})});function c(n){return(0,k.uz)(n)?n.data.detail:(0,Y.q)(n)}},59647:(xt,st,e)=>{e.d(st,{U0:()=>Z,VY:()=>k});var t=e(1932),g=e(96540),E=e(17172),R=e(3169),Q=e(26423),J=e(12210),L=e(99494),V=e(79851),S=e(86768),h=e(37534),Z=(r=>(r.NewIntegration="new_oncall_integration",r.ExistingIntegration="existing_oncall_integration",r))(Z||{}),it=(r=>(r.IntegrationType="integration_type",r.IntegrationName="integration_name",r))(it||{}),Y=(r=>(r.Disabled="disabled",r.V1="v1",r.V2="v2",r))(Y||{});function ot(){const{installed:r,loading:K,error:u}=(0,J._)(L.W.OnCall),{data:d=[],error:C,isLoading:P}=Q.WG.endpoints.features.useQuery(void 0,{skip:!r}),M=(0,g.useMemo)(()=>r?d.includes(Q.Pc)?"v2":"v1":"disabled",[r,d]),H=(0,g.useMemo)(()=>M==="v2",[M]);return{isOnCallEnabled:r,integrationStatus:M,isAlertingV2IntegrationEnabled:H,isOnCallStatusLoading:K||P,onCallError:u??C}}function k(){const r=(0,R._2)(),{isOnCallEnabled:K,integrationStatus:u,isAlertingV2IntegrationEnabled:d,isOnCallStatusLoading:C,onCallError:P}=ot(),{useCreateIntegrationMutation:M,useGrafanaOnCallIntegrationsQuery:H,useLazyValidateIntegrationNameQuery:q}=Q.WG,[_,{isFetching:tt}]=q(),[$]=M(),{data:F=[],isLoading:rt,isError:ht}=H(void 0,{skip:!d}),Ct=(0,g.useMemo)(()=>({integration_name:async l=>{try{return await _(l).unwrap(),!0}catch(c){if((0,E.NF)(c)&&c.status===409)return"Integration of this name already exists in OnCall";throw r.error("Failed to validate OnCall integration name. Is the OnCall API available?"),c}},url:l=>d?F.map(c=>c.integration_url).includes(l)?!0:"Selection of existing OnCall integration is required":!0}),[F,_,d,r]),lt=(0,g.useCallback)(l=>d?(0,t.jM)(l,c=>{c.grafana_managed_receiver_configs?.forEach(n=>{n.type===h.J4.OnCall&&(n.settings.integration_type="existing_oncall_integration")})}):l,[d]),pt=(0,g.useCallback)(async l=>{if(!d)return l;const s=(l.grafana_managed_receiver_configs?.filter(a=>a.type==="oncall")??[]).filter(a=>a.settings.integration_type==="new_oncall_integration").map(async a=>{const p=await $({integration:h.FI,verbal_name:a.settings.integration_name}).unwrap();a.settings.url=p.integration_url});return await Promise.all(s),(0,t.jM)(l,a=>{a.grafana_managed_receiver_configs?.forEach(p=>{p.type===h.J4.OnCall&&(delete p.settings.integration_type,delete p.settings.integration_name)})})},[d,$]),i=(0,g.useCallback)(l=>{if(l.type===h.J4.OnCall&&d){const c=l.options.filter(a=>a.propertyName!=="url"),n={value:"new_oncall_integration",label:"New OnCall integration",description:"A new OnCall integration without escalation chains will be automatically created"},s={value:"existing_oncall_integration",label:"Existing OnCall integration",description:"Use an existing OnCall integration"};return c.unshift((0,V.u)("integration_type","How to connect to OnCall","",{required:!0,element:"radio",defaultValue:n,selectOptions:[n,s]}),(0,V.u)("integration_name","Integration name","The name of the new OnCall integration",{required:!0,showWhen:{field:"integration_type",is:"new_oncall_integration"}}),(0,V.u)("url","OnCall Integration","The OnCall integration to send alerts to",{element:"select",required:!0,showWhen:{field:"integration_type",is:"existing_oncall_integration"},selectOptions:F.map(a=>({label:a.display_name,description:a.integration_url,value:a.integration_url}))})),{...l,options:c}}return l},[F,d]);return{integrationStatus:u,onCallNotifierMeta:{enabled:!!K,order:-1,description:K?"Connect effortlessly to Grafana OnCall":"Enable Grafana OnCall plugin to use this integration",iconUrl:S.K[L.W.OnCall]},extendOnCallNotifierFeatures:i,extendOnCallReceivers:lt,createOnCallIntegrations:pt,onCallFormValidators:Ct,isLoadingOnCallIntegration:rt||C,isValidating:tt,hasOnCallError:!!P||ht}}}}]);

//# sourceMappingURL=7455.bca247a9e0a594d32cf8.js.map