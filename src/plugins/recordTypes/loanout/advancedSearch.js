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
        op: OP_CONTAIN,
        path: 'ns2:loansout_common/loanOutNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:loansout_common/loanPurpose',
      },
      {
        op: OP_EQ,
        path: 'ns2:loansout_common/lendersAuthorizer',
      },
      {
        op: OP_EQ,
        path: 'ns2:loansout_common/lendersContact',
      },
      {
        op: OP_EQ,
        path: 'ns2:loansout_common/borrower',
      },
      {
        op: OP_EQ,
        path: 'ns2:loansout_common/borrowersContact',
      },
      {
        op: OP_EQ,
        path: 'ns2:loansout_common/borrowersAuthorizer',
      },
      {
        op: OP_EQ,
        path: 'ns2:loansout_common/loanStatusGroupList/loanStatusGroup/loanStatus',
      },
      {
        op: OP_RANGE,
        path: 'ns2:loansout_common/loanRenewalApplicationDate',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
