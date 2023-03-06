import axios from 'axios'
import { Form, Formik, FormikHelpers } from 'formik'

import { AuthService } from 'src/api'
import { Button, FormikField } from 'src/components'
import { registerSchema } from 'src/scheme'

import {
  RegisterText,
  Title,
  TogglePage,
  Wrapper,
  WrapperAuth,
  WrapToggle,
} from '../styled'

interface InitialValuesTypes {
  name: string
  email: string
  password: string
}

const initialValues: InitialValuesTypes = {
  name: '',
  email: '',
  password: '',
}

export const Register = () => {
  const onSubmit = async (
    values: InitialValuesTypes,
    formikHelpers: FormikHelpers<InitialValuesTypes>,
  ) => {
    try {
      await AuthService.register(values)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) {
          formikHelpers.setFieldError('email', 'This email already exist')
        }
      }
    }
  }

  return (
    <Wrapper>
      <WrapperAuth>
        <Title>Register</Title>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={registerSchema}>
          {(formik) => {
            return (
              <Form>
                <FormikField
                  value={formik.values.name}
                  label="Name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
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
          <TogglePage href={'auth/login'}>Sign in</TogglePage>
        </WrapToggle>
      </WrapperAuth>
    </Wrapper>
  )
}
