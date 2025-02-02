import ItemCard from "../item-card/item-card"
import ShipCard from "../ship-card/ship-card"

const Landing= ()=>{
 return (
    <div className="bg-mint-green">
      <div className="green text-white lg:flex lg:flex-row gap-24 px-20 py-24 flex flex-col-reverse" >
         <div className="md:flex md:flex-col md:align-center">
            <h1 className="text-[44px] font-semibold">Comfort and <span className="opacity-50">Style</span> for Your <span className="opacity-50">Sleep</span> Sanctuary </h1>
            <p className="mt-8 text-[20px]">Discover the perfect blend of softness and durability with our exquisite collection of bedsheets.</p>
            <button className="py-4 px-[120px] mx-auto mt-8 green-tx bg-white rounded-full font-bold">Get Started</button>
         </div>
         {/* <div className="lg:w-[100%] "> */}
         <img src="../../bed.svg"/>
         {/* </div> */}
      </div>
      <div className="lg:flex gap-8 p-8 justify-center hidden ">
         <ShipCard/>
         <ShipCard/>
         <ShipCard/>
         <ShipCard/>
      </div>
      <h2 className="font-bold text-[32px] ml-[78px] my-[20px] ">Similar Items You Might Like</h2>
      <div className="lg:flex lg:flex-row flex flex-col align-center lg:justify-center gap-8 lg:px-[80px] " >
         <ItemCard img='../../card1.svg' title={'Modern Bed'} detail={'Organic Cotton, fairtrades certified'}/>
         <ItemCard img='../../card2.svg' title={'Industrial Bed'} detail={'Organic Cotton, fairtrades certified'}/>
         <ItemCard img='../../card3.svg' title={'Rustic Bed'} detail={'Organic Cotton, fairtrades certified'}/>
         <ItemCard img='../../card4.svg' title={'Open-Frame Bed'} detail={'Organic Cotton, fairtrades certified'}/>
      </div>
      <h2 className="font-bold text-[32px] ml-[78px] my-[20px] text-center">Popular Collections</h2>
      <div className="lg:flex lg:flex-row flex flex-col gap-8 justify-center p-12">
         <div className="bg-[url('/collection1.svg')] w-[568px] h-[370px] ">
            <div className="flex align-center mt-[50%]">
               <button className="bg-main-green text-white mx-auto p-4 rounded-full">View Product</button>
            </div>
         </div>
         <div className="bg-[url('/collection2.svg')] w-[568px] h-[370px]">
            <div className="flex align-center mt-[50%]">
               <button className="bg-main-green text-white mx-auto p-4 rounded-full">View Product</button>
            </div>
         </div>
         <img className="lg:block hidden" src="../../arrow.svg"/>
      </div>
      <div className="bg-mint2">
         <div className="flex flex-col align-center">
            <h2 className="font-bold text-[32px] lg:ml-[78px] lg:my-[20px] text-center text-main-green">Shop by Category</h2>
            <div className="lg:flex lg:flex-row flex flex-col align-center gap-8 p-12">
               <div>
                  <img className="mx-auto" src="../../frame.svg"/>
                  <p className="text-center mt-4">Bed Frames</p>
               </div>
               <div>
                  <img className="mx-auto" src="../../pillows.svg"/>
                  <p className="text-center mt-4">Pillows</p>
               </div>
               <div>
                  <img className="mx-auto" src="../../linens.svg"/>
                  <p className="text-center mt-4">Bed Linens</p>
               </div>
            </div> 
         </div>
      </div>
      <div className="pt-20 px-8">
         <div className="bg-white">
            <div className="p-8 flex  justify-center align-center gap-8">
               <div>
                  <h2 className="font-bold text-[32px]">Join Our Newletter</h2>
                  <p>Exciting news for you! Now you can transform your sleep experience without worrying about shipping costs.</p>
               </div>
               <div className="flex  justify-center py-4">              
                   <button className="bg-main-green text-white mx-auto px-8 py-4 rounded-full">Subscribe</button>
               </div>
            </div>
         </div>
      </div>
    </div>
 )
}
export default Landing 