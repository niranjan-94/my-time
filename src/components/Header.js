import React from 'react';
import moment from 'moment';

function Header() {
  const currentDate = moment().format('MMMM Do YYYY');

  return (
    <header>
      <h1>My Time</h1>
      <p>{currentDate}</p>
    </header>
  );
}

export default Header;
