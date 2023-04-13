import { getStoredCart } from "../utils/fakeDB";

export const applyAndJobData = async () => {
  const productsData = await fetch("/jobData.json");
  const job = await productsData.json();


  const savedJob = getStoredCart();


  const initialJob = [];
  for (const id in savedJob) {
    const foundProduct = job.find((product) => product.id == id);

    if (foundProduct) {
      const quantity = savedJob[id];
      foundProduct.quantity = quantity;
      initialJob.push(foundProduct);
    }
    // console.log(initialJob);
  }
  return { job, initialJob };
};