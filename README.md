# Using Next.js with PlanetScale and Prisma

> Important update: This talk contains an outdated workflow of using `prisma migrate dev` with a shadow branch to update your database schema. We now recommend using `prisma db push` with no shadow branches. See the documentation on how to do migrations to your schema here: 

This repo corresponds to the "Databases as Code with PlanetScale and Prisma" talk from Next.js Conf 2021.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

In the demo from the talk, we created and edited an [API route](https://nextjs.org/docs/api-routes/introduction), [http://localhost:3000/api/stars](http://localhost:3000/api/stars). This endpoint can be edited in `pages/api/stars.js`. The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Set up

Below are the steps I went through in the talk during Next.js Conf. You will likely find the talk to include a few more details around each step. I have created the following steps to give a brief idea for what is needed to go to production. 

> Prerequisite: You need to have the [Prisma](https://www.prisma.io/docs/concepts/components/prisma-cli/installatio) and [PlanetScale](https://docs.planetscale.com/reference/planetscale-environment-setup) CLIs installed

1. In PlanetScale, create a `star-app` database
2. In your database's Settings page, check "Automatically copy migration data" and select "Prisma"
3. Create an `initial-setup` and `shadow` database branches from `main` branch
> Note: This talk contains an outdated workflow of using `prisma migrate dev` with a shadow branch to update your database schema. We now recommend using `prisma db push` with no shadow branches. See the documentation on how to do migrations to your schema here: 
4. Locally, run:
```
npx create-next-app@latest --use-npm
```
5. Once this is complete, run:
```cd star-app
npm install @prisma\client
```
6. To create the files needed to use Prisma, run:
```
npx prisma init
```
7. Edit the `prisma/schema.prisma` file: 
```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  shadowDatabaseUrl = env("SHADOW_DATABASE_URL")
  referentialIntegrity = "prisma"
}

generator client {
  provider = "prisma-client-js"
  previewFeatures = ["referentialIntegrity"]
}

model Star {
  id            Int       @default(autoincrement()) @id
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  name          String    @db.VarChar(255)
  consellation  String    @db.VarChar(255)
}
```
8. Edit the `.env` file: 
```
DATABASE_URL="mysql://root@127.0.0.1:3309/star-app"
SHADOW_DATABASE_URL="mysql://root@127.0.0.1:3310/star-app"
```
9. Next, we will use `pscale` CLI to locally proxy into our PlanetScale database. In a two different terminal tabs, run:
```
pscale connect star-app initial-setup --port 3309
```
```
pscale connect star-app shadow --port 3310
```
10. In a different terminal, run the following to create the initial data model and do your first Prisma migrate:
```
prisma migrate dev --name init
```
You will notice a `prisma/migrations` folder as well as the schema in your `initial-setup` branch in PlanetScale.
11. Create `lib/prisma.js` file:
```javascript
import { PrismaClient } from '@prisma/client'

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma
```
12. Create `pages/api/stars.js` file:
```javascript
import prisma from "../../lib/prisma";

export default async function assetHandler(req, res) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {   
                const stars = await prisma.star.findMany();
                res.status(200).json(stars);
            } catch(e) {
                console.error("Request error", e);
                res.status(500).json({ error: "Error fetching posts" });
            }
            break;
        default:
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
```
13. Add data using `npx prisma studio`, which will open a browser window. After you add data, then close Prisma Studio. You can also check to see that the data is in your `intial-setup` branch in PlanetScale.
14. Run: 
```npm run dev```
Navigate to http://localhost:3000/api/stars to see data returned from your API endpoint!
15. You are now ready to open a deploy request in PlanetScale. Once you have opened a deploy request and merged it into your main branch, you are now ready to deploy to Vercel! Remember to add data again to your `main` database branch; otherwise, your API route will return no data. 

## Deploy on Vercel

> Warning: You need to make sure to follow the steps from the "Databases as Code with PlanetScale and Prisma" talk at Next.js Conf before deploying to Vercel. 

Deploy this application quickly to Vercel using the following Deploy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fplanetscale%2Fnextjs-conf-2021&env=DATABASE_URL&envDescription=Create%20a%20new%20Password%20in%20PlanetScale%20and%20get%20the%20Prisma%20URL.%20Example%3A%20mysql%3A%2F%2F%5Busername%5D%3A%5Bpassword%5D%40%5Bhost%5D%2Fstar-app%3Fsslaccept%3Dstrict&envLink=https%3A%2F%2Fdocs.planetscale.com%2Fconcepts%2Fconnection-strings)

In order to connect your database to your application deployed in Vercel, you will need to set the `DATABASE_URL` variable. This URL is how your Vercel application is able to securely connect to PlanetScale. The URL is in the following format: `mysql://[username]:[password]@[host]/star-app?sslaccept=strict`

You can create a password in PlanetScale and generate this URL in the Connect modal in the database branch of your choice, select "Prisma" to get the Prisma specific URL: 

![Connect modal in PlanetScale app showing passwords](https://cdn.sanity.io/images/f1avhira/production/ecc1910dce37410254a169060a35538976a1fdf5-1624x1298.png)

> Note: If you see a 404 page after your build is successful, go into your app's Vercel Settings > General > Build & Development Settings and make sure that Next.js is the selected framework.
