// const MITHRIL_REDUX_BINDING_DID_INIT = "MITHRIL_REDUX_BINDING_DID_INIT"

// const didInit = _ => ({
//   type: MITHRIL_REDUX_BINDING_DID_INIT
// })

// export const Provider = {
//   init: (store, m, root, Component) => {
//     const render = _ => {
//       m.render(root, m(Component))
//     }
//     store.subscribe(render)
//     Provider.store = store
//     store.dispatch(didInit())
//   }
// }

// export const connect = (mapAttrs, mapState) => Component => {
//   const wrap = func => {
//     return vnode => {
//       if (Provider.store) {
//         vnode = {
//           ...vnode,
//           attrs: {
//             ...vnode.attrs,
//             ...mapAttrs(Provider.store.getState())
//           },
//           state: {
//             ...vnode.state,
//             ...mapState(Provider.store.dispatch)
//           }
//         }
//         return func(vnode)
//       } else {
//         return func(vnode)
//       }
//     }
//   }
//   const Wrapped = {
//     ...Component,
//     view: wrap(Component.view),
//     oncreate: Component.oncreate ? wrap(Component.oncreate) : undefined 
//   }
//   return Wrapped;
// }
import connect from "./connect/connect"
import Provider from "./Provider/Provider"

export default {
  connect,
  Provider
}
