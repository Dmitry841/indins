import { TDirective } from "@/directives/types";

export default <TDirective>{
  mounted(element, binding) {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        binding.value();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
  },
  name: "intersection",
};
