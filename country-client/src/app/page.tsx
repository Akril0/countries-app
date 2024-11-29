import Link from "next/link";

interface Country {
    name: string;
    countryCode: string;
}


export default async function Home() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/available`);
    const countries = await res.json();

    console.log(countries);


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold text-center mb-6 text-blue-200">Country
                List</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {countries.map((country: Country) => (
                    <li
                        key={country.countryCode}
                        className="bg-gradient-to-r from-teal-300 via-green-300 to-blue-400 text-gray-800 rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg"
                    >
                        <Link
                            href={`/${country.countryCode}`}
                            className="block py-2 px-4 text-center font-medium text-lg hover:bg-opacity-80 transition duration-200"
                        >
                            {country.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
