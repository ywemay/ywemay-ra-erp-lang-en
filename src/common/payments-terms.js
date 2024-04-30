export const payments = {
  terms: {
    ADV: '100% Advance', 
    NET30: 'Net 30', 
    NET60: 'Net 60', 
    DOR: 'Due on receipt', 
    D50B50: '50% deposit, balance due upon delivery', 
    COD: 'Cash on delivery (COD)', 
    LC: 'Letter of credit (LC)', 
    INST: 'Installments',
    details: {
      ADV: 'Payment of full amount in advance', 
      NET30: 'Payment is due 30 days from the invoice date.', 
      NET60: 'Payment is due 60 days from the invoice date.', 
      DOR: 'Payment is due immediately upon receipt of the invoice.', 
      D50B50: 'A partial payment of 50% is due upfront, and the remaining balance is due upon delivery.', 
      COD: 'Payment is made in cash at the time of delivery.', 
      LC: 'Payment is made based on a letter of credit issued by the buyer&quot;s bank.', 
      INST: 'Payment is divided into multiple installments over a specified period.',
    },
  }
}