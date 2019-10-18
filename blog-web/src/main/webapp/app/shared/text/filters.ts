import Vue from 'vue';

export function initFilters() {
  Vue.filter('truncate', function(text, length, clamp) {
    clamp = clamp || '...';
    const node = document.createElement('div');
    node.innerHTML = text;
    const content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
  });
}
