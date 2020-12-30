# `jest-enzyme`

A minimalistic implementation of Jest and Enzyme for testing React projects

## Usage

```
git clone https://github.com/rajjeet/react-playbook
cd react-playbook/packages/jest-enzyme
npm install
npm test
```

### Step 1: Add dependencies
Follow the `react-basics` tutorial and run the following command afterwards:
```
npm install --dev jest enzyme enzyme-adapter-react-16 @types/jest`
``` 

Here's for each package is for:
- `jest` is the test runner and framework that executes our tests and providers helper functions for assertions
- `enzyme` is a test helper library that enables us to render React components on a virtual DOM and provides method
 to inspect the DOM tree for specific components and their properties. Think of JQuery but for React components for
  testing. 
- `enzyme-adapter-react-16` is an adapter between React and Enzyme. This will be executed before running the tests.
- `@types/jest` is types library that provides typing and intellisence for global jest keywords such as `describe
` and `it` in our test file. This makes type safety more robust for type files and provides better IDE support for
test files.    

### Step 2: Add Enzyme Adapter for React
- add test setup file with the enzyme adapter that executes before each test in `./setupTests.js`
```javascript
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
```

### Step 3: Connect the Setup Test
- point to the setup file using the `jest` property in `package.json`. 
```json
"jest": {
    "setupFilesAfterEnv": [
      "<rootDir>/setupTests.js"
    ]
  }
```

### Step 4: Add and Run Tests
For the `<App/>` component in `./src`:
```javascript
import React from "react";

export const App = () => <h1>Hello world React!</h1>;
``` 
we can add the following test file:
``` javascript
import React from 'react';
import { shallow } from "enzyme";
import { App } from "./App";

describe('Test App Entry point', function () {
  it('should have a header tag with Hello world React!', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find("h1").text()).toEqual("Hello world React!");
  });
});
```
The `describe` block groups a set of tests surrounded by `it` blocks as shown above. It's desirable to nest multiple
 `describe` blocks to logically separate the scope of each test. The `it` blocks should ideally contain only one
  assertion.  
  
Now, run the test using `npm test`. You should see the test pass as follows:
```
$ npm test

> jest-enzyme@0.0.0 test C:\Users\rajje\WebstormProjects\react-playbook\packages\jest-enzyme
> jest

PASS src/App.test.js
  Test App Entry point
    √ should have a header tag with Hello world React! (6 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.967 s, estimated 2 s
Ran all test suites.
```

## Checkout the other React Quick Starters
Using these starters, I quickly pick up working knowledge of these libraries and implement them with confidence on
 complex projects. [](https://github.com/rajjeet/react-playbook) 