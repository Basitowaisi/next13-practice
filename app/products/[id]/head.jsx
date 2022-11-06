import { PRODUCTS_ENDPOINT } from "../../../utils/api"

const getSingleProduct = (id) =>
  fetch(`${PRODUCTS_ENDPOINT}/${id}`, {
    cache: "no-store",
    // next: {
    //   revalidate: 10,
    // },
  }).then((res) => res.json())

// dynamic head
export default async function Head({ params }) {
  const product = await getSingleProduct(params.id)

  return (
    <>
      <title>{product.title}</title>
      <meta name="description" content={product.description} />
    </>
  )
}
