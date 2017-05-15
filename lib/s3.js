import Promise from 'bluebird';

export default {
  download: filename => {
    return Promise.resolve(filename);
  }
};
