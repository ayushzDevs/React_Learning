function Description({ items }) {
    return (
        <div className="product-card__description">
            <p className="product-card__section-title">Description</p>
            <ul className="product-card__list">
                {items.map((item, index) => (
                    <li key={`${item}-${index}`}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Description;