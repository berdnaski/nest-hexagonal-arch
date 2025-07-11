import { Test, TestingModule } from '@nestjs/testing';
import { ListsService } from './lists.service';
import { List } from './entities/list.entity';

const mockList = {
  create: jest
    .fn()
    .mockReturnValue(Promise.resolve(new List({name: 'my list'}))),
};

const mockHttpService = {
  post: jest.fn(),
};

describe('ListsService', () => {
  let service: ListsService;

  beforeEach(() => {
    service = new ListsService(mockList as any, mockHttpService as any);
  })

  it('deve criar uma list', async () => {
    const list = await service.create({
      name: 'my list',
      id: 0
    });
    console.log(list);
  });
});
