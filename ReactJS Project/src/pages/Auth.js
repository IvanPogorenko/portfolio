import { Link } from 'react-router-dom';
import '../css/reg.css';
import { authenticateUser } from '../api';
import { useState } from 'react';

function Auth(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            const token = await authenticateUser(formData.email, formData.password);
            if (token) {
                localStorage.setItem('token', token);
                setSuccess(true);
            } else {
                setError('Authentication failed: No token received');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='RegContainer'>
            <form onSubmit={handleSubmit} className='RegBlock'>
                <h>Аутентификация</h>
                <div className='FormFieldContainer'>
                    <label className='FormField'>
                        Email:
                        <input
                            className='textBlock'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className='FormFieldContainer'>
                    <label className='FormField'>
                        Password:
                        <input
                            className='textBlock'
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button className='RegBtn' type="submit">Войти</button>
                <Link to="/registration" className='ToAnotherAuth'><div>Регистрация</div></Link>
                {error && <p>Error: {error}</p>}
            </form>
        </div>
    );
}

export default Auth;