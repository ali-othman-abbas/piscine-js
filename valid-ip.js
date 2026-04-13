function findIP(str) {
  const ip = /(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}/
  const port = /:(?:6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|[1-5]\d{4}|[1-9]\d{0,3})/
  const ipWithPort = new RegExp(`(?<!\\d)${ip.source}${port.source}(?!\\d)`)
  // const ipWithPort = /(?<!\d)(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}(?!\d):(?:6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|[1-5]\d{4}|[1-9]\d{0,3})(?!\d)/
  const ipWithoutPort = new RegExp(`(?<!\\d)${ip.source}(?!\\d|:\\d+)`)
  // const ipWithoutPort = /(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}(?!\d|:\d+)/
  // const port = /:(?:6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|[1-5]\d{4}|[1-9]\d{1,3})(?!\d)/
  const combined = new RegExp(`(?:${ipWithPort.source})|(?:${ipWithoutPort.source})`, 'g')
  const result = str.match(combined) ?? []
  return result
}
//(?<=\\s|^)

//?(?=\\s|$)


