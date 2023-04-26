const kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())
const snakerize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "_" : "") + $.toLowerCase())
const camelcalize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => ofs == 0 ? $.toLowerCase() : $)

module.exports = {kebabize, snakerize, camelcalize}