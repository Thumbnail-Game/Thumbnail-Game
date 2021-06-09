import React from 'react'
import { useField, FieldAttributes } from 'formik'

import * as Styled from './CustomTextField.styled'

type CustomTextFieldProps = {
  placeholder: string
  isPassword?: boolean
} & FieldAttributes<{}>

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
  placeholder,
  isPassword,
  ...props
}) => {
  const [field, meta] = useField<{}>(props)
  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <Styled.CustomTextField
      type={isPassword ? 'password' : ''}
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      autoComplete="true"
    />
  )
}
