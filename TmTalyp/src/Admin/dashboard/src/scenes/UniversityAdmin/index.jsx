import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminUniversities = () => {
    const [universities, setUniversities] = useState([]);
    const [editUniversity, setEditUniversity] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/universities")
            .then(response => setUniversities(response.data))
            .catch(error => console.error("Error fetching universities:", error));
    }, []);

    const handleEdit = (university) => {
        setEditUniversity(university);
    };

    const handleSave = () => {
        axios.put(`http://localhost:8080/universities/${editUniversity.id}`, editUniversity)
            .then(response => {
                setUniversities(universities.map(u => (u.id === editUniversity.id ? response.data : u)));
                setEditUniversity(null);
            })
            .catch(error => console.error("Error updating university:", error));
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!selectedFile || !editUniversity) return;

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post(`http://localhost:8080/universities/${editUniversity.id}/uploadImage`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            const updatedUniversity = { ...editUniversity, imageId: response.data };
            setEditUniversity(updatedUniversity);
            setUniversities(universities.map(u => (u.id === updatedUniversity.id ? updatedUniversity : u)));
            setSelectedFile(null);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Manage Universities</h1>

            <table border="1" width="100%">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {universities.map(university => (
                    <tr key={university.id}>
                        <td>{university.title}</td>
                        <td>{university.description}</td>
                        <td>
                            {university.imageId && (
                                <img
                                    src={`http://localhost:8080/universities/image/${university.imageId}`}
                                    alt={university.title}
                                    width="50"
                                    height="50"
                                    onError={(e) => (e.target.style.display = "none")} // Hide broken images
                                />
                            )}
                        </td>
                        <td>
                            <button onClick={() => handleEdit(university)}>Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {editUniversity && (
                <div style={{
                    position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                    width: "400px", padding: "20px", background: "white", boxShadow: "0px 0px 10px rgba(0,0,0,0.3)"
                }}>
                    <h2>Edit University</h2>
                    <input type="text" value={editUniversity.title} onChange={(e) => setEditUniversity({ ...editUniversity, title: e.target.value })} placeholder="Title" />
                    <input type="text" value={editUniversity.description} onChange={(e) => setEditUniversity({ ...editUniversity, description: e.target.value })} placeholder="Description" />

                    <div style={{ margin: "10px 0" }}>
                        <p>Current Image:</p>
                        {editUniversity.imageId ? (
                            <img src={`http://localhost:8080/universities/image/${editUniversity.imageId}`} alt="Preview" width="100" />
                        ) : (
                            <p>No Image Available</p>
                        )}
                    </div>

                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleFileUpload}>Upload New Image</button>

                    <button onClick={handleSave} style={{ marginTop: "10px" }}>Save</button>
                    <button onClick={() => setEditUniversity(null)} style={{ marginLeft: "10px" }}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default AdminUniversities;
