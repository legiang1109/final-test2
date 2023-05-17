export default {
  get() {
    return JSON.parse(localStorage.getItem("TODOS")) || [];
  },
  set(item) {
    return localStorage.setItem("TODOS", JSON.stringify(item));
  },
};
