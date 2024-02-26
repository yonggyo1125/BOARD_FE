import apiRequest from '../../commons/libs/apiRequest';

export const apiLogin = (formData) =>
  new Promise((resolve, reject) => {
    apiRequest('/member/token', 'POST', formData)
      .then((res) => {
        if (res.data.success) {
          resolve(res.data.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => reject(err));
  });
