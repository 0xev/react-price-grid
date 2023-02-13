function App() {
  return (
    <div>
      <section className="card">
        <section className="heading">
          <h1>Join our community</h1>
          <h3>30-day, hassle-free money back guarantee</h3>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </section>
        <section className="grid-container">
          <section className="monthly-subscription">
            <h3>Monthly Subscription</h3>
            <section className="flex-container">
              <h2>$29</h2>
              <p>per month</p>
            </section>
            <p className="access">Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </section>
          <section className="why-us">
            <h3>Why Us</h3>
            <ul>
              <li>
                <p>Tutorials by industry experts</p>
              </li>
              <li>
                <p>Peer & expert code review</p>
              </li>
              <li>
                <p>Coding exercises</p>
              </li>
              <li>
                <p>Access to our GitHub repos</p>
              </li>
              <li>
                <p>Community forum</p>
              </li>
              <li>
                <p>Flashcard decks</p>
              </li>
              <li>
                <p>New videos every week</p>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
