"use strict";(self.webpackChunkabdul_farhan_capstone=self.webpackChunkabdul_farhan_capstone||[]).push([[507],{5507:function(e,a,n){n.r(a),n.d(a,{CreateUser:function(){return l}});var r=n(9439),s=n(2791),t=n(7689),i=n(3402),c=n(4951),o=n(1243),u=n(184),l=function(){var e=(0,s.useState)(""),a=(0,r.Z)(e,2),n=a[0],l=a[1],d=(0,t.s0)();return(0,u.jsxs)("div",{className:"user-container",children:[(0,u.jsx)(i.x7,{position:"bottom-right"}),(0,u.jsxs)(c.E.div,{className:"user-container__card",initial:"initial",animate:"in",exit:"out",variants:{initial:{opacity:0,x:"-500vw",scale:0},in:{opacity:1,x:0,scale:1},out:{opacity:0,x:"500vw",scale:0}},transition:{type:"tween",ease:"anticipate",duration:.8},children:[(0,u.jsx)("div",{className:"user-container__title-container",children:(0,u.jsx)("h2",{className:"user-container__title",children:"CREATE USER "})}),(0,u.jsxs)("div",{className:"user-container__form-container",children:[(0,u.jsx)("div",{className:"user-container__image"}),(0,u.jsxs)("form",{className:"user-container__form",onSubmit:function(e){return function(e){e.preventDefault();var a={username:n},r=o.Z.post("/api/users/add",a).then((function(e){return d("/createworkout",{state:a}),e.data})).catch((function(e){throw new Error(e)}));i.ZP.promise(r,{loading:"Processing",error:"error adding a user",success:"successfully added a username "},{style:{minWidth:"250px",background:"rgba(255,255,255,0.4)",backdropFilter:"blur(6px)",color:"#000000"},success:{duration:5e3},error:{duration:5e3}})}(e)},children:[(0,u.jsxs)("div",{className:"user-container__username-container",children:[(0,u.jsx)("label",{className:"user-container__username-label",htmlFor:"username",children:"USERNAME"}),(0,u.jsx)("input",{id:"username",name:"userName",className:"user-container__user",type:"text",value:n,onChange:function(e){l(e.target.value)},placeholder:"Ex. John Doe"})]}),(0,u.jsx)("div",{className:"user-container__button-container",children:(0,u.jsx)("button",{className:"user-container__button",name:"create",children:"CREATE"})})]})]})]})]})}}}]);
//# sourceMappingURL=507.96b803a2.chunk.js.map