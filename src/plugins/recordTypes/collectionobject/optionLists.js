import { defineMessages } from 'react-intl';

export default {
  pahmaResponsibleDepartments: {
    values: [
      'Natasha Johnson',
      'Leslie Freund',
      'Victoria Bradshaw',
      'Alicja Egbert',
      'No collection manager (Registration)',
      'uncertain',
    ],
    messages: defineMessages({
      'No collection manager (Registration)': {
        id: 'option.pahmaResponsibleDepartments.No collection manager (Registration)',
        defaultMessage: 'no collection manager (registration)',
      },
    }),
  },
  pahmaRecordStatuses: {
    values: [
      'minimalInProgress',
      'minimal',
      'basicInProgess',
      'basic',
      'fullInProgess',
      'full',
    ],
    messages: defineMessages({
      minimalInProgress: {
        id: 'option.pahmaRecordStatuses.minimalInProgress',
        defaultMessage: 'minimal (in progress)',
      },
      basicInProgress: {
        id: 'option.pahmaRecordStatuses.basicInProgress',
        defaultMessage: 'basic (in progress)',
      },
      fullInProgress: {
        id: 'option.pahmaRecordStatuses.fullInProgress',
        defaultMessage: 'full/curatorial (in progress)',
      },
      full: {
        id: 'option.pahmaRecordStatuses.full',
        defaultMessage: 'full/curatorial',
      },
    }),
  },
  pahmaTitleTypes: {
    values: [
      'Artist\'s Label',
      'Culture Groups on Tape',
      'Inventory Name',
      'Title',
      'Title Subject',
    ],
    messages: defineMessages({
      'Artist\'s Label': {
        id: 'option.pahmaTitleTypes.Artist\'s Label',
        defaultMessage: 'artist\'s label',
      },
      'Culture Groups on Tape': {
        id: 'option.pahmaTitleTypes.Culture Groups on Tape',
        defaultMessage: 'culture groups on tape',
      },
      'Inventory Name': {
        id: 'option.pahmaTitleTypes.Inventory Name',
        defaultMessage: 'inventory name',
      },
      Title: {
        id: 'option.pahmaTitleTypes.Title',
        defaultMessage: 'title',
      },
      'Title Subject': {
        id: 'option.pahmaTitleTypes.Title Subject',
        defaultMessage: 'title subject',
      },
    }),
  },
  pahmaObjectNameCurrencies: {
    values: [
      'current',
      'outOfDate',
      'unknown',
    ],
    messages: defineMessages({
      outOfDate: {
        id: 'option.pahmaObjectNameCurrencies.outOfDate',
        defaultMessage: 'out of date',
      },
    }),
  },
  pahmaObjectNameLevels: {
    values: [
      'whole',
      'part/fragment',
      'shardSherd',
      'chip',
      'dust',
      'residue',
    ],
    messages: defineMessages({
      shardSherd: {
        id: 'option.pahmaObjectNameLevels.shardSherd',
        defaultMessage: 'shard/sherd',
      },
    }),
  },
  pahmaObjectNameSystems: {
    values: [
      'aaslhNomenclature',
      'bennyhoffOlivellaBeads',
      'artAndArchitectureThesaurus',
      'giffordWorkedBone',
      'giffordWorkedShell',
      'heizerProjectilePoint',
      'justiceProjectilePoint',
      'meighanHistoricGlass',
      'pahmaObjectNames',
      'treganzaClayArtifact',
      'noSystem',
    ],
    messages: defineMessages({
      aaslhNomenclature: {
        id: 'option.pahmaObjectNameSystems.aaslhNomenclature',
        defaultMessage: 'AASLH nomenclature',
      },
      bennyhoffOlivellaBeads: {
        id: 'option.pahmaObjectNameSystems.bennyhoffOlivellaBeads',
        defaultMessage: 'Bennyhoff Olivella bead typology',
      },
      artAndArchitectureThesaurus: {
        id: 'option.pahmaObjectNameSystems.artAndArchitectureThesaurus',
        defaultMessage: 'Getty Art & architecture thesaurus',
      },
      giffordWorkedBone: {
        id: 'option.pahmaObjectNameSystems.giffordWorkedBone',
        defaultMessage: 'Gifford worked bone typology',
      },
      giffordWorkedShell: {
        id: 'option.pahmaObjectNameSystems.giffordWorkedShell',
        defaultMessage: 'Gifford worked shell typology',
      },
      heizerProjectilePoint: {
        id: 'option.pahmaObjectNameSystems.heizerProjectilePoint',
        defaultMessage: 'Heizer projectile point typology',
      },
      justiceProjectilePoint: {
        id: 'option.pahmaObjectNameSystems.justiceProjectilePoint',
        defaultMessage: 'Justice projectile point typology',
      },
      meighanHistoricGlass: {
        id: 'option.pahmaObjectNameSystems.meighanHistoricGlass',
        defaultMessage: 'Meighan historic glass bead typology',
      },
      pahmaObjectNames: {
        id: 'option.pahmaObjectNameSystems.pahmaObjectNames',
        defaultMessage: 'PAHMA object names',
      },
      treganzaClayArtifact: {
        id: 'option.pahmaObjectNameSystems.treganzaClayArtifact',
        defaultMessage: 'Treganza clay artifact typology',
      },
      noSystem: {
        id: 'option.pahmaObjectNameSystems.noSystem',
        defaultMessage: 'no system',
      },
    }),

  },
  pahmaObjectNameTypes: {
    values: [
      'classificatory',
      'denomination',
      'native',
      'simple',
      'taxonomic',
      'typological',
    ],
  },
  pahmaTms2003DataSources: {
    values: [
      'AC',
      'BM',
      'BS',
      'BY',
      'CC',
      'CD',
      'CM',
      'CM_AA',
      'CM_AO',
      'CM_BM',
      'CM_BT',
      'CM_CE',
      'CM_DC',
      'CM_DH',
      'CM_FA',
      'CM_FI',
      'CM_OU',
      'CM_PL',
      'CM_RT',
      'CM_S1',
      'CM_S2',
      'CM_SN',
      'CM_TQ',
      'CN',
      'DD',
      'FA',
      'FL',
      'GP',
      'HI',
      'KE',
      'MO',
      'NG',
      'PH',
      'RG',
      'SS',
    ],
    messages: defineMessages({
      AC: {
        id: 'option.pahmaTms2003DataSources.AC',
        defaultMessage: 'Alaska commercial company',
      },
      BM: {
        id: 'option.pahmaTms2003DataSources.BM',
        defaultMessage: 'basket move project',
      },
      BS: {
        id: 'option.pahmaTms2003DataSources.BS',
        defaultMessage: 'Barrett slide',
      },
      BY: {
        id: 'option.pahmaTms2003DataSources.BY',
        defaultMessage: 'Bernard-Murray Tibetan collection',
      },
      CC: {
        id: 'option.pahmaTms2003DataSources.CC',
        defaultMessage: 'classical coin rehousing',
      },
      CD: {
        id: 'option.pahmaTms2003DataSources.CD',
        defaultMessage: 'collections management/design department (inventory entries that matched original DD database)',
      },
      CM: {
        id: 'option.pahmaTms2003DataSources.CM',
        defaultMessage: 'collections management',
      },
      CM_AA: {
        id: 'option.pahmaTms2003DataSources.CM_AA',
        defaultMessage: 'collections management: AA inventory',
      },
      CM_AO: {
        id: 'option.pahmaTms2003DataSources.CM_AO',
        defaultMessage: 'collections management: archeology object use',
      },
      CM_BM: {
        id: 'option.pahmaTms2003DataSources.CM_BM',
        defaultMessage: 'collections management: BLM project',
      },
      CM_BT: {
        id: 'option.pahmaTms2003DataSources.CM_BT',
        defaultMessage: 'collections management: boxed textile move',
      },
      CM_CE: {
        id: 'option.pahmaTms2003DataSources.CM_CE',
        defaultMessage: 'collections management: centennial exhibit',
      },
      CM_DC: {
        id: 'option.pahmaTms2003DataSources.CM_DC',
        defaultMessage: 'collections management: duct cleaning project',
      },
      CM_DH: {
        id: 'option.pahmaTms2003DataSources.CM_DH',
        defaultMessage: 'collections management: Dave Hill inventory',
      },
      CM_FA: {
        id: 'option.pahmaTms2003DataSources.CM_FA',
        defaultMessage: 'collections management: fire alarm project',
      },
      CM_FI: {
        id: 'option.pahmaTms2003DataSources.CM_FI',
        defaultMessage: 'collections management:  F-29 inventory',
      },
      CM_OU: {
        id: 'option.pahmaTms2003DataSources.CM_OU',
        defaultMessage: 'collections management: general object use',
      },
      CM_PL: {
        id: 'option.pahmaTms2003DataSources.CM_PL',
        defaultMessage: 'collections management: pacific legacy',
      },
      CM_RT: {
        id: 'option.pahmaTms2003DataSources.CM_RT',
        defaultMessage: 'collections management: rolled textile move',
      },
      CM_S1: {
        id: 'option.pahmaTms2003DataSources.CM_S1',
        defaultMessage: 'collections management: study locker 8, 9, 13 inventory',
      },
      CM_S2: {
        id: 'option.pahmaTms2003DataSources.CM_S2',
        defaultMessage: 'collections management: study locker 10 - 13 inventory',
      },
      CM_SN: {
        id: 'option.pahmaTms2003DataSources.CM_SN',
        defaultMessage: 'collections management: Son-299',
      },
      CM_TQ: {
        id: 'option.pahmaTms2003DataSources.CM_TQ',
        defaultMessage: 'collections management: turquoise loan',
      },
      CN: {
        id: 'option.pahmaTms2003DataSources.CN',
        defaultMessage: 'conservation',
      },
      DD: {
        id: 'option.pahmaTms2003DataSources.DD',
        defaultMessage: 'design department',
      },
      FA: {
        id: 'option.pahmaTms2003DataSources.FA',
        defaultMessage: 'fauna rehousing',
      },
      FL: {
        id: 'option.pahmaTms2003DataSources.FL',
        defaultMessage: 'floppy disk',
      },
      GP: {
        id: 'option.pahmaTms2003DataSources.GP',
        defaultMessage: 'gene prince',
      },
      HI: {
        id: 'option.pahmaTms2003DataSources.HI',
        defaultMessage: 'hearst inventory',
      },
      KE: {
        id: 'option.pahmaTms2003DataSources.KE',
        defaultMessage: 'Keeling binder data',
      },
      MO: {
        id: 'option.pahmaTms2003DataSources.MO',
        defaultMessage: 'MOAC project',
      },
      NG: {
        id: 'option.pahmaTms2003DataSources.NG',
        defaultMessage: 'NAGPRA',
      },
      PH: {
        id: 'option.pahmaTms2003DataSources.PH',
        defaultMessage: 'original PHOEBE database',
      },
      RG: {
        id: 'option.pahmaTms2003DataSources.RG',
        defaultMessage: 'registration',
      },
      SS: {
        id: 'option.pahmaTms2003DataSources.SS',
        defaultMessage: 'steve shackley',
      },
    }),
  },
  pahmaTmsLegacyDepartments: {
    values: [
      'Audio recordings',
      'Casts and molds',
      'Cat.  1: California (archaeology and ethnology)',
      'Cat.  2 - North America (except Mexico and Central America)',
      'Cat.  3 - Mexico, Central America, and Caribbean Area',
      'Cat.  4 - South America (Uhle Collection)',
      'Cat.  5 - Africa (except the Hearst Reisner Egyptian Collection)',
      'Cat.  6 - Ancient Egypt (the Hearst Reisner Egyptian Collection)',
      'Cat.  7 - Europe (incl. Russia west of Urals, north of Caucasus)',
      'Cat.  8 - Classical Mediterranean regions',
      'Cat.  9 - Asia (incl. Russia east of Urals)',
      'Cat. 10 - Philippine Islands',
      'Cat. 11 - Oceania (incl. Australia)',
      'Cat. 13 - Photographic prints (without negatives)',
      'Cat. 15 - Photographic negatives',
      'Cat. 16 - South America (except Uhle Collection)',
      'Cat. 17 - Drawings and Paintings',
      'Cat. 18 - Malaysia (incl. Indonesia, excl. Philippine Islands)',
      'Cat. 22 - Rubbings of Greek & Latin Inscriptions',
      'Cat. 23 - No provenience (most of catalog deleted)',
      'Cat. 25 - Kodachrome color transparencies',
      'Cat. 26 - Motion picture film',
      'Cat. 28 - unknown (retired catalog)',
      'Cat. B - Barr collection',
      'Cat. Bascom',
      'Cat. E',
      'Cat. K - Kelly collection',
      'Cat. L - Lillard Collection',
      'Cat. NO',
      'Cat. TB',
      'Faunal Remains',
      'Human Remains',
      'Loans In',
      'Maps',
      'Mixed faunal and human remains',
      'Mounts',
      'NAGPRA-associated Funerary Objects',
      'Registration',
    ],
    messages: defineMessages({
      'Audio recordings': {
        id: 'option.pahmaTmsLegacyDepartments.Audio recordings',
        defaultMessage: 'audio recordings',
      },
      'Cat.  4 - South America (Uhle Collection)': {
        id: 'option.pahmaTmsLegacyDepartments.Cat.  4 - South America (Uhle Collection)',
        defaultMessage: 'Cat.  4 - South America (Uhle collection)',
      },
      'Cat.  5 - Africa (except the Hearst Reisner Egyptian Collection)': {
        id: 'option.pahmaTmsLegacyDepartments.Cat.  5 - Africa (except the Hearst Reisner Egyptian Collection)',
        defaultMessage: 'Cat.  5 - Africa (except the Hearst Reisner Egyptian collection)',
      },
      'Cat.  6 - Ancient Egypt (the Hearst Reisner Egyptian Collection)': {
        id: 'option.pahmaTmsLegacyDepartments.Cat.  6 - Ancient Egypt (the Hearst Reisner Egyptian Collection)',
        defaultMessage: 'Cat.  6 - Ancient Egypt (the Hearst Reisner Egyptian collection)',
      },
      'Cat. 16 - South America (except Uhle Collection)': {
        id: 'option.pahmaTmsLegacyDepartments.Cat. 16 - South America (except Uhle Collection)',
        defaultMessage: 'Cat. 16 - South America (except Uhle collection)',
      },
      'Cat. 17 - Drawings and Paintings': {
        id: 'option.pahmaTmsLegacyDepartments.Cat. 17 - Drawings and Paintings',
        defaultMessage: 'Cat. 17 - drawings and paintings',
      },
      'Cat. 23 - No provenience (most of catalog deleted)': {
        id: 'option.pahmaTmsLegacyDepartments.Cat. 23 - No provenience (most of catalog deleted)',
        defaultMessage: 'Cat. 23 - no provenience (most of catalog deleted)',
      },
      'Cat. 26 - Motion picture film': {
        id: 'option.pahmaTmsLegacyDepartments.Cat. 26 - Motion picture film',
        defaultMessage: 'Cat. 26 - motion picture film',
      },
      'Faunal Remains': {
        id: 'option.pahmaTmsLegacyDepartments.Faunal Remains',
        defaultMessage: 'faunal remains',
      },
      'Human Remains': {
        id: 'option.pahmaTmsLegacyDepartments.Human Remains',
        defaultMessage: 'human remains',
      },
      'Loans In': {
        id: 'option.pahmaTmsLegacyDepartments.Loans In',
        defaultMessage: 'loans in',
      },
      Maps: {
        id: 'option.pahmaTmsLegacyDepartments.Maps',
        defaultMessage: 'maps',
      },
      'Mixed faunal and human remains': {
        id: 'option.pahmaTmsLegacyDepartments.Mixed faunal and human remains',
        defaultMessage: 'mixed faunal and human remains',
      },
      Mounts: {
        id: 'option.pahmaTmsLegacyDepartments.Mounts',
        defaultMessage: 'mounts',
      },
      'NAGPRA-associated Funerary Objects': {
        id: 'option.pahmaTmsLegacyDepartments.NAGPRA-associated Funerary Objects',
        defaultMessage: 'NAGPRA-associated funerary objects',
      },
      Registration: {
        id: 'option.pahmaTmsLegacyDepartments.Registration',
        defaultMessage: 'registration',
      },
    }),
  },
  pahmaCollections: {
    values: [
      'Albert M. Bender Collection',
      'Bascom Collection',
      'Bennyhoff Olivella Shell Bead Collection',
      'Bernard-Murray Collection',
      'California Teaching Collection',
      'Collection of Photographs by Carleton E. Watkins, ca. 1874-1890',
      'Early Man Cast Points Collection',
      'Edra Moore Central California Archaeology Type Collection',
      'Edra Moore Study Collection',
      'Gifford Type Specimen Collection: California bones',
      'Gifford Type Specimen Collection: Shell',
      'Great Basin Teaching Kit',
      'Harner\'s Study Collection',
      'Juvenile Osteological Growth Series',
      'Malcolm Rogers ceramic type collection',
      'Meighan Historic Glass Bead Collection',
      'Mossman-Vitale Collection',
      'Niloufer Ichaporia (Hirschmann) collection',
      'Paleopathology Collection',
      'Panama Pacific International Exposition Collection',
      'Pilling Historic Artifact Collection',
      'Reisner\'s Egyptian Collection',
      'Richard Lerner collection',
      'Ronald Maduro collection',
      'Southwest Type Sherd Collection, Corrugated',
      'Treganza Clay Artifact Collection',
      'Uhle\'s Peruvian Collection',
    ],
    messages: defineMessages({
      'Albert M. Bender Collection': {
        id: 'option.pahmaCollections.Albert M. Bender Collection',
        defaultMessage: 'Albert M. Bender collection',
      },
      'Bascom Collection': {
        id: 'option.pahmaCollections.Bascom Collection',
        defaultMessage: 'Bascom collection',
      },
      'Bennyhoff Olivella Shell Bead Collection': {
        id: 'option.pahmaCollections.Bennyhoff Olivella Shell Bead Collection',
        defaultMessage: 'Bennyhoff Olivella shell bead collection',
      },
      'Bernard-Murray Collection': {
        id: 'option.pahmaCollections.Bernard-Murray Collection',
        defaultMessage: 'Bernard-Murray collection',
      },
      'California Teaching Collection': {
        id: 'option.pahmaCollections.California Teaching Collection',
        defaultMessage: 'California teaching collection',
      },
      'Collection of Photographs by Carleton E. Watkins, ca. 1874-1890': {
        id: 'option.pahmaCollections.Collection of Photographs by Carleton E. Watkins, ca. 1874-1890',
        defaultMessage: 'collection of photographs by Carleton E. Watkins, ca. 1874-1890',
      },
      'Early Man Cast Points Collection': {
        id: 'option.pahmaCollections.Early Man Cast Points Collection',
        defaultMessage: 'early man cast points collection',
      },
      'Edra Moore Central California Archaeology Type Collection': {
        id: 'option.pahmaCollections.Edra Moore Central California Archaeology Type Collection',
        defaultMessage: 'Edra Moore Central California archaeology type collection',
      },
      'Edra Moore Study Collection': {
        id: 'option.pahmaCollections.Edra Moore Study Collection',
        defaultMessage: 'Edra Moore study collection',
      },
      'Gifford Type Specimen Collection: California bones': {
        id: 'option.pahmaCollections.Gifford Type Specimen Collection: California bones',
        defaultMessage: 'Gifford type specimen collection: california bones',
      },
      'Gifford Type Specimen Collection: Shell': {
        id: 'option.pahmaCollections.Gifford Type Specimen Collection: Shell',
        defaultMessage: 'Gifford type specimen collection: shell',
      },
      'Great Basin Teaching Kit': {
        id: 'option.pahmaCollections.Great Basin Teaching Kit',
        defaultMessage: 'Great Basin teaching kit',
      },
      'Harner\'s Study Collection': {
        id: 'option.pahmaCollections.Harner\'s Study Collection',
        defaultMessage: 'Harner\'s study collection',
      },
      'Juvenile Osteological Growth Series': {
        id: 'option.pahmaCollections.Juvenile Osteological Growth Series',
        defaultMessage: 'juvenile osteological growth Series',
      },
      'Malcolm Rogers ceramic type collection': {
        id: 'option.pahmaCollections.Malcolm Rogers ceramic type collection',
        defaultMessage: 'Malcolm Rogers ceramic type collection',
      },
      'Meighan Historic Glass Bead Collection': {
        id: 'option.pahmaCollections.Meighan Historic Glass Bead Collection',
        defaultMessage: 'Meighan Historic glass bead collection',
      },
      'Mossman-Vitale Collection': {
        id: 'option.pahmaCollections.Mossman-Vitale Collection',
        defaultMessage: 'Mossman-Vitale collection',
      },
      'Niloufer Ichaporia (Hirschmann) collection': {
        id: 'option.pahmaCollections.Niloufer Ichaporia (Hirschmann) collection',
        defaultMessage: 'Niloufer Ichaporia (Hirschmann) collection',
      },
      'Paleopathology Collection': {
        id: 'option.pahmaCollections.Paleopathology Collection',
        defaultMessage: 'Paleopathology collection',
      },
      'Panama Pacific International Exposition Collection': {
        id: 'option.pahmaCollections.Panama Pacific International Exposition Collection',
        defaultMessage: 'Panama Pacific International exposition collection',
      },
      'Pilling Historic Artifact Collection': {
        id: 'option.pahmaCollections.Pilling Historic Artifact Collection',
        defaultMessage: 'pilling historic artifact collection',
      },
      'Reisner\'s Egyptian Collection': {
        id: 'option.pahmaCollections.Reisner\'s Egyptian Collection',
        defaultMessage: 'Reisner\'s Egyptian collection',
      },
      'Richard Lerner collection': {
        id: 'option.pahmaCollections.Richard Lerner collection',
        defaultMessage: 'Richard Lerner collection',
      },
      'Ronald Maduro collection': {
        id: 'option.pahmaCollections.Ronald Maduro collection',
        defaultMessage: 'Ronald Maduro collection',
      },
      'Southwest Type Sherd Collection, Corrugated': {
        id: 'option.pahmaCollections.Southwest Type Sherd Collection, Corrugated',
        defaultMessage: 'southwest type sherd collection, corrugated',
      },
      'Treganza Clay Artifact Collection': {
        id: 'option.pahmaCollections.Treganza Clay Artifact Collection',
        defaultMessage: 'Treganza clay artifact collection',
      },
      'Uhle\'s Peruvian Collection': {
        id: 'option.pahmaCollections.Uhle\'s Peruvian Collection',
        defaultMessage: 'Uhle\'s Peruvian collection',
      },
    }),
  },
  pahmaObjectStatuses: {
    values: [
      '(unknown)',
      'accession status unclear',
      'accessioned',
      'culturally affiliated',
      'culturally unaffiliated',
      'deaccessioned',
      'destroyed',
      'destructive analysis',
      'discarded',
      'exchanged',
      'intended for repatriation',
      'intended for transfer',
      'irregular Museum number',
      'missing',
      'missing in inventory',
      'not cataloged',
      'not located',
      'not received',
      'number not used',
      'object mount',
      'on loan (=borrowed)',
      'partially deaccessioned',
      'partially exchanged',
      'partially recataloged',
      'pending repatriation',
      'recataloged',
      'red-lined',
      'repatriated',
      'returned loan object',
      'sold',
      'stolen',
      'transferred',
    ],
  },
  pahmaPortfolioSeriesTypes: {
    values: [
      '1',
      '2',
      '3',
      '4',
      '5A',
      '5B',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12A',
      '12B',
      '12C',
      '12D',
      '12E',
      '12F',
      '12G',
      '12H',
      '12I',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19A',
      '19B',
      '19C',
      '19D',
      '19E',
      '19F',
      '19G',
      '19H',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
      '33',
      '34',
      '35',
      '36',
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52A',
      '52B',
      '52C',
      '52D',
      '53',
      '54',
      '55',
      '56',
      '57',
      '58',
      '59',
      '60',
      '61',
      '62',
      '63',
      '64',
      '65',
      '66',
      '67',
      '68',
      '69',
      '70',
      '71',
      '72',
      '73',
      '74',
      '75',
      '76',
      '77',
      '78',
      '79',
      '80',
      '81',
      '82',
      '83',
      '84',
      '85',
      '86',
      '87',
      '88',
      '89',
      '90',
      '91',
      '92',
      '93',
      '94',
      '95',
      '96',
      '97',
      '98',
      '99',
      '100',
      '101',
      '102',
      '103',
      '104',
      '105',
      '106',
      '107',
      '108',
      '109',
      '110',
      '111',
      '112',
      '113',
    ],
    messages: defineMessages({
      1: {
        id: 'option.pahmaPortfolioSeriesTypes.1',
        defaultMessage: 'Keeling series 1: Yuki (1902)',
      },
      2: {
        id: 'option.pahmaPortfolioSeriesTypes.2',
        defaultMessage: 'Keeling series 2: Costanoan (1902)',
      },
      3: {
        id: 'option.pahmaPortfolioSeriesTypes.3',
        defaultMessage: 'Keeling series 3: Yurok (1902)',
      },
      4: {
        id: 'option.pahmaPortfolioSeriesTypes.4',
        defaultMessage: 'Keeling series 4: Tule river Yokuts (1903)',
      },
      '5A': {
        id: 'option.pahmaPortfolioSeriesTypes.5A',
        defaultMessage: 'Keeling series 5A: Mohave (1903)— recordings of Jo Nelson (Mohave) collected by A.L. Kroeber in November 1903',
      },
      '5B': {
        id: 'option.pahmaPortfolioSeriesTypes.5B',
        defaultMessage: 'Keeling series 5B: Mohave (1903)— recordings of Ashpashakam (Mohave) collected by A.L. Kroeber in November 1905',
      },
      6: {
        id: 'option.pahmaPortfolioSeriesTypes.6',
        defaultMessage: 'Keeling series 6: Yurok (1906)',
      },
      7: {
        id: 'option.pahmaPortfolioSeriesTypes.7',
        defaultMessage: 'Keeling series 7: Luiseño (1906)',
      },
      8: {
        id: 'option.pahmaPortfolioSeriesTypes.8',
        defaultMessage: 'Keeling series 8: Southern Pomo (1906)',
      },
      9: {
        id: 'option.pahmaPortfolioSeriesTypes.9',
        defaultMessage: 'Keeling series 9: Yurok (1907)',
      },
      10: {
        id: 'option.pahmaPortfolioSeriesTypes.10',
        defaultMessage: 'Keeling series 10: Diegueño (1907)',
      },
      11: {
        id: 'option.pahmaPortfolioSeriesTypes.11',
        defaultMessage: 'Keeling series 11: Yurok (1907)',
      },
      '12A': {
        id: 'option.pahmaPortfolioSeriesTypes.12A',
        defaultMessage: 'Keeling series 12A: Mohave (1908)— Mohave songs of the Ahta ("Cane") cycle, sung by Chiyerekavasuk ("Slue Bird") and collected by A.L. Kroeber in February 1908',
      },
      '12B': {
        id: 'option.pahmaPortfolioSeriesTypes.12B',
        defaultMessage: 'Keeling series 12B: Mohave (1908)— Mohave songs of the Chiyere ("Birds") cycle, sung (or told) by Guy Howard and collected by A.L. Kroeber in March 1908',
      },
      '12C': {
        id: 'option.pahmaPortfolioSeriesTypes.12C',
        defaultMessage: 'Keeling series 12C: Mohave (1908)— Mohave songs of the Tumanpa Vanyume cycle, sung by Bill Mellon (Hispanyemehevik) and collected by A.L. Kroeber in March 1908',
      },
      '12D': {
        id: 'option.pahmaPortfolioSeriesTypes.12D',
        defaultMessage: 'Keeling series 12D: Mohave (1908)— Mohave songs of the Kapeta ("Turtle") cycle sung by Kwathiheingehamalye ("Doctor\'s Sack") and collected by A.L. Kroeber in March 1908',
      },
      '12E': {
        id: 'option.pahmaPortfolioSeriesTypes.12E',
        defaultMessage: 'Keeling series 12E: Mohave (1908)— Mohave songs of the Vinimulya-hapacha cycle, sung by Kutene and collected by A.L. Kroeber in March 1908',
      },
      '12F': {
        id: 'option.pahmaPortfolioSeriesTypes.12F',
        defaultMessage: 'Keeling series 12F: Mohave (1908)— Mohave songs of the Yellaka ("Goose") cycle, sung by Hakwe and collected by A.L. Kroeber in March 1908',
      },
      '12G': {
        id: 'option.pahmaPortfolioSeriesTypes.12G',
        defaultMessage: 'Keeling series 12G: Mohave (1908)— Mohave songs of the Yellaka ("Goose") cycle, sung by Ashpashakam and collected by A.L. Kroeber in March 1908',
      },
      '12H': {
        id: 'option.pahmaPortfolioSeriesTypes.12H',
        defaultMessage: 'Keeling series 12H: Mohave (1908)— Mohave songs of the Nyohaiva cycle, sung by Ashpashakam and collected by A.L. Kroeber in March 1908',
      },
      '12I': {
        id: 'option.pahmaPortfolioSeriesTypes.12I',
        defaultMessage: 'Keeling series 12I: Mohave (1908)— Three recordings of Mohave flute music performed by Chiyerekavasuk or by Guy Howard and collected by A.L. Kroeber in March 1908',
      },
      13: {
        id: 'option.pahmaPortfolioSeriesTypes.13',
        defaultMessage: 'Keeling series 13: Yuki (1907)',
      },
      14: {
        id: 'option.pahmaPortfolioSeriesTypes.14',
        defaultMessage: 'Keeling series 14: Northeastern Pomo (1907)',
      },
      15: {
        id: 'option.pahmaPortfolioSeriesTypes.15',
        defaultMessage: 'Keeling series 15: Wasco (1907)',
      },
      16: {
        id: 'option.pahmaPortfolioSeriesTypes.16',
        defaultMessage: 'Keeling series 16: Klamath Lake (1907)',
      },
      17: {
        id: 'option.pahmaPortfolioSeriesTypes.17',
        defaultMessage: 'Keeling series 17: Northern Paiute (1907)',
      },
      18: {
        id: 'option.pahmaPortfolioSeriesTypes.18',
        defaultMessage: 'Keeling series 18: Modoc (1907)',
      },
      '19A': {
        id: 'option.pahmaPortfolioSeriesTypes.19A',
        defaultMessage: 'Keeling series 19A: Mohave (1908)— Songs of the Ath\'i ("Salt") cycle, sung by an Indian identified as "Doctor Sack\'s half-brother" (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19B': {
        id: 'option.pahmaPortfolioSeriesTypes.19B',
        defaultMessage: 'Keeling series 19B: Mohave (1908)— Songs of the "Frog" cycle, sung by Ateyeg (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19C': {
        id: 'option.pahmaPortfolioSeriesTypes.19C',
        defaultMessage: 'Keeling series 19C: Mohave (1908)— Songs of the Akwaka ("Deer") cycle, sung by Kunalye (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19D': {
        id: 'option.pahmaPortfolioSeriesTypes.19D',
        defaultMessage: 'Keeling series 19D: Mohave (1908)— Songs of the Ohwera cycle, sung by Kupahwai (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19E': {
        id: 'option.pahmaPortfolioSeriesTypes.19E',
        defaultMessage: 'Keeling series 19E: Mohave (1908)— Songs of the Alysa cycle, sung by Kunalye (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19F': {
        id: 'option.pahmaPortfolioSeriesTypes.19F',
        defaultMessage: 'Keeling series 19F: Mohave (1908)— Songs of the Chuhuecha cycle, sung by Achora Hanyava (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19G': {
        id: 'option.pahmaPortfolioSeriesTypes.19G',
        defaultMessage: 'Keeling series 19G: Mohave (1908)— Songs of the Tumanpa Uta\'uta cycle, sung by Achora Hanyava (Mohave) and collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      '19H': {
        id: 'option.pahmaPortfolioSeriesTypes.19H',
        defaultMessage: 'Keeling series 19H: Mohave (1908)— Recording of Chiyerekavasuk or "Bluebird\' (Mohave) collected by Leslie Wilbur for A.L. Kroeber in 1908',
      },
      20: {
        id: 'option.pahmaPortfolioSeriesTypes.20',
        defaultMessage: 'Keeling series 20: Northern Sierra Miwok (1908)',
      },
      21: {
        id: 'option.pahmaPortfolioSeriesTypes.21',
        defaultMessage: 'Keeling series 21: Central Pomo (1908)',
      },
      22: {
        id: 'option.pahmaPortfolioSeriesTypes.22',
        defaultMessage: 'Keeling series 22: Sioux (1908)',
      },
      23: {
        id: 'option.pahmaPortfolioSeriesTypes.23',
        defaultMessage: 'Keeling series 23: Diegueño (1906)',
      },
      24: {
        id: 'option.pahmaPortfolioSeriesTypes.24',
        defaultMessage: 'Keeling series 24: Luiseño (1906)',
      },
      25: {
        id: 'option.pahmaPortfolioSeriesTypes.25',
        defaultMessage: 'Keeling series 25: Papago (1909)',
      },
      26: {
        id: 'option.pahmaPortfolioSeriesTypes.26',
        defaultMessage: 'Keeling series 26: Hupa (1901)',
      },
      27: {
        id: 'option.pahmaPortfolioSeriesTypes.27',
        defaultMessage: 'Keeling series 27: Wailaki (1901)',
      },
      28: {
        id: 'option.pahmaPortfolioSeriesTypes.28',
        defaultMessage: 'Keeling series 28: Hupa (1901)',
      },
      29: {
        id: 'option.pahmaPortfolioSeriesTypes.29',
        defaultMessage: 'Keeling series 29: Nongatl (1907)',
      },
      30: {
        id: 'option.pahmaPortfolioSeriesTypes.30',
        defaultMessage: 'Keeling series 30: Whilkut (1908)',
      },
      31: {
        id: 'option.pahmaPortfolioSeriesTypes.31',
        defaultMessage: 'Keeling series 31: Chilula and Hupa (1908)',
      },
      32: {
        id: 'option.pahmaPortfolioSeriesTypes.32',
        defaultMessage: 'Keeling series 32: Hupa (1905)',
      },
      33: {
        id: 'option.pahmaPortfolioSeriesTypes.33',
        defaultMessage: 'Keeling series 33: Hupa (1902)',
      },
      34: {
        id: 'option.pahmaPortfolioSeriesTypes.34',
        defaultMessage: 'Keeling series 34: Tolowa (1903)',
      },
      35: {
        id: 'option.pahmaPortfolioSeriesTypes.35',
        defaultMessage: 'Keeling series 35: Yurok (1909)',
      },
      36: {
        id: 'option.pahmaPortfolioSeriesTypes.36',
        defaultMessage: 'Keeling series 36: Yurok (1909)',
      },
      37: {
        id: 'option.pahmaPortfolioSeriesTypes.37',
        defaultMessage: 'Keeling series 37: Bannock (1908)',
      },
      38: {
        id: 'option.pahmaPortfolioSeriesTypes.38',
        defaultMessage: 'Keeling series 38: Shoshone (1908)',
      },
      39: {
        id: 'option.pahmaPortfolioSeriesTypes.39',
        defaultMessage: 'Keeling series 39: Chukchi of Siberia (1909)',
      },
      40: {
        id: 'option.pahmaPortfolioSeriesTypes.40',
        defaultMessage: 'Keeling series 40: Southeastern Pomo (1902)',
      },
      41: {
        id: 'option.pahmaPortfolioSeriesTypes.41',
        defaultMessage: 'Keeling series 41: Yurok (1908)',
      },
      42: {
        id: 'option.pahmaPortfolioSeriesTypes.42',
        defaultMessage: 'Keeling series 42: Pomo (1909)',
      },
      43: {
        id: 'option.pahmaPortfolioSeriesTypes.43',
        defaultMessage: 'Keeling series 43: Yokuts (1909)',
      },
      44: {
        id: 'option.pahmaPortfolioSeriesTypes.44',
        defaultMessage: 'Keeling series 44: Hupa (1902)',
      },
      45: {
        id: 'option.pahmaPortfolioSeriesTypes.45',
        defaultMessage: 'Keeling series 45: Japan (n.d)',
      },
      46: {
        id: 'option.pahmaPortfolioSeriesTypes.46',
        defaultMessage: 'Keeling series 46: Wintun (1909)',
      },
      47: {
        id: 'option.pahmaPortfolioSeriesTypes.47',
        defaultMessage: 'Keeling series 47: Wintun (1909 and 1910)',
      },
      48: {
        id: 'option.pahmaPortfolioSeriesTypes.48',
        defaultMessage: 'Keeling series 48: Northern Paiute (1910)',
      },
      49: {
        id: 'option.pahmaPortfolioSeriesTypes.49',
        defaultMessage: 'Keeling series 49: Hupa (n.d)',
      },
      50: {
        id: 'option.pahmaPortfolioSeriesTypes.50',
        defaultMessage: 'Keeling series 50: Ntlakapanuk and Chinook Jargon (n.d)',
      },
      51: {
        id: 'option.pahmaPortfolioSeriesTypes.51',
        defaultMessage: 'Keeling series 51: Maidu (1902)',
      },
      '52A': {
        id: 'option.pahmaPortfolioSeriesTypes.52A',
        defaultMessage: 'Keeling series 52A: Mohave (1910)— Songs of the Tumanpa cycle sung by Achora Hanyava (Mohave) and recorded by A.L. Kroeber in December 1910',
      },
      '52B': {
        id: 'option.pahmaPortfolioSeriesTypes.52B',
        defaultMessage: 'Keeling series 52B: Mohave (1910)— Doctoring songs sung by Achora Hanyava (Mohave) and recorded by A.L. Kroeber in December 1910',
      },
      '52C': {
        id: 'option.pahmaPortfolioSeriesTypes.52C',
        defaultMessage: 'Keeling series 52C: Mohave (1910)— Mohave songs of the Ath\'l ("Salt") cycle sung by Achora Hanyava (Mohave) and recorded by A.L. Kroeber in December 1910',
      },
      '52D': {
        id: 'option.pahmaPortfolioSeriesTypes.52D',
        defaultMessage: 'Keeling series 52D: Mohave (1910)— Mohave songs of the Chuhuecha cycle sung by Achora Hanyava (Mohave) and recorded by A.L. Kroeber in December 1910',
      },
      53: {
        id: 'option.pahmaPortfolioSeriesTypes.53',
        defaultMessage: 'Keeling series 53: Salinan (1910)',
      },
      54: {
        id: 'option.pahmaPortfolioSeriesTypes.54',
        defaultMessage: 'Keeling series 54: laluit of Marshall islands (1911)',
      },
      55: {
        id: 'option.pahmaPortfolioSeriesTypes.55',
        defaultMessage: 'Keeling series 55: Yana/Yahi (1911)',
      },
      56: {
        id: 'option.pahmaPortfolioSeriesTypes.56',
        defaultMessage: 'Keeling series 56: Northern Yana (1911)',
      },
      57: {
        id: 'option.pahmaPortfolioSeriesTypes.57',
        defaultMessage: 'Keeling series 57: Yana/Yahi (1911)',
      },
      58: {
        id: 'option.pahmaPortfolioSeriesTypes.58',
        defaultMessage: 'Keeling series 58: Northern Yana (1911)',
      },
      59: {
        id: 'option.pahmaPortfolioSeriesTypes.59',
        defaultMessage: 'Keeling series 59: Yana/Yahi (1912)',
      },
      60: {
        id: 'option.pahmaPortfolioSeriesTypes.60',
        defaultMessage: 'Keeling series 60: Yana/Yahi (1912)',
      },
      61: {
        id: 'option.pahmaPortfolioSeriesTypes.61',
        defaultMessage: 'Keeling series 61: Yuki (1912)',
      },
      62: {
        id: 'option.pahmaPortfolioSeriesTypes.62',
        defaultMessage: 'Keeling series 62: Experimental recordings (n.d)',
      },
      63: {
        id: 'option.pahmaPortfolioSeriesTypes.63',
        defaultMessage: 'Keeling series 63: Central Sierra Miwok (1913)',
      },
      64: {
        id: 'option.pahmaPortfolioSeriesTypes.64',
        defaultMessage: 'Keeling series 64: Experimental recording (n.d)',
      },
      65: {
        id: 'option.pahmaPortfolioSeriesTypes.65',
        defaultMessage: 'Keeling series 65: Athabaskan (1913)',
      },
      66: {
        id: 'option.pahmaPortfolioSeriesTypes.66',
        defaultMessage: 'Keeling series 66: Yana/Yahi (1914)',
      },
      67: {
        id: 'option.pahmaPortfolioSeriesTypes.67',
        defaultMessage: 'Keeling series 67: Central Sierra Miwok (1914)',
      },
      68: {
        id: 'option.pahmaPortfolioSeriesTypes.68',
        defaultMessage: 'Keeling series 68: Northern Paiute (1914)',
      },
      69: {
        id: 'option.pahmaPortfolioSeriesTypes.69',
        defaultMessage: 'Keeling series 69: Owens Valley Paiute (1915)',
      },
      70: {
        id: 'option.pahmaPortfolioSeriesTypes.70',
        defaultMessage: 'Keeling series 70: Central and Southern Sierra Miwok (1908)',
      },
      71: {
        id: 'option.pahmaPortfolioSeriesTypes.71',
        defaultMessage: 'Keeling series 71: North Fork Mono (1916)',
      },
      72: {
        id: 'option.pahmaPortfolioSeriesTypes.72',
        defaultMessage: 'Keeling series 72: Cahuilla (1918)',
      },
      73: {
        id: 'option.pahmaPortfolioSeriesTypes.73',
        defaultMessage: 'Keeling series 73: Western Mono (1926)',
      },
      74: {
        id: 'option.pahmaPortfolioSeriesTypes.74',
        defaultMessage: 'Keeling series 74: Papago (1919)',
      },
      75: {
        id: 'option.pahmaPortfolioSeriesTypes.75',
        defaultMessage: 'Keeling series 75: Eastern Porno (1919)',
      },
      76: {
        id: 'option.pahmaPortfolioSeriesTypes.76',
        defaultMessage: 'Keeling series 76: Eskimo (1907-1908)',
      },
      77: {
        id: 'option.pahmaPortfolioSeriesTypes.77',
        defaultMessage: 'Keeling series 77: Northern Paiute (1913)',
      },
      78: {
        id: 'option.pahmaPortfolioSeriesTypes.78',
        defaultMessage: 'Keeling series 78: Wiyot (1923)',
      },
      79: {
        id: 'option.pahmaPortfolioSeriesTypes.79',
        defaultMessage: 'Keeling series 79: Snoqualemie (1923)',
      },
      80: {
        id: 'option.pahmaPortfolioSeriesTypes.80',
        defaultMessage: 'Keeling series 80: Yuki (1902 and 1912)',
      },
      81: {
        id: 'option.pahmaPortfolioSeriesTypes.81',
        defaultMessage: 'Keeling series 81: Hopi and Navajo (1925)',
      },
      82: {
        id: 'option.pahmaPortfolioSeriesTypes.82',
        defaultMessage: 'Keeling series 82: Nomlaki (1925)',
      },
      83: {
        id: 'option.pahmaPortfolioSeriesTypes.83',
        defaultMessage: 'Keeling series 83: Wiyot (n.d)',
      },
      84: {
        id: 'option.pahmaPortfolioSeriesTypes.84',
        defaultMessage: 'Keeling series 84: Northern Wintun (1929)',
      },
      85: {
        id: 'option.pahmaPortfolioSeriesTypes.85',
        defaultMessage: 'Keeling series 85: Otomi of Mexico (1929)',
      },
      86: {
        id: 'option.pahmaPortfolioSeriesTypes.86',
        defaultMessage: 'Keeling series 86: Southern Athabaskan (1929)',
      },
      87: {
        id: 'option.pahmaPortfolioSeriesTypes.87',
        defaultMessage: 'Keeling series 87: Coast Miwok (1932)',
      },
      88: {
        id: 'option.pahmaPortfolioSeriesTypes.88',
        defaultMessage: 'Keeling series 88: Yavapai (1932)',
      },
      89: {
        id: 'option.pahmaPortfolioSeriesTypes.89',
        defaultMessage: 'Keeling series 89: Eastern Porno (1926 and 1927)',
      },
      90: {
        id: 'option.pahmaPortfolioSeriesTypes.90',
        defaultMessage: 'Keeling series 90: Eastern Porno (1927 and 1929)',
      },
      91: {
        id: 'option.pahmaPortfolioSeriesTypes.91',
        defaultMessage: 'Keeling series 91: Karok (1926 and 1927)',
      },
      92: {
        id: 'option.pahmaPortfolioSeriesTypes.92',
        defaultMessage: 'Keeling series 92: Yurok (1926-1932)',
      },
      93: {
        id: 'option.pahmaPortfolioSeriesTypes.93',
        defaultMessage: 'Keeling series 93: Maidu (1931)',
      },
      94: {
        id: 'option.pahmaPortfolioSeriesTypes.94',
        defaultMessage: 'Keeling series 94: Sierra Miwok (1927)',
      },
      95: {
        id: 'option.pahmaPortfolioSeriesTypes.95',
        defaultMessage: 'Keeling series 95: Navajo (1928)',
      },
      96: {
        id: 'option.pahmaPortfolioSeriesTypes.96',
        defaultMessage: 'Keeling series 96: Santa Clara Pueblo (1926)',
      },
      97: {
        id: 'option.pahmaPortfolioSeriesTypes.97',
        defaultMessage: 'Keeling series 97: Papago (1928)',
      },
      98: {
        id: 'option.pahmaPortfolioSeriesTypes.98',
        defaultMessage: 'Keeling series 98: Sioux (1928)',
      },
      99: {
        id: 'option.pahmaPortfolioSeriesTypes.99',
        defaultMessage: 'Keeling series 99: Blackfoot (1926 and 1927)',
      },
      100: {
        id: 'option.pahmaPortfolioSeriesTypes.100',
        defaultMessage: 'Keeling series 100: Crow (1926-1927)',
      },
      101: {
        id: 'option.pahmaPortfolioSeriesTypes.101',
        defaultMessage: 'Keeling series 101: Crow (1927)',
      },
      102: {
        id: 'option.pahmaPortfolioSeriesTypes.102',
        defaultMessage: 'Keeling series 102: Mono Lake Paiute (1927-1928)',
      },
      103: {
        id: 'option.pahmaPortfolioSeriesTypes.103',
        defaultMessage: 'Keeling series 103: Owens Valley Paiute and Mono Lake Paiute (1927-1928)',
      },
      104: {
        id: 'option.pahmaPortfolioSeriesTypes.104',
        defaultMessage: 'Keeling series 104: Northern Paiute (1938)',
      },
      105: {
        id: 'option.pahmaPortfolioSeriesTypes.105',
        defaultMessage: 'Keeling series 105: Washo (1938)',
      },
      106: {
        id: 'option.pahmaPortfolioSeriesTypes.106',
        defaultMessage: 'Keeling series 106: Uintah Ute (1938)',
      },
      107: {
        id: 'option.pahmaPortfolioSeriesTypes.107',
        defaultMessage: 'Keeling series 107: Washo (1938)',
      },
      108: {
        id: 'option.pahmaPortfolioSeriesTypes.108',
        defaultMessage: 'Keeling series 108: Northern Paiute (1938)',
      },
      109: {
        id: 'option.pahmaPortfolioSeriesTypes.109',
        defaultMessage: 'Keeling series 109: Shoshone (1938)',
      },
      110: {
        id: 'option.pahmaPortfolioSeriesTypes.110',
        defaultMessage: 'Keeling series 110: Chukchansi Yokuts (1949)',
      },
      111: {
        id: 'option.pahmaPortfolioSeriesTypes.111',
        defaultMessage: 'Keeling series 111: Coast Miwok (n.d)',
      },
      112: {
        id: 'option.pahmaPortfolioSeriesTypes.112',
        defaultMessage: 'Keeling series 112: Yuman/Maricopa (1929-1932)',
      },
      113: {
        id: 'option.pahmaPortfolioSeriesTypes.113',
        defaultMessage: 'Keeling series 113: miscellaneous',
      },
    }),
  },
  pahmaSexCategories: {
    values: [
      'male',
      'probable-male',
      'possible-male',
      'female',
      'probable-female',
      'possible-female',
      'asexual',
      'hermaphrodite',
      'multiple',
      'indeterminate',
      'not-applicable',
      'unknown',
    ],
    messages: defineMessages({
      'probable-male': {
        id: 'option.pahmaSexCategories.probable-male',
        defaultMessage: 'probable male',
      },
      'possible-male': {
        id: 'option.pahmaSexCategories.possible-male',
        defaultMessage: 'possible male',
      },
      'probable-female': {
        id: 'option.pahmaSexCategories.probable-female',
        defaultMessage: 'probable female',
      },
      'possible-female': {
        id: 'option.pahmaSexCategories.possible-female',
        defaultMessage: 'possible female',
      },
      'not-applicable': {
        id: 'option.pahmaSexCategories.not-applicable',
        defaultMessage: 'not applicable',
      },
    }),
  },
  pahmaPhases: {
    values: [
      'adult-mature',
      'subadult-immature',
      'egg',
      'larva',
      'seed',
      'indeterminate',
      'multiple',
      'unknown',
    ],
    messages: defineMessages({
      'adult-mature': {
        id: 'option.pahmaPhases.adult-mature',
        defaultMessage: 'adult/mature',
      },
      'subadult-immature': {
        id: 'option.pahmaPhases.subadult-immature',
        defaultMessage: 'subadult/immature',
      },
    }),
  },
  pahmaForms: {
    values: [
      'bagged',
      'bottled',
      'boxed',
      'in-can-or-tin',
      'in-drum',
      'dry',
      'ground',
      'mounted',
      'pinned',
      'thin-section',
      'wet',
      'wrapped',
      'unknown',
    ],
    messages: defineMessages({
      'in-can-or-tin': {
        id: 'option.pahmaForms.in-can-or-tin',
        defaultMessage: 'in can or tin',
      },
      'in-drum': {
        id: 'option.pahmaForms.in-drum',
        defaultMessage: 'in drum',
      },
      'thin-section': {
        id: 'option.pahmaForms.thin-section',
        defaultMessage: 'thin section',
      },
    }),
  },
  pahmaTechnicalAttributeMeasurementTypes: {
    values: [
      '33',
      '45',
      '78',
    ],
  },
  pahmaTechnicalMeasurementUnits: {
    values: [
      'rpm',
    ],
  },
  pahmaContentObjectTypes: {
    values: [
      'animal',
      'artwork',
      'book',
      'bone',
      'burial',
      'building',
      'clothing',
      'container',
      'document',
      'furniture',
      'food',
      'game',
      'jewelry',
      'musicalInstrument',
      'plant',
      'rawMaterial',
      'regalia',
      'ritualObject',
      'textile',
      'tool',
      'vehicle',
      'watercraft',
      'weapon',
    ],
    messages: defineMessages({
      musicalInstrument: {
        id: 'option.pahmaContentObjectTypes.musicalInstrument',
        defaultMessage: 'musical instrument',
      },
      rawMaterial: {
        id: 'option.pahmaContentObjectTypes.rawMaterial',
        defaultMessage: 'raw material',
      },
      ritualObject: {
        id: 'option.pahmaContentObjectTypes.ritualObject',
        defaultMessage: 'ritual object',
      },
    }),
  },
  pahmaContentEventNameTypes: {
    values: [
      'ceremony',
      'classVisit',
      'dance',
      'exhibit',
      'healingDoctoring',
      'lecture',
      'memberEvent',
      'nagpraConsultation',
      'reception',
      'researchVisit',
      'tour',
      'tribalVisit',
    ],
    messages: defineMessages({
      classVisit: {
        id: 'option.pahmaContentEventNameTypes.classVisit',
        defaultMessage: 'class visit',
      },
      healingDoctoring: {
        id: 'option.pahmaContentEventNameTypes.healingDoctoring',
        defaultMessage: 'healing/doctoring',
      },
      memberEvent: {
        id: 'option.pahmaContentEventNameTypes.memberEvent',
        defaultMessage: 'member event',
      },
      nagpraConsultation: {
        id: 'option.pahmaContentEventNameTypes.nagpraConsultation',
        defaultMessage: 'NAGPRA consultation',
      },
      researchVisit: {
        id: 'option.pahmaContentEventNameTypes.researchVisit',
        defaultMessage: 'research visit',
      },
      tribalVisit: {
        id: 'option.pahmaContentEventNameTypes.tribalVisit',
        defaultMessage: 'tribal visit',
      },
    }),
  },
  pahmaInscriptionScriptTypes: {
    values: [
      'beneventanScript',
      'blackletter',
      'carolingianMiniscule',
      'chanceryHand',
      'courtHand',
      'germanicMiniscule',
      'gothicScript',
      'unspecifiedHandwriting',
      'humanistMiniscule',
      'insularScript',
      'libraryHand',
      'merovingianScript',
      'palmerMethod',
      'romanCursive',
      'roundHand',
      'uncialScript',
      'secretaryHand',
      'rusticCapitals',
      'spencerianMethod',
      'squareCapitals',
      'visigothicScript',
    ],
    messages: defineMessages({
      beneventanScript: {
        id: 'option.pahmaInscriptionScriptTypes.beneventanScript',
        defaultMessage: 'beneventan script',
      },
      blackletter: {
        id: 'option.pahmaInscriptionScriptTypes.blackletter',
        defaultMessage: 'black letter',
      },
      carolingianMiniscule: {
        id: 'option.pahmaInscriptionScriptTypes.carolingianMiniscule',
        defaultMessage: 'Carolingian miniscule',
      },
      chanceryHand: {
        id: 'option.pahmaInscriptionScriptTypes.chanceryHand',
        defaultMessage: 'chancery hand',
      },
      courtHand: {
        id: 'option.pahmaInscriptionScriptTypes.courtHand',
        defaultMessage: 'court hand',
      },
      germanicMiniscule: {
        id: 'option.pahmaInscriptionScriptTypes.germanicMiniscule',
        defaultMessage: 'Germanic miniscule',
      },
      gothicScript: {
        id: 'option.pahmaInscriptionScriptTypes.gothicScript',
        defaultMessage: 'gothic script',
      },
      unspecifiedHandwriting: {
        id: 'option.pahmaInscriptionScriptTypes.unspecifiedHandwriting',
        defaultMessage: 'unspecified handwriting',
      },
      humanistMiniscule: {
        id: 'option.pahmaInscriptionScriptTypes.humanistMiniscule',
        defaultMessage: 'humanist miniscule',
      },
      insularScript: {
        id: 'option.pahmaInscriptionScriptTypes.insularScript',
        defaultMessage: 'insular script',
      },
      libraryHand: {
        id: 'option.pahmaInscriptionScriptTypes.libraryHand',
        defaultMessage: 'library hand',
      },
      merovingianScript: {
        id: 'option.pahmaInscriptionScriptTypes.merovingianScript',
        defaultMessage: 'Merovingian script',
      },
      palmerMethod: {
        id: 'option.pahmaInscriptionScriptTypes.palmerMethod',
        defaultMessage: 'Palmer method',
      },
      romanCursive: {
        id: 'option.pahmaInscriptionScriptTypes.romanCursive',
        defaultMessage: 'Roman cursive',
      },
      roundHand: {
        id: 'option.pahmaInscriptionScriptTypes.roundHand',
        defaultMessage: 'round hand',
      },
      uncialScript: {
        id: 'option.pahmaInscriptionScriptTypes.uncialScript',
        defaultMessage: 'uncial script',
      },
      secretaryHand: {
        id: 'option.pahmaInscriptionScriptTypes.secretaryHand',
        defaultMessage: 'secretary hand',
      },
      rusticCapitals: {
        id: 'option.pahmaInscriptionScriptTypes.rusticCapitals',
        defaultMessage: 'rustic capitals',
      },
      spencerianMethod: {
        id: 'option.pahmaInscriptionScriptTypes.spencerianMethod',
        defaultMessage: 'Spencerian method',
      },
      squareCapitals: {
        id: 'option.pahmaInscriptionScriptTypes.squareCapitals',
        defaultMessage: 'square capitals',
      },
      visigothicScript: {
        id: 'option.pahmaInscriptionScriptTypes.visigothicScript',
        defaultMessage: 'Visigothic script',
      },
    }),
  },
  pahmaInscriptionDescriptionTypes: {
    values: [
      'brand',
      'decoration',
      'epitaph',
      'estateStamp',
      'exLibris',
      'graffiti',
      'incisedMark',
      'label',
      'makersMark',
      'mementoMori',
      'monumentalInscription',
      'ostracon',
      'tattoo',
    ],
    messages: defineMessages({
      estateStamp: {
        id: 'option.pahmaInscriptionDescriptionTypes.estateStamp',
        defaultMessage: 'estate stamp',
      },
      exLibris: {
        id: 'option.pahmaInscriptionDescriptionTypes.exLibris',
        defaultMessage: 'ex libris',
      },
      incisedMark: {
        id: 'option.pahmaInscriptionDescriptionTypes.incisedMark',
        defaultMessage: 'incised mark',
      },
      makersMark: {
        id: 'option.pahmaInscriptionDescriptionTypes.makersMark',
        defaultMessage: 'maker\'s mark',
      },
      mementoMori: {
        id: 'option.pahmaInscriptionDescriptionTypes.mementoMori',
        defaultMessage: 'memento mori',
      },
      monumentalInscription: {
        id: 'option.pahmaInscriptionDescriptionTypes.monumentalInscription',
        defaultMessage: 'monumental inscription',
      },
    }),
  },
  pahmaObjProductionOrgRoles: {
    values: [
      'maker',
      'manufacturer',
      'performer',
      'photographer',
      'supplier',
    ],
  },
  pahmaAssocActivityTypes: {
    values: [
      'played',
      'recorded',
      'sung',
      'used',
      'viewed',
      'worn',
      'unknown',
    ],
  },
  pahmaAssocObjectTypes: {
    values: [
      'adhering',
      'associatedWith',
      'embedded',
      'foundNear',
    ],
    messages: defineMessages({
      associatedWith: {
        id: 'option.pahmaAssocObjectTypes.associatedWith',
        defaultMessage: 'associated with',
      },
      foundNear: {
        id: 'option.pahmaAssocObjectTypes.foundNear',
        defaultMessage: 'found near',
      },
    }),
  },
  pahmaAssocConceptTypes: {
    values: [
      'causedBy',
      'dependsOn',
      'effectOf',
      'exampleOf',
      'influencedBy',
      'inspiredBy',
      'partOf',
      'relatedTo',
      'reminiscentOf',
      'sameAs',
      'sameClassAs',
      'similarTo',
    ],
    messages: defineMessages({
      causedBy: {
        id: 'option.pahmaAssocConceptTypes.causedBy',
        defaultMessage: 'caused by',
      },
      dependsOn: {
        id: 'option.pahmaAssocConceptTypes.dependsOn',
        defaultMessage: 'depends on',
      },
      effectOf: {
        id: 'option.pahmaAssocConceptTypes.effectOf',
        defaultMessage: 'effect of',
      },
      exampleOf: {
        id: 'option.pahmaAssocConceptTypes.exampleOf',
        defaultMessage: 'example of',
      },
      influencedBy: {
        id: 'option.pahmaAssocConceptTypes.influencedBy',
        defaultMessage: 'influenced by',
      },
      inspiredBy: {
        id: 'option.pahmaAssocConceptTypes.inspiredBy',
        defaultMessage: 'inspired by',
      },
      partOf: {
        id: 'option.pahmaAssocConceptTypes.partOf',
        defaultMessage: 'part of',
      },
      relatedTo: {
        id: 'option.pahmaAssocConceptTypes.relatedTo',
        defaultMessage: 'related to',
      },
      reminiscentOf: {
        id: 'option.pahmaAssocConceptTypes.reminiscentOf',
        defaultMessage: 'reminiscent of',
      },
      sameAs: {
        id: 'option.pahmaAssocConceptTypes.sameAs',
        defaultMessage: 'same as',
      },
      sameClassAs: {
        id: 'option.pahmaAssocConceptTypes.sameClassAs',
        defaultMessage: 'same class as',
      },
      similarTo: {
        id: 'option.pahmaAssocConceptTypes.similarTo',
        defaultMessage: 'similar to',
      },
    }),
  },
  assocCulturalContextTypes: {
    values: [
      'descendedFrom',
      'exampleOf',
      'inspiredBy',
      'relatedTo',
      'similarTo',
      'identicalTo',
      'influencedBy',
      'reminiscentOf',
    ],
    messages: defineMessages({
      descendedFrom: {
        id: 'option.assocCulturalContextTypes.descendedFrom',
        defaultMessage: 'descended from',
      },
      exampleOf: {
        id: 'option.assocCulturalContextTypes.exampleOf',
        defaultMessage: 'example of',
      },
      inspiredBy: {
        id: 'option.assocCulturalContextTypes.inspiredBy',
        defaultMessage: 'inspired by',
      },
      relatedTo: {
        id: 'option.assocCulturalContextTypes.relatedTo',
        defaultMessage: 'related to',
      },
      similarTo: {
        id: 'option.assocCulturalContextTypes.similarTo',
        defaultMessage: 'typologically similar to',
      },
      identicalTo: {
        id: 'option.assocCulturalContextTypes.identicalTo',
        defaultMessage: 'typologically identical to',
      },
      influencedBy: {
        id: 'option.assocCulturalContextTypes.influencedBy',
        defaultMessage: 'influenced by',
      },
      reminiscentOf: {
        id: 'option.assocCulturalContextTypes.reminiscentOf',
        defaultMessage: 'reminiscent of',
      },
    }),
  },
  pahmaAssocPeopleTypes: {
    values: [
      'gatheredCollectedBy',
      'inspiredBy',
      'nagpraCulturalAffiliation',
      'traditionalMakers',
      'inTheStyleOf',
      'attributedMakers',
      'made by',
      'traditionallyMadeBy',
      'usedButNotMadeBy',
      'usedButNotMadeByAttributed',
    ],
    messages: defineMessages({
      gatheredCollectedBy: {
        id: 'option.pahmaAssocPeopleTypes.gatheredCollectedBy',
        defaultMessage: 'gathered/collected by',
      },
      inspiredBy: {
        id: 'option.pahmaAssocPeopleTypes.inspiredBy',
        defaultMessage: 'inspired by',
      },
      nagpraCulturalAffiliation: {
        id: 'option.pahmaAssocPeopleTypes.nagpraCulturalAffiliation',
        defaultMessage: 'NAGPRA cultural affiliation',
      },
      traditionalMakers: {
        id: 'option.pahmaAssocPeopleTypes.traditionalMakers',
        defaultMessage: 'traditional makers',
      },
      inTheStyleOf: {
        id: 'option.pahmaAssocPeopleTypes.inTheStyleOf',
        defaultMessage: 'in the style of',
      },
      attributedMakers: {
        id: 'option.pahmaAssocPeopleTypes.attributedMakers',
        defaultMessage: 'made by (attributed)',
      },
      traditionallyMadeBy: {
        id: 'option.pahmaAssocPeopleTypes.traditionallyMadeBy',
        defaultMessage: 'traditionally made by',
      },
      usedButNotMadeBy: {
        id: 'option.pahmaAssocPeopleTypes.usedButNotMadeBy',
        defaultMessage: 'used, but not made, by',
      },
      usedButNotMadeByAttributed: {
        id: 'option.pahmaAssocPeopleTypes.usedButNotMadeByAttributed',
        defaultMessage: 'used, but not made, by (attributed)',
      },
    }),
  },
  pahmaAssocEventTypes: {
    values: [
      'ceremony',
      'classVisit',
      'courtesyVisit',
      'dance',
      'exhibit',
      'lecture',
      'memberEvent',
      'nagpraConsultation',
      'reception',
      'researchVisit',
      'tour',
      'tribalVisit',
    ],
    messages: defineMessages({
      classVisit: {
        id: 'option.pahmaAssocEventTypes.classVisit',
        defaultMessage: 'class visit',
      },
      courtesyVisit: {
        id: 'option.pahmaAssocEventTypes.courtesyVisit',
        defaultMessage: 'courtesy visit',
      },
      memberEvent: {
        id: 'option.pahmaAssocEventTypes.memberEvent',
        defaultMessage: 'member event',
      },
      nagpraConsultation: {
        id: 'option.pahmaAssocEventTypes.nagpraConsultation',
        defaultMessage: 'NAGPRA consultation',
      },
      researchVisit: {
        id: 'option.pahmaAssocEventTypes.researchVisit',
        defaultMessage: 'research visit',
      },
      tribalVisit: {
        id: 'option.pahmaAssocEventTypes.tribalVisit',
        defaultMessage: 'tribal visit',
      },
    }),
  },
  pahmaAssocDateTypes: {
    values: [
      'conservation date',
      'date missing',
      'date of analysis',
      'date photographed',
      'date received',
      'date used',
      'deaccession date',
      'destruction date',
      'immured',
      'material date',
      'minting',
      'mounted',
      'partial deaccession/loss/destruc',
      'patent date',
      'published',
      'recatalogued date',
      'ruler date',
    ],
  },
  pahmaOwnershipCategories: {
    values: [
      'corporate',
      'private',
      'government',
      'foreign',
      'nonProfit',
      'museum',
      'university',
      'unknown',
    ],
    messages: defineMessages({
      government: {
        id: 'option.pahmaOwnershipCategories.government',
        defaultMessage: 'government/public',
      },
      nonProfit: {
        id: 'option.pahmaOwnershipCategories.nonProfit',
        defaultMessage: 'non-profit',
      },
    }),
  },
  pahmaOwnershipExchangeMethods: {
    values: [
      'bequest',
      'exchange',
      'gift',
      'purchase',
      'transfer',
    ],
  },
  ageEstimateQualifiers: {
    values: [
      'approximately',
      'exactly',
      'olderThan',
      'youngerThan',
    ],
    messages: defineMessages({
      olderThan: {
        id: 'option.ageEstimateQualifiers.olderThan',
        defaultMessage: 'older than',
      },
      youngerThan: {
        id: 'option.ageEstimateQualifiers.youngerThan',
        defaultMessage: 'younger than',
      },
    }),
  },
  pahmaNagpraCodeLegacyCategories: {
    values: [
      'noCode',
      'associatedFuneraryObject',
      'unassociatedFuneraryObjectWithDesignatedBurial',
      'unassociatedFuneraryObjectWithUndesignatedBurial',
      'unassociatedFuneraryObjectWithCemetery',
      'lacksClearFuneraryStatusNearCemetery',
      'needsFurtherResearch',
      'codedInError',
      'needsCheckOfObject',
      'wasRecataloged',
      'notReportable',
      'unknownMeaning777',
      'needsRecatalog',
      'unknown',
    ],
    messages: defineMessages({
      noCode: {
        id: 'option.pahmaNagpraCodeLegacyCategories.noCode',
        defaultMessage: 'no code assigned',
      },
      associatedFuneraryObject: {
        id: 'option.pahmaNagpraCodeLegacyCategories.associatedFuneraryObject',
        defaultMessage: '1: associated funerary object (AFO)',
      },
      unassociatedFuneraryObjectWithDesignatedBurial: {
        id: 'option.pahmaNagpraCodeLegacyCategories.unassociatedFuneraryObjectWithDesignatedBurial',
        defaultMessage: '2: unassociated funerary object (UFO) with designated burial',
      },
      unassociatedFuneraryObjectWithUndesignatedBurial: {
        id: 'option.pahmaNagpraCodeLegacyCategories.unassociatedFuneraryObjectWithUndesignatedBurial',
        defaultMessage: '3: unassociated funerary object (UFO) with undesignated burial',
      },
      unassociatedFuneraryObjectWithCemetery: {
        id: 'option.pahmaNagpraCodeLegacyCategories.unassociatedFuneraryObjectWithCemetery',
        defaultMessage: '4: unassociated funerary object (UFO)/cemetery',
      },
      lacksClearFuneraryStatusNearCemetery: {
        id: 'option.pahmaNagpraCodeLegacyCategories.lacksClearFuneraryStatusNearCemetery',
        defaultMessage: '5: lacks clear funerary status/near cemetery',
      },
      needsFurtherResearch: {
        id: 'option.pahmaNagpraCodeLegacyCategories.needsFurtherResearch',
        defaultMessage: '6: needs further research',
      },
      codedInError: {
        id: 'option.pahmaNagpraCodeLegacyCategories.codedInError',
        defaultMessage: '7: coded in error',
      },
      needsCheckOfObject: {
        id: 'option.pahmaNagpraCodeLegacyCategories.needsCheckOfObject',
        defaultMessage: '8: needs check of object',
      },
      wasRecataloged: {
        id: 'option.pahmaNagpraCodeLegacyCategories.wasRecataloged',
        defaultMessage: '9: was recataloged',
      },
      notReportable: {
        id: 'option.pahmaNagpraCodeLegacyCategories.notReportable',
        defaultMessage: '10: not reportable',
      },
      unknownMeaning777: {
        id: 'option.pahmaNagpraCodeLegacyCategories.unknownMeaning777',
        defaultMessage: '777: __________',
      },
      needsRecatalog: {
        id: 'option.pahmaNagpraCodeLegacyCategories.needsRecatalog',
        defaultMessage: '999: needs recatalog',
      },
    }),
  },
  nagpraApplicabilityCategories: {
    values: [
      'nonNagpra',
      'affiliatedHsr',
      'unaffiliatedCuiHsr',
      'afo',
      'ufo',
      'sacredObject',
      'objectOfCulturalPatrimony',
      'subjectToNAGPRA',
      'needsFurtherResearch',
      'unknown',
    ],
    messages: defineMessages({
      nonNagpra: {
        id: 'option.nagpraApplicabilityCategories.nonNagpra',
        defaultMessage: 'not subject to NAGPRA',
      },
      affiliatedHsr: {
        id: 'option.nagpraApplicabilityCategories.affiliatedHsr',
        defaultMessage: 'affiliated human skeletal remains (HSR)',
      },
      unaffiliatedCuiHsr: {
        id: 'option.nagpraApplicabilityCategories.unaffiliatedCuiHsr',
        defaultMessage: 'unaffiliated human skeletal remains (HSR) (=CUI)',
      },
      afo: {
        id: 'option.nagpraApplicabilityCategories.afo',
        defaultMessage: 'associated funerary object (AFO)',
      },
      ufo: {
        id: 'option.nagpraApplicabilityCategories.ufo',
        defaultMessage: 'unassociated funerary object (UFO)',
      },
      sacredObject: {
        id: 'option.nagpraApplicabilityCategories.sacredObject',
        defaultMessage: 'sacred object',
      },
      objectOfCulturalPatrimony: {
        id: 'option.nagpraApplicabilityCategories.objectOfCulturalPatrimony',
        defaultMessage: 'object of cultural patrimony',
      },
      subjectToNAGPRA: {
        id: 'option.nagpraApplicabilityCategories.subjectToNAGPRA',
        defaultMessage: 'subject to NAGPRA (unspec.)',
      },
      needsFurtherResearch: {
        id: 'option.nagpraApplicabilityCategories.needsFurtherResearch',
        defaultMessage: 'needs further research',
      },
    }),
  },
  pahmaAccessRestrictionTypes: {
    values: [
      'displayVisualRestriction',
      'handlingGenderRestriction',
      'handlingOtherRestriction',
      'lendingRestriction',
      'publicationRestriction',
      'researchAccessRestriction',
      'storageRestriction',
      'treatmentRestriction',
      'unknown',
    ],
    messages: defineMessages({
      displayVisualRestriction: {
        id: 'option.accessRestrictionTypes.displayVisualRestriction',
        defaultMessage: 'display/visual',
      },
      handlingGenderRestriction: {
        id: 'option.accessRestrictionTypes.handlingGenderRestriction',
        defaultMessage: 'handling: gender',
      },
      handlingOtherRestriction: {
        id: 'option.accessRestrictionTypes.handlingOtherRestriction',
        defaultMessage: 'handling: other',
      },
      lendingRestriction: {
        id: 'option.accessRestrictionTypes.lendingRestriction',
        defaultMessage: 'lending',
      },
      publicationRestriction: {
        id: 'option.accessRestrictionTypes.publicationRestriction',
        defaultMessage: 'publication',
      },
      researchAccessRestriction: {
        id: 'option.accessRestrictionTypes.researchAccessRestriction',
        defaultMessage: 'research/access',
      },
      storageRestriction: {
        id: 'option.accessRestrictionTypes.storageRestriction',
        defaultMessage: 'storage',
      },
      treatmentRestriction: {
        id: 'option.accessRestrictionTypes.treatmentRestriction',
        defaultMessage: 'treatment',
      },
    }),
  },
  pahmaAccessLevels: {
    values: [
      'preference',
      'recommendation',
      'restriction',
      'unknown',
    ],
  },
  pahmaProdTechniqueTypes: {
    values: [
      'automated',
      'handCrafted',
    ],
    messages: defineMessages({
      handCrafted: {
        id: 'option.pahmaProdTechniqueTypes.handCrafted',
        defaultMessage: 'hand-crafted',
      },
    }),
  },
  pahmaTechnicalAttributes: {
    values: [
      'recordSpeed',
    ],
    messages: defineMessages({
      recordSpeed: {
        id: 'option.pahmanTechnicalAttributes.recordSpeed',
        defaultMessage: 'recording speed',
      },
    }),
  },
};
