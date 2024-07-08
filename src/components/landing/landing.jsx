import ShipCard from "../ship-card/ship-card"

const Landing= ()=>{
 return (
    <div>
      <div className="green text-white flex gap-24 px-20 py-24" >
         <div>
            <h1 className="text-[44px] font-semibold">Comfort and <span className="opacity-50">Style</span> for Your <span className="opacity-50">Sleep</span> Sanctuary </h1>
            <p className="mt-8 text-[20px]">Discover the perfect blend of softness and durability with our exquisite collection of bedsheets.</p>
            <button className="py-4 px-[120px] mt-8 green-tx bg-white rounded-full font-bold">Get Started</button>
         </div>
         <div>
         <img src="../../bed.svg"/>
         </div>
      </div>
      <div className="flex gap-8 p-8 justify-center">
         <ShipCard/>
         <ShipCard/>
         <ShipCard/>
         <ShipCard/>
      </div>
      <h2 className="font-bold text-[32px] ml-[78px] my-[20px]">Similar Items You Might Like</h2>

    </div>
 )
}
export default Landing 