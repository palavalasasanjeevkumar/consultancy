(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/radhakrishna/Documents/MyWorks/rk-own-aws/consultancy/src/main.ts */"zUnb");


/***/ }),

/***/ "00il":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/profilepage/profilepage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"dots\" src=\"assets/img/dots.png\" />\n\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <div class=\"container align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"profile-title text-left\">Mike Scheinder</h1>\n          <h5 class=\"text-on-back\">01</h5>\n          <p class=\"profile-description\">\n            Offices parties lasting outward nothing age few resolve. Impression\n            to discretion understood to we interested he excellence. Him\n            remarkably use projection collecting. Going about eat forty world\n            has round miles.\n          </p>\n          <div class=\"btn-wrapper profile pt-3\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-dribbble btn-round\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img\n                class=\"img-center img-fluid rounded-circle\"\n                src=\"assets/img/mike.jpg\"\n              />\n\n              <h4 class=\"title\">Transactions</h4>\n            </div>\n            <div class=\"card-body\">\n              <tabset\n                class=\"nav-tabs-danger justify-content-center tab-subcategories\"\n              >\n                <tab heading=\"Wallet\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">COIN</th>\n                          <th class=\"header\">AMOUNT</th>\n                          <th class=\"header\">VALUE</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>BTC</td>\n                          <td>7.342</td>\n                          <td>48,870.75 USD</td>\n                        </tr>\n                        <tr>\n                          <td>ETH</td>\n                          <td>30.737</td>\n                          <td>64,53.30 USD</td>\n                        </tr>\n                        <tr>\n                          <td>XRP</td>\n                          <td>19.242</td>\n                          <td>18,354.96 USD</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n                <tab heading=\"Send\">\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Pay to </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"e.g. 1Nasd92348hU984353hfid\"\n                          type=\"text\"\n                        />\n\n                        <span class=\"form-text\">\n                          Please enter a valid address.\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Amount </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"1.587\"\n                          type=\"text\"\n                        />\n                      </div>\n                    </div>\n                  </div>\n                  <button\n                    class=\"btn btn-simple btn-danger btn-icon btn-round float-right\"\n                    type=\"submit\"\n                  >\n                    <i class=\"tim-icons icon-send\"> </i>\n                  </button>\n                </tab>\n                <tab heading=\"News\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">Latest Crypto News</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>The Daily: Nexo to Pay on Stable...</td>\n                        </tr>\n                        <tr>\n                          <td>Venezuela Begins Public of Nation...</td>\n                        </tr>\n                        <tr>\n                          <td>PR: BitCanna â Dutch Blockchain...</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n              </tabset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section\">\n    <div class=\"container\">\n      <div class=\"row justify-content-between\">\n        <div class=\"col-md-6\">\n          <div class=\"row justify-content-between align-items-center\">\n            <carousel [showIndicators]=\"true\">\n              <slide>\n                <img\n                  alt=\"First slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/denys.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Big City Life, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Second slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/fabien-bazanegue.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Somewhere Beyond, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Third slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/mark-finn.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Stocks, United States</h5>\n                </div>\n              </slide>\n            </carousel>\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <h1 class=\"profile-title text-left\">Projects</h1>\n          <h5 class=\"text-on-back\">02</h5>\n          <p class=\"profile-description text-left\">\n            An artist of considerable range, Ryan â the name taken by\n            Melbourne-raised, Brooklyn-based Nick Murphy â writes, performs and\n            records all of his own music, giving it a warm, intimate feel with a\n            solid groove structure. An artist of considerable range.\n          </p>\n          <div class=\"btn-wrapper pt-3\">\n            <button\n              class=\"btn btn-simple btn-danger mr-1\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-book-bookmark\"> </i> Bookmark\n            </button>\n            <button class=\"btn btn-simple btn-info\" href=\"javascript:void(0)\">\n              <i class=\"tim-icons icon-bulb-63\"> </i> Check it!\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card card-plain\">\n            <div class=\"card-header\">\n              <h1 class=\"profile-title text-left\">Contact</h1>\n              <h5 class=\"text-on-back\">03</h5>\n            </div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Your Name </label>\n                      <input class=\"form-control\" type=\"text\" value=\"Mike\" />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Email address </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"mike@email.com\"\n                        type=\"email\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Phone </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"001-12321345\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Company </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"CreativeTim\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label> Message </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"Hello there!\"\n                        type=\"text\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <button\n                  class=\"btn btn-danger btn-round float-right\"\n                  placement=\"right\"\n                  type=\"submit\"\n                >\n                  Send text\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4 ml-auto\">\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-square-pin\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Find us at the office</h4>\n              <p>\n                Bld Mihail Kogalniceanu, nr. 8, <br />\n\n                7652 Bucharest, <br />\n\n                Romania\n              </p>\n            </div>\n          </div>\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-mobile\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Give us a ring</h4>\n              <p>\n                Michael Jordan <br />\n\n                +40 762 321 762 <br />\n\n                Mon - Fri, 8:00-22:00\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "8jZd":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/landingpage/landingpage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"path\" src=\"assets/img/blob.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <img class=\"shapes triangle\" src=\"assets/img/triunghiuri.png\" />\n\n    <img class=\"shapes wave\" src=\"assets/img/waves.png\" />\n\n    <img class=\"shapes squares\" src=\"assets/img/patrat.png\" />\n\n    <img class=\"shapes circle\" src=\"assets/img/cercuri.png\" />\n\n    <div class=\"content-center\">\n      <div\n        class=\"row row-grid justify-content-between align-items-center text-left\"\n      >\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"text-white\">\n            We keep your coin <br />\n\n            <span class=\"text-white\"> secured </span>\n          </h1>\n          <p class=\"text-white mb-3\">\n            A wonderful serenity has taken possession of my entire soul, like\n            these sweet mornings of spring which I enjoy with my whole heart. I\n            am alone, and feel...\n          </p>\n          <div class=\"btn-wrapper mb-3\">\n            <p class=\"category text-success d-inline mr-1\">From 9.99%/mo</p>\n            <a\n              class=\"btn btn-success btn-link btn-sm\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-minimal-right\"> </i>\n            </a>\n          </div>\n          <div class=\"btn-wrapper\">\n            <div class=\"button-container\">\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-twitter\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-dribbble\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-facebook\"> </i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-5\">\n          <img\n            alt=\"Circle image\"\n            class=\"img-fluid\"\n            src=\"assets/img/etherum.png\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section section-lg\">\n    <section class=\"section\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <div class=\"container\">\n        <div class=\"row row-grid justify-content-between\">\n          <div class=\"col-md-5 mt-lg-5\">\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-trophy text-warning\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,237</p>\n                          <p></p>\n                          <p class=\"card-category\">Awards</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats upper bg-default\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-coins text-white\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,653</p>\n                          <p></p>\n                          <p class=\"card-category\">Commits</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-gift-2 text-info\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">593</p>\n                          <p></p>\n                          <p class=\"card-category\">Presents</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-credit-card text-success\">\n                          </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">10,783</p>\n                          <p></p>\n                          <p class=\"card-category\">Forks</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pl-md-5\">\n              <h1>\n                Large <br />\n\n                Achivements\n              </h1>\n              <p>\n                I should be capable of drawing a single stroke at the present\n                moment; and yet I feel that I never was a greater artist than\n                now.\n              </p>\n              <br />\n\n              <p>\n                When, while the lovely valley teems with vapour around me, and\n                the meridian sun strikes the upper surface of the impenetrable\n                foliage of my trees, and but a few stray.\n              </p>\n              <br />\n\n              <a\n                class=\"font-weight-bold text-info mt-5\"\n                href=\"javascript:void(0)\"\n              >\n                Show all <i class=\"tim-icons icon-minimal-right text-info\"> </i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path5.png\" />\n\n    <img class=\"path3\" src=\"assets/img/path2.png\" />\n\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <h1 class=\"text-center\">Your best benefit</h1>\n          <div class=\"row row-grid justify-content-center\">\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-primary\">\n                  <i class=\"tim-icons icon-money-coins\"> </i>\n                </div>\n                <h4 class=\"info-title\">Low Commission</h4>\n                <hr class=\"line-primary\" />\n\n                <p>\n                  Divide details about your work into parts. Write a few lines\n                  about each one. A paragraph describing a feature will.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-warning\">\n                  <i class=\"tim-icons icon-chart-pie-36\"> </i>\n                </div>\n                <h4 class=\"info-title\">High Incomes</h4>\n                <hr class=\"line-warning\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing\n                  feature will be a feature.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-success\">\n                  <i class=\"tim-icons icon-single-02\"> </i>\n                </div>\n                <h4 class=\"info-title\">Verified People</h4>\n                <hr class=\"line-success\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing be\n                  enough.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-safe\">\n    <img class=\"path\" src=\"assets/img/path5.png\" />\n\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n        <div class=\"col-md-5\">\n          <img class=\"img-fluid floating\" src=\"assets/img/chester-wade.jpg\" />\n\n          <div class=\"card card-stats bg-danger\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">100%</p>\n                  <p class=\"card-category text-white\">Safe</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-info\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">573 K</p>\n                  <p class=\"card-category text-white\">Satisfied customers</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-default\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">10 425</p>\n                  <p class=\"card-category text-white\">Business</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"px-md-5\">\n            <hr class=\"line-success\" />\n\n            <h3>Awesome features</h3>\n            <p>\n              The design system comes with three pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-vector\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Carefully crafted components</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-tap-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Amazing page examples</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-single-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Super friendly support team</h6></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <div class=\"col-md-12\">\n      <div class=\"card card-chart card-plain\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 text-left\">\n              <hr class=\"line-primary\" />\n\n              <h5 class=\"card-category\">Total Investments</h5>\n              <h2 class=\"card-title\">Performance</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\"><canvas id=\"chartBig\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-coins\">\n    <img class=\"path\" src=\"assets/img/path3.png\" />\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <hr class=\"line-info\" />\n\n          <h1>\n            Choose the coin\n            <span class=\"text-info\"> that fits your needs </span>\n          </h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/bitcoin.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Light Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-primary\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">50 messages</li>\n                  <li class=\"list-group-item\">100 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-primary btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/etherum.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Dark Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-success\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">150 messages</li>\n                  <li class=\"list-group-item\">1000 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-success btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/ripp.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Bright Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-info\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">350 messages</li>\n                  <li class=\"list-group-item\">10K emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-info btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F149":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/profilepage/profilepage.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfilepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepageComponent", function() { return ProfilepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profilepage.component.html */ "00il");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var ProfilepageComponent = /** @class */ (function () {
    function ProfilepageComponent() {
        this.isCollapsed = true;
    }
    ProfilepageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("profile-page");
    };
    ProfilepageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("profile-page");
    };
    ProfilepageComponent.ctorParameters = function () { return []; };
    ProfilepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-profilepage",
            template: _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfilepageComponent);
    return ProfilepageComponent;
}());



/***/ }),

