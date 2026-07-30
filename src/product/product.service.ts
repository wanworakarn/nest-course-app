import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Product } from '../generated/prisma/client';
import { CreateProductDto } from '../generated/nestjs-dto/product/dto/create-product.dto';
import { UpdateProductDto } from '../generated/nestjs-dto/product/dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    return this.prismaService.product.create({
      data: createProductDto,
    });
  }

  findAll(take?: number, cursor?: number): Promise<Product[]> {
    return this.prismaService.product.findMany({
      take: take ?? 10,
      ...(cursor
        ? { skip: 1, cursor: { id: cursor } }
        : {}),
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    await this.findOne(id);
    return this.prismaService.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number): Promise<Product> {
    await this.findOne(id);
    return this.prismaService.product.delete({
      where: { id },
    });
  }
}
