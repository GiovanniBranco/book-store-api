import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { BookController } from 'modules/book/book.controller';
import { BookService } from 'modules/book/book.service';

@Module({
  imports: [BookModule],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {}
