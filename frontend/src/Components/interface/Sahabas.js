import React, { useEffect, useState } from 'react';
import './Sahabas.css';

const Sahabas = () => {
    const [sahabas, setSahabas] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSahabas = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/sahabas'); // Ensure the endpoint matches your backend
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSahabas(data);
            } catch (error) {
                setError('Error fetching data: ' + error.message);
            }
        };

        fetchSahabas();
    }, []);

    // Filter sahabas based on the search term
    const filteredSahabas = sahabas.filter(sahaba =>
        sahaba.sahabi_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="sahabas-container">
            <h2>قائمة الصحابة رضي الله عنهم</h2>
            <input
                type="text"
                placeholder="Rechercher un sahaba..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredSahabas.length === 0 ? (
                <p>لا يوجد</p>
            ) : (
                <ul className="sahabas-list">
                    {filteredSahabas.map((sahaba, index) => (
                        <li key={index} className="sahabas-item">
                            <h3>{sahaba.sahabi_name}</h3>
                            <p>تعريف: {sahaba.definition} </p>
                            {sahaba.remarques && sahaba.remarques.trim() !== '' && (
                                <p>ملاحظات: {sahaba.remarques}</p>
                            )}
                            {sahaba.link_source && (
                                <p>
                                    المصدر: <a href={sahaba.link_source} target="_blank" rel="noopener noreferrer">المصدر</a>
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Sahabas;
