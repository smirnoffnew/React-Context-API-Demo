# React Context Example

> Context is a way built in to React to pass data through the component tree without having to pass props down manually at every level. This can completely replace the need for Redux in an application. 

## Creating a context file

Create a context file in `src`, we can call this `themeContext.js`, as it will provide styles objects for different user-selectable themes. One export will be the context object, which we create with `React.createContext()`. In this case we also have another export, which is an object with the styling information for the different themes. 
<details><summary> themeContext.js </summary>

```js
import React from 'react'

export const themes = {
    light: {
        background: '#eee',
        color: '#222'
    },
    dark: {
        background: '#222',
        color: '#eee'
    },
    sky: {
        background: 'cornflowerblue',
        color: '#222'
    }
}

export const ThemeContext = React.createContext({
    theme: themes.light,
    selectTheme: () => {},
    data: {
        apiKey: 'asdf1234'
    }
})
```
</details>

## Applying context to our application

Now we will import `themes` and `ThemeContext` into `App.js`. 
<details><summary> App.js </summary>

```js
import { themes, ThemeContext } from "./themeContext";
```
</details>

In order to pass the context data down into our components, we can use the Context Provider higher order component. This takes one attribute, `value`, which will be accessible to any components rendered within the provider.
<details><summary> App.js </summary>

```js
constructor(props) {
    super(props);
    this.selectTheme = evt => {
        this.setState({ theme: themes[evt.target.value]})
    }
    this.state = {
        theme: themes.light,
        selectTheme: this.selectTheme
    }
}
render() {
    return (
        <HashRouter>
        <APIContext.Provider value={{
            theme: this.state.theme,
            selectTheme: this.state.selectTheme
        }}>
            <div className="app-component">
                {routes}
            </div>
        </APIContext.Provider>
        </HashRouter>
    )
}
```
</details>

## Accessing context from a component

In order to access the context value, we can use the Context Consumer higher order component. 
<details><summary> landing.jsx </summary>

```js
import React from 'react';
import { ThemeContext } from "../themeContext"

export default props => (
    <ThemeContext.Consumer>
        {context => (
            <div className="landing-component" style={{
                background: context.theme.background,
                color: context.theme.color
            }}>
                <h3> Home </h3> 
            </div>
        )}
    </ThemeContext.Consumer>
)
```
</details>

## Accessing context outside of JSX

So far we have seen how we can access the context when rendering some JSX. If we need to access context outside of JSX, e.g. in a lifecycle method, we can use a custom higher order component to pass the context object as a prop. 

Let's use another context object, `APIContext`, which contains an API key value. Our About page needs access to that key in its `componentDidMount`. 
<details><summary> about.jsx </summary>

```js
import React from 'react';
import { APIContext } from "../apiContext";

class About extends React.Component {
    componentDidMount() {
        // here we need access to the api Key from APIContext
    }
    render() {
        return (
            <div className="about-component">
                <h3> About </h3>
            </div>
        )
    }
}
/* 
Here we will make a higher order component as the default
export, that can pass context values as props to our class
component.
*/
export default props => (
    <APIContext.Consumer>
        { context => <About {...props} apiKey={context.apiKey} /> }
    </APIContext.Consumer>
)
```
</details>
