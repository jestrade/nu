import { useState } from "react";

const Contact = () => {
    const dataInitialState = {
        'name': '',
        'email': '',
        'subject': '',
        'message': ''
    };
    const messageInitialState = {
        'status': '',
        'content': ''
    };
    const [data, setData] = useState(dataInitialState);
    const [message, setMessage] = useState(messageInitialState);

    const handleClick = () => {
        const url = `${process.env.REACT_APP_API_URL}/contact`;

        setMessage(messageInitialState);
       
        fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
        })
        .then(response => response.json())
        .then(json => {
            const { success } = json;
            if (success) {
                setMessage({
                    'status': 'success',
                    'content': 'Message sent!'
                });
            } else {
                setMessage({
                    'status': 'error',
                    'content': 'An error ocurred. Contact your admin.'
                });
            }
        })
        .catch(error => {
            setMessage({
                'status': 'error',
                'content': 'An error ocurred. Contact your admin.'
            });
        });
        // report error;
    }

    return (
        <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact</h2>
            <form className="space-y-8">
                { message.status === "error" && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        {message.content}
                    </div>
                )}
                { message.status === "success" && (
                    <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                        {message.content}
                    </div>
                )}
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input
                        onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        type="text"
                        name="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input
                        onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} 
                        type="email"
                        name="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input
                        onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} 
                        type="text"
                        name="subject"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let us know how we can help you"
                        required
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea
                        onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} 
                        name="message"
                        rows="6"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        onClick={handleClick}
                        type="button"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >Send message</button>
                </div>
            </form>
        </div>
        </section>
    );
};

export default Contact;