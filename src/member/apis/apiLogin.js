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

// 로그인 회원 정보 조회
export const apiMemberInfo = () =>
  new Promise((resolve, reject) => {
    apiRequest('/member')
      .then((res) => console.log(res))
      .catch((err) => reject(err));
  });
