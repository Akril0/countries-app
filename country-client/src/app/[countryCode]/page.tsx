import BorderCountries from '@/components/BorderCountries';
import PopulationChart from '@/components/PopulationChart';
import {CountryInfo} from "@/types/types";

async function fetchCountryInfo(countryCode: string):Promise<CountryInfo> {
    const resCountry = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${countryCode}/info`);

    return resCountry.json();
}

export default async function CountryPage({params,}:
                                              { params: Promise<{ countryCode: string }>; }) {
    const {countryCode} = await params;

    const countryInfo = await fetchCountryInfo(countryCode);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4 text-center">{countryInfo.populationData.country}</h1>
            <div className="flex justify-center items-center mb-6">
                <img src={countryInfo.flagUrl} alt={`${countryInfo.populationData.country} flag`} className="w-32 h-20 mr-4"/>
                <h2 className="text-2xl">Flag of {countryInfo.populationData.country}</h2>
            </div>

            <BorderCountries borders={countryInfo.borderCountries}/>

            <PopulationChart populationData={countryInfo.populationData.populationCounts}/>
        </div>
    );
}
