import React from 'react';
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'https://vercel.saleor.cloud/graphql/',
});


const queryClient = new QueryClient()

import { App } from '@/components/App';

render(
  <Provider value={client}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('app')
);
