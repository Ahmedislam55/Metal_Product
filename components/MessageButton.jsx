"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import classes from "./MessageButton.module.css";
export default function MessageButton() {
  const [showQR, setShowQR] = useState(false);
  const phoneNumber = "+966115216216"; // استبدل رقمك هنا

  return (
    <div className={classes.button} onClick={() => setShowQR(!showQR)}>
      <button className={classes.message} onClick={() => setShowQR(!showQR)}>
        <FontAwesomeIcon icon={faComments} />
        <span>Message</span>
      </button>

      {showQR && (
        <div className={classes.qr}>
          <p className={classes.parg}>Scan QR Code to send a message</p>
          <QRCodeCanvas
            // value={`tel:${phoneNumber}`}
            value={`https://wa.me/${phoneNumber}`}
            size={200}
            bgColor="#fff"
            fgColor="#000"
            level="H"
          />
        </div>
      )}
    </div>
  );
}
