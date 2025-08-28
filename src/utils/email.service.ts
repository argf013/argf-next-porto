import axios from 'axios'

const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send'
const SERVICE_ID = 'service_f52xfs9'
const TEMPLATE_ID = 'template_h3y06d9'
const USER_ID = 'VkJiKLqOqbakGdsbO'

export async function sendEmailJS({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) {
  const payload = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: USER_ID,
    template_params: {
      name,
      email,
      message,
    },
  }

  try {
    const response = await axios.post(EMAILJS_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    throw error?.response?.data || error
  }
}
