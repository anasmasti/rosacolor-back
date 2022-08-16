const getProductBySlug = async (slug: string, Product: any) => {
    return await Product.find(
         { slug: slug }
      );
  };
  
export default getProductBySlug;
  