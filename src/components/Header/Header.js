import './Header.css';

import React from 'react';

export default function Header() {
  return (
    <header>
      <h1>Around Me</h1>
      <div className="description">
        <h2>This app lets you find the best businesses in any location.</h2>
        <p>
          Give it a try!{' '}
          <span role="img" aria-label="smiling face with sunglasses emoji">
            😎
          </span>
        </p>
      </div>
    </header>
  );
}
