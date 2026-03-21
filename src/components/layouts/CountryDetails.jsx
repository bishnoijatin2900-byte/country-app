import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../ui/Loader";
import { useTransition } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState();

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(params.id);
            console.log(res);

            setCountry(res.data[0]);

        });
    }, [params.id]);

   if (!country) return <Loader />;

    console.log(params);

    return (
        <section className="card country-details-card container">
            <div className="container-card bg-white-box container">
                {country?.flags && (
                    <div className="country-image grid grid-two-cols">
                        <img
                            src={country.flags.svg}
                            alt={country.flags.alt}
                            className="flag"
                        />
                        <div className="country-content">
                            <p className="card-title"> {country.name.official} </p>

                            <div className="infoContainer">
                                <p className="info-description">
                                    <span className="card-description"> Native Names:</span>
                                   { country?.name?.nativeName &&
                                    Object.keys(country.name.nativeName)
                                        .map((key) => country.name.nativeName[key].common)
                                        .join(", ")}
                                </p>
                                <p className="info-description">
                                    <span className="card-description"> Population: </span>
                                    {country.population}
                                </p>
                                <p className="info-description">
                                    <span className="card-description"> Region:</span>
                                    {country.region}
                                </p>
                                <p className="info-description">
                                    <span className="card-description"> Sub Region:</span>
                                    {country.subregion}
                                </p>
                                <p className="info-description">
                                    <span className="card-description"> Capital:</span>
                                    {country.capital}
                                </p>

                                <p className="info-description">
                                    <span className="card-description">Top Level Domain:</span>
                                    {country.tld[0]}
                                </p>
                   
                            </div>
                        </div>
                    </div>
                )}
                <div className="country-card-backBtn">
                    <NavLink to="/country" className="backBtn">
                        <button className="buton-detail">Go Back</button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
};