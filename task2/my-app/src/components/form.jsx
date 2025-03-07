import React, { useState } from "react";
import axios from "axios";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        university: "", 
        university_level: "", 
        course: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {...formData,university_level: parseInt(formData.university_level, 10) 
        };
        try {
            const response = await axios.post("https://fake-form.onrender.com/api/students/addStudent",dataToSend);
            console.log("Success:", response.data);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form. Please try again.");
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-[1.17em] mb-[35px]">Cautions</p>
                <p className="mb-[35px]">Be sure to check your E-mail after submitting the form!</p>
                <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center gap-y-2 w-[500px]">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="border w-full h-10 p-2"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="border w-full h-10 p-2"/>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="border w-full h-10 p-2"/>
                    <label htmlFor="university">University</label>
                    <select name="university" id="university" required value={formData.university} onChange={handleChange} className="border w-full h-10 p-2">
                        <option value="" disabled>Select an option</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Ain Shams">Ain Shams</option>
                        <option value="Helwan">Helwan</option>
                        <option value="Other">Other</option>
                    </select>
                    <label htmlFor="university_level">University Level</label>
                    <select name="university_level" id="university_level" required value={formData.university_level} onChange={handleChange} className="border w-full h-10 p-2">
                        <option value="" disabled>Select an option</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label htmlFor="course">Course</label>
                    <select name="course" id="course" required value={formData.course} onChange={handleChange} className="border w-full h-10 p-2">
                        <option value="" disabled>Select an option</option>
                        <option value="C++">C++</option>
                        <option value="OOP">OOP</option>
                        <option value="Flutter">Flutter</option>
                        <option value="DS & Algorithms">DS & Algorithms</option>
                        <option value="UI/UX">UI/UX</option>
                    </select>
                    <button type="submit" className="bg-[#700608] hover:bg-[#1f1f1f] text-white transition duration-300 ease-in-out w-full h-10 mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;