/***/ "IfWR":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/landingpage/landingpage.component.ts ***!
  \*********************************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landingpage.component.html */ "8jZd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent() {
        this.isCollapsed = true;
    }
    LandingpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("landing-page");
        var canvas = document.getElementById("chartBig");
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
        gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
        gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
        var chartBig = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: [
                    "JUN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC"
                ],
                datasets: [
                    {
                        label: "Data",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#e44cc4",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#e44cc4",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: "#fff",
                    titleFontColor: "#ccc",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                                suggestedMin: 0,
                                suggestedMax: 350,
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ]
                }
            }
        });
    };
    LandingpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("landing-page");
    };
    LandingpageComponent.ctorParameters = function () { return []; };
    LandingpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-landingpage",
            template: _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, location, document) {
        this.renderer = renderer;
        this.location = location;
    }
    AppComponent.prototype.onWindowScroll = function (e) {
        if (window.pageYOffset > 100) {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.remove("navbar-transparent");
                element.classList.add("bg-danger");
            }
        }
        else {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.add("navbar-transparent");
                element.classList.remove("bg-danger");
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.onWindowScroll(event);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    AppComponent.propDecorators = {
        onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:scroll", ["$event"],] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "V/Tm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        placement=\"bottom\"\n        [routerLink]=\"['/home']\"\n        target=\"_blank\"\n        tooltip=\"Consulatancy services for MS \"\n      >\n        <span> Consulantancy• </span> Services\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> Consulatancy• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"dropdown nav-item\" dropdown id=\"home\">\n          <a\n            class=\"dropdown-toggle nav-link dropdown-toggle\"\n            data-toggle=\"dropdown\"\n            dropdownToggle\n            \n          >\n            <!-- <i class=\"fa fa-cogs d-lg-none d-xl-none\"> </i> -->\n            <i class=\"fas fa-home d-lg-none d-xl-none\"></i> Home\n          </a>\n          <!-- <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\n            <a\n              class=\"dropdown-item\"\n              href=\"\"\n            >\n              <i class=\"tim-icons icon-paper\"> </i> Documentation\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/register']\">\n              <i class=\"tim-icons icon-bullet-list-67\"> </i> Register Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/landing']\">\n              <i class=\"tim-icons icon-image-02\"> </i> Landing Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\n              <i class=\"tim-icons icon-single-02\"> </i> Profile Page\n            </a>\n          </div> -->\n          </li>\n          <li class=\"dropdown nav-item\" dropdown id=\"study\">\n            <a\n              class=\"dropdown-toggle nav-link dropdown-toggle\"\n              data-toggle=\"dropdown\"\n              dropdownToggle\n             \n            >\n              <!-- <i class=\"fa fa-cogs d-lg-none d-xl-none\"> </i> -->\n              <i class=\"fas fa-graduation-cap d-lg-none d-xl-none\"></i>Study \n            </a>\n          <!-- <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\n            <a\n              class=\"dropdown-item\"\n              href=\"\"\n            >\n              <i class=\"tim-icons icon-paper\"> </i> Documentation\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/register']\">\n              <i class=\"tim-icons icon-bullet-list-67\"> </i> Register Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/landing']\">\n              <i class=\"tim-icons icon-image-02\"> </i> Landing Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\n              <i class=\"tim-icons icon-single-02\"> </i> Profile Page\n            </a>\n          </div> -->\n    </li>\n    <li class=\"dropdown nav-item\" dropdown id=\"aboutUs\">\n      <a\n        class=\"dropdown-toggle nav-link dropdown-toggle\"\n        data-toggle=\"dropdown\"\n        dropdownToggle\n        \n      >\n        <!-- <i class=\"fa fa-cogs d-lg-none d-xl-none\"> </i>  -->\n        <i class=\"fa fa-address-card d-lg-none d-xl-none\"></i>About US\n      </a>\n          <!-- <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\n            <a\n              class=\"dropdown-item\"\n              href=\"\"\n            >\n              <i class=\"tim-icons icon-paper\"> </i> Documentation\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/register']\">\n              <i class=\"tim-icons icon-bullet-list-67\"> </i> Register Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/landing']\">\n              <i class=\"tim-icons icon-image-02\"> </i> Landing Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\n              <i class=\"tim-icons icon-single-02\"> </i> Profile Page\n            </a>\n          </div> -->\n</li>\n<li class=\"dropdown nav-item\" dropdown id=\"contactUs\">\n  <a\n    class=\"dropdown-toggle nav-link dropdown-toggle\"\n    data-toggle=\"dropdown\"\n    dropdownToggle\n    \n  >\n    <!-- <i class=\"fa fa-cogs d-lg-none d-xl-none\"> </i>  -->\n    <i class=\"fas fa-mobile-alt d-lg-none d-xl-none\"></i>Contact Us\n  </a>\n          <!-- <div class=\"dropdown-menu dropdown-with-icons\" *dropdownMenu>\n            <a\n              class=\"dropdown-item\"\n              href=\"\"\n            >\n              <i class=\"tim-icons icon-paper\"> </i> Documentation\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/register']\">\n              <i class=\"tim-icons icon-bullet-list-67\"> </i> Register Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/landing']\">\n              <i class=\"tim-icons icon-image-02\"> </i> Landing Page\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\n              <i class=\"tim-icons icon-single-02\"> </i> Profile Page\n            </a>\n          </div> -->\n        </li>\n\n        <li class=\"nav-item\">\n          <!-- <a\n            class=\"nav-link btn btn-default d-none d-lg-block\"\n            href=\"javascript:void(0)\"\n            (click)=\"scrollToDownload(target)\"\n          >\n            <i class=\"tim-icons icon-cloud-download-93\"> </i> Download\n          </a> -->\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <div class=\"squares square1\"></div>\n    <div class=\"squares square2\"></div>\n    <div class=\"squares square3\"></div>\n    <div class=\"squares square4\"></div>\n    <div class=\"squares square5\"></div>\n    <div class=\"squares square6\"></div>\n    <div class=\"squares square7\"></div>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\">Consulatancy•</h1>\n        <h3>\n          <!-- A beautiful Design System for Bootstrap 4 and Angular. It's Free and\n          Open Source. -->\n          Top 10 Master’s Degrees Students Can Study Abroad in 2021\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <!-- class=\"section section-basic\" -->\n    <div  id=\"basic-elements\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <h2 class=\"title\">Let’s help you live your dream</h2>\n        <!-- <div id=\"images\">\n          \n          <div class=\"row\">\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Study London\n              </small>\n              <img\n                alt=\"Rounded image\"\n                class=\"img-fluid rounded shadow\"\n                [src]=\"imgPath4\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Study Canada\n              </small>\n              <img\n                alt=\"Rounded image\"\n                class=\"img-fluid rounded shadow\"\n                [src]=\"imgPath5\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Study US\n              </small>\n              <img\n                alt=\"Rounded image\"\n                class=\"img-fluid rounded shadow\"\n                [src]=\"imgPath6\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Study UK\n              </small>\n              <img\n                alt=\"Rounded image\"\n                class=\"img-fluid rounded shadow\"\n                [src]=\"imgPath7\"\n                style=\"width: 150px;\"\n              />\n            </div>\n           \n          \n           \n          </div>\n        </div>  -->\n        \n       \n        <!-- <div class=\"section\"> -->\n          <div class=\"container\">\n            <div class=\"title\"><h3>STUDY IN US</h3></div>\n            \n            <div class=\"row justify-content-between align-items-center\">\n              <div class=\"col-lg-6\">\n                <div class=\"demo\">\n                  <figure class=\"imghvr-push-left\"><img src=\"https://picsum.photos/600/400\" alt=\"04\">\n                    <figcaption>\n                      <h3>Oscar Wilde</h3>\n                      <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                    </figcaption><a href=\"javascript:;\"></a>\n                  </figure>\n                </div>\n                <!-- <carousel [showIndicators]=\"false\" >\n                  <slide>\n                    <img\n                      alt=\"First slide\"\n                      class=\"d-block w-50\"\n                      src=\"assets/img/denys.jpg\"\n                    />\n                  </slide>\n                  <slide>\n                    <img\n                      alt=\"Second slide\"\n                      class=\"d-block w-50\"\n                      src=\"assets/img/fabien-bazanegue.jpg\"\n                    />\n                  </slide>\n                  <slide>\n                    <img\n                      alt=\"Third slide\"\n                      class=\"d-block w-50\"\n                      src=\"assets/img/mark-finn.jpg\"\n                    />\n                  </slide>\n                </carousel> -->\n              </div>\n              <div class=\"col-lg-5 mb-5 mb-lg-0\">\n                <h1 class=\"text-white font-weight-light\">About STUDY ON US</h1>\n                <p class=\"text-white mt-4\">\n                  Black Design comes with three pre-built pages to help you get\n                  started faster. You can change the text and images and you're\n                  good to go.\n                </p>\n                <a\n                  class=\"btn btn-warning mt-4\"\n                  href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\"\n                >\n                  See More Information\n                </a>\n              </div>\n             \n            </div>\n          </div>\n          <div class=\"container\">\n           \n            <div class=\"row justify-content-between align-items-center\">\n              \n              <div class=\"col-lg-5 mb-5 mb-lg-0\">\n                <h1 class=\"text-white font-weight-light\">About STUDT ON CANADA</h1>\n                <p class=\"text-white mt-4\">\n                  Black Design comes with three pre-built pages to help you get\n                  started faster. You can change the text and images and you're\n                  good to go.\n                </p>\n                <a\n                  class=\"btn btn-warning mt-4\"\n                  href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\"\n                >\n                  See More Information\n                </a>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"title\"><h3>STUDY IN CANADA</h3></div>\n                <div class=\"demo\">\n                  <figure class=\"imghvr-push-left\"><img src=\"https://picsum.photos/600/400\" alt=\"04\">\n                    <figcaption>\n                      <h3>Oscar Wilde</h3>\n                      <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                    </figcaption><a href=\"javascript:;\"></a>\n                  </figure>\n                </div>\n                <!-- <carousel [showIndicators]=\"false\" >\n                  <slide>\n                    <img\n                      alt=\"First slide\"\n                      class=\"d-block w-50\"\n                      src=\"assets/img/denys.jpg\"\n                    />\n                  </slide>\n                  <slide>\n                    <img\n                      alt=\"Second slide\"\n                      class=\"d-block w-50\"\n                      src=\"assets/img/fabien-bazanegue.jpg\"\n                    />\n                  </slide>\n                  <slide>\n                    <img\n                      alt=\"Third slide\"\n                      class=\"d-block w-50\"\n                      src=\"assets/img/mark-finn.jpg\"\n                    />\n                  </slide>\n                </carousel> -->\n              </div>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"title\"><h3>STUDY IN LANDON</h3></div>\n            <div class=\"row justify-content-between align-items-center\">\n              <div class=\"col-lg-6\">\n                <div class=\"demo\">\n                  <figure class=\"imghvr-push-left\"><img src=\"https://picsum.photos/600/400\" alt=\"04\">\n                    <figcaption>\n                      <h3>Oscar Wilde</h3>\n                      <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                    </figcaption><a href=\"javascript:;\"></a>\n                  </figure>\n                </div>\n                <!-- <carousel [showIndicators]=\"false\" >\n                  <slide>\n                    <img\n                      alt=\"First slide\"\n                      class=\"d-block w-50\"\n                      src=\"assets/img/denys.jpg\"\n                    />\n                  </slide>\n                  <slide>\n                    <img\n                      alt=\"Second slide\"\n                      class=\"d-block w-50\"\n                      src=\"assets/img/fabien-bazanegue.jpg\"\n                    />\n                  </slide>\n                  <slide>\n                    <img\n                      alt=\"Third slide\"\n                      class=\"d-block w-50\"\n                      src=\"assets/img/mark-finn.jpg\"\n                    />\n                  </slide>\n                </carousel> -->\n              </div>\n              <div class=\"col-lg-5 mb-5 mb-lg-0\" >\n                <h1 class=\"text-white font-weight-light\">About STUDT ON LONDON</h1>\n                <p class=\"text-white mt-4\">\n                  Black Design comes with three pre-built pages to help you get\n                  started faster. You can change the text and images and you're\n                  good to go.\n                </p>\n                <a\n                  class=\"btn btn-warning mt-4\"\n                  href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\"\n                >\n                  See More Information\n                </a>\n              </div>\n             \n            </div>\n          </div>\n           <div class=\"container\">\n           \n            <div class=\"row justify-content-between align-items-center\">\n              <div class=\"col-lg-5 mb-5 mb-lg-0\">\n                <h1 class=\"text-white font-weight-light\">About STUDT ON UK</h1>\n                <p class=\"text-white mt-4\">\n                  Black Design comes with three pre-built pages to help you get\n                  started faster. You can change the text and images and you're\n                  good to go.\n                </p>\n                <a\n                  class=\"btn btn-warning mt-4\"\n                  href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\"\n                >\n                  See More Information\n                </a>\n              </div>\n              \n              <div class=\"col-lg-6\">\n                <div class=\"title\"><h3>STUDY IN UK</h3></div>\n                               <div class=\"demo\">\n                  <figure class=\"imghvr-push-left\"><img src=\"https://picsum.photos/600/400\" alt=\"04\">\n                    <figcaption>\n                      <h3>Oscar Wilde</h3>\n                      <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                    </figcaption><a href=\"javascript:;\"></a>\n                  </figure>\n                </div>\n              </div>\n             \n             \n            </div>\n          </div>\n        <!-- </div> -->\n        \n        <br />\n\n        <h3>Popular courses among Indian students</h3>\n        <!-- <div class=\"card\">  -->\n          <!-- <div class=\"card-header\">  -->\n        <div class=\"row\">\n          <div class=\"col-md-4 hover-fade\">\n            <h3  style=\"font-family: play;text-align: center;color: lightcoral;\">Computer Sciences And IT</h3>\n           <div class=\"card\">\n           <h3 style=\"text-align: center\">Computer Science <br>Information Technology<br>Software Engineering</h3>\n          </div>\n           </div>\n            <br />\n            <div class=\"col-md-4 hover-fade\">\n            <h3  style=\"font-family: play;text-align: center;color: lightcoral;\">Business and Management</h3>\n            <div class=\"card\">\n              <h3 style=\"text-align: center\">Master of Business Administration<br>Sales and Marketing<br>\n                <!-- Project Management -->\n              </h3>\n         </div>\n            </div>\n          <div class=\"col-md-4 hover-fade\">\n            <h3  style=\"font-family: play;text-align: center;color: lightcoral;\">Engineering</h3>\n            <div class=\"card\">\n          <h3 style=\"text-align: center\">Mechanical Engineering <br>Civil Engineering<br>Electrical Engineering</h3>\n           </div>\n           </div>\n            <br />\n            <div class=\"col-md-4 hover-fade\">\n            <h3  style=\"font-family: play;text-align: center;color: lightcoral;\">Health and Science</h3>\n            <div class=\"card\">\n            <h3 style=\"text-align: center\">Medicine and Surgery <br>Dental Studies<br>Physiotherapy</h3>\n          </div>\n          </div>\n          <div class=\"col-md-4 hover-fade\">\n            <h3  style=\"font-family: play;text-align: center;color: lightcoral;\">Law and Legal Studies</h3>\n            <div class=\"card\">\n             <h3 style=\"text-align: center\">Legal Studies <br>International LawBusiness <br> and Commercial</h3>\n           </div>\n           </div>\n            <br />\n            <div class=\"col-md-4 hover-fade\">\n            <h3  style=\"font-family: play;text-align: center;color: lightcoral;\">Biological and life Sciences</h3>\n            <div class=\"card\">\n            <h3 style=\"text-align: center\">Biotechnology<br>Biological Sciences<br>Biomedical Engineering</h3>\n          </div>\n          </div>\n        </div>\n      <!-- </div> -->\n       <!-- </div> -->\n      </div>\n    </div>\n   \n     \n \n    \n    \n    <!-- <div class=\"section section-tabs\"> -->\n\n      <div class=\"container\">\n        <div class=\"title\"><h3>What our clients are saying</h3></div>\n        \n        <div class=\"row justify-content-between align-items-center\">\n          <div class=\"col-lg-3 mb-3 mb-lg-0\">\n            <h3 class=\"text-white font-weight-light\" >Our clients are saying</h3>\n          </div>\n          <div class=\"col-lg-9\">\n            <section class=\"pb-6\">\n              <div class=\"container\">\n                  <div class=\"row\">\n                      <div class=\"col-lg-10 col-xl-8 mx-auto\">\n                          <div class=\"p-5 bg-white shadow rounded\">\n                              <!-- Bootstrap carousel-->\n                              <div class=\"carousel slide\" id=\"carouselExampleIndicators\" data-ride=\"carousel\">\n                                  <!-- Bootstrap carousel indicators [nav] -->\n                                  <ol class=\"carousel-indicators mb-0\">\n                                      <li class=\"active\" data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\"></li>\n                                      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                                      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n                                  </ol>\n            \n            \n                                  <!-- Bootstrap inner [slides]-->\n                                  <div class=\"carousel-inner px-5 pb-4\">\n                                      <!-- Carousel slide-->\n                                      <div class=\"carousel-item active\">\n                                          <div class=\"media\">\n                                            <!-- <img class=\"rounded-circle img-thumbnail\" src=\"https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-1_ffutqr.jpg\" alt=\"\" width=\"75\"> -->\n                                              <div class=\"media-body ml-3\">\n                                                  <blockquote class=\"blockquote border-0 p-0\">\n                                                      <article class=\"font-italic lead\"> <i class=\"fa fa-quote-left mr-3 text-success\"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</article>\n                                                      <footer class=\"blockquote-footer\">Someone famous in\n                                                          <cite title=\"Source Title\">Source Title</cite>\n                                                      </footer>\n                                                  </blockquote>\n                                              </div>\n                                          </div>\n                                      </div>\n            \n                                      <!-- Carousel slide-->\n                                      <div class=\"carousel-item\">\n                                          <div class=\"media\">\n                                            <!-- <img class=\"rounded-circle img-thumbnail\" src=\"https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-3_hdxocq.jpg\" alt=\"\" width=\"75\"> -->\n                                              <div class=\"media-body ml-3\">\n                                                  <blockquote class=\"blockquote border-0 p-0\">\n                                                      <article class=\"font-italic lead\"> <i class=\"fa fa-quote-left mr-3 text-success\"></i>Lorem icaptionsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</article>\n                                                      <footer class=\"blockquote-footer\">Someone famous in\n                                                          <cite title=\"Source Title\">Source Title</cite>\n                                                      </footer>\n                                                  </blockquote>\n                                              </div>\n                                          </div>\n                                      </div>\n            \n                                      <!-- Carousel slide-->\n                                      <div class=\"carousel-item\">\n                                          <div class=\"media\">\n                                            <!-- <img class=\"rounded-circle img-thumbnail\" src=\"https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-2_gibm2s.jpg\" alt=\"\" width=\"75\"> -->\n                                              <div class=\"media-body ml-3\">\n                                                  <blockquote class=\"blockquote border-0 p-0\">\n                                                      <article class=\"font-italic lead\"> <i class=\"fa fa-quote-left mr-3 text-success\"></i>Lorem icaptionsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</article>\n                                                      <footer class=\"blockquote-footer\">Someone famous in\n                                                          <cite title=\"Source Title\">Source Title</cite>\n                                                      </footer>\n                                                  </blockquote>\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n            \n            \n                                  <!-- Bootstrap controls [dots]-->\n                                  <a class=\"carousel-control-prev width-auto\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                                      <i class=\"fa fa-angle-left text-dark text-lg\"></i>\n                                      <span class=\"sr-only\">Previous</span>\n                                  </a>\n                                  <a class=\"carousel-control-next width-auto\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                                      <i class=\"fa fa-angle-right text-dark text-lg\"></i>\n                                      <span class=\"sr-only\">Next</span>\n                                  </a>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </section>\n                        \n            <!-- <carousel [showIndicators]=\"false\" >\n              <slide>\n                <img\n                  alt=\"First slide\"\n                  class=\"d-block w-50\"\n                  src=\"assets/img/denys.jpg\"\n                />\n              </slide>\n              <slide>\n                <img\n                  alt=\"Second slide\"\n                  class=\"d-block w-50\"\n                  src=\"assets/img/fabien-bazanegue.jpg\"\n                />\n              </slide>\n              <slide>\n                <img\n                  alt=\"Third slide\"\n                  class=\"d-block w-50\"\n                  src=\"assets/img/mark-finn.jpg\"\n                />\n              </slide>\n            </carousel> -->\n          </div>\n        \n         \n        </div>\n      </div>\n      <!-- <div class=\"container\">\n        <div class=\"title\"><h3 class=\"mb-3\">What our clients are saying</h3></div>\n        <div class=\"row\">\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">\n                With icons\n              </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-spaceship\"> </i> Profile\n                    </ng-template>\n                    <p>\n                      Collaboratively administrate empowered markets via\n                      plug-and-play networks. Dynamically procrastinate B2C\n                      users after installed base benefits. <br />\n\n                      <br />\n\n                      Dramatically visualize customer directed convergence\n                      without revolutionary ROI.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                    </ng-template>\n                    <p>\n                      Completely synergize resource taxing relationships via\n                      premier niche markets. Professionally cultivate one-to-one\n                      customer service with robust ideas. <br />\n\n                      <br />\n\n                      Dynamically innovate resource-leveling customer service\n                      for state of the art customer service.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-bag-16\"> </i> Options\n                    </ng-template>\n                    <p>\n                      Efficiently unleash cross-media information without\n                      cross-media value. Quickly maximize timely deliverables\n                      for real-time schemas. <br />\n\n                      <br />\n\n                      Dramatically maintain clicks-and-mortar solutions without\n                      functional solutions.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\"> With text </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab heading=\"Profile\">\n                    <p>\n                      These cases are perfectly simple and easy to distinguish.\n                      In a free hour, when our power of choice is untrammelled\n                      and when nothing prevents our being able to do what we\n                      like best, every pleasure is to be welcomed and every pain\n                      avoided. <br />\n\n                      But in certain circumstances and owing to the claims of\n                      duty or the obligations of business it will frequently\n                      occur that pleasures\n                    </p>\n                  </tab>\n                  <tab heading=\"Settings\">\n                    <p>\n                      I will be the leader of a company that ends up being worth\n                      billions of dollars, because I got the answers. I\n                      understand culture. I am the nucleus. I think thatâs a\n                      responsibility that I have, to push possibilities, to show\n                      people, this is the level that things could be at. I think\n                      thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at.\n                    </p>\n                  </tab>\n                  <tab heading=\"Options\">\n                    <p>\n                      I think thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at. So when you get something that has the\n                      name Kanye West on it, itâs supposed to be pushing the\n                      furthest possibilities. I will be the leader of a company\n                      that ends up being worth billions of dollars, because I\n                      got the answers. I understand culture. I am the nucleus.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n    <!-- </div> -->\n    \n    <!-- <div class=\"section section-notifications\" id=\"notifications\">\n      <div class=\"container\">\n        <div class=\"space\"></div>\n        <h3>Notifications</h3>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'primary alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-coins\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Congrats! - </b> This is a regular notification made with\n            \".alert-primary\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'info alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-trophy\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Heads up! - </b> This is a regular notification made with\n            \".alert-info\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'success alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bell-55\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Well done! - </b> This is a regular notification made with\n            \".alert-success\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'warning alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bulb-63\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Warning! - </b> This is a regular notification made with\n            \".alert-warning\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'danger alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-support-17\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Oh snap! - </b> This is a regular notification made with\n            \".alert-danger\"\n          </span>\n        </alert>\n      </div>\n    </div> -->\n  \n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n\n      <div class=\"container\">\n        <h3 class=\"title mb-5\">We’ll find your perfect fit</h3>\n        \n        <div class=\"row\" >\n          <div class=\"col-md-3\">\n            <div class=\"demo\">\n              <figure class=\"imghvr-push-right\"> <img [src]=\"imgPath8\" alt=\"05\">\n                <figcaption>\n                  <h3>CENTITINNIAL COLLEGE</h3>\n                  <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                </figcaption>\n              </figure>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"demo\">\n              <figure class=\"imghvr-push-right\"> <img [src]=\"imgPath9\" alt=\"05\">\n                <figcaption>\n                  <h3>TAFE COLLEGE</h3>\n                  <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                </figcaption>\n              </figure>\n            </div>\n          \n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"demo\">\n              <figure class=\"imghvr-push-right\"> <img [src]=\"imgPath10\" alt=\"05\">\n                <figcaption>\n                  <h3>BRIHIMNAGAM COLLEGE</h3>\n                  <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                </figcaption>\n              </figure>\n            </div>\n           \n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"demo\">\n              <figure class=\"imghvr-push-right\"> <img [src]=\"imgPath11\" alt=\"05\">\n                <figcaption>\n                  <h3>MELABOURINE UNIVERSITY</h3>\n                  <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                </figcaption>\n              </figure>\n            </div>\n           \n          </div>\n        </div>\n   <br>        \n        <div class=\"row\" >\n          <div class=\"col-md-3\">\n            <div class=\"demo\">\n              <figure class=\"imghvr-push-right\">  <img [src]=\"imgPath12\" alt=\"\">\n                <figcaption>\n                  <h3>GREENWICH UNIVERSITY</h3>\n                  <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                </figcaption>\n              </figure>\n            </div>\n          \n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"demo\">\n              <figure class=\"imghvr-push-right\"> <img [src]=\"imgPath13\" alt=\"\">\n                <figcaption>\n                  <h3>LA TROBE UNIVERSITY</h3>\n                  <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                </figcaption>\n              </figure>\n            </div>\n          \n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"demo\">\n              <figure class=\"imghvr-push-right\">  <img [src]=\"imgPath14\" alt=\"\">\n                <figcaption>\n                  <h3>DEAKIN UNIVERSITY</h3>\n                  <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                </figcaption>\n              </figure>\n            </div>\n          \n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"demo\">\n              <figure class=\"imghvr-push-right\"> <img [src]=\"imgPath15\" alt=\"\">\n                <figcaption>\n                  <h3>RMIT UNIVERSITY</h3>\n                  <p>&quot;You can never be overdressed or overeducated.&quot;</p>\n                </figcaption>\n              </figure>\n            </div>\n           \n          </div>\n        </div>\n        <br />\n\n        <br />\n\n        <!-- <h4 class=\"mb-5 mt-3\">Datepicker</h4>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"datepicker-container\">\n              <div class=\"form-group\">\n                <input\n                  bsDatepicker\n                  class=\"form-control\"\n                  data-datepicker-color=\"danger\"\n                  [bsConfig]=\"{ isAnimated: true, containerClass: 'theme-red' }\"\n                  [bsValue]=\"date\"\n                  id=\"datepicker\"\n                  type=\"text\"\n                />\n              </div>\n            </div>\n          </div>\n        </div> -->\n        <!-- <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Popovers</h4>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"top\"\n              popoverTitle=\"Popover on top\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"right\"\n              popoverTitle=\"Popover on right\"\n              popover=\"Here will be some very useful information about his popover.<br>\n              Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"bottom\"\n              popoverTitle=\"Popover on bottom\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-sm\"\n              container=\"body\"\n              placement=\"left\"\n              popoverTitle=\"Popover on left\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On left\n            </button>\n          </div>\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Tooltips</h4>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              data-delay=\"100\"\n              placement=\"left\"\n              tooltip=\"Tooltip on left\"\n              type=\"button\"\n            >\n              On left\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"top\"\n              tooltip=\"Tooltip on top\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"bottom\"\n              tooltip=\"Tooltip on bottom\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"right\"\n              tooltip=\"Tooltip on right\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <div class=\"clearfix\"></div>\n            <br />\n\n            <br />\n          </div>\n        </div> -->\n      </div>\n      <!-- <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"title\"><h3>Carousel</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-5 mb-5 mb-lg-0\">\n              <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a\n                class=\"btn btn-warning mt-4\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\"\n              >\n                See all components\n              </a>\n            </div>\n            <div class=\"col-lg-6\">\n              <carousel [showIndicators]=\"false\">\n                <slide>\n                  <img\n                    alt=\"First slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/denys.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Second slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/fabien-bazanegue.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Third slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/mark-finn.jpg\"\n                  />\n                </slide>\n              </carousel>\n            </div>\n          </div>\n        </div>\n      </div> -->\n    </div>\n    <div class=\"section section-nucleo-icons\">\n      <img class=\"path\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\" #aboutUs>\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-8 col-md-12\">\n            <h2 class=\"title\">About Us</h2>\n            <h4 class=\"description\">\n              <!-- <div class=\"text-center col-md-12 col-lg-8\"> -->\n                <h2>\n                  5 Best countries to study MS abroad\n                  Why students pursue MS abroad?\n                </h2>\n                <h4 class=\"description\">\n                  MS is one of the most sought-after courses today because of the weight it carries on your resume. Those who want to go to study abroad always have a question in their mind that which country is best for MS. So, it is essential to keep in mind that the kind of school and MS program you attend also have brand associations that can help open doors based on the school's reputation. Hence, it is important to choose the place to study wisely before applying. The criteria for choosing an MS College should be based keeping in mind the cost, reputation, quality of education, positive reviews and rate of investment (ROI), etc.\n                </h4>\n              <!-- </div> -->\n            </h4>\n            <!-- <div class=\"btn-wrapper\">\n              <a\n                class=\"btn btn-danger btn-round mr-1\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n                target=\"_blank\"\n              >\n                View Demo Icons\n              </a>\n              <a\n                class=\"btn btn-danger btn-simple btn-round btn-lg\"\n                href=\"https://nucleoapp.com/?ref=1712\"\n                target=\"_blank\"\n              >\n                View All Icons\n              </a>\n            </div> -->\n          </div>\n        </div>\n        <!-- <div class=\"blur-hover\">\n          <a\n            href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n            class=\"text-danger\"\n          >\n            <div class=\"icons-container blur-item on-screen mt-5\">\n              <i class=\"icon tim-icons icon-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-spaceship\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-money-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-link-72\"> </i>\n              <i class=\"icon tim-icons icon-send\"> </i>\n              <i class=\"icon tim-icons icon-mobile\"> </i>\n              <i class=\"icon tim-icons icon-wifi\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-key-25\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-atom\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-satisfied\"> </i>\n              <i class=\"icon tim-icons icon-gift-2\"> </i>\n              <i class=\"icon tim-icons icon-tap-02\"> </i>\n              <i class=\"icon tim-icons icon-wallet-43\"> </i>\n            </div>\n            <span class=\"blur-hidden h5 text-danger\">\n              Eplore all the 21.000+ Nucleo Icons\n            </span>\n          </a>\n        </div> -->\n      </div>\n    </div>\n    <!-- <div class=\"section section-signup\"> -->\n      <div class=\"container\">\n        <div class=\"squares square-1\"></div>\n        <div class=\"squares square-2\"></div>\n        <div class=\"squares square-3\"></div>\n        <div class=\"squares square-4\"></div>\n        <div class=\"row row-grid justify-content-between align-items-center\">\n          <div class=\"col-lg-6\">\n            <h3 class=\"display-3 text-white\">\n              Keep In Touch \n              <span class=\"text-white\"> 'Full Fill Your Dreams with Us' </span>\n            </h3>\n            <p class=\"text-white mb-3\">\n              The Design System comes with four pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go. More importantly, looking at them will give you a picture\n              of what you can built with this powerful Bootstrap 4 Design\n              System.\n            </p>\n            <div class=\"btn-wrapper\">\n              <a class=\"btn btn-danger\" [routerLink]=\"['/register']\">\n                Register Page\n              </a>\n            </div>\n          </div>\n          <div class=\"col-lg-6 mb-lg-auto\">\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\" #form=\"ngForm\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                      name=\"name\"\n                      [(ngModel)]=\"name\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-mobile\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Phone Number\"\n                      type=\"text\"\n                      name=\"phoneNumber\"\n                      [(ngModel)]=\"phoneNumber\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"email\"\n                      name=\"emailid\"\n                      [(ngModel)]=\"emailid\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-paper\" style=\"margin-top: -33px;\"> </i>\n                      </div>\n                    </div>\n                    <textarea\n                      class=\"form-control\"\n                      [(ngModel)]=\"message\"\n                      name=\"message\"\n                      placeholder=\"Message\"\n                      rows=\"4\" cols=\"40\" maxlength=\"100\"\n                    ></textarea>\n                  </div>\n                  <!-- <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div> -->\n                </form>\n              </div>\n\n           \n              <div class=\"card-footer\">\n                <button\n                   class=\"btn btn-danger btn-round btn-lg\"\n                   (click)=\"InsertFormObj(form)\"\n                >\n                  Get Started\n              </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <br />\n      <br />\n    <!-- </div> -->\n    <!-- <div class=\"section section-examples\" data-background-color=\"black\"> -->\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <!-- <div class=\"space-50\"></div> -->\n      <div class=\"container text-center\">\n        <div class=\"row\">\n          <!-- <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/landing']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/landing-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/landing']\"\n            >\n              View Landing Page\n            </a>\n          </div> -->\n          <!-- <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/profile']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/profile-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/profile']\"\n            >\n              View Profile Page\n            </a>\n          </div> -->\n        </div>\n      </div>\n    <!-- </div> -->\n    <!-- class=\"section section-download\" -->\n    <div  data-background-color=\"black\" #target>\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <!-- <div class=\"row justify-content-md-center\">\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <h2 class=\"title\">\n              5 Best countries to study MS abroad\n              Why students pursue MS abroad?\n            </h2>\n            <h4 class=\"description\">\n              MS is one of the most sought-after courses today because of the weight it carries on your resume. Those who want to go to study abroad always have a question in their mind that which country is best for MS. So, it is essential to keep in mind that the kind of school and MS program you attend also have brand associations that can help open doors based on the school's reputation. Hence, it is important to choose the place to study wisely before applying. The criteria for choosing an MS College should be based keeping in mind the cost, reputation, quality of education, positive reviews and rate of investment (ROI), etc.\n            </h4>\n          </div>\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <a\n              class=\"btn btn-danger btn-round btn-lg\"\n              href=\"https://www.creative-tim.com/product/blk-design-system-angular\"\n              role=\"button\"\n            >\n              Download Angular\n            </a>\n          </div>\n        </div> -->\n       \n <div class=\"row row-grid align-items-center my-md\">\n          <div class=\"row col-lg-6\">\n            <h3 class=\"display-3 text-white\">\n              Our partners INDIA\n            </h3>\n            <h4 class=\"mb-0 font-weight-light\">\n              <!-- Let's get in touch on it. -->\n            </h4>\n            <div class=\"col-md-12\"> \n              <div class=\"fall-item fall-effect\">\n                        <img src=\"http://placeimg.com/260/260/nature/8/\"/>\n                        <div class=\"mask\">\n                            <h2>About Partners </h2>\n                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>\n                            <a href=\"#\" class=\"btn btn-default\">Read More</a>\n                        </div>\n                    </div>\n                    </div>\n\n                    <h3 class=\"display-3 text-white\">\n                      Our partners UNITED STATES\n                    </h3>\n                    <h4 class=\"mb-0 font-weight-light\">\n                      <!-- Let's get in touch on it. -->\n                    </h4>\n                    <div class=\"col-md-12\"> \n                      <div class=\"fall-item fall-effect\">\n                                <img src=\"http://placeimg.com/260/260/nature/8/\"/>\n                                <div class=\"mask\">\n                                    <h2>About Partners </h2>\n                                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>\n                                    <a href=\"#\" class=\"btn btn-default\">Read More</a>\n                                </div>\n                            </div>\n                            </div>\n             \n           \n          </div>\n          \n          \n          <div class=\"col-lg-6 text-lg-center btn-wrapper\">\n            <!-- <img [src]=\"imgPath1\" alt=\"ielts\"> -->\n            <!-- <img [src]=\"imgPath2\" alt=\"hotcourse\"> -->\n            <div id=\"images\">\n              <h3 class=\"display-3 text-white\">\n                OUR PARTNERS IN INDIA\n               \n              </h3>\n              <div class=\"row\">\n                <div class=\"col-sm-6 col-6 section section-nucleo-icons\">\n                <img\n                alt=\"Rounded image\"\n                class=\"img-fluid rounded shadow\"\n                [src]=\"imgPath1\"\n                style=\"width: 250px;\"\n              />\n              </div>\n              \n                <div class=\"col-sm3 col-6 section section-nucleo-icons\">\n                 \n                  <img\n                    alt=\"Circle image\"\n                    class=\"img-fluid rounded-circle shadow\"\n                    [src]=\"imgPath2\"\n                    style=\"width: 250px;\"\n                  />\n                </div>\n               \n     \n                <div class=\"col-sm-6 col-6 section section-nucleo-icons\">\n                  <img\n                  alt=\"Rounded image\"\n                  class=\"img-fluid rounded shadow\"\n                  [src]=\"imgPath1\"\n                  style=\"width: 250px;\"\n                />\n                </div>\n                \n                  <div class=\"col-sm3 col-6 section section-nucleo-icons\">\n                   \n                    <img\n                      alt=\"Circle image\"\n                      class=\"img-fluid rounded-circle shadow\"\n                      [src]=\"imgPath2\"\n                      style=\"width: 250px;\"\n                    />\n                  </div>\n                   \n                  \n\n                  <div class=\"col-sm-6 col-6 section section-nucleo-icons\">\n                    <img\n                    alt=\"Rounded image\"\n                    class=\"img-fluid rounded shadow\"\n                    [src]=\"imgPath1\"\n                    style=\"width: 250px;\"\n                  />\n                  </div>\n                  \n                    <div class=\"col-sm3 col-6 section section-nucleo-icons\">\n                     \n                      <img\n                        alt=\"Circle image\"\n                        class=\"img-fluid rounded-circle shadow\"\n                        [src]=\"imgPath2\"\n                        style=\"width: 250px;\"\n                      />\n                    </div>\n               \n                \n              </div>\n            </div>\n            \n            \n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade\"\n      #myModal=\"bs-modal\"\n      id=\"myModal\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n            <h4 class=\"title title-up\">Modal title</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>\n              Far far away, behind the word mountains, far from the countries\n              Vokalia and Consonantia, there live the blind texts. Separated\n              they live in Bookmarksgrove right at the coast of the Semantics, a\n              large language ocean. A small river named Duden flows by their\n              place and supplies it with the necessary regelialia. It is a\n              paradisematic country, in which roasted parts of sentences fly\n              into your mouth.\n            </p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-default\" type=\"button\">Nice Button</button>\n            <button\n              class=\"btn btn-danger\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-mini modal-danger modal-mini\"\n      #myModal1=\"bs-modal\"\n      id=\"myModal1\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal1.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"modal-profile\">\n              <i class=\"tim-icons icon-single-02\"> </i>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <p>Always have an access to your profile</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-link btn-neutral\" type=\"button\">Back</button>\n            <button\n              class=\"btn btn-link btn-neutral\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal1.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-black\"\n      #myModal2=\"bs-modal\"\n      id=\"myModal2\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal2.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"text-muted text-center ml-auto mr-auto\">\n              <h3 class=\"mb-0\">Sign in with</h3>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"btn-wrapper text-center\">\n              <a\n                class=\"btn btn-neutral btn-icon mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <img src=\"assets/img/github.svg\" />\n              </a>\n              <a class=\"btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\n                <img src=\"assets/img/google.svg\" />\n              </a>\n            </div>\n            <div class=\"text-center text-muted mb-4 mt-3\">\n              <small> Or sign in with credentials </small>\n            </div>\n            <form role=\"form\">\n              <div class=\"form-group mb-3\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-email-85\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Email\"\n                    type=\"email\"\n                    (focus)=\"focus1 = true\"\n                    (blur)=\"focus1 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-key-25\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Password\"\n                    type=\"password\"\n                    (focus)=\"focus2 = true\"\n                    (blur)=\"focus2 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-check mt-3\">\n                <label class=\"form-check-label\">\n                  <input\n                    checked=\"checked\"\n                    class=\"form-check-input\"\n                    type=\"checkbox\"\n                  />\n\n                  <span class=\"form-check-sign\"> </span> Remember me!\n                </label>\n              </div>\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary my-4\" type=\"button\">\n                  Sign in\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h3 class=\"title\">Consulatancy•</h3></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <footer class=\"bg-dark text-center text-white\">\n    <!-- Copyright -->\n    <div class=\"text-center p-3\" style=\" background: radial-gradient(ellipse at bottom, #292d61 30%, #171941 80%);\">\n      © 2021 Copyright:\n      <a class=\"text-white\" href=\"\">Consulatancy.com</a>\n    </div>\n    <!-- Copyright -->\n  </footer>\n</div>\n\n\n<style>\n  @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);\n  @import url(https://fonts.googleapis.com/css?family=Lora);\n  [class*=' imghvr-'],[class^=imghvr-]\n  {font-family:Montserrat,sans-serif;\n    position:relative;\n    display:inline-block;\n    margin:0;\n    max-width:100%;\n    background-color:rgba(230,230,230,.7);\n    color:#666;\n    overflow:hidden;\n    -moz-osx-font-smoothing:grayscale;\n    -webkit-backface-visibility:hidden;\n    backface-visibility:hidden;\n    -webkit-transform:translateZ(0);\n    transform:translateZ(0)\n    }\n    [class*=' imghvr-'] img,[class^=imghvr-] img{vertical-align:top;max-width:100%}\n    [class*=' imghvr-'] figcaption,[class^=imghvr-] figcaption{background-color:rgba(255,255,255,.9);\n      padding:20px;position:absolute;top:15px;bottom:15px;\n      left:15px;\n      right:15px;\n      border:1px solid rgba(0,0,0,.1)}\n      [class*=' imghvr-'] \n      h3,[class*=' imghvr-'] \n      p,[class^=imghvr-] h3,[class^=imghvr-] \n      p{margin:0;padding:0}[class*=' imghvr-'] \n      h3,[class^=imghvr-] \n      h3{font-weight:700;color:#333;margin-bottom:2px}\n      [class*=' imghvr-']\n       p,[class^=imghvr-]\n       p{font-family:Lora,sans-serif;\n       font-size:.9em}[class*=' imghvr-'] \n       a,[class^=imghvr-]\n        a{position:absolute;\n        top:0;bottom:0;left:0;\n        right:0;z-index:1}\n        [class*=' imghvr-'],\n        [class*=' imghvr-'] \n        *,[class*=' imghvr-'] :after,\n        [class*=' imghvr-'] :before,\n        [class*=' imghvr-']:after,\n        [class*=' imghvr-']:before,\n        [class^=imghvr-],\n        [class^=imghvr-] \n        *,[class^=imghvr-] :after,\n        [class^=imghvr-] :before,\n        [class^=imghvr-]:after,\n        [class^=imghvr-]:before\n        {-webkit-box-sizing:border-box;\n        box-sizing:border-box;\n        -webkit-transition:all .35s ease;\n        transition:all \n        .35s ease}\n        .imghvr-fade figcaption,\n        .imghvr-fade:hover \n        img{opacity:0}.imghvr-fade:hover figcaption{opacity:1}\n        [class*=' imghvr-push-']:hover figcaption,\n        [class*=' imghvr-slide-']:hover figcaption,\n        [class^=imghvr-push-]:hover figcaption,\n        [class^=imghvr-slide-]:hover figcaption\n        {-webkit-transform:translate(0,0);\n        transform:translate(0,0)}\n        .imghvr-push-up figcaption{-webkit-transform:translateY(120%);\n          transform:translateY(120%)}\n          .imghvr-push-up:hover \n          img{-webkit-transform:translateY(-100%);\n          transform:translateY(-100%)}.imghvr-push-down figcaption{-webkit-transform:translateY(-120%);\n          transform:translateY(-120%)}.imghvr-push-down:hover img{-webkit-transform:translateY(100%);\n          transform:translateY(100%)}.imghvr-push-left figcaption{-webkit-transform:translateX(120%);\n          transform:translateX(120%)}.imghvr-push-left:hover img{-webkit-transform:translateX(-100%);\n          transform:translateX(-100%)}.imghvr-push-right figcaption{-webkit-transform:translateX(-120%);\n          transform:translateX(-120%)}.imghvr-push-right:hover img{-webkit-transform:translateX(100%);\n          transform:translateX(100%)}.imghvr-slide-up figcaption{-webkit-transform:translateY(120%);\n          transform:translateY(120%)}.imghvr-slide-down figcaption{-webkit-transform:translateY(-120%);\n          transform:translateY(-120%)}.imghvr-slide-left figcaption{-webkit-transform:translateX(120%);\n          transform:translateX(120%)}.imghvr-slide-right figcaption{-webkit-transform:translateX(-120%);\n          transform:translateX(-120%)}\n          [class*=' imghvr-reveal-']:before,\n          [class^=imghvr-reveal-]:before{position:absolute;top:0;bottom:0;\n          left:0;right:0;content:'';\n          background-color:inherit}[class*=' imghvr-reveal-']\n           figcaption,[class^=imghvr-reveal-] \n           figcaption{opacity:0}\n           [class*=' imghvr-reveal-']:hover:before,\n           [class^=imghvr-reveal-]:hover:before{-webkit-transform:translate(0,0);transform:translate(0,0)}\n           [class*=' imghvr-reveal-']:hover figcaption,[class^=imghvr-reveal-]:hover figcaption{opacity:1;\n            -webkit-transition-delay:.2s;transition-delay:.2s}\n            .imghvr-reveal-up:before{-webkit-transform:translateY(100%);\n              transform:translateY(100%)}\n              .imghvr-reveal-down:before{-webkit-transform:translateY(-100%);transform:translateY(-100%)}\n              .imghvr-reveal-left:before{-webkit-transform:translateX(100%);transform:translateX(100%)}\n              .imghvr-reveal-right:before{-webkit-transform:translateX(-100%);transform:translateX(-100%)}\n              [class*=' imghvr-hinge-'],[class^=imghvr-hinge-]{-webkit-perspective:50em;perspective:50em}\n              [class*=' imghvr-hinge-'] figcaption,[class^=imghvr-hinge-] figcaption{opacity:0;z-index:1}\n              [class*=' imghvr-hinge-']:hover img,\n              [class^=imghvr-hinge-]:hover img{opacity:0}\n              [class*=' imghvr-hinge-']:hover figcaption,\n              [class^=imghvr-hinge-]:hover figcaption{opacity:1;\n              -webkit-transition-delay:.2s;transition-delay:.2s}\n              .imghvr-hinge-up img{-webkit-transform-origin:50% 0;\n                -ms-transform-origin:50% 0;transform-origin:50% 0}\n                .imghvr-hinge-up figcaption{-webkit-transform:rotateX(90deg);\n                  transform:rotateX(90deg);-webkit-transform-origin:50% 100%;\n                  -ms-transform-origin:50% 100%;transform-origin:50% 100%}\n                  .imghvr-hinge-up:hover img{-webkit-transform:rotateX(-90deg);\n                    transform:rotateX(-90deg)}\n                    .imghvr-hinge-up:hover figcaption{-webkit-transform:rotateX(0);\n                      transform:rotateX(0)}\n                      .imghvr-hinge-down img{-webkit-transform-origin:50% 100%;\n                        -ms-transform-origin:50% 100%;transform-origin:50% 100%}\n                        .imghvr-hinge-down figcaption{-webkit-transform:rotateX(-90deg);\n                          transform:rotateX(-90deg);-webkit-transform-origin:50% -50%;\n                          -ms-transform-origin:50% -50%;transform-origin:50% -50%}\n                          .imghvr-hinge-down:hover img{-webkit-transform:rotateX(90deg);\n                            transform:rotateX(90deg);opacity:0}\n                            .imghvr-hinge-down:hover figcaption{-webkit-transform:rotateX(0);\n                              transform:rotateX(0)}.imghvr-hinge-left img{-webkit-transform-origin:0 50%;\n                              -ms-transform-origin:0 50%;transform-origin:0 50%}\n                              .imghvr-hinge-left figcaption{-webkit-transform:rotateY(-90deg);\n                                transform:rotateY(-90deg);-webkit-transform-origin:100% 50%;\n                                -ms-transform-origin:100% 50%;transform-origin:100% 50%}\n                                .imghvr-hinge-left:hover img{-webkit-transform:rotateY(90deg);\n                                  transform:rotateY(90deg)}\n                                  .imghvr-hinge-left:hover figcaption{-webkit-transform:rotateY(0);\n                                    transform:rotateY(0)}\n                                    .imghvr-hinge-right img{-webkit-transform-origin:100% 50%;\n                                      -ms-transform-origin:100% 50%;transform-origin:100% 50%}\n                                      .imghvr-hinge-right figcaption{-webkit-transform:rotateY(90deg);\n                                        transform:rotateY(90deg);-webkit-transform-origin:0 50%;\n                                        -ms-transform-origin:0 50%;transform-origin:0 50%}\n                                        .imghvr-hinge-right:hover img{-webkit-transform:rotateY(-90deg);\n                                          transform:rotateY(-90deg)}\n                                          .imghvr-hinge-right:hover figcaption{-webkit-transform:rotateY(0);\n                                            transform:rotateY(0)}\n                                            [class*=' imghvr-flip-'],\n                                            [class^=imghvr-flip-]{-webkit-perspective:50em;perspective:50em}\n                                            [class*=' imghvr-flip-'] img,[class^=imghvr-flip-] img{backface-visibility:hidden}\n                                            [class*=' imghvr-flip-'] figcaption,[class^=imghvr-flip-] figcaption{opacity:0}\n                                            [class*=' imghvr-flip-']:hover figcaption,\n                                            [class^=imghvr-flip-]:hover figcaption{opacity:1;\n                                            -webkit-transition-delay:.15s;\n                                            transition-delay:.15s}\n                                            .imghvr-flip-horiz figcaption{-webkit-transform:rotateX(90deg);\n                                              transform:rotateX(90deg);-webkit-transform-origin:0 50%;\n                                              -ms-transform-origin:0 50%;transform-origin:0 50%}\n                                              .imghvr-flip-horiz:hover figcaption{-webkit-transform:rotateX(0);\n                                                transform:rotateX(0)}.imghvr-flip-vert figcaption{-webkit-transform:rotateY(90deg);\n                                                transform:rotateY(90deg);-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;\n                                                transform-origin:50% 0}.imghvr-flip-vert:hover figcaption{-webkit-transform:rotateY(0);\n                                                transform:rotateY(0)}.imghvr-flip-diag-1 figcaption{-webkit-transform:rotate3d(1,-1,0,100deg);\n                                                transform:rotate3d(1,-1,0,100deg)}\n                                                .imghvr-flip-diag-1:hover figcaption{-webkit-transform:rotate3d(0,0,0,0deg);\n                                                  transform:rotate3d(0,0,0,0deg)}\n                                                  .imghvr-flip-diag-2 figcaption{-webkit-transform:rotate3d(1,1,0,100deg);\n                                                    transform:rotate3d(1,1,0,100deg)}.imghvr-flip-diag-2:hover figcaption{-webkit-transform:rotate3d(0,0,0,0deg);transform:rotate3d(0,0,0,0deg)}[class*=' imghvr-shutter-out-']:before,[class^=imghvr-shutter-out-]:before{background:inherit;position:absolute;content:'';\n                                                    -webkit-transition-delay:.1s;transition-delay:.1s}\n                                                    [class*=' imghvr-shutter-out-'] figcaption,[class^=imghvr-shutter-out-] figcaption{opacity:0;\n                                                      -webkit-transition-delay:0s;transition-delay:0s}[class*=' imghvr-shutter-out-']:hover:before,\n                                                      [class^=imghvr-shutter-out-]:hover:before{-webkit-transition-delay:0s;\n                                                      transition-delay:0s}[class*=' imghvr-shutter-out-']:hover figcaption,\n                                                      [class^=imghvr-shutter-out-]:hover figcaption{opacity:1;\n                                                      -webkit-transition-delay:.1s;transition-delay:.1s}\n                                                      .imghvr-shutter-out-horiz:before{left:50%;\n                                                        right:50%;top:0;bottom:0}\n                                                        .imghvr-shutter-out-horiz:hover:before{left:0;right:0}\n                                                        .imghvr-shutter-out-vert:before{top:50%;bottom:50%;left:0;\n                                                          right:0}.imghvr-shutter-out-vert:hover:before{top:0;bottom:0}\n                                                          .imghvr-shutter-out-diag-1:before{top:50%;bottom:50%;left:-35%;\n                                                          right:-35%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}\n                                                          .imghvr-shutter-out-diag-1:hover:before{top:-35%;bottom:-35%}\n                                                          .imghvr-shutter-out-diag-2:before{top:50%;bottom:50%;\n                                                          left:-35%;right:-35%;-webkit-transform:rotate(-45deg);\n                                                          transform:rotate(-45deg)}\n                                                          .imghvr-shutter-out-diag-2:hover:before{top:-35%;bottom:-35%}\n                                                          [class*=' imghvr-shutter-in-']:after,\n                                                          [class*=' imghvr-shutter-in-']:before,[class^=imghvr-shutter-in-]:after,\n                                                          [class^=imghvr-shutter-in-]:before{background:inherit;position:absolute;content:''}\n                                                          [class*=' imghvr-shutter-in-']:after,[class^=imghvr-shutter-in-]:after{top:0;left:0}\n                                                          [class*=' imghvr-shutter-in-']:before,[class^=imghvr-shutter-in-]:before{right:0;bottom:0}\n                                                          [class*=' imghvr-shutter-in-'] figcaption,[class^=imghvr-shutter-in-] figcaption{opacity:0;z-index:1}\n                                                          [class*=' imghvr-shutter-in-']:hover figcaption,[class^=imghvr-shutter-in-]:hover figcaption{opacity:1;\n                                                          -webkit-transition-delay:.2s;transition-delay:.2s}\n                                                          .imghvr-shutter-in-horiz:after,\n                                                          .imghvr-shutter-in-horiz:before{width:0;\n                                                          height:100%}.imghvr-shutter-in-horiz:hover:after,\n                                                          .imghvr-shutter-in-horiz:hover:before{width:50%}.imghvr-shutter-in-vert:after,\n                                                          .imghvr-shutter-in-vert:before{height:0;width:100%}.imghvr-shutter-in-vert:hover:after,\n                                                          .imghvr-shutter-in-vert:hover:before{height:50%}.imghvr-shutter-in-out-horiz:after,\n                                                          .imghvr-shutter-in-out-horiz:before{width:0;height:100%}\n                                                          .imghvr-shutter-in-out-horiz:hover:after,\n                                                          .imghvr-shutter-in-out-horiz:hover:before{width:100%}\n                                                          .imghvr-shutter-in-out-vert:after,\n                                                          .imghvr-shutter-in-out-vert:before{height:0;width:100%}\n                                                          .imghvr-shutter-in-out-vert:hover:after,\n                                                          .imghvr-shutter-in-out-vert:hover:before{height:100%}\n                                                          .imghvr-shutter-in-out-diag-1:after,\n                                                          .imghvr-shutter-in-out-diag-1:before{width:200%;height:200%;\n                                                          -webkit-transition:all .6s ease;transition:all .6s ease}\n                                                          .imghvr-shutter-in-out-diag-1:after{-webkit-transform:skew(-45deg) translateX(-150%);\n                                                          transform:skew(-45deg) translateX(-150%)}\n                                                          .imghvr-shutter-in-out-diag-1:before{-webkit-transform:skew(-45deg) translateX(150%);\n                                                          transform:skew(-45deg) translateX(150%)}\n                                                          .imghvr-shutter-in-out-diag-1:hover:after{-webkit-transform:skew(-45deg) translateX(-50%);\n                                                          transform:skew(-45deg) translateX(-50%)}\n                                                          .imghvr-shutter-in-out-diag-1:hover:before{-webkit-transform:skew(-45deg) translateX(50%);\n                                                          transform:skew(-45deg) translateX(50%)}\n                                                          .imghvr-shutter-in-out-diag-2:after,\n                                                          .imghvr-shutter-in-out-diag-2:before{width:200%;height:200%;\n                                                          -webkit-transition:all .6s ease;transition:all .6s ease}\n                                                          .imghvr-shutter-in-out-diag-2:after{-webkit-transform:skew(45deg) translateX(-100%);\n                                                          transform:skew(45deg) translateX(-100%)}\n                                                          .imghvr-shutter-in-out-diag-2:before{-webkit-transform:skew(45deg) translateX(100%);\n                                                          transform:skew(45deg) translateX(100%)}.imghvr-shutter-in-out-diag-2:hover:after,\n                                                          .imghvr-shutter-in-out-diag-2:hover:before{-webkit-transform:skew(45deg) translateX(0);\n                                                          transform:skew(45deg) translateX(0)}[class*=' imghvr-fold'],\n                                                          [class^=imghvr-fold]{-webkit-perspective:50em;perspective:50em}[class*=' imghvr-fold'] \n                                                          img,[class^=imghvr-fold] img{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;\n                                                          transform-origin:50% 0}[class*=' imghvr-fold'] figcaption,[class^=imghvr-fold] figcaption{z-index:1;opacity:0}\n                                                          [class*=' imghvr-fold']:hover img,[class^=imghvr-fold]:hover img{opacity:0;-webkit-transition-delay:0;\n                                                          transition-delay:0}[class*=' imghvr-fold']:hover figcaption,\n                                                          [class^=imghvr-fold]:hover figcaption{-webkit-transform:rotateX(0) translate3d(0,0,0) scale(1);transform:rotateX(0) translate3d(0,0,0) scale(1);\n                                                          opacity:1;-webkit-transition-delay:.2s;transition-delay:.2s}\n                                                          .imghvr-fold-up img{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;\n                                                          transform-origin:50% 0}\n                                                          .imghvr-fold-up figcaption{-webkit-transform:rotateX(-90deg) translate3d(0,-50%,0) scale(.6);transform:rotateX(-90deg) translate3d(0,-50%,0) scale(.6);-webkit-transform-origin:50% 100%;\n                                                          -ms-transform-origin:50% 100%;transform-origin:50% 100%}\n                                                          .imghvr-fold-up:hover img{-webkit-transform:rotateX(90deg) scale(.6) translateY(50%);transform:rotateX(90deg) scale(.6) translateY(50%)}\n                                                          .imghvr-fold-down img{-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;\n                                                          transform-origin:50% 100%}.imghvr-fold-down figcaption{-webkit-transform:rotateX(90deg) translate3d(0,50%,0) scale(.6);\n                                                          transform:rotateX(90deg) translate3d(0,50%,0) scale(.6);-webkit-transform-origin:50% 0;\n                                                          -ms-transform-origin:50% 0;transform-origin:50% 0}\n                                                          .imghvr-fold-down:hover img{-webkit-transform:rotateX(-90deg) scale(.6) translateY(-50%);\n                                                          transform:rotateX(-90deg) scale(.6) translateY(-50%)}\n                                                          .imghvr-fold-left img{-webkit-transform-origin:0 50%;\n                                                          -ms-transform-origin:0 50%;transform-origin:0 50%}\n                                                          .imghvr-fold-left figcaption{-webkit-transform:rotateY(90deg) translate3d(-50%,0,0) scale(.6);\n                                                          transform:rotateY(90deg) translate3d(-50%,0,0) scale(.6);-webkit-transform-origin:100% 50%;-ms-transform-origin:100% 50%;\n                                                          transform-origin:100% 50%}.imghvr-fold-left:hover img{-webkit-transform:rotateY(-90deg) scale(.6) translateX(50%);\n                                                          transform:rotateY(-90deg) scale(.6) translateX(50%)}\n                                                          .imghvr-fold-right{-webkit-perspective:50em;perspective:50em}\n                                                          .imghvr-fold-right img{-webkit-transform-origin:100% 50%;\n                                                          -ms-transform-origin:100% 50%;\n                                                          transform-origin:100% 50%}\n                                                          .imghvr-fold-right figcaption{-webkit-transform:rotateY(-90deg) translate3d(50%,0,0) scale(.6);transform:rotateY(-90deg) translate3d(50%,0,0) scale(.6);\n                                                          -webkit-transform-origin:0 50%;-ms-transform-origin:0 50%;\n                                                          transform-origin:0 50%}\n                                                          .imghvr-fold-right:hover img{-webkit-transform:rotateY(90deg) scale(.6) translateX(-50%);\n                                                          transform:rotateY(90deg) scale(.6) translateX(-50%)}\n                                                          .imghvr-zoom-in figcaption{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}\n                                                          .imghvr-zoom-in:hover figcaption{-webkit-transform:scale(1);transform:scale(1);opacity:1}\n                                                          [class*=' imghvr-zoom-out'] figcaption,\n                                                          [class^=imghvr-zoom-out] figcaption{-webkit-transform:scale(.5);\n                                                          transform:scale(.5);-webkit-transform-origin:50% 50%;\n                                                          -ms-transform-origin:50% 50%;transform-origin:50% 50%;\n                                                          opacity:0}[class*=' imghvr-zoom-out']\n                                                          .hover figcaption,[class*=' imghvr-zoom-out']:hover figcaption,\n                                                          [class^=imghvr-zoom-out]\n                                                          .hover figcaption,[class^=imghvr-zoom-out]:hover \n                                                          figcaption{-webkit-transform:scale(1);transform:scale(1);\n                                                          opacity:1;-webkit-transition-delay:.3s;transition-delay:.3s}\n                                                          .imghvr-zoom-out:hover img{-webkit-transform:scale(.5);transform:scale(.5);\n                                                          opacity:0}.imghvr-zoom-out-up.hover img,\n                                                          .imghvr-zoom-out-up:hover img{-webkit-animation:imghvr-zoom-out-up .4s linear;\n                                                          animation:imghvr-zoom-out-up .4s linear;-webkit-animation-iteration-count:1;\n                                                          animation-iteration-count:1;\n                                                          -webkit-animation-fill-mode:forwards;\n                                                          animation-fill-mode:forwards}\n                                                          @-webkit-keyframes imghvr-zoom-out-up{50%{-webkit-transform:scale(.8) translateY(0);transform:scale(.8) translateY(0);opacity:.5}100%{-webkit-transform:scale(.8) translateY(-150%);transform:scale(.8) translateY(-150%);opacity:.5}}\n                                                          @keyframes imghvr-zoom-out-up{50%{-webkit-transform:scale(.8) translateY(0);transform:scale(.8) translateY(0);opacity:.5}100%{-webkit-transform:scale(.8) translateY(-150%);transform:scale(.8) translateY(-150%);opacity:.5}}.imghvr-zoom-out-down.hover img,.imghvr-zoom-out-down:hover img{-webkit-animation:imghvr-zoom-out-down .4s linear;animation:imghvr-zoom-out-down .4s linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes imghvr-zoom-out-down{50%{-webkit-transform:scale(.8) translateY(0);transform:scale(.8) translateY(0);opacity:.5}100%{-webkit-transform:scale(.8) translateY(150%);transform:scale(.8) translateY(150%);opacity:.5}}@keyframes imghvr-zoom-out-down{50%{-webkit-transform:scale(.8) translateY(0);transform:scale(.8) translateY(0);opacity:.5}100%{-webkit-transform:scale(.8) translateY(150%);transform:scale(.8) translateY(150%);opacity:.5}}.imghvr-zoom-out-left.hover img,.imghvr-zoom-out-left:hover img{-webkit-animation:imghvr-zoom-out-left .4s linear;animation:imghvr-zoom-out-left .4s linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes imghvr-zoom-out-left{50%{-webkit-transform:scale(.8) translateX(0);transform:scale(.8) translateX(0);opacity:.5}100%{-webkit-transform:scale(.8) translateX(-150%);transform:scale(.8) translateX(-150%);opacity:.5}}@keyframes imghvr-zoom-out-left{50%{-webkit-transform:scale(.8) translateX(0);transform:scale(.8) translateX(0);opacity:.5}100%{-webkit-transform:scale(.8) translateX(-150%);transform:scale(.8) translateX(-150%);opacity:.5}}.imghvr-zoom-out-right.hover img,.imghvr-zoom-out-right:hover img{-webkit-animation:imghvr-zoom-out-right .4s linear;animation:imghvr-zoom-out-right .4s linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes imghvr-zoom-out-right{50%{-webkit-transform:scale(.8) translateX(0);transform:scale(.8) translateX(0);opacity:.5}100%{-webkit-transform:scale(.8) translateX(150%);transform:scale(.8) translateX(150%);opacity:.5}}@keyframes imghvr-zoom-out-right{50%{-webkit-transform:scale(.8) translateX(0);transform:scale(.8) translateX(0);opacity:.5}100%{-webkit-transform:scale(.8) translateX(150%);transform:scale(.8) translateX(150%);opacity:.5}}.imghvr-zoom-out-flip-horiz{-webkit-perspective:50em;perspective:50em}.imghvr-zoom-out-flip-horiz figcaption{opacity:0;-webkit-transform:rotateX(90deg) translateY(-100%) scale(.5);transform:rotateX(90deg) translateY(-100%) scale(.5)}.imghvr-zoom-out-flip-horiz.hover img,.imghvr-zoom-out-flip-horiz:hover img{-webkit-transform:rotateX(-100deg) translateY(50%) scale(.5);transform:rotateX(-100deg) translateY(50%) scale(.5);opacity:0;-webkit-transition-delay:0;transition-delay:0}.imghvr-zoom-out-flip-horiz.hover figcaption,.imghvr-zoom-out-flip-horiz:hover figcaption{-webkit-transform:rotateX(0) translateY(0) scale(1);transform:rotateX(0) translateY(0) scale(1);opacity:1;-webkit-transition-delay:.3s;transition-delay:.3s}.imghvr-zoom-out-flip-vert{-webkit-perspective:50em;perspective:50em}.imghvr-zoom-out-flip-vert figcaption{opacity:0;-webkit-transform:rotateY(90deg) translate(50%,0) scale(.5);transform:rotateY(90deg) translate(50%,0) scale(.5)}.imghvr-zoom-out-flip-vert.hover img,.imghvr-zoom-out-flip-vert:hover img{-webkit-transform:rotateY(-100deg) translateX(50%) scale(.5);transform:rotateY(-100deg) translateX(50%) scale(.5);opacity:0;-webkit-transition-delay:0;transition-delay:0}.imghvr-zoom-out-flip-vert.hover figcaption,.imghvr-zoom-out-flip-vert:hover figcaption{-webkit-transform:rotateY(0) translate(0,0) scale(1);transform:rotateY(0) translate(0,0) scale(1);opacity:1;-webkit-transition-delay:.3s;transition-delay:.3s}.imghvr-blur figcaption{opacity:0}.imghvr-blur:hover img{-webkit-filter:blur(30px);filter:blur(30px);-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.imghvr-blur:hover figcaption{opacity:1;-webkit-transition-delay:.2s;transition-delay:.2s}[class*=' imghvr-blocks'] figcaption:after,[class*=' imghvr-blocks'] figcaption:before,[class*=' imghvr-blocks']:after,[class*=' imghvr-blocks']:before,[class^=imghvr-blocks] figcaption:after,[class^=imghvr-blocks] figcaption:before,[class^=imghvr-blocks]:after,[class^=imghvr-blocks]:before{background-color:#fff;opacity:0;position:absolute;content:''}[class*=' imghvr-blocks']:after,[class*=' imghvr-blocks']:before,[class^=imghvr-blocks]:after,[class^=imghvr-blocks]:before{z-index:1}[class*=' imghvr-blocks']:before,[class^=imghvr-blocks]:before{top:15px;right:15px;bottom:50%;left:50%}[class*=' imghvr-blocks']:after,[class^=imghvr-blocks]:after{bottom:15px;left:15px;top:50%;right:50%}[class*=' imghvr-blocks'] figcaption,[class^=imghvr-blocks] figcaption{z-index:3;background-color:transparent;border-width:0}[class*=' imghvr-blocks'] figcaption *,[class^=imghvr-blocks] figcaption *{opacity:0}[class*=' imghvr-blocks'] figcaption:after,[class*=' imghvr-blocks'] figcaption:before,[class^=imghvr-blocks] figcaption:after,[class^=imghvr-blocks] figcaption:before{height:50%;width:50%;z-index:-1}[class*=' imghvr-blocks'] figcaption:before,[class^=imghvr-blocks] figcaption:before{top:0;left:0}[class*=' imghvr-blocks'] figcaption:after,[class^=imghvr-blocks] figcaption:after{bottom:0;right:0}[class*=' imghvr-blocks'] a,[class^=imghvr-blocks] a{z-index:3}[class*=' imghvr-blocks']:hover figcaption:after,[class*=' imghvr-blocks']:hover figcaption:before,[class*=' imghvr-blocks']:hover:after,[class*=' imghvr-blocks']:hover:before,[class^=imghvr-blocks]:hover figcaption:after,[class^=imghvr-blocks]:hover figcaption:before,[class^=imghvr-blocks]:hover:after,[class^=imghvr-blocks]:hover:before{-webkit-transform:translate(0,0);transform:translate(0,0);opacity:.9}[class*=' imghvr-blocks']:hover figcaption *,[class^=imghvr-blocks]:hover figcaption *{opacity:1;-webkit-transition-delay:.25s;transition-delay:.25s}.imghvr-blocks-rotate-left:before{-webkit-transform:translateY(100%);transform:translateY(100%)}.imghvr-blocks-rotate-left:after{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.imghvr-blocks-rotate-left figcaption:before{-webkit-transform:translateX(100%);transform:translateX(100%)}.imghvr-blocks-rotate-left figcaption:after,.imghvr-blocks-rotate-right:before{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.imghvr-blocks-rotate-right:after{-webkit-transform:translateX(100%);transform:translateX(100%)}.imghvr-blocks-rotate-right figcaption:before{-webkit-transform:translateY(100%);transform:translateY(100%)}.imghvr-blocks-rotate-in-left:before,.imghvr-blocks-rotate-right figcaption:after{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.imghvr-blocks-rotate-in-left:after{-webkit-transform:translateY(100%);transform:translateY(100%)}.imghvr-blocks-rotate-in-left figcaption:before{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.imghvr-blocks-rotate-in-left figcaption:after,.imghvr-blocks-rotate-in-right:before{-webkit-transform:translateX(100%);transform:translateX(100%)}.imghvr-blocks-rotate-in-right:after{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.imghvr-blocks-rotate-in-right figcaption:before{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.imghvr-blocks-rotate-in-right figcaption:after{-webkit-transform:translateY(100%);transform:translateY(100%)}.imghvr-blocks-in:before{-webkit-transform:translate(100%,-100%);transform:translate(100%,-100%)}.imghvr-blocks-in:after{-webkit-transform:translate(-100%,100%);transform:translate(-100%,100%)}.imghvr-blocks-in figcaption:before{-webkit-transform:translate(-100%,-100%);transform:translate(-100%,-100%)}.imghvr-blocks-in figcaption:after{-webkit-transform:translate(100%,100%);transform:translate(100%,100%)}.imghvr-blocks-out:before{-webkit-transform:translate(-100%,100%);transform:translate(-100%,100%)}.imghvr-blocks-out:after{-webkit-transform:translate(100%,-100%);transform:translate(100%,-100%)}.imghvr-blocks-out figcaption:before{-webkit-transform:translate(100%,100%);transform:translate(100%,100%)}.imghvr-blocks-out figcaption:after{-webkit-transform:translate(-100%,-100%);transform:translate(-100%,-100%)}[class*=' imghvr-book-open-'] figcaption,[class^=imghvr-book-open-] figcaption{background-color:transparent;border:none;-webkit-perspective:50em;perspective:50em}[class*=' imghvr-book-open-'] figcaption *,[class^=imghvr-book-open-] figcaption *{opacity:0}[class*=' imghvr-book-open-'] figcaption:after,[class*=' imghvr-book-open-'] figcaption:before,[class^=imghvr-book-open-] figcaption:after,[class^=imghvr-book-open-] figcaption:before{z-index:-1;background-color:#999;content:'';position:absolute;opacity:0;-webkit-transition:all .45s ease;transition:all .45s ease}[class*=' imghvr-book-open-']:hover figcaption,[class^=imghvr-book-open-]:hover figcaption{opacity:1}[class*=' imghvr-book-open-']:hover figcaption *,[class^=imghvr-book-open-]:hover figcaption *{opacity:1;-webkit-transition-delay:.2s;transition-delay:.2s}[class*=' imghvr-book-open-']:hover figcaption:after,[class*=' imghvr-book-open-']:hover figcaption:before,[class^=imghvr-book-open-]:hover figcaption:after,[class^=imghvr-book-open-]:hover figcaption:before{opacity:1;background-color:#fff;-webkit-transform:rotateY(0);transform:rotateY(0)}.imghvr-book-open-horiz figcaption:after,.imghvr-book-open-horiz figcaption:before{height:100%;width:50%;top:0}.imghvr-book-open-horiz figcaption:before{background-image:-webkit-linear-gradient(left,transparent 60%,rgba(0,0,0,.1) 99%,rgba(0,0,0,.15) 100%);background-image:linear-gradient(to right,transparent 60%,rgba(0,0,0,.1) 99%,rgba(0,0,0,.15) 100%);left:0;-webkit-transform:rotateY(90deg);transform:rotateY(90deg);-webkit-transform-origin:100% 50%;-ms-transform-origin:100% 50%;transform-origin:100% 50%}.imghvr-book-open-horiz figcaption:after{background-image:-webkit-linear-gradient(right,transparent 60%,rgba(0,0,0,.12) 99%,rgba(0,0,0,.15) 100%);background-image:linear-gradient(to left,transparent 60%,rgba(0,0,0,.12) 99%,rgba(0,0,0,.15) 100%);right:0;-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg);-webkit-transform-origin:0 50%;-ms-transform-origin:0 50%;transform-origin:0 50%}.imghvr-book-open-vert figcaption:after,.imghvr-book-open-vert figcaption:before{height:50%;width:100%;left:0}.imghvr-book-open-vert figcaption:before{background-image:-webkit-linear-gradient(top,transparent 60%,rgba(0,0,0,.1) 99%,rgba(0,0,0,.15) 100%);background-image:linear-gradient(to bottom,transparent 60%,rgba(0,0,0,.1) 99%,rgba(0,0,0,.15) 100%);top:0;-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%}.imghvr-book-open-vert figcaption:after{background-image:-webkit-linear-gradient(bottom,transparent 60%,rgba(0,0,0,.13) 99%,rgba(0,0,0,.15) 100%);background-image:linear-gradient(to top,transparent 60%,rgba(0,0,0,.13) 99%,rgba(0,0,0,.15) 100%);bottom:0;-webkit-transform:rotateX(90deg);transform:rotateX(90deg);-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0}[class*=' imghvr-scale-']:before,[class^=imghvr-scale-]:before{background-color:inherit;top:15px;bottom:15px;left:15px;right:15px;position:absolute;content:''}[class*=' imghvr-scale-'] figcaption,[class^=imghvr-scale-] figcaption{opacity:0}[class*=' imghvr-scale-']:hover:before,[class^=imghvr-scale-]:hover:before{top:15px;bottom:15px;left:15px;right:15px;opacity:.9}[class*=' imghvr-scale-']:hover figcaption,[class^=imghvr-scale-]:hover figcaption{opacity:1;-webkit-transition-delay:.25s;transition-delay:.25s}.imghvr-scale-top-left:before{bottom:100%;right:100%}.imghvr-scale-top-right:before{bottom:100%;left:100%}.imghvr-scale-bottom-left:before{top:100%;right:100%}.imghvr-scale-bottom-right:before{top:100%;left:100%}[class*=' imghvr-fall-away-'],[class^=imghvr-fall-away-]{-webkit-perspective:50em;perspective:50em}[class*=' imghvr-fall-away-'] img,[class^=imghvr-fall-away-] img{-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all .45s ease-in;transition:all .45s ease-in}[class*=' imghvr-fall-away-'] figcaption,[class*=' imghvr-fall-away-']:hover img,[class^=imghvr-fall-away-] figcaption,[class^=imghvr-fall-away-]:hover img{opacity:0}[class*=' imghvr-fall-away-']:hover figcaption,[class^=imghvr-fall-away-]:hover figcaption{opacity:1;-webkit-transition-delay:.45s;transition-delay:.45s}.imghvr-fall-away-horiz:hover img{-webkit-transform:rotateX(-360deg) scale(.2);transform:rotateX(-360deg) scale(.2)}.imghvr-fall-away-horiz:hover figcaption{-webkit-transform:rotateX(0);transform:rotateX(0)}.imghvr-fall-away-vert:hover img{-webkit-transform:rotateY(-360deg) scale(.2);transform:rotateY(-360deg) scale(.2)}.imghvr-fall-away-vert:hover figcaption{-webkit-transform:rotateX(0);transform:rotateX(0)}\n\nbody {\n    background: linear-gradient(to left, #51cc48, #39df9c);\n    min-height: 100vh;\n}\n\n.width-auto {\n    width: auto;\n}\n\n.text-lg {\n    font-size: 2rem;\n}\n\n.carousel-indicators li {\n    border: none;\n    background: #ccc;\n}\n\n.carousel-indicators li.active {\n    background: #28a745;\n}\n\n</style>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<style>\n  /*ZoomIn Hover Effect*/\n  .hover-zoomin a {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }\n    .hover-zoomin img {\n      width: 100%;\n      height: auto;\n      -webkit-transition: all 0.5s ease-in-out;\n      -moz-transition: all 0.5s ease-in-out;\n      -o-transition: all 0.5s ease-in-out;\n      -ms-transition: all 0.5s ease-in-out;\n      transition: all 0.5s ease-in-out;\n    }\n    .hover-zoomin:hover img {\n      -webkit-transform: scale(1.2);\n      -moz-transform: scale(1.2);\n      -o-transform: scale(1.2);\n      -ms-transform: scale(1.2);\n      transform: scale(1.2);\n    }\n\n    /*Fade Hover Effect*/\n    .hover-fade a {\n      display: block;\n      position: relative;\n      overflow: hidden;\n      background-color: #333;\n    }\n    .hover-fade .card {\n      width: 100%;\n      height: auto;\n      -webkit-transition: all 0.5s ease-in-out;\n      -moz-transition: all 0.5s ease-in-out;\n      -o-transition: all 0.5s ease-in-out;\n      -ms-transition: all 0.5s ease-in-out;\n      transition: all 0.5s ease-in-out;\n    }\n    .hover-fade:hover .card {\n      -webkit-transform: scale(1.2);\n      -moz-transform: scale(1.2);\n      -o-transform: scale(1.2);\n      -ms-transform: scale(1.2);\n      transform: scale(1.2);\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0.5)\";\n      filter: alpha(opacity=0.5);\n      opacity: 0.5;\n    }\n\n    /*ZoomIn Hover-Mask Effect*/\n    .hover-mask a {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }\n    .hover-mask img {\n      width: 100%;\n      height: auto;\n      -webkit-transition: all 0.5s ease-in-out;\n      -moz-transition: all 0.5s ease-in-out;\n      -o-transition: all 0.5s ease-in-out;\n      -ms-transition: all 0.5s ease-in-out;\n      transition: all 0.5s ease-in-out;\n    }\n    .hover-mask:hover img {\n      -webkit-transform: scale(1.2);\n      -moz-transform: scale(1.2);\n      -o-transform: scale(1.2);\n      -ms-transform: scale(1.2);\n      transform: scale(1.2);\n    }\n    .hover-mask a h2 {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      margin-top: 0px;\n      margin-bottom: 0px;\n      height: 100%;\n      width: 100%;\n      padding: 45% 20px;\n      text-align: center;\n      background-color: rgba(0,0,0,0.4);\n      -webkit-transition: all 0.5s linear;\n      -moz-transition: all 0.5s linear;\n      -o-transition: all 0.5s linear;\n      -ms-transition: all 0.5s linear;\n      transition: all 0.5s linear;\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n      filter: alpha(opacity=0);\n      opacity: 0;\n    }\n    .hover-mask:hover a h2 {\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n      filter: alpha(opacity=100);\n      opacity: 1;\n    }\n    .hover-mask .glyphicon {\n      -webkit-transform: scale(0);\n      -moz-transform: scale(0);\n      -o-transform: scale(0);\n      -ms-transform: scale(0);\n      transform: scale(0);\n      color: #fff;\n      -webkit-transition: all 0.5s linear;\n      -moz-transition: all 0.5s linear;\n      -o-transition: all 0.5s linear;\n      -ms-transition: all 0.5s linear;\n      transition: all 0.5s linear;\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n      filter: alpha(opacity=0);\n      opacity: 0;\n    }\n    .hover-mask:hover .glyphicon {\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n      -o-transform: scale(1);\n      -ms-transform: scale(1);\n      transform: scale(1);\n      -webkit-transition: all 0.5s linear;\n      -moz-transition: all 0.5s linear;\n      -o-transition: all 0.5s linear;\n      -ms-transition: all 0.5s linear;\n      transition: all 0.5s linear;\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=1)\";\n      filter: alpha(opacity=1);\n      opacity: 1;\n    }\n\n    /* Hover Blur Effect */\n    .text-white {\n      color: #fff;\n    }\n    .hover-blur a {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }\n    .hover-blur img {\n      width: 100%;\n      height: auto;\n      -webkit-transition: all 0.5s ease-in-out;\n      -moz-transition: all 0.5s ease-in-out;\n      -o-transition: all 0.5s ease-in-out;\n      -ms-transition: all 0.5s ease-in-out;\n      transition: all 0.5s ease-in-out;\n    }\n    .hover-blur:hover img {\n      -webkit-transform: scale(1.2);\n      -moz-transform: scale(1.2);\n      -o-transform: scale(1.2);\n      -ms-transform: scale(1.2);\n      transform: scale(1.2);\n      -webkit-filter: grayscale(0.6) blur(1px);\n      filter: grayscale(0.6) blur(1px);\n    }\n    .hover-blur a h2 {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      margin-top: 0px;\n      margin-bottom: 0px;\n      height: 100%;\n      width: 100%;\n      padding: 45% 20px;\n      text-align: center;\n      background-color: rgba(0,0,0,0.5);\n      /*background dotted*/\n      background-image: -webkit-repeating-radial-gradient(center center, rgba(0,0,0,.8), rgba(0,0,0,.8) 1px, transparent 1px, transparent 100%);\n      background-image: -moz-repeating-radial-gradient(center center, rgba(0,0,0,.8), rgba(0,0,0,.8) 1px, transparent 1px, transparent 100%);\n      background-image: -ms-repeating-radial-gradient(center center, rgba(0,0,0,.8), rgba(0,0,0,.8) 1px, transparent 1px, transparent 100%);\n      background-image: repeating-radial-gradient(center center, rgba(0,0,0,.8), rgba(0,0,0,.8) 1px, transparent 1px, transparent 100%);\n      -webkit-background-size: 3px 3px;\n      -moz-background-size: 3px 3px;\n      background-size: 3px 3px;\n      -webkit-transition: all 0.5s linear;\n      -moz-transition: all 0.5s linear;\n      -o-transition: all 0.5s linear;\n      -ms-transition: all 0.5s linear;\n      transition: all 0.5s linear;\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n      filter: alpha(opacity=0);\n      opacity: 0;\n    }\n    .hover-blur:hover a h2 {\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n      filter: alpha(opacity=100);\n      opacity: 1;\n    }\n    .hover-blur .text-white {\n      -webkit-transform: scale(0);\n      -moz-transform: scale(0);\n      -o-transform: scale(0);\n      -ms-transform: scale(0);\n      transform: scale(0);\n      -webkit-transition: all 0.5s linear;\n      -moz-transition: all 0.5s linear;\n      -o-transition: all 0.5s linear;\n      -ms-transition: all 0.5s linear;\n      transition: all 0.5s linear;\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n      filter: alpha(opacity=0);\n      opacity: 0;\n    }\n    .hover-blur:hover .text-white {\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n      -o-transform: scale(1);\n      -ms-transform: scale(1);\n      transform: scale(1);\n      -webkit-transition: all 0.5s linear;\n      -moz-transition: all 0.5s linear;\n      -o-transition: all 0.5s linear;\n      -ms-transition: all 0.5s linear;\n      transition: all 0.5s linear;\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=1)\";\n      filter: alpha(opacity=1);\n      opacity: 1;\n    }\n\n    /* Hover Zoomout */\n    .hover-zoomout a {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }\n    .hover-zoomout img {\n      width: 100%;\n      height: auto;\n      -webkit-transition: all 0.5s ease-in-out;\n      -moz-transition: all 0.5s ease-in-out;\n      -o-transition: all 0.5s ease-in-out;\n      -ms-transition: all 0.5s ease-in-out;\n      transition: all 0.5s ease-in-out;\n      -webkit-transform: scale(1.2);\n      -moz-transform: scale(1.2);\n      -o-transform: scale(1.2);\n      -ms-transform: scale(1.2);\n      transform: scale(1.2);\n    }\n    .hover-zoomout:hover img {\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n      -o-transform: scale(1);\n      -ms-transform: scale(1);\n      transform: scale(1);\n    }\n\n/*Hover Blurout Effect*/\n    .hover-blurout a {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }\n    .hover-blurout img {\n      width: 100%;\n      height: auto;\n      -webkit-transition: all 0.5s ease-in-out;\n      -moz-transition: all 0.5s ease-in-out;\n      -o-transition: all 0.5s ease-in-out;\n      -ms-transition: all 0.5s ease-in-out;\n      transition: all 0.5s ease-in-out;\n      -webkit-transform: scale(1.2);\n      -moz-transform: scale(1.2);\n      -o-transform: scale(1.2);\n      -ms-transform: scale(1.2);\n      transform: scale(1.2);\n    }\n    .hover-blurout:hover img {\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n      -o-transform: scale(1);\n      -ms-transform: scale(1);\n      transform: scale(1);\n      /*Blur Filtr*/\n      -webkit-filter: grayscale(0.6) blur(1px);\n      -moz-filter: grayscale(0.6) blur(1px);\n      -o-filter: grayscale(0.6) blur(1px);\n      -ms-filter:progid:DXImageTransform.Microsoft.Blur(pixelRadius=2);\n      filter: progid:DXImageTransform.Microsoft.blur(pixelradius=2);\n      filter: grayscale(0.6) blur(2px);\n    }\n    .hover-blurout a h2 {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      margin-top: 0px;\n      margin-bottom: 0px;\n      height: 100%;\n      width: 100%;\n      padding: 45% 20px;\n      text-align: center;\n      background-color: rgba(0,0,0,0.4);\n      /*background dotted*/\n      background-image: -webkit-repeating-radial-gradient(center center, rgba(0,0,0,.8), rgba(0,0,0,.8) 1px, transparent 1px, transparent 100%);\n      background-image: -moz-repeating-radial-gradient(center center, rgba(0,0,0,.8), rgba(0,0,0,.8) 1px, transparent 1px, transparent 100%);\n      background-image: -ms-repeating-radial-gradient(center center, rgba(0,0,0,.8), rgba(0,0,0,.8) 1px, transparent 1px, transparent 100%);\n      background-image: repeating-radial-gradient(center center, rgba(0,0,0,.8), rgba(0,0,0,.8) 1px, transparent 1px, transparent 100%);\n      -webkit-background-size: 3px 3px;\n      -moz-background-size: 3px 3px;\n      background-size: 3px 3px;\n\n      -webkit-transition: all 0.5s linear;\n      -moz-transition: all 0.5s linear;\n      -o-transition: all 0.5s linear;\n      -ms-transition: all 0.5s linear;\n      transition: all 0.5s linear;\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n      filter: alpha(opacity=0);\n      opacity: 0;\n    }\n    .hover-blurout:hover a h2 {\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n      filter: alpha(opacity=100);\n      opacity: 1;\n    }\n    .hover-blurout .glyphicon {\n      -webkit-transform: scale(0);\n      -moz-transform: scale(0);\n      -o-transform: scale(0);\n      -ms-transform: scale(0);\n      transform: scale(0);\n      color: #fff;\n      -webkit-transition: all 0.5s linear;\n      -moz-transition: all 0.5s linear;\n      -o-transition: all 0.5s linear;\n      -ms-transition: all 0.5s linear;\n      transition: all 0.5s linear;\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n      filter: alpha(opacity=0);\n      opacity: 0;\n    }\n    .hover-blurout:hover .glyphicon {\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n      -o-transform: scale(1);\n      -ms-transform: scale(1);\n      transform: scale(1);\n      -webkit-transition: all 0.5s linear;\n      -moz-transition: all 0.5s linear;\n      -o-transition: all 0.5s linear;\n      -ms-transition: all 0.5s linear;\n      transition: all 0.5s linear;\n      -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=1)\";\n      filter: alpha(opacity=1);\n      opacity: 1;\n    }\n/* ---------Hover Overlay text Effect--------- */\n\n    .overlay-item {\n       display: block;\n       position: relative;\n       overflow: hidden;\n       text-align: center;\n\n    }\n    .overlay-item .mask {\n       display: block;\n       position: absolute;\n       overflow: hidden;\n       top: 0;\n       left: 0;\n       height: 100%;\n    }\n    .overlay-item img {\n       display: block;\n       width: 100%;\n       height: auto;\n       x-margin-right: auto;\n       x-margin-left: auto;\n    }\n    .overlay-item h3 {\n       text-transform: uppercase;\n       text-align: center;\n       position: relative;\n       padding: 10px;\n       margin: 0px 0px 20px 0px;\n       display: block;\n       background-color: #333;\n       color: #fff;\n    }\n    .overlay-item p {\n       text-align: left;\n    }\n    .overlay-item a.btn {\n      margin: 10px 0;\n    }\n\n    .overlay-effect img {\n       -webkit-transform: scaleY(1);\n       -moz-transform: scaleY(1);\n       -o-transform: scaleY(1);\n       -ms-transform: scaleY(1);\n       transform: scaleY(1);\n       -webkit-transition: all 0.7s ease-in-out;\n       -moz-transition: all 0.7s ease-in-out;\n       -o-transition: all 0.7s ease-in-out;\n       -ms-transition: all 0.7s ease-in-out;\n       transition: all 0.7s ease-in-out;\n    }\n    .overlay-effect .mask {\n       background-color: rgba(255, 255, 255, 0.3);\n       -webkit-transition: all 0.5s linear;\n       -moz-transition: all 0.5s linear;\n       -o-transition: all 0.5s linear;\n       -ms-transition: all 0.5s linear;\n       transition: all 0.5s linear;\n       -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n       filter: alpha(opacity=0);\n       opacity: 0;\n    }\n    .overlay-effect h3 {\n       -webkit-transform: scale(0);\n       -moz-transform: scale(0);\n       -o-transform: scale(0);\n       -ms-transform: scale(0);\n       transform: scale(0);\n       -webkit-transition: all 0.5s linear;\n       -moz-transition: all 0.5s linear;\n       -o-transition: all 0.5s linear;\n       -ms-transition: all 0.5s linear;\n       transition: all 0.5s linear;\n       -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n       filter: alpha(opacity=0);\n       opacity: 0;\n    }\n    .overlay-effect p {\n       -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n       filter: alpha(opacity=0);\n       opacity: 0;\n       -webkit-transform: scale(0);\n       -moz-transform: scale(0);\n       -o-transform: scale(0);\n       -ms-transform: scale(0);\n       transform: scale(0);\n       -webkit-transition: all 0.5s linear;\n       -moz-transition: all 0.5s linear;\n       -o-transition: all 0.5s linear;\n       -ms-transition: all 0.5s linear;\n       transition: all 0.5s linear;\n    }\n    .overlay-effect a.btn {\n       -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n       filter: alpha(opacity=0);\n       opacity: 0;\n       -webkit-transform: scale(0);\n       -moz-transform: scale(0);\n       -o-transform: scale(0);\n       -ms-transform: scale(0);\n       transform: scale(0);\n       -webkit-transition: all 0.5s linear;\n       -moz-transition: all 0.5s linear;\n       -o-transition: all 0.5s linear;\n       -ms-transition: all 0.5s linear;\n       transition: all 0.5s linear;\n    }\n    .overlay-effect:hover img {\n       -webkit-transform: scale(10);\n       -moz-transform: scale(10);\n       -o-transform: scale(10);\n       -ms-transform: scale(10);\n       transform: scale(10);\n       -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n       filter: alpha(opacity=0);\n       opacity: 0;\n    }\n    .overlay-effect:hover .mask {\n       -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n       filter: alpha(opacity=100);\n       opacity: 1;\n    }\n    .overlay-effect:hover h3,.overlay-effect:hover p,.overlay-effect:hover a.btn {\n       -webkit-transform: scale(1);\n       -moz-transform: scale(1);\n       -o-transform: scale(1);\n       -ms-transform: scale(1);\n       transform: scale(1);\n       -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n       filter: alpha(opacity=100);\n       opacity: 1;\n    }\n/*Hover Fall Effect*/\n    .fall-item {\n       width: 100%;\n       height: auto;\n       overflow: hidden;\n       position: relative;\n       text-align: center;\n    }\n    .fall-item .mask,.fall-item .content {\n       width: 100%;\n       height: 100%;\n       position: absolute;\n       overflow: hidden;\n       top: 0;\n       left: 0;\n    }\n    .fall-item img {\n       display: block;\n       position: relative;\n       width: 100%;\n       height: auto;\n    }\n    .fall-item h2 {\n       text-transform: uppercase;\n       color: #fff;\n       text-align: center;\n       position: relative;\n       padding: 10px;\n       background: rgba(0, 0, 0, 0.8);\n       margin: 0 0 0 0;\n    }\n    .fall-item p {\n       font-style: italic;\n       position: relative;\n       color: #fff;\n       padding: 10px 20px 20px;\n       text-align: center;\n    }\n    .fall-effect .mask {\n       background-color: rgba(255, 255, 255, 0.7);\n       top: -200px;\n       -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n       filter: alpha(opacity=0);\n       opacity: 0;\n       -webkit-transition: all 0.3s ease-out 0.5s;\n       -moz-transition: all 0.3s ease-out 0.5s;\n       -o-transition: all 0.3s ease-out 0.5s;\n       -ms-transition: all 0.3s ease-out 0.5s;\n       transition: all 0.3s ease-out 0.5s;\n    }\n    .fall-effect h2 {\n       -webkit-transform: translateY(-200px);\n       -moz-transform: translateY(-200px);\n       -o-transform: translateY(-200px);\n       -ms-transform: translateY(-200px);\n       transform: translateY(-200px);\n       -webkit-transition: all 0.2s ease-in-out 0.1s;\n       -moz-transition: all 0.2s ease-in-out 0.1s;\n       -o-transition: all 0.2s ease-in-out 0.1s;\n       -ms-transition: all 0.2s ease-in-out 0.1s;\n       transition: all 0.2s ease-in-out 0.1s;\n    }\n    .fall-effect p {\n       color: #333;\n       -webkit-transform: translateY(-200px);\n       -moz-transform: translateY(-200px);\n       -o-transform: translateY(-200px);\n       -ms-transform: translateY(-200px);\n       transform: translateY(-200px);\n       -webkit-transition: all 0.2s ease-in-out 0.2s;\n       -moz-transition: all 0.2s ease-in-out 0.2s;\n       -o-transition: all 0.2s ease-in-out 0.2s;\n       -ms-transition: all 0.2s ease-in-out 0.2s;\n       transition: all 0.2s ease-in-out 0.2s;\n    }\n    .fall-effect a.btn {\n       -webkit-transform: translateY(-200px);\n       -moz-transform: translateY(-200px);\n       -o-transform: translateY(-200px);\n       -ms-transform: translateY(-200px);\n       transform: translateY(-200px);\n       -webkit-transition: all 0.2s ease-in-out 0.3s;\n       -moz-transition: all 0.2s ease-in-out 0.3s;\n       -o-transition: all 0.2s ease-in-out 0.3s;\n       -ms-transition: all 0.2s ease-in-out 0.3s;\n       transition: all 0.2s ease-in-out 0.3s;\n    }\n    .fall-effect:hover .mask {\n       -ms-filter: \"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n       filter: alpha(opacity=100);\n       opacity: 1;\n       top: 0px;\n       -webkit-transition-delay: 0s;\n       -moz-transition-delay: 0s;\n       -o-transition-delay: 0s;\n       -ms-transition-delay: 0s;\n       transition-delay: 0s;\n\n    }\n    .fall-effect:hover h2 {\n       -webkit-transform: translateY(0px);\n       -moz-transform: translateY(0px);\n       -o-transform: translateY(0px);\n       -ms-transform: translateY(0px);\n       transform: translateY(0px);\n       -webkit-transition-delay: 0.4s;\n       -moz-transition-delay: 0.4s;\n       -o-transition-delay: 0.4s;\n       -ms-transition-delay: 0.4s;\n       transition-delay: 0.4s;\n    }\n    .fall-effect:hover p {\n       -webkit-transform: translateY(0px);\n       -moz-transform: translateY(0px);\n       -o-transform: translateY(0px);\n       -ms-transform: translateY(0px);\n       transform: translateY(0px);\n       -webkit-transition-delay: 0.2s;\n       -moz-transition-delay: 0.2s;\n       -o-transition-delay: 0.2s;\n       -ms-transition-delay: 0.2s;\n       transition-delay: 0.2s;\n    }\n    .fall-effect:hover a.btn {\n       -webkit-transform: translateY(0px);\n       -moz-transform: translateY(0px);\n       -o-transform: translateY(0px);\n       -ms-transform: translateY(0px);\n       transform: translateY(0px);\n       -webkit-transition-delay: 0s;\n       -moz-transition-delay: 0s;\n       -o-transition-delay: 0s;\n       -ms-transition-delay: 0s;\n       transition-delay: 0s;\n    }\n\n\n</style>\n\n\n\n\n\n");

/***/ }),

