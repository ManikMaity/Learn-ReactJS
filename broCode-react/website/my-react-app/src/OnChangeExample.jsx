import { useState } from "react";


function OnChangeExample (){

    let [name, setName] = useState("cake");
    let [quantity, setQuantity] = useState(0);
    let [comment , setComment] = useState("");
    let [payment, setPayment] = useState("COD");
    let [deliveryType, setDeliveryType] = useState("pickup");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }

   function onDeliveryTypeChange (e){
    setDeliveryType(e.target.value)
   }

    return (
        <div className="card">
            <div>
                <input value={name} onChange={handleNameChange}/>
                <input min={0} type="number" value={quantity} onChange={handleQuantityChange}/>
                <textarea placeholder="Enter your comment here..." onChange={handleCommentChange} cols="30" rows="10"></textarea>

                <select onChange={handlePaymentChange} name="" id="" value={payment}>
                    <option value="COD">COD</option>
                    <option value="ONLINE">ONLINE</option>
                    <option value="CARDS">CARDS</option>
                </select>
                <div>
                    <label htmlFor="pickup">Pickup</label>
                    <input type="radio" value="pickup" id="pickup" name="dType" onChange={onDeliveryTypeChange} checked = {deliveryType == "pickup"}/>
                    <label htmlFor="delivery">Delivery</label>
                    <input type="radio" value="delivery" id="delivery" name="dType" onChange={onDeliveryTypeChange} checked = {deliveryType == "delivery"}/>
                </div>
                <hr></hr>
                
            </div>
   

            <h2>Name: {name}</h2>
            <h2>Quantity: {quantity}</h2>
            <h2>Comment: {comment}</h2>
            <h2>Payment: {payment}</h2>
            <h2>DType: {deliveryType}</h2>
        </div>
    )

}

export default OnChangeExample;