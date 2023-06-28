import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Cabinet_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    axios.post('http://127.0.0.1:8000/api/register/', data)
      .then(response => {
        alert("Регистрация прошла успешно");
        // Добавьте обработку успешного ответа здесь
      })
      .catch(error => {
        alert("Ошибка регистрации");
        // Добавьте обработку ошибки здесь
      });
  };

  render() {
    return (
<form className="form-2" onSubmit={this.handleSubmit}>
  <div className="form-row">
    <div className="form-group">
      <label className="label1">Имя:</label>
      <input type="text" className="form-input" name="username"  value={this.state.username} onChange={this.handleInputChange}  />
    </div>
    <div className="form-group">
      <label className="label2">Фамилия:</label>
      <input type="text" className="form-input" />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <label className="label3">Email:</label>
      <input type="email" className="form-input" name="email" onChange={this.handleInputChange} value={this.state.email}  />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <label className="label4">Пароль:</label>
      <input type="password" className="form-input" onChange={this.handleInputChange} name="password" value={this.state.password}  />
    </div>
    <div className="form-group">
      <label className="label5">Пдт.пароль:</label>
      <input type="password" className="form-input" />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <input type="checkbox" className="form-checkbox" />
      <label className="label6">Согласен с условиями</label>
    </div>
  </div>
  <div className="form-row-button">
    <Link to='/' type="submit" className="form-link" >На главную</Link>
    <button to='/' type="submit" className="form-button" >Отправить</button>
  </div>
</form>
    )
  }
}

export default Cabinet_page