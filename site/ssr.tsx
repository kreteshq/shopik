import React from 'react';
import ReactDOMServer from 'react-dom/server'

import { Router } from 'wouter';
import staticLocationHook from 'wouter/static-location';

import { QueryClient, QueryClientProvider } from 'react-query'
import { dehydrate, Hydrate } from 'react-query/hydration'

import { App } from '@/components/App'

export async function render({ url, tasks }: any) {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(`tasks`, () => tasks || []);

  const dehydratedState = dehydrate(queryClient);

  const element =
    <Router hook={staticLocationHook(url)}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <App />
        </Hydrate>
      </QueryClientProvider>
    </Router>

  // await ssrPrepass(element);

  const app = ReactDOMServer.renderToString(element);

  return { app, dehydratedState };
}