import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountryService {
    readonly nagerApi = 'https://date.nager.at/api/v3';
    readonly countriesNowApi = 'https://countriesnow.space/api/v0.1/countries';

    async getAvailableCountries() {
        const response = await axios.get(`${this.nagerApi}/AvailableCountries`);
        return response.data;
    }

    async getCountryInfo(countryCode: string){
        const bordersResponse = await axios.get(`${this.nagerApi}/CountryInfo/${countryCode}`);
        
        const populationResponse = await axios.post(`${this.countriesNowApi}/population`, {
            country: bordersResponse.data.commonName,
        });

        const flagResponse = await axios.post(`${this.countriesNowApi}/flag/images`, {
            country: bordersResponse.data.commonName,
        });

        return {
            borders: bordersResponse.data.borders,
            population: populationResponse.data.data.populationCounts,
            flagUrl: flagResponse.data.data.flag,
        };
    }
}
