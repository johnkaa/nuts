import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, min, confirmed, numeric } from 'vee-validate/dist/rules'

// Add the required rule
extend('required', {
  ...required,
  // message: 'This field is required'
  message: 'Это поле обязательное',
})

extend('email', {
  validate: (value) => {
    const re =
      /^(([a-zA-Z\-0-9]+\.)|([a-zA-Z\-0-9]+))+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(value)
  },

  message: 'Введите корректный эмейл',
  // message: 'This field must be a valid email',
})

extend('numeric', {
  ...numeric,
  message: 'Введите корректный номер телефона',
})

extend('min', {
  ...min,
  // message: 'This field must be a valid email',
  message: 'Должно быть больше 6-ти символов',
})

extend('confirmed', {
  ...confirmed,
  // message: 'This field must be a valid email',
  message: 'Пароли не совпадают',
})

extend('true', {
  validate: (value) => !!value,
  // message: 'This field must be a valid email',
  message: 'Обязательное поле',
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
