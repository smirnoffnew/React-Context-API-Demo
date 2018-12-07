import React from "react";
import { ThemeContext } from "../themeContext";
import { APIContext } from "../apiContext";

class About extends React.Component {
  componentDidMount() {
    console.log(`
      Have apiKey from APIContext: ${this.props.apiKey}
    `)
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div
              className="about-component content-wrapper"
              style={{
                background: context.theme.background,
                color: context.theme.color
              }}
            >
              <div className="contain">
                <h3>About</h3>
                <hr />
                <img src={this.props.imageURL} alt="about me"/>
                <p>
                  image url provided from APIContext.
                </p>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default props => (
  <APIContext.Consumer>
    {context => {
      return <About {...props} 
      imageURL={context.imageURL} 
      apiKey={context.apiKey} />
    }}
  </APIContext.Consumer>
);
