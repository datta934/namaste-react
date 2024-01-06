# namaste-react
This repo includes all learning from Namaste React


## Topics
### Episode 1 Inception - 2.11
1. Basics of HTML, JS, and React (Hello World)
2. React without JSX

### Episode 2 Igniting our app - 2.12
1. npm, npx, package vs lock
2. ^ vs ~
3. gitignore
4. why not to use react cdn links
5. Parcel and its features
6. browsersList in package.json - browserslist.dev 

### Episode 3 Laying the foundation - 1.59
1. scripts in package.json
2. React Element - React.createElement()
3. Root - ReactDOM.createRoot()
4. root.render()
5. React with JSX
6. Class vs Functional Component

### Episode 4 Talk is Cheap, Show me the code - 2.14
1. Food ordering app
2. Props; Pass data in props; Destructuring complex data
3. JSON
4. Cloudinary
5. using map to iterate data; key

### Episode 5 Let's get hooked - 2.09
1. Folder structure and clean up the code
2. File formats? Js/jsx/tsx
3. import (types of import), export
4. Event handlers
5. React hooks - useState
6. Why is react fast? 
    - VirtualDOM
    - Reconciliation Algo
    - React Fiber
    - React Fiber Architecture
    - Incremental Rendering


### Episode 6 Exploring the world - 2.22
1. Monolith architecture
2. Microservice architecture
3. Two approaches to fetch data from BE
4. Hook - useEffect()
5. fetch() - given by browers which JS engine has
6. CORS and using swiggy API
7. Loader and shimmer
8. Why to use state? Scenerio - Login/Logout
9. How const is working to toggle Login/Logout text? Because component re-renders with new value in state.
10. Search and Filter at FE

### Episode 6.1 - SwiggyAPI resolve- 45mins
### Episode 6.2 - CORS resolve - 5mins - CORS proxy IO

### Episode 7 Finding the path - 2.18
1. useEffect with dependency array
2. Routing, Children Routes - react-router-dom 
    - createBrowserReact
    - path, element, errorElement
    - useRouteError
    - Outlet
    - Link
3. Dynamic Routing
    - useParams

### Episode 8 Let's Get Classy - 2.46
1. Class based components - The older way
2. Props, State, Update state
3. What if parent component is also class component
4. Methods:
    - constructor
    - render
    - componentDidMount()
        - First child then parent 
        - Usage: to make API Calls
    - componenentDidUpdate()
    - componentWillUnmount()
        - About to be unmount
        - once you move from current component
5. Component life cycle - Render and Commit phase
6. How to make an API call in class component - async, await, fetch

### Episode 9 Optimizing our App - 1.38
1. Hooks - utility function
2. Custom hooks - Custom hook for menu
3. Online offline hook
4. App Chunking, Code splitting, Lazy loading, Dynamic bundling 
5. lazy()
6. Suspense

### Episode 10 Jo Dikhta Hai, Vo Bikta Hai - 1.37
1. Styled components
2. Tailwind - (Not including in the repo)
3. Tailwind with parcel

### Episode 11 Data is the new oil - 3.07
1. Higher Order Components (HOC) - function takes a component and returns a component. A normal js function
2. UI and Data layer
3. Lifting state up
4. React Context: 
    - createContext, useContext, 
    - {file}.Consumer for class based component
    - {file}.Provider to modify value of context
{file} - My context file
5. How to change context value?

### Episode 12 Let's build our store - 2.40
1. Redux, Redux Toolkit and React Redux and Zustand 
2. State management: Action, Reducer, Selector, Subscribe to store
3. Implementation
    - const appStore = configureStore();
    - Provider
    - createSlice
    - export actions and reducers
    - useSelector
    - useDispatch
4. Comparison of how state worked in vanilla redux
5. immer js - Redux uses this

26:47 hrs