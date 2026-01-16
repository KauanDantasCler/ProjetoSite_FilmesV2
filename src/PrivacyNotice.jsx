import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/PrivacyNotice.css';

function PrivacyNotice() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="privacy-notice">
            <p>
                ℹ️ Este site não coleta dados pessoais.{' '}
                <Link to="/privacidade">Saiba mais</Link>
            </p>
            <button
                className="privacy-close-btn"
                onClick={() => setIsVisible(false)}
                aria-label="Fechar aviso de privacidade"
            >
                ✕
            </button>
        </div>
    );
}

export default PrivacyNotice;