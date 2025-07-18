import React, { useState } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import maquiSomos from '../assets/maquiSomos.jpg'

const Contactos = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_mail: '',
    user_message: ''
  })

  const [isSent, setIsSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSent(true)
    setFormData({
      user_name: '',
      user_mail: '',
      user_message: ''
    })
  }

  return (
    <>
      <Header />
      <img style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: '20% 20%', backgroundPosition: 'top center',maskImage: 'linear-gradient(to bottom, rgb(186, 171, 171) 80%, rgba(84, 84, 84, 0))' }} src={maquiSomos} />
      <p style={{paddingLeft:'8px', color:'violet', fontSize:'20px', fontWeight:'bold',marginTop:'75px', marginBottom:'100px',textAlign:'center'}}>
          ¡SÌ TE INTERESA RECIBIR INFO SOBRE NUESTROS PRODUCTOS ESCRIBINOS!
        </p>
      <div >
       
        <div>
          {isSent && (
            <div className="mb-6 p-4 text-green-700 bg-green-100 border border-green-300 rounded text-center">
              ¡Mensaje enviado con éxito!
            </div>
          )}

          <form style={{ marginTop: '80px' }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-10 rounded-lg shadow-md w-full"
          >
            <div className="flex flex-col w-full">
              <label htmlFor="name" className=" font-medium  ">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="mail" className="mb-1 font-medium text-gray-800">
                Correo electrónico:
              </label >
              <input
                type="email"
                id="mail"
                name="user_mail"
                value={formData.user_mail}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="msg" className="mb-1 font-medium ">
                Mensaje:
              </label>
              <textarea
                id="msg"
                name="user_message"
                value={formData.user_message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none"
              ></textarea>
            </div>

            <button style={{ margin: '20px', marginBottom: '150px' }}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded "
            >
              Enviar
            </button>
          </form>
        </div>

      </div>

      <Footer />
    </>

  )
}

export default Contactos
