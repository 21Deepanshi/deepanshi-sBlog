import React, { useState } from "react";
import "./myBlog.css";

const blogPosts = [
  {
    id: 1,
    title: "SQL & NoSQL",
    content: [
      "When I came to Calgary, I never imagined that my passion for tech would grow so much. I started with frontend development, focusing on design and user experience. But the more I learned, the more curious I became. I began with HTML, and now I have reached a point where I can connect my web applications to a database.",
      "During my learning journey, I noticed that many people use non-relational databases to build full-stack applications because they are easy to use, schema-flexible, and integrate well with JavaScript, especially in modern stacks like MERN. For example, companies like eBay use MongoDB to manage their data. On the other hand, Instagram, which scaled rapidly in its early days, initially used PostgreSQL to handle its growing database needs.",
      "So the question is, when do we use which database? Every database technology has its strengths, but what matters most are the use cases.",
      "Non-relational databases are known for their scalability (horizontal scaling), as they can distribute data across multiple servers without needing to redefine the schema for each one. In contrast, while sharding can also be done with SQL databases, each new instance must have the same schema applied manually or through replication, making it more rigid compared to NoSQL systems.",
      "So, why choose NoSQL databases? They offer greater flexibility with schema design, better handle unstructured data, and scale more easily across distributed systems, making them ideal for modern applications that need to evolve quickly and manage large volumes of diverse data.",
      "That might suggest that every company should use MongoDB, but many still prefer SQL databases, and for good reason. SQL supports ACID properties, making it ideal for applications that require strong data integrity, such as banking systems, booking platforms, or inventory management. For example, if two users attempt to purchase the last unit of a product, SQL locks the record, allowing only one transaction to succeed and preventing data conflicts.",
      "In contrast, NoSQL databases often follow the BASE model (Basically Available, Soft state, Eventually consistent). Instead of using locks, they rely on versioning to handle updates and avoid conflicts. For instance, if two users read version 1 of a record and one updates it to version 2, the system will reject the second attempt by a user to update version 1, preserving data accuracy without locking mechanisms.",
      "So then, why choose SQL if NoSQL already handles conflicts through BASE? Because BASE trades strict consistency for availability and speed, which can lead to temporary data inconsistency. That is acceptable for systems like social media feeds, analytics platforms, or product catalogs, where eventual consistency is fine. But for critical systems that demand real-time accuracy and strong guarantees, like financial transactions or reservations, the Structured Query Language ACID model ensures that data is always correct, consistent, and reliable, even under high concurrency."
    ],
  }
];

function MyBlog() {
  const [expandedPosts, setExpandedPosts] = useState({});

  // Toggle expanded state for a post by id
  const toggleExpand = (id) => {
    setExpandedPosts(prev => ({
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
              post.content.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
            ) : (
              <p>{post.content[0].slice(0, 200)}...</p>
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

