const ShipCard=()=>{
    return (
        <div className="bg-ship-green text-white flex gap-2 p-8">
        <img src="../../bus.svg"/>
        <div>
           <p className="font-bold">Free Shipping</p>
           <p>Delivered to your door.</p>
        </div>
     </div>
    )
}
export default ShipCard