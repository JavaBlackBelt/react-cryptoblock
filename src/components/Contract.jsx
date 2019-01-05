import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { Panel } from "react-bootstrap";
import { Table } from "react-bootstrap";
import ContractForm from "./ContractForm";

class Contract extends Component {
  render() {
    return (
      <div>
        <ContractForm />

        <Panel bsStyle="success">
          <Panel.Heading>
            <Panel.Title componentClass="h5" bsStyle="success">
              Latest Contract
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Table striped hove responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Owner</th>
                  <th>Amount</th>
                  <th>Corrency</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Gary M</td>
                  <td>12000</td>
                  <td>USD</td>
                  <td>6-Jan-2019</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Max Well</td>
                  <td>9000</td>
                  <td>USD</td>
                  <td>4-Jan-2019</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry Ford</td>
                  <td>3000</td>
                  <td>USD</td>
                  <td>2-Jan-2019</td>
                </tr>
              </tbody>
            </Table>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Contract;
