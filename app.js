var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'none'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['Apples', 'Oranges', 'Bananas']} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
