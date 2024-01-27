import BlogDetail from '../../components/blogdetail';
import client from '../../config/contentful';

const fetchServices = async () => {
  let apiResp = await client.getEntries({ content_type: "blogs" })
  console.log("fetchServices------------------------------", apiResp.items[0].fields.description);
  return apiResp.items;
}

export default async function Page({ params }: { params: { slug: any } }) {
  const services = await fetchServices()
  // console.log("params: ",params.slug)
  // console.log("params services: ",services[0].fields.image.fields.file.url)
  const selectedCard = services.find((card:any) => card.fields.link === params.slug);

  return (
    <div>
      {selectedCard ? (
        <BlogDetail data={selectedCard} />
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}
