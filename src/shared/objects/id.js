const nonceLen = 60;

function createId() {
  return {
    date: Date.now().toFixed(),
    nonce: Array(nonceLen / 10).fill(0).map(() => Math.random().toString(36).slice(-10)).join('')
  };
}

function cleanId(id) {
  id.date = id.date ? id.date.slice(0, 15) : id.date;
  id.nonce = id.nonce ? id.nonce.slice(0, nonceLen) : id.nonce;
  return {date : id.date, nonce: id.nonce};
}

export default createId;
export {createId, cleanId};