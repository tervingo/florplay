import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const COUNTRIES = [
  'España',
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
  'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
  'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
  'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
  'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada',
  'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros',
  'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark',
  'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador',
  'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji',
  'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece',
  'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras',
  'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
  'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
  'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia',
  'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
  'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
  'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia',
  'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal',
  'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea',
  'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama',
  'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
  'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
  'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
  'South Korea', 'South Sudan', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden',
  'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand',
  'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
  'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
  'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
  'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
];

export default function AsesoramientoForm({ labels, modalId }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const d = new FormData(formRef.current);
    const templateParams = {
      asunto: 'Asesoramiento para el Terapeuta',
      contenido:
        `Nombre: ${d.get('nombre')}\n` +
        `País: ${d.get('pais')}\n` +
        `Email: ${d.get('email')}\n` +
        `Profesión: ${d.get('profesion')}\n` +
        `Temas de interés: ${d.get('temas')}`,
    };
    try {
      await emailjs.send(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="anatomia-form">
      <div className="form-group">
        <label htmlFor="a_nombre">{labels.nombre}</label>
        <input
          type="text"
          id="a_nombre"
          name="nombre"
          required
          disabled={status === 'sending' || status === 'success'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="a_pais">{labels.pais}</label>
        <select
          id="a_pais"
          name="pais"
          required
          disabled={status === 'sending' || status === 'success'}
          defaultValue=""
        >
          <option value="" disabled>{labels.paisPlaceholder}</option>
          {COUNTRIES.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="a_email">{labels.email}</label>
        <input
          type="email"
          id="a_email"
          name="email"
          required
          disabled={status === 'sending' || status === 'success'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="a_profesion">{labels.profesion}</label>
        <input
          type="text"
          id="a_profesion"
          name="profesion"
          required
          disabled={status === 'sending' || status === 'success'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="a_temas">{labels.temas}</label>
        <textarea
          id="a_temas"
          name="temas"
          rows={4}
          required
          disabled={status === 'sending' || status === 'success'}
        />
      </div>

      {status === 'idle' || status === 'sending' ? (
        <div className="form-actions">
          <button type="submit" className="form-submit" disabled={status === 'sending'}>
            {status === 'sending' ? labels.enviando : labels.enviar}
          </button>
          <button
            type="button"
            className="form-cancel"
            disabled={status === 'sending'}
            onClick={() => { if (modalId) document.getElementById(modalId).style.display = 'none'; }}
          >
            {labels.cancelar}
          </button>
        </div>
      ) : null}

      {status === 'success' && (
        <div className="form-success-block">
          <p className="form-success">{labels.exito}</p>
          <button
            type="button"
            className="form-submit"
            onClick={() => { if (modalId) document.getElementById(modalId).style.display = 'none'; }}
          >
            {labels.cerrar}
          </button>
        </div>
      )}
      {status === 'error' && (
        <p className="form-error">{labels.error}</p>
      )}
    </form>
  );
}
