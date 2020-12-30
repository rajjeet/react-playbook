# `typescript`

A minimalistic setup of TypeScript for React projects

## Usage

```
git clone https://github.com/rajjeet/react-playbook
cd react-playbook/packages/typescript
npm install
npm run type-check
```

### Prerequisite
Please checkout the [react-basics](https://github.com/rajjeet/react-playbook/tree/master/packages/react-basic) package to understand the React setup before completing this tutorial. 

### Step 1: Install
```npm install --save-dev typescript ts-loader @types/react @types/react-dom```
Here's what each package is for:
- `typescript` - the library that converts TypeScript files (file extension with `.ts` or `.tsx`) into JavaScript.
- `ts-loader` - Webpack loader that integrates TypeScript into Webpack. Webpack uses this loader to help convert TS
 files into the JS and integrate into the final bundle.  
 - `@types/react` - provide typing for React API. Also, provides intellisence and documentation. 
 - `@types/react-dom` - provide typing for React DOM API. Also, provides intellisence and documentation.

### Step 2: Add TypeScript Config File
Add `tsconfig.json` to root directory.
 
`tsconfig.json`
```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "Node"
  }
}
```
This file lets us add a configuration for the compiling of TypeScript code into JavaScript. 

### Step 3: Configure Webpack
Webpack needs to be configured to process TypeScript files. Here are the key changes to `webpack.config.js`:
- add `ts-loader` and test for `ts` and `tsx` files
    ```
    ...
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader'
          }
    ...
    ```
- add `ts` and `tsx` to the list of extensions to resolve
    ```
    ...
      resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      }
    ...
    ```
- remember to rename the `js` files to `tsx` if they have React code, else `ts` and fix the entry point 
    ```
    ...
       entry: path.resolve(__dirname, 'src', 'index.tsx'),
    ...
    ```
 
### Step 4: Change File Extensions of JavaScript/JSX to TypeScript (ts/tsx)
After renaming the files, you can add types to functions such as below:

`App.tsx`
```
import * as React from "react";

type AppProps = { num: number };

export const App = ({num}: AppProps) => <h1>Hello world React! Num: {num}</h1>;
```
Here's the entry point:
`index.tsx`
```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./App";

ReactDOM.render(<App num={1337} />, document.getElementById('root'));

```

Now run a type-check using `npm run type-check`, which runs the TypeScript compiler check without emitting any
 declarations. That's it! You're good to go!

## Checkout the other React Quick Starters
Using these starters, I quickly pick up working knowledge of these libraries and implement them with confidence on
 complex projects. [Github Repo](https://github.com/rajjeet/react-playbook) 