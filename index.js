
const regExp = /^[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?$/;

function isValidSubdomain(subdomain) {
    return regExp.test(subdomain);
}

module.exports = isValidSubdomain;
