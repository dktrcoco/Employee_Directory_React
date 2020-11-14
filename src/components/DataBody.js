import React from "react";
import "../styles/DataBody.css";

function DataBody({ users }) {
    // this function takes the date data and formats it to how we want to present it
    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    }

    return (
        <tbody>
            {/* this checks to make sure there is at least one user and they have a name */}
            {users[0] !== undefined && users[0].name !== undefined ? (
                // these 6 attributes are all from the object from the API call
                users.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Image" className="align-middle">
                                <img
                                    src={picture.medium}
                                    alt={"profile image for " + name.first + " " + name.last}
                                    className="img-responsive"
                                />
                            </td>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone" className="align-middle">
                                {phone}
                            </td>
                            <td data-th="Email" className="align-middle">
                                <a href={"mailto: " + email} target="__blank">
                                    {email}
                                </a>
                            </td>
                            <td data-th="DOB" className="align-middle">
                                {formatDate(dob.date)}
                            </td>
                        </tr>
                    );
                })
            ) : ( // right here is a turnary conditional that will return nothing if there is no user
                    <></>
                )}
        </tbody>
    );

}

export default DataBody;