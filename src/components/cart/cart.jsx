import { useState } from "react"

export function Cart(){
    const [count, setCount] = useState(0)
    return (
        <div className="flex gap-12 p-12">
            <div className="flex flex-col gap-8 w-[843px] ">
                <img src="../../canopy.svg" />
                <div className="flex justify-between w-[843px] ">
                    <img src="../../bottom1.svg" />
                    <img src="../../bottom2.svg" />
                    <img src="../../bottom3.svg" />
                    <img src="../../bottom4.svg" />
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className="font-bold text-3xl">Contemporary Canopy Bed</h2>
                <p>It has a very thin frame and can be made from a variety of different materials to match your style. A contemporary canopy bed is the modern version of a canopy bed. It has a very thin frame and can be made from a variety of different materials to match your style. The style of this bed can work well in most bedrooms and can even add some height to the smallest rooms.</p>
                <hr/>
                <div>
                    <p className="text-2xl font-bold">$500.00 or 95.00/month</p>
                    <p>Suggested payments with 3 months special financing</p>
                </div>
                <hr/>
                <div className="flex gap-4 align-center">
                    <div className="bg-ragrey flex justify-between rounded-full p-2 w-[80px] font-bold">
                        <p onClick={()=>setCount(prev=>prev-1)}>-</p>
                        <p>{count}</p>
                        <p onClick={()=>setCount(prev=>prev+1)}>+</p>
                    </div>
                    <p>Only 18 items Left! Don’t miss it</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-main-green text-white  p-4 rounded-full">Buy Now</button>
                    <button className="bg-white text-main-green border-main-green border-[1px]  p-4 rounded-full">Add to Cart</button>
                </div>
                <hr/>
                <div>
                    <div className="flex gap-4 border-[1px] border-main-green p-2">
                        <img src="../../truck.svg"/>
                        <div>
                        <p className="font-bold text-lg">Free Delivery</p>
                        <p>Enter your postal code for Delivery Availability</p>
                        </div>
                        
                    </div>
                    <div className="flex gap-4 border-[1px] border-main-green p-2">
                        <img src="../../truck.svg"/>
                        <div>
                        <p className="font-bold text-lg">Return Delivery</p>
                        <p>Free 30 days Delivery Returns. Details</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}