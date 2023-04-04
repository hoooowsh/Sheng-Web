(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/Navbar.jsx




const Navbar = ()=>{
    const [navigation, setNavigation] = (0,external_react_.useState)(false);
    const [pageScroll, setPageScroll] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const sub = window.addEventListener("scroll", ()=>setPageScroll(window.scrollY >= 90));
        return sub;
    }, []);
    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "portfolio"
        },
        {
            id: 3,
            link: "experience"
        },
        {
            id: 4,
            link: "me"
        },
        {
            id: 5,
            link: "contact"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `w-full h-20 z-10 fixed bg-black text-white duration-300 ease-in ${pageScroll && "bg-black text-[#fff]"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#home",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer",
                            children: "Sheng"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "hidden md:flex",
                                children: links.map(({ id , link  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/#${link}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider",
                                            children: link
                                        })
                                    }, id))
                            }),
                            !navigation && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:hidden cursor-pointer",
                                onClick: ()=>setNavigation(true),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaBars, {
                                    size: 30
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: navigation ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur" : "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: navigation ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500" : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex w-full items-center justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#home",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            onClick: ()=>{
                                                setNavigation(false);
                                            },
                                            className: "text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer",
                                            children: "Sheng"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        onClick: ()=>setNavigation(false),
                                        className: "p-3 cursor-pointer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTimes, {
                                            size: 30
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-24 flex flex-col h-fit gap-20",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "uppercase",
                                    children: links.map(({ id , link  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: `/#${link}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>{
                                                    setNavigation(false);
                                                },
                                                className: "py-4 text-2xl tracking-wider cursor-pointer",
                                                children: link
                                            })
                                        }, id))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "grid grid-cols-2 mx-auto w-4/5 gap-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedin, {
                                                    size: 25
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {
                                                    size: 25
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                                                    size: 25
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebook, {
                                                    size: 25
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(2336)));
module.exports = __webpack_exports__;

})();