// TODO

const { useState } = React;

const GroceryListItem = (props) => {

  const [isDone, setIsDone] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);
  }

  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    fontWeight: isHover ? 'bold' : 'normal'
  };


return (
  <li style={style} onClick={() => setIsDone(!isDone)}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >

    {props.grocery}</li>
);
};



const GroceryList = (props) => (
  <ul>
    {props.grocerys.map((grocery) => (
      <GroceryListItem grocery={grocery} />
    ))}
  </ul>
);


const App = () => (
  // const [groceryList, setgroceryList] = React.setState(['milk', 'cookies'])
  <div>
      <h2>Grocery List</h2>
      <GroceryList grocerys={['milk', 'cookies']} />
    </div>

)

ReactDOM.render(<App />, document.getElementById("app"))