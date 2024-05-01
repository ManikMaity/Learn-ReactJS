// eslint-disable-next-line react/prop-types
function List({arr = []}){
    // eslint-disable-next-line react/jsx-key
    const listItems = arr.map((text) => <li>{text}</li>);
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default List;



