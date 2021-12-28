module.exports = class Table {
  constructor() {
    this.data = {}
    this.sequence = 0
  }

  insert(attributes) {
    this.sequence += 1
    attributes.id = this.sequence
    this.data[this.sequence] = attributes
    return attributes
  }

  findBy(property, value) {
    return Object.values(this.data)
      .find(record => record[property] === value)
  }

  findAll(ids) {
    if (ids) return ids.map(id => this.data[id])
    return Object.values(this.data)
  }

  find(id) {
    return this.data[id]
  }

  findByIdAndUpdate(id, thing = {}) {
    let prevObj = this.find(id)
    this.data[id] = { ...prevObj, ...thing }

    return prevObj
  }

  delete(id) {
    delete this.data[id]
  }
}
