import Card from './components/card/card';

const getAllProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {

  const products = await getAllProducts();

  return (
    <>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-16">
        {products.map((product: any) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </>
  )
}
