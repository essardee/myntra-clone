export const BagSum = ({ttl}) => {
  return (
    <>
    <div className="BagSumDiv" >
      <h3 className="BagSumHead" >PRICE DETAILS</h3>
      <br />
      <div className="BagSubDiv" >
        <span className="BagSumDet" >Total MRP</span><span className="BagSumPri" >₹{ttl}</span>
      </div>
      <div className="BagSubDiv" >
        <span className="BagSumDet" >Discount on MRP</span><span className="BagSumPri Dis" >-₹2599</span>
      </div>
      <div className="BagSubDiv" >
        <span className="BagSumDet" >Convenience Fee</span><span className="BagSumPri" >₹100</span>
      </div>
      <hr className="hhr"/>
      <div className="BagSubDiv" >
        <span className="BagAmountTi" >Total Amount</span><span className="BagAmount" >₹{ttl-2499}</span>
      </div>
      <br />
      <button className="PlaceOrder" > PLACE ORDER </button>
    </div>
    </>
  )
}