import * as Yup from 'yup'
import { withFormik } from 'formik'

import Form from './Form'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required')
})

const handleSubmit = ({ navigation }) => {
  navigation.navigate('FirstGameScreen')
}

export default withFormik({
  validationSchema,
  handleSubmit
})(Form)
