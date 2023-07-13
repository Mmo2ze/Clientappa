import React from 'react'
import QRCode from "react-qr-code"
import "./test.css"
function TestQr() {
  return (
    <div className='test'>
      <QRCode style={{margin:"300 auto"}} value='1' />
        
    </div>
  )
}

export default TestQr