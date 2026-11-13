import { site, whatsappUrl } from "@/content/site";
import coaCertificate from "@/public/images/operations/coa-certificate.png";
import coaCiptaUsaha from "@/public/images/operations/coa-cipta-usaha.jpg";
import coaInsurindo from "@/public/images/operations/coa-insurindo.jpg";
import coconutHarvest from "@/public/images/operations/coconut-harvest.png";
import coconutTree from "@/public/images/operations/coconut-tree.jpg";
import containerFaucet from "@/public/images/operations/container-faucet.jpeg";
import containerLoading from "@/public/images/operations/container-loading.jpeg";
import containerLoadingFinished from "@/public/images/operations/container-loading-finished.jpeg";
import containerReadyToDelivery from "@/public/images/operations/container-ready-to-delivery.jpeg";
import insideContainer from "@/public/images/operations/inside-container.jpeg";
import multiTruck from "@/public/images/operations/multi-truck.jpeg";
import testiDevonLane from "@/public/images/operations/testi-devon-lane.png";
import testiJennyWilson from "@/public/images/operations/testi-jenny-wilson.png";
import rbdCoconutOil from "@/public/images/products/rbd-coconut-oil.jpg";

export const home = {
  hero: {
    image: rbdCoconutOil,
    imageAlt: "Refined coconut oil and fresh coconuts on a wooden slab",
    eyebrow: "Indonesian Coconut Exporter · Since 2018",
    imageBadge: "RBD Coconut Oil",
    coaCard: {
      text: "Batch-specific COA issued with every shipment.",
    },
    titlePrefix: "The Leading Supplier",
    titleConnector: "of",
    titleHighlight: "Coconut",
    description:
      "Direct plantation sourcing and specialized refinery operations by Alam Rezeki. We export premium Refined, Bleached & Deodorized (RBD) Coconut Oil, bulk food-grade flexitank logistics, and certified agro-commodities to food producers, oleochemical plants, and cosmetic laboratories worldwide.",
    primaryCta: {
      label: "Request Spec & Quotation",
      href: "#quotation",
    },
    secondaryCta: {
      label: "Explore Product Line",
      href: "#products",
    },
    coaLink: {
      label: "View Certified COA",
      href: "#coa",
    },
  },
  about: {
    eyebrow: "ALAM REZEKI IS READY TO SERVE YOU",
    headingSegments: [
      { text: "We Source ", highlight: false },
      { text: "Finest Indonesian Coconuts ", highlight: true },
      { text: "For ", highlight: false },
      { text: "Trusted & On-Time ", highlight: true },
      { text: "Global Supply.", highlight: false },
    ],
    lead: "Welcome to Alam Rezeki, an Indonesian trading company founded in 2018 that specializes in the trading of coconuts, spices, and herbs. Whether you're a wholesaler, distributor, or retailer, our team of experts carefully selects and inspects each item to ensure it meets our rigorous standards for quality and freshness.",
    image: coconutHarvest,
    imageAlt: "Indonesian farmers harvesting fresh coconuts in a palm grove",
    secondaryImage: coconutTree,
    secondaryImageAlt:
      "Lush Indonesian coconut palm tree bearing mature golden coconuts",
    pillars: [
      {
        number: "01",
        title: "Reliable",
        description:
          "Committed to punctuality, continuous high quality, and transparent international trade documentation on every single container consignment.",
      },
      {
        number: "02",
        title: "Fresh & Healthy",
        description:
          "Sourced directly from fertile Indonesian soils and coastal groves, inspected carefully to ensure optimal freshness, zero trans fats, and superior purity.",
      },
      {
        number: "03",
        title: "Resourceful",
        description:
          "Equipped with expansive plantation networks and agile processing facilities to provide customized solutions tailored to your unique requirements.",
      },
    ],
    mission: {
      eyebrow: "OUR MISSION & SUSTAINABILITY SOLUTIONS",
      headlinePrimary: "Sustainably Sourced.",
      headlineSecondary: "Globally Trusted.",
      descriptionSegments: [
        {
          text: "Our mission at Alam Rezeki is to promote the ",
          highlight: false,
        },
        {
          text: "rich cultural heritage and biodiversity of Indonesia",
          highlight: true,
        },
        {
          text: " through the trading of high-quality spices and herbs. We are committed to ",
          highlight: false,
        },
        {
          text: "supporting local farmers and communities",
          highlight: true,
        },
        {
          text: " by providing fair prices for their products and promoting ",
          highlight: false,
        },
        {
          text: "sustainable agricultural practices.",
          highlight: true,
        },
      ],
    },
  },
  productSection: {
    bannerHeadingSegments: [
      { text: "Present At ", highlight: false },
      { text: "Every Strategic Step ", highlight: true },
      { text: "Of Your ", highlight: false },
      { text: "Global Coconut Supply Chain.", highlight: true },
    ],
    description:
      "We provide various coconut products as below, prepared to exacting international food-grade and industrial specifications.",
    cta: {
      label: "Look at more of our Product",
      href: "/products",
    },
    eyebrow: "THE PRODUCTS WE OFFER YOU",
    headingSegments: [
      { text: "Our ", highlight: false },
      { text: "Product Line.", highlight: true },
    ],
    subheading: "Complete Coconut Product Portfolio",
    packagingNote:
      "Through direct refinery operations and plantation partnerships, we supply bulk flexitanks, IBC totes, and institutional packaging tailored to maximize your production efficiency.",
  },
  coa: {
    badge: "AUTHENTIC INSPECTION CERTIFICATE",
    headingSegments: [
      { text: "Verified ", highlight: false },
      { text: "Certificate of Analysis ", highlight: true },
      { text: "(COA).", highlight: false },
    ],
    description:
      "Transparency in every container. We conduct comprehensive multi-parameter lab assays for free fatty acid, iodine number, Lovibond color, and heavy metals prior to export clearance.",
    certificates: [
      {
        id: "rbd-coa",
        title: "RBD Coconut Oil — Export Spec COA",
        issuer: "Standard Export Laboratory Assay • Sept 2026",
        sealedBadge: "Lab Sealed & Endorsed",
        image: coaCertificate,
        alt: "Certificate of Analysis for RBD Coconut Oil",
      },
      {
        id: "insurindo-coa",
        title: "PT. Insurindo Interservices (FOSFA)",
        issuer: "Cert No: 2610GSK191213 • Crude Coconut Oil (CNO)",
        sealedBadge: "FOSFA Certified Surveyor",
        image: coaInsurindo,
        alt: "Certificate of Analysis No. 2610GSK191213 by PT. Insurindo Interservices for PT Alam Samudera Rezeki",
      },
      {
        id: "cipta-usaha-coa",
        title: "CV. Cipta Usaha Makmur Lab",
        issuer: "Report No: 81026 • Crude Coconut Oil Assay",
        sealedBadge: "Verified Lab Report",
        image: coaCiptaUsaha,
        alt: "Results of Analysis No. 81026 by CV. Cipta Usaha Makmur for PT. Alam Samudra Rezeki",
      },
    ],
    performanceHeadingSegments: [
      { text: "Tested ", highlight: false },
      { text: "Specimen Performance.", highlight: true },
    ],
    performanceDescription:
      "Comparison between typical international contractual limits and our actual verified analytical laboratory output:",
    metrics: [
      {
        label: "Free Fatty Acid (FFA as Lauric)",
        value: "Tested: 0.071% (Spec: ≤ 0.10%)",
        percentage: 71,
        note: "Exceptional shelf life and purity with minimal free fatty acidity.",
      },
      {
        label: "Iodine Value (Wijs Method)",
        value: "Tested: 9.8 g I₂/100g (Spec: 7.5 – 10.5)",
        percentage: 86,
        note: "Consistent saturation ideal for high-heat food frying.",
      },
      {
        label: "Moisture & Impurities",
        value: "Tested: 0.035% (Spec: ≤ 0.10%)",
        percentage: 36,
        note: "Drastically reduced risk of microbial degradation during maritime transit.",
      },
      {
        label: 'Lovibond Color (5¼" Cell)',
        value: "Tested: 0.9 Red (Spec: ≤ 1.0 Red)",
        percentage: 90,
        note: "Pure transparent liquid in tropical temperatures; snow-white solid in cooler climates.",
      },
    ],
    ctaLabel: "Download Sample COA & MSDS (PDF)",
    ctaHref: "#quotation",
    footnote: "Batch-specific COA issued with every commercial BL.",
  },
  logistics: {
    eyebrow: "HEAVY INDUSTRIAL LOGISTICS",
    headingSegments: [
      { text: "End-to-End ", highlight: false },
      { text: "Bulk Flexitank ", highlight: true },
      { text: "Pipeline.", highlight: false },
    ],
    description:
      "Liquid cargo handling requires extreme cleanliness, precise temperature control, and rigorous physical containment. Here is our direct-documented workflow from container sanitization to vessel gate-in.",
    steps: [
      {
        step: "Step 01",
        title: "Lining & Fitting",
        description:
          "Thorough inspection of dry 20ft container floor and walls. Installation of corrugated thermal barrier paper and high-tensile food-grade multi-layer poly flexibag.",
        badge: "Food Grade Multi-Ply Liner",
        image: insideContainer,
        imageAlt: "Flexitank multi-ply liner installed inside a 20ft container",
      },
      {
        step: "Step 02",
        title: "Precision Bulk Pumping",
        description:
          "Continuous temperature-regulated pumping directly from refinery storage silos. Weighbridge verified loading target of 21,500 – 22,000 kg net volume.",
        badge: "Weighbridge Calibrated",
        image: containerLoading,
        imageAlt:
          "Precision bulk pumping from refinery storage silos into flexitank container",
      },
      {
        step: "Step 03",
        title: "Valve Lock & Tamper Seal",
        description:
          "3-inch high-flow ball valve locked and sealed with tamper-evident serialized lock tags (e.g. Seal #EBT 344422) preventing cross-contamination in transit.",
        badge: "Serialized Bolt Seals",
        image: containerFaucet,
        imageAlt:
          "High-flow ball valve locked with serialized tamper-evident seal",
      },
      {
        step: "Step 04",
        title: "Bulkhead & Steel Bracing",
        description:
          "Installation of heavy-gauge corrugated bulkhead supported by five high-strength steel retention bars to prevent liquid surge and maritime movement shock.",
        badge: "Certified Sea-Worthy Bracing",
        image: containerLoadingFinished,
        imageAlt:
          "Corrugated bulkhead and steel retention bars bracing the flexitank",
      },
    ],
    haulage: {
      eyebrow: "DEDICATED HAULAGE INFRASTRUCTURE",
      headingSegments: [
        { text: "Port Haulage & ", highlight: false },
        { text: "Nighttime Vessel Gate-In.", highlight: true },
      ],
      description:
        "Our contracted container truck convoys operate direct staging routes between our Cakung consolidation hub and the international container terminals of Tanjung Priok (Jakarta), ensuring prompt customs clearance and smooth ocean vessel loading.",
      highlights: [
        {
          title: "Jakarta Terminal",
          subtitle: "Tanjung Priok Port (IDTPP)",
        },
        {
          title: "Cakung Staging Yard",
          subtitle: "Direct Port Logistics Corridor",
        },
        {
          title: "Transit Time",
          subtitle: "Direct port trucking within 2h",
        },
      ],
      images: [
        {
          src: multiTruck,
          alt: "Container truck convoy ready for port haulage",
          label: "Convoy Fleet Staging",
          bentoClass: "col-span-7 h-44 sm:h-52",
        },
        {
          src: containerLoading,
          alt: "Automated bulk loading bay into container truck",
          label: "Bay Loading Terminal",
          bentoClass: "col-span-5 h-44 sm:h-52",
        },
        {
          src: containerLoadingFinished,
          alt: "Reinforced bulkhead bracing on container chassis",
          label: "Sealed Bulkhead",
          bentoClass: "col-span-4 h-36 sm:h-40",
        },
        {
          src: containerReadyToDelivery,
          alt: "Nighttime container truck gate-in for vessel loading",
          label: "24/7 Nighttime Gate-In",
          bentoClass: "col-span-8 h-36 sm:h-40",
        },
      ],
    },
  },
  testimonials: {
    topEyebrow: "OUR TESTIMONIALS",
    topHeadingSegments: [
      { text: "Trusted Partnerships.", highlight: true },
      { text: " What People", highlight: false },
    ],
    topHeadingSecondLine: "Say About Us.",
    sideEyebrow: "WHAT PEOPLE SAY ABOUT US",
    sideHeadingSegments: [
      { text: "Built On ", highlight: false },
      { text: "Trust ", highlight: true },
      { text: "And ", highlight: false },
      { text: "Professionalism", highlight: true },
      { text: ".", highlight: false },
    ],
    sideDescription:
      "We prioritize strong, long-term partnerships built on mutual integrity and professional excellence.",
    items: [
      {
        tag: "Sustainability",
        quote:
          "I have worked with many coconut suppliers over the years, but Alam Rezeki stands out for their commitment to sustainability and supporting local farmers. I know that when I purchase from them, I am not only getting a high-quality product but also supporting a company that cares about the environment and the communities they work with.",
        author: "Jenny Wilson",
        avatar: testiJennyWilson,
      },
      {
        tag: "Quality & Service",
        quote:
          "I have been working with Alam Rezeki for several years now, and I can’t say enough about their commitment to quality and customer service. Their coconuts are always fresh and of the highest quality, and they go above and beyond to ensure that my orders are delivered on time and in perfect condition. I highly recommend them to anyone in the coconut industry.",
        author: "Devon Lane",
        avatar: testiDevonLane,
      },
    ],
  },
  quotation: {
    eyebrow: "DIRECT TRADE DESK",
    headingSegments: [
      { text: "Initiate A ", highlight: false },
      { text: "Commercial Export ", highlight: true },
      { text: "Quotation.", highlight: false },
    ],
    description:
      "Our international commercial desk provides rapid formal Proforma Invoices and freight-inclusive CIF quotes within 24 business hours. Connect directly with Alam Rezeki export logistics directors.",
    contacts: [
      {
        icon: "mail",
        title: "Commercial Export Desk",
        value: site.email,
        href: `mailto:${site.email}`,
        note: "Response Time: Under 4 hours",
      },
      {
        icon: "message-square",
        title: "WhatsApp Business International Desk",
        value: site.whatsapp.display,
        href: whatsappUrl,
        note: "Direct chat with trade brokers",
      },
      {
        icon: "map-pin",
        title: "Headquarters & Logistics Hub",
        value: site.address,
        href: `https://maps.google.com/?q=${encodeURIComponent(site.address)}`,
        note: "Consolidation & Export Hub, Jakarta",
      },
    ],
    form: {
      headingSegments: [
        { text: "Export ", highlight: false },
        { text: "Request Form.", highlight: true },
      ],
      description:
        "Specify destination port and intended cargo volume for an official price schedule from Alam Rezeki.",
      fields: {
        commodityLabel: "Select Commodity",
        packagingLabel: "Preferred Packaging",
        volumeLabel: "Estimated Volume",
        incotermLabel: "Preferred Incoterm",
        destinationLabel: "Destination Port & Country",
        destinationPlaceholder: "e.g. Rotterdam, Hamburg, Jebel Ali, Qingdao",
        companyLabel: "Company / Organization Name",
        companyPlaceholder: "e.g. Global Trading Ltd.",
        emailLabel: "Business Work Email",
        emailPlaceholder: "procurement@company.com",
        phoneLabel: "Phone / WhatsApp with Country Code",
        phonePlaceholder: "+1 / +44 / +86 / +971 ...",
        notesLabel: "Special Technical Requirements or Notes",
        notesPlaceholder:
          "Specify requested commodity grade, packaging, shipping window, or lab inspection requirements...",
        submitLabel: "Submit Formal Quotation Request",
      },
      commodityOptions: [
        "Refined, Bleached, and Deodorized (RBD) Coconut Oil",
        "Virgin Coconut Oil (VCO)",
        "Coconut Sugar",
        "Coconut Fiber (Dried)",
        "Desiccated Coconut (Medium, Fine, Extra Fine)",
        "Cocopeat Block",
      ],
      packagingOptions: [
        "Bulk Flexitank (21.5 - 22 MT / 20ft FCL)",
        "IBC Totes (1,000 L)",
        "Food-Grade Steel Drums (190 kg)",
        "25kg Kraft / Poly Bags",
        "Compressed Blocks / Bales",
      ],
      volumeOptions: [
        "Trial Order (1 x 20ft FCL ~ 22 MT)",
        "Commercial Lot (2 - 5 x 20ft FCL)",
        "Monthly Contract (5 - 10+ FCL / Month)",
      ],
      incotermOptions: [
        "CIF (Port of Destination)",
        "FOB (Port of Tanjung Priok, Jakarta)",
        "CFR (Cost and Freight)",
      ],
    },
  },
} as const;
