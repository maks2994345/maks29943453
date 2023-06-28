import React, { Component } from 'react'


export class Home_page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectValue1: '',
      selectValue2: '',
      dateValue: '',
      matchingItems: [],
      showMatchingItems: false,
      showPopup: false
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { selectValue1, selectValue2, dateValue } = this.state;
    const items = [
      { id: 4, select1: 'option3', select2: 'option2', date: '2023-07-03', name: 'Есть 567 рейс Цена билета 420р' },
    ];
    const filteredItems = items.filter((item) => {
      return (
        item.select1 === selectValue1 &&
        item.select2 === selectValue2 &&
        item.date === dateValue
      );
    });

    this.setState({
      matchingItems: filteredItems,
      showMatchingItems: true,
      isSubmitted: true,
    });
  };

  togglePopup = () => {
    this.setState(prevState => ({
      showPopup: !prevState.showPopup
    }));
  }


  render() {

    const { showPopup, selectValue1, selectValue2, dateValue, matchingItems, showMatchingItems, isSubmitted } = this.state;
    return (
      <main>
        <div className='main-div'>
          <div className='Content'> 
            <p className='Content-text'>Заметьте, что наш сервис специализируется только по трем конечным пунктам. При покупке билета онлайн, вы будете обязаны предоставить документ, подтверждающий вашу личность(паспорт).</p>
            <div className='FormContainer'>
              <p className='p-abus'>Купить Билеты на Автобус</p>
              <form className="horizontal-form" onSubmit={this.handleSubmit}>
              <select select name="selectValue1" value={selectValue1} onChange={this.handleInputChange}>
              <option value="option1">Енисейск</option>
              <option value="option2">Лесосибирск</option>
              <option value="option3">Красноярск</option>
              </select>
              <select select name="selectValue2" value={selectValue2} onChange={this.handleInputChange}>
              <option value="option1">Лесосибирск</option>
              <option value="option2">Енисейск</option>
              <option value="option3">Красноярск</option>
              </select>
              <input type="date" name="dateValue" value={dateValue} onChange={this.handleInputChange}></input>
              <button type="submit">Отправить</button>
              </form>
          
            </div>
      </div>
      {isSubmitted && (
          <div className='Resus'>
            {showMatchingItems && matchingItems.length > 0 ? (
              <div>
                <h3>Рейсы</h3>
                <ul>
                  {matchingItems.map((item) => (
                    <li key={item.id}>{item.name} <button className='Button_bel' onClick={this.togglePopup}> Купить Билет </button> {showPopup && <Popup closePopup={this.togglePopup} />} </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Билеты не найдены Выберите другую Дату</p>
            )}
          </div>
        )}
          <h2 className='Auto'>Автовокзалы</h2>
          <h2 className='Auto2'>Енисейск - Лесосибирск - Красноярск  </h2>
        </div>
        <div className='main-div2'>
          <p>Оплата проездных документов в кассах Красноярского междугороднего автовокзала в безналичном варианте производится картой платежной системы МИР. </p>
          <h2> ВАЖНАЯ ИНФОРМАЦИЯ </h2>
          <p>Реализация билетов и посадка пассажиров на рейсы выполняемые в международном сообщении осуществляется только по документам удостоверяющим личность (ПАСПОРТ ГРАЖДАНИНА РФ).</p>
          <p className='p-1'>Согласно положения Банка России 24.12.2004 N 266-П возврат денежных средств, за билеты приобретенные по банковской карте, переводятся строго на ту банковскую карту, с которой производилась оплата.</p>
        </div>
        <div class="sidebar"> 
        <p>Мы в ВКонтакте</p>
        <img src="./img/1.png"></img>
        <p>Общая справочная</p>
        <h4>89504288959</h4>
        <h4>Красноярск - Енисейск - Лесосибирск</h4>
        </div>
      </main>
    )
  }
}

class Popup extends Component {
  render() {
    return (
      alert("Билет был отправлен вам на почту")
    );
  }
}

export default Home_page