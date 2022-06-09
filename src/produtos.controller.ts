import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  getAll(): string {
    return 'All the products';
  }

  @Get(':id')
  getOne(@Param() param): string {
    return ` Product ${param.id}`;
  }

  @Post()
  createProduct(@Body() product) {
    console.log(product);
  }

  @Put()
  changeProduct(@Body() product) {
    console.log(product);
  }

  @Delete(':id')
  delete(@Param() param): string {
    return param.id;
  }
}
