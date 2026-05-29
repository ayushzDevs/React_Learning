import "./Product.css"

// function Product({item,price , features}){

//     // const list = features.map((feature)=> <li>{feature}</li>)
//     // let isDiscount = price > 30000 ? "Discount of 5%": "";
//     return(
//         <div className="Product">
//             <h3>item : {item}</h3>
//             <h5>price : {price}</h5>
//             {/* <p>features : {features.map((feature)=> <li>{feature}</li>)}</p> */}
//             {/* {price > 30000 ? <p>Discount of 5%</p>: <a href="/">Get Discount</a>} */}
//             {price > 30000 && <p>Discount of 5%</p>}
//         </div>
//     )
// }



function Product({item,price , features}){
    let isDiscount = price > 30000;

    let styles = {backgroundColor: isDiscount?"black":null}

    return(
        <div className="Product" style={styles}>
            <h3>item : {item}</h3>
            <h5>price : {price}</h5>
            {isDiscount&& <p>Discount of 5%</p>}
        </div>
    )
}


export default Product;