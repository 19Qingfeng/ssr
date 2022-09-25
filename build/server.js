(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // config/server/index.tsx
  var import_react6 = __toESM(__require("react"));
  var import_express = __toESM(__require("express"));
  var import_server = __toESM(__require("react-dom/server"));

  // src/App.tsx
  var import_react_router_dom = __require("react-router-dom");

  // src/router/router-config.tsx
  var import_react4 = __toESM(__require("react"));

  // src/pages/Home.tsx
  var import_react = __toESM(__require("react"));
  var import_react2 = __require("react");
  var import_material = __require("@mui/material");
  var HomePage = () => {
    const [count, setCount] = (0, import_react2.useState)(0);
    return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", null, "Hello Home!"), /* @__PURE__ */ import_react.default.createElement("p", null, "Counter is ", count, "!"), /* @__PURE__ */ import_react.default.createElement(import_material.Button, {
      onClick: () => setCount(count + 1)
    }, "Add Counter"));
  };
  var Home_default = HomePage;

  // src/pages/404.tsx
  var import_react3 = __toESM(__require("react"));
  var import_material2 = __require("@mui/material");
  var ErrorContainer = (0, import_material2.styled)("div")(({ theme }) => {
    return {
      width: "300px",
      background: "#000",
      color: "#fff"
    };
  });
  var ErrorPage = () => {
    return /* @__PURE__ */ import_react3.default.createElement(ErrorContainer, null, "Error 404!");
  };
  var __default = ErrorPage;

  // src/router/router-config.tsx
  var routes = [
    {
      path: "/",
      name: "home",
      element: /* @__PURE__ */ import_react4.default.createElement(Home_default, null)
    },
    {
      path: "*",
      name: "home",
      element: /* @__PURE__ */ import_react4.default.createElement(__default, null)
    }
  ];
  var router_config_default = routes;

  // src/socket/index.ts
  var import_react5 = __require("react");
  var import_socket = __require("socket.io-client");
  var useSocket = () => {
    (0, import_react5.useEffect)(() => {
      const socket = (0, import_socket.io)("ws://localhost:3001");
      socket.on("refer", () => {
        location.reload();
      });
    }, []);
  };
  var socket_default = useSocket;

  // src/App.tsx
  var App = () => {
    socket_default();
    return (0, import_react_router_dom.useRoutes)(router_config_default);
  };
  var App_default = App;

  // config/server/index.tsx
  var import_server2 = __require("react-router-dom/server");
  var import_chalk = __toESM(__require("chalk"));
  var app = (0, import_express.default)();
  app.use(import_express.default.static("public"));
  app.get("*", (req, res) => {
    const { renderToString } = import_server.default;
    const element = renderToString(
      /* @__PURE__ */ import_react6.default.createElement(import_server2.StaticRouter, {
        location: req.url
      }, /* @__PURE__ */ import_react6.default.createElement(App_default, null))
    );
    res.send(
      `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id='root'>${element}</div>
      <script src="/main.js"><\/script>
    </body>
    </html>
  `
    );
  });
  app.listen(3e3, () => {
    console.log(`${import_chalk.default.green(`server listene on 3000 port.`)}`);
  });
})();
