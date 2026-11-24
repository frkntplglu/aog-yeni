export const ORIGIN = "https://cleaneatstayfit.com";

export const contact = {
  name: "Ali Osman Gürsoy",
  brand: "Clean Eat Stay Fit",
  phone: "0 537 265 42 00",
  phoneHref: "tel:+905372654200",
  whatsapp: "https://wa.me/905372654200",
  address: "Patlangıç, 317. Sk. No: 12/A, 48300 Fethiye/Muğla",
  mapsQuery: "Patlangıç 317. Sk. No:12/A 48300 Fethiye Muğla",
  instagram: "https://www.instagram.com/aog08/",
  instagramHandle: "@aog08",
  youtube: "https://www.youtube.com/c/AliOsmanG%C3%9CRSOY",
};

export const nav = [
  { href: "/", label: "Anasayfa" },
  { href: "/egitimler", label: "Eğitimler" },
  { href: "/donusumler", label: "Dönüşümler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const hero = {
  tagline:
    "Değişim sende başlar. Yaşam standartlarını değiştirmeden değişim bekleme.",
};

export type ServiceIcon =
  | "dumbbell"
  | "salad"
  | "heart"
  | "pill"
  | "scan"
  | "message";

export const services: { title: string; text: string; icon: ServiceIcon }[] = [
  {
    title: "Antrenman Planlama",
    text: "Sana özel, hedefine göre kurgulanmış antrenman planı.",
    icon: "dumbbell",
  },
  {
    title: "Beslenme Planlama",
    text: "Kişiye özel hazırlanan günlük beslenme planları.",
    icon: "salad",
  },
  {
    title: "Kardiyo Planlama",
    text: "Yağ yakımını hızlandıran kardiyo planlaması.",
    icon: "heart",
  },
  {
    title: "Supplement Planlama",
    text: "Forma daha hızlı ulaşman için supplement planlaması.",
    icon: "pill",
  },
  {
    title: "Form Kontrolü",
    text: "Düzenli form kontrolleri ve plan güncellemeleri.",
    icon: "scan",
  },
  {
    title: "WhatsApp İletişim",
    text: "WhatsApp üzerinden birebir iletişim ve destek.",
    icon: "message",
  },
];

export const about = {
  bio: [
    "2013 yılında fitness koçluğuna başladım. 2014–2022 yılları arasında 11 yarışmaya katıldım ve birçoğunda 2. ve 3. oldum.",
    "2019'da Türkiye Vücut Geliştirme Federasyonu'nun Antalya'da düzenlediği Dünya Şampiyonası seçmelerinde 1. olarak aynı yıl Birleşik Arap Emirlikleri'nde Türkiye'yi milli sporcu olarak temsil ettim.",
    "Bugün Clean Eat Stay Fit'in kurucusu ve koçu olarak öğrencilerimi hedeflerine taşıyorum.",
  ],
  stats: [
    { value: 2013, suffix: "", label: "Koçluğa başlangıç" },
    { value: 11, suffix: "", label: "Yarışma" },
    { value: 1, suffix: ".", label: "2019 DŞ seçmeleri" },
    { value: 2026 - 2013, suffix: "+", label: "Yıl deneyim" },
  ],
  timeline: [
    { year: "2013", text: "Fitness koçluğuna başlangıç" },
    { year: "2014–22", text: "11 yarışma, birçok 2.lik ve 3.lük" },
    { year: "2019", text: "Antalya Dünya Şampiyonası seçmeleri 1.liği" },
    { year: "2019", text: "BAE'de Türkiye'yi milli sporcu olarak temsil" },
  ],
};

export type ProductGroup = "CLEAN EAT STAY FIT" | "İleri Seviye" | "Yarışmacı" | "Tekil";

export type Product = {
  slug: string;
  title: string;
  group: ProductGroup;
  category: "Beslenme" | "Fitness";
  price: number;
  oldPrice?: number;
  duration: string;
  image: string;
  featured?: boolean;
};

const img = (f: string) => `/images/products/${f}`;

export const products: Product[] = [
  {
    slug: "evde-ekipmansiz-egzersiz-rehberi-e-book",
    title: "Evde Ekipmansız Egzersiz Rehberi E-Book",
    group: "Tekil",
    category: "Fitness",
    price: 209,
    oldPrice: 299,
    duration: "E-Book",
    image: img("evde-egzersiz-rehberi-ebook.jpeg"),
  },
  {
    slug: "6-haftalik-clean-eat-stay-fit-programi",
    title: "6 Haftalık CLEAN EAT STAY FIT Programı",
    group: "CLEAN EAT STAY FIT",
    category: "Beslenme",
    price: 2100,
    duration: "6 Hafta",
    image: img("6-hafta-cleaneatstayfit-program-kopya.jpg"),
    featured: true,
  },
  {
    slug: "12-haftalik-clean-eat-stay-fit-programi",
    title: "12 Haftalık CLEAN EAT STAY FIT Programı",
    group: "CLEAN EAT STAY FIT",
    category: "Beslenme",
    price: 3500,
    duration: "12 Hafta",
    image: img("12-hafta-cleaneatstayfit-program.jpg"),
    featured: true,
  },
  {
    slug: "24-haftalik-clean-eat-stay-fit-programi",
    title: "24 Haftalık CLEAN EAT STAY FIT Programı",
    group: "CLEAN EAT STAY FIT",
    category: "Beslenme",
    price: 5950,
    duration: "24 Hafta",
    image: img("24-hafta-cleaneatstayfit-program-2.jpg"),
    featured: true,
  },
  {
    slug: "3-aylik-ileri-seviye-program",
    title: "3 Aylık İleri Seviye Program (Kür Destekli)",
    group: "İleri Seviye",
    category: "Fitness",
    price: 10500,
    duration: "3 Ay",
    image: img("3-aylk-ileri-seviye-kur-destekli.jpg"),
  },
  {
    slug: "6-aylik-ileri-seviye-program-kur-destekli",
    title: "6 Aylık İleri Seviye Program (Kür Destekli)",
    group: "İleri Seviye",
    category: "Fitness",
    price: 21000,
    duration: "6 Ay",
    image: img("6-aylk-ileri-seviye-kur-destekli.jpg"),
  },
  {
    slug: "clean-eat-stay-fit-vip-uyelik-aylik",
    title: "CLEAN EAT STAY FIT VIP Üyelik (Aylık)",
    group: "CLEAN EAT STAY FIT",
    category: "Beslenme",
    price: 5600,
    duration: "Aylık",
    image: img("24-hafta-cleaneatstayfit-program.jpg"),
    featured: true,
  },
  {
    slug: "antrenman-programi",
    title: "Antrenman Programı",
    group: "Tekil",
    category: "Fitness",
    price: 1400,
    duration: "Program",
    image: img("cleaneatstayfit-antrenman-program.jpg"),
  },
  {
    slug: "beslenme-programi",
    title: "Beslenme Programı",
    group: "Tekil",
    category: "Beslenme",
    price: 1400,
    duration: "Program",
    image: img("cleaneatstayfit-beslenme-program.jpg"),
  },
  {
    slug: "3-aylik-yarismaci-paketi-programi",
    title: "3 Aylık Yarışmacı Paketi Programı",
    group: "Yarışmacı",
    category: "Fitness",
    price: 14000,
    duration: "3 Ay",
    image: img("3-aylk-yarsmac-paketi-program.jpg"),
  },
  {
    slug: "6-aylik-yarismaci-paketi-programi",
    title: "6 Aylık Yarışmacı Paketi Programı",
    group: "Yarışmacı",
    category: "Fitness",
    price: 25200,
    duration: "6 Ay",
    image: img("6-aylk-yarsmac-paketi-program.jpg"),
  },
  {
    slug: "12-aylik-yarismaci-paketi-programi",
    title: "12 Aylık Yarışmacı Paketi Programı",
    group: "Yarışmacı",
    category: "Fitness",
    price: 42000,
    duration: "12 Ay",
    image: img("12-aylk-yarsmac-paketi-program.jpg"),
  },
];

export const productUrl = (slug: string) => `${ORIGIN}/urun/${slug}/`;

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
  }).format(n);

