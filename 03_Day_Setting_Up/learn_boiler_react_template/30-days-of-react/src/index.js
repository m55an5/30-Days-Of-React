import React from 'react';
import ReactDOM from 'react-dom';
import hehua from './images/hehua.jpeg'

/* inline css stying
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 24,
  lineHeight: 1.5
}

<header style={headerStyles}>

## internal stype
<header>
  <div className='header-wrapper'>
  </div>
</header>
*/

const header = (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 days of React</h1>
      <h2>Getting Started React</h2>
      <h3>Javascript Library</h3>
      <p>Learning from Asabeneh</p>
      <small>Oct 14, 2020</small>
    </div>
  </header>
)

const user = (
  <div>
    <img src={hehua} alt='HEHUA IMG' />
  </div>
)

const main = (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started on react.js</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
      {user}
    </div>
  </main>
)

const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

/* Exercise */

const formDesgin = (
  <main>
    <div className='form-wrapper'>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to recieve news and upates.</p>
      <div>
        <input type="text" id="firstname" placeholder="First name" />
        <input type="text" id="lastname" placeholder="Last name" />
        <input type="text" id="email" placeholder="email" />
      </div>
      <div>
        <input type='button' id="subscribeBtn" value="Subscribe" />
      </div>
    </div>
  </main>
);

const app = (
  <div className='app'>
    {header}
    {formDesgin}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement);

// or
//  ReactDOM.render([header, main, footer], rootElement)

