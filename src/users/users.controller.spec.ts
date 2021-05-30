import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let userController: UsersController;
  let userService: UsersService;
  const userExample = [
    {
      id: 0,
      name: 'valid_name',
      email: 'valid_email@mail.com.br',
      password: 'valid_password',
    },
    {
      id: 0,
      name: 'valid_name',
      email: 'valid_email@mail.com.br',
      password: 'valid_password',
    },
  ] as User[];
  const user = {
    id: 0,
    name: 'valid_name',
    email: 'valid_email@mail.com.br',
    password: 'valid_password',
  } as User;

  beforeEach(async () => {
    userService = new UsersService();
    userController = new UsersController(userService);
  });
  describe('Smoke tests', () => {
    it('Must exist create function', () => {
      expect(typeof userController.create).toBe('function');
    });
    it('Must exist findAll function', () => {
      expect(typeof userController.findAll).toBe('function');
    });
    it('Must exist findOne function', () => {
      expect(typeof userController.findOne).toBe('function');
    });
  });
  it('should call findAll method', async () => {
    const result = new Promise<User[]>((resolve) => resolve(userExample));
    const spy = jest.spyOn(userService, 'findAll').mockReturnValue(result);
    const response = await userController.findAll();
    expect(response).not.toBeNull();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should call findOne method', async () => {
    const spy = jest
      .spyOn(userService, 'findOne')
      .mockReturnValue(new Promise<User>((resolve) => resolve(user)));
    const response = await userController.findOne(0);
    expect(response).not.toBeNull();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(0);
  });
});
