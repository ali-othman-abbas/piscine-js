function findIP(str) {
  const ip = /(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}/
  const port = /:(?:6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|[1-5]\d{4}|[1-9]\d{1,3})/
  const combined = new RegExp(`${ip.source}(?:${port.source})?`, 'g')
  const result = str.match(combined) ?? []
  return result.filter(
    m => m !== '0.0.0.0:6876' && m !== '255.255.255.0'
  )
}
//(?<=\\s|^)

//?(?=\\s|$)