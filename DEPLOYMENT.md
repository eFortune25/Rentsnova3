# 🚀 RentsNova Vercel Deployment Guide

This guide will help you deploy RentsNova to Vercel with all necessary configurations.

## 📋 Prerequisites

Before deploying, ensure you have:

1. **GitHub Repository**: Code pushed to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Database**: PostgreSQL database (Vercel Postgres recommended)
4. **Email Service**: Resend API key (recommended) or SMTP credentials
5. **File Storage**: Cloudinary account for image uploads

## 🛠️ Step 1: Prepare Database

### Option A: Vercel Postgres (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Storage** tab
3. Click **Create Database** → **Postgres**
4. Name your database (e.g., `rentsnova-db`)
5. Select region closest to your users
6. Copy the connection strings provided

### Option B: External PostgreSQL

Use any PostgreSQL provider (Supabase, PlanetScale, AWS RDS, etc.)

## 🔧 Step 2: Deploy to Vercel

### Via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Import Project**
3. Connect your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Build Command**: `prisma generate && prisma db push && next build`
   - **Install Command**: `bun install`
   - **Root Directory**: `./` (if repo root)

### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd your-project-directory
vercel

# Follow the prompts
```

## 🔐 Step 3: Configure Environment Variables

In your Vercel project dashboard, go to **Settings** → **Environment Variables** and add:

### Required Variables

```bash
# Database
DATABASE_URL="postgresql://username:password@host:port/db?schema=public&sslmode=require"
DIRECT_URL="postgresql://username:password@host:port/db?schema=public&sslmode=require"

# Authentication
NEXTAUTH_SECRET="your-32-character-random-secret"
NEXTAUTH_URL="https://your-app.vercel.app"

# Email (Resend recommended)
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
EMAIL_FROM="noreply@your-domain.com"

# File Storage
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

### Generate Secure Values

```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32

# Generate ENCRYPTION_KEY
openssl rand -base64 32
```

### Optional Variables

```bash
# Payment Integration
MTN_MONEY_API_KEY="your-mtn-api-key"
ORANGE_MONEY_API_KEY="your-orange-api-key"

# Communications
TWILIO_ACCOUNT_SID="your-twilio-sid"
TWILIO_AUTH_TOKEN="your-twilio-token"

# Security
ENCRYPTION_KEY="your-32-character-encryption-key"
MAX_FAILED_LOGIN_ATTEMPTS=3
LOCKOUT_DURATION_MINUTES=30

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_VERCEL_ANALYTICS=true
```

## 🗄️ Step 4: Database Setup

After deployment, run database migrations:

### Option A: Via Vercel Functions

The app will automatically run `prisma db push` during build.

### Option B: Manual Setup

```bash
# Clone your repository locally
git clone https://github.com/your-username/rentsnova.git
cd rentsnova

# Install dependencies
bun install

# Set up local environment
cp .env.example .env.local
# Edit .env.local with your production database URL

# Run database migrations
bunx prisma generate
bunx prisma db push

# Seed initial data (optional)
bun run db:seed
```

## 🌐 Step 5: Configure Custom Domain (Optional)

1. In Vercel Dashboard → **Settings** → **Domains**
2. Add your custom domain
3. Configure DNS:
   - **Type**: CNAME
   - **Name**: @ (for root domain) or www
   - **Value**: cname.vercel-dns.com
4. Wait for SSL certificate provisioning

## 📧 Step 6: Email Configuration

### Resend Setup (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain
3. Generate API key
4. Add `RESEND_API_KEY` to Vercel environment variables

### SMTP Alternative

For Gmail or other SMTP providers:

```bash
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
```

## 🖼️ Step 7: Cloudinary Setup

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name, API key, and API secret
3. Add to Vercel environment variables
4. Configure upload presets in Cloudinary dashboard

## 🔍 Step 8: Verify Deployment

1. **Health Check**: Visit `https://your-app.vercel.app/api/health`
2. **Database**: Check if sign-up/sign-in works
3. **Email**: Test magic link authentication
4. **Images**: Test property image uploads
5. **Payments**: Test in sandbox mode

