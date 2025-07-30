"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is messaging strategy and why is it important?",
      answer:
        "Messaging strategy is the systematic approach to crafting and delivering your brand's communication to your target audience. It's crucial because it ensures consistency across all touchpoints, helps differentiate your brand, and directly impacts conversion rates. A well-defined messaging strategy can increase conversion rates by up to 300% by speaking directly to your audience's needs and pain points.",
    },
    {
      question: "How does Adammyhill Solutions differ from other messaging consultancies?",
      answer:
        "We combine data-driven insights with AI-powered optimization to create precision messaging that converts. Unlike traditional consultancies that rely solely on intuition, we use advanced analytics, A/B testing, and machine learning to continuously optimize your messaging performance. Our platform also provides real-time insights and allows for rapid iteration and deployment across multiple channels.",
    },
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with B2B SaaS companies, marketing agencies, e-commerce businesses, and growth-stage startups. Our clients range from early-stage companies looking to establish their messaging foundation to enterprise organizations seeking to optimize their existing communication strategies. We've successfully helped businesses across technology, healthcare, finance, and professional services industries.",
    },
    {
      question: "How long does it take to see results from your messaging strategy?",
      answer:
        "Most clients see initial improvements within 2-4 weeks of implementing our messaging recommendations. Significant results, including measurable increases in conversion rates, typically occur within 6-8 weeks. However, messaging optimization is an ongoing process, and we continue to refine and improve performance over time. Our fastest client saw a 150% increase in conversions within just 3 weeks.",
    },
    {
      question: "Do you provide ongoing support after the initial strategy is implemented?",
      answer:
        "Yes, we offer comprehensive ongoing support through our various service tiers. This includes regular performance reviews, message optimization, A/B testing, and strategic adjustments based on market changes and performance data. Our Professional and Enterprise plans include dedicated account management and continuous optimization services.",
    },
    {
      question: "Can you help with messaging across different channels (email, social, ads, etc.)?",
      answer:
        "Absolutely. Our messaging strategy is designed to be channel-agnostic while being optimized for each specific platform. We help you adapt your core messaging for email marketing, social media, paid advertising, sales outreach, website copy, and more. Our platform includes templates and guidelines for consistent messaging across all your marketing channels.",
    },
    {
      question: "What's included in your messaging strategy audit?",
      answer:
        "Our comprehensive audit includes analysis of your current messaging across all channels, competitor messaging analysis, audience research and persona development, message clarity and effectiveness assessment, conversion funnel analysis, and identification of messaging gaps and opportunities. You'll receive a detailed report with specific recommendations and an action plan for implementation.",
    },
    {
      question: "Do you offer training for our internal team?",
      answer:
        "Yes, we provide comprehensive training programs for your marketing, sales, and customer success teams. This includes workshops on messaging best practices, how to use our platform effectively, creating consistent messaging across teams, and ongoing coaching sessions. We believe in empowering your team to maintain and evolve your messaging strategy independently.",
    },
    {
      question: "How do you measure the success of a messaging strategy?",
      answer:
        "We track multiple key performance indicators including conversion rates, click-through rates, engagement metrics, sales cycle length, customer acquisition cost, and revenue attribution. Our platform provides real-time dashboards showing the impact of messaging changes on these metrics. We also conduct regular surveys and feedback sessions to measure message resonance and brand perception.",
    },
    {
      question: "What if our messaging strategy needs to change as our business evolves?",
      answer:
        "We understand that businesses evolve, and so should their messaging. Our platform is designed for flexibility and continuous optimization. We provide regular strategy reviews, market analysis, and messaging updates to ensure your communication stays relevant and effective. Our ongoing support plans include quarterly strategy sessions to adapt your messaging to new products, markets, or business objectives.",
    },
    {
      question: "Can you help with crisis communication and messaging?",
      answer:
        "Yes, we offer crisis communication support as part of our comprehensive messaging services. This includes developing crisis communication frameworks, creating response templates, media training, and real-time support during crisis situations. We help you maintain brand integrity and customer trust during challenging times through strategic, empathetic communication.",
    },
    {
      question: "Do you work with international businesses or only US-based companies?",
      answer:
        "We work with businesses globally and have experience adapting messaging strategies for different markets, cultures, and languages. Our team understands the nuances of international communication and can help you create messaging that resonates across different regions while maintaining brand consistency. We offer support in multiple time zones and have worked with clients across North America, Europe, Asia, and Australia.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm-orange/10 via-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-space-grotesk text-4xl md:text-5xl font-bold text-deep-navy mb-6"
            >
              Frequently Asked <span className="text-warm-orange">Questions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Everything you need to know about our messaging strategy services and platform.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-space-grotesk text-lg font-semibold text-deep-navy hover:text-warm-orange">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you understand how our messaging strategy platform can transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-warm-orange hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg"
              >
                <Link href="/contact">Contact Our Team</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                <Link href="https://salescentri.com/get-started/book-demo">Schedule a Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20 bg-deep-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive resources to learn more about messaging strategy and get the most out of our
              platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-warm-orange hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg"
              >
                <Link href="https://salescentri.com/docs/user-guide">User Guide</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-deep-navy px-8 py-4 text-lg bg-transparent"
              >
                <Link href="https://salescentri.com/docs/api-reference">API Reference</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
