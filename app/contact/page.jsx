import MessageButton from "@/components/MessageButton";
import ContactAbout from "./contactAbout/contactAbout";
import ContactHome from "./contactHome/contactHome";
import classes from "./page.module.css";
export const metadata = {
  title: 'Manufaktur Contact US – Industry and Factory Theme',
  description: 'Manufaktur Solutions – Industry and Factory Theme',
};
function ContactPage() {
  return (
    <section className={classes.contact}>
    <ContactHome/>
    <ContactAbout/>
    </section>
  );
}
export default ContactPage;
