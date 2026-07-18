// Stüdyo fontları — next/font ile self-host edilir; sayfa açılırken hepsi
// önceden yüklendiği için font değiştirmek anında olur ve siteyi kasmaz.
import {
  Pacifico,
  Lobster,
  Oswald,
  Montserrat,
  Dancing_Script,
  Caveat,
  Amatic_SC,
  Bebas_Neue,
  Righteous,
  Great_Vibes,
  Satisfy,
  Permanent_Marker,
  Monoton,
  Sacramento,
  Bungee,
  Cinzel,
  Courgette,
  Fredoka,
  Playfair_Display,
  Poppins,
} from "next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin-ext"], display: "swap" });
const lobster = Lobster({ weight: "400", subsets: ["latin-ext"], display: "swap" });
const oswald = Oswald({ weight: "700", subsets: ["latin-ext"], display: "swap" });
const montserrat = Montserrat({ weight: "900", subsets: ["latin-ext"], display: "swap" });
const dancing = Dancing_Script({ weight: "700", subsets: ["latin-ext"], display: "swap" });
const caveat = Caveat({ weight: "700", subsets: ["latin-ext"], display: "swap" });
const amatic = Amatic_SC({ weight: "700", subsets: ["latin-ext"], display: "swap" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin-ext"], display: "swap" });
const righteous = Righteous({ weight: "400", subsets: ["latin-ext"], display: "swap" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin-ext"], display: "swap" });
const satisfy = Satisfy({ weight: "400", subsets: ["latin"], display: "swap" });
const marker = Permanent_Marker({ weight: "400", subsets: ["latin"], display: "swap" });
const monoton = Monoton({ weight: "400", subsets: ["latin"], display: "swap" });
const sacramento = Sacramento({ weight: "400", subsets: ["latin"], display: "swap" });
const bungee = Bungee({ weight: "400", subsets: ["latin-ext"], display: "swap" });
const cinzel = Cinzel({ weight: "700", subsets: ["latin-ext"], display: "swap" });
const courgette = Courgette({ weight: "400", subsets: ["latin-ext"], display: "swap" });
const fredoka = Fredoka({ weight: "600", subsets: ["latin-ext"], display: "swap" });
const playfair = Playfair_Display({ weight: "700", subsets: ["latin-ext"], display: "swap" });
const poppins = Poppins({ weight: "700", subsets: ["latin-ext"], display: "swap" });

export interface StudioFont {
  key: string;
  label: string;
  style: string;
  family: string; // CSS font-family değeri (canvas için de kullanılır)
}

export const STUDIO_FONTS: StudioFont[] = [
  { key: "pacifico", label: "Pacifico", style: "Eğlenceli", family: pacifico.style.fontFamily },
  { key: "lobster", label: "Lobster", style: "Retro", family: lobster.style.fontFamily },
  { key: "dancing", label: "Dancing", style: "Kursif", family: dancing.style.fontFamily },
  { key: "greatvibes", label: "Great Vibes", style: "Zarif", family: greatVibes.style.fontFamily },
  { key: "satisfy", label: "Satisfy", style: "El Yazısı", family: satisfy.style.fontFamily },
  { key: "sacramento", label: "Sacramento", style: "İnce Kursif", family: sacramento.style.fontFamily },
  { key: "caveat", label: "Caveat", style: "Samimi", family: caveat.style.fontFamily },
  { key: "oswald", label: "Oswald", style: "Modern", family: oswald.style.fontFamily },
  { key: "montserrat", label: "Montserrat", style: "Minimal", family: montserrat.style.fontFamily },
  { key: "bebas", label: "Bebas Neue", style: "Poster", family: bebas.style.fontFamily },
  { key: "righteous", label: "Righteous", style: "Fütüristik", family: righteous.style.fontFamily },
  { key: "amatic", label: "Amatic SC", style: "İnce", family: amatic.style.fontFamily },
  { key: "marker", label: "Marker", style: "Sokak", family: marker.style.fontFamily },
  { key: "monoton", label: "Monoton", style: "Klasik Neon", family: monoton.style.fontFamily },
  { key: "bungee", label: "Bungee", style: "Güçlü", family: bungee.style.fontFamily },
  { key: "cinzel", label: "Cinzel", style: "Klasik", family: cinzel.style.fontFamily },
  { key: "courgette", label: "Courgette", style: "Yumuşak Kursif", family: courgette.style.fontFamily },
  { key: "fredoka", label: "Fredoka", style: "Yuvarlak", family: fredoka.style.fontFamily },
  { key: "playfair", label: "Playfair", style: "Editoryal", family: playfair.style.fontFamily },
  { key: "poppins", label: "Poppins", style: "Geometrik", family: poppins.style.fontFamily },
];

export function getStudioFont(key: string) {
  return STUDIO_FONTS.find((f) => f.key === key) ?? STUDIO_FONTS[0];
}
