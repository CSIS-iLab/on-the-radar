import Header from './header'
import HeaderSearch from './header-search'
import Navigation from './header-nav'
import TippyHome from './home-tippy'
import Definitions from './home-definitions'
import objectFitImages from 'object-fit-images'

window.addEventListener('DOMContentLoaded', () => {
  Header()
  HeaderSearch()
  TippyHome()
  Navigation()
  objectFitImages()
})
