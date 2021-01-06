# `react-hooks`

This guide explores each React hook and how it can be correctly unit tested using React Test Utils.

## Usage

```
git clone https://github.com/rajjeet/react-playbook
cd react-playbook/packages/react-hooks
npm install
npm test
npm start
```
    
|React Hook|Use Cases|
|---|---|
|`useState`| Track state within the component |
|`useEffect`| Perform side effects other than rendering such as data fetching and timer-based actions | 
|`useContext`| Alternative to prop-drilling; pass down data to component tree without specifying props at every level
 of the component tree. Uses a provider and consumer relationship |
|`useRef`| Instance variable for component that doesn't cause a re-render when it changes. Also used for referencing DOM elements for imperative control. |
|`useMemo`| Prevent re-renders from re-computing values derived from expensive functions by storing previously computed values in memory. Only re-compute the variable if one of its dependencies changes |
|`useCallback`| Prevent re-renders from re-initializing local functions by saving the function in memory and only re-initializing it if its dependencies change. |
|`useReducer`| Alternative to `useState` for storing component-level state. Useful for tracking complex state objects |
|`useImperativeHandle`| Allows components to provide a specific interface for the forwarded ref | 

