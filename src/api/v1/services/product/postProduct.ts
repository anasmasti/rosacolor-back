const postProduct = async (Product: any) => {
  return await Product.save();
};

export default postProduct;
