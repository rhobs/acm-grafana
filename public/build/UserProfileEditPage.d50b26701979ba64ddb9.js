"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2472],{39745:(_,T,s)=>{s.d(T,{A:()=>q,u:()=>Y});var e=s(74848),o=s(32196),y=s(96540),b=s(97594),z=s(41987),p=s(13544),F=s(14110),S=s(32264),$=s(84167),U=s(88575),x=s(90182),i=s(60029),H=s(20333),Q=s(15648),r=s(29678),C=s(55852),O=s(3911),V=s(59429),l=s(8484),I=s(74513),A=s(65615),n=s(2769);function a(){const R=I.Yj.map(t=>({value:t.code,label:t.name})).sort((t,L)=>t.value===I.wi?1:L.value===I.wi?-1:t.label.localeCompare(L.label));return[{value:"",label:(0,l.t)("common.locale.default","Default")},...R]}class Y extends y.PureComponent{constructor(h){super(h),this.onSubmitForm=async t=>{if(t.preventDefault(),this.props.onConfirm?await this.props.onConfirm():!0){const{homeDashboardUID:G,theme:J,timezone:Z,weekStart:M,language:W,queryHistory:X,navbar:P}=this.state;await this.service.update({homeDashboardUID:G,theme:J,timezone:Z,weekStart:M,language:W,queryHistory:X,navbar:P}),window.location.reload()}},this.onThemeChanged=t=>{this.setState({theme:t.value}),t.value&&(0,n.K)(t.value,!0)},this.onTimeZoneChanged=t=>{typeof t=="string"&&this.setState({timezone:t})},this.onWeekStartChanged=t=>{this.setState({weekStart:t})},this.onHomeDashboardChanged=t=>{this.setState({homeDashboardUID:t})},this.onLanguageChanged=t=>{this.setState({language:t}),(0,F.rR)("grafana_preferences_language_changed",{toLanguage:t,preferenceType:this.props.preferenceType})},this.service=new A.W(h.resourceUri),this.state={theme:"",timezone:"",weekStart:"",language:"",queryHistory:{homeTab:""},navbar:{bookmarkUrls:[]}},this.themeOptions=(0,b.k)(S.$.featureToggles.extraThemes).map(t=>({value:t.id,label:w(t)})),this.themeOptions.unshift({value:"",label:(0,l.t)("shared-preferences.theme.default-label","Default")})}async componentDidMount(){const h=await this.service.load();this.setState({homeDashboardUID:h.homeDashboardUID,theme:h.theme,timezone:h.timezone,weekStart:h.weekStart,language:h.language,queryHistory:h.queryHistory,navbar:h.navbar})}render(){const{theme:h,timezone:t,weekStart:L,homeDashboardUID:G,language:J}=this.state,{disabled:Z}=this.props,M=ee(),W=a(),X=this.themeOptions.find(P=>P.value===h)??this.themeOptions[0];return(0,e.jsxs)("form",{onSubmit:this.onSubmitForm,className:M.form,children:[(0,e.jsxs)($.n,{label:(0,e.jsx)(l.x6,{i18nKey:"shared-preferences.title",children:"Preferences"}),disabled:Z,children:[(0,e.jsx)(U.D,{label:(0,l.t)("shared-preferences.fields.theme-label","Interface theme"),children:(0,e.jsx)(x.l6,{options:this.themeOptions,value:X,onChange:this.onThemeChanged,inputId:"shared-preferences-theme-select"})}),(0,e.jsx)(U.D,{label:(0,e.jsx)(i.J,{htmlFor:"home-dashboard-select",children:(0,e.jsx)("span",{className:M.labelText,children:(0,e.jsx)(l.x6,{i18nKey:"shared-preferences.fields.home-dashboard-label",children:"Home Dashboard"})})}),"data-testid":"User preferences home dashboard drop down",children:(0,e.jsx)(V.b,{value:G,onChange:P=>this.onHomeDashboardChanged(P?.uid??""),defaultOptions:!0,isClearable:!0,placeholder:(0,l.t)("shared-preferences.fields.home-dashboard-placeholder","Default dashboard"),inputId:"home-dashboard-select"})}),(0,e.jsx)(U.D,{label:(0,l.t)("shared-dashboard.fields.timezone-label","Timezone"),"data-testid":p.Tp.components.TimeZonePicker.containerV2,children:(0,e.jsx)(H.U,{includeInternal:!0,value:t,onChange:this.onTimeZoneChanged,inputId:"shared-preferences-timezone-picker"})}),(0,e.jsx)(U.D,{label:(0,l.t)("shared-preferences.fields.week-start-label","Week start"),"data-testid":p.Tp.components.WeekStartPicker.containerV2,children:(0,e.jsx)(Q.l,{value:L||"",onChange:this.onWeekStartChanged,inputId:"shared-preferences-week-start-picker"})}),(0,e.jsx)(U.D,{label:(0,e.jsxs)(i.J,{htmlFor:"locale-select",children:[(0,e.jsx)("span",{className:M.labelText,children:(0,e.jsx)(l.x6,{i18nKey:"shared-preferences.fields.locale-label",children:"Language"})}),(0,e.jsx)(r.y,{featureState:z.Ay.beta})]}),"data-testid":"User preferences language drop down",children:(0,e.jsx)(x.l6,{value:W.find(P=>P.value===J),onChange:P=>this.onLanguageChanged(P.value??""),options:W,placeholder:(0,l.t)("shared-preferences.fields.locale-placeholder","Choose language"),inputId:"locale-select"})})]}),(0,e.jsx)(C.$n,{type:"submit",variant:"primary","data-testid":p.Tp.components.UserProfile.preferencesSaveButton,children:(0,e.jsx)(l.x6,{i18nKey:"common.save",children:"Save"})})]})}}const q=Y,ee=(0,O.N)(()=>({labelText:(0,o.css)({marginRight:"6px"}),form:(0,o.css)({width:"100%",maxWidth:"600px"})}));function w(R){switch(R.id){case"dark":return(0,l.t)("shared.preferences.theme.dark-label","Dark");case"light":return(0,l.t)("shared.preferences.theme.light-label","Light");case"system":return(0,l.t)("shared.preferences.theme.system-label","System preference");default:return R.name}}},48357:(_,T,s)=>{s.r(T),s.d(T,{UserProfileEditPage:()=>ae,default:()=>me});var e=s(74848),o=s(96540),y=s(71468),b=s(4392),z=s(74135),p=s(13544),F=s(3197),S=s(67061),$=s(63021),U=s(40675),x=s(40980),i=s(69444),H=s(39745),Q=s(83277),r=s(8484),C=s(39558),O=s(55852);class V extends o.PureComponent{render(){const{isLoading:j,orgs:f,user:g}=this.props;return j?(0,e.jsx)(C._,{text:"Loading organizations..."}):f.length===0?null:(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"page-sub-heading",children:(0,e.jsx)(r.x6,{i18nKey:"user-orgs.title",children:"Organizations"})}),(0,e.jsxs)("table",{className:"filter-table form-inline","data-testid":p.Tp.components.UserProfile.orgsTable,children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:(0,e.jsx)(r.x6,{i18nKey:"user-orgs.name-column",children:"Name"})}),(0,e.jsx)("th",{children:(0,e.jsx)(r.x6,{i18nKey:"user-orgs.role-column",children:"Role"})}),(0,e.jsx)("th",{})]})}),(0,e.jsx)("tbody",{children:f.map((m,d)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:m.name}),(0,e.jsx)("td",{children:m.role}),(0,e.jsx)("td",{className:"text-right",children:m.orgId===g?.orgId?(0,e.jsx)(O.$n,{variant:"secondary",size:"sm",disabled:!0,children:(0,e.jsx)(r.x6,{i18nKey:"user-orgs.current-org-button",children:"Current"})}):(0,e.jsx)(O.$n,{variant:"secondary",size:"sm",onClick:()=>{this.props.setUserOrg(m)},children:(0,e.jsx)(r.x6,{i18nKey:"user-orgs.select-org-button",children:"Select organisation"})})})]},d))})]})]})}}const l=V;var I=s(84167),A=s(88575),n=s(10354),a=s(56034),Y=s(14578),q=s(72235),ee=s(2913);const{disableLoginForm:w}=ee.Ay,h=({user:u,isSavingUser:j,updateProfile:f})=>{const g=v=>{f(v)},m=(u&&u.isExternal)??!1,d=m&&u&&u.authLabels?u.authLabels[0]:"",E=d?` (Synced via ${d})`:"",D=w||m;return(0,e.jsx)(q.l,{onSubmit:g,validateOn:"onBlur",children:({register:v,errors:N})=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(I.n,{children:[(0,e.jsx)(A.D,{label:(0,r.t)("user-profile.fields.name-label","Name")+E,invalid:!!N.name,error:(0,e.jsx)(r.x6,{i18nKey:"user-profile.fields.name-error",children:"Name is required"}),disabled:D,children:(0,e.jsx)(n.p,{...v("name",{required:!0}),id:"edit-user-profile-name",placeholder:(0,r.t)("user-profile.fields.name-label","Name"),defaultValue:u?.name??"",suffix:(0,e.jsx)(t,{})})}),(0,e.jsx)(A.D,{label:(0,r.t)("user-profile.fields.email-label","Email")+E,invalid:!!N.email,error:(0,e.jsx)(r.x6,{i18nKey:"user-profile.fields.email-error",children:"Email is required"}),disabled:D,children:(0,e.jsx)(n.p,{...v("email",{required:!0}),id:"edit-user-profile-email",placeholder:(0,r.t)("user-profile.fields.email-label","Email"),defaultValue:u?.email??"",suffix:(0,e.jsx)(t,{})})}),(0,e.jsx)(A.D,{label:(0,r.t)("user-profile.fields.username-label","Username")+E,disabled:D,children:(0,e.jsx)(n.p,{...v("login"),id:"edit-user-profile-username",defaultValue:u?.login??"",placeholder:(0,r.t)("user-profile.fields.username-label","Username")+E,suffix:(0,e.jsx)(t,{})})})]}),(0,e.jsx)(O.$n,{variant:"primary",disabled:j||D,"data-testid":p.Tp.components.UserProfile.profileSaveButton,type:"submit",children:(0,e.jsx)(r.x6,{i18nKey:"common.save",children:"Save"})})]})})},t=()=>w?(0,e.jsx)(a.m,{content:"Login details locked because they are managed in another system.",children:(0,e.jsx)(Y.I,{name:"lock"})}):null;var L=s(32196),G=s(72635),J=s(84753);class Z extends o.PureComponent{render(){const{isLoading:j,sessions:f,revokeUserSession:g}=this.props,m=M();return j?(0,e.jsx)(C._,{text:(0,e.jsx)(r.x6,{i18nKey:"user-sessions.loading",children:"Loading sessions..."})}):(0,e.jsx)("div",{className:m.wrapper,children:f.length>0&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h3",{className:"page-sub-heading",children:"Sessions"}),(0,e.jsxs)("table",{className:"filter-table form-inline","data-testid":p.Tp.components.UserProfile.sessionsTable,children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:(0,e.jsx)(r.x6,{i18nKey:"user-session.seen-at-column",children:"Last seen"})}),(0,e.jsx)("th",{children:(0,e.jsx)(r.x6,{i18nKey:"user-session.created-at-column",children:"Logged on"})}),(0,e.jsx)("th",{children:(0,e.jsx)(r.x6,{i18nKey:"user-session.ip-column",children:"IP address"})}),(0,e.jsx)("th",{children:(0,e.jsx)(r.x6,{i18nKey:"user-session.browser-column",children:"Browser & OS"})}),(0,e.jsx)("th",{})]})}),(0,e.jsx)("tbody",{children:f.map((d,E)=>(0,e.jsxs)("tr",{children:[d.isActive?(0,e.jsx)("td",{children:"Now"}):(0,e.jsx)("td",{children:d.seenAt}),(0,e.jsx)("td",{children:(0,J.Y)(d.createdAt,{dateStyle:"long"})}),(0,e.jsx)("td",{children:d.clientIp}),(0,e.jsxs)("td",{children:[d.browser," on ",d.os," ",d.osVersion]}),(0,e.jsx)("td",{children:(0,e.jsx)(O.$n,{size:"sm",variant:"destructive",onClick:()=>g(d.id),"aria-label":(0,G.t)("user-session.revoke","Revoke user session"),children:(0,e.jsx)(Y.I,{name:"power"})})})]},E))})]})]})})}}const M=()=>({wrapper:(0,L.css)({maxWidth:"100%"})}),W=Z;class X extends o.PureComponent{render(){const{isLoading:j,teams:f}=this.props;return j?(0,e.jsx)(C._,{text:"Loading teams..."}):f.length===0?null:(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{className:"page-sub-heading",children:"Teams"}),(0,e.jsxs)("table",{className:"filter-table form-inline","aria-label":"User teams table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{}),(0,e.jsx)("th",{children:"Name"}),(0,e.jsx)("th",{children:"Email"}),(0,e.jsx)("th",{children:"Members"})]})}),(0,e.jsx)("tbody",{children:f.map((g,m)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{className:"width-4 text-center",children:(0,e.jsx)("img",{className:"filter-table__avatar",src:g.avatarUrl,alt:""})}),(0,e.jsx)("td",{children:g.name}),(0,e.jsx)("td",{children:g.email}),(0,e.jsx)("td",{children:g.memberCount})]},m))})]})]})}}const P=null;var k=s(84969);const te="tab",se="general";function ce(u){const j=u.user,{user:f,teams:g,orgs:m,sessions:d,teamsAreLoading:E,orgsAreLoading:D,sessionsAreLoading:v,isUpdating:N}=j;return{orgsAreLoading:D,sessionsAreLoading:v,teamsAreLoading:E,orgs:m,sessions:d,teams:g,isUpdating:N,user:f}}const he={initUserProfilePage:k.Qe,revokeUserSession:k._O,changeUserOrg:k.Aj,updateUserProfile:k.eg},ue=(0,y.connect)(ce,he);function ae({orgsAreLoading:u,sessionsAreLoading:j,teamsAreLoading:f,initUserProfilePage:g,orgs:m,sessions:d,teams:E,isUpdating:D,user:v,revokeUserSession:N,changeUserOrg:fe,updateUserProfile:ge}){const[xe,pe]=(0,Q.s)(),re=xe[te],[ne,je]=(0,o.useState)(typeof re=="string"?re:se);(0,b.A)(()=>g());const{extensions:ie}=(0,F.kr)({extensionPointId:z.S.UserProfileTab}),oe=ie.reduce((c,K)=>{const{title:B}=K;return c[B]?c[B].push(K):c[B]=[K],c},{}),le=c=>c.toLowerCase(),ve=ie.length>0,Pe=[{id:se,title:(0,r.t)("user-profile.tabs.general","General")},...Object.keys(oe).map(c=>({id:le(c),title:c}))],de=()=>(0,e.jsxs)(S.B,{direction:"column",gap:2,children:[(0,e.jsx)(h,{updateProfile:ge,isSavingUser:D,user:v}),(0,e.jsx)(H.A,{resourceUri:"user",preferenceType:"user"}),(0,e.jsxs)(S.B,{direction:"column",gap:6,children:[(0,e.jsx)(X,{isLoading:f,teams:E}),(0,e.jsx)(l,{isLoading:u,setUserOrg:fe,orgs:m,user:v}),(0,e.jsx)(W,{isLoading:j,revokeUserSession:N,sessions:d})]})]}),Ee=()=>(0,e.jsx)("div",{"data-testid":p.Tp.components.UserProfile.extensionPointTabs,children:(0,e.jsxs)(S.B,{direction:"column",gap:2,children:[(0,e.jsx)($.U,{children:Pe.map(({id:c,title:K})=>(0,e.jsx)(U.o,{label:K,active:ne===c,onChangeTab:()=>{je(c),pe({[te]:c})},"data-testid":p.Tp.components.UserProfile.extensionPointTab(c)},c))}),(0,e.jsxs)(x.J,{children:[ne===se&&(0,e.jsx)(de,{}),Object.entries(oe).map(([c,K])=>{const B=le(c);return ne===B?(0,e.jsx)(o.Fragment,{children:K.map(({component:Ue},Te)=>(0,e.jsx)(Ue,{},`${B}-${Te}`))},B):null})]})]})});return(0,e.jsx)(i.Y,{navId:"profile/settings",children:(0,e.jsx)(i.Y.Contents,{isLoading:!v,children:ve?(0,e.jsx)(Ee,{}):(0,e.jsx)(de,{})})})}const me=ue(ae)},84969:(_,T,s)=>{s.d(T,{ec:()=>H,Aj:()=>I,Qe:()=>Q,YW:()=>r,_O:()=>l,eg:()=>A});var e=s(32264),o=s(17172);async function y(n){try{await(0,o.AI)().put("/api/user/password",n)}catch(a){console.error(a)}}function b(){return(0,o.AI)().get("/api/user")}function z(){return(0,o.AI)().get("/api/user/teams")}function p(){return(0,o.AI)().get("/api/user/orgs")}function F(){return(0,o.AI)().get("/api/user/auth-tokens")}async function S(n){await(0,o.AI)().post("/api/user/revoke-auth-token",{authTokenId:n})}async function $(n){await(0,o.AI)().post("/api/user/using/"+n.orgId,{})}async function U(n){try{await(0,o.AI)().put("/api/user",n)}catch(a){console.error(a)}}const x={changePassword:y,revokeUserSession:S,loadUser:b,loadSessions:F,loadOrgs:p,loadTeams:z,setUserOrg:$,updateUserProfile:U};var i=s(81862);function H(n){return async function(a){a((0,i.Nm)({updating:!0})),await x.changePassword(n),a((0,i.Nm)({updating:!1}))}}function Q(){return async function(n){await n(r()),n(C()),n(O()),n(V())}}function r(){return async function(n){const a=await x.loadUser();n((0,i.HO)({user:a}))}}function C(){return async function(n){n((0,i.ri)());const a=await x.loadTeams();n((0,i.Q9)({teams:a}))}}function O(){return async function(n){n((0,i.Mj)());const a=await x.loadOrgs();n((0,i.ny)({orgs:a}))}}function V(){return async function(n){n((0,i.uh)());const a=await x.loadSessions();n((0,i.RS)({sessions:a}))}}function l(n){return async function(a){a((0,i.Nm)({updating:!0})),await x.revokeUserSession(n),a((0,i.g$)({tokenId:n}))}}function I(n){return async function(a){a((0,i.Nm)({updating:!0})),await x.setUserOrg(n),window.location.href=e.$.appSubUrl+"/profile"}}function A(n){return async function(a){a((0,i.Nm)({updating:!0})),await x.updateUserProfile(n),await a(r()),a((0,i.Nm)({updating:!1}))}}},4392:(_,T,s)=>{s.d(T,{A:()=>y});var e=s(94701),o=function(b){(0,e.A)(function(){b()})};const y=o}}]);

//# sourceMappingURL=UserProfileEditPage.d50b26701979ba64ddb9.js.map