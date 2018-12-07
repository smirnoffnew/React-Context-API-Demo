import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import { themes, ThemeContext } from "./themeContext";
import { APIContext } from './apiContext';
import Nav from './nav';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.selectTheme = evt => {
      this.setState({
        theme: themes[evt.target.value]
      });
    };

    this.state = {
      theme: themes.light,
      selectTheme: this.selectTheme,
      imageURL: 'https://laracasts.com/images/series/circles/do-you-react.png',
      apiKey: 'asdf1234'
    };

  }

  render() {
    return (
      <HashRouter>

        <APIContext.Provider value={{
          imageURL: this.state.imageURL,
          apiKey: this.state.apiKey
          }}>


        <ThemeContext.Provider value={{
          theme: this.state.theme,
          selectTheme: this.state.selectTheme
        }}>


          <div className="app-component">
            <header
              style={{
                background: this.state.theme.background,
                color: this.state.theme.color
              }}
            >
              <div className="header-content">
                <h1>React Context API Demo</h1>
              </div>
            </header>
            <Nav />
            {routes}
          </div>
        </ThemeContext.Provider>
        </APIContext.Provider>
      </HashRouter>
    );
  }
}

