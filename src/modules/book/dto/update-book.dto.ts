import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from '../application/ports/createBookDto';

export class UpdateBookDto extends PartialType(CreateBookDto) {}
