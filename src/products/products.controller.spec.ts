import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let productController: ProductsController;
  let productService: ProductsService;
  const productExample = [
    {
      id: 0,
      name: 'product_name',
      price: 15,
      user: 2,
    },
  ] as unknown as Product[];
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
    it('Must exist remove function', () => {
      expect(typeof productController.remove).toBe('function');
    });
    it('Must exist update function', () => {
      expect(typeof productController.update).toBe('function');
    });
  });

  it('should call findAll method', async () => {
    const result = new Promise<Product[]>((resolve) => resolve(productExample));
    const spy = jest.spyOn(productService, 'findAll').mockReturnValue(result);
    const response = await productController.findAll();
    expect(response).not.toBeNull();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
