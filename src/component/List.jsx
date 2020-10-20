import React, { Component } from "react";
import  Input  from "./Input";
import  Item  from "./Item";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
                {
          value: "This is frustrating",
        },
      ],
    };
  }

  handleClick(value) {
    let newState = {
      items: [...this.state.items],
    };
    newState.items.push({ value });

    this.setState(newState);
    console.log(value);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 py-2">
            <Input
              onClick={(value) => {
                this.handleClick(value);
              }}
            />
          </div>
        </div>
        <div className="row">
          {this.state.items.map((item, index) => {
            return (
              <div key={index} className="col-12 py-2">
                <Item value={item.value} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;