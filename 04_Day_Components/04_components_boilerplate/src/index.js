// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: '2px solid black',
    backgroundColor: bgColor,
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh'
}
const date = 'Oct 3, 2020'

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const yearBorn = 1820
const currentYear = 2020
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh image' />
    <h2>
    {author.firstName} {author.lastName}
    </h2>
  </div>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// TechList Component
// const TechList = () => {
//   const techs = ['HTML', 'CSS', 'JavaScript']
//   const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//   return techsFormatted
// }

const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0)',
  border: 'none',
  borderRadius: 5,
}

const Button = () => <button style={buttonStyles}> action </button>

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <div>
        <p>Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
        {personAge}
      </div>
      <UserCard />
      <div>
        {/* Generate two different hexa colors every time */}
        <HexaColor />
        <HexaColor />
      </div>
    </div>
  </main>
)

const copyRight = '2020'

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
)

// exercise 

const FormDesign = () => (
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

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <HexaColor />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
