import React from "react";


const Students = ()=>{
    const navigate = useNavigate();

    useEffect(() => {
        // Replace this with your actual authentication logic
        const isAuthenticated = localStorage.getItem('token'); // Example check for a token

        if (!isAuthenticated) {
            alert("Please log in to continue.");
            navigate('/login');
        }
    }, [navigate]);
    return(
        <div>
            <h1>Students page</h1>
        </div>
    )
}

export default Students