import Provider from "../Provider/Provider"

export default (mapAttrs, mapState) => Component => {
  const wrap = func => {
    return vnode => {
      if (Provider.store) {
        vnode = {
          ...vnode,
          attrs: {
            ...vnode.attrs,
            ...mapAttrs(Provider.store.getState())
          },
          state: {
            ...vnode.state,
            ...mapState(Provider.store.dispatch)
          }
        }
        return func(vnode)
      } else {
        return func(vnode)
      }
    }
  }
  const Wrapped = {
    ...Component,
    view: wrap(Component.view),
    oncreate: Component.oncreate ? wrap(Component.oncreate) : undefined 
  }
  return Wrapped;
}