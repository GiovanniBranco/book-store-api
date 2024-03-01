import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './application/ports/createBookDto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'database/prismaService';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}
  prismaRepo = this.prisma.book;

  async create(createBookDto: CreateBookDto) {
    const bookExists = await this.prismaRepo.findFirst({
      where: {
        barCode: createBookDto.barCode,
      },
    });

    if (bookExists) throw new Error(`Book already exists`);

    await this.prisma.book.create({
      data: createBookDto,
    });

    return createBookDto;
  }

  findAll() {
    return `This action returns all book`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
