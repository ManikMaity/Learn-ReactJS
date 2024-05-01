function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }


function FilteredList({array = [], filterItem = ""}){
    let filterdArray = array;
if (filterItem){
     filterdArray = array.filter(person => person.profession == filterItem);
}
    // eslint-disable-next-line react/jsx-key
    const listItems = filterdArray.map(person =>  <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>);

    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default FilteredList;