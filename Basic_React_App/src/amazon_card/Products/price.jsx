function Price({ amount }) {
    const isDiscounted = amount > 1000;

    return (
        <div className="product-card__price">
            <span className="product-card__price-label">Price</span>
            <span className="product-card__price-value">${amount}</span>
            {isDiscounted && (
                <span className="product-card__deal">Limited time deal</span>
            )}
        </div>
    )
}

export default Price;