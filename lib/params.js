import _ from 'lodash';

export default class Params {
  static permit(params, permitted) {
    return _.pick(params, permitted);
  }
}
