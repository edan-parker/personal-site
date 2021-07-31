(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('{"education":[{"companyName":"Queen\'s University","jobRole":"Applied Math Engineering","description":[{"text":"CS courses include algorithms, data structures, operating systems and embedded systems","id":"queens_algo"},{"text":"Math courses include linear algebra, stochastics, analysis, control theory","id":"queens_math"}],"startDate":"09/2017","endDate":"04/2022"}],"work":[{"companyName":"Wave","jobRole":"Software Coop","description":[{"text":"Created customer-facing features with ReactJS functional components","id":"wave_react"},{"text":"Worked with Rest and GraphQL APIs, using the Apollo client to fetch data","id":"wave_rest_graphql"},{"text":"Used RPC endpoints for cross-service communication","id":"wave_rpc"},{"text":"Server-side code with Django and typed Python","id":"wave_django_python"},{"text":"Test driven development with Jest in the frontend and Pytest in the backend","id":"wave_tdd"},{"text":"Distributed computing with SQS message queues","id":"wave_sqs"},{"text":"Logging and tracing using sentry, datadogs and sumologic","id":"wave_observability"}],"startDate":"05/2021","endDate":"08/2021"},{"companyName":"Calian","jobRole":"Junior Software Engineer","description":[{"text":"Designed robust client-side features in ExtJS","id":"calian_extjs"},{"text":"Wrote multiple Rest API routes using PHP, working with MySQL and Propel ORM","id":"calian_php"},{"text":"Improved batch HTTP request handling time by 60% by restructuring notification handling and optimizing Javascript code","id":"calian_http"},{"text":"Wrote unit tests with Postman and Integration Tests with Sencha Test, and integrated these into the Gitlab CI pipeline","id":"calian_test"},{"text":"Created micro-services with Docker containers and managed Docker in Gitlab runners","id":"calian_docker"}],"startDate":"05/2020","endDate":"04/2021"},{"companyName":"RMC","jobRole":"Junior Software Engineer","description":[{"text":"Worked with both C#.NET and VB.NET to modify an existing program, and develop new assets and adapting program to C#","id":"rmc_c#"},{"text":"The role was efficiency-oriented, aiming to minimize redundancies, abstracting shared programs into dlls, diminishing leakage, and increasing overall security","id":"rmc_abstraction"},{"text":"Implemented objected oriented/polymorphic practices, writing solid, testable code that used generics, reflection, and encapsulation","id":"rmc_oop"},{"text":"Wrote unit tests with Postman and Integration Tests with Sencha Test, and integrated these into the Gitlab CI pipeline","id":"calian_test"},{"text":"Created and worked with a SQLite embedded database","id":"rmc_sqlite"}],"startDate":"05/2019","endDate":"08/2019"}]}')},,,,,,,,function(e){e.exports=JSON.parse('[{"storyTitle":"Flakey Tests","content":{"problem":"The shared front-end service used the Apollo GraphQL client to make requests. In unit tests, these requests needed to be mocked so that the Promise will resolve and that the fake data from the response can be used in the component. When these were not mocked, the Promise would non-deterministically reject if given enough time, resulting in random test failures.","solution":"A coworker and I created a strict wrapper component which provided fine-tuned control error handling and more context. Implementing this tool enabled reliable reporting of unmocked requests and context including the expected variables as well as where in the component the request is made. Additionally, I implemented a linter which enforced the use of this wrapper.","result":"The switch to using our tool across the front-end was made and was able to identify hundreds of occurences of unmocked requests. The work to add mocks was distributed amongst codeowners. Best practices were also defined and aforementioned linter was turned out to prevented this happening again."}}]')},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,i,s=n(1),c=n.n(s),r=n(10),o=n.n(r),d=(n(16),n(17),n(18),n(3)),l=(n(19),n(8)),m=n(0),u=function(e){var t=e.logo,n=e.companyName,a=e.jobRole,i=e.description,c=e.startDate,r=e.endDate;Object(s.useEffect)((function(){var e,t=Object(l.a)(i);try{for(t.s();!(e=t.n()).done;){var n=e.value;document.addEventListener("scroll_"+n.id,o)}}catch(a){t.e(a)}finally{t.f()}return function(){var e,t=Object(l.a)(i);try{for(t.s();!(e=t.n()).done;){var n=e.value;document.removeEventListener("scroll_"+n.id,o)}}catch(a){t.e(a)}finally{t.f()}}}));var o=function(e){var t=e.detail.id,n=document.getElementById(t);n&&(n.classList.add("highlight"),setTimeout((function(){return n.classList.remove("highlight")}),2e3))};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("img",{className:"company-logo",src:t,alt:n}),Object(m.jsxs)("div",{className:"company-info",children:[Object(m.jsx)("div",{className:"company-name",children:n}),Object(m.jsx)("div",{children:a}),Object(m.jsx)("div",{className:"employment-date",children:c+" - "+r})]})]}),Object(m.jsx)("ul",{className:"description",children:i.map((function(e,t){return Object(m.jsx)("li",{id:e.id,children:e.text},t)}))})]})},b=n.p+"static/media/rmc-logo.fd9b2369.png",A=n.p+"static/media/queens-logo.ff77f1ee.png",h=function(){var e={Wave:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAT40lEQVR4AezbAYbDQACF4UlUADlD7zJ7hUCP1FyjR2iPEYAiyAlKAAS8fchSq2u7TdvNjP/jAQb4MYwJS0naeNHbe0ev9y7epNuAaW6kn5vZe3FuKSzZowcrr/EO3qjnAMa5qcar3hF04e28Qa8FDHNrxauCjl6n9wI6Lz4z6NJrBfyv1iuXBl17JwHrcPLqR4PeemcB63L2tn8NuibmlSPq+t6gS64ZSMDJK+8JuhWQhva3oD8EpCX+FHThdUoL0HnFraB3ShOw+x505Q1KEzB41XXQjdIGNNdBH5Q24PAV9MYblTZg9DZBUlQegJjTQwqwD5KOygNwDJJ65QHog6SL8gBcQka/s4EpKCMAQYOgAYIGCBogaBA0QNAAQQMEDRA0CBq4Mn2ydxZMciRJFv4Ty3y8w8w8s8zMzLxixt1BMayYmZm5GaRmZmbmTox39dRKM11JM4pqVUZWn8UzC6m7cOCrKE9/Hu4O0DoEVPQIFHcKlHYJ1PcD/ZYGWmuMyHKB/A6BPSUu3rnmYmaygymJDiYmOJgUWtOSHMxPc7A2z8XFOoHmwRgFWksru01gSZZLeDE+fgTgyYkjQHtrMlfo9gnxI4+ZEQJ+a5GL6l6hgdaKDTGE2Fl8HWQugiu9CDjB5s59vNKF4WigtQJU1zCwLNvFuPhwWCMHm6+xOtdFt6GB1gpAAxawLMvFeAmYZRdfi2FLj6mB1lIoAWBXibczR3eNi3OwLs+F5WqgtdSImQwvXvZl8YNyrlZooLX8l+MC/8pxmanwDWhmSGalOGgdFBpoLX9V2SPC0nH+7dJHKlwNtJa/Ol4VHjv7t0u/nu745yxqoLUcASyleaIAaM9hLOwUGmgtf9Q4AExPUgDzzReHNRpoLZ8U3yDk885RykszPaiB9kU697yhwMtuqFl8r00FGmgtH9RjAHNTWVykdofeXKiB1vKnmk7p7uwBfaBcA63lg/aWqo2fPRs8sVFfFEZZWsMO8PY1rzxU3Zqa5KCuTwMdZWlVjLiDnkOoLAe9KFNBkZI6oLVsFyhsEdiX4+CtSzYmnrDw96MWZpy2sSrZweVyF239An7rTI3AuADi58Pa+v7/oT4D2JPt4Me7TTyx3MC9C0fWfTetexYYeGCRgVfXmpgeAjy9zvXNHVyRrc4dVOkSaqAV6GKZi29uNQkwgcUjSww8uvTd18NLRmB/JPTzhOMWarqiC0HLIHj2T2m4wTqOf6SprePQQPtw7H9hnE1ACTJhjWgRaIL92joT8ZUuoqWUJvXZDb7ftiJX10OPVQ1awKQTFsMIb0ce9XpwsYEnlxs4XxYdIGhsBAF0arMYq0DrC7+ZZwizDLDyUD+70kR2491B3WeCfTSUuoMMbdjPo20IYxForc1XHYYKBDGq6/5FBr6z3UKvgVErv51HrdRfDPJEjCvGHNBaRS0CT6/ghR0hjP7irr8mxcZodaAsgHBDQcmoBtoHcQf66xGLKTjC58t6aImB19aaaB1Frtp0gQUZLiYp3qG5qnvHHNBaGfWul53g374thjO7sxxEqupeKAeZHx72xDMdjDWgteactXGvxIVgNGLp3x6wIo5Jz9cG4w7uL3PHWuckre5h4HPrTTy02H+gGZ+/vMaIKOwQAliV6yovF+X75bWLsQa0VmKViwcVwHwz1JkN8qC0D4F9MZS6g0wNzktz0GtirAGt9fZl20vVKVl0Hk9G4LylNcu7gwEet9JAt/YMI6GwGTviyrD0eD4WHMnB6tOFOJxWjbyaTgyZNvyWYQPf2WYq3aGZSWGxk6y2FweTrktuEhroO8lyXJzJqsdvVyXgkfGH8PFf78IHfrYdH/g51w7+jQ/+Ygf+/fd78MqsE5izOwPXytvglwqaBR5fxuxGbALNrqL/THcxSbE7OD3ZuVNHfw10SkkrvvXOBXzkVzsJLT4WgvkTv92NT95mfeI3u/HR0OMI+KdCv/902RWkl0Uf7I3pjnx2I4CQo6gzAHcw3sHybBeO0EDfVq4QWHmqgLsuPhQCmcBGsgj3B38+smu/czgHpu0iGhIC+M1+i6k0pUDzojBL8qLwaGUw4cbpaqFHUrwbzHP3ZBBkfPw3uwjoqBefzx2b4UrPoIm7VV23wPP/ImBqYX55tVzaznKBxZnqzw4yw1HeAw307bTsRD7DC+6yhDIq6/2hmPuXK+Pu+qLxaIETZnWrMVb4rSAkNsD6PnDeiXJ38M2rDoZsDfQtSipqwad+t1tyZ44c6nl7M3A3mnLSUg4004Mb0uVouVwnMD5OfbjBMXBh0kAbloOvvXEuFGrsjDrMXlzND8rl/CaMRt1DwOfpDioMN5hJeWyZgfxmIRXfr80Lxh3MahUa6HCdzqzHh3/pwezP+nDow/LV0IeGH55IlaDYHfQK/ZnzHpbYoLsMYHaqYncwtOakOreZfKWB5oUbMxMEz9fFFOD5nPrg3UHJcOOdKzZklNkqAtmd1+e7CNufNdAt3UN4aNx108R3oPmh+fO65Mjdwe0mHlC8Q7P4KanKhYx2lwSTrou7NZ2ogT5xrdYLN3xfH/v1Tjw95Sh6B82YdgcJ8xc2mOgZxh01ZIOZBuXuIDMqDf0IlwZ6wuZUBeGGd3G4C//xhz3Ir+2ErDale+cG1drdU0/ZkFFZNwiY8rODHLJpCw30/1HfkIXnph2jba0G6ND6aCi0uZDTABm5AbmDBPqEZG/lk9XBFPNzvneYNNCJRS1Mp3lGipJFF5JhjozqewSeC8AdfHGVgUaJs3mOAEccK3cHGd6UdAkNdLhe35+F9/98uzKYvUzHuex6yOhYEO7gQgN/OCjnDjZdHwSkvtXX6+kuBm1ooG+WaTn4wvzTBEwZzPwm+Lff7UFWZTtkNDkgd3BbhhPcICCJcGNHsYswaaB5YcaKOJXhBktQH5t4GJ19hoQ7KEbcwcVq3UG2AitpE5AQBwEFAvTVFqGBDtfqM4X4gOJwg4VPv1gRJ+cOVqp3B1n7/IOdJixHbhDQvADcwdkpDjqGoIG+WUIIfG/hxZAdvUMp0DzlsvVyKWT0VhDu4AIDi+NtyCgngFZfdAdX597iDmqga9v6cc9f9nuVdcpy0P/z530ob+rFnWQ4wLd5djAAdzC11oWM9pUGEz9fqBUIkwZ6X1IlPqh4d6Yb+Y23zsFxRcy6g1/cYEo1aDSuDwJyMSmAQUC1fQiXBvr3axKVA814fcnxPMhoQ5oTSDHStNM2ZFTZIwJxBxdm3DIISAPd3jfMTAMzDkrTdTw8m1nRLlVb/OsA3MH7I3AHz1Srz27QjTxSIRAmDfTZrHrmnpWbKa/OPolhiU6C9TfODj6i2B18QdIdZMS0MtsN5HR3UacG+hZN3ZbObIPycGPWrmsxfXaQ3woiRgcBTb79ICAN9KBh48WZJ/BRxTs03+9SXqPk2UE7EHdwfZoT04OAtt4aDmmg00pbvao3pe7gk5OPoHvAlDo7+DnFZwe5HgutvCY5YLbGzCAgDTQbvyh3B1lr/ad1STF9dpCzDYctuUFA/OqfFMAgoNZBaKBvlu24+MrrZ/ER73SKwnLRgylVMX128PWLNmSU3xGMO3ibQUAa6OKGbvznH/cqLUbiOcX7/3YADZ0D0mcHg6jfuFTuQkaHyoNJ191mEJAGesP5YuXZDe7OP15yGUJm9wvAHWS6jvO+2wckp9UGNAioqkcDfYtZ8ZOllwmY8mKkDReKY7az6H2LDE7TitlBQBOvDwJyaLVroG9WQ8cAHvjbAXxcrTvIEIehTsyeHbw3gt7PZ2oExsXFxCAgDfSh1CrluzMvPr/8+lk2TZd0B02lZwfpRD61wkB5h9zZwRXZAbT6SnCQ2y400OH68/pkfDAAd5BpQhkdzVfvDvJi8Ee7LNiurDsYE4OANNDd/WbI2DiqvBiJ5k1aaVvMnh3k6ONlCTZklNQYM4OANNDxBU3eOAmlVvdLIYt9wLCkzg4G4Q4yvEmXLOYnWBMCcAcTG4UG+jZNzNmfWXV2g0VQ0nMHHwrgZMqXN5mQOKuLHhOYq/7sINsjsE2CBjpcf9uYgg8GcEHI6VkyeudKMO7g7LM2ZJTdxs6i6tN1bGDjCA30Lfr58ivMcKhuVcCDBFLu4Le3WcrdQaYHz5W6kNHe0mDcQbYYu1UaaLYNUAo0vw1+tzoBkHQHHwvMHbwzMMPsLHrNwaQABgGVdWugb6uJW9KUpuz4XnsSKyCj9Wnq3UFmU8YdsyCj8m5BuGJpEJAGes2ZImUXhWyLwPYINa39Unb8rwJyBw/mOZDRyapgOouygfq7SAPNia6fUFTU/6Ff7mADG7gSnQ7reoKZO8huprXdsdtZlBegHHGhgX6PY1evzTnJg6pK3MFVpwshoyP5AZ0d3GdJ1RY39gt2yVc/CCjF4RAiDfR7iJAxN+x7Z6T//tNelDb2yLmDJ4LpLLrpqgMZxdUH4w5yPJzAe0oD3dFnsFM/88O+7s6/X50ISvrsoOLOok8sM1Ak8XXOR6zPD8YdvFgnhbMu8D+WXkNLmjupLxeD/xUqFc2r6YrZs4OcovX9HRYsR3LuYIqjPMPBVd0HDbSs5u3JiHrG4xM3rO7lJ/Mhq7cu2UzXBdBZNHbnDk6KvJhfA23aLsZtSmF4EJWdmjDzAzJuYwoP4UJGbIb45Y0MNwIoRqpzIaNdAc0dpCtJaaAjkGW7+Of+LFrUdxVT8/l0BWncsMWXrM6UuMpzzwxvvrLZxIApN3fwDW/uoOq53W1CAz1ancqow8szTzBcINj4RAQnufkcnubeeKFEKufsyXYDOmq1QL5VAadLqbe67zpdp4GmegZNngbH5+ef9jIVrPsIXTzu4g5MePk3c9i0tEM7MkE+iElb08Ial8vpYjkvBplxUF8umlztQkac/xdYuk5ooKM2ESu9rBULj+Tix0sv44UZx/HohMN4ePwhPD7pCD437zT+vC4JO66UoY5n/kchft1/f4fJo0/KYf7KJhP9htw3yJIA3EHa65eYroMG2hcxJmb5JwfbsycdD7rerZbEq6979sINdmSSUUM/AnEHp4ZWbZ8GeszoSoXLMlGv57NSM4Xvm9skB8uVANxBfhssygy4M7+8NNCE6aXVhvI0nVe78fO9FmS+YATAODYQd/BIxZigWQNd0CLwhQ1hcbPi2ucDuQ5k1Dl8wx1MVJ/hKO9GrEsDnVTt4pU1wcH84I2DsD3DkFJGAO4gx0ywgY3taqBjVpYD9qljVyLl9RrhlXX856Bi1R3kB+hai0CMSgN9rd7Fbw+wLNQr3A9ud6a93jUEKQ3awOtX2VlU8cnubF8vBjXQPMnRMYiIRNc7pcZl9yNmFNS4gBJdRQ/kOZBVaQDuIN+voEPAR2mgKzoEfrbHwqyzNs6WuChvF+gzRqBlKGHYQL858ri4SpettFiSyd2Yu7JEWk7NheCv9lmQLy+hO6i2syhDmx3FSpxBHXKwkxEB/fQCA8+sNFiIj+9sMwkuZ5Ewa8HbebHHOJV/e1Z24Ouh62cGJYr4w84OLlXoDk4cGdHGrIoq6Rj6fJnLbvqElXAzJvUW88mSO7F6E4Xhzt4cB5GocYBnB9W5gpNCi92YFEtfFLKz0DMrFaTdothNlBV1kaJyvlZdqwK+D1sjBCSd5eDF3qvrTMalsQ3zQgPjj1kYshCRhh1gQYaacINx87YiL+esgQ78QvHeBbEXajxyI9/8t6MWq+kiVkKDGjNl3Eh5aKx0Q9J56H4TPAdIiGImBPEyK3PO2dyZI1bbEDAvjblnJTDH4pxubawkVLr41laT8WpYg3L1RUdPLTewLcMZ1UBKhhqrc/0tRJp8I8zYXhTTO7N2ClkbsSbFwUurCbZaR5AZFoYYP95lIaNeYDQyHGBrkb8298SR1+bkrLHS41lb3zVdAm9ctPHCKkJG2Py1shnDf3adiS3XHIYYo1L7ELAmzz+YGb7QoOGATp5NVCENtA92+fJEG1/aeD3FJ1/HIRkjM7xg1dzaVAet/RiV2Oc5pUngH+n+wEyQGSvPSR3ZlQcVhBgaaAWhyNlSl72X8craEbi5qxJI7t4E9BGusCwFb+N9fAwfy+ewyxGbkvO1Tha5fO1Ri3AdKHMZ0+LvcaxwI4DRqGPmazFOpvPn4lil4DeAcmmgFai1X/DYFZYmOPjTIQtf3Wwy5mZJqRcLeyEKb+N9+FroMXzssgSHz+VrIBoSAEwXaBgQPGKFzYUuXk93vdywt5iLJuiYzJV407pxO+/3HsuBmPNSHWwscJHWLIKfJaiBVit+5Tf3CZS0CmQ1uBynxsWfeRvv42OUibt2Ta9AerPg8SdsLnDZC5qgc+IVT65gVmjxb/7O25dnu9ha6OJsjUBBp0C3Aa3YBVrLdkc+eH0m0DEMtIcW/+bvvN0R+N/27QDDYSCOwvikIoA9w94lvUIgR0qu0SM0xyhAEOwJQgEE/HeG17U2DCSrM+P78W7wKc3MgKBB0ABBAwQNEDRA0CBogKDLBoIGCBogaBD0ZmUAthD0akAZ1hD0YkAZlhD03YAy3EPQgwFlGELQrQFlaEPQtd/TgIyp4ToEHXYzIGNq2L2C7gzIW/c76Mbvy4AMqd3mJ2itNyBDatf9DbryexiQETVb7YLWrgbkpVW7+6C10fIAjGo2GvTFbzIgbZNajQetffjNBqRpVqMuEvRunwlGDcxq08WCjv1STwakYVKTLh50fJcE/igCo1p0R4N+7fqG79TAQ+057Zygtcqv/+9jckCN9WrOHQ86vkaXQW4nXj0FnmqqU2NOOzno+Gqd1ox6zrX4rZHX5MCmRhY1M6ih+miP3+LgJv9iSn1KAAAAAElFTkSuQmCC",Calian:"data:image/png;base64,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",RMC:b,"Queen's University":A};return Object(m.jsxs)("div",{className:"resume",children:[Object(m.jsx)("div",{className:"section-header",children:Object(m.jsx)("h2",{children:"School"})}),Object(m.jsx)("hr",{className:"divider"}),d.education.map((function(t){return Object(m.jsx)(u,{logo:e[t.companyName],companyName:t.companyName,jobRole:t.jobRole,description:t.description,startDate:t.startDate,endDate:t.endDate})})),Object(m.jsx)("div",{className:"section-header",children:Object(m.jsx)("h2",{children:"Work"})}),Object(m.jsx)("hr",{className:"divider"}),d.work.map((function(t){return Object(m.jsx)(u,{logo:e[t.companyName],companyName:t.companyName,jobRole:t.jobRole,description:t.description,startDate:t.startDate,endDate:t.endDate})}))]})},j=(n(21),n.p+"static/media/pic-of-edan.3eec0f25.jpg"),g=function(e){return window.open(e,"_blank")},p=function(){return Object(m.jsxs)("div",{className:"icon-set",children:[Object(m.jsxs)("div",{className:"icon-element",children:[Object(m.jsx)("i",{className:"fa fa-github fa-4x",onClick:function(){return g("https://github.com/edan-parker")}}),Object(m.jsx)("span",{className:"icon-text",children:"github"})]}),Object(m.jsxs)("div",{className:"icon-element",children:[Object(m.jsx)("i",{className:"fa fa-file-o fa-4x",onClick:function(){return g("https://www.google.ca/")}}),Object(m.jsx)("span",{className:"icon-text",children:"resume"})]}),Object(m.jsxs)("div",{className:"icon-element",children:[Object(m.jsx)("i",{className:"fa fa-linkedin fa-4x",onClick:function(){return g("https://www.linkedin.com/in/edanparker/")}}),Object(m.jsx)("span",{className:"icon-text",children:"linkedin"})]})]})},x=function(){return Object(m.jsxs)("div",{className:"bio-container",children:[Object(m.jsxs)("div",{className:"bio",children:[Object(m.jsx)("h1",{children:"Edan Parker"}),Object(m.jsx)("h2",{children:"Full stack generalist"}),Object(m.jsx)(p,{}),Object(m.jsxs)("div",{className:"bio-text",children:["I am an ",Object(m.jsx)("em",{onClick:function(){g("https://www.queensu.ca/mathstat/mthe")},className:"text-link",children:"applied math engineering"})," student graduating in 04/2022. I am passionate about fullstack development and interested in distributed computing."]})]}),Object(m.jsx)("img",{className:"pic-of-me",src:j,alt:"Me on my balcony in Kingston"})]})},f=n(9),v=n(6),O=(n(22),function(e){var t=e.children,n=e.content,a=Object(s.useState)(!1),i=Object(v.a)(a,2),c=i[0],r=i[1],o=Object(s.useRef)(null);Object(s.useEffect)((function(){return document.addEventListener("mousedown",d),function(){document.removeEventListener("mousedown",d)}}),[]);var d=function(e){o.current.contains(e.target)?r(!0):r(!1)},l=Object(s.useCallback)((function(e){r(e)}),[r]),u=Object(m.jsx)(n.type,Object(f.a)(Object(f.a)({},n.props),{},{setTooltipActiveState:l}));return Object(m.jsxs)("div",{ref:o,className:"tooltip-wrapper",onClick:d,children:[t,c&&Object(m.jsx)("div",{className:"tooltip-tip bottom",children:u})]})}),N=n(5),w=function(e){var t=e.id,n=e.content,a=e.setTooltipActiveState,i=new CustomEvent("scroll_"+t,{detail:{id:t}});return Object(m.jsx)("tbody",{className:"suggestion-row",onClick:function(e){e.stopPropagation();var n=document.getElementById(t);n&&(n.scrollIntoView({behavior:"smooth"}),document.dispatchEvent(i),a&&a(!1))},children:Object(m.jsx)("tr",{children:n.substring(0,35)+"..."})})},y=function(e){var t=[];d.work.forEach((function(e){return t.push.apply(t,Object(N.a)(e.description))}));var n=t.filter((function(t){return t.text.toLowerCase().includes(e.toLowerCase())}));return Object(N.a)(new Set(n))},D=(n(23),function(e){var t=e.keys,n=e.setTooltipActiveState,a=[];t.forEach((function(e){return a.push.apply(a,Object(N.a)(y(e)))}));var i=a.map((function(e,t){return Object(m.jsx)("table",{children:Object(m.jsx)(w,{id:e.id,content:e.text,setTooltipActiveState:n},t)})}));return Object(m.jsx)("div",{children:i})}),B=function(e){var t=e.skillText,n=e.keys,a=n||[t],i=Object(m.jsx)(D,{keys:a,setTooltipActiveState:function(){}});return Object(m.jsx)(O,{content:i,children:Object(m.jsx)("button",{className:"skills-button",children:t})})},L=(n(24),function(){return Object(m.jsxs)("fieldset",{className:"skills",children:[Object(m.jsx)("legend",{children:"Skills"}),Object(m.jsx)(B,{skillText:"ReactJS"}),Object(m.jsx)(B,{skillText:"GraphQL"}),Object(m.jsx)(B,{skillText:"Python"}),Object(m.jsx)(B,{skillText:"Javascript",keys:["Javascript","ExtJS","ReactJS"]}),Object(m.jsx)(B,{skillText:"ExtJS"}),Object(m.jsx)(B,{skillText:"Docker"}),Object(m.jsx)(B,{skillText:"Testing",keys:["Test"]}),Object(m.jsx)(B,{skillText:"Observability",keys:["Logging"]})]})});!function(e){e.LEFT="left",e.RIGHT="right"}(a||(a={})),function(e){e.PROBLEM="Problem",e.SOLUTION="Solution",e.RESULT="Result"}(i||(i={}));n(25);var k=function(e){var t=e.alignment,n=e.text,a=e.type;return console.log(t),Object(m.jsxs)("div",{className:"sub-item "+t,children:[Object(m.jsx)("h2",{children:a}),Object(m.jsx)("div",{className:"text",children:n})]})},Z=function(e){var t=e.storyTitle,n=e.content,c=Object(s.useState)(!1),r=Object(v.a)(c,2),o=r[0],d=r[1],l="story-"+t.toLowerCase().replace(" ","-"),u=Object(m.jsx)("h1",{children:t}),b="fa fa-angle-"+(o?"up":"down")+" fa-2x open-state-icon-"+(o?"collapse":"expand");return Object(m.jsx)("div",{className:"experience-story-container",children:Object(m.jsxs)("div",{id:l,className:"experience-story "+(o?"expanded":"collapsed"),children:[o?Object(m.jsxs)(m.Fragment,{children:[u,Object(m.jsx)(k,{alignment:a.LEFT,text:n.problem,type:i.PROBLEM}),Object(m.jsx)(k,{alignment:a.RIGHT,text:n.solution,type:i.SOLUTION}),Object(m.jsx)(k,{alignment:a.LEFT,text:n.result,type:i.RESULT})]}):null,Object(m.jsxs)("div",{className:"open-state",onClick:function(){d(!o);var e=document.getElementById(l);e&&e.scrollIntoView({behavior:"smooth"})},children:[Object(m.jsx)("i",{className:b}),o?null:u,Object(m.jsx)("i",{className:b})]})]})})},z=n(11),M=function(){return Object(m.jsxs)("div",{className:"experience-stories",children:[Object(m.jsx)("div",{className:"section-header",children:Object(m.jsx)("h2",{children:"Experience Stories"})}),Object(m.jsx)("hr",{className:"divider"}),z.map((function(e){return Object(m.jsx)(Z,{storyTitle:e.storyTitle,content:e.content})}))]})};var T=function(){return Object(m.jsxs)("div",{className:"main-site",children:[Object(m.jsx)(x,{}),Object(m.jsx)(L,{}),Object(m.jsx)(M,{}),Object(m.jsx)(h,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root")),C()}],[[26,1,2]]]);
//# sourceMappingURL=main.79f37791.chunk.js.map