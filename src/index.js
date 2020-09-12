import { isPlainObject, toRawType } from './util'

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

function setProps(opts) {
  if (process.env.NODE_ENV !== 'production') {
    if (!opts.library) {
      console.error('The library is required.')
      return
    }
  }

  const { setProps, library } = opts
  if (process.env.NODE_ENV !== 'production' && !isPlainObject(setProps)) {
    console.error(
      `The setProps expected an Object, but got ${toRawType(setProps)}.`
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
    console.error('The component library was not registered.')
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
        `The ${comp} component set props expected an Object, ` +
        `but got ${toRawType(props)}.`
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

function vueSetProps(Vue, opts) {
  if (isPlainObject(opts)) {
    setProps(opts)
  } else if (Array.isArray(opts)) {
    opts.forEach(opt => setProps(opt))
  } else if(process.env.NODE_ENV !== 'production') {
    console.error(
      `The options expected an Object or an Array, but got ${toRawType(opts)}.`
    )
  }
}

export default vueSetProps
