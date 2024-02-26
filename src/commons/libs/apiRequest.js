import axios from 'axios';

export default function apiRequest(url, method = 'GET', data, headers) {
  // /member/join -> http://localhost:3001/api/v1/member/join
  // https://주소/api/....
  if (!/^http[s]?:/i.test(url)) {
    url = process.env.REACT_APP_API_URL + url;
    console.log(url);
  }

  // GET -> ?키=값&키=값
  method = method.toUpperCase();
  if (method === 'GET' && data) {
    const params = new URLSearchParams(data);
    url += '?' + params.toString();
    data = null;
  }
  // 검증 실패시 400
  return axios({
    method,
    url,
    data,
    headers,
    validityState: (state) => state < 500,
  });
}
