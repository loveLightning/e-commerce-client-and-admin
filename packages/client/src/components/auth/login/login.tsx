import axios from 'axios'
import { Form, Formik, FormikHelpers } from 'formik'

import { AuthService } from 'src/api'
import { Button, FormikField } from 'src/components'
import { loginSchema } from 'src/scheme'

import {
  RegisterText,
  Title,
  TogglePage,
  Wrapper,
  WrapperAuth,
  WrapToggle,
} from '../styled'

interface InitialValuesTypes {
  email: string
  password: string
}

const initialValues: InitialValuesTypes = {
  email: '',
  password: '',
}

export const Login = () => {
  const onSubmit = async (
    values: InitialValuesTypes,
    formikHelpers: FormikHelpers<InitialValuesTypes>,
  ) => {
    try {
      await AuthService.login(values)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 404) {
          formikHelpers.setFieldError('email', 'Wrong address or password')
          formikHelpers.setFieldError('password', 'Wrong address or password')
        }
      }
    }
  }

  return (
    <Wrapper>
      <WrapperAuth>
        <Title>Login</Title>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={loginSchema}>
          {(formik) => {
            return (
              <Form>
                <FormikField
                  value={formik.values.email}
                  label="Email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormikField
                  value={formik.values.password}
                  label="Password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Button
                  disabled={!(formik.dirty && formik.isValid)}
                  style={{ width: '100%', marginTop: 30 }}>
                  Log in
                </Button>
              </Form>
            )
          }}
        </Formik>
        <WrapToggle>
          <RegisterText>Not registered yet?</RegisterText>
          <TogglePage href={'auth/register'}>Log in</TogglePage>
        </WrapToggle>
      </WrapperAuth>
    </Wrapper>
  )
}
