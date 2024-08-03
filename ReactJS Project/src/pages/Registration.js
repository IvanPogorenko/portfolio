import { Link } from 'react-router-dom';
import '../css/reg.css';
import { useState } from 'react';
import { registerUser } from '../api';

function Registration(){

    const [formData, setFormData] = useState({
        username: '',
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
            const response = await registerUser(formData);
            console.log('User registered successfully:', response);
            setSuccess(true);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='RegContainer'>
            <form onSubmit={handleSubmit} className='RegBlock'>
                <h>Регистрация</h>
                <div className='FormFieldContainer'>
                    <label  className='FormField'>
                        Username:
                        <input
                            className='textBlock'
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
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
                <button className='RegBtn' type="submit">Register</button>
                <Link to="/authorisation" className='ToReg'><div>Войти</div></Link>
                {error && <p>Error: {error}</p>}
                {success && <p>Registration successful!</p>}
            </form>
        </div>
    );
}

export default Registration;