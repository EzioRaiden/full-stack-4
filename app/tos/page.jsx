export default function TermsOfService() {
  return (
    <div className="bg-light text-default">
      <header className="bg-muted p-8 border-b border-primary text-center">
        <h1 className="text-gradient text-3xl mb-1">Terms of Service</h1>
        <p className="text-medium">
          These are simple guidelines for using this student project website.
        </p>
      </header>

      <main className="p-6 flex flex-col items-center justify-center">
        <div className="max-w-screen-md w-full space-y-6">

          <section className="card border border-primary p-6">
            <h3 className="text-medium mb-2">1. Purpose of This Website</h3>
            <p>
              This website is a personal project built to demonstrate full stack development skills. It is not a commercial product or service.
            </p>
          </section>

          <section className="card border border-primary p-6">
            <h3 className="text-medium mb-2">2. No Guarantees</h3>
            <p>
              The website is provided as-is, without any warranties or guarantees. It may contain bugs, missing features, or go offline without notice.
            </p>
          </section>

          <section className="card border border-primary p-6">
            <h3 className="text-medium mb-2">3. Data Disclaimer</h3>
            <p>
              Any data you enter (like test subscriptions) is not stored permanently or securely. Please avoid entering real personal or financial information.
            </p>
          </section>

          <section className="card border border-primary p-6">
            <h3 className="text-medium mb-2">4. Fair Use</h3>
            <p>
              Feel free to explore, test, and interact with the features. Just don’t intentionally break or misuse the site.
            </p>
          </section>

          <section className="card border border-primary p-6">
            <h3 className="text-medium mb-2">5. Contact</h3>
            <p>
              If something’s broken or confusing, you can contact me at{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&to=sourarghyade@gmail.com"
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                sourarghyade@gmail.com
              </a>.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
