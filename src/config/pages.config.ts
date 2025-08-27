class Pages {
  HOME = "/";
  PRODUCT_LIST = "/products";
  BASKET = "/basket";
  ABOUT_US = "/about";

  PRODUCT(product: string) {
    return `product/${product}`;
  }
}

export const PAGES = new Pages();
