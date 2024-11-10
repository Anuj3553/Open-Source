import { useState } from 'react';
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const UploadProject = ({ mode }) => {
    const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || "https://bitbox-uxbo.onrender.com";

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        githubLink: '',
        deploymentLink: '',
        projectFiles: null,
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${VITE_SERVER_PORT}/api/showcaseProjects/post-project`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit project');
            }

            const data = await response.json();
            console.log('Project submitted successfully:', data);
            navigate('/projects');

            setFormData({
                title: '',
                description: '',
                githubLink: '',
                deploymentLink: '',
            });

        } catch (error) {
            console.error('Error submitting project:', error);
        }
    };

    const themeStyles = mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';

    return (
        <div className="container mx-auto flex justify-center">
            {/* Button to open the modal */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white py-2 px-4 rounded shadow-md hover:bg-blue-700 transition duration-300"
            >
                Upload Project
            </button>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed flex z-[99999999999] justify-center items-center inset-0 bg-black bg-opacity-50">
                    {/* Modal Content */}
                    <div
                        className={`relative top-22 md:top-12 w-full max-w-md p-6 mx-2 my-8 bg-white rounded-lg shadow-lg overflow-auto ${themeStyles}`}
                        style={{ maxHeight: '800px', fontSize: '14px' }}
                    >
                        {/* Close Button in Top Right */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-0 right-10 text-gray-500 hover:text-gray-700"
                            style={{ fontSize: '42px' }}
                        >
                            &times;
                        </button>

                        <h1 className={`text-3xl font-bold text-center mt-6 mb-6 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            Upload Your Project
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Project Title */}
                            <div>
                                <label htmlFor="title" className={`block text-lg font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Project Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                    placeholder="Enter your project title"
                                    required
                                />
                            </div>

                            {/* Project Description */}
                            <div>
                                <label htmlFor="description" className={`block text-lg font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Project Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                    placeholder="Enter a brief description of your project"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>

                            {/* GitHub Link */}
                            <div>
                                <label htmlFor="githubLink" className={`block text-lg font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    GitHub Link
                                </label>
                                <input
                                    type="url"
                                    id="githubLink"
                                    name="githubLink"
                                    value={formData.githubLink}
                                    onChange={handleChange}
                                    className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                    placeholder="Enter your project GitHub link"
                                    required
                                />
                            </div>

                            {/* Deployment Link */}
                            <div>
                                <label htmlFor="deploymentLink" className={`block text-lg font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Deployment Link (Optional)
                                </label>
                                <input
                                    type="url"
                                    id="deploymentLink"
                                    name="deploymentLink"
                                    value={formData.deploymentLink}
                                    onChange={handleChange}
                                    className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${mode === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                                    placeholder="Enter your project live demo link"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center mt-4">
                                <button
                                    type="submit"
                                    className={`w-full py-2 rounded-md text-lg font-semibold ${mode === 'dark' ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                >
                                    Upload Project
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

UploadProject.propTypes = {
    mode: PropTypes.string,
};

export default UploadProject;
