# Para + Reown Camp dApp

This is a minimal Next.js application that demonstrates how to integrate the Para SDK as a standalone connector in the Reown AppKit. It is configured to target a custom **Camp** EVM network.

## Setup

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Create a `.env.local` file in the project root and set the following environment variables:

   ```env
   NEXT_PUBLIC_PARA_API_KEY=your-para-api-key
   NEXT_PUBLIC_REOWN_PROJECT_ID=your-reown-project-id
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Navigate to `http://localhost:3000` in your browser. You should see a welcome message and a **Connect with Para** button. Clicking the button opens the Reown modal, allowing users to authenticate via Para on the Camp chain.

## Deployment

To deploy this application, push it to your version control system and deploy to a platform like Vercel or Netlify. Remember to configure the same environment variables (`NEXT_PUBLIC_PARA_API_KEY`, `NEXT_PUBLIC_REOWN_PROJECT_ID`) in your hosting platform.

## Customization

The Camp network is defined in `lib/chains.ts`. Adjust the chain ID, RPC URL, and explorer URL to match your Camp network configuration. Additional OAuth providers can be added in `pages/_app.tsx` by modifying the `oAuthMethods` array.