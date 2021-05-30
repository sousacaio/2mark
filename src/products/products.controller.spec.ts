import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let productController: ProductsController;
  let productService: ProductsService;
  const productsExample = [
    {
      id: 0,
      name: 'product_name',
      price: 15,
      user: 2,
    },
  ] as unknown as Product[];

  const product = {
    id: 0,
    name: 'valid_name',
    price: 50,
  } as Product;
  beforeEach(async () => {
    productService = new ProductsService();
    productController = new ProductsController(productService);
  });
  describe('Smoke tests', () => {
    it('Must exist create function', () => {
      expect(typeof productController.create).toBe('function');
    });
    it('Must exist findAll function', () => {
      expect(typeof productController.findAll).toBe('function');
    });
    it('Must exist findOne function', () => {
      expect(typeof productController.findOne).toBe('function');
    });
  });

  it('should call findAll method', async () => {
    const result = new Promise<Product[]>((resolve) =>
      resolve(productsExample),
    );
    const spy = jest.spyOn(productService, 'findAll').mockReturnValue(result);
    const response = await productController.findAll();
    expect(response).not.toBeNull();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should call findOne method', async () => {
    const result = new Promise<Product>((resolve) => resolve(product));
    const spy = jest.spyOn(productService, 'findOne').mockReturnValue(result);
    const response = await productController.findOne(0);
    expect(response).not.toBeNull();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should call create method', async () => {
    const spy = jest
      .spyOn(productService, 'create')
      .mockReturnValue(new Promise((resolve) => resolve(product)));
    const response = await productController.create({
      name: 'valid_name',
      price: 15,
      user: 0,
    });
    expect(response).not.toBeNull();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
