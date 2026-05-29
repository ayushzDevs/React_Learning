import Price from "./price"
import Description from "./Description"

function Product2({ item, textColor }) {
    const options = ["intuitive touch surface", "Designed for ipad pro"]

    return (
        <div className="Product2">
            <h2 style={{ color: textColor }}>item : {item}</h2>
            <Description items={options} />
            <Price amount={900} />
        </div>
    )
}

export default Product2;