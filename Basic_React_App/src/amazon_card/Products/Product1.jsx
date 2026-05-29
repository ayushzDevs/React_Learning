import Price from "./price"
import Description from "./Description"

function Product1({ item, textColor }) {
    const options = ["8000 DPI", "5 Programmable Buttons"]

    return (
        <div className="Product1">
            <h2 style={{ color: textColor }}>item : {item}</h2>
            <Description items={options} />
            <Price amount={1100} />
        </div>
    )
}

export default Product1;