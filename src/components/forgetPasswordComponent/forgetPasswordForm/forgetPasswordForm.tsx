import React from "react";
import "./forgetPasswordForm.sass";
import { Formik, FormikErrors, ErrorMessage, FormikProps, Field, Form, FormikActions } from "formik";

export interface ForgetPasswordFormProps {
    onSubmit(values: ForgetPasswordFormValues): void;
}

interface ForgetPasswordFormValues {
    email: string;
}

function validate(values: ForgetPasswordFormValues): FormikErrors<ForgetPasswordFormValues> {
    const errors: FormikErrors<ForgetPasswordFormValues> = {};
    if (!values.email) {
        errors.email = "Email can't be empty";
    }
    return errors;
}

function ForgetPasswordFormComponent({ isSubmitting }: FormikProps<ForgetPasswordFormValues>): JSX.Element {
    return (
        <Form className="forgetPasswordForm" id="forgetPasswordForm">
            <Field type="input" name="email" className="inputBox" placeholder="Email Address" />
            <ErrorMessage name="email" className="alert" component="div" />
            <button type="submit" disabled={isSubmitting} className="submitButton">
                Reset My Password
            </button>
        </Form>
    );
}

export default function ForgetPasswordForm({ onSubmit }: ForgetPasswordFormProps): JSX.Element {
    const initFormValues: ForgetPasswordFormValues = {
        email: "",
    };

    function submitForm(
        values: ForgetPasswordFormValues,
        { setSubmitting }: FormikActions<ForgetPasswordFormValues>,
    ): void {
        onSubmit(values);
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initFormValues}
            validate={validate}
            onSubmit={submitForm}
            render={ForgetPasswordFormComponent}
        />
    );
}
