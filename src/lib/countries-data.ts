export interface CountryData {
  name: string;
  nameEn: string;
  nameFr: string;
  code: string; // ISO country code
  phoneCode: string;
  currency: string;
  currencyCode: string;
  region: string;
  cities: CityData[];
}

export interface CityData {
  name: string;
  nameEn: string;
  nameFr: string;
  region?: string;
}

export const AFRICAN_COUNTRIES: CountryData[] = [
  {
    name: "Cameroon",
    nameEn: "Cameroon",
    nameFr: "Cameroun",
    code: "CM",
    phoneCode: "+237",
    currency: "Central African CFA Franc",
    currencyCode: "XAF",
    region: "Central Africa",
    cities: [
      { name: "Yaoundé", nameEn: "Yaoundé", nameFr: "Yaoundé", region: "Centre" },
      { name: "Douala", nameEn: "Douala", nameFr: "Douala", region: "Littoral" },
      { name: "Bamenda", nameEn: "Bamenda", nameFr: "Bamenda", region: "North-West" },
      { name: "Bafoussam", nameEn: "Bafoussam", nameFr: "Bafoussam", region: "West" },
      { name: "Garoua", nameEn: "Garoua", nameFr: "Garoua", region: "North" },
      { name: "Maroua", nameEn: "Maroua", nameFr: "Maroua", region: "Far North" },
      { name: "Ngaoundéré", nameEn: "Ngaoundéré", nameFr: "Ngaoundéré", region: "Adamawa" },
      { name: "Bertoua", nameEn: "Bertoua", nameFr: "Bertoua", region: "East" },
      { name: "Ebolowa", nameEn: "Ebolowa", nameFr: "Ebolowa", region: "South" },
      { name: "Kribi", nameEn: "Kribi", nameFr: "Kribi", region: "South" },
      { name: "Limbe", nameEn: "Limbe", nameFr: "Limbe", region: "South-West" },
      { name: "Buea", nameEn: "Buea", nameFr: "Buea", region: "South-West" }
    ]
  },
  {
    name: "Nigeria",
    nameEn: "Nigeria",
    nameFr: "Nigeria",
    code: "NG",
    phoneCode: "+234",
    currency: "Nigerian Naira",
    currencyCode: "NGN",
    region: "West Africa",
    cities: [
      { name: "Lagos", nameEn: "Lagos", nameFr: "Lagos", region: "Lagos" },
      { name: "Abuja", nameEn: "Abuja", nameFr: "Abuja", region: "FCT" },
      { name: "Kano", nameEn: "Kano", nameFr: "Kano", region: "Kano" },
      { name: "Ibadan", nameEn: "Ibadan", nameFr: "Ibadan", region: "Oyo" },
      { name: "Port Harcourt", nameEn: "Port Harcourt", nameFr: "Port Harcourt", region: "Rivers" },
      { name: "Benin City", nameEn: "Benin City", nameFr: "Benin City", region: "Edo" },
      { name: "Kaduna", nameEn: "Kaduna", nameFr: "Kaduna", region: "Kaduna" },
      { name: "Jos", nameEn: "Jos", nameFr: "Jos", region: "Plateau" },
      { name: "Ilorin", nameEn: "Ilorin", nameFr: "Ilorin", region: "Kwara" },
      { name: "Enugu", nameEn: "Enugu", nameFr: "Enugu", region: "Enugu" }
    ]
  },
  {
    name: "Kenya",
    nameEn: "Kenya",
    nameFr: "Kenya",
    code: "KE",
    phoneCode: "+254",
    currency: "Kenyan Shilling",
    currencyCode: "KES",
    region: "East Africa",
    cities: [
      { name: "Nairobi", nameEn: "Nairobi", nameFr: "Nairobi", region: "Nairobi" },
      { name: "Mombasa", nameEn: "Mombasa", nameFr: "Mombasa", region: "Mombasa" },
      { name: "Kisumu", nameEn: "Kisumu", nameFr: "Kisumu", region: "Kisumu" },
      { name: "Nakuru", nameEn: "Nakuru", nameFr: "Nakuru", region: "Nakuru" },
      { name: "Eldoret", nameEn: "Eldoret", nameFr: "Eldoret", region: "Uasin Gishu" },
      { name: "Thika", nameEn: "Thika", nameFr: "Thika", region: "Kiambu" },
      { name: "Malindi", nameEn: "Malindi", nameFr: "Malindi", region: "Kilifi" },
      { name: "Kitale", nameEn: "Kitale", nameFr: "Kitale", region: "Trans-Nzoia" }
    ]
  },
  {
    name: "Ghana",
    nameEn: "Ghana",
    nameFr: "Ghana",
    code: "GH",
    phoneCode: "+233",
    currency: "Ghanaian Cedi",
    currencyCode: "GHS",
    region: "West Africa",
    cities: [
      { name: "Accra", nameEn: "Accra", nameFr: "Accra", region: "Greater Accra" },
      { name: "Kumasi", nameEn: "Kumasi", nameFr: "Kumasi", region: "Ashanti" },
      { name: "Tamale", nameEn: "Tamale", nameFr: "Tamale", region: "Northern" },
      { name: "Takoradi", nameEn: "Takoradi", nameFr: "Takoradi", region: "Western" },
      { name: "Cape Coast", nameEn: "Cape Coast", nameFr: "Cape Coast", region: "Central" },
      { name: "Ho", nameEn: "Ho", nameFr: "Ho", region: "Volta" },
      { name: "Koforidua", nameEn: "Koforidua", nameFr: "Koforidua", region: "Eastern" }
    ]
  },
  {
    name: "Senegal",
    nameEn: "Senegal",
    nameFr: "Sénégal",
    code: "SN",
    phoneCode: "+221",
    currency: "West African CFA Franc",
    currencyCode: "XOF",
    region: "West Africa",
    cities: [
      { name: "Dakar", nameEn: "Dakar", nameFr: "Dakar", region: "Dakar" },
      { name: "Thiès", nameEn: "Thiès", nameFr: "Thiès", region: "Thiès" },
      { name: "Kaolack", nameEn: "Kaolack", nameFr: "Kaolack", region: "Kaolack" },
      { name: "Saint-Louis", nameEn: "Saint-Louis", nameFr: "Saint-Louis", region: "Saint-Louis" },
      { name: "Ziguinchor", nameEn: "Ziguinchor", nameFr: "Ziguinchor", region: "Ziguinchor" },
      { name: "Diourbel", nameEn: "Diourbel", nameFr: "Diourbel", region: "Diourbel" }
    ]
  },
  {
    name: "Ivory Coast",
    nameEn: "Ivory Coast",
    nameFr: "Côte d'Ivoire",
    code: "CI",
    phoneCode: "+225",
    currency: "West African CFA Franc",
    currencyCode: "XOF",
    region: "West Africa",
    cities: [
      { name: "Abidjan", nameEn: "Abidjan", nameFr: "Abidjan", region: "Lagunes" },
      { name: "Yamoussoukro", nameEn: "Yamoussoukro", nameFr: "Yamoussoukro", region: "Lacs" },
      { name: "Bouaké", nameEn: "Bouaké", nameFr: "Bouaké", region: "Vallée du Bandama" },
      { name: "Daloa", nameEn: "Daloa", nameFr: "Daloa", region: "Haut-Sassandra" },
      { name: "San-Pédro", nameEn: "San-Pédro", nameFr: "San-Pédro", region: "Bas-Sassandra" },
      { name: "Korhogo", nameEn: "Korhogo", nameFr: "Korhogo", region: "Savanes" }
    ]
  },
  {
    name: "Tanzania",
    nameEn: "Tanzania",
    nameFr: "Tanzanie",
    code: "TZ",
    phoneCode: "+255",
    currency: "Tanzanian Shilling",
    currencyCode: "TZS",
    region: "East Africa",
    cities: [
      { name: "Dar es Salaam", nameEn: "Dar es Salaam", nameFr: "Dar es Salaam", region: "Dar es Salaam" },
      { name: "Dodoma", nameEn: "Dodoma", nameFr: "Dodoma", region: "Dodoma" },
      { name: "Mwanza", nameEn: "Mwanza", nameFr: "Mwanza", region: "Mwanza" },
      { name: "Arusha", nameEn: "Arusha", nameFr: "Arusha", region: "Arusha" },
      { name: "Mbeya", nameEn: "Mbeya", nameFr: "Mbeya", region: "Mbeya" },
      { name: "Morogoro", nameEn: "Morogoro", nameFr: "Morogoro", region: "Morogoro" },
      { name: "Tanga", nameEn: "Tanga", nameFr: "Tanga", region: "Tanga" }
    ]
  },
  {
    name: "Uganda",
    nameEn: "Uganda",
    nameFr: "Ouganda",
    code: "UG",
    phoneCode: "+256",
    currency: "Ugandan Shilling",
    currencyCode: "UGX",
    region: "East Africa",
    cities: [
      { name: "Kampala", nameEn: "Kampala", nameFr: "Kampala", region: "Central" },
      { name: "Gulu", nameEn: "Gulu", nameFr: "Gulu", region: "Northern" },
      { name: "Lira", nameEn: "Lira", nameFr: "Lira", region: "Northern" },
      { name: "Mbarara", nameEn: "Mbarara", nameFr: "Mbarara", region: "Western" },
      { name: "Jinja", nameEn: "Jinja", nameFr: "Jinja", region: "Eastern" },
      { name: "Mbale", nameEn: "Mbale", nameFr: "Mbale", region: "Eastern" }
    ]
  },
  {
    name: "Rwanda",
    nameEn: "Rwanda",
    nameFr: "Rwanda",
    code: "RW",
    phoneCode: "+250",
    currency: "Rwandan Franc",
    currencyCode: "RWF",
    region: "East Africa",
    cities: [
      { name: "Kigali", nameEn: "Kigali", nameFr: "Kigali", region: "Kigali" },
      { name: "Butare", nameEn: "Butare", nameFr: "Butare", region: "Southern" },
      { name: "Gitarama", nameEn: "Gitarama", nameFr: "Gitarama", region: "Southern" },
      { name: "Ruhengeri", nameEn: "Ruhengeri", nameFr: "Ruhengeri", region: "Northern" },
      { name: "Gisenyi", nameEn: "Gisenyi", nameFr: "Gisenyi", region: "Western" }
    ]
  },
  {
    name: "Morocco",
    nameEn: "Morocco",
    nameFr: "Maroc",
    code: "MA",
    phoneCode: "+212",
    currency: "Moroccan Dirham",
    currencyCode: "MAD",
    region: "North Africa",
    cities: [
      { name: "Casablanca", nameEn: "Casablanca", nameFr: "Casablanca", region: "Casablanca-Settat" },
      { name: "Rabat", nameEn: "Rabat", nameFr: "Rabat", region: "Rabat-Salé-Kénitra" },
      { name: "Marrakech", nameEn: "Marrakech", nameFr: "Marrakech", region: "Marrakech-Safi" },
      { name: "Fès", nameEn: "Fez", nameFr: "Fès", region: "Fès-Meknès" },
      { name: "Tangier", nameEn: "Tangier", nameFr: "Tanger", region: "Tanger-Tétouan-Al Hoceïma" },
      { name: "Agadir", nameEn: "Agadir", nameFr: "Agadir", region: "Souss-Massa" },
      { name: "Oujda", nameEn: "Oujda", nameFr: "Oujda", region: "Oriental" }
    ]
  },
  {
    name: "Egypt",
    nameEn: "Egypt",
    nameFr: "Égypte",
    code: "EG",
    phoneCode: "+20",
    currency: "Egyptian Pound",
    currencyCode: "EGP",
    region: "North Africa",
    cities: [
      { name: "Cairo", nameEn: "Cairo", nameFr: "Le Caire", region: "Cairo" },
      { name: "Alexandria", nameEn: "Alexandria", nameFr: "Alexandrie", region: "Alexandria" },
      { name: "Giza", nameEn: "Giza", nameFr: "Gizeh", region: "Giza" },
      { name: "Shubra El-Kheima", nameEn: "Shubra El-Kheima", nameFr: "Shubra El-Kheima", region: "Qalyubia" },
      { name: "Port Said", nameEn: "Port Said", nameFr: "Port-Saïd", region: "Port Said" },
      { name: "Suez", nameEn: "Suez", nameFr: "Suez", region: "Suez" }
    ]
  },
  {
    name: "South Africa",
    nameEn: "South Africa",
    nameFr: "Afrique du Sud",
    code: "ZA",
    phoneCode: "+27",
    currency: "South African Rand",
    currencyCode: "ZAR",
    region: "Southern Africa",
    cities: [
      { name: "Johannesburg", nameEn: "Johannesburg", nameFr: "Johannesburg", region: "Gauteng" },
      { name: "Cape Town", nameEn: "Cape Town", nameFr: "Le Cap", region: "Western Cape" },
      { name: "Durban", nameEn: "Durban", nameFr: "Durban", region: "KwaZulu-Natal" },
      { name: "Pretoria", nameEn: "Pretoria", nameFr: "Pretoria", region: "Gauteng" },
      { name: "Port Elizabeth", nameEn: "Port Elizabeth", nameFr: "Port Elizabeth", region: "Eastern Cape" },
      { name: "Bloemfontein", nameEn: "Bloemfontein", nameFr: "Bloemfontein", region: "Free State" }
    ]
  }
];

// Helper functions
export function getCountryByCode(code: string): CountryData | undefined {
  return AFRICAN_COUNTRIES.find(country => country.code === code);
}

export function getCitiesByCountryCode(countryCode: string): CityData[] {
  const country = getCountryByCode(countryCode);
  return country?.cities || [];
}

export function getAllCities(): { city: CityData; country: CountryData }[] {
  const result: { city: CityData; country: CountryData }[] = [];

  AFRICAN_COUNTRIES.forEach(country => {
    country.cities.forEach(city => {
      result.push({ city, country });
    });
  });

  return result;
}

export function searchCities(query: string): { city: CityData; country: CountryData }[] {
  const allCities = getAllCities();
  const lowerQuery = query.toLowerCase();

  return allCities.filter(({ city, country }) =>
    city.nameEn.toLowerCase().includes(lowerQuery) ||
    city.nameFr.toLowerCase().includes(lowerQuery) ||
    country.nameEn.toLowerCase().includes(lowerQuery) ||
    country.nameFr.toLowerCase().includes(lowerQuery)
  );
}
