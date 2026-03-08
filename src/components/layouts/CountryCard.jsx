import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {

    const { flags, name, population, region, capital } = country;
    return (
        <li className="country-card card">
            <div className="flag-box">
                <img src={flags.svg} alt={flags.alt} />

                <div className="countryInfo">
                    <p className="card-title">{name.common.length > 10 ?
                        name.common.slice(0, 18) + "..."
                        : name.common}</p>
                    <p className="card-det">
                        <span className="card-description">Population:</span>
                        {population}
                    </p>
                    <p className="card-det">
                        <span className="card-description">Region:</span>
                        {region}
                    </p>
                    <p className="card-det">
                        <span className="card-description">Capital:</span>
                        {capital}
                    </p>

                    <NavLink to={`/country/${name.common}`}>
                    <button className="buton-detail">Read More</button>
                   </NavLink>
            </div>
        </div>
        </li >
    )
}