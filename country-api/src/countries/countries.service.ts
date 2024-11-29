import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CountriesService {
  private readonly countryInfoUrl: string;
  private readonly populationUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.countryInfoUrl = this.configService.get<string>(
      'COUNTRY_INFO_API_URL',
    );
    this.populationUrl = this.configService.get<string>('POPULATION_API_URL');
  }

  async getCountryInfo(countryCode: string) {
    try {
      const country = await this.getCountry(countryCode);

      const populationData = await this.getPopulationData(country.commonName);
      console.log(populationData);

      const flagData = await this.getFlagUrl(populationData.country);

      return {
        borderCountries: country.borders,
        populationData,
        flagUrl: flagData.flag,
      };
    } catch (error) {
      throw new Error('Error fetching country info: ' + error.message);
    }
  }

  private async getCountry(countryCode: string): Promise<any> {
    try {
      const response = await axios.get(
        `${this.countryInfoUrl}/CountryInfo/${countryCode}`,
      );
      return response.data;
    } catch (error) {
      throw new Error('Error fetching border countries: ' + error.message);
    }
  }

  private async getPopulationData(countryName: string): Promise<any> {
    try {
      const response = await axios.post(`${this.populationUrl}/population`, {
        country: countryName,
      });
      return response.data.data;
    } catch (error) {
      throw new Error('Error fetching population data: ' + error.message);
    }
  }

  private async getFlagUrl(countryCode: string): Promise<any> {
    try {
      const response = await axios.post(`${this.populationUrl}/flag/images`, {
        country: countryCode,
      });
      return response.data.data;
    } catch (error) {
      throw new Error('Error fetching flag URL: ' + error.message);
    }
  }

  async getAvailableCountries(): Promise<any> {
    try {
      const response = await axios.get(
        `${this.countryInfoUrl}/AvailableCountries`,
      );
      return response.data;
    } catch (error) {
      throw new Error('Error fetching available countries: ' + error.message);
    }
  }
}
