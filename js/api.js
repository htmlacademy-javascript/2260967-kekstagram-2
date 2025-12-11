const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SENT_DATA: '/',
};

const Method = {
  GET: 'get',
  POST: 'post',
};

const ErrorText = {
  [Method.GET]: 'Не удалось получить данные, попробуйте еще раз',
  [Method.POST]: 'Не удалось отправить данные форы',
};
const load = async (route, method = Method.GET, body = null) => {
  const response = await fetch(`${BASE_URL}${route}`, { method, body });
  return response.ok ? await response.json() : Promise.reject(ErrorText[method]);
};
const getData = async () => await load(Route.GET_DATA);
const sendData = async (body) => await load(Route.SENT_DATA, Method.POST, body);

export {getData, sendData };