export const transformations = [1, 2, 3, 4, 5, 6].map((i) => ({
  id: i,
  src: `/images/transformations/degisim${i}.jpg`,
  alt: `Öğrenci dönüşümü ${i} — önce ve sonra`,
}));

export const posts = [
  {
    title: "En Etkili 3 Sırt Hareketi",
    url: `${ORIGIN}/en-etkili-3-sirt-hareketi/`,
    image: "/images/blog/gordon-cowie-4uypEK4FXRY-unsplash.jpg",
    tag: "Antrenman",
  },
  {
    title: "En Etkili 3 Göğüs Hareketi",
    url: `${ORIGIN}/en-etkili-3-gogus-hareketi/`,
    image: "/images/blog/gogus-hareketi-1000x600-1-768x461.jpg",
    tag: "Antrenman",
  },
  {
    title: "Definisyona Başlangıç | Beslenme Planlaması",
    url: `${ORIGIN}/definisyona-baslangic-beslenme-planlamasi/`,
    image: "/images/blog/callum-shaw-dR4Ab6-fH6M-unsplash.jpg",
    tag: "Beslenme",
  },
  {
    title: "Bulk Döneminde Supplement Kullanımı",
    url: `${ORIGIN}/bulk-doneminde-supplement-kullanimi/`,
    image: "/images/blog/supliful-supplements-on-demand-UTPZnnEVW4E-unsplash.jpg",
    tag: "Supplement",
  },
  {
    title: "Spora Yeni Başlayanlar İçin Önemli Tavsiyeler",
    url: `${ORIGIN}/spora-yeni-baslayanlar-icin-onemli-tavsiyeler/`,
    image: "/images/blog/anastase-maragos-FP7cfYPPUKM-unsplash.jpg",
    tag: "Başlangıç",
  },
].map((p) => ({ ...p, date: "11 Eylül 2024" }));
