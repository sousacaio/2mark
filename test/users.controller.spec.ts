import { UsersController } from '../src/users/users.controller';
import { UsersService } from '../src/users/users.service';

describe('UsersController', () => {
  let userController: UsersController;
  let userService: UsersService;

  beforeEach(async () => {
    userService = new UsersService();
    userController = new UsersController(userService);
  });

  it('Should throw an error when there are no correct values', async () => {
    it('should return an array of cats', async () => {
      const result = 'test';
      jest
        .spyOn(userService, 'findAll')
        .mockImplementation(() => Promise.reject(result));

      expect(await userController.findAll()).toBe(result);
    });
  });
});
