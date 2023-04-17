import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import  Home from '../pages/home/Home'
import PokeApi from '../pages/pokeapi/PokeApi'
import ToDo from '../pages/todolist/Todo'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout >
    <Routes>
    <Route path='/' element= {<Home />}/>
    <Route path='/todolist' element=  {<ToDo /> }/>
    <Route path='/pokeapi' element= {<PokeApi />} />


    </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router