import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdcutModule } from './products/products.module';

@Module({
  imports: [ProdcutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
