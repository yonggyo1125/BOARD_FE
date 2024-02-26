import apiRequest from '../../commons/libs/apiRequest';

export const apiJoin = (formData) =>
  new Promise((resolve, reject) => {
    apiRequest('/member', 'POST', formData)
      .then((res) => {
        if (res.data.success) {
          resolve(res.data.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => reject(err));
  });
