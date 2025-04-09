export function JsonLd({
  storeName,
  storeAddress,
  storeEmail,
  storePhone,
}: Readonly<{
  storeName: string
  storeAddress: string
  storeEmail: string
  storePhone: string
}>) {
  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: storeName,
    image: "https://mocachicfortaleza.com.br/images/nav_bar_logo.png",
    logo: "https://mocachicfortaleza.com.br/images/nav_bar_logo.png",
    "@id": "https://mocachicfortaleza.com.br",
    url: "https://mocachicfortaleza.com.br",
    telephone: storePhone,
    email: storeEmail,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: storeAddress,
      addressLocality: "Manaus",
      addressRegion: "AM",
      postalCode: "69000-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -3.0583,
      longitude: -60.0512,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: ["https://www.instagram.com/mocachicfortaleza", "https://www.facebook.com/mocachicfortaleza"],
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://wa.me/5592994128570",
        inLanguage: "pt-BR",
        actionPlatform: ["https://schema.org/WhatsApp"],
      },
      result: {
        "@type": "Order",
        seller: {
          "@type": "Organization",
          name: storeName,
        },
      },
    },
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "Conjunto Ester",
          description: "Conjunto versátil e elegante para diversas ocasiões",
          image: "https://mocachicfortaleza.com.br/images/products/Cojunto-Ester-45.jpeg",
          offers: {
            "@type": "Offer",
            url: "https://mocachicfortaleza.com.br/#colecao",
            priceCurrency: "BRL",
            price: "45.00",
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "Organization",
              name: storeName,
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Macacão Sofia",
          description: "Macacão moderno e sofisticado para um visual descontraído",
          image: "https://mocachicfortaleza.com.br/images/products/Macacão-Sofia-70.jpeg",
          offers: {
            "@type": "Offer",
            url: "https://mocachicfortaleza.com.br/#colecao",
            priceCurrency: "BRL",
            price: "70.00",
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "Organization",
              name: storeName,
            },
          },
        },
      },
    ],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: storeName,
    image: "https://mocachicfortaleza.com.br/images/nav_bar_logo.png",
    url: "https://mocachicfortaleza.com.br",
    telephone: storePhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: storeAddress,
      addressLocality: "Manaus",
      addressRegion: "AM",
      postalCode: "69000-000",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  )
}
