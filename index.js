const path = require('path')

module.exports = (alias = '', pathname = '') => {
  if (alias === '') {
    throw new Error('Alias should be registered.')
  }

  if (pathname === '') {
    throw new Error('Path name should be registered.')
  }

  const args = pathname
    .replace(/@/, path.dirname(module.parent.filename))
    .split('/')

  const aliasName = '_' + alias
  const aliasPath = path.resolve(...args)

  global[aliasName] = {
    path: aliasPath,
    require: dstPath => require(path.resolve(aliasPath, dstPath))
  }
}
