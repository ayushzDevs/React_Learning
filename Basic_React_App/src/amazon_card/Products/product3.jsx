import Price from "./price"
import Description from "./Description"

function Product3({ item, textColor }) {
    const options = ["Wireless Mouse 2.4ghz", "optical orientation"]

    return (
        <div className="Product3">
            <h2 style={{ color: textColor }}>item : {item}</h2>
            <Description items={options} />
            <Price amount={1500} />
        </div>
    )
}

export default Product3;