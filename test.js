const Vue = require('vue')
const VueSetProps = require('vue-set-props').default

test('VueSetProps', () => {
  const MyComponent = Vue.component('MyComponent', {
    props: {
      a: String
    },
    mixins: [{
      props: {
        b: String
      }
    }]
  })
  Vue.use(VueSetProps, {
    MyComponent: {
      a: 'local prop',
      b: 'mixins prop'
    }
  })
  function testProps(name) {
    return MyComponent.options.props[name].default
  }

  expect(testProps('a')).toBe('local prop')
  expect(testProps('b')).toBe('mixins prop')
})
