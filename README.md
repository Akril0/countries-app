# Country app

Country App is a web application that allows users to view
information about countries using data from an external API. The
app consists of two main parts: the frontend, which displays data
to the user, and the backend, which provides the data through a
RESTful API.

## Key Features:

- **List of Available Countries**: The application allows users
  to view
  a list of countries. This list is fetched from the server and
  displayed on the homepage. Each country is represented by its
  name and country code (e.g., "Ukraine" with the code "UA").

- **Detailed Country Information**: Users can view more detailed
  information about a country by selecting it from the list. The
  app makes a request to the API to get data about the country,
  such as the official name, population, neighboring countries,
  and
  other key characteristics.

## Installation

### 1. Clone the repository

Clone the project to your local machine:

```bash
git clone https://github.com/Akril0/countries-app.git
```

# Country API - NestJS

This is a backend service built with **NestJS** that provides
information about countries. It exposes two main API endpoints to
fetch available countries and detailed information about a
specific country.

## Features

- **Get Available Countries**: Returns a list of available
  countries.
- **Get Country Info**: Retrieves detailed information about a
  specific country, including its border countries and population
  data.

## Project Setup

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** (or **yarn**)

### Installation

1. #### Go to the project directory:

   ```bash
   cd your-project-name
   ```

2. #### Install the dependencies:

   ```bash
   npm install
   ```

### Environment Variables

To run the application, make sure to create a `.env` file in the
root of your project with the following environment variables:

```env
COUNTRY_INFO_API_URL=https://date.nager.at/api/v3
POPULATION_API_URL=https://countriesnow.space/api/v0.1/countries
PORT=3005
```

### Running the Application

1. #### Development Mode

   To start the application in development mode, use:

   ```bash
   npm run start:dev
   ```

   This will start the NestJS server with hot reloading for code
   changes.

2. #### Production Mode

   To build and start the application in production mode:

   ```bash
   npm run build
   npm run start:prod
   ```

## API Endpoints

### 1. Get Available Countries

**Route:** `GET /countries/available`

**Description:** Retrieves a list of available countries.

**Response:**

```json
[
  {
    "name": "Ukraine",
    "countryCode": "UA"
  },
  {
    "name": "United States",
    "countryCode": "US"
  }
]
```

### 2. Get Country Info

**Route:** `GET /countries/:countryCode/info`

**Description:** Retrieves detailed information about a specific
country by its `countryCode`.

**Response:**

```json
{
  "name": "Ukraine",
  "officialName": "Ukraine",
  "populationData": {
    ...
  },
  "borderCountries": [
    {
      "name": "Russia",
      "countryCode": "RU"
    }
  ]
}
```

## Folder Structure

- `src/` - Contains the source code for the application.
- `app.module.ts` - Main application module.
- `countries/` - Contains countries-related services,
  controllers, and DTOs.
  - `countries.controller.ts` - Defines the routes for
    available countries and country information.
  - `countries.service.ts` - Contains the business logic for
    fetching country data.
- `main.ts` - Entry point for the application.

# Frontend - Country List Application

This project is a frontend application built with **Next.js** and
**TailwindCSS**, which fetches and displays country data from the
backend API.

## Prerequisites

- **Node.js** (v16.8 or higher)
- **npm** (or **yarn**)

## Installation

## Troubleshooting

- **Backend API Issues**:
  If you encounter issues with the backend API, ensure that:

  1. The backend server is running. You can check this by
     navigating to the backend API URL (e.g.,
     `http://localhost:3005/countries/available`) directly in
     your browser or using an API client like Postman.
  2. The `.env.local` file is correctly set up with the API
     URL:

  ```env
  NEXT_PUBLIC_API_URL=http://localhost:3005
  ```

- **TailwindCSS Setup**:
  If TailwindCSS isn't working as expected:

  1. Ensure that `tailwind.config.js` is correctly configured
     to include your pages and components:

  ```javascript
  module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```

  2. Double-check that the `@tailwind` directives are present
     in `styles/globals.css`:

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- **API Errors**:
  - If you receive errors when fetching country data, make sure
    the backend API endpoints are accessible. For example:
    - `GET /countries/available` should return a list of
      available countries.
    - `GET /countries/:countryCode/info` should return
      detailed information about the specified country.

## License

This project is licensed under the **MIT License** - see
the [LICENSE](LICENSE) file for details.

## Folder Structure

The structure of the frontend project is as follows:

