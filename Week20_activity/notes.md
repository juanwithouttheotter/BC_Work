# React state

--Know the difference between functional and class
## The Functional component 
* uses the useState function
* takes in props
* uses react hooks

### useState function
* returns an array where the first indeci is the current state and the second indeci is a function to update the function.

## The Class component
* extends the react class component and must have a render function.
* useState hooks must be used within a method and would be redundant. 



## Context
* designed to share data in a "global" scope for a tree of react components. This is an alternative to continuously passing props
    * the child will receive the closest parent context. 
* context is superior to props where props is more static than context as context allows you access to a higher shared scope that allows you to change that scope than then changes it for the lower level scopes. 


    * create context *React.CreateContext*
        * sets the skeleton of the model for context

    * the Model page then takes the context and sets the initial context

    * On the App or where needed. 
        * wrap context inside of what I want to use the context in of ---Context.Provider


    * app.js
        * const appConfig = getConfig();
        <appWideContext.Provider value= {appConfig}>
        <ReactRouter  path="/" component={home} />
        </appWideContext>

    * views/home.js
        * const appConfigContext = useContext(appConfig);
        <HomePageContext.Provider  value={homePage}>
            <NavBar />
            <SideBar />
            <Feed />
        </HomePageContext>



## mutability vs immutibility

* mutabiliy is object oriented way of thinking about things and changing things
* immutability does not change the data rather adds to it.

### pure Functions
* a function that has no side effects, pass in, run, out put. 
    * inp goes in, logic is followed, results come out.
### impure Function
* changes the variable that is passed in and does too much to it. 
    * inp goes in, logic is followed(maybe passed throught another func), altered input comes out(unless it is a simpleton)


## action
* if you give a reducer a
## reducer
* if you give a reducer a
## store
* z