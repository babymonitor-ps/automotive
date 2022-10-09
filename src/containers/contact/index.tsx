import * as React from 'react';
import { Formik, FormikProps, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {
	ContactWrapper,
	ContactPageTitle,
	ContactFromWrapper,
	InputGroup,
} from './style';
import addToMailchimp from "gatsby-plugin-mailchimp";
interface MyFormValues {
	firstName: string;
	email: string;
	message: string;
}

const SignupSchema = Yup.object().shape({
	firstName: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	message: Yup.string().required('Required'),
});

const Contact: React.SFC<{}> = () => {
	return (
		<Formik
			initialValues={{ firstName: '', email: '', message: '' }}
			onSubmit={(values: MyFormValues, actions: FormikHelpers<any>) => {
				addToMailchimp(values.email, {NAME: values.firstName, MESSAGE: values.message}).then((data: { result: string; }) => {
					actions.setSubmitting(false);
					if (data.result === "error") {
						alert("Your query is already received, if you want another query then mail us at help@vehicle24x7.com");
					} else {
						alert("Your query received successfully. :)");
						actions.resetForm({values: ''})
					}
				})
			}}
			validationSchema={SignupSchema}
			render={({
				handleChange,
				values,
				errors,
				handleBlur,
				touched,
				isSubmitting,
			}: FormikProps<MyFormValues>) => (
				<>
					<Form>
						<ContactWrapper>
							<ContactPageTitle>
								<h2>Contact</h2>
								<p>
									Manage fuel, accident record, mileage calculator and find petrol pumps nearby.
								</p>
							</ContactPageTitle>
							<ContactFromWrapper>
								<InputGroup>
									<Input
										type='text'
										name='firstName'
										value={`${values.firstName}`}
										onChange={handleChange}
										onBlur={handleBlur}
										label='Name'
										notification={`${
											errors.firstName && touched.firstName
												? errors.firstName
												: ''
										}`}
									/>
									<Input
										type='email'
										name='email'
										value={`${values.email}`}
										onChange={handleChange}
										onBlur={handleBlur}
										label='Email'
										notification={`${
											errors.email && touched.email ? errors.email : ''
										}`}
									/>
								</InputGroup>
								<Input
									type='textarea'
									name='message'
									value={`${values.message}`}
									onChange={handleChange}
									onBlur={handleBlur}
									label='Message'
									notification={
										errors.message && touched.message ? errors.message : ''
									}
								/>
								<Button
									title='Submit'
									type='submit'
									isLoading={isSubmitting}
									loader='Submitting..'
								/>
							</ContactFromWrapper>
						</ContactWrapper>
					</Form>
				</>
			)}
		/>
	);
};

export default Contact;
