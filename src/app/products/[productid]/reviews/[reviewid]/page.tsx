import React from "react";

export default function ProductDetail({
  params,
}: {
  params: { 
    reviewid: string,
    productid: string,
};
}) {
  return (
    <div>
      <h1>Single Product Reviews Here {params.reviewid}</h1>
    </div>
  );
}
