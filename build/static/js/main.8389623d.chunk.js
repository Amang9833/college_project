(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{78:function(e,n,t){"use strict";t.r(n);var r,a=t(17),s=t(0),c=t.n(s),o=t(16),i=t.n(o),l=t(18),d=l.b.div(r||(r=Object(a.a)(["\n  \n  height: 100%;\n  background: lavender;\n  padding: 0px;\n  margin: 0px;\n  /* position: relative; */\n\n\n\n  .App{\n    \n    /* background: lavender; */\n    padding: 0px;\n  margin: 0px;\n\n  }\n"]))),p=t(5),u=t(13),x=t(11),b="FETCH_EMPLOYEES_REQUEST",m="FETCH_EMPLOYEES_SUCCESSFUL",j="FETCH_EMPLOYEES_FAILED",f="ADD_EMPLOYEE_REQUEST",h="ADD_EMPLOYEE_SUCCESSFUL",g="ADD_EMPLOYEE_FAILED",O="EDIT_EMPLOYEE_REQUEST",y="EDIT_EMPLOYEE_SUCCESSFUL",v="EDIT_EMPLOYEE_FAILED",E="DELETE_EMPLOYEE_REQUEST",w="DELETE_EMPLOYEE_SUCCESSFUL",S="DELETE_EMPLOYEE_FAILED",k="SEARCH_EMPLOYEE_REQUEST",N="SEARCH_EMPLOYEE_SUCCESSFUL",_="SEARCH_EMPLOYEE_FAILED",M="EMPLOYEE_SELECTED_FOR_EDIT",C="EMPLOYEE_SELECTION_CLEARED";function L(e){return{type:f,payload:e}}var I=t(23),D=t.n(I),P=t(12),F=(t(58),t(15)),T=t(27),z=t(2);P.c.configure();var B=function(e){var n=Object(T.useMediaQuery)({query:"(max-width: 650px)"}),t=Object(x.b)(),r=function(e){t({type:E,payload:e}),s(e)},a=function(e){t({type:M,payload:e}),window.scrollTo(0,0)},s=function(e){P.c.info(Object(z.jsxs)("div",{className:"Toast-Body",children:[Object(z.jsxs)("div",{className:"Toast-Message",children:[Object(z.jsx)(F.a,{}),Object(z.jsx)("p",{children:"Employee Removed Successfully!!!"})]}),Object(z.jsxs)("div",{className:"Toast-Action",children:[Object(z.jsx)("u",{onClick:function(){t(L(e))},children:"Undo"}),Object(z.jsx)("p",{children:" "}),Object(z.jsx)("u",{children:"Close"})]})]}),{position:P.c.POSITION.TOP_CENTER,autoClose:4e3,hideProgressBar:!0,pauseOnHover:!1,draggable:!1,transition:P.b})};return Object(z.jsxs)("div",{className:"Card",children:[Object(z.jsx)("div",{className:"Employee-Icon",children:Object(z.jsx)(F.e,{})}),Object(z.jsxs)("div",{className:"Employee-Personal-Info",children:[n&&Object(z.jsxs)("p",{className:"Employee-Name",children:[Object(z.jsx)("strong",{children:"Name: "})," ",e.Firstname," ",e.Middlename," ",e.Lastname]}),!n&&Object(z.jsxs)("h5",{className:"Employee-Name",children:["Name: ",e.Firstname," ",e.Middlename," ",e.Lastname]}),Object(z.jsxs)("p",{className:"Employee-Gender",children:[" ",Object(z.jsx)("strong",{children:"Gender:"})," ",e.Gender]}),Object(z.jsxs)("p",{className:"Employee-DOB",children:[" ",Object(z.jsx)("strong",{children:"Date of Birth:"})," ",D()(e.DOB).format("DD-MM-YYYY")]})]}),Object(z.jsx)("div",{className:"Employee-Salary",children:Object(z.jsxs)("p",{className:"Employee-Salary",children:[" ",Object(z.jsx)("strong",{children:"Salary:"})," ",e.Salary," Birr"]})}),Object(z.jsxs)("div",{className:"Card-Buttons",children:[Object(z.jsxs)("button",{className:"editButton",onClick:function(){a(e)},children:[Object(z.jsx)(F.c,{})," "]}),Object(z.jsx)("button",{className:"deleteButton",onClick:function(){r(e)},children:Object(z.jsx)(F.d,{})})]})]})},Y=t(45),A=t(44);t(32);var R=function(e){var n=e.errors;return void 0!==n?Object(z.jsx)(A.a,{content:n.message,children:Object(z.jsx)("div",{className:"Error-Info-Icon",children:Object(z.jsx)(F.b,{})})}):Object(z.jsx)("p",{})};P.c.configure();var U,G,q=function(){var e=Object(x.c)((function(e){return e.single_employee_state.selectedEmployee})),n={_id:"",Firstname:"",Middlename:"",Lastname:"",Gender:"Select Gender",DOB:"",Salary:""},t=Object(Y.a)({mode:"onSubmit",reValidateMode:"onSubmit",defaultValues:n}),r=t.register,a=t.handleSubmit,c=t.reset,o=t.formState.errors,i=t.clearErrors;Object(s.useEffect)((function(){null!==e&&c(e)}),[e]);var l=Object(x.b)(),d=function(e){P.c.success(Object(z.jsx)("div",{className:"Toast-Body",children:Object(z.jsxs)("div",{className:"Toast-Message",children:[Object(z.jsx)(F.a,{}),Object(z.jsx)("p",{children:e})]})}),{position:P.c.POSITION.TOP_CENTER,autoClose:2e3,hideProgressBar:!0,pauseOnHover:!1,draggable:!1,transition:P.b})},u=function(){i(),c(n)};return Object(z.jsx)("div",{className:"submit-form",children:Object(z.jsxs)("form",{onSubmit:a((function(e){""===e._id||void 0===e._id?(l(L(e)),d("Employee Added Successfully")):(l({type:O,payload:e}),d("Employee Updated Successfully")),u()})),children:[Object(z.jsxs)("div",{className:"form-group",children:[Object(z.jsx)("div",{className:"label-div",children:Object(z.jsx)("label",{htmlFor:"title",children:"Full Name"})}),Object(z.jsxs)("div",{id:"input-div",children:[Object(z.jsxs)("div",{className:"name-div",children:[Object(z.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},r("Firstname",{required:"Firstname Required",pattern:{value:/^[a-zA-Z]{2,20}$/i,message:"Firstname must be 2 - 20 alphabet-characters-only long"}})),{},{name:"Firstname",inputMode:"text",placeholder:"First Name"})),Object(z.jsx)(R,{errors:o.Firstname})]}),Object(z.jsxs)("div",{className:"name-div",children:[Object(z.jsx)("input",Object(p.a)({type:"text",id:"Middlename",inputMode:"text",placeholder:"Middle Name"},r("Middlename",{required:"Middlename Required",pattern:{value:/^[a-zA-Z]{2,20}$/i,message:"Middlename must be 2 - 20 alphabet-characters-only long"}}))),Object(z.jsx)(R,{errors:o.Middlename})]}),Object(z.jsxs)("div",{className:"name-div",children:[Object(z.jsx)("input",Object(p.a)({type:"text",id:"Lastname",inputMode:"text",placeholder:"Last Name"},r("Lastname",{required:"Lastname Required",pattern:{value:/^[a-zA-Z]{2,20}$/i,message:"Lastname must be 2 - 20 alphabet-characters-only long"}}))),Object(z.jsx)(R,{errors:o.Lastname})]})]})]}),Object(z.jsxs)("div",{className:"form-group",children:[Object(z.jsx)("div",{className:"label-div",children:Object(z.jsx)("label",{htmlFor:"title",children:"Gender"})}),Object(z.jsx)("div",{id:"input-div",children:Object(z.jsxs)("div",{className:"gender-div",children:[Object(z.jsx)("div",{className:"gender-select-div",children:Object(z.jsxs)("select",Object(p.a)(Object(p.a)({id:"Gender-Select"},r("Gender",{required:"Select Gender",validate:function(e){return"Male"===(n=e)||"Female"===n||"Select Gender";var n}})),{},{children:[Object(z.jsx)("option",{value:"Select Gender",defaultValue:"Select Gender",id:"Gender-Placeholder",children:"Select Gender"}),Object(z.jsx)("option",{value:"Male",children:"Male"}),Object(z.jsx)("option",{value:"Female",children:"Female"})]}))}),Object(z.jsx)(R,{errors:o.Gender})]})})]}),Object(z.jsxs)("div",{className:"form-group",children:[Object(z.jsx)("div",{className:"label-div",children:Object(z.jsx)("label",{htmlFor:"title",children:"Date of Birth"})}),Object(z.jsx)("div",{id:"input-div",children:Object(z.jsxs)("div",{className:"date-div",children:[Object(z.jsx)("input",Object(p.a)({type:"date",id:"DOB",placeholder:"Select Date",min:"2000-01-01",max:D()().format("YYYY-MM-DD")},r("DOB",{required:"Select Date"}))),Object(z.jsx)(R,{errors:o.DOB})]})})]}),Object(z.jsxs)("div",{className:"form-group",children:[Object(z.jsx)("div",{className:"label-div",children:Object(z.jsx)("label",{htmlFor:"title",children:"Salary"})}),Object(z.jsx)("div",{id:"input-div",children:Object(z.jsxs)("div",{className:"salary-div",children:[Object(z.jsx)("input",Object(p.a)({type:"number",id:"Salary",inputMode:"numeric",placeholder:"Salary"},r("Salary",{required:"Salary Required",pattern:{value:/^[0-9]{0,10}$/i,message:"Salary must be non-negative and less than 10 digits"}}))),Object(z.jsx)(R,{errors:o.Salary})]})})]}),Object(z.jsx)("button",{className:"submitButton",type:"submit",name:"submit",children:"S u b m i t"}),Object(z.jsx)("button",{className:"clearButton",onClick:u,type:"reset",children:"C l e a r"})]})})},H=l.b.div(U||(U=Object(a.a)(["\n background: lavender;\n padding: 25px 20px 0px 25px;\n margin: 0px;\n color: #3d3d3d;\n\n\n h1 {\n   border-bottom: 1px solid white;\n   color: #3d3d3d;\n   font-family: sans-serif;\n   font-size: 20px;\n   font-weight: 600;\n   line-height: 24px;\n   padding: 10px;\n   text-align: center;\n }\n\n form {\n   background: white;\n   border: 1px solid #dedede;\n   display: flex;\n   flex-direction: column;\n   justify-content: space-around;\n   margin: 0 auto;\n   max-width: 350px;\n   padding: 20px 20px;\n }\n\n input {\n   border: 1px solid #d9d9d9;\n   border-radius: 2px;\n   box-sizing: border-box;\n   margin-bottom: 1px;\n   padding: 10px;\n   width: 100%;\n   flex: 10;\n }\n\n .form-group{\n  margin: 5px 0px;\n}\n\n\n .Error-Info-Icon{\n   flex: 1;\n   padding: 15px 0px 0px 5px;\n   z-index: 5;\n   font-size: 10px;\n }\n\n .Error-Info-Icon svg{\n  color: #e62727;\n   /* font-family: sans-serif; */\n   /* font-size: 12px; */\n   /* height: 30px; */\n }\n\n .name-div{\n  /* border: 1px solid #d9d9d9; */\n  border-radius: 4px;\n\n   display: flex;\n }\n\n \n .gender-div{\n  /* border: 1px solid #d9d9d9; */\n  border-radius: 4px;\n   display: flex;\n }\n \n .date-div{\n  /* border: 1px solid #d9d9d9; */\n  border-radius: 4px;\n   display: flex;\n }\n\n .salary-div{\n  /* border: 1px solid #d9d9d9; */\n  border-radius: 4px;\n   display: flex;\n }\n\n \n .gender-select-div{\n  flex: 10;\n\n }\n\n #Gender-Select{\n  border: 1px solid #d9d9d9;\n   border-radius: 4px;\n   box-sizing: border-box;\n   padding: 10px 10px 10px 5px;\n   width: 100%;\n   color: #3d3d3d; \n    \n\n }\n\n \n\n #Gender-Placeholder{\n   display: none;\n }\n\n .DateOfBirth-DatePicker{\n  border: 1px solid #d9d9d9;\n   border-radius: 4px;\n   box-sizing: border-box;\n   width: 100%;\n   float: left;\n   flex: 10;\n   color: #3d3d3d;\n }\n\n .searchText{\n  width: 50%;\n  padding: 10px;\n }\n\n .label-div{\n   clear: right;\n   /* float: left; */\n }\n\n label {\n   color: #3d3d3d;\n   display: block;\n   font-family: sans-serif;\n   font-size: 14px;\n   font-weight: 500;\n   margin-bottom: 5px;\n }\n\n\n .submitButton {\n   background-color: #6976d9;\n   color: white;\n   font-family: 'Segoe UI''Courier New', Courier, monospace, sans-serif;\n   font-size: 13px;\n   width: 92%;\n   height: 50px;\n   margin: 10px 0px;\n   border: 0px;\n   align-self: center;\n   cursor: pointer;\n   text-transform: uppercase;\n  font-weight: 600;\n }\n\n .clearButton{\n  background-color: #e62727;\n   color: white;\n   font-family: sans-serif;\n   font-size: 13px;\n   width: 92%;\n   height: 50px;\n   margin: 10px 0px;\n   border: 0px;\n   align-self: center;\n   cursor: pointer;\n   text-transform: uppercase;\n   font-weight: 600;\n\n\n\n }\n\n\n .employeesResult{\n  width: 60%;\n  height: 520px;\n  float: left;\n  margin-right: 50px;\n  overflow-y: scroll;\n  background-color: white;\n  padding: 10px;\n  /* -ms-overflow-style: none;  /* Internet Explorer 10+ */\n    /* scrollbar-width: 2px;\n    scrollbar  */ \n  \n }\n\n .employeesResult::-webkit-scrollbar { \n  background-color: transparent;\n  /* border-left: 1px solid lightgray; */\n  width: 10px;\n  /* border-radius: 20px; */\n\n    /* display: c/ontents;  Safari and Chrome */\n}\n\n.employeesResult::-webkit-scrollbar-thumb {\n  background-color: lightgray;\n  border-radius: 2px;\n  /* outline: 1px solid slategrey; */\n}\n\n.employeesResult::-webkit-scrollbar-thumb:hover{\n  background-color: darkgray;\n  transition: all 5s;\n  /* border-radius: 5px; */\n  /* outline: 1px solid slategrey; */\n}\n\n /* .searchArea{\n  margin:0px;\n  padding:  0px;\n\n } */\n\n \n.Card{\n  margin: 2px 15px 2px 15px;\n  /* border: 1px solid #a3a3a3; */\n  width: 95%;\n  background-color: whitesmoke;\n  /* border-radius: 5px; */\n  padding: 10px 5px;\n  float: left;\n  display: flex;\n  /* text-align: center; */\n\n}\n\n.Employee-Icon{\n  font-size: 50px;\n  display: inline;\n  margin: auto 0px auto 5px;\n  text-align: center;\n  background-color: #151525;\n  padding-top: 5px;\n  /* border-radius: 100px; */\n  \n  /* vertical-align: middle; */\n  flex: 1.5;\n}\n\n.Employee-Icon svg{\n  /* text-align: center;\n   */\n  color: white;\n}\n.Employee-Personal-Info{\n  /* font-size: 50px; */\n  /* vertical-align: middle; */\n  flex: 5;\n  display: inline;\n  margin: auto 5px auto 10px;\n  /* text-align: center; */\n}\n\n.Employee-Personal-Info h5,h6, p{\n  margin: 7px;\n}\n.Employee-Personal-Info p{\n  font-size: 12px;\n\n}\n.Employee-Personal-Info h5{\n  text-transform: capitalize;\n\n}\n.Employee-Salary{\n  /* font-size: 50px; */\n  /* vertical-align: middle; */\n  flex: 3;\n  display: inline;\n  margin: auto 5px auto 0px;\n  text-align: start;\n  font-size: 12px;\n  /* padding-bottom: 8px; */\n\n}\n.Card-Buttons{\n  /* font-size: 50px; */\n  /* vertical-align: middle; */\n  flex: 3;\n  display: inline;\n  margin: auto 5px auto 0px;\n  text-align: justify;\n  \n\n}\n\n.editButton {\n    background-color: whitesmoke;\n    color: #6976d9;\n    font-size: 15px;\n    width: 45%;\n    height: 40px;\n    border: 0px;\n    margin-right: 5px;\n  }\n\n  .deleteButton {\n    background-color: whitesmoke;\n    color: #e62727;\n    font-size: 15px;\n    width: 45%;\n    height: 40px;\n    border: 0px;\n  }\n\n  .Card-Buttons svg {\n    cursor: pointer;\n  }\n\n.Toast-Message {\n  display: flex;\n}\n\n.Toast-Body p{\n  margin: 0px 5px;\n  padding: 0;\n}\n.Toast-Action{\n  margin-top: 15px;\n  display: flex;\n\n}\n\n\n\n.Toastify__toast{\n    position: absolute !important;\n    top: 60px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    height: 100px;\n\n  /* background: #6976d9 !important; */\n\n}\n\n@media screen and (max-width: 650px) {\n\n\n.Employee-Personal-Info p{\nfont-size: 10px !important;\n\ntext-transform: capitalize;\n\n}\n.Employee-Personal-Info strong{\nfont-size: 11px !important;\n\n}\n.Employee-Salary{\n/* font-size: 50px; */\n/* vertical-align: middle; */\n/* flex: 3;\ndisplay: inline;\nmargin: auto 5px auto 0px;\ntext-align: start; */\nfont-size: 10px !important;\n/* padding-bottom: 8px; */\n\n}\n\n\n}\n\n@media screen and (max-width: 950px) {\n\n  section{\n    display: flex;\n    flex-direction: column-reverse;\n    width: 100%;\n  }\n  .employeesResult{\n  width: 95%;\n  /* height: 520px; */\n  /* clear: right !important; */\n  /* margin-right: 0px;\n  margin-top: 10px; */\n  /* margin-top: 10px; */\n  /* margin-left: 5%; */\n  margin: 10px auto 0px auto;\n  /* padding: 25px - 0px 0px; */\n  /* overflow-y: scroll; */\n  background-color: white;\n  padding: 10px 10px 10px 10px;\n  /* -ms-overflow-style: none;  /* Internet Explorer 10+ */\n    /* scrollbar-width: 2px;\n    scrollbar  */ \n  \n }\n\n form {\n   background: white;\n   border: 1px solid #dedede;\n   display: flex;\n   /* clear: both !important; */\n\n   flex-direction: column;\n   justify-content: space-around;\n   margin: 0 auto;\n   max-width: 90%;\n   padding: 20px 20px;\n }\n\n .Card{\n  margin: 2px 10px 2px 5px;\n  /* border: 1px solid #a3a3a3; */\n  width: 95%;\n  background-color: whitesmoke;\n  /* border-radius: 5px; */\n  padding: 5px 5px;\n  float: left;\n  display: flex;\n  /* text-align: center; */\n\n}\n\n.Employee-Icon{\n  font-size: 30px;\n  display: inline;\n  margin: auto auto auto 5px;\n  text-align: center;\n  background-color: #151525;\n  padding-top: 5px;\n  /* border-radius: 100px; */\n  \n  /* vertical-align: middle; */\n  flex: 1.5;\n}\n\n.Employee-Icon svg{\n  /* text-align: center;\n   */\n  color: white;\n}\n.Employee-Personal-Info{\n  /* font-size: 50px; */\n  /* vertical-align: middle; */\n  flex: 7;\n  display: inline;\n  margin: auto 5px auto 5px;\n  /* text-align: center; */\n}\n\n.Employee-Personal-Info h5, h6, p{\n  margin: 7px;\n\n}\n\n.Employee-Personal-Info h6{\n  font-weight: 900; \n\n}\n.Employee-Personal-Info p{\n  font-size: 12px;\n\n}\n.Employee-Personal-Info h5{\n  text-transform: capitalize;\n\n}\n.Employee-Salary{\n  /* font-size: 50px; */\n  /* vertical-align: middle; */\n  flex: 3;\n  display: inline;\n  margin: auto 5px auto 0px;\n  text-align: start;\n  font-size: 12px;\n  /* padding-bottom: 8px; */\n\n}\n.Card-Buttons{\n  /* font-size: 50px; */\n  /* vertical-align: middle; */\n  flex: 4;\n  display: inline;\n  margin: auto 5px auto 0px;\n  text-align: justify;\n  \n\n}\n\n\n}\n"]))),Q=l.b.div(G||(G=Object(a.a)(["\n background: #151525;\n height: 60px;\n padding: 5px;\n align-content: flex-start;\n\n h1, #small-title {\n   /* border-bottom: 1px solid white; */\n   color: white;\n   font-family: sans-serif;\n   font-size: 20px;\n   font-weight: 600;\n   /* line-height: 24px; */\n   padding: 5px 10px;\n   text-align: start;\n   margin-left: 10px;\n   float: left;\n }\n\n .searchArea{\n   background-color: white;\n   float: right;\n   margin-right: 3%;\n   margin-top: 15px;\n   padding: 2px 10px;\n }\n\n .searchArea input{\n  border-left: 1px solid lightgray;\n  border-top: none;\n  border-bottom: none;\n  border-right: none;\n  /* border-radius: 1px; */\n  margin: 2px auto;\n  height: auto;\n  padding: 3px 2px 3px 5px;\n  outline: none;\n }\n \n\n .searchArea label{\n   margin-right: 15px;\n   color: #3d3d3d;\n }\n\n"]))),$=function(){var e=Object(T.useMediaQuery)({query:"(max-width: 750px)"}),n=Object(T.useMediaQuery)({query:"(max-width: 450px)"}),t=Object(x.b)(),r=Object(s.useState)(""),a=Object(u.a)(r,2),c=a[0],o=a[1],i=Object(x.c)((function(e){return e.employee_state.employees})),l=Object(x.c)((function(e){return e.employee_state.loading})),d=Object(x.c)((function(e){return e.employee_state.error}));Object(s.useEffect)((function(){t(""===c?{type:b}:{type:k,payload:c})}),[c]);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(Q,{children:[Object(z.jsxs)("h1",{children:[e&&!n&&"MERN - EMS"," ",n&&""," ",!e&&!n&&"MERN - Employee Management System"]}),Object(z.jsxs)("div",{className:"searchArea",children:[Object(z.jsx)("label",{htmlFor:"title",children:"Search"}),Object(z.jsx)("input",{type:"text",className:"searchText",value:c,onChange:function(e){var n=e.target.value;o(n)}})]})]}),Object(z.jsxs)(H,{children:[Object(z.jsx)(P.a,{bodyClassName:"Undo-Toast-Body"}),Object(z.jsxs)("section",{children:["        ",Object(z.jsxs)("div",{className:"employeesResult",children:[void 0===i&&Object(z.jsx)("p",{children:"No Connection!! Please Try Again!!"}),l&&Object(z.jsx)("div",{children:Object(z.jsx)("p",{children:"Loading..."})}),void 0!==i&&i.length>0&&i.map((function(e){return Object(s.createElement)(B,Object(p.a)(Object(p.a)({},e),{},{key:e._id}))})),0===i.length&&!l&&Object(z.jsx)("p",{children:"No Employees Available"}),d&&!l&&Object(z.jsx)("p",{children:d})]}),Object(z.jsx)(q,{})]})]})]})};var V=function(){return Object(z.jsx)(d,{children:Object(z.jsx)("div",{className:"App",children:Object(z.jsx)($,{})})})},Z=t(19),J={employees:[],loading:!1,error:"",selectedEmployee:{}},K={selectedEmployee:{}},W=Object(Z.b)({employee_state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case m:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,employees:n.payload});case j:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:n.error});case E:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case w:return Object(p.a)(Object(p.a)({},e),{},{loading:!1});case S:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:n.error});case f:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case h:return Object(p.a)(Object(p.a)({},e),{},{loading:!1});case g:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:n.error});case O:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case y:return Object(p.a)(Object(p.a)({},e),{},{loading:!1});case v:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:n.error});case k:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case N:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,employees:n.payload});case _:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:n.error});default:return e}},single_employee_state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case M:return Object(p.a)(Object(p.a)({},e),{},{selectedEmployee:n.payload});case C:return Object(p.a)(Object(p.a)({},e),{},{selectedEmployee:null});default:return e}}}),X=t(46),ee=t(3),ne=t.n(ee),te=t(7),re=t(8),ae=t(25),se=t.n(ae),ce=function(){var e=Object(re.a)(ne.a.mark((function e(){var n,t;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.a.get("/employee/");case 3:return n=e.sent,e.next=6,n.data;case 6:if(t=e.sent,200!==n.status){e.next=11;break}return t.sort((function(e,n){return e.Firstname.toLowerCase().localeCompare(n.Firstname.toLowerCase())})),t.forEach((function(e){e.DOB=D()(e.DOB).format("YYYY-MM-DD")})),e.abrupt("return",t);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(re.a)(ne.a.mark((function e(n){var t,r,a;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/employee/delete/".concat(n._id),e.next=4,se.a.delete(t);case 4:return r=e.sent,e.next=7,r.data;case 7:if(a=e.sent,200!==r.status){e.next=10;break}return e.abrupt("return",a);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}(),ie=function(){var e=Object(re.a)(ne.a.mark((function e(n){var t,r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/employee/register",e.next=4,se.a.post("/employee/register",n);case 4:return t=e.sent,e.next=7,t.data;case 7:if(r=e.sent,200!==t.status){e.next=10;break}return e.abrupt("return",r);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}(),le=function(){var e=Object(re.a)(ne.a.mark((function e(n){var t,r,a;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/employee/update/".concat(n._id),e.next=4,se.a.put(t,n);case 4:return r=e.sent,e.next=7,r.data;case 7:if(a=e.sent,200!==r.status){e.next=10;break}return e.abrupt("return",a);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}(),de=function(){var e=Object(re.a)(ne.a.mark((function e(n){var t,r,a;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/employee/".concat(n),e.next=4,se.a.get(t);case 4:return r=e.sent,e.next=7,r.data;case 7:if(a=e.sent,200!==r.status){e.next=11;break}return a.sort((function(e,n){return e.Firstname.toLowerCase().localeCompare(n.Firstname.toLowerCase())})),e.abrupt("return",a);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),pe=function(e){return e},ue=ne.a.mark(we),xe=ne.a.mark(Se),be=ne.a.mark(ke),me=ne.a.mark(Ne),je=ne.a.mark(_e),fe=ne.a.mark(Me),he=ne.a.mark(Ce),ge=ne.a.mark(Le),Oe=ne.a.mark(Ie),ye=ne.a.mark(De),ve=ne.a.mark(Pe),Ee=ne.a.mark(Fe);function we(){var e,n;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(te.b)(ce);case 3:return e=t.sent,t.next=6,Object(te.c)({type:m,payload:e});case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),n=t.t0,t.next=13,Object(te.c)({type:j,message:n.message});case 13:case"end":return t.stop()}}),ue,null,[[0,8]])}function Se(e){var n,t,r;return ne.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(te.b)(ie,e.payload);case 3:return n=a.sent,a.next=6,Object(te.c)({type:h,message:n});case 6:return a.next=8,Object(te.b)(ce);case 8:return t=a.sent,a.next=11,Object(te.c)({type:m,payload:t});case 11:a.next=18;break;case 13:return a.prev=13,a.t0=a.catch(0),r=a.t0,a.next=18,Object(te.c)({type:g,message:r.message});case 18:case"end":return a.stop()}}),xe,null,[[0,13]])}function ke(e){var n,t,r;return ne.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(te.b)(le,e.payload);case 3:return n=a.sent,a.next=6,Object(te.c)({type:y,message:n});case 6:return a.next=8,Object(te.b)(ce);case 8:return t=a.sent,a.next=11,Object(te.c)({type:m,payload:t});case 11:a.next=18;break;case 13:return a.prev=13,a.t0=a.catch(0),r=a.t0,a.next=18,Object(te.c)({type:v,message:r.message});case 18:case"end":return a.stop()}}),be,null,[[0,13]])}function Ne(e){var n,t;return ne.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(te.b)(oe,e.payload);case 3:return n=r.sent,r.next=6,Object(te.c)({type:w,message:n});case 6:return r.next=8,Object(te.b)(ce);case 8:return t=r.sent,r.next=11,Object(te.c)({type:m,payload:t});case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(0),r.next=17,Object(te.c)({type:S,message:r.t0.message});case 17:case"end":return r.stop()}}),me,null,[[0,13]])}function _e(e){var n;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(te.b)(de,e.payload);case 3:return n=t.sent,t.next=6,Object(te.c)({type:N,payload:n});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(te.c)({type:_,message:t.t0.message});case 12:case"end":return t.stop()}}),je,null,[[0,8]])}function Me(e){var n;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(te.b)(pe,e.payload);case 2:return n=t.sent,t.next=5,Object(te.c)({type:M,payload:n});case 5:case"end":return t.stop()}}),fe)}function Ce(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.d)(b,we);case 2:case"end":return e.stop()}}),he)}function Le(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.d)(E,Ne);case 2:case"end":return e.stop()}}),ge)}function Ie(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.d)(f,Se);case 2:case"end":return e.stop()}}),Oe)}function De(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.d)(O,ke);case 2:case"end":return e.stop()}}),ye)}function Pe(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.d)(k,_e);case 2:case"end":return e.stop()}}),ve)}function Fe(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.d)("EMPLOYEE_SELECTION_REQUEST",Me);case 2:case"end":return e.stop()}}),Ee)}var Te=ne.a.mark(ze);function ze(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.a)([Ce(),Le(),Ie(),De(),Pe(),Fe()]);case 2:case"end":return e.stop()}}),Te)}var Be=Object(X.a)(),Ye=Object(Z.c)(Object(Z.a)(Be))(Z.d)(W);Be.run(ze);var Ae,Re=Ye,Ue=Object(l.a)(Ae||(Ae=Object(a.a)(["\nhtml {\n    height: 100%\n}\nbody {\n    margin: 0;\n    background: lavender;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"])));i.a.render(Object(z.jsxs)(x.a,{store:Re,children:[Object(z.jsxs)(c.a.StrictMode,{children:[Object(z.jsx)(Ue,{}),Object(z.jsx)(V,{})]}),","]}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.8389623d.chunk.js.map