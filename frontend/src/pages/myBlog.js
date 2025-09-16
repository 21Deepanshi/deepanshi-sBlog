import React, { useState } from "react";
import "./myBlog.css";

const blogPosts = [
  {
    id: 1,
    title: "SQL & NoSQL",
    content: [ 
      "When I came to Calgary, I never imagined that my passion for tech would grow so much. I started with frontend development, focusing on design and user experience.But the more I learned, the more curious I became. I began with HTML, and now I have reached a point where I can connect my web applications to a database.", 
      "During my learning journey, I noticed that many people use non-relational databases to build full-stack applications because they are easy to use, schema-flexible, and integrate well with JavaScript, especially in modern stacks like MERN. For example, companies like eBay use MongoDB to manage their data. On the other hand, Instagram, which scaled rapidly in its early days, initially used PostgreSQL to handle its growing database needs.", 
      "So the question is, when do we use which database? Every database technology has its strengths, but what matters most are the use cases.", 
      "Non-relational databases are known for their scalability (horizontal scaling), as they can distribute data across multiple servers without needing to redefine the schema for each one. In contrast, while sharding can also be done with SQL databases, each new instance must have the same schema applied manually or through replication, making it more rigid compared to NoSQL systems.", 
      "So, why choose NoSQL databases? They offer greater flexibility with schema design, better handle unstructured data, and scale more easily across distributed systems, making them ideal for modern applications that need to evolve quickly and manage large volumes of diverse data.", 
      "That might suggest that every company should use MongoDB, but many still prefer SQL databases, and for good reason. SQL supports ACID properties, making it ideal for applications that require strong data integrity, such as banking systems, booking platforms, or inventory management. For example, if two users attempt to purchase the last unit of a product, SQL locks the record, allowing only one transaction to succeed and preventing data conflicts.", 
      "In contrast, NoSQL databases often follow the BASE model (Basically Available, Soft state, Eventually consistent). Instead of using locks, they rely on versioning to handle updates and avoid conflicts. For instance, if two users read version 1 of a record and one updates it to version 2, the system will reject the second attempt by a user to update version 1, preserving data accuracy without locking mechanisms.", "So then, why choose SQL if NoSQL already handles conflicts through BASE? Because BASE trades strict consistency for availability and speed, which can lead to temporary data inconsistency. That is acceptable for systems like social media feeds, analytics platforms, or product catalogs, where eventual consistency is fine. But for critical systems that demand real-time accuracy and strong guarantees, like financial transactions or reservations, the Structured Query Language ACID model ensures that data is always correct, consistent, and reliable, even under high concurrency." 
    ]
  },
  {
    id: 2,
    title: "Why WordPress is the Most Famous CMS",
    "content": [
    {
      "heading": "Introduction",
      "text": "When it comes to building websites, Content Management Systems (CMS) have made it easier than ever for individuals and businesses to establish an online presence. While there are many CMS platforms available today, WordPress continues to dominate the market and for good reason."
    },
    {
      "heading": "Market Share",
      "text": "WordPress powers over 40% of all websites worldwide. This huge share makes it the clear leader among CMS tools and shows the trust millions of users place in the platform."
    },
    {
      "heading": "Ease of Use",
      "text": "One of the biggest reasons behind WordPress’s popularity is its beginner-friendly interface. Even non-technical users can build a professional website without coding knowledge. The dashboard is simple, and most tasks like publishing a blog post or updating a page can be done in just a few clicks."
    },
    {
      "heading": "Flexibility & Customization",
      "text": "With thousands of themes and plugins, WordPress can power any type of site: blogs, business websites, e-commerce stores, portfolios, forums, membership platforms, and more. You’re never locked into a single style or function WordPress can grow with your needs."
    },
    {
      "heading": "Plugins: Endless Functionality",
      "text": "One of WordPress’s biggest strengths is its plugin ecosystem. Plugins are add-ons that extend WordPress’s core functionality. Examples include WooCommerce for online stores, WPForms for contact forms, Yoast SEO or Rank Math for search optimization, and WP Rocket for improving site speed. With over 60,000 free plugins (plus thousands of premium ones), WordPress can adapt to almost any requirement without custom coding."
    },
    {
      "heading": "Open Source & Community Support",
      "text": "WordPress is free and open-source, supported by a massive global community of developers, designers, and contributors. This means regular updates, constant improvements, and plenty of tutorials, guides, and forums to troubleshoot any issue."
    },
    {
      "heading": "SEO Friendly",
      "text": "WordPress is built with SEO in mind, giving websites a better chance of ranking on Google and other search engines. With clean code and SEO plugins, optimizing content becomes simple and effective."
    },
    {
      "heading": "Scalability",
      "text": "From small blogs to enterprise-level websites, WordPress scales easily with the right hosting and setup. Many high-traffic websites across the globe rely on WordPress without issues."
    },
    {
      "heading": "Final Thoughts",
      "text": "While other platforms like Joomla, Drupal, Shopify, and Wix have their own strengths, WordPress remains the most famous CMS because of its simplicity, flexibility, and powerful plugin ecosystem. Whether you are a beginner starting your first blog or an experienced developer building a large-scale project, WordPress provides everything you need to build and grow a successful website."
    }
  ]
  }
];

function MyBlog() {
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleExpand = (id) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="blog-section">
      {blogPosts.map((post) => {
        const isExpanded = expandedPosts[post.id];

        return (
          <article key={post.id} className="blog-post">
            <h2>{post.title}</h2>

            {isExpanded ? (
              // Handle string vs object content
              Array.isArray(post.content) &&
              post.content.map((item, idx) =>
                typeof item === "string" ? (
                  <p key={idx}>{item}</p>
                ) : (
                  <div key={idx}>
                    <h3>{item.heading}</h3>
                    <p>{item.text}</p>
                  </div>
                )
              )
            ) : (
              // Show preview
              <p>
                {typeof post.content[0] === "string"
                  ? post.content[0].slice(0, 200)
                  : post.content[0].text.slice(0, 200)}
                ...
              </p>
            )}

            <button
              className="read-more-btn"
              onClick={() => toggleExpand(post.id)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </article>
        );
      })}
    </section>
  );
}

export default MyBlog;
