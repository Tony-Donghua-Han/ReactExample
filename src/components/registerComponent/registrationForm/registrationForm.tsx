import React from "react";
import "./registrationForm.sass";
import { Formik, FormikErrors, ErrorMessage, FormikProps, Field, Form, FormikActions } from "formik";

interface RegistrationFormProps {
    onSubmit(values: LoginFormValues): void;
}

interface LoginFormValues {
    fullName: string;
    email: string;
    password: string;
}

function validate(values: LoginFormValues): FormikErrors<LoginFormValues> {
    const errors: FormikErrors<LoginFormValues> = {};
    if (!values.email) {
        errors.email = "Email Required";
    }
    if (!values.fullName) {
        errors.fullName = "Full Name is Required";
    }
    if (!values.password) {
        errors.password = "Password is Required";
    }
    return errors;
}

function LoginFormComponent({ isSubmitting }: FormikProps<LoginFormValues>): JSX.Element {
    return (
        <Form className="loginForm">
            <Field type="text" name="fullName" className="inputBox" placeHolder="Full Name" />
            <ErrorMessage name="fullName" className="alert" component="div" />
            <Field type="email" name="email" className="inputBox" placeHolder="Email" />
            <ErrorMessage name="email" className="alert" component="div" />
            <Field type="password" name="password" className="inputBox" placeHolder="Password" />
            <ErrorMessage name="password" className="alert" component="div" />
            <button type="submit" disabled={isSubmitting} className="submitButton">
                Join Now
            </button>
        </Form>
    );
}

export default function RegistrationForm({ onSubmit }: RegistrationFormProps): JSX.Element {
    const initFormValues: LoginFormValues = {
        fullName: "",
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
