import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      <main>
        {props.children}
      </main>
      <Navigation />
    </div>
  );
}

export default Layout;
