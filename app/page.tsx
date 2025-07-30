"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageSquare, Target, TrendingUp, Users, Zap, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-orange/10 via-orange-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-space-grotesk text-4xl md:text-6xl lg:text-7xl font-bold text-deep-navy mb-6"
            >
              Drive Conversions with <span className="text-warm-orange">Precision Messaging</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              We build messaging strategies that turn interest into revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-warm-orange hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg"
              >
                <Link href="https://salescentri.com/get-started/free-trial">
                  Start Free Trial <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                <Link href="https://salescentri.com/get-started/book-demo">Book Demo</Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-deep-navy hover:text-warm-orange px-8 py-4 text-lg"
              >
                <Link href="https://salescentri.com/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Transform Your Messaging Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform helps you craft messages that resonate, convert, and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8 text-warm-orange" />,
                title: "Message Optimization",
                description: "AI-powered analysis to refine your messaging for maximum impact and conversion rates.",
              },
              {
                icon: <Target className="w-8 h-8 text-warm-orange" />,
                title: "Audience Targeting",
                description:
                  "Precision targeting tools to reach the right audience with the right message at the right time.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-warm-orange" />,
                title: "Performance Analytics",
                description: "Real-time insights and analytics to track message performance and ROI.",
              },
              {
                icon: <Users className="w-8 h-8 text-warm-orange" />,
                title: "Team Collaboration",
                description: "Seamless collaboration tools for marketing teams and agencies.",
              },
              {
                icon: <Zap className="w-8 h-8 text-warm-orange" />,
                title: "Rapid Deployment",
                description: "Quick implementation and deployment across all your marketing channels.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-warm-orange" />,
                title: "Proven Results",
                description: "Strategies backed by data and proven to increase conversion rates by up to 300%.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="font-space-grotesk text-xl font-semibold text-deep-navy mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of businesses that have transformed their messaging strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Adammyhill Solutions transformed our messaging strategy and increased our conversion rate by 250% in just 3 months.",
                author: "Sarah Johnson",
                title: "VP Marketing, TechCorp",
              },
              {
                quote:
                  "The precision messaging approach helped us clarify our value proposition and connect with our ideal customers.",
                author: "Michael Chen",
                title: "Founder, StartupXYZ",
              },
              {
                quote:
                  "Outstanding results! Our sales team now has messaging that actually converts prospects into customers.",
                author: "Emily Rodriguez",
                title: "Sales Director, GrowthCo",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-deep-navy">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
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
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Messaging?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how precision messaging can drive your conversions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-warm-orange hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg"
              >
                <Link href="https://salescentri.com/get-started/free-trial">
                  Start Free Trial <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-deep-navy px-8 py-4 text-lg bg-transparent"
              >
                <Link href="https://salescentri.com/get-started/book-demo">Book Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
