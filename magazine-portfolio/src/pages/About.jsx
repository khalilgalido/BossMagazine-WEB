import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <main className="about-page">

      <div className="about-page__hero">
        <p className="section-label">Our Story</p>
        <h1 className="about-page__title">About<br /><em>Boss Magazine Ph</em></h1>
      </div>

      <div className="about-page__content">
        <div className="about-page__main">
          <p className="about-page__lead">
            Boss Magazine Ph is the Philippines' premier lifestyle and business publication — dedicated to celebrating Filipino excellence across entrepreneurship, culture, and society.
          </p>
          <p>
            Founded with a vision to give Filipino achievers a platform they deserve, Boss Magazine Ph has grown into a trusted voice for those who lead, inspire, and innovate. Each issue is a carefully curated collection of stories that reflect the power and prestige of the Filipino spirit.
          </p>
          <p>
            From cover stories featuring the country's most influential names to deep-dive features on emerging industries, Boss Magazine Ph is where ambition meets artistry.
          </p>

          <div className="about-page__actions">
            <Link to="/magazines" className="btn-primary">Browse Issues</Link>
            <Link to="/articles" className="btn-ghost">Read Articles <span>→</span></Link>
          </div>
        </div>

        <div className="about-page__sidebar">
          <div className="about-page__logo-block">
            <img src="/logo.png" alt="Boss Magazine Ph" />
          </div>
          <div className="about-page__facts">
            {[
              { num: '10+', label: 'Years in Print' },
              { num: '48+', label: 'Issues' },
              { num: '200+', label: 'Articles' },
            ].map(({ num, label }) => (
              <div key={label} className="about-page__fact">
                <span className="about-page__fact-num">{num}</span>
                <span className="about-page__fact-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  )
}
