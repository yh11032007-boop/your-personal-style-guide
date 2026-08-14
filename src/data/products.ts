import orion from "@/assets/orion.jpg";
import noble from "@/assets/noble.jpg";
import throne from "@/assets/throne.jpg";
import regal from "@/assets/regal.jpg";

export type Product = {
  slug: string;
  name: string;
  family: string;
  price: number;
  image: string;
  tagline: string;
  description: string;
  notes: { top: string; heart: string; base: string };
};

export const products: Product[] = [
  {
    slug: "orion",
    name: "Orion",
    family: "Fresh",
    price: 1499,
    image: orion,
    tagline: "Cold air, clear intent.",
    description:
      "A crisp aromatic parfum built for early mornings and long days. Orion opens sharp and settles into a quiet, magnetic clarity.",
    notes: { top: "Bergamot, Pink Pepper", heart: "Lavender, Sea Salt", base: "Cedarwood, White Musk" },
  },
  {
    slug: "noble",
    name: "Noble",
    family: "Citrus",
    price: 1499,
    image: noble,
    tagline: "Bright, but never loud.",
    description:
      "Sunlit citrus over a warm amber floor. Noble is the everyday signature — polished, effortless, unmistakably present.",
    notes: { top: "Sicilian Lemon, Mandarin", heart: "Neroli, Jasmine", base: "Amber, Tonka Bean" },
  },
  {
    slug: "throne",
    name: "Throne",
    family: "Leather",
    price: 2499,
    image: throne,
    tagline: "Presence before introduction.",
    description:
      "Smoked leather, dark spice and resin. Throne is the most concentrated expression in the house — worn by those who set the standard.",
    notes: { top: "Saffron, Black Pepper", heart: "Leather, Violet", base: "Oud, Patchouli, Labdanum" },
  },
  {
    slug: "regal",
    name: "Regal",
    family: "Oud",
    price: 1499,
    image: regal,
    tagline: "Heritage, distilled.",
    description:
      "A modern oud — dense, resinous and warm, softened with rose and vanilla for a finish that lingers well past the room.",
    notes: { top: "Rose, Cardamom", heart: "Oud, Incense", base: "Vanilla, Sandalwood" },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatPrice = (v: number) => `₹ ${v.toLocaleString("en-IN")}`;