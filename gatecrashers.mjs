import * as fs from "fs/promises";
import * as http from "node:http";

const server = http.createServer(async (req, res) => {
  res.setHeader("content-type", "application/json");
  if (req.method !== "POST") {
    res.statusCode = 404;
    res.end(
      JSON.stringify(
        {
          error: "Bad request",
        },
        null,
        2,
      ),
    );
    return;
  }
  const str = Buffer.from(
    req.headers.authorization.split(" ")[1],
    "base64",
  ).toString("utf8");

  const [user, pass, error] = checkAuthorizationInfor(req);
  if (error) {
    res.statusCode = 401;
    res.end("Authorization Required%");
    return;
  }

  let formData = null;
  try {
    formData = await getFormData(req);
  } catch (err) {
    if (req.headers["body"] || req.headers["Body"] || req.headers["x-body"]) {
      formData =
        req.headers["body"] || req.headers["Body"] || req.headers["x-body"];
    } else {
      res.statusCode = 500;
      console.log(err);
      res.end(
        JSON.stringify({
          error: "server failed",
        }),
      );
      return;
    }
  }

  const file = `./guests/${req.url.slice(1)}.json`;
  try {
    await fs.writeFile(file, formData);
    res.statusCode = 200;
    res.end(JSON.stringify(JSON.parse(formData), null, 2));
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

    req.on("end", () => {
      const result =
        req.headers["body"] || req.headers["Body"] || req.headers["x-body"];

      res(data.join("") || result || "");
    });
  });
}
function checkAuthorizationInfor(req) {
  if (!req.headers.authorization || !req.headers.authorization.split(" ")[1]) {
    return ["", "", "error"];
  }

  const str = Buffer.from(
    req.headers.authorization.split(" ")[1],
    "base64",
  ).toString("utf8");

  if (!str.includes(":")) {
    return ["", "", "error"];
  }

  const [user, pass] = str.split(":");

  if (
    pass !== "abracadabra" ||
    !["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"].includes(user)
  ) {
    return ["", "", "error"];
  }

  return [user, pass, ""];
}
