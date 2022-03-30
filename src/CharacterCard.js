import './CharacterCard.css';

function CharacterCard() {
    return (
        <div>
            <div className="card">
                <div className='top'>
                    <div className='photo'>
                        <p className='name'>Alex</p>
                        <img src="https://www.stardewvalleywiki.com/mediawiki/images/0/04/Alex.png" alt="image"/>
                    </div>

                    <div className='idInfo'>
                        <p className='town'>Pelican Town</p>
                        <p className='address'>Address: Example123 Street</p>
                        <p className='birthday'> DOB: June 23rd</p>
                    </div>
                </div>

                <div className="bottom">
                    <p>favorites</p>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard;