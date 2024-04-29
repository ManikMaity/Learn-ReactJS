# Bro-Code Learning ReactJS

[Video Link](https://youtu.be/CgkZ7MvWUAA?si=S6yKIIdnOrdAkXYc)

## Points 
- React works in jsx means javascript xml.
- React works in components.
- React components helps in quik rearrenge of website and solving repeatation of element


## How to set up react 
1. In terminal run npm ` npm create vite@latest`.
2. then project name and react and js.
3. `cd project-folder` and run `npm install`.
4. Then run `npm run dev` to open server.


## Folder structure 
1. node modules contain all the dependacies our prooject have.
2. `public` folder contain all public assets.
3. `src` folder is the folder we will mostly use.
4. inside `src` `main.jsx` is the main js of our project. and `app.jsx` is a component.
5. `index.html` is main html of our project.
6. `package.json` file contains metadata about our project.



## Components 
1. Components are the building bloks of proects.
2. We can build components by making a new `componetsName.jsx` within src.
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
3. Now we can import header component within other component or our main `App.jsx` componet like this -
```js
import Header from "./header.jsx";

function App() {
  return(
    <Header></Header>
  )
}

export default App

```
4. One conponet func can only return one html element but we can add multiple clild element.
5. We can write header like this also (shorthand) -
```js 
<Header/>
```

6. Because jsx fucntion only return one componet so, it will give error if we try to return two component.
7. To solve this we can use jsx fragments(<>...</>) like this - 
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
8. If we wnat to add js in componet return statement we use `{code}` like this -
```js
return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Manik Maity</p>
        </footer>
    )
``` 

9. Ouside return we can use js as usual like this - 
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

10. We can use `className=""` to set classes in element inside  return. Bcause `class` is a reserve name.
```js
return (
        <div className="card">
            <img alt="Profile Picture" src={profilePic}></img>
            <h2>Mnaik Maity</h2>
            <p>B.com (H) | I like development</p>
        </div>
    )
```


11. To use assets form `assets` folder we have to import that asset.
```js
import profilePic from "./assets/manik-maity.jpeg"
```
------------------------------------------

## Adding css style to element i reactjs
- External
- Internal
- Inline

### 1. External
- We can add style to a element in our `index.css` file.
- External stylesheet is mostly used to set global style.
- But is not efficient in large web app for naming and hard to maintain.
```css
.btn{
  padding: 7px 20px;
  background-color: rgb(103, 192, 247);
  color: white;
  border: none;
````

### 2. Module
- In this will create a dedicated css stylesheet specific to a component.
- We will create a dedicated file incide src for the component like `Button`.
- Make/Move the .jsx component like- `button.jsx` inside that folder.
- Inside the folder ex - `Button` we will make a stylesheet for the componed like named like `button.module.css`.
- Write the styling like - 
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
- And we have to add style classname from imported style to elenment className. like this
```js
<button className={style.btn}>Click me</button>
```

### 3. Inline
- Inline css is used inside the component .jsx file by creation a style obj.
- The use the style obj created in element style attribute.
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

