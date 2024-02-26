import apiRequest from '../../commons/libs/apiRequest';

export const apiJoin = (formData) =>
  apiRequest('/member', 'POST', formData)
    .then((res) => {
      const data = res.data;
      console.log(data);
    })
    .catch((err) => console.error(err));
