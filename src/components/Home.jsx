import { useDispatch, useSelector } from "react-redux"
import star from "../assets/builder/star.png"
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchSlice";
import { useEffect } from "react";
import { bagActions } from "../store/bagSlice";

export const Home = () => {
  // Page Loader

  const fetchStatus = useSelector((store) => store.fetchStatus)

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchdone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('http://localhost:1310/items')
    .then(res => res.json())
    .then((store) => {
      dispatch(itemActions.initalize(store.items[0]));

    return

  } )
  }, [fetchStatus]);

  const itemList = useSelector((store) => store.items)

  return (
    <div key="items-c" className="items-c">
      {itemList.map((item) => {
        const handleAdd = () => {
          dispatch(bagActions.addToBag(item))
        }
        return (
          <div className="item" key={item.id}>
              <img src={item.img} className="item-img"/>
              <div className="itemdetails">
                  <div>
                      {item.rating} <img src={star} className="rstar"/> | {item.raters}
                  </div>
                  <div className="company-name">{item.company}</div>
                  <div className="product-name">{item.product}</div>
                  <div className="prices">
                      <span className="final">₹{Math.floor(item.price*(1-(item.discount/100)))} &nbsp;</span>
                      <span className="prev">₹{item.price}</span>
                      <span className="discount">&nbsp;&nbsp;{item.discount}% OFF&nbsp;</span>
                  </div>
                  <button className="adb" onClick={handleAdd} >Add to Bag </button>
              </div>                
          </div>
        )
    })}
    </div>
  )
}