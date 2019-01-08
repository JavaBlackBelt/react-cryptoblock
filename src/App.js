import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LiveChart from "./components/LiveChart";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Model from "./model/Model";
import logo from "./cryptoBlock.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: [],
      isloaded: false,
      show: false
    };
  }
  componentDidMount() {
    fetch("http://" + window.location.hostname + ":8086/contracts/")
      .then(res => res.json())
      .then(json => {
        this.setState({ isloaded: true, contracts: json });
      });
  }
  createContractForm() {
    console.log("Button Clicked");
  }
  addContract() {}

  deleteContract(id) {
    this.setState({
      contracts: this.state.contracts.filter(contracts => contracts.id !== id)
    });
  }
  updateContract() {}

  showModel = () => {
    this.setState = { ...this.state, show: !this.state.show };
  };

  render() {
    var { isloaded, contracts } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <table class="rwd-table">
          <tr>
            <td data-th="Market Analysis" position="relative" height="100%">
              <LiveChart />
            </td>
            <td data-th="Latest Contract" position="relative" height="100%">
              <contractStyle className="App-contract">
                <p>
                  Latest Contracts
                  <button
                    type="button"
                    class="btn btn-success"
                    data-toggle="modal"
                    data-target="#contractModal"
                  >
                    Create Contract
                  </button>
                </p>
              </contractStyle>
              <Table striped responsive>
                <rowStyle className="App-row">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Owner</th>
                      <th>Amount</th>
                      <th>Corrency</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                </rowStyle>
                <colStyle className="App-col">
                  <tbody responsive>
                    <ul>
                      {contracts.map(contract => (
                        <li key={contract.id}>
                          <tr>
                            <td>{contract.id}</td>
                            <td>
                              {contract.user.name} {contract.user.surname}
                            </td>
                            <td>{contract.amountInUsd}</td>
                            <td>{contract.currency}</td>
                            <td>{contract.date}</td>
                            <Button
                              bsStyle="danger"
                              bsSize="xsmall"
                              data-toggle="model"
                              data-target="#"
                              onClick={this.deleteContract.bind(
                                this,
                                contract.id
                              )}
                            >
                              Delete
                            </Button>
                          </tr>
                        </li>
                      ))}
                    </ul>
                  </tbody>
                </colStyle>
              </Table>
            </td>
          </tr>
        </table>
        <footer className="App-footer">
          <p>@Copyright Crypto Blocks 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
