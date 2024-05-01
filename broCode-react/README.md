# Bro-Code Learning ReactJS

[Video Link](https://youtu.be/CgkZ7MvWUAA?si=S6yKIIdnOrdAkXYc)

## Index
- [How to set up react](#how-to-set-up-react)
- [Folder structure](#folder-structure)
- [Components](#components)
- [Adding CSS style to elements in ReactJS](#adding-css-style-to-element-in-reactjs)
- [Props](#props)
- [Conditional rendering](#conditional-rendering)

## Points 
- React works in JSX, which means JavaScript XML.
- React works with components.
- React components help in quick rearrangement of websites and solving repetition of elements


## How to set up react 
1. In the terminal, run `npm create vite@latest`.
2. Then project name, React, and JS.
3. `cd project-folder` and run `npm install`.
4. Then run `npm run dev` to open the server.


## Folder structure 
1. The `node_modules` contain all the dependencies our project has.
2. The `public` folder contains all public assets.
3. The `src` folder is the folder we will mostly use.
4. Inside `src`, `main.jsx` is the main JS of our project, and `app.jsx` is a component.
5. `index.html` is the main HTML of our project.
6. The `package.json` file contains metadata about our project.



## Components 
1. Components are the building blocks of projects.
2. We can build components by making a new `componentsName.jsx` within src.
- Example of Header components - 
```js
function Header(){

    return (
        <header>
            <h1>My App</h1>
        </header>
    );
}

export default Header;

```
3. Now we can import the header component within other components or our main `App.jsx` component like this:
- Component func name should start with uppercase letter like this - `Header`, `Profile`
```js
import Header from "./header.jsx";

function App() {
  return(
    <Header></Header>
  )
}

export default App

```
4. One component function can only return one HTML element, but we can add multiple child elements.
5. We can write a header like this also (shorthand):
```js 
<Header/>
```

6. Because JSX function only returns one component, it will give an error if we try to return two components.
7.To solve this, we can use JSX fragments` (<>...</>)` like this: 
```js
function App() {
  return(
    <>
        <Header/>
        <Footer/>
    </>

  )
}
```
8.If we want to add JS in component return statement, we use `{code}` like this:
```js
return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Manik Maity</p>
        </footer>
    )
``` 

9. Outside return, we can use JS as usual like this:
```js
function Food (){
    const foods = ["Apple", "Banana", "Orange"];
    return (
        <ul>
            <li>{foods[0]}</li>
            <li>{foods[1]}</li>
            <li>{foods[2]}</li>
        </ul>
    )
}
```

10.We can use `className=""` to set classes in elements inside return. Because `class` is a reserved name.
```js
return (
        <div className="card">
            <img alt="Profile Picture" src={profilePic}></img>
            <h2>Mnaik Maity</h2>
            <p>B.com (H) | I like development</p>
        </div>
    )
```


11. To use assets from the `assets` folder, we have to import that asset.
```js
import profilePic from "./assets/manik-maity.jpeg"
```
------------------------------------------

## Adding css style to element in reactjs
- External
- Internal
- Inline

### 1. External
- We can add style to an element in our `index.css` file.
- External stylesheet is mostly used to set global style.
- But it is not efficient in large web apps for naming and hard to maintain.
```css
.btn{
  padding: 7px 20px;
  background-color: rgb(103, 192, 247);
  color: white;
  border: none;
````

### 2. Module
- In this, we will create a dedicated CSS stylesheet specific to a component.
- We will create a dedicated file inside src for the component like `Button`.
- Make/Move the .jsx component like `button.jsx` inside that folder.
- Inside the folder ex - Button, we will make a stylesheet for the component named like `button.module.css`.
- Write the styling like this:

```css
/*file - button.module.css*/
.btn{
    padding: 7px 20px;
    background-color: rgb(103, 192, 247);
    color: white;}
```
- Then we import the stylesheet to our component .jsx file
```js
// file - button.jsx
import style from "./button.module.css";
```
- And we have to add the style classname from the imported style to the element className, like this:
```js
<button className={style.btn}>Click me</button>
```

### 3. Inline
- Inline CSS is used inside the component `.jsx` file by creating a style object.
- Then use the style object created in the element style attribute.
- It good for small element and minimum styling but not mantainable for complex styling
Ex. - 
```js
// ScondaryButton.jsx
const style = {
    padding: "7px 20px",
    color: "white",
    backgroundColor : "transparent",
    fontWeight: "bold",
    marginTop: "5px",
    cursor: "pointer",
    border : "1px solid #67c0f7",
}

function SecondaryBtn(){
    return (
        <button style={style}>About</button>
    )
}

export default SecondaryBtn;
```

## Props 
- These are read-only properties that are shared between components. A parent component can send data to a child component.
- To use props, we have to pass props as a parameter for the component function. And we can use props' values in HTML.

```js
function student(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
        </div>
    );
}
```
- We can set props value in the parent component like this:
```js
function App() {
  return(
    <>
      <Student name="Manik"/>
    </>
  )
}
```
- Besides strings, if we want to set value we have to use `{}` to pass value like this:
```js
    <>
      <Student name="Manik" age={20} isStudent = {true}/>
    </>
```

- We can just change the props value to make different HTML elements like this:
```js
    <>
      <Student name="Manik" age={20} isStudent = {true}/>
      <Student name="Suman" age={14} isStudent = {true}/>
      <Student name="Ronit" age={21} isStudent = {true}/>
      <Student name="Swapan" age={45} isStudent= {false}/>
    </>
```

### Prop Types -
- It is a mechanism to check the passed props value is required data type.
- It is good practice to use prop types.
- We have to import `prop-types` from the node module to the child component .jsx file.
```js
import propTypes from "prop-types";
```

- Then we can set prop type after the component function like this -
```js
import propTypes from "prop-types";

function student(props) {
    return (
        <div className="studentCard">
            <p>Name: {props.name}</p>
            <p>Age : {props.age}</p>
            <p>{props.isStudent? "He is a student" : "He is not a student"}</p>
        </div>
    );
}

student.propTypes = {
    name : propTypes.string,
    age : propTypes.number,
    isStudent : propTypes.bool
}

export default student;
```
- Wrong prop type will not prevent the code from running. It will just give a warning in console.

### Default props -
- We can pass props, add them to the JSX, just like we would with HTML attributes.

**Old way of setting default -**
```js
import propTypes from "prop-types";

function student(props) {
    return (
        <div className="studentCard">
            <p>Name: {props.name}</p>
            <p>Age : {props.age}</p>
            <p>{props.isStudent? "He is a student" : "He is not a student"}</p>
        </div>
    );
}

student.defaultProps = {
    name : "Student",
    age : "Null"
}

export default student;
```

**New way of declairing default -**
```js
// we just destructured the props obj to {url, size}
export default function ProfileImg({url = "https://picsum.photos/200/300", size = 100}){
    return (
        <img src={url} alt="profile picture" height={size} width={size} />
    )
}
```

## Conditional rendering
 - We can conditionally render JSX using JavaScript syntax like `if` statements,` &&, and ? :` operators.

 ### Using if else
 ```js
 function UserGreeting ({username = "User", isLogedIn = false}){
    if (isLogedIn){
        return (
            <h1>Hi🙏, {username}.</h1>
        )
    }
    else{
        return (
            <h1>Please log in {username} 🙏.</h1>
        )
    }
}
 ```

 ```js
    <UserGreeting username="Manik" isLogedIn = {false}/> //output - Please log in Manik 🙏.
    <UserGreeting  isLogedIn = {true}/> // Hi🙏, User.

 ```

### using ternary operator
```js
return (
        isLogedIn ? <h1>Hi, {username}.</h1> : <h1>Please log in.</h1>
    )
```

**We can make the code more readable by storing the elements in a constant like this** 
```js
const welcomeEle =  <h1 className="user-message">Hi, {username}.</h1>;
    const logInEle = <h1 className="login-message">Please log in.</h1>;
    
    return (
        isLogedIn ? welcomeEle : logInEle
    );
```