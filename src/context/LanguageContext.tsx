import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type LanguageCode = 'en' | 'hi';

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface SeedMetric {
  label: string;
  value: string;
  unit: string;
}

export interface SeedVariety {
  id: string;
  code: string;
  badge: string;
  name: string;
  yield: string;
  duration: string;
  highlight: string;
  description: string;
  specs: string[];
}

export interface PillarItem {
  number: string;
  title: string;
  hindiSub: string;
  description: string;
  tags: string[];
}

export type GalleryCategory = 'leadership' | 'community' | 'summit';
export type GallerySpan = 'wide' | 'tall' | 'normal';

export interface GalleryItem {
  id: string;
  src: string;
  fallback: string;
  category: GalleryCategory;
  title: string;
  location: string;
  span: GallerySpan;
}

export interface TranslationSchema {
  meta: {
    code: LanguageCode;
    label: string;
    switchLabel: string;
    region: string;
  };
  nav: {
    brandName: string;
    brandSub: string;
    legacy: string;
    shriram: string;
    gallery: string;
    inputs: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    shopBadge: string;
    greeting: string;
    titleLine1: string;
    titleAccent: string;
    titleLine2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    scrollHint: string;
    portraitTag: string;
    badgeRole: string;
    badgeLocation: string;
    stats: StatItem[];
    marquee: string;
    galleryHeader: {
      tag: string;
      title: string;
      subtitle: string;
    };
  };
  featuredSeeds: {
    eyebrow: string;
    headlinePart1: string;
    headlineAccent: string;
    description: string;
    seasonBadge: string;
    yieldLabel: string;
    maturityLabel: string;
    flagship: {
      badge: string;
      companyBadge: string;
      code: string;
      name: string;
      tagline: string;
      description: string;
      packBadge: string;
      packCaption: string;
      metrics: SeedMetric[];
      features: string[];
      cta: string;
    };
    varieties: SeedVariety[];
    advisory: {
      title: string;
      text: string;
      cta: string;
    };
  };
  pillars: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: PillarItem[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterLeadership: string;
    filterCommunity: string;
    filterSummit: string;
    items: GalleryItem[];
  };
  footer: {
    eyebrow: string;
    ctaHeadline1: string;
    ctaHeadline2: string;
    ctaSub: string;
    phoneLabel: string;
    primaryPhone: string;
    secondaryPhone: string;
    callAction: string;
    whatsappAction: string;
    addressLabel: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    hoursLabel: string;
    hoursValue: string;
    affiliationsLabel: string;
    affiliations: string[];
    copyright: string;
    topBtn: string;
  };
}

