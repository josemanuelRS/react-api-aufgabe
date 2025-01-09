import React, { useState } from 'react';

export const ContactComponent = () => {

	// useState hook to manage form data
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
		privacy: false
	});

	 // useState hook to manage response message
	const [responseMessage, setResponseMessage] = useState('');

	// Function to handle input changes
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value
		});
	};

	// Function to handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		if(!formData.privacy){
			setResponseMessage('You must accept the privacy policy');
			return;
		}

		// Sending form data to the server
		const response = await fetch('/api/example-form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: formData.name,
				email: formData.email,
				message: formData.message
			})
		});
		
		// Handling server respons
		const result = await response.json();
		if(response){
			setResponseMessage('Message received successfully!');
		} else {
			setResponseMessage('Error, no response obtained');
		}
	};

	return (
		<div className="contact" id="contact">
			<p className="secondaryText">Contact us</p>
			<p>Do you have any questions?</p>

			<form onSubmit={handleSubmit}>
				<input type="text" name="name" className="contactInput" placeholder="Name" 
				value={formData.name} onChange={handleChange} /> 
				<input type="text" name="email" className="contactInput" placeholder="email"
				value={formData.email} onChange={handleChange} /> 
				<input type="text" name="message" className="contactInput" style={{height: "50px"}} placeholder="Please ask your questions here"
				value={formData.message} onChange={handleChange} /><br/>
				<div className="privacy">
					<input type="checkbox" name="privacy" id="privacy" style={{outline: "1px solid blue"}} value={formData.privacy} onChange={handleChange}/>
					<label htmlFor="privacy">I have read and accept the privacy policy.</label><br/>
				</div>
				<button type="submit">Send</button>
			</form>
			<pre>{responseMessage}</pre>
		</div>

	)

	
}