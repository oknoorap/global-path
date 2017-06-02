const path = require('path')

module.exports = (alias = '', pathname = '', prefix = '__') => {
  if (alias === '') {
    throw new Error('Alias should be registered.')
  }

  if (pathname === '') {
    throw new Error('Path name should be registered.')
  }

  const realPath = pathname
    .replace(/\/$/, '')
    .split('/')
    .map(item => item.replace(/@/, path.dirname(module.parent.filename)))

  const aliasName = prefix + alias
  const aliasPath = path.join(...realPath)

  global[aliasName] = {
    path: aliasPath,
    require: dstPath => require(path.resolve(aliasPath, dstPath))
  }
}
