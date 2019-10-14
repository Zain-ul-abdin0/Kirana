import {createAppContainer, createSwitchNavigator,} from 'react-navigation'
import Settings from '../screens/Settings'
import { Order } from '../screens/Order'
import Address from '../screens/Address'
import CartBack from '../components/CartBack'
import Cart from '../screens/Cart'
import Shop from '../screens/Shop'
import ChooseAddress from '../screens/ChooseAddress'
import Faq from '../screens/Faq'
import Main from '../screens/Main'
import Notifications from '../screens/Notifications'
import Paymnet from '../screens/Paymnet'
import PaymentMethod from '../screens/PaymentMethod'
import OrderSeller from '../screens/OrderSeller'
import Carter from '../screens/Cater'
  
 
const Stack = createSwitchNavigator({
    OrderSeller:OrderSeller,

    Carter:Carter,

    Faq:Faq,

    Order:Order,

    Notifications:Notifications,

    Paymnet:Paymnet,

    Address:Address, 

    Cart:Cart,

    Shop:Shop,

    ChooseAddress:ChooseAddress,    
        Main:Main,
    Settings:Settings,
    PaymentMethod:PaymentMethod,
  
  




}) 

export default createAppContainer(Stack)