## 🚨 Troubleshooting

### Common Issues

#### Build Failures

```bash
# Check build logs in Vercel dashboard
# Common fixes:
- Ensure all environment variables are set
- Check for TypeScript errors
- Verify Prisma schema syntax
```

#### Database Connection Issues

```bash
# Verify connection strings
# Ensure database allows connections from Vercel IPs
# Check SSL requirements
```

#### Email Not Sending

```bash
# Verify API keys
# Check domain verification for Resend
# Test with SMTP fallback
```

### Performance Optimization

1. **Database**: Use connection pooling with `DIRECT_URL`
2. **Images**: Optimize Cloudinary settings
3. **Caching**: Configure proper cache headers
4. **Analytics**: Monitor with Vercel Analytics

## 📊 Monitoring & Maintenance

### Set up monitoring:

1. **Vercel Analytics**: Enabled by default
2. **Error Tracking**: Add Sentry integration
3. **Uptime Monitoring**: Use external service
4. **Database Performance**: Monitor query times

### Regular Maintenance:

1. **Dependencies**: Update regularly
2. **Security**: Monitor for vulnerabilities
3. **Backups**: Set up database backups
4. **Logs**: Monitor error logs

## 🔐 Security Checklist

- [ ] All environment variables are secure
- [ ] HTTPS is enforced
- [ ] Database has proper access controls
- [ ] API routes have proper authentication
- [ ] File uploads are validated and sanitized
- [ ] Rate limiting is implemented
- [ ] Security headers are configured

## 📞 Support

