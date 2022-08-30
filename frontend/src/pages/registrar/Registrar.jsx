import React from 'react'
import './registrar.css'

const Registrar = () => {
  return (
    <section className="registrar">
        <div className="center">
            <form method='POST'>
                <ul>
                    <li>
                        <label>Username*</label>
                        <input type="text" id="username" />
                    </li>

                    <li>
                        <label>Place*</label>
                        <input type="text" id="place" />
                    </li>

                    <li>
                        <label>Review*</label>
                        <input type="text" id="review" />
                    </li>

                    <li>
                        <label>Rating*</label>
                        <input type="text" id="rating" />
                    </li>

                    <li>
                        <label>Information*</label>
                        <input type="text" id="info" />
                    </li>

                    <li>
                        <p>* - Important</p>
                        <button type="submit">Save Pin</button>
                    </li>
                </ul>
            </form>
        </div>
    </section>
  )
}

export default Registrar