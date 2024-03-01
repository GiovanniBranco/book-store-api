import { CreateBookDto } from '../ports/createBookDto';
export abstract class CreateBookUseCase {
  abstract create(createBookDto: CreateBookDto): Promise<CreateBookDto>;
}
