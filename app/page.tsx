"use client";

import { useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState("");
  return (
    <main className="page">
      <section className="hero">
        <div className="heroOverlay">
          <img
            src="/doubleshiftlogo.jpg"
            alt="Double Shift Automation Logo"
            className="logo"
          />

          <p className="eyebrow">Locally Owned • Industrial Focused</p>

          <h1>Double Shift Automation</h1>

          <h2>Stop Downtime Before It Stops You</h2>

          <p className="heroText">
            Fast, reliable industrial automation parts and repairs for PLCs,
            motors, drives, and hard-to-find components.
          </p>

          <div className="heroButtons">
            <a href="#contact" className="primaryButton">
              Request a Quote
            </a>
            <a href="tel:6615731077" className="secondaryButton">
              Call Parts
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="sectionLabel">What We Offer</p>
        <h2>Industrial Support That Moves Fast</h2>

        <div className="cards">
          <div className="card">
            <span>⚡</span>
            <h3>Same-Day Response</h3>
            <p>Quick communication when your equipment goes down.</p>
          </div>

          <div className="card">
            <span>⚙️</span>
            <h3>Fast Turnaround</h3>
            <p>Repair and sourcing support built around minimizing downtime.</p>
          </div>

          <div className="card">
            <span>🛠</span>
            <h3>Certified Repairs</h3>
            <p>Reliable repair solutions for industrial automation equipment.</p>
          </div>

          <div className="card">
            <span>📦</span>
            <h3>Hard-to-Find Parts</h3>
            <p>We help source discontinued and difficult industrial parts.</p>
          </div>
        </div>
      </section>

      <section className="problemSection">
        <div>
          <p className="sectionLabel dark">Emergency Support</p>
          <h2>Broken PLC? Motor Down? Drive Failure?</h2>
          <p>We get you running — fast.</p>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="sectionLabel">Why Choose Us</p>
          <h2>Repairs You Can Count On</h2>
          <p className="bodyText">
            We focus on getting industrial operations back online with dependable
            service, responsive communication, and repair options that help
            reduce replacement costs.
          </p>
        </div>

        <div className="benefits">
          <div>✔ 24-Month Warranty</div>
          <div>✔ Save 30–40%</div>
          <div>✔ Free Diagnostic Evaluation</div>
          <div>✔ Emergency Service Available</div>
        </div>
      </section>

      <section className="brands">
        <p className="sectionLabel">Parts & Repairs</p>
        <h2>Supporting Major Industrial Brands</h2>
        <p>
          Allen-Bradley, Siemens, SICK, SKF, Baldor, Festo, Square D, Eaton,
          Martin, Turck, and more.
        </p>
      </section>

      <section id="contact" className="contact">
        <div className="contactInner">
          <p className="sectionLabel dark">Contact Us</p>
          <h2>Get Back Up and Running</h2>
          <p className="contactIntro">
            Need a quote, repair, or hard-to-find part? Reach out and our team will help you get moving.
          </p>

          <div className="contactGrid">
            <div className="contactCard">
              <span className="contactIcon">📍</span>
              <h3>Visit Us</h3>
              <p>
                33 South Real Rd Suite 18<br />
                Bakersfield, CA 93309
              </p>
            </div>

            <div className="contactCard">
              <span className="contactIcon">📞</span>
              <h3>Sales</h3>
              <a href="mailto:fabby@doubleshiftautomated.com">
                fabby@doubleshiftautomated.com
              </a>
              <a href="tel:6615731077">661-573-1077</a>
            </div>

            <div className="contactCard">
              <span className="contactIcon">🛠️</span>
              <h3>Service</h3>
              <a href="mailto:purchasing@doubleshiftautomated.com">
                purchasing@doubleshiftautomated.com
              </a>
              <a href="tel:6615957975">661-595-7975</a>
            </div>

            <div className="contactCard">
              <span className="contactIcon">🧾</span>
              <h3>Accounting</h3>
              <a href="mailto:accounting@doubleshiftautomated.com">
                accounting@doubleshiftautomated.com
              </a>
            </div>
          </div>

          <form
            className="contactForm"
            onSubmit={async (e) => {
              e.preventDefault();
              setFormStatus("Sending...");

              const formData = new FormData(e.currentTarget);

              const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: formData.get("name"),
                  email: formData.get("email"),
                  phone: formData.get("phone"),
                  company: formData.get("company"),
                  message: formData.get("message"),
                }),
              });

              if (response.ok) {
                setFormStatus("Thank you! Your message has been sent.");
                e.currentTarget.reset();
              } else {
                setFormStatus("Something went wrong. Please call us directly.");
              }
            }}
          >
            <h3>Send Us Your Info</h3>

            <div className="formGrid">
              <input name="name" placeholder="Your Name" required />
              <input name="email" type="email" placeholder="Email Address" required />
              <input name="phone" placeholder="Phone Number" required />
              <input name="company" placeholder="Company Name" />
            </div>

            <textarea name="message" placeholder="What can we help you with?" />

            <button type="submit">Submit Request</button>

            {formStatus && <p className="formStatus">{formStatus}</p>}
          </form>
        </div>
      </section>

      <div className="disclaimerBubble">
        We are not direct distributors
      </div>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        .disclaimerBubble {
          position: fixed;
          left: 18px;
          bottom: 18px;
          z-index: 9999;
          max-width: 260px;
          padding: 12px 16px;
          border-radius: 999px;
          background: #111827;
          color: #facc15;
          border: 1px solid rgba(250, 204, 21, 0.45);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.28);
          font-size: 0.85rem;
          font-weight: 800;
          text-align: center;
        }

        @media (max-width: 560px) {
          .disclaimerBubble {
            left: 12px;
            bottom: 12px;
            max-width: calc(100vw - 24px);
            font-size: 0.75rem;
            padding: 10px 13px;
          }
        }

        .page {
          min-height: 100vh;
          font-family: Arial, Helvetica, sans-serif;
          color: #111827;
          background: #f8fafc;
        }

        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 32px 18px;
          background:
            radial-gradient(circle at top, rgba(250, 204, 21, 0.18), transparent 35%),
            linear-gradient(135deg, #050505, #111827 55%, #1f2937);
          color: white;
        }

        .heroOverlay {
          width: 100%;
          max-width: 1050px;
          padding: 48px 22px;
        }

        .logo {
          width: clamp(180px, 28vw, 300px);
          max-width: 90%;
          display: block;
          margin: 0 auto 28px auto;
          border-radius: 18px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
        }

        .eyebrow,
        .sectionLabel {
          margin: 0 0 14px;
          color: #ca8a04;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.8rem;
        }

        .sectionLabel.dark {
          color: #facc15;
        }

        h1 {
          margin: 0;
          color: #facc15;
          font-size: clamp(2.4rem, 7vw, 5.5rem);
          line-height: 0.95;
          text-transform: uppercase;
          letter-spacing: -0.04em;
        }

        .hero h2 {
          margin: 24px auto 0;
          max-width: 900px;
          font-size: clamp(1.5rem, 4vw, 3rem);
          text-transform: uppercase;
          line-height: 1.05;
        }

        .heroText {
          max-width: 720px;
          margin: 22px auto 0;
          color: #d1d5db;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          line-height: 1.7;
        }

        .heroButtons {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .primaryButton,
        .secondaryButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 14px 24px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .primaryButton {
          background: #facc15;
          color: #111827;
          box-shadow: 0 12px 30px rgba(250, 204, 21, 0.25);
        }

        .secondaryButton {
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          background: rgba(255, 255, 255, 0.08);
        }

        .primaryButton:hover,
        .secondaryButton:hover {
          transform: translateY(-2px);
        }

        .section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 80px 20px;
          text-align: center;
        }

        .section h2,
        .brands h2,
        .contact h2,
        .problemSection h2 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.3rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 42px;
        }

        .card {
          padding: 30px 22px;
          border-radius: 24px;
          background: white;
          border: 1px solid #e5e7eb;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
          text-align: left;
        }

        .card span {
          font-size: 2rem;
        }

        .card h3 {
          margin: 18px 0 10px;
          font-size: 1.2rem;
        }

        .card p,
        .bodyText,
        .brands p,
        .contact p {
          color: #4b5563;
          line-height: 1.7;
        }

        .problemSection {
          padding: 80px 20px;
          text-align: center;
          color: white;
          background:
            linear-gradient(rgba(17, 24, 39, 0.86), rgba(17, 24, 39, 0.86)),
            repeating-linear-gradient(
              45deg,
              #111827 0px,
              #111827 10px,
              #1f2937 10px,
              #1f2937 20px
            );
        }

        .problemSection p:last-child {
          margin-top: 18px;
          color: #facc15;
          font-size: clamp(1.2rem, 3vw, 2rem);
          font-weight: 900;
          text-transform: uppercase;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 42px;
          align-items: center;
          text-align: left;
        }

        .bodyText {
          font-size: 1.08rem;
          max-width: 600px;
        }

        .benefits {
          display: grid;
          gap: 14px;
        }

        .benefits div {
          padding: 20px 22px;
          border-radius: 18px;
          background: #111827;
          color: white;
          font-weight: 800;
          box-shadow: 0 14px 35px rgba(15, 23, 42, 0.12);
        }

        .brands {
          padding: 80px 20px;
          text-align: center;
          background: #facc15;
          color: #111827;
        }

        .brands p {
          max-width: 820px;
          margin: 20px auto 0;
          color: #1f2937;
          font-weight: 700;
        }

        .contact {
          padding: 90px 20px;
          background:
            radial-gradient(circle at top right, rgba(250, 204, 21, 0.16), transparent 32%),
            linear-gradient(135deg, #050505, #111827);
          color: white;
          text-align: center;
        }

        .contactInner {
          max-width: 1120px;
          margin: 0 auto;
        }

        .contactIntro {
          max-width: 680px;
          margin: 18px auto 0;
          color: #d1d5db;
          line-height: 1.7;
        }

        .contactGrid {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .contactCard {
          min-height: 230px;
          padding: 28px 22px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(250, 204, 21, 0.2);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.22);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .contactIcon {
          font-size: 2rem;
          margin-bottom: 14px;
        }

        .contactCard h3 {
          margin: 0 0 14px;
          color: #facc15;
          font-size: 1.25rem;
        }

        .contactCard p {
          margin: 0;
          color: #d1d5db;
          line-height: 1.7;
        }

        .contactCard a {
          color: #facc15;
          font-weight: 800;
          text-decoration: none;
          overflow-wrap: anywhere;
          margin-top: 8px;
        }

        .contactCard a:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .split,
          .contactGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .split {
            text-align: center;
          }

          .bodyText {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 560px) {
          .hero {
            min-height: auto;
            padding: 28px 14px;
          }

          .heroOverlay {
            padding: 32px 10px;
          }

          .cards {
            grid-template-columns: 1fr;
          }

          .contactGrid {
            grid-template-columns: 1fr;
          }

          .contactCard {
            min-height: auto;
          }

          .section,
          .problemSection,
          .brands,
          .contact {
            padding: 58px 16px;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
          }

          .card {
            text-align: center;
          }
        }

          .contactForm {
            margin: 48px auto 0;
            max-width: 850px;
            padding: 30px;
            border-radius: 26px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(250, 204, 21, 0.25);
            text-align: left;
          }

          .contactForm h3 {
            margin: 0 0 22px;
            color: #facc15;
            font-size: 1.6rem;
            text-align: center;
          }

          .formGrid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .contactForm input,
          .contactForm textarea {
            width: 100%;
            padding: 14px 16px;
            border-radius: 14px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            background: rgba(255, 255, 255, 0.95);
            color: #111827;
            font-size: 1rem;
          }

          .contactForm textarea {
            min-height: 130px;
            margin-top: 14px;
            resize: vertical;
          }

          .contactForm button {
            width: 100%;
            margin-top: 18px;
            padding: 15px 20px;
            border: none;
            border-radius: 999px;
            background: #facc15;
            color: #111827;
            font-weight: 900;
            cursor: pointer;
          }

          .formStatus {
            margin-top: 14px;
            text-align: center;
            color: #facc15;
            font-weight: 800;
          }

          @media (max-width: 560px) {
            .formGrid {
              grid-template-columns: 1fr;
            }

            .contactForm {
              padding: 22px;
            }
          }
      `}</style>
    </main>
  );
}