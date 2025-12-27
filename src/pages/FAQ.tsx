import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Orders & Shipping",
      faqs: [
        {
          question: "How long does delivery take?",
          answer: "Standard delivery takes 5-7 business days across India. Express delivery (2-3 business days) is available for an additional fee. Metro cities typically receive orders faster.",
        },
        {
          question: "Do you offer free shipping?",
          answer: "Yes! We offer free standard shipping on all orders above ₹2,999. Orders below this amount have a flat shipping fee of ₹149.",
        },
        {
          question: "How can I track my order?",
          answer: "Once your order is shipped, you'll receive an email and SMS with your tracking number. You can also track your order on our Track Order page using your order ID.",
        },
        {
          question: "Do you deliver internationally?",
          answer: "Currently, we only deliver within India. We're working on expanding our delivery network to international locations soon.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day hassle-free return policy. Items must be unworn, unwashed, and have all original tags attached. Intimate wear and customized items are non-returnable.",
        },
        {
          question: "How do I initiate a return?",
          answer: "Visit our Returns page, enter your order ID and email, select the items you wish to return, and schedule a pickup. Our courier partner will collect the items from your doorstep.",
        },
        {
          question: "How long does a refund take?",
          answer: "Once we receive and verify the returned items, refunds are processed within 5-7 business days. The amount will be credited to your original payment method.",
        },
        {
          question: "Can I exchange for a different size?",
          answer: "Yes! You can exchange items for a different size or color within 30 days. Simply initiate a return and place a new order for the desired item.",
        },
      ],
    },
    {
      category: "Products & Sizing",
      faqs: [
        {
          question: "How do I find my correct size?",
          answer: "We provide detailed size charts on each product page. Measure yourself following our Size Guide and compare with the chart. If you're between sizes, we recommend sizing up for a comfortable fit.",
        },
        {
          question: "What fabrics do you use?",
          answer: "We use premium fabrics including 100% cotton, linen, wool blends, and sustainable materials. Each product page lists the exact fabric composition.",
        },
        {
          question: "How should I care for my garments?",
          answer: "Care instructions are printed on the garment labels and listed on each product page. Generally, we recommend cold wash, gentle cycle, and air drying to maintain quality.",
        },
        {
          question: "Are your products true to size?",
          answer: "Our products are designed to Indian body types and are generally true to size. However, we recommend checking the size chart and product reviews for specific fit feedback.",
        },
      ],
    },
    {
      category: "Payment & Security",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards (Visa, Mastercard, Rupay), UPI (Google Pay, PhonePe, Paytm), Net Banking, and Cash on Delivery (COD) for orders under ₹10,000.",
        },
        {
          question: "Is my payment information secure?",
          answer: "Absolutely! We use industry-standard SSL encryption and are PCI-DSS compliant. Your payment information is never stored on our servers.",
        },
        {
          question: "Do you offer EMI options?",
          answer: "Yes, we offer No-Cost EMI on select products for orders above ₹3,000. Available on major credit cards with 3, 6, and 12-month tenure options.",
        },
        {
          question: "Can I cancel my order?",
          answer: "You can cancel your order before it's shipped. Once shipped, you'll need to wait for delivery and then initiate a return. COD orders cannot be cancelled once shipped.",
        },
      ],
    },
  ];

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about GJ Fashion orders, shipping, returns, sizing, and payments. Get quick help for a seamless shopping experience."
        keywords="GJ Fashion FAQ, frequently asked questions, order help, shipping info, return policy, size guide, payment methods"
        canonicalUrl="/faq"
        structuredData={faqSchema}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Help Center</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 animate-fade-in-up">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Find quick answers to common questions about shopping at GJ Fashion
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="mb-12 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h2 className="font-heading text-2xl font-medium text-foreground mb-6 pb-3 border-b border-border">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-card rounded-xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-left font-medium hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-light text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Can't find what you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              to="/track-order"
              className="inline-flex items-center justify-center px-8 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Track Your Order
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
