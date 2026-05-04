import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';

// Create a local server to receive data from
const server = createServer(async (req, res) => {
  const guest = req.url
  res.setHeader('Content-type', 'application/json')
  let file = null
  try {
    file = await readFile(`./guests/${guest}.json`, 'utf8')
  } catch (err) {
    if (err.code === 'ENDENT') {
      res.statusCode = 400
      res.end(JSON.stringify({
        error: 'guest not found'
      }))
    } else {
      res.statusCode = 500
      res.end(JSON.stringify({
        error: 'server failed'
      }))
    }
  }
  
  res.statusCode = 200
  
  res.end(file)
});

server.listen(5000, () => {
  console.log("listening on port 5000")
});
