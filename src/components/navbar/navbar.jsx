const Nav= ()=>{
    return (
        <div className="flex font-semibold items-center justify-around p-2">
            <img src={"../../logo.svg"} />
            <p>Home</p>
            <p>About Us</p>
            <p>Product</p>
            <p>Pricing</p>
            <div className="flex items-center border-2 px-4 py-2 rounded-full">
                <input type="text" placeholder="Search" className="border-0 outline-0"/>
                <img src={"../../search.svg"} />
            </div>
            <button className="green text-white px-4 py-1 rounded-full">Login</button>
        </div>
    )
}
export default Nav