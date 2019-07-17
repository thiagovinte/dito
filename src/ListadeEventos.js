import React from 'react';
import service from './services/service';
import Evento from './Evento';
import Swal from 'sweetalert2'

export default class Eventist extends React.Component {
  state = {
    evtGroup: []
  }

  //funcao para comparar as datas
  comp(a, b) {
    var dateA = new Date(a.timestamp).getTime();
    var dateB = new Date(b.timestamp).getTime();
    return dateA > dateB ? 1 : -1;
  }

  componentDidMount() {

    //chama o servico que vai buscar os valores
    service.getAll()
      .then(res => {
        const eventos = res.data.events;
        //ordena eventos
        eventos.sort(this.comp);
        var evtGroup = [];
        //agropa por transacao
        eventos.forEach(element => {
          let id = element.custom_data.find(x => x.key === 'transaction_id').value;
          let loja = element.custom_data.find(y => y.key === 'store_name');
          if (element.event === 'comprou') {
            evtGroup.push({
              transactionId: id,
              timestamp: element.timestamp,
              revenue: element.revenue,
              local: loja.value,
              compras: []
            });
          } else {
            evtGroup.find(x => x.transactionId === id).compras.push(element.custom_data)
          }
        });
        this.setState({ evtGroup });
      }).catch(e => {
        //em caso de não conseguir acessar api, chama um alerta de erro
        Swal.fire({
          title: 'Error!',
          text: 'Não foi possível acessar API',
          type: 'error',
          confirmButtonText: 'OK'
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.evtGroup.map(evento => <Evento key={evento.transactionId} dados={evento}></Evento>)}
      </div>
    )
  }
}