For deployment issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
3. Check [Prisma Deployment Guide](https://www.prisma.io/docs/guides/deployment)
4. Contact support through appropriate channels

## 🎉 Success!

Your RentsNova application should now be live and accessible at your Vercel URL. Users can now:

- Sign up with email verification
- Browse properties
- Submit rental applications
- Communicate with landlords
- Manage rent payments

Remember to test all functionality thoroughly before announcing to users!
EOF  
cd /home/project && cd Rentsnova3 && cat > DEPLOYMENT.md << 'EOF'
# 🚀 RentsNova Vercel Deployment Guide

This guide will help you deploy RentsNova to Vercel with all necessary configurations.

## 📋 Prerequisites

Before deploying, ensure you have:

1. **GitHub Repository**: Code pushed to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Database**: PostgreSQL database (Vercel Postgres recommended)
4. **Email Service**: Resend API key (recommended) or SMTP credentials
5. **File Storage**: Cloudinary account for image uploads

## 🛠️ Step 1: Prepare Database

### Option A: Vercel Postgres (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to **Storage** tab
3. Click **Create Database** → **Postgres**
4. Name your database (e.g., `rentsnova-db`)
5. Select region closest to your users
6. Copy the connection strings provided

### Option B: External PostgreSQL

Use any PostgreSQL provider (Supabase, PlanetScale, AWS RDS, etc.)

## 🔧 Step 2: Deploy to Vercel

### Via Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Import Project**
3. Connect your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Build Command**: `prisma generate && prisma db push && next build`
   - **Install Command**: `bun install`
   - **Root Directory**: `./` (if repo root)

### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd your-project-directory
vercel

# Follow the prompts
```

## 🔐 Step 3: Configure Environment Variables

In your Vercel project dashboard, go to **Settings** → **Environment Variables** and add:

### Required Variables

```bash
# Database
DATABASE_URL="postgresql://username:password@host:port/db?schema=public&sslmode=require"
DIRECT_URL="postgresql://username:password@host:port/db?schema=public&sslmode=require"

# Authentication
NEXTAUTH_SECRET="your-32-character-random-secret"
NEXTAUTH_URL="https://your-app.vercel.app"

# Email (Resend recommended)
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
EMAIL_FROM="noreply@your-domain.com"

# File Storage
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

### Generate Secure Values

```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32

# Generate ENCRYPTION_KEY
openssl rand -base64 32
```

### Optional Variables

```bash
# Payment Integration
MTN_MONEY_API_KEY="your-mtn-api-key"
ORANGE_MONEY_API_KEY="your-orange-api-key"

# Communications
TWILIO_ACCOUNT_SID="your-twilio-sid"
TWILIO_AUTH_TOKEN="your-twilio-token"

# Security
ENCRYPTION_KEY="your-32-character-encryption-key"
MAX_FAILED_LOGIN_ATTEMPTS=3
LOCKOUT_DURATION_MINUTES=30

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_VERCEL_ANALYTICS=true
```

## 🗄️ Step 4: Database Setup

After deployment, run database migrations:

### Option A: Via Vercel Functions

The app will automatically run `prisma db push` during build.

### Option B: Manual Setup

```bash
# Clone your repository locally
git clone https://github.com/your-username/rentsnova.git
cd rentsnova

# Install dependencies
bun install

# Set up local environment
cp .env.example .env.local
# Edit .env.local with your production database URL

# Run database migrations
bunx prisma generate
bunx prisma db push

# Seed initial data (optional)
bun run db:seed
```

## 🌐 Step 5: Configure Custom Domain (Optional)

1. In Vercel Dashboard → **Settings** → **Domains**
2. Add your custom domain
3. Configure DNS:
   - **Type**: CNAME
   - **Name**: @ (for root domain) or www
   - **Value**: cname.vercel-dns.com
4. Wait for SSL certificate provisioning

## 📧 Step 6: Email Configuration

### Resend Setup (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain
3. Generate API key
4. Add `RESEND_API_KEY` to Vercel environment variables

### SMTP Alternative

For Gmail or other SMTP providers:

```bash
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
```

## 🖼️ Step 7: Cloudinary Setup

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Get your cloud name, API key, and API secret
3. Add to Vercel environment variables
4. Configure upload presets in Cloudinary dashboard

## 🔍 Step 8: Verify Deployment

1. **Health Check**: Visit `https://your-app.vercel.app/api/health`
2. **Database**: Check if sign-up/sign-in works
3. **Email**: Test magic link authentication
4. **Images**: Test property image uploads
5. **Payments**: Test in sandbox mode

## 🚨 Troubleshooting

### Common Issues

#### Build Failures

```bash
# Check build logs in Vercel dashboard
# Common fixes:
- Ensure all environment variables are set
- Check for TypeScript errors
- Verify Prisma schema syntax
```

#### Database Connection Issues

```bash
# Verify connection strings
# Ensure database allows connections from Vercel IPs
# Check SSL requirements
```

#### Email Not Sending

```bash
# Verify API keys
# Check domain verification for Resend
# Test with SMTP fallback
```

### Performance Optimization

1. **Database**: Use connection pooling with `DIRECT_URL`
2. **Images**: Optimize Cloudinary settings
3. **Caching**: Configure proper cache headers
4. **Analytics**: Monitor with Vercel Analytics

## 📊 Monitoring & Maintenance

### Set up monitoring:

1. **Vercel Analytics**: Enabled by default
2. **Error Tracking**: Add Sentry integration
3. **Uptime Monitoring**: Use external service
4. **Database Performance**: Monitor query times

### Regular Maintenance:

1. **Dependencies**: Update regularly
2. **Security**: Monitor for vulnerabilities
3. **Backups**: Set up database backups
4. **Logs**: Monitor error logs

## 🔐 Security Checklist

- [ ] All environment variables are secure
- [ ] HTTPS is enforced
- [ ] Database has proper access controls
- [ ] API routes have proper authentication
- [ ] File uploads are validated and sanitized
- [ ] Rate limiting is implemented
- [ ] Security headers are configured

## 📞 Support

For deployment issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
3. Check [Prisma Deployment Guide](https://www.prisma.io/docs/guides/deployment)
4. Contact support through appropriate channels

## 🎉 Success!

Your RentsNova application should now be live and accessible at your Vercel URL. Users can now:

- Sign up with email verification
- Browse properties
- Submit rental applications
- Communicate with landlords
- Manage rent payments

Remember to test all functionality thoroughly before announcing to users!
