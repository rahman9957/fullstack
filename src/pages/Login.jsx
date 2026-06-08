import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Smartphone } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Logic untuk login bisa ditambahkan di sini
    alert('Fungsi login sedang dalam pengembangan');
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
            <h1 className="section-title" style={{ marginBottom: '10px', fontSize: '2rem' }}>Login</h1>
            <p>Masuk ke akun iamphone Anda</p>
          </div>
          
          <form onSubmit={handleSubmit}>
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
                placeholder="Masukkan password Anda"
                required 
              />
            </div>
            
            <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '10px' }}>
              Masuk
            </button>
            
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
              <p style={{ color: 'var(--text-muted)' }}>
                Belum punya akun?{' '}
                <Link to="/register" style={{ color: 'var(--primary)', fontWeight: '600' }}>
                  Daftar sekarang
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
