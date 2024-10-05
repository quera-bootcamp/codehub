import axios from 'axios';

const LogoutButton = () => {

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/logout', {}, {
                withCredentials: true
            });

            if (response.status === 200) {
                localStorage.removeItem('authToken');
                location.reload();
            }
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <>
            <button
                onClick={handleLogout}
            >
                خروج از حساب
            </button>

        </>
    );
};

export default LogoutButton;
