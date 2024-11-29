import Link from 'next/link';
import {BorderCountry} from "@/types/types";


const BorderCountries = ({borders} : { borders: BorderCountry[] }) => {
    if (borders.length === 0) {
        return <p>No bordering countries.</p>;
    }

    return (
        <div className="mb-6">
            <h2 className="text-3xl font-semibold mb-4 text-blue-200">Bordering Countries</h2>
            <ul className="space-y-3">
                {borders.map((country, index) => (
                    <li key={index}
                        className="transition-all duration-300 ease-in-out transform hover:shadow-lg rounded-md">
                        <Link
                            href={`/${country.countryCode}`}
                            className="block w-max p-3 text-lg font-medium text-blue-500 hover:text-blue-700 hover:underline rounded-lg bg-blue-100 shadow-sm transition-all duration-200 ease-in-out transform hover:bg-blue-200"
                        >
                            {country.officialName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BorderCountries;
