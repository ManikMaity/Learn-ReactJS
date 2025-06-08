## React Memo, useMemo, useCallback

### memo

- memo in helps to memoize a component so that it would not re-render for unnecessary state changes.
- momo is a higher order component that takes a component as an argument and returns a memoized version of that component.

```tsx
import { useEffect, useState } from "react";
import "./App.css";
import MemozedCardContainer from "./components/CardsContainer";

export default function App() {
  useEffect(() => {
    console.log("App mounted");
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <MemozedCardContainer />
    </div>
  );
}
```

```tsx
import { memo, useEffect } from "react";
import Card from "./Card";

export default function CardContainer() {
  useEffect(() => {
    console.log("CardContainer mounted");
  });

  return (
    <div>
      <h1>Card Container</h1>
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <Card key={i} />
        ))}
    </div>
  );
}
```

- In this the CradCoontainer will re-render when the count changes although it doent use count.
- So, to prevent this we use memo.

```tsx
import { memo, useEffect } from "react";
import Card from "./Card";

function CardContainer() {
  useEffect(() => {
    console.log("CardContainer mounted");
  });

  return (
    <div>
      <h1>Card Container</h1>
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <Card key={i} />
        ))}
    </div>
  );
}

const MemozedCardContainer = memo(CardContainer);

export default MemozedCardContainer;
```

- Memoization is a way to cache the result of a function call. So, when the function is called again with the same arguments, it returns the cached result instead of recalculating the result. Ex. - loadash \_.memoize
- But in React, momoized component will still rerender if we change the props. If previouly the component with that prop.
- `React.memo` doesnt work when we pass a object as props. Because it compares shallowly.
- In that case we have to manually compare the props. inside memo.

```tsx
const MemozedCardContainer = memo(CardContainer, (prev, next) => {
  return prev.color.color === next.color.color;
});
```

### useMemo

- useMemo is a hook that returns a memoized value. It takes a function as an argument and returns a memoized value. The function is called only once and the result is cached for subsequent calls.

```tsx
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import MemozedCardContainer from "./components/CardsContainer";

export default function App() {
  useEffect(() => {
    console.log("App mounted");
  });

  const [count, setCount] = useState(0);
  const [changeColor, setChangeColor] = useState(false);

  const momoProps = useMemo(() => {
    return { color: changeColor ? "red" : "blue" };
  }, [changeColor]);

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => setChangeColor(!changeColor)}>Change Color</button>
      <MemozedCardContainer color={momoProps} />
    </div>
  );
}
```

- useMemo is good when we do a expensive operation and we want to memoize the result. And only do it when the state changes.
- Good when using with array or object.
- useMemo gives back exact obj instance not a copy of it.

```tsx
import React, { useState, useMemo } from "react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  // ...imagine hundreds more
];

function UserList() {
  const [search, setSearch] = useState("");

  // 🔍 useMemo to avoid filtering on every render unless `search` or `users` changes
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]); // Only recompute if `search` changes

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id} className="py-1">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### useCallback

- `useCallback` is a React hook that memoizes a function — it gives you the same function reference unless dependencies change.
- This is useful when:
  - You pass functions to child components (prevents unnecessary re-renders).
  - You want to avoid re-creating functions on every render.

```tsx
import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import MemozedCardContainer from "./components/CardsContainer";

export default function App() {
  useEffect(() => {
    console.log("App mounted");
  });

  const [count, setCount] = useState(0);
  const [changeColor, setChangeColor] = useState(false);

  const momoProps = useMemo(() => {
    return { color: changeColor ? "red" : "blue" };
  }, [changeColor]);

  function onCardContainerClick() {
    console.log("CardContainer clicked");
  }

  const onClickMemo = useCallback(onCardContainerClick, []);

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => setChangeColor(!changeColor)}>Change Color</button>
      <MemozedCardContainer
        color={momoProps}
        onCardContainerClick={onClickMemo}
      />
    </div>
  );
}
```
