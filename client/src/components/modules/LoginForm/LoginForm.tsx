import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import { Snackbar } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import LazyLoad from 'react-lazyload'

import { auth } from '../../../config/firebaseConfig'
import { CustomTextField } from '../../elements/index'
import { ThemeContext } from '../../../providers/AppProvider'
import {
  Logo,
  FormContainer,
  BackButton,
  PreviewImage,
  FormWrapper,
  Divider,
} from '../../../styles/constantStyles'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
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

    try {
      await auth.signInWithEmailAndPassword(data.email, data.password)
    } catch (error: any) {
      response = { error: error.message }
    }

    return response
  }

  const hideImage = useMediaQuery('(max-width: 950px)')

  return (
    <>
      <Divider />
      <FormWrapper id="formContainer">
        {!hideImage && (
          <LazyLoad>
            <PreviewImage
              src={`/images/thumbnailPreviewLaptop.png`}
              alt={'logo-img'}
              width={896}
              height={800}
            />
          </LazyLoad>
        )}
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
                  alt={'logo-img'}
                  width={373.4}
                  height={106.912}
                />
                <CustomTextField
                  placeholder="Email"
                  name="email"
                  type="input"
                />
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
                      color: 'white',
                      backgroundColor: 'red',
                    }}
                  >
                    LOGIN
                  </Styled.LoginButton>
                </div>
                <Styled.Redirect onClick={() => router.push('/register')}>
                  Don't have an account? Sign up here
                </Styled.Redirect>
                {/* <Snackbar
                  open={showResendEmail}
                  onClose={() => setShowResendEmail(false)}
                  autoHideDuration={6000}
                >
                  <Alert severity="warning">
                    <AlertTitle>You must verify your email!</AlertTitle>
                    <strong>Resending a verification email</strong>
                  </Alert>
                </Snackbar> */}
              </FormContainer>
            </Form>
          )}
        </Formik>
        <BackButton
          size={40}
          onClick={(e) => {
            e.preventDefault()
            router.push('/play')
          }}
        >
          Back
        </BackButton>
      </FormWrapper>
    </>
  )
}
