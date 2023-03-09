import dbConnect from "../../../lib/dbConnection";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
  }
  if (method === "POST") {
  }
  if (method === "DELETE") {
  }
}
