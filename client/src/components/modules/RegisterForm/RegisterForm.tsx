import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import LazyLoad from 'react-lazyload';

import { auth } from '../../../config/firebaseConfig'
import {
  useCreateUserMutation,
  useGetDisplayNamesQuery,
} from '../../../generated/graphql'
import { ThemeContext } from '../../../providers/AppProvider'
import {
  Logo,
  FormContainer,
  BackButton,
  PreviewImage,
  FormWrapper,
  Divider,
} from '../../../styles/constantStyles'
import { CustomTextField } from '../../elements/index'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import * as Styled from './RegisterForm.styled'

interface FormSubmitData {
  email: string
  password: string
  displayName: string
}

type errorResponse = { error: string }

export const RegisterForm: React.FC = () => {
  const router = useRouter()

  const { themeMode } = useContext(ThemeContext)

  const [displayNames] = useGetDisplayNamesQuery()
  const displayNamesData = displayNames && displayNames.data

  //  this must invalidate the display names query
  const [, createUser] = useCreateUserMutation()

  //  create a user and send a verification email
  const createAccount = async (
    data: FormSubmitData
  ): Promise<errorResponse | null> => {
    let response = null

    if (displayNamesData) {
      const matchingNames = displayNamesData.users?.filter(
        (user) => user.displayName === data.displayName
      )
      if (matchingNames && matchingNames.length > 0) {
        return (response = { error: 'The display name already exists.' })
      }
    }

    await auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user

        user?.updateProfile({
          displayName: data.displayName,
        })

        user?.sendEmailVerification().catch((error: any) => {
          return { error: error }
        })

        //  create user in database
        if (user?.uid) {
          createUser({
            options: {
              uid: user.uid,
              displayName: data.displayName,
              email: data.email,
              photoURL: user.photoURL,
            },
          })
        }
      })
      .catch((error) => {
        response = { error: error.message }
      })

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

            const res: errorResponse | null = await createAccount(data)

            //  if there is an error such as email already exists, display it
            setSubmitting(false)

            if (res?.error) return setFieldError('email', res.error)

            router.push('/play')
          }}
          validate={(values) => {
            const errors: Record<string, string> = {}

            const re =
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            if (!re.test(values.email)) {
              errors.email = 'Invalid email formatting'
            }

            if (values.displayName.length < 4) {
              errors.displayName =
                'Usernames must be at least 4 characters long'
            } else if (values.displayName.length > 36) {
              errors.displayName =
                'Usernames must be at most 36 characters long'
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
                <Logo
                  src={`/images/thumbnail-${themeMode}.png`}
                  alt={'logo-img'}
                  width={280.05}
                  height={80.19}
                />
                <CustomTextField
                  placeholder="Email"
                  name="email"
                  type="input"
                />
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
                    Sign Up
                  </Styled.RegisterButton>
                </div>
              </FormContainer>
            </Form>
          )}
        </Formik>
        <BackButton
          size={5}
          onClick={(e) => {
            e.preventDefault()
            router.push('/')
          }}
        >
          Back
        </BackButton>
      </FormWrapper>
    </>
  )
}
