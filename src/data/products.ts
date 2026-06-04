export type Product = {
  slug: string;
  name: string;
  category: "Raw Materials" | "Pipes" | "Fittings" | "Flanges";
  tagline: string;
  description: string;
  grades: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  standards: string[];
};

const make = (p: Product): Product => p;

export const PRODUCTS: Product[] = [
  make({
    slug: "stainless-steel",
    name: "Stainless Steel",
    category: "Raw Materials",
    tagline: "Corrosion-resistant grades for demanding environments",
    description:
      "High-quality stainless steel in bars, rods, sheets, and plates engineered for exceptional corrosion resistance, strength, and surface finish across chemical, food, and marine applications.",
    grades: ["SS 304", "SS 304L", "SS 316", "SS 316L", "SS 321", "SS 310", "SS 904L"],
    applications: ["Chemical processing", "Food & dairy", "Pharmaceuticals", "Marine equipment", "Architecture"],
    specs: [
      { label: "Form", value: "Bars, Rods, Sheets, Plates, Coils" },
      { label: "Size Range", value: "6 mm – 600 mm" },
      { label: "Thickness", value: "0.5 mm – 100 mm" },
      { label: "Finish", value: "2B, BA, No.4, Mirror, Hot Rolled" },
    ],
    standards: ["ASTM A276", "ASTM A240", "ASME SA240", "EN 10088"],
  }),
  make({
    slug: "alloy-steel",
    name: "Alloy Steel",
    category: "Raw Materials",
    tagline: "High-strength alloys for high-temperature service",
    description:
      "Alloy steels engineered with chromium and molybdenum for exceptional creep strength and toughness in power, petrochemical, and structural applications.",
    grades: ["F1", "F5", "F9", "F11", "F22", "F91", "P11", "P22", "P91"],
    applications: ["Power generation", "Petrochemical", "Boilers & heat exchangers", "Pressure vessels"],
    specs: [
      { label: "Form", value: "Round Bars, Plates, Forgings" },
      { label: "Size Range", value: "10 mm – 500 mm" },
      { label: "Hardness", value: "HB 197 – 248" },
      { label: "Condition", value: "Annealed / Normalized & Tempered" },
    ],
    standards: ["ASTM A182", "ASTM A335", "ASME SA387"],
  }),
  make({
    slug: "carbon-steel",
    name: "Carbon Steel",
    category: "Raw Materials",
    tagline: "Reliable strength for structural & pressure applications",
    description:
      "Carbon steel raw materials with consistent mechanical properties for pipelines, structural work, and pressure-bearing fabrication.",
    grades: ["A105", "A106 Gr B", "A36", "St 37", "St 52", "IS 2062"],
    applications: ["Oil & gas pipelines", "Structural fabrication", "Pressure vessels", "Construction"],
    specs: [
      { label: "Form", value: "Round Bars, Plates, Pipes" },
      { label: "Tensile", value: "415 – 550 MPa" },
      { label: "Yield", value: "≥ 250 MPa" },
      { label: "Condition", value: "Hot Rolled, Normalized" },
    ],
    standards: ["ASTM A105", "ASTM A106", "IS 2062"],
  }),
  make({
    slug: "monel",
    name: "Monel",
    category: "Raw Materials",
    tagline: "Nickel-copper alloy for seawater & acid environments",
    description:
      "Monel 400 and K500 alloys offering outstanding resistance to seawater, hydrofluoric acid, and reducing media — ideal for marine and chemical equipment.",
    grades: ["Monel 400", "Monel K500"],
    applications: ["Marine engineering", "Heat exchangers", "Valves & pumps", "Oil refining"],
    specs: [
      { label: "Form", value: "Bars, Sheets, Forgings, Wire" },
      { label: "Density", value: "8.80 g/cm³" },
      { label: "Tensile", value: "550 – 690 MPa" },
      { label: "Hardness", value: "HB 110 – 150" },
    ],
    standards: ["ASTM B164", "ASTM B127", "ASME SB164"],
  }),
  make({
    slug: "inconel",
    name: "Inconel",
    category: "Raw Materials",
    tagline: "Nickel-chromium superalloy for extreme heat",
    description:
      "Inconel superalloys retain strength and oxidation resistance at very high temperatures — the workhorse of aerospace, turbines, and chemical reactors.",
    grades: ["Inconel 600", "Inconel 601", "Inconel 625", "Inconel 718", "Inconel 800"],
    applications: ["Gas turbines", "Aerospace components", "Heat treatment fixtures", "Chemical reactors"],
    specs: [
      { label: "Service Temp", value: "Up to 1100 °C" },
      { label: "Form", value: "Bars, Sheets, Tubes, Forgings" },
      { label: "Density", value: "8.44 g/cm³" },
      { label: "Tensile", value: "830 – 1100 MPa" },
    ],
    standards: ["ASTM B166", "ASTM B168", "ASME SB443"],
  }),
  make({
    slug: "incoloy",
    name: "Incoloy",
    category: "Raw Materials",
    tagline: "Iron-nickel-chromium alloys for corrosive heat",
    description:
      "Incoloy alloys combine iron-base economy with nickel-grade corrosion and high-temperature resistance for furnace and process equipment.",
    grades: ["Incoloy 800", "Incoloy 800H", "Incoloy 800HT", "Incoloy 825"],
    applications: ["Heat exchangers", "Petrochemical piping", "Pulp & paper digesters", "Acid plants"],
    specs: [
      { label: "Service Temp", value: "Up to 1000 °C" },
      { label: "Form", value: "Bars, Plates, Tubes" },
      { label: "Density", value: "7.94 g/cm³" },
      { label: "Tensile", value: "≥ 520 MPa" },
    ],
    standards: ["ASTM B408", "ASTM B409", "ASTM B423"],
  }),
  make({
    slug: "hastelloy",
    name: "Hastelloy",
    category: "Raw Materials",
    tagline: "Nickel-molybdenum alloys for severe corrosion",
    description:
      "Hastelloy grades resist a wide range of aggressive chemicals — hydrochloric and sulfuric acids, chlorides, and oxidizing media.",
    grades: ["Hastelloy C-22", "Hastelloy C-276", "Hastelloy B-2", "Hastelloy X"],
    applications: ["Chemical processing", "Pharmaceutical", "Flue-gas desulfurization", "Pollution control"],
    specs: [
      { label: "Form", value: "Bars, Sheets, Plates, Wire" },
      { label: "Density", value: "8.89 g/cm³" },
      { label: "Tensile", value: "≥ 690 MPa" },
      { label: "Hardness", value: "HB ≤ 220" },
    ],
    standards: ["ASTM B574", "ASTM B575", "ASME SB575"],
  }),
  make({
    slug: "duplex",
    name: "Duplex Steel",
    category: "Raw Materials",
    tagline: "Twice the strength of austenitic stainless",
    description:
      "Duplex stainless steel offers a balanced austenite-ferrite microstructure, delivering higher strength and improved chloride stress-corrosion resistance.",
    grades: ["UNS S31803", "UNS S32205"],
    applications: ["Oil & gas", "Desalination plants", "Pulp & paper", "Marine structures"],
    specs: [
      { label: "Form", value: "Bars, Plates, Tubes, Forgings" },
      { label: "Yield", value: "≥ 450 MPa" },
      { label: "Tensile", value: "620 – 880 MPa" },
      { label: "PREN", value: "≥ 34" },
    ],
    standards: ["ASTM A182 F51", "ASTM A240 UNS S31803"],
  }),
  make({
    slug: "super-duplex",
    name: "Super Duplex",
    category: "Raw Materials",
    tagline: "Premium duplex for the most aggressive media",
    description:
      "Super duplex grades with PREN > 40 deliver elite corrosion resistance and mechanical strength for subsea and high-chloride service.",
    grades: ["UNS S32750", "UNS S32760", "Zeron 100"],
    applications: ["Subsea oil & gas", "Chemical tankers", "Seawater cooling", "Desalination"],
    specs: [
      { label: "Yield", value: "≥ 550 MPa" },
      { label: "Tensile", value: "750 – 1000 MPa" },
      { label: "PREN", value: "≥ 40" },
      { label: "Form", value: "Bars, Plates, Pipes, Fittings" },
    ],
    standards: ["ASTM A182 F53/F55", "ASTM A790"],
  }),
  make({
    slug: "ss-pipe-fittings",
    name: "SS Pipe Fittings",
    category: "Fittings",
    tagline: "Precision-engineered butt-weld & forged fittings",
    description:
      "Comprehensive range of stainless steel pipe fittings — elbows, tees, reducers, caps, and stubs — manufactured to international standards.",
    grades: ["SS 304/L", "SS 316/L", "SS 321", "SS 904L", "Duplex"],
    applications: ["Process piping", "Sanitary lines", "Hydraulic systems", "Power piping"],
    specs: [
      { label: "Size Range", value: "1/8″ – 48″" },
      { label: "Schedule", value: "SCH 5S – SCH XXS" },
      { label: "Type", value: "Butt-weld, Socket-weld, Threaded" },
      { label: "End", value: "Plain, Beveled, Threaded" },
    ],
    standards: ["ASME B16.9", "ASME B16.11", "MSS-SP-43"],
  }),
  make({
    slug: "nipple",
    name: "Nipple",
    category: "Fittings",
    tagline: "Threaded & welded pipe nipples in all grades",
    description:
      "Hex, swage, barrel and welding nipples in stainless, carbon, alloy and nickel alloys for tight connections in process piping.",
    grades: ["SS 304", "SS 316", "Carbon Steel", "Alloy Steel"],
    applications: ["Instrumentation", "Process piping", "Hydraulic lines"],
    specs: [
      { label: "Size", value: "1/8″ – 4″" },
      { label: "Type", value: "Hex, Barrel, Swage, Welding" },
      { label: "Class", value: "3000 / 6000 / 9000 LB" },
      { label: "Thread", value: "NPT, BSP, BSPT" },
    ],
    standards: ["ASME B16.11", "BS 3799"],
  }),
  make({
    slug: "coupling",
    name: "Coupling",
    category: "Fittings",
    tagline: "Full, half & reducing forged couplings",
    description:
      "Forged threaded and socket-weld couplings for joining pipes and nipples in high-pressure process systems.",
    grades: ["SS 304/L", "SS 316/L", "Carbon Steel", "Alloy Steel F11/F22"],
    applications: ["High-pressure piping", "Refinery service", "Chemical plants"],
    specs: [
      { label: "Size", value: "1/8″ – 4″" },
      { label: "Type", value: "Full, Half, Reducing" },
      { label: "Class", value: "2000 / 3000 / 6000 LB" },
      { label: "End", value: "Threaded / Socket Weld" },
    ],
    standards: ["ASME B16.11", "MSS-SP-83"],
  }),
  make({
    slug: "flanges",
    name: "Flanges",
    category: "Flanges",
    tagline: "Forged flanges in every class & facing",
    description:
      "Weld neck, slip-on, blind, socket weld, threaded, and lap joint flanges in a wide range of materials and pressure classes.",
    grades: ["SS 304/L/316/L", "Carbon F-, Alloy F-series", "Inconel", "Monel", "Duplex"],
    applications: ["Refineries", "Power plants", "Shipbuilding", "Process equipment"],
    specs: [
      { label: "Size", value: "1/2″ – 48″" },
      { label: "Class", value: "150# – 2500#" },
      { label: "Type", value: "WN, SO, BL, SW, TH, LJ" },
      { label: "Facing", value: "RF, FF, RTJ" },
    ],
    standards: ["ASME B16.5", "ASME B16.47", "EN 1092-1"],
  }),
  make({
    slug: "tee",
    name: "Tee",
    category: "Fittings",
    tagline: "Equal & reducing tees for branch connections",
    description:
      "Seamless and welded equal and reducing tees engineered for smooth flow transitions in pressure piping systems.",
    grades: ["SS 304/L", "SS 316/L", "Carbon Steel", "Alloy Steel"],
    applications: ["Process piping", "Refineries", "Power plants"],
    specs: [
      { label: "Size", value: "1/2″ – 48″" },
      { label: "Type", value: "Equal Tee, Reducing Tee" },
      { label: "Manufacturing", value: "Seamless / Welded" },
      { label: "Wall", value: "SCH 10 – SCH XXS" },
    ],
    standards: ["ASME B16.9", "MSS-SP-43"],
  }),
  make({
    slug: "reducer",
    name: "Reducer",
    category: "Fittings",
    tagline: "Concentric & eccentric pipe reducers",
    description:
      "Smooth-flow concentric and eccentric reducers to step pipe diameters in process and utility piping.",
    grades: ["SS 304/L", "SS 316/L", "Carbon Steel", "Duplex"],
    applications: ["Pump suction lines", "Heat exchanger piping", "Slurry systems"],
    specs: [
      { label: "Size", value: "1/2″ × 1/4″ – 48″ × 42″" },
      { label: "Type", value: "Concentric, Eccentric" },
      { label: "Manufacturing", value: "Seamless / Welded" },
      { label: "End", value: "Beveled" },
    ],
    standards: ["ASME B16.9", "MSS-SP-43"],
  }),
  make({
    slug: "elbow",
    name: "Elbow",
    category: "Fittings",
    tagline: "45°, 90°, 180° long & short radius elbows",
    description:
      "Butt-weld elbows in long and short radius configurations for changing direction in pressure piping systems.",
    grades: ["SS 304/L", "SS 316/L", "Carbon Steel", "Alloy Steel"],
    applications: ["Refineries", "Power plants", "Process piping"],
    specs: [
      { label: "Size", value: "1/2″ – 48″" },
      { label: "Angle", value: "45°, 90°, 180°" },
      { label: "Radius", value: "LR (1.5D), SR (1D), 3D, 5D" },
      { label: "Manufacturing", value: "Seamless / Welded" },
    ],
    standards: ["ASME B16.9", "MSS-SP-43"],
  }),
  make({
    slug: "erw-pipes",
    name: "ERW Pipes",
    category: "Pipes",
    tagline: "Electric Resistance Welded pipes for utilities",
    description:
      "ERW pipes manufactured from hot-rolled coils with high-frequency electric welding — cost-effective for water, gas, and structural applications.",
    grades: ["IS 1239", "IS 3589", "API 5L Gr B", "ASTM A53"],
    applications: ["Water transmission", "Structural use", "Fencing", "Gas distribution"],
    specs: [
      { label: "OD Range", value: "1/2″ – 24″" },
      { label: "Thickness", value: "1.6 – 12.7 mm" },
      { label: "Length", value: "Up to 12 m" },
      { label: "End", value: "Plain, Beveled, Threaded" },
    ],
    standards: ["ASTM A53", "API 5L", "IS 1239", "IS 3589"],
  }),
  make({
    slug: "seamless-pipes",
    name: "Seamless Pipes",
    category: "Pipes",
    tagline: "High-pressure seamless pipes for critical service",
    description:
      "Seamless pipes hot or cold drawn from solid billets — ideal for high-pressure, high-temperature, and corrosive media.",
    grades: ["ASTM A106 Gr B/C", "A312 TP304/316", "A335 P11/P22/P91"],
    applications: ["Oil & gas", "Power generation", "Refineries", "Boiler tubing"],
    specs: [
      { label: "OD Range", value: "1/8″ – 24″" },
      { label: "Schedule", value: "SCH 5 – SCH XXS" },
      { label: "Length", value: "Single Random / Double Random" },
      { label: "End", value: "Plain, Beveled, Threaded" },
    ],
    standards: ["ASTM A106", "ASTM A312", "ASTM A335", "API 5L"],
  }),
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
