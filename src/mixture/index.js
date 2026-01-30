import React, { Suspense } from 'react';
import { createBrowserRouter, createHashRouter,RouterProvider } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import Loading from "../components/Loading";
import routes from '../routes';

const router = createHashRouter(routes);
const App = () => (
    <ErrorBoundary>
      <RouterProvider
        router={router}
        fallbackElement={<Loading />}
      />
    </ErrorBoundary>
);

export default App;

