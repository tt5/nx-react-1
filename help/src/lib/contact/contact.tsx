import { Form, redirect, useActionData } from 'react-router-dom';
import styles from './contact.module.css';

/* eslint-disable-next-line */
export interface ContactProps {}

export const Contact = () => {
  const data = useActionData()


  return (
    <div className={styles['container']}>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

// @ts-ignore
export const contactAction = async ({request}) => {

  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  console.log(submission)

  // send post request
  
  if (submission.message.length < 2) {
    return {error: 'Message too short'}
  }

  return redirect('/')
}

