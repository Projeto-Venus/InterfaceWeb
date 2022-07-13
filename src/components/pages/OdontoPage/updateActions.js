export default function updateActions(state, payload) {
    return {
      ...state,
      yourDetail: {
        ...state.yourDetail,
        ...payload,
      },
    };
  }