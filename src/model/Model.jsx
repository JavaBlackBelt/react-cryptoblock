import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import ContractForm from "../components/ContractForm";

class Model extends Component {
  render() {
    return (
      <div class="modal" id="contractModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">Please confirm!</h2>
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ContractForm />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Model;
