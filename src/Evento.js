import React from 'react';
import moment from 'moment';
import './assets/css/dito-font.css';
import { ReactComponent as CheckIcon } from './assets/check.svg';
import Valores from './Valores';

export default class Event extends React.Component {


  formataData(data) {
    var date = new Date(data)
    return moment(date).format('DD/MM/YYYY')
  }

  formataHora(data) {
    var date = new Date(data)
    return moment(date).format('HH:mm')
  }

  render() {
    return (
      <div>
        <div className="timeline">
          <div className="row no-gutters justify-content-end  timeline-nodes">
            <div className="col-10 col-md-10 order-2 order-md-1 timeline-content">
              <h3 className="">
                <span className="d-block d-sm-inline d-md-inline">
                  <i className="icon-calendar"></i>
                  <label>{this.formataData(this.props.dados.timestamp)}</label>
                </span>
                <span className="d-block d-sm-inline d-md-inline">
                  <i className="icon-clock"></i>
                  <label>{this.formataHora(this.props.dados.timestamp)}</label>
                </span>
                <span className="d-block d-sm-inline d-md-inline">
                  <i className="icon-place"></i>
                  <label>{this.props.dados.local}</label>
                </span>
                <span className="d-block d-sm-block d-md-inline">
                  <i className="icon-money"></i>
                  <label>{this.props.dados.revenue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</label>
                </span>
              </h3>
              <div className="container precos">
                <div className="row rowheader">
                  <div className="col-sm-8  d-none d-sm-block">Produto</div>
                  <div className="col-sm-4  d-none d-sm-block">Preço</div>
                </div>
                {this.props.dados.compras.map((compra, index) => <Valores valores={compra} key={index}></Valores>)}

              </div>

            </div>
            <div className="col-2 col-sm-1 px-md-3 order-1 timeline-image text-md-center">
              <CheckIcon width="40px" height="40px" className="svg"></CheckIcon>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
