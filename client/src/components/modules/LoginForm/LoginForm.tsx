import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import { Snackbar } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

import { auth } from '../../../config/firebaseConfig'
import { CustomTextField } from '../../elements/index'
import { ThemeContext } from '../../../providers/AppProvider'
import { Logo, FormContainer } from '../../../styles/constantStyles'
import * as Styled from './LoginForm.styled'

interface FormSubmitData {
  email: string
  password: string
  displayName: string
}

type errorResponse = { error: string }

export const LoginForm: React.FC = () => {
  const [showResendEmail, setShowResendEmail] = useState<boolean>(false)

  const router = useRouter()

  const { themeMode } = useContext(ThemeContext)

  //  create a user and send a verification email
  const handleSubmit = async (
    data: FormSubmitData
  ): Promise<errorResponse | null> => {
    let response = null

    await auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        if (!auth.currentUser?.emailVerified) {
          response = {
            error: 'You must verify your email before signing in!',
          }
          setShowResendEmail(true)

          auth.currentUser?.sendEmailVerification().catch((error: any) => {
            console.log(error)
          })

          console.log('signing user out')
          auth.signOut()
        }
      })
      .catch((error) => {
        response = { error: error.message }
      })

    return response
  }

  return (
    <>
      <Styled.Divider></Styled.Divider>
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
            setSubmitting(false)
          } else {
            router.push('/play')
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormContainer>
              <Logo
                src={`/images/thumbnail-${themeMode}.png`}
                width={373.4}
                height={106.912}
              />
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
                  color="default"
                  style={{
                    fontSize: '25px',
                    textTransform: 'none',
                    fontFamily: 'Gothic Bold',
                    borderRadius: '15px',
                  }}
                >
                  LOGIN
              </Styled.LoginButton>
              </div>
              <Snackbar
                open={showResendEmail}
                onClose={() => setShowResendEmail(false)}
                autoHideDuration={6000}
              >
                <Alert severity="warning">
                  <AlertTitle>You must verify your email!</AlertTitle>
                  <strong>Resending a verification email</strong>
                </Alert>
              </Snackbar>
            </FormContainer>
          </Form>
        )}
      </Formik>
      <Styled.BackButton
        onClick={
          (e) => {
            e.preventDefault()
            router.push("/")
          }}
      >Back</Styled.BackButton>
    </>
  )
}