- **pages/**: Contains the pages for the application (e.g.,
  `index.tsx`, dynamic country pages).
- **components/**: Contains reusable UI components (e.g.,
  `CountryCard`, `PopulationChart`).
- **styles/**: Contains global CSS and TailwindCSS setup (
  `globals.css`).
- **utils/**: Contains utility functions like API calls (e.g.,
  `fetchCountries.ts`).

## Example Usage

### Fetching Available Countries

To fetch available countries from the backend API, you can use
Axios:

```tsx
import axios from 'axios';

const getCountries = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/countries/available`
  );
  return response.data;
};
```

## Displaying the Country List

The **CountryList** component fetches and displays a list of
available countries. Here's an example of how to implement it:

```tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/countries/available`
      );
      setCountries(response.data);
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Available Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.countryCode}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
```

## Displaying the Country List

The **CountryList** component fetches and displays a list of
available countries. Here's an example of how to implement it:

```
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryList = () => {
const [countries, setCountries] = useState([]);

useEffect(() => {
const fetchCountries = async () => {
const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/countries/available`);
setCountries(response.data);
};

    fetchCountries();
}, []);

return (
<div>
<h1>Available Countries</h1>
<ul>
{countries.map((country) => (
<li key={country.countryCode}>{country.name}</li>
))}
</ul>
</div>
);
};

export default CountryList;
```

In this example, the **CountryList** component:

- Fetches the list of available countries from the backend API
  using `axios` inside the `useEffect` hook.
- Stores the response data in the component's state (
  `countries`).
- Displays the list of countries in an unordered list (`<ul>`),
  where each country is shown as a list item (`<li>`).

---

## API Endpoints

Here are the key API endpoints for interacting with the backend:

### 1. Get Available Countries

- **Route**: `GET /countries/available`
- **Description**: Retrieves a list of available countries.
- **Response**:

```
[
{
"name": "Ukraine",
"countryCode": "UA"
},
{
"name": "United States",
"countryCode": "US"
}
]
```

### 2. Get Country Info

- **Route**: `GET /countries/:countryCode/info`
- **Description**: Retrieves detailed information about a
  specific country by its `countryCode`.
- **Response**:

```
{
"name": "Ukraine",
"officialName": "Ukraine",
"populationData": { ... },
"borderCountries": [
{
"name": "Russia",
"countryCode": "RU"
}
]
}
```

---

## Troubleshooting Tips

### Backend API Errors:

If you encounter issues with the backend API, make sure:

1. The backend server is running. You can check this by visiting
   `http://localhost:3005/countries/available` or using an API
   client like Postman.
2. The `.env.local` file has the correct API URL set:

```
NEXT_PUBLIC_API_URL=http://localhost:3005
```

### TailwindCSS Issues:

If TailwindCSS is not working as expected:

1. Ensure that your `tailwind.config.js` file is properly
   configured. The `content` array should include paths to your
   `pages/` and `components/` directories:

```
module.exports = {
content: [
'./pages/**/*.{js,ts,jsx,tsx}',
'./components/**/*.{js,ts,jsx,tsx}',
],
theme: {
extend: {},
},
plugins: [],
};
```

2. Check that the `@tailwind` directives are included in your
   `styles/globals.css` file:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### General Issues:

If you face any other issues:

- Make sure that your dependencies are installed correctly by
  running `npm install` or `yarn install`.
- If something isn't working as expected, you can open an issue
  on GitHub, or reach out for further support.

---

## License

This project is licensed under the **MIT License** - see
the [LICENSE](LICENSE) file for details.

---

## Folder Structure

The frontend project follows a typical Next.js folder structure:

- **`pages/`**: Contains the pages for the application (e.g.,
  `index.tsx`, dynamic country pages).
- **`components/`**: Contains reusable UI components (e.g.,
  `CountryCard`, `PopulationChart`).
- **`styles/`**: Contains global CSS and TailwindCSS setup (
  `globals.css`).
- **`utils/`**: Contains utility functions like API calls (e.g.,
  `fetchCountries.ts`).

---

## Example Usage

Here’s an example of how to fetch and display a list of
countries:

### Fetching Available Countries

```
import axios from 'axios';

const getCountries = async () => {
const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/countries/available`);
return response.data;
};
```

This function uses `axios` to fetch the list of available
countries from the backend API.

### Displaying the Country List

The `CountryList` component displays the countries returned from
the API:

```
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryList = () => {
const [countries, setCountries] = useState([]);

useEffect(() => {
const fetchCountries = async () => {
const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/countries/available`);
setCountries(response.data);
};

    fetchCountries();
}, []);

return (
<div>
<h1>Available Countries</h1>
<ul>
{countries.map((country) => (
<li key={country.countryCode}>{country.name}</li>
))}
</ul>
</div>
);
};

export default CountryList;
```

This component:

- Makes an API request to fetch the list of countries.
- Displays each country's name in a list.

---

### Conclusion

By following the instructions above, you should be able to set up
the project, install the required dependencies, configure
TailwindCSS, and interact with the backend API. If you have any
issues, the troubleshooting section should guide you through
common problems.

Feel free to reach out for assistance or open an issue if you
encounter any difficulties.

---

Happy coding! 🚀
