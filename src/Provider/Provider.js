const MITHRIL_REDUX_BINDING_DID_INIT = "MITHRIL_REDUX_BINDING_DID_INIT"

const didInit = _ => ({
  type: MITHRIL_REDUX_BINDING_DID_INIT
})

export default {
  init: (store, m, root, Component) => {
    const render = _ => {
      m.render(root, m(Component))
    }
    store.subscribe(render)
    Provider.store = store
    store.dispatch(didInit())
  }
}