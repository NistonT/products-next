import { axiosClassic } from "@/api/interceptors";
import type { IProduct } from "@/shared/interface/product.interface";
import type { AxiosResponse } from "axios";

class Products {
  private BASE_URL = "/products";

  public getProducts(): Promise<AxiosResponse<IProduct[]>> {
    const response = axiosClassic.get<IProduct[]>(this.BASE_URL);
    return response;
  }
}

export const ProductsService = new Products();
