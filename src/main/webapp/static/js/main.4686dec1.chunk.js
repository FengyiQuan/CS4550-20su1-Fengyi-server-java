(this.webpackJsonpassignment3=this.webpackJsonpassignment3||[]).push([[0],{27:function(e,t,n){e.exports=n(39)},32:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(18),o=n.n(s),c=(n(32),n(4)),i=n(5),l=n(7),u=n(6),d=n(8),p=n(3),m=n(14),f="https://wbdv-generic-server.herokuapp.com/api/001886456/courses/",h=function(e){return fetch(f,{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},E=function(e){return fetch(f+e,{method:"DELETE"}).then((function(e){return e.json()}))},b=function(e){return fetch(f+e).then((function(e){return e.json()}))},v=function(){return fetch(f).then((function(e){return e.json()}))},g=function(e,t){return fetch(f+e,{method:"PUT",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},O=n(1),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={editing:!1,course:e.props.course},e.setEditing=function(t){return e.setState({editing:t})},e.ok=function(){return g(e.state.course._id,e.state.course).then((function(t){return e.setEditing(!1)}))},e.updateCourseTitle=function(t){return e.setState((function(e){return{course:Object(O.a)(Object(O.a)({},e.course),{},{title:t})}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",{className:this.state.editing?"table-primary":""},r.a.createElement("td",null,!this.state.editing&&r.a.createElement(d.b,{to:"/editor/course/".concat(this.state.course._id)},this.state.course.title),this.state.editing&&r.a.createElement("input",{className:"form-control",onChange:function(t){return e.updateCourseTitle(t.target.value)},value:this.state.course.title})),r.a.createElement("td",{className:"d-none d-sm-table-cell"},this.state.course.owner),r.a.createElement("td",{className:"d-none d-md-table-cell"},this.state.course.modified),r.a.createElement("td",null,!this.state.editing&&r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.setEditing(!0)}},r.a.createElement("i",{className:"fa fa-pencil"})),this.state.editing&&r.a.createElement("span",null,r.a.createElement("button",{className:"btn btn-success",onClick:this.ok},r.a.createElement("i",{className:"fa fa-check"})," "),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.deleteCourse(e.props.course)}},r.a.createElement("i",{className:"fa fa-trash"})))))}}]),n}(r.a.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",{className:"d-none d-sm-table-cell"},"Owned by"),r.a.createElement("th",{className:"d-none d-md-table-cell"},"Last Modified"),r.a.createElement("th",null,r.a.createElement("i",{onClick:function(){return e.props.setLayout("grid")},className:"fa fa-th pr-2"}),r.a.createElement("i",{className:"fa fa-sort-alpha-asc"})))),r.a.createElement("tbody",null,this.props.courses.map((function(t){return r.a.createElement(N,{deleteCourse:e.props.deleteCourse,key:t._id,course:t})})))))}}]),n}(r.a.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={editing:!1,course:e.props.course},e.setEditing=function(t){return e.setState({editing:t})},e.ok=function(){return g(e.state.course._id,e.state.course).then((function(t){return e.setEditing(!1)}))},e.updateCourseTitle=function(t){return e.setState((function(e){return{course:Object(O.a)(Object(O.a)({},e.course),{},{title:t})}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{className:this.state.editing?"card border-primary":"card"},r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2014/11/18/20/27/elections-536656_1280.png",className:"card-img-top",alt:this.state.course.title}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},!this.state.editing&&r.a.createElement(d.b,{to:"/editor/course/".concat(this.state.course._id)},this.state.course.title),this.state.editing&&r.a.createElement("input",{className:"form-control",onChange:function(t){return e.updateCourseTitle(t.target.value)},value:this.state.course.title})),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},this.state.course.owner+" "+this.state.course.modified)),!this.state.editing&&r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.setEditing(!0)}},r.a.createElement("i",{className:"fa fa-pencil"})),this.state.editing&&r.a.createElement("span",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-success",onClick:this.ok},r.a.createElement("i",{className:"fa fa-check"})," "),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.deleteCourse(e.props.course)}},r.a.createElement("i",{className:"fa fa-trash"}))))))}}]),n}(r.a.Component),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Owned by"),r.a.createElement("th",null,r.a.createElement("i",{onClick:function(){return e.props.setLayout("table")},className:"fa fa-list pr-2"}),r.a.createElement("i",{className:"fa fa-sort-alpha-asc"}))))),r.a.createElement("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6"},this.props.courses.map((function(t){return r.a.createElement(j,{deleteCourse:e.props.deleteCourse,key:t._id,course:t})}))))}}]),n}(r.a.Component),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={layout:e.props.match.params.layout,courses:[],newCourseTitle:"New Title"},e.setLayout=function(t){e.props.history.push("/".concat(t,"/courses"))},e.deleteCourse=function(t){return E(t._id).then((function(n){return e.setState((function(e){return{courses:e.courses.filter((function(e){return e!==t}))}}))}))},e.addCourse=function(t){return h({title:t,owner:"me",modified:(new Date).toDateString()}).then((function(t){return e.setState((function(e){return{courses:[].concat(Object(m.a)(e.courses),[t])}}))}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){return e.setState({courses:t})}))}},{key:"componentDidUpdate",value:function(e,t,n){e.match.params.layout!==this.props.match.params.layout&&this.setState({layout:this.props.match.params.layout})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{className:"form-control",onChange:function(t){return e.setState({newCourseTitle:t.target.value})},value:this.state.newCourseTitle,placeholder:"Course Title"}),r.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(){return e.addCourse(e.state.newCourseTitle)}},"Add Course")),"table"===this.state.layout&&r.a.createElement(y,{setLayout:this.setLayout,deleteCourse:this.deleteCourse,courses:this.state.courses}),"grid"===this.state.layout&&r.a.createElement(_,{setLayout:this.setLayout,deleteCourse:this.deleteCourse,courses:this.state.courses}))}}]),n}(r.a.Component),L=n(13),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={newModuleTitle:"New Module",editingModule:{}},e.renderEditing=function(t){return r.a.createElement("div",null,e.state.editingModule._id===t._id&&r.a.createElement("span",null,r.a.createElement("input",{className:"form-control",onChange:function(t){var n=t.target.value;e.setState((function(e){return{editingModule:Object(O.a)(Object(O.a)({},e.editingModule),{},{title:n})}}))},value:e.state.editingModule.title}),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.deleteModule(t._id)}},r.a.createElement("i",{className:"fa fa-trash"})),r.a.createElement("button",{className:"btn btn-success",onClick:function(){e.props.updateModule(e.state.editingModule._id,e.state.editingModule),e.setState({editingModule:{}})}},r.a.createElement("i",{className:"fa fa-check"}))),e.state.editingModule._id!==t._id&&r.a.createElement("span",null,r.a.createElement(d.b,{to:"/editor/course/".concat(e.props.params.courseId,"/modules/").concat(t._id)},t.title),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.setState({editingModule:t})}},r.a.createElement("i",{className:"fa fa-pencil"}))))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.findModuleForCourse(this.props.params.courseId)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group"},this.props.modules.map((function(t){return r.a.createElement("div",{key:t._id},e.props.params.moduleId===t._id&&r.a.createElement("li",{key:t._id,className:"list-group-item list-group-item-action list-group-item-primary"},e.renderEditing(t)),e.props.params.moduleId!==t._id&&r.a.createElement("li",{key:t._id,className:"list-group-item list-group-item-action"},e.renderEditing(t)))}))),r.a.createElement("input",{className:"form-control",onChange:function(t){return e.setState({newModuleTitle:t.target.value})},value:this.state.newModuleTitle}),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.props.createModule(e.props.params.courseId,{title:e.state.newModuleTitle})}},r.a.createElement("i",{className:"fa fa-plus fa-lg"})))}}]),n}(r.a.Component),k=function(){return fetch("https://wbdv-generic-server.herokuapp.com/api/001886456/modules").then((function(e){return e.json()}))},I=function(e){return fetch("https://wbdv-generic-server.herokuapp.com/api/001886456/modules/"+e,{method:"DELETE"}).then((function(e){return e.json()}))},S=function(e,t){return fetch("https://wbdv-generic-server.herokuapp.com/api/001886456/courses/".concat(e,"/modules"),{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},w=function(e,t){return fetch("https://wbdv-generic-server.herokuapp.com/api/001886456/modules/".concat(e),{method:"PUT",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},D=function(e){return fetch("https://wbdv-generic-server.herokuapp.com/api/001886456/courses/".concat(e,"/modules")).then((function(e){return e.json()}))},M=Object(L.b)((function(e,t){return{modules:e.ModuleReducer.modules,newModuleTitle:e.ModuleReducer.newModuleTitle,params:t.params}}),(function(e){return{findModuleForCourse:function(t){D(t).then((function(t){return e({type:"FIND_MODULES_FOR_COURSE",modules:t})}))},findAllModules:function(){k().then((function(t){return e({type:"FIND_ALL_MODULES",modules:t})}))},updateModule:function(t,n){w(t,n).then((function(t){return e({type:"UPDATE_MODULE",updatedModule:n})}))},createModule:function(t,n){S(t,n).then((function(t){return e({type:"ADD_MODULE",newModule:t})}))},deleteModule:function(t){I(t).then((function(n){return e({type:"DELETE_MODULE",moduleId:t})}))}}}))(C),U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={editingLesson:{}},e.renderTab=function(t,n,a){return r.a.createElement("li",{className:"nav-item"},!a&&r.a.createElement("span",{className:"nav-link"},e.renderEditing(n,t)),a&&r.a.createElement("span",{className:"nav-link active"},e.renderEditing(n,t)))},e.renderEditing=function(t,n){return r.a.createElement("div",null,!t&&r.a.createElement("span",null,r.a.createElement(d.b,{to:"/editor/course/".concat(e.props.params.courseId,"/modules/").concat(e.props.params.moduleId,"/lessons/").concat(n._id)},n.title),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.setState({editingLesson:n})}},r.a.createElement("i",{className:"fa fa-pencil"}))),t&&r.a.createElement("span",null,r.a.createElement("input",{className:"form-control",onChange:function(t){var n=t.target.value;e.setState((function(e){return{editingLesson:Object(O.a)(Object(O.a)({},e.editingLesson),{},{title:n})}}))},value:e.state.editingLesson.title}),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.deleteLesson(n._id)}},r.a.createElement("i",{className:"fa fa-trash"})),r.a.createElement("button",{className:"btn btn-success",onClick:function(){e.props.updateLesson(e.state.editingLesson._id,e.state.editingLesson),e.setState({editingLesson:{}})}},r.a.createElement("i",{className:"fa fa-check"}))))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.findLessonsForModule(this.props.params.moduleId)}},{key:"componentDidUpdate",value:function(e,t,n){e.params.moduleId!==this.props.params.moduleId&&this.props.findLessonsForModule(this.props.params.moduleId)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Lesson Tabs"),r.a.createElement("ul",{className:"nav nav-tabs"},this.props.lessons.map((function(t){return r.a.createElement("div",{key:t._id},e.renderTab(t,e.state.editingLesson._id===t._id,e.props.params.lessonId===t._id||e.state.editingLesson._id===t._id))}))),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){void 0!==e.props.params.moduleId&&e.props.createLesson(e.props.params.moduleId,{title:"New Lesson"})}},r.a.createElement("i",{className:"fa fa-plus fa-lg"})))}}]),n}(r.a.Component),P=Object(L.b)((function(e,t){return{lessons:e.LessonReducer.lessons,params:t.params}}),(function(e){return{createLesson:function(t,n){(function(e,t){return fetch("https://wbdv-generic-server.herokuapp.com/api/001886456/modules/".concat(e,"/lessons"),{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))})(t,n).then((function(t){return e({type:"CREATE_LESSON",newLesson:t})}))},findLessonsForModule:function(t){(function(e){return fetch("https://wbdv-generic-server.herokuapp.com/api/001886456/modules/".concat(e,"/lessons")).then((function(e){return e.json()}))})(t).then((function(t){return e({type:"FIND_LESSONS_FOR_MODULE",actualLessons:t})}))},deleteLesson:function(t){(function(e){return fetch("https://wbdv-generic-server.herokuapp.com/api/001886456/lessons/".concat(e),{method:"DELETE"}).then((function(e){return e.json()}))})(t).then((function(n){return e({type:"DELETE_LESSON",lessonId:t})}))},updateLesson:function(t,n){(function(e,t){return fetch("https://wbdv-generic-server.herokuapp.com/api/001886456/modules/".concat(e),{method:"PUT",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))})(t,n).then((function(t){return e({type:"UPDATE_LESSON",updatedLesson:n})}))},findLesson:function(t){(function(e){fetch("https://wbdv-generic-server.herokuapp.com/api/001886456/lessons/".concat(e)).then((function(e){return e.json()}))})(t).then((function(n){return e({type:"FIND_LESSON",lessonId:t})}))}}}))(U),F=function(e,t){return fetch("https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/lessons/".concat(e,"/topics"),{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},R=function(e){return fetch("https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/lessons/".concat(e,"/topics")).then((function(e){return e.json()}))},A=function(e){return fetch("https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/topics/".concat(e)).then((function(e){return e.json()}))},x=function(e,t){return fetch("https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/topics/".concat(e),{method:"PUT",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},J=function(e){return fetch("https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/topics/".concat(e),{method:"DELETE"}).then((function(e){return e.json()}))},Y=(n(38),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={editingTopic:{}},e.renderPill=function(t,n,a){return r.a.createElement("li",{className:"nav-item"},!a&&r.a.createElement("span",{className:"nav-link"},e.renderEditing(n,t)),a&&r.a.createElement("span",{className:"nav-link active"},e.renderEditing(n,t)))},e.renderEditing=function(t,n){return r.a.createElement("div",null,t&&r.a.createElement("span",null,r.a.createElement("input",{className:"form-control",onChange:function(t){var n=t.target.value;e.setState((function(e){return{editingTopic:Object(O.a)(Object(O.a)({},e.editingTopic),{},{title:n})}}))},value:e.state.editingTopic.title}),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.deleteTopic(n._id)}},r.a.createElement("i",{className:"fa fa-trash"})),r.a.createElement("button",{className:"btn btn-success",onClick:function(){e.props.updateTopic(e.state.editingTopic._id,e.state.editingTopic),e.setState({editingTopic:{}})}},r.a.createElement("i",{className:"fa fa-check"}))),!t&&r.a.createElement("span",{className:"nav-link"},r.a.createElement(d.b,{to:"/editor/course/".concat(e.props.params.courseId,"/modules/").concat(e.props.params.moduleId,"/lessons/").concat(e.props.params.lessonId,"/topics/").concat(n._id)},n.title),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.setState({editingTopic:n})}},r.a.createElement("i",{className:"fa fa-pencil"}))))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.findTopicsForLesson(this.props.params.lessonId)}},{key:"componentDidUpdate",value:function(e,t,n){e.params.lessonId!==this.props.params.lessonId&&this.props.findTopicsForLesson(this.props.params.lessonId)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Topic Pills"),r.a.createElement("ul",{className:"nav nav-pills"},this.props.topics.map((function(t){return r.a.createElement("div",{key:t._id},e.renderPill(t,e.state.editingTopic._id===t._id,e.props.params.topicId===t._id||e.state.editingTopic._id===t._id))}))),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){void 0!==e.props.params.lessonId&&e.props.createTopic(e.props.params.lessonId,{title:"New Topic"})}},r.a.createElement("i",{className:"fa fa-plus fa-lg"})))}}]),n}(r.a.Component)),W=Object(L.b)((function(e,t){return{topics:e.TopicReducer.topics,params:t.params}}),(function(e){return{createTopic:function(t,n){F(t,n).then((function(t){return e({type:"CREATE_TOPIC",newTopic:t})}))},findTopicsForLesson:function(t){R(t).then((function(t){return e({type:"FIND_TOPICS_FOR_LESSON",actualTopics:t})}))},deleteTopic:function(t){J(t).then((function(n){return e({type:"DELETE_TOPIC",topicId:t})}))},updateTopic:function(t,n){x(t,n).then((function(t){return e({type:"UPDATE_TOPIC",updatedTopic:n})}))},findTopic:function(t){A(t).then((function(n){return e({type:"FIND_TOPIC",topicId:t})}))}}}))(Y),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={title:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;b(this.props.match.params.courseId).then((function(t){return e.setState({title:t.title})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-inline"},r.a.createElement(d.b,{to:"/table/courses"},r.a.createElement("i",{className:"fa fa-times fa-2x pr-2"})),r.a.createElement("h2",null,"Course Editor")),r.a.createElement("h1",null,this.state.title),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement(M,this.props.match)),r.a.createElement("div",{className:"col-8"},r.a.createElement(P,this.props.match),r.a.createElement(W,this.props.match),r.a.createElement("h3",null,"Widget List"))))}}]),n}(r.a.Component),H=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home"),r.a.createElement("div",{className:"list-group"},r.a.createElement(d.b,{className:"list-group-item",to:"/editor"},"Course Editor"),r.a.createElement(d.b,{className:"list-group-item",to:"/table/courses"},"Course List"),r.a.createElement(d.b,{className:"list-group-item",to:"/login"},"Login"),r.a.createElement(d.b,{className:"list-group-item",to:"/register"},"Registration"),r.a.createElement(d.b,{className:"list-group-item",to:"/profile"},"Profile")))},$=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"))},q=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"SignUp"))},z=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Profile"))},G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Course Manager !!!!"),r.a.createElement(p.a,{path:"/login",exact:!0,component:$}),r.a.createElement(p.a,{path:"/register",exact:!0,component:q}),r.a.createElement(p.a,{path:"/profile",exact:!0,component:z}),r.a.createElement(p.a,{path:"/",exact:!0,component:H}),r.a.createElement(p.a,{path:"/:layout/courses",exact:!0,component:T}),r.a.createElement(p.a,{path:["/editor/course/:courseId","/editor/course/:courseId/modules/:moduleId","/editor/course/:courseId/modules/:moduleId/lessons/:lessonId","/editor/course/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"],exact:!0,component:B})))}}]),n}(r.a.Component);var K=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(17),V={newModuleTitle:"Some Module",modules:[]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MODULE":return Object(O.a)(Object(O.a)({},e),{},{modules:e.modules.map((function(e){return e._id===t.updatedModule._id?t.updatedModule:e}))});case"FIND_MODULES_FOR_COURSE":case"FIND_ALL_MODULES":return Object(O.a)(Object(O.a)({},e),{},{modules:t.modules});case"ADD_MODULE":return{modules:[].concat(Object(m.a)(e.modules),[t.newModule])};case"DELETE_MODULE":return{modules:e.modules.filter((function(e){return e._id!==t.moduleId}))};default:return e}},Z={lessons:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_LESSON":return{lessons:e.lessons.filter((function(e){return e._id!==t.lessonId}))};case"FIND_LESSONS_FOR_MODULE":return Object(O.a)(Object(O.a)({},e),{},{lessons:t.actualLessons});case"CREATE_LESSON":return{lessons:[].concat(Object(m.a)(e.lessons),[t.newLesson])};case"FIND_LESSON":return Object(O.a)(Object(O.a)({},e),{},{lessons:t.lessons});case"UPDATE_LESSON":return Object(O.a)(Object(O.a)({},e),{},{lessons:e.lessons.map((function(e){return e._id===t.updatedLesson._id?t.updatedLesson:e}))});default:return e}},te={topics:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_TOPIC":return{topics:e.topics.filter((function(e){return e._id!==t.topicId}))};case"FIND_TOPICS_FOR_LESSON":return Object(O.a)(Object(O.a)({},e),{},{topics:t.actualTopics});case"CREATE_TOPIC":return Object(O.a)(Object(O.a)({},e),{},{topics:[].concat(Object(m.a)(e.topics),[t.newTopic])});case"FIND_TOPIC":return Object(O.a)(Object(O.a)({},e),{},{topics:t.topics});case"UPDATE_TOPIC":return Object(O.a)(Object(O.a)({},e),{},{topics:e.topics.map((function(e){return e._id===t.updatedTopic._id?t.updatedTopic:e}))});default:return e}},ae=Object(Q.b)({ModuleReducer:X,LessonReducer:ee,TopicReducer:ne}),re=Object(Q.c)(ae);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L.a,{store:re},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4686dec1.chunk.js.map