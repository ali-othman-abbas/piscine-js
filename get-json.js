/**
 *
 * @param {string} path
 * @param {Record<string, string>} options
 */
async function getJson(path, options) {
  const params = new URLSearchParams(options);
  const url = `${path}?${params.toString()}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const obj = await res.json()
    if (obj.error) {
      throw new Error(obj.error)
    }
    return obj.data
  } catch (err) {
    throw err
  }
}
