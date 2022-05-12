Object.assign(Array.prototype, {
  remove(index) {
    return this.splice(index, 1)?.[0];
  }
}); 
