import { Item } from './types';

export const items: Item[] = [
  {
    id: 'omega-seamaster-1965',
    name: 'Omega Seamaster 300',
    category: 'watches',
    era: '1965',
    origin: 'Switzerland / Sold in Helsinki',
    description: 'A beautiful example of the Omega Seamaster 300 from the mid-1960s, acquired from a Helsinki antique dealer. The dial retains its original patina — warm and honeyed with age — and the handset is intact and functioning. The case shows light wear consistent with decades of daily use. Serviced in 2021. A timepiece that carries genuine history.',
    price: 1850,
    images: [],
    featured: true,
  },
  {
    id: 'tissot-navigator-1958',
    name: 'Tissot Navigator T-12',
    category: 'watches',
    era: '1958',
    origin: 'Switzerland / Acquired in Stockholm',
    description: 'A rare Tissot Navigator T-12 from 1958 with its original two-tone dial and applied indices. Found in a Stockholm estate sale, still in remarkable condition. The movement is clean and runs well. One of the more elegant dress watches of the late 1950s.',
    price: 920,
    images: [],
    featured: true,
  },
  {
    id: 'finnish-markka-1917',
    name: 'Finnish 10 Markkaa Gold Coin',
    category: 'coins',
    era: '1913',
    origin: 'Finland',
    description: 'A Finnish 10 Markkaa gold coin minted in 1913 under Russian Imperial rule, just four years before Finnish independence. In excellent circulated condition with sharp detail remaining on both the eagle reverse and the crowned shield obverse. A tangible piece of Finnish history from one of the most significant periods in the nation\'s story.',
    price: 480,
    images: [],
    featured: true,
  },
  {
    id: 'norway-speciedaler-1847',
    name: 'Norwegian Speciedaler',
    category: 'coins',
    era: '1847',
    origin: 'Norway',
    description: 'A large and impressive Norwegian Speciedaler from 1847, bearing the portrait of King Oscar I. Silver, well-struck with good detail to the portrait and reverse wreath. Light cabinet tone. These large silver coins were the pride of the Norwegian monetary system and are increasingly sought after by collectors of Scandinavian numismatics.',
    price: 340,
    images: [],
  },
  {
    id: 'iittala-aalto-vase-1960',
    name: 'Iittala Alvar Aalto Vase',
    category: 'glass',
    era: 'c. 1960s',
    origin: 'Finland',
    description: 'An original Alvar Aalto vase by Iittala in clear glass, produced in the 1960s. The iconic undulating form — inspired by the shores of Finnish lakes — is one of the most recognised pieces of Scandinavian design. This example is in excellent condition with no chips or cracks, and retains a beautiful clarity. A cornerstone piece of any Nordic design collection.',
    price: 240,
    images: [],
    featured: true,
  },
  {
    id: 'orrefors-graal-1952',
    name: 'Orrefors Graal Fish Bowl',
    category: 'glass',
    era: '1952',
    origin: 'Sweden',
    description: 'A signed Orrefors Graal piece from 1952 featuring the classic underwater fish motif encased within the thick walls of the glass. The Graal technique — developed at Orrefors in 1916 — involves encasing coloured and engraved glass within a clear outer layer. This example shows the deep greens and amber tones of the mid-century period. Signed to the base.',
    price: 680,
    images: [],
  },
];

export const categoryMeta: Record<string, { label: string; description: string }> = {
  watches: {
    label: 'Watches',
    description: 'Mechanical timepieces from Scandinavian collections — dress watches, tool watches, and everything in between.',
  },
  coins: {
    label: 'Coins',
    description: 'Nordic numismatics spanning centuries — Finnish markka, Norwegian speciedaler, Swedish riksdaler and more.',
  },
  glass: {
    label: 'Design Glass',
    description: 'Iconic Scandinavian glass design from Iittala, Orrefors, Kosta Boda and other celebrated Nordic makers.',
  },
};
