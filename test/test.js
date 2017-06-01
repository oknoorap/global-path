import path from 'path'
import test from 'ava'
import globalPath from '../index'

globalPath('world', '@/hello/world/')

test('path should be matched', t => {
  t.is(global._world.path, path.join(__dirname, 'hello', 'world'))
})

test('require should be succeed', t => {
  t.is(global._world.require('example')(), 'hello world')
})
