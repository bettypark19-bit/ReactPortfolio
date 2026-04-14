import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import SectionTitle from './SectionTitle'

const Contact = () => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        'service_f1rst',
        'template_ocx4r5g',
        formRef.current,
        { publicKey: 'd5TIuzBMyKR0Aao4y' }
      )
      .then(() => {
        alert('메시지가 전송되었다!')
        formRef.current.reset()
      })
      .catch((error) => {
        alert('전송 실패: ' + error.text)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleReset = () => {
    formRef.current.reset()
  }

  return (
    <section className="contact" id="contacts">
      <SectionTitle
        title="contacts"
        subtitle="끈기와 열정으로 성장하는 오성의입니다."
      />

      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="user_name"
            placeholder="이름을 입력하세요"
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="user_email"
            placeholder="이메일을 입력하세요"
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label">Message</label>
          <textarea
            className="form-textarea"
            name="message"
            placeholder="메시지를 입력하세요"
            required
          />
        </div>

        <div className="form-buttons">
          <button
            type="button"
            className="form-btn form-btn--cancel"
            onClick={handleReset}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="form-btn form-btn--submit"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact