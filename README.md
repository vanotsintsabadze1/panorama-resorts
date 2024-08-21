
# Panorama Resorts

**A brief overview of the project**

This project serves as a hotel application, that would serve standalone hotels as their own custom application.

The application consists of variety of features, such as:

- User authentication with JWTs

    - Username-Password Database.
    - Google SSO.

- Room reservation features.
- Reservation management.
- Review functionality for the rooms.
- Integrated Paypal payment features.
- Admin panel to manage the rooms
    - Room creation and editing.
- Route Protection.

**Technologies used**
- NextJS.
- Typescript.
- Tailwind CSS.
- RESTful API.
- ASP.NET.
- MSSQL.
- Azure.

## How to run the project

**tl;dr** you won't be able to run the application, unless you have access to our testing backend service. Majority, if not everything is accessed and depended on backend, therefore if you're just interested in the design of this project, feel free to clone the repo and take a look.

### 1. Installing the packages
Go to your terminal and write `npm install`. It'll install all the packages.

### 2. Start by creating a `.env` file
Create a `.env` file in your directory and create a variable `API_ADDR`.\
Keep in mind that it's not a `NEXT_PUBLIC_API_ADDR`. It can not be accessed from client components and is only bound to the server-side. Therefore, **do not** mistake these two.

```
.env

API_ADDR=some-address // This is how your .env file should look like.
```

### 3. Enabling `--experimental-https` flag in your `package.json` file
It's a **must** to enable `--experimental-https` flag in your `package.json` file, since the Google SSO requires to redirect you to a site that has an SSL certificiate.\
In this case, we're going to be assigning one ourselves. (NextJS takes care of it by itself after enablign the flag).

```
package.json
  "scripts": {
    "dev": "next dev --experimental-https",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

### 4. Run the application
`npm run dev` - To run the application in development mode.\
`npm run build` - To build the application.\
`npm run start` - To run the application in production mode.

Created in collaboration with [@ShakaMirtskhulava](https://github.com/ShakaMirtskhulava)
