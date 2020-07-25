export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
  }

  getColumn(i) {
    return this.rows.map(row => row[i])
  }

  get rows() {
    return this.matrix.split(/\n/).map(row => row.split(' ').map(Number))
  }

  get columns() {
    const getColumn = colIndex => this.rows.map(row => row[colIndex])

    return this.rows[0].map((_, i) => getColumn(i))
  }
}
