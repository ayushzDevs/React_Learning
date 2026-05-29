import ProductCard from "./Products/ProductCard"

const products = [
    {
        id: 1,
        item: "Logitech Mouse",
        textColor: "cyan",
        options: ["8000 DPI", "5 Programmable Buttons"],
        price: 1100,
    },
    {
        id: 2,
        item: "Apple Pencil ( 2nd Gen)",
        textColor: "cyan",
        options: ["intuitive touch surface", "Designed for ipad pro"],
        price: 900,
    },
    {
        id: 3,
        item: "Portronics Mouse",
        textColor: "cyan",
        options: ["Wireless Mouse 2.4ghz", "optical orientation"],
        price: 1500,
    },
]

function ProductTab() {
    return (
        <>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    item={product.item}
                    textColor={product.textColor}
                    options={product.options}
                    price={product.price}
                />
            ))}
        </>
    )
}

export default ProductTab