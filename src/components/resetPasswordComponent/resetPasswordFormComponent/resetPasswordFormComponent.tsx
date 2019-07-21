import React from "react";
import "./resetPasswordFormComponent.sass";
import { Formik, FormikErrors, ErrorMessage, FormikProps, Field, Form, FormikActions } from "formik";

// interface ResetPasswordFormComponentProps {}

export interface ResetPasswordFormComponentProps {
    onSubmit(password: string): void;
}

interface ResetPasswordFormValues {
    newPassword: string;
    confirmationPassword: string;
}

function validate(values: ResetPasswordFormValues): FormikErrors<ResetPasswordFormValues> {
    const errors: FormikErrors<ResetPasswordFormValues> = {};
    if (!values.confirmationPassword) {
        errors.confirmationPassword = "Please re-enter your password";
    }
    if (!values.newPassword) {
        errors.newPassword = "New password is required.";
    }
    if (values.newPassword && values.confirmationPassword && values.newPassword !== values.confirmationPassword) {
        errors.newPassword = "Password do not match";
    }
    return errors;
}

function ResetPasswordFormComponent({ isSubmitting }: FormikProps<ResetPasswordFormValues>): JSX.Element {
    return (
        <Form className="resetPasswordForm" id="resetPasswordForm">
            <Field type="password" name="newPassword" className="inputBox" placeholder="New Password" />
            <ErrorMessage name="newPassword" className="alert" component="div" />
            <Field
                type="password"
                name="confirmationPassword"
                className="inputBox"
                placeholder="Confirm New Password"
            />
            <ErrorMessage name="confirmationPassword" className="alert" component="div" />
            <button type="submit" disabled={isSubmitting} className="submitButton">
                Change Password
            </button>
        </Form>
    );
}

export default function ForgetPasswordForm({ onSubmit }: ResetPasswordFormComponentProps): JSX.Element {
    const initFormValues: ResetPasswordFormValues = {
        newPassword: "",
        confirmationPassword: "",
    };

    function submitForm(
        values: ResetPasswordFormValues,
        { setSubmitting }: FormikActions<ResetPasswordFormValues>,
    ): void {
        onSubmit(values.newPassword);
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initFormValues}
            validate={validate}
            onSubmit={submitForm}
            render={ResetPasswordFormComponent}
        />
    );
}
