import React from 'react'

const FAQ = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
            <div>
            <h3 className="text-xl font-semibold">What is the purpose of this application?</h3>
            <p>This application is designed to help users manage real estate listings and inquiries.</p>
            </div>
            <div>
            <h3 className="text-xl font-semibold">How do I create a new listing?</h3>
            <p>You can create a new listing by navigating to the 'Create Listing' section in the app.</p>
            </div>
            <div>
            <h3 className="text-xl font-semibold">Who can I contact for support?</h3>
            <p>For support, please reach out via the contact form available in the app.</p>
            </div>
        </div>
    </div>
  )
}

export default FAQ
