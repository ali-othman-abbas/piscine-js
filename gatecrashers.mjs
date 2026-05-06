import * as fs from "fs/promises";
import * as http from "node:http";

const server = http.createServer(async (req, res) => {
  res.setHeader("content-type", "application/json");
  if (!req.headers.authorization) {
    res.statusCode = 401;
    res.end("Authorization Required%");
    return;
  }
  if (req.method !== "POST") {
    res.statusCode = 404;
    res.end(
      JSON.stringify(
        {
          error: "Bad request",
        },
        null,
        2,
      ) + "\n",
    );
    return;
  }
  const [user, pass] = Buffer.from(
    req.headers.authorization.split(" ")[1],
    "base64",
  )
    .toString("utf8")
    .split(":");

  if (
    pass !== "abracadabra" ||
    !["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"].includes(user)
  ) {
    res.statusCode = 401;
    res.end("Authorization Required%");
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
  const file = `./guests/${req.url.slice(1)}.json`;
  try {
    await fs.writeFile(file, formData);
    res.statusCode = 200;
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

server.listen(5000, () => console.log("listening on port 5000"));

function getFormData(req) {
  const data = [];
  return new Promise((res, rej) => {
    req.on("data", (chunk) => {
      data.push(chunk);
    });

    req.on("end", () => res(Buffer.concat(data).toString("utf8")));

    req.on("error", (err) => rej(err));
  });
}
