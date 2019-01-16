var GroceryList = (props) => (
  <ul>
    <GroceryListItem item={props.groceryItems[0]} />
    <GroceryListItem item={props.groceryItems[1]} />
    <GroceryListItem item={props.groceryItems[2]} />
  </ul>
);

var GroceryListItem = (props) => (
  <li>{props.item}</li>
);

var Apples = () => (
  <li>Apples</li>
);

var Oranges = () => (
  <li>Oranges</li>
);

ReactDOM.render(<GroceryList groceryItems={['Apples', 'Oranges', 'Bananas']} />, document.getElementById('app'));
