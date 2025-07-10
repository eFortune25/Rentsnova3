# RentsNova - African Housing Marketplace

A modern, full-featured rental and housing management platform designed for African markets with global scalability. Built with Next.js, TypeScript, Prisma, and tailored for Cameroon's market.

## 🌍 Features

- **Multi-tenant Platform**: Landlords, tenants, agents, and admins
- **Bilingual Support**: English and French
- **African Market Focus**: 12 countries, 86+ cities pre-loaded
- **Mobile-First Design**: Optimized for smartphones and slow connections
- **Local Payments**: MTN Money, Orange Money integration
- **Secure Authentication**: Magic links, optional 2FA for admins
- **Property Management**: Listings, tours, applications, lease management
- **Real-time Messaging**: Secure in-app communication

## 🚀 Vercel Deployment Guide

### 1. Database Setup

**Option A: Vercel Postgres (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Create Vercel Postgres database
vercel postgres create rentsnova-db
```

**Option B: External PostgreSQL**
- Use Railway, Supabase, or AWS RDS
- Get your connection string

### 2. Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

**Required Variables:**
- `DATABASE_URL`: Your PostgreSQL connection string
- `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
- `NEXTAUTH_URL`: Your Vercel domain (e.g., https://rentsnova.vercel.app)
- `EMAIL_SERVER_*`: SMTP settings for magic link authentication

### 3. Database Migration

```bash
# Install dependencies
bun install

# Generate Prisma client
bunx prisma generate

# Push database schema (first time)
bunx prisma db push

# Seed with African countries and sample data
bun run src/lib/seed-data.ts
```

### 4. Deploy to Vercel

**Method 1: Vercel CLI**
```bash
vercel --prod
```

**Method 2: GitHub Integration**
1. Push code to GitHub
2. Connect repository in Vercel dashboard
3. Configure environment variables in Vercel dashboard
4. Deploy automatically

### 5. Post-Deployment Setup

1. **Add Environment Variables** in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add all variables from `.env.example`

2. **Configure Domain** (optional):
   - Add custom domain in Vercel dashboard
   - Update `NEXTAUTH_URL` environment variable

3. **Test Authentication**:
   - Try signing up with magic link
   - Verify email delivery works

## 🛠️ Local Development

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
# Edit .env with your local PostgreSQL database

# Set up database
bunx prisma generate
bunx prisma db push
bun run src/lib/seed-data.ts

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/ui/       # shadcn/ui components
├── lib/                 # Utilities and configurations
│   ├── countries-data.ts   # African countries/cities
│   ├── prisma.ts          # Database client
│   ├── seed-data.ts       # Database seeding
│   └── i18n.ts           # Internationalization
├── messages/            # Translation files
│   ├── en.json          # English translations
│   └── fr.json          # French translations
└── prisma/
    └── schema.prisma    # Database schema
```

## 🌐 Supported Countries

Pre-loaded with data for:
- Cameroon (🇨🇲) - Primary market
- Nigeria (🇳🇬)
- Kenya (🇰🇪)
- Ghana (🇬🇭)
- Senegal (🇸🇳)
- Ivory Coast (🇨🇮)
- Tanzania (🇹🇿)
- Uganda (🇺🇬)
- Rwanda (🇷🇼)
- Morocco (🇲🇦)
- Egypt (🇪🇬)
- South Africa (🇿🇦)

## 💳 Payment Integration

Supports African payment methods:
- **MTN Mobile Money** (Cameroon, Uganda, Rwanda)
- **Orange Money** (Cameroon, Senegal, Ivory Coast)
- **Bank Transfers**
- **Future**: M-Pesa (Kenya), Flutterwave, Paystack

## 🔐 Security Features

- **Magic Link Authentication** (passwordless)
- **Email Verification** required
- **Role-based Access Control**
- **Optional 2FA** for admin accounts
- **IP Whitelisting** for enhanced admin security
- **Secure Document Storage**
- **Fraud Protection System**

## 📱 Mobile Optimization

- **Responsive Design** for all screen sizes
- **Touch-optimized** interactions
- **Fast Loading** on slow connections
- **Offline Capabilities** (coming soon)
- **PWA Support** (planned)

## 🌍 Internationalization

- **English** (default)
- **French** (Francophone Africa)
- **Dynamic Language Switching**
- **Currency Localization** (FCFA, NGN, KES, etc.)

## 🚧 Development Roadmap

### Sprint 2: Authentication & User Management
- [ ] Magic link authentication
- [ ] User registration flows
- [ ] Email verification
- [ ] Role-based dashboards

### Sprint 3: Property Management
- [ ] Property CRUD operations
- [ ] Image/video uploads
- [ ] Advanced search & filtering

### Sprint 4: Tour & Application System
- [ ] Property tour requests
- [ ] Tenant application process
- [ ] Application status tracking

## 📞 Support

For deployment issues or questions:
- Check Vercel deployment logs
- Verify environment variables are set
- Ensure database connection is working
- Test email delivery in production

## 🚀 Built for Africa

RentsNova is specifically designed for African property markets with features like:
- Local payment methods integration
- Multi-currency support
- Slow connection optimization
- Bilingual interface
- Country-specific compliance
- African city/region data
