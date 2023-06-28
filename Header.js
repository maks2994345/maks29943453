import React from 'react'
import { Link } from 'react-router-dom';



export default function Header() {
  return (
 <header>
  <div class="left-element"> <Link to='/'>Главная</Link></div>
  <div class="centered-elements">
    <div class="element"> <Link to='/About'>Полезная информация</Link></div>
    <div class="element"><Link to='/News'>Новости</Link></div>
    <div class="element"><Link to='/Information'>Обратная связь</Link></div>
  </div>
  <div class="right-element"><Link to='/Cabinet'>Личный Кабинет</Link></div>
 </header>
  )
}
