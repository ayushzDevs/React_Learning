import "./Product.css"

function Product({item,price , features}){

    // const list = features.map((feature)=> <li>{feature}</li>)
    
    return(
        <div className="Product">

            <h3>item : {item}</h3>
            <h5>price : {price}</h5>
            <p>features : {features.map((feature)=> <li>{feature}</li>)}</p>
        
        
        
        </div>
    )
}

export default Product;