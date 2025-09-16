import React, { useState } from "react";
import "./myBlog.css";

const blogPosts = [
  {
    id: 1,
    title: "SQL & NoSQL",
    content: [
      "When I came to Calgary, I never imagined that my passion for tech would grow so much...",
      "During my learning journey, I noticed that many people use non-relational databases...",
      "So the question is, when do we use which database? Every database technology has its strengths...",
      "Non-relational databases are known for their scalability (horizontal scaling)...",
      "So, why choose NoSQL databases? They offer greater flexibility with schema design...",
      "That might suggest that every company should use MongoDB, but many still prefer SQL databases...",
      "In contrast, NoSQL databases often follow the BASE model (Basically Available, Soft state...)",
      "So then, why choose SQL if NoSQL already handles conflicts through BASE? Because BASE trades strict consistency..."
    ]
  },
  {
    id: 2,
    title: "Why WordPress is the Most Famous CMS",
    content: [
      {
        heading: "Introduction",
        text: "When it comes to building websites, Content Management Systems (CMS) have made it easier..."
      },
      {
        heading: "Market Share",
        text: "WordPress powers over 40% of all websites worldwide..."
      },
      {
        heading: "Ease of Use",
        text: "One of the biggest reasons behind WordPress’s popularity is its beginner-friendly interface..."
      },
      {
        heading: "Flexibility & Customization",
        text: "With thousands of themes and plugins, WordPress can power any type of site..."
      },
      {
        heading: "Plugins: Endless Functionality",
        text: "One of WordPress’s biggest strengths is its plugin ecosystem..."
      },
      {
        heading: "Open Source & Community Support",
        text: "WordPress is free and open-source, supported by a massive global community..."
      },
      {
        heading: "SEO Friendly",
        text: "WordPress is built with SEO in mind..."
      },
      {
        heading: "Scalability",
        text: "From small blogs to enterprise-level websites, WordPress scales easily..."
      },
      {
        heading: "Final Thoughts",
        text: "While other platforms like Joomla, Drupal, Shopify, and Wix have their own strengths..."
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
