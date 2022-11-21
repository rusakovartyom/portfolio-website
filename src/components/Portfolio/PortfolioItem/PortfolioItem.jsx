const PortfolioItem = ({ title, imgURL, imgAlt, stack, link }) => {
    return (
        <div>
            <img src={ imgURL } alt={ imgAlt } />
            <div>
                <h3>{ title }</h3>
                <p>
                    { stack.map(item => (
                        <span>
                            { item }
                        </span>
                    )) }
                </p>
            </div>
        </div >
    );
};
export default PortfolioItem;