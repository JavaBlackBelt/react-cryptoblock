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
              placeholder="First Name"
              onChange={this.onChange}
              className="form-control"
            />
            <input
              type="text"
              placeholder="SurName"
              onChange={this.onChange}
              className="form-control"
            />
            <label>Amount</label>
            <input
              type="text"
              placeholder="Amount in USD"
              onChange={this.onChange}
              className="form-control"
            />
            <label>Currency</label>
            <input
              type="text"
              placeholder="USD"
              onChange={this.onChange}
              className="form-control"
            />
            <label>Date</label>
            <input
              type="date"
              placeholder="Date"
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
