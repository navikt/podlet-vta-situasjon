const chrono = {
  iDag: null,
};

export const setFastTidspunktForIDag = (iDag) => {
  chrono.iDag = iDag;
};

export const hentIDag = () => {
  return chrono.iDag || new Date();
};
