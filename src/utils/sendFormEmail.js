import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TO_EMAIL = "shlokadroneaviationservicesllp@gmail.com";

export const sendFormEmail = (formType, fields) => {
	if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
		throw new Error("Email service is not configured.");
	}

	return emailjs.send(
		SERVICE_ID,
		TEMPLATE_ID,
		{
			to_email: TO_EMAIL,
			form_type: formType,
			...fields,
		},
		PUBLIC_KEY
	);
};

export const sendFormEmailWithAttachment = (form) => {
	if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
		throw new Error("Email service is not configured.");
	}

	return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
};

export const getEmailConfigStatus = () => ({
	hasServiceId: Boolean(SERVICE_ID),
	hasTemplateId: Boolean(TEMPLATE_ID),
	hasPublicKey: Boolean(PUBLIC_KEY),
});
