const LoadingBtn = (el, loading) => {
  if (loading.value) {
    el.innerText = ' loading';
    el.setAttribute('disabled', 'true');
    var spn = document.createElement('SPAN');
    spn.setAttribute('class', 'spinner-border spinner-border-sm');
    spn.setAttribute('role', 'status');
    spn.setAttribute('aria-hidden', 'true');
    el.appendChild(spn);
  } else {
    el.innerText = loading.arg;
    el.removeAttribute('disabled');
  }
};

export default {
  bind(el, binding) {
    LoadingBtn(el, binding);
  },
  update(el, binding) {
    LoadingBtn(el, binding);
  },
};
