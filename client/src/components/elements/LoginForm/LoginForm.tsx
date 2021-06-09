import React from "react";
import {
    Formik,
    Field,
    Form,
    useField,
    FieldAttributes,
    FieldArray
} from "formik";
import {
    TextField,
    Button,
    Checkbox,
    Radio,
    FormControlLabel,
    Select,
    MenuItem
} from "@material-ui/core";

import * as Styled from './LoginForm.styled'

export const LoginForm: React.FC = () => {

    const handleSubmit = (data: any) => {

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
                setSubmitting(true);
                await handleSubmit(data)
                setSubmitting(false);
            }}
            validate={values => {
                const errors: Record<string, string> = {};

                if (values.email.includes("stanley")) {
                    errors.firstName = "no stanley";
                }

                return errors;
            }}
        >
            {({ values, errors, isSubmitting }) => (
                <Form>
                    <div>
                        <Button disabled={isSubmitting} type="submit">
                            submit
                        </Button>
                    </div>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    )
}