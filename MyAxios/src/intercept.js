class Intercept {
  constructor() {
    this.queue = []
  }
  use(resolveHandle, rejectHandle) {
    this.queue.push({
      resolveHandle,
      rejectHandle
    })
  }
}