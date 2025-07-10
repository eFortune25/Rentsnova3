# 🚀 RentsNova Vercel Deployment Checklist

## Pre-Deployment Setup

### ✅ 1. Database Configuration

**Option A: Vercel Postgres (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Create Postgres database
vercel postgres create rentsnova-production
```

**Option B: External PostgreSQL (Railway, Supabase, etc.)**
- Create PostgreSQL database
- Get connection string
- Ensure database is accessible from Vercel

### ✅ 2. Environment Variables Setup

Copy these environment variables to Vercel dashboard:

```bash
# Database
DATABASE_URL="postgresql://username:password@hostname:port/database?schema=public"

# Authentication
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
NEXTAUTH_URL="https://your-domain.vercel.app"

# Email (Required for magic links)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-gmail-app-password"
EMAIL_FROM="noreply@rentsnova.com"

# File Upload
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloudinary-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Payment Integration
MTN_MONEY_API_KEY="your-mtn-api-key"
ORANGE_MONEY_API_KEY="your-orange-api-key"

# Security
ENCRYPTION_KEY="your-32-character-encryption-key"

# Environment
NODE_ENV="production"
```

### ✅ 3. Code Preparation

- [x] Switch from SQLite to PostgreSQL
- [x] Remove netlify.toml
- [x] Add vercel.json configuration
- [x] Update package.json scripts
- [x] Configure Next.js for Vercel
- [x] Add comprehensive README

## Deployment Steps

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure build settings (auto-detected)

3. **Set Environment Variables**
   - Go to Project Settings > Environment Variables
   - Add all variables from checklist above
   - Set them for Production, Preview, and Development

4. **Deploy**
   - Vercel will automatically deploy
   - Check build logs for any errors

### Method 2: Vercel CLI

```bash
# Login and deploy
vercel login
vercel --prod

# Follow prompts to configure project
```

## Post-Deployment Verification

### ✅ 1. Database Migration
```bash
# Run this after first deployment
vercel env pull .env.local
bunx prisma db push
bun run src/lib/seed-data.ts
```

### ✅ 2. Test Core Features

- [ ] Homepage loads correctly
- [ ] Search functionality works
- [ ] Property listings display
- [ ] Language switching (EN/FR)
- [ ] Email signup flow (magic links)
- [ ] Database connectivity
- [ ] Image loading from CDN

### ✅ 3. Performance Check

- [ ] Page load speed < 3 seconds
- [ ] Mobile responsiveness
- [ ] Image optimization working
- [ ] No console errors

### ✅ 4. Security Verification

- [ ] HTTPS enabled
- [ ] Security headers applied
- [ ] Database connection secure
- [ ] Environment variables hidden

## Common Issues & Solutions

### Database Connection Issues
```bash
# Check if database is accessible
bunx prisma db push --preview-feature

# Reset database if needed
bunx prisma migrate reset
```

### Build Failures
```bash
# Local build test
npm run build

# Check Vercel build logs
vercel logs
```

### Environment Variable Issues
- Ensure all required variables are set in Vercel dashboard
- Check variable names match exactly
- Restart deployment after adding variables

### Email Not Working
- Verify Gmail app password (not regular password)
- Check SMTP settings
- Test email configuration locally first

## Domain Configuration

### Custom Domain Setup
1. Add domain in Vercel dashboard
2. Configure DNS records
3. Update NEXTAUTH_URL environment variable
4. Test authentication flow

### SSL Certificate
- Automatically handled by Vercel
- Verify HTTPS redirect working

## Monitoring & Maintenance

### Analytics Setup
- Enable Vercel Analytics
- Configure error tracking
- Set up performance monitoring

### Regular Maintenance
- Monitor database usage
- Check error logs weekly
- Update dependencies monthly
- Review security settings

## Rollback Plan

### Quick Rollback
```bash
# Revert to previous deployment
vercel rollback
```

### Database Rollback
```bash
# If needed, restore from backup
bunx prisma migrate reset
# Re-seed with known good data
```

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Prisma Vercel Guide](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel)

---

## 🎉 Post-Deployment Success Checklist

- [ ] Site accessible at production URL
- [ ] All core features working
- [ ] Database seeded with African countries/cities
- [ ] Email authentication functional
- [ ] Mobile experience optimized
- [ ] Performance metrics acceptable
- [ ] Security headers in place
- [ ] Monitoring configured

**Congratulations! RentsNova is live on Vercel! 🚀**
