const path = require('path')

module.exports = (alias = '', pathname = '', prefix = '__') => {
  if (alias === '') {
    throw new Error('Alias should be registered.')
  }

  if (pathname === '') {
    throw new Error('Path name should be registered.')
  }

  const aliasName = prefix + alias
  const aliasPath = pathname
    .replace(/\/$/, '')
    .replace(/@/, path.dirname(module.parent.filename))

  global[aliasName] = {
    path: aliasPath,
    require: dstPath => require(path.resolve(aliasPath, dstPath))
  }
}
