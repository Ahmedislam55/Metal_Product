/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import classes from "./AllCategory.module.css";
import QuantityCounter from "@/components/QuantityCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MessageButton from "@/components/MessageButton";
import TellPhoneButton from "@/components/TellphoneButton";
import NotFoundCategory from "../not-found";
function CategoriesPage({ filterBy = "" }) {
  const router = useRouter();
  const category = [
    {
      id: 1,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/90871/conversions/steel-beams-H-size_150_150.webp",
      name: "Steel Profiles",
      desc: "High-quality steel beams in the shape of H The YoMats store provides them to you in a wide range of sizes and thicknesses , Size 350 × 350 mm thickness 12 × 19  mm,Length 12 meter steel beams its characterized by strength and durability, used in a variety of applications, including steel structures and hangers, made according to Saudi specifications. Shipping and delivery are available.",
      title:
        "Steel H Beams Thickness 6.5 × 9 mm Size 125 × 125 mm Length 12 meter",
    },
    {
      id: 2,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/89105/conversions/Steel-Angle-size_150_150.webp",
      name: "Iron angle",
      desc: "We have the finest types of iron anglestore Steel Angle Thickness 3 mm Size 30 × 30 mm Length 6 Meter, It is characterized by strength and durability and are used in a wide range of construction applications such as electrical towers, communication towers, building frames as well as infrastructure projects.",
      title: "Steel Angles Size 150 × 150 mm Thickness 15 mm Length 6 Meter",
    },
    {
      id: 3,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/90968/conversions/steel%C2%A0beams-U-size_150_150.webp",
      name: "Steel Profiles",
      desc: "High-quality steel beams in the shape of U The YoMats store provides them to you in a wide range of sizes and thicknesses , Size 120 × 52mm thickness 4.8 mm,Length 12 meter steel beams its characterized by strength and durability, used in a variety of applications, including steel structures and hangers, made according to Saudi specifications. Shipping and delivery are available.",
      title: "Steel U Beams Thickness 5.5 mm Size 150 × 75 mm Length 6 meter",
    },
    {
      id: 4,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/69405/conversions/Steel-rebar-size_150_150.webp",
      name: "Reinforcing iron",
      desc: "Steel rebar thickness 16 mm  brand Watani , the iron rods are cold drawn according to the Saudi specifications and the  American specifications.",
      title: "Steel Rebar Brand AL Ettefaq thickness 16 mm length 6 meters.",
    },
    {
      id: 5,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/90821/conversions/Steel-I-Beams-size_150_150.webp",
      name: "Steel Profiles",
      desc: " High-quality steel beams in the shape of I Get it now at the best price through the YouMats store, Size 200 × 99 mm thickness 4.5 × 6.7 mm,Length 6 meter steel beams its characterized by strength and durability, used in a variety of applications, including steel structures and hangers, made according to Saudi specifications. Shipping and delivery are available.",
      title: "Steel Rebar Brand Emirates thickness 12 mm length 12 meters",
    },
    {
      id: 6,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/80217/conversions/-%D8%B9%D9%84%D9%8A-%D8%B4%D9%83%D9%84-c-size_150_150.webp",
      name: "Steel Profiles",
      desc: "Steel profiles Size 120 × 50 × 20 mm thickness 2 mm, Durable and strong anti-rust steel pipes, used in a variety of applications, including iron structures, hangars.",
      title: "Steel C Profiles Thickness 2.5 mm Size 120 × 50 × 20 mm",
    },
  ];
  const filteredCategory = filterBy
    ? category.filter((item) =>
        item.name.toLowerCase().includes(filterBy.toLowerCase())
      )
    : category;

  if (!filteredCategory || filteredCategory.length === 0) {
    return <NotFoundCategory />;
  }
  return (
    <div className="container-fuild">
      <div className={`${classes.row} row`}>
        {filteredCategory.map((item) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [quantity, setQuantity] = useState(1);
          const [isLoading, setIsLoading] = useState(false);
          const [showMassage, setshowMassage] = useState(false);
          const handleGetQuote = () => {
            setIsLoading(true);
            const productData = {
              name: item.name,
              title: item.title,
              quantity,
              image: item.image,
            };

            const existingQuotes =
              JSON.parse(localStorage.getItem("quotes")) || [];

            const existingIndex = existingQuotes.findIndex(
              (item) =>
                item.name === productData.name &&
                item.title === productData.title
            );

            if (existingIndex !== -1) {
              existingQuotes[existingIndex].quantity += quantity;
              localStorage.setItem("quotes", JSON.stringify(existingQuotes));
            } else {
              const updatedQuotes = [...existingQuotes, productData];
              localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
              window.dispatchEvent(new Event("cartUpdated"));
            }

            setTimeout(() => {
              setIsLoading(false);
              setshowMassage(true); // نظهر الرسالة
              setTimeout(() => {
                setshowMassage(false); // نخفيها بعد ثانية
              }, 2000);
            }, 1000); // أول ثانية للـ loading
          };

          return (
            <>
              <div key={item.id} className={classes.images}>
                {showMassage && (
                  <div className={classes.successMessage}>
                    ✅ Product added successfully!
                  </div>
                )}
                <div className={`${classes.card} card`}>
                  <div className={`${classes["card-header"]} card-header`}>
                    <div className={classes["card-title"]}>
                      <h4>{item.name}</h4>
                      <span>{item.title}</span>
                    </div>
                    <Link
                      href={{
                        pathname: "/category/decCategory",
                        query: {
                          product: item.name,
                          image: item.image,
                          desc: encodeURIComponent(item.desc),
                          title: item.title,
                        },
                      }}
                    >
                      <div className={classes["card-img"]}>
                        <div className={classes.img}>
                          <img src={item.image} alt={item.title} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className={classes.descrption}>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                  <div className={classes.quantityrow}>
                    <div className={classes.quantity}>
                      <QuantityCounter
                        quantity={quantity}
                        setQuantity={setQuantity}
                      />
                    </div>
                    <div className={classes.file}>
                      <button
                        className={classes.upload}
                        onClick={handleGetQuote}
                      >
                        {isLoading ? (
                          <span className={classes.loader}></span>
                        ) : (
                          <FontAwesomeIcon icon={faClipboardList} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className={classes.icons}>
                    <div className={classes.phone}>
                      <TellPhoneButton />
                    </div>
                    <div className={classes.message}>
                      <MessageButton />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesPage;
