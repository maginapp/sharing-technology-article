export function nextTick(
  this: any | void,
  fn?: () => void
): Promise<void> {
  const p = Promise.resolve()
  return fn ? p.then(this ? fn.bind(this) : fn) : p
}