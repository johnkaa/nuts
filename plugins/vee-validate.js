import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, min, confirmed } from 'vee-validate/dist/rules'

// Add the required rule
extend('required', {
  ...required,
  // message: 'This field is required'
  message: 'Это поле обязательное'
})

// Add the email rule
extend('email', {
  ...email,
  // message: 'This field must be a valid email',
  message: 'Введите корректный e-mail',
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
  validate: value => !!value,
  // message: 'This field must be a valid email',
  message: 'Обязательное поле',
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)