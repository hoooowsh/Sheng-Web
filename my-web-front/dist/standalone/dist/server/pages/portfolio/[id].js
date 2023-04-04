"use strict";
(() => {
var exports = {};
exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 5120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./public/assets/portfolio/installNode.jpg
var installNode = __webpack_require__(5950);
// EXTERNAL MODULE: ./public/assets/portfolio/reactParallax.jpg
var reactParallax = __webpack_require__(9079);
// EXTERNAL MODULE: ./public/assets/portfolio/RMP.png
var RMP = __webpack_require__(4687);
// EXTERNAL MODULE: ./public/assets/portfolio/reactWeather.jpg
var reactWeather = __webpack_require__(8563);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
;// CONCATENATED MODULE: ./pages/portfolio/[id].js











const portfolios = [
    {
        id: 1,
        title: "react weather app",
        imageSrc: reactWeather/* default */.Z,
        url: "react-weather"
    },
    {
        id: 2,
        title: "install node",
        imageSrc: installNode/* default */.Z,
        url: "install-node"
    },
    {
        id: 3,
        title: "Rate My Property",
        imageSrc: RMP/* default */.Z,
        url: "rate-my-property"
    },
    {
        id: 4,
        title: "react parallax scroll",
        imageSrc: reactParallax/* default */.Z,
        url: "react-parallax"
    }
];
const getPortfolioFrom = (url)=>portfolios.filter((p)=>p.url === url)[0];
async function getStaticPaths() {
    const paths = portfolios.map((p)=>({
            params: {
                id: p.url
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const portfolio = getPortfolioFrom(params.id);
    return {
        props: {
            portfolio
        }
    };
}
const OnePortfolio = ({ portfolio: { title , imageSrc  }  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "h-fit w-full text-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/portfolio",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(bi_namespaceObject.BiChevronLeft, {
                                    size: 25
                                }),
                                " back"
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative w-96 h-56 mx-auto overflow-hidden my-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: imageSrc,
                        alt: "bla",
                        layout: "fill",
                        objectFit: "cover"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "text-center md:text-left my-4 text-2xl font-bold",
                    children: "Description"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "asdklfjlask;djfl;kasjdf;klasjdfl;kjasd;klfjasl;dkfj"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-center gap-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            download: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer",
                                children: [
                                    "demo",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "duration-200 ease-in rotate-180",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineCaretLeft, {
                                            size: 18,
                                            className: "ml-2"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer",
                                children: [
                                    "my portfolio",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "duration-200 ease-in",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                                            size: 18,
                                            className: "ml-2"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const _id_ = (OnePortfolio);


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,443,675,941], () => (__webpack_exec__(5120)));
module.exports = __webpack_exports__;

})();