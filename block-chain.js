function blockChain(data, prev = {index: 0, hash: '0'}) {
  const block = {
    index: prev.index + 1,
    data: data,
    prev: prev,
  }
  block.hash = hashCode(`${block.index}${prev.hash}${JSON.stringify(data)}`) 
  block.chain = (ldata) => blockChain(ldata, block)
  return block
}