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