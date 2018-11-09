import React, { Component } from "react";

class CreateLink extends Component {
  state = {
    description: "",
    url: ""
  };
  render() {
    const { description, url } = this.state;
    return (
      <div>
        <div classNmae="flex flex-column mt3">
          <input
            type="text"
            classNmae="mb2"
            onChange={e => this.setState({ description: e.target.value })}
            placeholder="A description for the link"
          />
          <input
            type="text"
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            placeholder="The URL for the link"
          />
        </div>
        <button onClick={`... something later`}>Submit</button>
      </div>
    );
  }
}

export default CreateLink;
