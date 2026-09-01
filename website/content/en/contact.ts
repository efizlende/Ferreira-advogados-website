// src/content/en/contact.ts
export const contact = {
  title: "We will defend your rights.",
  description:
    "Contact us to schedule a consultation or get more information about our services.",
  form: {
    title: "Schedule Your Consultation",
    subtitle: "Fill in the details below and we will contact you to confirm your scheduling.",
    fields: {
      name: "Name *",
      namePlaceholder: "Your name",
      email: "Email *",
      emailPlaceholder: "your@email.com",
      phone: "Phone *",
      phonePlaceholder: "+351 XXX XXX XXX",
      subject: "Area of Interest *",
      subjectPlaceholder: "Select an area",
      subjectOptions: {
        civil: "Civil Law",
        commercial: "Corporate & Commercial Law",
        labor: "Employment Law",
        family: "Family & Succession Law",
        criminal: "Criminal Law",
        realEstate: "Real Estate Law",
        other: "Other subject",
      },
      date: "Preferred Date *",
      time: "Preferred Time",
      timeOptions: {
        morning: "Morning (9am - 1pm)",
        afternoon: "Afternoon (2pm - 6pm)",
        evening: "Late afternoon (6pm - 7pm)",
      },
      message: "Message / Details",
      messagePlaceholder: "Briefly describe your situation or question...",
      submit: "Schedule Consultation",
      sending: "Scheduling...",
    },
    success: {
      title: "Appointment Request Sent!",
      description: "We will contact you within 24 hours to confirm your consultation.",
    },
    error: {
      title: "Error sending request",
      description: "Please try again later.",
    },
    privacy: "By submitting, you agree to our",
    privacyLink: "Privacy Policy",
  },
  info: {
    title: "How can we help you?",
    description:
      "We are available to schedule an in-person or remote consultation. We respond to all requests within 24 business hours.",
    address: {
      label: "Address",
      value: "Rua José Florindo, 44C\n2750-400 Cascais",
    },
    phone: {
      label: "Phone",
      value: "+351 214 848 390",
    },
    email: {
      label: "Email",
      value: "mario.ferreira-4651l@advogados.oa.pt",
    },
    hours: {
      label: "Hours",
      value: "Monday to Friday: 9:00 AM - 7:00 PM",
    },
  },
} as const;