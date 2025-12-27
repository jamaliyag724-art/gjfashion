import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "gaurangjamaliya67@gmail.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      subtext: "Mon-Sat: 10AM - 7PM IST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Ahmedabad, Gujarat",
      subtext: "Mumbai, Delhi, Kolkata (Coming Soon)",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Saturday",
      subtext: "10:00 AM - 7:00 PM IST",
    },
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact GJ Fashion",
    description: "Get in touch with GJ Fashion for any queries about orders, products, or styling advice.",
    mainEntity: {
      "@type": "Organization",
      name: "GJ Fashion",
      email: "gaurangjamaliya67@gmail.com",
      telephone: "+91-98765-43210",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Us - Customer Support & Enquiries"
        description="Contact GJ Fashion for order inquiries, product questions, styling advice, or feedback. Reach us via email, phone, or our contact form. Quick response guaranteed."
        keywords="contact GJ Fashion, customer support, fashion helpline, order inquiry, styling advice, contact form"
        canonicalUrl="/contact"
        structuredData={contactSchema}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            We'd love to hear from you. Reach out for any questions, feedback, or styling advice.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground font-medium">{info.details}</p>
                <p className="text-sm text-muted-foreground mt-1">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Have a question about our products, need styling advice, or want to provide feedback? 
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">
                      We aim to respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-2xl p-6">
                <h3 className="font-medium text-foreground mb-3">Common Questions</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Order tracking and delivery status</li>
                  <li>• Size and fit recommendations</li>
                  <li>• Returns and exchange process</li>
                  <li>• Product availability and restocking</li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-10 shadow-soft">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl text-foreground mb-3">
            Looking for Quick Answers?
          </h2>
          <p className="text-muted-foreground mb-4">
            Check out our FAQ page for instant answers to common questions.
          </p>
          <a
            href="/faq"
            className="text-primary hover:underline font-medium"
          >
            Visit FAQ Page →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
