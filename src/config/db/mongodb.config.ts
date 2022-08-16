import { connect } from "mongoose";

const mongoDbConnection = main()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function main() {
  await connect("mongodb://localhost:27017/rosa");
}

export default mongoDbConnection;
