"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
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
              Get in <span className="text-warm-orange">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Ready to transform your messaging strategy? Let's discuss how we can help you drive better conversions and
              grow your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-space-grotesk text-2xl text-deep-navy">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" />
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your messaging strategy needs..." rows={5} />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-warm-orange hover:bg-orange-600 text-black font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-space-grotesk text-2xl font-bold text-deep-navy mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you succeed. Reach out to us through any of these channels and we'll get back to
                  you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-warm-orange mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-deep-navy mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Business District
                      <br />
                      Austin, TX 78701
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-warm-orange mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-deep-navy mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (512) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-warm-orange mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-deep-navy mb-1">Email</h3>
                    <p className="text-gray-600">hello@adammyhill.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-warm-orange mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-deep-navy mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM CST
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-4 pt-8">
                <h3 className="font-space-grotesk text-lg font-semibold text-deep-navy">Need Immediate Help?</h3>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-warm-orange hover:bg-orange-600 text-black font-semibold">
                    <Link href="https://salescentri.com/contact">Contact Sales Team</Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white bg-transparent"
                  >
                    <Link href="https://salescentri.com/contact/support-request/submit-ticket">
                      Submit Support Ticket
                    </Link>
                  </Button>

                  <Button asChild variant="ghost" className="w-full text-deep-navy hover:text-warm-orange">
                    <Link href="https://salescentri.com/contact/support-request/live-chat">Start Live Chat</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Visit Our Austin Office
            </h2>
            <p className="text-xl text-gray-600">Located in the heart of Austin's business district</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-warm-orange mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Austin, TX Business District</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
