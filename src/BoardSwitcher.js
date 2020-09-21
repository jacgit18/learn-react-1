import React from "react";


class Board extends React.Component {
// the plus one for index is for users
// who arent aware of zero index
  render() {
    let className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return <div className={className}>{this.props.index + 1}</div>;
  }
}


class BoardSwitcher extends React.Component {
  state = {
    currSelected: 0,
  };

  handleToggle(event) {
    if (this.state.currSelected < this.props.numBoards - 1)
      this.setState({ currSelected: this.state.currSelected + 1 });
    else this.setState({ currSelected: 0 });
  }


// index and selected arent important words unlike key
// which is used to differentiate different boards
// when your using an array with the same elements
// you have to give a key
// in this situation the array is rendering the board class object
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.currSelected;
      boards.push(<Board index={ii} selected={isSelected} key={ii} />);
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={(e) => this.handleToggle(e)}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
