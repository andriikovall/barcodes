export const baseUrl = 'http://localhost:8000';

export const get = async <T>(path: string): Promise<T> => {
  const response = await fetch(`${baseUrl}/${path}`);
  const data = await response.json();
  return data;
};
