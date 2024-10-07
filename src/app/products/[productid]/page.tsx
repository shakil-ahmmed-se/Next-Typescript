import React from 'react'

export default function ProductDetails({params}: {params: {productid: string}}) {
  return (
    <div>
      <h1>Product Details Pages {params.productid}</h1>
    </div>
  )
}
