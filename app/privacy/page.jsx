export default function PrivacyPage() {
  return (
    <div className="bg-light text-default">
      <header className="bg-muted p-8 border-b border-primary text-center">
        <h1 className="text-gradient text-3xl mb-1">Privacy Policy</h1>
        <p className="text-medium">We care about your privacy. Here's how we handle your data:</p>
      </header>

      <main className="p-6 flex flex-col items-center justify-center">
        <div className="max-w-screen-md w-full space-y-6">

          <section className="card border border-primary p-6">
            <h3 className="text-medium mb-2">1. Information We Collect</h3>
            <p>This subscription tracker does <strong>not collect personal information</strong> like your name, address, or payment info. All data you enter is for your use only.</p>
          </section>

          <section className="card border border-primary p-6">
            <h3 className="text-medium mb-2">2. Data Usage</h3>
            <p>Your input is stored securely and used only for this app. We don’t sell or share your data.</p>
          </section>

          <section className="card border border-primary p-6">
            <h3 className="text-medium mb-2">3. Cookies & Analytics</h3>
            <p>We don’t use cookies or analytics. No tracking, period.</p>
          </section>

          <section className="card border border-primary p-6">
            <h3 className="text-medium mb-2">4. Data Storage</h3>
            <p>Your data stays with you. You can delete your account/data anytime.</p>
          </section>

          <section className="card border border-primary p-6">
            <h3 className="text-medium mb-2">5. Contact</h3>
            <p>
              Have questions? <a
                href="https://mail.google.com/mail/?view=cm&to=sourarghyade@gmail.com"
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >Email us</a>
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
