import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeResolver } from './employee.resolver';
import { MerchantSchema, Merchant } from './employee.schema';
import { EmployeeService } from './employee.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Merchant.name, schema: MerchantSchema }])],
  providers: [EmployeeResolver, EmployeeService],
})
export class EmployeeModule { }