import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [buyer, setBuyer] = useState([
    { qty: 10, price: 99 },
    { qty: 50, price: 98 },
    { qty: 70, price: 97 },
    { qty: 80, price: 96 },
    { qty: 85, price: 95 },
    { qty: 23, price: 100 },
  ]);
  const [seller, setSeller] = useState([
    { qty: 70, price: 105 },
    { qty: 70, price: 104 },
    { qty: 150, price: 103 },
    { qty: 130, price: 102 },
    { qty: 20, price: 101 },
    { qty: 20, price: 100 },
  ]);
  const [item, setItem] = useState({
    qty: "",
    price: "",
    seleteValue: "",
  });
  const [ordered, setOrdered] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    calculation();
  }, [update]);

  const changeHanler = (e) => {
    const { name, value } = e.target;
    const parsedValue =
      name === "qty" || name === "price" ? parseFloat(value) : value;
    setItem({ ...item, [name]: parsedValue });
  };

  const calculation = () => {
    let arr = [];
    const matchingPrices = buyer.map((buyerItem) => {
      const sellerMatch = seller.find(
        (sellerItem) => sellerItem.price === buyerItem.price
      );
      sellerMatch && arr.push(sellerMatch);
    });
    setOrdered([...ordered, ...arr]);
    const updatedBuyer = buyer.filter(
      (buyerItem) =>
        !arr.find((matchedItem) => matchedItem.price === buyerItem.price)
    );
    const updatedSeller = seller.filter(
      (sellerItem) =>
        !arr.find((matchedItem) => matchedItem.price === sellerItem.price)
    );
    setBuyer(updatedBuyer);
    setSeller(updatedSeller);
    // console.log({ arr, buyer, seller, updatedBuyer, updatedSeller });
    console.log({ arr, buyer, seller });
  };
  const submitHanlder = (e) => {
    e.preventDefault();
    if (item.seleteValue == "" || item.value == "" || item.price == "") {
      toast.error("Please fill all the fileds");
      return;
    }
    if (item.seleteValue == "buyer") {
      delete item.seleteValue;
      setBuyer([...buyer, item]);
      setItem({
        qty: "",
        price: "",
        seleteValue: "",
      });
      setUpdate(!update);
      toast.success("Added Successfully");
    } else {
      delete item.seleteValue;
      setSeller([...seller, item]);
      setItem({
        qty: "",
        price: "",
        seleteValue: "",
      });
      setUpdate(!update);
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Stakehub Infotech
          </a>
          <a className="navbar-brand" href="#">
            Muklasar Rahaman (ph: 7278993253)
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row mt-5 gap-5">
          {/* pending complete start */}
          <div className="col-lg-5 border border-rounded pt-3">
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
                    {buyer.reverse().map((item, index) => (
                      <tr key={index}>
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
                    {seller.reverse().map((item, index) => (
                      <tr key={index}>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* pending complete start */}
          {/* form start */}
          <div className="col-lg-2 border border-rounded pt-3 pb-2">
            <p>Form</p>
            <form onSubmit={submitHanlder}>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={changeHanler}
                name="seleteValue"
                value={item.seleteValue}
              >
                <option value="" selected disabled>
                  Please Select
                </option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              <div className="mb-3 mt-3">
                <label for="exampleInputEmail1" className="form-label">
                  Qty
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="qty"
                  value={item.qty}
                  onChange={changeHanler}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="price"
                  value={item.price}
                  onChange={changeHanler}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ outline: "none" }}
              >
                Add
              </button>
            </form>
          </div>
          {/* form end */}
          {/* order complete start */}
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
                {ordered.map((item, index) => (
                  <tr key={index}>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* order complete end */}
        </div>
      </div>
    </div>
  );
}

export default App;
