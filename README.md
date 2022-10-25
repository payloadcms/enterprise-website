This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that fetches data from [Payload CMS](https://payloadcms.com) using [GraphQL](https://graphql.org/).

This repo is was made explicitly for an episode of [Learn With Jason](https://www.learnwithjason.dev/) which includes a live, hands-on demo — follow along directly with [the episode here](https://www.learnwithjason.dev/build-a-scalable-design-system-for-enterprise-websites).

## Getting Started

### Payload CMS

First you'll need a running CMS. If you have not done so already, [clone the CMS repo](https://github.com/payloadcms/learn-with-jason-cms) and follow the setup instructions. Take note of your server URL, you'll need this in the next step.

### Next.js App

First, get your environment setup:

1. First copy the example `.env` file as your own:
   ```bash
     cp .env.example .env
   ```
1. Then open the `.env` file and paste your Payload server URL:
   ```bash
     NEXT_PUBLIC_CMS_URL=http://localhost:8000
   ```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying the documents within your CMS.

## Learn More

To learn more about PayloadCMS and Next.js, take a look at the following resources:

- [Payload CMS Documentation](https://payloadcms.com/docs) - learn about Payload CMS features and API.
- [Payload GraphQL Documentation](https://payloadcms.com/docs/graphql/overview) - Payload's GraphQL documentation.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Payload CMS GitHub repository](https://github.com/payloadcms/payload/) as well as [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Payload CMS deployment documentaton](https://payloadcms.com/docs/production/deployment) or the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
