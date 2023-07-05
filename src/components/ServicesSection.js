import React from 'react'

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-10">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Individual Money Transfers */}
          <div className="flex flex-col items-center md:w-1/3 p-4">
            <img
              src="https://icon-library.com/images/fund-transfer-icon/fund-transfer-icon-5.jpg"
              alt="Individual Money Transfers"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              Individual Money Transfers
            </h3>
            <p className="text-center">
              Seamlessly transfer money across borders with our individual money
              transfer service. Send funds to loved ones or make personal
              payments abroad securely and at competitive rates.
            </p>
          </div>

          {/* Business Payments */}
          <div className="flex flex-col items-center md:w-1/3 p-4">
            <img
              src="https://cdn3.iconfinder.com/data/icons/business-finance-symbol-outline/32/Invoice_payment-1024.png"
              alt="Business Payments"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Business Payments</h3>
            <p className="text-center">
              Streamline your international business payments with our efficient
              payment solutions. Make secure and timely transactions to
              suppliers, partners, and employees worldwide.
            </p>
          </div>

          {/* Real-Time Payment Tracking */}
          <div className="flex flex-col items-center md:w-1/3 p-4">
            <img
              src="https://cdn2.iconfinder.com/data/icons/sharp-time-management-vol-1/32/1_Time_Payment_Pay-512.png"
              alt="Real-Time Payment Tracking"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              Real-Time Payment Tracking
            </h3>
            <p className="text-center">
              Stay informed with our real-time payment tracking feature. Monitor
              the progress of your cross-border transactions from initiation to
              completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
