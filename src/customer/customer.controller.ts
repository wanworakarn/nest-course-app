import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { PrismaService } from '../prisma.service';
import { Customer } from '../generated/prisma/client';
import { CreateCustomerDto } from '../generated/nestjs-dto/customer/dto/create-customer.dto';
import { UpdateCustomerDto } from '../generated/nestjs-dto/customer/dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async create(@Body() customerData: CreateCustomerDto): Promise<Customer> {
    return this.prismaService.customer.create({
      data: customerData,
    });
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.prismaService.customer.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Customer | null> {
    return this.prismaService.customer.findUnique({
      where: {
        id: Number(id)
      }
    });
  }

  @Get('byemail/:email')
  async findByEmail(@Param('email') email: string): Promise<Customer | null> {
    return this.prismaService.customer.findUnique({
      where: {
        email: email
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBody: UpdateCustomerDto) {
     return this.prismaService.customer.update({
       where: { id: Number(id)},
       data: updateBody
     });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
     return this.prismaService.customer.delete({
       where: { id: Number(id) }
     });
  }
}