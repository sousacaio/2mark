import { CartController } from './cart.controller';
import { CartService } from './cart.service';

describe('CartController', () => {
  let cartController: CartController;
  let cartService: CartService;

  beforeEach(async () => {
    cartService = new CartService();
    cartController = new CartController(cartService);
  });
  describe('Smoke tests', () => {
    it('Must exist create function', () => {
      expect(typeof cartController.create).toBe('function');
    });
    it('Must exist findAll function', () => {
      expect(typeof cartController.findAll).toBe('function');
    });
    it('Must exist patch function', () => {
      expect(typeof cartController.patch).toBe('function');
    });
    it('Must exist patch function', () => {
      expect(typeof cartController.remove).toBe('function');
    });
  });
});
