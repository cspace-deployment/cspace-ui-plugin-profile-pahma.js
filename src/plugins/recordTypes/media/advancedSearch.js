export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_EQ,
        path: 'ns2:media_common/creator',
      },
      {
        op: OP_RANGE,
        path: 'ns2:media_common/dateGroupList/dateGroup',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:media_common/identificationNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:media_common/languageList/language',
      },
      {
        op: OP_EQ,
        path: 'ns2:media_common/publisher',
      },
      {
        op: OP_EQ,
        path: 'ns2:media_common/rightsHolder',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:media_common/source',
      },
      {
        op: OP_EQ,
        path: 'ns2:media_common/subjectList/subject',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:media_common/title',
      },
      {
        op: OP_EQ,
        path: 'ns2:media_common/typeList/type',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionspace_core/createdAt',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
