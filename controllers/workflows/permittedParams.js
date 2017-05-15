import _ from 'lodash';

export default {
  create: params => {
    return _.pick(params, [
      'filename'
    ]);
  }
};
