import type { FC } from 'react';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom'
import routers from './router'
import Nav from '@/pages/nav/index'

const App: FC = () => (
  <div id="app">
    <Nav />
    <Suspense fallback={<div>Loading...</div>}>
      <div id='main'>
        {useRoutes(routers)}
      </div>
    </Suspense>
  </div>
);

export default App;