const translations: Record<LanguageCode, TranslationSchema> = {
  en: {
    meta: {
      code: 'en',
      label: 'EN',
      switchLabel: 'हिंदी में देखें',
      region: 'Orai, Dist. Jalaun • Uttar Pradesh',
    },
    nav: {
      brandName: 'PRABHAT TIWARI',
      brandSub: 'MANURAJ TRADERS • WHOLESALE & RETAIL',
      legacy: 'Legacy',
      shriram: 'Shriram 303',
      gallery: 'Gallery',
      inputs: 'Crop Solutions',
      contact: 'Contact',
      cta: 'Inquire Now',
    },
    hero: {
      eyebrow: 'MANURAJ TRADERS • PREMIER WHOLESALER & RETAILER • ORAI, UP',
      shopBadge: 'Manuraj Traders (Wholesale & Retail)',
      greeting: 'Shri Prabhat Tiwari',
      titleLine1: 'CULTIVATING',
      titleAccent: 'PROSPERITY',
      titleLine2: 'IN BUNDELKHAND',
      subtitle:
        'Through Manuraj Traders in Orai (Jalaun), Shri Prabhat Tiwari serves both fellow agri-dealers as a trusted wholesaler and thousands of farmers as a dedicated retailer — supplying 100% genuine Shriram seasonal seeds, crop protection pesticides, and soil-enriching fertilizers.',
      primaryCta: 'Explore Shriram 303',
      secondaryCta: 'Wholesale & Retail Inquiry',
      scrollHint: 'SCROLL TO EXPLORE LEGACY',
      portraitTag: 'PROPRIETOR • MANURAJ TRADERS',
      badgeRole: 'Wholesaler & Retailer • Agro Input Dealers Association & Vyapar Mandal Leader',
      badgeLocation: 'Orai, Jalaun (U.P.)',
      stats: [
        { value: '25+', label: 'Years of Agri Trust', detail: 'Manuraj Traders, Orai' },
        { value: 'Wholesale', label: '& Retail Supply Hub', detail: 'Bulk & Direct Farmer Sales' },
        { value: '15,000+', label: 'Farmers & Dealers Served', detail: 'Across Orai & Jalaun' },
        { value: '#1', label: 'DCM Shriram Partner', detail: 'Authorized Super 303 Stockist' },
      ],
      marquee:
        'MANURAJ TRADERS ORAI • WHOLESALER & RETAILER • DCM SHRIRAM SUPER 303 • CERTIFIED FERTILIZERS • ADVANCED CROP PROTECTION • BUNDELKHAND AGRI LEADER • ',
      galleryHeader: {
        tag: 'FIELD & COMMUNITY IMPACT',
        title: 'A Legacy Built on Ground-Level Leadership',
        subtitle:
          'From agricultural science summits with FMC to leading the Agro Input Dealers Association and Vyapar Mandal in Jalaun — trust earned face-to-face at Manuraj Traders.',
      },
    },
    featuredSeeds: {
      eyebrow: 'PEAK RABI SEASON HIGHLIGHT • DCM SHRIRAM WHEAT GENETICS',
      headlinePart1: 'THE GOLD STANDARD:',
      headlineAccent: 'SHRIRAM SUPER 303®',
      description:
        'Available in both wholesale bulk lots and retail farmer packs at Manuraj Traders, Orai. Discover why progressive farmers across Bundelkhand book Shriram Super 303 and companion varieties ahead of every sowing window.',
      seasonBadge: 'WHOLESALE & RETAIL STOCK AVAILABLE AT MANURAJ TRADERS',
      yieldLabel: 'YIELD POTENTIAL',
      maturityLabel: 'MATURITY',
      flagship: {
        badge: 'FLAGSHIP VARIETY • MOST DEMANDED',
        companyBadge: 'DCM SHRIRAM LIMITED',
        code: 'DCM SHRIRAM',
        name: 'Shriram Super 303®',
        tagline: 'The Undisputed Yield Champion of Uttar Pradesh',
        description:
          'Renowned across Orai and Jalaun for its bold, amber-gold lustred grains, superior tillering capacity (12–16 productive tillers/plant), and exceptional lodging resistance even under heavy irrigation and late winds.',
        packBadge: 'SUPER 303 • GOLD STANDARD',
        packCaption: '100% Genuine Sealed Pack • Available in Wholesale & Retail at Manuraj Traders',
        metrics: [
          { label: 'Potential Yield', value: '24–28', unit: 'Quintal / Acre' },
          { label: 'Crop Duration', value: '125–130', unit: 'Days to Maturity' },
          { label: 'Plant Height', value: '92–96', unit: 'cm (Anti-Lodging)' },
          { label: '1000-Grain Weight', value: '46–48', unit: 'Grams (Bold Grain)' },
        ],
        features: [
          'High tolerance to Yellow & Brown Rust diseases',
          'Superior chapati-making quality with 12.5%+ protein content',
          'Adaptable to both timely and slightly late sowing windows',
          'Heavy earheads with 75–85 tightly packed grains per spike',
        ],
        cta: 'Book Wholesale / Retail Stock',
      },
      varieties: [
        {
          id: 'super-234',
          code: 'SUPER 234',
          badge: 'LATE & TIMELY SOWING SPECIALIST',
          name: 'Shriram Super 234',
          yield: '22–25 Qtl/Acre',
          duration: '120–125 Days',
          highlight: 'Heat-Tolerant Terminal Stage',
          description:
            'Ideal for fields harvested after late paddy or mustard. Rapid early vigor ensures strong canopy closure and resilience against sudden February-March temperature spikes.',
          specs: ['Rust Resistant', 'High Tillering', 'Bold Amber Grain'],
        },
        {
          id: 'shriram-op',
          code: 'CERTIFIED OP',
          badge: 'CONSISTENT & RELIABLE FOUNDATION',
          name: 'Shriram OP Varieties',
          yield: '20–24 Qtl/Acre',
          duration: '125–135 Days',
          highlight: 'Uniform Germination & Soil Adaptability',
          description:
            'Open-Pollinated research wheat bred for wide adaptability across light and heavy soils of Jalaun with dependable grain weight and low water requirement.',
          specs: ['98% Purity', 'Drought Resilient', 'High Fodder Yield'],
        },
        {
          id: 'shriram-hybrid',
          code: 'NEXT-GEN HYBRID',
          badge: 'MAXIMUM BIOMASS & VIGOR',
          name: 'Shriram Hybrid Series',
          yield: '25–29 Qtl/Acre',
          duration: '128–132 Days',
          highlight: 'Heterosis-Driven Root & Spike Architecture',
          description:
            'Cutting-edge hybrid vigor delivering deep root systems for micronutrient uptake, synchronous maturity, and maximum grain-to-straw conversion ratio.',
          specs: ['Deep Root System', 'Zero Shattering', 'Export-Grade Lustre'],
        },
      ],
      advisory: {
        title: 'Seed Rate & Agronomic Advisory — Manuraj Traders, Orai',
        text: 'Use 40–45 kg/acre for timely sowing (Nov 1 – Nov 25) with balanced DAP/NPK basal dose and first crown-root irrigation (CRI) at 21 days for peak tillering.',
        cta: 'Inquire for Sowing Advice',
      },
    },
    pillars: {
      eyebrow: 'MANURAJ TRADERS • WHOLESALE & RETAIL ECOSYSTEM',
      title: 'Three Pillars of Our Agricultural Supply',
      subtitle:
        'Whether you are a retail farmer cultivating 5 acres or a regional dealer ordering in bulk, Manuraj Traders guarantees 100% batch-verified genuine inputs.',
      items: [
        {
          number: '01',
          title: 'Seasonal & Research Seeds',
          hindiSub: 'उन्नत मौसमी बीज (Wholesale & Retail)',
          description:
            'Authorized wholesale & retail supply of DCM Shriram Super Wheat (303, 234, OP, Hybrid), high-yielding mustard, gram, pea, and Kharif hybrid seeds.',
          tags: ['Shriram Super 303', 'Wholesale & Retail', 'High Germination'],
        },
        {
          number: '02',
          title: 'Crop Protection & Pesticides',
          hindiSub: 'कीटनाशक एवं फसल सुरक्षा',
          description:
            'Targeted insecticides, fungicides, and selective herbicides from global leaders like FMC, Bayer, and Syngenta to safeguard crops from pests and weed competition.',
          tags: ['FMC Authorized Partner', 'Systemic Fungicides', 'Selective Herbicides'],
        },
        {
          number: '03',
          title: 'Fertilizers & Plant Nutrition',
          hindiSub: 'उर्वरक एवं सूक्ष्म पोषक तत्व',
          description:
            'Balanced primary nutrients (NPK, DAP, Urea) alongside chelated Zinc, Sulphur, Boron, and bio-stimulants engineered to restore Bundelkhand soil vitality.',
          tags: ['Soil Health Boosters', 'Chelated Micronutrients', 'Growth Promoters'],
        },
      ],
    },
    gallery: {
      eyebrow: 'MOMENTS OF TRUST & RECOGNITION',
      title: 'Leadership Across Orai & Jalaun',
      subtitle:
        'Honored by cabinet ministers, trade federations, and global agricultural science leaders for unwavering service to the farming and merchant community.',
      filterAll: 'All Moments',
      filterLeadership: 'Leadership & Honors',
      filterCommunity: 'Trade & Community',
      filterSummit: 'Agri Summits',
      items: [
        {
          id: 'g1',
          src: '/assets/images/g1.webp',
          fallback: '/assets/images/g1.jpg',
          category: 'leadership',
          title: 'Stage Address with Hon. Minister Swatantra Dev Singh Ji',
          location: 'Agro Input Dealers Association Convention • Jalaun',
          span: 'wide',
        },
        {
          id: 'g4',
          src: '/assets/images/g4.webp',
          fallback: '/assets/images/g4.jpg',
          category: 'leadership',
          title: 'Agro Input Dealers Association Excellence Felicitation',
          location: 'District Agricultural Honor • Jhansi / Jalaun',
          span: 'wide',
        },
        {
          id: 'g8',
          src: '/assets/images/g8.webp',
          fallback: '/assets/images/g8.jpg',
          category: 'summit',
          title: 'Keynote Speaker at FMC Agricultural Sciences Summit',
          location: 'FMC Technical Trade Conference',
          span: 'tall',
        },
        {
          id: 'g9',
          src: '/assets/images/g9.webp',
          fallback: '/assets/images/g9.jpg',
          category: 'leadership',
          title: 'Ceremonial Lamp Lighting at Agro Dealers Meet',
          location: 'Inaugural Ceremony with Dignitaries',
          span: 'normal',
        },
        {
          id: 'g7',
          src: '/assets/images/g7.webp',
          fallback: '/assets/images/g7.jpg',
          category: 'community',
          title: 'Bharatiya Udyog Vyapar Pratinidhi Mandal Presidium',
          location: 'District Executive Council • Jalaun',
          span: 'normal',
        },
        {
          id: 'g6',
          src: '/assets/images/g6.webp',
          fallback: '/assets/images/g6.jpg',
          category: 'leadership',
          title: 'Welcoming State Leadership for Farmer Welfare',
          location: 'Official Delegation Meet',
          span: 'tall',
        },
        {
          id: 'g10',
          src: '/assets/images/g10.webp',
          fallback: '/assets/images/g10.jpg',
          category: 'leadership',
          title: 'Traditional Safa & Trophy of Honor',
          location: 'Agro Input Dealers Association Ceremony',
          span: 'tall',
        },
        {
          id: 'g2',
          src: '/assets/images/g2.webp',
          fallback: '/assets/images/g2.jpg',
          category: 'summit',
          title: 'Addressing Trade & Agricultural Delegates',
          location: 'Orai Business & Farming Conclave',
          span: 'normal',
        },
        {
          id: 'g11',
          src: '/assets/images/g11.webp',
          fallback: '/assets/images/g11.jpg',
          category: 'community',
          title: 'Official Appointment & Trade Recognition',
          location: 'Bharatiya Udyog Vyapar Pratinidhi Mandal (U.P.)',
          span: 'normal',
        },
        {
          id: 'g5',
          src: '/assets/images/g5.webp',
          fallback: '/assets/images/g5.jpg',
          category: 'community',
          title: 'Representing Merchant & Farmer Interests',
          location: 'Administrative Memorandum Submission',
          span: 'normal',
        },
        {
          id: 'g3',
          src: '/assets/images/g3.webp',
          fallback: '/assets/images/g3.jpg',
          category: 'community',
          title: 'Supporting Local Commerce & Solidarity in Orai',
          location: 'Community Outreach • Orai',
          span: 'normal',
        },
      ],
    },
    footer: {
      eyebrow: 'MANURAJ TRADERS • WHOLESALE & RETAIL INQUIRIES',
      ctaHeadline1: 'LET’S GROW',
      ctaHeadline2: 'TOGETHER.',
      ctaSub:
        'Connect directly with Shri Prabhat Tiwari at Manuraj Traders for wholesale dealer lots or retail farmer bookings of Shriram Super 303 wheat seeds, fertilizers, and pesticides in Orai.',
      phoneLabel: 'DIRECT WHOLESALE & RETAIL INQUIRIES (CALL / WHATSAPP)',
      primaryPhone: '+91 94150 70129',
      secondaryPhone: '+91 79856 44893',
      callAction: 'Call Manuraj Traders',
      whatsappAction: 'WhatsApp Inquiry',
      addressLabel: 'SHOP & ESTABLISHMENT LOCATION',
      addressLine1: 'Manuraj Traders (Proprietor: Shri Prabhat Tiwari)',
      addressLine2: 'Wholesaler & Retailer — Agricultural Seeds, Fertilizers & Pesticides',
      addressLine3: 'Orai, District Jalaun, Uttar Pradesh — 285001, India',
      hoursLabel: 'STORE HOURS',
      hoursValue: 'Monday – Sunday: 8:00 AM – 8:30 PM (Peak Season Open All Days)',
      affiliationsLabel: 'LEADERSHIP & AUTHORIZATIONS',
      affiliations: [
        'Proprietor — Manuraj Traders (Wholesale & Retail), Orai',
        'Agro Input Dealers Association, Jalaun',
        'Bharatiya Udyog Vyapar Pratinidhi Mandal (U.P.)',
        'Authorized Stockist — DCM Shriram & FMC',
      ],
      copyright: '© 2026 Manuraj Traders • Shri Prabhat Tiwari, Orai (U.P.). All Rights Reserved.',
      topBtn: 'TOP',
    },
  },
  hi: {
    meta: {
      code: 'hi',
      label: 'हिं',
      switchLabel: 'Switch to English',
      region: 'उरई, जिला जालौन • उत्तर प्रदेश',
    },
    nav: {
      brandName: 'श्री प्रभात तिवारी',
      brandSub: 'मनुराज ट्रेडर्स • WHOLESALE & RETAIL',
      legacy: 'विरासत',
      shriram: 'श्रीराम 303',
      gallery: 'गैलरी',
      inputs: 'कृषि समाधान',
      contact: 'संपर्क करें',
      cta: 'अभी बात करें',
    },
    hero: {
      eyebrow: 'मनुराज ट्रेडर्स • प्रमुख WHOLESALE & RETAIL कृषि प्रतिष्ठान • उरई (जालौन)',
      shopBadge: 'मनुराज ट्रेडर्स (Wholesale & Retail)',
      greeting: 'श्री प्रभात तिवारी',
      titleLine1: 'उन्नत कृषि,',
      titleAccent: 'समृद्ध किसान',
      titleLine2: 'भरोसे की अटूट परंपरा',
      subtitle:
        'उरई (जालौन) स्थित अपने प्रतिष्ठित प्रतिष्ठान "मनुराज ट्रेडर्स" के माध्यम से श्री प्रभात तिवारी प्रमाणित मौसमी बीजों, उच्च क्षमता वाले कीटनाशकों और उर्वरकों के प्रमुख Wholesaler एवं Retailer के रूप में किसानों और व्यापारियों की सेवा कर रहे हैं।',
      primaryCta: 'श्रीराम 303 बीज देखें',
      secondaryCta: 'Wholesale & Retail पूछताछ',
      scrollHint: 'विरासत और उपलब्धियां देखने के लिए नीचे स्क्रॉल करें',
      portraitTag: 'प्रोप्राइटर • मनुराज ट्रेडर्स',
      badgeRole: 'Wholesaler & Retailer • एग्रो इनपुट डीलर्स एसोसिएशन एवं व्यापार मंडल नेतृत्व',
      badgeLocation: 'उरई, जालौन (उ.प्र.)',
      stats: [
        { value: '25+', label: 'वर्षों का अटूट विश्वास', detail: 'मनुराज ट्रेडर्स, उरई' },
        { value: 'Wholesale', label: '& Retail आपूर्ति केंद्र', detail: 'किसानों व डीलरों की पहली पसंद' },
        { value: '15,000+', label: 'संतुष्ट किसान व व्यापारी', detail: 'उरई एवं जालौन क्षेत्र में' },
        { value: '#1', label: 'DCM श्रीराम अधिकृत केंद्र', detail: 'सुपर 303 का प्रमुख स्टॉक' },
      ],
      marquee:
        'मनुराज ट्रेडर्स उरई • WHOLESALER & RETAILER • श्रीराम सुपर 303 • प्रमाणित खाद एवं उर्वरक • उन्नत कीटनाशक • बुंदेलखंड किसान मित्र • ',
      galleryHeader: {
        tag: 'सामाजिक एवं कृषि नेतृत्व',
        title: 'जमीन से जुड़ा नेतृत्व और किसानों का सम्मान',
        subtitle:
          'एफएमसी (FMC) कृषि विज्ञान सम्मेलनों से लेकर एग्रो इनपुट डीलर्स एसोसिएशन और भारतीय उद्योग व्यापार प्रतिनिधि मंडल में सक्रिय भूमिका।',
      },
    },
    featuredSeeds: {
      eyebrow: 'रबी सीजन विशेष आकर्षण • डीसीएम श्रीराम गेहूं बीज',
      headlinePart1: 'भरपूर पैदावार की पहचान:',
      headlineAccent: 'श्रीराम सुपर 303®',
      description:
        'मनुराज ट्रेडर्स, उरई पर Wholesale और Retail दोनों में उपलब्ध। जानिए क्यों बुंदेलखंड के प्रगतिशील किसान श्रीराम सुपर 303 और अन्य किस्मों की बुकिंग महीनों पहले कराते हैं।',
      seasonBadge: 'मनुराज ट्रेडर्स पर WHOLESALE & RETAIL ताजा स्टॉक उपलब्ध',
      yieldLabel: 'संभावित पैदावार',
      maturityLabel: 'फसल अवधि',
      flagship: {
        badge: 'सर्वश्रेष्ठ किस्म • सर्वाधिक मांग',
        companyBadge: 'डीसीएम श्रीराम लिमिटेड',
        code: 'DCM SHRIRAM',
        name: 'श्रीराम सुपर 303® (Super 303)',
        tagline: 'उत्तर प्रदेश में रिकॉर्ड पैदावार का बेताज बादशाह',
        description:
          'चमकदार, ठोस शरबती जैसे सुनहरे दाने, प्रति पौधा 12 से 16 फुटाव (कल्ले) की अद्भुत क्षमता और तेज हवा व सिंचाई में भी न गिरने वाला मजबूत तना।',
        packBadge: 'सुपर 303 • गोल्ड स्टैंडर्ड',
        packCaption: '100% असली सीलबंद पैक • मनुराज ट्रेडर्स पर Wholesale & Retail में उपलब्ध',
        metrics: [
          { label: 'संभावित पैदावार', value: '24–28', unit: 'क्विंटल / एकड़' },
          { label: 'फसल अवधि', value: '125–130', unit: 'दिन (पकने का समय)' },
          { label: 'पौधे की ऊंचाई', value: '92–96', unit: 'सेमी (गिरने से सुरक्षित)' },
          { label: '1000 दानों का वजन', value: '46–48', unit: 'ग्राम (ठोस व चमकदार)' },
        ],
        features: [
          'पीला और भूरा रतुआ (Rust) रोग के प्रति उच्च प्रतिरोधक क्षमता',
          '12.5%+ प्रोटीन के साथ नरम और स्वादिष्ट रोटी के लिए सर्वोत्तम',
          'अगेती और मध्यम बुवाई दोनों के लिए अत्यंत उपयुक्त',
          'लंबी और गठीली बालियां — प्रति बाली 75 से 85 भरपूर दाने',
        ],
        cta: 'Wholesale / Retail बुकिंग करें',
      },
      varieties: [
        {
          id: 'super-234',
          code: 'सुपर 234',
          badge: 'पछेती एवं समय पर बुवाई विशेषज्ञ',
          name: 'श्रीराम सुपर 234 (Super 234)',
          yield: '22–25 क्विंटल/एकड़',
          duration: '120–125 दिन',
          highlight: 'अंतिम अवस्था में अधिक तापमान सहनशील',
          description:
            'धान या लाही के बाद खाली होने वाले खेतों के लिए वरदान। शुरुआती तेज बढ़वार और फरवरी-मार्च की अचानक गर्मी में भी दानों को सिकुड़ने से बचाता है।',
          specs: ['रतुआ रोग रोधी', 'अधिक कल्ले', 'चमकदार सुनहरे दाने'],
        },
        {
          id: 'shriram-op',
          code: 'प्रमाणित OP',
          badge: 'भरोसेमंद और सदाबहार प्रदर्शन',
          name: 'श्रीराम OP उन्नत किस्में',
          yield: '20–24 क्विंटल/एकड़',
          duration: '125–135 दिन',
          highlight: 'समान अंकुरण एवं हर मिट्टी में उपयुक्त',
          description:
            'जालौन की हल्की और भारी दोनों प्रकार की भूमि के लिए अनुकूलित। कम पानी में भी शानदार वजन और पशुओं के लिए भरपूर भूसा प्रदान करने वाली किस्म।',
          specs: ['98% शुद्धता', 'कम पानी में सक्षम', 'भरपूर भूसा व अनाज'],
        },
        {
          id: 'shriram-hybrid',
          code: 'हाइब्रिड सीरीज',
          badge: 'अधिकतम फुटाव और आधुनिक तकनीक',
          name: 'श्रीराम हाइब्रिड गेहूं सीरीज',
          yield: '25–29 क्विंटल/एकड़',
          duration: '128–132 दिन',
          highlight: 'गहरी जड़ प्रणाली और एकसमान पकाव',
          description:
            'आधुनिक हाइब्रिड शक्ति से युक्त जो मिट्टी की गहराई से पोषक तत्व खींचती है, जिससे हर बाली एक साथ पकती है और दानों का झड़ना शून्य रहता है।',
          specs: ['गहरी मजबूत जड़ें', 'दाने झड़ने से मुक्त', 'मंडी में उच्चतम भाव'],
        },
      ],
      advisory: {
        title: 'मनुराज ट्रेडर्स (श्री प्रभात तिवारी) की विशेष कृषि सलाह',
        text: 'समय पर बुवाई (1 नवंबर से 25 नवंबर) हेतु 40–45 किग्रा प्रति एकड़ बीज का प्रयोग करें। बुवाई के समय संतुलित डीएपी/एनपीके और 21वें दिन पहली सिंचाई (CRI अवस्था) करने से अधिकतम कल्ले निकलते हैं।',
        cta: 'बुवाई परामर्श लें',
      },
    },
    pillars: {
      eyebrow: 'मनुराज ट्रेडर्स • संपूर्ण WHOLESALE & RETAIL कृषि समाधान',
      title: 'हमारी कृषि सेवाओं के तीन मुख्य स्तंभ',
      subtitle:
        'चाहे आप अपने खेत के लिए Retail खरीदारी कर रहे हों या व्यापार हेतु Wholesale ऑर्डर दे रहे हों, मनुराज ट्रेडर्स पर प्रत्येक उत्पाद शत-प्रतिशत प्रमाणित मिलता है।',
      items: [
        {
          number: '01',
          title: 'उन्नत मौसमी एवं हाइब्रिड बीज',
          hindiSub: 'Wholesale & Retail बीज आपूर्ति',
          description:
            'डीसीएम श्रीराम सुपर गेहूं (303, 234, OP, Hybrid), सरसों, चना, मटर और खरीफ सीजन के उच्च अंकुरण क्षमता वाले प्रमाणित बीजों की अधिकृत श्रृंखला।',
          tags: ['श्रीराम सुपर 303', 'Wholesale & Retail', 'गारंटीड अंकुरण'],
        },
        {
          number: '02',
          title: 'कीटनाशक एवं फसल सुरक्षा',
          hindiSub: 'Pesticides & Crop Protection',
          description:
            'FMC, बायर और सिंजेंटा जैसी विश्वस्तरीय कंपनियों के कीटनाशक, फफूंदनाशक और खरपतवारनाशक जो आपकी फसल को हर रोग और कीट से सुरक्षित रखें।',
          tags: ['FMC अधिकृत पार्टनर', 'प्रभावी फफूंदनाशक', 'खरपतवार नियंत्रण'],
        },
        {
          number: '03',
          title: 'उर्वरक एवं सूक्ष्म पोषक तत्व',
          hindiSub: 'Fertilizers & Soil Nutrition',
          description:
            'बुंदेलखंड की मिट्टी की उर्वरा शक्ति बढ़ाने के लिए NPK, DAP, यूरिया के साथ जिंक, सल्फर, बोरॉन और प्रीमियम बायो-स्टिमुलेंट्स की उपलब्धता।',
          tags: ['मृदा स्वास्थ्य वर्धक', 'चिलेटेड माइक्रोन्यूट्रिएंट्स', 'ग्रोथ प्रमोटर'],
        },
      ],
    },
    gallery: {
      eyebrow: 'सम्मान, नेतृत्व और जनसेवा की झलकियां',
      title: 'उरई और जालौन में कृषि एवं व्यापार नेतृत्व',
      subtitle:
        'कैबिनेट मंत्रियों, कृषि वैज्ञानिकों और व्यापार मंडलों द्वारा किसान हित एवं व्यापारिक निष्ठा के लिए सम्मानित गौरवशाली क्षण।',
      filterAll: 'सभी झलकियां',
      filterLeadership: 'नेतृत्व एवं सम्मान',
      filterCommunity: 'व्यापार मंडल एवं समाज',
      filterSummit: 'कृषि सम्मेलन',
      items: [
        {
          id: 'g1',
          src: '/assets/images/g1.webp',
          fallback: '/assets/images/g1.jpg',
          category: 'leadership',
          title: 'मा. कैबिनेट मंत्री स्वतंत्र देव सिंह जी के साथ मंचीय संबोधन',
          location: 'एग्रो इनपुट डीलर्स एसोसिएशन समारोह • जालौन',
          span: 'wide',
        },
        {
          id: 'g4',
          src: '/assets/images/g4.webp',
          fallback: '/assets/images/g4.jpg',
          category: 'leadership',
          title: 'एग्रो इनपुट डीलर्स एसोसिएशन द्वारा गौरव सम्मान',
          location: 'शपथ ग्रहण एवं सदस्यता अभियान • झांसी / जालौन',
          span: 'wide',
        },
        {
          id: 'g8',
          src: '/assets/images/g8.webp',
          fallback: '/assets/images/g8.jpg',
          category: 'summit',
          title: 'FMC कृषि विज्ञान सम्मेलन में मुख्य संबोधन',
          location: 'FMC टेक्निकल ट्रेड समिट',
          span: 'tall',
        },
        {
          id: 'g9',
          src: '/assets/images/g9.webp',
          fallback: '/assets/images/g9.jpg',
          category: 'leadership',
          title: 'मा. स्वतंत्र देव सिंह जी के साथ दीप प्रज्वलन एवं शुभारंभ',
          location: 'कृषि एवं व्यापार महासम्मेलन',
          span: 'normal',
        },
        {
          id: 'g7',
          src: '/assets/images/g7.webp',
          fallback: '/assets/images/g7.jpg',
          category: 'community',
          title: 'भारतीय उद्योग व्यापार प्रतिनिधि मंडल जालौन की बैठक',
          location: 'जिला कार्यकारिणी संवाद • उरई',
          span: 'normal',
        },
        {
          id: 'g6',
          src: '/assets/images/g6.webp',
          fallback: '/assets/images/g6.jpg',
          category: 'leadership',
          title: 'किसान एवं व्यापारी हित में वरिष्ठ नेतृत्व का अभिनंदन',
          location: 'सौजन्य भेंट एवं संवाद',
          span: 'tall',
        },
        {
          id: 'g10',
          src: '/assets/images/g10.webp',
          fallback: '/assets/images/g10.jpg',
          category: 'leadership',
          title: 'पारंपरिक पगड़ी एवं स्मृति चिन्ह से अभिनंदन',
          location: 'एग्रो इनपुट डीलर्स एसोसिएशन समारोह',
          span: 'tall',
        },
        {
          id: 'g2',
          src: '/assets/images/g2.webp',
          fallback: '/assets/images/g2.jpg',
          category: 'summit',
          title: 'व्यापारी एवं कृषि प्रतिनिधियों को संबोधित करते हुए',
          location: 'उरई कृषि एवं व्यापार संगोष्ठी',
          span: 'normal',
        },
        {
          id: 'g11',
          src: '/assets/images/g11.webp',
          fallback: '/assets/images/g11.jpg',
          category: 'community',
          title: 'भारतीय उद्योग व्यापार प्रतिनिधि मंडल (उ.प्र.) मनोनयन एवं सम्मान',
          location: 'संगठन विस्तार • उरई',
          span: 'normal',
        },
        {
          id: 'g5',
          src: '/assets/images/g5.webp',
          fallback: '/assets/images/g5.jpg',
          category: 'community',
          title: 'व्यापारी एवं किसान हितों के लिए ज्ञापन एवं प्रतिनिधित्व',
          location: 'जिला प्रशासनिक संवाद • जालौन',
          span: 'normal',
        },
        {
          id: 'g3',
          src: '/assets/images/g3.webp',
          fallback: '/assets/images/g3.jpg',
          category: 'community',
          title: 'स्थानीय व्यापारियों के साथ सहयोग एवं सहभागिता',
          location: 'उरई बाजार क्षेत्र',
          span: 'normal',
        },
      ],
    },
    footer: {
      eyebrow: 'मनुराज ट्रेडर्स • WHOLESALE & RETAIL बुकिंग केंद्र',
      ctaHeadline1: 'आइए साथ मिलकर',
      ctaHeadline2: 'समृद्धि उगाएं।',
      ctaSub:
        'श्रीराम सुपर 303 गेहूं बीज, मौसमी उर्वरक और कीटनाशकों की Wholesale एवं Retail बुकिंग के लिए मनुराज ट्रेडर्स, उरई पर सीधे संपर्क करें।',
      phoneLabel: 'WHOLESALE & RETAIL व्यापारिक पूछताछ (कॉल / व्हाट्सएप)',
      primaryPhone: '+91 94150 70129',
      secondaryPhone: '+91 79856 44893',
      callAction: 'मनुराज ट्रेडर्स पर कॉल करें',
      whatsappAction: 'व्हाट्सएप पर संदेश भेजें',
      addressLabel: 'प्रतिष्ठान एवं दुकान का पता',
      addressLine1: 'मनुराज ट्रेडर्स (प्रोप्राइटर: श्री प्रभात तिवारी)',
      addressLine2: 'Wholesaler & Retailer — उन्नत कृषि बीज, उर्वरक एवं कीटनाशक',
      addressLine3: 'उरई, जिला जालौन, उत्तर प्रदेश — 285001, भारत',
      hoursLabel: 'दुकान खुलने का समय',
      hoursValue: 'सोमवार – रविवार: सुबह 8:00 से रात 8:30 बजे तक (सीजन में प्रतिदिन खुला)',
      affiliationsLabel: 'प्रमुख पद एवं अधिकृत संबद्धता',
      affiliations: [
        'प्रोप्राइटर — मनुराज ट्रेडर्स (Wholesale & Retail), उरई',
        'एग्रो इनपुट डीलर्स एसोसिएशन, जालौन',
        'भारतीय उद्योग व्यापार प्रतिनिधि मंडल (उ.प्र.)',
        'अधिकृत विक्रेता — डीसीएम श्रीराम एवं FMC',
      ],
      copyright: '© 2026 मनुराज ट्रेडर्स • श्री प्रभात तिवारी, उरई (उ.प्र.)। सर्वाधिकार सुरक्षित।',
      topBtn: 'ऊपर जाएं',
    },
  },
};

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: React.Dispatch<React.SetStateAction<LanguageCode>>;
  toggleLanguage: () => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pt_portfolio_lang');
      if (saved === 'en' || saved === 'hi') return saved;
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('pt_portfolio_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
