import Header from "../components/Header";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import About from "../components/About";
import Products from "../components/Products";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import { getDict } from "../_content/translations";

export default function EnHome() {
  const locale = "en";
  const dict = getDict(locale);

  return (
    <>
      <JsonLd locale={locale} />
      <Header locale={locale} dict={dict} />
      <main className="flex-1">
        <Hero dict={dict} locale={locale} />
        <Advantages dict={dict} />
        <About dict={dict} />
        <Products dict={dict} locale={locale} />
        <ContactForm dict={dict} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
