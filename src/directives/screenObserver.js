const options = {
  rootMargin: '-350px',
};
const screenObserver = new IntersectionObserver((entries, screenObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('loaded');
      screenObserver.unobserve(entry.target);
      console.log('entered');
    }
  });
}, options);

export default {
  bind(el, binding) {
    //let classes = binding.value.split(',');
    el.classList.add(binding.value);
    screenObserver.observe(el);
  },
};
