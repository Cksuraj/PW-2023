import React from 'react';

function listIt(items) {
  const listItemElements = items.map((item) => (
    <li key={item}>{item}</li>
  ));
  return <ul style={{listStyle:'none'}}>{listItemElements}</ul>;
}

const List = ({ items }) => {
  return (
    <div style={{display:'flex', justifyContent:'center', textAlign:'start'}}>     
  <ul>
  {listIt(items)};
  </ul>
    </div>
  )
};

export default List;
