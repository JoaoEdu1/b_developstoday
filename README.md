# Country API

## Description

This API provides information about countries, including available countries, detailed information about specific countries, and population data. It uses data from external APIs for country details and population statistics.

## Tech Stack

- **Backend:** Nest.js
- **HTTP Client:** Axios

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/country-api.git
   cd country-api
   ```
2. **Install Dependencies**

  Install the required Node.js packages using npm:

  ```bash
    npm install
  ```
Or using yarn:

  ```bash
    yarn install
  ```
Usage
Start the Server

Run the Nest.js server:

   ```bash
      npm run start
   ```

The server will be available at http://localhost:3000.

3. **Endpoints**

Get Available Countries

Endpoint: GET /country/available

Returns a list of available countries.

Get Country Info

Endpoint: GET /country/info/:countryCode
