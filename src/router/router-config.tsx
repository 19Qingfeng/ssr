import React from 'react';
// import glob from 'glob';
import Home from '../pages/Home';
import ErrorPage from '../pages/404';

const routes = [
  {
    path: '/',
    name: 'home',
    element: <Home />,
  },
  {
    path: '*',
    name: 'home',
    element: <ErrorPage />,
  },
];

export default routes;

// const matchedFiles = glob.sync('src/pages/*');
// console.log(matchedFiles, 'matchedFiles');

// TODO: ESBuild dynamic Import 回头研究下
// const routers = matchedFiles.map((path: string) => {
//   const route = path.split('/').slice(2)
//   const name = route.map(i => i.slice(0, 1).toUpperCase() + i.slice(1)).join()
//   const routePath = route.join('/')
//   const routeComponent = import('../' + path)
//   return {
//     name,
//     path: routePath,
//     // 获取当前路径对应的组件
//     routeComponent
//   }
// })
