import React from "react";
import "./Earning.css";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Earning = () => {
  return (
    <div className="earning">
      <div className="d-flex flex-wrap headlist mb-4">
        <div className="ehead">
          <h1>Earnings</h1>
        </div>
        <div className="tleft">
          <h6>Learn more about this page</h6>
        </div>
      </div>
      <div className="row mb-5 pb-5 ">
        <div className="col-md-4">
          <div className="">
            <h5>Available funds</h5>
          </div>
          <div className="card h-87">
            <div className="card-body">
              <h6 className="card-title">
                Blance available for use <span className="q-mark">?</span>
              </h6>
              <h3 className="my-3">$16.00</h3>
              <div className="ant-b">
                <Button type="primary" block>
                  Bank transfer
                </Button>
                <Button type="primary" block>
                  Paypal
                </Button>
              </div>
              <Button type="primary" block>
                Withdraw balance
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <h5>
              Future payments <span className="q-mark">?</span>
            </h5>
          </div>
          <div className="card h-87">
            <div className="card-body">
              <div className="">
                <h6 className="card-title">
                  Paments being cleard <span className="q-mark">?</span>
                </h6>
                <h4 className="my-4">$0.00</h4>
              </div>
              <hr />
              <div>
                <div className="">
                  <h6 className="card-title my-2 pb5">
                    Paments for active order <span className="q-mark">?</span>
                  </h6>
                </div>
                <div className="">
                  <p className="come">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex d-space">
            <h5>
              Earning and expenses <span className="q-mark">?</span>
            </h5>
            <p>
              Since joining
              <DownOutlined />{" "}
            </p>
          </div>
          <div className="card h-87">
            <div className="card-body">
              <div className="">
                <h6 className="card-title">
                  Earning to date <span className="q-mark">?</span>
                </h6>
                <h4 className="my-2">$16.00</h4>
                <p className="pb-2">Your earnings since joining.</p>
              </div>
              <hr />
              <div>
                <div className="">
                  <h6 className="card-title my-2 ">
                    Expenses to date <span className="q-mark">?</span>
                  </h6>
                  <h4 className="my-3">$0.00</h4>
                </div>
                <div className="e-spent">
                  <p className="come">
                    Earning spent on purchases since joining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <div className="date-range">
          <button className="btn date">Date range</button>
        </div>
        <div className="activity">
          <button className="btn date">Activity</button>
        </div>
      </div>
      <div className="show-result">
        <h6 className="my-3 pb-5">
          {" "}
          Show result of <span> 1-1 of 1</span>
        </h6>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr className="">
              <th scope="col">Date</th>
              <th scope="col">Activity</th>
              <th scope="col">Description</th>
              <th scope="col">Form</th>
              <th scope="col">Order</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr">
              <td className="td" scope="row">10/09/2004</td>
              <td className="td">Earning</td>
              <td className="td">Order</td>
              <td className="td">Becomeun782</td>
              <td className="td" style={{textDecoration:"underline"}}>F0751A965884532</td>
              <td style={{color:"#00D1FF"}}>$16.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
      <div className="table2 flex-wrap">
       <div className="d-block">
        <h6>Date</h6>
        <p>10/09/2004</p>
       </div>
       <div className="d-block">
        <h6>Activity</h6>
        <p>Earning</p>
       </div>
       <div className="d-block">
        <h6>Description</h6>
        <p>Order	</p>
       </div>
       <div className="d-block">
        <h6>Form</h6>
        <p>Becomeun782</p>
       </div>
       <div className="d-block">
        <h6>Order</h6>
        <p style={{textDecoration:"underline"}}>F0751A965884532</p>
       </div>
       <div className="d-block">
        <h6>Amount</h6>
        <p  style={{color:"#00D1FF"}}>$16.00</p>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;
