import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todos.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  private async throwErrorIfNoUser(id: string) {
    const isExist = await this.todoModel.exists({ _id: id });
    if (!isExist) {
      throw new NotFoundException();
    }
  }

  async create(createTodoDto: CreateTodoDto) {
    const createdTodo = await this.todoModel.create(createTodoDto);
    return createdTodo;
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string) {
    await this.throwErrorIfNoUser(id);
    return this.todoModel.findById(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    await this.throwErrorIfNoUser(id);
    await this.todoModel.findByIdAndUpdate(id, updateTodoDto);
    return updateTodoDto;
  }

  async remove(id: string) {
    await this.throwErrorIfNoUser(id);
    const deletedTodo = await this.todoModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deletedTodo;
  }
}
