import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEarthAmericas } from "react-icons/fa6";
import "./CSS/WP.css";
import WPService from "../../Services/Services/WP/WP.service.js";
import PIC2 from "./Images/pic.webp";

const mockPosts = [  {
    id: 1,
    featuredImage: PIC2,
    title: {
    rendered: "Caps & T-Shirts Coming Soon",
    },
    excerpt: {
      rendered:
      "New info_center_template snapbacks and premium tees are dropping soon. Stay tuned 🔥",
    },
    createdAt: "2026-05-27T18:30:00",
  },
];

const WallTabs = () => {
  
  const [posts, setPosts] = useState(mockPosts);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
   // fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await WPService.getWP({   page,   perPage: 12, });
      if (response?.posts?.length) {
        setPosts(response.posts);
        setPagination(response.pagination);
      }
    } catch (err) {
      setError(   err.message ||  "Failed to fetch posts." );
    } finally {
      setLoading(false);
    }
  };

  const seo = {
    title: "info_center_template News",
    description: "Less algorithm nonsense. Discover more 🔥",
    url: "https://www.info_center_template.com/info",
  };

  return (
    <section>
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
    </Helmet>

<div className="WP_container">
  <div className="WP_header">
    <div>
        <h1 className="welcome_posts_h1">
    <FaEarthAmericas /> LATEST info_center_template News</h1>
     {/* <p>Find the latest info_center_template news, updates and announcements</p>*/}
    </div>
  </div>

  {loading && <div className="WP_loading">Loading...</div>}

  {error && <div className="WP_error">{error}</div>}

  {!loading && !error && (
    <>
<div className="WP_grid">
  {posts.map((post) => (
    <article
      key={post.id}
      className="WP_card"
    >
      {post.featuredImage && (
        <img
  loading="lazy"
  decoding="async"
          src={post.featuredImage}
          alt={post.title?.rendered}
          className="WP_image"
        />
      )}

      <div className="WP_content">

        <span className="WP_date">
          {new Date(
            post.createdAt
          ).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>

        <h2
          dangerouslySetInnerHTML={{
            __html: post.title?.rendered,
          }}
        />

        <div
          className="WP_excerpt"
          dangerouslySetInnerHTML={{
            __html: post.excerpt?.rendered,
          }}
        />

      </div>
    </article>
  ))}
</div>

      {!!pagination?.totalPages && (
        <div className="WP_pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </button>

          <span>
            {pagination?.currentPage} / {pagination?.totalPages}
          </span>

          <button
            disabled={!pagination?.hasNextPage}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </>
  )}
</div>
    </section>
  );
};

export default WallTabs;