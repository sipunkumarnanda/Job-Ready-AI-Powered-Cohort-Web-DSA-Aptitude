

// App.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import PaymentButton from "./PaymentButton";

const FALLBACK = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  description:
    "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
  price: 9.99,
  brand: "Essence",
  sku: "BEA-ESS-ESS-001",
  stock: 99,
  images: [
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
  ],
  thumbnail:
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  reviews: [
    { rating: 3, comment: "Would not recommend!" },
    { rating: 4, comment: "Very satisfied!" },
    { rating: 5, comment: "Highly impressed!" },
  ],
};

function formatPrice(amount, currency = "INR") {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount}`;
  }
}

export default function App() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buying, setBuying] = useState(false);
  const [qty, setQty] = useState(1);
  const [showReviews, setShowReviews] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    axios
      .get("https://dummyjson.com/products/10")
      .then((res) => {
        if (!mounted) return;
        // adapt shape: some fields in your payload use "price" directly as a number
        setProduct({ ...res.data });
      })
      .catch((err) => {
        console.warn("Fetch failed, using fallback:", err);
        if (!mounted) return;
        setError("Could not fetch product — showing sample product.");
        setProduct(FALLBACK);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handleBuyNow = async () => {
    if (!product || product.stock <= 0) {
      alert("Product unavailable.");
      return;
    }
    setBuying(true);
    try {
      // Simulate checkout delay
      await new Promise((r) => setTimeout(r, 800));
      alert(
        `Purchased ${qty} × "${product.title}" — ${formatPrice(
          product.price * qty
        )}\n(Thanks!)`
      );
    } catch {
      alert("Checkout failed. Try again.");
    } finally {
      setBuying(false);
    }
  };

  const mainImage = product?.images?.[0] || product?.thumbnail;

  return (
    <div className="page">
      <header className="header">
        <h1>Product Cart</h1>
      </header>

      <main className="main">
        {loading ? (
          <div className="card skeleton">
            <div className="img" />
            <div className="info">
              <div className="line short" />
              <div className="line" />
              <div className="line medium" />
              <div className="actions">
                <div className="btn placeholder" />
              </div>
            </div>
          </div>
        ) : (
          product && (
            <article className="card product-card" aria-labelledby="p-title">
              <div className="img-wrap">
                <img
                  src={mainImage}
                  alt={product.title}
                  className="product-image"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial, Helvetica, sans-serif' font-size='24'%3EImage not available%3C/text%3E%3C/svg%3E")
                  }
                />
              </div>

              <div className="info">
                <div className="row title-row">
                  <h2 id="p-title" className="title">
                    {product.title}
                  </h2>
                  <div className="price">{formatPrice(product.price)}</div>
                </div>

                <p className="brand">Brand: {product.brand}</p>

                <p className="description">{product.description}</p>

                <div className="meta">
                  <span className="sku">SKU: {product.sku || product.id}</span>
                  <span className={`stock ${product.stock ? "in" : "out"}`}>
                    {product.stock ? `In stock (${product.stock})` : "Out of stock"}
                  </span>
                </div>

                <div className="actions">
                  <div className="qty">
                    <label htmlFor="qty">Qty</label>
                    <input
                      id="qty"
                      type="number"
                      min="1"
                      max={product.stock || 999}
                      value={qty}
                      onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                    />
                  </div>

                  <PaymentButton/>

                  <button
                    className="secondary"
                    onClick={() => {
                      setShowReviews((s) => !s);
                    }}
                  >
                    {showReviews ? "Hide Reviews" : `Reviews (${product.reviews?.length || 0})`}
                  </button>
                </div>

                {error && <p className="error">{error}</p>}

                {showReviews && (
                  <section className="reviews" aria-label="User reviews">
                    {product.reviews && product.reviews.length > 0 ? (
                      product.reviews.map((r, idx) => (
                        <div className="review" key={idx}>
                          <div className="r-head">
                            <strong>{r.reviewerName || `User ${idx + 1}`}</strong>
                            <span className="r-rating">★ {r.rating}</span>
                          </div>
                          <p className="r-comment">{r.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p className="no-reviews">No reviews yet.</p>
                    )}
                  </section>
                )}
              </div>
            </article>
          )
        )}
      </main>

      <footer className="footer">
        <small>Secure checkout · Fast shipping · Easy returns</small>
      </footer>
    </div>
  );
}
