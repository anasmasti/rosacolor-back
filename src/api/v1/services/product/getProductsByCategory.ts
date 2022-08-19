import Product from "../../models/product";

const getProductByCategory = async (categoryId: any) => {
  return await Product.find({ category: categoryId }).populate(
    "category",
    "name -_id"
  );
};

export default getProductByCategory;
