# `typescript`

Integrating Jest into a TypeScript project

## Usage

```
git clone https://github.com/rajjeet/react-playbook
cd react-playbook/packages/typescript-jest
npm install
npm run type-check
npm test
```

### Prerequisite
Please checkout the [typescript](https://github.com/rajjeet/react-playbook/tree/master/packages/typescript) package to
 understand the TypeScript setup before proceeding with this guide. 

### Step 1: Install
`npm install --save-dev jest @types/jest @babel/preset-typescript`
Here's what each package is for:
- `jest` is the test runner and framework that executes our tests and providers helper functions for assertions
- `@types/jest` is types library that provides typing and intellisence for global jest keywords such as `describe
` and `it` in our test file. These makes type safety more robust for type files and provides better IDE support.
- `@babel/preset-typescript` transpiles tests written in TypeScript to JavaScript, so Jest can understand them.

### Step 2: Add Babel Preset
Add `"@babel/preset-typescript"` to `.babelrc` in the root directory. It should look like this:
`.babelrc`
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
  "plugins": []
}
```

### Step 3: Add Tests
I've added tests, written using `ReactTestUtils`, in the `App.test.tsx` file for `App.tsx`. You can use a less
 verbose test utility helper library, such as Enzyme and React-Testing-Library here.
 `App.test.tsx`
 
 ```typescript jsx
import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import {App} from "./App";

describe('App', function () {
    it('should display pass in number', function () {
        let container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(<App num={191}/>, container);
        })
        const header = container.querySelector('h1');
        expect(header.textContent).toBe("Hello world React! Num: 191")
    });
});
``` 
 
### Step 4: Run Tests
Finally, let's add a npm script in `package.json` as follows:
 `package.json`
 ```
  ...
  "scripts": {
    ...
    "test": "jest"
    ...
  },
  ...
```

Now, run our test using `npm test`. That's it!

## Checkout the other React Quick Starters
Using these starters, I quickly pick up working knowledge of these libraries and implement them with confidence on
 complex projects. [Github Repo](https://github.com/rajjeet/react-playbook) 