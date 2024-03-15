
const Products = ({ product }) => {
    console.log(product)
    return (
        <div className=" w-2/3 pb-8">
            <div className="text-center items-center space-y-4"> 
                <div className="w-[200px] mx-auto">
                     <img className="" src={product.image} alt="" />
               </div>
                <h3 className="text-3xl font-bold">Title: {product.title}</h3>
                <p className="">Description: {product.description} </p>
                <p className="text-2xl font-medium">Price: {product.price} <span></span> $</p>
                <button className="btn">Add to cart</button>
            </div>
        </div>
    );
};

export default Products;