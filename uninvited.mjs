import http from "node:http";
import fs from "node:fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("content-type", "application/json");
  if (req.method !== "POST") {
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        error: "bad request",
      }),
    );
    return;
  }
  let formData = null;
  try {
    formData = await getFormData(req);
  } catch (err) {
    res.statusCode = 500;
    console.log(err);
    res.end(
      JSON.stringify({
        error: "server failed",
      }),
    );
    return;
  }
  const file = `./guests/${req.url}.json`;
  try {
    await fs.writeFile(file, formData);
    res.statusCode = 201;
    res.end(formData);
  } catch (err) {
    res.statusCode = 500;
    console.log(err);
    res.end(
      JSON.stringify({
        error: "server failed",
      }),
    );
    return;
  }
});

/**
 *
 * @param {http.IncomingMessage} req
 * @returns {Promise<string>}
 */
function getFormData(req) {
  const data = [];
  return new Promise((res, rej) => {
    req.on("data", (chunk) => {
      data.push(chunk);
    });

    req.on("end", () => res(data.join("")));

    req.on("error", (err) => rej(err));
  });
}

server.listen(5000, () => {
  console.log("listening on 5000");
});
