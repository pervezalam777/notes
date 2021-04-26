# React Notes

### Conceptually, React does work in `two phases`:

- The `render phase` determines what changes need to be made to e.g. the DOM. During this phase, React calls render and then compares the result to the previous render.
- The `commit phase` is when React applies any changes. (In the case of React DOM, this is when React inserts, updates, and removes DOM nodes.) React also calls life-cycles like componentDidMount and componentDidUpdate during this phase.

## References 
- [Complete Guide to react rendering behavior](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)
- [Introducing the react profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
- [Interactive tutorial react dev tools](https://react-devtools-tutorial.vercel.app/exploring-owners)
- [debounce SetState](https://www.netlify.com/blog/2018/08/29/using-the-react-devtools-profiler-to-diagnose-react-app-performance-issues/)
- [hooks life-cycle flow](https://github.com/donavon/hook-flow)
- [Optimization with component hoisting](https://kentcdodds.com/blog/optimize-react-re-renders)

# Sample Code Notes
## react-context-with-memo
react-context-with-memo is a small demo application build for providing state and actions to inner component without passing it through hierarchically. This also take care of memoization of component which should not render based on required property change. 

### React API used
* React.createContext and useContext 
* useReducer
* React.Memo