import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'

import { auth } from '../../../config/firebaseConfig'
import { CustomTextField } from '../../elements/index'
import { FormContainer } from '../../../styles/constantStyles'
import * as Styled from './LoginForm.styled'

interface FormSubmitData {
  email: string
  password: string
  displayName: string
}

type errorResponse = { error: string }

export const LoginForm: React.FC = () => {
  const router = useRouter()

  //  create a user and send a verification email
  const handleSubmit = async (
    data: FormSubmitData
  ): Promise<errorResponse | null> => {
    let response = null

    await auth
      .signInWithEmailAndPassword(data.email, data.password)
      .catch((error) => {
        response = { error: error.message }
      })

    return response
  }

  return (
    <Formik
      validateOnChange={true}
      initialValues={{
        email: '',
        displayName: '',
        password: '',
      }}
      onSubmit={async (data, { setSubmitting, setFieldError }) => {
        setSubmitting(true)

        const res: errorResponse | null = await handleSubmit(data)

        //  if there is an error such as email already exists, display it
        if (res?.error) {
          setFieldError('password', res.error)
        } else {
          router.push('/play')
        }

        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormContainer>
            <CustomTextField placeholder="Email" name="email" type="input" />
            <CustomTextField
              placeholder="Password"
              name="password"
              type="password"
              isPassword={true}
            />
            <div>
              <Styled.LoginButton
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                color="secondary"
              >
                LOGIN
              </Styled.LoginButton>
            </div>
          </FormContainer>
        </Form>
      )}
    </Formik>
  )
}
