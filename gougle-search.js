
// let getJSON = async (url) => url;

/**
 *
 * @param {string} serverName
 * @param {string} q
 */
async function queryServers(serverName, q) {
  const params = new URLSearchParams({
    q: q,
  });
  const url1 = `/${serverName}?${params}`;
  const url2 = `/${serverName}_backup${params}`;
  try {
    return Promise.race([getJSON(url1), getJSON(url2)]);
  } catch (err) {
    console.log(err);
  }
}

/**
 *
 * @param {string} q
 */
async function gougleSearch(q) {
  try {
    const arr = await Promise.race([
      Promise.all([
        queryServers("web", q),
        queryServers("image", q),
        queryServers("video", q),
      ]),
      new Promise((_, rej) => setTimeout(rej, 80, new Error("timeout"))),
    ]);
    return {
      web: arr[0],
      image: arr[1],
      video: arr[2],
    }
  } catch (err) {
    return err
  }
}
