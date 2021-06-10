import { useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'

import { auth } from '../../../config/firebaseConfig'
import { CustomTextField } from '../../elements/index'
import { FormContainer } from '../../../styles/constantStyles'
import * as Styled from './RegisterForm.styled'

interface FormSubmitData {
  email: string
  password: string
  displayName: string
}

type errorResponse = { error: string }

export const RegisterForm: React.FC = () => {
  const [showSucessMessage, setShowSuccessMessage] = useState<boolean>(false)

  const router = useRouter()

  //  create a user and send a verification email
  const handleSubmit = async (
    data: FormSubmitData
  ): Promise<errorResponse | null> => {
    let response = null

    await auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        user?.updateProfile({
          displayName: data.displayName,
        })

        user
          ?.sendEmailVerification()
          .then(() => {
            setShowSuccessMessage(true)
          })
          .catch((error: any) => {
            return { error: error }
          })
      })
      .catch((error) => {
        response = { error: error.message }
      })

    return response
  }

  return (
    <>
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
          setSubmitting(false)
          if (res?.error) {
            setFieldError('email', res.error)
          } else {
            router.push('/play')
          }
        }}
        validate={(values) => {
          const errors: Record<string, string> = {}

          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          if (!re.test(values.email)) {
            errors.email = 'Invalid email formatting'
          }

          if (values.displayName.length < 4) {
            errors.displayName = 'Usernames must be at least 4 characters long'
          }

          if (values.password.length < 8) {
            errors.password = 'Passwords must be at least 8 characters long'
          }

          return errors
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormContainer>
              <CustomTextField placeholder="Email" name="email" type="input" />
              <CustomTextField
                placeholder="Display Name"
                name="displayName"
                type="input"
              />
              <CustomTextField
                placeholder="Password"
                name="password"
                type="password"
                isPassword={true}
              />
              <div>
                <Styled.RegisterButton
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  REGISTER
                </Styled.RegisterButton>
              </div>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </>
  )
}
