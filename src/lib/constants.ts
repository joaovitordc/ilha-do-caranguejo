// ============================================
// ILHA DO CARANGUEJO — Site Content
// ============================================

export const SITE = {
  name: "Ilha do Caranguejo",
  tagline: "O ponto turístico da culinária capixaba",
  description:
    "Servindo o melhor da culinária capixaba desde sempre. Caranguejo, moquecas, petiscos e muito mais em Vitória e Vila Velha - ES.",
  menuUrl: "https://ilhadocaranguejo.com/",
  promotionsUrl: "https://promos.ilhadocaranguejo.com/",
  farofaUrl: "https://farofasteakhouse.com/",
  jobsUrl: "https://grupoilha.vagas.solides.com.br/",
  instagram: "https://www.instagram.com/ilhadocaranguejo/",
  facebook: "https://pt-br.facebook.com/ilhadocaranguejovv/",
};

export const MISSION = {
  mission:
    "Oferecer uma excelente experiência gastronômica e trazer alegria para toda a família.",
  vision:
    "Ser reconhecido como \"Ponto Turístico\" do Espírito Santo.",
  values:
    "Alegria, ousadia, criatividade, compromisso, respeito e excelência.",
};

export const SPECIALTIES = [
  {
    id: "caranguejo",
    title: "Caranguejo",
    description:
      "O prato símbolo do Espírito Santo. Preparado com temperos tradicionais capixabas e servido na casca.",
    icon: "/images/icons/crabicon.png",
    image: "/images/food/IRO2920.jpg",
    color: "#C44B2B",
  },
  {
    id: "moquecas",
    title: "Moquecas",
    description:
      "A moqueca capixaba é patrimônio imaterial do ES. Feita em panela de barro, com azeite de oliva e urucum.",
    icon: "/images/icons/cooking.png",
    image: "/images/food/IRO0441.jpg",
    color: "#D4956A",
  },
  {
    id: "petiscos",
    title: "Petiscos",
    description:
      "Uma grande variedade de petiscos do mar para compartilhar. Frutos do mar frescos e muito sabor.",
    icon: "/images/icons/petisco.png",
    image: "/images/food/IMG_0508.jpg",
    color: "#2D6A5A",
  },
  {
    id: "kids",
    title: "Área Kids",
    description:
      "Um espaço especial para os pequenos. Enquanto os adultos curtem, as crianças se divertem com segurança.",
    icon: "/images/icons/playground.png",
    image: "/images/ambiance/8F3A4011.jpg",
    color: "#6B6560",
  },
];

export const GALLERY_IMAGES = [
  { src: "/images/ambiance/IRO2277.jpg", alt: "Ambiente do restaurante", size: "large" },
  { src: "/images/ambiance/IRO0378.jpg", alt: "Equipe servindo", size: "small" },
  { src: "/images/food/IRO2920.jpg", alt: "Prato de caranguejo", size: "small" },
  { src: "/images/ambiance/8F3A4011.jpg", alt: "Salão do restaurante", size: "large" },
  { src: "/images/ambiance/IMG_5239.jpg", alt: "Mesa posta", size: "small" },
  { src: "/images/food/IRO0441.jpg", alt: "Moqueca capixaba", size: "small" },
  { src: "/images/ambiance/servindo.jpg", alt: "Atendimento", size: "large" },
  { src: "/images/ambiance/8F3A4155.jpg", alt: "Área do restaurante", size: "small" },
];

export const TESTIMONIALS = [
  {
    name: "Carlo Pecca",
    role: "Local Guide",
    avatar: "/images/reviews/review1.png",
    text: "Grande diversidade de cardápio marinho. Comida deliciosa e preço justo. Ambiente e brinquedos excelentes para crianças.",
    stars: 5,
  },
  {
    name: "Gilberto Santos",
    role: "Local Guide",
    avatar: "/images/reviews/review2.png",
    text: "Ambiente alegre, descontraído, os funcionários uma simpatia só, um show à parte. A comida é maravilhosa, muito saborosa.",
    stars: 5,
  },
  {
    name: "William Dias",
    role: "Local Guide",
    avatar: "/images/reviews/review3.png",
    text: "Ótimo caranguejo, recomendo muito esse lugar. Em especial o atendimento da Nat, que tornou a noite ainda melhor para nossa primeira visita em Vitória.",
    stars: 5,
  },
  {
    name: "Camila Barros",
    role: "Local Guide",
    avatar: "/images/reviews/review4.png",
    text: "Simplesmente espetacular. Comida maravilhosa. Ambiente agradável. Recomendo.",
    stars: 5,
  },
];

export const LOCATIONS = [
  {
    id: "vitoria",
    city: "Vitória",
    name: "Ilha de Vitória",
    neighborhood: "Jardim Camburi",
    address: "Jardim Camburi, Vitória - ES",
    phone: "(27) 3395-0244",
    cta: "Fazer Reserva",
    ctaLink: "https://widget.getinapp.com.br/g1gEqzkw",
    ctaType: "link" as const,
    mapEmbed:
      "https://maps.google.com/maps?ll=-20.254932,-40.269212&z=15&output=embed",
  },
  {
    id: "vilavelha",
    city: "Vila Velha",
    name: "Ilha de Vila Velha",
    neighborhood: "Boulevard Shopping",
    address: "Rod. do Sol, 5000 - Itaparica, Vila Velha - ES, 29103-000",
    phone: "(27) 2233-8484",
    cta: "Ligar Agora",
    ctaLink: "tel:2722338484",
    ctaType: "tel" as const,
    mapEmbed:
      "https://maps.google.com/maps?ll=-20.392967,-40.31843&z=15&output=embed",
  },
];

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Onde Estamos", href: "#localizacao" },
];
