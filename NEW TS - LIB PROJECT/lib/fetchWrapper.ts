import { DEBUG } from './config';
import { getErrorMessage } from './function';

/**
 * Ответ запроса проверяем на возможные ошибки
 * ищем ошибки в заголовках
 * ищем ошибки в ответе json
 */
async function handleResponse(response: Response) {
  const text = await response.text();
  const json = text && JSON.parse(text);

  if (!response.ok) {
    if ([401, 403].includes(response.status)) {
      // accountService.logout();
    }
    throw json?.message || response.statusText;
  }
  //TODO Уточнить какое поле содержит описание ошибки
  if (json?.success === 0) throw json?.message || json?.error || 'Неизвестная ошибка';

  return json;
}

async function get(url: string) {
  const requestOptions = {
    method: 'GET',
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

// Запрос PATCH сделан специально для локального сервера
// LIST нестандартный метод, его нельзя выбрать в "Mockoon"
async function list(url: string) {
  const requestOptions = {
    method: DEBUG ? 'PATCH' : 'LIST',
  };
  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

async function post(url: string, body: object) {
  const controller = new AbortController();
  try {
    const res = await fetch(url, {
      method: 'POST',
      signal: controller.signal,
      body: typeof body === 'object' ? JSON.stringify(body) : undefined,
      headers: {
        'Content-type': 'application/json',
        // ...headers,
      },
    });
    return await handleResponse(res);
  } catch (error) {
    return { message: getErrorMessage(error) };
  } finally {
    controller.abort();
  }
}

async function put(url: string, body: object) {
  const controller = new AbortController();
  try {
    const res = await fetch(url, {
      method: 'PUT',
      signal: controller.signal,
      body: typeof body === 'object' ? JSON.stringify(body) : undefined,
      headers: {
        'Content-type': 'application/json',
        // ...headers,
      },
    });
    return await handleResponse(res);
  } catch (error) {
    return { message: getErrorMessage(error) };
  } finally {
    controller.abort();
  }
}

async function _delete(url: string) {
  const controller = new AbortController();
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      signal: controller.signal,
    });
    return await handleResponse(res);
  } catch (error) {
    return { message: getErrorMessage(error) };
  } finally {
    controller.abort();
  }
}

export const fetchWrapper = {
  get,
  list,
  post,
  put,
  delete: _delete,
};
