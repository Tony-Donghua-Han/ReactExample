import React from "react";
import "./loginForm.sass";
import { Formik, FormikErrors, ErrorMessage, FormikProps, Field, Form, FormikActions } from "formik";

export interface LoginFormProps {
    onSubmit(values: LoginFormValues): void;
}

export interface LoginFormValues {
    email: string;
    password: string;
}

function validate(values: LoginFormValues): FormikErrors<LoginFormValues> {
    const errors: FormikErrors<LoginFormValues> = {};
    if (!values.email) {
        errors.email = "Email Required";
    }
    return errors;
}

function LoginFormComponent({ isSubmitting }: FormikProps<LoginFormValues>): JSX.Element {
    return (
        <Form className="loginForm">
            <Field type="email" name="email" className="inputBox" placeholder="Email" />
            <ErrorMessage name="email" className="alert" component="div" />
            <Field type="password" name="password" className="inputBox" placeholder="Password" />
            <ErrorMessage name="password" className="alert" component="div" />
            <button type="submit" disabled={isSubmitting} className="submitButton">
                Submit
            </button>
        </Form>
    );
}

export default function LoginForm({ onSubmit }: LoginFormProps): JSX.Element {
    const initFormValues: LoginFormValues = {
        email: "",
        password: "",
    };

    function submitForm(values: LoginFormValues, { setSubmitting }: FormikActions<LoginFormValues>): void {
        onSubmit(values);
        setSubmitting(false);
    }

    return (
        <Formik initialValues={initFormValues} validate={validate} onSubmit={submitForm} render={LoginFormComponent} />
    );
}
