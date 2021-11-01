const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36)

function blockChain(data,prev = { index: 0, hash: '0' }) {
  let index = prev.index + 1
  let hash = (hashCode(index.toString()+prev.hash.toString()+JSON.stringify(data)))
  let result = {
    data : data,
    prev : prev,
    hash : hash,
    index : index,
    chain : (newData) => blockChain(newData,{index : index, hash : hash, prev : prev,data : data}),
  }
  result.chain = (data) => blockChain(data, result)
  return result
}




