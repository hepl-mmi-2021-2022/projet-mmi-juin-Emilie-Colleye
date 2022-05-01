/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Circle.ts":
/*!**************************!*\
  !*** ./src/ts/Circle.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Ball = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/Shape.ts\");\n\nvar Ball = function (_super) {\n  __extends(Ball, _super);\n\n  function Ball(ctx, color, origin, radius) {\n    var _this = _super.call(this, ctx, color, origin) || this;\n\n    _this.radius = radius;\n    return _this;\n  }\n\n  Ball.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  return Ball;\n}(Shape_1.Shape);\n\nexports.Ball = Ball;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2lyY2xlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUlBO0VBQTBCQTs7RUFHdEIsY0FBWUMsR0FBWixFQUEyQ0MsS0FBM0MsRUFBMERDLE1BQTFELEVBQTJGQyxNQUEzRixFQUF5RztJQUF6RyxZQUNJQyxrQkFBTUosR0FBTixFQUFXQyxLQUFYLEVBQWtCQyxNQUFsQixLQUF5QixJQUQ3Qjs7SUFFSUcsS0FBSSxDQUFDRixNQUFMLEdBQWNBLE1BQWQ7O0VBQ0g7O0VBRVFHLHNCQUFUO0lBQ0ksS0FBS04sR0FBTCxDQUFTTyxTQUFUO0lBQ0EsS0FBS1AsR0FBTCxDQUFTUSxTQUFULEdBQXFCLEtBQUtQLEtBQTFCO0lBQ0EsS0FBS0QsR0FBTCxDQUFTUyxHQUFULENBQWEsS0FBS1AsTUFBTCxDQUFZUSxDQUF6QixFQUE0QixLQUFLUixNQUFMLENBQVlTLENBQXhDLEVBQTJDLEtBQUtSLE1BQWhELEVBQXdELENBQXhELEVBQTJEUyxJQUFJLENBQUNDLEVBQUwsR0FBUSxDQUFuRTtJQUNBLEtBQUtiLEdBQUwsQ0FBU2MsSUFBVDtJQUNBLEtBQUtkLEdBQUwsQ0FBU2UsU0FBVDtFQUNILENBTlE7O0VBT2I7QUFBQyxDQWZELENBQTBCQyxhQUExQjs7QUFBYUMsWUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0NpcmNsZS50cz84Y2IwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2hhcGV9IGZyb20gXCIuL1NoYXBlXCI7XHJcbmltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmFsbCBleHRlbmRzIFNoYXBlIGltcGxlbWVudHMgaURyYXdhYmxle1xyXG4gICAgcHJpdmF0ZSByYWRpdXM6bnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nLCBvcmlnaW46IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxyYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGN0eCwgY29sb3IsIG9yaWdpbik7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcnJpZGUgZHJhdygpe1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJKjIpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJjdHgiLCJjb2xvciIsIm9yaWdpbiIsInJhZGl1cyIsIl9zdXBlciIsIl90aGlzIiwiQmFsbCIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImFyYyIsIngiLCJ5IiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsIlNoYXBlXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Circle.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/ts/Rectangle.ts\");\n\nvar Circle_1 = __webpack_require__(/*! ./Circle */ \"./src/ts/Circle.ts\");\n\nvar canvas = document.getElementById('my-canvas');\nvar ctx = canvas.getContext('2d');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar background = new Rectangle_1.Rectangle(ctx, 'black', {\n  x: 0,\n  y: 0\n}, {\n  width: canvas.width,\n  height: canvas.height\n});\nbackground.draw();\nvar ball = new Circle_1.Ball(ctx, 'white', {\n  x: 100,\n  y: 100\n}, 10);\nball.draw();\nvar brick = new Rectangle_1.Rectangle(ctx, 'green', {\n  x: 200,\n  y: 50\n}, {\n  width: 100,\n  height: 30\n});\nbrick.draw();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR0E7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxDO0FBQ0EsSUFBTUMsR0FBRyxHQUE2QkgsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQXRDO0FBR0FKLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlQyxNQUFNLENBQUNDLFVBQXRCO0FBQ0FQLE1BQU0sQ0FBQ1EsTUFBUCxHQUFnQkYsTUFBTSxDQUFDRyxXQUF2QjtBQUVBLElBQU1DLFVBQVUsR0FBRyxJQUFJQyxxQkFBSixDQUFjUixHQUFkLEVBQWtCLE9BQWxCLEVBQTJCO0VBQUNTLENBQUMsRUFBQyxDQUFIO0VBQUtDLENBQUMsRUFBQztBQUFQLENBQTNCLEVBQXNDO0VBQUNSLEtBQUssRUFBQ0wsTUFBTSxDQUFDSyxLQUFkO0VBQXFCRyxNQUFNLEVBQUNSLE1BQU0sQ0FBQ1E7QUFBbkMsQ0FBdEMsQ0FBbkI7QUFDQUUsVUFBVSxDQUFDSSxJQUFYO0FBRUEsSUFBTUMsSUFBSSxHQUFJLElBQUlDLGFBQUosQ0FBU2IsR0FBVCxFQUFjLE9BQWQsRUFBdUI7RUFBQ1MsQ0FBQyxFQUFDLEdBQUg7RUFBUUMsQ0FBQyxFQUFDO0FBQVYsQ0FBdkIsRUFBdUMsRUFBdkMsQ0FBZDtBQUNBRSxJQUFJLENBQUNELElBQUw7QUFFQSxJQUFNRyxLQUFLLEdBQUcsSUFBSU4scUJBQUosQ0FBY1IsR0FBZCxFQUFtQixPQUFuQixFQUE0QjtFQUFDUyxDQUFDLEVBQUMsR0FBSDtFQUFRQyxDQUFDLEVBQUU7QUFBWCxDQUE1QixFQUE0QztFQUFDUixLQUFLLEVBQUUsR0FBUjtFQUFhRyxNQUFNLEVBQUM7QUFBcEIsQ0FBNUMsQ0FBZDtBQUNBUyxLQUFLLENBQUNILElBQU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL01haW4udHM/NDg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQge0JhbGx9IGZyb20gXCIuL0NpcmNsZVwiO1xyXG5cclxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuLy9jb25zdCBzaGFwZXM6aURyYXdhYmxlW10gPSBbXTtcclxuXHJcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuY29uc3QgYmFja2dyb3VuZCA9IG5ldyBSZWN0YW5nbGUoY3R4LCdibGFjaycsIHt4OjAseTowfSwge3dpZHRoOmNhbnZhcy53aWR0aCwgaGVpZ2h0OmNhbnZhcy5oZWlnaHR9KTtcclxuYmFja2dyb3VuZC5kcmF3KCk7XHJcblxyXG5jb25zdCBiYWxsID0gIG5ldyBCYWxsKGN0eCwgJ3doaXRlJywge3g6MTAwLCB5OjEwMH0sIDEwKTtcclxuYmFsbC5kcmF3KCk7XHJcblxyXG5jb25zdCBicmljayA9IG5ldyBSZWN0YW5nbGUoY3R4LCAnZ3JlZW4nLCB7eDoyMDAsIHk6IDUwfSwge3dpZHRoOiAxMDAsIGhlaWdodDozMH0pO1xyXG5icmljay5kcmF3KCk7XHJcblxyXG4iXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImJhY2tncm91bmQiLCJSZWN0YW5nbGVfMSIsIngiLCJ5IiwiZHJhdyIsImJhbGwiLCJDaXJjbGVfMSIsImJyaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/Rectangle.ts":
