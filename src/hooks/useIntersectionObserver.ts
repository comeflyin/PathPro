import { Ref, onUnmounted, ref, watch } from "vue"

const useIntersectionObserver = (NodeRef: Ref<HTMLElement | null>, loadMore: () => void) => {
  const hasMore = ref(true)
  let observer: IntersectionObserver

  watch(NodeRef, (newNodeRef, oldNodeRef) => {
    if (oldNodeRef) {
      observer.unobserve(oldNodeRef)
    }

    if (newNodeRef) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          loadMore()
        }
      })
      observer.observe(newNodeRef)
    }
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
