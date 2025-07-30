"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Award, Target } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Adam Hill",
      role: "Founder & CEO",
      bio: "15+ years in messaging strategy and conversion optimization. Former VP of Marketing at three successful SaaS companies.",
    },
    {
      name: "Sarah Chen",
      role: "VP of Product",
      bio: "Product strategist with expertise in AI-powered marketing tools. Previously led product teams at major tech companies.",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Customer Success",
      bio: "Customer success expert focused on helping businesses achieve their messaging goals. 10+ years in B2B SaaS.",
    },
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8 text-warm-orange" />,
      title: "Precision First",
      description:
        "We believe every word matters. Our approach focuses on creating messages that hit the mark every time.",
    },
    {
      icon: <Users className="w-8 h-8 text-warm-orange" />,
      title: "Customer Obsessed",
      description:
        "Your success is our success. We're committed to helping you achieve measurable results through better messaging.",
    },
    {
      icon: <Award className="w-8 h-8 text-warm-orange" />,
      title: "Innovation Driven",
      description:
        "We continuously evolve our platform with the latest AI and marketing technology to stay ahead of the curve.",
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
              About <span className="text-warm-orange">Adammyhill Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              We're on a mission to help businesses communicate more effectively and drive better results through
              precision messaging strategies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-deep-navy mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in Austin, Texas, Adammyhill Solutions was born from the frustration of seeing great businesses
                struggle with unclear messaging. We believe that every company has a powerful story to tell – they just
                need the right strategy to tell it effectively.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our platform combines cutting-edge AI technology with proven messaging frameworks to help businesses
                create, test, and optimize their communication strategies. We've helped over 1,000 companies increase
                their conversion rates by an average of 250%.
              </p>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 text-warm-orange mr-2" />
                <span>Headquartered in Austin, Texas</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-lg shadow-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-warm-orange rounded-lg mx-auto mb-4"></div>
                  <p className="text-gray-600 font-semibold">Austin Office</p>
                  <p className="text-sm text-gray-500">Business District Location</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-deep-navy mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="font-space-grotesk text-xl font-semibold text-deep-navy mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-deep-navy mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts behind our messaging strategy platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-warm-orange to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="font-space-grotesk text-xl font-semibold text-deep-navy mb-2">{member.name}</h3>
                    <p className="text-warm-orange font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-deep-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Real results from real businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Adammyhill Solutions completely transformed our messaging strategy. Our conversion rate increased by 300% in just 4 months.",
                author: "Jennifer Walsh",
                title: "CMO, TechStartup Inc.",
                company: "Series B SaaS Company",
              },
              {
                quote:
                  "The precision messaging approach helped us clarify our value proposition and connect with our ideal customers like never before.",
                author: "David Kim",
                title: "Founder & CEO",
                company: "E-commerce Platform",
              },
              {
                quote:
                  "Working with Adam and his team was a game-changer. Our sales team now has messaging that actually converts prospects into customers.",
                author: "Maria Gonzalez",
                title: "VP of Sales",
                company: "B2B Software Company",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-warm-orange text-sm">{testimonial.title}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the hundreds of businesses that have transformed their messaging strategy with our expert team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-warm-orange hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg"
              >
                <Link href="https://salescentri.com/company/about-us">About Us</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                <Link href="https://salescentri.com/company/about-us/leadership-team">Leadership Team</Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-deep-navy hover:text-warm-orange px-8 py-4 text-lg"
              >
                <Link href="https://salescentri.com/company/careers">Careers</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
