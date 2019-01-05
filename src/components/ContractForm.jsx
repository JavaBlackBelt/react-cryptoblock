import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class ContractForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group" horizontal>
            <label>Owner</label>
            <input
              type="text"
              ref="First Name"
              onChange={this.onChange}
              className="form-control"
            />
            <input
              type="text"
              ref="First Name"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default ContractForm;