/*!*****************************!*\
  !*** ./src/ts/Rectangle.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/Shape.ts\");\n\nvar Rectangle = function (_super) {\n  __extends(Rectangle, _super);\n\n  function Rectangle(ctx, color, origin, dimensions) {\n    var _this = _super.call(this, ctx, color, origin) || this;\n\n    _this.dimensions = dimensions;\n    return _this;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.fillStyle = this.color;\n    this.ctx.fillRect(this.origin.x, this.origin.y, this.dimensions.width, this.dimensions.height);\n  };\n\n  return Rectangle;\n}(Shape_1.Shape);\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvUmVjdGFuZ2xlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBO0VBQStCQTs7RUFHM0IsbUJBQVlDLEdBQVosRUFBMkNDLEtBQTNDLEVBQTBEQyxNQUExRCxFQUE0RkMsVUFBNUYsRUFBeUk7SUFBekksWUFDSUMsa0JBQU1KLEdBQU4sRUFBV0MsS0FBWCxFQUFrQkMsTUFBbEIsS0FBeUIsSUFEN0I7O0lBRUlHLEtBQUksQ0FBQ0YsVUFBTCxHQUFrQkEsVUFBbEI7O0VBQ0g7O0VBRVFHLDJCQUFUO0lBQ0ksS0FBS04sR0FBTCxDQUFTTyxTQUFULEdBQXFCLEtBQUtOLEtBQTFCO0lBQ0EsS0FBS0QsR0FBTCxDQUFTUSxRQUFULENBQWtCLEtBQUtOLE1BQUwsQ0FBWU8sQ0FBOUIsRUFBaUMsS0FBS1AsTUFBTCxDQUFZUSxDQUE3QyxFQUFnRCxLQUFLUCxVQUFMLENBQWdCUSxLQUFoRSxFQUF1RSxLQUFLUixVQUFMLENBQWdCUyxNQUF2RjtFQUNILENBSFE7O0VBSWI7QUFBQyxDQVpELENBQStCQyxhQUEvQjs7QUFBYUMsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9SZWN0YW5nbGUudHM/MDQ0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NoYXBlfSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5pbXBvcnQge2lEcmF3YWJsZX0gZnJvbSBcIi4vaURyYXdhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgU2hhcGUgaW1wbGVtZW50cyBpRHJhd2FibGV7XHJcbiAgICBwcml2YXRlIGRpbWVuc2lvbnM6e3dpZHRoOiBudW1iZXIsIGhlaWdodDpudW1iZXJ9XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcsIG9yaWdpbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBkaW1lbnNpb25zOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcclxuICAgICAgICBzdXBlcihjdHgsIGNvbG9yLCBvcmlnaW4pO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcnJpZGUgZHJhdygpe1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJjdHgiLCJjb2xvciIsIm9yaWdpbiIsImRpbWVuc2lvbnMiLCJfc3VwZXIiLCJfdGhpcyIsIlJlY3RhbmdsZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIlNoYXBlXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Rectangle.ts\n");

/***/ }),

