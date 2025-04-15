"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import classes from "./MessageButton.module.css";
export default function TellPhoneButton() {
  const [showQR, setShowQR] = useState(false);
  const phoneNumber = "+201157722122"; 

  return (
    <div className={classes.button} onClick={() => setShowQR(!showQR)}>
      <button className={classes.tell} onClick={() => setShowQR(!showQR)}>
        <FontAwesomeIcon icon={faPhone} />
        <span> Call Now </span>
      </button>
      {showQR && (
        <div className={classes.qr}>
          <p className={classes.parg}>Scan QR Code to Call Supplier </p>
          <QRCodeCanvas
            value={`tel:${phoneNumber}`}
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
