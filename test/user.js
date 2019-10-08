import knex from '../knex';

const baseAttrs = {
  balanceInCents: 0, // create a balance transaction to change
  name: 'LizLemon', // need sequences for unique?
  password: 'password123',
};

const traitAttrs = {
  withEmail: {
    email: 'lizlemon@ge.biz',
  },
};

const userLego = (...options) => {
  let attrs = {};

  const firstOpt = options[0];

  if (typeof firstOpt === 'undefined') {
    attrs = baseAttrs;
  } else if (typeof firstOpt === 'object' && firstOpt.constructor === Object) {
    attrs = { ...baseAttrs, ...firstOpt };
  } else if (typeof firstOpt === 'string' || firstOpt instanceof String) {
    const overrides = options[1] || {};
    attrs = { ...baseAttrs, ...traitAttrs[firstOpt], ...overrides };
  }

  return knex('users').insert(attrs).returning('*').then(users => users[0]);
};

export default userLego;
