const removeAccents = string =>
  string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const createLink = string =>
  removeAccents(string).replace(/\s/g, '-').toLowerCase();

export default createLink;
