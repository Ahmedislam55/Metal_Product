import Link from "next/link";
import classes from "./AllCategory.module.css";
function SubCategoryPage() {
  const subCategory = [
    {
      id: 1,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/136/conversions/sub_category_338-size_100_100.webp",
      title: "Iron angle",
    },
    {
      id: 2,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/146/conversions/sub_category_350-size_100_100.webp",
      title: "Steel Products",
    },
    {
      id: 3,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/151/conversions/sub_category_355-size_100_100.webp",
      title: "Reinforcing iron",
    },
    {
      id: 4,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/70039/conversions/round-bar-size_100_100.webp",
      title: "Solvents",
    },
    {
      id: 5,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/89374/conversions/Steel-Flat-Bar-size_100_100.webp",
      title: "Steel Flat Bar",
    },
    {
      id: 6,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/136/conversions/sub_category_338-size_100_100.webp",
      title: "Iron angle",
    },
    {
      id: 7,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/146/conversions/sub_category_350-size_100_100.webp",
      title: "Steel Products",
    },
    {
      id: 8,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/151/conversions/sub_category_355-size_100_100.webp",
      title: "Reinforcing iron",
    },
    {
      id: 9,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/70039/conversions/round-bar-size_100_100.webp",
      title: "Solvents",
    },
    {
      id: 10,
      image:
        "https://youmats-media.s3.me-central-1.amazonaws.com/89374/conversions/Steel-Flat-Bar-size_100_100.webp",
      title: "Steel Flat Bar",
    },
  ];
  return (
    <>
      <h3> Sub Categories </h3>
      <hr />
      <div className={classes.scroll}>
        {subCategory.map((img) => (
          <div className={classes.items} key={img.id}>
            <Link href="#">
              <div className={classes.item}>
                <div className={classes.image}>
                  <img src={img.image} alt={img.title} />
                </div>
                <div className={classes.title}>
                  <p> {img.title} </p>
                </div>
              </div>
              <hr />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default SubCategoryPage;
