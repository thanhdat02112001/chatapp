import{m as u,o as i,i as d,w as m,a,u as e,H as c,c as _,t as f,k as p,b as t,j as w,n as b,p as g}from"./app.5846e20f.js";import{_ as y}from"./GuestLayout.aa94aeed.js";import{_ as k,a as x,b as h}from"./TextInput.ff2bb149.js";import{_ as V}from"./PrimaryButton.ba537990.js";import"./ApplicationLogo.59cc887f.js";const v=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},H={__name:"ForgotPassword",props:{status:String},setup(o){const s=u({email:""}),r=()=>{s.post(route("password.email"))};return(F,l)=>(i(),d(y,null,{default:m(()=>[a(e(c),{title:"Forgot Password"}),v,o.status?(i(),_("div",N,f(o.status),1)):p("",!0),t("form",{onSubmit:g(r,["prevent"])},[t("div",null,[a(k,{for:"email",value:"Email"}),a(x,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=n=>e(s).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(h,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",B,[a(V,{class:b({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:m(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{H as default};