/***/ "./src/ts/Shape.ts":
/*!*************************!*\
  !*** ./src/ts/Shape.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Shape = void 0;\n\nvar Shape = function () {\n  function Shape(ctx, color, origin) {\n    this.ctx = ctx;\n    this.origin = origin;\n    this.color = color;\n  }\n\n  Shape.prototype.draw = function () {};\n\n  return Shape;\n}();\n\nexports.Shape = Shape;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2hhcGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtFQUtJLGVBQXNCQSxHQUF0QixFQUFxREMsS0FBckQsRUFBb0VDLE1BQXBFLEVBQW9HO0lBQ2hHLEtBQUtGLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtFLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtELEtBQUwsR0FBYUEsS0FBYjtFQUNIOztFQUNERSxvQ0FDQyxDQUREOztFQUVKO0FBQUMsQ0FaRDs7QUFBc0JDLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9TaGFwZS50cz80NjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaGFwZSBpbXBsZW1lbnRzIGlEcmF3YWJsZXtcclxuICAgIHByb3RlY3RlZCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByb3RlY3RlZCBjb2xvcjpzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgb3JpZ2luOnt4Om51bWJlciwgeTpudW1iZXJ9O1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZywgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImN0eCIsImNvbG9yIiwib3JpZ2luIiwiU2hhcGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Shape.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_projet_examen"] = self["webpackChunktemplate_projet_examen"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;