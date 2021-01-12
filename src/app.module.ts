import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductionModule } from './production/production.module';

@Module({
  imports: [
    ProductionModule,
    MongooseModule.forRoot('mongodb://localhost:27017/api'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
