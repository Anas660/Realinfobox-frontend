import { schema } from 'normalizr';

export const MailingListAddress = new schema.Entity(
  'mailingList',
  {},
  {
    idAttribute: 'email',
  },
);
export const MailingList = [MailingListAddress];

export const Campaign = new schema.Entity(
  'campaigns',
  {},
  {
    idAttribute: 'id',
  },
);
export const Campaigns = [Campaign];

export const City = new schema.Entity(
  'cities',
  {},
  {
    idAttribute: 'id',
  },
);
export const Cities = [City];

export const Product = new schema.Entity(
  'products',
  {},
  {
    idAttribute: 'id',
  },
);
export const Products = [Product];
