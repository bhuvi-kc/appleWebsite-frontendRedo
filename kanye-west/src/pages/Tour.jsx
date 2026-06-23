import { Link } from 'react-router-dom'

function Tour() {
  const today = new Date()

  const shows = [
    { date: '2026-06-26', city: 'Tampa, FL', venue: 'Raymond James Stadium', url: 'https://www.ticketmaster.com/ye-tickets/artist/885590' },
    { date: '2026-06-28', city: 'Tampa, FL', venue: 'Raymond James Stadium', url: 'https://www.ticketmaster.com/ye-tickets/artist/885590' },
    { date: '2026-07-04', city: 'San Antonio, TX', venue: 'Alamodome', url: 'https://www.ticketmaster.com/ye-tickets/artist/885590' },
    { date: '2026-07-11', city: 'Tirana, Albania', venue: 'Air Albania Stadium', url: 'https://www.ticketmaster.com/ye-tickets/artist/885590' },
    { date: '2026-07-18', city: 'Reggio Emilia, Italy', venue: 'RCF Arena', url: 'https://www.ticketmaster.com/ye-tickets/artist/885590' },
    { date: '2026-07-30', city: 'Madrid, Spain', venue: 'TBA', url: 'https://www.ticketmaster.com/ye-tickets/artist/885590' },
    { date: '2026-09-03', city: 'Chicago, IL', venue: 'Soldier Field', url: 'https://www.ticketmaster.com/ye-tickets/artist/885590' },
    { date: '2026-09-04', city: 'Chicago, IL', venue: 'Soldier Field', url: 'https://www.ticketmaster.com/ye-tickets/artist/885590' },
  ]

  const upcoming = shows.filter(show => new Date(show.date) >= today)

  return (
    <div className="tour-page">
      <h2 className="page-title">Tour Dates</h2>
      {upcoming.length === 0
        ? <p className="no-shows">No upcoming shows at this time.</p>
        : <div className="tour-list">
            {upcoming.map((show, i) => (
              <div className="tour-row" key={i}>
                <span className="tour-date">{show.date}</span>
                <div className="tour-info">
                  <p className="tour-city">{show.city}</p>
                  <p className="tour-venue">{show.venue}</p>
                </div>
                <a href={show.url} target="_blank" className="tour-btn">Tickets</a>
              </div>
            ))}
          </div>
      }
    </div>
  )
}

export default Tour