const ItemCard=({img, title, detail})=>{
    return (
        <div className="md:text-center max-w-[296px] mx-auto">
            <img src={img}/>
            <div className="p-2 flex flex-col gap-4">
            <p className="font-semibold text-[22px]">{title}</p>
            <p>{detail}</p>
            <button className="text-main-green border-[1px] rounded-full p-2 border-main-green">Buy Now</button>
            </div>
            
        </div>
    )
}
export default ItemCard