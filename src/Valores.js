import React from 'react';

export default class Valores extends React.Component {

  getProdutoName(array) {
    return array.find(x => x.key === "product_name").value
  }

  getProdutoValue(array) {
    return array.find(x => x.key === "product_price").value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-8"><span className="d-sm-none"><b>Produto: </b></span>{this.getProdutoName(this.props.valores)}</div>
        <div className="col-sm-4"><span className="d-sm-none"><b>Preço: </b></span>{this.getProdutoValue(this.props.valores)}</div>
      </div>
    )
  }
}
