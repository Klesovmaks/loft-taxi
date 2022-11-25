import React from 'react';
import { Profile } from './Profile';
import { Home } from './Home';
import { About } from './About';
import Registration from './Registration';
import { Map } from './Map';
import './App.css';

class App extends React.Component {
  state = { currentPage: 'home' };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  PAGES = {
    home: <Home />,
    about: <About />,
    profile: <Profile />,
    registration: <Registration nav={this.navigateTo} />,
    map: <Map />,
  };

  render() {
    return (
      <>
        {/* <Registration name={'asd'} /> */}
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo('home');
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo('about');
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo('profile');
                  }}
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo('registration');
                  }}
                >
                  Registration
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>{this.PAGES[this.state.currentPage]}</section>
        </main>
      </>
    );
  }
}

export default App;
