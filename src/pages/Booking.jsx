import { useState } from 'react';
import { phones } from '../data/phones';
import { Send, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    smartphone: '',
    duration: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container success-message">
        <CheckCircle size={64} color="#28a745" />
        <h2>Pesanan Berhasil Dikirim!</h2>
        <p>Terima kasih <strong>{formData.name}</strong>, tim kami akan segera menghubungi Anda di nomor <strong>{formData.phone}</strong>.</p>
        <button onClick={() => setSubmitted(false)} className="btn btn-outline">Buat Pesanan Baru</button>
      </div>
    );
  }

  return (
    <div className="booking-page container">
      <div className="form-card">
        <h1>Form Pemesanan Sewa</h1>
        <p>Lengkapi formulir di bawah ini untuk menyewa smartphone flagship pilihan Anda.</p>
        
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Nama Lengkap</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Masukkan nama sesuai KTP" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Nomor WhatsApp</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="0812xxxxxxx" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="smartphone">Pilih Smartphone</label>
            <select 
              id="smartphone" 
              name="smartphone" 
              value={formData.smartphone}
              onChange={handleChange}
              required
            >
              <option value="">-- Pilih HP --</option>
              {phones.map(p => (
                <option key={p.id} value={p.name}>{p.name} - Rp {p.price.toLocaleString('id-ID')}/hari</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="duration">Durasi Sewa (Hari)</label>
            <input 
              type="number" 
              id="duration" 
              name="duration" 
              min="1" 
              max="30" 
              value={formData.duration}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-terms">
            <p>* Wajib melampirkan KTP / Identitas diri saat pengambilan/pengantaran unit.</p>
          </div>
          
          <button type="submit" className="btn btn-primary btn-large btn-block">
            <Send size={18} /> Kirim Pesanan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
