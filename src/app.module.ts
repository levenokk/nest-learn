import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductionService } from './production/production.service';
import { ProductionModule } from './production/production.module';

@Module({
  imports: [ProductionModule],
  controllers: [AppController],
  providers: [AppService, ProductionService],
})
export class AppModule {}
