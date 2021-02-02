(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(183)),s={id:"ssr-overview",title:"Server Side Rendering",sidebar_label:"Overview"},i={unversionedId:"ssr-overview",id:"version-5.x/ssr-overview",isDocsHomePage:!1,title:"Server Side Rendering",description:"Intro to SSR",source:"@site/versioned_docs/version-5.x/server-side-rendering-overview.md",slug:"/ssr-overview",permalink:"/docs/ssr-overview",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/server-side-rendering-overview.md",version:"5.x",sidebar_label:"Overview",sidebar:"version-5.x/docs",previous:{title:"Snowpack",permalink:"/docs/ecosystem-snowpack"},next:{title:"single-spa-inspector",permalink:"/docs/devtools"}},p=[{value:"Intro to SSR",id:"intro-to-ssr",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Example",id:"example",children:[]},{value:"Implementation Overview",id:"implementation-overview",children:[]},{value:"1. Layout",id:"1-layout",children:[]},{value:"2. Fetch",id:"2-fetch",children:[{value:"A. Module loading",id:"a-module-loading",children:[]},{value:"B. HTTP Request",id:"b-http-request",children:[]}]},{value:"3. HTTP Response Headers",id:"3-http-response-headers",children:[]},{value:"4. HTTP Response Body",id:"4-http-response-body",children:[]},{value:"5. Hydrate",id:"5-hydrate",children:[]}],c={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"intro-to-ssr"},"Intro to SSR"),Object(o.b)("p",null,"In the context of single page applications (SPAs), server-side rendering (SSR) refers to dynamic generation of the HTML page that is sent from web server to browser. In a single page application, the server only generates the very first page that the user requests, leaving all subsequent pages to be rendered by the browser."),Object(o.b)("p",null,'To accomplish server-side rendering of an SPA, javascript code is executed in NodeJS to generate the initial HTML. In the browser, the same javascript code is executed during a "hydration" process, which attaches event listeners to the HTML. Most popular UI Frameworks (Vue, React, Angular, etc) are capable of executing in both NodeJS and the browser, and offer APIs for both generating the server HTML and hydrating it in the browser. Additionally, there are popular frameworks such as NextJS and Nuxt which simplify the developer experience of server-side rendering.'),Object(o.b)("p",null,"In the context of microfrontends, server-side rendering refers to assembling the HTML from multiple, separate microfrontends. Each microfrontend controls a fragment of the HTML sent from web server to browser, and hydrate their fragment once initialized in the browser."),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"A primary purpose of server-side rendering is improved performance. Server rendered pages often display their content to users faster than their static counterparts, since the user is presented with the content before javascript resources have been initialized. Other reasons for SSR include improved search engine optimization (SEO)."),Object(o.b)("p",null,"Server rendered applications are generally harder to build and maintain, since the code has to work on both client and server. Additionally, SSR often complicates the infrastructure needed to run your application, since many SPA + SSR solutions require NodeJS, which is not required in production for client-only SPAs."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/isomorphic-microfrontends"}),"isomorphic-microfrontends example")," shows React server-rendered microfrontends. You can view the live demo of the code at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://isomorphic.microfrontends.app"}),"https://isomorphic.microfrontends.app"),"."),Object(o.b)("h2",{id:"implementation-overview"},"Implementation Overview"),Object(o.b)("p",null,"The ultimate goal of server-side rendering is to generate an HTTP response that the browser will display to the user while javascript is hydrating. Most microfrontend server-side rendering implementations, including single-spa's recommended approach, do this with the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Layout - Identify which microfrontends to render for the incoming HTTP request, and where within the HTML they will be placed. This is usually route based."),Object(o.b)("li",{parentName:"ol"},"Fetch - Begin rendering the HTML for each microfrontend to a stream."),Object(o.b)("li",{parentName:"ol"},"Headers - Retrieve HTTP response headers from each microfrontend. Merge them together and send the result as the HTTP response headers to the browser."),Object(o.b)("li",{parentName:"ol"},"Body - Send the HTTP response body to the browser, which is an HTML document consisting of static and dynamic parts. This involves waiting for each microfrontend's stream to end before proceeding to the next portion of HTML."),Object(o.b)("li",{parentName:"ol"},"Hydrate - Within the browser, download all javascript needed and then hydrate the HTML.")),Object(o.b)("h2",{id:"1-layout"},"1. Layout"),Object(o.b)("p",null,'To define an HTML template that lays out your page, first choose a "microfrontend layout middleware":'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/layout-overview"}),"single-spa-layout"),": The official layout engine for single-spa."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/zalando/tailor"}),"Tailor"),": A popular, battle tested layout engine that predates single-spa-layout and is not officially affiliated with single-spa."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/StyleT/tailorx"}),"TailorX"),": An actively maintained fork of Tailor that is used by ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.namecheap.com/"}),"Namecheap")," in their single-spa website. The single-spa core team collaborated with the creators of TailorX when authoring single-spa-layout, taking some inspiration from it.")),Object(o.b)("p",null,"We generally recommend single-spa-layout, although choosing one of the other options might make sense for your situation, since single-spa-layout is newer and has been used less than Tailor/TailorX."),Object(o.b)("p",null,"With single-spa-layout, you define a single template that handles all routes. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/layout-definition"}),"Full documentation"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <title>Isomorphic Microfrontends</title>\n    <meta\n      name="importmap-type"\n      content="systemjs-importmap"\n      server-cookie\n      server-only\n    />\n    <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@2.0.0/dist/import-map-overrides.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/systemjs@6.6.1/dist/system.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/systemjs@6.6.1/dist/extras/amd.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/systemjs@6.6.1/dist/extras/named-exports.min.js"><\/script>\n  </head>\n  <body>\n    <template id="single-spa-layout">\n      <single-spa-router>\n        <nav>\n          <application name="@org-name/navbar"></application>\n        </nav>\n        <main>\n          <route path="settings">\n            <application name="@org-name/settings"></application>\n          </route>\n          <route path="home">\n            <application name="@org-name/home"></application>\n          </route>\n        </main>\n      </single-spa-router>\n    </template>\n    <fragment name="importmap"></fragment>\n    <script>\n      System.import(\'@org-name/root-config\');\n    <\/script>\n    <import-map-overrides-full\n      show-when-local-storage="devtools"\n      dev-libs\n    ></import-map-overrides-full>\n  </body>\n</html>\n')),Object(o.b)("h2",{id:"2-fetch"},"2. Fetch"),Object(o.b)("p",null,"Your microfrontend layout middleware (see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#1-layout"}),"Layout section"),") determines which microfrontends match the HTTP request's route. The middleware then fetches the HTTP response headers and HTML content for each microfrontend."),Object(o.b)("p",null,"When using single-spa-layout, fetching each microfrontend is handled by the ",Object(o.b)("inlineCode",{parentName:"p"},"renderApplication")," function that is provided to ",Object(o.b)("inlineCode",{parentName:"p"},"renderServerResponseBody"),"."),Object(o.b)("p",null,"The method of fetching the headers and HTML content can vary, since single-spa-layout allows for any arbitrary, custom method of fetching. However, in practice, there are two popular approaches, which are described below. We generally recommend dynamic module loading as the primary method, since it requires less infrastructure to set up and has arguably (slightly) better performance. However, HTTP requests have some advantages, too, and it's also possible for different microfrontends to be implemented with different fetch methods."),Object(o.b)("h3",{id:"a-module-loading"},"A. Module loading"),Object(o.b)("p",null,"Module loading refers to loading javascript code using ",Object(o.b)("inlineCode",{parentName:"p"},"import")," and ",Object(o.b)("inlineCode",{parentName:"p"},"import()"),". Using module loading, the implementation of fetching the headers and content for each microfrontend is done purely within a single web server and operating system process:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import('@org-name/navbar/server.js').then(navbar => {\n  const headers = navbar.getResponseHeaders(props);\n  const htmlStream = navbar.serverRender(props);\n});\n")),Object(o.b)("p",null,"In the context of single-spa-layout, this is done inside of the ",Object(o.b)("inlineCode",{parentName:"p"},"renderApplication")," function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {\n  constructServerLayout,\n  sendLayoutHTTPResponse,\n} from 'single-spa-layout/server';\nimport http from 'http';\n\nconst serverLayout = constructServerLayout({\n  filePath: 'server/views/index.html',\n});\n\nhttp\n  .createServer((req, res) => {\n    const { bodyStream } = sendLayoutHTTPResponse({\n      res,\n      serverLayout,\n      urlPath: req.path,\n      async renderApplication({ appName, propsPromise }) {\n        const [app, props] = await Promise.all([\n          import(`${props.name}/server.mjs`, propsPromise),\n        ]);\n        return app.serverRender(props);\n      },\n      async retrieveApplicationHeaders({ appName, propsPromise }) {\n        const [app, props] = await Promise.all([\n          import(`${props.name}/server.mjs`, propsPromise),\n        ]);\n        return app.getResponseHeaders(props);\n      },\n      async retrieveProp(propName) {\n        return 'prop value';\n      },\n      assembleFinalHeaders(appHeaders) {\n        return Object.assign(\n          {},\n          ...Object.values(allHeaders).map(a => a.appHeaders),\n        );\n      },\n      renderFragment(name) {\n        // not relevant to the docs here\n      },\n    });\n\n    bodyStream.pipe(res);\n  })\n  .listen(9000);\n")),Object(o.b)("p",null,"To facilitate independent deployments of our microfrontends, such that the web server does not have to reboot/redeploy every time we update every microfrontend, we can use ",Object(o.b)("em",{parentName:"p"},"dynamic module loading"),". Dynamic module loading refers to loading a module from a dynamic location - often from somewhere on disk or over the network. By default, NodeJS will only load modules from relative URLs or from the ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," directory, but dynamic module loading allows you to load modules from any arbitrary file path or URL."),Object(o.b)("p",null,"A pattern to facilitate independent deployments via dynamic module loading is for each microfrontend's deployment to upload one or more javascript files to a trusted CDN, and then use dynamic module loading to load a certain version of the code on the CDN. The web server polls for new versions of each microfrontend and downloads the newer versions as they are deployed."),Object(o.b)("p",null,"To accomplish dynamic module loading, we can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/esm.html#esm_experimental_loaders"}),"NodeJS module loaders"),". Specifically, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/node-loader/node-loader-import-maps"}),"@node-loader/import-maps")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/node-loader/node-loader-http"}),"@node-loader/http")," allow us to control where the module is located and how to download it over the network. The code belows how a server-side import map facilitates dynamic module loading"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before deployment of navbar"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "imports": {\n    "@org-name/navbar/": "https://cdn.example.com/navbar/v1/"\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"After deployment of navbar"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "imports": {\n    "@org-name/navbar/": "https://cdn.example.com/navbar/v2/"\n  }\n}\n')),Object(o.b)("p",null,"The import map itself is hosted on the CDN, so that deployments may occur without restarting the web server. An example of this setup is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/isomorphic-microfrontends/root-config/blob/master/server/index-html.js"}),"shown here"),"."),Object(o.b)("h3",{id:"b-http-request"},"B. HTTP Request"),Object(o.b)("p",null,"It is also possible to implement the fetching of HTML content and HTTP headers from microfrontends using HTTP requests. In this setup, ",Object(o.b)("strong",{parentName:"p"},"each microfrontend must run as a deployed web server"),". The root web server (responsible for responding to the browser) makes an HTTP call to each of the microfrontends' web servers. Each microfrontend web server responds with an HTML page as response body, along with its HTTP response headers. The response body is streamed to the root web server so that it can send the bytes as soon as possible to the browser."),Object(o.b)("p",null,"In the context of single-spa-layout, this is done with the ",Object(o.b)("inlineCode",{parentName:"p"},"renderApplication")," function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {\n  constructServerLayout,\n  sendLayoutHTTPResponse,\n} from 'single-spa-layout/server';\nimport http from 'http';\nimport fetch from 'node-fetch';\n\nconst serverLayout = constructServerLayout({\n  filePath: 'server/views/index.html',\n});\n\nhttp\n  .createServer((req, res) => {\n    const fetchPromises = {};\n\n    sendLayoutHTTPResponse(serverLayout, {\n      res,\n      serverLayout,\n      urlPath: req.path,\n      async renderApplication({ appName, propsPromise }) {\n        const props = await propsPromise;\n        const fetchPromise =\n          fetchPromises[appName] ||\n          (fetchPromises[appName] = fetchMicrofrontend(props));\n        const response = await fetchPromise;\n        // r.body is a Readable stream when you use node-fetch,\n        // which is best for performance when using single-spa-layout\n        return response.body;\n      },\n      async retrieveApplicationHeaders({ appName, propsPromise }) {\n        const props = await propsPromise;\n        const fetchPromise =\n          fetchPromises[appName] ||\n          (fetchPromises[appName] = fetchMicrofrontend(props));\n        const response = await fetchPromise;\n        return response.headers;\n      },\n      async retrieveProp(propName) {\n        return 'prop value';\n      },\n      assembleFinalHeaders(allHeaders) {\n        return Object.assign({}, ...Object.values(allHeaders));\n      },\n      renderFragment(name) {\n        // not relevant to the docs here\n      },\n    });\n\n    bodyStream.pipe(res);\n  })\n  .listen(9000);\n\nasync function fetchMicrofrontend(props) {\n  fetch(`http://${props.name}`, {\n    headers: props,\n  }).then(r => {\n    if (r.ok) {\n      return r;\n    } else {\n      throw Error(\n        `Received http response ${r.status} from microfrontend ${appName}`,\n      );\n    }\n  });\n}\n")),Object(o.b)("h2",{id:"3-http-response-headers"},"3. HTTP Response Headers"),Object(o.b)("p",null,"The HTTP response headers sent to the browser are a combination of default headers and the headers retrieved from each microfrontend. Your ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#2-fetch"}),"method of fetching microfrontends")," does not change how the final headers are merged and assembled for the browser."),Object(o.b)("p",null,"Tailor and TailorX have built-in methods of merging headers. Single-spa-layout allows for custom merging via the ",Object(o.b)("inlineCode",{parentName:"p"},"assembleFinalHeaders")," option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {\n  constructServerLayout,\n  sendLayoutHTTPResponse,\n} from 'single-spa-layout/server';\nimport http from 'http';\n\nconst serverLayout = constructServerLayout({\n  filePath: 'server/views/index.html',\n});\n\nhttp\n  .createServer((req, res) => {\n    const { bodyStream } = sendLayoutHTTPResponse({\n      res,\n      serverLayout,\n      urlPath: req.path,\n      async renderApplication({ appName, propsPromise }) {\n        const [app, props] = await Promise.all([\n          import(`${props.name}/server.mjs`, propsPromise),\n        ]);\n        return app.serverRender(props);\n      },\n      async retrieveApplicationHeaders({ appName, propsPromise }) {\n        const [app, props] = await Promise.all([\n          import(`${props.name}/server.mjs`, propsPromise),\n        ]);\n        return app.getResponseHeaders(props);\n      },\n      async retrieveProp(propName) {\n        return 'prop value';\n      },\n      assembleFinalHeaders(allHeaders) {\n        // appHeaders contains all the application names, props, and headers for\n        return Object.assign(\n          {},\n          ...Object.values(allHeaders).map(a => a.appHeaders),\n        );\n      },\n      renderFragment(name) {\n        // not relevant to the docs here\n      },\n    });\n\n    bodyStream.pipe(res);\n  })\n  .listen(9000);\n")),Object(o.b)("h2",{id:"4-http-response-body"},"4. HTTP Response Body"),Object(o.b)("p",null,"The HTTP Response body sent from the web server to the browser must be streamed, byte by byte, in order to maximize performance. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/stream.html#stream_readable_streams"}),"NodeJS Readable streams")," make this possible by acting as a buffer that sends each byte as received, instead of all bytes at once."),Object(o.b)("p",null,"All microfrontend layout middlewares mentioned in this document stream the HTML response body to the browser. In the context of single-spa-layout, this is done by calling ",Object(o.b)("inlineCode",{parentName:"p"},"sendLayoutHTTPResponse")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { sendLayoutHTTPResponse } from 'single-spa-layout/server';\nimport http from 'http';\n\nconst serverLayout = constructServerLayout({\n  filePath: 'server/views/index.html',\n});\n\nhttp\n  .createServer((req, res) => {\n    sendLayoutHTTPResponse({\n      res,\n      // Add all other needed options here, too\n    });\n  })\n  .listen(9000);\n")),Object(o.b)("h2",{id:"5-hydrate"},"5. Hydrate"),Object(o.b)("p",null,"Hydration (or rehydration) refers to browser Javascript initializing and attaching event listeners to the HTML sent by the server. There are several variants, including progressive rehydration and partial rehydration."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"See also ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.google.com/web/updates/2019/02/rendering-on-the-web"}),'"Rendering on the Web"')," by Google."))),Object(o.b)("p",null,"In the context of microfrontends, hydration is done by the underlying UI framework of the microfrontend (React, Vue, Angular, etc). For example, in React, this is done by calling ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-dom.html#hydrate"}),"ReactDOM.hydrate()"),". The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/ecosystem"}),"single-spa adapter libraries")," allow you to specify whether you are hydrating or mounting for the first time (see single-spa-react's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/ecosystem-react#options"}),Object(o.b)("inlineCode",{parentName:"a"},"renderType")," option"),")."),Object(o.b)("p",null,"The role of single-spa-layout is to determine which microfrontends should hydrate which parts of the DOM. This is done automatically when you call ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/layout-api#constructlayoutengine"}),"constructLayoutEngine")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#start"}),"singleSpa.start()"),". If using TailorX instead of single-spa-layout, the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/namecheap/ilc"}),"Isomorphic Layout Composer Project")," serves a similar purpose as ",Object(o.b)("inlineCode",{parentName:"p"},"constructLayoutEngine"),"."))}l.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,b=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return n?a.a.createElement(b,i(i({ref:t},c),{},{components:n})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);