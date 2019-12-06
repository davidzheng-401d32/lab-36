const changer = payload => {
  return {
    type: 'CHANGE',
    payload: payload,
  };
};

export default changer;