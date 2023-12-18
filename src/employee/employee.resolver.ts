import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { MerchantDto } from './employee.dto';
import { Merchant } from './employee.schema';
import { EmployeeService } from './employee.service';
import { MerchantModel } from './employee.model';

@Resolver(() => MerchantModel)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) { }

  @Query(() => [MerchantModel])
  async employees(): Promise<MerchantModel[]> {
    return await this.employeeService.findAll();
  }

  @Mutation(() => MerchantModel)
  async createEmployee(@Args('input') input: MerchantDto): Promise<MerchantModel> {
    return await this.employeeService.create(input);
  }

  @Mutation(() => MerchantModel)
  async updateEmployee(@Args('id') id: string, @Args('input') input: MerchantDto): Promise<MerchantModel> {
    return await this.employeeService.update(id, input);
  }

  @Mutation(() => MerchantModel)
  async deleteEmployee(@Args('id') id: string): Promise<MerchantModel> {
    return await this.employeeService.delete(id);
  }
}