/***/ "Vs9a":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/registerpage/registerpage.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> Consulatancy• </span> Services\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> Consulatancy• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <div class=\"page-header-image\"></div>\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-6 offset-lg-0 offset-md-3\">\n            <div class=\"square square-7\" id=\"square7\"></div>\n            <div class=\"square square-8\" id=\"square8\"></div>\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\" #formDATA=\"ngForm\">\n                  <div\n                    class=\"input-group\"\n                 \n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                      name=\"name\"\n                      [(ngModel)]=\"name\"\n                    />\n                  </div>\n                  <div\n                  class=\"input-group\"\n                 \n                >\n                  <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">\n                      <i class=\"tim-icons icon-mobile\"> </i>\n                    </div>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Phone Number\"\n                    type=\"text\"\n                    name=\"phoneNumber\"\n                    [(ngModel)]=\"phoneNumber\"\n                  />\n                </div>\n                  <div\n                    class=\"input-group\"\n                 \n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"text\"\n                     \n                      name=\"emailid\"\n                      [(ngModel)]=\"emailid\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n               \n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-paper\"> </i>\n                      </div>\n                    </div>\n                    <textarea\n                    class=\"form-control\"\n                    placeholder=\"Message\"\n                    [(ngModel)]=\"message\"\n                    name=\"message\"\n                    rows=\"4\" cols=\"40\" maxlength=\"100\"\n                  ></textarea>\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a > terms and conditions </a> .\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <a\n                  class=\"btn btn-danger btn-round btn-lg\"\n                  (click)=\"saveFormObj(formDATA)\"\n                >\n                  Submit\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- {{formDATA.value | json}} -->\n        <div class=\"register-bg\"></div>\n        <div class=\"square square-1\" id=\"square1\"></div>\n        <div class=\"square square-2\" id=\"square2\"></div>\n        <div class=\"square square-3\" id=\"square3\"></div>\n        <div class=\"square square-4\" id=\"square4\"></div>\n        <div class=\"square square-5\" id=\"square5\"></div>\n        <div class=\"square square-6\" id=\"square6\"></div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">Consulatancy•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service.service */ "ibrm");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                // IndexComponent,
                // ProfilepageComponent,
                // RegisterpageComponent,
                // LandingpageComponent
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                // BsDropdownModule.forRoot(),
                // ProgressbarModule.forRoot(),
                // TooltipModule.forRoot(),
                // CollapseModule.forRoot(),
                // TabsModule.forRoot(),
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"]
                // PaginationModule.forRoot(),
                // AlertModule.forRoot(),
                // BsDatepickerModule.forRoot(),
                // CarouselModule.forRoot(),
                // ModalModule.forRoot()
            ],
            providers: [_service_service__WEBPACK_IMPORTED_MODULE_9__["ServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./index/index.component */ "sqmE");
/* harmony import */ var _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./examples/landingpage/landingpage.component */ "IfWR");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../service.service */ "ibrm");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__["PopoverModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__["JwBootstrapSwitchNg2Module"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot()
            ],
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_18__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_19__["ProfilepageComponent"],
                _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_20__["RegisterpageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_21__["LandingpageComponent"]
            ],
            exports: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_18__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_19__["ProfilepageComponent"],
                _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_20__["RegisterpageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_21__["LandingpageComponent"]
            ],
            providers: [_service_service__WEBPACK_IMPORTED_MODULE_22__["ServiceService"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "ibrm":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



var ServiceService = /** @class */ (function () {
    function ServiceService(_http) {
        this._http = _http;
        this.Url = 'http://localhost:6001/';
    }
    ServiceService.prototype.addRegForm = function (obj) {
        console.log("postpayment", obj);
        return this._http.post(this.Url + 'insertData', obj);
    };
    ServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "r5Xs":
/*!***********************************************************************!*\
  !*** ./src/app/pages/examples/registerpage/registerpage.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpageComponent", function() { return RegisterpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registerpage.component.html */ "Vs9a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service.service */ "ibrm");




var RegisterpageComponent = /** @class */ (function () {
    function RegisterpageComponent(_service) {
        this._service = _service;
        this.isCollapsed = true;
    }
    RegisterpageComponent.prototype.onMouseMove = function (e) {
        var squares1 = document.getElementById("square1");
        var squares2 = document.getElementById("square2");
        var squares3 = document.getElementById("square3");
        var squares4 = document.getElementById("square4");
        var squares5 = document.getElementById("square5");
        var squares6 = document.getElementById("square6");
        var squares7 = document.getElementById("square7");
        var squares8 = document.getElementById("square8");
        var posX = e.clientX - window.innerWidth / 2;
        var posY = e.clientY - window.innerWidth / 6;
        squares1.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares2.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares3.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares4.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares5.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares6.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares7.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
        squares8.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
    };
    RegisterpageComponent.prototype.ngOnInit = function () {
        // var body = document.getElementsByTagName("body")[0];
        // body.classList.add("register-page");
        // this.onMouseMove(event);
    };
    RegisterpageComponent.prototype.ngOnDestroy = function () {
        // var body = document.getElementsByTagName("body")[0];
        // body.classList.remove("register-page");
    };
    RegisterpageComponent.prototype.saveFormObj = function (obj) {
        var _this = this;
        console.log('save--?', obj);
        var request = {
            "name": this.name,
            "phoneNumber": this.phoneNumber,
            "emailid": this.emailid,
            "message": this.message
        };
        console.log("request is::::", request);
        this._service.addRegForm(request).subscribe(function (res) {
            _this.addFormResp = res;
            console.log("form data", res);
            //request={};
        });
    };
    RegisterpageComponent.ctorParameters = function () { return [
        { type: _service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] }
    ]; };
    RegisterpageComponent.propDecorators = {
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["document:mousemove", ["$event"],] }]
    };
    RegisterpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-registerpage",
            template: _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]])
    ], RegisterpageComponent);
    return RegisterpageComponent;
}());



