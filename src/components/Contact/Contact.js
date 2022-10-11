import { Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const Contact = () => {
    return (
        <div className='my-8'>
            <hr className='border-2 border-blue-600 my-8 mx-auto w-9/12' />

            <div className='w-3/6 mx-auto'>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email3"
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email3"
                    type="email"
                    placeholder="name@email.com"
                    required={true}
                    helperText={<React.Fragment>We’ll never share your details. Read our{' '}<a href="/forms" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</React.Fragment>}
                />
            </div>
            <div id="textarea" className='w-9/12 mx-auto my-12'>
                <div className="mb-2 block">
                    <Label
                        htmlFor="comment"
                        value="Your message"
                    />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
                    required={true}
                    rows={4}
                />
            </div>
        </div>
    );
};

export default Contact;