import { DirectiveBinding } from "vue"

export const lazyLoadDirective = {
  mounted(el: HTMLImageElement, binding: DirectiveBinding<string>) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.src = "placeholder.jpg"

            const img = new Image()
            img.src = binding.value
            img.onload = () => {
              el.src = binding.value
              el.classList.add("loaded")
              observer.disconnect()
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
  },
}
