
export default function Home() {
  return (
    <main className="home">
      <section className="hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
        <img
          src="https://raw.githubusercontent.com/QOGE/SAOGEN/main/files/images/saogen-logo.png"
          alt="SAOGEN Logo"
          style={{ width: 160, height: 160, marginBottom: 24 }}
        />
        <!-- h1>SAOGEN</h1 -->
        <p>Symbiotic Autonomous Organization built on the QOGE blockchain.</p>
        <p>
          Hyper-optimization, shared intellectual property, and long-term
          posthuman infrastructure.
        </p>
      </section>
    </main>
  );
}
