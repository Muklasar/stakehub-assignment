import { useState } from "react";
import "./App.css";

function App() {
  const [buyer, setBuyer] = useState([
    { qty: 10, price: 99 },
    { qty: 50, price: 98 },
    { qty: 70, price: 97 },
    { qty: 80, price: 96 },
    { qty: 10, price: 96 },
  ]);
  const [seller, setSeller] = useState([
    { qty: 10, price: 99 },
    { qty: 50, price: 98 },
    { qty: 70, price: 97 },
    { qty: 80, price: 96 },
    { qty: 10, price: 96 },
  ]);
  const [ordered, setOrdered] = useState([]);
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row mt-5 gap-5">
          <div className="col-lg-8 border border-rounded pt-3">
            <p>Pending Order</p>
            <div className="row">
              <div className="col-lg-6">
                <table class="table border border-rounded">
                  <thead>
                    <tr>
                      <th>Buyer Qty</th>
                      <th>Buyer Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buyer.map((item) => (
                      <tr>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6">
                <table class="table border border-rounded">
                  <thead>
                    <tr>
                      <th>Seller Qty</th>
                      <th>Seller Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seller.map((item) => (
                      <tr>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-3 border border-rounded pt-3">
            <p>Complete Order</p>
            <table class="table border border-rounded">
              <thead>
                <tr>
                  <th>Seller Qty</th>
                  <th>Seller Price</th>
                </tr>
              </thead>
              <tbody>
                {seller.map((item) => (
                  <tr>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
