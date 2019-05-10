import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeModelo = this.onChangeModelo.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      model: '',
      brand: '',
      price:'',
      date:'',
      endDate:'',
      color:'',
      code:'',
    }
  }
  onChangeModelo(e) {
    this.setState({
      model: e.target.value
    });
  }
  onChangeBrand(e) {
    this.setState({
      brand: e.target.value
    })  
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onChangePhoto(e){
    this.setState({
      photo: e.target.value
    })
  }
 
  onChangeDate(e){
    this.setState({
      date: e.target.value
    })
  }

  onChangeEndDate(e){
    this.setState({
      endDate: e.target.value
    })
  }
  
  onChangeColor(e){
    this.setState({
      color: e.target.value
    })
  }
  
  onChangeCode(e){
    this.setState({
      code: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      model: this.state.model,
      brand: this.state.brand,
      price: this.state.price,
      photo: this.state.photo,
      date: this.state.date,
      endDate: this.state.endDate,
      color: this.state.color,
      code: this.state.code
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      model: '',
      brand: '',
      price: '',
      photo: '',
      date: '',
      endDate: '',
      color: '',
      code: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Phone</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Model:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.model}
                      onChange={this.onChangeModelo}
                      />
                </div>
                <div className="form-group">
                    <label>Brand: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.brand}
                      onChange={this.onChangeBrand}
                      />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.price}
                      onChange={this.onChangePrice}
                      />
                </div>
                <div className="form-group">
                    <label>Photo URL: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.photo}
                      onChange={this.onChangePhoto}
                      />
                </div>
                <div className="form-group">
                    <label>Start Date: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.date}
                      onChange={this.onChangeDate}
                      />
                </div>
                <div className="form-group">
                    <label>End Date: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.endDate}
                      onChange={this.onChangeEndDate}
                      />
                </div>
                <div className="form-group">
                    <label>Color: </label>
                    <select 
                      className="form-control"
                      value={this.state.color}
                      onChange={this.onChangeColor}
                      >
                      <option value="">Choose..</option>
                      <option value="Black">Black</option>
                      <option value="White">White</option>
                      <option value="Gold">Gold</option>
                      <option value="Pink">Pink</option>
                      </select>
                </div>
                <div className="form-group">
                    <label>Code: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.code}
                      onChange={this.onChangeCode}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Phone" className="btn btn-primary"/>
                    { /* onclick no input acima, mostrar mensagem de entrada criada com sucesso */ }
                </div>
            </form>
        </div>
    )
  }
}