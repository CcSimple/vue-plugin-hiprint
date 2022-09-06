// 按需引入 elementui组件
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import {  Button, Loading, ButtonGroup,Input,
    InputNumber,Card, Row,
    Col,  Select,Slider,Dialog,
    Option,Popover } from 'element-ui'
Vue.use(Button).use(Loading).use(ButtonGroup).use(InputNumber).use(Input)
    .use(Card).use(Row).use(Col).use(Select).use(Option).use(Slider).use(Popover).use(Dialog)
