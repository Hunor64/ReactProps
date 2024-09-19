type ProductDetailsProps = {
    name: string,
    price: number,
    inStock: boolean,
}

const ProductDetails = ({product}:{product: ProductDetailsProps}) => {
  return (
    <div>
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>{product.inStock ? "In stock" : "Out of stock"}</p>
    </div>
  )
}

export default ProductDetails