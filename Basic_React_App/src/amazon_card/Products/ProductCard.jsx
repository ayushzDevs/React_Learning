import "./Product.css"
import Description from "./Description"
import Price from "./price"

function ProductCard({ item, textColor, options, price }) {
    return (
        <article className="product-card">
            <header className="product-card__header">
                <p className="product-card__eyebrow">Amazon Choice</p>
                <h2 className="product-card__title" style={{ color: textColor }}>
                    {item}
                </h2>
            </header>
            <Price amount={price} />
            <Description items={options} />
        </article>
    )
}

export default ProductCard;
