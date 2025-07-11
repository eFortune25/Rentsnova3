import { PrismaClient } from '@prisma/client';
import { AFRICAN_COUNTRIES } from './countries-data';

const prisma = new PrismaClient();

export async function seedCountriesAndCities() {
  console.log('🌍 Seeding African countries and cities...');

  try {
    // Clear existing data
    await prisma.city.deleteMany();
    await prisma.country.deleteMany();

    // Seed countries and cities
    for (const countryData of AFRICAN_COUNTRIES) {
      console.log(`📍 Adding ${countryData.nameEn}...`);

      const country = await prisma.country.create({
        data: {
          name: countryData.name,
          nameEn: countryData.nameEn,
          nameFr: countryData.nameFr,
          code: countryData.code,
          phoneCode: countryData.phoneCode,
          currency: countryData.currency,
          currencyCode: countryData.currencyCode,
          region: countryData.region,
          isActive: true,
        },
      });

      // Add cities for this country
      for (const cityData of countryData.cities) {
        await prisma.city.create({
          data: {
            name: cityData.name,
            nameEn: cityData.nameEn,
            nameFr: cityData.nameFr,
            countryId: country.id,
            region: cityData.region,
            isActive: true,
          },
        });
      }

      console.log(`✅ Added ${countryData.cities.length} cities for ${countryData.nameEn}`);
    }

    console.log('🎉 Successfully seeded all countries and cities!');

    // Print summary
    const countryCount = await prisma.country.count();
    const cityCount = await prisma.city.count();

    console.log(`📊 Summary: ${countryCount} countries, ${cityCount} cities`);

  } catch (error) {
    console.error('❌ Error seeding data:', error);
    throw error;
  }
}

export async function createSampleProperties() {
  console.log('🏠 Creating sample properties for Cameroon...');

  try {
    // Get Cameroon
    const cameroon = await prisma.country.findUnique({
      where: { code: 'CM' },
      include: { cities: true }
    });

    if (!cameroon) {
      throw new Error('Cameroon not found in database');
    }

    // Find Douala and Yaoundé
    const douala = cameroon.cities.find(city => city.nameEn === 'Douala');
    const yaounde = cameroon.cities.find(city => city.nameEn === 'Yaoundé');

    if (!douala || !yaounde) {
      throw new Error('Required cities not found');
    }

    // Create a sample admin user first
    const adminUser = await prisma.user.upsert({
      where: { email: 'admin@rentsnova.com' },
      update: {},
      create: {
        email: 'admin@rentsnova.com',
        name: 'RentsNova Admin',
        role: 'ADMIN',
        language: 'ENGLISH',
        country: 'CM',
        city: 'Yaoundé',
        emailVerified: new Date(),
        isActive: true,
      },
    });

    // Sample properties data
    const sampleProperties = [
      {
        title: 'Modern 2BR House in Douala',
        titleEn: 'Modern 2BR House in Douala',
        titleFr: 'Maison Moderne 2 Chambres à Douala',
        description: 'Beautiful modern house with pool in Bonanjo neighborhood',
        descriptionEn: 'Beautiful modern house with pool in Bonanjo neighborhood',
        descriptionFr: 'Belle maison moderne avec piscine dans le quartier Bonanjo',
        type: 'HOUSE' as const,
        listingType: 'RENT' as const,
        cityId: douala.id,
        address: 'Bonanjo, Douala',
        neighborhood: 'Bonanjo',
        bedrooms: 2,
        bathrooms: 1,
        area: 85,
        hasPool: true,
        hasParking: true,
        price: 150000,
        pricePerMonth: 150000,
        ownerId: adminUser.id,
        isVerified: true,
      },
      {
        title: 'Luxury 3BR Apartment',
        titleEn: 'Luxury 3BR Apartment',
        titleFr: 'Appartement de Luxe 3 Chambres',
        description: 'High-end apartment in Bastos with modern amenities',
        descriptionEn: 'High-end apartment in Bastos with modern amenities',
        descriptionFr: 'Appartement haut de gamme à Bastos avec équipements modernes',
        type: 'APARTMENT' as const,
        listingType: 'RENT' as const,
        cityId: yaounde.id,
        address: 'Bastos, Yaoundé',
        neighborhood: 'Bastos',
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        furnished: true,
        hasParking: true,
        price: 300000,
        pricePerMonth: 300000,
        ownerId: adminUser.id,
        isVerified: true,
      },
      {
        title: 'Cozy Studio Near University',
        titleEn: 'Cozy Studio Near University',
        titleFr: 'Studio Confortable Près de l\'Université',
        description: 'Perfect for students, close to University of Yaoundé',
        descriptionEn: 'Perfect for students, close to University of Yaoundé',
        descriptionFr: 'Parfait pour étudiants, proche de l\'Université de Yaoundé',
        type: 'STUDIO' as const,
        listingType: 'RENT' as const,
        cityId: yaounde.id,
        address: 'Ngoa-Ekelle, Yaoundé',
        neighborhood: 'Ngoa-Ekelle',
        bedrooms: 1,
        bathrooms: 1,
        area: 45,
        furnished: true,
        price: 80000,
        pricePerMonth: 80000,
        ownerId: adminUser.id,
        isVerified: true,
      }
    ];

    // Create properties
    for (const propertyData of sampleProperties) {
      const property = await prisma.property.create({
        data: propertyData,
      });

      console.log(`✅ Created property: ${property.title}`);
    }

    console.log('🎉 Sample properties created successfully!');

  } catch (error) {
    console.error('❌ Error creating sample properties:', error);
    throw error;
  }
}

// Main seeding function
export async function seedDatabase() {
  try {
    await seedCountriesAndCities();
    await createSampleProperties();

    console.log('🌟 Database seeding completed successfully!');
  } catch (error) {
    console.error('💥 Database seeding failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run if called directly
if (require.main === module) {
  seedDatabase();
}
