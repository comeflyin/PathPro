import { Ref, onMounted, onUnmounted, ref, watch } from "vue"

const useIntersectionObserver = (NodeRef: Ref<HTMLElement | null>, loadMore: () => void) => {
  const hasMore = ref(true)
  let observer: IntersectionObserver

  onMounted(() => {
    observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        loadMore()
      }
    })
    observer.observe(NodeRef.value!)
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  watch(hasMore, (value) => {
    value ? observer.observe(NodeRef.value!) : observer.disconnect()
  })

  return {
    hasMore,
    setHasMore: (value: boolean) => {
      hasMore.value = value
    },
  }
}

export default useIntersectionObserver
