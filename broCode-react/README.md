# Bro-Code Learning ReactJS

[Video Link](https://youtu.be/CgkZ7MvWUAA?si=S6yKIIdnOrdAkXYc)

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

## Adding css style to element i reactjs
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

