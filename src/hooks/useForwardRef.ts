import { ComponentPublicInstance, getCurrentInstance } from "vue"

/**
 * 实现类似 React 的 forwardRef
 * 利用 getCurrentInstance 获取当前组件实例，然后将 ref 挂载到实例上
 */
export const useForwardRef = () => {
  // 获取当前组件实例 ! 非空运算符 确保不为空
  const instance = getCurrentInstance()!
  const forwardRef = (ref: Element | ComponentPublicInstance | null) => {
    instance.exposed = ref
    instance.exposeProxy = ref
  }
  return forwardRef
}
