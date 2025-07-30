"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams getting started with messaging strategy",
      features: [
        "Up to 5 messaging campaigns",
        "Basic analytics dashboard",
        "Email support",
        "Template library access",
        "A/B testing (2 variants)",
        "Single user account",
      ],
      cta: "Get Pricing",
      ctaLink: "https://salescentri.com/pricing",
      popular: false,
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Unlimited messaging campaigns",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom template creation",
        "Advanced A/B testing",
        "Up to 10 team members",
        "Multi-channel deployment",
        "API access",
        "Custom integrations",
      ],
      cta: "Get Pricing",
      ctaLink: "https://salescentri.com/pricing",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations and agencies",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "White-label solutions",
        "Dedicated account manager",
        "Custom onboarding",
        "SLA guarantees",
        "Advanced security features",
        "Custom reporting",
        "24/7 phone support",
      ],
      cta: "Enterprise & Custom",
      ctaLink: "https://salescentri.com/pricing/enterprise-custom",
      popular: false,
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
              Simple, Transparent <span className="text-warm-orange">Pricing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Choose the perfect plan for your messaging strategy needs. All plans include our core features with no
              hidden fees.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <Card
                  className={`h-full ${plan.popular ? "border-warm-orange border-2 shadow-lg" : "border-gray-200"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-warm-orange text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <CardTitle className="font-space-grotesk text-2xl text-deep-navy mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-deep-navy">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-warm-orange mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full ${
                        plan.popular
                          ? "bg-warm-orange hover:bg-orange-600 text-black"
                          : "bg-deep-navy hover:bg-gray-800 text-white"
                      } font-semibold py-3`}
                    >
                      <Link href={plan.ctaLink}>{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing and plans</p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Can I change my plan at any time?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to get started.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.",
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
              },
              {
                question: "Can I get a custom plan for my specific needs?",
                answer: "Contact our sales team to discuss custom pricing and features tailored to your requirements.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-space-grotesk text-lg font-semibold text-deep-navy mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deep-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their messaging strategy with our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-warm-orange hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg"
              >
                <Link href="https://salescentri.com/pricing">Get Pricing</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-deep-navy px-8 py-4 text-lg bg-transparent"
              >
                <Link href="https://salescentri.com/contact/sales-inquiry/request-quote">Request Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
