import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('available')
  async getAvailableCountries() {
    return await this.countriesService.getAvailableCountries();
  }

  @Get(':countryCode/info')
  async getCountryInfo(@Param('countryCode') countryCode: string) {
    return await this.countriesService.getCountryInfo(countryCode);
  }
}
