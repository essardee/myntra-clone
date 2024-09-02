import { BagSum } from "./BagSum"
import { GrBackTen } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

export const Bag = () => {

  const dispatch = useDispatch()

  let ttl = 0;
  
  const bagList = useSelector(store => store.bag)

  return (
    <div className="BagMainDiv">
      <div className="BagDetails" style={{ flexGrow: 1 }} >
        { bagList.map( (item) => {
          ttl+= Math.floor(item.price*(1-item.discount/100));
          const handleRemove = () => {

            dispatch(bagActions.removeFromBag(item))
          }
          return (
            <div className="BagItem" key={item.id} >
              <img className="BagItemImg" src={item.img} />
              <div className="BagItemInfo" >
                <div className="BagItemName" >{item.product}</div>
                <div className="BagItemMake" >{item.company}</div>
                <div className="prices">
                    <span className="final">₹{Math.floor(item.price*(1-item.discount/100))} &nbsp;</span>
                    <span className="prev">₹{item.price}</span>
                    <span className="discount">&nbsp;&nbsp;{item.discount}% OFF&nbsp;</span>
                </div>
                <div className="ReturnPeriod" ><GrBackTen className="ReturnIcon" /> 10 days return available</div>
              </div>
              <button className="Remove" onClick={handleRemove} > <RxCross2 className="cross" /> </button>
            </div>
          )
        })}

      </div>
      <hr className="vhr" />
      <BagSum ttl={ttl} />
    </div>
  )
}