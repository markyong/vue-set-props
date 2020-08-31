import { isPlainObject, toRawType } from './util'

const VueSetProps = {}
let hasProp = false

function findPropInMixins(mixins, prop, propValue) {
  if (mixins) {
    for (let i = 0, len = mixins.length; i < len; i++) {
      if (hasProp) break
      setProp(mixins[i], prop, propValue)
    }
  }
}

function setProp(component, prop, propValue) {
  const { props, mixins } = component
  if (props && props[prop]) {
    // find in props
    props[prop].default = propValue
    hasProp = true
  } else {
    // find in mixins
    findPropInMixins(mixins, prop, propValue)
  }
}

VueSetProps.install = function (Vue, opts) {
  if (process.env.NODE_ENV !== 'production') {
    if (!isPlainObject(opts)) {
      console.error(
        `The options expected Object, got ${toRawType(opts)}.`
      )
      return
    }
    if (!opts.library) {
      console.error('The library is required.')
      return
    }
  }

  const { setProps, library } = opts
  if (process.env.NODE_ENV !== 'production' && !isPlainObject(setProps)) {
    console.error(
      `The setProps expected Object, got ${toRawType(setProps)}.`
    )
    return
  }
  const keys = Object.keys(setProps)
  // Validate the component library has been registered because we need Vue to
  // merge options. We know Vue.extend() has been called in Vue.component(),
  // so we can use extendOptions._Ctor to validate here.
  if (
    process.env.NODE_ENV !== 'production' &&
    library[keys[0]] &&
    !library[keys[0]]._Ctor
  ) {
    console.error('The library component was not registered.')
    return
  }
  keys.forEach(comp => {
    if (process.env.NODE_ENV !== 'production' && !library[comp]) {
      console.error(`Can not find component "${comp}" in the library.`)
      return
    }
    const props = setProps[comp]
    if (process.env.NODE_ENV !== 'production' && !isPlainObject(props)) {
      console.error(
        `${comp} component set props expected Object, got ${toRawType(props)}.`
      )
      return
    }
    const propsKey = Object.keys(props)

    propsKey.forEach(prop => {
      setProp(library[comp], prop, setProps[comp][prop])
      if (process.env.NODE_ENV !== 'production' && !hasProp) {
        console.error(`Can not find prop "${prop}" in the ${comp} component.`)
      }
      hasProp = false
    })
  })
}

export default VueSetProps
