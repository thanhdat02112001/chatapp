import{h as c,v as i,o as s,c as a,b as d,t as n,g as m,r as _,d as p}from"./app.5846e20f.js";const f={class:"text-sm text-red-600"},k={__name:"InputError",props:["message"],setup(e){return(o,t)=>c((s(),a("div",null,[d("p",f,n(e.message),1)],512)),[[i,e.message]])}},v={class:"block font-medium text-sm text-gray-700"},g={key:0},h={key:1},y={__name:"InputLabel",props:["value"],setup(e){return(o,t)=>(s(),a("label",v,[e.value?(s(),a("span",g,n(e.value),1)):(s(),a("span",h,[m(o.$slots,"default")]))]))}},b=["value"],$={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(e,{expose:o}){const t=_(null);return p(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),o({focus:()=>t.value.focus()}),(r,u)=>(s(),a("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:e.modelValue,onInput:u[0]||(u[0]=l=>r.$emit("update:modelValue",l.target.value)),ref_key:"input",ref:t},null,40,b))}};export{y as _,$ as a,k as b};
