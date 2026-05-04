import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';

// Create a local server to receive data from
const server = createServer(async (req, res) => {
  const guest = req.url
  try {
    const file = await readFile(`./guests/${guest}.json`, 'utf8')
    res.setHeader('Content-type', 'application/json')
    res.statusCode = 200
    res.end(file)
  } catch (err) {
    res.setHeader('Content-type', 'application/json')
    res.statusCode = 400
    res.end(JSON.stringify({
      error: 'guest not found'
    }))
  }
});

server.listen(5000, () => {
  console.log("listening on port 5000")
});