/***/ }),

/***/ "sqmE":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "V/Tm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "6foH");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service.service */ "ibrm");





var IndexComponent = /** @class */ (function () {
    function IndexComponent(_service) {
        this._service = _service;
        this.addFormObj = {};
        this.isCollapsed = true;
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
        // footer
        this.imgPath1 = '../assets/img/IELTS.png';
        this.imgPath2 = '../assets/img/hotCourse.jpg';
        this.imgPath3 = '../assets/img/abroad.jpg';
        // sroll
        this.imgPath4 = '../assets/img/London.jpg';
        this.imgPath5 = '../assets/img/canada.jpg';
        this.imgPath6 = '../assets/img/uk.jpg';
        this.imgPath7 = '../assets/img/US.jpg';
        // university
        this.imgPath8 = '../assets/img/Centennial-College.jpg';
        this.imgPath9 = '../assets/img/tafe.jpg';
        this.imgPath10 = '../assets/img/brihmingam.jpg';
        this.imgPath11 = '../assets/img/melbourne.jpg';
        this.imgPath12 = '../assets/img/myhc-252772.jpg';
        this.imgPath13 = '../assets/img/La-Trobe-University.jpg';
        this.imgPath14 = '../assets/img/deakin-university.jpg';
        this.imgPath15 = '../assets/img/RMIT.png';
    }
    IndexComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    IndexComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
        var slider = document.getElementById("sliderRegular");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider, {
            start: 40,
            connect: false,
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("sliderDouble");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    IndexComponent.prototype.InsertFormObj = function (obj) {
        var _this = this;
        console.log('insert data--', obj);
        var request = {
            "name": this.name,
            "phoneNumber": this.phoneNumber,
            "emailid": this.emailid,
            "message": this.message
        };
        console.log("request is::::", request);
        this._service.addRegForm(request).subscribe(function (res) {
            _this.addFormResp = res;
            console.log("form data", res);
        });
    };
    IndexComponent.ctorParameters = function () { return [
        { type: _service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"] }
    ]; };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-index",
            template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index.component */ "sqmE");
/* harmony import */ var _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/examples/landingpage/landingpage.component */ "IfWR");









var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"] },
    { path: "profile", component: _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_6__["ProfilepageComponent"] },
    { path: "register", component: _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_7__["RegisterpageComponent"] },
    { path: "landing", component: _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_8__["LandingpageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map