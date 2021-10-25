# Using Next.js with PlanetScale and Prisma

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

In the demo from the talk, we created and edited an [API route](https://nextjs.org/docs/api-routes/introduction), [http://localhost:3000/api/stars](http://localhost:3000/api/stars). This endpoint can be edited in `pages/api/stars.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

> Warning: You need to make sure to follow the steps from the "Databases as Code with PlanetScale and Prisma" talk at Next.js Conference 2021 before deploying to Vercel. 

Deploy this application quickly to Vercel using the following Deploy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fplanetscale%2Fnextjs-conf-2021&env=DATABASE_URL&envDescription=Create%20a%20new%20Password%20in%20PlanetScale%20and%20get%20the%20Prisma%20URL.%20Example%3A%20mysql%3A%2F%2F%5Busername%5D%3A%5Bpassword%5D%40%5Bhost%5D%2Fstar-app%3Fsslaccept%3Dstrict&envLink=https%3A%2F%2Fdocs.planetscale.com%2Fconcepts%2Fconnection-strings)

In order to connect your database to your application deployed in Vercel, you will need to set the `DATABASE_URL` variable. This URL is how your Vercel application is able to securely connect to PlanetScale. The URL is in the following format: `mysql://[username]:[password]@[host]/star-app?sslaccept=strict`

You can create a password in PlanetScale and generate this URL in the Connect modal in your database, select "Prisma" to get the Prisma specific URL: 

![Connect modal in PlanetScale app showing passwords](https://cdn.sanity.io/images/f1avhira/production/ecc1910dce37410254a169060a35538976a1fdf5-1624x1298.png)
