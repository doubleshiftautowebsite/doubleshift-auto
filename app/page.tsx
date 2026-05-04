export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#111" }}>
      
      {/* HERO SECTION */}
      
      <section style={{
        background: "#111",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <img
          src="/doubleshiftlogo.jpg"
          alt="Double Shift Automation Logo"
          style={{
            width: "220px",
            maxWidth: "80%",
            marginBottom: "24px",
          }}
        />

        <h1 style={{ fontSize: "48px", color: "#facc15" }}>
          DOUBLE SHIFT AUTOMATION
        </h1>
        <h2 style={{ marginTop: "20px", fontSize: "28px" }}>
          STOP DOWNTIME BEFORE IT STOPS YOU
        </h2>
        <p style={{ marginTop: "15px", color: "#ccc" }}>
          Fast. Reliable. Industrial Automation Parts & Repairs.
        </p>

        <button style={{
          marginTop: "30px",
          padding: "15px 30px",
          background: "#facc15",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Request a Quote
        </button>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px" }}>What We Offer</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}>
          <div>⚡ Same-Day Response</div>
          <div>⚙️ Fast Turnaround</div>
          <div>🛠 Certified Repairs</div>
          <div>📦 Hard-to-Find Parts</div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section style={{
        background: "#1f2937",
        color: "white",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "32px", color: "#facc15" }}>
          Broken PLC? Motor Down? Drive Failure?
        </h2>
        <p style={{ marginTop: "20px", fontSize: "20px" }}>
          We get you running — FAST
        </p>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px" }}>
          Repairs You Can Count On
        </h2>

        <ul style={{
          marginTop: "30px",
          maxWidth: "600px",
          marginInline: "auto",
          lineHeight: "2"
        }}>
          <li>✔ 24-Month Warranty</li>
          <li>✔ Save 30–40%</li>
          <li>✔ Free Diagnostic Evaluation</li>
          <li>✔ Emergency Service Available</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section style={{
        background: "#111",
        color: "white",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "28px", color: "#facc15" }}>
          Contact Us
        </h2>

        <p style={{ marginTop: "20px" }}>
          33 South Real Rd Suite 18, Bakersfield CA 93309
        </p>
        <p>Parts: 661-573-1077</p>
        <p>Office: 661-595-7975</p>
      </section>

    </main>
  );
}