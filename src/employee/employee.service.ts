import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';
import { MerchantDto } from './employee.dto';
import { MerchantModel } from './employee.model';
import { Merchant } from './employee.schema';

@Injectable()
export class EmployeeService {

  constructor(@InjectModel(Merchant.name) private merchantModel: Model<Merchant>) { }

  async create(createMerchantDto: MerchantDto): Promise<MerchantModel> {
    console.log(createMerchantDto)
    const createdMerchant = await this.merchantModel.create({
      ...createMerchantDto
    })
    return createdMerchant as unknown as MerchantModel;
  }

  async getById(id: string): Promise<MerchantModel> {
    return await this.merchantModel.findById({
      _id: new Types.ObjectId(id)
    })
  }

  async findAll(): Promise<MerchantModel[]> {
    return await this.merchantModel.find({ isDeleted: false });
  }

  async update(id: string, data: MerchantDto): Promise<MerchantModel> {
    return await this.merchantModel.findByIdAndUpdate({ _id: new Types.ObjectId(id) }, { ...data }, { new: true })
  }

  async delete(id: string): Promise<MerchantModel> {
    return await this.merchantModel.findByIdAndUpdate({ _id: id }, { isDeleted: true });
  }


}