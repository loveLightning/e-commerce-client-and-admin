import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { PrismaService } from 'src/services/prisma/prisma.service'
import { CartModule } from '../cart/cart.module'
import { CartService } from '../cart/cart.service'

@Module({
  controllers: [OrderController],
  providers: [OrderService, PrismaService, CartService],
  imports: [CartModule],
})
export class OrderModule {}
