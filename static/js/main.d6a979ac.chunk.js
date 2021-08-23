(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('{"education":[{"companyName":"Queen\'s University","jobRole":"Applied Math Engineering","description":["<b>Relevant CS Courses:</b> Algorithms, Data Structures, Operating Systems, Networks, Compilers, and Embedded Systems","<b>Relevant math coursework:</b> Linear Algebra, Analysis, Stochastics, Cryptography, Control Theory"],"startDate":"09/2017","endDate":"04/2022"}],"work":[{"companyName":"Wave","companyTeam":"Accounting Team","jobRole":"Software Co-op","description":["Developed features for Wave\u2019s accounting app using ReactJS that reached  <b>400,000 monthly users</b>","Co-designed a tool that surfaced unmocked GraphQL requests which <b>identified hundreds of broken tests</b>","Built out infrastructure using Django, Rest APIs, GraphQL, and gRPC"],"startDate":"05/2021","endDate":"08/2021"},{"companyName":"Calian","jobRole":"Junior Software Engineer","companyTeam":"MaestroEDE Product","description":["Created client-side NATO requested features including infrastructure for <b>localization</b>","Batched requests for bulk operations and <b>improved processing time by 60%</b> by optimizing Javascript code","Spearheaded an integration testing initiative which aimed to <b>cut QA spending and time in half</b> upon completion"],"startDate":"05/2020","endDate":"04/2021"},{"companyName":"RMC","jobRole":"Junior Software Engineer","companyTeam":"Bridge Analysis","description":["Consolidated redundant business logic and converted Visual Basic code to C#","Separated code for data access and modifications from computations and UI","Updated persistent data storage from text files to a relational database, benefitting <b>data integrity</b>"],"startDate":"05/2019","endDate":"08/2019"}]}')},function(e){e.exports=JSON.parse('[{"name":"Languages","data":[{"name":"Javascript","description":"I have over <b>2 years</b> of experience working with Javascript, strong in ES6 syntax.","moreInfo":[{"name":"Javascript","link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}]},{"name":"Python","description":"I have <b>4 months</b> professional experience in Python, using it for server-side code at my Wave co-op, and around 1 year casual experience using it for interviews and interview prep","moreInfo":[{"name":"Python","link":"https://www.python.org/"}]},{"name":"PHP","description":"I have <b>1.5 years</b> experience with server side PHP and in Wordpress applications.","moreInfo":[{"name":"PHP","link":"https://www.php.net/"}]},{"name":"C#","description":"I have <b>4 months</b> experience using C#, and over 2 years experience using Java. I mention Java because they are very similar languages with a ton of crossover","moreInfo":[{"name":"C#","link":"https://docs.microsoft.com/en-us/dotnet/csharp/"}]}]},{"name":"Frameworks","data":[{"name":"ReactJS","description":"I have been using ReactJS for <b>4 months</b>, and have quickly ramped up to writing production quality frontend","moreInfo":[{"name":"ReactJS","link":"https://reactjs.org/"}]},{"name":"Django","description":"I\'ve used Django for server-side logic at my Wave co-op for <b>4 months</b>. We used the CQRS event sourcing pattern, so my background revolves around that architecture.","moreInfo":[{"name":"Django","link":"https://www.djangoproject.com/"}]},{"name":"Laravel","description":"I worked with Laravel and PropelORM at my Calian co-op for <b>1 year</b>.","moreInfo":[{"name":"Laravel","link":"https://laravel.com/"}]},{"name":"ExtJS","description":"ExtJS is a frontend framework that I used at my Calian co-op for <b>1 year</b>. It uses MVC architecture which taught me important design patterns and optimizations.","moreInfo":[{"name":"ExtJS","link":"https://www.sencha.com/products/extjs/"}]}]},{"name":"Data Exchange","data":[{"name":"REST","description":"I am quite experienced with REST, using it for over <b>2 years</b>. I\'ve had the opportunity to dig deep into the networking aspects, exploring batching and optimizations.","moreInfo":[{"name":"REST","link":"https://en.wikipedia.org/wiki/Representational_state_transfer"}]},{"name":"GraphQL","description":"I have <b>4 months</b> of experience withGraphQL. I\'ve written resolvers for queries, and defined schema as well as tests.","moreInfo":[{"name":"GraphQL","link":"https://graphql.org/"}]},{"name":"gRPC","description":"gRPC is a method of data exchange that I\'ve gotten to use during my time at Wave, gaining <b>4 months</b> experience.","moreInfo":[{"name":"gRPC","link":"https://grpc.io/"}]},{"name":"Protobuf","description":"Using gRPC necessitates pb, and using it for <b>4 months</b>, I\'ve gotten the opportunity to define plenty of messages, mappers and transformers.","moreInfo":[{"name":"Profobuf","link":"https://developers.google.com/protocol-buffers"}]}]},{"name":"Tools","data":[{"name":"Docker","description":"I have <b>2 years</b> of experience with Docker. I\'ve used it to create my own microservices, as well as manage orchestration of an ecosystem of services with docker-compose.","moreInfo":[{"name":"Docker","link":"https://www.docker.com/"}]},{"name":"Logging","description":"I have only <b>2 months</b> experience of using production logging technologies in a meaningful way. I\'ve been able to build out Datadog dashboards, trace bugs with Sentry and debug problems with Sumo Logic.","moreInfo":[{"name":"Datadog","link":"https://www.datadoghq.com/"},{"name":"Sentry","link":"https://sentry.io/welcome/"},{"name":"Sumo Logic","link":"https://www.sumologic.com/"}]},{"name":"Testing","description":"I have <b>2 years</b> combined experience with various testing frameworks, be it Jest for React, Pytest for Django, or SenchaTest (built on Jasmine) for ExtJS. ","moreInfo":[{"name":"Jest","link":"https://jestjs.io/"},{"name":"Pytest","link":"https://docs.pytest.org/en/6.2.x/"},{"name":"Sencha Test","link":"https://docs.sencha.com/sencha_test/2.2.0/guides/product_overview.html"}]},{"name":"CD/CI","description":"On the CD front: I\'ve used Jenkins for deploymments for <b>4 months</b>, and CircleCI for creating various testing steps in pipelines for <b>4 months</b> as well. I\'ve also used Gitlab CI for <b>1 year</b>, which is quite similar to CircleCI.","moreInfo":[{"name":"Jenkins","link":"https://www.jenkins.io/"},{"name":"CircleCI","link":"https://circleci.com/"},{"name":"GitlabCI","link":"https://docs.gitlab.com/ee/ci/"}]}]}]')},,function(e){e.exports=JSON.parse('[{"storyTitle":"Flakey Tests - Wave","id":"story-flakey-tests","content":{"problem":"The shared front-end service in Wave used the Apollo GraphQL client to make requests. In unit tests, these requests needed to be mocked so that the Promise will resolve and that the fake data from the response can be used in the test. When these were not mocked, the Promise would non-deterministically reject if given enough time, resulting in random test failures.","solution":"A coworker and I created a strict wrapper component which provided fine-tuned control over error handling and injecting context. Implementing this tool enabled reliable reporting of unmocked requests and context including the expected variables as well as where in the component the request is made. Additionally, I implemented a linter which enforced the use of this wrapper.","result":"The switch to using our tool across the front-end was made and we were able to identify hundreds of occurences of unmocked requests. The work to add mocks was distributed amongst codeowners. Best practices were also defined and the linter was turned on to prevent this from happening again."}},{"storyTitle":"Request Batching - Calian","id":"story-request-optimization","content":{"problem":"The main app had many list views where various actions could be performed on records. There were customer requests for bulk operations to be added, where multiple records could be selected an apply an action to all of them. There were concerns about this being slow because the infrastructure only allowed for updating individual reords.","solution":"I designed and implement bulk action routes in the server. I added the changes in the client to utilize the new routes, but unfortunately, these actions were still slow. After analyzing the data flow, I found that we used the framework\'s Ext.each() loop to send push notifications to clients, which was slow because each iteration fired a callback function.","result":"I optimized the code using regular for loops, and measuring the difference showed that the overall time of making bulk updates improved by 60%. Eventually, we got the feature in the hands of customers, who were very happy to see these changes fulfilled."}},{"storyTitle":"Data Integrity - RMC","id":"story-data-integrity","content":{"problem":"The program I was working on was storing data in text files with a defined schema, and would be used by multiple different applications. The trouble was that the interpretation of the files would de-sync, and the applications would throw errors. It was also very difficult to maintain backwards compatibility for the same reason. On top of that, the files were editable with no permissions required, so someone could update the file and accidentally invalidate the whole record.","solution":"First, the read/write operations were consolidated and put in a library, so that there was one source of truth. Next, the data was transferred to an embedded SQLite database, and a utility app was created to import/export from the DB, as well as bring old versions of files up to the most recent format.","result":"This resulted in much safer data. It stopped users changing the data directly in files (which was a big problem before) and saved maintainers a lot of work helping clients reconcile their corrupted data."}}]')},,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,s=n(1),i=n.n(s),o=n(17),r=n.n(o),c=(n(22),n(23),n(24),n(10)),d=(n(25),n(6)),l=n(7),m=n.n(l),u=n(8),h=n(0),b=function(e){var t=e.logo,n=e.companyName,a=e.companyTeam,s=e.jobRole,i=e.description,o=e.startDate,r=e.endDate,c=Object(u.useMediaQuery)({query:"(max-width: 599px)"}),l=a&&!c?n+" - "+a:n;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("img",{className:"company-logo",src:t,alt:n}),Object(h.jsxs)("div",{className:"company-info",children:[Object(h.jsx)("div",{className:"company-name",children:l}),a&&c&&Object(h.jsx)("div",{className:"company-name",children:a}),Object(h.jsx)("div",{children:s}),Object(h.jsx)("div",{className:"employment-date",children:o+" - "+r})]})]}),Object(h.jsx)("ul",{className:"description",children:i.map((function(e,t){return Object(h.jsx)("li",{children:Object(d.a)(m.a.sanitize(e))},t)}))})]})},p=n.p+"static/media/rmc-logo.fd9b2369.png",f=n.p+"static/media/queens-logo.ff77f1ee.png",g=function(){var e={Wave:"data:image/png;base64,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",Calian:"data:image/png;base64,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",RMC:p,"Queen's University":f};return Object(h.jsxs)("div",{className:"resume",children:[Object(h.jsx)("div",{className:"section-header",children:Object(h.jsx)("h2",{children:"Experience"})}),Object(h.jsx)("hr",{className:"divider"}),c.work.map((function(t){return Object(h.jsx)(b,{logo:e[t.companyName],companyName:t.companyName,companyTeam:null===t||void 0===t?void 0:t.companyTeam,jobRole:t.jobRole,description:t.description,startDate:t.startDate,endDate:t.endDate})})),Object(h.jsx)("div",{className:"section-header",children:Object(h.jsx)("h2",{children:"Education"})}),Object(h.jsx)("hr",{className:"divider"}),c.education.map((function(t){return Object(h.jsx)(b,{logo:e[t.companyName],companyName:t.companyName,jobRole:t.jobRole,description:t.description,startDate:t.startDate,endDate:t.endDate})}))]})},j=(n(41),n.p+"static/media/pic-of-edan.3eec0f25.jpg"),A=function(e){return window.open(e,"_blank")},v=n.p+"static/media/edan-parker-resume.dae81a86.pdf",w=function(){return Object(h.jsxs)("div",{className:"icon-set",children:[Object(h.jsxs)("div",{className:"icon-element",children:[Object(h.jsx)("i",{className:"fa fa-github fa-4x",onClick:function(){return A("https://github.com/edan-parker")}}),Object(h.jsx)("span",{className:"icon-text",children:"github"})]}),Object(h.jsxs)("div",{className:"icon-element",children:[Object(h.jsx)("i",{className:"fa fa-file-o fa-4x",onClick:function(){return A(v)}}),Object(h.jsx)("span",{className:"icon-text",children:"resume"})]}),Object(h.jsxs)("div",{className:"icon-element",children:[Object(h.jsx)("i",{className:"fa fa-linkedin fa-4x",onClick:function(){return A("https://www.linkedin.com/in/edanparker/")}}),Object(h.jsx)("span",{className:"icon-text",children:"linkedin"})]})]})},x=function(){return Object(h.jsxs)("div",{className:"bio-container",children:[Object(h.jsx)("img",{className:"pic-of-me",src:j,alt:"Me on my balcony in Kingston"}),Object(h.jsxs)("div",{className:"bio",children:[Object(h.jsx)("h1",{children:"Edan Parker"}),Object(h.jsx)("h2",{children:"Full Stack Generalist"}),Object(h.jsx)(w,{}),Object(h.jsxs)("div",{className:"bio-text",children:["I'm an"," ",Object(h.jsx)("em",{onClick:function(){A("https://www.queensu.ca/mathstat/mthe")},className:"text-link",children:"applied math engineering"})," ","student graduating from Queen's University in 04/2022. I am passionate about fullstack development and self-learning topics in distributed computing."]})]})]})},O=n(11),y=(n(42),n(2)),N=n(12),k=(n(43),function(e){var t=e.children,n=e.smallContent,a=Object(s.useState)(0),i=Object(y.a)(a,2),o=i[0],r=i[1],c=Object(s.useCallback)((function(){r(o>0?o-1:t.length-1)}),[t.length,o]),d=Object(s.useCallback)((function(){o<t.length-1?r(o+1):r(0)}),[t.length,o]);return Object(s.useEffect)((function(){var e=function(e){37===e.keyCode?c():39===e.keyCode&&d()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[d,c]),Object(h.jsx)("div",{className:"carousel-container",children:Object(h.jsxs)("div",{className:"main-row",children:[Object(h.jsx)("i",{className:"fa fa-chevron-circle-left fa-2x arrow",onClick:c}),Object(h.jsx)("div",{className:n?"small-content":"",children:t[o]}),Object(h.jsx)("i",{className:"fa fa-chevron-circle-right fa-2x arrow",onClick:d})]})})}),D=(n(44),function(e){var t=e.children,n=e.handleClose,a=e.title,i=e.small,o=Object(s.useRef)(null);return Object(s.useEffect)((function(){var e=function(e){o.current.contains(e.target)||n()};document.addEventListener("mousedown",e);var t=function(e){27===e.keyCode&&n()};return document.addEventListener("keydown",t),function(){document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}}),[n]),Object(s.useEffect)((function(){return Object(N.a)(o),function(){return Object(N.b)(o)}}),[o]),Object(h.jsx)("div",{className:"content-modal",children:Object(h.jsxs)("div",{className:"modal-container",ref:o,children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h2",{children:a}),Object(h.jsx)("i",{className:"fa fa-2x fa-times-circle close-button",onClick:n})]}),Object(h.jsx)(k,{smallContent:i||!1,children:t})]})})}),C=function(e){var t=e.skillText,n=e.handleSkillClick;return Object(h.jsx)("button",{className:"skills-button",onClick:n,children:t})},I=function(e){var t=e.fieldSetName,n=e.skillsData,a=Object(s.useState)(!1),i=Object(y.a)(a,2),o=i[0],r=i[1],c=Object(s.useState)(JSON.parse(JSON.stringify(n))),l=Object(y.a)(c,2),u=l[0],b=l[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("fieldset",{className:"skills",children:[Object(h.jsx)("legend",{children:t}),n.map((function(e){return Object(h.jsx)(C,{skillText:e.name,handleSkillClick:function(){r(!o);for(var t=u;t[0].name!==e.name;)t.push(t.shift());b(t)}})}))]}),o&&Object(h.jsx)(D,{title:t,handleClose:function(){return r(!o)},small:!0,children:u.map((function(e){return Object(h.jsxs)("div",{className:"skills-modal-content",children:[Object(h.jsx)("h1",{children:e.name}),Object(h.jsxs)("span",{className:"skills-modal-text",children:[Object(d.a)(m.a.sanitize(e.description)),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"See"," ",e.moreInfo.map((function(e){return Object(h.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.name})}))," ","for more info."]})]})}))})]})},L=function(){for(var e=[],t=[],n=0;n<O.length;n++)t.push(O[n]),n%2!==0&&(e.push(t),t=[]);return Object(h.jsx)(h.Fragment,{children:e.map((function(e){return Object(h.jsxs)("div",{className:"skill-group",children:[Object(h.jsx)(I,{fieldSetName:e[0].name,skillsData:e[0].data}),Object(h.jsx)("span",{className:"skill-separator"}),Object(h.jsx)(I,{fieldSetName:e[1].name,skillsData:e[1].data})]})}))})},B=n(5),z=n(3);n(45);!function(e){e.PROBLEM="Problem",e.SOLUTION="Solution",e.RESULT="Result"}(a||(a={}));var S=function(e){var t=e.text,n=e.type;return Object(h.jsxs)("div",{className:"sub-item",children:[Object(h.jsx)("h2",{className:"title",children:n}),Object(h.jsx)("div",{className:"text",children:t})]})},Z=(n(46),function(e){var t=e.content,n=e.handleClose;return Object(s.useEffect)((function(){var e=function(e){32===e.keyCode&&(n(),e.preventDefault())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[n]),Object(h.jsx)("div",{className:"content-row",children:Object(h.jsxs)(k,{smallContent:!1,children:[Object(h.jsx)(S,{text:t.problem,type:a.PROBLEM}),Object(h.jsx)(S,{text:t.solution,type:a.SOLUTION}),Object(h.jsx)(S,{text:t.result,type:a.RESULT})]})})}),M=function(e){var t=e.content,n=e.handleClose,s=e.storyTitle;return Object(h.jsxs)(D,{handleClose:n,title:s,children:[Object(h.jsx)(S,{text:t.problem,type:a.PROBLEM}),Object(h.jsx)(S,{text:t.solution,type:a.SOLUTION}),Object(h.jsx)(S,{text:t.result,type:a.RESULT})]})},P=function(e){var t=e.storyTitle,n=e.content,a=e.toggleStory,s=e.visible,i=Object(u.useMediaQuery)({query:"(max-width: 599px)"})?Object(h.jsx)(M,{content:n,handleClose:a,storyTitle:t}):Object(h.jsx)(Z,{content:n,handleClose:a});return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"experience-story-button"+(s?" open":""),onClick:a,children:[Object(h.jsx)("h3",{children:t}),Object(h.jsx)("div",{className:s?"up":"down",children:Object(h.jsx)("i",{className:"fa fa-2x fa-angle-"+(s?"up":"down")})})]}),s?i:null]})},W=n(13),T=function(){var e=W.reduce((function(e,t){return Object.assign(e,Object(z.a)({},t.id,!1))}),{}),t=Object(s.useState)(e),n=Object(y.a)(t,2),a=n[0],i=n[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section-header",children:Object(h.jsx)("h2",{children:"Experience Stories"})}),Object(h.jsx)("hr",{className:"divider"}),Object(h.jsx)("div",{className:"section-description",children:"This is a section to highlight some particularly interesting programming challenges that I've faced and how I solved them. Click one of the headers below and check it out!"}),W.map((function(t){return Object(h.jsx)(P,{storyTitle:t.storyTitle,content:t.content,toggleStory:function(){var n=a[t.id];i(n?Object(B.a)(Object(B.a)({},a),{},Object(z.a)({},t.id,!1)):Object(B.a)(Object(B.a)({},e),{},Object(z.a)({},t.id,!0)))},visible:a[t.id]})}))]})};var Q=function(){return Object(h.jsxs)("div",{className:"main-site",children:[Object(h.jsx)(x,{}),Object(h.jsx)(L,{}),Object(h.jsx)(T,{}),Object(h.jsx)(g,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root")),E()}],[[47,1,2]]]);
//# sourceMappingURL=main.d6a979ac.chunk.js.map