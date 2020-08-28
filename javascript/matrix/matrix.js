export class Matrix {
  #matrix

  constructor(matrix) {
    this.#matrix = matrix.split(/\n/).map(row => row.split(' ').map(Number))
  }

  get rows() {
    return this.#matrix
  }

  get columns() {
    const getColumn = colIndex => this.#matrix.map(row => row[colIndex])

    return this.#matrix[0].map((_, i) => getColumn(i))
  }
}
