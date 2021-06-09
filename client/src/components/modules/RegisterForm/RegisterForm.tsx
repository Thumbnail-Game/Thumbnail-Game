import { Formik, Form } from 'formik'
import { Button } from '@material-ui/core'

import { CustomTextField } from '../../elements/index'
import { FormContainer } from '../../../styles/constantStyles'
import * as Styled from './RegisterForm.styled'

export const RegisterForm: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log('handle Submit reached')
  }

  return (
    <Formik
      validateOnChange={true}
      initialValues={{
        email: '',
        username: '',
        password: '',
      }}
      onSubmit={async (data, { setSubmitting }) => {
        setSubmitting(true)
        await handleSubmit(data)
        setSubmitting(false)
      }}
      validate={(values) => {
        const errors: Record<string, string> = {}

        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!re.test(values.email)) {
          console.log('invalid formiatting')
          errors.email = 'Invalid email formatting'
        }

        if (values.username.length >= 4) {
          errors.username = 'Usernames must be at least 4 characters long'
        }

        if (values.password.length >= 8) {
          errors.password = 'Passwords must be at least 8 characters long'
        }

        return errors
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <FormContainer>
            <CustomTextField placeholder="Email" name="email" type="input" />
            <CustomTextField
              placeholder="Username"
              name="username"
              type="input"
            />
            <CustomTextField
              placeholder="Password"
              name="password"
              type="password"
              isPassword={true}
            />
            <div>
              <Button disabled={isSubmitting} type="submit">
                LOGIN
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </FormContainer>
        </Form>
      )}
    </Formik>
  )
}
