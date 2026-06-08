import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Smartphone } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok!');
      return;
    }
    console.log('Register attempt:', formData);
    // Logic untuk register bisa ditambahkan di sini
    alert('Fungsi pendaftaran sedang dalam pengembangan');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="booking-page animate-fade-in">
      <div className="container">
        <div className="form-card">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <Smartphone size={48} color="var(--primary)" />
            </div>
            <h1 className="section-title" style={{ marginBottom: '10px', fontSize: '2rem' }}>Register</h1>
            <p>Buat akun baru di iamphone</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email Anda"
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                placeholder="Buat password baru"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Konfirmasi Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Ulangi password Anda"
                required 
              />
            </div>
            
            <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '10px' }}>
              Daftar
            </button>
            
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
              <p style={{ color: 'var(--text-muted)' }}>
                Sudah punya akun?{' '}
                <Link to="/login" style={{ color: 'var(--primary)', fontWeight: '600' }}>
                  Masuk di sini
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
