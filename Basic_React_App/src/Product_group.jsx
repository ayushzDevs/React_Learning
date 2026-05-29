import Product from "./Product"


function Product_compo(){
    let options = ["hi-tech","durable","fast"]
    // let options = {a:"hi-tech",b:"durable",c:"fast"}
    // let options = [ <li>hi-tech</li> , <li>durable</li> , <li>fast</li>]

    return(
        <div>
            <Product item="phone" price="30k" features={options}/>
            {/* <Product item="laptop" price="70k" features={options}/>
            <Product item="tablet" price={40000} features={options}/> */}
            
        </div>
    )
}

export default Product_compo