import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([
    { date: '2022-01-01', amount: '100.00', status: 'Completed' },
    { date: '2021-12-15', amount: '50.00', status: 'Pending' },
    { date: '2021-11-20', amount: '200.00', status: 'Refunded' },
  ]);
  useEffect(() => {
    // Assuming there's a function to fetch payment history
    const fetchPaymentHistory = async () => {
      try {
        const response = await fetch('/api/payment-history');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPaymentHistory(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchPaymentHistory();
  }, []);

  return (
    <>
      {/* Payment History */}
      <div className="w-[70vw] h-full border p-4 m-4">
        <h3 className="text-lg font-bold">Payment History</h3>
        <div className="w-full space-y-4 h-full">
          {paymentHistory.map((payment, index) => (
            <div key={index} className="w-full flex justify-between border p-4 rounded-md">
              <p>Payment Date: {payment.date}</p>
              <p>Amount: ${payment.amount}</p>
              <p>Status: {payment.status}</p>
            </div>
          ))}
          {paymentHistory.length === 0 && (
            <p>No payment history available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;