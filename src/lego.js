// Base function for DB creation

const baseAttrs = {
  name: 'Benny',
  idealsHeOncePursued: null,
  location: 'Alphabet City'
};

const traitAttrs = {
  someTrait: {
    col: 'val'
  }
};

const lego = (knex, tableName, baseAttrs, traitAttrs) => {
  /**
   * Create a new lego
   *
   * @param {Knex} knex A knex instance
   * @param {String} tableName Name of the table to insert records
   * @param {Object} baseAttrs
   * @param {Object} traitAttrs
   *
   * @return {Function} A function that accepts between 1 and 3 args and inserts row
   */
  return (...options) => {
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

    return knex(tableName).insert(attrs).returning('*').then(rows => rows[0]);
  }
};

export default lego;
