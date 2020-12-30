# `react-testing-library`

A minimalistic implementation of the React Testing Library

## Usage

```
git clone https://github.com/rajjeet/react-playbook
cd react-playbook/packages/react-testing-library
npm install
npm test
```

### Prerequisite
- please complete the tutorial outline in [`react-basics`](https://github.com/rajjeet/react-playbook/tree/master
/packages/react-basic) before beginning this tutorial OR copy and paste the commands listed above to avoid the manual
 setup

### Step 1: Install
`npm install --save-dev @testing-library/react jest @types/jest prettier`  
- `@testing-library/react` - testing utility library
- `jest` - testing framework for javascript and React code
- `@types/jest` - type definitions for Jest for TypeScript and IDE intellisence
- `prettier` - used by Jest to format inline snapshots

### Step 2: Add babelrc file
Make sure you have the `.babelrc` in the root directory with the following contents:
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": []
}
```

### Step 3: Add Test and Run
For the `<App />` component in the `src` directory, add the following test in `App.test.js`:

`src/App.js`
```javascript
import React from "react";

export const App = () => <h1>Hello world React!</h1>;
```
`src/App.test.js`
```javascript
import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("App Component", function () {
  it("should have hello world message", function () {
    let { getByText } = render(<App />);
    expect(getByText("Hello world React!")).toMatchInlineSnapshot(`
      <h1>
        Hello world React!
      </h1>
    `);
  });
});
```
The imported `render()` function from the RTL is used to render the App component. The output of the `render
()` function's execution gives us query functions that we can use to make assertions about the component. Note: since
 we are using the query function straight from the `render()` function, the search binds to the component instead
  of the entire document. This is okay as we are writing unit tests, but this syntax is similar for integration
   testing.
   
The `toMatchInlineSnapshot()` is used so that we are don't have to write out and format the the expected output.

To run the test, type `npm test` in the directory. You should see this:
```
> jest

PASS src/App.test.js
  App Component
    √ should have hello world message (20 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 passed, 1 total
Time:        1.971 s, estimated 2 s
Ran all test suites.

```

## Checkout the other React Quick Starters
Using these starters, I quickly pick up working knowledge of these libraries and implement them with confidence on
 complex projects. [Github Repo](https://github.com/rajjeet/react-playbook)   