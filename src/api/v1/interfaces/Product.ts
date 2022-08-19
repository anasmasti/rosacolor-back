import ICategory from "./Category";

export default interface IProduct {
  _id: string;
  title: string;
  description: string;
  slug: string;
  img: string,
  category : ICategory
}
