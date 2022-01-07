export type ContainerType<T extends HTMLElement = HTMLElement> = T | (() => T);

function getContainer(container?: ContainerType) {
  return typeof container === 'function' ? container() : container;
}

export default getContainer;
