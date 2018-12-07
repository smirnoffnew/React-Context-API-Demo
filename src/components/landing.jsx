import React from "react";
import { ThemeContext } from "../themeContext";

export default props => (
  <ThemeContext.Consumer>
    {context => (
      <div className="landing-component content-wrapper" style={{
          background: context.theme.background,
          color: context.theme.color
      }}>
      <div className="contain">
        <h3>Home</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus soluta provident velit, quibusdam qui
          asperiores praesentium, obcaecati libero assumenda sed facilis quo voluptatum dolor sequi quidem aliquam?
          Esse, obcaecati!
        </p>
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
);
