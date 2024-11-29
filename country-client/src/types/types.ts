
export interface BorderCountry {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: string[] | null;
}

export interface PopulationCount {
    year: number;
    value: number;
}


export interface PopulationData {
    country: string;
    code: string;
    iso3: string;
    populationCounts: PopulationCount[];
}


export interface CountryInfo {
    borderCountries: BorderCountry[];
    populationData: PopulationData;
    flagUrl: string;
}