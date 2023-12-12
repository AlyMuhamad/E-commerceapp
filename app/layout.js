'use client';

import './globals.css';
import Header from './(components)/Header';
import store from './(features)/store';
import { Provider } from 'react-redux';
import SideMenu from './(components)/SideMenu';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Provider store={store}>
          <Header />
          <SideMenu />
          {children}
        </Provider>
      </body>
    </html>
  );
}
