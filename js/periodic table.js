const elements = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    properties: "Nonmetal",
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    properties: "Noble Gas",
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    properties: "Alkali Metal",
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    properties: "Alkaline Earth Metal",
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boron",
    properties: "Metalloid",
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    properties: "Nonmetal",
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    properties: "Nonmetal",
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    properties: "Nonmetal",
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluorine",
    properties: "Halogen",
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
    properties: "Noble Gas",
  },
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodium",
    properties: "Alkali Metal",
  },
  {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesium",
    properties: "Alkaline Earth Metal",
  },
  {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminum",
    properties: "Post-transition Metal",
  },
  {
    atomicNumber: 14,
    symbol: "Si",
    name: "Silicon",
    properties: "Metalloid",
  },
  {
    atomicNumber: 15,
    symbol: "P",
    name: "Phosphorus",
    properties: "Nonmetal",
  },
  {
    atomicNumber: 16,
    symbol: "S",
    name: "Sulfur",
    properties: "Nonmetal",
  },
  {
    atomicNumber: 17,
    symbol: "Cl",
    name: "Chlorine",
    properties: "Halogen",
  },
  {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argon",
    properties: "Noble Gas",
  },
  {
    atomicNumber: 19,
    symbol: "K",
    name: "Potassium",
    properties: "Alkali Metal",
  },
  {
    atomicNumber: 20,
    symbol: "Ca",
    name: "Calcium",
    properties: "Alkaline Earth Metal",
  },
  {
    atomicNumber: 21,
    symbol: "Sc",
    name: "Scandium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 22,
    symbol: "Ti",
    name: "Titanium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 23,
    symbol: "V",
    name: "Vanadium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 24,
    symbol: "Cr",
    name: "Chromium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 25,
    symbol: "Mn",
    name: "Manganese",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 26,
    symbol: "Fe",
    name: "Iron",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 27,
    symbol: "Co",
    name: "Cobalt",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 28,
    symbol: "Ni",
    name: "Nickel",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 29,
    symbol: "Cu",
    name: "Copper",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 30,
    symbol: "Zn",
    name: "Zinc",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 31,
    symbol: "Ga",
    name: "Gallium",
    properties: "Post-transition Metal",
  },
  {
    atomicNumber: 32,
    symbol: "Ge",
    name: "Germanium",
    properties: "Metalloid",
  },
  {
    atomicNumber: 33,
    symbol: "As",
    name: "Arsenic",
    properties: "Metalloid",
  },
  {
    atomicNumber: 34,
    symbol: "Se",
    name: "Selenium",
    properties: "Nonmetal",
  },
  {
    atomicNumber: 35,
    symbol: "Br",
    name: "Bromine",
    properties: "Halogen",
  },
  {
    atomicNumber: 36,
    symbol: "Kr",
    name: "Krypton",
    properties: "Noble Gas",
  },
  {
    atomicNumber: 37,
    symbol: "Rb",
    name: "Rubidium",
    properties: "Alkali Metal",
  },
  {
    atomicNumber: 38,
    symbol: "Sr",
    name: "Strontium",
    properties: "Alkaline Earth Metal",
  },
  {
    atomicNumber: 39,
    symbol: "Y",
    name: "Yttrium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 40,
    symbol: "Zr",
    name: "Zirconium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 41,
    symbol: "Nb",
    name: "Niobium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 42,
    symbol: "Mo",
    name: "Molybdenum",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 43,
    symbol: "Tc",
    name: "Technetium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 44,
    symbol: "Ru",
    name: "Ruthenium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 45,
    symbol: "Rh",
    name: "Rhodium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 46,
    symbol: "Pd",
    name: "Palladium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 47,
    symbol: "Ag",
    name: "Silver",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 48,
    symbol: "Cd",
    name: "Cadmium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 49,
    symbol: "In",
    name: "Indium",
    properties: "Post-transition Metal",
  },
  {
    atomicNumber: 50,
    symbol: "Sn",
    name: "Tin",
    properties: "Post-transition Metal",
  },
  {
    atomicNumber: 51,
    symbol: "Sb",
    name: "Antimony",
    properties: "Metalloid",
  },
  {
    atomicNumber: 52,
    symbol: "Te",
    name: "Tellurium",
    properties: "Metalloid",
  },
  {
    atomicNumber: 53,
    symbol: "I",
    name: "Iodine",
    properties: "Halogen",
  },
  {
    atomicNumber: 54,
    symbol: "Xe",
    name: "Xenon",
    properties: "Noble Gas",
  },
  {
    atomicNumber: 55,
    symbol: "Cs",
    name: "Cesium",
    properties: "Alkali Metal",
  },
  {
    atomicNumber: 56,
    symbol: "Ba",
    name: "Barium",
    properties: "Alkaline Earth Metal",
  },
  {
    atomicNumber: 57,
    symbol: "La",
    name: "Lanthanum",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 58,
    symbol: "Ce",
    name: "Cerium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 59,
    symbol: "Pr",
    name: "Praseodymium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 60,
    symbol: "Nd",
    name: "Neodymium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 61,
    symbol: "Pm",
    name: "Promethium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 62,
    symbol: "Sm",
    name: "Samarium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 63,
    symbol: "Eu",
    name: "Europium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 64,
    symbol: "Gd",
    name: "Gadolinium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 65,
    symbol: "Tb",
    name: "Terbium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 66,
    symbol: "Dy",
    name: "Dysprosium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 67,
    symbol: "Ho",
    name: "Holmium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 68,
    symbol: "Er",
    name: "Erbium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 69,
    symbol: "Tm",
    name: "Thulium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 70,
    symbol: "Yb",
    name: "Ytterbium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 71,
    symbol: "Lu",
    name: "Lutetium",
    properties: "Lanthanide",
  },
  {
    atomicNumber: 72,
    symbol: "Hf",
    name: "Hafnium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 73,
    symbol: "Ta",
    name: "Tantalum",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 74,
    symbol: "W",
    name: "Tungsten",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 75,
    symbol: "Re",
    name: "Rhenium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 76,
    symbol: "Os",
    name: "Osmium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 77,
    symbol: "Ir",
    name: "Iridium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 78,
    symbol: "Pt",
    name: "Platinum",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 79,
    symbol: "Au",
    name: "Gold",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 80,
    symbol: "Hg",
    name: "Mercury",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 81,
    symbol: "Tl",
    name: "Thallium",
    properties: "Post-transition Metal",
  },
  {
    atomicNumber: 82,
    symbol: "Pb",
    name: "Lead",
    properties: "Post-transition Metal",
  },
  {
    atomicNumber: 83,
    symbol: "Bi",
    name: "Bismuth",
    properties: "Post-transition Metal",
  },
  {
    atomicNumber: 84,
    symbol: "Po",
    name: "Polonium",
    properties: "Post-transition Metal",
  },
  {
    atomicNumber: 85,
    symbol: "At",
    name: "Astatine",
    properties: "Halogen",
  },
  {
    atomicNumber: 86,
    symbol: "Rn",
    name: "Radon",
    properties: "Noble Gas",
  },
  {
    atomicNumber: 87,
    symbol: "Fr",
    name: "Francium",
    properties: "Alkali Metal",
  },
  {
    atomicNumber: 88,
    symbol: "Ra",
    name: "Radium",
    properties: "Alkaline Earth Metal",
  },
  {
    atomicNumber: 89,
    symbol: "Ac",
    name: "Actinium",
    properties: "Actinide",
  },
  {
    atomicNumber: 90,
    symbol: "Th",
    name: "Thorium",
    properties: "Actinide",
  },
  {
    atomicNumber: 91,
    symbol: "Pa",
    name: "Protactinium",
    properties: "Actinide",
  },
  {
    atomicNumber: 92,
    symbol: "U",
    name: "Uranium",
    properties: "Actinide",
  },
  {
    atomicNumber: 93,
    symbol: "Np",
    name: "Neptunium",
    properties: "Actinide",
  },
  {
    atomicNumber: 94,
    symbol: "Pu",
    name: "Plutonium",
    properties: "Actinide",
  },
  {
    atomicNumber: 95,
    symbol: "Am",
    name: "Americium",
    properties: "Actinide",
  },
  {
    atomicNumber: 96,
    symbol: "Cm",
    name: "Curium",
    properties: "Actinide",
  },
  {
    atomicNumber: 97,
    symbol: "Bk",
    name: "Berkelium",
    properties: "Actinide",
  },
  {
    atomicNumber: 98,
    symbol: "Cf",
    name: "Californium",
    properties: "Actinide",
  },
  {
    atomicNumber: 99,
    symbol: "Es",
    name: "Einsteinium",
    properties: "Actinide",
  },
  {
    atomicNumber: 100,
    symbol: "Fm",
    name: "Fermium",
    properties: "Actinide",
  },
  {
    atomicNumber: 101,
    symbol: "Md",
    name: "Mendelevium",
    properties: "Actinide",
  },
  {
    atomicNumber: 102,
    symbol: "No",
    name: "Nobelium",
    properties: "Actinide",
  },
  {
    atomicNumber: 103,
    symbol: "Lr",
    name: "Lawrencium",
    properties: "Actinide",
  },
  {
    atomicNumber: 104,
    symbol: "Rf",
    name: "Rutherfordium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 105,
    symbol: "Db",
    name: "Dubnium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 106,
    symbol: "Sg",
    name: "Seaborgium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 107,
    symbol: "Bh",
    name: "Bohrium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 108,
    symbol: "Hs",
    name: "Hassium",
    properties: "Transition Metal",
  },
  {
    atomicNumber: 109,
    symbol: "Mt",
    name: "Meitnerium",
    properties: "Unknown",
  },
  {
    atomicNumber: 110,
    symbol: "Ds",
    name: "Darmstadtium",
    properties: "Unknown",
  },
  {
    atomicNumber: 111,
    symbol: "Rg",
    name: "Roentgenium",
    properties: "Unknown",
  },
  {
    atomicNumber: 112,
    symbol: "Cn",
    name: "Copernicium",
    properties: "Unknown",
  },
  {
    atomicNumber: 113,
    symbol: "Nh",
    name: "Nihonium",
    properties: "Unknown",
  },
  {
    atomicNumber: 114,
    symbol: "Fl",
    name: "Flerovium",
    properties: "Unknown",
  },
  {
    atomicNumber: 115,
    symbol: "Mc",
    name: "Moscovium",
    properties: "Unknown",
  },
  {
    atomicNumber: 116,
    symbol: "Lv",
    name: "Livermorium",
    properties: "Unknown",
  },
  {
    atomicNumber: 117,
    symbol: "Ts",
    name: "Tennessine",
    properties: "Halogen",
  },
  {
    atomicNumber: 118,
    symbol: "Og",
    name: "Oganesson",
    properties: "Unknown",
  },
];

const elementInfo = document.querySelector(".element-info");
const elementSymbol = document.getElementById("element-symbol");
const elementName = document.getElementById("element-name");
const elementAtomicNumber = document.getElementById("element-atomic-number");
const elementProperties = document.getElementById("element-properties");

const elementCells = document.querySelectorAll(".element");
elementCells.forEach((elementCell) => {
  elementCell.addEventListener("click", () => {
    const atomicNumber = elementCell.dataset.atomicNumber;
    const element = elements.find(
      (el) => el.atomicNumber === parseInt(atomicNumber)
    );
    elementSymbol.textContent = element.symbol;
    elementName.textContent = element.name;
    elementAtomicNumber.textContent = `Atomic Number: ${element.atomicNumber}`;
    elementProperties.textContent = `Properties: ${element.properties}`;
    elementInfo.style.visibility = "visible";
  });
});
