# Doctor Listing App

This is a [Next.js 15](https://nextjs.org) project that uses MongoDB Atlas for database management. The application allows users to list and manage doctor profiles.

## Features

- Built with **Next.js 15**
- Uses **MongoDB Atlas** for database storage
- Seed script to populate the database with initial data
- Node.js v18 for server-side execution

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js v18**
- **NPM** (Node Package Manager)
- **MongoDB Atlas account**

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create an `.env.local` file and add your MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Seeding the Database

To add initial data to the database, run:

```bash
npm run seed
```

This executes the `scripts/seed.mjs` script, which populates MongoDB with sample data.


