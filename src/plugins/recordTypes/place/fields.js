import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    TextInput,
    TermPickerInput,
    StructuredDateInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_STRUCT_DATE,
  } = configContext.dataTypes;

  const {
    getDisplayName,
  } = configContext.refNameHelpers;

  return {
    document: {
      'ns2:places_common': {
        placeTermGroupList: {
          placeTermGroup: {
            termDisplayName: {
              [config]: {
                searchTransform: ({ data }) => getDisplayName(data),
                searchView: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
          },
        },
        placeType: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'PlaceType',
              },
            },
          },
        },
        vCoordSource: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'citation/local',
              },
            },
          },
        },
        placeGeoRefGroupList: {
          placeGeoRefGroup: {
            geoRefSource: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:places_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/place/domain/anthropology',
          },
        },
        placeNoteGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          placeNoteGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthropology.placeNoteGroup.name',
                  defaultMessage: 'Place note',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            placeNoteText: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeNoteText.fullName',
                    defaultMessage: 'Place note',
                  },
                  name: {
                    id: 'field.places_anthropology.placeNoteText.name',
                    defaultMessage: 'Note',
                  },
                }),
                searchView: {
                  type: TextInput,
                },
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            placeNoteAuthor: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeNoteAuthor.fullName',
                    defaultMessage: 'Place note author',
                  },
                  name: {
                    id: 'field.places_anthropology.placeNoteAuthor.name',
                    defaultMessage: 'Author',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local',
                  },
                },
              },
            },
            placeNoteDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeNoteDate.fullName',
                    defaultMessage: 'Place note date',
                  },
                  name: {
                    id: 'field.places_anthropology.placeNoteDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        placeReferenceGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          placeReferenceGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthropology.placeReferenceGroup.name',
                  defaultMessage: 'Reference',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            placeReference: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeReference.fullName',
                    defaultMessage: 'Reference',
                  },
                  name: {
                    id: 'field.places_anthropology.placeReference.name',
                    defaultMessage: 'Reference',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,citation/worldcat',
                  },
                },
              },
            },
            placeReferenceNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeReferenceNote.fullName',
                    defaultMessage: 'Reference note',
                  },
                  name: {
                    id: 'field.places_anthropology.placeReferenceNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        anthropologyPlaceTypes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          anthropologyPlaceType: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthropology.anthropologyPlaceType.name',
                  defaultMessage: 'Place type',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'PlaceType',
                },
              },
            },
          },
        },
        placeAssocGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          placeAssocGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthropology.placeAssocGroup.name',
                  defaultMessage: 'Associated person/organization',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            placeAssocName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeAssocName.fullName',
                    defaultMessage: 'Associated person/organization name',
                  },
                  name: {
                    id: 'field.places_anthropology.placeAssocName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/ulan,organization/local,organization/ulan',
                  },
                },
              },
            },
            placeAssociation: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeAssociation.fullName',
                    defaultMessage: 'Associated person/organization association',
                  },
                  name: {
                    id: 'field.places_anthropology.placeAssociation.name',
                    defaultMessage: 'Association',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'placeassociation',
                  },
                },
              },
            },
            placeAssocDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCT_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeAssocDateGroup.fullName',
                    defaultMessage: 'Associated person/organization date',
                  },
                  name: {
                    id: 'field.places_anthropology.placeAssocDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            placeAssocNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.placeAssocNote.fullName',
                    defaultMessage: 'Associated person/organization note',
                  },
                  name: {
                    id: 'field.places_anthropology.placeAssocNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        anthropologyPlaceOwnerGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          anthropologyPlaceOwnerGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthropology.anthropologyPlaceOwnerGroup.name',
                  defaultMessage: 'Ownership',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            anthropologyPlaceOwner: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_anthropology.anthropologyPlaceOwner.name',
                    defaultMessage: 'Owner',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local',
                  },
                },
              },
            },
            anthropologyPlaceOwnershipStartDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCT_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipStartDateGroup.fullName',
                    defaultMessage: 'Owner start date',
                  },
                  name: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipStartDateGroup.name',
                    defaultMessage: 'Start date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            anthropologyPlaceOwnershipEndDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCT_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipEndDateGroup.fullName',
                    defaultMessage: 'Owner end date',
                  },
                  name: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipEndDateGroup.name',
                    defaultMessage: 'End date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            anthropologyPlaceOwnershipNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipNote.fullName',
                    defaultMessage: 'Owner note',
                  },
                  name: {
                    id: 'field.places_anthropology.anthropologyPlaceOwnershipNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        township: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_anthropology.township.name',
                defaultMessage: 'Township',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        range: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_anthropology.range.name',
                defaultMessage: 'Range',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        section: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_anthropology.section.name',
                defaultMessage: 'Section',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
      'ns2:places_pahma': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/place/local/pahma',
          },
        },
        verbatimQuarterSection: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_pahma.verbatimQuarterSection.name',
                defaultMessage: 'Verbatim quarter section',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
      'ns2:places_anthro': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/place/domain/anthro',
          },
        },
        assertionGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          assertionGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            assertionName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_anthro.assertionName.name',
                    defaultMessage: 'Assertion name',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'anthroassertionnames',
                  },
                },
              },
            },
            assertionDescription: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_anthro.assertionDescription.name',
                    defaultMessage: 'Assertion description',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            assertionSourceGroupList: {
              [config]: {
                view: {
                  type: CompoundInput,
                },
              },
              assertionSourceGroup: {
                [config]: {
                  messages: defineMessages({
                    name: {
                      id: 'field.places_anthro.assertionSourceGroup.name',
                      defaultMessage: 'Assertion source',
                    },
                  }),
                  repeating: true,
                  view: {
                    type: CompoundInput,
                    props: {
                      tabular: true,
                    },
                  },
                },
                assertionSourceBy: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.places_anthro.assertionSourceBy.name',
                        defaultMessage: 'By',
                      },
                      fullName: {
                        id: 'field.places_anthro.assertionSourceBy.fullName',
                        defaultMessage: 'Assertion by',
                      },
                    }),
                    view: {
                      type: AutocompleteInput,
                      props: {
                        source: 'person/local,person/shared,person/ulan,organization/local,organization/shared,organization/ulan',
                      },
                    },
                  },
                },
                assertionSourceDate: {
                  [config]: {
                    messages: defineMessages({
                      fullName: {
                        id: 'field.places_anthro.assertionSourceDate.fullName',
                        defaultMessage: 'Assertion source date',
                      },
                      name: {
                        id: 'field.places_anthro.assertionSourceDate.name',
                        defaultMessage: 'Date',
                      },
                    }),
                    view: {
                      type: DateInput,
                    },
                  },
                },
                assertionSourceNote: {
                  [config]: {
                    messages: defineMessages({
                      fullName: {
                        id: 'field.places_anthro.assertionSourceNote.fullName',
                        defaultMessage: 'Assertion source note',
                      },
                      name: {
                        id: 'field.places_anthro.assertionSourceNote.name',
                        defaultMessage: 'Note',
                      },
                    }),
                    view: {
                      type: TextInput,
                    },
                  },
                },
              },
            },
            assertionRelatedRecords: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_anthro.assertionRelatedRecords.name',
                    defaultMessage: 'Museum records',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            assertionReferenceGroupList: {
              [config]: {
                view: {
                  type: CompoundInput,
                },
              },
              assertionReferenceGroup: {
                [config]: {
                  messages: defineMessages({
                    name: {
                      id: 'field.places_anthro.assertionReferenceGroup.name',
                      defaultMessage: 'References',
                    },
                  }),
                  repeating: true,
                  view: {
                    type: CompoundInput,
                    props: {
                      tabular: true,
                    },
                  },
                },
                assertionReference: {
                  [config]: {
                    messages: defineMessages({
                      fullName: {
                        id: 'field.places_anthro.assertionReference.fullName',
                        defaultMessage: 'Assertion reference name',
                      },
                      name: {
                        id: 'field.places_anthro.assertionReference.name',
                        defaultMessage: 'Name',
                      },
                    }),
                    view: {
                      type: AutocompleteInput,
                      props: {
                        source: 'citation/local,citation/worldcat',
                      },
                    },
                  },
                },
                assertionReferenceNote: {
                  [config]: {
                    messages: defineMessages({
                      fullName: {
                        id: 'field.places_anthro.assertionReferenceNote.fullName',
                        defaultMessage: 'Assertion refence note',
                      },
                      name: {
                        id: 'field.places_anthro.assertionReferenceNote.name',
                        defaultMessage: 'Note',
                      },
                    }),
                    view: {
                      type: TextInput,
                    },
                  },
                },
              },
            },
          },
        },
        basicInfoList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          basicInfo: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthro.basicInfo.name',
                  defaultMessage: 'Basic information',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        nagpraHistoryList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          nagpraHistory: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthro.nagpraHistory.name',
                  defaultMessage: 'NAGPRA inventory history',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        backgroundSummaryList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          backgroundSummary: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthro.backgroundSummary.name',
                  defaultMessage: 'Background and records summary',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        landOwnershipInfoList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          landOwnershipInfo: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthro.landOwnershipInfo.name',
                  defaultMessage: 'Land ownership information',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        museumRecordsList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          museumRecords: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthro.museumRecordsList.name',
                  defaultMessage: 'Museum records',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        manuscriptGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          manuscriptGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthro.manuscriptGroup.name',
                  defaultMessage: 'Unpublished manuscripts',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            manuscriptReferences: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_anthro.manuscriptReferences.name',
                    defaultMessage: 'Reference',
                  },
                  fullName: {
                    id: 'field.places_anthro.manuscriptReferences.fullName',
                    defaultMessage: 'Unpublished manuscript reference',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,',
                  },
                },
              },
            },
            manuscriptNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthro.manuscriptNote.fullName',
                    defaultMessage: 'Unpublished manuscript note',
                  },
                  name: {
                    id: 'field.places_anthro.manuscriptNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        reportRefGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          reportRefGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_anthro.reportRefGroup.name',
                  defaultMessage: 'Published reports',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            reportReferences: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_anthro.reportReferences.name',
                    defaultMessage: 'Reference',
                  },
                  fullName: {
                    id: 'field.places_anthro.reportReferences.fullName',
                    defaultMessage: 'Report reference',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local',
                  },
                },
              },
            },
            reportNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_anthro.reportNote.fullName',
                    defaultMessage: 'Published reports note',
                  },
                  name: {
                    id: 'field.places_anthro.reportNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
