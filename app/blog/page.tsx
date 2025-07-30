"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Complete Guide to Messaging Strategy for B2B SaaS",
      excerpt:
        "Learn how to create compelling messaging that converts prospects into customers with our comprehensive framework.",
      author: "Adam Hill",
      date: "March 15, 2024",
      category: "Strategy",
      slug: "complete-guide-messaging-strategy-b2b-saas",
    },
    {
      title: "5 Common Messaging Mistakes That Kill Conversions",
      excerpt: "Avoid these critical messaging pitfalls that could be costing you customers and revenue.",
      author: "Sarah Chen",
      date: "March 10, 2024",
      category: "Conversion",
      slug: "5-messaging-mistakes-kill-conversions",
    },
    {
      title: "How AI is Transforming Messaging Strategy in 2024",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the way businesses create and optimize their messaging.",
      author: "Michael Rodriguez",
      date: "March 5, 2024",
      category: "Technology",
      slug: "ai-transforming-messaging-strategy-2024",
    },
    {
      title: "Case Study: How TechCorp Increased Conversions by 300%",
      excerpt:
        "A detailed breakdown of how we helped TechCorp transform their messaging and achieve remarkable results.",
      author: "Adam Hill",
      date: "February 28, 2024",
      category: "Case Study",
      slug: "techcorp-300-percent-conversion-increase",
    },
    {
      title: "The Psychology Behind High-Converting Messages",
      excerpt: "Understanding the psychological triggers that make messages irresistible to your target audience.",
      author: "Sarah Chen",
      date: "February 20, 2024",
      category: "Psychology",
      slug: "psychology-high-converting-messages",
    },
    {
      title: "Building a Messaging Framework That Scales",
      excerpt: "Create a systematic approach to messaging that grows with your business and maintains consistency.",
      author: "Michael Rodriguez",
      date: "February 15, 2024",
      category: "Framework",
      slug: "messaging-framework-that-scales",
    },
  ]

  const categories = ["All", "Strategy", "Conversion", "Technology", "Case Study", "Psychology", "Framework"]

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
              Messaging Strategy <span className="text-warm-orange">Insights</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Expert insights, case studies, and actionable strategies to help you master the art of precision
              messaging.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  index === 0
                    ? "bg-warm-orange text-black hover:bg-orange-600"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-warm-orange/20 to-orange-100 rounded-t-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-warm-orange rounded-lg mx-auto mb-2"></div>
                          <p className="text-gray-600 font-semibold text-sm">{post.category}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Badge className="bg-warm-orange text-black">{post.category}</Badge>
                    <h3 className="font-space-grotesk text-xl font-semibold text-deep-navy mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-warm-orange hover:text-orange-600 font-medium"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-deep-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get weekly messaging strategy tips and case studies delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-warm-orange"
              />
              <Button className="bg-warm-orange hover:bg-orange-600 text-black font-semibold px-6 py-3">
                Subscribe
              </Button>
            </div>

            <p className="text-sm text-gray-400 mt-4">No spam, unsubscribe at any time.</p>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-space-grotesk text-2xl font-bold text-deep-navy mb-2">
                Ready to Transform Your Messaging?
              </h3>
              <p className="text-gray-600">Get access to our complete messaging strategy resources and tools.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-warm-orange hover:bg-orange-600 text-black font-semibold">
                <Link href="https://salescentri.com/resources/whitepapers-ebooks">Download Free Guide</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white bg-transparent"
              >
                <Link href="https://salescentri.com/resources/tutorials-webinars">Tutorials & Webinars</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
